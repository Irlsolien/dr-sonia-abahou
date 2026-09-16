/**
 * Typographie de marque (écriture latine), partagée par les trois documents
 * du site : le layout racine français, le layout racine arabe (les classes
 * communes y référencent `--font-serif` et `--font-medical-ui`) et la page
 * 404, qui compose son propre document.
 *
 * Instanciation unique pour les routes françaises : deux appels `next/font`
 * identiques dans des fichiers différents produisent deux modules CSS
 * distincts, donc des `@font-face` en double dans le bundle. Deux exceptions
 * volontaires, en `preload: false` : `app/(ar)/fonts.ts` (document arabe) et
 * `app/fonts-lazy.ts` (page 404), pour que le préchargement de ces deux
 * familles reste limité aux routes françaises.
 *
 * Fraunces : serif éditoriale pour les grands titres. Servie sans axe optique
 * (`opsz`) : la variable wght seule pèse nettement moins que la variable
 * wght + opsz (67 Ko) et le rendu des titres reste celui de la graisse
 * demandée ; les instances de `app/(ar)/fonts.ts` et `app/fonts-lazy.ts`
 * suivent le même réglage.
 * Public Sans : sans-serif institutionnelle et sobre pour l'interface.
 */
import { Fraunces, Public_Sans } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
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
