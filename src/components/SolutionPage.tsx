"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Check,
  X,
  Quote,
  Star,
  Globe,
  MessageSquare,
  CircleUser,
  Zap,
} from "lucide-react";
import { FinalCtaSection } from "./FinalCtaSection";
import { Reveal } from "./Reveal";

export interface SolutionData {
  /** e.g. "Retail & D2C eCommerce" */
  name: string;
  /** breadcrumb label */
  crumb: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  headline: React.ReactNode;
  subheadline: string;
  painSolutions: { pain: string; solution: string }[];
  workflow: { title: string; desc: string; detail: string }[];
  useCases: { title: string; desc: string; stat: string }[];
  testimonial: { quote: string; name: string; role: string };
}

const FLOW_ICONS = [Globe, MessageSquare, CircleUser, Zap];

export const SolutionPage: React.FC<{
  data: SolutionData;
  onOpenGetStarted: () => void;
  onOpenSeeHowItWorks: () => void;
}> = ({ data, onOpenGetStarted, onOpenSeeHowItWorks }) => {
  const [activeStep, setActiveStep] = useState(0);
  const Icon = data.icon;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative pt-10 sm:pt-14 pb-14 sm:pb-18">
        <div aria-hidden className="absolute inset-x-0 top-0 h-[480px] overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-40 left-1/3 w-[760px] h-[400px] bg-[#064E3B]/10 blur-3xl rounded-full" />
          <div className="dot-grid absolute inset-x-0 top-0 h-64 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-[11px] font-semibold text-[#6B7280] mb-8"
          >
            <Link href="/" className="hover:text-[#043B2C] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/#solutions" className="hover:text-[#043B2C] transition-colors">
              Solutions
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#111827]">{data.crumb}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E4E2D8] bg-white text-[11px] font-bold uppercase tracking-wider text-[#4B5563]">
                <Icon className="w-4 h-4" />
                {data.badge}
              </div>
              <h1 className="mt-5 text-[32px] sm:text-5xl font-bold text-[#111827] tracking-[-0.035em] leading-[1.06]">
                {data.headline}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed">
                {data.subheadline}
              </p>
              <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={onOpenGetStarted}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#064E3B] hover:bg-[#043B2C] text-white text-sm font-bold shadow-xl shadow-[#064E3B]/25 transition-all active:scale-95 cursor-pointer"
                >
                  Start Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <Link
                  href="/platform/website-builder"
                  className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full bg-white text-sm font-bold text-[#111827] border border-[#E4E2D8] hover:border-[#C9CFC0] hover:bg-[#F7F7F2] transition-all active:scale-95"
                >
                  See the studio
                </Link>
              </div>
              <p className="mt-4 text-xs text-[#6B7280] font-medium">
                No credit card required · Live in 2 minutes · Cancel anytime
              </p>
            </Reveal>

            {/* Interactive workflow preview */}
            <Reveal delay={140} className="rounded-[24px] bg-white border border-[#E4E2D8] shadow-[0_30px_70px_-30px_rgba(17,24,39,0.25)] p-4 sm:p-5">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#F1F0EA]">
                <span className="flex gap-1.5">
                  <i className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <i className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <i className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </span>
                <span className="text-[11px] font-bold text-[#4B5563] truncate">
                  {data.crumb} · Live workflow
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {data.workflow.map((step, i) => {
                  const StepIcon = FLOW_ICONS[i % FLOW_ICONS.length];
                  const active = activeStep === i;
                  return (
                    <button
                      key={step.title}
                      type="button"
                      onClick={() => setActiveStep(i)}
                      className={`rounded-xl border p-3 text-left transition-all cursor-pointer ${
                        active
                          ? "border-[#064E3B] bg-[#F1F0EA] shadow-[0_0_0_3px_rgba(6,78,59,0.1)]"
                          : "border-[#E4E2D8] bg-white hover:border-[#C9CFC0]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black ${
                            active ? "bg-[#064E3B] text-white" : "bg-[#F1F0EA] text-[#4B5563]"
                          }`}
                        >
                          {i + 1}
                        </span>
                        <StepIcon className={`w-3.5 h-3.5 ${active ? "text-[#043B2C]" : "text-[#6B7280]"}`} />
                      </div>
                      <div className="mt-2 text-[11px] font-bold text-[#111827] leading-tight">
                        {step.title}
                      </div>
                      <div className="text-[9px] text-[#6B7280] mt-0.5 leading-snug">{step.desc}</div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 rounded-xl bg-[#F7F7F2] border border-[#F1F0EA] p-3.5 animate-tool-in" key={activeStep}>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#043B2C]">
                  <Zap className="w-3 h-3" /> Step {activeStep + 1} — {data.workflow[activeStep].title}
                </div>
                <p className="mt-1.5 text-[11px] text-[#4B5563] leading-relaxed">
                  {data.workflow[activeStep].detail}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Pain Points → Solutions ──────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E4E2D8] bg-white text-xs font-semibold text-[#4B5563]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B]" />
              Pain → Solved
            </div>
            <h2 className="mt-5 text-[30px] sm:text-4xl font-bold text-[#111827] tracking-[-0.035em] leading-[1.1]">
              Built for how {data.crumb.toLowerCase()}{" "}
              <em className="font-serif italic font-normal text-[#043B2C]">actually work.</em>
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {data.painSolutions.map((row, i) => (
              <Reveal
                key={i}
                delay={i * 80}
                className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-stretch"
              >
                <div className="rounded-2xl bg-[#F7F7F2] border border-[#E4E2D8] p-5 flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <p className="text-[13px] text-[#4B5563] leading-relaxed font-medium">{row.pain}</p>
                </div>
                <div className="rounded-2xl bg-white border border-[#064E3B]/30 p-5 flex items-start gap-3 hover:border-[#064E3B]/60 transition-colors">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-[#064E3B] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <p className="text-[13px] text-[#111827] leading-relaxed font-medium">{row.solution}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use-case cards + testimonial ─────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {data.useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 80}>
                <div className="group h-full rounded-2xl bg-white border border-[#E4E2D8] p-6 hover:border-[#064E3B]/40 hover:shadow-[0_18px_44px_-20px_rgba(4,59,44,0.3)] hover:-translate-y-0.5 transition-all">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#043B2C] bg-[#F1F0EA] inline-block px-2.5 py-1 rounded-full">
                    {u.stat}
                  </div>
                  <h3 className="mt-4 text-[15px] font-bold text-[#111827] tracking-tight">{u.title}</h3>
                  <p className="mt-2 text-[13px] text-[#4B5563] leading-relaxed">{u.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-10 sm:mt-14 max-w-4xl mx-auto rounded-[24px] bg-[#111827] text-white p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#064E3B]/20 blur-3xl" />
            <Quote className="w-8 h-8 text-[#064E3B] relative" />
            <p className="mt-4 text-lg sm:text-2xl font-medium leading-relaxed relative">
              {data.testimonial.quote}
            </p>
            <div className="mt-6 flex items-center gap-3 relative">
              <span className="w-11 h-11 rounded-full bg-[#064E3B] text-white text-sm font-black flex items-center justify-center">
                {data.testimonial.name.split(" ").map((w) => w[0]).join("")}
              </span>
              <div>
                <div className="text-sm font-bold">{data.testimonial.name}</div>
                <div className="text-xs text-gray-400">{data.testimonial.role}</div>
              </div>
              <span className="ml-auto flex gap-0.5 text-[#C6A15B]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </span>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection
        onOpenGetStarted={onOpenGetStarted}
        onOpenSeeHowItWorks={onOpenSeeHowItWorks}
        headline={`One Platform for Your ${data.crumb} — Start Today.`}
        subheadline="Drag-and-drop your storefront, connect WhatsApp & Instagram in 2 minutes, and scale with AI automation — start free today."
      />
    </>
  );
};
