import type { Metadata } from "next";
import Link from "next/link";
import { arabicFontVariables } from "../../fonts";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";
import {
  MobileActionBar,
  clinicPhoneHref,
  clinicWhatsappHref,
} from "../../../components/MobileActionBar";
import { PhoneIcon, WhatsAppIcon } from "../../../components/Icons";
import {
  absoluteUrl,
  googleReviewUrl,
  reviewRequestPath,
} from "../../../seo";
import {
  arFooterLabels,
  arHeaderLabels,
  arMobileActionBarLabels,
  arOgImage,
  metaAr,
  reviewRequestCopyAr as copy,
} from "../../../seo-ar";

/**
 * VERSION ARABE — page « رأيكم » `/ar/avis`.
 *
 * Miroir strict de `app/(fr)/avis/page.tsx`, rendu en RTL : mêmes sections,
 * mêmes composants, même lien de notation Google. Textes dans
 * `reviewRequestCopyAr` (`app/seo-ar.ts`), typés sur la version française.
 * `noindex` comme la page française, hors sitemap.
 */
const canonical = `/ar${reviewRequestPath}`;

export const metadata: Metadata = {
  title: copy.metaTitle,
  description: copy.metaDescription,
  alternates: {
    canonical,
    languages: {
      "fr-MA": reviewRequestPath,
      ar: canonical,
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
    url: canonical,
    siteName: metaAr.siteName,
    type: "website",
    locale: "ar_MA",
    alternateLocale: "fr_MA",
    images: [
      {
        url: arOgImage,
        width: 1200,
        height: 630,
        alt: metaAr.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: copy.metaTitle,
    description: copy.metaDescription,
    images: [absoluteUrl(arOgImage)],
  },
};

export default function ArabicReviewRequestPage() {
  return (
    <main
      id="main-content"
      lang="ar"
      dir="rtl"
      className={`service-page review-page ar-page ${arabicFontVariables}`}
    >
      <SiteHeader
        labels={arHeaderLabels}
        anchorPrefix="/ar#"
        homeHref="/ar"
        langSwitchHref={reviewRequestPath}
        panelLang="ar"
        panelDir="rtl"
        panelClassName={`ar-nav-panel ${arabicFontVariables}`}
      />
      <MobileActionBar labels={arMobileActionBarLabels} />
      {/* Cible du lien d'évitement arabe posé par `app/(ar)/layout.tsx`. */}
      <section id="ar-content" className="service-hero section-shell">
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
          <Link className="secondary-button" href="/ar">
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
      <SiteFooter
        labels={arFooterLabels}
        anchorPrefix="/ar#"
        langSwitchHref={reviewRequestPath}
      />
    </main>
  );
}
