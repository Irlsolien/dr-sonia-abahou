import type { Metadata } from "next";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { MobileActionBar } from "../../components/MobileActionBar";
import { PhoneIcon, WhatsAppIcon } from "../../components/Icons";
import {
  absoluteUrl,
  appointment,
  clinicAddress,
  clinicCity,
  clinicCountry,
  clinicName,
  clinicPhoneDisplay,
  clinicPhoneInternational,
  clinicPostalCode,
  clinicSecondaryPhoneDisplay,
  clinicSecondaryPhoneInternational,
  clinicStreetAddress,
  lastModified,
  ogCoverImage,
  siteName,
  siteUrl,
} from "../../seo";

export const metadata: Metadata = {
  title: "Prendre rendez-vous | Dr Sonia Abahou",
  description:
    "Contacter le cabinet du Dr Sonia Abahou pour un rendez-vous. La réservation vidéo est temporairement en maintenance.",
  alternates: {
    canonical: "/rendez-vous",
    /* Page jumelle arabe : même contenu, langue différente. */
    languages: {
      "fr-MA": "/rendez-vous",
      ar: "/ar/rendez-vous",
      /* Version servie par défaut aux visiteurs dont la langue n'est ni le
         français ni l'arabe. */
      "x-default": "/rendez-vous",
    },
  },
  openGraph: {
    title: "Prendre rendez-vous | Dr Sonia Abahou",
    description:
      "Contacter le cabinet par appel ou WhatsApp. La réservation vidéo est temporairement en maintenance.",
    url: "/rendez-vous",
    siteName,
    type: "website",
    locale: "fr_MA",
    /* Une page qui déclare son propre bloc `openGraph` remplace entièrement
       celui du layout : sans cette image, un partage WhatsApp ou Facebook de
       la page de rendez-vous s'affichait sans visuel. Même image de partage
       que les autres pages sans visuel propre. */
    images: [
      {
        url: ogCoverImage,
        width: 1200,
        height: 630,
        alt: "Dr Sonia Abahou — Endocrinologie, diabétologie, nutrition à Témara",
      },
    ],
  },
  /* Idem pour la carte Twitter : sans bloc propre, la page héritait du titre
     et de la description de l'accueil, qui ne décrivent pas cette page. */
  twitter: {
    card: "summary_large_image",
    title: "Prendre rendez-vous | Dr Sonia Abahou",
    description:
      "Contacter le cabinet par appel ou WhatsApp. La réservation vidéo est temporairement en maintenance.",
    images: [absoluteUrl(ogCoverImage)],
  },
};

const phoneHref = `tel:${clinicPhoneInternational}`;
const whatsappHref = `https://wa.me/${appointment.whatsappPhone}?text=${encodeURIComponent(
  appointment.whatsappMessage,
)}`;

const appointmentStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${absoluteUrl("/rendez-vous")}#webpage`,
      name: "Prendre rendez-vous avec le Dr Sonia Abahou",
      description:
        "Coordonnées pour prendre rendez-vous avec le cabinet du Dr Sonia Abahou à Témara.",
      url: absoluteUrl("/rendez-vous"),
      inLanguage: "fr-MA",
      dateModified: lastModified,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#clinic`,
      },
    },
    {
      "@type": "MedicalClinic",
      "@id": `${siteUrl}/#clinic`,
      name: clinicName,
      telephone: [clinicPhoneInternational, clinicSecondaryPhoneInternational],
      /* Même forme structurée que le nœud `#clinic` de l'accueil : les deux
         descriptions partagent le même `@id`, elles doivent décrire l'adresse
         de façon identique. */
      address: {
        "@type": "PostalAddress",
        streetAddress: clinicStreetAddress,
        postalCode: clinicPostalCode,
        addressLocality: clinicCity,
        addressCountry: clinicCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.928046,
        longitude: -6.8987233,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: clinicPhoneInternational,
          contactType: "Prise de rendez-vous",
          availableLanguage: "fr",
        },
        {
          "@type": "ContactPoint",
          telephone: clinicSecondaryPhoneInternational,
          contactType: "Téléphone portable et WhatsApp du cabinet",
          availableLanguage: "fr",
        },
      ],
    },
  ],
};

export default function AppointmentPage() {
  return (
    <main id="main-content" className="appointment-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appointmentStructuredData),
        }}
      />

      <SiteHeader internal />

      <MobileActionBar />

      {/* Cible du lien d'évitement français posé par `app/(fr)/layout.tsx`. */}
      <section id="fr-content" className="appointment-hero section-shell">
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
            <strong>Fixe : {clinicPhoneDisplay}</strong>
            <strong>Portable / WhatsApp : {clinicSecondaryPhoneDisplay}</strong>
            <small>{clinicAddress}</small>
          </div>
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
        </article>

        <article className="appointment-card appointment-card-video appointment-card-compact">
          <span>En préparation</span>
          <h2>Téléconsultation vidéo</h2>
          <p>
            La réservation vidéo n’est pas encore ouverte aux patients. En
            attendant, le cabinet reste joignable par téléphone ou WhatsApp.
          </p>
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

      <SiteFooter internal />
    </main>
  );
}
