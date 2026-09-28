import type { Metadata } from "next";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { MobileActionBar } from "../../components/MobileActionBar";
import { PhoneIcon, WhatsAppIcon } from "../../components/Icons";
import {
  absoluteUrl,
  appointment,
  appointmentSteps,
  clinicAddress,
  clinicAlternateNames,
  clinicCity,
  clinicCountry,
  clinicName,
  clinicPhoneDisplay,
  clinicPhoneInternational,
  clinicPostalCode,
  clinicSecondaryPhoneDisplay,
  clinicSecondaryPhoneInternational,
  clinicStreetAddress,
  doctorName,
  googleMapsPlaceUrl,
  lastModifiedFor,
  ogCoverImage,
  openingHours,
  siteName,
  siteUrl,
} from "../../seo";
import { openingHoursSpecification } from "../../structured-data";

/* Page d'arrivée des recherches « rendez-vous » : elle répond d'abord aux
   questions pratiques (comment, quand, où). La téléconsultation, encore en
   préparation, reste mentionnée plus bas mais n'apparaît ni dans le titre ni
   dans la description. */
const seoTitle = "Prendre rendez-vous au cabinet à Témara | Dr Sonia Abahou";
const seoDescription =
  "Rendez-vous au cabinet du Dr Sonia Abahou à Témara (Massira 1), par téléphone ou WhatsApp. Horaires, adresse, itinéraire et documents à apporter.";

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
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
    title: seoTitle,
    description: seoDescription,
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
    title: seoTitle,
    description: seoDescription,
    images: [absoluteUrl(ogCoverImage)],
  },
};

const phoneHref = `tel:${clinicPhoneInternational}`;
const whatsappHref = `https://wa.me/${appointment.whatsappPhone}?text=${encodeURIComponent(
  appointment.whatsappMessage,
)}`;
const mapsHref = googleMapsPlaceUrl;

const appointmentStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${absoluteUrl("/rendez-vous")}#webpage`,
      name: "Prendre rendez-vous avec le Dr Sonia Abahou",
      description:
        "Coordonnées, horaires et accès pour prendre rendez-vous au cabinet du Dr Sonia Abahou à Témara.",
      url: absoluteUrl("/rendez-vous"),
      inLanguage: "fr-MA",
      dateModified: lastModifiedFor("/rendez-vous"),
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
      alternateName: [...clinicAlternateNames],
      telephone: [clinicPhoneInternational, clinicSecondaryPhoneInternational],
      hasMap: mapsHref,
      /* Même forme structurée que le nœud `#clinic` de l'accueil : les deux
         descriptions partagent le même `@id`, elles doivent décrire l'adresse
         et les horaires de façon identique. */
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
      openingHoursSpecification,
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

      <SiteHeader internal langSwitchHref="/ar/rendez-vous" />

      <MobileActionBar />

      {/* Cible du lien d'évitement français posé par `app/(fr)/layout.tsx`. */}
      <section id="fr-content" className="appointment-hero section-shell">
        <p className="eyebrow">Rendez-vous</p>
        <h1>Prendre rendez-vous au cabinet à Témara.</h1>
        <p>
          Le cabinet du {doctorName}, à Massira 1 ({clinicCity}), reçoit
          uniquement sur rendez-vous. Contactez le secrétariat par appel ou
          WhatsApp : il confirme la disponibilité et les modalités pratiques du
          rendez-vous.
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
            <strong>
              Fixe :{" "}
              <span className="appointment-phone">{clinicPhoneDisplay}</span>
            </strong>
            <strong>
              Portable / WhatsApp :{" "}
              <span className="appointment-phone">
                {clinicSecondaryPhoneDisplay}
              </span>
            </strong>
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
            <a
              className="secondary-button"
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir l’itinéraire
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

      {/* Horaires et accès : mêmes données que l'accueil (`openingHours`,
          FAQ accès et règlement), présentées avec les mêmes blocs. */}
      <section className="section-shell appointment-practical">
        <div className="section-heading">
          <p className="eyebrow">Informations pratiques</p>
          <h2>Horaires et accès au cabinet.</h2>
        </div>
        <div className="service-detail-grid">
          <div className="hours-panel">
            <h3>Horaires d’ouverture</h3>
            <div className="hours-list">
              {openingHours.map(([day, time]) => (
                <div key={day}>
                  <span>{day}</span>
                  <strong>{time}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="hours-panel appointment-access">
            <h3>Adresse et accès</h3>
            <p>{clinicAddress}.</p>
            <p>
              L’accès du cabinet est adapté aux personnes à mobilité réduite ;
              le secrétariat renseigne sur les modalités pratiques d’accès.
            </p>
            <p>Le cabinet accepte les cartes Visa et MasterCard.</p>
            <div className="hero-actions">
              <a
                className="primary-button"
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ouvrir l’itinéraire GPS
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell contact-steps-section">
        <div className="section-heading">
          <p className="eyebrow">Prise de rendez-vous</p>
          <h2>Comment se passe la prise de rendez-vous.</h2>
        </div>
        <div className="contact-steps-grid">
          {appointmentSteps.map((step, index) => (
            <article key={step.title} className="contact-step-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell appointment-privacy">
        <strong>Confidentialité médicale</strong>
        <p>
          Pour la prise de rendez-vous, indiquez uniquement un motif général.
          N’envoyez pas de documents médicaux sensibles via WhatsApp ou tout
          formulaire non validé par le cabinet.
        </p>
      </section>

      <SiteFooter internal langSwitchHref="/ar/rendez-vous" />
    </main>
  );
}
