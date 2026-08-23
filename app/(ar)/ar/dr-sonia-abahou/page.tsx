import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { arabicFontVariables } from "../../fonts";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";
import { MobileActionBar } from "../../../components/MobileActionBar";
import {
  absoluteUrl,
  doctorCredentials,
  doctorInpe,
  doctorName,
  doctorOrderNumber,
  doctorProfilePath,
  doctorProfessionalProfiles,
  doctorRegionalCouncil,
  doctorSocialProfiles,
  lastModified,
  professionalGallery,
  services,
  siteUrl,
} from "../../../seo";
import { speakableSpecification } from "../../../geo";
import {
  arFooterLabels,
  arHeaderLabels,
  arMobileActionBarLabels,
  credentialsAr,
  professionalGalleryAr,
  profileAr,
  servicesAr,
} from "../../../seo-ar";

/**
 * VERSION ARABE — page bio `/ar/dr-sonia-abahou`.
 *
 * Miroir strict de `app/(fr)/dr-sonia-abahou/page.tsx` : mêmes sections, mêmes
 * composants et mêmes classes, rendus en RTL. Tous les textes proviennent de
 * traductions déjà validées centralisées dans `app/seo-ar.ts` (`profileAr`,
 * `credentialsAr`, `servicesAr`, `professionalGalleryAr`). Aucun fait nouveau.
 */

const arProfilePath = `/ar${doctorProfilePath}`;

const lastModifiedLabelAr = new Intl.DateTimeFormat("ar-MA", {
  day: "numeric",
  month: "long",
  year: "numeric",
}).format(new Date(`${lastModified}T12:00:00+01:00`));

export const metadata: Metadata = {
  title: profileAr.metaTitle,
  description: profileAr.metaDescription,
  alternates: {
    canonical: arProfilePath,
    languages: {
      "fr-MA": doctorProfilePath,
      ar: arProfilePath,
      "x-default": doctorProfilePath,
    },
  },
  openGraph: {
    title: profileAr.metaTitle,
    description: profileAr.metaDescription,
    url: arProfilePath,
    siteName: "الدكتورة سونيا أبحو",
    type: "profile",
    locale: "ar_MA",
    alternateLocale: "fr_MA",
    images: [
      {
        url: "/dr-sonia-abahou.jpg",
        width: 560,
        height: 560,
        alt: "الدكتورة سونيا أبحو",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: profileAr.metaTitle,
    description: profileAr.metaDescription,
    images: [absoluteUrl("/dr-sonia-abahou.jpg")],
  },
};

const arHomeUrl = `${siteUrl}/ar`;

const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${absoluteUrl(arProfilePath)}#profile`,
      url: absoluteUrl(arProfilePath),
      name: profileAr.h1,
      description: profileAr.metaDescription,
      inLanguage: "ar",
      dateModified: lastModified,
      lastReviewed: lastModified,
      reviewedBy: {
        "@id": `${arHomeUrl}#doctor`,
      },
      speakable: speakableSpecification,
      /* La personne décrite est le nœud `#doctor` partagé, déjà défini sur
         l'accueil arabe : la page bio n'en redéclare pas les faits. */
      mainEntity: {
        "@id": `${arHomeUrl}#doctor`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      /* Relation inverse de la page bio française jumelle. */
      translationOfWork: {
        "@id": `${absoluteUrl(doctorProfilePath)}#profile`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl("/dr-sonia-abahou.jpg"),
      },
      breadcrumb: {
        "@id": `${absoluteUrl(arProfilePath)}#breadcrumb`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${absoluteUrl(arProfilePath)}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: `${arHomeUrl}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: doctorName,
          item: absoluteUrl(arProfilePath),
        },
      ],
    },
  ],
};

export default function ArabicDoctorProfilePage() {
  return (
    <main
      id="main-content"
      lang="ar"
      dir="rtl"
      className={`service-page profile-page ar-page ${arabicFontVariables}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileStructuredData),
        }}
      />

      <SiteHeader
        labels={arHeaderLabels}
        anchorPrefix="/ar#"
        homeHref="/ar"
        langSwitchHref={doctorProfilePath}
        panelLang="ar"
        panelDir="rtl"
        panelClassName={`ar-nav-panel ${arabicFontVariables}`}
        internal
      />

      <MobileActionBar labels={arMobileActionBarLabels} />

      {/* Cible du lien d'évitement arabe posé par `app/(ar)/layout.tsx`. */}
      <section id="ar-content" className="service-hero section-shell profile-hero">
        <p className="eyebrow">{profileAr.eyebrow}</p>
        <h1>{profileAr.h1}</h1>
        <p>{profileAr.intro}</p>
        <small className="profile-updated">
          {profileAr.updatedPrefix}{" "}
          <time dateTime={lastModified}>{lastModifiedLabelAr}</time>.
        </small>
      </section>

      <section className="section-shell profile-intro-grid">
        <figure className="profile-portrait">
          <Image
            src="/dr-sonia-abahou.webp"
            alt="صورة الدكتورة سونيا أبحو، طبيبة الغدد الصماء بتمارة"
            width={560}
            height={560}
            priority
            sizes="(max-width: 760px) 88vw, 420px"
          />
          <figcaption>{profileAr.portraitCaption}</figcaption>
        </figure>

        <article className="profile-summary-card">
          <p className="eyebrow">{profileAr.identityEyebrow}</p>
          <h2>{profileAr.identityTitle}</h2>
          <p>{profileAr.identityText}</p>
          <dl className="profile-identifiers">
            <div>
              <dt>{profileAr.orderLabel}</dt>
              <dd>
                <bdi dir="ltr">{doctorOrderNumber}</bdi>
              </dd>
            </div>
            <div>
              <dt>{profileAr.inpeLabel}</dt>
              <dd>
                <bdi dir="ltr">{doctorInpe}</bdi>
              </dd>
            </div>
            <div>
              <dt>{profileAr.councilLabel}</dt>
              <dd>{doctorRegionalCouncil}</dd>
            </div>
          </dl>
        </article>
      </section>

      <section className="section-shell profile-section">
        <div className="section-heading">
          <p className="eyebrow">{profileAr.credentialsEyebrow}</p>
          <h2>{profileAr.credentialsTitle}</h2>
        </div>
        <div className="credential-grid">
          {doctorCredentials.map((credential) => (
            <article className="credential-card" key={credential}>
              <span />
              <p>{credentialsAr[credential]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell profile-section gallery-section">
        <div className="section-heading">
          <p className="eyebrow">{profileAr.galleryEyebrow}</p>
          <h2>{profileAr.galleryTitle}</h2>
          <p>{profileAr.galleryText}</p>
        </div>
        <div className="proof-grid">
          {professionalGallery.map((image) => {
            const t = professionalGalleryAr[image.src];
            return (
              <figure key={image.src} className={`gallery-card ${image.variant}`}>
                <Image
                  src={image.src}
                  alt={t.alt}
                  width={900}
                  height={720}
                  loading="lazy"
                  sizes={image.sizes}
                />
                <figcaption>
                  <span dir="ltr">{t.label}</span>
                  <strong>{t.title}</strong>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <section className="section-shell profile-section">
        <div className="section-heading">
          <p className="eyebrow">{profileAr.servicesEyebrow}</p>
          <h2>{profileAr.servicesTitle}</h2>
        </div>
        <div className="profile-service-links">
          {services.map((service) => (
            <Link href={`/ar/${service.slug}`} key={service.slug}>
              <span>{servicesAr[service.slug].title}</span>
              <small>{profileAr.serviceLinkLabel}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell profile-section">
        <div className="section-heading">
          <p className="eyebrow">{profileAr.referencesEyebrow}</p>
          <h2>{profileAr.referencesTitle}</h2>
        </div>
        <div className="profile-reference-grid">
          <a
            href={doctorProfessionalProfiles[0]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>{profileAr.refMedical.strong}</strong>
            <span dir="ltr">{profileAr.refMedical.span}</span>
          </a>
          <a
            href={doctorProfessionalProfiles[1]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>{profileAr.refContact.strong}</strong>
            <span dir="ltr">{profileAr.refContact.span}</span>
          </a>
          <a
            href={doctorSocialProfiles[0]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>{profileAr.refLinkedin.strong}</strong>
            <span dir="ltr">{profileAr.refLinkedin.span}</span>
          </a>
        </div>
      </section>

      <section className="final-cta section-shell">
        <div>
          <p className="eyebrow">{profileAr.ctaEyebrow}</p>
          <h2>{profileAr.ctaTitle}</h2>
          <p>{profileAr.ctaText}</p>
        </div>
        <Link className="primary-button" href="/ar/rendez-vous">
          {profileAr.ctaButton}
        </Link>
      </section>

      <SiteFooter
        labels={arFooterLabels}
        anchorPrefix="/ar#"
        langSwitchHref={doctorProfilePath}
        internal
      />
    </main>
  );
}
