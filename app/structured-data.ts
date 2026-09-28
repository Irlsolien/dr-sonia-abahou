/**
 * Nœuds JSON-LD partagés par plusieurs pages.
 *
 * Le médecin est décrit sur l'accueil et sur la page bio, en français comme en
 * arabe : ses déclarations ne doivent jamais diverger d'une page à l'autre.
 * Chaque nœud est donc construit une seule fois ici, puis inséré tel quel dans
 * le `@graph` des pages concernées. Aucun fait nouveau : toutes les valeurs
 * proviennent des données validées de `app/seo.ts` (titres, identifiants,
 * affiliations affichées sur le site) et des traductions de `app/seo-ar.ts`.
 */
import {
  absoluteUrl,
  clinicCity,
  doctorAlternateName,
  doctorInpe,
  doctorName,
  doctorOrderNumber,
  doctorProfilePath,
  doctorRegionalCouncil,
  doctorSameAsProfiles,
  siteUrl,
} from "./seo";
import { clinicEntities, entityNodes } from "./geo";

/** Nom arabe du médecin, tel qu'affiché sur toutes les pages `/ar`. */
const doctorNameAr = "الدكتورة سونيا أبحو";

/**
 * Graphie arabe tapée par les patients dans Google (requête « الدكتورة صونية
 * أباحو » relevée dans Search Console). Déclarée seulement en `alternateName`
 * du médecin : le site garde sa graphie « سونيا أبحو ».
 */
const doctorNameArSearchVariant = "الدكتورة صونية أباحو";

/** Horaires validés (`openingHours` de `app/seo.ts`), au format schema.org. */
export const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "09:30",
    closes: "16:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Friday",
    opens: "09:30",
    closes: "12:30",
  },
] as const;

/* Affiliations affichées sur le site (`doctorCredentials`). La Société
   Marocaine de Diabétologie, dont le Dr Abahou est fondatrice et présidente,
   figure en tête ; son nom arabe reprend la traduction de `credentialsAr`. */
const smdFr = {
  "@type": "Organization",
  name: "Société Marocaine de Diabétologie",
  alternateName: "SMD",
} as const;

const smdAr = {
  "@type": "Organization",
  name: "الجمعية المغربية للسكري",
  alternateName: ["Société Marocaine de Diabétologie", "SMD"],
} as const;

const gmha = {
  "@type": "Organization",
  name: "Global Metabolic Health Alliance",
  url: "https://gmha.global",
} as const;

const pasid = {
  "@type": "Organization",
  name: "Pan Arab Society for Interventional Endocrinology and Diabetes Technology",
} as const;

const identifiers = (orderNumberLabel: string) => [
  {
    "@type": "PropertyValue",
    name: "INPE",
    value: doctorInpe,
  },
  {
    "@type": "PropertyValue",
    name: orderNumberLabel,
    value: doctorOrderNumber,
  },
];

/** Identifiant du nœud médecin français (accueil et page bio). */
export const doctorIdFr = `${absoluteUrl(doctorProfilePath)}#doctor`;

/** Identifiant du nœud médecin arabe (accueil `/ar` et page bio arabe). */
export const doctorIdAr = `${siteUrl}/ar#doctor`;

/** Médecin, version française : accueil `/` et page bio `/dr-sonia-abahou`. */
export const doctorNodeFr = {
  "@type": "Person",
  "@id": doctorIdFr,
  name: doctorName,
  alternateName: [doctorAlternateName, doctorNameAr, doctorNameArSearchVariant],
  honorificPrefix: "Dr",
  jobTitle:
    "Médecin spécialiste en endocrinologie, diabétologie, nutrition et maladies métaboliques",
  description:
    "Médecin spécialiste en endocrinologie, diabétologie, nutrition et maladies métaboliques exerçant à Témara.",
  image: absoluteUrl("/dr-sonia-abahou.jpg"),
  url: absoluteUrl(doctorProfilePath),
  sameAs: [...doctorSameAsProfiles],
  identifier: identifiers("Numéro ordinal"),
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Spécialité médicale",
      name: "Endocrinologie, diabétologie, nutrition et maladies métaboliques",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Diplôme universitaire",
      name: "Échographie cervicale - Paris V",
    },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Paris V",
  },
  /* Reprise stricte de la légende de la photographie publiée dans la section
     « Signature médicale » de l'accueil : aucune distinction supplémentaire
     n'est déclarée. */
  award: "Distinction « Tous Unis Contre le Diabète », remise lors d’un congrès de diabétologie",
  hasOccupation: {
    "@type": "Occupation",
    name: "Médecin endocrinologue, diabétologue et nutritionniste",
    occupationLocation: {
      "@type": "City",
      name: clinicCity,
    },
  },
  worksFor: {
    "@id": `${siteUrl}/#clinic`,
  },
  workLocation: {
    "@id": `${siteUrl}/#clinic`,
  },
  affiliation: {
    "@type": "MedicalOrganization",
    name: doctorRegionalCouncil,
  },
  memberOf: [smdFr, gmha, pasid],
  /* Le médecin est relié aux concepts médicaux par leurs identifiants publics
     (Wikidata, Wikipédia), comme le cabinet. */
  knowsAbout: entityNodes(clinicEntities, "fr"),
};

/** Médecin, version arabe : accueil `/ar` et page bio `/ar/dr-sonia-abahou`. */
export const doctorNodeAr = {
  "@type": "Person",
  "@id": doctorIdAr,
  name: doctorNameAr,
  alternateName: [doctorName, doctorAlternateName, doctorNameArSearchVariant],
  honorificPrefix: "د.",
  jobTitle:
    "طبيبة أخصائية في أمراض الغدد الصماء والسكري والتغذية والأمراض الاستقلابية",
  description:
    "طبيبة أخصائية في أمراض الغدد الصماء والسكري والتغذية والأمراض الاستقلابية تمارس بتمارة.",
  image: absoluteUrl("/dr-sonia-abahou.jpg"),
  /* Page qui décrit le médecin en arabe : sa page bio, jumelle de
     `/dr-sonia-abahou`. */
  url: absoluteUrl(`/ar${doctorProfilePath}`),
  sameAs: [...doctorSameAsProfiles],
  identifier: identifiers("رقم التسجيل بالهيئة"),
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "تخصّص طبي",
      name: "أمراض الغدد الصماء والسكري والتغذية والأمراض الاستقلابية",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "دبلوم جامعي",
      name: "الفحص بالموجات فوق الصوتية للعنق — Paris V",
    },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Paris V",
  },
  /* Reprise stricte de la légende arabe de la photographie de la section
     « البصمة الطبية » : aucune distinction supplémentaire n'est déclarée. */
  award: "تكريم «Tous Unis Contre le Diabète» خلال مؤتمر في طب السكري",
  hasOccupation: {
    "@type": "Occupation",
    name: "طبيبة أخصائية في أمراض الغدد الصماء والسكري والتغذية",
    occupationLocation: {
      "@type": "City",
      name: "تمارة",
    },
  },
  worksFor: {
    "@id": `${siteUrl}/ar#clinic`,
  },
  workLocation: {
    "@id": `${siteUrl}/ar#clinic`,
  },
  affiliation: {
    "@type": "MedicalOrganization",
    name: doctorRegionalCouncil,
  },
  memberOf: [smdAr, gmha, pasid],
  knowsAbout: entityNodes(clinicEntities, "ar"),
};
