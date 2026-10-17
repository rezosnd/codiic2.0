"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  WebsiteBuilderColorIcon,
  CustomerCrmColorIcon,
  SalesPipelineColorIcon,
  AutomationColorIcon,
} from "./ColorfulProductIcons";

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
      icon: WebsiteBuilderColorIcon,
      label: "1. Storefront & Website",
      action: "New inquiry received",
      desc: "Visitor submits request on your website",
      color: "#00B879",
    },
    {
      id: "crm",
      icon: CustomerCrmColorIcon,
      label: "2. Customer CRM",
      action: "Lead profile created",
      desc: "Contact information & chat history organized",
      color: "#008F60",
    },
    {
      id: "pipeline",
      icon: SalesPipelineColorIcon,
      label: "3. Sales Pipeline",
      action: "Deal card updated",
      desc: "Rep assigned with revenue stage visibility",
      color: "#00B879",
    },
    {
      id: "automation",
      icon: AutomationColorIcon,
      label: "4. Automation Engine",
      action: "Follow-up triggered",
      desc: "Instant WhatsApp catalog sent to buyer",
      color: "#008F60",
    },
  ];

  return (
    <section
      id="workspace"
      className="py-20 sm:py-28 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E6E4] bg-white text-xs font-semibold text-[#5A6270]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B879]" />
            Connected workspace
          </div>

          <h2 className="mt-5 text-[34px] sm:text-5xl lg:text-[56px] font-bold text-[#171923] tracking-[-0.035em] leading-[1.05]">
            Everything{" "}
            <em className="font-serif italic font-normal text-[#008F60]">works together.</em>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#5A6270] leading-relaxed max-w-2xl mx-auto">
            From the first inquiry to the next follow-up, CODIIC keeps your business information
            connected in real time. Website se customer tak — sab connected.
          </p>
        </div>

        {/* Connected flow */}
        <div className="max-w-5xl mx-auto bg-[#F4F7F5] rounded-[28px] p-5 sm:p-9 relative">
          
          {/* Top Info Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E3E8E5] mb-8">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#00B879]" />
              <span className="text-sm font-bold text-[#171923]">
                One unified data stream
              </span>
            </div>
            <span className="text-xs text-[#5A6270] hidden sm:inline">
              Real-time sync across your entire business
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
                      ? "bg-[#FFD84D] border-[#171923] shadow-[0_16px_36px_-18px_rgba(23,25,35,0.3)] ring-2 ring-[#171923]/20 -translate-y-0.5"
                      : "bg-[#FFD84D] border-black/10 hover:border-black/30 hover:shadow-md hover:-translate-y-0.5"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Icon className="w-10 h-10 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    </div>

                    <div className="text-xs font-bold text-[#171923] mb-1">
                      {st.label}
                    </div>

                    <div className="text-xs font-semibold text-[#085433] mb-1">
                      {st.action}
                    </div>

                    <p className="text-[11px] text-[#2D260D] leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-black/10 flex items-center justify-between text-[10px]">
                    <span className="text-[#2D260D] font-medium">Instant sync</span>
                    <CheckCircle2
                      className={`w-3.5 h-3.5 ${
                        isCurrent ? "text-[#085433]" : "text-black/40"
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                </div>
              );
            })}
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
