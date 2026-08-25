import type { Metadata } from "next";
import { arabicFontVariables } from "../../fonts";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";
import {
  absoluteUrl,
  clinicAddress,
  clinicEmail,
  clinicPhoneDisplay,
  legalUpdatedAr,
} from "../../../seo";
import { arFooterLabels, arHeaderLabels, arOgImage, metaAr } from "../../../seo-ar";

/**
 * VERSION ARABE — politique de confidentialité `/ar/confidentialite`.
 *
 * Miroir strict de `app/(fr)/confidentialite/page.tsx`, rendu en RTL. Toutes les
 * sections sont des traductions du contenu français déjà validé (loi marocaine
 * n° 09-08, CNDP, données de santé) : aucune obligation, référence ou
 * coordonnée n'a été ajoutée ou inventée. Les données factuelles proviennent de
 * `app/seo.ts`, source unique partagée avec la version française.
 */

export const metadata: Metadata = {
  title: "سياسة الخصوصية | الدكتورة سونيا أبحو",
  description:
    "سياسة الخصوصية لموقع عيادة الدكتورة سونيا أبحو بتمارة.",
  alternates: {
    canonical: "/ar/confidentialite",
    languages: {
      "fr-MA": "/confidentialite",
      ar: "/ar/confidentialite",
      /* Version servie par défaut aux visiteurs dont la langue n'est ni le
         français ni l'arabe. */
      "x-default": "/confidentialite",
    },
  },
  openGraph: {
    title: "سياسة الخصوصية | الدكتورة سونيا أبحو",
    description:
      "سياسة الخصوصية لموقع عيادة الدكتورة سونيا أبحو بتمارة.",
    url: "/ar/confidentialite",
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
    title: "سياسة الخصوصية | الدكتورة سونيا أبحو",
    description:
      "سياسة الخصوصية لموقع عيادة الدكتورة سونيا أبحو بتمارة.",
    images: [absoluteUrl(arOgImage)],
  },
};

export default function ArabicPrivacyPage() {
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
        langSwitchHref="/confidentialite"
        panelLang="ar"
        panelDir="rtl"
        panelClassName={`ar-nav-panel ${arabicFontVariables}`}
      />

      {/* Cible du lien d'évitement arabe posé par `app/(ar)/layout.tsx`. */}
      <section id="ar-content" className="legal-hero section-shell">
        <p className="eyebrow">المعطيات الشخصية</p>
        <h1>سياسة الخصوصية</h1>
        <p>
          توضّح هذه السياسة المعالجات الممكنة للمعطيات في إطار الموقع التعريفي،
          وفقًا للمعلومات التي قدّمتها العيادة والقانون المغربي رقم 09-08.
        </p>
        <p className="legal-updated">آخر تحديث: {legalUpdatedAr}.</p>
      </section>

      <section className="legal-content section-shell">
        <article>
          <h2>المسؤول عن المعالجة</h2>
          <p>
            المسؤول عن معالجة المعطيات هو{" "}
            <strong>عيادة الدكتورة سونيا أبحو</strong>، الكائنة بـ {clinicAddress}
            ، المغرب.
          </p>
          <p>
            لأي طلب يتعلق بالمعطيات الشخصية، يمكن التواصل مع العيادة عبر البريد
            الإلكتروني <strong>{clinicEmail}</strong> أو هاتفيًا على{" "}
            <strong>{clinicPhoneDisplay}</strong>.
          </p>
        </article>

        <article>
          <h2>المعطيات المُعالَجة</h2>
          <p>
            لا يتضمّن الموقع التعريفي أي استمارة طبية ولا يجمع مباشرةً أي ملف
            مريض. غير أنّ بعض المعطيات قد تُعالَج عندما يختار المستخدم طوعًا
            التواصل مع العيادة.
          </p>
          <ul>
            <li>معطيات التعريف والتواصل المُقدَّمة طوعًا.</li>
            <li>المعلومات اللازمة لأخذ موعد أو للرد على طلب.</li>
            <li>معطيات تقنية دنيا مرتبطة بتصفّح الموقع لدى المضيّف.</li>
          </ul>
        </article>

        <article>
          <h2>الغايات</h2>
          <p>يمكن استعمال المعطيات فقط من أجل:</p>
          <ul>
            <li>الرد على طلبات التواصل؛</li>
            <li>تسهيل أخذ الموعد أو تأكيده؛</li>
            <li>ضمان الاشتغال التقني وأمن الموقع؛</li>
            <li>احترام الالتزامات القانونية والمهنية المطبَّقة.</li>
          </ul>
        </article>

        <article>
          <h2>المعطيات الصحية</h2>
          <p>
            المعطيات المتعلقة بالصحة معطيات حساسة. لا ينبغي استعمال الموقع
            التعريفي لإرسال وثائق طبية حساسة أو نتائج فحوصات أو معلومات سرّية عبر
            قناة غير مؤمَّنة.
          </p>
          <p>
            إذا وضعت العيادة لاحقًا استمارة طبية أو فضاءً للمريض أو استشارة عن
            بُعد أو تطبيقًا للتتبّع، فسيتعيّن تحديد إطار خاص قبل النشر: إعلام واضح،
            وأمن مُعزَّز، ومدة احتفاظ ملائمة، وإجراءات CNDP عند الاقتضاء.
          </p>
        </article>

        <article>
          <h2>القانون 09-08 وCNDP</h2>
          <p>
            وفقًا للقانون المغربي رقم 09-08، يجب معالجة المعطيات الشخصية بشكل
            نزيه وشفّاف ومتناسب ولغاية محدَّدة. تعود إجراءات CNDP إلى المسؤول عن
            المعالجة عندما يستدعي الأمر ذلك.
          </p>
          <p>
            رقم CNDP أو وصل التصريح: <strong>غير مُقدَّم</strong>. لذلك لا يُختلَق
            أي مرجع لـ CNDP على الموقع.
          </p>
        </article>

        <article>
          <h2>مدة الاحتفاظ</h2>
          <p>
            يُحتفَظ بالمعطيات فقط طيلة المدة اللازمة للغاية المنشودة، ما لم يوجد
            التزام قانوني أو مهني بالاحتفاظ لمدة أطول.
          </p>
        </article>

        <article>
          <h2>المُرسَل إليهم والخدمات الخارجية</h2>
          <p>
            قد تكون المعطيات متاحة للعيادة، ولمزوّديها التقنيين الضروريين حصرًا
            لاشتغال الموقع، وللخدمات الخارجية المُدمَجة أو المفتوحة انطلاقًا من
            الموقع، مثل خرائط Google وواتساب وLinkedIn وInstagram. ولا يُستدعى أيٌّ
            من هذه الخدمات تلقائيًا: فهي لا تُفتَح إلا بفعلٍ من المستخدم. وخريطة
            Google Maps في الصفحة الرئيسية لا تعرض افتراضيًا سوى واجهة ثابتة ولا
            تُحمَّل إلا بعد نقرة صريحة.
          </p>
          <p>
            كما يُجرى قياس جمهور مجهول عبر Vercel Web Analytics، أداة مضيّف الموقع.
            لا تودع هذه الأداة أي ملف تعريف ارتباط، ولا تتعقّب الزوار فرديًا، ولا
            تجمع سوى إحصاءات مُجمَّعة (الصفحات المُتصفَّحة، نوع الجهاز، البلد). ولا
            تُربَط أي معطيات اسمية بهذه القياسات.
          </p>
          <p>
            الموقع مُستضاف لدى Vercel Inc. بالولايات المتحدة الأمريكية. لذلك قد
            تُعالَج بعض المعطيات التقنية الضرورية حصرًا لاشتغاله (عنوان IP، سجلات
            الاتصال، قياس الجمهور المُجمَّع) خارج المغرب. ويقتصر هذا النقل على هذه
            المعطيات التقنية؛ ولا يُستضاف أي ملف مريض أو معطى صحي على الموقع.
            وتعود الإجراءات المتعلقة بنقل المعطيات نحو الخارج إلى المسؤول عن
            المعالجة عندما تقتضي التشريعات ذلك.
          </p>
        </article>

        <article>
          <h2>حقوق الأشخاص</h2>
          <p>
            وفقًا للقانون المغربي رقم 09-08، يمكن لكل شخص معنيّ أن يطلب الولوج إلى
            معطياته الشخصية وتصحيحها، ولأسباب مشروعة، الاعتراض على معالجتها.
          </p>
          <p>
            كما يمكن لكل شخص معنيّ أن يرفع الأمر إلى اللجنة الوطنية لمراقبة حماية
            المعطيات ذات الطابع الشخصي (CNDP) عند وجود صعوبة تتعلق بمعالجة معطياته.
          </p>
        </article>

        <article>
          <h2>الأمن</h2>
          <p>
            يجب على العيادة الحرص على حماية المعلومات المتلقّاة من الولوج غير
            المُرخَّص أو الضياع أو التغيير أو الإفشاء. ولا ينبغي جمع المعطيات
            الحساسة دون تدابير أمنية ملائمة.
          </p>
        </article>
      </section>

      <SiteFooter
        labels={arFooterLabels}
        anchorPrefix="/ar#"
        langSwitchHref="/confidentialite"
      />
    </main>
  );
}
