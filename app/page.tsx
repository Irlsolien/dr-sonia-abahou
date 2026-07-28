import Image from "next/image";
import Link from "next/link";
import { SocialTooltip, type SocialItem } from "@/components/ui/social-media";
import {
  absoluteUrl,
  clinicAddress,
  clinicCity,
  clinicCountry,
  clinicEmail,
  clinicName,
  clinicPhoneDisplay,
  clinicPhoneInternational,
  clinicPostalCode,
  clinicSecondaryPhoneDisplay,
  clinicSecondaryPhoneInternational,
  clinicStreetAddress,
  doctorAlternateName,
  doctorCredentials,
  doctorInpe,
  doctorName,
  doctorOrderNumber,
  doctorProfilePath,
  doctorProfessionalProfiles,
  doctorRegionalCouncil,
  doctorSameAsProfiles,
  faqItems,
  googleMapsPlaceUrl,
  lastModified,
  mapsQuery,
  services,
  siteName,
  siteUrl,
} from "./seo";

const phoneHref = `tel:${clinicPhoneInternational}`;
const secondaryPhoneHref = `tel:${clinicSecondaryPhoneInternational}`;
const mapsHref = googleMapsPlaceUrl;
const mapsEmbedHref = `https://www.google.com/maps?q=${encodeURIComponent(
  mapsQuery,
)}&output=embed`;

const socialLinks: SocialItem[] = [
  {
    href: "https://www.linkedin.com/in/sonia-abahou-38896237/",
    ariaLabel: "LinkedIn du cabinet Dr Sonia Abahou",
    tooltip: "LinkedIn",
    color: "#0A66C2",
    icon: "linkedin",
  },
  {
    href: "https://www.instagram.com/sonia_abahou/",
    ariaLabel: "Instagram du cabinet Dr Sonia Abahou",
    tooltip: "Instagram",
    color: "#E1306C",
    icon: "instagram",
  },
];

const hours = [
  ["Lundi", "9h30 — 16h"],
  ["Mardi", "9h30 — 16h"],
  ["Mercredi", "9h30 — 16h"],
  ["Jeudi", "9h30 — 16h"],
  ["Vendredi", "9h30 — 12h30"],
  ["Samedi", "Fermé"],
  ["Dimanche", "Fermé"],
];

const gallery = [
  {
    src: "/cabinet-accueil.webp",
    alt: "Illustration photoréaliste d’un accueil de cabinet médical moderne",
    label: "Accueil",
    title: "Une première impression calme, claire, rassurante.",
  },
  {
    src: "/cabinet-consultation.webp",
    alt: "Illustration photoréaliste d’un bureau de consultation endocrinologique",
    label: "Consultation",
    title: "Un espace pensé pour écouter, examiner et expliquer.",
  },
  {
    src: "/cabinet-nutrition.webp",
    alt: "Illustration photoréaliste d’un suivi nutritionnel et métabolique",
    label: "Nutrition",
    title: "Prévention, équilibre et accompagnement métabolique.",
  },
];

const patientJourney = [
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
];

const clinicalActivities = [
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
    image: "/impedancemetrie-biody-xpert-zm3.webp",
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
    eyebrow: "Suivi connecté",
    title: "Surveillance glycémique continue avec suivi rapproché",
    description:
      "Pour les patients concernés, les données du capteur peuvent être consultées dans le cadre d’un suivi médical rapproché. Cette lecture régulière aide à repérer les tendances, à préparer les échanges avec le cabinet et à mieux comprendre l’évolution de la glycémie au quotidien.",
    image: null,
    alt: "Interface de démonstration fictive d’un suivi glycémique continu",
    highlights: ["Lecture des tendances", "Suivi rapproché quotidien", "Échanges mieux préparés"],
    note: "L’interface présentée est une démonstration : tous les profils, valeurs et graphiques sont entièrement fictifs.",
  },
] as const;

function CgmDemoDashboard() {
  const demoPatients = [
    { name: "Patient fictif 01", value: "112", status: "Courbe reçue" },
    { name: "Patient fictif 02", value: "138", status: "Lecture récente" },
    { name: "Patient fictif 03", value: "101", status: "Capteur actif" },
  ];

  return (
    <div
      className="cgm-demo"
      role="img"
      aria-label="Tableau de bord fictif illustrant un suivi glycémique continu sans aucune donnée réelle"
    >
      <div className="cgm-demo-topbar">
        <div>
          <span className="cgm-demo-live">
            <i />
            Démonstration
          </span>
          <strong>Suivi glycémique rapproché</strong>
        </div>
        <span className="cgm-demo-privacy">100 % fictif</span>
      </div>

      <div className="cgm-demo-chart">
        <div className="cgm-demo-chart-heading">
          <div>
            <span>Profil de démonstration</span>
            <strong>Tendance sur 24 heures</strong>
          </div>
          <span className="cgm-demo-value">112 <small>mg/dL</small></span>
        </div>
        <svg viewBox="0 0 720 230" aria-hidden="true">
          <defs>
            <linearGradient id="cgmArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="cgm-demo-area"
            d="M0 166 C70 136 108 151 158 130 C215 106 252 155 306 140 C355 126 390 74 444 90 C498 106 530 151 580 126 C628 101 666 86 720 104 L720 230 L0 230 Z"
          />
          <path
            className="cgm-demo-line"
            d="M0 166 C70 136 108 151 158 130 C215 106 252 155 306 140 C355 126 390 74 444 90 C498 106 530 151 580 126 C628 101 666 86 720 104"
          />
          <circle className="cgm-demo-point" cx="720" cy="104" r="8" />
        </svg>
        <div className="cgm-demo-axis">
          <span>00h</span>
          <span>06h</span>
          <span>12h</span>
          <span>18h</span>
          <span>Maintenant</span>
        </div>
      </div>

      <div className="cgm-demo-patients">
        {demoPatients.map((patient) => (
          <div key={patient.name} className="cgm-demo-patient">
            <span className="cgm-demo-avatar" aria-hidden="true">
              {patient.name.slice(-2)}
            </span>
            <div>
              <strong>{patient.name}</strong>
              <span>{patient.status}</span>
            </div>
            <b>
              {patient.value}
              <small>mg/dL</small>
            </b>
          </div>
        ))}
      </div>

      <p className="cgm-demo-disclaimer">
        Aucun nom, identifiant ou résultat de patient réel.
      </p>
    </div>
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": `${siteUrl}/#clinic`,
      name: clinicName,
      alternateName: siteName,
      description:
        "Cabinet d’endocrinologie, diabétologie, nutrition et maladies métaboliques à Témara.",
      image: {
        "@type": "ImageObject",
        url: absoluteUrl("/dr-sonia-abahou.jpg"),
        caption: `${doctorName}, endocrinologue à Témara`,
      },
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/dr-sonia-logo-cropped.png"),
      },
      url: `${siteUrl}/`,
      telephone: [clinicPhoneInternational, clinicSecondaryPhoneInternational],
      email: clinicEmail,
      hasMap: mapsHref,
      sameAs: [mapsHref, ...doctorProfessionalProfiles],
      address: {
        "@type": "PostalAddress",
        streetAddress: clinicStreetAddress,
        postalCode: clinicPostalCode,
        addressLocality: clinicCity,
        addressCountry: clinicCountry,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: clinicPhoneInternational,
          contactType: "Prise de rendez-vous",
          areaServed: clinicCountry,
          availableLanguage: "fr",
        },
        {
          "@type": "ContactPoint",
          telephone: clinicSecondaryPhoneInternational,
          contactType: "Téléphone portable et WhatsApp du cabinet",
          areaServed: clinicCountry,
          availableLanguage: "fr",
        },
      ],
      employee: {
        "@id": `${absoluteUrl(doctorProfilePath)}#doctor`,
      },
      areaServed: "Témara",
      medicalSpecialty: [
        "https://schema.org/Endocrine",
        "https://schema.org/DietNutrition",
      ],
      availableService: [
        ...services.map((service) => ({
          "@type": "MedicalProcedure",
          name: service.title,
          description: service.text,
          url: absoluteUrl(`/${service.slug}`),
        })),
        ...clinicalActivities.map((activity) => ({
          "@type": "MedicalProcedure",
          name: activity.title,
          description: activity.description,
          url: absoluteUrl(`/#${activity.id}`),
        })),
      ],
      openingHoursSpecification: [
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
      ],
    },
    {
      "@type": "Person",
      "@id": `${absoluteUrl(doctorProfilePath)}#doctor`,
      name: doctorName,
      alternateName: doctorAlternateName,
      honorificPrefix: "Dr",
      jobTitle:
        "Médecin spécialiste en endocrinologie, diabétologie, nutrition et maladies métaboliques",
      description:
        "Médecin spécialiste en endocrinologie, diabétologie, nutrition et maladies métaboliques exerçant à Témara.",
      image: absoluteUrl("/dr-sonia-abahou.jpg"),
      url: absoluteUrl(doctorProfilePath),
      sameAs: [...doctorSameAsProfiles],
      identifier: [
        {
          "@type": "PropertyValue",
          name: "INPE",
          value: doctorInpe,
        },
        {
          "@type": "PropertyValue",
          name: "Numéro ordinal",
          value: doctorOrderNumber,
        },
      ],
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
      worksFor: {
        "@id": `${siteUrl}/#clinic`,
      },
      affiliation: {
        "@type": "MedicalOrganization",
        name: doctorRegionalCouncil,
      },
      knowsAbout: [
        "Endocrinologie",
        "Diabétologie",
        "Thyroïde",
        "Nutrition médicale",
        "Obésité",
        "Hypoglycémies",
        "Maladies métaboliques",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      alternateName: clinicName,
      url: `${siteUrl}/`,
      inLanguage: "fr-MA",
      publisher: {
        "@id": `${siteUrl}/#clinic`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: `${doctorName} | Endocrinologue à Témara`,
      description:
        "Site officiel du cabinet du Dr Sonia Abahou à Témara : endocrinologie, diabétologie, nutrition et maladies métaboliques.",
      inLanguage: "fr-MA",
      dateModified: lastModified,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#clinic`,
      },
      about: {
        "@id": `${absoluteUrl(doctorProfilePath)}#doctor`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl("/dr-sonia-abahou.jpg"),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      isPartOf: {
        "@id": `${siteUrl}/#webpage`,
      },
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grain-overlay" />

      <header className="site-header">
        <a className="brand-mark" href="#accueil" aria-label="Accueil">
          <span className="brand-logo-mark">
            <Image
              src="/dr-sonia-monogram.png"
              alt=""
              width={58}
              height={58}
              sizes="58px"
              priority
            />
          </span>
          <strong>Dr Sonia Abahou</strong>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#expertise">Expertise</a>
          <a href="#soins">Soins</a>
          <a href="#pratiques">Pratiques</a>
          <a href="#cabinet">Cabinet</a>
          <a href="#contact">Contact</a>
        </nav>
        <Link className="header-cta" href="/rendez-vous">
          Rendez-vous
        </Link>
      </header>

      <section id="accueil" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Endocrinologue diabétologue à Témara</p>
          <h1>
            Une prise en charge claire du diabète, de la thyroïde et du
            métabolisme.
          </h1>
          <p className="hero-lead">
            Le cabinet du Dr Sonia Abahou reçoit les patients pour le suivi du
            diabète, des troubles thyroïdiens, de la nutrition médicale, des
            troubles hormonaux et des maladies métaboliques.
          </p>
          <div className="brand-signature-card" aria-label="Signature du cabinet">
            <Image
              src="/dr-sonia-logo-cropped.png"
              alt="Logo Dr Abahou Sonia"
              width={244}
              height={210}
              sizes="244px"
            />
            <div>
              <span>Cabinet Dr Abahou Sonia</span>
            <strong>Endocrinologie & maladies métaboliques.</strong>
            </div>
          </div>
          <div className="hero-actions" aria-label="Actions rapides">
            <a className="primary-button" href={phoneHref}>
              Appeler le cabinet
            </a>
            <a className="secondary-button" href={mapsHref} target="_blank" rel="noreferrer">
              Voir l’itinéraire
            </a>
            <Link className="video-button" href="/rendez-vous">
              Rendez-vous
            </Link>
          </div>
          <div className="trust-strip" aria-label="Informations principales">
            <span>Arabe & français</span>
            <span>Diabétologie</span>
            <span>Thyroïde</span>
            <span>Nutrition médicale</span>
          </div>
          <div className="hero-proof" aria-label="Points de confiance">
            <article>
              <span>01</span>
              <strong>Consultation spécialisée</strong>
              <p>Un suivi centré sur l’endocrinologie, le diabète et le métabolisme.</p>
            </article>
            <article>
              <span>02</span>
              <strong>Explications claires</strong>
              <p>Des décisions médicales expliquées simplement, avec des mots accessibles.</p>
            </article>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait du Dr Sonia Abahou">
          <Image
            className="hero-monogram-watermark"
            src="/dr-sonia-monogram.png"
              alt=""
              width={420}
              height={260}
              sizes="(max-width: 760px) 80vw, 420px"
            aria-hidden="true"
          />
          <div className="halo-disc" />
          <div className="pulse-orbit orbit-a" />
          <div className="pulse-orbit orbit-b" />
          <div className="metabolic-sphere">
            <span />
            <span />
            <span />
          </div>
          <div className="portrait-card">
            <Image
              src="/dr-sonia-abahou.jpg"
              alt="Portrait du Dr Sonia Abahou, endocrinologue à Témara"
              width={420}
              height={470}
              priority
              sizes="(max-width: 760px) 88vw, 420px"
            />
            <div className="portrait-caption">
              <span>Dr Sonia Abahou</span>
              <strong>Endocrinologie · Diabétologie · Nutrition</strong>
            </div>
          </div>
          <div className="doctor-status-card">
            <span>Cabinet à Témara</span>
            <strong>Massira I</strong>
            <p>Accueil sur rendez-vous confirmé par le cabinet.</p>
          </div>
          <div className="floating-card card-glucose">
            <span>Diabète</span>
            <strong>Suivi structuré</strong>
          </div>
          <div className="floating-card card-thyroid">
            <span>Thyroïde</span>
            <strong>Bilan & orientation</strong>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Spécialités du cabinet">
        <div>
          <span>Diabète</span>
          <span>Thyroïde</span>
          <span>Nutrition</span>
            <span>Obésité</span>
            <span>Métabolisme</span>
            <span>Éducation thérapeutique</span>
            <span>Diabète</span>
            <span>Thyroïde</span>
            <span>Nutrition</span>
            <span>Hypoglycémies</span>
            <span>Métabolisme</span>
            <span>Éducation thérapeutique</span>
        </div>
      </section>

      <section id="expertise" className="section-shell split-section reveal-section">
        <div>
          <p className="eyebrow">Parcours médical</p>
          <h2>Un parcours médical présenté avec clarté.</h2>
          <p className="section-text">
            Les informations essentielles du cabinet sont réunies pour permettre
            au patient d’identifier rapidement les domaines de consultation et
            les modalités de prise de contact.
          </p>
          <Link className="text-link" href={doctorProfilePath}>
            Découvrir le parcours du Dr Sonia Abahou
          </Link>
        </div>
        <div className="credential-grid">
          {doctorCredentials.map((item) => (
            <article key={item} className="credential-card">
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell promise-section reveal-section">
        <div className="promise-card">
          <p className="eyebrow">Approche du cabinet</p>
          <h2>Écoute, explications et suivi médical.</h2>
          <p>
            Face au diabète, à un trouble thyroïdien ou à un déséquilibre
            hormonal, la consultation permet de faire le point sur les symptômes,
            les examens et les objectifs du suivi médical.
          </p>
        </div>
        <div className="journey-grid">
          {patientJourney.map((item, index) => (
            <article key={item.title} className="journey-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell signature-section reveal-section">
        <div className="signature-visual" aria-hidden="true">
          <span className="signature-ring" />
          <span className="signature-line line-a" />
          <span className="signature-line line-b" />
          <span className="signature-dot dot-a" />
          <span className="signature-dot dot-b" />
        </div>
        <div className="signature-copy">
          <p className="eyebrow">Signature médicale</p>
          <h2>Une consultation qui transforme l’inquiétude en compréhension.</h2>
          <p>
            Le cabinet met l’accent sur une médecine lisible : comprendre les
            symptômes, interpréter les bilans, expliquer les objectifs et avancer
            avec un plan de suivi réaliste.
          </p>
        </div>
      </section>

      <section id="soins" className="section-shell care-section reveal-section">
        <div className="section-heading">
          <p className="eyebrow">Consultations & suivis</p>
          <h2>Les motifs pris en charge au cabinet.</h2>
          <p>
            Les principaux domaines de consultation sont présentés de façon
            simple afin d’orienter le patient vers le bon suivi médical.
          </p>
        </div>
        <div className="care-grid">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`care-card ${service.visualClass} ${
                index === 0 ? "care-card-featured" : ""
              }`}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link className="text-link" href={`/${service.slug}`}>
                En savoir plus
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="pratiques" className="section-shell practice-section">
        <div className="practice-heading reveal-section">
          <div>
            <p className="eyebrow">Pratique au cabinet</p>
            <h2>Des actes et des temps de soin qui prolongent la consultation.</h2>
          </div>
          <p>
            Le cabinet associe expertise endocrinologique, outils de suivi et
            éducation thérapeutique pour rendre chaque étape plus concrète et plus
            compréhensible.
          </p>
        </div>

        <div className="practice-stack">
          {clinicalActivities.map((activity, index) => (
            <article
              id={activity.id}
              key={activity.id}
              className="practice-feature reveal-section"
            >
              <figure
                className={`practice-media ${
                  activity.id === "impedancemetrie-medicale"
                    ? "practice-media-biody"
                    : ""
                } ${activity.image ? "" : "practice-media-dashboard"}`}
              >
                {activity.image ? (
                  <Image
                    src={activity.image}
                    alt={activity.alt}
                    width={1600}
                    height={1067}
                    loading="lazy"
                    sizes="(max-width: 820px) 94vw, 50vw"
                  />
                ) : (
                  <CgmDemoDashboard />
                )}
                <figcaption>Visuel illustratif</figcaption>
                <span className="practice-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </figure>

              <div className="practice-content">
                <p className="practice-eyebrow">{activity.eyebrow}</p>
                <h3>{activity.title}</h3>
                <p className="practice-description">{activity.description}</p>
                <ul className="practice-highlights">
                  {activity.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <p className="practice-note">{activity.note}</p>
                <Link className="text-link" href="/rendez-vous">
                  Contacter le cabinet
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell faq-section reveal-section">
        <div className="section-heading">
          <p className="eyebrow">Questions fréquentes</p>
          <h2>Informations pratiques avant la consultation.</h2>
          <p>
            Ces réponses restent générales et seront ajustées avec les consignes
            précises du cabinet dès qu’elles seront disponibles.
          </p>
        </div>
        <div className="faq-grid">
          {faqItems.map((item) => (
            <article key={item.question} className="faq-card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell gallery-section reveal-section">
        <div className="section-heading">
          <p className="eyebrow">Le cabinet en images</p>
          <h2>Un aperçu visuel du cadre de consultation.</h2>
          <p>
            Ces visuels sont illustratifs et pourront être remplacés par les
            photos réelles du cabinet dès qu’elles seront disponibles.
          </p>
        </div>
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <figure
              key={image.src}
              className={index === 0 ? "gallery-card gallery-large" : "gallery-card"}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={720}
                loading="lazy"
                sizes={
                  index === 0
                    ? "(max-width: 760px) 92vw, 58vw"
                    : "(max-width: 760px) 92vw, 29vw"
                }
              />
              <figcaption>
                <span>{image.label}</span>
                <strong>{image.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="diagnostic-band">
        <div className="signal-line" />
        <div>
          <p>Approche médicale</p>
          <h2>Écouter, expliquer, suivre.</h2>
        </div>
        <p>
          Parce qu’un traitement fonctionne mieux quand le patient comprend ce
          qui se passe dans son corps, le cabinet met la pédagogie au cœur de la
          consultation.
        </p>
      </section>

      <section id="cabinet" className="section-shell cabinet-section reveal-section">
        <div className="glass-panel">
          <p className="eyebrow">Accès au cabinet</p>
          <h2>Cabinet situé à Massira I, Témara.</h2>
          <p>{clinicAddress}</p>
          <div className="contact-actions">
            <a
              className="primary-button"
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir l’itinéraire GPS
            </a>
            <a className="secondary-button" href={phoneHref}>
              Fixe · {clinicPhoneDisplay}
            </a>
            <a className="secondary-button" href={secondaryPhoneHref}>
              Portable · {clinicSecondaryPhoneDisplay}
            </a>
          </div>
        </div>
        <div className="map-card google-map-card" aria-label="Carte Google Maps du cabinet">
          <iframe
            className="google-map-frame"
            src={mapsEmbedHref}
            title="Carte Google Maps du cabinet Dr Abahou Sonia à Témara"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="map-overlay">
            <span>GPS</span>
            <strong>Massira I · Témara</strong>
            <a href={mapsHref} target="_blank" rel="noreferrer">
              Voir sur Google Maps
            </a>
          </div>
        </div>
        <div className="hours-panel">
          <h3>Horaires d’ouverture</h3>
          <div className="hours-list">
            {hours.map(([day, time]) => (
              <div key={day}>
                <span>{day}</span>
                <strong>{time}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="final-cta section-shell reveal-section">
        <div>
          <p className="eyebrow">Rendez-vous</p>
          <h2>Contacter le cabinet simplement.</h2>
          <p>
            Pour confirmer les disponibilités, contactez le cabinet par
            téléphone. En cas d’urgence vitale, contactez immédiatement les
            services d’urgence.
          </p>
        </div>
        <div className="cta-stack">
          <Link className="primary-button" href="/rendez-vous">
            Rendez-vous
          </Link>
          <a className="secondary-button" href={mapsHref} target="_blank" rel="noreferrer">
            Voir l’itinéraire
          </a>
        </div>
      </section>

      <section className="section-shell teleconsultation-teaser reveal-section">
        <div>
          <p className="eyebrow">Rendez-vous</p>
          <h2>Choisir entre cabinet et visioconférence.</h2>
          <p>
            Pour une consultation au cabinet, contactez le secrétariat par appel
            ou WhatsApp. La consultation vidéo est en cours de préparation et
            sera proposée dès que le parcours de réservation sera finalisé.
          </p>
        </div>
        <Link className="primary-button" href="/rendez-vous">
          Rendez-vous
        </Link>
      </section>

      <footer className="site-footer section-shell">
        <div>
          <Image
            className="footer-logo"
            src="/dr-sonia-logo-cropped.png"
            alt="Logo Dr Abahou Sonia"
            width={132}
            height={114}
            sizes="132px"
          />
          <strong>Dr Sonia Abahou</strong>
          <p>
            Site d’information du cabinet. Les contenus ne remplacent pas une
            consultation médicale.
          </p>
        </div>
        <div className="footer-actions">
          <SocialTooltip items={socialLinks} />
          <nav aria-label="Liens du site">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/confidentialite">Confidentialité</Link>
            <Link href="/cookies">Cookies</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
