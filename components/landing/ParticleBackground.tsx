"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: ((i * 17) % 97) + 1.5,
  y: ((i * 29) % 97) + 1.5,
  size: (i % 3) + 1,
  duration: 10 + (i % 10),
  delay: i % 5,
}));

const FLOATING_COINS = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  left: 10 + i * 20,
  top: 20 + (i % 3) * 25,
}));

export function ParticleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 grid-bg opacity-40"
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />

      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {FLOATING_COINS.map((coin) => (
        <motion.div
          key={`coin-${coin.id}`}
          className="absolute opacity-20"
          style={{
            left: `${coin.left}%`,
            top: `${coin.top}%`,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: {
              duration: 4 + coin.id,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 20 + coin.id * 5,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          <Image
            src="/logo.PNG"
            alt=""
            width={40}
            height={40}
            className="rounded-full"
            aria-hidden
          />
        </motion.div>
      ))}
    </div>
  );
}
