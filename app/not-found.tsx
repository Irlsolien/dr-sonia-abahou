import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import "./globals.css";
import { latinFontVariables } from "./fonts";
import { NavigationProgress } from "./components/NavigationProgress";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { PhoneIcon, WhatsAppIcon } from "./components/Icons";
import {
  absoluteUrl,
  appointment,
  clinicPhoneInternational,
  doctorName,
  doctorProfilePath,
  siteName,
  siteUrl,
} from "./seo";

/**
 * Page 404 (source de `out/404.html` à l'export statique).
 *
 * Elle vit à la racine de `app/` : c'est le seul emplacement que Next
 * reconnaît pour la route `/_not-found`, une page `not-found.tsx` placée
 * dans un groupe de routes n'y est pas retenue.
 *
 * Comme `app/layout.tsx` ne rend volontairement aucune balise (les deux
 * documents HTML du site sont produits par `app/(fr)/layout.tsx` et
 * `app/(ar)/layout.tsx`), cette page compose elle-même son document : même
 * coquille que la version française — `lang="fr-MA"`, mêmes polices, même
 * feuille de style, même lien d'évitement et même mesure d'audience.
 */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#062b2c",
  colorScheme: "light",
};

/* Cette page n'héritant plus des métadonnées d'un layout de langue, elle
   reprend ici l'identité commune du site. Volontairement omis : `canonical`,
   `alternate hrefLang`, `og:*` et `twitter:*`. Ils étaient auparavant hérités
   du layout racine et désignaient la page d'accueil depuis une page d'erreur
   `noindex` — une déclaration trompeuse pour les moteurs. */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: "Page introuvable | Dr Sonia Abahou",
  description:
    "La page demandée n’existe pas ou a été déplacée. Retrouvez l’accueil du cabinet du Dr Sonia Abahou ou prenez rendez-vous.",
  authors: [{ name: doctorName, url: absoluteUrl(doctorProfilePath) }],
  creator: doctorName,
  publisher: doctorName,
  category: "Santé",
  manifest: "/site.webmanifest",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    shortcut: "/favicon-32.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: false,
    follow: true,
  },
};

const phoneHref = `tel:${clinicPhoneInternational}`;
const whatsappHref = `https://wa.me/${appointment.whatsappPhone}?text=${encodeURIComponent(
  appointment.whatsappMessage,
)}`;

export default function NotFound() {
  return (
    <html lang="fr-MA" className={latinFontVariables}>
      <body>
        <NavigationProgress />
        {/* Lien d'évitement : premier élément focalisable du document. */}
        <a className="skip-link" href="#main-content">
          Aller au contenu
        </a>

        <main id="main-content" className="not-found-page">
          <SiteHeader internal />

          <section className="not-found-hero section-shell">
            <p className="eyebrow">Erreur 404</p>
            <h1>Page introuvable.</h1>
            <p>
              La page demandée n’existe pas ou a été déplacée. Retrouvez
              l’accueil du cabinet ou contactez-nous pour prendre rendez-vous.
            </p>
            <div className="hero-actions">
              <Link className="primary-button" href="/">
                Retour à l’accueil
              </Link>
              <Link className="secondary-button" href="/rendez-vous">
                Prendre rendez-vous
              </Link>
            </div>
            <div className="not-found-contact">
              <a href={phoneHref}>
                <PhoneIcon />
                Appeler le cabinet
              </a>
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <WhatsAppIcon />
                Écrire sur WhatsApp
              </a>
            </div>
          </section>

          <SiteFooter internal />
        </main>

        {/* Mesure d'audience anonyme et sans cookies (Vercel Web Analytics). */}
        <Analytics />
      </body>
    </html>
  );
}
