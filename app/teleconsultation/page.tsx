import type { Metadata } from "next";
import Link from "next/link";
import CalendlyBooking from "./CalendlyBooking";
import { absoluteUrl, siteName, teleconsultation } from "../seo";

export const metadata: Metadata = {
  title: "Téléconsultation vidéo | Dr Sonia Abahou",
  description:
    "Réserver une téléconsultation vidéo avec le cabinet du Dr Sonia Abahou via Calendly et Zoom.",
  alternates: {
    canonical: "/teleconsultation",
  },
  openGraph: {
    title: "Téléconsultation vidéo | Dr Sonia Abahou",
    description:
      "Choisissez un créneau, effectuez le virement et recevez la confirmation définitive de votre téléconsultation.",
    url: "/teleconsultation",
    siteName,
    type: "website",
    locale: "fr_MA",
  },
};

const steps = [
  {
    title: "Choisissez votre créneau",
    text: "La réservation s’effectue directement dans Calendly, selon les disponibilités connectées au calendrier de la docteure.",
  },
  {
    title: "Effectuez le virement",
    text: "Après la demande de réservation, les informations de paiement sont affichées et peuvent aussi être reprises dans l’e-mail de confirmation Calendly.",
  },
  {
    title: "Envoyez le justificatif",
    text: "Transmettez la preuve de paiement au cabinet via WhatsApp ou par e-mail, sans document médical sensible.",
  },
  {
    title: "Recevez la confirmation",
    text: "Le rendez-vous devient définitif après validation du paiement par le cabinet.",
  },
];

const teleconsultationStructuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Téléconsultation vidéo - Dr Sonia Abahou",
  description:
    "Page de réservation de téléconsultation vidéo avec Calendly et Zoom pour le cabinet Dr Sonia Abahou.",
  url: absoluteUrl("/teleconsultation"),
  inLanguage: "fr-MA",
  about: {
    "@type": "MedicalProcedure",
    name: "Téléconsultation vidéo",
  },
};

export default function TeleconsultationPage() {
  return (
    <main className="teleconsultation-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(teleconsultationStructuredData),
        }}
      />

      <section className="teleconsultation-hero section-shell">
        <Link className="legal-back" href="/rendez-vous">
          ← Retour aux rendez-vous
        </Link>
        <p className="eyebrow">Téléconsultation vidéo</p>
        <h1>Réserver une téléconsultation vidéo.</h1>
        <p>
          Choisissez votre créneau, effectuez le virement, envoyez votre
          justificatif, puis recevez la confirmation définitive de votre
          téléconsultation.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#reservation-video">
            Réserver une téléconsultation vidéo
          </a>
          <a className="secondary-button" href={`mailto:${teleconsultation.proofEmail}`}>
            Contacter le cabinet
          </a>
        </div>
      </section>

      <section className="section-shell teleconsultation-steps">
        {steps.map((step, index) => (
          <article key={step.title} className="teleconsultation-step">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </article>
        ))}
      </section>

      <section className="section-shell setup-note">
        <div>
          <p className="eyebrow">Configuration Calendly</p>
          <h2>Calendrier, Zoom et e-mail de confirmation.</h2>
        </div>
        <p>
          Le compte Calendly doit être connecté au calendrier Google ou Outlook
          de la docteure pour éviter les doubles réservations, puis au compte
          Zoom afin de générer automatiquement un lien vidéo unique. Le texte de
          confirmation Calendly doit rappeler que le rendez-vous sera confirmé
          après réception du paiement.
        </p>
      </section>

      <CalendlyBooking />
    </main>
  );
}
