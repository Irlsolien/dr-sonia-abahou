import type { Metadata } from "next";
import Link from "next/link";
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
  siteUrl,
} from "../../../seo";
import {
  arFooterLabels,
  arHeaderLabels,
  arMobileActionBarLabels,
  arOgImage,
  metaAr,
} from "../../../seo-ar";

/**
 * VERSION ARABE — prise de rendez-vous `/ar/rendez-vous`.
 *
 * Miroir strict de `app/(fr)/rendez-vous/page.tsx`, rendu en RTL. Mêmes
 * sections, mêmes composants et mêmes actions (appel, WhatsApp). Les textes
 * sont des traductions du contenu français validé : aucun canal, numéro ou
 * délai n'a été ajouté. Les données factuelles proviennent de `app/seo.ts`.
 *
 * Le lien « en savoir plus » mène à la page téléconsultation, qui n'existe
 * qu'en français : il porte donc `hrefLang="fr"`.
 */

export const metadata: Metadata = {
  title: "حجز موعد | الدكتورة سونيا أبحو",
  description:
    "التواصل مع عيادة الدكتورة سونيا أبحو لأخذ موعد. الحجز بالفيديو في طور الإعداد مؤقتًا.",
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
    title: "حجز موعد | الدكتورة سونيا أبحو",
    description:
      "التواصل مع العيادة عبر الاتصال أو واتساب. الحجز بالفيديو في طور الإعداد مؤقتًا.",
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
    title: "حجز موعد | الدكتورة سونيا أبحو",
    description:
      "التواصل مع العيادة عبر الاتصال أو واتساب. الحجز بالفيديو في طور الإعداد مؤقتًا.",
    images: [absoluteUrl(arOgImage)],
  },
};

const phoneHref = `tel:${clinicPhoneInternational}`;

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
        "معلومات التواصل لأخذ موعد مع عيادة الدكتورة سونيا أبحو بتمارة.",
      url: absoluteUrl("/ar/rendez-vous"),
      inLanguage: "ar-MA",
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
        <h1>اختيار نوع الموعد.</h1>
        <p>
          الحجز عبر الإنترنت والاستشارة بالفيديو قيد الإعداد حاليًا. في الوقت
          الراهن، يُرجى التواصل مع العيادة هاتفيًا أو عبر واتساب لتأكيد الأوقات
          المتاحة.
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
            <strong>الهاتف الثابت: {clinicPhoneDisplay}</strong>
            <strong>الهاتف المحمول / واتساب: {clinicSecondaryPhoneDisplay}</strong>
            <small>{clinicAddress}</small>
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
          </div>
        </article>

        <article className="appointment-card appointment-card-video appointment-card-compact">
          <span>قيد الإعداد</span>
          <h2>الاستشارة بالفيديو</h2>
          <p>
            الحجز بالفيديو ليس مفتوحًا بعد للمرضى. في انتظار ذلك، تبقى العيادة
            متاحة هاتفيًا أو عبر واتساب.
          </p>
          <Link className="text-link" href="/teleconsultation" hrefLang="fr">
            مزيد من المعلومات حول الاستشارة بالفيديو
          </Link>
        </article>
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
