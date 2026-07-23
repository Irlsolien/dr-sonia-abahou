import type { Metadata } from "next";
import Link from "next/link";
import {
  absoluteUrl,
  appointment,
  clinicAddress,
  clinicPhoneDisplay,
  clinicPhoneInternational,
  siteName,
} from "../seo";

export const metadata: Metadata = {
  title: "Prendre rendez-vous | Dr Sonia Abahou",
  description:
    "Choisir un rendez-vous au cabinet par appel ou WhatsApp, ou réserver une téléconsultation vidéo avec le Dr Sonia Abahou.",
  alternates: {
    canonical: "/rendez-vous",
  },
  openGraph: {
    title: "Prendre rendez-vous | Dr Sonia Abahou",
    description:
      "Deux options : rendez-vous au cabinet ou téléconsultation vidéo.",
    url: "/rendez-vous",
    siteName,
    type: "website",
    locale: "fr_MA",
  },
};

const phoneHref = `tel:${clinicPhoneInternational}`;
const whatsappHref = `https://wa.me/${appointment.whatsappPhone}?text=${encodeURIComponent(
  appointment.whatsappMessage,
)}`;

const appointmentStructuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Prendre rendez-vous - Dr Sonia Abahou",
  description:
    "Page de choix entre rendez-vous au cabinet et téléconsultation vidéo.",
  url: absoluteUrl("/rendez-vous"),
  inLanguage: "fr-MA",
};

export default function AppointmentPage() {
  return (
    <main className="appointment-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appointmentStructuredData),
        }}
      />

      <section className="appointment-hero section-shell">
        <Link className="legal-back" href="/">
          ← Retour au site
        </Link>
        <p className="eyebrow">Rendez-vous</p>
        <h1>Choisir le type de rendez-vous.</h1>
        <p>
          Le cabinet propose deux parcours simples : contacter le secrétariat
          pour un rendez-vous au cabinet, ou réserver une téléconsultation vidéo
          via Calendly.
        </p>
      </section>

      <section className="section-shell appointment-options">
        <article className="appointment-card appointment-card-cabinet">
          <span>Au cabinet</span>
          <h2>Rendez-vous au cabinet</h2>
          <p>
            Pour une consultation en présentiel, contactez le cabinet par appel
            ou WhatsApp afin de confirmer les disponibilités.
          </p>
          <div className="appointment-meta">
            <strong>{clinicPhoneDisplay}</strong>
            <small>{clinicAddress}</small>
          </div>
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
        </article>

        <article className="appointment-card appointment-card-video">
          <span>En vidéo</span>
          <h2>Téléconsultation vidéo</h2>
          <p>
            Choisissez votre créneau, effectuez le virement, envoyez votre
            justificatif, puis recevez la confirmation définitive de votre
            téléconsultation.
          </p>
          <div className="appointment-meta">
            <strong>Calendly + Zoom</strong>
            <small>Créneau en ligne, lien vidéo unique et paiement par virement.</small>
          </div>
          <div className="hero-actions">
            <Link className="primary-button" href="/teleconsultation">
              Réserver une téléconsultation vidéo
            </Link>
          </div>
        </article>
      </section>

      <section className="section-shell appointment-privacy">
        <strong>Confidentialité médicale</strong>
        <p>
          Pour la prise de rendez-vous, indiquez uniquement un motif général.
          N’envoyez pas de documents médicaux sensibles via WhatsApp, Calendly ou
          tout formulaire non validé par le cabinet.
        </p>
      </section>
    </main>
  );
}
