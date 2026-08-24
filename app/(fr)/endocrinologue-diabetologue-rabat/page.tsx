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
  doctorName,
  doctorProfilePath,
  doctorRegionalCouncil,
  googleMapsPlaceUrl,
  lastModified,
  services,
  siteName,
  siteUrl,
} from "../../seo";
import { entityNodes, speakableSpecification } from "../../geo";

/**
 * Page géolocalisée « Rabat ».
 *
 * Objectif SEO : capter les recherches « endocrinologue / diabétologue Rabat »
 * (volume réel constaté dans Search Console) sans devenir une *doorway page*.
 * Le cabinet est physiquement à Massira 1, Témara ; la page l'assume et repose
 * uniquement sur des faits validés : la proximité de l'agglomération de Rabat,
 * et le parcours rabati du médecin (CHU de Rabat, hôpital militaire de Rabat,
 * inscription à l'Ordre des médecins de Rabat). Aucun cabinet ni adresse à
 * Rabat n'est inventé.
 */

const canonical = "/endocrinologue-diabetologue-rabat";
const arabicPath = "/ar/endocrinologue-diabetologue-rabat";
const pageUrl = absoluteUrl(canonical);
const mapsHref = googleMapsPlaceUrl;

const seoTitle = "Endocrinologue diabétologue Rabat–Témara | Dr Sonia Abahou";
const seoDescription =
  "Endocrinologue et diabétologue consultant à Massira 1, Témara, aux portes de Rabat : diabète, thyroïde, nutrition et maladies métaboliques. Dr Sonia Abahou, présidente de la Société Marocaine de Diabétologie.";

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  keywords: [
    "endocrinologue Rabat",
    "diabétologue Rabat",
    "endocrinologue diabète Rabat",
    "endocrinologue Témara",
    "diabétologue Témara",
    "nutritionniste Rabat",
  ],
  alternates: {
    canonical,
    languages: {
      "fr-MA": canonical,
      ar: arabicPath,
      "x-default": canonical,
    },
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: canonical,
    siteName,
    type: "website",
    locale: "fr_MA",
    images: [
      {
        url: "/dr-sonia-abahou.jpg",
        width: 1200,
        height: 630,
        alt: "Dr Sonia Abahou — endocrinologue et diabétologue pour Rabat et Témara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [absoluteUrl("/dr-sonia-abahou.jpg")],
  },
};

const rabatFaqItems = [
  {
    question: "Le cabinet du Dr Sonia Abahou est-il à Rabat ?",
    answer:
      "Le cabinet est situé à Massira 1, Témara, dans l’agglomération de Rabat-Salé-Témara, à quelques minutes de Rabat. Il accueille des patients de Rabat, Salé et Témara pour un suivi en endocrinologie, diabétologie et nutrition.",
  },
  {
    question: "Le Dr Sonia Abahou suit-elle des patients venant de Rabat ?",
    answer:
      "Oui. Endocrinologue et diabétologue, elle reçoit régulièrement des patients de Rabat et de sa région. Son parcours est ancré à Rabat : ancien médecin au centre hospitalier universitaire de Rabat et à l’hôpital militaire de Rabat, elle est inscrite au Conseil régional de l’Ordre des médecins de Rabat.",
  },
  {
    question: "Comment prendre rendez-vous depuis Rabat ?",
    answer: `Le rendez-vous se confirme par téléphone ou WhatsApp auprès du cabinet. Fixe : ${clinicPhoneDisplay}. Portable / WhatsApp : ${clinicSecondaryPhoneDisplay}. Adresse : ${clinicAddress}.`,
  },
] as const;

const pageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Endocrinologue et diabétologue pour Rabat",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "MedicalWebPage",
      "@id": `${pageUrl}#webpage`,
      name: seoTitle,
      description: seoDescription,
      url: pageUrl,
      inLanguage: "fr-MA",
      dateModified: lastModified,
      lastReviewed: lastModified,
      reviewedBy: {
        "@id": `${absoluteUrl(doctorProfilePath)}#doctor`,
      },
      speakable: speakableSpecification,
      medicalAudience: "https://schema.org/Patient",
      specialty: "https://schema.org/Endocrine",
      about: entityNodes(["endocrinologie", "diabete"], "fr"),
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      workTranslation: {
        "@id": `${absoluteUrl(arabicPath)}#webpage`,
      },
      publisher: {
        "@id": `${siteUrl}/#clinic`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl("/dr-sonia-abahou.jpg"),
      },
    },
    /* Même nœud `#clinic` partagé que les autres pages : on n'y ajoute que la
       zone desservie, honnête pour un cabinet de l'agglomération de Rabat. */
    {
      "@type": "MedicalClinic",
      "@id": `${siteUrl}/#clinic`,
      name: clinicName,
      telephone: [clinicPhoneInternational, clinicSecondaryPhoneInternational],
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
      areaServed: [
        { "@type": "City", name: "Rabat" },
        { "@type": "City", name: "Témara" },
        { "@type": "City", name: "Salé" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      isPartOf: {
        "@id": `${pageUrl}#webpage`,
      },
      mainEntity: rabatFaqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function RabatPage() {
  return (
    <main id="main-content" className="service-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />

      <SiteHeader internal langSwitchHref={arabicPath} />

      <MobileActionBar />

      {/* Cible du lien d'évitement français posé par `app/(fr)/layout.tsx`. */}
      <section id="fr-content" className="service-hero section-shell">
        <p className="eyebrow">Cabinet d’endocrinologie aux portes de Rabat</p>
        <h1>Endocrinologue et diabétologue pour Rabat et Témara.</h1>
        <p>
          Le cabinet du {doctorName} se trouve à Massira 1, Témara, dans
          l’agglomération de Rabat-Salé-Témara. Il accueille les patients de
          Rabat, Salé et Témara pour le suivi du diabète, de la thyroïde, de la
          nutrition et des maladies métaboliques.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" href="/rendez-vous">
            Prendre rendez-vous
          </Link>
          <a className="secondary-button" href={clinicPhoneHref}>
            <PhoneIcon />
            Appeler
          </a>
          <a
            className="secondary-button whatsapp-button"
            href={clinicWhatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            WhatsApp
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
      </section>

      <section className="section-shell quick-answer-section">
        <div className="quick-answer">
          <p className="eyebrow">Réponse rapide</p>
          <p className="quick-answer-text">
            {doctorName}, endocrinologue et diabétologue, consulte au cabinet de
            Massira 1, Témara, à quelques minutes de Rabat. Rendez-vous par
            téléphone ({clinicPhoneDisplay}) ou WhatsApp (
            {clinicSecondaryPhoneDisplay}).
          </p>
        </div>
      </section>

      <section className="section-shell service-detail-grid">
        <article className="service-focus-card care-diabetes">
          <span>Aux portes de Rabat</span>
          <h2>Un cabinet dans l’agglomération de Rabat.</h2>
          <p>
            Situé à Massira 1, Témara, le cabinet est facilement accessible
            depuis Rabat et Salé. Les patients de la région y trouvent un suivi
            endocrinologique de proximité, sans se déplacer au centre de Rabat.
            Adresse : {clinicAddress}.
          </p>
        </article>
        <article className="service-info-card">
          <h2>Un parcours ancré à Rabat</h2>
          <ol className="service-points-list">
            <li className="service-point">
              <span className="service-point-index">01</span>
              <p>
                Ancien médecin au centre hospitalier universitaire de Rabat.
              </p>
            </li>
            <li className="service-point">
              <span className="service-point-index">02</span>
              <p>Ancien médecin attaché à l’hôpital militaire de Rabat.</p>
            </li>
            <li className="service-point">
              <span className="service-point-index">03</span>
              <p>Inscrite au {doctorRegionalCouncil}.</p>
            </li>
            <li className="service-point">
              <span className="service-point-index">04</span>
              <p>
                Fondatrice et présidente de la Société Marocaine de Diabétologie
                (SMD).
              </p>
            </li>
          </ol>
        </article>
      </section>

      <section className="section-shell related-services-section">
        <div className="related-services-intro">
          <div className="section-heading related-services-heading">
            <p className="eyebrow">Motifs de consultation</p>
            <h2>Ce que le cabinet prend en charge.</h2>
          </div>
          <Link className="text-link" href="/">
            Voir tous les motifs à l’accueil
          </Link>
        </div>
        <div className="care-index-compact">
          {services.map((item, index) => (
            <Link
              key={item.slug}
              className="care-row-compact"
              href={`/${item.slug}`}
            >
              <span className="care-row-compact-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="care-row-compact-title">{item.title}</span>
              <span className="care-row-compact-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell faq-section">
        <div className="section-heading">
          <p className="eyebrow">Questions fréquentes</p>
          <h2>Patients de Rabat et de sa région.</h2>
        </div>
        <div className="faq-grid">
          {rabatFaqItems.map((item) => (
            <article key={item.question} className="faq-card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta section-shell">
        <div>
          <p className="eyebrow">Rendez-vous</p>
          <h2>Contacter le cabinet du {doctorName}.</h2>
          <p>
            Adresse : {clinicAddress}. Téléphone fixe : {clinicPhoneDisplay}.
            Portable / WhatsApp : {clinicSecondaryPhoneDisplay}.
          </p>
        </div>
        <div className="cta-stack">
          <Link className="primary-button" href="/rendez-vous">
            Rendez-vous
          </Link>
          <a
            className="secondary-button"
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir l’itinéraire
          </a>
        </div>
      </section>

      <SiteFooter internal langSwitchHref={arabicPath} />
    </main>
  );
}
