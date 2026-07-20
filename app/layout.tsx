import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr Sonia Abahou | Endocrinologue Diabétologue à Témara",
  description:
    "Cabinet du Dr Sonia Abahou à Témara : endocrinologie, diabétologie, nutrition, thyroïde, troubles hormonaux et maladies métaboliques.",
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
