import type { Metadata } from "next";
import { arabicFontVariables } from "../../fonts";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";
import { CookieSettingsButton } from "../../../components/CookieConsent";
import { absoluteUrl, gaMeasurementId, legalUpdatedAr } from "../../../seo";
import {
  arCookieConsentLabels,
  arFooterLabels,
  arHeaderLabels,
  arOgImage,
  metaAr,
} from "../../../seo-ar";

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
          صُمِّم الموقع عمدًا للحدّ من المتتبِّعات. ملفات تعريف الارتباط غير
          الضرورية الوحيدة، وهي ملفات Google Analytics، لا تُودَع إلا بموافقتكم.
        </p>
        <p className="legal-updated">آخر تحديث: {legalUpdatedAr}.</p>
      </section>

      <section className="legal-content section-shell">
        <article>
          <h2>اختياركم</h2>
          <p>
            عند زيارتكم الأولى، يقترح عليكم شريط قبولَ ملفات تعريف الارتباط
            الخاصة بقياس الجمهور أو رفضَها. الرفض بسيط كالقبول ولا يمنع تصفّح
            الموقع. وما لم يُعبَّر عن اختيار، لا يُودَع أي ملف تعريف ارتباط من
            Google.
          </p>
          <p>
            يُحفَظ اختياركم في التخزين المحلي لمتصفّحكم (دون إرساله إلى أي طرف
            آخر)، ويمكن تغييره في أي وقت عبر الزر أدناه أو رابط «إدارة ملفات
            تعريف الارتباط» في أسفل الصفحة.
          </p>
          <CookieSettingsButton
            label={arCookieConsentLabels.settings}
            className="secondary-button legal-cookie-settings"
          />
        </article>

        <article>
          <h2>ملفات تعريف الارتباط لقياس الجمهور (Google Analytics)</h2>
          <p>
            بموافقتكم، يستعمل الموقع Google Analytics 4، وهي خدمة من Google
            Ireland Limited (Gordon House, Barrow Street, Dublin 4, Ireland)،
            لقياس إقبال الزوار على الموقع: الصفحات المُتصفَّحة، ومصدر الزيارات،
            ونوع الجهاز، والبلد. وتساعد هذه الإحصاءات العيادة على تحسين
            معلوماتها العملية. ولا تُستعمل للإعلان ولا لتحديد هوية زائر بالاسم.
          </p>
          <ul>
            <li>
              ملف <strong>_ga</strong>: مُعرِّف عشوائي يميّز بين الزوار. المدة: 13
              شهرًا على الأكثر.
            </li>
            <li>
              ملف{" "}
              <strong dir="ltr">_ga_{gaMeasurementId.replace(/^G-/, "")}</strong>:
              الحفاظ على جلسة القياس. المدة: 13 شهرًا على الأكثر.
            </li>
          </ul>
          <p>
            لا يحتفظ Google Analytics 4 بعناوين IP. وتُعالِج Google معطيات
            القياس، وقد تُعالَج خارج المغرب، لا سيّما في الولايات المتحدة
            الأمريكية، وفق{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              قواعد الخصوصية لدى Google
            </a>
            . كما يمكنكم تثبيت{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              وحدة تعطيل Google Analytics
            </a>
            .
          </p>
        </article>

        <article>
          <h2>قياسات الجمهور دون ملفات تعريف ارتباط</h2>
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
          <p>
            وبما أنّ الموقع مُستضاف لدى Vercel Inc. بالولايات المتحدة الأمريكية،
            فقد تُعالَج هذه القياسات التقنية خارج المغرب. ومع ذلك لا يُودَع أي ملف
            تعريف ارتباط للتعقّب.
          </p>
          <p>
            كما يُوزَّع الموقع عبر شبكة Cloudflare التي توفّر قياس جمهور مجهول
            (Cloudflare Web Analytics). لا يودع هذا القياس أي ملف تعريف ارتباط،
            ولا يتعقّب الزوار فرديًا، ولا يجمع سوى إحصاءات مُجمَّعة للتصفّح
            والأداء. وقد تُعالَج هذه المعطيات التقنية خارج المغرب.
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
            إذا أُضيفت لاحقًا أداة للحجز عبر الإنترنت أو خدمة خارجية أخرى تودع
            ملفات تعريف ارتباط، فستُحدَّث هذه السياسة ويُستكمَل شريط الموافقة
            تبعًا لذلك.
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
