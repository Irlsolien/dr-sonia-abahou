"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

/** Abonnement inerte : la valeur ne change qu'entre serveur et client. */
const subscribeToNothing = () => () => {};

type MobileNavProps = {
  /** Préfixe d'ancre : `#` sur l'accueil, `/#` sur les pages internes. */
  anchor: string;
};

const sections = [
  { href: "expertise", label: "Expertise" },
  { href: "soins", label: "Soins" },
  { href: "pratiques", label: "Pratiques" },
  { href: "cabinet", label: "Cabinet" },
  { href: "contact", label: "Contact" },
];

/**
 * Navigation mobile (< 980px) : bouton « Menu » accessible ouvrant un panneau
 * plein écran sobre. Fermeture par le bouton ✕ ou la touche Échap, focus
 * déplacé sur le premier lien à l'ouverture et rendu au bouton à la fermeture.
 * Le panneau est monté uniquement côté client : le header reste rendu au SSR.
 */
export function MobileNav({ anchor }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  // Le panneau est projeté dans <body> : `.site-header` porte un
  // `backdrop-filter`, qui fait de lui le bloc conteneur de ses descendants
  // `position: fixed`. Sans portail, le panneau resterait enfermé dans la
  // barre du header au lieu de couvrir l'écran. Le portail n'est créé qu'une
  // fois l'hydratation faite, `document` n'existant pas au rendu serveur.
  const isMounted = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Focus initial sur le premier lien dès l'ouverture du panneau.
  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus();
    }
  }, [isOpen]);

  // Échap ferme le panneau ; Tab reste piégé à l'intérieur du panneau.
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );

      if (focusables.length === 0) {
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close]);

  const panel = (
    <div
      ref={panelRef}
      id={panelId}
      className="mobile-nav-panel"
      hidden={!isOpen}
    >
      <div className="mobile-nav-panel-head">
        <span>Navigation</span>
        <button
          type="button"
          className="mobile-nav-close"
          onClick={close}
          aria-label="Fermer le menu"
        >
          <span aria-hidden="true">✕</span>
        </button>
      </div>

      <nav className="mobile-nav-links" aria-label="Navigation principale">
        {sections.map((section, index) => (
          <a
            key={section.href}
            ref={index === 0 ? firstLinkRef : undefined}
            href={`${anchor}${section.href}`}
            onClick={close}
          >
            {section.label}
          </a>
        ))}
        <Link href="/rendez-vous" onClick={close}>
          Rendez-vous
        </Link>
        <Link href="/teleconsultation" onClick={close}>
          Téléconsultation
        </Link>
      </nav>
    </div>
  );

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="mobile-nav-trigger"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="mobile-nav-trigger-bars" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        Menu
      </button>

      {isMounted ? createPortal(panel, document.body) : null}
    </>
  );
}
