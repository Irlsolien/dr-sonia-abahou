import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Dr Sonia Abahou",
  description:
    "Mentions légales du site du cabinet Dr Sonia Abahou, endocrinologue diabétologue à Témara.",
};

export default function LegalNoticePage() {
  return (
    <main className="legal-page">
      <section className="legal-hero section-shell">
        <a className="legal-back" href="/">
          ← Retour au site
        </a>
        <p className="eyebrow">Cadre légal</p>
        <h1>Mentions légales</h1>
        <p>
          Cette page identifie l’éditeur du site, l’hébergeur et les règles
          générales d’utilisation des contenus publiés.
        </p>
      </section>

      <section className="legal-content section-shell">
        <article>
          <h2>Éditeur du site</h2>
          <p>
            Le présent site est édité par le cabinet du <strong>Dr Sonia Abahou</strong>,
            médecin spécialiste en endocrinologie, diabétologie, nutrition et
            maladies métaboliques.
          </p>
          <ul>
            <li>Adresse : 13, avenue Moulay Ali Chérif, appartement n°2, Cité Massira I, 12020 Témara, Maroc.</li>
            <li>Téléphone : 0661 26 03 45.</li>
            <li>Directrice de publication : Dr Sonia Abahou.</li>
            <li>Informations administratives professionnelles : à compléter par le cabinet si nécessaire.</li>
          </ul>
        </article>

        <article>
          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave
            #4133, Walnut, CA 91789, États-Unis. Le service d’hébergement est
            accessible depuis <a href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a>.
          </p>
        </article>

        <article>
          <h2>Objet du site</h2>
          <p>
            Le site présente le cabinet, les domaines de consultation, les
            horaires, les coordonnées et les informations pratiques permettant de
            contacter le cabinet. Il ne permet pas d’établir un diagnostic en
            ligne et ne remplace pas une consultation médicale.
          </p>
        </article>

        <article>
          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, éléments graphiques, photographies, illustrations,
            interfaces et contenus présents sur le site sont protégés. Toute
            reproduction, adaptation ou réutilisation non autorisée est interdite,
            sauf accord écrit préalable du cabinet ou exception prévue par la loi.
          </p>
        </article>

        <article>
          <h2>Responsabilité médicale</h2>
          <p>
            Les informations diffusées sont générales et pédagogiques. Elles ne
            constituent pas une prescription, un avis médical personnalisé ou une
            prise en charge d’urgence. En cas d’urgence vitale, il convient de
            contacter immédiatement les services d’urgence compétents.
          </p>
        </article>

        <article>
          <h2>Déontologie médicale</h2>
          <p>
            Le site a une finalité informative : présentation du cabinet, des
            domaines de consultation, des horaires et des coordonnées. Les textes
            médicaux doivent être validés par le médecin responsable avant
            publication et rester conformes aux règles déontologiques applicables
            à l’exercice de la médecine au Maroc.
          </p>
        </article>

        <article>
          <h2>Droit applicable</h2>
          <p>
            Le site est édité au Maroc. Les règles relatives à la protection des
            données personnelles incluent notamment la loi marocaine n° 09-08 et,
            lorsque cela est applicable, les principes du RGPD pour les personnes
            concernées situées dans l’Union européenne.
          </p>
        </article>
      </section>
    </main>
  );
}
