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

export type NavLink = {
  /** Destination : ancre (`#soins`), route interne (`/rendez-vous`) ou `tel:`. */
  href: string;
  label: string;
  /** Renseignés pour un lien pointant vers une page d'une autre langue. */
  hrefLang?: string;
  lang?: string;
  dir?: "ltr" | "rtl";
};

export type LangSwitch = {
  href: string;
  label: string;
  lang: string;
  dir: "ltr" | "rtl";
  hrefLang: string;
};

export type MobileNavLabels = {
  trigger: string;
  panelTitle: string;
  close: string;
  navAriaLabel: string;
  /** Ancres de section, sans le préfixe (`expertise`, `soins`, …). */
  sections: readonly NavLink[];
  /** Liens complémentaires affichés sous les ancres de section. */
  extraLinks: readonly NavLink[];
  langSwitch: LangSwitch;
};

export const frMobileNavLabels: MobileNavLabels = {
  trigger: "Menu",
  panelTitle: "Navigation",
  close: "Fermer le menu",
  navAriaLabel: "Navigation principale",
  sections: [
    { href: "expertise", label: "Expertise" },
    { href: "soins", label: "Soins" },
    { href: "pratiques", label: "Pratiques" },
    { href: "avis", label: "Avis" },
    { href: "cabinet", label: "Cabinet" },
    { href: "contact", label: "Contact" },
  ],
  extraLinks: [
    { href: "/rendez-vous", label: "Rendez-vous" },
    { href: "/teleconsultation", label: "Téléconsultation" },
  ],
  langSwitch: {
    href: "/ar",
    label: "العربية",
    lang: "ar",
    dir: "rtl",
    hrefLang: "ar",
  },
};

type MobileNavProps = {
  /** Préfixe d'ancre : `#` sur l'accueil, `/#` sur les pages internes. */
  anchor: string;
  labels?: MobileNavLabels;
  /**
   * Le panneau est projeté dans `<body>`, hors du conteneur de la page : ses
   * attributs de langue et ses variables de police doivent donc être portés
   * par le panneau lui-même (utilisé par la version arabe).
   */
  panelLang?: string;
  panelDir?: "ltr" | "rtl";
  panelClassName?: string;
};

/**
 * Navigation mobile (< 980px) : bouton « Menu » accessible ouvrant un panneau
 * plein écran sobre. Fermeture par le bouton ✕ ou la touche Échap, focus
 * déplacé sur le premier lien à l'ouverture et rendu au bouton à la fermeture.
 * Le panneau est monté uniquement côté client : le header reste rendu au SSR.
 */
export function MobileNav({
  anchor,
  labels = frMobileNavLabels,
  panelLang,
  panelDir,
  panelClassName,
}: MobileNavProps) {
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
      className={
        panelClassName ? `mobile-nav-panel ${panelClassName}` : "mobile-nav-panel"
      }
      lang={panelLang}
      dir={panelDir}
      hidden={!isOpen}
    >
      <div className="mobile-nav-panel-head">
        <span>{labels.panelTitle}</span>
        <button
          type="button"
          className="mobile-nav-close"
          onClick={close}
          aria-label={labels.close}
        >
          <span aria-hidden="true">✕</span>
        </button>
      </div>

      <nav className="mobile-nav-links" aria-label={labels.navAriaLabel}>
        {labels.sections.map((section, index) => (
          <a
            key={section.href}
            ref={index === 0 ? firstLinkRef : undefined}
            href={`${anchor}${section.href}`}
            onClick={close}
          >
            {section.label}
          </a>
        ))}
        {labels.extraLinks.map((link) =>
          link.href.startsWith("/") ? (
            <Link
              key={link.href}
              href={link.href}
              hrefLang={link.hrefLang}
              onClick={close}
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.href}
              href={link.href}
              hrefLang={link.hrefLang}
              onClick={close}
            >
              {link.label}
            </a>
          ),
        )}
        <Link
          href={labels.langSwitch.href}
          lang={labels.langSwitch.lang}
          dir={labels.langSwitch.dir}
          hrefLang={labels.langSwitch.hrefLang}
          className="mobile-nav-lang-link"
          onClick={close}
        >
          {labels.langSwitch.label}
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
        {labels.trigger}
      </button>

      {isMounted ? createPortal(panel, document.body) : null}
    </>
  );
}
