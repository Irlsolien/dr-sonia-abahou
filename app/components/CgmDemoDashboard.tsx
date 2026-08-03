/**
 * Tableau de bord de démonstration du Holter glycémique.
 *
 * Les libellés sont paramétrables (`labels`) afin que la version arabe de la
 * page d'accueil réutilise exactement le même composant, la même courbe et
 * les mêmes valeurs chiffrées. Les valeurs par défaut sont les libellés
 * français d'origine : sans prop, le rendu est strictement identique à celui
 * de la page d'accueil française.
 *
 * Aucune donnée réelle : profils génériques, aucune information personnelle.
 */
export type CgmDemoLabels = {
  /** `aria-label` du bloc, rendu comme une image unique aux lecteurs d'écran. */
  ariaLabel: string;
  live: string;
  title: string;
  privacy: string;
  chartLabel: string;
  chartRange: string;
  unit: string;
  axis: readonly [string, string, string, string, string];
  patients: readonly {
    name: string;
    value: string;
    status: string;
  }[];
  disclaimer: string;
};

export const frCgmDemoLabels: CgmDemoLabels = {
  ariaLabel:
    "Aperçu d’un tableau de bord de suivi glycémique continu respectant la confidentialité",
  live: "Suivi sécurisé",
  title: "Suivi glycémique rapproché",
  privacy: "Confidentialité",
  chartLabel: "Tendance glycémique",
  chartRange: "Sur 24 heures",
  unit: "mg/dL",
  axis: ["00h", "06h", "12h", "18h", "Maintenant"],
  patients: [
    { name: "Profil suivi 01", value: "112", status: "Courbe reçue" },
    { name: "Profil suivi 02", value: "138", status: "Lecture récente" },
    { name: "Profil suivi 03", value: "101", status: "Capteur actif" },
  ],
  disclaimer: "Aucune information personnelle n’est affichée.",
};

type CgmDemoDashboardProps = {
  labels?: CgmDemoLabels;
};

export function CgmDemoDashboard({
  labels = frCgmDemoLabels,
}: CgmDemoDashboardProps) {
  return (
    <div className="cgm-demo" role="img" aria-label={labels.ariaLabel}>
      <div className="cgm-demo-topbar">
        <div>
          <span className="cgm-demo-live">
            <i />
            {labels.live}
          </span>
          <strong>{labels.title}</strong>
        </div>
        <span className="cgm-demo-privacy">{labels.privacy}</span>
      </div>

      <div className="cgm-demo-chart">
        <div className="cgm-demo-chart-heading">
          <div>
            <span>{labels.chartLabel}</span>
            <strong>{labels.chartRange}</strong>
          </div>
          {/* Valeur mise en avant : celle du premier profil de démonstration,
              pour qu'elle reste cohérente si les libellés changent. */}
          <span className="cgm-demo-value">
            {labels.patients[0].value} <small>{labels.unit}</small>
          </span>
        </div>
        <svg viewBox="0 0 720 230" aria-hidden="true">
          <defs>
            <linearGradient id="cgmArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="cgm-demo-area"
            d="M0 166 C70 136 108 151 158 130 C215 106 252 155 306 140 C355 126 390 74 444 90 C498 106 530 151 580 126 C628 101 666 86 720 104 L720 230 L0 230 Z"
          />
          <path
            className="cgm-demo-line"
            d="M0 166 C70 136 108 151 158 130 C215 106 252 155 306 140 C355 126 390 74 444 90 C498 106 530 151 580 126 C628 101 666 86 720 104"
          />
          <circle className="cgm-demo-point" cx="720" cy="104" r="8" />
        </svg>
        <div className="cgm-demo-axis">
          {labels.axis.map((tick) => (
            <span key={tick}>{tick}</span>
          ))}
        </div>
      </div>

      <div className="cgm-demo-patients">
        {labels.patients.map((patient) => (
          <div key={patient.name} className="cgm-demo-patient">
            <span className="cgm-demo-avatar" aria-hidden="true">
              {patient.name.slice(-2)}
            </span>
            <div>
              <strong>{patient.name}</strong>
              <span>{patient.status}</span>
            </div>
            <b>
              {patient.value}
              <small>{labels.unit}</small>
            </b>
          </div>
        ))}
      </div>

      <p className="cgm-demo-disclaimer">{labels.disclaimer}</p>
    </div>
  );
}
