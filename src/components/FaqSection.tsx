"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const FAQS = [
  {
    q: "Do I need any coding or design skills to build my website?",
    a: "No — use CODIIC's visual drag-and-drop studio and ready-made themes to launch in minutes. Drop in Hero Banners, Product Grids, Galleries and Lead Forms without writing a single line of code.",
  },
  {
    q: "Can I use my existing WhatsApp Business number without losing my chats?",
    a: "Yes — via official WhatsApp Coexistence, both your phone app and the CODIIC dashboard work simultaneously on the same number, with your full chat history intact.",
  },
  {
    q: "Does CODIIC work for international currencies and payment gateways?",
    a: "Yes — connect Stripe for global cards and wallets, plus Razorpay, PhonePe and UPI for Indian transactions. Multi-currency checkout is built in.",
  },
  {
    q: "Are Meta WhatsApp API conversation charges included?",
    a: "Zero platform markup — you pay Meta directly at standard country rates, so your messaging costs stay exactly what Meta charges.",
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-16 sm:py-24 bg-transparent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1F0EA] border border-[#064E3B]/20 text-[#043B2C] text-[11px] font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            Frequently Asked Questions
          </div>
          <h2
            id="faq-heading"
            className="text-[28px] sm:text-[40px] lg:text-[48px] font-extrabold text-[#111827] tracking-[-0.03em] leading-[1.1]"
          >
            Questions,{" "}
            <em className="font-serif italic font-normal text-[#043B2C]">answered.</em>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className={`rounded-2xl border transition-all duration-200 bg-white ${
                  isOpen
                    ? "border-[#064E3B]/40 shadow-[0_14px_34px_-18px_rgba(4,59,44,0.35)]"
                    : "border-[#E4E2D8] hover:border-[#C9CFC0]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left cursor-pointer"
                >
                  <span className="text-[14px] sm:text-[15px] font-bold text-[#111827] leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4.5 h-4.5 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#043B2C]" : "text-[#4B5563]"
                    }`}
                    strokeWidth={2.5}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 sm:px-6 pb-5 -mt-1 text-[13px] sm:text-[14px] text-[#4B5563] leading-relaxed animate-tool-in">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
