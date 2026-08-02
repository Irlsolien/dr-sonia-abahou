import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, ogCoverImage, siteName } from "../seo";

export const metadata: Metadata = {
  title: "Politique cookies | Dr Sonia Abahou",
  description:
    "Politique cookies du site du cabinet Dr Sonia Abahou à Témara.",
  alternates: {
    canonical: "/cookies",
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
    <main className="legal-page">
      <section className="legal-hero section-shell">
        <Link className="legal-back" href="/">
          ← Retour au site
        </Link>
        <p className="eyebrow">Cookies</p>
        <h1>Politique cookies</h1>
        <p>
          Le site est volontairement conçu pour limiter les traceurs et éviter les
          cookies non nécessaires sur la page vitrine.
        </p>
      </section>

      <section className="legal-content section-shell">
        <article>
          <h2>Cookies utilisés par le site</h2>
          <p>
            À ce stade, le site ne met pas volontairement en place de cookies
            publicitaires, de pixels marketing ou d’outil d’analyse d’audience
            nécessitant un suivi individuel.
          </p>
          <p>
            La mise en place d’un suivi d’audience simple a été indiquée comme
            “à discuter” dans le formulaire de validation. Aucun outil de mesure
            d’audience n’est donc déclaré comme actif tant qu’il n’a pas été
            confirmé par le cabinet.
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
    </main>
  );
}
