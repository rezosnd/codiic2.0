"use client";

import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { ArrowRight } from "lucide-react";

/**
 * Skiper31 — scroll-scrubbed word-by-word text reveal (21st.dev).
 * The paragraph stays pinned while each word brightens in sequence as the
 * user scrolls. GPU-friendly opacity only. Fully readable static fallback
 * when `prefers-reduced-motion` is set.
 */

const TEXT =
  "Your website captures the lead. Your CRM remembers every conversation. WhatsApp closes the deal. Payments update the pipeline. CODIIC keeps every step connected — so nothing slips through.";

const MINT_WORDS = new Set(["CODIIC", "connected"]);

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const mint = MINT_WORDS.has(children.replace(/[^A-Za-z]/g, ""));

  return (
    <span className="relative inline-block">
      {/* Dim base layer keeps the word readable & selectable throughout */}
      <span className={mint ? "text-[#36D6A6]/25" : "text-white/[0.12]"} aria-hidden>
        {children}
      </span>
      <motion.span
        style={{ opacity }}
        className={`absolute inset-0 ${mint ? "text-[#9FE8C6]" : "text-white"}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Skiper31({ onOpenGetStarted }: { onOpenGetStarted?: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const words = TEXT.split(" ");

  const content = (
    <div className="mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-5 sm:px-8 text-center">
      <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#9FE8C6]/80">
        Why CODIIC works
      </p>

      <p className="mt-7 flex flex-wrap justify-center gap-x-[0.32em] gap-y-2 text-2xl sm:text-4xl lg:text-[44px] font-bold leading-[1.25] tracking-[-0.02em]">
        {reducedMotion
          ? words.map((word, i) => {
              const mint = MINT_WORDS.has(word.replace(/[^A-Za-z]/g, ""));
              return (
                <span key={i} className={mint ? "text-[#9FE8C6]" : "text-white"}>
                  {word}
                </span>
              );
            })
          : words.map((word, i) => {
              const start = i / words.length;
              const end = (i + 1) / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          type="button"
          onClick={onOpenGetStarted}
          className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#36D6A6] hover:bg-[#2CC297] text-[#03271E] text-sm font-bold shadow-[0_14px_34px_-12px_rgba(54,214,166,0.55)] transition-all duration-200 active:scale-[0.98] cursor-pointer"
        >
          Start Free
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        <a
          href="#tools"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white text-sm font-semibold border border-white/15 transition-colors duration-200"
        >
          See all 8 tools
        </a>
      </div>
    </div>
  );

  if (reducedMotion) {
    return (
      <section
        ref={sectionRef}
        aria-label="Why CODIIC works"
        className="relative bg-[#03271E] py-24 sm:py-32"
      >
        {content}
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      aria-label="Why CODIIC works"
      className="relative h-[220vh] bg-[#03271E]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">{content}</div>
    </section>
  );
}
