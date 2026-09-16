import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    // Découpage CSS par route : garde les `@font-face` latins préchargés hors
    // du chunk partagé avec `globals.css`, sinon `/ar` précharge aussi
    // Fraunces et Public Sans (94 Ko inutiles sur le chemin critique mobile).
    cssChunking: "graph",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
