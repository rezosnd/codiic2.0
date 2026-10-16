"use client";

import React from "react";
import { Globe, Users, Kanban, Zap, BarChart3, ArrowUpRight } from "lucide-react";

export const FeatureStrip: React.FC = () => {
  const features = [
    {
      id: "website-builder",
      title: "Storefront & Pages",
      tagline: "Live e-commerce catalog",
      hinglish: "Code ka jhanjhat khatam",
      icon: Globe,
      color: "#00B879",
      href: "#website-builder",
    },
    {
      id: "crm",
      title: "Customer CRM",
      tagline: "360° lead intelligence",
      hinglish: "Follow-up bhoolna ab band",
      icon: Users,
      color: "#008F60",
      href: "#crm",
    },
    {
      id: "pipeline",
      title: "Sales Pipeline",
      tagline: "Visual Kanban deal stages",
      hinglish: "Har deal, har stage saaf",
      icon: Kanban,
      color: "#00B879",
      href: "#pipeline",
    },
    {
      id: "automation",
      title: "Workflow Automation",
      tagline: "Instant WhatsApp & triggers",
      hinglish: "Kaam smart, growth fast",
      icon: Zap,
      color: "#008F60",
      href: "#automation",
    },
    {
      id: "analytics",
      title: "Business Analytics",
      tagline: "Live revenue & conversion",
      hinglish: "Decisions data ke saath",
      icon: BarChart3,
      color: "#00B879",
      href: "#capabilities",
    },
  ];

  return (
    <section className="relative z-10 -mt-5 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E2E8E5] rounded-3xl shadow-sm p-3 sm:p-4">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#E8EAF0]">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="group flex flex-col p-3.5 sm:p-4 hover:bg-[#F7F9F8] rounded-2xl transition-all duration-150"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 duration-200"
                      style={{ backgroundColor: "#E8F8F1", color: item.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#8A90A0] group-hover:text-[#00B879] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="text-sm font-bold text-[#171923] group-hover:text-[#008F60] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555A68] mt-0.5 line-clamp-1">
                    {item.tagline}
                  </p>
                  <div className="mt-2.5 text-[10px] font-semibold text-[#008F60] bg-[#E8F8F1] px-2 py-0.5 rounded-md w-fit border border-[#00B879]/20">
                    {item.hinglish}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
