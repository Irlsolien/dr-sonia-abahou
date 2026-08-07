import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { MapEmbed } from "../components/MapEmbed";
import { MobileActionBar } from "../components/MobileActionBar";
import { CgmDemoDashboard } from "../components/CgmDemoDashboard";
import { PhoneIcon, WhatsAppIcon } from "../components/Icons";
import {
  absoluteUrl,
  appointment,
  clinicAddress,
  clinicalActivities,
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
  gallery,
  googleMapsPlaceUrl,
  googleRatingFillWidth,
  googleReviews,
  lastModified,
  mapsQuery,
  openingHours,
  patientJourney,
  services,
  siteName,
  siteUrl,
} from "../seo";
import { clinicEntities, entityNodes, speakableSpecification } from "../geo";

const phoneHref = `tel:${clinicPhoneInternational}`;
const secondaryPhoneHref = `tel:${clinicSecondaryPhoneInternational}`;
const mapsHref = googleMapsPlaceUrl;
const mapsEmbedHref = `https://www.google.com/maps?q=${encodeURIComponent(
  mapsQuery,
)}&output=embed`;
const whatsappHref = `https://wa.me/${appointment.whatsappPhone}?text=${encodeURIComponent(
  appointment.whatsappMessage,
)}`;

/* Horaires : source unique dans `app/seo.ts`, partagée avec les données
   structurées, le bloc « En bref » et les fichiers `llms.txt`. */
const hours = openingHours;

const arPageUrl = `${siteUrl}/ar`;

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
        url: absoluteUrl("/dr-sonia-logo-cropped.webp"),
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
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.928046,
        longitude: -6.8987233,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: clinicPhoneInternational,
          contactType: "Prise de rendez-vous",
          areaServed: clinicCountry,
          /* Le site est publié en français et en arabe : les deux langues sont
             déclarées de façon identique sur les deux versions. */
          availableLanguage: ["fr", "ar"],
        },
        {
          "@type": "ContactPoint",
          telephone: clinicSecondaryPhoneInternational,
          contactType: "Téléphone portable et WhatsApp du cabinet",
          areaServed: clinicCountry,
          availableLanguage: ["fr", "ar"],
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
      /* Ancrage d'entités : chaque concept est relié à son identifiant
         Wikidata et à ses articles Wikipédia (cf. `app/geo.ts`), afin qu'un
         moteur de réponse rattache le cabinet aux mêmes entités que celles de
         son propre graphe de connaissances. */
      knowsAbout: entityNodes(clinicEntities, "fr"),
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
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Paris V",
      },
      /* Reprise stricte de la légende de la photographie publiée dans la
         section « Signature médicale » : aucune distinction supplémentaire
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
      memberOf: [
        {
          "@type": "Organization",
          name: "Global Metabolic Health Alliance",
          url: "https://gmha.global",
        },
        {
          "@type": "Organization",
          name: "Pan Arab Society for Interventional Endocrinology and Diabetes Technology",
        },
      ],
      /* Mêmes entités que le cabinet : la docteure est reliée aux concepts
         médicaux par leurs identifiants publics, pas seulement par des mots. */
      knowsAbout: entityNodes(clinicEntities, "fr"),
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
      /* Contenu de santé : qui l'a relu, et quand. C'est ce que les moteurs de
         réponse citent pour justifier la fiabilité d'une source médicale. */
      lastReviewed: lastModified,
      reviewedBy: {
        "@id": `${absoluteUrl(doctorProfilePath)}#doctor`,
      },
      /* Passages lisibles à voix haute par un assistant vocal. */
      speakable: speakableSpecification,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      /* Page jumelle arabe, déclarée dans les deux sens (l'accueil arabe
         porte la relation inverse). */
      workTranslation: {
        "@id": `${arPageUrl}#webpage`,
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
      inLanguage: "fr-MA",
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
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />

      <MobileActionBar />

      <section id="accueil" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Endocrinologue diabétologue à Témara</p>
          <h1>
            Une prise en charge claire du diabète, de la thyroïde et du
            métabolisme à Témara.
          </h1>
          <p className="hero-lead">
            Le cabinet du Dr Sonia Abahou reçoit les patients pour le suivi du
            diabète, des troubles thyroïdiens, de la nutrition médicale, des
            troubles hormonaux et des maladies métaboliques.
          </p>
          {/* Les trois actions passent avant la carte signature : elles
              doivent rester visibles sans défilement sur un écran d'ordinateur
              portable (1440 × 900). */}
          <div className="hero-actions" role="group" aria-label="Actions rapides">
            <Link className="primary-button" href="/rendez-vous">
              Prendre rendez-vous
            </Link>
            <a className="secondary-button" href={phoneHref}>
              <PhoneIcon />
              Appeler le cabinet
            </a>
            <a
              className="secondary-button whatsapp-button"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
          {/* Réassurance : horaires validés du cabinet et modalité de
              confirmation déjà annoncée. Aucun délai de réponse promis. */}
          <p className="hero-reassurance">
            Secrétariat joignable du lundi au vendredi · Rendez-vous confirmé
            par le cabinet.
          </p>
          <div
            className="brand-signature-card"
            role="group"
            aria-label="Signature du cabinet"
          >
            <Image
              src="/dr-sonia-monogram-clean.webp"
              alt=""
              width={200}
              height={180}
              sizes="(max-width: 640px) 112px, 88px"
            />
            <div>
              <span>Cabinet Dr Abahou Sonia</span>
              <strong>Endocrinologie et maladies métaboliques.</strong>
            </div>
          </div>
        </div>

        {/* Conteneur décoratif : le portrait porte déjà son texte alternatif,
            un aria-label ici serait redondant et sans rôle porteur. */}
        <div className="hero-visual">
          {/* Filigrane purement décoratif : peint en image de fond CSS
              (cf. `.hero-monogram-watermark`) pour ne jamais concurrencer le
              portrait sur le chemin de rendu du héros. */}
          <div className="hero-monogram-watermark" aria-hidden="true" />
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
              src="/dr-sonia-abahou.webp"
              alt="Portrait du Dr Sonia Abahou, endocrinologue à Témara"
              width={420}
              height={470}
              priority
              fetchPriority="high"
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
            <strong>Bilan et orientation</strong>
          </div>
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

      <section className="section-shell approach-flow-section reveal-section">
        <div className="approach-flow-head">
          <p className="eyebrow approach-flow-eyebrow">Approche du cabinet</p>
          <h2>Écoute, explications et suivi médical.</h2>
          <p className="approach-flow-lede">
            Face au diabète, à un trouble thyroïdien ou à un déséquilibre
            hormonal, la consultation permet de faire le point sur les symptômes,
            les examens et les objectifs du suivi médical.
          </p>
        </div>
        <div className="approach-flow-track">
          <div className="approach-flow-line" aria-hidden="true" />
          <ol className="approach-flow-steps">
            {patientJourney.map((item, index) => (
              <li key={item.title} className="approach-flow-step">
                <div className="approach-flow-node">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-shell signature-section reveal-section">
        <div className="signature-visual">
          <Image
            src="/dr-abahou-trophee-diabete.webp"
            alt='Le Dr Sonia Abahou recevant une distinction "Tous Unis Contre le Diabète" lors d’un congrès de diabétologie'
            width={800}
            height={1062}
            loading="lazy"
            sizes="(max-width: 980px) 92vw, 38vw"
          />
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
          <h2>Les motifs pris en charge au cabinet.</h2>
        </div>
        <div className="care-index">
          {services.map((service, index) => (
            <Link
              key={service.title}
              className="care-row"
              href={`/${service.slug}`}
            >
              <span className="care-row-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="care-row-copy">
                <span className="care-row-title-wrap">
                  <h3 className="care-row-title">{service.title}</h3>
                </span>
                <p className="care-row-description">{service.text}</p>
              </span>
              <span className="care-row-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="pratiques" className="section-shell practice-section">
        <div className="practice-heading reveal-section">
          <h2>Des actes et des temps de soin qui prolongent la consultation.</h2>
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
                {!activity.image && <figcaption>Aperçu du suivi</figcaption>}
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
        <div className="section-heading faq-heading">
          <h2>Informations pratiques avant la consultation.</h2>
        </div>
        <div className="faq-grid">
          {faqItems.map((item) => (
            <details key={item.question} className="faq-card">
              <summary>
                <span>{item.question}</span>
                <i aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section id="avis" className="section-shell reviews-section reveal-section">
        <div className="reviews-wrap">
          <p className="eyebrow reviews-eyebrow">Avis Google</p>
          <h2 className="reviews-title">Ce que disent les patients.</h2>
          {/* Rangée fidèle à la note réelle : quatre étoiles pleines et une
              étoile remplie à hauteur de la moyenne Google (4,2 / 5). */}
          <p className="reviews-stars">
            <span
              className="reviews-stars-meter"
              role="img"
              aria-label={`Note moyenne de ${googleReviews.averageRating} sur 5`}
            >
              <span aria-hidden="true">★★★★★</span>
              <span
                className="reviews-stars-fill"
                style={{ width: googleRatingFillWidth }}
                aria-hidden="true"
              >
                ★★★★★
              </span>
            </span>
          </p>

          <blockquote className="reviews-quote">
            <span className="reviews-mark" aria-hidden="true">
              «
            </span>{" "}
            {googleReviews.featured.text}{" "}
            <span className="reviews-mark" aria-hidden="true">
              »
            </span>
          </blockquote>

          <p className="reviews-credit">
            {googleReviews.featured.author ? (
              <>
                <span>{googleReviews.featured.author}</span>
                <span aria-hidden="true">·</span>
              </>
            ) : null}
            <span>Avis Google</span>
            <span aria-hidden="true">·</span>
            <span>{googleReviews.featured.date}</span>
          </p>

          <div className="reviews-signature">
            {googleReviews.items.map((item) => (
              <div className="reviews-micro" key={item.author}>
                <span className="reviews-micro-stars" aria-label="5 étoiles sur 5">
                  ★★★★★
                </span>
                {/* Espaces insécables autour des guillemets français : le
                    chevron fermant ne doit jamais rester seul sur sa ligne. */}
                <p className="reviews-micro-quote">{`« ${item.excerpt} »`}</p>
                {/* La mention de traduction qualifie la citation : elle la
                    suit immédiatement, ce qui laisse les noms d'auteur alignés
                    sur une même ligne de base d'une colonne à l'autre. */}
                {item.translated ? (
                  <p className="reviews-translated">Traduit de l’arabe</p>
                ) : null}
                <p className="reviews-micro-name">{item.author}</p>
              </div>
            ))}
          </div>

          <div className="reviews-cta">
            <p className="reviews-average">
              <span className="reviews-average-star" aria-hidden="true">
                ★
              </span>
              <strong>{googleReviews.averageRating}</strong> sur 5 ·{" "}
              {googleReviews.reviewCount} avis publiés sur Google
            </p>
            <a
              className="secondary-button"
              href={googleReviews.sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              Voir les avis sur Google
            </a>
            <p className="reviews-disclaimer">
              Extraits d’avis Google publics, cités sans modification.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell gallery-section reveal-section">
        <div className="section-heading">
          <h2>Découvrez les espaces du cabinet.</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((image) => (
            <figure key={image.src} className={`gallery-card ${image.variant}`}>
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={720}
                loading="lazy"
                sizes={image.sizes}
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
              <PhoneIcon />
              Fixe · {clinicPhoneDisplay}
            </a>
            <a className="secondary-button" href={secondaryPhoneHref}>
              <PhoneIcon />
              Portable · {clinicSecondaryPhoneDisplay}
            </a>
            <a
              className="secondary-button whatsapp-button"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </div>
        <div
          className="map-card google-map-card"
          role="group"
          aria-label="Carte Google Maps du cabinet"
        >
          <MapEmbed
            embedSrc={mapsEmbedHref}
            mapsHref={mapsHref}
            title="Carte Google Maps du cabinet Dr Abahou Sonia à Témara"
            address={clinicAddress}
          />
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

      <section
        id="contact"
        className="final-cta final-cta-dark section-shell reveal-section"
      >
        <div>
          <p className="eyebrow">Rendez-vous</p>
          <h2>Contacter le cabinet simplement.</h2>
          <p>
            Pour une consultation au cabinet, contactez le secrétariat par appel
            ou WhatsApp afin de confirmer les disponibilités. La consultation
            vidéo est en cours de préparation et sera proposée dès que le
            parcours de réservation sera finalisé. En cas d’urgence vitale,
            contactez immédiatement les services d’urgence.
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

      <SiteFooter />
    </main>
  );
}
