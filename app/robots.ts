import type { MetadataRoute } from "next";
import { absoluteUrl, siteUrl } from "./seo";

export const dynamic = "force-static";

const disallowedPaths = ["/_sites-preview/", "/api/", "/admin/", "/private/"];

/**
 * Agents des moteurs de réponse générative (GEO).
 *
 * Deux familles s'y mélangent, et c'est volontaire :
 *
 * - les **robots d'exploration** (`GPTBot`, `ClaudeBot`, `PerplexityBot`,
 *   `Amazonbot`…), qui constituent l'index dans lequel le moteur puise ;
 * - les **agents de récupération à la demande** (`ChatGPT-User`,
 *   `Claude-User`, `Perplexity-User`, `DuckAssistBot`…), déclenchés quand un
 *   internaute pose une question et que le moteur va lire la page en direct.
 *
 * `Google-Extended` et `Applebot-Extended` ne sont pas des robots : ce sont des
 * jetons de contrôle. Les autoriser explicitement, c'est accepter que les
 * pages nourrissent les réponses de Gemini / AI Overviews et d'Apple
 * Intelligence — exactement ce qu'on cherche pour un cabinet médical dont on
 * veut que les coordonnées soient citées correctement.
 *
 * L'autorisation reste identique à celle du robot générique : tout est ouvert
 * sauf les chemins techniques. Rien de confidentiel n'est publié sur le site.
 */
const answerEngineAgents = [
  /* OpenAI — ChatGPT et sa recherche */
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  /* Anthropic — Claude */
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  /* Google — Gemini et AI Overviews */
  "Google-Extended",
  /* Microsoft — Copilot et Bing */
  "bingbot",
  /* Apple — Siri et Apple Intelligence */
  "Applebot",
  "Applebot-Extended",
  /* Perplexity */
  "PerplexityBot",
  "Perplexity-User",
  /* Autres moteurs de réponse */
  "Amazonbot",
  "meta-externalagent",
  "MistralAI-User",
  "DuckAssistBot",
  "YouBot",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: answerEngineAgents,
        allow: "/",
        disallow: disallowedPaths,
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}
