"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  Sparkles,
  Globe,
  Users,
  Kanban,
  Zap,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  MessageSquare,
} from "lucide-react";
import { HeroProductMockup } from "./HeroProductMockup";

interface HeroProps {
  onOpenGetStarted: () => void;
  onOpenSeeHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenGetStarted,
  onOpenSeeHowItWorks,
}) => {
  // Genuine CODIIC business activity items for the Dropship-inspired live stream marquee
  const streamItemsRow1 = [
    {
      title: "Rahul Sharma",
      subtitle: "3BHK Interior Consultation",
      tag: "Storefront Inquiry",
      value: "₹4,50,000",
      status: "WhatsApp Connected",
      growth: "+38% conv",
      icon: Users,
    },
    {
      title: "Apex Logistics",
      subtitle: "Annual Retainer Contract",
      tag: "Closed Won Deal",
      value: "₹28,20,000",
      status: "UPI Received",
      growth: "Instant Sync",
      icon: Kanban,
    },
    {
      title: "Kaveri Lifestyle",
      subtitle: "Online Store Order #1042",
      tag: "Storefront Store",
      value: "₹14,990",
      status: "Receipt Sent",
      growth: "+24.6%",
      icon: Globe,
    },
    {
      title: "Priya Nair",
      subtitle: "Zenith Advisory Intake",
      tag: "Meta Lead Ingestion",
      value: "₹2,10,000",
      status: "Rep Assigned",
      growth: "0.2s Delay",
      icon: Zap,
    },
    {
      title: "TechCorp India",
      subtitle: "Enterprise Integration",
      tag: "Proposal Review",
      value: "₹18,00,000",
      status: "Agreement Sent",
      growth: "99.9% Uptime",
      icon: ShieldCheck,
    },
    {
      title: "Sunrise Retail",
      subtitle: "Product Catalog Request",
      tag: "Automated Trigger",
      value: "₹4,20,000",
      status: "Brochure Dispatched",
      growth: "0.4s",
      icon: MessageSquare,
    },
  ];

  const streamItemsRow2 = [
    {
      title: "Vikram Malhotra",
      subtitle: "Skyline Realty Deal",
      tag: "Inquiry to CRM",
      value: "₹12,00,000",
      status: "Site Visit Booked",
      growth: "+18.4%",
      icon: Users,
    },
    {
      title: "Architectural Ceramics",
      subtitle: "store.yourbrand.in",
      tag: "Website Published",
      value: "18,420 visits",
      status: "100% Live",
      growth: "4.2% rate",
      icon: Globe,
    },
    {
      title: "Ananya Joshi",
      subtitle: "WhatsApp Support Ticket",
      tag: "Customer Care",
      value: "Resolution 4m",
      status: "Automated Reply",
      growth: "Zero Leakage",
      icon: Zap,
    },
    {
      title: "Rohan Mehta",
      subtitle: "Commercial Pipeline",
      tag: "Q4 Deal Volume",
      value: "₹54,60,000",
      status: "18 Deals Moving",
      growth: "Active Stage",
      icon: Kanban,
    },
    {
      title: "Razorpay Checkout",
      subtitle: "Customer Web Payment",
      tag: "Payment Sync",
      value: "₹8,450",
      status: "Auto-Invoiced",
      growth: "Webhook Verified",
      icon: CreditCard,
    },
    {
      title: "Unified Contact Sync",
      subtitle: "Web + WhatsApp Timeline",
      tag: "Single Database",
      value: "314 Leads",
      status: "Zero Duplicate",
      growth: "Real-time",
      icon: Sparkles,
    },
  ];

  return (
    <section className="relative pt-3 sm:pt-6 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Large Rounded Hero Panel (Dropship & Tuyo-inspired composition) */}
        <div className="relative bg-[#F7F9F8] rounded-[32px] sm:rounded-[44px] lg:rounded-[48px] border border-[#E2E6E4] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-36 px-3 sm:px-6 lg:px-12 text-center overflow-hidden shadow-xs">
          
          {/* Subtle grid texture & ambient mint glow */}
          <div
            className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[840px] h-[440px] bg-radial-mint pointer-events-none"
            aria-hidden="true"
          />
          {/* Soft atmospheric gradient lighting near the bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-72 sm:h-96 bg-gradient-to-t from-[#E8F8F1]/90 via-[#E8F8F1]/40 to-transparent pointer-events-none"
            aria-hidden="true"
          />
          {/* Luminous atmospheric glow behind product visual */}
          <div
            className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[720px] sm:w-[980px] h-[380px] bg-gradient-to-t from-[#00B879]/20 via-[#38E19B]/10 to-transparent rounded-[50%] blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Hero Content (Dropship-inspired headline hierarchy & CTA balance) */}
          <div className="relative z-10 max-w-4xl mx-auto">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E6E4] text-[11px] font-bold tracking-widest uppercase text-[#5A6270] shadow-2xs mb-6 sm:mb-7">
              <span className="w-2 h-2 rounded-full bg-[#00B879] animate-pulse" />
              <span>ALL-IN-ONE BUSINESS PLATFORM</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-extrabold text-[#171923] tracking-tight leading-[1.06] mb-5 sm:mb-6">
              All your business.{" "}
              <span className="block text-[#171923] italic font-serif sm:font-sans sm:not-italic">
                One connected platform.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-[#5A6270] leading-relaxed max-w-2xl mx-auto mb-4 sm:mb-5">
              Build your website, manage customers, track sales, and automate everyday work—all from one place.
            </p>

            {/* Hindi Punchline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-xs font-semibold text-[#008F60] mb-5 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00B879]" />
              <span><em>Ek platform. Poora business.</em></span>
            </div>

            {/* Rating & Social Proof Capsule */}
            <div className="flex justify-center mb-8 sm:mb-10">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-[#E2E6E4] text-xs text-[#5A6270] shadow-xs">
                <div className="flex items-center gap-1 font-bold text-[#171923]">
                  <span className="text-amber-500">★</span>
                  <span>4.9</span>
                  <span className="text-[#5A6270] font-normal">rating</span>
                </div>
                <span className="text-gray-300 hidden sm:inline">·</span>
                <span className="font-semibold text-[#171923]">2,400+ Indian Businesses</span>
                <span className="text-gray-300 hidden sm:inline">·</span>
                <span className="text-[#008F60] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B879] animate-pulse" />
                  WhatsApp & UPI Ready
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-10 sm:mb-12">
              <button
                onClick={onOpenGetStarted}
                id="hero-primary-cta"
                className="w-full sm:w-auto group px-8 py-3.5 sm:py-4 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-base font-bold shadow-lg shadow-[#00B879]/25 hover:shadow-xl hover:shadow-[#00B879]/35 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <span>Get started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenSeeHowItWorks}
                id="hero-secondary-cta"
                className="w-full sm:w-auto group px-6 py-3.5 sm:py-4 rounded-full bg-white hover:bg-[#F7F9F8] text-[#171923] text-sm font-semibold border border-[#E2E6E4] hover:border-[#00B879]/40 transition-all flex items-center justify-center gap-2 shadow-xs active:scale-95 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-[#00B879] fill-[#00B879]" />
                <span>Explore the platform</span>
              </button>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* Dropship.io-inspired Live Business Activity Marquee Ticker                */}
          {/* Real CODIIC events: Inquiries, Closed deals, WhatsApp dispatches, Orders   */}
          {/* ========================================================================= */}
          <div className="relative z-15 my-6 sm:my-8 pause-on-hover overflow-hidden" aria-hidden="true">
            {/* Left and Right Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F7F9F8] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F7F9F8] to-transparent z-10 pointer-events-none" />

            {/* Marquee Track 1 (Left Scrolling) */}
            <div className="animate-marquee-left flex gap-3.5 pb-2.5">
              {[...streamItemsRow1, ...streamItemsRow1].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`row1-${idx}`}
                    className="flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-white/95 border border-[#E2E6E4] shadow-xs text-left shrink-0 hover:border-[#00B879]/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#E8F8F1] text-[#008F60] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#171923]">
                          {item.title}
                        </span>
                        <span className="text-[9px] font-mono font-bold text-[#008F60] bg-[#E8F8F1] px-1.5 py-0.2 rounded">
                          {item.growth}
                        </span>
                      </div>
                      <div className="text-[10px] text-[#5A6270] flex items-center gap-1.5">
                        <span className="truncate">{item.subtitle}</span>
                        <span>•</span>
                        <span className="font-mono font-bold text-[#171923]">{item.value}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Marquee Track 2 (Right Scrolling) */}
            <div className="animate-marquee-right flex gap-3.5 pt-1">
              {[...streamItemsRow2, ...streamItemsRow2].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`row2-${idx}`}
                    className="flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-white/95 border border-[#E2E6E4] shadow-xs text-left shrink-0 hover:border-[#00B879]/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#E8F8F1] text-[#008F60] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#171923]">
                          {item.title}
                        </span>
                        <span className="text-[9px] font-mono font-bold text-[#008F60] bg-[#E8F8F1] px-1.5 py-0.2 rounded">
                          {item.growth}
                        </span>
                      </div>
                      <div className="text-[10px] text-[#5A6270] flex items-center gap-1.5">
                        <span className="truncate">{item.subtitle}</span>
                        <span>•</span>
                        <span className="font-mono font-bold text-[#171923]">{item.value}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Product Visual: Sleek Interactive SaaS Dashboard Frame */}
          <div className="relative z-20 mt-6 sm:mt-10 -mb-20 sm:-mb-28 lg:-mb-36 px-0 sm:px-4">
            <HeroProductMockup
              onOpenGetStarted={onOpenGetStarted}
              onOpenSeeHowItWorks={onOpenSeeHowItWorks}
            />
          </div>

        </div>

      </div>
    </section>
  );
};
