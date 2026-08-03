import type { MetadataRoute } from "next";
import {
  absoluteUrl,
  doctorProfilePath,
  lastModified,
  services,
} from "./seo";

export const dynamic = "force-static";

const modifiedAt = new Date(`${lastModified}T00:00:00+01:00`);

/**
 * Hiérarchie de priorités explicite et cohérente :
 * 1.0 accueil français · 0.9 accueil arabe · 0.8 parcours et motifs français ·
 * 0.7 motifs arabes et prise de rendez-vous · 0.3 pages légales.
 * La téléconsultation reste hors sitemap : elle est en `noindex`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: modifiedAt,
      priority: 1,
      images: [
        absoluteUrl("/dr-sonia-abahou.jpg"),
        absoluteUrl("/echographie-thyroidienne.webp"),
        absoluteUrl("/impedancemetrie-mesure.webp"),
        absoluteUrl("/atelier-education-therapeutique.webp"),
        absoluteUrl("/cabinet-accueil-reel.webp"),
        absoluteUrl("/cabinet-consultation-reel.webp"),
        absoluteUrl("/cabinet-attente-reel.webp"),
        absoluteUrl("/cabinet-consultation-patiente.webp"),
        absoluteUrl("/dr-abahou-trophee-diabete.webp"),
      ],
    },
    {
      url: absoluteUrl("/ar"),
      lastModified: modifiedAt,
      priority: 0.9,
    },
    {
      url: absoluteUrl(doctorProfilePath),
      lastModified: modifiedAt,
      priority: 0.8,
      images: [absoluteUrl("/dr-sonia-abahou.jpg")],
    },
    ...services.map((service) => ({
      url: absoluteUrl(`/${service.slug}`),
      lastModified: modifiedAt,
      priority: 0.8,
    })),
    /* Pages motifs arabes : mêmes slugs, un cran sous les motifs français. */
    ...services.map((service) => ({
      url: absoluteUrl(`/ar/${service.slug}`),
      lastModified: modifiedAt,
      priority: 0.7,
    })),
    {
      url: absoluteUrl("/rendez-vous"),
      lastModified: modifiedAt,
      priority: 0.7,
    },
    /* Pages légales : indexables mais secondaires. */
    ...["/mentions-legales", "/confidentialite", "/cookies"].map((path) => ({
      url: absoluteUrl(path),
      lastModified: modifiedAt,
      priority: 0.3,
    })),
  ];
}
