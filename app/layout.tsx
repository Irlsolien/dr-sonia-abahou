import type { Metadata } from "next";
import "./globals.css";
import { absoluteUrl, defaultOgImage, siteName, siteUrl } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Dr Sonia Abahou | Endocrinologue Diabétologue à Témara",
    template: "%s",
  },
  description:
    "Cabinet du Dr Sonia Abahou à Témara : endocrinologie, diabétologie, nutrition, thyroïde, troubles hormonaux et maladies métaboliques.",
  keywords: [
    "Dr Sonia Abahou",
    "endocrinologue Témara",
    "diabétologue Témara",
    "thyroïde Témara",
    "nutrition médicale Témara",
    "maladies métaboliques",
  ],
  authors: [{ name: "Dr Sonia Abahou" }],
  creator: "Dr Sonia Abahou",
  publisher: "Dr Sonia Abahou",
  category: "Santé",
  alternates: {
    canonical: "/",
    languages: {
      "fr-MA": "/",
      fr: "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Dr Sonia Abahou | Cabinet d’endocrinologie à Témara",
    description:
      "Informations pratiques du cabinet : diabète, thyroïde, nutrition et troubles hormonaux à Témara.",
    siteName,
    type: "website",
    locale: "fr_MA",
    url: "/",
    images: [
      {
        url: defaultOgImage,
        width: 600,
        height: 600,
        alt: "Portrait du Dr Sonia Abahou",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Dr Sonia Abahou | Cabinet d’endocrinologie à Témara",
    description:
      "Informations pratiques du cabinet : diabète, thyroïde, nutrition et troubles hormonaux à Témara.",
    images: [absoluteUrl(defaultOgImage)],
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-MA">
      <body>{children}</body>
    </html>
  );
}
