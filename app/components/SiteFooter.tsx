import Image from "next/image";
import Link from "next/link";
import { SocialTooltip, type SocialItem } from "@/components/ui/social-media";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
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

type SiteFooterProps = {
  /** `true` sur les pages internes : les ancres pointent vers `/#ancre`. */
  internal?: boolean;
};

const phoneHref = `tel:${clinicPhoneInternational}`;
const secondaryPhoneHref = `tel:${clinicSecondaryPhoneInternational}`;
const mapsHref = googleMapsPlaceUrl;
const whatsappHref = `https://wa.me/${appointment.whatsappPhone}?text=${encodeURIComponent(
  appointment.whatsappMessage,
)}`;

const socialLinks: SocialItem[] = [
  {
    href: doctorSocialProfiles[0],
    ariaLabel: "LinkedIn du cabinet Dr Sonia Abahou",
    tooltip: "LinkedIn",
    color: "#0A66C2",
    icon: "linkedin",
  },
  {
    href: doctorSocialProfiles[1],
    ariaLabel: "Instagram du cabinet Dr Sonia Abahou",
    tooltip: "Instagram",
    color: "#E1306C",
    icon: "instagram",
  },
];

export function SiteFooter({ internal = false }: SiteFooterProps) {
  const anchor = internal ? "/#" : "#";

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
          <strong>Dr Sonia Abahou</strong>
          <p>
            Cabinet d’endocrinologie, diabétologie et nutrition — Massira I,
            Témara.
          </p>
          <SocialTooltip items={socialLinks} />
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul className="footer-contact-list">
            <li>
              <a href={mapsHref} target="_blank" rel="noreferrer">
                <MapPinIcon />
                <span>{clinicAddress}</span>
              </a>
            </li>
            <li>
              <a href={phoneHref}>
                <PhoneIcon />
                <span>Fixe · {clinicPhoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={secondaryPhoneHref}>
                <PhoneIcon />
                <span>Portable · {clinicSecondaryPhoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Informations</h3>
          <nav className="footer-info-nav" aria-label="Liens du site">
            <a href={`${anchor}expertise`}>Expertise</a>
            <a href={`${anchor}soins`}>Soins</a>
            <a href={`${anchor}pratiques`}>Pratiques</a>
            <a href={`${anchor}cabinet`}>Cabinet</a>
            <Link href="/rendez-vous">Rendez-vous</Link>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/confidentialite">Confidentialité</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/ar" lang="ar" dir="rtl" hrefLang="ar">
              العربية
            </Link>
          </nav>
        </div>
      </div>

      <p className="footer-legal section-shell">
        © {new Date().getFullYear()} {clinicName}
      </p>
    </footer>
  );
}
