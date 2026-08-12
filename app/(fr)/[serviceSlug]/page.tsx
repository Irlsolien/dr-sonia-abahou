import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import {
  MobileActionBar,
  clinicPhoneHref,
  clinicWhatsappHref,
} from "../../components/MobileActionBar";
import { PhoneIcon, WhatsAppIcon } from "../../components/Icons";
import {
  absoluteUrl,
  clinicAddress,
  clinicName,
  clinicPhoneDisplay,
  clinicSecondaryPhoneDisplay,
  doctorName,
  doctorProfilePath,
  googleMapsPlaceUrl,
  lastModified,
  services,
  serviceQuickAnswer,
  siteName,
  siteUrl,
} from "../../seo";
import { entityNodes, serviceEntities, speakableSpecification } from "../../geo";

type ServicePageProps = {
  params: Promise<{
    serviceSlug: string;
  }>;
};

const mapsHref = googleMapsPlaceUrl;
const lastModifiedLabel = new Intl.DateTimeFormat("fr-MA", {
  day: "numeric",
  month: "long",
  year: "numeric",
}).format(new Date(`${lastModified}T12:00:00+01:00`));

// Formulation reprise à l'identique du paragraphe "service-copy" ci-dessous,
// afin de garder un seul texte source pour les deux emplacements.
const preparationNote =
  "Pour préparer le rendez-vous, il est conseillé d’apporter les derniers bilans, ordonnances, comptes rendus, imageries et traitements en cours.";

const contactSteps = [
  {
    title: "Appeler ou écrire sur WhatsApp",
    text: `Fixe : ${clinicPhoneDisplay}. Portable / WhatsApp : ${clinicSecondaryPhoneDisplay}.`,
  },
  {
    title: "Convenir d’un créneau avec le secrétariat",
    text: "Le secrétariat confirme la disponibilité et les modalités pratiques du rendez-vous.",
  },
  {
    title: "Apporter vos bilans et traitements en cours",
    text: preparationNote,
  },
] as const;

function findService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = findService(serviceSlug);

  if (!service) {
    return {};
  }

  const canonical = `/${service.slug}`;
  const ogImage = `/og-${service.slug}.jpg`;

  return {
    title: service.seoTitle,
    description: service.description,
    keywords: [...service.keywords],
    alternates: {
      canonical,
      /* Page jumelle arabe : même slug, seule la langue du contenu change. */
      languages: {
        "fr-MA": canonical,
        ar: `/ar/${service.slug}`,
        /* Version servie par défaut aux visiteurs dont la langue n'est ni le
           français ni l'arabe. */
        "x-default": canonical,
      },
    },
    openGraph: {
      title: service.seoTitle,
      description: service.description,
      url: canonical,
      siteName,
      type: "website",
      locale: "fr_MA",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Dr Sonia Abahou - ${service.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.description,
      images: [absoluteUrl(ogImage)],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceSlug } = await params;
  const service = findService(serviceSlug);

  if (!service) {
    notFound();
  }

  const pageUrl = absoluteUrl(`/${service.slug}`);
  const otherServices = services.filter((item) => item.slug !== service.slug);
  const serviceFaqItems = [
    {
      question: `Que peut aborder une consultation pour ${service.title.toLowerCase()} ?`,
      answer: `${service.text} La prise en charge exacte dépend de l’histoire médicale, des symptômes et des examens disponibles.`,
    },
    {
      question: "Comment préparer la consultation ?",
      answer:
        "Il est conseillé d’apporter les bilans récents, ordonnances, comptes rendus, imageries utiles et la liste des traitements en cours, sans modifier un traitement sans avis médical.",
    },
    {
      question: "Comment prendre rendez-vous avec le cabinet ?",
      answer:
        "Le rendez-vous se confirme actuellement par téléphone ou WhatsApp auprès du cabinet du Dr Sonia Abahou à Témara.",
    },
  ];
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: `${siteUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: service.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}#webpage`,
        name: service.seoTitle,
        description: service.description,
        url: pageUrl,
        inLanguage: "fr-MA",
        dateModified: lastModified,
        /* Contenu de santé : date de relecture et médecin qui en répond. */
        lastReviewed: lastModified,
        reviewedBy: {
          "@id": `${absoluteUrl(doctorProfilePath)}#doctor`,
        },
        speakable: speakableSpecification,
        medicalAudience: "https://schema.org/Patient",
        specialty: "https://schema.org/Endocrine",
        /* Sujets de la page, reliés à leurs identifiants Wikidata et à leurs
           articles Wikipédia français et arabes (cf. `app/geo.ts`). C'est ce
           qui permet à un moteur de réponse de relier « diabète de type 2 »
           ou « سكري النوع الثاني » à cette page. */
        about: entityNodes(serviceEntities[service.slug], "fr"),
        mainEntity: {
          "@type": "MedicalProcedure",
          name: service.title,
          description: service.text,
        },
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        /* Page jumelle arabe du même motif. */
        workTranslation: {
          "@id": `${absoluteUrl(`/ar/${service.slug}`)}#webpage`,
        },
        publisher: {
          "@id": `${siteUrl}/#clinic`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/dr-sonia-abahou.jpg"),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        isPartOf: {
          "@id": `${pageUrl}#webpage`,
        },
        mainEntity: serviceFaqItems.map((item) => ({
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

  return (
    <main id="main-content" className="service-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />

      {/* La bascule de langue mène à la page arabe du même motif. */}
      <SiteHeader internal langSwitchHref={`/ar/${service.slug}`} />

      <MobileActionBar />

      {/* Cible du lien d'évitement français posé par `app/(fr)/layout.tsx`. */}
      <section id="fr-content" className="service-hero section-shell">
        <p className="eyebrow">Cabinet d’endocrinologie à Témara</p>
        <h1>{service.title} à Témara</h1>
        <p>{service.intro}</p>
        {/* Mêmes actions directes que le héros de l'accueil : le patient qui
            arrive par une page motif peut appeler ou écrire sans revenir à
            l'accueil. */}
        <div className="hero-actions">
          <Link className="primary-button" href="/rendez-vous">
            Prendre rendez-vous
          </Link>
          <a className="secondary-button" href={clinicPhoneHref}>
            <PhoneIcon />
            Appeler
          </a>
          <a
            className="secondary-button whatsapp-button"
            href={clinicWhatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
          <a className="secondary-button" href={mapsHref} target="_blank" rel="noopener noreferrer">
            Voir l’itinéraire
          </a>
        </div>
      </section>

      {/* « Réponse rapide » : le motif, le lieu, les horaires et la façon de
          prendre rendez-vous en un seul paragraphe autonome. Un patient
          arrivé par une recherche trouve sa réponse sans défiler, et un
          moteur de réponse peut citer ce paragraphe tel quel. */}
      <section className="section-shell quick-answer-section">
        <div className="quick-answer">
          <p className="eyebrow">Réponse rapide</p>
          <p className="quick-answer-text">{serviceQuickAnswer(service)}</p>
        </div>
      </section>

      <section className="section-shell service-detail-grid">
        <article className={`service-focus-card ${service.visualClass}`}>
          <span>Spécialité</span>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </article>
        <article className="service-info-card">
          <h2>Ce que la consultation permet d’aborder</h2>
          <ol className="service-points-list">
            {service.points.map((point, index) => (
              <li key={point} className="service-point">
                <span className="service-point-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{point}</p>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section className="section-shell service-copy">
        <h2>Une information claire, sans remplacer l’avis médical</h2>
        <p>
          Cette page présente des généralités utiles pour mieux comprendre les
          motifs de consultation. La prise en charge dépend toujours de
          l’histoire médicale, des symptômes, des examens disponibles et de
          l’évaluation réalisée en consultation.
        </p>
        <p>{preparationNote}</p>
      </section>

      <section className="section-shell contact-steps-section">
        <div className="section-heading">
          <p className="eyebrow">Prise de contact</p>
          <h2>Comment se déroule la prise de contact.</h2>
        </div>
        <div className="contact-steps-grid">
          {contactSteps.map((step, index) => (
            <article key={step.title} className="contact-step-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell service-editorial-note">
        <div>
          <p className="eyebrow">Information et confiance</p>
          <h2>Contenu informatif du {clinicName}.</h2>
          <p>
            Cette page présente les motifs de consultation du cabinet sans
            établir de diagnostic à distance. Informations mises à jour le{" "}
            <time dateTime={lastModified}>{lastModifiedLabel}</time>.
          </p>
        </div>
        <Link className="secondary-button" href={doctorProfilePath}>
          Voir le parcours du {doctorName}
        </Link>
      </section>

      <section className="section-shell faq-section">
        <div className="section-heading">
          <p className="eyebrow">Questions fréquentes</p>
          <h2>Avant de contacter le cabinet.</h2>
        </div>
        <div className="faq-grid">
          {serviceFaqItems.map((item) => (
            <article key={item.question} className="faq-card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell related-services-section">
        <div className="related-services-intro">
          <div className="section-heading related-services-heading">
            <p className="eyebrow">Autres motifs pris en charge</p>
            <h2>Explorer les autres motifs du cabinet.</h2>
          </div>
          <Link className="text-link" href="/">
            Voir tous les motifs à l’accueil
          </Link>
        </div>
        <div className="care-index-compact">
          {otherServices.map((item, index) => (
            <Link
              key={item.slug}
              className="care-row-compact"
              href={`/${item.slug}`}
            >
              <span className="care-row-compact-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="care-row-compact-title">{item.title}</span>
              <span className="care-row-compact-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="final-cta section-shell">
        <div>
          <p className="eyebrow">Rendez-vous</p>
          <h2>Contacter le cabinet du Dr Sonia Abahou.</h2>
          <p>
            Adresse : {clinicAddress}. Téléphone fixe : {clinicPhoneDisplay}.
            Portable / WhatsApp : {clinicSecondaryPhoneDisplay}.
          </p>
        </div>
        <div className="cta-stack">
          <Link className="primary-button" href="/rendez-vous">
            Rendez-vous
          </Link>
          <a className="secondary-button" href={mapsHref} target="_blank" rel="noopener noreferrer">
            Voir l’itinéraire
          </a>
        </div>
      </section>

      <SiteFooter internal langSwitchHref={`/ar/${service.slug}`} />
    </main>
  );
}
