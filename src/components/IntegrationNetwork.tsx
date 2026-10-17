"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Lock } from "lucide-react";
import {
  WhatsAppLogo,
  RazorpayLogo,
  GoogleWorkspaceLogo,
  MetaLogo,
  ShopifyLogo,
  AwsLogo,
} from "./BrandLogos";

interface IntegrationNetworkProps {
  onOpenGetStarted: () => void;
}

type LogoComponent = React.FC<{ className?: string }>;

interface Integration {
  id: string;
  name: string;
  role: string;
  points: string[];
  logo: LogoComponent;
}

const INTEGRATIONS: Integration[] = [
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    role: "Messaging & lead capture",
    points: ["Leads land in your CRM", "Order updates & catalogs"],
    logo: WhatsAppLogo,
  },
  {
    id: "razorpay",
    name: "Razorpay Payments",
    role: "UPI, cards & payment links",
    points: ["Auto-matched to invoices", "Instant settlement status"],
    logo: RazorpayLogo,
  },
  {
    id: "google",
    name: "Google Workspace",
    role: "Gmail, Calendar & Contacts",
    points: ["Emails logged to timeline", "Meetings synced both ways"],
    logo: GoogleWorkspaceLogo,
  },
  {
    id: "meta",
    name: "Meta Lead Gen",
    role: "Facebook & Instagram leads",
    points: ["Lead forms routed to reps", "DMs converted to leads"],
    logo: MetaLogo,
  },
  {
    id: "shopify",
    name: "Shopify Store",
    role: "Orders, catalog & inventory",
    points: ["Orders sync in real time", "Stock levels stay accurate"],
    logo: ShopifyLogo,
  },
  {
    id: "aws",
    name: "AWS Cloud",
    role: "Secure storage & backups",
    points: ["Encrypted file storage", "Nightly automated backups"],
    logo: AwsLogo,
  },
];

export const IntegrationNetwork: React.FC<IntegrationNetworkProps> = ({ onOpenGetStarted }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsInView(true);
        observer.disconnect();
      },
      { threshold: 0.05 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="integrations"
      aria-labelledby="integrations-heading"
      className="relative bg-white py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E6E4] bg-white text-xs font-semibold text-[#5A6270]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B879]" />
              Integrations
            </div>
            <h2
              id="integrations-heading"
              className="mt-5 text-[34px] sm:text-5xl lg:text-[56px] font-bold text-[#171923] tracking-[-0.035em] leading-[1.05]"
            >
              Works with the tools{" "}
              <em className="font-serif italic font-normal text-[#008F60]">you already use.</em>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-[#5A6270] leading-relaxed">
              Messages, payments, leads, orders and files flow into one CODIIC workspace —
              automatically, in real time. Connect once, and everything stays in sync.
            </p>
            <button
              type="button"
              onClick={onOpenGetStarted}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171923] hover:bg-black text-white text-sm font-bold transition-colors active:scale-[0.98] cursor-pointer"
            >
              Connect your tools
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <ul id="integrations-list" className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {INTEGRATIONS.map((item, i) => {
            const Logo = item.logo;
            return (
              <li
                key={item.id}
                className={`rounded-[24px] bg-[#F4F7F5] p-6 sm:p-7 transition-colors hover:bg-[#EEF3F0] ${
                  isInView ? "animate-tool-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="flex items-center gap-4">
                  <span className="w-14 h-14 shrink-0 rounded-2xl bg-white ring-1 ring-black/[0.06] flex items-center justify-center">
                    <Logo className="w-8 h-8" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-base font-bold text-[#171923] leading-tight">{item.name}</div>
                    <div className="mt-1 text-[13px] text-[#6B7280] leading-snug">{item.role}</div>
                  </div>
                </div>
                <ul className="mt-5 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-[#3C4450]">
                      <span className="w-5 h-5 rounded-full bg-white ring-1 ring-black/[0.05] text-[#008F60] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs text-[#5A6270] text-center">
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#171923]">
            <Lock className="w-3.5 h-3.5 text-[#00B879]" aria-hidden="true" />
            OAuth 2.0 & signed webhooks
          </span>
          <span className="hidden sm:inline text-[#B4BAB6]">•</span>
          <span>Brand names and logos belong to their respective owners.</span>
        </div>
      </div>
    </section>
  );
};
