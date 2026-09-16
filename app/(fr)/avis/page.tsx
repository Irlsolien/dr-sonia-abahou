import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import {
  MobileActionBar,
  clinicPhoneHref,
  clinicWhatsappHref,
} from "../../components/MobileActionBar";
import { PhoneIcon, WhatsAppIcon } from "../../components/Icons";
import {
  absoluteUrl,
  googleReviewUrl,
  ogCoverImage,
  reviewRequestCopy as copy,
  reviewRequestPath,
  siteName,
} from "../../seo";

/**
 * Page « Votre avis » `/avis`.
 *
 * Point d'atterrissage de la sollicitation d'avis Google : QR code remis au
 * cabinet, message WhatsApp après la consultation, affiche en salle
 * d'attente. Elle n'est pas destinée aux visiteurs de passage, d'où le
 * `noindex` et son absence du sitemap ; elle reste liée depuis la section
 * Avis de l'accueil pour les patients qui la cherchent.
 *
 * Règles Google appliquées : demande adressée à tous, sans tri ni récompense,
 * aucun texte dicté ; rappel qu'un avis est public et qu'il ne doit contenir
 * aucun détail médical personnel.
 */
export const metadata: Metadata = {
  title: copy.metaTitle,
  description: copy.metaDescription,
  alternates: {
    canonical: reviewRequestPath,
    languages: {
      "fr-MA": reviewRequestPath,
      ar: `/ar${reviewRequestPath}`,
      "x-default": reviewRequestPath,
    },
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: copy.metaTitle,
    description: copy.metaDescription,
    url: reviewRequestPath,
    siteName,
    type: "website",
    locale: "fr_MA",
    images: [
      {
        url: ogCoverImage,
        width: 1200,
        height: 630,
        alt: "Dr Sonia Abahou — Endocrinologie, diabétologie, nutrition à Témara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: copy.metaTitle,
    description: copy.metaDescription,
    images: [absoluteUrl(ogCoverImage)],
  },
};

export default function ReviewRequestPage() {
  return (
    <main id="main-content" className="service-page review-page">
      <SiteHeader internal langSwitchHref={`/ar${reviewRequestPath}`} />
      <MobileActionBar />
      {/* Cible du lien d'évitement français posé par `app/(fr)/layout.tsx`. */}
      <section id="fr-content" className="service-hero section-shell">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.lead}</p>
        <p className="review-signature">— {copy.signature}</p>
        <div className="hero-actions">
          <a
            className="primary-button"
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.reviewButton}
          </a>
          <Link className="secondary-button" href="/">
            {copy.homeButton}
          </Link>
        </div>
      </section>

      <section className="section-shell contact-steps-section">
        <div className="section-heading">
          <p className="eyebrow">{copy.topicsEyebrow}</p>
          <h2>{copy.topicsTitle}</h2>
        </div>
        <div className="contact-steps-grid">
          {copy.topics.map((topic, index) => (
            <article key={topic.title} className="contact-step-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </article>
          ))}
        </div>
        <p className="review-privacy">{copy.privacyNote}</p>
      </section>

      <section className="section-shell faq-section">
        <div className="section-heading">
          <p className="eyebrow">{copy.faqEyebrow}</p>
          <h2>{copy.faqTitle}</h2>
        </div>
        <div className="faq-grid">
          {copy.faq.map((item) => (
            <article key={item.question} className="faq-card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta section-shell">
        <div>
          <p className="eyebrow">{copy.contactEyebrow}</p>
          <h2>{copy.contactTitle}</h2>
          <p>{copy.contactText}</p>
        </div>
        <div className="cta-stack">
          <a className="secondary-button" href={clinicPhoneHref}>
            <PhoneIcon />
            {copy.callLabel}
          </a>
          <a
            className="secondary-button whatsapp-button"
            href={clinicWhatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            {copy.whatsappLabel}
          </a>
        </div>
      </section>
      <SiteFooter internal langSwitchHref={`/ar${reviewRequestPath}`} />
    </main>
  );
}
