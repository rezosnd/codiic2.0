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
      color: "#064E3B",
      href: "#website-builder",
    },
    {
      id: "crm",
      title: "Customer CRM",
      tagline: "360° lead intelligence",
      hinglish: "Follow-up bhoolna ab band",
      icon: Users,
      color: "#043B2C",
      href: "#crm",
    },
    {
      id: "pipeline",
      title: "Sales Pipeline",
      tagline: "Visual Kanban deal stages",
      hinglish: "Har deal, har stage saaf",
      icon: Kanban,
      color: "#064E3B",
      href: "#pipeline",
    },
    {
      id: "automation",
      title: "Workflow Automation",
      tagline: "Instant WhatsApp & triggers",
      hinglish: "Kaam smart, growth fast",
      icon: Zap,
      color: "#043B2C",
      href: "#automation",
    },
    {
      id: "analytics",
      title: "Business Analytics",
      tagline: "Live revenue & conversion",
      hinglish: "Decisions data ke saath",
      icon: BarChart3,
      color: "#064E3B",
      href: "#capabilities",
    },
  ];

  return (
    <section className="relative z-10 -mt-5 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E4E2D8] rounded-3xl shadow-sm p-3 sm:p-4">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#E6E4DB]">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="group flex flex-col p-3.5 sm:p-4 hover:bg-[#F7F7F2] rounded-2xl transition-all duration-150"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 duration-200"
                      style={{ backgroundColor: "#F1F0EA", color: item.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#064E3B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="text-sm font-bold text-[#111827] group-hover:text-[#043B2C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] mt-0.5 line-clamp-1">
                    {item.tagline}
                  </p>
                  <div className="mt-2.5 text-[10px] font-semibold text-[#043B2C] bg-[#F1F0EA] px-2 py-0.5 rounded-md w-fit border border-[#064E3B]/20">
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
