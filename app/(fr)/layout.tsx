import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { NavigationProgress } from "../components/NavigationProgress";
import { ConsoleWarning } from "../components/ConsoleWarning";
import { latinFontVariables } from "../fonts";
import {
  absoluteUrl,
  doctorName,
  doctorProfilePath,
  ogCoverImage,
  siteName,
  siteUrl,
} from "../seo";

/**
 * LAYOUT RACINE FRANÇAIS (groupe de routes `(fr)`).
 *
 * Le site expose deux layouts racines : celui-ci et `app/(ar)/layout.tsx`
 * pour l'arabe. Les groupes `(fr)` / `(ar)` sont invisibles dans l'URL : les
 * chemins publics restent `/`, `/<motif>`, `/rendez-vous`, etc.
 */

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
    languages: {
      "fr-MA": "/",
      ar: "/ar",
      /* Version servie par défaut aux visiteurs dont la langue n'est ni le
         français ni l'arabe. */
      "x-default": "/",
    },
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
    icon: [{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    shortcut: "/favicon-32.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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
    <html lang="fr-MA" className={latinFontVariables}>
      <body>
        <NavigationProgress />
        {/* Lien d'évitement : premier élément focalisable du document. Il vise
            `#fr-content`, la première section éditoriale — c'est-à-dire le
            contenu situé *après* l'en-tête. Il visait auparavant le `<main>`,
            qui contient l'en-tête : la navigation n'était donc pas contournée
            et le critère WCAG 2.4.1 (Contournement de blocs) n'était pas
            satisfait. Même construction que le lien d'évitement arabe. */}
        <a className="skip-link" href="#fr-content">
          Aller au contenu
        </a>
        {children}
        {/* Avertissement anti self-XSS dans la console (ne bloque rien à l'écran). */}
        <ConsoleWarning lang="fr" />
        {/* Mesure d'audience anonyme et sans cookies (Vercel Web Analytics). */}
        <Analytics />
      </body>
    </html>
  );
}
