const phoneDisplay = "0661 26 03 45";
const phoneHref = "tel:+212661260345";
const whatsappHref = "https://wa.me/212661260345";
const cabinetAddress =
  "13, avenue Moulay Ali Chérif, appartement n°2, Cité Massira I, 12020 Témara";
const mapsQuery =
  "13 avenue Moulay Ali Cherif appartement 2 Cite Massira I Temara";
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  mapsQuery,
)}`;

const services = [
  {
    title: "Diabète et équilibre glycémique",
    text: "Suivi du diabète de type 1, type 2, diabète gestationnel et situations de déséquilibre glycémique.",
    visualClass: "care-diabetes",
  },
  {
    title: "Thyroïde, goitre et nodules",
    text: "Bilan, surveillance et orientation dans les troubles thyroïdiens, nodules, goitre et cancers thyroïdiens.",
    visualClass: "care-thyroid",
  },
  {
    title: "Nutrition et maladies métaboliques",
    text: "Accompagnement médical autour du poids, du métabolisme, de l’insulinorésistance et de la prévention.",
    visualClass: "care-nutrition",
  },
  {
    title: "Troubles hormonaux féminins",
    text: "Prise en charge du SOPK, de l’hyperandrogénie, de l’hirsutisme et des troubles de la puberté.",
    visualClass: "care-hormones",
  },
  {
    title: "Surrénales, hypophyse, parathyroïdes",
    text: "Exploration et suivi des pathologies endocriniennes complexes avec pédagogie et méthode.",
    visualClass: "care-endocrine",
  },
  {
    title: "Suivi dans la durée",
    text: "Des décisions expliquées simplement, pour que le patient comprenne son traitement et avance sereinement.",
    visualClass: "care-followup",
  },
];

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
    src: "/cabinet-accueil.png",
    alt: "Illustration photoréaliste d’un accueil de cabinet médical moderne",
    label: "Accueil",
    title: "Une première impression calme, claire, rassurante.",
  },
  {
    src: "/cabinet-consultation.png",
    alt: "Illustration photoréaliste d’un bureau de consultation endocrinologique",
    label: "Consultation",
    title: "Un espace pensé pour écouter, examiner et expliquer.",
  },
  {
    src: "/cabinet-nutrition.png",
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

export default function Home() {
  return (
    <main>
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
            Ici, on soigne aussi la part d’inquiétude qui vient avec le
            diagnostic.
          </h1>
          <p className="hero-lead">
            Le cabinet du Dr Sonia Abahou accompagne chaque patient avec une
            médecine précise, attentive et compréhensible : diabète, thyroïde,
            nutrition, troubles hormonaux et maladies métaboliques.
          </p>
          <div className="hero-actions" aria-label="Actions rapides">
            <a className="primary-button" href={phoneHref}>
              Appeler le cabinet
            </a>
            <a className="secondary-button" href={whatsappHref}>
              Écrire sur WhatsApp
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
            <img
              src="/dr-sonia-abahou.jpg"
              alt="Portrait du Dr Sonia Abahou, endocrinologue à Témara"
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
          <h2>Une expertise solide, présentée avec simplicité.</h2>
          <p className="section-text">
            Un bon site médical ne doit pas impressionner pour impressionner. Il
            doit d’abord transmettre une sensation essentielle : “je suis entre
            de bonnes mains”.
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
          <p className="eyebrow">La promesse du cabinet</p>
          <h2>Des explications claires. Des décisions médicales posées.</h2>
          <p>
            Face au diabète, à un trouble thyroïdien ou à un déséquilibre
            hormonal, beaucoup de patients arrivent avec des résultats, des
            doutes et parfois de la peur. Le rôle du cabinet est de transformer
            cette confusion en plan de suivi clair, humain et réaliste.
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
            Le contenu est volontairement clair : un patient doit comprendre en
            quelques secondes si le cabinet peut l’aider.
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
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell gallery-section reveal-section">
        <div className="section-heading">
          <p className="eyebrow">Le cabinet en images</p>
          <h2>Une présence visuelle premium, sans perdre la chaleur humaine.</h2>
          <p>
            Ces images sont illustratives et servent à donner une direction
            visuelle. Elles pourront être remplacées par les vraies photos du
            cabinet pour une version finale encore plus authentique.
          </p>
        </div>
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <figure
              key={image.src}
              className={index === 0 ? "gallery-card gallery-large" : "gallery-card"}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
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
          <p>{cabinetAddress}</p>
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
              {phoneDisplay}
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
          <h2>Un site pensé pour rassurer avant même le premier appel.</h2>
          <p>
            Pour confirmer les disponibilités, contactez le cabinet par appel ou
            WhatsApp. En cas d’urgence vitale, contactez immédiatement les
            services d’urgence.
          </p>
        </div>
        <div className="cta-stack">
          <a className="primary-button" href={phoneHref}>
            Appeler le cabinet
          </a>
          <a className="secondary-button" href={whatsappHref}>
            Écrire sur WhatsApp
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
        <nav aria-label="Liens légaux">
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/confidentialite">Confidentialité</a>
          <a href="/cookies">Cookies</a>
        </nav>
      </footer>
    </main>
  );
}
