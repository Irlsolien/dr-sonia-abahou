import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, siteName } from "../seo";

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
  },
  twitter: {
    card: "summary",
    title: "Politique cookies | Dr Sonia Abahou",
    description:
      "Politique cookies du site du cabinet Dr Sonia Abahou à Témara.",
    images: [absoluteUrl("/dr-sonia-abahou.jpg")],
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
        </article>

        <article>
          <h2>Services externes</h2>
          <p>
            Certains liens ouvrent des services tiers, notamment WhatsApp et
            Google Maps. Ces services peuvent appliquer leurs propres règles de
            confidentialité et déposer leurs propres cookies lorsque l’utilisateur
            choisit de les ouvrir.
          </p>
        </article>

        <article>
          <h2>Carte GPS</h2>
          <p>
            Pour limiter les traceurs, la carte n’est pas chargée automatiquement
            dans la page. Le site affiche un aperçu visuel et propose un bouton
            permettant d’ouvrir Google Maps uniquement sur action volontaire de
            l’utilisateur.
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
            Si un outil de mesure d’audience, de formulaire ou de prise de
            rendez-vous en ligne est ajouté ultérieurement, cette politique devra
            être mise à jour et un mécanisme de consentement devra être ajouté
            lorsque nécessaire.
          </p>
        </article>
      </section>
    </main>
  );
}
