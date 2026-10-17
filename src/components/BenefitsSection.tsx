"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
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
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E6E4] bg-white text-xs font-semibold text-[#5A6270]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B879]" />
            Why CODIIC
          </div>

          <h2 className="mt-5 text-[34px] sm:text-5xl lg:text-[56px] font-bold text-[#171923] tracking-[-0.035em] leading-[1.05]">
            Built for{" "}
            <em className="font-serif italic font-normal text-[#008F60]">everyday clarity.</em>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#5A6270] leading-relaxed">
            Kaam smart, growth fast. Fewer tabs, clearer numbers and follow-ups that never slip.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {benefits.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group bg-[#F4F7F5] rounded-[24px] p-7 sm:p-8 hover:bg-[#EEF3F0] transition-colors flex flex-col"
              >
                <Icon className="w-12 h-12 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" />

                <h3 className="mt-6 text-xl font-bold text-[#171923] tracking-tight">
                  {card.title}
                </h3>

                <p className="mt-1.5 text-[15px] font-semibold text-[#171923] leading-snug">
                  {card.desc}
                </p>

                <p className="mt-2 text-sm text-[#5A6270] leading-relaxed">
                  {card.subdesc}
                </p>

                <div className="mt-auto pt-6 flex items-center gap-2 text-sm font-semibold text-[#008F60]">
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
