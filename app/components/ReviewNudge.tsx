"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_CHANGE_EVENT,
  COOKIE_CONSENT_STORAGE_KEY,
} from "./CookieConsent";
import { reviewRequestPath } from "../seo";

/**
 * Invitation discrète à laisser un avis Google.
 *
 * Ce n'est pas un modal d'ouverture : Google pénalise les interstitiels
 * intrusifs sur mobile, et un visiteur qui arrive sur le site cherche d'abord
 * un numéro, un horaire ou un itinéraire. La carte apparaît donc :
 *
 * - seulement après que le visiteur a répondu au bandeau cookies (jamais deux
 *   bandeaux superposés à l'ouverture) ;
 * - après un temps de lecture, ou plus tôt s'il a parcouru la moitié de la
 *   page — signe qu'il n'est pas de passage ;
 * - jamais sur la page `/avis` elle-même, ni pendant 30 jours après « Plus
 *   tard », ni pendant 90 jours après un clic vers l'avis ;
 * - au-dessus de la barre d'actions mobile, sans jamais la couvrir : appel,
 *   WhatsApp et itinéraire restent accessibles.
 *
 * La demande est neutre (adressée à tous, sans tri ni récompense), conforme
 * aux règles Google sur les avis. Le rendu serveur est vide : aucun écart
 * d'hydratation, aucun flash chez ceux qui ont déjà répondu.
 */

export type ReviewNudgeLabels = {
  regionAriaLabel: string;
  title: string;
  body: string;
  cta: string;
  later: string;
  close: string;
};

export const frReviewNudgeLabels: ReviewNudgeLabels = {
  regionAriaLabel: "Invitation à laisser un avis",
  title: "Déjà venu au cabinet ?",
  body: "Votre avis Google aide d’autres patients de Témara à trouver le cabinet. Une minute suffit.",
  cta: "Laisser un avis",
  later: "Plus tard",
  close: "Fermer",
};

/* Clé de stockage local : horodatage du dernier « Plus tard » ou clic. */
const STORAGE_KEY = "drsonia-review-nudge";
/* Délai de lecture avant apparition, quand le visiteur ne défile pas. */
const DELAY_MS = 18_000;
/* Part de la page parcourue qui déclenche l'apparition plus tôt. */
const SCROLL_TRIGGER = 0.5;
const DAY_MS = 24 * 60 * 60 * 1000;
const SNOOZE_LATER_DAYS = 30;
const SNOOZE_CLICKED_DAYS = 90;

function readSnoozedUntil(): number {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const until = raw ? Number(raw) : 0;
    return Number.isFinite(until) ? until : 0;
  } catch {
    return 0;
  }
}

function snooze(days: number) {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now() + days * DAY_MS));
  } catch {
    /* Stockage indisponible : la carte ne reviendra pas sur cette page. */
  }
}

function consentDecided(): boolean {
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    return raw === "granted" || raw === "denied";
  } catch {
    /* Sans stockage, le bandeau cookies ne persiste pas non plus : on
       n'attend pas indéfiniment. */
    return true;
  }
}

type ReviewNudgeProps = {
  labels?: ReviewNudgeLabels;
  lang?: "fr" | "ar";
  /** Page d'atterrissage (`/avis` ou `/ar/avis`). */
  href?: string;
};

export function ReviewNudge({
  labels = frReviewNudgeLabels,
  lang = "fr",
  href = reviewRequestPath,
}: ReviewNudgeProps) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const onLandingPage =
    pathname === href || pathname === `${href}/` || pathname.endsWith(reviewRequestPath);

  useEffect(() => {
    if (onLandingPage || readSnoozedUntil() > Date.now()) return;

    let timer: number | undefined;
    let armed = false;

    const show = () => setVisible(true);

    const onScroll = () => {
      const doc = document.documentElement;
      const travelled = window.scrollY + window.innerHeight;
      if (travelled >= doc.scrollHeight * SCROLL_TRIGGER) {
        window.removeEventListener("scroll", onScroll);
        show();
      }
    };

    const arm = () => {
      if (armed) return;
      armed = true;
      timer = window.setTimeout(show, DELAY_MS);
      window.addEventListener("scroll", onScroll, { passive: true });
    };

    const onConsentChange = () => {
      if (consentDecided()) arm();
    };

    if (consentDecided()) {
      arm();
    } else {
      window.addEventListener(COOKIE_CONSENT_CHANGE_EVENT, onConsentChange);
    }

    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener(COOKIE_CONSENT_CHANGE_EVENT, onConsentChange);
    };
  }, [onLandingPage]);

  if (!visible || dismissed || onLandingPage) return null;

  const isArabic = lang === "ar";

  const later = () => {
    snooze(SNOOZE_LATER_DAYS);
    setDismissed(true);
  };

  const clicked = () => {
    snooze(SNOOZE_CLICKED_DAYS);
    setDismissed(true);
  };

  return (
    <div
      className={`review-nudge${isArabic ? " review-nudge-ar" : ""}`}
      lang={isArabic ? "ar" : undefined}
      dir={isArabic ? "rtl" : undefined}
    >
      <section
        className="review-nudge-card"
        role="region"
        aria-label={labels.regionAriaLabel}
        aria-live="polite"
      >
        <button
          type="button"
          className="review-nudge-close"
          onClick={later}
          aria-label={labels.close}
        >
          <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
            <path
              d="M5 5l10 10M15 5L5 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
        <span className="review-nudge-stars" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="26" height="26">
            <path
              d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5l-5.9 3.1 1.2-6.5L2.5 9.5l6.6-.9z"
              fill="currentColor"
            />
          </svg>
        </span>
        <div className="review-nudge-text">
          <h2>{labels.title}</h2>
          <p>{labels.body}</p>
        </div>
        <div className="review-nudge-actions">
          <Link className="primary-button review-nudge-button" href={href} onClick={clicked}>
            {labels.cta}
          </Link>
          <button
            type="button"
            className="review-nudge-later"
            onClick={later}
          >
            {labels.later}
          </button>
        </div>
      </section>
    </div>
  );
}
