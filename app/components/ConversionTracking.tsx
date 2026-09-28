"use client";

import { useEffect } from "react";
import { COOKIE_CONSENT_STORAGE_KEY } from "./CookieConsent";
import { gaMeasurementId, googleMapsPlaceUrl } from "../seo";

/**
 * Mesure des prises de contact dans Google Analytics 4.
 *
 * Quatre événements, un par action qui mène à un rendez-vous :
 *
 * - `phone_click` : lien `tel:` (appel du fixe ou du portable) ;
 * - `whatsapp_click` : lien vers WhatsApp (`wa.me`) ;
 * - `directions_click` : lien d'itinéraire vers la fiche Google Maps du
 *   cabinet (`googleMapsPlaceUrl`, et lui seul : le lien « avis Google »
 *   pointe aussi vers Google Maps mais n'est pas un itinéraire) ;
 * - `appointment_click` : lien vers la page `/rendez-vous` ou `/ar/rendez-vous`.
 *
 * Consentement : rien n'est envoyé tant que le visiteur n'a pas accepté les
 * cookies de mesure. `gtag` n'existe que si `CookieConsent` l'a chargé après
 * « Accepter » ; en cas de retrait, `CookieConsent` pose le drapeau
 * `ga-disable-<ID>` et enregistre « denied », que ce composant relit à chaque
 * clic. Aucun script n'est chargé ici : seul l'appel à `gtag` existant.
 *
 * Données : un seul paramètre, `link_location`, qui nomme la zone de l'écran
 * où se trouvait le lien (barre mobile, en-tête, pied de page…). Jamais de
 * numéro de téléphone, d'URL de lien, de texte de message, de nom, d'e-mail
 * ni de motif de consultation.
 *
 * Un seul écouteur délégué sur le document, en phase de capture : il voit
 * tous les liens, y compris ceux du menu mobile projeté dans `<body>`, sans
 * modifier les composants qui les affichent.
 */

type ConversionEvent =
  | "phone_click"
  | "whatsapp_click"
  | "directions_click"
  | "appointment_click";

/**
 * Zones de l'écran, de la plus spécifique à la plus générale. La première
 * qui contient le lien donne la valeur de `link_location`.
 */
const linkLocations: readonly (readonly [selector: string, location: string])[] = [
  [".mobile-action-bar", "mobile_bar"],
  [".mobile-nav-panel", "mobile_menu"],
  [".site-header", "header"],
  [".site-footer", "footer"],
  [".map-card", "map"],
  [".hero, .service-hero, .appointment-hero", "hero"],
  [".appointment-options", "appointment_card"],
  [".appointment-practical", "appointment_practical"],
  ["#cabinet", "cabinet_section"],
  [".contact-steps-section", "contact_steps"],
  ["#contact, .final-cta", "contact_section"],
];

const whatsappHosts = new Set([
  "wa.me",
  "api.whatsapp.com",
  "web.whatsapp.com",
  "whatsapp.com",
]);

const appointmentPaths = new Set(["/rendez-vous", "/ar/rendez-vous"]);

function classifyLink(link: HTMLAnchorElement): ConversionEvent | null {
  const rawHref = link.getAttribute("href") ?? "";
  if (rawHref.startsWith("tel:")) return "phone_click";
  if (rawHref === googleMapsPlaceUrl) return "directions_click";

  let url: URL;
  try {
    url = new URL(link.href, window.location.href);
  } catch {
    return null;
  }

  const host = url.hostname.replace(/^www\./, "");
  if (whatsappHosts.has(host)) return "whatsapp_click";
  if (
    url.origin === window.location.origin &&
    appointmentPaths.has(url.pathname.replace(/\/+$/, ""))
  ) {
    return "appointment_click";
  }
  return null;
}

function linkLocation(link: Element) {
  for (const [selector, location] of linkLocations) {
    if (link.closest(selector)) return location;
  }
  return "content";
}

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  [flag: `ga-disable-${string}`]: boolean | undefined;
};

/**
 * Vrai seulement si la mesure est chargée ET toujours consentie : `gtag`
 * présent, drapeau de retrait absent, et choix mémorisé « granted » lorsque
 * le stockage local est lisible (navigation privée stricte : la présence de
 * `gtag` suffit, `CookieConsent` ne le charge qu'après acceptation).
 */
function analyticsConsented(w: AnalyticsWindow) {
  if (typeof w.gtag !== "function") return false;
  if (w[`ga-disable-${gaMeasurementId}`] === true) return false;

  let storedChoice: string | null | undefined;
  try {
    storedChoice = w.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  } catch {
    storedChoice = undefined;
  }
  return storedChoice === undefined || storedChoice === "granted";
}

export function ConversionTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;

      const eventName = classifyLink(link);
      if (!eventName) return;

      const w = window as unknown as AnalyticsWindow;
      if (!analyticsConsented(w)) return;

      w.gtag?.("event", eventName, {
        link_location: linkLocation(link),
        transport_type: "beacon",
      });
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
    };
  }, []);

  return null;
}
