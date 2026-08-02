/**
 * Typographie de marque (écriture latine), partagée par les trois documents
 * du site : le layout racine français, le layout racine arabe (les classes
 * communes y référencent `--font-serif` et `--font-medical-ui`) et la page
 * 404, qui compose son propre document.
 *
 * Instanciation unique : deux appels `next/font` identiques dans des
 * fichiers différents produisent deux modules CSS distincts, donc des
 * `@font-face` en double dans le bundle.
 *
 * Fraunces : serif éditoriale (axe optique) pour les grands titres.
 * Public Sans : sans-serif institutionnelle et sobre pour l'interface.
 */
import { Fraunces, Public_Sans } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-serif",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-medical-ui",
  fallback: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});

export const latinFontVariables = `${fraunces.variable} ${publicSans.variable}`;
