import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dr-sonia-abahou.vercel.app"),
  title: "Dr Sonia Abahou | Endocrinologue Diabétologue à Témara",
  description:
    "Cabinet du Dr Sonia Abahou à Témara : endocrinologie, diabétologie, nutrition, thyroïde, troubles hormonaux et maladies métaboliques.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Dr Sonia Abahou | Cabinet d’endocrinologie à Témara",
    description:
      "Informations pratiques du cabinet : diabète, thyroïde, nutrition et troubles hormonaux à Témara.",
    type: "website",
    locale: "fr_MA",
    url: "/",
    images: [
      {
        url: "/dr-sonia-abahou.jpg",
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
    images: ["/dr-sonia-abahou.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
