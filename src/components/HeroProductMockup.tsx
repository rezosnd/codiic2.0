"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Globe,
  Users,
  Kanban,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  MessageSquare,
  Lock,
  Layers,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

interface HeroProductMockupProps {
  onOpenGetStarted: () => void;
  onOpenSeeHowItWorks: () => void;
}

export const HeroProductMockup: React.FC<HeroProductMockupProps> = ({
  onOpenGetStarted,
  onOpenSeeHowItWorks,
}) => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "website" | "crm" | "pipeline" | "automation"
  >("overview");

  const tabs = [
    { id: "overview", label: "Connected Overview", icon: Layers },
    { id: "website", label: "Website Builder", icon: Globe },
    { id: "crm", label: "CRM & WhatsApp", icon: Users },
    { id: "pipeline", label: "Sales Pipeline", icon: Kanban },
    { id: "automation", label: "Automations", icon: Zap },
  ] as const;

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Soft atmospheric mint glow under the mockup frame */}
      <div
        className="absolute -inset-4 sm:-inset-6 bg-gradient-to-b from-[#064E3B]/20 via-[#064E3B]/10 to-transparent rounded-[36px] blur-2xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Mockup Window Container */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E4E2D8] shadow-2xl shadow-black/8 overflow-hidden transition-all duration-300">
        
        {/* Browser / App Header Chrome */}
        <div className="bg-[#111827] text-white px-4 sm:px-6 py-3 sm:py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-[#374151]">
          {/* Left: Window Controls + App Identity */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
            </div>

            <div className="h-4 w-px bg-white/15 hidden sm:block" />

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-[#064E3B] flex items-center justify-center p-0.5">
                <Image
                  src="/logo_withot text.png"
                  alt="CODIIC"
                  width={14}
                  height={14}
                  className="object-contain invert brightness-0"
                />
              </div>
              <span className="text-xs font-bold tracking-tight text-white hidden sm:inline">
                CODIIC Workspace
              </span>
            </div>
          </div>

          {/* Center: Live URL / Status Bar */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono text-white/80 border border-white/10 max-w-xs truncate">
            <Lock className="w-3 h-3 text-[#064E3B] shrink-0" />
            <span className="truncate">codiic.app/workspace/hub</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B] animate-pulse shrink-0" />
          </div>

          {/* Right: Live Sync Badge */}
          <div className="flex items-center gap-2 text-xs">
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#064E3B]/20 text-[#064E3B] font-medium text-[11px] border border-[#064E3B]/30">
              <Sparkles className="w-3 h-3" />
              <span>All Systems Synced</span>
            </span>
          </div>
        </div>

        {/* Workspace Sub-Navigation / Pillar Selector (Dropship.io style tab bar) */}
        <div className="bg-[#F7F7F2] px-3 sm:px-6 py-2.5 border-b border-[#E4E2D8] flex items-center justify-between gap-2 overflow-x-auto custom-scrollbar">
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white text-[#043B2C] shadow-xs border border-[#E4E2D8] font-bold"
                      : "text-[#4B5563] hover:text-[#111827] hover:bg-white/60"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 ${
                      isActive ? "text-[#064E3B]" : "text-[#4B5563]"
                    }`}
                    strokeWidth={1.8}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={onOpenSeeHowItWorks}
            className="hidden lg:flex items-center gap-1 text-[11px] font-bold text-[#043B2C] hover:text-[#064E3B] px-2.5 py-1 rounded-lg hover:bg-white transition-colors shrink-0 cursor-pointer"
          >
            <span>Interactive Demo</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>

        {/* Tab 1: Connected Overview (Masterpiece Multi-Pillar Workstation) */}
        {activeTab === "overview" && (
          <div className="p-4 sm:p-6 lg:p-7 space-y-5 animate-in fade-in duration-200">
            {/* Top Workspace KPI Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-[#F7F7F2] rounded-2xl p-3.5 border border-[#E6E4DB] hover:border-[#064E3B]/30 transition-colors">
                <div className="flex items-center justify-between text-[11px] font-medium text-[#4B5563]">
                  <span>Active Leads</span>
                  <span className="text-[10px] bg-[#F1F0EA] text-[#043B2C] font-bold px-1.5 py-0.5 rounded">
                    +38% this wk
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#111827] mt-1">
                  142
                </div>
                <div className="text-[11px] text-[#043B2C] font-medium mt-0.5">
                  Web & WhatsApp Inquiries
                </div>
              </div>

              <div className="bg-[#F7F7F2] rounded-2xl p-3.5 border border-[#E6E4DB] hover:border-[#064E3B]/30 transition-colors">
                <div className="flex items-center justify-between text-[11px] font-medium text-[#4B5563]">
                  <span>Pipeline Value</span>
                  <span className="text-[10px] bg-[#F5EFDF] text-[#6E5621] font-bold px-1.5 py-0.5 rounded">
                    Active Q4
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#111827] mt-1 font-mono">
                  ₹54,60,000
                </div>
                <div className="text-[11px] text-[#4B5563] font-medium mt-0.5">
                  18 deals in motion
                </div>
              </div>

              <div className="bg-[#F7F7F2] rounded-2xl p-3.5 border border-[#E6E4DB] hover:border-[#064E3B]/30 transition-colors">
                <div className="flex items-center justify-between text-[11px] font-medium text-[#4B5563]">
                  <span>Online Storefront</span>
                  <span className="text-[10px] bg-[#F1F0EA] text-[#043B2C] font-bold px-1.5 py-0.5 rounded">
                    ● Live
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#064E3B] mt-1">
                  99.9% Up
                </div>
                <div className="text-[11px] text-[#4B5563] font-medium mt-0.5">
                  Instant form & UPI checkout
                </div>
              </div>

              <div className="bg-[#F7F7F2] rounded-2xl p-3.5 border border-[#E6E4DB] hover:border-[#064E3B]/30 transition-colors">
                <div className="flex items-center justify-between text-[11px] font-medium text-[#4B5563]">
                  <span>Auto-Response</span>
                  <span className="text-[10px] bg-[#F1F0EA] text-[#043B2C] font-bold px-1.5 py-0.5 rounded">
                    Instant
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#111827] mt-1">
                  0.4s
                </div>
                <div className="text-[11px] text-[#043B2C] font-medium mt-0.5">
                  WhatsApp brochure dispatch
                </div>
              </div>
            </div>

            {/* 3-Pillar Unified Workspace Representation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
              
              {/* Pillar 1: Storefront Live Preview (Left - 4 cols) */}
              <div className="lg:col-span-4 bg-[#F7F7F2] rounded-2xl p-4 border border-[#E6E4DB] flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-[#E6E4DB]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-[#F1F0EA] text-[#064E3B] flex items-center justify-center">
                        <Globe className="w-3.5 h-3.5" strokeWidth={1.8} />
                      </div>
                      <span className="text-xs font-bold text-[#111827]">
                        Website Builder
                      </span>
                    </div>
                    <span className="text-[10px] text-[#043B2C] bg-[#F1F0EA] px-2 py-0.5 rounded font-bold">
                      Published
                    </span>
                  </div>

                  {/* Mini Storefront Rendering */}
                  <div className="mt-3 bg-white rounded-xl p-3 border border-[#E4E2D8] shadow-xs space-y-2.5">
                    <div className="flex items-center justify-between text-[10px] text-[#4B5563] pb-2 border-b border-[#F1F0EA]">
                      <span className="font-semibold text-[#111827]">store.yourbrand.in</span>
                      <span className="text-[#043B2C] font-semibold">● Live</span>
                    </div>

                    <div className="rounded-lg bg-gradient-to-r from-[#111827] to-[#374151] p-3 text-white">
                      <div className="text-[9px] font-bold text-[#064E3B] uppercase tracking-wider">
                        Spring Collection
                      </div>
                      <div className="text-xs font-bold mt-0.5">
                        Architectural Ceramics & Studio
                      </div>
                      <button className="mt-2 text-[9px] bg-[#064E3B] hover:bg-[#043B2C] text-white font-bold px-2.5 py-1 rounded-md transition-colors">
                        Shop Catalog
                      </button>
                    </div>

                    <div className="p-2 rounded-lg bg-[#F1F0EA]/60 border border-[#064E3B]/20 flex items-center justify-between text-[10px]">
                      <span className="font-medium text-[#111827]">
                        New visitor submitted form
                      </span>
                      <span className="text-[#043B2C] font-bold">Just now</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[#4B5563] flex items-center justify-between">
                  <span>Forms feed straight to CRM</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#064E3B]" strokeWidth={2} />
                </div>
              </div>

              {/* Pillar 2: CRM & WhatsApp Stream (Middle - 4 cols) */}
              <div className="lg:col-span-4 bg-[#F7F7F2] rounded-2xl p-4 border border-[#E6E4DB] flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-[#E6E4DB]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-[#F1F0EA] text-[#043B2C] flex items-center justify-center">
                        <Users className="w-3.5 h-3.5" strokeWidth={1.8} />
                      </div>
                      <span className="text-xs font-bold text-[#111827]">
                        CRM & WhatsApp
                      </span>
                    </div>
                    <span className="text-[10px] text-[#043B2C] bg-[#F1F0EA] px-2 py-0.5 rounded font-bold">
                      Real-time
                    </span>
                  </div>

                  {/* Customer Lead Card */}
                  <div className="mt-3 bg-white rounded-xl p-3 border border-[#E4E2D8] shadow-xs space-y-2.5">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-xs font-bold text-[#111827]">
                          Rahul Sharma
                        </div>
                        <div className="text-[10px] text-[#4B5563]">
                          Inquiry: 3BHK Full Interior Design
                        </div>
                      </div>
                      <span className="text-[9px] bg-[#F1F0EA] text-[#065F46] font-bold px-1.5 py-0.5 rounded">
                        WhatsApp Active
                      </span>
                    </div>

                    <div className="p-2 rounded-lg bg-[#F7F7F2] border border-[#E6E4DB] text-[10px] text-[#4B5563] space-y-1">
                      <div className="flex items-center justify-between">
                        <span>Deal Estimate:</span>
                        <span className="font-mono font-bold text-[#111827]">₹4,50,000</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Assigned Rep:</span>
                        <span className="font-semibold text-[#043B2C]">Rohan M. (West)</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] text-[#4B5563]">
                      <MessageSquare className="w-3 h-3 text-[#064E3B]" strokeWidth={2} />
                      <span className="truncate">&quot;Sent floorplan over WhatsApp&quot;</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[#4B5563] flex items-center justify-between">
                  <span>Syncs automatically with rep phone</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#064E3B]" strokeWidth={2} />
                </div>
              </div>

              {/* Pillar 3: Sales Pipeline & Automation (Right - 4 cols) */}
              <div className="lg:col-span-4 bg-[#F7F7F2] rounded-2xl p-4 border border-[#E6E4DB] flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-[#E6E4DB]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-[#F1F0EA] text-[#064E3B] flex items-center justify-center">
                        <Kanban className="w-3.5 h-3.5" strokeWidth={1.8} />
                      </div>
                      <span className="text-xs font-bold text-[#111827]">
                        Pipeline & Automation
                      </span>
                    </div>
                    <span className="text-[10px] text-[#043B2C] bg-[#F1F0EA] px-2 py-0.5 rounded font-bold">
                      Automated
                    </span>
                  </div>

                  {/* Mini Kanban Columns */}
                  <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
                    <div className="bg-white rounded-xl p-2.5 border border-[#E4E2D8]">
                      <div className="text-[9px] font-bold text-[#4B5563] uppercase">
                        Proposal
                      </div>
                      <div className="font-bold text-[#111827] mt-1">TechCorp India</div>
                      <div className="font-mono text-[#043B2C] font-bold mt-0.5">₹18.0L</div>
                      <span className="text-[8px] bg-blue-50 text-blue-700 px-1 py-0.5 rounded inline-block mt-1 font-semibold">
                        Reviewing
                      </span>
                    </div>

                    <div className="bg-[#F1F0EA]/60 rounded-xl p-2.5 border border-[#064E3B]/30">
                      <div className="text-[9px] font-bold text-[#043B2C] uppercase">
                        Won Deals
                      </div>
                      <div className="font-bold text-[#111827] mt-1">Apex Logistics</div>
                      <div className="font-mono text-[#064E3B] font-bold mt-0.5">₹28.2L</div>
                      <span className="text-[8px] bg-[#064E3B] text-white px-1 py-0.5 rounded inline-block mt-1 font-semibold">
                        Closed
                      </span>
                    </div>
                  </div>

                  {/* Automation Trigger Pill */}
                  <div className="mt-2.5 p-2 rounded-xl bg-white border border-[#E4E2D8] flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-[#064E3B]" strokeWidth={2} />
                      <span className="font-medium text-[#111827]">
                        Auto-catalog sent to buyer
                      </span>
                    </div>
                    <span className="text-[9px] font-mono text-[#043B2C] font-bold">
                      0.4s
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[#4B5563] flex items-center justify-between">
                  <span>Zero manual copy-pasting</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#064E3B]" strokeWidth={2} />
                </div>
              </div>

            </div>

            {/* Bottom Bar: Quick Callout */}
            <div className="p-3 bg-white rounded-xl border border-[#E4E2D8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-[#4B5563]">
                <span className="w-2 h-2 rounded-full bg-[#064E3B]" />
                <span>
                  <strong className="text-[#111827]">Single connected database:</strong> One update syncs across website, CRM, deals, and automated WhatsApp replies.
                </span>
              </div>
              <button
                onClick={onOpenGetStarted}
                className="text-[#043B2C] hover:text-[#064E3B] font-bold flex items-center gap-1 transition-colors shrink-0 cursor-pointer"
              >
                <span>Try this workflow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Website Builder Deep Dive */}
        {activeTab === "website" && (
          <div className="p-5 sm:p-7 space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h4 className="text-sm font-bold text-[#111827]">
                  High-Converting Business Website Builder
                </h4>
                <p className="text-xs text-[#4B5563]">
                  Build fast, responsive storefronts with drag-and-drop sections connected directly to your CRM.
                </p>
              </div>
              <span className="text-xs bg-[#F1F0EA] text-[#043B2C] font-bold px-3 py-1 rounded-full border border-[#064E3B]/20">
                SEO & Mobile Ready
              </span>
            </div>

            <div className="bg-[#F7F7F2] rounded-2xl p-4 sm:p-5 border border-[#E6E4DB] space-y-3">
              <div className="bg-white rounded-xl p-4 border border-[#E4E2D8] shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#F1F0EA] text-xs">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#064E3B]" strokeWidth={1.8} />
                    <span className="font-bold text-[#111827]">www.zenithadvisory.in</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#043B2C] bg-[#F1F0EA] px-2 py-0.5 rounded font-bold">
                      Published
                    </span>
                    <button
                      onClick={onOpenGetStarted}
                      className="text-[11px] bg-[#111827] hover:bg-[#064E3B] text-white px-2.5 py-1 rounded-lg font-semibold transition-colors cursor-pointer"
                    >
                      Edit Page
                    </button>
                  </div>
                </div>

                <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-[#F7F7F2] rounded-lg">
                    <div className="text-[10px] text-[#4B5563] uppercase font-bold">
                      Monthly Visitors
                    </div>
                    <div className="text-lg font-black text-[#111827] mt-0.5">
                      18,420
                    </div>
                  </div>
                  <div className="p-3 bg-[#F7F7F2] rounded-lg">
                    <div className="text-[10px] text-[#4B5563] uppercase font-bold">
                      Form Submissions
                    </div>
                    <div className="text-lg font-black text-[#064E3B] mt-0.5">
                      314 Leads
                    </div>
                  </div>
                  <div className="p-3 bg-[#F7F7F2] rounded-lg">
                    <div className="text-[10px] text-[#4B5563] uppercase font-bold">
                      Conversion Rate
                    </div>
                    <div className="text-lg font-black text-[#111827] mt-0.5">
                      4.2%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: CRM & WhatsApp Deep Dive */}
        {activeTab === "crm" && (
          <div className="p-5 sm:p-7 space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h4 className="text-sm font-bold text-[#111827]">
                  Unified Customer Lead CRM
                </h4>
                <p className="text-xs text-[#4B5563]">
                  Every inquiry from your website, WhatsApp, and email organized in one unified profile.
                </p>
              </div>
              <span className="text-xs bg-[#F1F0EA] text-[#043B2C] font-bold px-3 py-1 rounded-full border border-[#064E3B]/20">
                Official WhatsApp API
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              {[
                {
                  name: "Rahul Verma",
                  source: "WhatsApp Business",
                  status: "Follow-up Due (2h)",
                  val: "₹4,50,000",
                  badgeClass: "bg-[#F5EFDF] text-[#6E5621]",
                },
                {
                  name: "Meera Patel",
                  source: "Website Form",
                  status: "Proposal Sent",
                  val: "₹2,10,000",
                  badgeClass: "bg-[#F1F0EA] text-[#043B2C]",
                },
                {
                  name: "Vikram Malhotra",
                  source: "Phone Ingestion",
                  status: "Site Visit Scheduled",
                  val: "₹12,00,000",
                  badgeClass: "bg-blue-100 text-blue-800",
                },
              ].map((lead, i) => (
                <div
                  key={i}
                  className="bg-[#F7F7F2] hover:bg-white p-3.5 rounded-xl border border-[#E6E4DB] hover:border-[#064E3B]/40 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xs">
                      {lead.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-[#111827]">{lead.name}</div>
                      <div className="text-[11px] text-[#4B5563]">{lead.source}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold text-[#111827]">{lead.val}</div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${lead.badgeClass}`}>
                      {lead.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Sales Pipeline Deep Dive */}
        {activeTab === "pipeline" && (
          <div className="p-5 sm:p-7 space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h4 className="text-sm font-bold text-[#111827]">
                  Visual Kanban Sales Pipeline
                </h4>
                <p className="text-xs text-[#4B5563]">
                  Track deals from initial contact to contract closure with stage-by-stage forecasting.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-[#043B2C] bg-[#F1F0EA] px-3 py-1 rounded-full border border-[#064E3B]/20">
                ₹54.6L Active
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-[#F7F7F2] p-3 rounded-xl border border-[#E6E4DB] space-y-2">
                <div className="flex items-center justify-between font-bold text-[#4B5563] text-[11px]">
                  <span>1. QUALIFIED</span>
                  <span>2</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-[#E4E2D8]">
                  <div className="font-bold text-[#111827]">Sunrise Retail</div>
                  <div className="text-xs font-mono font-bold text-[#064E3B]">₹4,20,000</div>
                  <div className="text-[10px] text-[#4B5563] mt-1">Lead assigned</div>
                </div>
              </div>

              <div className="bg-[#F1F0EA]/50 p-3 rounded-xl border border-[#064E3B]/30 space-y-2">
                <div className="flex items-center justify-between font-bold text-[#043B2C] text-[11px]">
                  <span>2. IN PROPOSAL</span>
                  <span>1</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-[#064E3B]/30 shadow-xs">
                  <div className="font-bold text-[#111827]">TechCorp India</div>
                  <div className="text-xs font-mono font-bold text-[#064E3B]">₹18,00,000</div>
                  <div className="text-[10px] text-[#043B2C] font-semibold mt-1">
                    Agreement Sent
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F7F2] p-3 rounded-xl border border-[#E6E4DB] space-y-2">
                <div className="flex items-center justify-between font-bold text-[#4B5563] text-[11px]">
                  <span>3. CLOSED WON</span>
                  <span>4</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-[#E4E2D8]">
                  <div className="font-bold text-[#111827]">Apex Logistics</div>
                  <div className="text-xs font-mono font-bold text-[#064E3B]">₹28,20,000</div>
                  <div className="text-[10px] text-[#043B2C] font-semibold mt-1">Paid via UPI</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Automation Engine Deep Dive */}
        {activeTab === "automation" && (
          <div className="p-5 sm:p-7 space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h4 className="text-sm font-bold text-[#111827]">
                  Zero-Delay Automation Engine
                </h4>
                <p className="text-xs text-[#4B5563]">
                  Automate repetitive workflows without writing custom code or hiring external engineers.
                </p>
              </div>
              <span className="text-xs bg-[#F1F0EA] text-[#043B2C] font-bold px-3 py-1 rounded-full border border-[#064E3B]/20">
                100% Reliable
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 bg-[#F7F7F2] rounded-xl border border-[#E6E4DB] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#111827]">Trigger: New Website Lead</div>
                  <div className="text-[11px] text-[#4B5563]">Fires whenever a visitor submits an inquiry</div>
                </div>
                <span className="text-[10px] font-mono text-[#043B2C] font-bold">Step 1</span>
              </div>

              <div className="p-3 bg-[#F7F7F2] rounded-xl border border-[#E6E4DB] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#111827]">Action: Auto-Score & Assign Rep</div>
                  <div className="text-[11px] text-[#4B5563]">Routes lead to regional salesperson instantly</div>
                </div>
                <span className="text-[10px] font-mono text-[#043B2C] font-bold">Step 2</span>
              </div>

              <div className="p-3 bg-[#F1F0EA] rounded-xl border border-[#064E3B]/30 flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#043B2C]">Action: Send WhatsApp Catalog & Booking Link</div>
                  <div className="text-[11px] text-[#043B2C]">Dispatched in 0.4 seconds over official API</div>
                </div>
                <span className="text-[10px] font-mono text-[#043B2C] font-bold">Step 3</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
