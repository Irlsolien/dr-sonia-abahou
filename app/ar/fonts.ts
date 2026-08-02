/**
 * Typographie arabe, partagée par toutes les routes `/ar` (accueil et pages
 * motifs). Les polices ne sont chargées que sur ces routes : les variables
 * CSS sont posées sur le conteneur racine de la page et sur le panneau de
 * navigation mobile, projeté hors de ce conteneur.
 *
 * IBM Plex Sans Arabic : interface, très lisible aux petites tailles et
 * disponible aussi en latin (adresse, sigles, numéros).
 * Noto Naskh Arabic : naskh sobre et contrasté, équivalent arabe du serif
 * éditorial utilisé côté français, réservé aux titres.
 */
import { IBM_Plex_Sans_Arabic, Noto_Naskh_Arabic } from "next/font/google";

const arabicUi = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ar-ui",
  fallback: ["Segoe UI", "Tahoma", "Arial", "sans-serif"],
});

const arabicSerif = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ar-serif",
  fallback: ["Times New Roman", "serif"],
});

export const arabicFontVariables = `${arabicUi.variable} ${arabicSerif.variable}`;
