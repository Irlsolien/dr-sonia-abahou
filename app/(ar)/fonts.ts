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
import {
  Fraunces,
  IBM_Plex_Sans_Arabic,
  Noto_Naskh_Arabic,
  Public_Sans,
} from "next/font/google";

/*
 * Deux graisses par famille au lieu de quatre : chaque graisse est un fichier
 * supplémentaire à télécharger sur les routes arabes.
 *
 * IBM Plex Sans Arabic (interface) : le thème n'utilise que 400 (corps) et
 * 600 / 700 (libellés, boutons, `strong`). Les deux graisses grasses sont
 * servies par le semi-gras 600, plus adapté au ductus arabe qu'un gras plein ;
 * l'appariement CSS ramène automatiquement 700 sur 600.
 * Noto Naskh Arabic (titres) : 400 et 700, les seules graisses demandées par
 * les titres arabes (`.ar-page h1/h2/h3`).
 */
const arabicUi = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-ar-ui",
  fallback: ["Segoe UI", "Tahoma", "Arial", "sans-serif"],
});

const arabicSerif = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-ar-serif",
  fallback: ["Times New Roman", "serif"],
});

export const arabicFontVariables = `${arabicUi.variable} ${arabicSerif.variable}`;
/*
 * Familles latines du document arabe, instanciées ICI avec `preload: false`
 * (mêmes réglages que `app/fonts.ts`, rendu identique). Sur `/ar` elles ne
 * servent qu'à quelques séquences latines (numéros du fil de consultation,
 * index des motifs, bascule « Français ») ; les précharger coûtait 94 Ko sur
 * le chemin critique mobile.
 *
 * Nécessite `experimental.cssChunking: "graph"` (next.config.ts) et la page
 * 404 sur `app/fonts-lazy.ts` : sinon Turbopack fusionne les `@font-face` de
 * `app/fonts.ts` dans le chunk partagé de `globals.css`, et leurs fichiers
 * préchargés ressortent alors sur `/ar` aussi. Contrôle après build : le
 * nombre de `<link rel="preload" as="font">` dans `out/ar.html` est 5,
 * jamais 7 ; 2 dans `out/index.html`.
 */
const latinSerifAr = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  preload: false,
  variable: "--font-serif",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const latinUiAr = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
  variable: "--font-medical-ui",
  fallback: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});

export const latinFontVariablesAr = `${latinSerifAr.variable} ${latinUiAr.variable}`;
