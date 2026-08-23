import type { MetadataRoute } from "next";
import {
  absoluteUrl,
  doctorProfilePath,
  lastModified,
  services,
} from "./seo";

export const dynamic = "force-static";

const modifiedAt = new Date(`${lastModified}T00:00:00+01:00`);

/* Images publiées sur les deux accueils : la version arabe montre exactement
   les mêmes photographies que la version française, elle mérite donc les
   mêmes déclarations d'images. */
const homeImages = [
  absoluteUrl("/dr-sonia-abahou.jpg"),
  absoluteUrl("/echographie-thyroidienne.webp"),
  absoluteUrl("/impedancemetrie-mesure.webp"),
  absoluteUrl("/atelier-education-therapeutique.webp"),
  absoluteUrl("/cabinet-accueil-reel.webp"),
  absoluteUrl("/cabinet-consultation-reel.webp"),
  absoluteUrl("/cabinet-attente-reel.webp"),
  absoluteUrl("/cabinet-consultation-patiente.webp"),
  absoluteUrl("/dr-abahou-trophee-diabete.webp"),
];

/**
 * Appariement de langues d'une paire de pages jumelles. Déclaré directement
 * dans le sitemap en plus des balises `hreflang` des pages : c'est le signal
 * le plus fiable pour qu'un moteur comprenne que `/<slug>` et `/ar/<slug>`
 * sont la même page en deux langues, et serve la bonne version.
 */
function languageAlternates(frenchPath: string, arabicPath: string) {
  return {
    languages: {
      "fr-MA": absoluteUrl(frenchPath),
      ar: absoluteUrl(arabicPath),
      "x-default": absoluteUrl(frenchPath),
    },
  };
}

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
      alternates: languageAlternates("/", "/ar"),
      images: homeImages,
    },
    {
      url: absoluteUrl("/ar"),
      lastModified: modifiedAt,
      priority: 0.9,
      alternates: languageAlternates("/", "/ar"),
      images: homeImages,
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
      alternates: languageAlternates(`/${service.slug}`, `/ar/${service.slug}`),
    })),
    /* Pages motifs arabes : mêmes slugs, un cran sous les motifs français. */
    ...services.map((service) => ({
      url: absoluteUrl(`/ar/${service.slug}`),
      lastModified: modifiedAt,
      priority: 0.7,
      alternates: languageAlternates(`/${service.slug}`, `/ar/${service.slug}`),
    })),
    {
      url: absoluteUrl("/rendez-vous"),
      lastModified: modifiedAt,
      priority: 0.7,
      alternates: languageAlternates("/rendez-vous", "/ar/rendez-vous"),
    },
    {
      url: absoluteUrl("/ar/rendez-vous"),
      lastModified: modifiedAt,
      priority: 0.7,
      alternates: languageAlternates("/rendez-vous", "/ar/rendez-vous"),
    },
    /* Pages légales : indexables mais secondaires. Chaque page a désormais une
       jumelle arabe `/ar/<page>`, appariée par `hreflang` comme les motifs. */
    ...["/mentions-legales", "/confidentialite", "/cookies"].flatMap((path) => [
      {
        url: absoluteUrl(path),
        lastModified: modifiedAt,
        priority: 0.3,
        alternates: languageAlternates(path, `/ar${path}`),
      },
      {
        url: absoluteUrl(`/ar${path}`),
        lastModified: modifiedAt,
        priority: 0.3,
        alternates: languageAlternates(path, `/ar${path}`),
      },
    ]),
  ];
}
