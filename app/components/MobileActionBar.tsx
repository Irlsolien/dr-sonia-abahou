import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import {
  appointment,
  clinicPhoneInternational,
  googleMapsPlaceUrl,
} from "../seo";

/**
 * Barre d'actions rapides fixée en bas d'écran (< 768px) : appel, WhatsApp et
 * itinéraire. Extraite des deux pages d'accueil pour être montée à l'identique
 * sur toutes les pages où un patient peut décider de contacter le cabinet
 * (pages motifs FR et AR, rendez-vous, téléconsultation).
 *
 * La réserve de hauteur compensatoire est portée par `.site-footer`
 * (`app/globals.css`, media query 768px) : elle s'applique donc déjà à toutes
 * les pages, aucun contenu n'est masqué par la barre.
 */
export type MobileActionBarLabels = {
  navAriaLabel: string;
  call: { label: string; ariaLabel: string };
  whatsapp: { label: string; ariaLabel: string };
  directions: { label: string; ariaLabel: string };
};

export const frMobileActionBarLabels: MobileActionBarLabels = {
  navAriaLabel: "Actions rapides du cabinet",
  call: { label: "Appeler", ariaLabel: "Appeler le cabinet" },
  whatsapp: {
    label: "WhatsApp",
    ariaLabel: "Contacter le cabinet sur WhatsApp",
  },
  directions: { label: "Itinéraire", ariaLabel: "Itinéraire vers le cabinet" },
};

/* Destinations validées (`app/seo.ts`), identiques sur toutes les pages. */
export const clinicPhoneHref = `tel:${clinicPhoneInternational}`;
export const clinicWhatsappHref = `https://wa.me/${appointment.whatsappPhone}?text=${encodeURIComponent(
  appointment.whatsappMessage,
)}`;
export const clinicMapsHref = googleMapsPlaceUrl;

type MobileActionBarProps = {
  /** Libellés et intitulés accessibles ; français par défaut. */
  labels?: MobileActionBarLabels;
  phoneHref?: string;
  whatsappHref?: string;
  mapsHref?: string;
};

export function MobileActionBar({
  labels = frMobileActionBarLabels,
  phoneHref = clinicPhoneHref,
  whatsappHref = clinicWhatsappHref,
  mapsHref = clinicMapsHref,
}: MobileActionBarProps) {
  return (
    /* Placée tôt dans le DOM pour être atteinte rapidement au clavier et par
       les lecteurs d'écran, son positionnement en bas d'écran restant
       purement visuel (position: fixed). */
    <nav className="mobile-action-bar" aria-label={labels.navAriaLabel}>
      <a
        className="mobile-action-bar-item"
        href={phoneHref}
        aria-label={labels.call.ariaLabel}
      >
        <PhoneIcon />
        <span>{labels.call.label}</span>
      </a>
      <a
        className="mobile-action-bar-item mobile-action-bar-whatsapp"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label={labels.whatsapp.ariaLabel}
      >
        <WhatsAppIcon />
        <span>{labels.whatsapp.label}</span>
      </a>
      <a
        className="mobile-action-bar-item"
        href={mapsHref}
        target="_blank"
        rel="noreferrer"
        aria-label={labels.directions.ariaLabel}
      >
        <MapPinIcon />
        <span>{labels.directions.label}</span>
      </a>
    </nav>
  );
}
