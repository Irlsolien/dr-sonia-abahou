import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteInteractionFeedback } from "@/components/site-interaction-feedback";
import {
  absoluteUrl,
  defaultOgImage,
  doctorName,
  doctorProfilePath,
  siteName,
  siteUrl,
} from "./seo";

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.BING_SITE_VERIFICATION;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0796ad",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Dr Sonia Abahou | Endocrinologie et maladies métaboliques à Témara",
    template: "%s",
  },
  description:
    "Cabinet du Dr Abahou Sonia à Témara : endocrinologie, diabète, thyroïde, nutrition, obésité, hypoglycémies et maladies métaboliques.",
  keywords: [
    "Dr Sonia Abahou",
    "endocrinologue Témara",
    "diabète Témara",
    "thyroïde Témara",
    "nutrition médicale Témara",
    "obésité Témara",
    "hypoglycémies Témara",
    "maladies métaboliques",
    "échographie thyroïdienne Témara",
    "impédancemétrie médicale Témara",
    "éducation thérapeutique diabète Témara",
    "surveillance glycémique continue Témara",
    "suivi capteur glycémie Témara",
  ],
  authors: [{ name: doctorName, url: absoluteUrl(doctorProfilePath) }],
  creator: doctorName,
  publisher: doctorName,
  category: "Santé",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Dr Sonia Abahou | Cabinet d’endocrinologie à Témara",
    description:
      "Informations pratiques du cabinet : diabète, thyroïde, nutrition, obésité, hypoglycémies et maladies métaboliques à Témara.",
    siteName,
    type: "website",
    locale: "fr_MA",
    url: "/",
    images: [
      {
        url: defaultOgImage,
        width: 600,
        height: 600,
        alt: "Portrait du Dr Sonia Abahou",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Dr Sonia Abahou | Cabinet d’endocrinologie à Témara",
    description:
      "Informations pratiques du cabinet : diabète, thyroïde, nutrition, obésité, hypoglycémies et maladies métaboliques à Témara.",
    images: [absoluteUrl(defaultOgImage)],
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  ...(googleSiteVerification || bingSiteVerification
    ? {
        verification: {
          ...(googleSiteVerification
            ? { google: googleSiteVerification }
            : {}),
          ...(bingSiteVerification
            ? { other: { "msvalidate.01": bingSiteVerification } }
            : {}),
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-MA">
      <body>
        {children}
        <SiteInteractionFeedback />
      </body>
    </html>
  );
}
