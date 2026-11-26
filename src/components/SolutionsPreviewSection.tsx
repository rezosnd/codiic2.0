"use client";

import React from "react";
import {
  ShoppingBag,
  Briefcase,
  Building2,
  Megaphone,
  ArrowRight,
} from "lucide-react";

interface SolutionsPreviewSectionProps {
  onOpenGetStarted: () => void;
}

export const SolutionsPreviewSection: React.FC<SolutionsPreviewSectionProps> = ({
  onOpenGetStarted,
}) => {
  const industries = [
    {
      id: "retail",
      name: "Retail",
      desc: "Storefront, UPI checkout, and customer order status.",
      icon: ShoppingBag,
      color: "#064E3B",
    },
    {
      id: "services",
      name: "Services",
      desc: "Client inquiries, project milestones, and recurring billing.",
      icon: Briefcase,
      color: "#043B2C",
    },
    {
      id: "real-estate",
      name: "Real Estate",
      desc: "Property inquiries, site-visit calendar, and broker pipeline.",
      icon: Building2,
      color: "#064E3B",
    },
    {
      id: "agencies",
      name: "Agencies",
      desc: "Pitch stages, client proposals, and team accountability.",
      icon: Megaphone,
      color: "#043B2C",
    },
  ];

  return (
    <section id="solutions" className="py-20 sm:py-24 bg-white border-b border-[#E6E4DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="text-[11px] font-bold tracking-widest uppercase text-[#4B5563]">
            SOLUTIONS PREVIEW
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Tailored to your business type.
          </h2>

          <p className="text-base text-[#4B5563] leading-relaxed">
            Pre-configured workflows designed around how you sell and support customers.
          </p>
        </div>

        {/* 4 Compact Visual Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={onOpenGetStarted}
                className="group cursor-pointer rounded-3xl p-6 bg-[#F7F7F2] border border-[#E4E2D8] hover:bg-white hover:border-[#064E3B]/40 hover:shadow-lg hover:shadow-[#064E3B]/5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105 shadow-xs"
                    style={{ backgroundColor: "#F1F0EA", color: item.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#043B2C] transition-colors mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E6E4DB] flex items-center justify-between text-xs font-semibold text-[#043B2C]">
                  <span>Explore setup</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
