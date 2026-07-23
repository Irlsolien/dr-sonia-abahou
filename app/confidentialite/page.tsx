import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, siteName } from "../seo";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Dr Sonia Abahou",
  description:
    "Politique de confidentialité du site du cabinet Dr Sonia Abahou à Témara.",
  alternates: {
    canonical: "/confidentialite",
  },
  openGraph: {
    title: "Politique de confidentialité | Dr Sonia Abahou",
    description:
      "Politique de confidentialité du site du cabinet Dr Sonia Abahou à Témara.",
    url: "/confidentialite",
    siteName,
    type: "website",
    locale: "fr_MA",
  },
  twitter: {
    card: "summary",
    title: "Politique de confidentialité | Dr Sonia Abahou",
    description:
      "Politique de confidentialité du site du cabinet Dr Sonia Abahou à Témara.",
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
          Cette politique explique quelles données peuvent être traitées, pour
          quelles finalités, et comment les personnes concernées peuvent exercer
          leurs droits.
        </p>
      </section>

      <section className="legal-content section-shell">
        <article>
          <h2>Responsable du traitement</h2>
          <p>
            Le responsable du traitement est le cabinet du <strong>Dr Sonia Abahou</strong>,
            situé au 13, avenue Moulay Ali Chérif, appartement n°2, Cité Massira I,
            12020 Témara, Maroc.
          </p>
          <p>
            Pour toute demande relative aux données personnelles, le cabinet peut
            être contacté par téléphone au 05 37 60 63 64.
          </p>
        </article>

        <article>
          <h2>Données traitées</h2>
          <p>
            Le site vitrine ne comporte pas de formulaire médical et ne collecte
            pas directement de dossier patient. Certaines données peuvent toutefois
            être traitées lorsque l’utilisateur choisit volontairement de contacter
            le cabinet par téléphone, WhatsApp ou via un lien externe.
          </p>
          <ul>
            <li>Données d’identification et de contact communiquées volontairement.</li>
            <li>Informations nécessaires à la prise de rendez-vous ou à la réponse à une demande.</li>
            <li>Données techniques minimales liées à la consultation du site par l’hébergeur.</li>
          </ul>
        </article>

        <article>
          <h2>Finalités</h2>
          <p>Les données sont utilisées uniquement pour :</p>
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
            Les données relatives à la santé sont des données sensibles. Elles ne
            doivent pas être transmises via un simple site vitrine, un message non
            sécurisé ou un canal public. Les informations médicales doivent être
            communiquées dans un cadre approprié avec le cabinet.
          </p>
          <p>
            Si le cabinet met ultérieurement en place un formulaire médical, un
            espace patient, une téléconsultation ou une application de suivi, un cadre spécifique sera
            nécessaire : information claire, consentement, sécurité renforcée,
            durée de conservation adaptée et formalités CNDP lorsque requises.
          </p>
        </article>

        <article>
          <h2>Base légale et loi 09-08</h2>
          <p>
            Conformément à la loi marocaine n° 09-08, les données personnelles
            doivent être traitées de manière loyale, transparente, proportionnée
            et pour une finalité déterminée. Les traitements soumis à déclaration,
            autorisation ou transfert auprès de la CNDP doivent être accomplis par
            le responsable du traitement lorsque la situation l’exige.
          </p>
          <p>
            Récépissé ou autorisation CNDP : à compléter par le cabinet si un
            traitement entrant dans le champ des formalités CNDP est mis en œuvre.
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
          <h2>Destinataires et sous-traitants</h2>
          <p>
            Les données peuvent être accessibles au cabinet, à ses prestataires
            techniques strictement nécessaires au fonctionnement du site, et aux
            services tiers utilisés volontairement par l’utilisateur, comme
            Google Maps ou WhatsApp lorsqu’il clique sur ces services.
          </p>
        </article>

        <article>
          <h2>Droits des personnes</h2>
          <p>
            Conformément à la loi 09-08, toute personne concernée peut demander
            l’accès, la rectification et, pour motifs légitimes, l’opposition au
            traitement de ses données personnelles. Lorsque le RGPD s’applique,
            des droits complémentaires peuvent exister, notamment l’effacement, la
            limitation et la portabilité.
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
