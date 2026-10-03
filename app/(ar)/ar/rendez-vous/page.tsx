import type { Metadata } from "next";
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
  googleMapsPlaceUrl,
  lastModifiedFor,
  siteUrl,
} from "../../../seo";
import {
  arFooterLabels,
  arHeaderLabels,
  arMobileActionBarLabels,
  arOgImage,
  hoursAr,
  metaAr,
  serviceUiAr,
  uiAr,
} from "../../../seo-ar";
import { openingHoursSpecification } from "../../../structured-data";

/**
 * VERSION ARABE — prise de rendez-vous `/ar/rendez-vous`.
 *
 * Miroir strict de `app/(fr)/rendez-vous/page.tsx`, rendu en RTL. Mêmes
 * sections, mêmes composants et mêmes actions (appel, WhatsApp, itinéraire).
 * Les textes reprennent des traductions déjà validées de `app/seo-ar.ts`
 * (`faqAr`, `hoursAr`, `serviceUiAr.contact`, `uiAr.cabinet`) : aucun canal,
 * numéro, horaire ou délai n'a été ajouté. Les données factuelles proviennent
 * de `app/seo.ts`.
 *
 * La téléconsultation est en maintenance : la carte est purement informative,
 * sans lien vers la page (aucun accès public tant que le service n'est pas
 * rouvert), et elle n'apparaît ni dans le titre ni dans la description.
 */

const seoTitle = "حجز موعد بالعيادة في تمارة | الدكتورة سونيا أبحو";
const seoDescription =
  "حجز موعد بعيادة الدكتورة سونيا أبحو بتمارة (المسيرة 1) عبر الهاتف أو واتساب. أوقات العمل، العنوان، الاتجاهات والوثائق التي ينبغي إحضارها.";

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  alternates: {
    canonical: "/ar/rendez-vous",
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
    url: "/ar/rendez-vous",
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

const phoneHref = `tel:${clinicPhoneInternational}`;
const mapsHref = googleMapsPlaceUrl;

/* Même nœud `#clinic` que les autres pages (identifiant partagé) : la clinique
   est une seule entité, seule la page `ContactPage` change d'une langue à
   l'autre. */
const appointmentStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${absoluteUrl("/ar/rendez-vous")}#webpage`,
      name: "حجز موعد مع الدكتورة سونيا أبحو",
      description:
        "معلومات التواصل وأوقات العمل والوصول لأخذ موعد مع عيادة الدكتورة سونيا أبحو بتمارة.",
      url: absoluteUrl("/ar/rendez-vous"),
      inLanguage: "ar-MA",
      dateModified: lastModifiedFor("/ar/rendez-vous"),
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
          availableLanguage: ["ar", "fr"],
        },
        {
          "@type": "ContactPoint",
          telephone: clinicSecondaryPhoneInternational,
          contactType: "Téléphone portable et WhatsApp du cabinet",
          availableLanguage: ["ar", "fr"],
        },
      ],
    },
  ],
};

/* Étapes identiques à celles des pages motifs arabes (`serviceUiAr.contact`),
   miroir de `appointmentSteps` côté français. */
const appointmentStepsAr = [
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

export default function ArabicAppointmentPage() {
  return (
    <main
      id="main-content"
      lang="ar"
      dir="rtl"
      className={`appointment-page ar-page ${arabicFontVariables}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appointmentStructuredData),
        }}
      />

      <SiteHeader
        labels={arHeaderLabels}
        anchorPrefix="/ar#"
        homeHref="/ar"
        langSwitchHref="/rendez-vous"
        panelLang="ar"
        panelDir="rtl"
        panelClassName={`ar-nav-panel ${arabicFontVariables}`}
      />

      <MobileActionBar labels={arMobileActionBarLabels} />

      {/* Cible du lien d'évitement arabe posé par `app/(ar)/layout.tsx`. */}
      <section id="ar-content" className="appointment-hero section-shell">
        <p className="eyebrow">الموعد</p>
        <h1>حجز موعد بالعيادة في تمارة.</h1>
        <p>
          تستقبل عيادة الدكتورة سونيا أبحو، بالمسيرة 1 (تمارة)، المرضى بموعد
          فقط. تواصلوا مع السكرتارية هاتفيًا أو عبر واتساب: تؤكّد السكرتارية
          الأوقات المتاحة والترتيبات العملية للموعد.
        </p>
      </section>

      <section className="section-shell appointment-options">
        <article className="appointment-card appointment-card-cabinet">
          <span>في العيادة</span>
          <h2>موعد في العيادة</h2>
          <p>
            لاستشارة حضورية، تواصلوا مع العيادة هاتفيًا أو عبر واتساب لتأكيد
            الأوقات المتاحة.
          </p>
          <div className="appointment-meta">
            <strong>
              الهاتف الثابت:{" "}
              <bdi dir="ltr" className="appointment-phone">
                {clinicPhoneDisplay}
              </bdi>
            </strong>
            <strong>
              الهاتف المحمول / واتساب:{" "}
              <bdi dir="ltr" className="appointment-phone">
                {clinicSecondaryPhoneDisplay}
              </bdi>
            </strong>
            <small>
              <bdi dir="ltr">{clinicAddress}</bdi>
            </small>
          </div>
          <div className="hero-actions">
            <a className="primary-button" href={phoneHref}>
              <PhoneIcon />
              الاتصال بالعيادة
            </a>
            <a
              className="secondary-button whatsapp-button"
              href={clinicWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              المراسلة عبر واتساب
            </a>
            <a
              className="secondary-button"
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {serviceUiAr.directionsLabel}
            </a>
          </div>
        </article>

        <article className="appointment-card appointment-card-video appointment-card-compact">
          <span>قيد الإعداد</span>
          <h2>الاستشارة بالفيديو</h2>
          <p>
            الحجز بالفيديو ليس مفتوحًا بعد للمرضى. في انتظار ذلك، تبقى العيادة
            متاحة هاتفيًا أو عبر واتساب.
          </p>
        </article>
      </section>

      {/* Horaires et accès : miroir du bloc français, mêmes données
          (`hoursAr`, `faqAr` accès et règlement), mêmes classes. */}
      <section className="section-shell appointment-practical">
        <div className="section-heading">
          <p className="eyebrow">معلومات عملية</p>
          <h2>أوقات العمل والوصول إلى العيادة.</h2>
        </div>
        <div className="service-detail-grid">
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
          <div className="hours-panel appointment-access">
            <h3>العنوان والوصول</h3>
            <p>
              <bdi dir="ltr">{clinicAddress}</bdi>
            </p>
            <p>
              مدخل العيادة مهيّأ للأشخاص ذوي الحركة المحدودة، وتقدّم السكرتارية
              التوضيحات العملية حول الوصول.
            </p>
            <div className="hero-actions">
              <a
                className="primary-button"
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {uiAr.cabinet.openDirections}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell contact-steps-section">
        <div className="section-heading">
          <p className="eyebrow">حجز الموعد</p>
          <h2>كيف يتم حجز الموعد.</h2>
        </div>
        <div className="contact-steps-grid">
          {appointmentStepsAr.map((step, index) => (
            <article key={step.title} className="contact-step-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell appointment-privacy">
        <strong>السرّية الطبية</strong>
        <p>
          لأخذ الموعد، اذكروا فقط سببًا عامًا. لا تُرسلوا وثائق طبية حساسة عبر
          واتساب أو أي استمارة غير مُعتمَدة من العيادة.
        </p>
      </section>

      <SiteFooter
        labels={arFooterLabels}
        anchorPrefix="/ar#"
        langSwitchHref="/rendez-vous"
      />
    </main>
  );
}
