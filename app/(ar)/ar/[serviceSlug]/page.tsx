import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { arabicFontVariables } from "../../fonts";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";
import {
  MobileActionBar,
  clinicWhatsappHref,
} from "../../../components/MobileActionBar";
import { PhoneIcon, WhatsAppIcon } from "../../../components/Icons";
import {
  absoluteUrl,
  clinicAddress,
  clinicPhoneDisplay,
  clinicPhoneInternational,
  clinicSecondaryPhoneDisplay,
  doctorProfilePath,
  googleMapsPlaceUrl,
  lastModified,
  services,
  siteUrl,
} from "../../../seo";
import {
  entityNodes,
  serviceEntities,
  speakableSpecification,
} from "../../../geo";
import {
  arFooterLabels,
  arHeaderLabels,
  arMobileActionBarLabels,
  arServiceOgImage,
  metaAr,
  serviceFaqItemsAr,
  servicePagesAr,
  servicePointsAr,
  serviceQuickAnswerAr,
  serviceUiAr,
  servicesAr,
  uiAr,
} from "../../../seo-ar";

/**
 * VERSION ARABE — pages motifs `/ar/<slug>`.
 *
 * Miroir strict de `app/(fr)/[serviceSlug]/page.tsx` : mêmes sections, mêmes
 * composants et mêmes classes, rendus en RTL. Les slugs sont volontairement
 * identiques d'une langue à l'autre, ce qui permet un appariement `hreflang`
 * exact page à page (`/<slug>` ↔ `/ar/<slug>`).
 *
 * Tous les textes proviennent de traductions de contenus déjà validés,
 * centralisées dans `app/seo-ar.ts` : aucun fait, acte médical, horaire,
 * chiffre ou coordonnée n'a été ajouté.
 */

type ArabicServicePageProps = {
  params: Promise<{
    serviceSlug: string;
  }>;
};

const mapsHref = googleMapsPlaceUrl;
const phoneHref = `tel:${clinicPhoneInternational}`;

/* Date de mise à jour rendue en arabe marocain (mois « غشت »), à partir de la
   même valeur source que la version française. */
const lastModifiedLabelAr = new Intl.DateTimeFormat("ar-MA", {
  day: "numeric",
  month: "long",
  year: "numeric",
}).format(new Date(`${lastModified}T12:00:00+01:00`));

function findService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArabicServicePageProps): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = findService(serviceSlug);

  if (!service) {
    return {};
  }

  const meta = servicePagesAr[service.slug];
  const canonical = `/ar/${service.slug}`;
  const frenchCanonical = `/${service.slug}`;
  const ogImage = arServiceOgImage(service.slug);

  return {
    title: meta.seoTitle,
    description: meta.description,
    keywords: [...meta.keywords],
    alternates: {
      canonical,
      languages: {
        "fr-MA": frenchCanonical,
        ar: canonical,
        /* Version servie par défaut aux visiteurs dont la langue n'est ni le
           français ni l'arabe. */
        "x-default": frenchCanonical,
      },
    },
    openGraph: {
      title: meta.seoTitle,
      description: meta.description,
      url: canonical,
      siteName: metaAr.siteName,
      type: "website",
      locale: "ar_MA",
      alternateLocale: "fr_MA",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `الدكتورة سونيا أبحو — ${servicesAr[service.slug].title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.seoTitle,
      description: meta.description,
      images: [absoluteUrl(ogImage)],
    },
  };
}

export default async function ArabicServicePage({
  params,
}: ArabicServicePageProps) {
  const { serviceSlug } = await params;
  const service = findService(serviceSlug);

  if (!service) {
    notFound();
  }

  const slug = service.slug;
  const content = servicesAr[slug];
  const meta = servicePagesAr[slug];
  const quickAnswer = serviceQuickAnswerAr(slug);
  const pageUrl = absoluteUrl(`/ar/${slug}`);
  const arHomeUrl = `${siteUrl}/ar`;
  const frenchTwinHref = `/${slug}`;
  const otherServices = services.filter((item) => item.slug !== slug);
  const faqItemsAr = serviceFaqItemsAr(slug);

  const contactStepsAr = [
    {
      title: serviceUiAr.contact.callTitle,
      text: (
        <>
          {serviceUiAr.contact.landlinePrefix}
          <bdi dir="ltr">{clinicPhoneDisplay}</bdi>
          {". "}
          {serviceUiAr.contact.mobilePrefix}
          <bdi dir="ltr">{clinicSecondaryPhoneDisplay}</bdi>
          {"."}
        </>
      ),
    },
    {
      title: serviceUiAr.contact.slotTitle,
      text: serviceUiAr.contact.slotText,
    },
    {
      title: serviceUiAr.contact.documentsTitle,
      text: serviceUiAr.preparationNote,
    },
  ];

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        inLanguage: "ar",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: serviceUiAr.breadcrumbHome,
            item: arHomeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: content.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}#webpage`,
        name: meta.seoTitle,
        description: meta.description,
        url: pageUrl,
        inLanguage: "ar",
        dateModified: lastModified,
        /* Contenu de santé : date de relecture et médecin qui en répond. */
        lastReviewed: lastModified,
        reviewedBy: {
          "@id": `${arHomeUrl}#doctor`,
        },
        speakable: speakableSpecification,
        medicalAudience: "https://schema.org/Patient",
        specialty: "https://schema.org/Endocrine",
        /* Mêmes entités que la page française jumelle, libellées en arabe :
           les identifiants Wikidata sont partagés (cf. `app/geo.ts`). */
        about: entityNodes(serviceEntities[service.slug], "ar"),
        mainEntity: {
          "@type": "MedicalProcedure",
          name: content.title,
          description: content.text,
        },
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        /* Relation inverse de celle déclarée par la page motif française. */
        translationOfWork: {
          "@id": `${absoluteUrl(`/${service.slug}`)}#webpage`,
        },
        publisher: {
          "@id": `${arHomeUrl}#clinic`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/dr-sonia-abahou.jpg"),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        inLanguage: "ar",
        isPartOf: {
          "@id": `${pageUrl}#webpage`,
        },
        mainEntity: faqItemsAr.map((item) => ({
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

  return (
    <main
      id="main-content"
      lang="ar"
      dir="rtl"
      className={`service-page ar-page ${arabicFontVariables}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />

      <SiteHeader
        labels={arHeaderLabels}
        anchorPrefix="/ar#"
        homeHref="/ar"
        langSwitchHref={frenchTwinHref}
        panelLang="ar"
        panelDir="rtl"
        panelClassName={`ar-nav-panel ${arabicFontVariables}`}
      />

      <MobileActionBar labels={arMobileActionBarLabels} />

      {/* Cible du lien d'évitement arabe posé par `app/(ar)/layout.tsx` :
          l'ancre existe sur toutes les routes `/ar`. */}
      <section id="ar-content" className="service-hero section-shell">
        <p className="eyebrow">{serviceUiAr.heroEyebrow}</p>
        <h1>
          {content.title} {serviceUiAr.titleSuffix}
        </h1>
        <p>{content.intro}</p>
        {/* Mêmes actions directes que le héros de l'accueil arabe : appel,
            WhatsApp et itinéraire, sans retour à l'accueil. */}
        <div className="hero-actions">
          <a className="primary-button" href={phoneHref}>
            {uiAr.bookLabel}
          </a>
          <a className="secondary-button" href={phoneHref}>
            <PhoneIcon />
            {uiAr.callLabel}
          </a>
          <a
            className="secondary-button whatsapp-button"
            href={clinicWhatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon />
            {uiAr.whatsappLabel}
          </a>
          <a
            className="secondary-button"
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
          >
            {serviceUiAr.directionsLabel}
          </a>
        </div>
      </section>

      {/* « جواب سريع » — miroir de la réponse rapide française. L'adresse et
          les numéros, latins, sont rendus à part en LTR isolé. */}
      <section className="section-shell quick-answer-section">
        <div className="quick-answer">
          <p className="eyebrow">{serviceUiAr.quickAnswerLabel}</p>
          <p className="quick-answer-text">
            {quickAnswer.text}
            <span className="ar-latin key-fact-latin" dir="ltr">
              {quickAnswer.latin}
            </span>
          </p>
        </div>
      </section>

      <section className="section-shell service-detail-grid">
        <article className={`service-focus-card ${service.visualClass}`}>
          <span>{serviceUiAr.specialtyLabel}</span>
          <h2>{content.title}</h2>
          <p>{meta.description}</p>
        </article>
        <article className="service-info-card">
          <h2>{serviceUiAr.pointsTitle}</h2>
          <ol className="service-points-list">
            {service.points.map((point, index) => (
              <li key={point} className="service-point">
                <span className="service-point-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{servicePointsAr[point]}</p>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section className="section-shell service-copy">
        <h2>{serviceUiAr.copy.title}</h2>
        <p>{serviceUiAr.copy.text}</p>
        <p>{serviceUiAr.preparationNote}</p>
      </section>

      <section className="section-shell contact-steps-section">
        <div className="section-heading">
          <p className="eyebrow">{serviceUiAr.contact.eyebrow}</p>
          <h2>{serviceUiAr.contact.title}</h2>
        </div>
        <div className="contact-steps-grid">
          {contactStepsAr.map((step, index) => (
            <article key={step.title} className="contact-step-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell service-editorial-note">
        <div>
          <p className="eyebrow">{serviceUiAr.editorial.eyebrow}</p>
          <h2>{serviceUiAr.editorial.title}</h2>
          <p>
            {serviceUiAr.editorial.textBefore}
            <time dateTime={lastModified}>{lastModifiedLabelAr}</time>
            {serviceUiAr.editorial.textAfter}
          </p>
        </div>
        {/* Le parcours détaillé n'existe qu'en français : le lien porte donc
            `hrefLang="fr"`, comme les pages juridiques du pied de page. */}
        <Link
          className="secondary-button"
          href={doctorProfilePath}
          hrefLang="fr"
        >
          {serviceUiAr.editorial.profileLink}
        </Link>
      </section>

      <section className="section-shell faq-section">
        <div className="section-heading">
          <p className="eyebrow">{serviceUiAr.faq.eyebrow}</p>
          <h2>{serviceUiAr.faq.title}</h2>
        </div>
        <div className="faq-grid">
          {faqItemsAr.map((item) => (
            <article key={item.question} className="faq-card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell related-services-section">
        <div className="related-services-intro">
          <div className="section-heading related-services-heading">
            <p className="eyebrow">{serviceUiAr.related.eyebrow}</p>
            <h2>{serviceUiAr.related.title}</h2>
          </div>
          <Link className="text-link" href="/ar">
            {serviceUiAr.related.homeLink}
          </Link>
        </div>
        <div className="care-index-compact">
          {otherServices.map((item, index) => (
            <Link
              key={item.slug}
              className="care-row-compact"
              href={`/ar/${item.slug}`}
            >
              <span className="care-row-compact-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="care-row-compact-title">
                {servicesAr[item.slug].title}
              </span>
              <span className="care-row-compact-arrow" aria-hidden="true">
                ←
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="final-cta section-shell">
        <div>
          <p className="eyebrow">{serviceUiAr.finalCta.eyebrow}</p>
          <h2>{serviceUiAr.finalCta.title}</h2>
          <p>
            {serviceUiAr.finalCta.addressPrefix}
            <bdi dir="ltr">{clinicAddress}</bdi>
            {". "}
            {serviceUiAr.finalCta.landlinePrefix}
            <bdi dir="ltr">{clinicPhoneDisplay}</bdi>
            {". "}
            {serviceUiAr.finalCta.mobilePrefix}
            <bdi dir="ltr">{clinicSecondaryPhoneDisplay}</bdi>
            {"."}
          </p>
        </div>
        <div className="cta-stack">
          <a className="primary-button" href={phoneHref}>
            {uiAr.bookLabel}
          </a>
          <a
            className="secondary-button"
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
          >
            {serviceUiAr.directionsLabel}
          </a>
        </div>
      </section>

      <SiteFooter
        labels={arFooterLabels}
        anchorPrefix="/ar#"
        langSwitchHref={frenchTwinHref}
      />
    </main>
  );
}
