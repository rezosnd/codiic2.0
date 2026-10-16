"use client";

import React, { useState } from "react";
import {
  Globe,
  Users,
  Kanban,
  Zap,
  Briefcase,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const ProductIntro: React.FC = () => {
  const [selectedCapability, setSelectedCapability] = useState<number>(0);

  const capabilities = [
    {
      id: "website-builder",
      icon: Globe,
      color: "#00B879",
      title: "Storefront & Website Builder",
      tagline: "Build & launch in minutes",
      hinglish: "Website se customer tak — direct connection.",
      description:
        "Create responsive business websites, landing pages, and online stores with flexible drag-and-drop components and instant payment gateways.",
      linkText: "Explore Storefront Builder",
      href: "#website-builder",
      details: [
        "Drag-and-drop visual component canvas with real-time preview",
        "E-commerce catalog with integrated UPI & card payments",
        "Optimized layout for desktop, tablet, and mobile",
        "Fast page load speeds with native SEO structured data",
      ],
      previewStats: { label: "Average Publish Time", val: "Under 15 Mins" },
    },
    {
      id: "crm",
      icon: Users,
      color: "#008F60",
      title: "Customer Relationship Management",
      tagline: "Every customer conversation in one place",
      hinglish: "Sab jagah leads hain — CODIIC sambhalega.",
      description:
        "Consolidate contacts, capture customer interactions, and maintain complete conversation history across WhatsApp, email, and web inquiries.",
      linkText: "Explore Customer CRM",
      href: "#crm",
      details: [
        "Unified WhatsApp, email, and phone contact timeline",
        "Automated lead scoring and enrichment from form submissions",
        "Smart lead distribution rules to assign reps instantly",
        "Scheduled follow-up reminder alerts so deals never go cold",
      ],
      previewStats: { label: "Follow-up Response Time", val: "< 2 Minutes" },
    },
    {
      id: "pipeline",
      icon: Kanban,
      color: "#00B879",
      title: "Sales Pipeline & Deal Tracking",
      tagline: "Clear visibility into every deal stage",
      hinglish: "Har deal, har stage — sab saaf dikh raha hai.",
      description:
        "Track commercial opportunities from first inquiry to closed-won revenue using an intuitive visual Kanban board with real-time stage totals.",
      linkText: "Explore Sales Pipeline",
      href: "#pipeline",
      details: [
        "Drag-and-drop Kanban pipeline with customizable deal stages",
        "Multiple distinct pipelines for different services or products",
        "Revenue forecasting with weighted stage-probability calculation",
        "Next-action checklists attached directly to deal cards",
      ],
      previewStats: { label: "Pipeline Visibility", val: "100% Real-time" },
    },
    {
      id: "automation",
      icon: Zap,
      color: "#008F60",
      title: "Workflow Automation & Triggers",
      tagline: "Let routine work run on autopilot",
      hinglish: "Kaam smart, growth fast.",
      description:
        "Automate repetitive tasks, dispatch WhatsApp notifications, trigger reminders, and execute multi-step business logic without writing code.",
      linkText: "Explore Automation",
      href: "#automation",
      details: [
        "Visual trigger-condition-action workflow canvas",
        "Instant WhatsApp and email auto-responders on new leads",
        "Conditional routing based on deal size or customer location",
        "Live execution logs with instant test simulation",
      ],
      previewStats: { label: "Manual Effort Saved", val: "Hours Daily" },
    },
    {
      id: "management",
      icon: Briefcase,
      color: "#00B879",
      title: "Business Management & Operations",
      tagline: "Unify teams, tasks, and client records",
      hinglish: "Business badhega, confusion nahi.",
      description:
        "Bring project deliverables, internal task lists, client documents, and cross-team communication into one organized workspace.",
      linkText: "Explore Business Operations",
      href: "#capabilities",
      details: [
        "Project milestones with assignees, deadlines, and progress bars",
        "Role-based secure permissions for staff and department leads",
        "Centralized document and quotation repository",
        "Internal activity logs and approval check-points",
      ],
      previewStats: { label: "Team Alignment", val: "One Workspace" },
    },
    {
      id: "analytics",
      icon: BarChart3,
      color: "#008F60",
      title: "Analytics & Executive Reporting",
      tagline: "Actionable real-time business intelligence",
      hinglish: "Decisions guess par nahi, numbers par.",
      description:
        "Make confident decisions with real-time performance metrics, sales velocity summaries, and lead conversion channel breakdowns.",
      linkText: "Explore Analytics",
      href: "#capabilities",
      details: [
        "Live revenue, average ticket size, and collection tracking",
        "Lead acquisition channel comparison (WhatsApp vs Web vs Ads)",
        "Sales representative conversion velocity and activity audits",
        "Clean exportable reports for executive reviews",
      ],
      previewStats: { label: "Reporting Frequency", val: "Real-time" },
    },
  ];

  const active = capabilities[selectedCapability];
  const ActiveIcon = active.icon;

  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-[#F7F9F8] border-b border-[#E8EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-[#008F60] text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#00B879]" />
            <span>ONE CONNECTED WORKSPACE</span>
            <span className="text-[#171923]">•</span>
            <span className="font-semibold text-[#171923]">
              Ek platform, poora business
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight leading-tight">
            All your business tools, working together.
          </h2>

          <p className="text-base sm:text-lg text-[#555A68] leading-relaxed">
            Stop juggling disconnected applications. CODIIC unifies your website storefront, customer data, sales pipeline, and automated workflows into one clean platform.
          </p>
        </div>

        {/* 6 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const isSelected = selectedCapability === idx;
            return (
              <div
                key={cap.id}
                onClick={() => setSelectedCapability(idx)}
                className={`cursor-pointer rounded-3xl p-6 sm:p-7 transition-all duration-200 border text-left flex flex-col justify-between group ${
                  isSelected
                    ? "bg-white border-[#00B879] shadow-xl shadow-[#00B879]/10 ring-2 ring-[#00B879]/20"
                    : "bg-white border-[#E2E8E5] hover:border-[#00B879]/40 hover:shadow-md"
                }`}
              >
                <div>
                  {/* Top Icon & Tagline */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
                      style={{ backgroundColor: "#E8F8F1", color: cap.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#555A68] bg-[#F7F9F8] border border-[#E2E8E5] px-2.5 py-1 rounded-full">
                      {cap.tagline}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-lg font-bold text-[#171923] group-hover:text-[#008F60] transition-colors mb-2">
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#555A68] leading-relaxed mb-4">
                    {cap.description}
                  </p>

                  {/* Hinglish highlight */}
                  <div className="text-xs font-semibold text-[#008F60] bg-[#E8F8F1] p-2.5 rounded-xl border border-[#00B879]/20 mb-4">
                    {cap.hinglish}
                  </div>
                </div>

                {/* Explore link */}
                <div className="pt-3 border-t border-[#E8EAF0] flex items-center justify-between text-xs font-semibold text-[#008F60] group-hover:underline">
                  <span>{cap.linkText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Interactive Capability Focus Box */}
        <div className="mt-12 bg-white border border-[#E2E8E5] rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
                  style={{ backgroundColor: active.color }}
                >
                  <ActiveIcon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#008F60]">
                  Active Architecture Spotlight
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171923] tracking-tight">
                {active.title}
              </h3>

              <p className="text-sm text-[#555A68] leading-relaxed">
                {active.description}
              </p>

              <div className="p-3 bg-[#E8F8F1] rounded-2xl border border-[#00B879]/20 text-xs font-semibold text-[#008F60]">
                {active.hinglish}
              </div>

              <div className="pt-3">
                <a
                  href={active.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171923] hover:bg-[#00B879] text-white text-xs font-bold transition-all shadow-md shadow-[#171923]/10"
                >
                  <span>Explore {active.title} Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#171923] text-white rounded-2xl p-6 sm:p-7 border border-gray-800 shadow-xl">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-gray-800">
                <span className="text-xs font-semibold text-gray-200 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: active.color }}></span>
                  {active.title} • Key Capabilities
                </span>
                <span className="text-[11px] font-mono text-[#00B879] bg-[#00B879]/15 border border-[#00B879]/30 px-2.5 py-0.5 rounded-full">
                  {active.previewStats.label}: {active.previewStats.val}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {active.details.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-gray-900/80 border border-gray-800"
                  >
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 shrink-0 text-[#00B879]"
                    />
                    <span className="text-gray-200 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3.5 border-t border-gray-800 flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B879]" />
                  Direct sync with all CODIIC modules
                </span>
                <span className="text-gray-300 font-mono">Zero duplicate data entry</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
