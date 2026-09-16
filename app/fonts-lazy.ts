/**
 * Instances des familles latines SANS préchargement (`preload: false`),
 * réservées à la page 404 (`app/not-found.tsx`).
 *
 * Avec les instances préchargées de `app/fonts.ts`, la 404 partage leurs
 * `@font-face` avec les routes françaises et Turbopack les regroupe alors dans
 * le chunk CSS commun à tout le site (`globals.css`), même en découpage
 * `graph` : `/ar` préchargeait du coup Fraunces et Public Sans (94 Ko) en plus
 * de ses cinq fichiers arabes. Avec ces instances, la 404 garde les mêmes
 * familles (réglages identiques à `app/fonts.ts`) mais ne les télécharge
 * qu'au premier glyphe qui les utilise.
 *
 * Ne pas importer ce module depuis le segment `/ar` (il a ses propres
 * instances, voir `app/(ar)/fonts.ts`) ni depuis les routes françaises.
 */
import { Fraunces, Public_Sans } from "next/font/google";

const frauncesLazy = Fraunces({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-serif",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const publicSansLazy = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
  variable: "--font-medical-ui",
  fallback: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});

export const latinFontVariablesLazy = `${frauncesLazy.variable} ${publicSansLazy.variable}`;
