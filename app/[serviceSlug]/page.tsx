import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  absoluteUrl,
  clinicAddress,
  clinicPhoneDisplay,
  clinicPhoneInternational,
  faqItems,
  mapsQuery,
  services,
  siteName,
  siteUrl,
} from "../seo";

type ServicePageProps = {
  params: Promise<{
    serviceSlug: string;
  }>;
};

const phoneHref = `tel:${clinicPhoneInternational}`;
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  mapsQuery,
)}`;

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
      type: "article",
      locale: "fr_MA",
      images: [
        {
          url: "/dr-sonia-abahou.jpg",
          width: 600,
          height: 600,
          alt: `Dr Sonia Abahou - ${service.title}`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: service.seoTitle,
      description: service.description,
      images: [absoluteUrl("/dr-sonia-abahou.jpg")],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceSlug } = await params;
  const service = findService(serviceSlug);

  if (!service) {
    notFound();
  }

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        item: absoluteUrl(`/${service.slug}`),
      },
    ],
  };

  const medicalPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${absoluteUrl(`/${service.slug}`)}#webpage`,
    name: service.seoTitle,
    description: service.description,
    url: absoluteUrl(`/${service.slug}`),
    inLanguage: "fr-MA",
    about: {
      "@type": "MedicalCondition",
      name: service.title,
    },
    reviewedBy: {
      "@type": "Physician",
      name: "Dr Sonia Abahou",
      telephone: clinicPhoneInternational,
      address: {
        "@type": "PostalAddress",
        streetAddress: clinicAddress,
        addressLocality: "Témara",
        addressCountry: "MA",
      },
    },
  };

  return (
    <main className="service-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalPageStructuredData),
        }}
      />

      <section className="service-hero section-shell">
        <Link className="legal-back" href="/">
          ← Retour au site
        </Link>
        <p className="eyebrow">Cabinet d’endocrinologie à Témara</p>
        <h1>{service.title} à Témara</h1>
        <p>{service.intro}</p>
        <div className="hero-actions">
          <a className="primary-button" href={phoneHref}>
            Appeler le cabinet
          </a>
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

      <section className="section-shell faq-section">
        <div className="section-heading">
          <p className="eyebrow">Questions fréquentes</p>
          <h2>Avant de contacter le cabinet.</h2>
        </div>
        <div className="faq-grid">
          {faqItems.slice(0, 3).map((item) => (
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
            Adresse : {clinicAddress}. Téléphone : {clinicPhoneDisplay}.
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
    </main>
  );
}
