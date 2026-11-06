import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import type { CSSProperties, ReactNode } from "react";
import { brandColors, clinic, clinicJsonLd, pageTitle, siteOrigin } from "@/lib/clinic";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-manrope",
  display: "swap",
});

const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const origin = siteOrigin();

export const metadata: Metadata = {
  title: pageTitle(),
  description: clinic.meta.description,
  ...(origin
    ? {
        metadataBase: origin,
        alternates: { canonical: "/" },
      }
    : {}),
  openGraph: {
    title: pageTitle(),
    description: clinic.meta.description,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: clinic.hero.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle(),
    description: clinic.meta.description,
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: brandColors.ivory,
  colorScheme: "light",
};

const theme = {
  "--ivory": brandColors.ivory,
  "--white": brandColors.white,
  "--teal": brandColors.teal,
  "--teal-deep": brandColors["teal-deep"],
  "--sage": brandColors.sage,
  "--charcoal": brandColors.charcoal,
  "--grey": brandColors.grey,
  "--muted": brandColors.muted,
  "--stone": brandColors.stone,
} as CSSProperties;

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = clinicJsonLd();

  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`} style={theme}>
      <body className="min-h-full bg-ivory font-sans text-charcoal antialiased">
        <div id="top" />
        {children}
        {jsonLd ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
            }}
          />
        ) : null}
      </body>
    </html>
  );
}
