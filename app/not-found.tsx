import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { PhoneIcon, WhatsAppIcon } from "./components/Icons";
import {
  appointment,
  clinicPhoneInternational,
} from "./seo";

export const metadata: Metadata = {
  title: "Page introuvable | Dr Sonia Abahou",
  description:
    "La page demandée n’existe pas ou a été déplacée. Retrouvez l’accueil du cabinet du Dr Sonia Abahou ou prenez rendez-vous.",
  robots: {
    index: false,
    follow: true,
  },
};

const phoneHref = `tel:${clinicPhoneInternational}`;
const whatsappHref = `https://wa.me/${appointment.whatsappPhone}?text=${encodeURIComponent(
  appointment.whatsappMessage,
)}`;

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page">
      <SiteHeader internal />

      <section className="not-found-hero section-shell">
        <p className="eyebrow">Erreur 404</p>
        <h1>Page introuvable.</h1>
        <p>
          La page demandée n’existe pas ou a été déplacée. Retrouvez l’accueil
          du cabinet ou contactez-nous pour prendre rendez-vous.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" href="/">
            Retour à l’accueil
          </Link>
          <Link className="secondary-button" href="/rendez-vous">
            Prendre rendez-vous
          </Link>
        </div>
        <div className="not-found-contact">
          <a href={phoneHref}>
            <PhoneIcon />
            Appeler le cabinet
          </a>
          <a href={whatsappHref} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            Écrire sur WhatsApp
          </a>
        </div>
      </section>

      <SiteFooter internal />
    </main>
  );
}
