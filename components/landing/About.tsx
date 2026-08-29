import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export function About() {
  return (
    <Section id="about" className="bg-kub-black-secondary/50">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              About Kubolor
            </p>
            <h2 className="font-heading mt-3 text-3xl font-bold sm:text-4xl">
              More Than a Meme. A Movement.
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-6 text-base leading-relaxed text-kub-white/70 sm:text-lg">
              Kubolor is a Solana-based meme coin built for the people — by the
              people. We combine the energy of meme culture with a premium brand
              vision, focused on community, creativity, and long-term ecosystem
              growth.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="mt-4 text-base leading-relaxed text-kub-white/70 sm:text-lg">
              This isn&apos;t a joke coin. Kubolor is designed to become the next
              billion-dollar community token — with future utilities including NFTs,
              staking, DAO governance, and a full ecosystem built around our
              holders.
            </p>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
