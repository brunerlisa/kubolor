"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ParticleBackground } from "@/components/landing/ParticleBackground";
import { SITE_CONFIG } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-start overflow-hidden pt-28 pb-16 sm:pt-36 lg:pt-44 lg:pb-24">
      <ParticleBackground />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Rotating coin */}
          <FadeIn delay={0.1}>
            <motion.div
              className="relative mb-8 sm:mb-12 lg:mb-16"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 scale-150 rounded-full bg-gold/20 blur-3xl" />
              <Image
                src="/logo.PNG"
                alt="Kubolor Coin"
                width={200}
                height={200}
                className="relative rounded-full drop-shadow-glow-lg sm:h-[280px] sm:w-[280px]"
                priority
              />
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mb-4 inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold sm:text-sm">
              Solana Meme Coin
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h1 className="font-heading max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              The People&apos;s Meme Coin{" "}
              <span className="gold-text-gradient">on Solana.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-6 max-w-2xl text-base text-kub-white/70 sm:text-lg md:text-xl">
              Fast. Community Driven. Built for the Next Generation of Meme
              Culture.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href={SITE_CONFIG.links.chart} external variant="secondary">
                View Chart
              </Button>
              <Button href={SITE_CONFIG.links.telegram} external variant="ghost">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Telegram
              </Button>
              <Button href={SITE_CONFIG.links.x} external variant="ghost">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.9 3H21l-6.6 7.5L22 21h-6.2l-4-5.2L7.1 21H5l7-8.1L2 3h6.3l3.6 4.7L18.9 3z" />
                </svg>
                X
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-kub-black to-transparent" />
    </section>
  );
}
