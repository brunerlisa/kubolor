import type { Metadata } from "next";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { WhySolana } from "@/components/landing/WhySolana";
import { HowToBuy } from "@/components/landing/HowToBuy";
import { getSiteUrl } from "@/lib/site";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kubolor | The People's Meme Coin on Solana",
  description: SITE_CONFIG.description,
  alternates: {
    canonical: getSiteUrl(),
  },
  openGraph: {
    title: "Kubolor | The People's Meme Coin on Solana",
    description: SITE_CONFIG.description,
    url: getSiteUrl(),
    type: "website",
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
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <WhySolana />
      <HowToBuy />
    </main>
  );
}
