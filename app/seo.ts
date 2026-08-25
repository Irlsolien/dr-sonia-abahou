const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.drsoniaabahou.com";

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
/** Date de dernière révision des pages légales, en affichage FR et AR. */
export const legalUpdatedFr = "25 août 2026";
export const legalUpdatedAr = "25 غشت 2026";
export const defaultOgImage = "/dr-sonia-abahou.jpg";
export const ogCoverImage = "/og-cover.jpg";
export const lastModified = "2026-08-02";
export const googleMapsPlaceUrl =
  "https://maps.app.goo.gl/iQDGmhWtGaSKDLJt7";

export const doctorCredentials = [
  "Spécialiste en endocrinologie, diabétologie, nutrition et maladies métaboliques",
  "Fondatrice et présidente de la Société Marocaine de Diabétologie (SMD)",
  "Diplôme universitaire d’échographie cervicale Paris V",
  "Ancien médecin au centre hospitalier universitaire de Rabat",
  "Ancien médecin attaché à l’hôpital militaire de Rabat",
  "Membre du think tank de la Global Metabolic Health Alliance (GMHA)",
  "Membre du board scientifique de la Pan Arab Society for Interventional Endocrinology and Diabetes Technology (PASID)",
  "Ancienne secrétaire générale de la SMEDIAN",
] as const;

export const doctorSocialProfiles = [
  "https://www.linkedin.com/in/sonia-abahou-38896237/",
  "https://www.instagram.com/sonia_abahou/",
] as const;

export const doctorProfessionalProfiles = [
  "https://www.med.ma/medecin/endocrinologue/temara/dr-sonia-abahou-173348",
  "https://www.dabadoc.com/ma/endocrinologue/temara/sonia-abahou",
  "https://www.annuaire-gratuit.ma/medecins/endocrinologue/sonia-abahou-s215142.html",
  "https://www.doctori.ma/fr/medecin/endocrinologue-maladies-metaboliques/temara/abahou-sonia",
  "https://medicalis.ma/fiche/ABAHOU-Sonia/35960",
  "https://www.med.tn/medecin/endocrinologue/temara/dr-sonia-abahou-173348.html",
  "https://www.telecontact.ma/annonceur/abahou-sonia/3237832/temara.php",
  "https://www.santeaumaroc.com/annuaire/19878-Docteur-Sonia-Abahou.html",
  "http://smedian.ma/smedianj3/index.php/qui-somme-nous/membre-du-bureau/62-sonia-abahou",
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
  /* Non utilisé tant que la téléconsultation est en préparation : aucune page
     ne charge Calendly, et la CSP de `vercel.json` ne l'autorise donc plus.
     À la réouverture du service, réautoriser `assets.calendly.com`
     (`script-src`, `style-src`) et `calendly.com` (`frame-src`,
     `connect-src`) avant de rebrancher ce parcours. */
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

/**
 * Horaires d'ouverture validés du cabinet. Source unique : la page d'accueil
 * française, les données structurées, le bloc de faits clés et les fichiers
 * `llms.txt` lisent tous ce tableau, afin qu'un horaire ne puisse plus être
 * corrigé à un endroit sans l'être partout.
 */
export const openingHours = [
  ["Lundi", "9h30 — 16h"],
  ["Mardi", "9h30 — 16h"],
  ["Mercredi", "9h30 — 16h"],
  ["Jeudi", "9h30 — 16h"],
  ["Vendredi", "9h30 — 12h30"],
  ["Samedi", "9h30 — 12h"],
  ["Dimanche", "Fermé"],
] as const;

/** Résumé des horaires en une phrase, pour les réponses courtes. */
export const openingHoursSummary =
  "Du lundi au jeudi de 9h30 à 16h, le vendredi de 9h30 à 12h30 et le samedi de 9h30 à 12h. Fermé le dimanche.";

/**
 * Faits clés du cabinet — bloc « En bref ».
 *
 * Réunit en un seul endroit les informations qu'un patient (ou un moteur de
 * réponse) cherche en premier : qui, où, quand, comment prendre rendez-vous.
 * Chaque valeur est reprise des données déjà validées de ce fichier ; aucune
 * information nouvelle n'est introduite ici.
 */
export const keyFacts = [
  {
    label: "Médecin",
    value: `${doctorName}, médecin spécialiste`,
  },
  {
    label: "Spécialité",
    value:
      "Endocrinologie, diabétologie, nutrition et maladies métaboliques",
  },
  {
    label: "Adresse",
    value: `${clinicAddress}, Maroc`,
  },
  /* Deux faits distincts plutôt qu'une seule ligne : sur mobile, un numéro
     réuni au suivant finissait coupé en fin de ligne. */
  {
    label: "Téléphone fixe",
    value: clinicPhoneDisplay,
  },
  {
    label: "Portable et WhatsApp",
    value: clinicSecondaryPhoneDisplay,
  },
  {
    label: "Horaires",
    value: openingHoursSummary,
  },
  {
    label: "Rendez-vous",
    value:
      "Par téléphone ou WhatsApp auprès du secrétariat, puis confirmation par le cabinet.",
  },
  {
    label: "Au cabinet",
    value:
      "Échographie thyroïdienne et cervicale, impédancemétrie médicale, atelier collectif d’éducation thérapeutique le vendredi.",
  },
  {
    label: "Téléconsultation",
    value:
      "En préparation, pas encore ouverte. Les rendez-vous se prennent au cabinet.",
  },
  {
    label: "Inscription ordinale",
    value: `${doctorRegionalCouncil}, n° ${doctorOrderNumber}`,
  },
] as const;

export const faqItems = [
  {
    question: "Comment prendre rendez-vous au cabinet ?",
    answer:
      "Le cabinet peut être contacté par téléphone ou WhatsApp afin de confirmer les disponibilités et les modalités pratiques du rendez-vous.",
  },
  {
    question: "Où se trouve le cabinet du Dr Sonia Abahou ?",
    answer:
      "Le cabinet se trouve au 209, avenue Moulay Ali Chérif, appartement 3, quartier Massira 1, 12020 Témara, au Maroc. L’itinéraire est accessible depuis la carte du site.",
  },
  {
    question: "Quels sont les horaires du cabinet ?",
    answer:
      "Le cabinet reçoit du lundi au jeudi de 9h30 à 16h, le vendredi de 9h30 à 12h30 et le samedi de 9h30 à 12h. Il est fermé le dimanche.",
  },
  {
    question: "Quels documents apporter pour une première consultation ?",
    answer:
      "Il est recommandé d’apporter les derniers bilans biologiques, comptes rendus médicaux, ordonnances, examens d’imagerie et tout document utile au suivi.",
  },
  {
    question: "L’échographie thyroïdienne est-elle réalisée au cabinet ?",
    answer:
      "Oui. L’échographie thyroïdienne et cervicale est réalisée au cabinet dans le cadre de l’évaluation endocrinologique, et ses résultats sont interprétés avec les données cliniques et biologiques du patient.",
  },
  {
    question: "Qu’apporte l’impédancemétrie médicale proposée au cabinet ?",
    answer:
      "Le cabinet utilise un impédancemètre médical multifréquence BIODY XPERT ZM3. Au-delà du poids seul, il contribue au suivi de la composition corporelle : masse grasse, masse non grasse, masse musculaire et hydratation.",
  },
  {
    question: "Le cabinet propose-t-il un atelier d’éducation thérapeutique ?",
    answer:
      "Oui. Le vendredi, le cabinet réunit des patients autour d’un temps d’échange et d’apprentissage sur le diabète, les traitements et l’auto-surveillance. Les prochaines séances et les modalités de participation sont communiquées directement par le cabinet.",
  },
  {
    question: "La téléconsultation vidéo est-elle disponible ?",
    answer:
      "Pas encore. La consultation vidéo est en cours de préparation et aucune date d’ouverture n’est annoncée. Les rendez-vous se prennent aujourd’hui au cabinet, par téléphone ou WhatsApp.",
  },
  {
    question: "Quel est le parcours du Dr Sonia Abahou ?",
    answer:
      "Le Dr Sonia Abahou est spécialiste en endocrinologie, diabétologie, nutrition et maladies métaboliques, titulaire d’un diplôme universitaire d’échographie cervicale de Paris V. Ancien médecin au centre hospitalier universitaire de Rabat et ancien médecin attaché à l’hôpital militaire de Rabat, elle est fondatrice et présidente de la Société Marocaine de Diabétologie (SMD), membre du think tank de la Global Metabolic Health Alliance et membre du board scientifique de la Pan Arab Society for Interventional Endocrinology and Diabetes Technology.",
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

/**
 * Contenus éditoriaux de la page d'accueil, centralisés ici afin que la
 * version arabe (`app/seo-ar.ts`) puisse s'indexer dessus : toute évolution
 * d'un libellé français casse la compilation tant que sa traduction n'a pas
 * été mise à jour. Le rendu français est inchangé (`app/(fr)/page.tsx` importe
 * ces tableaux tels quels).
 */
export const patientJourney = [
  {
    title: "Comprendre",
    text: "Le temps d’écouter les symptômes, l’histoire médicale et les inquiétudes du patient.",
  },
  {
    title: "Expliquer",
    text: "Des mots simples pour rendre les bilans, les hormones et les traitements plus lisibles.",
  },
  {
    title: "Suivre",
    text: "Un plan de suivi clair, adapté au quotidien du patient et à son rythme de vie.",
  },
] as const;

export const clinicalActivities = [
  {
    id: "echographie-thyroidienne",
    eyebrow: "Exploration cervicale",
    title: "Échographie thyroïdienne et cervicale",
    description:
      "Réalisée dans le cadre de l’évaluation endocrinologique, l’échographie permet d’examiner la thyroïde et les aires ganglionnaires cervicales. Ses résultats sont interprétés avec les données cliniques et biologiques du patient.",
    image: "/echographie-thyroidienne.webp",
    alt: "Illustration d’une échographie thyroïdienne réalisée dans un cabinet médical",
    highlights: ["Thyroïde et nodules", "Aires cervicales", "Lecture clinique globale"],
    note: "Un examen intégré au parcours endocrinologique, avec des explications claires à chaque étape.",
  },
  {
    id: "impedancemetrie-medicale",
    eyebrow: "Composition corporelle",
    title: "Impédancemétrie médicale avec BIODY XPERT ZM3",
    description:
      "Au-delà du poids seul, ce dispositif médical multifréquence contribue au suivi de la composition corporelle : masse grasse, masse non grasse, masse musculaire et hydratation. Les mesures complètent l’évaluation médicale et nutritionnelle.",
    image: "/impedancemetrie-mesure.webp",
    alt: "Illustration d’une mesure de composition corporelle avec un impédancemètre médical",
    highlights: ["Mesure multifréquence", "Évolution dans le temps", "Interprétation médicale"],
    note: "Des indicateurs utiles pour personnaliser le suivi et observer les évolutions au fil des consultations.",
  },
  {
    id: "education-therapeutique",
    eyebrow: "Chaque vendredi",
    title: "Atelier collectif d’éducation thérapeutique",
    description:
      "Le vendredi, le cabinet réunit des patients autour d’un temps d’échange et d’apprentissage pour mieux comprendre le diabète, les traitements, l’auto-surveillance et les situations concrètes du quotidien.",
    image: "/atelier-education-therapeutique.webp",
    alt: "Illustration d’un atelier collectif d’éducation thérapeutique autour du diabète",
    highlights: ["Comprendre la maladie", "Partager les expériences", "Gagner en autonomie"],
    note: "Les prochaines séances et les modalités de participation sont communiquées directement par le cabinet.",
  },
  {
    id: "surveillance-glycemique-continue",
    eyebrow: "Holter glycémique",
    title: "Holter glycémique et surveillance continue",
    description:
      "Pour les patients concernés, le Holter glycémique enregistre l’évolution du glucose en continu. Les données du capteur peuvent être consultées dans le cadre d’un suivi médical rapproché quotidien afin de repérer les tendances, de préparer les échanges avec le cabinet et de mieux comprendre l’évolution de la glycémie.",
    image: null,
    alt: "Aperçu d’une interface de suivi glycémique continu",
    highlights: ["Mesure en continu", "Suivi rapproché quotidien", "Lecture des tendances"],
    note: "Le tableau permet de visualiser les tendances utiles au suivi tout en préservant strictement l’identité et les informations personnelles des patients.",
  },
] as const;

/**
 * Galerie asymétrique : les trois photos haute définition (1448×1086) occupent
 * les grandes cartes ; la vue de consultation, de définition plus modeste
 * (515×388), est présentée en carte compacte afin qu'elle reste nette.
 */
export const gallery = [
  {
    src: "/cabinet-accueil-reel.webp",
    alt: "Accueil réel du cabinet du Dr Sonia Abahou à Témara",
    label: "Accueil",
    title: "Un accueil lumineux, calme et soigné.",
    variant: "gallery-large",
    sizes: "(max-width: 980px) 92vw, 1180px",
  },
  {
    src: "/cabinet-consultation-reel.webp",
    alt: "Salle de consultation du cabinet du Dr Sonia Abahou à Témara",
    label: "Consultation",
    title: "Un espace professionnel consacré à l’écoute et au suivi.",
    variant: "gallery-wide",
    sizes: "(max-width: 980px) 92vw, 580px",
  },
  {
    src: "/cabinet-attente-reel.webp",
    alt: "Salle d’attente du cabinet du Dr Sonia Abahou à Témara",
    label: "Salle d’attente",
    title: "Un cadre sobre et confortable avant la consultation.",
    variant: "gallery-wide",
    sizes: "(max-width: 980px) 92vw, 580px",
  },
  {
    src: "/cabinet-consultation-patiente.webp",
    alt: "Consultation au cabinet du Dr Sonia Abahou à Témara, avec une patiente dont le visage est flouté par respect de la confidentialité",
    label: "Consultation",
    title: "Un temps d’échange individuel, au calme, avec chaque patient.",
    variant: "gallery-compact",
    sizes: "(max-width: 980px) 92vw, 380px",
  },
] as const;

/* Galerie « engagement scientifique, congrès et médias » de la page bio.
   Chaque photo est une image réelle du Dr Abahou lors d'un congrès ou d'une
   action publique (fichiers `public/media/`). Les légendes restent
   descriptives et factuelles : aucun titre, prix ou fonction n'est affirmé
   au-delà de ce que montre la photographie. Le miroir arabe est dans
   `app/seo-ar.ts` (`professionalGalleryAr`), typé sur `src`. */
export const professionalGallery = [
  {
    src: "/media/distinction-pasid-2025-remise.webp",
    alt: "Dr Sonia Abahou recevant une plaque lors du congrès PASID 25 à Alexandrie",
    label: "PASID 25 · Alexandrie",
    title: "Congrès de la Pan Arab Society for Interventional Endocrinology & Diabetes Technology.",
    variant: "proof-hero",
    sizes: "(max-width: 980px) 92vw, 1180px",
  },
  {
    src: "/media/dr-sonia-abahou-congres-portrait.webp",
    alt: "Portrait du Dr Sonia Abahou lors d’un congrès médical",
    label: "Congrès",
    title: "Une pratique nourrie par la formation continue.",
    variant: "proof-third",
    sizes: "(max-width: 980px) 92vw, 380px",
  },
  {
    src: "/media/media-interview-2m.webp",
    alt: "Dr Sonia Abahou interviewée par la chaîne Medi1 lors d’une action de sensibilisation au diabète",
    label: "Média · Medi1",
    title: "Sensibilisation au diabète auprès du grand public.",
    variant: "proof-third",
    sizes: "(max-width: 980px) 92vw, 380px",
  },
  {
    src: "/media/media-village-diabete-laayoune.webp",
    alt: "Dr Sonia Abahou au Village du Diabète de Laâyoune, action de dépistage et d’éducation",
    label: "Village du Diabète · Laâyoune",
    title: "Dépistage et éducation au plus près des habitants.",
    variant: "proof-third",
    sizes: "(max-width: 980px) 92vw, 380px",
  },
  {
    src: "/media/congres-dia-egypt-2025.webp",
    alt: "Dr Sonia Abahou conférencière au congrès DIA Egypt 2025 au Caire",
    label: "DIA Egypt 2025 · Le Caire",
    title: "Conférencière au congrès international du diabète.",
    variant: "proof-third",
    sizes: "(max-width: 980px) 92vw, 380px",
  },
  {
    src: "/media/congres-conference.webp",
    alt: "Dr Sonia Abahou intervenant à la tribune du congrès de Dubai 2025",
    label: "Congrès · Dubai 2025",
    title: "Intervention scientifique en endocrinologie et diabétologie.",
    variant: "proof-third",
    sizes: "(max-width: 980px) 92vw, 380px",
  },
  {
    src: "/media/distinction-pasid-2025.webp",
    alt: "Remise de plaque au Dr Sonia Abahou lors du congrès pan-arabe PASID 25",
    label: "PASID 25 · Alexandrie",
    title: "Remise de plaque du congrès pan-arabe.",
    variant: "proof-third",
    sizes: "(max-width: 980px) 92vw, 380px",
  },
  {
    src: "/media/congres-chu-oujda.webp",
    alt: "Dr Sonia Abahou intervenant au CHU Mohammed VI d’Oujda",
    label: "CHU Mohammed VI · Oujda",
    title: "Intervention aux 10 ans du service d’endocrinologie.",
    variant: "proof-half",
    sizes: "(max-width: 980px) 92vw, 580px",
  },
  {
    src: "/media/congres-casablanca.webp",
    alt: "Dr Sonia Abahou à la tribune d’un congrès médical à Casablanca",
    label: "Congrès · Casablanca",
    title: "Échanges scientifiques entre spécialistes.",
    variant: "proof-half",
    sizes: "(max-width: 980px) 92vw, 580px",
  },
] as const;

export const googleReviews = {
  /* URL directe et pérenne de la fiche Google du cabinet (le lien court
     `share.google` est opaque et non garanti dans la durée). */
  sourceUrl:
    "https://www.google.com/maps/place/Cabinet+Endocrino+Dr.+Sonya+Abahou/@33.928046,-6.8987233,17z",
  /* Note moyenne et nombre d'avis relevés sur la fiche Google le 12 août 2026.
     À mettre à jour lorsque la fiche évolue — ne jamais afficher une valeur
     différente de la fiche réelle. */
  averageRating: "3,6",
  reviewCount: 27,
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

/**
 * Largeur de remplissage de la rangée d'étoiles de la section « Avis » :
 * la note réelle de la fiche Google (3,6 / 5) et non cinq étoiles pleines.
 * Calculée depuis `googleReviews.averageRating` pour rester exacte si la note
 * de la fiche évolue.
 */
export const googleRatingFillWidth = `${
  Math.round(
    (Number(googleReviews.averageRating.replace(",", ".")) / 5) * 1000,
  ) / 10
}%`;

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

/**
 * « Réponse rapide » d'une page motif : un paragraphe unique qui répond d'un
 * bloc aux questions de fond (qui, quoi, où, quand, comment prendre
 * rendez-vous). Utile au patient pressé, et directement citable par un moteur
 * de réponse — qui extrait rarement une information dispersée sur cinq
 * sections. Entièrement composée de données déjà validées.
 */
export function serviceQuickAnswer(service: (typeof services)[number]) {
  return `${doctorName} est médecin spécialiste en endocrinologie, diabétologie, nutrition et maladies métaboliques à Témara, au Maroc. ${service.text} Le cabinet reçoit sur rendez-vous au ${clinicAddress}, du lundi au jeudi de 9h30 à 16h et le vendredi de 9h30 à 12h30. Le rendez-vous se prend par téléphone au ${clinicPhoneDisplay} ou par WhatsApp au ${clinicSecondaryPhoneDisplay}.`;
}
