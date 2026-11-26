"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Heart } from "lucide-react";
import { GradientBackground } from "@/components/ui/dark-blue-hero-gardient";

const PLATFORM_LINKS = [
  { label: "Drag-and-Drop Website Builder", href: "/platform/website-builder" },
  { label: "CRM 360", href: "/platform/crm-360" },
  { label: "Omnichannel Inbox", href: "/platform/omnichannel-inbox" },
  { label: "Bulk AI Calls", href: "/platform/bulk-ai-calls" },
  { label: "Ad & Product Library", href: "/platform/ad-product-library" },
  { label: "Sales Tracker", href: "/platform/sales-tracker" },
];

const SOLUTION_LINKS = [
  { label: "Retail & D2C", href: "/solutions/retail-d2c" },
  { label: "Real Estate", href: "/solutions/real-estate" },
  { label: "Service Businesses", href: "/solutions/service-businesses" },
  { label: "Agencies", href: "/solutions/agencies" },
  { label: "Education", href: "/solutions/education" },
  { label: "Hospitality", href: "/solutions/hospitality" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "API & Developers", href: "/developers" },
  { label: "User Guide", href: "/user-guide" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Security", href: "/security" },
];

interface ChakorFooterProps {
  onOpenGetStarted: () => void;
}

export const ChakorFooter: React.FC<ChakorFooterProps> = ({
  onOpenGetStarted,
}) => {
  return (
    <footer id="footer" className="relative overflow-hidden bg-[#111827] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_42%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_42%)]">
        <GradientBackground className="h-full w-full" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top 4-Column Grid (Chakor & Dropship-inspired organization) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">

          {/* Column 1: Brand Info & Contact Action (Col span 5) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Official CODIIC Logo for Dark Surface */}
            <div className="flex items-center gap-2.5">
              <div className="relative h-8 w-8 shrink-0">
                <Image
                  src="/logo_withot text.png"
                  alt="CODIIC Symbol"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-sans">
                CODIIC
              </span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              One platform for your storefront, omnichannel inbox, AI automation, and market intelligence — your entire business.
            </p>


            <div className="pt-2">
              <button
                onClick={onOpenGetStarted}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C6A15B] hover:bg-[#A87F3D] text-[#111827] text-xs font-bold transition-all shadow-md shadow-[#C6A15B]/20 hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Start Free</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Column 2: Platform Tools (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Platform Tools
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {PLATFORM_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#064E3B] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {SOLUTION_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#064E3B] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company & Legal (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#064E3B] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Row: Subtle Divider, Copyright & Hindi Punch Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 CODIIC Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-gray-200 font-medium bg-gray-900/80 px-3.5 py-1.5 rounded-full border border-gray-800">
            <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B]" />
            <span>One Platform. Your Entire Business.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-gray-400">
            <span>Cloud Architecture</span>
            <span>•</span>
            <span>Made for Modern Business</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
