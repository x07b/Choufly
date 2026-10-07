import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "CHOUFLY — Trouvez les produits disponibles près de vous",
  description:
    "CHOUFLY vous aide à trouver les produits disponibles dans les commerces autour de vous, avec prix, distance et disponibilité.",
  openGraph: {
    title: "CHOUFLY — Chouf win fama.",
    description: "Trouvez ce que vous cherchez. Maintenant. Près de vous.",
    locale: "fr_TN",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "CHOUFLY — Chouf win fama." },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#main">
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
