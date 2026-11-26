"use client";

import React, { useState } from "react";
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Play,
  RotateCcw,
} from "lucide-react";

interface AutomationSectionProps {
  onOpenGetStarted: () => void;
}

export const AutomationSection: React.FC<AutomationSectionProps> = ({
  onOpenGetStarted,
}) => {
  const [activeStep, setActiveStep] = useState<number>(3);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const runSimulation = () => {
    setIsSimulating(true);
    setActiveStep(0);
    [1, 2, 3].forEach((step, index) => {
      setTimeout(() => {
        setActiveStep(step);
        if (step === 3) {
          setIsSimulating(false);
        }
      }, (index + 1) * 700);
    });
  };

  const benefits = [
    {
      title: "Automatic lead capture",
      desc: "Instantly ingest leads from WhatsApp API, website forms, Google Ads, and Meta Ads.",
    },
    {
      title: "Scheduled reminders",
      desc: "Set time-based nudges for deals, invoices, renewals, and customer check-ins.",
    },
    {
      title: "Workflow triggers",
      desc: "Fire custom automations based on deal stage change, form submission, or payment receipt.",
    },
    {
      title: "Instant notifications",
      desc: "Send instant WhatsApp brochures and internal email alerts without human delay.",
    },
  ];

  return (
    <section id="automation" className="py-20 sm:py-28 bg-[#F7F7F2] border-b border-[#E6E4DB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Visual Workflow Builder Mockup */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-[#E4E2D8] p-5 sm:p-7 shadow-xl shadow-black/[0.03] relative">
              
              {/* Workflow Canvas Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 mb-4 border-b border-[#E6E4DB] text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#064E3B] animate-pulse" />
                  <span className="font-bold text-[#111827]">Workflow Engine: Lead Routing & WhatsApp Dispatch</span>
                  <span className="text-[10px] text-[#043B2C] bg-[#F1F0EA] px-2 py-0.5 rounded-full font-semibold border border-[#064E3B]/20">
                    Live Status: Active
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={runSimulation}
                    disabled={isSimulating}
                    className="px-3.5 py-1.5 rounded-xl bg-[#064E3B] hover:bg-[#043B2C] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm disabled:opacity-50"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>{isSimulating ? "Processing Flow..." : "Test Workflow Run"}</span>
                  </button>
                </div>
              </div>

              {/* Connected Workflow Nodes */}
              <div className="space-y-3 relative py-1">
                
                {/* Node 1: Trigger */}
                <div
                  className={`p-4 rounded-2xl border transition-all duration-300 ${
                    activeStep >= 0
                      ? "bg-white border-[#064E3B] shadow-md ring-2 ring-[#064E3B]/20"
                      : "bg-[#F7F7F2] border-[#E6E4DB] opacity-60"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F1F0EA] text-[#043B2C] border border-[#064E3B]/20">
                      Trigger • Step 01
                    </span>
                    <span className="text-[10px] text-[#043B2C] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#064E3B]" />
                      Captured 0.2s ago
                    </span>
                  </div>
                  <div className="font-bold text-sm text-[#111827]">
                    New Website Storefront Inquiry / WhatsApp Message
                  </div>
                  <p className="text-xs text-[#4B5563] mt-0.5 leading-relaxed">
                    Customer submits inquiry form on your brand website or initiates chat via official WhatsApp Business API.
                  </p>
                </div>

                {/* Connecting arrow */}
                <div className="flex justify-center -my-1">
                  <div className="w-6 h-6 rounded-full bg-[#F1F0EA] border border-[#064E3B]/30 flex items-center justify-center text-[#043B2C]">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Node 2: Action - Create Lead */}
                <div
                  className={`p-4 rounded-2xl border transition-all duration-300 ${
                    activeStep >= 1
                      ? "bg-white border-[#043B2C] shadow-md ring-2 ring-[#043B2C]/20"
                      : "bg-[#F7F7F2] border-[#E6E4DB] opacity-60"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F1F0EA] text-[#043B2C] border border-[#064E3B]/20">
                      Action • Step 02
                    </span>
                    <span className="text-[10px] text-[#4B5563]">CODIIC CRM Core</span>
                  </div>
                  <div className="font-bold text-sm text-[#111827]">
                    Create CRM Lead & Auto-Enrich Score
                  </div>
                  <p className="text-xs text-[#4B5563] mt-0.5 leading-relaxed">
                    Validates email & phone number, computes intent score (Hot Lead: 85/100), and creates customer profile.
                  </p>
                </div>

                {/* Connecting arrow */}
                <div className="flex justify-center -my-1">
                  <div className="w-6 h-6 rounded-full bg-[#F1F0EA] border border-[#064E3B]/30 flex items-center justify-center text-[#043B2C]">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Node 3: Action - Assign Rep */}
                <div
                  className={`p-4 rounded-2xl border transition-all duration-300 ${
                    activeStep >= 2
                      ? "bg-white border-[#064E3B] shadow-md ring-2 ring-[#064E3B]/20"
                      : "bg-[#F7F7F2] border-[#E6E4DB] opacity-60"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F1F0EA] text-[#043B2C] border border-[#064E3B]/20">
                      Smart Routing • Step 03
                    </span>
                    <span className="text-[10px] text-[#4B5563]">Round-Robin Logic</span>
                  </div>
                  <div className="font-bold text-sm text-[#111827]">
                    Assign Salesperson & Reserve Calendar Slot
                  </div>
                  <p className="text-xs text-[#4B5563] mt-0.5 leading-relaxed">
                    Assigns inquiry to Rohan Mehta (Zone: West) and blocks 15-minute slot for immediate qualification call.
                  </p>
                </div>

                {/* Connecting arrow */}
                <div className="flex justify-center -my-1">
                  <div className="w-6 h-6 rounded-full bg-[#F1F0EA] border border-[#064E3B]/30 flex items-center justify-center text-[#043B2C]">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Node 4: Action - Instant Follow-up */}
                <div
                  className={`p-4 rounded-2xl border transition-all duration-300 ${
                    activeStep >= 3
                      ? "bg-white border-[#064E3B] shadow-md ring-2 ring-[#064E3B]/20"
                      : "bg-[#F7F7F2] border-[#E6E4DB] opacity-60"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F1F0EA] text-[#043B2C] border border-[#064E3B]/20">
                      Follow-up • Step 04
                    </span>
                    <span className="text-[10px] text-[#043B2C] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#064E3B]" />
                      Instant Delivery
                    </span>
                  </div>
                  <div className="font-bold text-sm text-[#111827]">
                    Send Follow-up Brochure & WhatsApp Confirmation
                  </div>
                  <p className="text-xs text-[#4B5563] mt-0.5 leading-relaxed">
                    Customer receives branded catalog & assigned executive&apos;s direct WhatsApp contact within 5 seconds.
                  </p>
                </div>

              </div>

              {/* Bottom Execution Stats */}
              <div className="mt-4 pt-3.5 border-t border-[#E6E4DB] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#4B5563]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#064E3B]" />
                  <span>Average execution time: <strong>0.8 seconds</strong></span>
                </div>
                <span className="font-semibold text-[#043B2C]">
                  Zero manual data entry required
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Copy & Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1F0EA] border border-[#064E3B]/20 text-[#043B2C] text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-[#064E3B]" />
              <span>WORK SMARTER, AUTOMATICALLY</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
                Let routine work{" "}
                <span className="text-[#064E3B]">run itself.</span>
              </h2>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-[#E4E2D8] text-xs font-semibold text-[#111827]">
                <Sparkles className="w-4 h-4 text-[#064E3B]" />
                <span>Kaam smart, growth fast. Repetitive tasks zero.</span>
              </div>

              <p className="text-base text-[#4B5563] leading-relaxed">
                Connect business actions with automated workflows so your team can spend less time on repetitive data entry and more time closing deals and serving customers.
              </p>
            </div>

            {/* 4 Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {benefits.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-[#E4E2D8]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
                    <h3 className="text-xs font-bold text-[#111827]">{item.title}</h3>
                  </div>
                  <p className="text-[11px] text-[#4B5563] leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenGetStarted}
                className="group px-6 py-3 rounded-full bg-[#064E3B] hover:bg-[#043B2C] text-white text-xs font-bold shadow-md shadow-[#064E3B]/20 transition-all flex items-center gap-2"
              >
                <span>Explore Workflow Automation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
