import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
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
  ogCoverImage,
  services,
  siteName,
  siteUrl,
} from "../seo";

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

  return {
    title: service.seoTitle,
    description: service.description,
    keywords: [...service.keywords],
    alternates: {
      canonical,
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
          url: ogCoverImage,
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
      images: [absoluteUrl(ogCoverImage)],
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
        medicalAudience: "https://schema.org/Patient",
        specialty: "https://schema.org/Endocrine",
        about: {
          "@type": "Thing",
          name: service.title,
        },
        mainEntity: {
          "@type": "MedicalProcedure",
          name: service.title,
          description: service.text,
        },
        isPartOf: {
          "@id": `${siteUrl}/#website`,
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

      <SiteHeader internal />

      <section className="service-hero section-shell">
        <p className="eyebrow">Cabinet d’endocrinologie à Témara</p>
        <h1>{service.title} à Témara</h1>
        <p>{service.intro}</p>
        <div className="hero-actions">
          <Link className="primary-button" href="/rendez-vous">
            Rendez-vous
          </Link>
          <a className="secondary-button" href={mapsHref} target="_blank" rel="noreferrer">
            Voir l’itinéraire
          </a>
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
          <ul>
            {service.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
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
        <p>
          Pour préparer le rendez-vous, il est conseillé d’apporter les derniers
          bilans, ordonnances, comptes rendus, imageries et traitements en cours.
        </p>
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
          Voir le parcours de {doctorName}
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
          <a className="secondary-button" href={mapsHref} target="_blank" rel="noreferrer">
            Voir l’itinéraire
          </a>
        </div>
      </section>

      <SiteFooter internal />
    </main>
  );
}
