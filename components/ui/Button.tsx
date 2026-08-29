"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
};

const variants = {
  primary:
    "bg-gold-gradient text-kub-black font-semibold shadow-glow-button hover:shadow-glow-lg hover:scale-[1.02]",
  secondary:
    "border border-gold/40 bg-gold/10 text-gold backdrop-blur-sm hover:border-gold/60 hover:bg-gold/20 hover:shadow-glow",
  ghost:
    "border border-white/10 bg-white/5 text-kub-white backdrop-blur-sm hover:border-white/20 hover:bg-white/10",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 sm:px-8 sm:py-3.5 sm:text-base",
    variants[variant],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
