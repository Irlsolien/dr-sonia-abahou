import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { arabicFontVariables } from "../fonts";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { MapEmbed } from "../../components/MapEmbed";
import { MobileActionBar } from "../../components/MobileActionBar";
import { CgmDemoDashboard } from "../../components/CgmDemoDashboard";
import { PhoneIcon, WhatsAppIcon } from "../../components/Icons";
import {
  absoluteUrl,
  appointment,
  clinicAddress,
  clinicalActivities,
  clinicCity,
  clinicCountry,
  clinicEmail,
  clinicName,
  clinicPhoneDisplay,
  clinicPhoneInternational,
  clinicPostalCode,
  clinicSecondaryPhoneDisplay,
  clinicSecondaryPhoneInternational,
  clinicStreetAddress,
  doctorCredentials,
  doctorInpe,
  doctorName,
  doctorOrderNumber,
  doctorProfilePath,
  doctorProfessionalProfiles,
  doctorRegionalCouncil,
  doctorSameAsProfiles,
  faqItems,
  gallery,
  googleMapsPlaceUrl,
  googleRatingFillWidth,
  googleReviews,
  lastModified,
  mapsQuery,
  patientJourney,
  services,
  siteName,
  siteUrl,
} from "../../seo";
import { clinicEntities, entityNodes, speakableSpecification } from "../../geo";
import {
  activitiesAr,
  activityHighlightsAr,
  arCgmDemoLabels,
  arFooterLabels,
  arHeaderLabels,
  arMapEmbedLabels,
  arMobileActionBarLabels,
  arOgImage,
  credentialsAr,
  faqAr,
  galleryAr,
  hoursAr,
  journeyAr,
  metaAr,
  reviewDatesAr,
  servicesAr,
  uiAr,
} from "../../seo-ar";

/**
 * VERSION ARABE — miroir complet de la page d'accueil française.
 *
 * Page officielle et indexable (`robots: index, follow`), reliée au reste du
 * site par les `alternates` (ici et dans `app/(ar)/layout.tsx`), le `sitemap.ts`
 * et les liens de bascule « العربية » / « Français » (en-tête, menu mobile,
 * pied de page) dans les deux sens.
 *
 * Tous les textes proviennent de traductions de contenus déjà validés
 * (`app/seo.ts`, `app/(fr)/page.tsx`) centralisées dans `app/seo-ar.ts` : aucun
 * fait, diplôme, horaire, chiffre ou coordonnée n'a été ajouté. Les avis
 * Google sont cités **mot pour mot dans leur langue de publication** ; ils ne
 * sont pas traduits.
 */

export const metadata: Metadata = {
  title: metaAr.title,
  description: metaAr.description,
  keywords: [...metaAr.keywords],
  alternates: {
    canonical: "/ar",
    languages: {
      "fr-MA": "/",
      ar: "/ar",
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: metaAr.ogTitle,
    description: metaAr.ogDescription,
    siteName: metaAr.siteName,
    type: "website",
    locale: "ar_MA",
    alternateLocale: "fr_MA",
    url: "/ar",
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
    title: metaAr.ogTitle,
    description: metaAr.ogDescription,
    images: [absoluteUrl(arOgImage)],
  },
};

const phoneHref = `tel:${clinicPhoneInternational}`;
const secondaryPhoneHref = `tel:${clinicSecondaryPhoneInternational}`;
const mapsHref = googleMapsPlaceUrl;
const mapsEmbedHref = `https://www.google.com/maps?q=${encodeURIComponent(
  mapsQuery,
)}&output=embed`;
/* Message WhatsApp inchangé (texte validé de `app/seo.ts`) : sa version arabe
   est proposée dans le document de validation, elle n'est pas publiée ici. */
const whatsappHref = `https://wa.me/${appointment.whatsappPhone}?text=${encodeURIComponent(
  appointment.whatsappMessage,
)}`;

const arPageUrl = `${siteUrl}/ar`;

const structuredDataAr = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": `${arPageUrl}#clinic`,
      name: "عيادة الدكتورة سونيا أبحو",
      alternateName: clinicName,
      description:
        "عيادة لأمراض الغدد الصماء والسكري والتغذية والأمراض الاستقلابية بتمارة.",
      inLanguage: "ar",
      image: {
        "@type": "ImageObject",
        url: absoluteUrl("/dr-sonia-abahou.jpg"),
        caption: "الدكتورة سونيا أبحو، أخصائية أمراض الغدد الصماء بتمارة",
      },
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/dr-sonia-logo-cropped.webp"),
      },
      url: arPageUrl,
      telephone: [clinicPhoneInternational, clinicSecondaryPhoneInternational],
      email: clinicEmail,
      hasMap: mapsHref,
      sameAs: [mapsHref, ...doctorProfessionalProfiles],
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
          contactType: "حجز موعد",
          areaServed: clinicCountry,
          availableLanguage: ["ar", "fr"],
        },
        {
          "@type": "ContactPoint",
          telephone: clinicSecondaryPhoneInternational,
          contactType: "الهاتف المحمول وواتساب الخاصان بالعيادة",
          areaServed: clinicCountry,
          availableLanguage: ["ar", "fr"],
        },
      ],
      employee: {
        "@id": `${arPageUrl}#doctor`,
      },
      areaServed: "تمارة",
      medicalSpecialty: [
        "https://schema.org/Endocrine",
        "https://schema.org/DietNutrition",
      ],
      /* Mêmes entités qu'en français, libellées en arabe : les identifiants
         Wikidata et les articles Wikipédia (`app/geo.ts`) sont partagés, seule
         la langue du libellé change. Une question posée en arabe atteint donc
         la même entité qu'une question posée en français. */
      knowsAbout: entityNodes(clinicEntities, "ar"),
      availableService: [
        ...services.map((service) => ({
          "@type": "MedicalProcedure",
          name: servicesAr[service.slug].title,
          description: servicesAr[service.slug].text,
          /* Page motif arabe correspondante (`/ar/<slug>`). */
          url: absoluteUrl(`/ar/${service.slug}`),
        })),
        ...clinicalActivities.map((activity) => ({
          "@type": "MedicalProcedure",
          name: activitiesAr[activity.id].title,
          description: activitiesAr[activity.id].description,
          url: `${arPageUrl}#${activity.id}`,
        })),
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "09:30",
          closes: "16:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "09:30",
          closes: "12:30",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${arPageUrl}#doctor`,
      name: "الدكتورة سونيا أبحو",
      alternateName: doctorName,
      honorificPrefix: "د.",
      jobTitle:
        "طبيبة أخصائية في أمراض الغدد الصماء والسكري والتغذية والأمراض الاستقلابية",
      description:
        "طبيبة أخصائية في أمراض الغدد الصماء والسكري والتغذية والأمراض الاستقلابية تمارس بتمارة.",
      inLanguage: "ar",
      image: absoluteUrl("/dr-sonia-abahou.jpg"),
      url: arPageUrl,
      sameAs: [...doctorSameAsProfiles],
      /* Mêmes identifiants et mêmes titres que le nœud français : ce sont des
         données professionnelles publiques validées (`app/seo.ts`), pas des
         faits ajoutés. */
      identifier: [
        {
          "@type": "PropertyValue",
          name: "INPE",
          value: doctorInpe,
        },
        {
          "@type": "PropertyValue",
          name: "رقم التسجيل بالهيئة",
          value: doctorOrderNumber,
        },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "تخصّص طبي",
          name: "أمراض الغدد الصماء والسكري والتغذية والأمراض الاستقلابية",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "دبلوم جامعي",
          name: "الفحص بالموجات فوق الصوتية للعنق — Paris V",
        },
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Paris V",
      },
      /* Reprise stricte de la légende arabe de la photographie de la section
         « البصمة الطبية » : aucune distinction supplémentaire n'est déclarée. */
      award: "تكريم «Tous Unis Contre le Diabète» خلال مؤتمر في طب السكري",
      hasOccupation: {
        "@type": "Occupation",
        name: "طبيبة أخصائية في أمراض الغدد الصماء والسكري والتغذية",
        occupationLocation: {
          "@type": "City",
          name: "تمارة",
        },
      },
      worksFor: {
        "@id": `${arPageUrl}#clinic`,
      },
      workLocation: {
        "@id": `${arPageUrl}#clinic`,
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
      knowsAbout: entityNodes(clinicEntities, "ar"),
    },
    /* Le site est une entité bilingue unique : le nœud `WebSite` porte le même
       `@id` que côté français et les mêmes propriétés. Il est répété ici pour
       que la page arabe soit autoportante — la référence `isPartOf` du
       `WebPage` ne pend plus dans le vide pour un analyseur qui ne lirait que
       cette page. */
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      alternateName: clinicName,
      url: `${siteUrl}/`,
      inLanguage: "fr-MA",
      /* Le cabinet décrit par cette page porte l'identifiant `/ar#clinic` :
         référencer ici le nœud français `/#clinic`, absent du graphe de cette
         page, laissait la relation pendante pour un analyseur qui ne lit que
         `/ar`. */
      publisher: {
        "@id": `${arPageUrl}#clinic`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${arPageUrl}#webpage`,
      url: arPageUrl,
      name: metaAr.title,
      description: metaAr.description,
      inLanguage: "ar",
      dateModified: lastModified,
      /* Contenu de santé : date de relecture et médecin qui en répond. */
      lastReviewed: lastModified,
      reviewedBy: {
        "@id": `${arPageUrl}#doctor`,
      },
      /* Passages lisibles à voix haute par un assistant vocal. */
      speakable: speakableSpecification,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      /* Relation inverse de celle déclarée par l'accueil français. */
      translationOfWork: {
        "@id": `${siteUrl}/#webpage`,
      },
      mainEntity: {
        "@id": `${arPageUrl}#clinic`,
      },
      about: {
        "@id": `${arPageUrl}#doctor`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl("/dr-sonia-abahou.jpg"),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${arPageUrl}#faq`,
      inLanguage: "ar",
      isPartOf: {
        "@id": `${arPageUrl}#webpage`,
      },
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: faqAr[item.question].question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faqAr[item.question].answer,
        },
      })),
    },
  ],
};

export default function ArabicHomePage() {
  return (
    <main
      id="main-content"
      lang="ar"
      dir="rtl"
      className={`ar-page ${arabicFontVariables}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataAr) }}
      />

      <SiteHeader
        labels={arHeaderLabels}
        homeHref="#ar-content"
        panelLang="ar"
        panelDir="rtl"
        panelClassName={`ar-nav-panel ${arabicFontVariables}`}
      />

      <MobileActionBar labels={arMobileActionBarLabels} />

      <section id="ar-content" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">{uiAr.hero.eyebrow}</p>
          <h1>{uiAr.hero.title}</h1>
          <p className="hero-lead">{uiAr.hero.lead}</p>
          {/* Les trois actions passent avant la carte signature : elles
              doivent rester visibles sans défilement sur un écran d'ordinateur
              portable (1440 × 900). */}
          <div
            className="hero-actions"
            role="group"
            aria-label={uiAr.quickActionsAriaLabel}
          >
            <a className="primary-button" href={phoneHref}>
              {uiAr.bookLabel}
            </a>
            <a className="secondary-button" href={phoneHref}>
              <PhoneIcon />
              {uiAr.callLabel}
            </a>
            <a
              className="secondary-button whatsapp-button"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              {uiAr.whatsappLabel}
            </a>
          </div>
          <p className="hero-reassurance">{uiAr.hero.reassurance}</p>
          <div
            className="brand-signature-card"
            role="group"
            aria-label={uiAr.hero.signatureAriaLabel}
          >
            <Image
              src="/dr-sonia-monogram-clean.webp"
              alt=""
              width={200}
              height={180}
              sizes="(max-width: 640px) 112px, 88px"
            />
            <div>
              <span>{uiAr.hero.signatureName}</span>
              <strong>{uiAr.hero.signatureTagline}</strong>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {/* Filigrane purement décoratif : peint en image de fond CSS
              (cf. `.hero-monogram-watermark`) pour ne jamais concurrencer le
              portrait sur le chemin de rendu du héros. */}
          <div className="hero-monogram-watermark" aria-hidden="true" />
          <div className="halo-disc" />
          <div className="pulse-orbit orbit-a" />
          <div className="pulse-orbit orbit-b" />
          <div className="metabolic-sphere">
            <span />
            <span />
            <span />
          </div>
          <div className="portrait-card">
            <Image
              src="/dr-sonia-abahou.webp"
              alt={uiAr.hero.portraitAlt}
              width={420}
              height={470}
              priority
              fetchPriority="high"
              sizes="(max-width: 760px) 88vw, 420px"
            />
            <div className="portrait-caption">
              <span>{uiAr.hero.portraitName}</span>
              <strong>{uiAr.hero.portraitRole}</strong>
            </div>
          </div>
          <div className="doctor-status-card">
            <span>{uiAr.hero.statusEyebrow}</span>
            <strong>{uiAr.hero.statusPlace}</strong>
            <p>{uiAr.hero.statusText}</p>
          </div>
          <div className="floating-card card-glucose">
            <span>{uiAr.hero.cardDiabetesLabel}</span>
            <strong>{uiAr.hero.cardDiabetesValue}</strong>
          </div>
          <div className="floating-card card-thyroid">
            <span>{uiAr.hero.cardThyroidLabel}</span>
            <strong>{uiAr.hero.cardThyroidValue}</strong>
          </div>
        </div>
      </section>

      <section id="expertise" className="section-shell split-section reveal-section">
        <div>
          <p className="eyebrow">{uiAr.expertise.eyebrow}</p>
          <h2>{uiAr.expertise.title}</h2>
          <p className="section-text">{uiAr.expertise.text}</p>
          {/* Le parcours détaillé n'existe qu'en français : le lien porte donc
              `hrefLang="fr"`, comme sur les pages motifs arabes. */}
          <Link className="text-link" href={doctorProfilePath} hrefLang="fr">
            {uiAr.expertise.profileLink}
          </Link>
        </div>
        <div className="credential-grid">
          {doctorCredentials.map((item) => (
            <article key={item} className="credential-card">
              <span />
              <p>{credentialsAr[item]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell approach-flow-section reveal-section">
        <div className="approach-flow-head">
          <p className="eyebrow approach-flow-eyebrow">{uiAr.approach.eyebrow}</p>
          <h2>{uiAr.approach.title}</h2>
          <p className="approach-flow-lede">{uiAr.approach.text}</p>
        </div>
        <div className="approach-flow-track">
          <div className="approach-flow-line" aria-hidden="true" />
          <ol className="approach-flow-steps">
            {patientJourney.map((item, index) => (
              <li key={item.title} className="approach-flow-step">
                <div className="approach-flow-node">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{journeyAr[item.title].title}</h3>
                <p>{journeyAr[item.title].text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-shell signature-section reveal-section">
        <div className="signature-visual">
          <Image
            src="/dr-abahou-trophee-diabete.webp"
            alt={uiAr.signature.imageAlt}
            width={800}
            height={1062}
            loading="lazy"
            sizes="(max-width: 980px) 92vw, 38vw"
          />
        </div>
        <div className="signature-copy">
          <p className="eyebrow">{uiAr.signature.eyebrow}</p>
          <h2>{uiAr.signature.title}</h2>
          <p>{uiAr.signature.text}</p>
        </div>
      </section>

      {/* Index des motifs : chaque ligne mène à la page arabe du motif
          (`/ar/<slug>`), miroir exact de l'accueil français. */}
      <section id="soins" className="section-shell care-section reveal-section">
        <div className="section-heading">
          <h2>{uiAr.care.title}</h2>
        </div>
        <div className="care-index">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              className="care-row"
              href={`/ar/${service.slug}`}
            >
              <span className="care-row-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="care-row-copy">
                <span className="care-row-title-wrap">
                  <h3 className="care-row-title">
                    {servicesAr[service.slug].title}
                  </h3>
                </span>
                <p className="care-row-description">
                  {servicesAr[service.slug].text}
                </p>
              </span>
              <span className="care-row-arrow" aria-hidden="true">
                ←
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="pratiques" className="section-shell practice-section">
        <div className="practice-heading reveal-section">
          <h2>{uiAr.practice.title}</h2>
        </div>

        <div className="practice-stack">
          {clinicalActivities.map((activity, index) => (
            <article
              id={activity.id}
              key={activity.id}
              className="practice-feature reveal-section"
            >
              <figure
                className={`practice-media ${
                  activity.id === "impedancemetrie-medicale"
                    ? "practice-media-biody"
                    : ""
                } ${activity.image ? "" : "practice-media-dashboard"}`}
              >
                {activity.image ? (
                  <Image
                    src={activity.image}
                    alt={activitiesAr[activity.id].alt}
                    width={1600}
                    height={1067}
                    loading="lazy"
                    sizes="(max-width: 820px) 94vw, 50vw"
                  />
                ) : (
                  <CgmDemoDashboard labels={arCgmDemoLabels} />
                )}
                {!activity.image && (
                  <figcaption>{uiAr.practice.dashboardCaption}</figcaption>
                )}
                <span className="practice-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </figure>

              <div className="practice-content">
                <p className="practice-eyebrow">
                  {activitiesAr[activity.id].eyebrow}
                </p>
                <h3>{activitiesAr[activity.id].title}</h3>
                <p className="practice-description">
                  {activitiesAr[activity.id].description}
                </p>
                <ul className="practice-highlights">
                  {activity.highlights.map((highlight) => (
                    <li key={highlight}>{activityHighlightsAr[highlight]}</li>
                  ))}
                </ul>
                <p className="practice-note">{activitiesAr[activity.id].note}</p>
                <a className="text-link" href="#contact">
                  {uiAr.contactClinic}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell faq-section reveal-section">
        <div className="section-heading faq-heading">
          <h2>{uiAr.faq.title}</h2>
        </div>
        <div className="faq-grid">
          {faqItems.map((item) => (
            <details key={item.question} className="faq-card">
              <summary>
                <span>{faqAr[item.question].question}</span>
                <i aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>{faqAr[item.question].answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Avis Google : le chrome de la section est en arabe, mais les avis
          eux-mêmes sont cités mot pour mot dans leur langue de publication
          (français). Aucun avis n'est traduit ni reformulé, et la note
          affichée est celle relevée sur la fiche Google (`app/seo.ts`). */}
      <section id="avis" className="section-shell reviews-section reveal-section">
        <div className="reviews-wrap">
          <p className="eyebrow reviews-eyebrow">{uiAr.reviews.eyebrow}</p>
          <h2 className="reviews-title">{uiAr.reviews.title}</h2>
          {/* Rangée fidèle à la note réelle : quatre étoiles pleines et une
              étoile remplie à hauteur de la moyenne Google (3,6 / 5). */}
          <p className="reviews-stars">
            <span
              className="reviews-stars-meter"
              role="img"
              aria-label={`${uiAr.averageStarsAriaLabelPrefix}${googleReviews.averageRating}${uiAr.averageStarsAriaLabelSuffix}`}
            >
              <span aria-hidden="true">★★★★★</span>
              <span
                className="reviews-stars-fill"
                style={{ width: googleRatingFillWidth }}
                aria-hidden="true"
              >
                ★★★★★
              </span>
            </span>
          </p>

          <blockquote className="reviews-quote" lang="fr" dir="ltr">
            <span className="reviews-mark" aria-hidden="true">
              «
            </span>{" "}
            {googleReviews.featured.text}{" "}
            <span className="reviews-mark" aria-hidden="true">
              »
            </span>
          </blockquote>

          <p className="reviews-credit">
            {googleReviews.featured.author ? (
              <>
                <span lang="fr" dir="ltr">
                  {googleReviews.featured.author}
                </span>
                <span aria-hidden="true">·</span>
              </>
            ) : null}
            <span>{uiAr.reviews.source}</span>
            <span aria-hidden="true">·</span>
            <span>{reviewDatesAr[googleReviews.featured.date]}</span>
          </p>

          <div className="reviews-signature">
            {googleReviews.items.map((item) => (
              <div className="reviews-micro" key={item.author}>
                <span
                  className="reviews-micro-stars"
                  aria-label={uiAr.starsAriaLabel}
                >
                  ★★★★★
                </span>
                {/* Verbatim : cité sans modification, dans sa langue d'origine. */}
                <p className="reviews-micro-quote" lang="fr" dir="ltr">
                  {`« ${item.excerpt} »`}
                </p>
                {/* La mention de traduction qualifie la citation : elle la
                    suit immédiatement, ce qui laisse les noms d'auteur alignés
                    sur une même ligne de base d'une colonne à l'autre. */}
                {item.translated ? (
                  <p className="reviews-translated">
                    {uiAr.reviews.translatedFromArabic}
                  </p>
                ) : null}
                <p className="reviews-micro-name" lang="fr" dir="ltr">
                  {item.author}
                </p>
              </div>
            ))}
          </div>

          <div className="reviews-cta">
            <p className="reviews-average">
              <span className="reviews-average-star" aria-hidden="true">
                ★
              </span>
              <strong>
                <bdi dir="ltr">{googleReviews.averageRating}</bdi>
              </strong>{" "}
              {uiAr.reviews.ratingSuffix} ·{" "}
              <bdi dir="ltr">{googleReviews.reviewCount}</bdi>{" "}
              {uiAr.reviews.ratingCountLabel}
            </p>
            <a
              className="secondary-button"
              href={googleReviews.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {uiAr.reviews.seeOnGoogle}
            </a>
            <p className="reviews-disclaimer">{uiAr.reviews.disclaimer}</p>
            <p className="reviews-disclaimer">
              {uiAr.reviews.originalLanguageNote}
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell gallery-section reveal-section">
        <div className="section-heading">
          <h2>{uiAr.gallery.title}</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((image) => (
            <figure key={image.src} className={`gallery-card ${image.variant}`}>
              <Image
                src={image.src}
                alt={galleryAr[image.src].alt}
                width={900}
                height={720}
                loading="lazy"
                sizes={image.sizes}
              />
              <figcaption>
                <span>{galleryAr[image.src].label}</span>
                <strong>{galleryAr[image.src].title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="diagnostic-band">
        <div>
          <p>{uiAr.band.eyebrow}</p>
          <h2>{uiAr.band.title}</h2>
        </div>
        <p>{uiAr.band.text}</p>
      </section>

      <section id="cabinet" className="section-shell cabinet-section reveal-section">
        <div className="glass-panel">
          <p className="eyebrow">{uiAr.cabinet.eyebrow}</p>
          <h2>
            {uiAr.cabinet.title}{" "}
            <span lang="fr" dir="ltr">
              {uiAr.cabinet.titleLatin}
            </span>
          </h2>
          <p className="ar-latin" dir="ltr">
            {clinicAddress}
          </p>
          <div className="contact-actions">
            <a
              className="primary-button"
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {uiAr.cabinet.openDirections}
            </a>
            <a className="secondary-button" href={phoneHref}>
              <PhoneIcon />
              {uiAr.cabinet.landlinePrefix}
              <bdi dir="ltr">{clinicPhoneDisplay}</bdi>
            </a>
            <a className="secondary-button" href={secondaryPhoneHref}>
              <PhoneIcon />
              {uiAr.cabinet.mobilePrefix}
              <bdi dir="ltr">{clinicSecondaryPhoneDisplay}</bdi>
            </a>
            <a
              className="secondary-button whatsapp-button"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              {uiAr.whatsappLabel}
            </a>
          </div>
        </div>
        <div
          className="map-card google-map-card"
          role="group"
          aria-label={uiAr.cabinet.mapGroupAriaLabel}
        >
          <MapEmbed
            embedSrc={mapsEmbedHref}
            mapsHref={mapsHref}
            title={uiAr.cabinet.mapTitle}
            address={clinicAddress}
            labels={arMapEmbedLabels}
          />
        </div>
        <div className="hours-panel">
          <h3>{uiAr.cabinet.hoursTitle}</h3>
          <div className="hours-list">
            {hoursAr.map(([day, time]) => (
              <div key={day}>
                <span>{day}</span>
                <strong>
                  {/* Seules les plages chiffrées sont isolées en LTR ;
                      « مغلق » reste dans le sens de lecture arabe. */}
                  {/\d/.test(time) ? <bdi dir="ltr">{time}</bdi> : time}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="final-cta final-cta-dark section-shell reveal-section"
      >
        <div>
          <p className="eyebrow">{uiAr.finalCta.eyebrow}</p>
          <h2>{uiAr.finalCta.title}</h2>
          <p>{uiAr.finalCta.text}</p>
          <p className="ar-medical-note">{uiAr.footnote}</p>
        </div>
        <div className="cta-stack">
          <a className="primary-button" href={phoneHref}>
            {uiAr.bookLabel}
          </a>
          <a
            className="secondary-button whatsapp-button"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            {uiAr.whatsappLabel}
          </a>
          <a
            className="secondary-button"
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {uiAr.finalCta.seeDirections}
          </a>
        </div>
      </section>

      <SiteFooter labels={arFooterLabels} />
    </main>
  );
}
