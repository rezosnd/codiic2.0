"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Globe,
  Users,
  Kanban,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Clock,
  Send,
  ChevronRight,
} from "lucide-react";

interface ConnectedWorkspaceSectionProps {
  onOpenGetStarted: () => void;
}

export const ConnectedWorkspaceSection: React.FC<ConnectedWorkspaceSectionProps> = ({
  onOpenGetStarted,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: "website",
      icon: Globe,
      label: "1. Storefront & Website",
      action: "New inquiry received",
      desc: "Visitor submits request on your website",
      color: "#00B879",
    },
    {
      id: "crm",
      icon: Users,
      label: "2. Customer CRM",
      action: "Lead profile created",
      desc: "Contact information & chat history organized",
      color: "#008F60",
    },
    {
      id: "pipeline",
      icon: Kanban,
      label: "3. Sales Pipeline",
      action: "Deal card updated",
      desc: "Rep assigned with revenue stage visibility",
      color: "#00B879",
    },
    {
      id: "automation",
      icon: Zap,
      label: "4. Automation Engine",
      action: "Follow-up triggered",
      desc: "Instant WhatsApp catalog sent to buyer",
      color: "#008F60",
    },
  ];

  return (
    <section
      id="workspace"
      className="py-20 sm:py-28 bg-white border-b border-[#E8EAF0] relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-[#E8F8F1]/50 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-[#008F60] text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#00B879]" />
            <span>CONNECTED WORKSPACE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight leading-tight">
            Everything works together.
          </h2>

          <p className="text-base sm:text-lg text-[#555A68] leading-relaxed max-w-2xl mx-auto">
            From the first inquiry to the next follow-up, CODIIC keeps your business information connected in real time.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7F9F8] border border-[#E2E8E5] text-xs font-semibold text-[#171923]">
            <span className="w-2 h-2 rounded-full bg-[#00B879] animate-pulse" />
            <span><em>Website se customer tak — sab connected.</em></span>
          </div>
        </div>

        {/* Central Connected Visual Representation (Dropship-inspired refined borders & cards) */}
        <div className="max-w-5xl mx-auto bg-[#F7F9F8] border border-[#E2E8E5] rounded-3xl p-5 sm:p-9 shadow-sm relative">
          
          {/* Top Info Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E8EAF0] mb-8">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00B879] animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#171923] uppercase tracking-wider">
                ONE UNIFIED DATA STREAM
              </span>
            </div>
            <span className="text-xs text-[#555A68] hidden sm:inline">
              Click any stage to inspect live data flow
            </span>
          </div>

          {/* 4 Connected Flow Stages with Animated Sequence Connectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              const isCurrent = activeStep === idx;
              return (
                <div
                  key={st.id}
                  onClick={() => setActiveStep(idx)}
                  className={`group cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                    isCurrent
                      ? "bg-white border-[#00B879] shadow-xl shadow-[#00B879]/15 ring-2 ring-[#00B879]/20"
                      : "bg-white/90 border-[#E2E8E5] hover:bg-white hover:border-[#00B879]/40 hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs transition-transform group-hover:scale-105"
                        style={{ backgroundColor: "#E8F8F1", color: st.color }}
                      >
                        <Icon className="w-5 h-5" strokeWidth={1.8} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#8A90A0]">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-[#171923] mb-1">
                      {st.label}
                    </div>

                    <div className="text-xs font-semibold text-[#008F60] mb-1">
                      {st.action}
                    </div>

                    <p className="text-[11px] text-[#555A68] leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-[#E8EAF0] flex items-center justify-between text-[10px]">
                    <span className="text-[#555A68]">Instant sync</span>
                    <CheckCircle2
                      className={`w-3.5 h-3.5 ${
                        isCurrent ? "text-[#00B879]" : "text-[#8A90A0]"
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Live Product UI Panel */}
          <div className="mt-6 bg-white rounded-2xl border border-[#E2E8E5] p-5 sm:p-6 shadow-xs animate-in fade-in duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-[#F0F2F5] text-xs font-semibold flex-wrap gap-2">
              <div className="flex items-center gap-2 text-[#171923]">
                <span className="w-2 h-2 rounded-full bg-[#00B879]" />
                <span className="font-bold">LIVE STAGE DEMONSTRATION:</span>
                <span className="text-[#008F60]">{steps[activeStep].label}</span>
              </div>
              <span className="text-[11px] text-[#5A6270] font-mono">
                Auto-processed in 0.4s
              </span>
            </div>

            <div className="pt-4">
              {activeStep === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="md:col-span-2 space-y-2">
                    <div className="text-xs font-bold text-[#171923]">
                      Visitor Form Submitted on Storefront
                    </div>
                    <div className="p-3 bg-[#F7F9F8] rounded-xl border border-[#E8EAF0] text-xs space-y-1">
                      <div className="flex justify-between">
                        <span className="text-[#5A6270]">Customer:</span>
                        <span className="font-bold text-[#171923]">Rahul Sharma</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#5A6270]">Source:</span>
                        <span className="text-[#008F60] font-medium">store.yourbrand.in/contact</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#5A6270]">Requested Scope:</span>
                        <span className="text-[#171923]">3BHK Interior Consultation</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#E8F8F1] border border-[#00B879]/30 text-center">
                    <div className="text-[10px] font-bold text-[#008F60] uppercase">
                      Sync Status
                    </div>
                    <div className="text-sm font-extrabold text-[#008F60] mt-1">
                      ✓ Ingested
                    </div>
                    <p className="text-[10px] text-[#5A6270] mt-1">
                      Instantly forwarded to Lead CRM without webhook latency.
                    </p>
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="md:col-span-2 space-y-2">
                    <div className="text-xs font-bold text-[#171923]">
                      Customer Profile & WhatsApp Stream Organized
                    </div>
                    <div className="p-3 bg-[#F7F9F8] rounded-xl border border-[#E8EAF0] text-xs space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#171923]">Rahul Sharma (Mumbai)</span>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                          WhatsApp Connected
                        </span>
                      </div>
                      <div className="text-[11px] text-[#5A6270]">
                        &quot;Client inquired about turn-key scope. Rep assigned to call today.&quot;
                      </div>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#E8F8F1] border border-[#00B879]/30 text-center">
                    <div className="text-[10px] font-bold text-[#008F60] uppercase">
                      Assigned Rep
                    </div>
                    <div className="text-sm font-extrabold text-[#171923] mt-1">
                      Rohan Mehta
                    </div>
                    <p className="text-[10px] text-[#008F60] font-semibold mt-1">
                      West Zone Sales Team
                    </p>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="md:col-span-2 space-y-2">
                    <div className="text-xs font-bold text-[#171923]">
                      Kanban Board Deal Stage Auto-Updated
                    </div>
                    <div className="p-3 bg-[#F7F9F8] rounded-xl border border-[#E8EAF0] text-xs flex items-center justify-between">
                      <div>
                        <div className="font-bold text-[#171923]">Rahul Sharma • Retainer</div>
                        <div className="text-[10px] text-[#5A6270]">Stage: Qualified → In Proposal</div>
                      </div>
                      <div className="font-mono font-bold text-sm text-[#00B879]">
                        ₹4,50,000 INR
                      </div>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#E8F8F1] border border-[#00B879]/30 text-center">
                    <div className="text-[10px] font-bold text-[#008F60] uppercase">
                      Pipeline Total
                    </div>
                    <div className="text-sm font-extrabold text-[#171923] mt-1 font-mono">
                      ₹54,60,000
                    </div>
                    <p className="text-[10px] text-[#008F60] font-semibold mt-1">
                      18 deals active this quarter
                    </p>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="md:col-span-2 space-y-2">
                    <div className="text-xs font-bold text-[#171923]">
                      Automated Follow-up Trigger Dispatched
                    </div>
                    <div className="p-3 bg-[#E8F8F1]/40 rounded-xl border border-[#00B879]/30 text-xs flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-[#00B879]" strokeWidth={2} />
                        <div>
                          <div className="font-bold text-[#171923]">Instant WhatsApp Catalog & Booking Link</div>
                          <div className="text-[10px] text-[#5A6270]">Delivered to +91 98201 XXXXX</div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-[#00B879] text-white px-2 py-0.5 rounded font-bold">
                        Sent (0.4s)
                      </span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#E2E6E4] text-center">
                    <div className="text-[10px] font-bold text-[#5A6270] uppercase">
                      Human Effort Saved
                    </div>
                    <div className="text-sm font-extrabold text-[#008F60] mt-1">
                      100% Zero-Touch
                    </div>
                    <p className="text-[10px] text-[#5A6270] mt-1">
                      Buyer gets instant answer even on weekends.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Central Hub Connector Badge */}
          <div className="mt-8 pt-6 border-t border-[#E8EAF0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#555A68]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white border border-[#D9DEDC] flex items-center justify-center p-1.5 shadow-2xs">
                <Image
                  src="/logo_withot text.png"
                  alt="CODIIC Symbol"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <span className="text-[#171923] font-semibold">
                Single database. Zero duplicate entries between departments.
              </span>
            </div>

            <button
              onClick={onOpenGetStarted}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#171923] hover:bg-[#00B879] text-white text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <span>See it in action</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
