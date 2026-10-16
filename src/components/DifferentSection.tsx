"use client";

import React from "react";
import Image from "next/image";
import {
  HelpCircle,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ArrowRight,
  Sparkles,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";

interface DifferentSectionProps {
  onOpenConsultation: () => void;
  onOpenTour: () => void;
}

export const DifferentSection: React.FC<DifferentSectionProps> = ({
  onOpenConsultation,
  onOpenTour,
}) => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F9F8] border-b border-[#E8EAF0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split Layout: Intro on Left, Consultation Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Core Positioning & Philosophy (Col span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-[#008F60] text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#00B879]" />
              <span>WHAT MAKES US DIFFERENT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#171923] tracking-tight leading-[1.18]">
              The most expensive mistakes in business software are the{" "}
              <span className="text-[#00B879]">disconnected tools</span> nobody questioned.
            </h2>

            <p className="text-base sm:text-lg text-[#555A68] leading-relaxed">
              Most businesses end up paying for 5 or 6 separate software subscriptions—a website hosting account, a separate CRM, a spreadsheet for deals, a third-party WhatsApp tool, and manual invoices. Then they hire people simply to copy-paste data between them.
            </p>

            {/* 3 Core Differentiators */}
            <div className="space-y-4 pt-2">
              {[
                {
                  title: "The bottleneck before the subscription",
                  desc: "We help you map your real customer journey first, so you don't buy features your team will never use.",
                },
                {
                  title: "One connected record, zero re-entry",
                  desc: "When a lead enters from your website or WhatsApp, they flow into your CRM and sales pipeline automatically.",
                },
                {
                  title: "Built for daily operational clarity",
                  desc: "Intuitive, clean interfaces designed so your sales reps and managers actually enjoy logging in every morning.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#E8F8F1] text-[#008F60] flex items-center justify-center shrink-0 mt-0.5 border border-[#00B879]/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00B879]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171923]">{item.title}</h4>
                    <p className="text-xs text-[#555A68] mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-3">
              <div className="text-xs font-semibold text-[#008F60] bg-[#E8F8F1] px-3.5 py-1.5 rounded-full border border-[#00B879]/20">
                Business badhega, confusion nahi.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive TeaCode-style Advisory Card (Col span 6) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-[#D9DEDC] shadow-xl shadow-black/[0.04] overflow-hidden">
              
              {/* Header: Architecture Team Attribution */}
              <div className="px-6 sm:px-8 py-5 bg-[#F7F9F8] border-b border-[#E8EAF0] flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-[#D9DEDC] flex items-center justify-center p-2 shadow-xs">
                    <Image
                      src="/logo_withot text.png"
                      alt="CODIIC Symbol"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#171923]">CODIIC Product Advisory</div>
                    <div className="text-xs text-[#555A68]">Architecture & Workflow Assessment</div>
                  </div>
                </div>

                <span className="hidden sm:inline-block text-[11px] font-mono font-semibold text-[#008F60] bg-[#E8F8F1] px-2.5 py-1 rounded-full border border-[#00B879]/20">
                  Free Assessment
                </span>
              </div>

              {/* Body: Conversational Note + The 3 Questions */}
              <div className="p-6 sm:p-8 space-y-5">
                
                {/* Introduction bubble */}
                <div className="p-4 rounded-2xl rounded-tl-sm bg-[#F7F9F8] border border-[#E8EAF0] text-xs sm:text-sm text-[#171923] leading-relaxed">
                  Before you add another tool or pay for disconnected subscriptions, here are three fundamental questions every business owner should answer:
                </div>

                {/* 3 Questions List */}
                <div className="space-y-3.5">
                  
                  {/* Question 1 */}
                  <div className="p-4 rounded-2xl bg-white border border-[#E8EAF0] hover:border-[#00B879]/40 hover:shadow-xs transition-all flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-full bg-[#00B879] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      1
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#171923]">
                        Where does customer data live right now, and how often is it retyped?
                      </div>
                      <p className="text-xs text-[#555A68] mt-1 leading-relaxed">
                        If contacts live across personal WhatsApp chats, Excel sheets, and email drafts, leads will inevitably get neglected.
                      </p>
                    </div>
                  </div>

                  {/* Question 2 */}
                  <div className="p-4 rounded-2xl bg-white border border-[#E8EAF0] hover:border-[#00B879]/40 hover:shadow-xs transition-all flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-full bg-[#00B879] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      2
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#171923]">
                        Can sales and customer support see the same live deal status?
                      </div>
                      <p className="text-xs text-[#555A68] mt-1 leading-relaxed">
                        Without a shared visual pipeline, managers spend hours on phone calls simply asking, &quot;Is this client ready to pay yet?&quot;
                      </p>
                    </div>
                  </div>

                  {/* Question 3 */}
                  <div className="p-4 rounded-2xl bg-white border border-[#E8EAF0] hover:border-[#00B879]/40 hover:shadow-xs transition-all flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-full bg-[#00B879] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      3
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#171923]">
                        Are follow-ups systematically scheduled or dependent on human memory?
                      </div>
                      <p className="text-xs text-[#555A68] mt-1 leading-relaxed">
                        Automating reminder cadences means zero missed opportunities and prompt response times on every warm inquiry.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Prompt Question */}
                <div className="pt-2 text-xs font-semibold text-[#171923]">
                  Want to evaluate your current business workflow with an engineer?
                </div>

              </div>

              {/* Footer: CTAs */}
              <div className="px-6 sm:px-8 py-5 bg-[#F7F9F8] border-t border-[#E8EAF0] flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-xs font-bold transition-all shadow-md shadow-[#00B879]/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a 15-Min Workflow Review</span>
                </button>

                <button
                  onClick={onOpenTour}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-[#E8F8F1] border border-[#D9DEDC] hover:border-[#00B879]/40 text-[#171923] text-xs font-semibold transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#008F60]" />
                  <span>See How CODIIC Solves This</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
