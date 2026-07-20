# Dr Sonia Abahou — Site vitrine

Site vitrine statique Next.js pour le cabinet du Dr Sonia Abahou à Témara.

## Stack

- Next.js
- React
- TypeScript
- CSS global
- Export statique via `output: "export"`
- Déploiement Vercel

## Commandes

```bash
npm install
npm run dev
npm run build
```

## Pages

- `/`
- `/mentions-legales`
- `/confidentialite`
- `/cookies`

## SEO

Le projet contient :

- `public/robots.txt`
- `public/sitemap.xml`
- metadata Open Graph et Twitter
- JSON-LD `Physician`
- URLs localisées pour Témara

## Confidentialité

Le site ne contient pas de formulaire médical ni d’espace patient. Google Maps n’est pas chargé automatiquement : l’utilisateur ouvre Maps uniquement après clic volontaire.

## Notes de livraison

Les textes médicaux, les horaires, les informations administratives et les mentions CNOM/CNDP doivent être validés par le cabinet avant lancement définitif.
