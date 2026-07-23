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
    "Contacter le cabinet du Dr Sonia Abahou pour un rendez-vous. La réservation vidéo est temporairement en maintenance.",
  alternates: {
    canonical: "/rendez-vous",
  },
  openGraph: {
    title: "Prendre rendez-vous | Dr Sonia Abahou",
    description:
      "Contacter le cabinet par appel ou WhatsApp. La réservation vidéo est temporairement en maintenance.",
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
    "Page de contact pour prendre rendez-vous avec le cabinet du Dr Sonia Abahou.",
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
          La prise de rendez-vous en ligne et la téléconsultation vidéo sont en
          cours de préparation. Pour le moment, merci de contacter le cabinet par
          appel ou WhatsApp afin de confirmer les disponibilités.
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

        <article className="appointment-card appointment-card-video appointment-card-maintenance">
          <span>En préparation</span>
          <h2>Téléconsultation vidéo en maintenance</h2>
          <p>
            La réservation vidéo sera bientôt disponible avec un parcours
            sécurisé : choix du créneau, visioconférence et confirmation du
            rendez-vous. Cette fonctionnalité n’est pas encore ouverte aux
            patients.
          </p>
          <div className="appointment-meta">
            <strong>Fonctionnalité en maintenance</strong>
            <small>
              En attendant, le cabinet reste joignable par téléphone ou WhatsApp
              pour orienter la demande.
            </small>
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
      </section>

      <section className="section-shell appointment-privacy">
        <strong>Confidentialité médicale</strong>
        <p>
          Pour la prise de rendez-vous, indiquez uniquement un motif général.
          N’envoyez pas de documents médicaux sensibles via WhatsApp ou tout
          formulaire non validé par le cabinet.
        </p>
      </section>
    </main>
  );
}
