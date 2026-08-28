import type { Metadata } from "next";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { absoluteUrl, legalUpdatedFr, ogCoverImage, siteName } from "../../seo";

export const metadata: Metadata = {
  title: "Politique cookies | Dr Sonia Abahou",
  description:
    "Politique cookies du site du cabinet Dr Sonia Abahou à Témara.",
  alternates: {
    canonical: "/cookies",
    /* Page jumelle arabe : même contenu, langue différente. */
    languages: {
      "fr-MA": "/cookies",
      ar: "/ar/cookies",
      /* Version servie par défaut aux visiteurs dont la langue n'est ni le
         français ni l'arabe. */
      "x-default": "/cookies",
    },
  },
  openGraph: {
    title: "Politique cookies | Dr Sonia Abahou",
    description:
      "Politique cookies du site du cabinet Dr Sonia Abahou à Témara.",
    url: "/cookies",
    siteName,
    type: "website",
    locale: "fr_MA",
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
    title: "Politique cookies | Dr Sonia Abahou",
    description:
      "Politique cookies du site du cabinet Dr Sonia Abahou à Témara.",
    images: [absoluteUrl(ogCoverImage)],
  },
};

export default function CookiesPage() {
  return (
    <main id="main-content" className="legal-page">
      <SiteHeader internal />

      {/* Cible du lien d'évitement français posé par `app/(fr)/layout.tsx`. */}
      <section id="fr-content" className="legal-hero section-shell">
        <p className="eyebrow">Cookies</p>
        <h1>Politique cookies</h1>
        <p>
          Le site est volontairement conçu pour limiter les traceurs et éviter les
          cookies non nécessaires sur la page vitrine.
        </p>
        <p className="legal-updated">Dernière mise à jour : {legalUpdatedFr}.</p>
      </section>

      <section className="legal-content section-shell">
        <article>
          <h2>Cookies utilisés par le site</h2>
          <p>
            Le site ne met pas en place de cookies publicitaires, de pixels
            marketing ou d’outil de suivi individuel des visiteurs.
          </p>
          <p>
            Une mesure d’audience anonyme est réalisée via Vercel Web
            Analytics, l’outil de l’hébergeur du site. Cet outil ne dépose
            aucun cookie, ne suit pas les visiteurs individuellement et ne
            collecte que des statistiques agrégées (pages consultées, type
            d’appareil, pays). Aucune donnée nominative n’est associée à ces
            mesures.
          </p>
          <p>
            Le site étant hébergé par Vercel Inc. aux États-Unis, ces mesures
            techniques peuvent être traitées hors du Maroc. Aucun cookie de suivi
            n’est déposé pour autant.
          </p>
          <p>
            Le site est par ailleurs diffusé via le réseau Cloudflare, qui
            fournit une mesure d’audience anonyme (Cloudflare Web Analytics).
            Cet outil ne dépose aucun cookie, ne suit pas les visiteurs
            individuellement et ne collecte que des statistiques agrégées de
            fréquentation et de performance. Ces données techniques peuvent être
            traitées hors du Maroc.
          </p>
        </article>

        <article>
          <h2>Services externes</h2>
          <p>
            Certains liens ou modules ouvrent des services tiers, notamment
            Google Maps, WhatsApp, LinkedIn ou Instagram. Ces services peuvent
            appliquer leurs propres règles de confidentialité et déposer leurs
            propres cookies lorsque l’utilisateur choisit de les ouvrir.
          </p>
        </article>

        <article>
          <h2>Carte GPS</h2>
          <p>
            La page d’accueil propose une carte Google Maps pour localiser le
            cabinet. Par défaut, seule une façade statique s’affiche : la carte
            interactive ne se charge qu’après un clic sur « Afficher la carte
            interactive ». Aucune donnée n’est transmise à Google tant que
            l’utilisateur n’a pas effectué ce clic. Une fois la carte affichée,
            son chargement peut transmettre à Google des données techniques,
            notamment l’adresse IP et des informations sur le navigateur. Google
            applique alors ses propres règles de confidentialité et de cookies.
          </p>
        </article>

        <article>
          <h2>Gestion par le navigateur</h2>
          <p>
            L’utilisateur peut configurer son navigateur pour bloquer ou supprimer
            les cookies. Le blocage de certains cookies tiers peut limiter le
            fonctionnement de services externes ouverts depuis le site.
          </p>
        </article>

        <article>
          <h2>Évolution</h2>
          <p>
            Si un outil de mesure d’audience, de réservation en ligne ou un
            autre service tiers est ajouté ultérieurement, cette politique devra
            être mise à jour et un mécanisme de consentement devra être ajouté
            lorsque nécessaire.
          </p>
        </article>
      </section>

      <SiteFooter internal />
    </main>
  );
}
