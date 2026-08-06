/**
 * GEO — *Generative Engine Optimization*.
 *
 * Ce module regroupe ce qui aide les moteurs de réponse (Google AI Overviews,
 * ChatGPT, Perplexity, Claude, Gemini, Copilot) à **comprendre puis citer** le
 * cabinet, en complément du SEO classique déjà en place (`app/seo.ts`).
 *
 * Deux briques :
 *
 * 1. **Ancrage d'entités** — chaque motif de consultation est relié aux
 *    identifiants publics des concepts médicaux correspondants (Wikidata,
 *    Wikipédia français et arabe). Un moteur qui lit « داء السكري » ou
 *    « diabète de type 2 » retrouve alors la même entité que dans son propre
 *    graphe de connaissances, et rattache le cabinet à ce concept.
 *
 * 2. **Extraits parlés** (`speakable`) — désigne les passages qu'un assistant
 *    vocal peut lire à voix haute.
 *
 * Règle appliquée : **aucun identifiant inventé**. Chaque `wikidata`, `fr` et
 * `ar` ci-dessous a été vérifié auprès des API Wikidata et Wikipédia (libellés
 * et liens de langue existants) avant d'être écrit ici. L'impédancemétrie n'a
 * volontairement pas d'entité : l'article français correspondant est une page
 * d'homonymie, la relier serait un contresens.
 */
import type { services } from "./seo";

type ServiceSlug = (typeof services)[number]["slug"];

/** Type schema.org du concept, selon sa nature. */
type EntityType = "MedicalCondition" | "MedicalProcedure" | "MedicalSpecialty";

type MedicalEntity = {
  /** Libellé français (titre de l'article Wikipédia francophone). */
  readonly name: string;
  /** Libellé arabe (titre de l'article Wikipédia arabophone). */
  readonly nameAr: string;
  /** Identifiant Wikidata, vérifié. */
  readonly wikidata: string;
  readonly type: EntityType;
};

/**
 * Concepts médicaux présents dans les contenus du site. Les clés servent
 * uniquement de référence interne lisible.
 */
export const medicalEntities = {
  diabete: {
    name: "Diabète sucré",
    nameAr: "السكري",
    wikidata: "Q12206",
    type: "MedicalCondition",
  },
  diabeteType1: {
    name: "Diabète de type 1",
    nameAr: "سكري النوع الأول",
    wikidata: "Q124407",
    type: "MedicalCondition",
  },
  diabeteType2: {
    name: "Diabète de type 2",
    nameAr: "سكري النوع الثاني",
    wikidata: "Q3025883",
    type: "MedicalCondition",
  },
  diabeteGestationnel: {
    name: "Diabète gestationnel",
    nameAr: "سكري حملي",
    wikidata: "Q126691",
    type: "MedicalCondition",
  },
  goitre: {
    name: "Goitre",
    nameAr: "تضخم الغدة الدرقية",
    wikidata: "Q165135",
    type: "MedicalCondition",
  },
  noduleThyroidien: {
    name: "Nodule thyroïdien",
    nameAr: "عقيدة درقية",
    wikidata: "Q53829",
    type: "MedicalCondition",
  },
  hypothyroidie: {
    name: "Hypothyroïdie",
    nameAr: "قصور الدرقية",
    wikidata: "Q16501",
    type: "MedicalCondition",
  },
  hyperthyroidie: {
    name: "Hyperthyroïdie",
    nameAr: "فرط الدرقية",
    wikidata: "Q16499",
    type: "MedicalCondition",
  },
  obesite: {
    name: "Obésité",
    nameAr: "سمنة",
    wikidata: "Q12174",
    type: "MedicalCondition",
  },
  syndromeMetabolique: {
    name: "Syndrome métabolique",
    nameAr: "متلازمة أيضية",
    wikidata: "Q657193",
    type: "MedicalCondition",
  },
  insulinoresistance: {
    name: "Résistance à l’insuline",
    nameAr: "مقاومة الإنسولين",
    wikidata: "Q1053470",
    type: "MedicalCondition",
  },
  insuffisanceSurrenalienne: {
    name: "Insuffisance surrénalienne",
    nameAr: "قصور الكظر",
    wikidata: "Q2507454",
    type: "MedicalCondition",
  },
  hyperparathyroidie: {
    name: "Hyperparathyroïdie",
    nameAr: "فرط جارات الدرقية",
    wikidata: "Q1344835",
    type: "MedicalCondition",
  },
  adenomeHypophysaire: {
    name: "Adénome hypophysaire",
    nameAr: "ورم الغدة النخامية",
    wikidata: "Q864296",
    type: "MedicalCondition",
  },
  hyperprolactinemie: {
    name: "Hyperprolactinémie",
    nameAr: "فرط برولاكتين الدم",
    wikidata: "Q1433936",
    type: "MedicalCondition",
  },
  hypoglycemie: {
    name: "Hypoglycémie",
    nameAr: "نقص سكر الدم",
    wikidata: "Q202758",
    type: "MedicalCondition",
  },
  educationTherapeutique: {
    name: "Éducation thérapeutique du patient",
    nameAr: "تثقيف المريض",
    wikidata: "Q7144988",
    type: "MedicalProcedure",
  },
  echographie: {
    name: "Échographie",
    nameAr: "تخطيط الصدى الطبي",
    wikidata: "Q234904",
    type: "MedicalProcedure",
  },
  endocrinologie: {
    name: "Endocrinologie",
    nameAr: "علم الغدد الصم",
    wikidata: "Q162606",
    type: "MedicalSpecialty",
  },
} as const satisfies Record<string, MedicalEntity>;

type EntityKey = keyof typeof medicalEntities;

/**
 * Concepts couverts par chaque page motif. Le `Record` est indexé sur les
 * slugs de `app/seo.ts` : ajouter un motif sans lui associer d'entité casse la
 * compilation.
 */
export const serviceEntities: Record<ServiceSlug, readonly EntityKey[]> = {
  "diabete-temara": [
    "diabete",
    "diabeteType1",
    "diabeteType2",
    "diabeteGestationnel",
  ],
  "thyroide-temara": [
    "goitre",
    "noduleThyroidien",
    "hypothyroidie",
    "hyperthyroidie",
  ],
  "nutrition-maladies-metaboliques-temara": [
    "obesite",
    "syndromeMetabolique",
    "insulinoresistance",
  ],
  "surrenales-hypophyse-parathyroides-temara": [
    "insuffisanceSurrenalienne",
    "hyperparathyroidie",
    "adenomeHypophysaire",
  ],
  "hyperprolactinemie-hypoglycemies-temara": [
    "hyperprolactinemie",
    "hypoglycemie",
  ],
  "education-therapeutique-temara": ["educationTherapeutique"],
};

/** Concepts rattachés à l'entité cabinet, toutes pages confondues. */
export const clinicEntities: readonly EntityKey[] = [
  "endocrinologie",
  "diabete",
  "goitre",
  "noduleThyroidien",
  "obesite",
  "syndromeMetabolique",
  "hyperprolactinemie",
  "hypoglycemie",
  "echographie",
  "educationTherapeutique",
];

function wikipediaUrl(lang: "fr" | "ar", title: string) {
  return `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(
    title.replace(/ /g, "_"),
  )}`;
}

/**
 * Nœud JSON-LD d'un concept médical, avec ses trois références publiques :
 * Wikidata (identifiant pivot des graphes de connaissances) puis Wikipédia
 * dans les deux langues du site.
 */
export function entityNode(key: EntityKey, lang: "fr" | "ar") {
  const entity = medicalEntities[key];

  return {
    "@type": entity.type,
    "@id": `https://www.wikidata.org/wiki/${entity.wikidata}`,
    name: lang === "ar" ? entity.nameAr : entity.name,
    alternateName: lang === "ar" ? entity.name : entity.nameAr,
    sameAs: [
      `https://www.wikidata.org/wiki/${entity.wikidata}`,
      wikipediaUrl("fr", entity.name),
      wikipediaUrl("ar", entity.nameAr),
    ],
  };
}

export function entityNodes(keys: readonly EntityKey[], lang: "fr" | "ar") {
  return keys.map((key) => entityNode(key, lang));
}

/** Libellés des concepts d'un motif, pour un texte lisible par un humain. */
export function entityNames(keys: readonly EntityKey[], lang: "fr" | "ar") {
  return keys.map((key) =>
    lang === "ar" ? medicalEntities[key].nameAr : medicalEntities[key].name,
  );
}

/**
 * Passages qu'un assistant vocal peut lire : le titre principal de la page,
 * le bloc de faits clés de l'accueil et la réponse rapide des pages motifs.
 * Ce sont les seuls passages écrits pour être compris hors contexte.
 */
export const speakableSpecification = {
  "@type": "SpeakableSpecification",
  cssSelector: ["h1", ".key-facts", ".quick-answer-text"],
} as const;
