"use client";

import React from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { HeroProductMockup } from "./HeroProductMockup";

interface HeroProps {
  onOpenGetStarted: () => void;
  onOpenSeeHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenGetStarted,
  onOpenSeeHowItWorks,
}) => {
  return (
    <section className="relative pt-3 sm:pt-6 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Rounded Hero Panel (Tuyo-inspired composition) */}
        <div className="relative bg-[#F7F9F8] rounded-[32px] sm:rounded-[44px] lg:rounded-[48px] border border-[#E2E6E4] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-8 lg:px-12 text-center overflow-hidden shadow-xs">
          
          {/* Subtle grid texture & ambient mint glow */}
          <div
            className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial-mint pointer-events-none"
            aria-hidden="true"
          />
          {/* Soft atmospheric gradient lighting near the bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-64 sm:h-80 bg-gradient-to-t from-[#E8F8F1]/90 via-[#E8F8F1]/40 to-transparent pointer-events-none"
            aria-hidden="true"
          />
          {/* Tuyo-inspired luminous atmospheric glow behind product visual */}
          <div
            className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[720px] sm:w-[920px] h-[360px] bg-gradient-to-t from-[#00B879]/20 via-[#38E19B]/10 to-transparent rounded-[50%] blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Hero Content (Clean, Centered, Authoritative) */}
          <div className="relative z-10 max-w-4xl mx-auto">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E6E4] text-[11px] font-bold tracking-widest uppercase text-[#5A6270] shadow-xs mb-6 sm:mb-7">
              <span className="w-2 h-2 rounded-full bg-[#00B879]" />
              <span>ALL-IN-ONE BUSINESS PLATFORM</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#171923] tracking-tight leading-[1.08] mb-5 sm:mb-6">
              All your business.{" "}
              <span className="block text-[#171923]">
                One connected platform.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-[#5A6270] leading-relaxed max-w-2xl mx-auto mb-4 sm:mb-5">
              Build your website, manage customers, track sales, and automate everyday work—all from one place.
            </p>

            {/* Hindi Punch Line */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-xs font-semibold text-[#008F60] mb-5 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00B879] animate-pulse" />
              <span><em>Ek platform. Poora business.</em></span>
            </div>

            {/* Trust & Proof Capsule (Tuyo-inspired sleek badge) */}
            <div className="flex justify-center mb-8 sm:mb-10">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#E2E6E4] text-xs text-[#5A6270] shadow-xs">
                <div className="flex items-center gap-1 font-semibold text-[#171923]">
                  <span className="text-amber-500">★</span>
                  <span>4.9</span>
                  <span className="text-[#5A6270] font-normal">rating</span>
                </div>
                <span className="text-gray-300 hidden sm:inline">·</span>
                <span className="font-medium text-[#171923]">2,400+ Indian Businesses</span>
                <span className="text-gray-300 hidden sm:inline">·</span>
                <span className="text-[#008F60] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B879] animate-pulse" />
                  WhatsApp & UPI Ready
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto mb-10 sm:mb-14">
              <button
                onClick={onOpenGetStarted}
                id="hero-primary-cta"
                className="w-full sm:w-auto group px-8 py-3.5 sm:py-4 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-base font-bold shadow-lg shadow-[#00B879]/25 hover:shadow-xl hover:shadow-[#00B879]/35 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <span>Get started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenSeeHowItWorks}
                id="hero-secondary-cta"
                className="w-full sm:w-auto group px-6 py-3.5 sm:py-4 rounded-full bg-white hover:bg-[#F7F9F8] text-[#171923] text-sm font-semibold border border-[#E2E6E4] hover:border-[#00B879]/40 transition-all flex items-center justify-center gap-2 shadow-xs active:scale-95 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-[#00B879] fill-[#00B879]" />
                <span>Explore the platform</span>
              </button>
            </div>

          </div>

          {/* Compelling Product Visual: Subtle Overlap on Lower Edge */}
          <div className="relative z-20 -mb-20 sm:-mb-28 lg:-mb-36 px-1 sm:px-4">
            <HeroProductMockup
              onOpenGetStarted={onOpenGetStarted}
              onOpenSeeHowItWorks={onOpenSeeHowItWorks}
            />
          </div>

        </div>

      </div>
    </section>
  );
};
