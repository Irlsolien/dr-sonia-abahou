# Playbook — Audit hebdomadaire automatisé

Ce document est la **source de vérité** de la routine d'audit qui s'exécute chaque lundi.
L'agent cloud démarre sans aucun contexte : il lit `CLAUDE.md`, puis ce fichier, puis exécute.

Pour changer ce que fait l'audit, modifie **ce fichier** et pousse-le. Ne modifie pas le prompt de la routine.

---

## 1. Cadence

| Quand | Type | Périmètre |
|---|---|---|
| Tous les lundis | **Audit léger** | Régressions, nouveautés, checks déterministes, correctifs rapides |
| 1er lundi du mois | **Audit complet** | Les 4 axes en profondeur, comme `AUDIT-COMPLET-2026-08.md` |

Détermine le type au démarrage : `date +%d` ≤ 7 **et** jour = lundi → audit complet. Sinon → audit léger.
Annonce le type retenu en première ligne du rapport.

---

## 2. Règles absolues (non négociables)

Elles priment sur toute autre considération de ce playbook.

1. **Ne jamais inventer** un diplôme, une fonction, un acte médical, un tarif, un horaire, une coordonnée ou une information juridique. En cas de doute → signaler, ne pas écrire.
2. **Parité bilingue FR/AR obligatoire.** Toute modification de `/` doit être répercutée à l'identique sur `/ar` (contenu, design, SEO, métadonnées, JSON-LD, hreflang, sitemap, accessibilité). Les traductions vivent dans `app/seo-ar.ts`. Une livraison FR sans son miroir AR est un échec.
3. **Aucun secret, aucune donnée patient, aucun document client** ne doit entrer dans le dépôt. Vérifier `git status --short` avant chaque `git add`. **Ne jamais faire `git add .`**, ajouter les fichiers un par un.
4. **Le dépôt est PUBLIC.** Voir §7 : les constats de sécurité et juridiques non corrigés ne vont ni dans le repo, ni dans le titre/corps de la PR, ni dans les messages de commit.
5. **Jamais de push direct sur `main`.** Toujours une branche + une Pull Request.
6. **Jamais** de `push --force`, de réécriture d'historique, de suppression de branche distante ou de commande destructive.
7. `npm run check` (lint + build) **doit passer** avant tout commit. S'il échoue et que tu ne peux pas réparer proprement, annule le correctif fautif plutôt que de livrer du cassé.
8. Si une semaine ne produit **aucun correctif sûr**, c'est un résultat valide : pas de PR, seulement le rapport. Ne jamais fabriquer un changement pour justifier l'exécution.

---

## 3. Étape 0 — Préparation

```bash
node -v                        # doit être >= 22.13
npm ci
git checkout -b audit/$(date +%Y-%m-%d)
```

Lire dans l'ordre : `CLAUDE.md`, `CLAUDE-HANDOFF.md`, `app/seo.ts`, `app/seo-ar.ts`.
Récupérer l'état de référence : le dernier rapport d'audit connu et les 10 derniers commits (`git log --oneline -10`)
pour ne pas re-signaler ce qui vient d'être corrigé.

Cible en production : **https://dr-sonia-abahou.vercel.app/** (FR) et **/ar** (AR).

---

## 4. Axe SEO

**Déterministe (à vérifier systématiquement) :**

- `<title>` et `meta description` présents, uniques, longueurs saines (~50-60 / ~140-160 car.) sur **chaque** page FR et AR.
- Un seul `<h1>` par page ; hiérarchie h1→h2→h3 sans saut.
- `hreflang` réciproques FR ↔ AR + `x-default`, et URLs canoniques absolues cohérentes.
- `sitemap.xml` : toutes les pages réelles présentes, aucune URL morte, aucune page orpheline. `robots.txt` cohérent.
- JSON-LD valide : `Physician` / `MedicalBusiness`, `LocalBusiness` (NAP), `FAQPage`, `BreadcrumbList`. Pas de champ inventé.
- **NAP** (nom, adresse, téléphone) strictement identique partout : JSON-LD, footer, page contact, mentions légales.
- Toutes les `<img>` ont un `alt` descriptif et pertinent (pas « image », pas de bourrage de mots-clés).
- Aucun lien interne ou externe mort (vérifier les `href` du code, puis tester en prod).
- Open Graph + Twitter Card complets, image OG existante et au bon format.
- Pages motifs de consultation (`app/[serviceSlug]/`) : maillage interne présent, CTA de contact au-dessus de la ligne de flottaison.

**Éditorial (signaler, corriger seulement si évident et sans invention) :**

- Contenu mince (< 300 mots) sur une page destinée au SEO local.
- Requêtes locales manquantes : « endocrinologue Témara », « diabétologue Témara », « nutritionniste Massira », équivalents arabes.
- Cannibalisation entre deux pages qui visent la même intention.

---

## 5. Axe Design / UX / Accessibilité / Performance

**Design & UX :**

- Cohérence avec la direction artistique de `CLAUDE.md` : bleu médical, turquoise, vert doux, blanc, bleu-vert profond. Signaler toute couleur hors palette.
- Typographie : les variables `--font-serif` et `--font-medical-ui` doivent être **réellement définies** (via `next/font`). Aucune graisse fantôme (750/950 sur une police qui ne les possède pas).
- Rendu mobile 360 px, 390 px et tablette 768 px : aucun chevauchement, aucun texte tronqué, aucun débordement horizontal.
- Navigation mobile accessible (burger ou barre d'action fixe Appeler · WhatsApp · Itinéraire).
- Chemins de conversion : téléphone, WhatsApp et itinéraire atteignables en ≤ 1 interaction depuis **n'importe quelle** page, y compris les pages motifs.
- `scroll-margin-top` sur les ancres (header collant).
- Sobriété : pas d'ajout d'effets décoratifs. Un site premium a **moins** d'effets, pas plus.

**Accessibilité (WCAG 2.2 AA) :**

- Contraste ≥ 4.5:1 (texte normal) et ≥ 3:1 (grand texte, éléments d'interface).
- Navigation clavier complète, focus **visible** partout, ordre de tabulation logique.
- Cibles tactiles ≥ 44×44 px.
- `lang` correct sur `<html>` (`fr` / `ar`) et `dir="rtl"` effectif côté arabe.
- Labels de formulaire liés, messages d'erreur associés à leur champ, landmarks ARIA corrects.
- `prefers-reduced-motion` respecté par **toutes** les animations.

**Performance :**

- Core Web Vitals : LCP < 2,5 s, CLS < 0,1, INP < 200 ms.
- Images : dimensions déclarées, formats modernes, aucune image servie plus grande que son affichage, `priority` uniquement sur le LCP.
- Poids des polices, JS inutile, budget de la page d'accueil.

---

## 6. Axe Sécurité

- **Fuite de secrets** : parcourir le diff depuis le dernier audit *et* l'arbre complet pour clé API, token, `.env` commité, RIB/IBAN, identifiant, cookie de session.
- **Données patient / documents client** : aucun PDF, docx, transcription, photo privée ou formulaire rempli ne doit être suivi par git. Croiser avec `.gitignore`.
- **En-têtes HTTP** (dans `vercel.json` / `next.config.ts`) : `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`. Vérifier aussi en prod avec `curl -sI`.
- **Dépendances** : `npm audit --omit=dev`. Signaler high/critical. Ne mettre à jour automatiquement que patch/minor, jamais un major.
- **Liens sortants** : `rel="noopener noreferrer"` sur tout `target="_blank"`.
- **Formulaires** : pas d'envoi de donnée de santé vers un tiers non maîtrisé ; validation côté client ET serveur si un endpoint existe.
- **Tiers** : lister les scripts externes chargés (analytics, polices, cartes) et ce qu'ils reçoivent.

---

## 7. Axe Juridique (Maroc + RGPD si patients UE)

> ⚠️ Tu produis une **analyse de conformité, pas un avis juridique**. Termine toujours cet axe par la mention : « à faire valider par un juriste marocain ».

- **Déontologie médicale marocaine** : le site d'un médecin est une information, pas une publicité. Signaler toute formulation promotionnelle, comparative, superlative ou toute promesse de résultat.
- **Aucun faux** : témoignage, avis, statistique, cas patient. Vérifier que les avis affichés sont réels et attribuables.
- **Mentions légales** : identité, spécialité, numéro d'inscription à l'Ordre, adresse, hébergeur. **Signaler ce qui manque, ne jamais l'inventer.**
- **Loi 09-08** (protection des données personnelles, Maroc) : information des personnes, base légale, déclaration CNDP le cas échéant.
- **RGPD** : applicable si des patients de l'UE sont ciblés ou suivis (téléconsultation). Vérifier bandeau cookies avec **refus aussi simple que l'acceptation**, absence de dépôt de cookie non essentiel avant consentement, politique de confidentialité à jour, durées de conservation.
- **Cohérence** : les pages `mentions-legales`, `confidentialite` et `cookies` doivent décrire ce que le site fait **réellement** (ex. Vercel Analytics doit y figurer s'il est actif).
- **Téléconsultation** : tant qu'elle est annoncée en maintenance, aucune page ne doit laisser croire qu'elle est disponible.
- **Parité** : les pages juridiques arabes doivent dire exactement la même chose que les françaises.

---

## 8. Politique de correction

### ✅ À corriger automatiquement (dans la PR)

Uniquement ce qui est **vérifiable objectivement** et **sans risque éditorial** :

- `alt` manquants ou vides sur des images décrivables sans ambiguïté
- Métadonnées manquantes ou dupliquées, canoniques, `hreflang`, entrées de sitemap
- Liens morts internes, ancres cassées, `scroll-margin-top`
- `rel="noopener noreferrer"` manquant
- En-têtes de sécurité manquants dans `vercel.json`
- Bugs CSS de mise en page reproductibles (chevauchement, débordement, texte rogné)
- Contraste insuffisant → ajustement vers la teinte la plus proche **de la palette existante**
- Focus non visible, cible tactile trop petite, `lang`/`dir` incorrects
- Attributs d'image manquants, `priority` mal placé, dimensions absentes
- Mises à jour de dépendances **patch/minor** uniquement, si `npm run check` passe
- Correction de la parité FR/AR quand une clé de traduction existe déjà

### 🚫 À signaler seulement, jamais corriger seul

- Tout texte médical, allégation de santé, description d'acte
- Tout texte juridique (mentions légales, confidentialité, cookies)
- Toute coordonnée, tarif, horaire, diplôme, numéro d'Ordre
- Toute nouvelle traduction arabe qui n'existe pas déjà (risque de contresens médical)
- Refonte visuelle, changement de palette, remplacement du logo, nouvelle police
- Ajout ou suppression d'une page, changement d'URL, redirection
- Remplacement de photo, retrait des visuels suspectés générés par IA
- Toute mise à jour de dépendance **majeure**
- Toute vulnérabilité exploitable non triviale → §9, canal privé

---

## 9. Livraison

### A. La Pull Request (publique — contenu neutre)

Seulement s'il y a au moins un correctif :

```bash
npm run check                  # doit passer
git status --short             # vérifier, ajouter fichier par fichier
git add <fichier> ...
git commit -m "Audit hebdo AAAA-MM-JJ : <résumé factuel des correctifs>"
git push -u origin audit/AAAA-MM-JJ
gh pr create --base main --title "Audit hebdo AAAA-MM-JJ" --body "<voir ci-dessous>"
```

Corps de PR autorisé — **uniquement la liste des correctifs appliqués**, formulée neutrement :

```
## Correctifs appliqués
- SEO : 3 (metas, canonique /ar/diabete, 2 alt)
- Accessibilité : 2 (contraste bouton secondaire, focus visible nav)
- Perf : 1 (dimensions image hero)
- Parité FR/AR : vérifiée ✅

`npm run check` : ✅
Rapport complet et points non corrigés : sortie privée de la routine.
```

**Interdit dans la PR / les commits / le nom de branche :** description d'une vulnérabilité non corrigée, faille de configuration, manquement juridique, donnée personnelle. Le dépôt est public.

### B. Le rapport complet (privé)

Émettre le rapport **intégralement dans la sortie de session de la routine** (privée, consultable sur claude.ai/code/routines). Format :

```
# Audit <léger|complet> — AAAA-MM-JJ

## Verdict en une ligne par axe
| Axe | État | Évolution vs semaine dernière |

## ✅ Corrigé cette semaine (→ PR #N)
## ⚠️ À décider — nécessite ta validation
   (une ligne = le constat, l'impact, l'effort, la correction proposée)
## 🔴 Bloquant / risque
## 📉 Régressions depuis le dernier audit
## 💤 Rien à signaler sur : <axes propres>
```

Best-effort en plus, pour garder une trace durable : `gh gist create --secret` du rapport, et donner l'URL dans la sortie de session. Si le gist échoue, ce n'est pas grave — le rapport en sortie de session suffit.

### C. Si rien à faire

Pas de branche, pas de PR. Rapport court : « Aucune régression, aucun correctif nécessaire », avec la liste de ce qui a été vérifié.

---

## 10. Garde-fous d'exécution

- Une PR par semaine maximum. Si la PR de la semaine précédente n'est pas encore mergée : **ne pas en ouvrir une seconde**, rebaser dessus ou reporter, et le dire dans le rapport.
- Ne jamais dépasser ~15 correctifs dans une PR. Au-delà, garder les plus importants et reporter le reste.
- Ne jamais toucher `node_modules`, `dist/`, `out/`, `.next/`, `photos-cliente/`, `docs-cliente/`.
- Ne jamais modifier `CLAUDE.md` ni ce playbook depuis la routine.
- En cas de doute sur un correctif : **ne pas le faire**, le signaler.
