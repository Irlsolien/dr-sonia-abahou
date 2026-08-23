/**
 * VERSION ARABE — contenus de `/ar`.
 *
 * Règle absolue : **aucun fait nouveau**. Chaque chaîne de ce fichier est la
 * traduction d'un texte français déjà validé (`app/seo.ts`, `app/(fr)/page.tsx`,
 * `docs-cliente/TRADUCTION-AR-A-VALIDER.md`). Aucun diplôme, horaire, tarif,
 * acte médical, chiffre ou coordonnée n'a été ajouté, retiré ou modifié.
 *
 * Typage : les tables de traduction sont indexées sur les valeurs françaises
 * (`Record<(typeof …)[number], string>`). Si un libellé français évolue dans
 * `app/seo.ts`, la compilation échoue tant que la traduction arabe n'a pas
 * été mise à jour — impossible de désynchroniser silencieusement les deux
 * versions.
 *
 * Les noms propres, sigles, noms d'organismes et l'adresse postale restent
 * en caractères latins.
 */
import {
  clinicAddress,
  clinicalActivities,
  clinicPhoneDisplay,
  clinicSecondaryPhoneDisplay,
  doctorCredentials,
  faqItems,
  gallery,
  googleReviews,
  patientJourney,
  professionalGallery,
  services,
} from "./seo";
import type { CgmDemoLabels } from "./components/CgmDemoDashboard";
import type { HeaderLabels } from "./components/SiteHeader";
import type { FooterLabels } from "./components/SiteFooter";
import type { MapEmbedLabels } from "./components/MapEmbed";
import type { MobileActionBarLabels } from "./components/MobileActionBar";
import type { MobileNavLabels } from "./components/MobileNav";

type ServiceSlug = (typeof services)[number]["slug"];
type ServicePoint = (typeof services)[number]["points"][number];
type ActivityId = (typeof clinicalActivities)[number]["id"];
type ActivityHighlight = (typeof clinicalActivities)[number]["highlights"][number];
type GallerySrc = (typeof gallery)[number]["src"];
type ProfessionalGallerySrc = (typeof professionalGallery)[number]["src"];
type JourneyTitle = (typeof patientJourney)[number]["title"];
type FaqQuestion = (typeof faqItems)[number]["question"];
type ReviewDate =
  | (typeof googleReviews.items)[number]["date"]
  | (typeof googleReviews.featured)["date"];

/* ==========================================================================
   Métadonnées et partage
   ========================================================================== */

export const arOgImage = "/og-cover-ar.jpg";

/** Image de partage arabe d'une page motif (`/og-<slug>-ar.jpg`). */
export function arServiceOgImage(slug: ServiceSlug) {
  return `/og-${slug}-ar.jpg`;
}

export const metaAr = {
  title: "الدكتورة سونيا أبحو | طبيبة الغدد الصماء والسكري بتمارة",
  description:
    "عيادة الدكتورة سونيا أبحو بتمارة: تتبّع داء السكري، الغدة الدرقية والعُقيدات، التغذية الطبية والسمنة، الاضطرابات الهرمونية والأمراض الاستقلابية. الحجز هاتفيًا أو عبر واتساب.",
  keywords: [
    "طبيبة الغدد الصماء تمارة",
    "أخصائية السكري تمارة",
    "الغدة الدرقية تمارة",
    "التغذية الطبية تمارة",
    "السمنة تمارة",
    "الأمراض الاستقلابية",
    "نقص السكر في الدم",
    "الدكتورة سونيا أبحو",
    "عيادة الغدد الصماء بتمارة",
  ],
  siteName: "الدكتورة سونيا أبحو",
  ogTitle: "الدكتورة سونيا أبحو | عيادة أمراض الغدد الصماء بتمارة",
  ogDescription:
    "المعلومات العملية للعيادة: داء السكري، الغدة الدرقية، التغذية، السمنة، نقص السكر في الدم والأمراض الاستقلابية بتمارة.",
  ogImageAlt:
    "الدكتورة سونيا أبحو — أمراض الغدد الصماء والسكري والتغذية بتمارة",
} as const;

/* ==========================================================================
   Contenus indexés sur les données françaises
   ========================================================================== */

export const credentialsAr: Record<(typeof doctorCredentials)[number], string> = {
  "Spécialiste en endocrinologie, diabétologie, nutrition et maladies métaboliques":
    "أخصائية في أمراض الغدد الصماء والسكري والتغذية والأمراض الاستقلابية",
  "Diplôme universitaire d’échographie cervicale Paris V":
    "دبلوم جامعي في الفحص بالموجات فوق الصوتية للعنق — Paris V",
  "Ancien médecin au centre hospitalier universitaire de Rabat":
    "طبيبة سابقة بالمركز الاستشفائي الجامعي بالرباط",
  "Ancien médecin attaché à l’hôpital militaire de Rabat":
    "طبيبة سابقة ملحقة بالمستشفى العسكري بالرباط",
  "Présidente de la Société Marocaine de Diabétologie (SMD)":
    "رئيسة الجمعية المغربية للسكري (SMD)",
  "Fondatrice et présidente de l’Institut marocain de diabétologie":
    "مؤسِّسة ورئيسة المعهد المغربي للسكري",
  "Membre du think tank de la Global Metabolic Health Alliance (GMHA)":
    "عضوة في خلية التفكير التابعة لـ Global Metabolic Health Alliance (GMHA)",
  "Membre du board scientifique de la Pan Arab Society for Interventional Endocrinology and Diabetes Technology (PASID)":
    "عضوة في المجلس العلمي لـ Pan Arab Society for Interventional Endocrinology and Diabetes Technology (PASID)",
};

export const servicesAr: Record<
  ServiceSlug,
  { title: string; text: string; intro: string }
> = {
  "diabete-temara": {
    title: "داء السكري وتوازن السكر في الدم",
    text: "تتبّع داء السكري من النوع الأول والنوع الثاني وسكري الحمل وحالات اختلال توازن السكر في الدم.",
    intro:
      "يتطلّب تتبّع داء السكري مقاربة منتظمة ومفهومة وملائمة ليوميات المريض.",
  },
  "thyroide-temara": {
    title: "الغدة الدرقية، تضخّم الغدة والعُقيدات",
    text: "التقييم والمراقبة والتوجيه في اضطرابات الغدة الدرقية والعُقيدات وتضخّم الغدة وسرطانات الغدة الدرقية.",
    intro:
      "يمكن لاضطرابات الغدة الدرقية أن تؤثّر في الطاقة والوزن ونبض القلب والمزاج والاستقلاب.",
  },
  "nutrition-maladies-metaboliques-temara": {
    title: "التغذية والسمنة والأمراض الاستقلابية",
    text: "مواكبة طبية في مجال التغذية والسمنة والاستقلاب والوقاية.",
    intro:
      "تندرج التغذية الطبية في مسعى صحي شامل، مرتبط بالاستقلاب وعوامل الخطر.",
  },
  "surrenales-hypophyse-parathyroides-temara": {
    title: "الغدد الكظرية والغدة النخامية والغدد جارات الدرقية",
    text: "استكشاف وتتبّع أمراض الغدد الكظرية والغدة النخامية والغدد جارات الدرقية.",
    intro:
      "تستدعي بعض أمراض الغدد الصماء قراءة منهجية للأعراض والتحاليل والتطوّر السريري.",
  },
  "hyperprolactinemie-hypoglycemies-temara": {
    title: "فرط برولاكتين الدم ونقص السكر في الدم",
    text: "تقييم وتتبّع فرط برولاكتين الدم ونقص السكر في الدم والحالات الهرمونية التي تتطلّب خبرة في أمراض الغدد الصماء.",
    intro:
      "تتطلّب هذه الحالات مسعى تدريجيًا، يقوم على التاريخ السريري والتحاليل وشرح التتبّع.",
  },
  "education-therapeutique-temara": {
    title: "التربية العلاجية",
    text: "مواكبة تربوية لفهم المرض والعلاجات وأهداف التتبّع بشكل أفضل.",
    intro:
      "فهم المرض يساعد المريض على المشاركة بشكل أفضل في تتبّعه والتقدّم بطمأنينة أكبر.",
  },
};

export const journeyAr: Record<JourneyTitle, { title: string; text: string }> = {
  Comprendre: {
    title: "فهم",
    text: "وقت كافٍ للإصغاء إلى الأعراض والتاريخ الطبي ومخاوف المريض.",
  },
  Expliquer: {
    title: "شرح",
    text: "كلمات بسيطة تجعل التحاليل والهرمونات والعلاجات أوضح.",
  },
  Suivre: {
    title: "متابعة",
    text: "خطة تتبّع واضحة، ملائمة ليوميات المريض وإيقاع حياته.",
  },
};

export const activityHighlightsAr: Record<ActivityHighlight, string> = {
  "Thyroïde et nodules": "الغدة الدرقية والعُقيدات",
  "Aires cervicales": "المناطق العنقية",
  "Lecture clinique globale": "قراءة سريرية شاملة",
  "Mesure multifréquence": "قياس متعدّد الترددات",
  "Évolution dans le temps": "التطوّر عبر الزمن",
  "Interprétation médicale": "قراءة طبية",
  "Comprendre la maladie": "فهم المرض",
  "Partager les expériences": "تقاسم التجارب",
  "Gagner en autonomie": "اكتساب الاستقلالية",
  "Mesure en continu": "قياس مستمر",
  "Suivi rapproché quotidien": "تتبّع يومي قريب",
  "Lecture des tendances": "قراءة الاتجاهات",
};

export const activitiesAr: Record<
  ActivityId,
  {
    eyebrow: string;
    title: string;
    description: string;
    alt: string;
    note: string;
  }
> = {
  "echographie-thyroidienne": {
    eyebrow: "استكشاف العنق",
    title: "الفحص بالموجات فوق الصوتية للغدة الدرقية والعنق",
    description:
      "يُنجَز هذا الفحص في إطار تقييم أمراض الغدد الصماء، ويتيح فحص الغدة الدرقية والمناطق اللمفاوية بالعنق. وتُقرأ نتائجه مع المعطيات السريرية والبيولوجية للمريض.",
    alt: "صورة توضيحية لفحص الغدة الدرقية بالموجات فوق الصوتية داخل عيادة طبية",
    note: "فحص مندمج في مسار أمراض الغدد الصماء، مع شروحات واضحة في كل مرحلة.",
  },
  "impedancemetrie-medicale": {
    eyebrow: "تركيب الجسم",
    title: "قياس المقاومة الكهربائية الطبي بجهاز BIODY XPERT ZM3",
    description:
      "إلى جانب الوزن وحده، يساهم هذا الجهاز الطبي متعدّد الترددات في تتبّع تركيب الجسم: الكتلة الدهنية، والكتلة غير الدهنية، والكتلة العضلية، ونسبة الماء. وتكمّل هذه القياسات التقييم الطبي والتغذوي.",
    alt: "صورة توضيحية لقياس تركيب الجسم بجهاز طبي لقياس المقاومة الكهربائية",
    note: "مؤشرات مفيدة لتخصيص التتبّع وملاحظة التطوّرات على مدى الاستشارات.",
  },
  "education-therapeutique": {
    eyebrow: "كل يوم جمعة",
    title: "ورشة جماعية للتربية العلاجية",
    description:
      "يوم الجمعة، تجمع العيادة مرضى حول وقت للتبادل والتعلّم، من أجل فهم أفضل لداء السكري والعلاجات والمراقبة الذاتية والوضعيات الملموسة في الحياة اليومية.",
    alt: "صورة توضيحية لورشة جماعية للتربية العلاجية حول داء السكري",
    note: "تُعلن العيادة مباشرة عن الحصص المقبلة وشروط المشاركة.",
  },
  "surveillance-glycemique-continue": {
    eyebrow: "هولتر السكر في الدم",
    title: "هولتر السكر في الدم والمراقبة المستمرة",
    description:
      "بالنسبة إلى المرضى المعنيين، يسجّل هولتر السكر تطوّر الغلوكوز بشكل مستمر. ويمكن الاطّلاع على معطيات المستشعر في إطار تتبّع طبي يومي قريب، بهدف رصد الاتجاهات، وتهيئة النقاش مع العيادة، وفهم تطوّر نسبة السكر في الدم بشكل أفضل.",
    alt: "لمحة عن واجهة لتتبّع نسبة السكر في الدم بشكل مستمر",
    note: "يتيح الجدول رؤية الاتجاهات المفيدة للتتبّع مع الحفاظ التام على هوية المرضى ومعطياتهم الشخصية.",
  },
};

export const galleryAr: Record<
  GallerySrc,
  { label: string; title: string; alt: string }
> = {
  "/cabinet-accueil-reel.webp": {
    label: "الاستقبال",
    title: "فضاء استقبال مضيء وهادئ ومعتنى به.",
    alt: "فضاء الاستقبال الحقيقي بعيادة الدكتورة سونيا أبحو بتمارة",
  },
  "/cabinet-consultation-reel.webp": {
    label: "الاستشارة",
    title: "فضاء مهني مخصّص للإصغاء والتتبّع.",
    alt: "قاعة الاستشارة بعيادة الدكتورة سونيا أبحو بتمارة",
  },
  "/cabinet-attente-reel.webp": {
    label: "قاعة الانتظار",
    title: "إطار بسيط ومريح قبل الاستشارة.",
    alt: "قاعة الانتظار بعيادة الدكتورة سونيا أبحو بتمارة",
  },
  "/cabinet-consultation-patiente.webp": {
    label: "الاستشارة",
    title: "وقت تبادل فردي، في هدوء، مع كل مريض.",
    alt: "استشارة بعيادة الدكتورة سونيا أبحو بتمارة، مع مريضة طُمس وجهها احترامًا للسرّية",
  },
};

/* Miroir arabe de `professionalGallery` (page bio). Les noms propres, sigles
   et villes restent en caractères latins, comme le reste du site. */
export const professionalGalleryAr: Record<
  ProfessionalGallerySrc,
  { label: string; title: string; alt: string }
> = {
  "/media/distinction-pasid-2025-remise.webp": {
    label: "PASID 25 · Alexandrie",
    title: "مؤتمر Pan Arab Society for Interventional Endocrinology & Diabetes Technology.",
    alt: "الدكتورة سونيا أبحو تتسلّم درعًا خلال مؤتمر PASID 25 بالإسكندرية",
  },
  "/media/dr-sonia-abahou-congres-portrait.webp": {
    label: "مؤتمر",
    title: "ممارسة تغذّيها مواكبة التكوين المستمر.",
    alt: "صورة للدكتورة سونيا أبحو خلال مؤتمر طبي",
  },
  "/media/media-interview-2m.webp": {
    label: "إعلام · 2M",
    title: "التحسيس بمرض السكري لدى عموم الناس.",
    alt: "الدكتورة سونيا أبحو في حوار مع قناة 2M خلال حملة للتحسيس بالسكري",
  },
  "/media/media-village-diabete-laayoune.webp": {
    label: "قرية السكري · العيون",
    title: "الكشف والتربية الصحية في قرب من الساكنة.",
    alt: "الدكتورة سونيا أبحو في قرية السكري بالعيون، ضمن حملة للكشف والتربية الصحية",
  },
  "/media/congres-dia-egypt-2025.webp": {
    label: "DIA Egypt 2025 · Le Caire",
    title: "متدخّلة في المؤتمر الدولي للسكري.",
    alt: "الدكتورة سونيا أبحو متدخّلة في مؤتمر DIA Egypt 2025 بالقاهرة",
  },
  "/media/congres-conference.webp": {
    label: "مؤتمر طبي",
    title: "مداخلة علمية في أمراض الغدد الصماء والسكري.",
    alt: "الدكتورة سونيا أبحو تتدخّل على منبر مؤتمر طبي",
  },
  "/media/distinction-pasid-2025.webp": {
    label: "PASID 25 · Alexandrie",
    title: "تسليم درع مؤتمر عربي.",
    alt: "تسليم درع للدكتورة سونيا أبحو خلال المؤتمر العربي PASID 25",
  },
  "/media/congres-chu-oujda.webp": {
    label: "CHU Mohammed VI · Oujda",
    title: "مداخلة في الذكرى العاشرة لمصلحة أمراض الغدد الصماء.",
    alt: "الدكتورة سونيا أبحو تتدخّل بالمركز الاستشفائي الجامعي محمد السادس بوجدة",
  },
  "/media/congres-casablanca.webp": {
    label: "مؤتمر · Casablanca",
    title: "تبادل علمي بين المختصّين.",
    alt: "الدكتورة سونيا أبحو على منبر مؤتمر طبي بالدار البيضاء",
  },
};

/* Page bio arabe `/ar/dr-sonia-abahou` — miroir de
   `app/(fr)/dr-sonia-abahou/page.tsx`. Aucun fait nouveau : traduction des
   libellés français déjà validés. */
export const profileAr = {
  metaTitle: "الدكتورة سونيا أبحو، طبيبة الغدد الصماء بتمارة | المسار",
  metaDescription:
    "تعرّفوا على مسار الدكتورة سونيا أبحو، الطبيبة الأخصائية في أمراض الغدد الصماء والسكري والتغذية والأمراض الاستقلابية بتمارة.",
  eyebrow: "المسار الطبي",
  h1: "الدكتورة سونيا أبحو، طبيبة الغدد الصماء بتمارة.",
  intro:
    "طبيبة أخصائية في أمراض الغدد الصماء والسكري والتغذية والأمراض الاستقلابية، تستقبل الدكتورة سونيا أبحو مرضاها بعيادة المسيرة 1 بتمارة.",
  updatedPrefix: "تحديث المعلومات بتاريخ",
  portraitCaption: "الدكتورة سونيا أبحو · الغدد الصماء والأمراض الاستقلابية",
  identityEyebrow: "الهوية المهنية",
  identityTitle: "خبرة طبية واضحة المعالم.",
  identityText:
    "يجمع الموقع المعلومات المُوثّقة للعيادة، ومجالات الاستشارة والمعطيات المفيدة لتحضير موعد بتمارة.",
  orderLabel: "التسجيل بالهيئة",
  inpeLabel: "INPE",
  councilLabel: "المجلس الجهوي",
  credentialsEyebrow: "التكوين والمسؤوليات",
  credentialsTitle: "معالم المسار المهني.",
  galleryEyebrow: "الانخراط العلمي والإعلام",
  galleryTitle: "المؤتمرات والتكوين وأعمال الصحة العمومية.",
  galleryText:
    "إلى جانب العيادة، تتدخّل الدكتورة سونيا أبحو في مؤتمرات طبية وطنية ودولية وتشارك في حملات التحسيس بمرض السكري.",
  servicesEyebrow: "مجالات الاستشارة",
  servicesTitle: "صفحات مخصّصة للفهم قبل الموعد.",
  serviceLinkLabel: "الاطّلاع على الصفحة ←",
  referencesEyebrow: "معطيات عمومية",
  referencesTitle: "ملفات مهنية منسجمة مع العيادة.",
  refMedical: { strong: "ملف طبي عمومي", span: "Med.ma" },
  refContact: { strong: "ملف لأخذ موعد", span: "DabaDoc" },
  refLinkedin: { strong: "ملف مهني", span: "LinkedIn" },
  ctaEyebrow: "الموعد",
  ctaTitle: "الاتصال بعيادة الدكتورة سونيا أبحو.",
  ctaText: "يتم حاليًا تأكيد المواعيد عبر الهاتف أو واتساب.",
  ctaButton: "أخذ موعد",
} as const;

export const faqAr: Record<FaqQuestion, { question: string; answer: string }> = {
  "Comment prendre rendez-vous au cabinet ?": {
    question: "كيف يمكن حجز موعد بالعيادة؟",
    answer:
      "يمكن التواصل مع العيادة هاتفيًا أو عبر واتساب لتأكيد الأوقات المتاحة والترتيبات العملية للموعد.",
  },
  "Où se trouve le cabinet du Dr Sonia Abahou ?": {
    question: "أين توجد عيادة الدكتورة سونيا أبحو؟",
    answer:
      "توجد العيادة بحي المسيرة 1 بتمارة، بالمغرب، على العنوان التالي: 209, avenue Moulay Ali Chérif, appartement 3, 12020 Témara. والاتجاهات متاحة انطلاقًا من خريطة الموقع.",
  },
  "Quels sont les horaires du cabinet ?": {
    question: "ما هي أوقات عمل العيادة؟",
    answer:
      "تستقبل العيادة من الاثنين إلى الخميس من 9:30 إلى 16:00، ويوم الجمعة من 9:30 إلى 12:30. وهي مغلقة يومي السبت والأحد.",
  },
  "Quels documents apporter pour une première consultation ?": {
    question: "ما الوثائق التي ينبغي إحضارها في الاستشارة الأولى؟",
    answer:
      "يُنصح بإحضار آخر التحاليل البيولوجية والتقارير الطبية والوصفات وفحوصات التصوير وكل وثيقة مفيدة للتتبّع.",
  },
  "L’échographie thyroïdienne est-elle réalisée au cabinet ?": {
    question: "هل يُنجَز فحص الغدة الدرقية بالموجات فوق الصوتية داخل العيادة؟",
    answer:
      "نعم. يُنجَز الفحص بالموجات فوق الصوتية للغدة الدرقية والعنق داخل العيادة في إطار تقييم أمراض الغدد الصماء، وتُقرأ نتائجه مع المعطيات السريرية والبيولوجية للمريض.",
  },
  "Qu’apporte l’impédancemétrie médicale proposée au cabinet ?": {
    question: "ما الذي يضيفه قياس المقاومة الكهربائية الطبي المتوفّر بالعيادة؟",
    answer:
      "تستعمل العيادة جهازًا طبيًا متعدّد الترددات BIODY XPERT ZM3. وإلى جانب الوزن وحده، يساهم هذا الجهاز في تتبّع تركيب الجسم: الكتلة الدهنية، والكتلة غير الدهنية، والكتلة العضلية، ونسبة الماء.",
  },
  "Le cabinet propose-t-il un atelier d’éducation thérapeutique ?": {
    question: "هل تقترح العيادة ورشة للتربية العلاجية؟",
    answer:
      "نعم. يوم الجمعة، تجمع العيادة مرضى حول وقت للتبادل والتعلّم بخصوص داء السكري والعلاجات والمراقبة الذاتية. وتُعلن العيادة مباشرة عن الحصص المقبلة وشروط المشاركة.",
  },
  "La téléconsultation vidéo est-elle disponible ?": {
    question: "هل الاستشارة بالفيديو متاحة؟",
    answer:
      "ليس بعد. الاستشارة بالفيديو قيد الإعداد ولم يُعلَن أي تاريخ لانطلاقها. وتُؤخذ المواعيد حاليًا بالعيادة، هاتفيًا أو عبر واتساب.",
  },
  "Quel est le parcours du Dr Sonia Abahou ?": {
    question: "ما هو المسار الطبي للدكتورة سونيا أبحو؟",
    answer:
      "الدكتورة سونيا أبحو أخصائية في أمراض الغدد الصماء والسكري والتغذية والأمراض الاستقلابية، حاصلة على دبلوم جامعي في الفحص بالموجات فوق الصوتية للعنق من Paris V. طبيبة سابقة بالمركز الاستشفائي الجامعي بالرباط وطبيبة سابقة ملحقة بالمستشفى العسكري بالرباط، وهي مؤسِّسة ورئيسة المعهد المغربي للسكري، وعضوة في خلية التفكير التابعة لـ Global Metabolic Health Alliance، وعضوة في المجلس العلمي لـ Pan Arab Society for Interventional Endocrinology and Diabetes Technology.",
  },
  "Le site remplace-t-il une consultation médicale ?": {
    question: "هل يُغني الموقع عن الاستشارة الطبية؟",
    answer:
      "لا. معلومات الموقع عامة ولا تُغني عن التشخيص أو الوصفة أو الاستشارة الطبية الشخصية.",
  },
  "Quels motifs de consultation sont présentés ?": {
    question: "ما أسباب الاستشارة المعروضة؟",
    answer:
      "يعرض الموقع على الخصوص داء السكري واضطرابات الغدة الدرقية والتغذية الطبية والسمنة والأمراض الاستقلابية وفرط برولاكتين الدم ونقص السكر في الدم وبعض أمراض الغدد الصماء.",
  },
};

/**
 * Dates relatives des avis Google. Seules les dates sont traduites : le texte
 * des avis reste cité mot pour mot dans sa langue de publication.
 */
export const reviewDatesAr: Record<ReviewDate, string> = {
  "il y a 1 mois": "منذ شهر",
  "il y a 2 mois": "منذ شهرين",
  "il y a 3 mois": "منذ 3 أشهر",
  "il y a 2 ans": "منذ سنتين",
  "il y a 3 ans": "منذ 3 سنوات",
  "il y a 5 ans": "منذ 5 سنوات",
};

/* Horaires identiques à ceux de la page d'accueil française (`app/(fr)/page.tsx`).
   Les plages sont écrites en chiffres et rendues en LTR. */
export const hoursAr = [
  ["الاثنين", "9:30 — 16:00"],
  ["الثلاثاء", "9:30 — 16:00"],
  ["الأربعاء", "9:30 — 16:00"],
  ["الخميس", "9:30 — 16:00"],
  ["الجمعة", "9:30 — 12:30"],
  ["السبت", "مغلق"],
  ["الأحد", "مغلق"],
] as const;

/* ==========================================================================
   Libellés d'interface et textes de sections
   ========================================================================== */

export const uiAr = {
  skipLink: "تخطّي إلى المحتوى",
  quickActionsAriaLabel: "إجراءات سريعة",
  callLabel: "اتصال",
  callAriaLabel: "الاتصال بالعيادة",
  whatsappLabel: "واتساب",
  whatsappAriaLabel: "التواصل مع العيادة عبر واتساب",
  directionsLabel: "الاتجاهات",
  directionsAriaLabel: "الاتجاهات نحو العيادة",
  bookLabel: "حجز موعد",
  contactClinic: "التواصل مع العيادة",
  /* Chaque avis cité individuellement est bien noté 5 étoiles. */
  starsAriaLabel: "5 نجوم من 5",
  /* Note moyenne de la fiche Google : le chiffre vient de `googleReviews`,
     il n'est jamais recopié ici. */
  averageStarsAriaLabelPrefix: "المعدّل: ",
  averageStarsAriaLabelSuffix: " من 5",

  hero: {
    eyebrow: "طبيبة أخصائية في الغدد الصماء والسكري بتمارة",
    title: "رعاية واضحة لداء السكري والغدة الدرقية والاستقلاب بتمارة.",
    lead: "تستقبل عيادة الدكتورة سونيا أبحو المرضى لتتبّع داء السكري واضطرابات الغدة الدرقية والتغذية الطبية والاضطرابات الهرمونية والأمراض الاستقلابية.",
    /* Réassurance sous les boutons : reprend les horaires validés
       (`app/(fr)/page.tsx`) et la note « Accueil sur rendez-vous confirmé par
       le cabinet ». Aucun délai de réponse n'est promis. */
    reassurance: "السكرتارية متاحة من الاثنين إلى الجمعة · موعد تؤكّده العيادة.",
    signatureAriaLabel: "توقيع العيادة",
    signatureName: "عيادة الدكتورة سونيا أبحو",
    signatureTagline: "أمراض الغدد الصماء والأمراض الاستقلابية.",
    portraitAlt: "صورة الدكتورة سونيا أبحو، أخصائية أمراض الغدد الصماء بتمارة",
    portraitName: "الدكتورة سونيا أبحو",
    portraitRole: "أمراض الغدد الصماء · السكري · التغذية",
    statusEyebrow: "العيادة بتمارة",
    statusPlace: "المسيرة 1",
    statusText: "الاستقبال يتم بموعد تؤكّده العيادة.",
    cardDiabetesLabel: "داء السكري",
    cardDiabetesValue: "تتبّع منظّم",
    cardThyroidLabel: "الغدة الدرقية",
    cardThyroidValue: "تقييم وتوجيه",
  },

  expertise: {
    eyebrow: "المسار الطبي",
    title: "مسار طبي معروض بوضوح.",
    text: "جُمعت المعلومات الأساسية للعيادة حتى يتعرّف المريض بسرعة على مجالات الاستشارة وطرق التواصل.",
    /* Le parcours détaillé n'existe qu'en français : le lien porte
       `hrefLang="fr"`, comme sur les pages motifs arabes. */
    profileLink: "الاطّلاع على مسار الدكتورة سونيا أبحو",
  },

  approach: {
    eyebrow: "نهج العيادة",
    title: "إصغاء وشرح وتتبّع طبي.",
    text: "أمام داء السكري أو اضطراب في الغدة الدرقية أو اختلال هرموني، تتيح الاستشارة الوقوف على الأعراض والفحوصات وأهداف التتبّع الطبي.",
  },

  signature: {
    eyebrow: "البصمة الطبية",
    title: "استشارة تحوّل القلق إلى فهم.",
    text: "تركّز العيادة على طب مفهوم: فهم الأعراض، وقراءة التحاليل، وشرح الأهداف، والتقدّم وفق خطة تتبّع واقعية.",
    imageAlt:
      "الدكتورة سونيا أبحو تتسلّم تكريم «Tous Unis Contre le Diabète» خلال مؤتمر في طب السكري",
  },

  care: {
    title: "الحالات التي تُتابَع في العيادة.",
  },

  practice: {
    title: "أعمال طبية وأوقات رعاية تُكمّل الاستشارة.",
    dashboardCaption: "لمحة عن التتبّع",
  },

  faq: {
    title: "معلومات عملية قبل الاستشارة.",
  },

  reviews: {
    eyebrow: "آراء Google",
    title: "ما يقوله المرضى.",
    source: "رأي على Google",
    /* La note et le nombre d'avis proviennent de `googleReviews` : ces
       chiffres ne sont jamais recopiés ici. */
    ratingSuffix: "من 5",
    ratingCountLabel: "رأيًا على Google",
    seeOnGoogle: "الاطّلاع على الآراء على Google",
    disclaimer: "مقتطفات من آراء عمومية منشورة على Google، مقتبسة دون تعديل.",
    originalLanguageNote: "آراء منشورة على Google بلغتها الأصلية.",
    translatedFromArabic: "مترجَم من العربية",
  },

  gallery: {
    title: "اكتشفوا فضاءات العيادة.",
  },

  band: {
    eyebrow: "المقاربة الطبية",
    title: "الإصغاء، الشرح، المتابعة.",
    text: "لأن العلاج ينجح أكثر حين يفهم المريض ما يجري في جسده، تضع العيادة البيداغوجيا في صميم الاستشارة.",
  },

  cabinet: {
    eyebrow: "الوصول إلى العيادة",
    title: "العيادة توجد بالمسيرة 1، تمارة",
    titleLatin: "(Massira I, Témara)",
    openDirections: "فتح الاتجاهات على الخريطة",
    landlinePrefix: "الهاتف الثابت · ",
    mobilePrefix: "الهاتف المحمول · ",
    hoursTitle: "أوقات العمل",
    mapGroupAriaLabel: "خريطة Google Maps الخاصة بالعيادة",
    mapTitle: "خريطة Google Maps لعيادة الدكتورة سونيا أبحو بتمارة",
  },

  finalCta: {
    eyebrow: "الموعد",
    title: "التواصل مع العيادة ببساطة.",
    text: "للاستشارة في العيادة، يُرجى الاتصال بالسكرتارية هاتفيًا أو عبر واتساب لتأكيد الأوقات المتاحة. الاستشارة بالفيديو قيد الإعداد وستُقترح بمجرد اكتمال مسار الحجز. في حالة الطوارئ الحيوية، يُرجى الاتصال فورًا بمصالح المستعجلات.",
    seeDirections: "الاطّلاع على الاتجاهات",
  },

  footnote:
    "لا تُغني معلومات هذا الموقع عن التشخيص أو الوصفة أو الاستشارة الطبية الشخصية.",
} as const;

/* ==========================================================================
   Libellés localisés des composants partagés
   ========================================================================== */

/**
 * Barre d'actions rapides arabe : mêmes destinations que la version
 * française, seuls les libellés changent.
 */
export const arMobileActionBarLabels: MobileActionBarLabels = {
  navAriaLabel: uiAr.quickActionsAriaLabel,
  call: { label: uiAr.callLabel, ariaLabel: uiAr.callAriaLabel },
  whatsapp: { label: uiAr.whatsappLabel, ariaLabel: uiAr.whatsappAriaLabel },
  directions: {
    label: uiAr.directionsLabel,
    ariaLabel: uiAr.directionsAriaLabel,
  },
};

export const arMobileNavLabels: MobileNavLabels = {
  trigger: "القائمة",
  panelTitle: "التنقّل",
  close: "إغلاق القائمة",
  navAriaLabel: "التنقّل الرئيسي",
  sections: [
    { href: "expertise", label: "المسار الطبي" },
    { href: "soins", label: "الحالات" },
    { href: "pratiques", label: "الأعمال الطبية" },
    { href: "avis", label: "الآراء" },
    { href: "cabinet", label: "العيادة" },
    { href: "contact", label: "التواصل" },
  ],
  extraLinks: [{ href: "#contact", label: "حجز موعد" }],
  langSwitch: {
    href: "/",
    label: "Français",
    lang: "fr",
    dir: "ltr",
    hrefLang: "fr",
  },
};

export const arHeaderLabels: HeaderLabels = {
  brand: "الدكتورة سونيا أبحو",
  homeAriaLabel: "الصفحة الرئيسية",
  navAriaLabel: "التنقّل الرئيسي",
  sections: arMobileNavLabels.sections,
  cta: { href: "#contact", label: "حجز موعد" },
  langSwitch: arMobileNavLabels.langSwitch,
  mobile: arMobileNavLabels,
};

export const arFooterLabels: FooterLabels = {
  brand: "الدكتورة سونيا أبحو",
  tagline: "عيادة أمراض الغدد الصماء والسكري والتغذية — المسيرة 1، تمارة.",
  contactTitle: "التواصل",
  infoTitle: "معلومات",
  infoNavAriaLabel: "روابط الموقع",
  landlinePrefix: "الهاتف الثابت · ",
  mobilePrefix: "الهاتف المحمول · ",
  whatsapp: "واتساب",
  linkedinAriaLabel: "حساب LinkedIn لعيادة الدكتورة سونيا أبحو",
  instagramAriaLabel: "حساب Instagram لعيادة الدكتورة سونيا أبحو",
  isolateLatin: true,
  sections: [
    { href: "expertise", label: "المسار الطبي" },
    { href: "soins", label: "الحالات" },
    { href: "pratiques", label: "الأعمال الطبية" },
    { href: "cabinet", label: "العيادة" },
  ],
  /* Les pages juridiques et le parcours de rendez-vous existent désormais en
     arabe (`/ar/<page>`) : chaque lien reste dans la langue du document. */
  pages: [
    { href: "/ar/rendez-vous", label: "حجز موعد" },
    { href: "/ar/mentions-legales", label: "المعلومات القانونية" },
    { href: "/ar/confidentialite", label: "الخصوصية" },
    { href: "/ar/cookies", label: "ملفات تعريف الارتباط" },
    {
      href: "/",
      label: "Français",
      lang: "fr",
      dir: "ltr",
      hrefLang: "fr",
      isLangSwitch: true,
    },
  ],
};

export const arMapEmbedLabels: MapEmbedLabels = {
  facadeLabel: "خريطة Google Maps",
  facadeButton: "عرض الخريطة التفاعلية",
  facadeNote: "بعرض الخريطة، تُرسَل بعض المعطيات إلى Google.",
  overlayEyebrow: "GPS",
  overlayPlace: "المسيرة 1 · تمارة",
  overlayLink: "الاطّلاع على Google Maps",
  isolateAddress: true,
};

/**
 * Tableau de bord de démonstration : mêmes courbes, mêmes valeurs chiffrées
 * et mêmes profils génériques que la version française — seuls les libellés
 * sont traduits. Aucune donnée personnelle.
 */
export const arCgmDemoLabels: CgmDemoLabels = {
  ariaLabel: "لمحة عن لوحة تتبّع مستمر لنسبة السكر في الدم تحترم السرّية",
  live: "تتبّع آمن",
  title: "تتبّع قريب لنسبة السكر في الدم",
  privacy: "السرّية",
  chartLabel: "اتجاه نسبة السكر",
  chartRange: "على مدى 24 ساعة",
  unit: "mg/dL",
  axis: ["00:00", "06:00", "12:00", "18:00", "الآن"],
  patients: [
    { name: "ملف تتبّع 01", value: "112", status: "تم استلام المنحنى" },
    { name: "ملف تتبّع 02", value: "138", status: "قراءة حديثة" },
    { name: "ملف تتبّع 03", value: "101", status: "مستشعر نشِط" },
  ],
  disclaimer: "لا تُعرض أي معلومة شخصية.",
};

/* ==========================================================================
   Pages motifs arabes — `/ar/<slug>`
   Miroir strict de `app/(fr)/[serviceSlug]/page.tsx`. Aucun fait nouveau : chaque
   chaîne traduit un texte français déjà validé (`app/seo.ts` pour les
   données de service, `app/(fr)/[serviceSlug]/page.tsx` pour les libellés de
   page). Les slugs restent identiques d'une langue à l'autre : seule la
   langue du contenu change, ce qui permet un appariement `hreflang` exact
   page à page.
   ========================================================================== */

/**
 * Traduction des quatre points de chaque motif. Le `Record` est indexé sur
 * l'union des points français : ajouter, retirer ou reformuler un point dans
 * `app/seo.ts` casse la compilation tant que l'arabe n'a pas suivi.
 */
export const servicePointsAr: Record<ServicePoint, string> = {
  /* Diabète et équilibre glycémique */
  "Point sur les glycémies, les symptômes et les habitudes de vie.":
    "وقفة على قياسات السكر في الدم والأعراض وأنماط الحياة.",
  "Lecture des bilans biologiques et adaptation du suivi médical.":
    "قراءة التحاليل البيولوجية وملاءمة التتبّع الطبي.",
  "Prévention des complications et explication des objectifs glycémiques.":
    "الوقاية من المضاعفات وشرح أهداف توازن السكر في الدم.",
  "Accompagnement du diabète gestationnel selon le contexte de grossesse.":
    "مواكبة سكري الحمل حسب سياق الحمل.",

  /* Thyroïde, goitre et nodules */
  "Bilan d’hypothyroïdie, d’hyperthyroïdie, de goitre ou de nodules.":
    "تقييم قصور الغدة الدرقية أو فرط نشاطها أو تضخّم الغدة أو العُقيدات.",
  "Interprétation des analyses hormonales et des examens disponibles.":
    "قراءة التحاليل الهرمونية والفحوصات المتاحة.",
  "Surveillance médicale et orientation selon l’évolution clinique.":
    "مراقبة طبية وتوجيه حسب التطوّر السريري.",
  "Explications simples pour comprendre le rôle de la thyroïde.":
    "شروحات بسيطة لفهم دور الغدة الدرقية.",

  /* Nutrition, obésité et maladies métaboliques */
  "Évaluation du contexte médical, métabolique et nutritionnel.":
    "تقييم السياق الطبي والاستقلابي والتغذوي.",
  "Accompagnement autour du poids sans discours culpabilisant.":
    "مواكبة في موضوع الوزن دون خطاب يُشعر بالذنب.",
  "Prévention des risques métaboliques et cardiovasculaires.":
    "الوقاية من المخاطر الاستقلابية والقلبية الوعائية.",
  "Objectifs réalistes, progressifs et compatibles avec la vie quotidienne.":
    "أهداف واقعية وتدريجية وملائمة للحياة اليومية.",

  /* Surrénales, hypophyse et parathyroïdes */
  "Orientation du bilan endocrinien selon le contexte clinique.":
    "توجيه تقييم الغدد الصماء حسب السياق السريري.",
  "Suivi des pathologies surrénaliennes, hypophysaires ou parathyroïdiennes.":
    "تتبّع أمراض الغدد الكظرية أو الغدة النخامية أو الغدد جارات الدرقية.",
  "Interprétation des examens et explication des résultats.":
    "قراءة الفحوصات وشرح النتائج.",
  "Coordination du suivi médical lorsque des avis complémentaires sont nécessaires.":
    "تنسيق التتبّع الطبي عند الحاجة إلى آراء تكميلية.",

  /* Hyperprolactinémie et hypoglycémies */
  "Analyse des symptômes, du contexte et des examens déjà réalisés.":
    "تحليل الأعراض والسياق والفحوصات المُنجَزة سابقًا.",
  "Orientation du bilan complémentaire lorsque nécessaire.":
    "توجيه التقييم التكميلي عند الاقتضاء.",
  "Explications claires sur les résultats et les objectifs du suivi.":
    "شروحات واضحة حول النتائج وأهداف التتبّع.",
  "Suivi adapté à l’évolution clinique du patient.":
    "تتبّع ملائم للتطوّر السريري للمريض.",

  /* Éducation thérapeutique */
  "Explication des résultats, des traitements et des objectifs de suivi.":
    "شرح النتائج والعلاجات وأهداف التتبّع.",
  "Aide à la compréhension du diabète, du métabolisme et des troubles hormonaux.":
    "المساعدة على فهم داء السكري والاستقلاب والاضطرابات الهرمونية.",
  "Conseils généraux pour préparer la consultation et poser les bonnes questions.":
    "نصائح عامة لتهيئة الاستشارة وطرح الأسئلة المناسبة.",
  "Approche pédagogique centrée sur le patient.":
    "مقاربة بيداغوجية محورها المريض.",
};

/**
 * Métadonnées arabes par motif : traduction du `seoTitle` et de la
 * `description` français, plus des mots-clés locaux en arabe. Le titre et le
 * `title`/`text`/`intro` du motif restent centralisés dans `servicesAr`.
 */
export const servicePagesAr: Record<
  ServiceSlug,
  { seoTitle: string; description: string; keywords: readonly string[] }
> = {
  "diabete-temara": {
    seoTitle: "طبيبة السكري بتمارة | تتبّع داء السكري | الدكتورة سونيا أبحو",
    description:
      "تتبّع داء السكري بتمارة: السكري من النوع الأول والنوع الثاني وسكري الحمل وتوازن السكر في الدم والمواكبة الطبية.",
    keywords: [
      "طبيبة السكري تمارة",
      "تتبّع داء السكري تمارة",
      "السكري من النوع الثاني",
      "سكري الحمل",
      "طبيبة الغدد الصماء تمارة",
    ],
  },
  "thyroide-temara": {
    seoTitle: "طبيبة الغدة الدرقية بتمارة | أمراض الغدد الصماء | الدكتورة سونيا أبحو",
    description:
      "استشارة في أمراض الغدد الصماء بتمارة لاضطرابات الغدة الدرقية وتضخّم الغدة والعُقيدات وسرطانات الغدة الدرقية والتتبّع الطبي.",
    keywords: [
      "الغدة الدرقية تمارة",
      "طبيبة الغدة الدرقية تمارة",
      "عُقيدة درقية",
      "تضخّم الغدة الدرقية",
      "طبيبة الغدد الصماء تمارة",
    ],
  },
  "nutrition-maladies-metaboliques-temara": {
    seoTitle: "التغذية الطبية بتمارة | السمنة والاستقلاب | الدكتورة سونيا أبحو",
    description:
      "مواكبة في التغذية الطبية بتمارة: السمنة والوزن ومقاومة الأنسولين والاستقلاب والوقاية والأمراض الاستقلابية.",
    keywords: [
      "التغذية الطبية تمارة",
      "السمنة تمارة",
      "الأمراض الاستقلابية",
      "مقاومة الأنسولين",
      "طبيبة الغدد الصماء تمارة",
    ],
  },
  "surrenales-hypophyse-parathyroides-temara": {
    seoTitle:
      "الغدد الكظرية والغدة النخامية والغدد جارات الدرقية بتمارة | الدكتورة سونيا أبحو",
    description:
      "استشارة في أمراض الغدد الصماء بتمارة لأمراض الغدد الكظرية والغدة النخامية والغدد جارات الدرقية.",
    keywords: [
      "الغدد الكظرية تمارة",
      "الغدة النخامية تمارة",
      "الغدد جارات الدرقية تمارة",
      "أمراض الغدد الصماء تمارة",
      "طبيبة الغدد الصماء تمارة",
    ],
  },
  "hyperprolactinemie-hypoglycemies-temara": {
    seoTitle:
      "فرط برولاكتين الدم ونقص السكر في الدم بتمارة | الدكتورة سونيا أبحو",
    description:
      "استشارة في أمراض الغدد الصماء بتمارة لفرط برولاكتين الدم ونقص السكر في الدم والاختلالات الهرمونية التي تتكفّل بها العيادة.",
    keywords: [
      "فرط برولاكتين الدم تمارة",
      "نقص السكر في الدم تمارة",
      "اختلال هرموني",
      "أمراض الغدد الصماء تمارة",
      "طبيبة الغدد الصماء تمارة",
    ],
  },
  "education-therapeutique-temara": {
    seoTitle: "التربية العلاجية بتمارة | داء السكري والتتبّع | الدكتورة سونيا أبحو",
    description:
      "التربية العلاجية بتمارة لمساعدة المرضى على فهم مرضهم وتتبّعهم وأهدافهم الطبية بشكل أفضل.",
    keywords: [
      "التربية العلاجية تمارة",
      "تتبّع المرضى تمارة",
      "التربية العلاجية لداء السكري",
      "بيداغوجيا أمراض الغدد الصماء",
      "طبيبة الغدد الصماء تمارة",
    ],
  },
};

/**
 * Libellés de la page motif arabe. Traduction stricte des libellés français
 * de `app/(fr)/[serviceSlug]/page.tsx`. Les segments qui encadrent une donnée
 * latine (numéros, adresse) sont fournis en préfixes afin d'être composés en
 * JSX avec un `<bdi dir="ltr">`.
 */
export const serviceUiAr = {
  heroEyebrow: "عيادة أمراض الغدد الصماء بتمارة",
  /** Suffixe du titre : « <motif> بتمارة ». */
  titleSuffix: "بتمارة",
  directionsLabel: "الاطّلاع على الاتجاهات",

  specialtyLabel: "التخصّص",
  pointsTitle: "ما الذي تتيح الاستشارة تناوله",
  quickAnswerLabel: "جواب سريع",

  copy: {
    title: "معلومات واضحة، دون أن تُغني عن الرأي الطبي",
    text: "تعرض هذه الصفحة معطيات عامة مفيدة لفهم أسباب الاستشارة بشكل أفضل. ويتوقّف التكفّل دائمًا على التاريخ الطبي والأعراض والفحوصات المتاحة والتقييم المُنجَز أثناء الاستشارة.",
  },

  /* Reprise à l'identique dans le bloc éditorial et dans la troisième étape
     de prise de contact, comme côté français. */
  preparationNote:
    "لتهيئة الموعد، يُنصح بإحضار آخر التحاليل والوصفات والتقارير وفحوصات التصوير والعلاجات الجارية.",

  contact: {
    eyebrow: "التواصل",
    title: "كيف يتم التواصل مع العيادة.",
    callTitle: "الاتصال أو المراسلة عبر واتساب",
    landlinePrefix: "الهاتف الثابت: ",
    /* « وواتساب » plutôt que « / واتساب » : la barre oblique est un caractère
       neutre, elle se détache en fin de ligne dans un paragraphe RTL. */
    mobilePrefix: "الهاتف المحمول وواتساب: ",
    slotTitle: "الاتفاق على موعد مع السكرتارية",
    slotText: "تؤكّد السكرتارية الأوقات المتاحة والترتيبات العملية للموعد.",
    documentsTitle: "إحضار تحاليلكم وعلاجاتكم الجارية",
  },

  editorial: {
    eyebrow: "معلومات وثقة",
    title: "محتوى إعلامي من عيادة الدكتورة سونيا أبحو.",
    textBefore:
      "تعرض هذه الصفحة أسباب الاستشارة بالعيادة دون إجراء تشخيص عن بُعد. حُدِّثت المعلومات في ",
    textAfter: ".",
    profileLink: "الاطّلاع على مسار الدكتورة سونيا أبحو",
  },

  faq: {
    eyebrow: "أسئلة متكرّرة",
    title: "قبل التواصل مع العيادة.",
  },

  related: {
    eyebrow: "أسباب استشارة أخرى تُتابَع بالعيادة",
    title: "استكشاف أسباب الاستشارة الأخرى بالعيادة.",
    homeLink: "الاطّلاع على جميع الحالات في الصفحة الرئيسية",
  },

  finalCta: {
    eyebrow: "الموعد",
    title: "التواصل مع عيادة الدكتورة سونيا أبحو.",
    addressPrefix: "العنوان: ",
    landlinePrefix: "الهاتف الثابت: ",
    mobilePrefix: "الهاتف المحمول وواتساب: ",
  },

  breadcrumbHome: "الصفحة الرئيسية",
} as const;

/**
 * « Jواب سريع » — réponse rapide arabe d'une page motif, miroir de
 * `serviceQuickAnswer` (`app/seo.ts`). Répond d'un bloc au qui, quoi, où,
 * quand et comment prendre rendez-vous.
 *
 * `text` est entièrement en arabe ; `latin` regroupe l'adresse postale et les
 * numéros, rendus séparément en LTR isolé. Aucune séquence latine n'est
 * insérée au milieu d'une phrase arabe.
 */
export function serviceQuickAnswerAr(slug: ServiceSlug) {
  return {
    text: `الدكتورة سونيا أبحو طبيبة أخصائية في أمراض الغدد الصماء والسكري والتغذية والأمراض الاستقلابية بتمارة، بالمغرب. ${servicesAr[slug].text} تستقبل العيادة بموعد من الاثنين إلى الخميس من 9:30 إلى 16:00، ويوم الجمعة من 9:30 إلى 12:30. ويُؤخذ الموعد هاتفيًا أو عبر واتساب — العنوان والأرقام:`,
    latin: `${clinicAddress} · ${clinicPhoneDisplay} · ${clinicSecondaryPhoneDisplay}`,
  };
}

/**
 * FAQ arabe d'une page motif : même composition que la version française
 * (une question construite à partir du motif, puis deux questions communes).
 */
export function serviceFaqItemsAr(slug: ServiceSlug) {
  const service = servicesAr[slug];

  return [
    {
      question: `ما الذي يمكن تناوله في استشارة حول ${service.title}؟`,
      answer: `${service.text} ويتوقّف التكفّل الدقيق على التاريخ الطبي والأعراض والفحوصات المتاحة.`,
    },
    {
      question: "كيف يمكن تهيئة الاستشارة؟",
      answer:
        "يُنصح بإحضار التحاليل الحديثة والوصفات والتقارير وفحوصات التصوير المفيدة ولائحة العلاجات الجارية، دون تغيير أي علاج بدون رأي طبي.",
    },
    {
      question: "كيف يمكن حجز موعد مع العيادة؟",
      answer:
        "يُؤكَّد الموعد حاليًا هاتفيًا أو عبر واتساب لدى عيادة الدكتورة سونيا أبحو بتمارة.",
    },
  ] as const;
}
