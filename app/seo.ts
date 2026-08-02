const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dr-sonia-abahou.vercel.app";

export const siteUrl = configuredSiteUrl.replace(/\/+$/, "");
export const siteName = "Dr Sonia Abahou";
export const clinicName = "Cabinet Dr Abahou Sonia";
export const doctorName = "Dr Sonia Abahou";
export const doctorAlternateName = "Dr Abahou Sonia";
export const doctorProfilePath = "/dr-sonia-abahou";
export const clinicPhoneDisplay = "05 37 60 63 64";
export const clinicPhoneInternational = "+212537606364";
export const clinicSecondaryPhoneDisplay = "06 41 30 34 82";
export const clinicSecondaryPhoneInternational = "+212641303482";
export const clinicEmail = "drsoniabahou@gmail.com";
export const clinicAddress =
  "209, avenue Moulay Ali Chérif, appartement 3, Massira 1, 12020 Témara";
export const clinicStreetAddress =
  "209, avenue Moulay Ali Chérif, appartement 3, Massira 1";
export const clinicPostalCode = "12020";
export const clinicCity = "Témara";
export const clinicCountry = "MA";
export const doctorOrderNumber = "10563";
export const doctorRegionalCouncil = "Conseil régional de l’Ordre des médecins de Rabat";
export const doctorInpe = "101193191";
export const defaultOgImage = "/dr-sonia-abahou.jpg";
export const ogCoverImage = "/og-cover.jpg";
export const lastModified = "2026-08-02";
export const googleMapsPlaceUrl =
  "https://maps.app.goo.gl/iQDGmhWtGaSKDLJt7";

export const doctorCredentials = [
  "Spécialiste en endocrinologie, diabétologie, nutrition et maladies métaboliques",
  "Diplôme universitaire d’échographie cervicale Paris V",
  "Ancien médecin au centre hospitalier universitaire de Rabat",
  "Ancien médecin attaché à l’hôpital militaire de Rabat",
  "Fondatrice et présidente de l’Institut marocain de diabétologie",
  "Membre du think tank de la Global Metabolic Health Alliance (GMHA)",
  "Membre du board scientifique de la Pan Arab Society for Interventional Endocrinology and Diabetes Technology (PASID)",
] as const;

export const doctorSocialProfiles = [
  "https://www.linkedin.com/in/sonia-abahou-38896237/",
  "https://www.instagram.com/sonia_abahou/",
] as const;

export const doctorProfessionalProfiles = [
  "https://www.med.ma/medecin/endocrinologue/temara/dr-sonia-abahou-173348",
  "https://www.dabadoc.com/ma/endocrinologue/temara/sonia-abahou",
  "https://www.annuaire-gratuit.ma/medecins/endocrinologue/sonia-abahou-s215142.html",
] as const;

export const doctorSameAsProfiles = [
  ...doctorSocialProfiles,
  ...doctorProfessionalProfiles,
] as const;

export const mapsQuery =
  "209 Avenue Moulay Ali Cherif App 3 Massira 1 Temara 12020";

export const appointment = {
  whatsappPhone: "212641303482",
  whatsappMessage:
    "Bonjour, je souhaite prendre rendez-vous au cabinet du Dr Abahou Sonia.",
} as const;

export const teleconsultation = {
  calendlyUrl: "https://calendly.com/dr-sonia-abahou/teleconsultation-video",
  confirmationMessage:
    "Votre demande de téléconsultation a bien été enregistrée. Le cabinet reviendra vers vous avec les prochaines étapes dès que le service sera ouvert.",
} as const;

export const services = [
  {
    slug: "diabete-temara",
    title: "Diabète et équilibre glycémique",
    seoTitle: "Diabétologue à Témara | Suivi du diabète | Dr Abahou Sonia",
    description:
      "Suivi du diabète à Témara : diabète de type 1, type 2, diabète gestationnel, équilibre glycémique et accompagnement médical.",
    text: "Suivi du diabète de type 1, type 2, diabète gestationnel et situations de déséquilibre glycémique.",
    intro:
      "Le suivi du diabète demande une approche régulière, compréhensible et adaptée au quotidien du patient.",
    visualClass: "care-diabetes",
    keywords: [
      "diabétologue Témara",
      "suivi diabète Témara",
      "diabète type 2",
      "diabète gestationnel",
    ],
    points: [
      "Point sur les glycémies, les symptômes et les habitudes de vie.",
      "Lecture des bilans biologiques et adaptation du suivi médical.",
      "Prévention des complications et explication des objectifs glycémiques.",
      "Accompagnement du diabète gestationnel selon le contexte de grossesse.",
    ],
  },
  {
    slug: "thyroide-temara",
    title: "Thyroïde, goitre et nodules",
    seoTitle: "Endocrinologue thyroïde à Témara | Dr Abahou Sonia",
    description:
      "Consultation endocrinologique à Témara pour troubles thyroïdiens, goitre, nodules, cancers thyroïdiens et suivi médical.",
    text: "Bilan, surveillance et orientation dans les troubles thyroïdiens, nodules, goitre et cancers thyroïdiens.",
    intro:
      "Les troubles de la thyroïde peuvent influencer l’énergie, le poids, le rythme cardiaque, l’humeur et le métabolisme.",
    visualClass: "care-thyroid",
    keywords: [
      "thyroïde Témara",
      "endocrinologue thyroïde",
      "nodule thyroïdien",
      "goitre",
    ],
    points: [
      "Bilan d’hypothyroïdie, d’hyperthyroïdie, de goitre ou de nodules.",
      "Interprétation des analyses hormonales et des examens disponibles.",
      "Surveillance médicale et orientation selon l’évolution clinique.",
      "Explications simples pour comprendre le rôle de la thyroïde.",
    ],
  },
  {
    slug: "nutrition-maladies-metaboliques-temara",
    title: "Nutrition, obésité et maladies métaboliques",
    seoTitle: "Nutrition médicale à Témara | Obésité et métabolisme | Dr Abahou Sonia",
    description:
      "Accompagnement en nutrition médicale à Témara : obésité, poids, insulinorésistance, métabolisme, prévention et maladies métaboliques.",
    text: "Accompagnement médical autour de la nutrition, de l’obésité, du métabolisme et de la prévention.",
    intro:
      "La nutrition médicale s’inscrit dans une démarche de santé globale, en lien avec le métabolisme et les facteurs de risque.",
    visualClass: "care-nutrition",
    keywords: [
      "nutrition médicale Témara",
      "obésité Témara",
      "maladies métaboliques",
      "insulinorésistance",
    ],
    points: [
      "Évaluation du contexte médical, métabolique et nutritionnel.",
      "Accompagnement autour du poids sans discours culpabilisant.",
      "Prévention des risques métaboliques et cardiovasculaires.",
      "Objectifs réalistes, progressifs et compatibles avec la vie quotidienne.",
    ],
  },
  {
    slug: "surrenales-hypophyse-parathyroides-temara",
    title: "Surrénales, hypophyse et parathyroïdes",
    seoTitle: "Surrénales, hypophyse et parathyroïdes à Témara | Dr Abahou Sonia",
    description:
      "Consultation d’endocrinologie à Témara pour pathologies surrénaliennes, hypophysaires et parathyroïdiennes.",
    text: "Exploration et suivi des pathologies surrénaliennes, hypophysaires et parathyroïdiennes.",
    intro:
      "Certaines pathologies endocriniennes nécessitent une lecture méthodique des symptômes, des bilans et de l’évolution clinique.",
    visualClass: "care-hormones",
    keywords: [
      "surrénales Témara",
      "hypophyse Témara",
      "parathyroïdes Témara",
      "endocrinologie Témara",
    ],
    points: [
      "Orientation du bilan endocrinien selon le contexte clinique.",
      "Suivi des pathologies surrénaliennes, hypophysaires ou parathyroïdiennes.",
      "Interprétation des examens et explication des résultats.",
      "Coordination du suivi médical lorsque des avis complémentaires sont nécessaires.",
    ],
  },
  {
    slug: "hyperprolactinemie-hypoglycemies-temara",
    title: "Hyperprolactinémie et hypoglycémies",
    seoTitle: "Hyperprolactinémie et hypoglycémies à Témara | Dr Abahou Sonia",
    description:
      "Consultation endocrinologique à Témara pour hyperprolactinémie, hypoglycémies et déséquilibres hormonaux validés par le cabinet.",
    text: "Évaluation et suivi de l’hyperprolactinémie, des hypoglycémies et des situations hormonales nécessitant une expertise endocrinologique.",
    intro:
      "Ces motifs demandent une démarche progressive, fondée sur l’histoire clinique, les bilans et l’explication du suivi.",
    visualClass: "care-endocrine",
    keywords: [
      "hyperprolactinémie Témara",
      "hypoglycémies Témara",
      "endocrinologue Témara",
      "déséquilibre hormonal",
    ],
    points: [
      "Analyse des symptômes, du contexte et des examens déjà réalisés.",
      "Orientation du bilan complémentaire lorsque nécessaire.",
      "Explications claires sur les résultats et les objectifs du suivi.",
      "Suivi adapté à l’évolution clinique du patient.",
    ],
  },
  {
    slug: "education-therapeutique-temara",
    title: "Éducation thérapeutique",
    seoTitle: "Éducation thérapeutique à Témara | Dr Abahou Sonia",
    description:
      "Éducation thérapeutique à Témara pour aider les patients à mieux comprendre leur maladie, leur suivi et les objectifs médicaux.",
    text: "Accompagnement pédagogique pour mieux comprendre la maladie, les traitements et les objectifs du suivi.",
    intro:
      "Comprendre sa maladie aide le patient à mieux participer à son suivi et à avancer plus sereinement.",
    visualClass: "care-endocrine",
    keywords: [
      "éducation thérapeutique Témara",
      "suivi patient Témara",
      "diabète éducation thérapeutique",
      "endocrinologie pédagogie",
    ],
    points: [
      "Explication des résultats, des traitements et des objectifs de suivi.",
      "Aide à la compréhension du diabète, du métabolisme et des troubles hormonaux.",
      "Conseils généraux pour préparer la consultation et poser les bonnes questions.",
      "Approche pédagogique centrée sur le patient.",
    ],
  },
] as const;

export const faqItems = [
  {
    question: "Comment prendre rendez-vous au cabinet ?",
    answer:
      "Le cabinet peut être contacté par téléphone ou WhatsApp afin de confirmer les disponibilités et les modalités pratiques du rendez-vous.",
  },
  {
    question: "Quels documents apporter pour une première consultation ?",
    answer:
      "Il est recommandé d’apporter les derniers bilans biologiques, comptes rendus médicaux, ordonnances, examens d’imagerie et tout document utile au suivi.",
  },
  {
    question: "Le site remplace-t-il une consultation médicale ?",
    answer:
      "Non. Les informations du site sont générales et ne remplacent pas un diagnostic, une prescription ou une consultation médicale personnalisée.",
  },
  {
    question: "Quels motifs de consultation sont présentés ?",
    answer:
      "Le site présente notamment le diabète, les troubles thyroïdiens, la nutrition médicale, l’obésité, les maladies métaboliques, l’hyperprolactinémie, les hypoglycémies et certaines pathologies endocriniennes.",
  },
] as const;

export const googleReviews = {
  /* URL directe et pérenne de la fiche Google du cabinet (le lien court
     `share.google` est opaque et non garanti dans la durée). */
  sourceUrl:
    "https://www.google.com/maps/place/Cabinet+Endocrino+Dr.+Sonya+Abahou/@33.928046,-6.8987233,17z",
  featured: {
    text: "On sent sa compréhension avant même qu'elle ne commence à expliquer.",
    author: "Karima" as string | null,
    date: "il y a 1 mois",
  },
  items: [
    {
      author: "Abdellatif Benchakroun",
      excerpt: "… surtout très à l'écoute…",
      date: "il y a 2 ans",
      translated: false,
    },
    {
      author: "maha chafachaf",
      excerpt: "… tres competente et surtout modeste…",
      date: "il y a 3 ans",
      translated: false,
    },
    {
      author: "Ghizlaine El Boukili",
      excerpt: "… dévoué à ses patients…",
      date: "il y a 5 ans",
      translated: false,
    },
    {
      author: "Sanae Msabni",
      excerpt: "… surtout trés humaine.",
      date: "il y a 3 mois",
      translated: false,
    },
    {
      author: "ibtissam Naim",
      excerpt: "… explique très bien les choses…",
      date: "il y a 2 mois",
      translated: true,
    },
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
