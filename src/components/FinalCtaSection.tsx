"use client";

import React from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

interface FinalCtaSectionProps {
  onOpenGetStarted: () => void;
  onOpenSeeHowItWorks: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onOpenGetStarted,
  onOpenSeeHowItWorks,
}) => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-[#171923] text-white">
      {/* Background glowing aura in green */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[380px] bg-gradient-to-r from-[#00B879]/25 via-[#008F60]/20 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00B879_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 z-10">
        
        {/* Hindi punch line */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-semibold backdrop-blur-sm shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#00B879] animate-pulse" />
          <span><em>Business badhega. Confusion nahi.</em></span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] max-w-3xl mx-auto">
          Ready to bring your business together?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
          Start with the tools you need. Keep everything connected as your business grows.
        </p>

        {/* CTA Buttons (Dropship.io dual button group) */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenGetStarted}
            className="w-full sm:w-auto group px-8 py-3.5 sm:py-4 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-base font-bold shadow-xl shadow-[#00B879]/25 hover:shadow-2xl hover:shadow-[#00B879]/35 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
          >
            <span>Get started</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenSeeHowItWorks}
            className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-semibold border border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-xs active:scale-95 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 text-[#00B879] fill-[#00B879]" />
            <span>Explore the platform</span>
          </button>
        </div>

        <p className="text-xs text-gray-400 pt-2">
          No credit card required · Free 14-day trial · Setup in 2 minutes
        </p>

      </div>
    </section>
  );
};
