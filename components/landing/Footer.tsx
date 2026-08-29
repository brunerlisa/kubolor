import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-kub-black">
      <Container className="py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-kub-white/40">
            © {new Date().getFullYear()} Kubolor. All rights reserved.
          </p>
          <p className="text-xs text-kub-white/30">
            Not financial advice. Cryptocurrency investments carry risk.
          </p>
        </div>
      </Container>
    </footer>
  );
}
