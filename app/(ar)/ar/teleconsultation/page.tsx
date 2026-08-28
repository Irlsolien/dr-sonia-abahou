import type { Metadata } from "next";
import Link from "next/link";
import { arabicFontVariables } from "../../fonts";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";
import {
  MobileActionBar,
  clinicWhatsappHref,
} from "../../../components/MobileActionBar";
import { CalendlyEmbed } from "../../../components/CalendlyEmbed";
import { PhoneIcon, WhatsAppIcon } from "../../../components/Icons";
import {
  absoluteUrl,
  clinicAddress,
  clinicName,
  clinicPhoneDisplay,
  clinicPhoneInternational,
  clinicSecondaryPhoneDisplay,
  lastModified,
  siteUrl,
  teleconsultation,
} from "../../../seo";
import {
  arFooterLabels,
  arHeaderLabels,
  arMobileActionBarLabels,
  arOgImage,
  metaAr,
} from "../../../seo-ar";

/**
 * VERSION ARABE — téléconsultation `/ar/teleconsultation`.
 *
 * Miroir strict de `app/(fr)/teleconsultation/page.tsx`, rendu en RTL. Mêmes
 * sections, même composant Calendly (chargé au clic), mêmes garanties de
 * confidentialité. Les textes traduisent le contenu français validé : aucun
 * fait nouveau, aucun tarif, aucune coordonnée bancaire, aucune donnée
 * médicale. Périmètre public = réservation seule ; le volet paiement n'est pas
 * exposé (voir la version française). Page indexable comme la version
 * française.
 */

export const metadata: Metadata = {
  title: "الاستشارة بالفيديو | الدكتورة سونيا أبحو",
  description:
    "احجزوا استشارة بالفيديو مع الدكتورة سونيا أبحو، طبيبة الغدد الصماء بتمارة: اختيار الموعد عبر الإنترنت ورابط فيديو آمن.",
  alternates: {
    canonical: "/ar/teleconsultation",
    languages: {
      "fr-MA": "/teleconsultation",
      ar: "/ar/teleconsultation",
      "x-default": "/teleconsultation",
    },
  },
  openGraph: {
    title: "الاستشارة بالفيديو | الدكتورة سونيا أبحو",
    description:
      "استشيروا الدكتورة سونيا أبحو عن بُعد: موعد عبر الإنترنت ورابط فيديو آمن.",
    url: "/ar/teleconsultation",
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
    title: "الاستشارة بالفيديو | الدكتورة سونيا أبحو",
    description:
      "استشيروا الدكتورة سونيا أبحو عن بُعد: موعد عبر الإنترنت ورابط فيديو آمن.",
    images: [absoluteUrl(arOgImage)],
  },
};

const phoneHref = `tel:${clinicPhoneInternational}`;

const steps = [
  {
    title: "اختاروا موعدكم",
    text: "اختاروا تاريخًا وساعة متاحين مباشرة عبر الإنترنت، دون المرور بالسكرتارية.",
  },
  {
    title: "استلموا التأكيد",
    text: "تؤكّد العيادة الموعد وتوضّح لكم الترتيبات العملية للاستشارة.",
  },
  {
    title: "استلموا رابط الاستشارة",
    text: "تستلمون عبر البريد الإلكتروني رابط الفيديو الآمن، وهو شخصي تمامًا، تفتحونه في وقت الموعد.",
  },
] as const;

const teleconsultationFaq = [
  {
    question: "كيف تجري الاستشارة بالفيديو؟",
    answer:
      "تجري الاستشارة عبر مكالمة فيديو آمنة. يُرسَل إليكم الرابط الآمن عبر البريد الإلكتروني بعد تأكيد الموعد، ويكفي فتحه في الوقت المتّفق عليه.",
  },
  {
    question: "متى أستلم رابط الفيديو؟",
    answer:
      "يُرسَل إليكم الرابط بعد تأكيد الموعد من طرف العيادة. وهو شخصي تمامًا ولا ينبغي مشاركته.",
  },
  {
    question: "ماذا أُدرِج عند الحجز؟",
    answer:
      "فقط اسمكم وبريدكم الإلكتروني وسبب عام. لا تُرسِلوا أي معلومة طبية حساسة أو وصفة أو نتيجة تحليل في استمارة الحجز.",
  },
  {
    question: "هل تبقى المواعيد بالعيادة ممكنة؟",
    answer:
      "نعم. تبقى الاستشارات بالعيادة متاحة هاتفيًا وعبر واتساب، إلى جانب الاستشارة بالفيديو.",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${absoluteUrl("/ar/teleconsultation")}#webpage`,
      name: "الاستشارة بالفيديو — الدكتورة سونيا أبحو",
      description:
        "حجز استشارة بالفيديو في أمراض الغدد الصماء مع الدكتورة سونيا أبحو بتمارة.",
      url: absoluteUrl("/ar/teleconsultation"),
      inLanguage: "ar-MA",
      dateModified: lastModified,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#clinic` },
    },
    {
      "@type": "MedicalClinic",
      "@id": `${siteUrl}/#clinic`,
      name: clinicName,
      telephone: clinicPhoneInternational,
      availableService: {
        "@type": "MedicalProcedure",
        name: "الاستشارة بالفيديو في أمراض الغدد الصماء",
        procedureType: "https://schema.org/NoninvasiveProcedure",
      },
    },
  ],
};

export default function ArabicTeleconsultationPage() {
  return (
    <main
      id="main-content"
      lang="ar"
      dir="rtl"
      className={`appointment-page teleconsultation-page ar-page ${arabicFontVariables}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <SiteHeader
        labels={arHeaderLabels}
        anchorPrefix="/ar#"
        homeHref="/ar"
        langSwitchHref="/teleconsultation"
        panelLang="ar"
        panelDir="rtl"
        panelClassName={`ar-nav-panel ${arabicFontVariables}`}
      />

      <MobileActionBar labels={arMobileActionBarLabels} />

      {/* Cible du lien d'évitement arabe posé par `app/(ar)/layout.tsx`. */}
      <section
        id="ar-content"
        className="appointment-hero teleconsultation-hero section-shell"
      >
        <p className="eyebrow">الاستشارة بالفيديو</p>
        <h1>استشيروا طبيبتكم عن بُعد.</h1>
        <p>
          احجزوا استشارة بالفيديو مع الدكتورة سونيا أبحو في بضع خطوات: اختاروا
          موعدًا، واستلموا تأكيد العيادة، ثم رابط الفيديو الآمن. اذكروا سببًا
          عامًا فقط — ولا تُرسِلوا أي معلومة طبية حساسة في الاستمارات.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#reserver">
            اختيار موعد
          </a>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">كيف تعمل</p>
          <h2>مسار الاستشارة بالفيديو.</h2>
        </div>
        <div className="teleconsultation-steps">
          {steps.map((step, index) => (
            <article key={step.title} className="teleconsultation-step">
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="reserver" className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">الحجز</p>
          <h2>اختاروا موعدكم.</h2>
        </div>
        <CalendlyEmbed
          url={teleconsultation.calendlyUrl}
          dir="rtl"
          labels={{
            title: "فتح جدول الحجز",
            hint: "يُفتح جدول Calendly عند الطلب. لا تُدخِلوا أي معلومة طبية: اكتفوا باسمكم وبريدكم الإلكتروني وسبب عام.",
            cta: "اختيار موعد",
            loading: "جارٍ فتح الجدول…",
            consentNote:
              "بفتح الجدول، يتم تحميل خدمة Calendly الخارجية وقد تُودِع ملفات تعريف ارتباط ضرورية لعملها.",
          }}
        />
      </section>

      <section className="section-shell appointment-privacy">
        <strong>السرّية</strong>
        <p>
          لا تُرسِلوا أي معلومة طبية أو وصفة أو نتيجة تحليل أو وثيقة صحية في
          استمارة الحجز. تُستعمل معطياتكم فقط لتدبير الموعد. وتوضّح لكم العيادة
          الترتيبات العملية للاستشارة.
        </p>
      </section>

      <section className="section-shell faq-section">
        <div className="section-heading faq-heading">
          <h2>أسئلة متكرّرة حول الاستشارة بالفيديو.</h2>
        </div>
        <div className="faq-grid">
          {teleconsultationFaq.map((item) => (
            <details key={item.question} className="faq-card">
              <summary>
                <span>{item.question}</span>
                <i aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section-shell appointment-privacy">
        <strong>تحتاجون مساعدة على الحجز؟</strong>
        <p>
          العنوان: {clinicAddress}. الهاتف الثابت: {clinicPhoneDisplay}. الهاتف
          المحمول / واتساب: {clinicSecondaryPhoneDisplay}. يمكن للسكرتارية
          مساعدتكم هاتفيًا أو عبر واتساب.
        </p>
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
        <div className="hero-actions">
          <Link className="text-link" href="/ar/rendez-vous">
            الاطّلاع على خيارات الموعد
          </Link>
        </div>
      </section>

      <SiteFooter
        labels={arFooterLabels}
        anchorPrefix="/ar#"
        langSwitchHref="/teleconsultation"
      />
    </main>
  );
}
