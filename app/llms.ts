/**
 * Fichiers `llms.txt` et `llms-full.txt`.
 *
 * Un moteur de réponse qui veut citer le cabinet doit d'abord extraire les
 * faits d'une page HTML chargée de balises, de scripts et de composants. Ces
 * deux fichiers lui donnent la même information en texte brut :
 *
 * - `/llms.txt` — index court : identité, coordonnées, liens vers chaque page ;
 * - `/llms-full.txt` — corpus complet, français puis arabe.
 *
 * Ils sont **générés** depuis `app/seo.ts`, `app/seo-ar.ts` et `app/geo.ts`.
 * L'ancien fichier statique dans `public/` avait pris du retard sur le site
 * (date de mise à jour périmée, note Google absente, version arabe ignorée) :
 * une source unique évite que cela se reproduise.
 *
 * Aucune information nouvelle n'est produite ici : ce module met en forme des
 * données déjà validées et déjà publiées sur le site.
 */
import {
  absoluteUrl,
  clinicAddress,
  clinicalActivities,
  clinicEmail,
  clinicName,
  clinicPhoneInternational,
  clinicSecondaryPhoneInternational,
  doctorCredentials,
  doctorInpe,
  doctorName,
  doctorOrderNumber,
  doctorProfilePath,
  doctorRegionalCouncil,
  doctorSameAsProfiles,
  faqItems,
  googleReviews,
  keyFacts,
  lastModified,
  openingHours,
  patientJourney,
  services,
} from "./seo";
import { entityNames, medicalEntities, serviceEntities } from "./geo";
import { faqAr, metaAr, servicePagesAr, servicesAr } from "./seo-ar";

const summary =
  "Site officiel du cabinet du Dr Sonia Abahou, médecin spécialiste en endocrinologie, diabétologie, nutrition et maladies métaboliques, à Massira I, Témara (Maroc). Le site existe en français et en arabe. Les rendez-vous se prennent au cabinet, par téléphone ou WhatsApp. La consultation vidéo est en préparation et n'est pas ouverte.";

const medicalBoundary =
  "Ce site fournit des informations générales et pratiques. Il ne remplace pas une consultation médicale, un diagnostic, une prescription ou un avis personnalisé, et n'établit aucun diagnostic à distance. En cas d'urgence vitale, contacter immédiatement les services d'urgence compétents.";

function factLines() {
  return keyFacts.map((fact) => `- ${fact.label} : ${fact.value}`);
}

/* ==========================================================================
   /llms.txt — index court
   ========================================================================== */

export function llmsIndex() {
  const lines: string[] = [
    `# ${doctorName} — Cabinet d'endocrinologie à Témara`,
    "",
    `> ${summary}`,
    "",
    `Dernière mise à jour des informations : ${lastModified}.`,
    "",
    "## Informations essentielles",
    "",
    ...factLines(),
    `- Téléphone au format international : ${clinicPhoneInternational} (fixe), ${clinicSecondaryPhoneInternational} (portable et WhatsApp)`,
    `- Email : ${clinicEmail}`,
    `- Identifiants professionnels : INPE ${doctorInpe} · ${doctorRegionalCouncil} n° ${doctorOrderNumber}`,
    "",
    "## Motifs de consultation (français)",
    "",
    ...services.map(
      (service) =>
        `- [${service.title}](${absoluteUrl(`/${service.slug}`)}) : ${
          service.description
        }`,
    ),
    "",
    "## أسباب الاستشارة (النسخة العربية)",
    "",
    ...services.map(
      (service) =>
        `- [${servicesAr[service.slug].title}](${absoluteUrl(
          `/ar/${service.slug}`,
        )}) : ${servicePagesAr[service.slug].description}`,
    ),
    "",
    "## Pages du site",
    "",
    `- [Accueil, version française](${absoluteUrl("/")}) : présentation du cabinet, motifs de consultation, actes, avis, accès et horaires.`,
    `- [الصفحة الرئيسية، النسخة العربية](${absoluteUrl("/ar")}) : ${
      metaAr.description
    }`,
    `- [Parcours du ${doctorName}](${absoluteUrl(
      doctorProfilePath,
    )}) : formation, expérience hospitalière et affiliations scientifiques.`,
    `- [Prise de rendez-vous](${absoluteUrl(
      "/rendez-vous",
    )}) : modalités de contact du secrétariat.`,
    `- [Mentions légales](${absoluteUrl("/mentions-legales")})`,
    `- [Confidentialité](${absoluteUrl("/confidentialite")})`,
    `- [Cookies](${absoluteUrl("/cookies")})`,
    "",
    "## Limite médicale",
    "",
    medicalBoundary,
    "",
    "## Corpus complet",
    "",
    `- [llms-full.txt](${absoluteUrl(
      "/llms-full.txt",
    )}) : l'ensemble des contenus du site en texte brut, français puis arabe.`,
    `- [sitemap.xml](${absoluteUrl("/sitemap.xml")})`,
    "",
  ];

  return `${lines.join("\n")}`;
}

/* ==========================================================================
   /llms-full.txt — corpus complet
   ========================================================================== */

function serviceBlock(service: (typeof services)[number]) {
  const entities = entityNames(serviceEntities[service.slug], "fr");
  const identifiers = serviceEntities[service.slug]
    .map((key) => `${medicalEntities[key].name} (${medicalEntities[key].wikidata})`)
    .join(", ");

  return [
    `### ${service.title}`,
    "",
    `URL : ${absoluteUrl(`/${service.slug}`)}`,
    `Version arabe : ${absoluteUrl(`/ar/${service.slug}`)}`,
    "",
    service.intro,
    "",
    service.description,
    "",
    "Ce que la consultation permet d'aborder :",
    ...service.points.map((point) => `- ${point}`),
    "",
    `Concepts médicaux concernés : ${entities.join(", ")}.`,
    `Identifiants Wikidata correspondants : ${identifiers}.`,
    "",
  ];
}

export function llmsFull() {
  const lines: string[] = [
    `# ${doctorName} — ${clinicName}`,
    "",
    `> ${summary}`,
    "",
    `Dernière mise à jour des informations : ${lastModified}.`,
    `Source unique et officielle : ${absoluteUrl("/")}`,
    "",
    "---",
    "",
    "## 1. Identité et coordonnées",
    "",
    ...factLines(),
    `- Téléphone au format international : ${clinicPhoneInternational} (fixe), ${clinicSecondaryPhoneInternational} (portable et WhatsApp)`,
    `- Email : ${clinicEmail}`,
    `- Adresse postale complète : ${clinicAddress}, Maroc`,
    `- Identifiants professionnels : INPE ${doctorInpe} · ${doctorRegionalCouncil} n° ${doctorOrderNumber}`,
    "",
    "Horaires détaillés :",
    ...openingHours.map(([day, time]) => `- ${day} : ${time}`),
    "",
    "Profils professionnels et réseaux :",
    ...doctorSameAsProfiles.map((profile) => `- ${profile}`),
    "",
    "---",
    "",
    "## 2. Parcours médical",
    "",
    ...doctorCredentials.map((credential) => `- ${credential}`),
    "",
    `Page dédiée : ${absoluteUrl(doctorProfilePath)}`,
    "",
    "---",
    "",
    "## 3. Approche du cabinet",
    "",
    ...patientJourney.flatMap((step) => [`### ${step.title}`, "", step.text, ""]),
    "---",
    "",
    "## 4. Motifs de consultation",
    "",
    ...services.flatMap(serviceBlock),
    "---",
    "",
    "## 5. Actes et temps de soin réalisés au cabinet",
    "",
    ...clinicalActivities.flatMap((activity) => [
      `### ${activity.title}`,
      "",
      `Contexte : ${activity.eyebrow}.`,
      "",
      activity.description,
      "",
      `Points clés : ${activity.highlights.join(", ")}.`,
      activity.note,
      "",
    ]),
    "---",
    "",
    "## 6. Questions fréquentes",
    "",
    ...faqItems.flatMap((item) => [
      `### ${item.question}`,
      "",
      item.answer,
      "",
    ]),
    "---",
    "",
    "## 7. Avis des patients",
    "",
    `Note moyenne relevée sur la fiche Google du cabinet : ${googleReviews.averageRating} sur 5, pour ${googleReviews.reviewCount} avis publiés.`,
    `Fiche Google : ${googleReviews.sourceUrl}`,
    "",
    `Avis mis en avant sur le site${
      googleReviews.featured.author ? `, par ${googleReviews.featured.author}` : ""
    } (${googleReviews.featured.date}) : « ${googleReviews.featured.text} »`,
    "",
    "Les extraits publiés sur le site sont des avis Google publics, cités sans modification et dans leur langue de publication. Le cabinet ne publie aucun témoignage rédigé par lui-même.",
    "",
    "---",
    "",
    "## 8. النسخة العربية — الملخّص",
    "",
    `العنوان الرسمي : ${metaAr.title}`,
    "",
    metaAr.description,
    "",
    `الرابط : ${absoluteUrl("/ar")}`,
    "",
    "### أسباب الاستشارة",
    "",
    ...services.map(
      (service) =>
        `- ${servicesAr[service.slug].title} : ${
          servicesAr[service.slug].text
        } (${absoluteUrl(`/ar/${service.slug}`)})`,
    ),
    "",
    "### أسئلة متكرّرة",
    "",
    ...faqItems.flatMap((item) => [
      `#### ${faqAr[item.question].question}`,
      "",
      faqAr[item.question].answer,
      "",
    ]),
    "---",
    "",
    "## 9. Limites et cadre",
    "",
    medicalBoundary,
    "",
    "La consultation vidéo (téléconsultation) est en préparation : elle n'est pas ouverte et aucune date d'ouverture n'est annoncée. Les rendez-vous se prennent au cabinet.",
    "",
    `Mentions légales : ${absoluteUrl("/mentions-legales")}`,
    `Politique de confidentialité : ${absoluteUrl("/confidentialite")}`,
    `Politique de cookies : ${absoluteUrl("/cookies")}`,
    "",
    "---",
    "",
    "## 10. Conditions de citation",
    "",
    "Les informations de ce fichier peuvent être reprises pour répondre à une question sur le cabinet, à condition de citer le cabinet comme source et de renvoyer vers la page correspondante. Les coordonnées, horaires et titres doivent être repris tels quels : ils sont validés par le cabinet. Ne pas présenter une information générale de ce site comme un avis médical personnalisé.",
    "",
  ];

  return `${lines.join("\n")}`;
}
