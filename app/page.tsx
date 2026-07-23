import Image from "next/image";
import Link from "next/link";
import {
  absoluteUrl,
  clinicAddress,
  clinicPhoneDisplay,
  clinicPhoneInternational,
  clinicPostalCode,
  clinicStreetAddress,
  faqItems,
  mapsQuery,
  services,
  siteName,
  siteUrl,
} from "./seo";

const phoneHref = `tel:${clinicPhoneInternational}`;
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  mapsQuery,
)}`;

const credentials = [
  "Spécialiste en Diabétologie, Endocrinologie, Nutrition et Maladies Métaboliques",
  "Ancien médecin à l’hôpital Ibn Sina de Rabat",
  "Ancien médecin attaché à l’hôpital militaire de Rabat",
  "Ancienne secrétaire générale de la SMEDIAN",
];

const hours = [
  ["Lundi", "10:00 — 17:00"],
  ["Mardi", "10:00 — 15:00"],
  ["Mercredi", "10:00 — 17:00"],
  ["Jeudi", "10:00 — 15:00"],
  ["Vendredi", "10:00 — 17:00"],
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Physician", "MedicalClinic"],
  "@id": `${siteUrl}/#clinic`,
  name: "Dr Sonia Abahou",
  alternateName: siteName,
  description:
    "Cabinet d’endocrinologie, diabétologie, nutrition et maladies métaboliques à Témara.",
  image: absoluteUrl("/dr-sonia-abahou.jpg"),
  logo: absoluteUrl("/favicon.svg"),
  url: `${siteUrl}/`,
  telephone: clinicPhoneInternational,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinicStreetAddress,
    postalCode: clinicPostalCode,
    addressLocality: "Témara",
    addressCountry: "MA",
  },
  areaServed: ["Témara", "Rabat", "Skhirat", "Harhoura"],
  availableLanguage: ["fr", "ar"],
  medicalSpecialty: [
    "Endocrinology",
    "Nutrition",
    "Diabetes",
  ],
  availableService: services.map((service) => ({
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.text,
    url: absoluteUrl(`/${service.slug}`),
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Friday"],
      opens: "10:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Thursday"],
      opens: "10:00",
      closes: "15:00",
    },
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: `${siteUrl}/`,
  inLanguage: "fr-MA",
  publisher: {
    "@id": `${siteUrl}/#clinic`,
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grain-overlay" />

      <header className="site-header">
        <a className="brand-mark" href="#accueil" aria-label="Accueil">
          <span>SA</span>
          <strong>Dr Sonia Abahou</strong>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#expertise">Expertise</a>
          <a href="#soins">Soins</a>
          <a href="#cabinet">Cabinet</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href={phoneHref}>
          Rendez-vous
        </a>
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
          <div className="hero-actions" aria-label="Actions rapides">
            <a className="primary-button" href={phoneHref}>
              Appeler le cabinet
            </a>
            <a className="secondary-button" href={mapsHref} target="_blank" rel="noreferrer">
              Voir l’itinéraire
            </a>
          </div>
          <div className="trust-strip" aria-label="Informations principales">
            <span>Arabe & français</span>
            <span>Diabétologie</span>
            <span>Thyroïde</span>
            <span>Nutrition médicale</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait du Dr Sonia Abahou">
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
            />
            <div className="portrait-caption">
              <span>Dr Sonia Abahou</span>
              <strong>Endocrinologie · Diabétologie · Nutrition</strong>
            </div>
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
          <span>SOPK</span>
          <span>Métabolisme</span>
          <span>Hormones</span>
          <span>Diabète</span>
          <span>Thyroïde</span>
          <span>Nutrition</span>
          <span>SOPK</span>
          <span>Métabolisme</span>
          <span>Hormones</span>
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
        </div>
        <div className="credential-grid">
          {credentials.map((item) => (
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
              className={`care-card ${service.visualClass}`}
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
              {clinicPhoneDisplay}
            </a>
          </div>
        </div>
        <div className="map-card" aria-label="Accès GPS du cabinet">
          <div className="map-illustration" aria-hidden="true">
            <span className="map-neighborhood massira">Cité Massira I</span>
            <span className="map-neighborhood temara">Témara</span>
            <span className="map-road road-main" />
            <span className="map-road road-secondary" />
            <span className="map-road road-tertiary" />
            <span className="map-route route-a" />
            <span className="map-route route-b" />
            <span className="map-route route-c" />
            <span className="map-pin">
              <span>SA</span>
            </span>
            <span className="map-distance">13 av. Moulay Ali Chérif</span>
          </div>
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
            Pour confirmer les disponibilités, contactez le cabinet par appel ou
            téléphone. En cas d’urgence vitale, contactez immédiatement les
            services d’urgence.
          </p>
        </div>
        <div className="cta-stack">
          <a className="primary-button" href={phoneHref}>
            Appeler le cabinet
          </a>
          <a className="secondary-button" href={mapsHref} target="_blank" rel="noreferrer">
            Voir l’itinéraire
          </a>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <div>
          <strong>Dr Sonia Abahou</strong>
          <p>
            Site d’information du cabinet. Les contenus ne remplacent pas une
            consultation médicale.
          </p>
        </div>
        <nav aria-label="Liens du site">
          {services.map((service) => (
            <Link key={service.slug} href={`/${service.slug}`}>
              {service.title}
            </Link>
          ))}
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
          <Link href="/cookies">Cookies</Link>
        </nav>
      </footer>
    </main>
  );
}
