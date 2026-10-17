"use client";

import React from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import {
  LessSwitchingColorIcon,
  ClearerSalesColorIcon,
  SmootherFollowupsColorIcon,
} from "./ColorfulProductIcons";

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Less switching",
      desc: "Your key business tools in one workspace.",
      subdesc: "Eliminate constant app hopping between website forms, disjointed CRM spreadsheets, and WhatsApp message logs.",
      icon: LessSwitchingColorIcon,
      color: "#00B879",
      bullet: "Unified single login",
    },
    {
      title: "Clearer sales",
      desc: "Know where your leads and deals stand.",
      subdesc: "Visual stage tracking keeps prospective client milestones, deal values, and representative ownership crystal clear.",
      icon: ClearerSalesColorIcon,
      color: "#008F60",
      bullet: "Weighted INR pipeline",
    },
    {
      title: "Smoother follow-ups",
      desc: "Keep the next action visible.",
      subdesc: "Automated instant responses and structured reminders ensure no prospective buyer inquiry slips through the cracks.",
      icon: SmootherFollowupsColorIcon,
      color: "#00B879",
      bullet: "Zero lead leakage",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#E9EBE7] border-b border-[#D9DED8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E2E6E4] text-[11px] font-bold tracking-widest uppercase text-[#5A6270] shadow-2xs">
            <span>WHY CODIIC</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight leading-tight">
            Built for everyday clarity.
          </h2>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-xs font-semibold text-[#008F60]">
            <Sparkles className="w-3.5 h-3.5 text-[#00B879]" />
            <span><em>Kaam smart, growth fast.</em></span>
          </div>
        </div>

        {/* 3 Simple Benefits Grid (Dropship.io balanced cards & spacious rhythm) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 max-w-5xl mx-auto">
          {benefits.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-7 sm:p-8 border border-[#E2E6E4] shadow-xs hover:border-[#00B879]/50 hover:shadow-xl hover:shadow-[#00B879]/8 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="w-12 h-12 shrink-0 drop-shadow-[0_8px_16px_rgba(23,25,35,0.16)] transition-transform duration-300 group-hover:-translate-y-0.5" />
                    <span className="text-[10px] font-mono font-bold text-[#8A90A0]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#171923] group-hover:text-[#008F60] transition-colors mb-2">
                    {card.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#171923] mb-2 leading-snug">
                    {card.desc}
                  </p>

                  <p className="text-xs text-[#555A68] leading-relaxed">
                    {card.subdesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8EAF0] flex items-center gap-2 text-xs font-semibold text-[#008F60]">
                  <CheckCircle2 className="w-4 h-4 text-[#00B879]" strokeWidth={2} />
                  <span>{card.bullet}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
