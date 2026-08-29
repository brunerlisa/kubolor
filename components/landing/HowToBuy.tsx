import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const steps = [
  {
    step: "01",
    title: "Install Phantom Wallet",
    description:
      "Download Phantom from phantom.app and create your Solana wallet. Keep your seed phrase safe.",
    icon: "👻",
  },
  {
    step: "02",
    title: "Fund with SOL",
    description:
      "Purchase SOL on an exchange and transfer it to your Phantom wallet address.",
    icon: "◎",
  },
  {
    step: "03",
    title: "Swap for $KUB",
    description:
      "Open your preferred Solana DEX, paste the official Kubolor contract address, and swap SOL for $KUB.",
    icon: "🔄",
  },
  {
    step: "04",
    title: "Hold & Join the Community",
    description:
      "You're in. Hold your $KUB, join our social channels, and become part of the movement.",
    icon: "🚀",
  },
];

export function HowToBuy() {
  return (
    <Section id="buy" className="bg-kub-black-secondary/50">
      <Container>
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              How to Buy
            </p>
            <h2 className="font-heading mt-3 text-3xl font-bold sm:text-4xl">
              Get $KUB in 4 Steps
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <StaggerItem key={step.step}>
              <Card className="relative h-full">
                <span className="font-mono text-4xl font-bold text-gold/20">
                  {step.step}
                </span>
                <span className="mt-2 block text-3xl">{step.icon}</span>
                <h3 className="font-heading mt-4 text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-kub-white/60">
                  {step.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
