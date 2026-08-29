"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error boundary:", error);
  }, [error]);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-28">
      <h1 className="font-heading text-3xl font-bold text-kub-white">
        Something went wrong
      </h1>
      <p className="text-kub-white/60">
        We ran into a temporary issue. Please refresh the page or try again in a
        moment.
      </p>
      <button
        onClick={reset}
        className="w-fit rounded-xl bg-gold-gradient px-5 py-2 text-sm font-semibold text-kub-black shadow-glow-button hover:shadow-glow-lg"
      >
        Try again
      </button>
    </main>
  );
}
