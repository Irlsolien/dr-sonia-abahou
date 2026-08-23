import type { Metadata } from "next";
import { arabicFontVariables } from "../../fonts";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";
import { absoluteUrl } from "../../../seo";
import { arFooterLabels, arHeaderLabels, arOgImage, metaAr } from "../../../seo-ar";

/**
 * VERSION ARABE — politique cookies `/ar/cookies`.
 *
 * Miroir strict de `app/(fr)/cookies/page.tsx`, rendu en RTL. Le contenu est une
 * traduction fidèle du texte français validé : mêmes constats (Vercel Web
 * Analytics sans cookie, carte Google Maps différée, services tiers). Rien n'a
 * été ajouté ni inventé.
 */

export const metadata: Metadata = {
  title: "سياسة ملفات تعريف الارتباط | الدكتورة سونيا أبحو",
  description:
    "سياسة ملفات تعريف الارتباط لموقع عيادة الدكتورة سونيا أبحو بتمارة.",
  alternates: {
    canonical: "/ar/cookies",
    languages: {
      "fr-MA": "/cookies",
      ar: "/ar/cookies",
      /* Version servie par défaut aux visiteurs dont la langue n'est ni le
         français ni l'arabe. */
      "x-default": "/cookies",
    },
  },
  openGraph: {
    title: "سياسة ملفات تعريف الارتباط | الدكتورة سونيا أبحو",
    description:
      "سياسة ملفات تعريف الارتباط لموقع عيادة الدكتورة سونيا أبحو بتمارة.",
    url: "/ar/cookies",
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
    title: "سياسة ملفات تعريف الارتباط | الدكتورة سونيا أبحو",
    description:
      "سياسة ملفات تعريف الارتباط لموقع عيادة الدكتورة سونيا أبحو بتمارة.",
    images: [absoluteUrl(arOgImage)],
  },
};

export default function ArabicCookiesPage() {
  return (
    <main
      id="main-content"
      lang="ar"
      dir="rtl"
      className={`legal-page ar-page ${arabicFontVariables}`}
    >
      <SiteHeader
        labels={arHeaderLabels}
        anchorPrefix="/ar#"
        homeHref="/ar"
        langSwitchHref="/cookies"
        panelLang="ar"
        panelDir="rtl"
        panelClassName={`ar-nav-panel ${arabicFontVariables}`}
      />

      {/* Cible du lien d'évitement arabe posé par `app/(ar)/layout.tsx`. */}
      <section id="ar-content" className="legal-hero section-shell">
        <p className="eyebrow">ملفات تعريف الارتباط</p>
        <h1>سياسة ملفات تعريف الارتباط</h1>
        <p>
          صُمِّم الموقع عمدًا للحدّ من المتتبِّعات وتجنّب ملفات تعريف الارتباط غير
          الضرورية على الصفحة التعريفية.
        </p>
      </section>

      <section className="legal-content section-shell">
        <article>
          <h2>ملفات تعريف الارتباط التي يستعملها الموقع</h2>
          <p>
            لا يضع الموقع أي ملفات تعريف ارتباط إعلانية ولا بيكسلات تسويقية ولا
            أداة تعقّب فردي للزوار.
          </p>
          <p>
            يُجرى قياس جمهور مجهول عبر Vercel Web Analytics، أداة مضيّف الموقع.
            لا تودع هذه الأداة أي ملف تعريف ارتباط، ولا تتعقّب الزوار فرديًا، ولا
            تجمع سوى إحصاءات مُجمَّعة (الصفحات المُتصفَّحة، نوع الجهاز، البلد). ولا
            تُربَط أي معطيات اسمية بهذه القياسات.
          </p>
        </article>

        <article>
          <h2>الخدمات الخارجية</h2>
          <p>
            تفتح بعض الروابط أو الوحدات خدمات خارجية، منها خرائط Google وواتساب
            وLinkedIn وInstagram. وقد تطبّق هذه الخدمات قواعد الخصوصية الخاصة بها
            وتودع ملفات تعريف الارتباط الخاصة بها عندما يختار المستخدم فتحها.
          </p>
        </article>

        <article>
          <h2>خريطة تحديد الموقع</h2>
          <p>
            تقترح الصفحة الرئيسية خريطة Google Maps لتحديد موقع العيادة. افتراضيًا،
            لا تظهر سوى واجهة ثابتة: ولا تُحمَّل الخريطة التفاعلية إلا بعد نقرة على
            «عرض الخريطة التفاعلية». ولا تُرسَل أي معطيات إلى Google ما لم يقم
            المستخدم بهذه النقرة. وبمجرد عرض الخريطة، قد يُرسِل تحميلها إلى Google
            معطيات تقنية، لا سيّما عنوان IP ومعلومات حول المتصفّح. وعندئذٍ تطبّق
            Google قواعدها الخاصة بالخصوصية وملفات تعريف الارتباط.
          </p>
        </article>

        <article>
          <h2>التحكّم عبر المتصفّح</h2>
          <p>
            يمكن للمستخدم ضبط متصفّحه لحجب ملفات تعريف الارتباط أو حذفها. وقد يحدّ
            حجب بعض ملفات تعريف الارتباط الخارجية من اشتغال الخدمات الخارجية
            المفتوحة من الموقع.
          </p>
        </article>

        <article>
          <h2>التطوّر</h2>
          <p>
            إذا أُضيفت لاحقًا أداة لقياس الجمهور أو للحجز عبر الإنترنت أو خدمة
            خارجية أخرى، فسيتعيّن تحديث هذه السياسة وإضافة آلية للموافقة عند
            الاقتضاء.
          </p>
        </article>
      </section>

      <SiteFooter
        labels={arFooterLabels}
        anchorPrefix="/ar#"
        langSwitchHref="/cookies"
      />
    </main>
  );
}
