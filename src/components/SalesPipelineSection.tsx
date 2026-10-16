"use client";

import React, { useState } from "react";
import {
  Kanban,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface SalesPipelineSectionProps {
  onOpenGetStarted: () => void;
}

interface Deal {
  id: string;
  name: string;
  company: string;
  value: string;
  numericVal: number;
  owner: string;
  stage: "leads" | "contacted" | "qualified" | "proposal" | "won";
  days: number;
  winProb: string;
  action: string;
}

export const SalesPipelineSection: React.FC<SalesPipelineSectionProps> = ({
  onOpenGetStarted,
}) => {
  const [deals, setDeals] = useState<Deal[]>([
    {
      id: "d1",
      name: "Cloud Storefront & CRM Setup",
      company: "Apex Logistics",
      value: "₹6,20,000",
      numericVal: 620000,
      owner: "Rohan M.",
      stage: "leads",
      days: 2,
      winProb: "35%",
      action: "Initial discovery call",
    },
    {
      id: "d2",
      name: "B2B E-commerce Portal",
      company: "Zenith Retail Brands",
      value: "₹12,50,000",
      numericVal: 1250000,
      owner: "Aditi S.",
      stage: "contacted",
      days: 4,
      winProb: "50%",
      action: "Send product demo video",
    },
    {
      id: "d3",
      name: "Omnichannel POS Integration",
      company: "Nexus Supermarkets",
      value: "₹8,40,000",
      numericVal: 840000,
      owner: "Vikram M.",
      stage: "qualified",
      days: 6,
      winProb: "70%",
      action: "Security compliance check",
    },
    {
      id: "d4",
      name: "Enterprise Workflow Suite",
      company: "TechCorp India Ltd.",
      value: "₹18,00,000",
      numericVal: 1800000,
      owner: "Aditi S.",
      stage: "proposal",
      days: 8,
      winProb: "85%",
      action: "Final commercial negotiation",
    },
    {
      id: "d5",
      name: "Multi-Store Digital Workspace",
      company: "Kaveri Retailers",
      value: "₹9,50,000",
      numericVal: 950000,
      owner: "Rohan M.",
      stage: "won",
      days: 12,
      winProb: "100%",
      action: "Onboarding completed",
    },
  ]);

  const stages = [
    { id: "leads", label: "New Leads", color: "#00B879" },
    { id: "contacted", label: "Contacted", color: "#008F60" },
    { id: "qualified", label: "Qualified", color: "#10B981" },
    { id: "proposal", label: "Proposal", color: "#D97706" },
    { id: "won", label: "Won", color: "#059669" },
  ];

  // Quick interactive simulation to move deal forward
  const moveDealForward = (dealId: string) => {
    setDeals((prev) =>
      prev.map((deal) => {
        if (deal.id === dealId) {
          const stageOrder: Deal["stage"][] = ["leads", "contacted", "qualified", "proposal", "won"];
          const currentIdx = stageOrder.indexOf(deal.stage);
          const nextStage = stageOrder[Math.min(currentIdx + 1, stageOrder.length - 1)];
          return { ...deal, stage: nextStage };
        }
        return deal;
      })
    );
  };

  const featureCards = [
    {
      title: "Customizable stages",
      desc: "Tailor the pipeline to match your exact B2B or B2C sales journey from lead to contract.",
    },
    {
      title: "Deal ownership",
      desc: "Clear accountability with assigned representatives, quota metrics, and handover rules.",
    },
    {
      title: "Sales activity tracking",
      desc: "Every call, meeting, and email logged right on the deal card with timeline view.",
    },
    {
      title: "Pipeline reporting",
      desc: "Instant revenue forecasts, weighted pipeline health, and bottleneck identification.",
    },
  ];

  return (
    <section id="pipeline" className="py-20 sm:py-28 bg-white border-b border-[#E8EAF0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left Copy & Right Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-[#008F60] text-xs font-bold uppercase tracking-wider">
              <Kanban className="w-3.5 h-3.5 text-[#00B879]" />
              <span>FROM LEAD TO CUSTOMER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171923] tracking-tight leading-tight">
              See every opportunity.{" "}
              <span className="text-[#00B879]">Know what happens next.</span>
            </h2>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#F7F9F8] border border-[#E2E8E5] text-xs font-semibold text-[#171923]">
              <Sparkles className="w-4 h-4 text-[#00B879]" />
              <span>Har deal, har stage — sab saaf dikh raha hai.</span>
            </div>

            <p className="text-base text-[#555A68] leading-relaxed">
              Visualize your sales process, organize deals, and help your team move opportunities forward without confusion or lost inquiries.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenGetStarted}
                className="group px-6 py-3 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-xs font-bold shadow-md shadow-[#00B879]/20 transition-all flex items-center gap-2"
              >
                <span>Explore Sales Pipeline</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* 4 Supporting Feature Cards on Right */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featureCards.map((feat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#F7F9F8] border border-[#E2E8E5] hover:bg-white transition-colors">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00B879]" />
                  <h3 className="text-xs font-bold text-[#171923]">{feat.title}</h3>
                </div>
                <p className="text-[11px] text-[#555A68] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Realistic Interactive Kanban Board Mockup */}
        <div className="rounded-3xl bg-[#171923] border border-gray-800 p-5 sm:p-6 shadow-2xl">
          
          {/* Board Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-4 border-b border-gray-800 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#00B879] animate-pulse" />
              <span className="font-bold text-white text-sm">
                Corporate Sales Pipeline (Q4 FY26)
              </span>
              <span className="text-gray-400 hidden sm:inline text-[11px]">
                Active Deals: {deals.length}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[10px] text-gray-400 block">Total Pipeline Value</span>
                <span className="font-mono text-xs font-bold text-[#00B879]">
                  ₹54,60,000 INR
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-gray-800 text-[10px] text-gray-300 font-medium hidden sm:inline border border-gray-700">
                Click deal card to advance stage →
              </span>
            </div>
          </div>

          {/* Kanban Columns */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 overflow-x-auto pb-2">
            {stages.map((stg) => {
              const stageDeals = deals.filter((d) => d.stage === stg.id);
              const stageSum = stageDeals.reduce((acc, curr) => acc + curr.numericVal, 0);

              return (
                <div
                  key={stg.id}
                  className="bg-gray-900/90 rounded-2xl p-3.5 border border-gray-800 flex flex-col justify-between min-w-[200px]"
                >
                  {/* Column Header */}
                  <div className="pb-2.5 mb-2.5 border-b border-gray-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: stg.color }}
                      />
                      <span className="text-xs font-bold text-gray-200">
                        {stg.label}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 bg-gray-800 px-1.5 py-0.5 rounded">
                      {stageDeals.length}
                    </span>
                  </div>

                  {/* Deals Stack */}
                  <div className="space-y-2.5 flex-1 min-h-[140px]">
                    {stageDeals.length === 0 ? (
                      <div className="h-full flex items-center justify-center text-center p-4 border border-dashed border-gray-800 rounded-xl text-[10px] text-gray-500">
                        No deals in this stage
                      </div>
                    ) : (
                      stageDeals.map((deal) => (
                        <div
                          key={deal.id}
                          onClick={() => moveDealForward(deal.id)}
                          className="group cursor-pointer bg-gray-800/80 hover:bg-gray-800 p-3 rounded-xl border border-gray-700/60 hover:border-[#00B879]/50 transition-all text-xs"
                          title="Click to advance deal to next stage"
                        >
                          <div className="flex items-start justify-between gap-1 mb-1">
                            <span className="font-semibold text-white text-[11px] group-hover:text-emerald-300 transition-colors">
                              {deal.name}
                            </span>
                          </div>

                          <div className="text-[10px] text-gray-400 mb-2">{deal.company}</div>

                          <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#00B879]">
                            <span>{deal.value}</span>
                            <span className="text-[9px] text-gray-400 font-sans font-normal">
                              Prob: {deal.winProb}
                            </span>
                          </div>

                          <div className="mt-2 pt-2 border-t border-gray-700/60 flex items-center justify-between text-[9px] text-gray-400">
                            <span>{deal.owner}</span>
                            <span className="text-emerald-400/80 group-hover:underline flex items-center gap-0.5">
                              Next Stage →
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Column Bottom Summary */}
                  <div className="mt-3 pt-2.5 border-t border-gray-800 flex items-center justify-between text-[10px] text-gray-400">
                    <span>Subtotal:</span>
                    <span className="font-mono text-gray-300 font-semibold">
                      ₹{(stageSum / 100000).toFixed(1)}L
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Kanban Footer Bar */}
          <div className="mt-3 pt-3 border-t border-gray-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00B879]" />
              <span>Deals update automatically when proposals are viewed or signed</span>
            </div>
            <div className="text-[#00B879] font-semibold">
              Conversion rate up by +28% with active follow-up reminders
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
