/**
 * Layout racine technique — ne rend aucune balise.
 *
 * Le document HTML est produit par les deux layouts racines de langue :
 * `app/(fr)/layout.tsx` (`<html lang="fr-MA">`) et `app/(ar)/layout.tsx`
 * (`<html lang="ar" dir="rtl">`). Ce fichier se contente de traverser, sans
 * quoi le document serait imbriqué deux fois.
 *
 * Il reste pourtant nécessaire : sans layout à la racine de `app/`, Next
 * enveloppe la route `/_not-found` — celle d'où l'export statique tire
 * `out/404.html` — dans son layout interne `<html><body>`, donc sans `lang`,
 * sans feuille de style et sans police. Sa présence laisse
 * `app/not-found.tsx` composer lui-même son document complet.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
