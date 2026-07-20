# Projet — Site vitrine Dr Sonia Abahou

## 1. Résumé

Site vitrine professionnel pour le cabinet du **Dr Sonia Abahou**, médecin spécialiste en endocrinologie, diabétologie, nutrition et maladies métaboliques à Témara.

L’objectif est de créer une présence digitale médicale **claire, factuelle et rassurante**, sans basculer dans la publicité médicale. Le site doit permettre au patient d’identifier rapidement les domaines de consultation, l’adresse, les horaires et les moyens de contact.

## 2. Informations du cabinet

- **Médecin** : Dr Sonia Abahou
- **Spécialité** : endocrinologie, diabétologie, nutrition et maladies métaboliques
- **Adresse** : 13, avenue Moulay Ali Chérif, appartement n°2, Cité Massira I, 12020 Témara, Maroc
- **Téléphone** : 0661 26 03 45
- **Langues mises en avant** : arabe et français

## 3. Positionnement public du site

Le contenu visible par les patients doit rester :

- informatif ;
- sobre ;
- factuel ;
- non comparatif ;
- sans promesse médicale ;
- sans formulation commerciale agressive ;
- validé par le médecin avant publication.

Le vocabulaire commercial comme “premium”, “conversion”, “choquer le client” ou “rassurer avant l’appel” peut être utilisé dans l’argumentaire interne, mais ne doit pas devenir le ton principal du site public d’un médecin.

## 4. Conformité médicale CNOM

Au Maroc, l’exercice médical est encadré par l’Ordre National des Médecins et par le Code de déontologie médicale.

Le site doit donc être considéré comme un **support d’information du cabinet**, et non comme une publicité médicale.

Points de vigilance :

- pas de promesse de guérison ;
- pas de superlatifs du type “meilleur”, “n°1”, “expert incontournable” ;
- pas de comparaison avec d’autres médecins ;
- pas d’incitation commerciale excessive ;
- pas d’avis patients affichés sur le site sans validation du cabinet ;
- pas d’avant/après médical ;
- validation des textes médicaux par Dr Sonia Abahou avant mise en ligne définitive.

Mention ajoutée au site :

> Le site a une finalité informative : présentation du cabinet, des domaines de consultation, des horaires et des coordonnées. Les textes médicaux doivent être validés par le médecin responsable avant publication et rester conformes aux règles déontologiques applicables à l’exercice de la médecine au Maroc.

## 5. Données personnelles, CNDP et loi 09-08

Le site est une vitrine statique. Il ne contient pas de formulaire médical et ne collecte pas directement de dossier patient.

Mesures prises :

- pas de formulaire de santé ;
- pas d’espace patient ;
- pas de collecte volontaire de données médicales ;
- Google Maps non chargé automatiquement ;
- ouverture de Google Maps uniquement après clic volontaire ;
- pages légales dédiées ;
- politique de confidentialité ;
- politique cookies ;
- mentions sur la loi marocaine n° 09-08 et la CNDP.

À surveiller :

- les logs techniques Vercel peuvent exister côté hébergeur ;
- WhatsApp applique ses propres règles lorsque l’utilisateur clique ;
- Google Maps applique ses propres règles lorsque l’utilisateur clique ;
- tout ajout d’analytics doit être choisi avec prudence ;
- tout formulaire médical ou application patient change complètement le niveau de risque.

Si une application patient ou un formulaire médical est ajouté plus tard, prévoir :

- consentement explicite ;
- sécurité renforcée ;
- durée de conservation claire ;
- information détaillée du patient ;
- registre des traitements ;
- formalités CNDP si requises ;
- hébergement et accès adaptés aux données de santé.

## 6. Fonctionnalités réalisées

- Page d’accueil vitrine.
- Header sticky avec navigation.
- Hero avec portrait du médecin.
- Présentation du parcours médical.
- Présentation de l’approche du cabinet.
- Cartes de soins illustrées :
  - diabète et équilibre glycémique ;
  - thyroïde, goitre et nodules ;
  - nutrition et maladies métaboliques ;
  - troubles hormonaux féminins ;
  - surrénales, hypophyse, parathyroïdes ;
  - suivi dans la durée.
- Galerie visuelle illustrative.
- Aperçu GPS privacy-friendly sans iframe.
- Boutons directs :
  - appel ;
  - WhatsApp avec message pré-rempli ;
  - itinéraire GPS.
- Pages légales :
  - `/mentions-legales`
  - `/confidentialite`
  - `/cookies`
- Footer légal.
- Responsive mobile.
- Respect de `prefers-reduced-motion`.
- Build statique pour Vercel.

## 7. SEO technique

Réalisé :

- titre SEO principal ;
- meta description ;
- Open Graph ;
- contenu localisé à Témara ;
- mots-clés médicaux naturels ;
- `robots.txt` ;
- `sitemap.xml` ;
- JSON-LD `Physician` ;
- site statique rapide ;
- suppression de la dépendance Google Fonts pour éviter les builds bloqués.

À faire après validation du deal :

- connecter Google Search Console ;
- créer ou optimiser la fiche Google Business Profile ;
- ajouter photos réelles du cabinet ;
- ajouter nom de domaine professionnel ;
- vérifier l’indexation ;
- inscrire le cabinet sur annuaires médicaux sérieux ;
- harmoniser les informations NAP : nom, adresse, téléphone.

## 8. Google Business Profile

Pour un cabinet médical local, la fiche Google Business Profile est prioritaire.

Actions recommandées :

- revendiquer ou créer la fiche Google Maps ;
- ajouter le site ;
- vérifier adresse, téléphone et horaires ;
- ajouter photos réelles du cabinet ;
- choisir les catégories médicales adaptées ;
- encourager les avis authentiques, sans faux avis ni incitation abusive ;
- garder les informations identiques partout.

## 9. Accessibilité et performance

Le site doit rester utilisable par des patients sur téléphone, y compris des personnes âgées ou ayant des difficultés visuelles.

Points intégrés :

- contrastes élevés ;
- textes lisibles ;
- boutons larges sur mobile ;
- liens `tel:` cliquables ;
- navigation clavier prévue via focus visible ;
- textes alternatifs sur les images ;
- réduction des animations si l’utilisateur l’a configurée ;
- suppression du chargement automatique de Google Maps.

À vérifier régulièrement :

- score Lighthouse mobile ;
- temps de chargement ;
- lisibilité mobile ;
- poids des images ;
- remplacement des images illustratives par des images réelles optimisées.

## 10. Stack technique

- **Framework** : Next.js
- **Langage** : TypeScript / TSX
- **Styles** : CSS global + Tailwind import
- **Déploiement** : Vercel
- **Repository GitHub** : `Irlsolien/dr-sonia-abahou`
- **Sortie statique** : `output: "export"` dans `next.config.ts`

## 11. Structure utile

```text
app/
  page.tsx
  layout.tsx
  globals.css
  mentions-legales/page.tsx
  confidentialite/page.tsx
  cookies/page.tsx

public/
  robots.txt
  sitemap.xml
  dr-sonia-abahou.jpg
  cabinet-accueil.png
  cabinet-consultation.png
  cabinet-nutrition.png
  care-diabetes.svg
  care-thyroid.svg
  care-nutrition.svg
  care-hormones.svg
  care-endocrine.svg
  care-followup.svg
```

## 12. Commandes utiles

```bash
npm install
npm run dev
npm run build
```

Le build génère un site statique compatible Vercel.

## 13. Déploiement

Le site est relié à Vercel via GitHub.

Workflow :

1. Modifier le code localement.
2. Commit les changements.
3. Push sur `main`.
4. Vercel déploie automatiquement.

En cas de blocage :

- vérifier que GitHub est connecté à Vercel ;
- vérifier que Vercel pointe sur `Irlsolien/dr-sonia-abahou` ;
- vérifier que le repository est public ou que le compte Vercel a les droits ;
- vérifier les logs de build ;
- pousser un commit vide si le webhook ne se déclenche pas.

## 14. Offre commerciale recommandée

### Offre 1 — Création du site

- **Prix** : 3000 DHS HT
- **Prix TTC avec TVA 20%** : 3600 DHS TTC
- Inclus :
  - création du site vitrine ;
  - responsive mobile ;
  - rédaction web initiale ;
  - pages légales de base ;
  - déploiement ;
  - base SEO technique.

### Offre 2 — Maintenance mensuelle

Prix indicatif : **300 à 500 DHS / mois**

Inclus possible :

- petites modifications ;
- mise à jour horaires ;
- remplacement d’images ;
- surveillance du site ;
- assistance technique ;
- rapport mensuel simple.

### Offre 3 — SEO local / Google Business

Prix indicatif : **800 à 1500 DHS**

Inclus possible :

- création ou optimisation Google Business Profile ;
- Search Console ;
- sitemap et indexation ;
- vérification des mots-clés locaux ;
- harmonisation des informations cabinet ;
- recommandations d’avis patients authentiques.

### Offre 4 — Application patient

Phase 2 à chiffrer séparément.

Fonctionnalités possibles :

- journal alimentaire ;
- suivi du poids ;
- suivi glycémie ;
- rappels médicaments ;
- rappels rendez-vous ;
- objectifs nutritionnels ;
- tableau de bord patient ;
- tableau de bord cabinet.

Attention : ce projet implique des données de santé sensibles et nécessite un cadrage juridique, technique et sécurité beaucoup plus strict.

## 15. Checklist de livraison

Avant présentation ou livraison finale :

- [ ] Site live accessible.
- [ ] HTTPS actif.
- [ ] Version mobile vérifiée.
- [ ] Bouton téléphone fonctionnel.
- [ ] Bouton WhatsApp fonctionnel.
- [ ] Bouton GPS fonctionnel.
- [ ] Pages légales accessibles.
- [ ] `robots.txt` accessible.
- [ ] `sitemap.xml` accessible.
- [ ] JSON-LD présent dans la page.
- [ ] Photos validées par Dr Sonia.
- [ ] Textes médicaux validés par Dr Sonia.
- [ ] Informations horaires confirmées.
- [ ] Adresse confirmée.
- [ ] Numéro confirmé.
- [ ] Mentions administratives complétées si nécessaires.
- [ ] Google Business Profile prévu ou configuré.

## 16. Fichiers commerciaux associés

Un PDF de préparation d’appel a été généré localement :

```text
fiche-appel-dr-sonia.pdf
```

Il contient :

- pitch d’ouverture ;
- annonce du prix ;
- inclusions ;
- objections et réponses ;
- questions possibles ;
- upsell application patient ;
- phrase anti-panique.

## 17. Notes finales

- Les images du cabinet sont actuellement illustratives.
- Les vraies photos du cabinet renforceront l’authenticité du site.
- Les contenus médicaux ne doivent pas remplacer une consultation.
- Le site doit rester informatif et déontologique.
- La partie “premium” doit être principalement utilisée dans l’argumentaire commercial, pas dans la promesse médicale publique.
