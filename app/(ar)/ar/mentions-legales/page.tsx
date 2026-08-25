import type { Metadata } from "next";
import { arabicFontVariables } from "../../fonts";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";
import {
  absoluteUrl,
  clinicAddress,
  clinicEmail,
  clinicPhoneDisplay,
  clinicSecondaryPhoneDisplay,
  doctorInpe,
  doctorOrderNumber,
  legalUpdatedAr,
} from "../../../seo";
import { arFooterLabels, arHeaderLabels, arOgImage, metaAr } from "../../../seo-ar";

/**
 * VERSION ARABE — mentions légales `/ar/mentions-legales`.
 *
 * Miroir strict de `app/(fr)/mentions-legales/page.tsx`, rendu en RTL. Tous les
 * textes sont des traductions de contenus déjà validés dans la version
 * française : aucun fait, coordonnée, numéro ou information juridique n'a été
 * ajouté ou inventé. Les données factuelles (adresse, téléphones, email, numéro
 * d'ordre, INPE) proviennent de `app/seo.ts`, source unique partagée avec la
 * version française.
 */

export const metadata: Metadata = {
  title: "الإشعارات القانونية | الدكتورة سونيا أبحو",
  description:
    "الإشعارات القانونية لموقع عيادة الدكتورة سونيا أبحو، أمراض الغدد الصماء والأمراض الاستقلابية بتمارة.",
  alternates: {
    canonical: "/ar/mentions-legales",
    languages: {
      "fr-MA": "/mentions-legales",
      ar: "/ar/mentions-legales",
      /* Version servie par défaut aux visiteurs dont la langue n'est ni le
         français ni l'arabe. */
      "x-default": "/mentions-legales",
    },
  },
  openGraph: {
    title: "الإشعارات القانونية | الدكتورة سونيا أبحو",
    description:
      "الإشعارات القانونية لموقع عيادة الدكتورة سونيا أبحو، أمراض الغدد الصماء والأمراض الاستقلابية بتمارة.",
    url: "/ar/mentions-legales",
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
    title: "الإشعارات القانونية | الدكتورة سونيا أبحو",
    description:
      "الإشعارات القانونية لموقع عيادة الدكتورة سونيا أبحو، أمراض الغدد الصماء والأمراض الاستقلابية بتمارة.",
    images: [absoluteUrl(arOgImage)],
  },
};

export default function ArabicLegalNoticePage() {
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
        langSwitchHref="/mentions-legales"
        panelLang="ar"
        panelDir="rtl"
        panelClassName={`ar-nav-panel ${arabicFontVariables}`}
      />

      {/* Cible du lien d'évitement arabe posé par `app/(ar)/layout.tsx`. */}
      <section id="ar-content" className="legal-hero section-shell">
        <p className="eyebrow">الإطار القانوني</p>
        <h1>الإشعارات القانونية</h1>
        <p>
          تعرض هذه الصفحة المعلومات التي تقدّمها العيادة للتعريف بناشر الموقع
          ومضيّفه وإطار استعمال المحتويات المنشورة.
        </p>
        <p className="legal-updated">آخر تحديث: {legalUpdatedAr}.</p>
      </section>

      <section className="legal-content section-shell">
        <article>
          <h2>ناشر الموقع</h2>
          <p>
            هذا الموقع تنشره <strong>عيادة الدكتورة سونيا أبحو</strong>، عيادة
            طبية لأمراض الغدد الصماء والأمراض الاستقلابية الكائنة بتمارة، المغرب.
          </p>
          <ul>
            <li>العنوان: {clinicAddress}، المغرب.</li>
            <li>الهاتف الرئيسي: {clinicPhoneDisplay}.</li>
            <li>الهاتف الثانوي / واتساب: {clinicSecondaryPhoneDisplay}.</li>
            <li>البريد المهني: {clinicEmail}.</li>
            <li>مديرة النشر: الدكتورة سونيا أبحو.</li>
            <li>رقم التسجيل في هيئة الأطباء: {doctorOrderNumber}.</li>
            <li>المجلس الجهوي لهيئة الأطباء بالرباط.</li>
            <li>الرقم الوطني لمهني الصحة (INPE): {doctorInpe}.</li>
          </ul>
        </article>

        <article>
          <h2>معلومات إدارية غير مُقدَّمة</h2>
          <p>
            المعلومات التالية لم تُقدَّم في استمارة التحقق. لذلك فهي غير مُختلَقة
            ولا تُعرَض كمعلومات رسمية.
          </p>
          <ul>
            <li>المُعرّف المشترك للمقاولة (ICE) للعيادة: غير مُقدَّم.</li>
            <li>رقم الباتيندا / الضريبة المهنية: غير مُقدَّم.</li>
            <li>الشكل القانوني للعيادة: غير مُقدَّم.</li>
            <li>رقم CNDP أو وصل التصريح: غير مُقدَّم.</li>
          </ul>
        </article>

        <article>
          <h2>الاستضافة</h2>
          <p>
            الموقع مُستضاف لدى <strong>Vercel Inc.</strong>، 340 S Lemon Ave
            #4133, Walnut, CA 91789, الولايات المتحدة الأمريكية. خدمة الاستضافة
            متاحة عبر{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              vercel.com
            </a>
            .
          </p>
        </article>

        <article>
          <h2>موضوع الموقع</h2>
          <p>
            يعرض الموقع العيادة، ومجالات الاستشارة المُثبَتة، والأوقات، ووسائل
            التواصل، والمعلومات العملية للاتصال بالعيادة. وهو لا يتيح إجراء تشخيص
            عبر الإنترنت ولا يُغني عن استشارة طبية.
          </p>
        </article>

        <article>
          <h2>الملكية الفكرية</h2>
          <p>
            النصوص والعناصر الرسومية والصور والرسوم والواجهات والمحتويات الموجودة
            على الموقع محمية. يُمنع كل نسخ أو تكييف أو إعادة استعمال غير مُرخَّص،
            إلا بموافقة كتابية مسبقة من العيادة أو في الحالات التي يقرّها القانون.
          </p>
        </article>

        <article>
          <h2>المسؤولية الطبية</h2>
          <p>
            المعلومات المنشورة عامة وذات طابع تربوي. وهي لا تشكّل وصفة طبية ولا
            رأيًا طبيًا مخصَّصًا ولا تكفّلًا بحالة استعجالية. في حال وجود خطر حيوي،
            يجب الاتصال فورًا بمصالح الطوارئ المختصة.
          </p>
        </article>

        <article>
          <h2>القانون المطبَّق</h2>
          <p>
            الموقع مُعَدّ لعيادة توجد بالمغرب. تشمل القواعد المطبَّقة على الخصوص
            القانون المغربي، وفيما يخص حماية المعطيات الشخصية، القانون المغربي رقم
            09-08.
          </p>
        </article>
      </section>

      <SiteFooter
        labels={arFooterLabels}
        anchorPrefix="/ar#"
        langSwitchHref="/mentions-legales"
      />
    </main>
  );
}
