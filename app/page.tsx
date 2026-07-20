const phoneDisplay = "0661 26 03 45";
const phoneHref = "tel:+212661260345";
const whatsappHref = "https://wa.me/212661260345";
const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=13%20avenue%20Moulay%20Ali%20Ch%C3%A9rif%20appt%202%20Cit%C3%A9%20Massira%20I%20T%C3%A9mara";

const services = [
  "Diabète type 1, type 2 et diabète gestationnel",
  "Thyroïde, goitre, nodules et cancers thyroïdiens",
  "Nutrition, obésité et maladies métaboliques",
  "SOPK, hyperandrogénie, puberté précoce ou retardée",
  "Pathologies surrénaliennes, hypophysaires et parathyroïdiennes",
  "Hyperprolactinémie, hypoglycémies et troubles hormonaux",
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
    title: "Un espace calme dès l’arrivée",
  },
  {
    src: "/cabinet-consultation.png",
    alt: "Illustration photoréaliste d’un bureau de consultation endocrinologique",
    label: "Consultation",
    title: "Des examens et suivis structurés",
  },
  {
    src: "/cabinet-nutrition.png",
    alt: "Illustration photoréaliste d’un suivi nutritionnel et métabolique",
    label: "Nutrition",
    title: "Prévention, équilibre et métabolisme",
  },
];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

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
          Appeler
        </a>
      </header>

      <section id="accueil" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Cabinet d’endocrinologie à Témara</p>
          <h1>
            Une prise en charge hormonale, métabolique et nutritionnelle claire,
            humaine et précise.
          </h1>
          <p className="hero-lead">
            Le cabinet du Dr Sonia Abahou accompagne les patients dans le suivi
            du diabète, de la thyroïde, de la nutrition et des troubles
            endocriniens avec une approche rigoureuse et rassurante.
          </p>
          <div className="hero-actions" aria-label="Actions rapides">
            <a className="primary-button" href={phoneHref}>
              Prendre rendez-vous
            </a>
            <a className="secondary-button" href={whatsappHref}>
              WhatsApp
            </a>
          </div>
          <div className="trust-strip" aria-label="Informations principales">
            <span>Endocrinologie</span>
            <span>Diabétologie</span>
            <span>Nutrition</span>
            <span>Maladies métaboliques</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait du Dr Sonia Abahou">
          <div className="pulse-orbit orbit-a" />
          <div className="pulse-orbit orbit-b" />
          <div className="portrait-card">
            <img
              src="/dr-sonia-abahou.jpg"
              alt="Portrait du Dr Sonia Abahou, endocrinologue à Témara"
            />
            <div className="portrait-caption">
              <span>Dr Sonia Abahou</span>
              <strong>Endocrinologue — Diabétologue</strong>
            </div>
          </div>
          <div className="floating-card card-glucose">
            <span>Suivi diabète</span>
            <strong>Type 1 & 2</strong>
          </div>
          <div className="floating-card card-thyroid">
            <span>Thyroïde</span>
            <strong>Bilan & suivi</strong>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Spécialités du cabinet">
        <div>
          <span>Diabète</span>
          <span>Thyroïde</span>
          <span>Nutrition</span>
          <span>SOPK</span>
          <span>Maladies métaboliques</span>
          <span>Endocrinologie</span>
        </div>
      </section>

      <section id="expertise" className="section-shell split-section">
        <div>
          <p className="eyebrow">Parcours médical</p>
          <h2>Un profil d’expertise pour des décisions médicales nettes.</h2>
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

      <section id="soins" className="section-shell care-section">
        <div className="section-heading">
          <p className="eyebrow">Consultations & suivis</p>
          <h2>Les principaux motifs pris en charge au cabinet.</h2>
          <p>
            Une vitrine pensée pour rassurer dès les premières secondes:
            expertise visible, parcours simple, contact immédiat.
          </p>
        </div>
        <div className="care-grid">
          {services.map((service, index) => (
            <article key={service} className="care-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell gallery-section">
        <div className="section-heading">
          <p className="eyebrow">Le cabinet en images</p>
          <h2>Une ambiance médicale premium, claire et rassurante.</h2>
          <p>
            Visuels illustratifs temporaires pour donner de la présence au site.
            Ils pourront être remplacés par les vraies photos du cabinet dès
            qu’elles seront disponibles.
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
          <h2>Écouter, expliquer, suivre — sans jargon inutile.</h2>
        </div>
        <p>
          Arabe et français parlés au cabinet pour faciliter la compréhension,
          l’adhésion au traitement et le suivi dans la durée.
        </p>
      </section>

      <section id="cabinet" className="section-shell cabinet-section">
        <div className="glass-panel">
          <p className="eyebrow">Informations pratiques</p>
          <h2>Cabinet situé à Massira I, Témara.</h2>
          <p>
            13, avenue Moulay Ali Chérif, appartement n°2, Cité Massira I,
            12020, Témara.
          </p>
          <div className="contact-actions">
            <a className="primary-button" href={mapsHref}>
              Obtenir l’itinéraire
            </a>
            <a className="secondary-button" href={phoneHref}>
              {phoneDisplay}
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

      <section id="contact" className="final-cta section-shell">
        <div>
          <p className="eyebrow">Rendez-vous</p>
          <h2>Un contact direct, visible et rassurant.</h2>
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
    </main>
  );
}
