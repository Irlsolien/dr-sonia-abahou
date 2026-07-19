import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr Sonia Abahou | Endocrinologue Diabétologue à Témara",
  description:
    "Cabinet du Dr Sonia Abahou à Témara: endocrinologie, diabétologie, nutrition, thyroïde et maladies métaboliques.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Dr Sonia Abahou | Cabinet d’endocrinologie à Témara",
    description:
      "Prise en charge du diabète, de la thyroïde, de la nutrition et des troubles hormonaux à Témara.",
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
      <body className={`${figtree.variable} antialiased`}>{children}</body>
    </html>
  );
}
