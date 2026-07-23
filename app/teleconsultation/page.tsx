import type { Metadata } from "next";
import Link from "next/link";
import {
  appointment,
  clinicPhoneInternational,
  siteName,
} from "../seo";

export const metadata: Metadata = {
  title: "Téléconsultation en maintenance | Dr Sonia Abahou",
  description:
    "La réservation de téléconsultation vidéo du cabinet Dr Sonia Abahou est temporairement en maintenance.",
  alternates: {
    canonical: "/teleconsultation",
  },
  openGraph: {
    title: "Téléconsultation en maintenance | Dr Sonia Abahou",
    description:
      "La fonctionnalité sera bientôt disponible. Le cabinet reste joignable par téléphone ou WhatsApp.",
    url: "/teleconsultation",
    siteName,
    type: "website",
    locale: "fr_MA",
  },
};

const phoneHref = `tel:${clinicPhoneInternational}`;
const whatsappHref = `https://wa.me/${appointment.whatsappPhone}?text=${encodeURIComponent(
  appointment.whatsappMessage,
)}`;

export default function TeleconsultationMaintenancePage() {
  return (
    <main className="appointment-page">
      <section className="appointment-hero section-shell">
        <Link className="legal-back" href="/rendez-vous">
          ← Retour aux rendez-vous
        </Link>
        <p className="eyebrow">Téléconsultation vidéo</p>
        <h1>Fonctionnalité en maintenance.</h1>
        <p>
          La réservation de téléconsultation vidéo est en cours de préparation.
          Elle sera bientôt disponible avec un parcours sécurisé. En attendant,
          merci de contacter le cabinet par téléphone ou WhatsApp.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href={phoneHref}>
            Appeler le cabinet
          </a>
          <a
            className="secondary-button"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            Écrire sur WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
