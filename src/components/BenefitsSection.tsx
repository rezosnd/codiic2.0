"use client";

import React from "react";
import { Layers, Kanban, Clock, Sparkles } from "lucide-react";

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Less switching",
      desc: "Your key business tools in one workspace.",
      icon: Layers,
      color: "#00B879",
    },
    {
      title: "Clearer sales",
      desc: "Know where your leads and deals stand.",
      icon: Kanban,
      color: "#008F60",
    },
    {
      title: "Smoother follow-ups",
      desc: "Keep the next action visible.",
      icon: Clock,
      color: "#00B879",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#F7F9F8] border-b border-[#E8EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="text-[11px] font-bold tracking-widest uppercase text-[#5A6270]">
            WHY CODIIC
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171923] tracking-tight">
            Built for everyday clarity.
          </h2>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-xs font-semibold text-[#008F60]">
            <Sparkles className="w-3.5 h-3.5 text-[#00B879]" />
            <span><em>Kaam smart, growth fast.</em></span>
          </div>
        </div>

        {/* 3 Simple Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-[#E2E8E5] shadow-xs hover:border-[#00B879]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-xs"
                    style={{ backgroundColor: "#E8F8F1", color: card.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#171923] mb-2">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[#555A68] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
