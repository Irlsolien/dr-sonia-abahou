import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    // Découpage CSS par route : garde les `@font-face` latins préchargés hors
    // du chunk partagé avec `globals.css`, sinon `/ar` précharge aussi
    // Fraunces et Public Sans (94 Ko inutiles sur le chemin critique mobile).
    cssChunking: "graph",
    // Cache disque Turbopack désactivé pour `next build` (activé par défaut
    // depuis Next 16.3) : Vercel restaure `.next/cache` entre deux builds et
    // le déploiement e40e98c est sorti avec le nouveau JavaScript mais
    // l'ancien `globals.css`. Le site se construit en une minute : un build
    // à froid, toujours cohérent, vaut mieux qu'un build tiède périmé.
    turbopackFileSystemCacheForBuild: false,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
