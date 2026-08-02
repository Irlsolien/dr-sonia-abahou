import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IBM_Plex_Sans_Arabic, Noto_Naskh_Arabic } from "next/font/google";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "../components/Icons";
import {
  appointment,
  clinicAddress,
  clinicPhoneDisplay,
  clinicPhoneInternational,
  clinicSecondaryPhoneDisplay,
  clinicSecondaryPhoneInternational,
  doctorCredentials,
  googleMapsPlaceUrl,
  services,
} from "../seo";

/**
 * PRÉVISUALISATION ARABE — page non reliée au site public.
 *
 * Aucune page française ne pointe vers cette route, elle est absente du
 * sitemap et porte `robots: noindex, nofollow`. Tous les textes sont des
 * traductions de contenus déjà validés (`app/seo.ts`, `app/page.tsx`) :
 * aucun fait, diplôme, horaire ou coordonnée n'a été ajouté. Le tableau de
 * correspondance français → arabe se trouve dans
 * `docs-cliente/TRADUCTION-AR-A-VALIDER.md` et doit être validé par la
 * Dr Abahou avant toute publication.
 */

/**
 * Typographie arabe, chargée uniquement sur cette page (les variables CSS
 * sont posées sur le conteneur racine de `/ar`).
 * IBM Plex Sans Arabic : interface, très lisible aux petites tailles et
 * disponible aussi en latin (adresse, sigles, numéros).
 * Noto Naskh Arabic : naskh sobre et contrasté, équivalent arabe du serif
 * éditorial utilisé côté français, réservé aux titres.
 */
const arabicUi = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ar-ui",
  fallback: ["Segoe UI", "Tahoma", "Arial", "sans-serif"],
});

const arabicSerif = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ar-serif",
  fallback: ["Times New Roman", "serif"],
});

export const metadata: Metadata = {
  title: "الدكتورة سونيا أبحو | أمراض الغدد الصماء والسكري بتمارة",
  description:
    "عيادة الدكتورة سونيا أبحو بتمارة: داء السكري، الغدة الدرقية، التغذية الطبية، الاضطرابات الهرمونية والأمراض الاستقلابية.",
  robots: {
    index: false,
    follow: false,
  },
};

const phoneHref = `tel:${clinicPhoneInternational}`;
const secondaryPhoneHref = `tel:${clinicSecondaryPhoneInternational}`;
const mapsHref = googleMapsPlaceUrl;
/* Message WhatsApp inchangé (texte validé de `app/seo.ts`) : sa version arabe
   est proposée dans le document de validation, elle n'est pas publiée ici. */
const whatsappHref = `https://wa.me/${appointment.whatsappPhone}?text=${encodeURIComponent(
  appointment.whatsappMessage,
)}`;

/**
 * Traductions indexées sur les libellés français d'origine : le type
 * `Record<(typeof doctorCredentials)[number], string>` empêche toute
 * désynchronisation si `app/seo.ts` évolue (erreur de compilation).
 */
const credentialsAr: Record<(typeof doctorCredentials)[number], string> = {
  "Spécialiste en endocrinologie, diabétologie, nutrition et maladies métaboliques":
    "أخصائية في أمراض الغدد الصماء والسكري والتغذية والأمراض الاستقلابية",
  "Diplôme universitaire d’échographie cervicale Paris V":
    "دبلوم جامعي في الفحص بالموجات فوق الصوتية للعنق — Paris V",
  "Ancien médecin au centre hospitalier universitaire de Rabat":
    "طبيبة سابقة بالمركز الاستشفائي الجامعي بالرباط",
  "Ancien médecin attaché à l’hôpital militaire de Rabat":
    "طبيبة سابقة ملحقة بالمستشفى العسكري بالرباط",
  "Fondatrice et présidente de l’Institut marocain de diabétologie":
    "مؤسِّسة ورئيسة المعهد المغربي للسكري",
  "Membre du think tank de la Global Metabolic Health Alliance (GMHA)":
    "عضوة في خلية التفكير التابعة لـ Global Metabolic Health Alliance (GMHA)",
  "Membre du board scientifique de la Pan Arab Society for Interventional Endocrinology and Diabetes Technology (PASID)":
    "عضوة في المجلس العلمي لـ Pan Arab Society for Interventional Endocrinology and Diabetes Technology (PASID)",
};

const servicesAr: Record<
  (typeof services)[number]["slug"],
  { title: string; text: string }
> = {
  "diabete-temara": {
    title: "داء السكري وتوازن السكر في الدم",
    text: "تتبّع داء السكري من النوع الأول والنوع الثاني وسكري الحمل وحالات اختلال توازن السكر في الدم.",
  },
  "thyroide-temara": {
    title: "الغدة الدرقية، تضخّم الغدة والعُقيدات",
    text: "التقييم والمراقبة والتوجيه في اضطرابات الغدة الدرقية والعُقيدات وتضخّم الغدة وسرطانات الغدة الدرقية.",
  },
  "nutrition-maladies-metaboliques-temara": {
    title: "التغذية والسمنة والأمراض الاستقلابية",
    text: "مواكبة طبية في مجال التغذية والسمنة والاستقلاب والوقاية.",
  },
  "surrenales-hypophyse-parathyroides-temara": {
    title: "الغدد الكظرية والغدة النخامية والغدد جارات الدرقية",
    text: "استكشاف وتتبّع أمراض الغدد الكظرية والغدة النخامية والغدد جارات الدرقية.",
  },
  "hyperprolactinemie-hypoglycemies-temara": {
    title: "فرط برولاكتين الدم ونقص السكر في الدم",
    text: "تقييم وتتبّع فرط برولاكتين الدم ونقص السكر في الدم والحالات الهرمونية التي تتطلّب خبرة في أمراض الغدد الصماء.",
  },
  "education-therapeutique-temara": {
    title: "التربية العلاجية",
    text: "مواكبة تربوية لفهم المرض والعلاجات وأهداف التتبّع بشكل أفضل.",
  },
};

/* Horaires identiques à ceux de la page d'accueil française (`app/page.tsx`).
   Les plages sont écrites en chiffres et rendues en LTR. */
const hoursAr = [
  ["الاثنين", "9:30 — 16:00"],
  ["الثلاثاء", "9:30 — 16:00"],
  ["الأربعاء", "9:30 — 16:00"],
  ["الخميس", "9:30 — 16:00"],
  ["الجمعة", "9:30 — 12:30"],
  ["السبت", "مغلق"],
  ["الأحد", "مغلق"],
] as const;

export default function ArabicPreviewPage() {
  return (
    <main
      id="main-content"
      lang="ar"
      dir="rtl"
      className={`ar-page ${arabicUi.variable} ${arabicSerif.variable}`}
    >
      {/* Barre d'actions fixe (mobile) : même motif que la page française. */}
      <nav className="mobile-action-bar" aria-label="إجراءات سريعة">
        <a className="mobile-action-bar-item" href={phoneHref} aria-label="الاتصال بالعيادة">
          <PhoneIcon />
          <span>اتصال</span>
        </a>
        <a
          className="mobile-action-bar-item"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="التواصل مع العيادة عبر واتساب"
        >
          <WhatsAppIcon />
          <span>واتساب</span>
        </a>
        <a
          className="mobile-action-bar-item"
          href={mapsHref}
          target="_blank"
          rel="noreferrer"
          aria-label="الاتجاهات نحو العيادة"
        >
          <MapPinIcon />
          <span>الاتجاهات</span>
        </a>
      </nav>

      <header className="ar-header section-shell">
        <span className="ar-brand">
          <Image
            src="/dr-sonia-monogram-clean.webp"
            alt=""
            width={200}
            height={180}
            sizes="56px"
          />
          <span>
            <strong>الدكتورة سونيا أبحو</strong>
            <small>أمراض الغدد الصماء والسكري والتغذية</small>
          </span>
        </span>
        <a className="primary-button ar-header-cta" href={phoneHref}>
          حجز موعد
        </a>
      </header>

      <section className="ar-hero section-shell">
        <div>
          <p className="eyebrow">طبيبة أخصائية في الغدد الصماء والسكري بتمارة</p>
          <h1>رعاية واضحة لداء السكري والغدة الدرقية والاستقلاب بتمارة.</h1>
          <p className="ar-lead">
            تستقبل عيادة الدكتورة سونيا أبحو المرضى لتتبّع داء السكري واضطرابات
            الغدة الدرقية والتغذية الطبية والاضطرابات الهرمونية والأمراض
            الاستقلابية.
          </p>
          <div className="hero-actions" role="group" aria-label="إجراءات سريعة">
            <a className="primary-button" href={phoneHref}>
              حجز موعد
            </a>
            <a className="secondary-button" href={phoneHref}>
              <PhoneIcon />
              اتصال
            </a>
            <a
              className="secondary-button"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              واتساب
            </a>
          </div>
          <p className="ar-note">
            للاستشارة في العيادة، يُرجى الاتصال بالسكرتارية هاتفيًا أو عبر واتساب
            لتأكيد الأوقات المتاحة. الاستقبال يتم بموعد تؤكّده العيادة.
          </p>
        </div>

        <figure className="ar-portrait">
          <Image
            src="/dr-sonia-abahou.webp"
            alt="صورة الدكتورة سونيا أبحو، أخصائية أمراض الغدد الصماء بتمارة"
            width={420}
            height={470}
            priority
            sizes="(max-width: 900px) 88vw, 420px"
          />
          <figcaption>
            <span>الدكتورة سونيا أبحو</span>
            <strong>الغدد الصماء · السكري · التغذية</strong>
          </figcaption>
        </figure>
      </section>

      <section className="section-shell split-section reveal-section">
        <div>
          <p className="eyebrow">المسار الطبي</p>
          <h2>مسار طبي معروض بوضوح.</h2>
          <p className="section-text">
            جُمعت المعلومات الأساسية للعيادة حتى يتعرّف المريض بسرعة على مجالات
            الاستشارة وطرق التواصل.
          </p>
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

      <section className="section-shell care-section reveal-section">
        <div className="section-heading">
          <h2>الحالات التي تُتابَع في العيادة.</h2>
        </div>
        <div className="care-index">
          {services.map((service, index) => (
            <div key={service.slug} className="care-row">
              <span className="care-row-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="care-row-copy">
                <h3 className="care-row-title">{servicesAr[service.slug].title}</h3>
                <p className="care-row-description">
                  {servicesAr[service.slug].text}
                </p>
              </span>
            </div>
          ))}
        </div>
        <p className="ar-care-note">
          لأي سؤال حول أحد أسباب الاستشارة، يمكن التواصل مع العيادة هاتفيًا أو
          عبر واتساب.
        </p>
        <div className="contact-actions ar-care-actions">
          <a className="secondary-button" href={phoneHref}>
            <PhoneIcon />
            اتصال
          </a>
          <a
            className="secondary-button"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon />
            واتساب
          </a>
        </div>
      </section>

      <section className="section-shell cabinet-section reveal-section">
        <div className="glass-panel">
          <p className="eyebrow">الوصول إلى العيادة</p>
          <h2>
            العيادة توجد بالمسيرة 1، تمارة <span lang="fr">(Massira I, Témara)</span>.
          </h2>
          <p className="ar-latin" dir="ltr">
            {clinicAddress}
          </p>
          <div className="contact-actions">
            <a
              className="primary-button"
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
            >
              فتح الاتجاهات على الخريطة
            </a>
            <a className="secondary-button" href={phoneHref}>
              <PhoneIcon />
              الهاتف الثابت ·{" "}
              <bdi dir="ltr">{clinicPhoneDisplay}</bdi>
            </a>
            <a className="secondary-button" href={secondaryPhoneHref}>
              <PhoneIcon />
              الهاتف المحمول ·{" "}
              <bdi dir="ltr">{clinicSecondaryPhoneDisplay}</bdi>
            </a>
            <a
              className="secondary-button"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              واتساب
            </a>
          </div>
        </div>
        <div className="hours-panel">
          <h3>أوقات العمل</h3>
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

      <footer className="ar-footnote section-shell">
        <p>
          في حالة الطوارئ الحيوية، يُرجى الاتصال فورًا بمصالح المستعجلات. لا
          تُغني معلومات هذا الموقع عن التشخيص أو الوصفة أو الاستشارة الطبية.
        </p>
        <Link href="/" lang="fr" hrefLang="fr">
          النسخة الفرنسية
        </Link>
      </footer>
    </main>
  );
}
