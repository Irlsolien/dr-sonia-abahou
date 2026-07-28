import type { MetadataRoute } from "next";
import { absoluteUrl, siteUrl } from "./seo";

export const dynamic = "force-static";

const disallowedPaths = ["/_sites-preview/", "/api/", "/admin/", "/private/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Claude-SearchBot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Claude-User",
        allow: "/",
        disallow: disallowedPaths,
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}
