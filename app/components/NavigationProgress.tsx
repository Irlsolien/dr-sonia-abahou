"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Barre fine de progression affichée pendant les transitions de page.
 *
 * Fonctionnement : un clic sur un lien interne (même origine, chemin
 * différent) démarre une progression simulée ; le changement effectif de
 * `pathname` (mis à jour par `usePathname` une fois le nouveau segment monté
 * côté client) déclenche la complétion. Aucune dépendance : un seul
 * écouteur de clic léger (pas de mousemove) et quelques `setTimeout`. Les
 * liens externes (tel:, wa.me, Google Maps, http externe) ne déclenchent
 * jamais la barre — elle ne doit jamais retarder ces clics.
 */

const START_PERCENT = 20;
const MAX_AUTO_PERCENT = 88;
const STEP_INTERVAL_MS = 220;
const FINISH_FADE_MS = 220;
// Filet de sécurité si la navigation n'aboutit pas (lien mort, même page).
const SAFETY_TIMEOUT_MS = 4000;

function resolveNavigableUrl(anchor: HTMLAnchorElement): URL | null {
  if (anchor.target && anchor.target !== "_self") {
    return null;
  }

  if (anchor.hasAttribute("download")) {
    return null;
  }

  let url: URL;

  try {
    url = new URL(anchor.href, window.location.href);
  } catch {
    return null;
  }

  // Origine différente : couvre aussi tel:, mailto:, wa.me, Google Maps
  // (aucun de ces schémas/domaines ne partage `window.location.origin`).
  if (url.origin !== window.location.origin) {
    return null;
  }

  // Ancre sur la page courante (ex. nav de la page d'accueil) : pas de
  // changement de route, la barre n'a rien à montrer.
  if (url.pathname === window.location.pathname && url.search === window.location.search) {
    return null;
  }

  return url;
}

export function NavigationProgress() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [percent, setPercent] = useState(0);

  const isLoadingRef = useRef(false);
  const stepTimerRef = useRef<number | null>(null);
  const finishTimerRef = useRef<number | null>(null);
  const safetyTimerRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  const clearTimers = useCallback(() => {
    if (stepTimerRef.current !== null) {
      window.clearInterval(stepTimerRef.current);
      stepTimerRef.current = null;
    }
    if (finishTimerRef.current !== null) {
      window.clearTimeout(finishTimerRef.current);
      finishTimerRef.current = null;
    }
    if (safetyTimerRef.current !== null) {
      window.clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = null;
    }
  }, []);

  const finish = useCallback(() => {
    if (!isLoadingRef.current) {
      return;
    }
    isLoadingRef.current = false;
    clearTimers();
    setPercent(100);
    finishTimerRef.current = window.setTimeout(() => {
      setVisible(false);
      setPercent(0);
    }, FINISH_FADE_MS);
  }, [clearTimers]);

  const start = useCallback(() => {
    if (isLoadingRef.current) {
      return;
    }
    isLoadingRef.current = true;
    clearTimers();
    setVisible(true);

    if (reducedMotionRef.current) {
      // Pas de simulation animée : simple apparition, complétion rapide.
      setPercent(MAX_AUTO_PERCENT);
    } else {
      setPercent(START_PERCENT);
      // `setInterval` (et non un `setTimeout` qui se replanifie lui-même) :
      // évite toute auto-référence d'une fonction encore en cours de
      // déclaration, un seul minuteur à faire vivre et à nettoyer.
      stepTimerRef.current = window.setInterval(() => {
        setPercent((current) => {
          const remaining = MAX_AUTO_PERCENT - current;
          if (remaining <= 0.5) {
            if (stepTimerRef.current !== null) {
              window.clearInterval(stepTimerRef.current);
              stepTimerRef.current = null;
            }
            return current;
          }
          return Math.min(MAX_AUTO_PERCENT, current + Math.max(1, remaining * 0.18));
        });
      }, STEP_INTERVAL_MS);
    }

    safetyTimerRef.current = window.setTimeout(finish, SAFETY_TIMEOUT_MS);
  }, [clearTimers, finish]);

  // Écouteur de clic unique, posé une fois (identité stable de `start`).
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // Clic secondaire/du milieu ou ouverture en nouvel onglet : la page
      // courante ne navigue pas, la barre n'a pas lieu d'être.
      if (event.button !== 0) {
        return;
      }
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a[href]");
      if (!anchor) {
        return;
      }

      // Ne dépend pas de `event.defaultPrevented` : les liens Next `<Link>`
      // appellent déjà `preventDefault()` avant que cet écouteur (bulle,
      // niveau document) ne s'exécute — l'ignorer masquerait la navigation
      // client la plus fréquente du site.
      const url = resolveNavigableUrl(anchor as HTMLAnchorElement);
      if (!url) {
        return;
      }

      start();
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [start]);

  // Le changement effectif de route marque la fin de la navigation en cours.
  useEffect(() => {
    finish();
  }, [pathname, finish]);

  useEffect(() => clearTimers, [clearTimers]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="nav-progress"
      style={{ opacity: percent >= 100 ? 0 : 1 }}
      aria-hidden="true"
    >
      <div className="nav-progress-bar" style={{ width: `${percent}%` }} />
    </div>
  );
}
