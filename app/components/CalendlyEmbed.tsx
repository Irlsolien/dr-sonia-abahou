"use client";

import { useCallback, useRef, useState } from "react";

/**
 * Intégration Calendly « au clic » (consentement par action).
 *
 * Aucun script tiers, aucun cookie Calendly n'est chargé au rendu de la page :
 * le widget n'est injecté qu'après un clic explicite du patient sur « Choisir
 * un créneau ». C'est la brique qui permet de respecter, sans bandeau de
 * consentement lourd, la règle « pas de traceur tiers avant accord » : tant que
 * le patient n'ouvre pas le calendrier, la page reste 100 % première partie.
 *
 * La CSP de `vercel.json` autorise `assets.calendly.com` (script/style/police)
 * et `calendly.com` (iframe/connexion) uniquement — le reste reste verrouillé.
 *
 * Aucune donnée personnelle n'est passée en paramètre d'URL : on ne fait que
 * charger l'URL de l'événement. Calendly collecte le nom et l'email dans son
 * propre formulaire, jamais via un lien prérempli côté site.
 */

type CalendlyWidget = {
  initInlineWidget: (options: {
    url: string;
    parentElement: HTMLElement;
  }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyWidget;
  }
}

const WIDGET_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

export type CalendlyEmbedLabels = {
  /** Titre de la carte affichée avant ouverture. */
  title: string;
  /** Texte explicatif court sous le titre. */
  hint: string;
  /** Libellé du bouton d'ouverture. */
  cta: string;
  /** Mention de confidentialité tierce affichée sous le bouton. */
  consentNote: string;
  /** Message annoncé aux lecteurs d'écran pendant le chargement. */
  loading: string;
};

type CalendlyEmbedProps = {
  /** URL de l'événement Calendly (donnée publique, centralisée dans `seo.ts`). */
  url: string;
  labels: CalendlyEmbedLabels;
  /** Direction du texte pour la carte de pré-chargement (RTL en arabe). */
  dir?: "ltr" | "rtl";
};

export function CalendlyEmbed({ url, labels, dir = "ltr" }: CalendlyEmbedProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "ready">("idle");
  const containerRef = useRef<HTMLDivElement>(null);

  const mountWidget = useCallback(() => {
    const parent = containerRef.current;
    if (!parent || !window.Calendly) return;
    window.Calendly.initInlineWidget({ url, parentElement: parent });
    setStatus("ready");
  }, [url]);

  const openCalendar = useCallback(() => {
    if (status !== "idle") return;
    setStatus("loading");

    if (window.Calendly) {
      mountWidget();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${WIDGET_SCRIPT}"]`,
    );
    if (existing) {
      existing.addEventListener("load", mountWidget, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = WIDGET_SCRIPT;
    script.async = true;
    script.addEventListener("load", mountWidget, { once: true });
    document.body.appendChild(script);
  }, [status, mountWidget]);

  return (
    <div className="calendly-embed" dir={dir}>
      {status !== "ready" && (
        <div className="calendly-launcher">
          <h3>{labels.title}</h3>
          <p>{labels.hint}</p>
          <button
            type="button"
            className="primary-button"
            onClick={openCalendar}
            disabled={status === "loading"}
            aria-busy={status === "loading"}
          >
            {status === "loading" ? labels.loading : labels.cta}
          </button>
          <small>{labels.consentNote}</small>
        </div>
      )}
      <div
        ref={containerRef}
        className="calendly-inline-container"
        aria-live="polite"
        hidden={status !== "ready"}
      />
    </div>
  );
}
