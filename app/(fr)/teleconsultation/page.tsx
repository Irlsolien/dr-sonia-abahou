import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { MobileActionBar } from "../../components/MobileActionBar";
import { CalendlyEmbed } from "../../components/CalendlyEmbed";
import { PhoneIcon, WhatsAppIcon } from "../../components/Icons";
import {
  absoluteUrl,
  appointment,
  clinicAddress,
  clinicName,
  clinicPhoneDisplay,
  clinicPhoneInternational,
  clinicSecondaryPhoneDisplay,
  lastModified,
  ogCoverImage,
  siteName,
  siteUrl,
  teleconsultation,
} from "../../seo";

/**
 * TÉLÉCONSULTATION — Phase 1 (Calendly + Outlook Calendar + Zoom).
 *
 * Parcours patient : réservation d'un créneau via Calendly (chargé au clic,
 * consentement par action), confirmation par le cabinet, puis réception du lien
 * de visioconférence. Fournisseur visio géré par Calendly (Zoom dans la
 * configuration actuelle) : la formulation reste neutre côté patient pour ne
 * pas dépendre d'un outil précis.
 *
 * Périmètre public actuel = RÉSERVATION SEULE. Le volet paiement (virement +
 * preuve) n'est volontairement pas exposé : décisions client (montant, RIB,
 * canal de preuve) et cadre légal en cours. Ne rien réintroduire à ce sujet
 * sans validation.
 *
 * La page est indexable (réservation ouverte). Prérequis légaux d'ouverture de
 * la téléconsultation (autorisation télémédecine, formalités CNDP, consentement
 * patient — voir CLAUDE-HANDOFF §13) : relèvent du cabinet.
 *
 * Aucune donnée médicale n'est demandée à aucune étape. Aucun tarif, aucune
 * coordonnée bancaire n'est affiché.
 */

export const metadata: Metadata = {
  title: "Téléconsultation vidéo | Dr Sonia Abahou",
  description:
    "Réservez une téléconsultation vidéo avec le Dr Sonia Abahou, endocrinologue à Témara : choix du créneau en ligne et lien de visioconférence sécurisé.",
  alternates: {
    canonical: "/teleconsultation",
    languages: {
      "fr-MA": "/teleconsultation",
      ar: "/ar/teleconsultation",
      "x-default": "/teleconsultation",
    },
  },
  openGraph: {
    title: "Téléconsultation vidéo | Dr Sonia Abahou",
    description:
      "Consultez le Dr Sonia Abahou à distance : créneau en ligne et lien de visioconférence sécurisé.",
    url: "/teleconsultation",
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
    title: "Téléconsultation vidéo | Dr Sonia Abahou",
    description:
      "Consultez le Dr Sonia Abahou à distance : créneau en ligne et lien de visioconférence sécurisé.",
    images: [absoluteUrl(ogCoverImage)],
  },
};

const phoneHref = `tel:${clinicPhoneInternational}`;
const whatsappHref = `https://wa.me/${appointment.whatsappPhone}?text=${encodeURIComponent(
  appointment.whatsappMessage,
)}`;

/* Étapes du parcours. Le contenu reste générique : aucune donnée médicale.
   Le volet paiement n'est pas encore ouvert au public (décisions client et
   cadre légal en cours) : il n'est donc pas décrit ici. */
const steps = [
  {
    title: "Choisissez votre créneau",
    text: "Sélectionnez une date et une heure disponibles directement en ligne, sans passer par le secrétariat.",
  },
  {
    title: "Recevez votre confirmation",
    text: "Le cabinet confirme le rendez-vous et vous précise les modalités pratiques de la consultation.",
  },
  {
    title: "Recevez votre lien de consultation",
    text: "Vous recevez par email le lien de visioconférence sécurisé, strictement personnel, à ouvrir à l’heure du rendez-vous.",
  },
] as const;

const teleconsultationFaq = [
  {
    question: "Comment se déroule la téléconsultation ?",
    answer:
      "La consultation se déroule par visioconférence sécurisée. Le lien vous est envoyé par email après la confirmation du rendez-vous ; il vous suffit de l’ouvrir à l’heure convenue.",
  },
  {
    question: "Quand est-ce que je reçois le lien de visioconférence ?",
    answer:
      "Le lien vous est adressé après la confirmation du rendez-vous par le cabinet. Il est strictement personnel et ne doit pas être partagé.",
  },
  {
    question: "Que dois-je indiquer lors de la réservation ?",
    answer:
      "Seulement votre nom, votre email et un motif général. Ne transmettez aucune information médicale sensible, ordonnance ou résultat d’analyse dans le formulaire de réservation.",
  },
  {
    question: "Les rendez-vous au cabinet restent-ils possibles ?",
    answer:
      "Oui. Les consultations au cabinet restent accessibles par téléphone et WhatsApp, en parallèle de la téléconsultation vidéo.",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${absoluteUrl("/teleconsultation")}#webpage`,
      name: "Téléconsultation vidéo — Dr Sonia Abahou",
      description:
        "Réservation d’une téléconsultation vidéo d’endocrinologie avec le Dr Sonia Abahou à Témara.",
      url: absoluteUrl("/teleconsultation"),
      inLanguage: "fr-MA",
      dateModified: lastModified,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#clinic` },
    },
    {
      "@type": "MedicalClinic",
      "@id": `${siteUrl}/#clinic`,
      name: clinicName,
      telephone: clinicPhoneInternational,
      availableService: {
        "@type": "MedicalProcedure",
        name: "Téléconsultation d’endocrinologie",
        procedureType: "https://schema.org/NoninvasiveProcedure",
      },
    },
  ],
};

export default function TeleconsultationPage() {
  return (
    <main id="main-content" className="appointment-page teleconsultation-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <SiteHeader internal />

      <MobileActionBar />

      {/* Cible du lien d'évitement français posé par `app/(fr)/layout.tsx`. */}
      <section
        id="fr-content"
        className="appointment-hero teleconsultation-hero section-shell"
      >
        <p className="eyebrow">Téléconsultation vidéo</p>
        <h1>Consultez votre médecin à distance.</h1>
        <p>
          Réservez une téléconsultation vidéo avec le Dr Sonia Abahou en
          quelques étapes : choisissez un créneau, recevez la confirmation du
          cabinet, puis votre lien de visioconférence sécurisé. Indiquez
          uniquement un motif général — ne transmettez aucune donnée médicale
          sensible dans les formulaires.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#reserver">
            Choisir un créneau
          </a>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Comment ça marche</p>
          <h2>Votre parcours de téléconsultation.</h2>
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

      <section id="reserver" className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Réservation</p>
          <h2>Choisissez votre créneau.</h2>
        </div>
        <CalendlyEmbed
          url={teleconsultation.calendlyUrl}
          labels={{
            title: "Ouvrir le calendrier de réservation",
            hint: "Le calendrier Calendly s’ouvre à la demande. Aucune information médicale ne doit y être saisie : indiquez seulement votre nom, votre email et un motif général.",
            cta: "Choisir un créneau",
            loading: "Ouverture du calendrier…",
            consentNote:
              "En ouvrant le calendrier, le service tiers Calendly est chargé et peut déposer des cookies nécessaires à son fonctionnement.",
          }}
        />
      </section>

      <section className="section-shell appointment-privacy">
        <strong>Confidentialité</strong>
        <p>
          Ne transmettez aucune information médicale, ordonnance, résultat
          d’analyse ou document de santé dans le formulaire de réservation. Vos
          données servent uniquement à gérer le rendez-vous. Les modalités
          pratiques de la consultation vous sont précisées par le cabinet.
        </p>
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
        <strong>Besoin d’aide pour réserver ?</strong>
        <p>
          Adresse : {clinicAddress}. Fixe : {clinicPhoneDisplay}. Portable /
          WhatsApp : {clinicSecondaryPhoneDisplay}. Le secrétariat peut vous
          accompagner par téléphone ou WhatsApp.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href={phoneHref}>
            <PhoneIcon />
            Appeler le cabinet
          </a>
          <a
            className="secondary-button whatsapp-button"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Écrire sur WhatsApp
          </a>
        </div>
        <div className="hero-actions">
          <Link className="text-link" href="/rendez-vous">
            Voir les options de rendez-vous
          </Link>
        </div>
      </section>

      <SiteFooter internal />
    </main>
  );
}
