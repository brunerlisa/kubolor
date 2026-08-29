import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const features = [
  {
    title: "Fast Transactions",
    description:
      "Solana processes thousands of transactions per second — buy, sell, and transfer $KUB instantly.",
    icon: "⚡",
  },
  {
    title: "Low Fees",
    description:
      "Transaction costs are fractions of a cent. No more paying $50 in gas to swap a meme coin.",
    icon: "💰",
  },
  {
    title: "Scalability",
    description:
      "Built on infrastructure designed to scale with millions of users without congestion.",
    icon: "📈",
  },
  {
    title: "Growing Ecosystem",
    description:
      "Access Jupiter, Raydium, Phantom, and the entire Solana DeFi ecosystem from day one.",
    icon: "🌐",
  },
  {
    title: "Future Integrations",
    description:
      "Staking, NFTs, mobile apps, and cross-chain bridges — all planned for the Kubolor ecosystem.",
    icon: "🔗",
  },
];

export function WhySolana() {
  return (
    <Section id="solana">
      <Container>
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Why Solana?
            </p>
            <h2 className="font-heading mt-3 text-3xl font-bold sm:text-4xl">
              Built on the Fastest Chain
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-kub-white/70">
              Solana gives Kubolor the speed, cost efficiency, and ecosystem access
              that meme coins on other chains simply can&apos;t match.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <Card>
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="font-heading mt-4 text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-kub-white/60">
                  {feature.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
