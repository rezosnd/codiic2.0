"use client";

import React, { useState } from "react";
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
  ShieldCheck,
  Clock,
  ExternalLink,
} from "lucide-react";

interface MainToolsSectionProps {
  onOpenGetStarted: () => void;
}

export const MainToolsSection: React.FC<MainToolsSectionProps> = ({
  onOpenGetStarted,
}) => {
  const [activeTab, setActiveTab] = useState<string>("website-builder");

  const tools = [
    {
      id: "website-builder",
      title: "Website Builder",
      desc: "Create your online presence with drag-and-drop sections.",
      icon: Globe,
      color: "#00B879",
      badge: "POPULAR",
      highlights: [
        {
          title: "Instant mobile storefronts",
          desc: "Drag-and-drop business sections with zero code maintenance.",
        },
        {
          title: "Forms feed straight to CRM",
          desc: "Inquiries from any page route immediately to your sales pipeline.",
        },
        {
          title: "SEO & Custom Domain",
          desc: "Automatic SSL, fast page loads, and Google search readiness.",
        },
      ],
    },
    {
      id: "crm",
      title: "Customer CRM",
      desc: "Keep customer leads organized from WhatsApp and web.",
      icon: Users,
      color: "#008F60",
      badge: "HOT",
      highlights: [
        {
          title: "Official WhatsApp Business API",
          desc: "Send brochures, catalog links, and instant acknowledgments.",
        },
        {
          title: "Chronological customer timeline",
          desc: "Every email, form, and chat logged in a single client profile.",
        },
        {
          title: "Zero lead leakage",
          desc: "Automatically alerts sales reps the second an inquiry arrives.",
        },
      ],
    },
    {
      id: "sales-pipeline",
      title: "Sales Pipeline",
      desc: "See every deal at a glance from inquiry to contract.",
      icon: Kanban,
      color: "#00B879",
      badge: "NEW",
      highlights: [
        {
          title: "Drag-and-drop deal stages",
          desc: "Move opportunities through clear stages from inquiry to closure.",
        },
        {
          title: "Real-time INR revenue forecasting",
          desc: "Know exactly where your monthly sales projections stand.",
        },
        {
          title: "Territory & rep quotas",
          desc: "Track individual team conversion rates and closed deals.",
        },
      ],
    },
    {
      id: "automation",
      title: "Automation",
      desc: "Simplify repetitive follow-ups with instant triggers.",
      icon: Zap,
      color: "#008F60",
      badge: "0.4s",
      highlights: [
        {
          title: "0.4s instant responses",
          desc: "Buyers get brochures and answers within seconds, even on weekends.",
        },
        {
          title: "Round-robin team routing",
          desc: "Automatically distribute inquiries by region or representative.",
        },
        {
          title: "Zero glue code required",
          desc: "Connect your website forms to WhatsApp and CRM natively.",
        },
      ],
    },
    {
      id: "analytics",
      title: "Analytics",
      desc: "Understand business activity and revenue in real time.",
      icon: BarChart3,
      color: "#00B879",
      badge: "LIVE",
      highlights: [
        {
          title: "Real-time operational visibility",
          desc: "View daily and monthly sales numbers without spreadsheets.",
        },
        {
          title: "Channel attribution",
          desc: "See which marketing sources and website pages generate high-value deals.",
        },
        {
          title: "Actionable team metrics",
          desc: "Review response times, deal velocity, and representative win rates.",
        },
      ],
    },
  ];

  const currentTool = tools.find((t) => t.id === activeTab) || tools[0];
  const CurrentIcon = currentTool.icon;

  return (
    <section
      id="tools"
      className="pt-24 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 bg-[#F7F9F8] border-b border-[#E8EAF0] relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Dropship.io headline hierarchy) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E2E6E4] text-[11px] font-bold tracking-widest uppercase text-[#5A6270] shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00B879]" />
            <span>CORE PLATFORM CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight leading-tight">
            Five essential tools. One connected workspace.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5A6270] leading-relaxed max-w-2xl mx-auto">
            Every module works together seamlessly without third-party connector plugins.
          </p>
        </div>

        {/* Dropship.io-inspired Interactive Tab Bar */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1.5 bg-white rounded-full border border-[#E2E6E4] shadow-sm max-w-full overflow-x-auto custom-scrollbar">
            {tools.map((tool) => {
              const Icon = tool.icon;
              const isActive = activeTab === tool.id;
              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveTab(tool.id)}
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-[#00B879] text-white shadow-md shadow-[#00B879]/20"
                      : "text-[#5A6270] hover:text-[#171923] hover:bg-[#F7F9F8]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.8} />
                  <span>{tool.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Masterpiece Tab Showcase Container (Dropship.io `is-tabs` style) */}
        <div className="bg-white rounded-3xl border border-[#E2E6E4] p-6 sm:p-9 shadow-xl shadow-black/[0.03] transition-all duration-300">
          
          {/* Top Stage: Left Text & CTA, Right Live High-Fidelity Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-[#E8EAF0]">
            
            {/* Left Content (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs"
                  style={{ backgroundColor: "#E8F8F1", color: currentTool.color }}
                >
                  <CurrentIcon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#171923]">
                      {currentTool.title}
                    </h3>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#E8F8F1] text-[#008F60] border border-[#00B879]/20">
                      {currentTool.badge}
                    </span>
                  </div>
                  <span className="text-xs text-[#008F60] font-semibold">
                    Native connected module
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#5A6270] leading-relaxed">
                {currentTool.desc}
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenGetStarted}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#00B879]/20 hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <span>Explore {currentTool.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Stage: Interactive High-Fidelity Tool Mockup (7 cols) */}
            <div className="lg:col-span-7 bg-[#F7F9F8] rounded-2xl border border-[#E8EAF0] p-4 sm:p-5 shadow-xs overflow-hidden">
              
              {/* Tool 1: Website Builder Preview */}
              {activeTab === "website-builder" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="bg-white rounded-xl p-3.5 border border-[#E2E6E4] shadow-xs">
                    <div className="flex items-center justify-between pb-2.5 border-b border-[#F0F2F5] text-xs">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-[#00B879]" strokeWidth={1.8} />
                        <span className="font-bold text-[#171923]">store.yourbrand.in</span>
                      </div>
                      <span className="text-[10px] text-[#008F60] bg-[#E8F8F1] px-2 py-0.5 rounded-full font-bold">
                        ● Published & Live
                      </span>
                    </div>

                    <div className="pt-3 rounded-lg bg-gradient-to-r from-[#171923] to-[#2D3748] p-4 text-white my-2">
                      <div className="text-[10px] font-bold text-[#00B879] uppercase tracking-wider">
                        Online Catalog & Storefront
                      </div>
                      <div className="text-sm font-bold mt-1">
                        Curated Architectural Ceramic Studio
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-xs bg-[#00B879] text-white font-bold px-3 py-1 rounded-md">
                          Order via UPI
                        </span>
                        <span className="text-xs text-white/70">
                          Instant WhatsApp updates
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-xs pt-2">
                      <div className="p-2 bg-[#F7F9F8] rounded-lg">
                        <div className="text-[10px] text-[#5A6270]">Visitors</div>
                        <div className="font-bold text-[#171923]">18,420</div>
                      </div>
                      <div className="p-2 bg-[#F7F9F8] rounded-lg">
                        <div className="text-[10px] text-[#5A6270]">Leads</div>
                        <div className="font-bold text-[#008F60]">314 Form Leads</div>
                      </div>
                      <div className="p-2 bg-[#F7F9F8] rounded-lg">
                        <div className="text-[10px] text-[#5A6270]">Conversion</div>
                        <div className="font-bold text-[#171923]">4.2% Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tool 2: CRM Preview */}
              {activeTab === "crm" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="bg-white rounded-xl p-3.5 border border-[#E2E6E4] shadow-xs space-y-2.5">
                    <div className="flex items-center justify-between pb-2 border-b border-[#F0F2F5] text-xs">
                      <span className="font-bold text-[#171923]">Active Customer Inbox</span>
                      <span className="text-[10px] bg-[#E8F8F1] text-[#008F60] font-bold px-2 py-0.5 rounded-full">
                        Official WhatsApp API
                      </span>
                    </div>

                    {[
                      {
                        name: "Rahul Sharma",
                        req: "3BHK Full Interior Design",
                        val: "₹4,50,000",
                        status: "Assigned: Rohan Mehta",
                        time: "2m ago",
                      },
                      {
                        name: "Priya Nair",
                        req: "Corporate Legal Retainer",
                        val: "₹2,10,000",
                        status: "Proposal Sent",
                        time: "15m ago",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="p-3 bg-[#F7F9F8] rounded-xl border border-[#E8EAF0] flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[#171923] text-white flex items-center justify-center font-bold text-xs">
                            {item.name[0]}
                          </div>
                          <div>
                            <div className="font-bold text-[#171923]">{item.name}</div>
                            <div className="text-[11px] text-[#5A6270]">{item.req}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-mono font-bold text-[#171923]">{item.val}</div>
                          <div className="text-[10px] text-[#008F60] font-medium">{item.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tool 3: Sales Pipeline Preview */}
              {activeTab === "sales-pipeline" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="bg-white rounded-xl p-3.5 border border-[#E2E6E4] shadow-xs space-y-2.5">
                    <div className="flex items-center justify-between pb-2 border-b border-[#F0F2F5] text-xs">
                      <span className="font-bold text-[#171923]">Q4 Active Pipeline Stages</span>
                      <span className="font-mono text-xs font-bold text-[#008F60] bg-[#E8F8F1] px-2 py-0.5 rounded-full">
                        ₹54,60,000 Active
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-[#F7F9F8] p-2.5 rounded-xl border border-[#E8EAF0] space-y-1.5">
                        <div className="text-[10px] font-bold text-[#5A6270]">1. QUALIFIED</div>
                        <div className="bg-white p-2 rounded-lg border border-[#E2E6E4]">
                          <div className="font-bold text-[#171923]">Sunrise Retail</div>
                          <div className="font-mono text-[#00B879] font-bold text-[11px]">₹4.2L</div>
                        </div>
                      </div>

                      <div className="bg-[#E8F8F1]/50 p-2.5 rounded-xl border border-[#00B879]/30 space-y-1.5">
                        <div className="text-[10px] font-bold text-[#008F60]">2. PROPOSAL</div>
                        <div className="bg-white p-2 rounded-lg border border-[#00B879]/30">
                          <div className="font-bold text-[#171923]">TechCorp India</div>
                          <div className="font-mono text-[#008F60] font-bold text-[11px]">₹18.0L</div>
                        </div>
                      </div>

                      <div className="bg-[#F7F9F8] p-2.5 rounded-xl border border-[#E8EAF0] space-y-1.5">
                        <div className="text-[10px] font-bold text-[#5A6270]">3. WON</div>
                        <div className="bg-white p-2 rounded-lg border border-[#E2E6E4]">
                          <div className="font-bold text-[#171923]">Apex Logistics</div>
                          <div className="font-mono text-[#00B879] font-bold text-[11px]">₹28.2L</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tool 4: Automation Preview */}
              {activeTab === "automation" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="bg-white rounded-xl p-3.5 border border-[#E2E6E4] shadow-xs space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-[#F0F2F5] text-xs">
                      <span className="font-bold text-[#171923]">Real-Time Trigger Workflow</span>
                      <span className="text-[10px] bg-[#E8F8F1] text-[#008F60] font-bold px-2 py-0.5 rounded-full">
                        Zero-Delay
                      </span>
                    </div>

                    <div className="p-2.5 bg-[#F7F9F8] rounded-xl border border-[#E8EAF0] flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-[#171923]">1. Ingest Web Form</div>
                        <div className="text-[11px] text-[#5A6270]">New lead created on storefront submission</div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-[#00B879]" strokeWidth={2} />
                    </div>

                    <div className="p-2.5 bg-[#F7F9F8] rounded-xl border border-[#E8EAF0] flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-[#171923]">2. Territory Rep Assignment</div>
                        <div className="text-[11px] text-[#5A6270]">Directs lead to regional sales representative</div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-[#00B879]" strokeWidth={2} />
                    </div>

                    <div className="p-2.5 bg-[#E8F8F1] rounded-xl border border-[#00B879]/30 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-[#008F60]">3. Send WhatsApp Catalog & Booking Link</div>
                        <div className="text-[11px] text-[#008F60]">Dispatched in 0.4 seconds via official API</div>
                      </div>
                      <span className="text-[10px] font-mono font-bold bg-[#00B879] text-white px-2 py-0.5 rounded">
                        0.4s
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tool 5: Analytics Preview */}
              {activeTab === "analytics" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="bg-white rounded-xl p-3.5 border border-[#E2E6E4] shadow-xs space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#F0F2F5] text-xs">
                      <span className="font-bold text-[#171923]">Monthly Business Performance</span>
                      <span className="text-xs font-bold text-[#008F60]">+38% Growth</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2 bg-[#F7F9F8] rounded-lg">
                        <div className="text-[10px] text-[#5A6270]">Total Inquiries</div>
                        <div className="font-bold text-lg text-[#171923]">456</div>
                      </div>
                      <div className="p-2 bg-[#F7F9F8] rounded-lg">
                        <div className="text-[10px] text-[#5A6270]">Conversion</div>
                        <div className="font-bold text-lg text-[#00B879]">18.4%</div>
                      </div>
                      <div className="p-2 bg-[#F7F9F8] rounded-lg">
                        <div className="text-[10px] text-[#5A6270]">Revenue Closed</div>
                        <div className="font-mono font-bold text-lg text-[#171923]">₹54.6L</div>
                      </div>
                    </div>

                    <div className="flex items-end gap-1.5 h-16 pt-2 px-2 bg-[#F7F9F8] rounded-xl">
                      <div className="flex-1 bg-[#E2E6E4] h-6 rounded-t-sm" />
                      <div className="flex-1 bg-[#E2E6E4] h-8 rounded-t-sm" />
                      <div className="flex-1 bg-[#E2E6E4] h-7 rounded-t-sm" />
                      <div className="flex-1 bg-[#00B879]/50 h-10 rounded-t-sm" />
                      <div className="flex-1 bg-[#00B879]/70 h-12 rounded-t-sm" />
                      <div className="flex-1 bg-[#00B879] h-16 rounded-t-sm" />
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Bottom Stage: 3 Distinct Feature Metric Pillars (Dropship.io `home-tab_content-bottom` style) */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentTool.highlights.map((h, i) => (
              <div key={i} className="space-y-1">
                <div className="text-sm font-bold text-[#171923] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B879]" />
                  <span>{h.title}</span>
                </div>
                <p className="text-xs text-[#5A6270] leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
