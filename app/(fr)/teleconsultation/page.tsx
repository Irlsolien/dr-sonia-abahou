import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { PhoneIcon, WhatsAppIcon } from "../../components/Icons";
import {
  appointment,
  clinicAddress,
  clinicPhoneDisplay,
  clinicPhoneInternational,
  clinicSecondaryPhoneDisplay,
  siteName,
} from "../../seo";

export const metadata: Metadata = {
  title: "Téléconsultation en maintenance | Dr Sonia Abahou",
  description:
    "La réservation de téléconsultation vidéo du cabinet Dr Sonia Abahou est temporairement en maintenance.",
  alternates: {
    canonical: "/teleconsultation",
  },
  robots: {
    index: false,
    follow: true,
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

const steps = [
  {
    title: "Réserver un créneau",
    text: "Un créneau disponible sera proposé en ligne dès l’ouverture du service, sans passer par le cabinet.",
  },
  {
    title: "Recevoir un lien vidéo sécurisé",
    text: "Un lien de visioconférence sécurisé sera transmis avant la consultation pour l’échange à distance.",
  },
  {
    title: "Consultation et suivi",
    text: "L’échange se déroule comme une consultation classique, avec un suivi adapté à la situation du patient.",
  },
] as const;

const teleconsultationFaq = [
  {
    question: "Quand la téléconsultation sera-t-elle disponible ?",
    answer:
      "Le service est en cours de préparation. Aucune date d’ouverture précise n’est communiquée pour le moment.",
  },
  {
    question: "Comment être informé de l’ouverture du service ?",
    answer:
      "Le cabinet informera les patients par téléphone et par WhatsApp dès que la téléconsultation sera disponible.",
  },
  {
    question: "Les rendez-vous au cabinet continuent-ils normalement ?",
    answer:
      "Oui. Les consultations au cabinet restent accessibles par téléphone et WhatsApp, sans aucune interruption.",
  },
] as const;

export default function TeleconsultationMaintenancePage() {
  return (
    <main id="main-content" className="appointment-page teleconsultation-page">
      <SiteHeader internal />

      <section className="appointment-hero teleconsultation-hero section-shell">
        <p className="eyebrow">Téléconsultation vidéo</p>
        <h1>Fonctionnalité en maintenance.</h1>
        <p>
          La réservation de téléconsultation vidéo est en cours de préparation.
          Elle sera proposée avec un parcours sécurisé, sans date précise pour
          le moment. En attendant, merci de contacter le cabinet par téléphone
          ou WhatsApp.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href={phoneHref}>
            <PhoneIcon />
            Appeler le cabinet
          </a>
          <a
            className="secondary-button"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon />
            Écrire sur WhatsApp
          </a>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">À venir</p>
          <h2>Le futur parcours de téléconsultation.</h2>
        </div>
        <div className="teleconsultation-steps">
          {steps.map((step, index) => (
            <article key={step.title} className="teleconsultation-step">
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell faq-section">
        <div className="section-heading faq-heading">
          <h2>Questions fréquentes sur la téléconsultation.</h2>
        </div>
        <div className="faq-grid">
          {teleconsultationFaq.map((item) => (
            <details key={item.question} className="faq-card">
              <summary>
                <span>{item.question}</span>
                <i aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section-shell appointment-privacy">
        <strong>En attendant, le cabinet reste joignable</strong>
        <p>
          Adresse : {clinicAddress}. Fixe : {clinicPhoneDisplay}. Portable /
          WhatsApp : {clinicSecondaryPhoneDisplay}. Pour confirmer un
          rendez-vous au cabinet, contactez le secrétariat par appel ou
          WhatsApp.
        </p>
        <div className="hero-actions">
          <Link className="secondary-button" href="/rendez-vous">
            Voir les options de rendez-vous
          </Link>
        </div>
      </section>

      <SiteFooter internal />
    </main>
  );
}
