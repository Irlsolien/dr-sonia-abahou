import type { Metadata } from "next";
import Link from "next/link";
import {
  absoluteUrl,
  clinicAddress,
  clinicEmail,
  clinicName,
  clinicPhoneDisplay,
  siteName,
} from "../seo";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Dr Sonia Abahou",
  description:
    "Politique de confidentialité du site du cabinet Dr Abahou Sonia à Témara.",
  alternates: {
    canonical: "/confidentialite",
  },
  openGraph: {
    title: "Politique de confidentialité | Dr Sonia Abahou",
    description:
      "Politique de confidentialité du site du cabinet Dr Abahou Sonia à Témara.",
    url: "/confidentialite",
    siteName,
    type: "website",
    locale: "fr_MA",
  },
  twitter: {
    card: "summary",
    title: "Politique de confidentialité | Dr Sonia Abahou",
    description:
      "Politique de confidentialité du site du cabinet Dr Abahou Sonia à Témara.",
    images: [absoluteUrl("/dr-sonia-abahou.jpg")],
  },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero section-shell">
        <Link className="legal-back" href="/">
          ← Retour au site
        </Link>
        <p className="eyebrow">Données personnelles</p>
        <h1>Politique de confidentialité</h1>
        <p>
          Cette politique explique les traitements de données possibles dans le
          cadre du site vitrine, conformément aux informations communiquées par le
          cabinet et à la loi marocaine n° 09-08.
        </p>
      </section>

      <section className="legal-content section-shell">
        <article>
          <h2>Responsable du traitement</h2>
          <p>
            Le responsable du traitement est <strong>{clinicName}</strong>, situé
            au {clinicAddress}, Maroc.
          </p>
          <p>
            Pour toute demande relative aux données personnelles, le cabinet peut
            être contacté par email à <strong>{clinicEmail}</strong> ou par
            téléphone au <strong>{clinicPhoneDisplay}</strong>.
          </p>
        </article>

        <article>
          <h2>Données traitées</h2>
          <p>
            Le site vitrine ne comporte pas de formulaire médical et ne collecte
            pas directement de dossier patient. Certaines données peuvent toutefois
            être traitées lorsque l’utilisateur choisit volontairement de contacter
            le cabinet.
          </p>
          <ul>
            <li>Données d’identification et de contact communiquées volontairement.</li>
            <li>Informations nécessaires à la prise de rendez-vous ou à la réponse à une demande.</li>
            <li>Données techniques minimales liées à la consultation du site par l’hébergeur.</li>
          </ul>
        </article>

        <article>
          <h2>Finalités</h2>
          <p>Les données peuvent être utilisées uniquement pour :</p>
          <ul>
            <li>répondre aux demandes de contact ;</li>
            <li>faciliter la prise ou la confirmation de rendez-vous ;</li>
            <li>assurer le fonctionnement technique et la sécurité du site ;</li>
            <li>respecter les obligations légales et professionnelles applicables.</li>
          </ul>
        </article>

        <article>
          <h2>Données de santé</h2>
          <p>
            Les données relatives à la santé sont des données sensibles. Le site
            vitrine ne doit pas être utilisé pour transmettre des documents
            médicaux sensibles, des résultats d’examens ou des informations
            confidentielles via un canal non sécurisé.
          </p>
          <p>
            Si le cabinet met ultérieurement en place un formulaire médical, un
            espace patient, une téléconsultation ou une application de suivi, un
            cadre spécifique devra être défini avant publication : information
            claire, sécurité renforcée, durée de conservation adaptée et
            formalités CNDP lorsque requises.
          </p>
        </article>

        <article>
          <h2>Loi 09-08 et CNDP</h2>
          <p>
            Conformément à la loi marocaine n° 09-08, les données personnelles
            doivent être traitées de manière loyale, transparente, proportionnée
            et pour une finalité déterminée. Les formalités auprès de la CNDP
            relèvent du responsable du traitement lorsque la situation l’exige.
          </p>
          <p>
            Numéro CNDP ou récépissé de déclaration : <strong>non communiqué</strong>.
            Aucune référence CNDP n’est donc inventée sur le site.
          </p>
        </article>

        <article>
          <h2>Durée de conservation</h2>
          <p>
            Les données sont conservées uniquement pendant la durée nécessaire à
            la finalité poursuivie, sauf obligation légale ou professionnelle de
            conservation plus longue.
          </p>
        </article>

        <article>
          <h2>Destinataires et services tiers</h2>
          <p>
            Les données peuvent être accessibles au cabinet, à ses prestataires
            techniques strictement nécessaires au fonctionnement du site, et aux
            services tiers intégrés ou ouverts depuis le site, comme Google Maps,
            WhatsApp, LinkedIn ou Instagram. La carte Google Maps est chargée sur
            la page d’accueil ; les autres services sont ouverts sur action de
            l’utilisateur.
          </p>
        </article>

        <article>
          <h2>Droits des personnes</h2>
          <p>
            Conformément à la loi marocaine n° 09-08, toute personne concernée
            peut demander l’accès, la rectification et, pour motifs légitimes,
            l’opposition au traitement de ses données personnelles.
          </p>
        </article>

        <article>
          <h2>Sécurité</h2>
          <p>
            Le cabinet doit veiller à protéger les informations reçues contre
            l’accès non autorisé, la perte, l’altération ou la divulgation. Les
            données sensibles ne doivent pas être collectées sans mesures de
            sécurité adaptées.
          </p>
        </article>
      </section>
    </main>
  );
}
