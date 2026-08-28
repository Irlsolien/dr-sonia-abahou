import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { NavigationProgress } from "../components/NavigationProgress";
import { ConsoleWarning } from "../components/ConsoleWarning";
import { latinFontVariables } from "../fonts";
import { arabicFontVariables } from "./fonts";
import {
  absoluteUrl,
  doctorName,
  doctorProfilePath,
  siteUrl,
} from "../seo";
import { arOgImage, metaAr, uiAr } from "../seo-ar";

/**
 * LAYOUT RACINE ARABE (groupe de routes `(ar)`).
 *
 * Le site expose deux layouts racines : `app/(fr)/layout.tsx` pour le
 * français et celui-ci pour l'arabe. Les groupes `(fr)` / `(ar)` sont
 * invisibles dans l'URL : les chemins publics restent `/`, `/<motif>`,
 * `/ar`, `/ar/<motif>`.
 *
 * Raison d'être : seul un layout racine peut poser `<html lang dir>`. Les
 * pages `/ar` déclaraient auparavant `lang="ar" dir="rtl"` sur leur `<main>`
 * à l'intérieur d'un document annoncé `lang="fr-MA"`, ce qui contredisait le
 * critère WCAG 3.1.1 (Langue de la page).
 */

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.BING_SITE_VERIFICATION;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#062b2c",
  colorScheme: "light",
};

/**
 * Métadonnées de base de la branche arabe. Chaque page `/ar` et
 * `/ar/<motif>` déclare ses propres `title`, `description`, `keywords`,
 * `alternates`, `openGraph` et `twitter` : Next les fusionne champ par champ
 * et la valeur de la page l'emporte. Ce layout ne fournit donc que les
 * valeurs communes (base d'URL, icônes, manifeste, indexation) et des
 * valeurs de repli cohérentes.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: metaAr.siteName,
  title: {
    default: metaAr.title,
    template: "%s",
  },
  description: metaAr.description,
  keywords: [...metaAr.keywords],
  authors: [{ name: doctorName, url: absoluteUrl(doctorProfilePath) }],
  creator: doctorName,
  publisher: doctorName,
  category: "Santé",
  alternates: {
    canonical: "/ar",
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
    title: metaAr.ogTitle,
    description: metaAr.ogDescription,
    siteName: metaAr.siteName,
    type: "website",
    locale: "ar_MA",
    alternateLocale: "fr_MA",
    url: "/ar",
    images: [
      {
        url: arOgImage,
        width: 1200,
        height: 630,
        alt: metaAr.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaAr.ogTitle,
    description: metaAr.ogDescription,
    images: [absoluteUrl(arOgImage)],
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

export default function ArabicRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* Quatre familles sur ce document : les deux arabes (titres et interface)
     et les deux latines, car les classes partagées avec la version française
     référencent `--font-serif` (numéros du fil de consultation, index des
     motifs) et `--font-medical-ui` (bascule de langue « Français », séquences
     latines conservées telles quelles). */
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${latinFontVariables} ${arabicFontVariables}`}
    >
      <body>
        <NavigationProgress />
        {/* Lien d'évitement arabe : premier élément focalisable du document,
            il mène directement au contenu éditorial (après l'en-tête). */}
        <a className="skip-link ar-skip-link" href="#ar-content">
          {uiAr.skipLink}
        </a>
        {children}
        {/* Avertissement anti self-XSS dans la console (ne bloque rien à l'écran). */}
        <ConsoleWarning lang="ar" />
        {/* Mesure d'audience anonyme et sans cookies (Vercel Web Analytics). */}
        <Analytics />
      </body>
    </html>
  );
}
