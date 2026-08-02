/**
 * VERSION ARABE — contenus de `/ar`.
 *
 * Règle absolue : **aucun fait nouveau**. Chaque chaîne de ce fichier est la
 * traduction d'un texte français déjà validé (`app/seo.ts`, `app/page.tsx`,
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
  clinicalActivities,
  doctorCredentials,
  faqItems,
  gallery,
  googleReviews,
  patientJourney,
  services,
} from "./seo";
import type { CgmDemoLabels } from "./components/CgmDemoDashboard";
import type { HeaderLabels } from "./components/SiteHeader";
import type { FooterLabels } from "./components/SiteFooter";
import type { MapEmbedLabels } from "./components/MapEmbed";
import type { MobileNavLabels } from "./components/MobileNav";

type ServiceSlug = (typeof services)[number]["slug"];
type ActivityId = (typeof clinicalActivities)[number]["id"];
type ActivityHighlight = (typeof clinicalActivities)[number]["highlights"][number];
type GallerySrc = (typeof gallery)[number]["src"];
type JourneyTitle = (typeof patientJourney)[number]["title"];
type FaqQuestion = (typeof faqItems)[number]["question"];
type ReviewDate =
  | (typeof googleReviews.items)[number]["date"]
  | (typeof googleReviews.featured)["date"];

/* ==========================================================================
   Métadonnées et partage
   ========================================================================== */

export const arOgImage = "/og-cover-ar.jpg";

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

export const faqAr: Record<FaqQuestion, { question: string; answer: string }> = {
  "Comment prendre rendez-vous au cabinet ?": {
    question: "كيف يمكن حجز موعد بالعيادة؟",
    answer:
      "يمكن التواصل مع العيادة هاتفيًا أو عبر واتساب لتأكيد الأوقات المتاحة والترتيبات العملية للموعد.",
  },
  "Quels documents apporter pour une première consultation ?": {
    question: "ما الوثائق التي ينبغي إحضارها في الاستشارة الأولى؟",
    answer:
      "يُنصح بإحضار آخر التحاليل البيولوجية والتقارير الطبية والوصفات وفحوصات التصوير وكل وثيقة مفيدة للتتبّع.",
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

/* Horaires identiques à ceux de la page d'accueil française (`app/page.tsx`).
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
  starsAriaLabel: "5 نجوم من 5",

  hero: {
    eyebrow: "طبيبة أخصائية في الغدد الصماء والسكري بتمارة",
    title: "رعاية واضحة لداء السكري والغدة الدرقية والاستقلاب بتمارة.",
    lead: "تستقبل عيادة الدكتورة سونيا أبحو المرضى لتتبّع داء السكري واضطرابات الغدة الدرقية والتغذية الطبية والاضطرابات الهرمونية والأمراض الاستقلابية.",
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
    note: "لأي سؤال حول أحد أسباب الاستشارة، يمكن التواصل مع العيادة هاتفيًا أو عبر واتساب.",
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
  /* Les pages juridiques et le parcours de rendez-vous n'existent qu'en
     français : le lien porte donc `hrefLang="fr"`. */
  pages: [
    { href: "/rendez-vous", label: "حجز موعد", hrefLang: "fr" },
    { href: "/mentions-legales", label: "المعلومات القانونية", hrefLang: "fr" },
    { href: "/confidentialite", label: "الخصوصية", hrefLang: "fr" },
    { href: "/cookies", label: "ملفات تعريف الارتباط", hrefLang: "fr" },
    { href: "/", label: "Français", lang: "fr", dir: "ltr", hrefLang: "fr" },
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
