import Image from "next/image";
import Link from "next/link";
import { SocialTooltip, type SocialItem } from "@/components/ui/social-media";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import type { NavLink } from "./MobileNav";
import {
  appointment,
  clinicAddress,
  clinicName,
  clinicPhoneDisplay,
  clinicPhoneInternational,
  clinicSecondaryPhoneDisplay,
  clinicSecondaryPhoneInternational,
  doctorSocialProfiles,
  googleMapsPlaceUrl,
} from "@/app/seo";

export type FooterLabels = {
  brand: string;
  tagline: string;
  contactTitle: string;
  infoTitle: string;
  infoNavAriaLabel: string;
  landlinePrefix: string;
  mobilePrefix: string;
  whatsapp: string;
  linkedinAriaLabel: string;
  instagramAriaLabel: string;
  /** Ancres de section, sans le préfixe (`expertise`, `soins`, …). */
  sections: readonly NavLink[];
  /** Liens de page complets (`/rendez-vous`, `/ar`, …). */
  pages: readonly NavLink[];
  /**
   * `true` lorsque les séquences latines (adresse postale, numéros) doivent
   * être isolées en sens de lecture gauche→droite (page arabe). Le rendu
   * français, déjà en LTR, reste strictement inchangé sans cette option.
   */
  isolateLatin?: boolean;
};

export const frFooterLabels: FooterLabels = {
  brand: "Dr Sonia Abahou",
  tagline:
    "Cabinet d’endocrinologie, diabétologie et nutrition — Massira I, Témara.",
  contactTitle: "Contact",
  infoTitle: "Informations",
  infoNavAriaLabel: "Liens du site",
  landlinePrefix: "Fixe · ",
  mobilePrefix: "Portable · ",
  whatsapp: "WhatsApp",
  linkedinAriaLabel: "LinkedIn du cabinet Dr Sonia Abahou",
  instagramAriaLabel: "Instagram du cabinet Dr Sonia Abahou",
  sections: [
    { href: "expertise", label: "Expertise" },
    { href: "soins", label: "Soins" },
    { href: "pratiques", label: "Pratiques" },
    { href: "cabinet", label: "Cabinet" },
  ],
  pages: [
    { href: "/rendez-vous", label: "Rendez-vous" },
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/confidentialite", label: "Confidentialité" },
    { href: "/cookies", label: "Cookies" },
    {
      href: "/ar",
      label: "العربية",
      lang: "ar",
      dir: "rtl",
      hrefLang: "ar",
      isLangSwitch: true,
    },
  ],
};

type SiteFooterProps = {
  /** `true` sur les pages internes : les ancres pointent vers `/#ancre`. */
  internal?: boolean;
  labels?: FooterLabels;
  /**
   * Préfixe d'ancre explicite (`/ar#` sur les pages internes arabes, dont
   * les ancres de section vivent sur `/ar`).
   */
  anchorPrefix?: string;
  /**
   * Destination contextuelle du lien marqué `isLangSwitch` : sur une page
   * motif, la bascule mène à la page jumelle (`/ar/<slug>` ↔ `/<slug>`).
   */
  langSwitchHref?: string;
};

const phoneHref = `tel:${clinicPhoneInternational}`;
const secondaryPhoneHref = `tel:${clinicSecondaryPhoneInternational}`;
const mapsHref = googleMapsPlaceUrl;
const whatsappHref = `https://wa.me/${appointment.whatsappPhone}?text=${encodeURIComponent(
  appointment.whatsappMessage,
)}`;

export function SiteFooter({
  internal = false,
  labels = frFooterLabels,
  anchorPrefix,
  langSwitchHref,
}: SiteFooterProps) {
  const anchor = anchorPrefix ?? (internal ? "/#" : "#");
  const pages = langSwitchHref
    ? labels.pages.map((page) =>
        page.isLangSwitch ? { ...page, href: langSwitchHref } : page,
      )
    : labels.pages;

  const socialLinks: SocialItem[] = [
    {
      href: doctorSocialProfiles[0],
      ariaLabel: labels.linkedinAriaLabel,
      tooltip: "LinkedIn",
      color: "#0A66C2",
      icon: "linkedin",
    },
    {
      href: doctorSocialProfiles[1],
      ariaLabel: labels.instagramAriaLabel,
      tooltip: "Instagram",
      color: "#E1306C",
      icon: "instagram",
    },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-grid section-shell">
        <div className="footer-col footer-brand">
          <span className="footer-logo-mark">
            <Image
              src="/dr-sonia-monogram-clean.webp"
              alt=""
              width={200}
              height={180}
              sizes="64px"
            />
          </span>
          <strong>{labels.brand}</strong>
          <p>{labels.tagline}</p>
          <SocialTooltip items={socialLinks} />
        </div>

        <div className="footer-col">
          <h3>{labels.contactTitle}</h3>
          <ul className="footer-contact-list">
            <li>
              <a href={mapsHref} target="_blank" rel="noreferrer">
                <MapPinIcon />
                {labels.isolateLatin ? (
                  <span dir="ltr" className="footer-latin">
                    {clinicAddress}
                  </span>
                ) : (
                  <span>{clinicAddress}</span>
                )}
              </a>
            </li>
            <li>
              <a href={phoneHref}>
                <PhoneIcon />
                {labels.isolateLatin ? (
                  <span>
                    {labels.landlinePrefix}
                    <bdi dir="ltr">{clinicPhoneDisplay}</bdi>
                  </span>
                ) : (
                  <span>
                    {labels.landlinePrefix}
                    {clinicPhoneDisplay}
                  </span>
                )}
              </a>
            </li>
            <li>
              <a href={secondaryPhoneHref}>
                <PhoneIcon />
                {labels.isolateLatin ? (
                  <span>
                    {labels.mobilePrefix}
                    <bdi dir="ltr">{clinicSecondaryPhoneDisplay}</bdi>
                  </span>
                ) : (
                  <span>
                    {labels.mobilePrefix}
                    {clinicSecondaryPhoneDisplay}
                  </span>
                )}
              </a>
            </li>
            <li>
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <WhatsAppIcon />
                <span>{labels.whatsapp}</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>{labels.infoTitle}</h3>
          <nav className="footer-info-nav" aria-label={labels.infoNavAriaLabel}>
            {labels.sections.map((section) => (
              <a key={section.href} href={`${anchor}${section.href}`}>
                {section.label}
              </a>
            ))}
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                lang={page.lang}
                dir={page.dir}
                hrefLang={page.hrefLang}
              >
                {page.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <p className="footer-legal section-shell">
        © {new Date().getFullYear()} {clinicName}
      </p>
    </footer>
  );
}
