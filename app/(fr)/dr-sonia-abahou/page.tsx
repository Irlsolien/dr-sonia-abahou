import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { MobileActionBar } from "../../components/MobileActionBar";
import {
  absoluteUrl,
  clinicCity,
  clinicName,
  doctorAlternateName,
  doctorCredentials,
  doctorInpe,
  doctorName,
  doctorOrderNumber,
  doctorProfilePath,
  doctorProfessionalProfiles,
  doctorRegionalCouncil,
  doctorSameAsProfiles,
  lastModified,
  professionalGallery,
  services,
  siteName,
  siteUrl,
} from "../../seo";
import { clinicEntities, entityNodes, speakableSpecification } from "../../geo";

const lastModifiedLabel = new Intl.DateTimeFormat("fr-MA", {
  day: "numeric",
  month: "long",
  year: "numeric",
}).format(new Date(`${lastModified}T12:00:00+01:00`));

export const metadata: Metadata = {
  title: "Dr Sonia Abahou, endocrinologue à Témara | Parcours",
  description:
    "Découvrez le parcours du Dr Sonia Abahou, médecin spécialiste en endocrinologie, diabétologie, nutrition et maladies métaboliques à Témara.",
  alternates: {
    canonical: doctorProfilePath,
    languages: {
      "fr-MA": doctorProfilePath,
      ar: `/ar${doctorProfilePath}`,
      "x-default": doctorProfilePath,
    },
  },
  openGraph: {
    title: "Dr Sonia Abahou, endocrinologue à Témara",
    description:
      "Parcours, domaines d’expertise et repères professionnels du Dr Sonia Abahou à Témara.",
    url: doctorProfilePath,
    siteName,
    type: "profile",
    locale: "fr_MA",
    images: [
      {
        url: "/dr-sonia-abahou.jpg",
        width: 560,
        height: 560,
        alt: "Portrait du Dr Sonia Abahou",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Dr Sonia Abahou, endocrinologue à Témara",
    description:
      "Parcours et domaines d’expertise du Dr Sonia Abahou à Témara.",
    images: [absoluteUrl("/dr-sonia-abahou.jpg")],
  },
};

const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${absoluteUrl(doctorProfilePath)}#profile`,
      url: absoluteUrl(doctorProfilePath),
      name: `${doctorName}, endocrinologue à Témara`,
      description:
        "Parcours et domaines d’expertise du Dr Sonia Abahou, médecin spécialiste à Témara.",
      inLanguage: "fr-MA",
      dateModified: lastModified,
      /* Contenu de santé : date de relecture et médecin qui en répond. */
      lastReviewed: lastModified,
      reviewedBy: {
        "@id": `${absoluteUrl(doctorProfilePath)}#doctor`,
      },
      speakable: speakableSpecification,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      mainEntity: {
        "@id": `${absoluteUrl(doctorProfilePath)}#doctor`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl("/dr-sonia-abahou.jpg"),
      },
    },
    {
      "@type": "Person",
      "@id": `${absoluteUrl(doctorProfilePath)}#doctor`,
      name: doctorName,
      alternateName: doctorAlternateName,
      honorificPrefix: "Dr",
      jobTitle:
        "Médecin spécialiste en endocrinologie, diabétologie, nutrition et maladies métaboliques",
      description:
        "Médecin spécialiste en endocrinologie, diabétologie, nutrition et maladies métaboliques exerçant à Témara.",
      image: absoluteUrl("/dr-sonia-abahou.jpg"),
      url: absoluteUrl(doctorProfilePath),
      sameAs: [...doctorSameAsProfiles],
      identifier: [
        {
          "@type": "PropertyValue",
          name: "INPE",
          value: doctorInpe,
        },
        {
          "@type": "PropertyValue",
          name: "Numéro ordinal",
          value: doctorOrderNumber,
        },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Spécialité médicale",
          name: "Endocrinologie, diabétologie, nutrition et maladies métaboliques",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Diplôme universitaire",
          name: "Échographie cervicale - Paris V",
        },
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Paris V",
      },
      /* Reprise stricte de la légende de la photographie publiée sur
         l'accueil : aucune distinction supplémentaire n'est déclarée. */
      award: "Distinction « Tous Unis Contre le Diabète », remise lors d’un congrès de diabétologie",
      hasOccupation: {
        "@type": "Occupation",
        name: "Médecin endocrinologue, diabétologue et nutritionniste",
        occupationLocation: {
          "@type": "City",
          name: clinicCity,
        },
      },
      worksFor: {
        "@id": `${siteUrl}/#clinic`,
      },
      workLocation: {
        "@id": `${siteUrl}/#clinic`,
      },
      affiliation: {
        "@type": "MedicalOrganization",
        name: doctorRegionalCouncil,
      },
      memberOf: [
        {
          "@type": "Organization",
          name: "Global Metabolic Health Alliance",
          url: "https://gmha.global",
        },
        {
          "@type": "Organization",
          name: "Pan Arab Society for Interventional Endocrinology and Diabetes Technology",
        },
      ],
      /* Mêmes entités que le nœud `#doctor` de l'accueil : les deux pages
         décrivent la même personne sous le même `@id`, leurs déclarations ne
         doivent pas diverger. */
      knowsAbout: entityNodes(clinicEntities, "fr"),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${absoluteUrl(doctorProfilePath)}#breadcrumb`,
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
          name: doctorName,
          item: absoluteUrl(doctorProfilePath),
        },
      ],
    },
  ],
};

export default function DoctorProfilePage() {
  return (
    <main id="main-content" className="service-page profile-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileStructuredData),
        }}
      />

      <SiteHeader internal />

      {/* Appel, WhatsApp et itinéraire en une interaction, comme sur les pages
          motifs : cette page est une page d'arrivée fréquente sur recherche du
          nom du médecin, et le seul chemin de contact y était jusqu'ici le
          bloc de bas de page. */}
      <MobileActionBar />

      {/* Cible du lien d'évitement français posé par `app/(fr)/layout.tsx`. */}
      <section id="fr-content" className="service-hero section-shell profile-hero">
        <p className="eyebrow">Parcours médical</p>
        <h1>Dr Sonia Abahou, endocrinologue à Témara.</h1>
        <p>
          Médecin spécialiste en endocrinologie, diabétologie, nutrition et
          maladies métaboliques, le Dr Sonia Abahou reçoit ses patients au
          cabinet de Massira I à Témara.
        </p>
        <small className="profile-updated">
          Informations mises à jour le{" "}
          <time dateTime={lastModified}>{lastModifiedLabel}</time>.
        </small>
      </section>

      <section className="section-shell profile-intro-grid">
        <figure className="profile-portrait">
          <Image
            src="/dr-sonia-abahou.webp"
            alt="Portrait du Dr Sonia Abahou, endocrinologue à Témara"
            width={560}
            height={560}
            priority
            sizes="(max-width: 760px) 88vw, 420px"
          />
          <figcaption>
            {doctorName} · Endocrinologie et maladies métaboliques
          </figcaption>
        </figure>

        <article className="profile-summary-card">
          <p className="eyebrow">Identité professionnelle</p>
          <h2>Une expertise médicale clairement identifiable.</h2>
          <p>
            Le site réunit les informations validées du {clinicName}, les
            domaines de consultation et les coordonnées utiles pour préparer un
            rendez-vous à {clinicCity}.
          </p>
          <dl className="profile-identifiers">
            <div>
              <dt>Inscription à l’Ordre</dt>
              <dd>{doctorOrderNumber}</dd>
            </div>
            <div>
              <dt>INPE</dt>
              <dd>{doctorInpe}</dd>
            </div>
            <div>
              <dt>Conseil régional</dt>
              <dd>{doctorRegionalCouncil}</dd>
            </div>
          </dl>
        </article>
      </section>

      <section className="section-shell profile-section">
        <div className="section-heading">
          <p className="eyebrow">Formation et responsabilités</p>
          <h2>Repères du parcours professionnel.</h2>
        </div>
        <div className="credential-grid">
          {doctorCredentials.map((credential) => (
            <article className="credential-card" key={credential}>
              <span />
              <p>{credential}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell profile-section gallery-section">
        <div className="section-heading">
          <p className="eyebrow">Engagement scientifique et médias</p>
          <h2>Congrès, formation et actions de santé publique.</h2>
          <p>
            Au-delà du cabinet, le Dr Sonia Abahou intervient dans des congrès
            médicaux nationaux et internationaux et participe à des actions de
            sensibilisation au diabète.
          </p>
        </div>
        <div className="proof-grid">
          {professionalGallery.map((image) => (
            <figure key={image.src} className={`gallery-card ${image.variant}`}>
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={720}
                loading="lazy"
                sizes={image.sizes}
              />
              <figcaption>
                <span>{image.label}</span>
                <strong>{image.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-shell profile-section">
        <div className="section-heading">
          <p className="eyebrow">Domaines de consultation</p>
          <h2>Des pages dédiées pour comprendre avant le rendez-vous.</h2>
        </div>
        <div className="profile-service-links">
          {services.map((service) => (
            <Link href={`/${service.slug}`} key={service.slug}>
              <span>{service.title}</span>
              <small>Consulter la page →</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell profile-section">
        <div className="section-heading">
          <p className="eyebrow">Repères publics</p>
          <h2>Profils professionnels cohérents avec le cabinet.</h2>
        </div>
        <div className="profile-reference-grid">
          <a
            href={doctorProfessionalProfiles[0]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Profil médical public</strong>
            <span>Med.ma</span>
          </a>
          <a
            href={doctorProfessionalProfiles[1]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Profil de prise de contact</strong>
            <span>DabaDoc</span>
          </a>
          <a
            href={doctorSameAsProfiles[0]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Profil professionnel</strong>
            <span>LinkedIn</span>
          </a>
        </div>
      </section>

      <section className="final-cta section-shell">
        <div>
          <p className="eyebrow">Rendez-vous</p>
          <h2>Contacter le cabinet du Dr Sonia Abahou.</h2>
          <p>
            La prise de rendez-vous se confirme actuellement par téléphone ou
            WhatsApp.
          </p>
        </div>
        <Link className="primary-button" href="/rendez-vous">
          Prendre rendez-vous
        </Link>
      </section>

      <SiteFooter internal />
    </main>
  );
}
