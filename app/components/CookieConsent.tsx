"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState, useSyncExternalStore } from "react";
import { gaMeasurementId } from "../seo";

/**
 * Bandeau de consentement aux cookies + chargement conditionnel de
 * Google Analytics 4 (gtag.js).
 *
 * Principe : Google Analytics dépose des cookies de mesure d'audience
 * (`_ga`, `_ga_<ID>`), qui ne sont pas strictement nécessaires au
 * fonctionnement du site. Conformément à la loi marocaine n° 09-08 et aux
 * recommandations de la CNDP sur les traceurs, le script n'est **jamais
 * chargé** tant que le visiteur n'a pas cliqué sur « Accepter ». Refuser est
 * aussi simple qu'accepter (un clic, même niveau) et ne charge rien.
 *
 * Le choix est mémorisé dans le `localStorage` (stockage local, exempté de
 * consentement : il ne sert qu'à retenir la préférence du visiteur, sans
 * suivi). Il peut être modifié à tout moment via le bouton « Gérer les
 * cookies » du pied de page ou de la politique cookies, qui rouvre ce
 * bandeau (`CookieSettingsButton`).
 *
 * Le bandeau n'est pas un modal bloquant : la navigation, l'appel, WhatsApp
 * et l'itinéraire restent accessibles pendant qu'il est affiché. Sans choix
 * exprimé, aucun cookie Google n'est déposé.
 */

export type CookieConsentLabels = {
  /** Intitulé accessible de la région du bandeau. */
  regionAriaLabel: string;
  title: string;
  body: string;
  /** Lien vers la politique cookies (`/cookies` ou `/ar/cookies`). */
  policyLabel: string;
  policyHref: string;
  accept: string;
  refuse: string;
  /** Libellé du bouton de réouverture (pied de page, politique cookies). */
  settings: string;
};

export const frCookieConsentLabels: CookieConsentLabels = {
  regionAriaLabel: "Choix concernant les cookies",
  title: "Cookies de mesure d’audience",
  body: "Le cabinet souhaite utiliser Google Analytics pour mesurer la fréquentation du site et améliorer ses informations pratiques. Cet outil dépose des cookies uniquement si vous l’acceptez. Votre choix est modifiable à tout moment.",
  policyLabel: "En savoir plus",
  policyHref: "/cookies",
  accept: "Accepter",
  refuse: "Refuser",
  settings: "Gérer les cookies",
};

type Choice = "granted" | "denied";

/* Clé de stockage local : ne contient que « granted » ou « denied ». */
const STORAGE_KEY = "drsonia-cookie-consent";
/* Événement DOM qui rouvre le bandeau (déclenché par `CookieSettingsButton`). */
const OPEN_EVENT = "drsonia:cookie-consent-open";
/* Événement DOM émis après chaque enregistrement du choix. */
const CHANGE_EVENT = "drsonia:cookie-consent-change";

/**
 * État du consentement : `pending` tant que le document n'est pas hydraté
 * (rendu serveur), `unset` si le visiteur n'a jamais répondu, sinon le choix
 * mémorisé. Lu via `useSyncExternalStore` : le stockage local est une source
 * externe, et ce rendu évite tout écart d'hydratation (le serveur ne rend
 * rien, le client relit le stockage juste après).
 */
type ConsentState = Choice | "unset" | "pending";

/* Session sans stockage (navigation privée stricte, etc.) : le choix vaut
   pour la page en cours, sans jamais charger Google par défaut. */
let volatileChoice: Choice | null = null;

function readChoice(): ConsentState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === "granted" || raw === "denied") return raw;
  } catch {
    /* Stockage indisponible : repli sur la valeur de session. */
  }
  return volatileChoice ?? "unset";
}

function writeChoice(choice: Choice) {
  volatileChoice = choice;
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    /* Échec silencieux : `volatileChoice` couvre la page en cours. */
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribeChoice(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  /* Choix modifié depuis un autre onglet du même site. */
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getServerChoice(): ConsentState {
  return "pending";
}

/**
 * Retrait du consentement après une acceptation antérieure : on informe
 * gtag (Consent Mode), on désactive la propriété et on expire les cookies
 * `_ga*` sur les domaines possibles. Le script déjà chargé ne peut pas être
 * « déchargé » ; il ne collecte plus rien après cet appel.
 */
function revokeAnalytics() {
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  };
  w[`ga-disable-${gaMeasurementId}`] = true;
  try {
    w.gtag?.("consent", "update", { analytics_storage: "denied" });
  } catch {
    /* gtag absent : rien à révoquer. */
  }
  try {
    const host = window.location.hostname;
    const parts = host.split(".");
    const domains = [host];
    if (parts.length > 2) domains.push(`.${parts.slice(-2).join(".")}`);
    if (parts.length >= 2) domains.push(`.${host}`);
    const expired = "expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    document.cookie
      .split(";")
      .map((entry) => entry.trim().split("=")[0])
      .filter((name) => name === "_ga" || name.startsWith("_ga_") || name === "_gid")
      .forEach((name) => {
        document.cookie = `${name}=; ${expired}`;
        domains.forEach((domain) => {
          document.cookie = `${name}=; ${expired}; domain=${domain}`;
        });
      });
  } catch {
    /* Cookies inaccessibles : rien à nettoyer. */
  }
}

type CookieConsentProps = {
  labels?: CookieConsentLabels;
  lang?: "fr" | "ar";
};

export function CookieConsent({
  labels = frCookieConsentLabels,
  lang = "fr",
}: CookieConsentProps) {
  /* `pending` côté serveur et pendant l'hydratation : rien n'est rendu, ce
     qui évite un flash du bandeau chez les visiteurs ayant déjà répondu. */
  const choice = useSyncExternalStore(
    subscribeChoice,
    readChoice,
    getServerChoice,
  );
  /* Réouverture volontaire (bouton « Gérer les cookies »). */
  const [isReopened, setIsReopened] = useState(false);

  useEffect(() => {
    const reopen = () => setIsReopened(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  const isOpen = choice === "unset" || isReopened;

  const decide = (next: Choice) => {
    if (next === "denied" && choice === "granted") {
      revokeAnalytics();
    }
    writeChoice(next);
    setIsReopened(false);
  };

  const isArabic = lang === "ar";

  return (
    <>
      {choice === "granted" ? (
        <>
          {/* Google tag (gtag.js) — chargé uniquement après acceptation. */}
          <Script
            id="ga-gtag-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-gtag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'granted'
});
gtag('config', '${gaMeasurementId}');`}
          </Script>
        </>
      ) : null}

      {isOpen ? (
        <div
          className={`cookie-banner${isArabic ? " cookie-banner-ar" : ""}`}
          lang={isArabic ? "ar" : undefined}
          dir={isArabic ? "rtl" : undefined}
        >
          <section
            className="cookie-banner-card"
            role="region"
            aria-label={labels.regionAriaLabel}
            aria-live="polite"
          >
            <h2>{labels.title}</h2>
            <p>
              {labels.body}{" "}
              <Link href={labels.policyHref}>{labels.policyLabel}</Link>
            </p>
            <div className="cookie-banner-actions">
              <button
                type="button"
                className="secondary-button cookie-banner-button"
                onClick={() => decide("denied")}
              >
                {labels.refuse}
              </button>
              <button
                type="button"
                className="primary-button cookie-banner-button"
                onClick={() => decide("granted")}
              >
                {labels.accept}
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}

type CookieSettingsButtonProps = {
  label: string;
  className?: string;
};

/**
 * Bouton « Gérer les cookies » : rouvre le bandeau pour modifier son choix.
 * Rendu dans le pied de page de toutes les pages et dans la politique
 * cookies (exigence d'un retrait du consentement aussi simple que son
 * octroi).
 */
export function CookieSettingsButton({
  label,
  className = "footer-cookie-settings",
}: CookieSettingsButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
    >
      {label}
    </button>
  );
}
