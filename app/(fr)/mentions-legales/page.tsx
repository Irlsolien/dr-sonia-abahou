import type { Metadata } from "next";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import {
  absoluteUrl,
  clinicAddress,
  clinicEmail,
  clinicName,
  clinicPhoneDisplay,
  clinicSecondaryPhoneDisplay,
  doctorInpe,
  doctorOrderNumber,
  doctorRegionalCouncil,
  ogCoverImage,
  siteName,
} from "../../seo";

export const metadata: Metadata = {
  title: "Mentions légales | Dr Sonia Abahou",
  description:
    "Mentions légales du site du cabinet Dr Abahou Sonia, endocrinologie et maladies métaboliques à Témara.",
  alternates: {
    canonical: "/mentions-legales",
  },
  openGraph: {
    title: "Mentions légales | Dr Sonia Abahou",
    description:
      "Mentions légales du site du cabinet Dr Abahou Sonia, endocrinologie et maladies métaboliques à Témara.",
    url: "/mentions-legales",
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
    title: "Mentions légales | Dr Sonia Abahou",
    description:
      "Mentions légales du site du cabinet Dr Abahou Sonia, endocrinologie et maladies métaboliques à Témara.",
    images: [absoluteUrl(ogCoverImage)],
  },
};

export default function LegalNoticePage() {
  return (
    <main id="main-content" className="legal-page">
      <SiteHeader internal />

      <section className="legal-hero section-shell">
        <p className="eyebrow">Cadre légal</p>
        <h1>Mentions légales</h1>
        <p>
          Cette page présente les informations communiquées par le cabinet pour
          identifier l’éditeur du site, l’hébergeur et le cadre d’utilisation des
          contenus publiés.
        </p>
      </section>

      <section className="legal-content section-shell">
        <article>
          <h2>Éditeur du site</h2>
          <p>
            Le présent site est édité par <strong>{clinicName}</strong>, cabinet
            médical d’endocrinologie et maladies métaboliques situé à Témara,
            Maroc.
          </p>
          <ul>
            <li>Adresse : {clinicAddress}, Maroc.</li>
            <li>Téléphone principal : {clinicPhoneDisplay}.</li>
            <li>Téléphone secondaire / WhatsApp : {clinicSecondaryPhoneDisplay}.</li>
            <li>Email professionnel : {clinicEmail}.</li>
            <li>Directrice de publication : Dr Abahou Sonia.</li>
            <li>Numéro d’inscription à l’Ordre des médecins : {doctorOrderNumber}.</li>
            <li>{doctorRegionalCouncil}.</li>
            <li>INPE : {doctorInpe}.</li>
          </ul>
        </article>

        <article>
          <h2>Informations administratives non communiquées</h2>
          <p>
            Les informations suivantes n’ont pas été fournies dans le formulaire
            de validation. Elles ne sont donc pas inventées ni affichées comme
            informations officielles.
          </p>
          <ul>
            <li>ICE du cabinet : non communiqué.</li>
            <li>Numéro de patente / taxe professionnelle : non communiqué.</li>
            <li>Forme juridique du cabinet : non communiquée.</li>
            <li>Numéro CNDP ou récépissé de déclaration : non communiqué.</li>
          </ul>
        </article>

        <article>
          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave
            #4133, Walnut, CA 91789, États-Unis. Le service d’hébergement est
            accessible depuis{" "}
            <a href="https://vercel.com" target="_blank" rel="noreferrer">
              vercel.com
            </a>
            .
          </p>
        </article>

        <article>
          <h2>Objet du site</h2>
          <p>
            Le site présente le cabinet, les domaines de consultation validés, les
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
          <h2>Droit applicable</h2>
          <p>
            Le site est édité pour un cabinet situé au Maroc. Les règles
            applicables incluent notamment le droit marocain et, pour la
            protection des données personnelles, la loi marocaine n° 09-08.
          </p>
        </article>
      </section>

      <SiteFooter internal />
    </main>
  );
}
