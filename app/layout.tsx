import type { Metadata, Viewport } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";
import { NavigationProgress } from "./components/NavigationProgress";
import {
  absoluteUrl,
  doctorName,
  doctorProfilePath,
  ogCoverImage,
  siteName,
  siteUrl,
} from "./seo";

/**
 * Typographie de marque.
 * Fraunces : serif éditoriale (axe optique) pour les grands titres.
 * Public Sans : sans-serif institutionnelle et sobre pour l'interface.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-serif",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-medical-ui",
  fallback: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.BING_SITE_VERIFICATION;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#062b2c",
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
    "holter glycémique Témara",
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
        url: ogCoverImage,
        width: 1200,
        height: 630,
        alt: "Dr Sonia Abahou — Endocrinologie, diabétologie, nutrition à Témara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Sonia Abahou | Cabinet d’endocrinologie à Témara",
    description:
      "Informations pratiques du cabinet : diabète, thyroïde, nutrition, obésité, hypoglycémies et maladies métaboliques à Témara.",
    images: [absoluteUrl(ogCoverImage)],
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
    <html lang="fr-MA" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body>
        <NavigationProgress />
        {/* Lien d'évitement : premier élément focalisable du document. */}
        <a className="skip-link" href="#main-content">
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
