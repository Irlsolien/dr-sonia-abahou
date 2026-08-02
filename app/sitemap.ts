import type { MetadataRoute } from "next";
import {
  absoluteUrl,
  doctorProfilePath,
  lastModified,
  services,
} from "./seo";

export const dynamic = "force-static";

const modifiedAt = new Date(`${lastModified}T00:00:00+01:00`);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: modifiedAt,
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
      images: [absoluteUrl("/dr-sonia-abahou.jpg")],
    },
    ...services.map((service) => ({
      url: absoluteUrl(`/${service.slug}`),
      lastModified: modifiedAt,
    })),
    {
      url: absoluteUrl("/rendez-vous"),
      lastModified: modifiedAt,
    },
  ];
}
