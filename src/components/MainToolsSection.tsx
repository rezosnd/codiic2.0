"use client";

import React from "react";
import {
  Globe,
  Users,
  Kanban,
  Zap,
  BarChart3,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

interface MainToolsSectionProps {
  onOpenGetStarted: () => void;
}

export const MainToolsSection: React.FC<MainToolsSectionProps> = ({
  onOpenGetStarted,
}) => {
  const tools = [
    {
      id: "website-builder",
      title: "Website Builder",
      desc: "Create your online presence with drag-and-drop sections.",
      icon: Globe,
      color: "#00B879",
      previewType: "website",
    },
    {
      id: "crm",
      title: "Customer CRM",
      desc: "Keep customer leads organized from WhatsApp and web.",
      icon: Users,
      color: "#008F60",
      previewType: "crm",
    },
    {
      id: "sales-pipeline",
      title: "Sales Pipeline",
      desc: "See every deal at a glance from inquiry to contract.",
      icon: Kanban,
      color: "#00B879",
      previewType: "pipeline",
    },
    {
      id: "automation",
      title: "Automation",
      desc: "Simplify repetitive follow-ups with instant triggers.",
      icon: Zap,
      color: "#008F60",
      previewType: "automation",
    },
    {
      id: "analytics",
      title: "Analytics",
      desc: "Understand business activity and revenue in real time.",
      icon: BarChart3,
      color: "#00B879",
      previewType: "analytics",
    },
  ];

  return (
    <section
      id="tools"
      className="pt-24 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 bg-[#F7F9F8] border-b border-[#E8EAF0] relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E2E6E4] text-[11px] font-bold tracking-widest uppercase text-[#5A6270] shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00B879]" />
            <span>CORE PLATFORM CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#171923] tracking-tight">
            Five essential tools. One connected workspace.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5A6270]">
            Every module works together seamlessly without third-party connector plugins.
          </p>
        </div>

        {/* 5 Tools Grid with Clean Product Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                onClick={onOpenGetStarted}
                className="group cursor-pointer bg-white rounded-3xl p-5 border border-[#E2E6E4] hover:border-[#00B879]/50 hover:shadow-xl hover:shadow-[#00B879]/8 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Tool Header: Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                      style={{ backgroundColor: "#E8F8F1", color: tool.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#171923] group-hover:text-[#008F60] transition-colors">
                        {tool.title}
                      </h3>
                      <span className="text-[10px] text-[#008F60] font-semibold">
                        Native module
                      </span>
                    </div>
                  </div>

                  {/* UI Preview Area */}
                  <div className="my-3 rounded-2xl bg-[#F7F9F8] border border-[#E8EAF0] p-3 overflow-hidden min-h-[110px] flex flex-col justify-center">
                    
                    {/* Website Builder Preview */}
                    {tool.previewType === "website" && (
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[9px] bg-white px-2 py-1 rounded-md border border-[#E2E6E4]">
                          <span className="font-semibold text-[#171923]">yourstore.in</span>
                          <span className="text-[#008F60] font-bold">● Published</span>
                        </div>
                        <div className="bg-[#171923] text-white p-2 rounded-lg text-center">
                          <div className="text-[8px] text-[#00B879] font-bold uppercase">Storefront</div>
                          <div className="text-[10px] font-bold truncate">Modern Catalog</div>
                        </div>
                      </div>
                    )}

                    {/* CRM Preview */}
                    {tool.previewType === "crm" && (
                      <div className="space-y-1.5">
                        <div className="bg-white p-2 rounded-lg border border-[#E2E6E4] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-[#171923]">Rahul S.</span>
                            <span className="text-[8px] bg-emerald-100 text-emerald-800 px-1 rounded font-bold">WhatsApp</span>
                          </div>
                          <div className="text-[9px] text-[#5A6270] truncate">
                            &quot;Quote requested for 3BHK&quot;
                          </div>
                        </div>
                        <div className="text-[8px] text-[#008F60] font-semibold flex items-center justify-between px-1">
                          <span>Deal: ₹4.5L</span>
                          <span>Assigned</span>
                        </div>
                      </div>
                    )}

                    {/* Sales Pipeline Preview */}
                    {tool.previewType === "pipeline" && (
                      <div className="grid grid-cols-3 gap-1 text-[8px] text-center">
                        <div className="bg-white p-1 rounded-md border border-[#E2E6E4]">
                          <div className="text-[#5A6270] font-bold">Leads</div>
                          <div className="font-mono text-[#171923] font-bold mt-0.5">₹8.4L</div>
                        </div>
                        <div className="bg-[#E8F8F1] p-1 rounded-md border border-[#00B879]/30">
                          <div className="text-[#008F60] font-bold">Proposal</div>
                          <div className="font-mono text-[#008F60] font-bold mt-0.5">₹18L</div>
                        </div>
                        <div className="bg-white p-1 rounded-md border border-[#E2E6E4]">
                          <div className="text-[#5A6270] font-bold">Won</div>
                          <div className="font-mono text-[#00B879] font-bold mt-0.5">₹28L</div>
                        </div>
                      </div>
                    )}

                    {/* Automation Preview */}
                    {tool.previewType === "automation" && (
                      <div className="space-y-1">
                        <div className="bg-white px-2 py-1 rounded-md border border-[#E2E6E4] flex items-center justify-between text-[9px]">
                          <span className="text-[#5A6270]">1. Ingest Web Form</span>
                          <CheckCircle2 className="w-3 h-3 text-[#00B879]" />
                        </div>
                        <div className="bg-[#E8F8F1] px-2 py-1 rounded-md border border-[#00B879]/30 flex items-center justify-between text-[9px]">
                          <span className="text-[#008F60] font-bold">2. Send WhatsApp</span>
                          <span className="text-[8px] font-mono text-[#008F60]">0.4s</span>
                        </div>
                      </div>
                    )}

                    {/* Analytics Preview */}
                    {tool.previewType === "analytics" && (
                      <div className="bg-white p-2 rounded-lg border border-[#E2E6E4] space-y-1">
                        <div className="flex items-center justify-between text-[9px]">
                          <span className="text-[#5A6270]">Conversion</span>
                          <span className="text-[#008F60] font-bold">+38% ↑</span>
                        </div>
                        <div className="flex items-end gap-1 h-7 pt-1 px-1">
                          <div className="flex-1 bg-[#E2E6E4] h-3 rounded-xs" />
                          <div className="flex-1 bg-[#E2E6E4] h-4 rounded-xs" />
                          <div className="flex-1 bg-[#00B879]/60 h-5 rounded-xs" />
                          <div className="flex-1 bg-[#00B879] h-7 rounded-xs" />
                        </div>
                      </div>
                    )}

                  </div>

                  <p className="text-xs text-[#5A6270] leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8EAF0] flex items-center justify-between text-[11px] font-bold text-[#008F60]">
                  <span>Explore module</span>
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
