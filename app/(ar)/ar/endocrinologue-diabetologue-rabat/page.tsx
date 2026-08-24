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
  googleMapsPlaceUrl,
  lastModified,
  services,
  siteUrl,
} from "../../../seo";
import {
  arFooterLabels,
  arHeaderLabels,
  arMobileActionBarLabels,
  arOgImage,
  metaAr,
} from "../../../seo-ar";
import { entityNodes, speakableSpecification } from "../../../geo";

/**
 * VERSION ARABE — page géolocalisée « Rabat » `/ar/endocrinologue-diabetologue-rabat`.
 *
 * Miroir strict de `app/(fr)/endocrinologue-diabetologue-rabat/page.tsx`, rendu
 * en RTL. Mêmes sections, mêmes faits validés (proximité de l'agglomération de
 * Rabat, parcours rabati du médecin). Aucune donnée ajoutée.
 */

const frenchPath = "/endocrinologue-diabetologue-rabat";
const canonical = "/ar/endocrinologue-diabetologue-rabat";
const pageUrl = absoluteUrl(canonical);
const mapsHref = googleMapsPlaceUrl;

const seoTitle = "طبيبة الغدد والسكري للرباط وتمارة | الدكتورة سونيا أبحو";
const seoDescription =
  "طبيبة غدد صماء وسكري تستقبل بعيادة المسيرة 1 بتمارة، على مشارف الرباط: السكري، الغدة الدرقية، التغذية والأمراض الأيضية. الدكتورة سونيا أبحو، رئيسة الجمعية المغربية لأمراض السكري.";

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  keywords: [
    "طبيبة غدد صماء الرباط",
    "طبيبة سكري الرباط",
    "أخصائية السكري الرباط",
    "طبيبة غدد صماء تمارة",
    "أخصائية تغذية الرباط",
  ],
  alternates: {
    canonical,
    languages: {
      "fr-MA": frenchPath,
      ar: canonical,
      "x-default": frenchPath,
    },
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
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
    title: seoTitle,
    description: seoDescription,
    images: [absoluteUrl(arOgImage)],
  },
};

const rabatFaqItems = [
  {
    question: "هل عيادة الدكتورة سونيا أبحو في الرباط؟",
    answer:
      "تقع العيادة بالمسيرة 1 بتمارة، ضمن تجمّع الرباط-سلا-تمارة، على بُعد دقائق من الرباط. تستقبل مرضى من الرباط وسلا وتمارة لمتابعة السكري والغدة الدرقية والتغذية والأمراض الأيضية.",
  },
  {
    question: "هل تتابع الدكتورة سونيا أبحو مرضى قادمين من الرباط؟",
    answer:
      "نعم. كطبيبة غدد صماء وسكري، تستقبل بانتظام مرضى من الرباط وجهتها. مسارها متجذّر بالرباط: طبيبة سابقة بالمركز الاستشفائي الجامعي بالرباط وبالمستشفى العسكري بالرباط، ومسجَّلة بالمجلس الجهوي لهيئة الأطباء بالرباط.",
  },
  {
    question: "كيف يُؤخذ موعد انطلاقًا من الرباط؟",
    answer: `يتم تأكيد الموعد هاتفيًا أو عبر واتساب لدى العيادة. الهاتف الثابت: ${clinicPhoneDisplay}. الهاتف المحمول / واتساب: ${clinicSecondaryPhoneDisplay}. العنوان: ${clinicAddress}.`,
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
          name: "الرئيسية",
          item: `${siteUrl}/ar`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "طبيبة الغدد والسكري للرباط",
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
      inLanguage: "ar-MA",
      dateModified: lastModified,
      lastReviewed: lastModified,
      reviewedBy: {
        "@id": `${absoluteUrl(doctorProfilePath)}#doctor`,
      },
      speakable: speakableSpecification,
      medicalAudience: "https://schema.org/Patient",
      specialty: "https://schema.org/Endocrine",
      about: entityNodes(["endocrinologie", "diabete"], "ar"),
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      translationOfWork: {
        "@id": `${absoluteUrl(frenchPath)}#webpage`,
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

export default function ArabicRabatPage() {
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
        langSwitchHref={frenchPath}
        panelLang="ar"
        panelDir="rtl"
        panelClassName={`ar-nav-panel ${arabicFontVariables}`}
      />

      <MobileActionBar labels={arMobileActionBarLabels} />

      {/* Cible du lien d'évitement arabe posé par `app/(ar)/layout.tsx`. */}
      <section id="ar-content" className="service-hero section-shell">
        <p className="eyebrow">عيادة أمراض الغدد على مشارف الرباط</p>
        <h1>طبيبة غدد صماء وسكري للرباط وتمارة.</h1>
        <p>
          توجد عيادة {doctorName} بالمسيرة 1 بتمارة، ضمن تجمّع الرباط-سلا-تمارة.
          تستقبل مرضى من الرباط وسلا وتمارة لمتابعة السكري والغدة الدرقية
          والتغذية والأمراض الأيضية.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" href="/ar/rendez-vous">
            حجز موعد
          </Link>
          <a className="secondary-button" href={clinicPhoneHref}>
            <PhoneIcon />
            الاتصال
          </a>
          <a
            className="secondary-button whatsapp-button"
            href={clinicWhatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            واتساب
          </a>
          <a
            className="secondary-button"
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            عرض المسار
          </a>
        </div>
      </section>

      <section className="section-shell quick-answer-section">
        <div className="quick-answer">
          <p className="eyebrow">إجابة سريعة</p>
          <p className="quick-answer-text">
            {doctorName}، طبيبة غدد صماء وسكري، تستقبل بعيادة المسيرة 1 بتمارة،
            على بُعد دقائق من الرباط. الموعد هاتفيًا ({clinicPhoneDisplay}) أو عبر
            واتساب ({clinicSecondaryPhoneDisplay}).
          </p>
        </div>
      </section>

      <section className="section-shell service-detail-grid">
        <article className="service-focus-card care-diabetes">
          <span>على مشارف الرباط</span>
          <h2>عيادة داخل تجمّع الرباط.</h2>
          <p>
            تقع العيادة بالمسيرة 1 بتمارة، ويسهل الوصول إليها من الرباط وسلا.
            يجد مرضى الجهة متابعةً قريبة لأمراض الغدد دون التنقّل إلى وسط الرباط.
            العنوان: {clinicAddress}.
          </p>
        </article>
        <article className="service-info-card">
          <h2>مسار متجذّر بالرباط</h2>
          <ol className="service-points-list">
            <li className="service-point">
              <span className="service-point-index">٠١</span>
              <p>طبيبة سابقة بالمركز الاستشفائي الجامعي بالرباط.</p>
            </li>
            <li className="service-point">
              <span className="service-point-index">٠٢</span>
              <p>طبيبة سابقة ملحقة بالمستشفى العسكري بالرباط.</p>
            </li>
            <li className="service-point">
              <span className="service-point-index">٠٣</span>
              <p>مسجَّلة بالمجلس الجهوي لهيئة الأطباء بالرباط.</p>
            </li>
            <li className="service-point">
              <span className="service-point-index">٠٤</span>
              <p>
                مؤسِّسة ورئيسة الجمعية المغربية لأمراض السكري.
              </p>
            </li>
          </ol>
        </article>
      </section>

      <section className="section-shell related-services-section">
        <div className="related-services-intro">
          <div className="section-heading related-services-heading">
            <p className="eyebrow">أسباب الاستشارة</p>
            <h2>ما تتكفّل به العيادة.</h2>
          </div>
          <Link className="text-link" href="/ar">
            عرض كل الأسباب في الصفحة الرئيسية
          </Link>
        </div>
        <div className="care-index-compact">
          {services.map((item, index) => (
            <Link
              key={item.slug}
              className="care-row-compact"
              href={`/ar/${item.slug}`}
            >
              <span className="care-row-compact-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="care-row-compact-title">{item.title}</span>
              <span className="care-row-compact-arrow" aria-hidden="true">
                ←
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell faq-section">
        <div className="section-heading">
          <p className="eyebrow">أسئلة شائعة</p>
          <h2>مرضى الرباط وجهتها.</h2>
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
          <p className="eyebrow">الموعد</p>
          <h2>التواصل مع عيادة {doctorName}.</h2>
          <p>
            العنوان: {clinicAddress}. الهاتف الثابت: {clinicPhoneDisplay}.
            الهاتف المحمول / واتساب: {clinicSecondaryPhoneDisplay}.
          </p>
        </div>
        <div className="cta-stack">
          <Link className="primary-button" href="/ar/rendez-vous">
            حجز موعد
          </Link>
          <a
            className="secondary-button"
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            عرض المسار
          </a>
        </div>
      </section>

      <SiteFooter
        labels={arFooterLabels}
        anchorPrefix="/ar#"
        langSwitchHref={frenchPath}
      />
    </main>
  );
}
