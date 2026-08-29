import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-orbitron)", "Orbitron", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        gold: {
          DEFAULT: "#F5C542",
          metallic: "#D89B1D",
          highlight: "#FFD966",
        },
        kub: {
          black: "#0B0B0D",
          "black-secondary": "#1A1A1F",
          gray: "#22252B",
          white: "#F5F5F5",
          orange: "#E88B1A",
        },
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #F5C542 0%, #D89B1D 50%, #FFD966 100%)",
        "gold-gradient-subtle":
          "linear-gradient(135deg, rgba(245,197,66,0.15) 0%, rgba(216,155,29,0.08) 100%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(245, 197, 66, 0.3)",
        "glow-lg": "0 0 40px rgba(245, 197, 66, 0.4)",
        "glow-button":
          "0 0 20px rgba(245, 197, 66, 0.4), 0 4px 14px rgba(0, 0, 0, 0.4)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
