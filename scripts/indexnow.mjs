/**
 * Notification IndexNow.
 *
 * IndexNow prévient en une requête les moteurs qui partagent le protocole
 * (Bing, Yandex, Seznam, Naver…) qu'une URL a changé. Bing alimente Copilot et
 * la recherche de ChatGPT : sans cette notification, un site statique qui
 * change peu peut rester des semaines avec une version périmée dans leur
 * index. Google n'utilise pas IndexNow ; la Search Console reste sa voie.
 *
 * La clé est publique par construction : le protocole exige qu'elle soit
 * servie à la racine du site (`/<clé>.txt`), c'est ainsi que le moteur vérifie
 * que l'expéditeur contrôle bien le domaine. Rien de secret n'est exposé ici.
 *
 * Usage, après un déploiement en production :
 *   npm run indexnow                            → toutes les URL du sitemap
 *   npm run indexnow -- / /ar /diabete-temara   → chemins précis
 */
const site = "https://www.drsoniaabahou.com";
const key = "f93e673fc72e455f82cdc5c520469ee4";
const keyLocation = `${site}/${key}.txt`;
const endpoint = "https://api.indexnow.org/indexnow";

async function sitemapUrls() {
  const response = await fetch(`${site}/sitemap.xml`);
  if (!response.ok) {
    throw new Error(`sitemap.xml : HTTP ${response.status}`);
  }
  const xml = await response.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => match[1].trim())
    .filter((url) => url.startsWith(site));
}

async function verifyKey() {
  const response = await fetch(keyLocation);
  const body = (await response.text()).trim();
  if (!response.ok || body !== key) {
    throw new Error(
      `Clé IndexNow introuvable à ${keyLocation} (HTTP ${response.status}). Déployer d'abord.`,
    );
  }
}

async function main() {
  const args = process.argv.slice(2);
  const urlList =
    args.length > 0
      ? args.map((path) => (path.startsWith("http") ? path : `${site}${path}`))
      : await sitemapUrls();

  if (urlList.length === 0) {
    throw new Error("Aucune URL à soumettre.");
  }

  await verifyKey();

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(site).host,
      key,
      keyLocation,
      urlList,
    }),
  });

  /* 200 : reçu · 202 : reçu, clé en cours de validation · 4xx : refus. */
  console.log(`IndexNow → HTTP ${response.status} pour ${urlList.length} URL`);
  for (const url of urlList) {
    console.log(`  ${url}`);
  }
  if (response.status >= 400) {
    console.error(await response.text());
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
