import "./globals.css";
import "./custom.css";
import type { Metadata } from "next";
import { Inter, Orbitron, Space_Grotesk } from "next/font/google";
import { getSiteUrl } from "@/lib/site";
import { SITE_CONFIG } from "@/lib/site-config";
import Script from "next/script";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const siteUrl = getSiteUrl();

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Kubolor",
      url: siteUrl,
      logo: `${siteUrl}/logo.PNG`,
      description: SITE_CONFIG.description,
      sameAs: [SITE_CONFIG.links.x, SITE_CONFIG.links.telegram],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Kubolor",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Kubolor | The People's Meme Coin on Solana",
    template: "%s | Kubolor",
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Kubolor | The People's Meme Coin on Solana",
    description: SITE_CONFIG.description,
    siteName: "Kubolor",
    images: [
      {
        url: "/logo.PNG",
        width: 1200,
        height: 630,
        alt: "Kubolor - The People's Meme Coin on Solana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kubolor | The People's Meme Coin on Solana",
    description: SITE_CONFIG.description,
    images: ["/logo.PNG"],
  },
  icons: {
    icon: "/logo.PNG",
    apple: "/logo.PNG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${orbitron.variable} min-h-screen bg-kub-black font-sans text-kub-white antialiased`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
