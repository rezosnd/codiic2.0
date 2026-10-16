"use client";

import React, { useState, useEffect } from "react";
import {
  Store,
  Briefcase,
  Building2,
  Stethoscope,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  Sparkles,
  ExternalLink,
  Kanban,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

interface TuyoShowcaseSectionProps {
  onOpenGetStarted: () => void;
}

export const TuyoShowcaseSection: React.FC<TuyoShowcaseSectionProps> = ({
  onOpenGetStarted,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cases = [
    {
      id: "omnichannel-retail",
      index: "01",
      tag: "D2C Brands & Omnichannel Retail",
      title: "From Instagram Ad to Automated Dispatch & WhatsApp Tracking",
      subtitle: "How growing lifestyle brands connect storefront, UPI payments, and customer status updates.",
      challenge: "Managing sales across Instagram DMs, Shopify, and phone inquiries led to lost orders, missed bank slip confirmations, and endless 'Where is my order?' queries.",
      solution: "Connected CODIIC Storefront with Razorpay payment links, automatic inventory sync, and WhatsApp order status triggers.",
      metrics: [
        { label: "Order Processing Time", value: "< 2 mins", sub: "Down from 30 mins manual chat" },
        { label: "Payment Reconciliation", value: "100% Auto", sub: "Instant webhook confirmation" },
        { label: "Follow-up Rate", value: "Zero Drops", sub: "Systematic abandoned cart flow" },
      ],
      modules: ["Storefront Builder", "UPI & Razorpay Gateway", "WhatsApp API", "CRM Order Log"],
      accentColor: "#00B879",
      hinglish: "Website se customer tak — sab connected.",
      uiSnippet: {
        header: "Live Storefront & Order Ingestion Stream",
        badge: "Auto-Synced",
        flow: [
          { step: "Cart Check-Out", time: "14:22", desc: "Customer placed order #CD-8921 via online store", status: "Completed" },
          { step: "UPI Verification", time: "14:22", desc: "Razorpay confirmed ₹4,890 payment via UPI intent", status: "Verified" },
          { step: "CRM Profile Created", time: "14:23", desc: "Lead tagged as 'Paid Customer' with shipping address", status: "Created" },
          { step: "WhatsApp Dispatch Note", time: "14:23", desc: "Tracking link sent automatically via official API", status: "Delivered" },
        ],
      },
    },
    {
      id: "b2b-services",
      index: "02",
      tag: "Consulting & Tech Agencies",
      title: "Consultative Inquiries to Closed Deals with Pipeline Visibility",
      subtitle: "How professional service firms run high-ticket proposals without losing deals in executive inboxes.",
      challenge: "Inquiries arrived through web forms, emails, and LinkedIn, but without a unified pipeline, follow-ups depended entirely on individual consultants remembering to write back.",
      solution: "Deployed CODIIC Multi-Stage Pipeline with weighted deal forecasting, instant rep assignments, and calendar meeting sync.",
      metrics: [
        { label: "Pipeline Visibility", value: "100% Live", sub: "Stage-by-stage clear view" },
        { label: "Lead Response Time", value: "4 mins", sub: "Down from next-day email replies" },
        { label: "Proposal Follow-up", value: "Scheduled", sub: "Automated alert to rep & client" },
      ],
      modules: ["Web Inquiry Forms", "Sales Pipeline", "Email & Calendar Sync", "Document Vault"],
      accentColor: "#008F60",
      hinglish: "Har deal, har stage — sab saaf dikh raha hai.",
      uiSnippet: {
        header: "Enterprise Sales Pipeline • Stage Progression",
        badge: "Active Deal",
        flow: [
          { step: "Inquiry Received", time: "11:05", desc: "High-value scope inquiry from CloudCorp (₹12,50,000)", status: "Completed" },
          { step: "Account Exec Assigned", time: "11:06", desc: "Lead routed to Senior Director based on budget tier", status: "Assigned" },
          { step: "Discovery Call Held", time: "Yesterday", desc: "Notes logged & proposal draft attached to deal card", status: "Completed" },
          { step: "Stage: In Negotiation", time: "Today", desc: "Commercial review scheduled for Thursday 3 PM", status: "In Progress" },
        ],
      },
    },
    {
      id: "real-estate",
      index: "03",
      tag: "Real Estate & Developers",
      title: "High-Volume Property Inquiries to Verified Site-Visits",
      subtitle: "How property developers and brokerage firms manage thousands of monthly project inquiries systematically.",
      challenge: "Portal leads from Google Ads and Meta campaigns were going cold because brokers took 4+ hours to contact prospective buyers.",
      solution: "Integrated Instant Lead Capture with instant WhatsApp project brochure dispatch, automated broker assignment, and site-visit calendar.",
      metrics: [
        { label: "First Contact Speed", value: "30 Seconds", sub: "Instant brochure on WhatsApp" },
        { label: "Site Visit Conversion", value: "+38% Ratio", sub: "Automated pre-visit reminders" },
        { label: "Broker Accountability", value: "100% Tracked", sub: "Call and visit outcome logs" },
      ],
      modules: ["Meta Ads Connector", "WhatsApp Brochure Bot", "Broker CRM", "Site-Visit Pipeline"],
      accentColor: "#00B879",
      hinglish: "Follow-up bhoolna ab band.",
      uiSnippet: {
        header: "Property Lead Lifecycle & Site-Visit Pipeline",
        badge: "Verified Lead",
        flow: [
          { step: "Meta Ad Form Submitted", time: "09:40", desc: "Inquiry for 3BHK Penthouse Project (Gurugram)", status: "Ingested" },
          { step: "Instant WhatsApp Dispatch", time: "09:40", desc: "E-brochure + floor plan link sent to buyer's number", status: "Sent" },
          { step: "Relationship Manager Call", time: "09:55", desc: "Broker logged phone summary: Buyer prefers weekend slot", status: "Logged" },
          { step: "Site Visit Scheduled", time: "Saturday 11 AM", desc: "Google Calendar invite + gate pass QR generated", status: "Confirmed" },
        ],
      },
    },
    {
      id: "healthcare-clinics",
      index: "04",
      tag: "Healthcare & Specialized Clinics",
      title: "Online Appointment Booking to Patient Consultation & Feedback",
      subtitle: "How specialized medical practices streamline appointments, intake history, and patient follow-ups.",
      challenge: "Phone appointment desks suffered from busy lines, missed calls during peak hours, and high no-show rates for consultations.",
      solution: "Created CODIIC Smart Patient Booking Portal with SMS/WhatsApp appointment reminders and post-consultation prescription follow-ups.",
      metrics: [
        { label: "No-Show Reduction", value: "-42% Drop", sub: "Thanks to timely WhatsApp alerts" },
        { label: "Self-Service Bookings", value: "74% Volume", sub: "Patients schedule directly 24/7" },
        { label: "Follow-Up Continuity", value: "Automated", sub: "Checkup reminders at 14 days" },
      ],
      modules: ["Booking Engine", "Patient CRM", "SMS / WhatsApp Notifier", "Consultation Workflow"],
      accentColor: "#008F60",
      hinglish: "Ek platform, poora business.",
      uiSnippet: {
        header: "Patient Appointment & Consultation Timeline",
        badge: "Confirmed Slot",
        flow: [
          { step: "Online Slot Selection", time: "08:15", desc: "Patient booked Orthopedic Consultation for 4:30 PM", status: "Booked" },
          { step: "WhatsApp Confirmation", time: "08:16", desc: "Clinic location pin & prep instructions delivered", status: "Confirmed" },
          { step: "Consultation Completed", time: "16:55", desc: "Doctor updated clinical visit summary and next review", status: "Completed" },
          { step: "Follow-Up Reminder Set", time: "+14 Days", desc: "Automated review reminder queued for dispatch", status: "Scheduled" },
        ],
      },
    },
  ];

  const current = cases[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cases.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section id="showcase" className="py-20 sm:py-28 bg-[#F7F9F8] border-b border-[#E8EAF0] relative overflow-hidden">
      {/* Decorative ambient subtle background highlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00B879]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#008F60]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Tuyo-inspired confident typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-[#008F60] text-xs font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#00B879]" />
              <span>PROVEN OPERATIONAL PLAYBOOKS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight leading-[1.15]">
              How modern businesses run on <span className="text-[#00B879]">CODIIC</span>.
            </h2>
            
            <p className="mt-3 text-base sm:text-lg text-[#555A68] leading-relaxed">
              Curated blueprints of how companies connect storefront, leads, sales pipeline, and automated follow-ups into one synchronized operation.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous showcase blueprint"
              className="w-11 h-11 rounded-full border border-[#D9DEDC] bg-white hover:bg-[#171923] hover:text-white hover:border-[#171923] text-[#171923] flex items-center justify-center transition-all shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono font-semibold text-[#555A68]">
              {current.index} / 0{cases.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next showcase blueprint"
              className="w-11 h-11 rounded-full border border-[#D9DEDC] bg-white hover:bg-[#171923] hover:text-white hover:border-[#171923] text-[#171923] flex items-center justify-center transition-all shadow-sm active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Big Featured Showcase Card (Tuyo-inspired large rounded container) */}
        <div className="bg-white rounded-3xl border border-[#E2E8E5] shadow-xl shadow-black/[0.03] overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Editorial Storytelling (Col span 6) */}
            <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E8EAF0]">
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#008F60] bg-[#E8F8F1] px-3 py-1 rounded-full border border-[#00B879]/20">
                    {current.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#8A90A0]">
                    PLAYBOOK #{current.index}
                  </span>
                </div>

                {/* Main Headline */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171923] tracking-tight leading-snug mb-3">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-[#555A68] leading-relaxed mb-6">
                  {current.subtitle}
                </p>

                {/* Problem vs Solution Split */}
                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-2xl bg-[#F7F9F8] border border-[#E8EAF0]">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#E11D48] mb-1">
                      Before CODIIC • The Disconnected Bottleneck
                    </div>
                    <p className="text-xs sm:text-sm text-[#555A68] leading-relaxed">
                      {current.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#E8F8F1]/60 border border-[#00B879]/30">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#008F60] mb-1">
                      With CODIIC • Connected Workspace
                    </div>
                    <p className="text-xs sm:text-sm text-[#171923] font-medium leading-relaxed">
                      {current.solution}
                    </p>
                  </div>
                </div>

                {/* Connected Modules Tags */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#8A90A0] mb-2.5">
                    Connected Architecture
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {current.modules.map((mod, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171923] bg-[#F7F9F8] border border-[#D9DEDC] px-3 py-1 rounded-lg"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00B879]" />
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bottom Strip */}
              <div className="pt-8 mt-8 border-t border-[#E8EAF0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs font-semibold text-[#008F60] bg-[#E8F8F1] px-3 py-1.5 rounded-full border border-[#00B879]/20">
                  {current.hinglish}
                </div>

                <button
                  onClick={onOpenGetStarted}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-xs font-bold transition-all shadow-md shadow-[#00B879]/20 hover:shadow-lg"
                >
                  <span>Build This Workflow</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Live Interactive UI Representation (Col span 6) */}
            <div className="lg:col-span-6 bg-[#171923] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
              {/* Subtle grid pattern in dark container */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00B879_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              <div className="relative z-10">
                {/* Header in simulated app interface */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#00B879] animate-pulse" />
                    <span className="text-xs font-mono font-bold text-gray-200">
                      {current.uiSnippet.header}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#00B879] bg-[#00B879]/15 border border-[#00B879]/30 px-2.5 py-0.5 rounded-full">
                    {current.uiSnippet.badge}
                  </span>
                </div>

                {/* Connected Flow Stream */}
                <div className="space-y-3 mb-8">
                  {current.uiSnippet.flow.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-gray-900/90 border border-gray-800 hover:border-[#00B879]/40 transition-all flex items-start justify-between gap-3"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#00B879]/20 text-[#00B879] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#00B879]/30">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-gray-100">
                              {item.step}
                            </span>
                            <span className="text-[10px] text-gray-400 font-mono">
                              • {item.time}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800 shrink-0">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Key Operational Impact Metrics */}
                <div className="pt-4 border-t border-gray-800">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Demonstrated Operational Impact
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {current.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-gray-900/60 border border-gray-800 text-left"
                      >
                        <div className="text-lg sm:text-xl font-extrabold text-[#00B879] tracking-tight">
                          {m.value}
                        </div>
                        <div className="text-[11px] font-semibold text-gray-200 mt-0.5">
                          {m.label}
                        </div>
                        <div className="text-[10px] text-gray-400 line-clamp-1 mt-0.5">
                          {m.sub}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom footer inside dark pane */}
              <div className="relative z-10 pt-6 mt-6 border-t border-gray-800/80 flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B879]"></span>
                  Native CODIIC Multi-Tenant Engine
                </span>
                <span className="font-mono text-gray-300">Live Production Blueprint</span>
              </div>
            </div>

          </div>
        </div>

        {/* Horizontal Preview Row (Tuyo-inspired interactive selector) */}
        <div className="mt-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[#555A68] mb-3 flex items-center justify-between">
            <span>Explore Other Verified Playbooks</span>
            <span className="text-[#008F60]">Click to preview</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cases.map((item, index) => {
              const isSelected = activeIndex === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`p-4 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between group ${
                    isSelected
                      ? "bg-white border-[#00B879] shadow-md ring-2 ring-[#00B879]/20"
                      : "bg-white border-[#E2E8E5] hover:border-[#00B879]/40 hover:bg-white"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                          isSelected
                            ? "bg-[#00B879] text-white"
                            : "bg-[#F7F9F8] text-[#555A68] group-hover:text-[#171923]"
                        }`}
                      >
                        {item.index}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A90A0]">
                        {item.tag.split(" ")[0]}
                      </span>
                    </div>

                    <h4
                      className={`text-sm font-bold tracking-tight line-clamp-2 transition-colors ${
                        isSelected ? "text-[#008F60]" : "text-[#171923] group-hover:text-[#00B879]"
                      }`}
                    >
                      {item.title}
                    </h4>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#E8EAF0] flex items-center justify-between text-[11px]">
                    <span className="text-[#555A68] font-medium">{item.metrics[0].value}</span>
                    <span className={`font-semibold transition-transform ${isSelected ? "text-[#008F60] translate-x-1" : "text-[#8A90A0] group-hover:text-[#00B879]"}`}>
                      View Blueprint →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
