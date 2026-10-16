"use client";

import React from "react";
import { Check, Settings, Link2, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

interface HowItWorksSectionProps {
  onOpenGetStarted: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  onOpenGetStarted,
}) => {
  const steps = [
    {
      num: "01",
      title: "Choose your workspace modules",
      desc: "Select the specific modules and business workflows you need today. Add more as your team expands.",
      icon: Check,
      color: "#00B879",
    },
    {
      num: "02",
      title: "Set up your pipeline & team",
      desc: "Customize your business profile, invite team members, set roles, and define your sales pipeline stages.",
      icon: Settings,
      color: "#008F60",
    },
    {
      num: "03",
      title: "Connect website & WhatsApp",
      desc: "Bring your online presence, official WhatsApp API, and existing contact records into one platform.",
      icon: Link2,
      color: "#00B879",
    },
    {
      num: "04",
      title: "Grow with connected data",
      desc: "Use automated follow-ups, real-time KPI reports, and unified tools to close deals faster every day.",
      icon: TrendingUp,
      color: "#008F60",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#F7F9F8] border-b border-[#E8EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-[#008F60] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#00B879]" />
            <span>GET STARTED IN SIMPLE STEPS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight leading-tight">
            Everything begins with one workspace.
          </h2>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8E5] text-xs font-semibold text-[#171923]">
            <span className="w-2 h-2 rounded-full bg-[#00B879]" />
            <span>Setup aasan hai — 15 minute mein aapka workspace live.</span>
          </div>

          <p className="text-base sm:text-lg text-[#555A68] leading-relaxed">
            Transitioning to a connected business workspace shouldn&apos;t take months of implementation. Get up and running in four straightforward steps.
          </p>
        </div>

        {/* 4 Steps: Horizontal Process on Desktop & Vertical on Mobile */}
        <div className="relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#E2E8E5] -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.num}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E2E8E5] shadow-xs hover:shadow-lg hover:border-[#00B879]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-black text-[#171923]/20">
                        {st.num}
                      </span>
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-xs"
                        style={{ backgroundColor: "#E8F8F1", color: st.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-[#171923] mb-2">
                      {st.title}
                    </h3>

                    <p className="text-xs text-[#555A68] leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#E8EAF0] flex items-center justify-between text-[11px] font-semibold text-[#555A68]">
                    <span>Step {i + 1} of 4</span>
                    <span className="text-[#008F60]">Fast Setup</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenGetStarted}
            className="group px-7 py-3.5 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-xs font-bold shadow-md shadow-[#00B879]/20 hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            <span>Start Setting Up Your Workspace</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
