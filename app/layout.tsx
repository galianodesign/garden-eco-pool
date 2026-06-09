import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fraunces = localFont({
  src: [
    { path: "./fonts/Fraunces.ttf", style: "normal" },
    { path: "./fonts/Fraunces-Italic.ttf", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = localFont({
  src: "./fonts/Outfit.ttf",
  variable: "--font-outfit",
  display: "swap",
});

const SITE_URL = "https://gardenecopool.es";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Garden Eco Pool | Mantenimiento de piscinas y jardines en Vélez-Málaga",
  description:
    "Mantenimiento profesional de piscinas y jardines, reformas integrales, servicios para comunidades y electricidad en Vélez-Málaga, Málaga y Costa del Sol. Presupuesto gratis y sin compromiso.",
  keywords: [
    "mantenimiento piscinas Vélez-Málaga",
    "jardinería Vélez-Málaga",
    "reformas Málaga",
    "mantenimiento comunidades Costa del Sol",
    "limpieza piscinas Málaga",
  ],
  authors: [{ name: "Garden Eco Pool" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Garden Eco Pool",
    title: "Garden Eco Pool | Piscinas, jardines y reformas en Vélez-Málaga",
    description:
      "Mantenimiento profesional de piscinas y jardines, reformas y servicios para comunidades en Vélez-Málaga y Costa del Sol. Presupuesto gratis.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Garden Eco Pool",
    image: `${SITE_URL}/logo.png`,
    "@id": SITE_URL,
    url: SITE_URL,
    telephone: "+34687537441",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cortijo León, 31",
      addressLocality: "Vélez-Málaga",
      postalCode: "29790",
      addressRegion: "Málaga",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.7896,
      longitude: -4.1006,
    },
    areaServed: [
      "Vélez-Málaga",
      "Torre del Mar",
      "Benajarafe",
      "Rincón de la Victoria",
      "Nerja",
      "Torrox",
      "Málaga",
      "Algarrobo",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "12",
    },
    description:
      "Mantenimiento de piscinas y jardines, reformas integrales, servicios para comunidades y electricidad en Vélez-Málaga y Costa del Sol.",
  };

  return (
    <html lang="es" className={`${fraunces.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
