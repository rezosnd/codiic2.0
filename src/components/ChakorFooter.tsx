"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Heart } from "lucide-react";

interface ChakorFooterProps {
  onOpenGetStarted: () => void;
}

export const ChakorFooter: React.FC<ChakorFooterProps> = ({
  onOpenGetStarted,
}) => {
  return (
    <footer id="footer" className="bg-[#171923] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
              One connected platform for your website, customers, sales, and everyday business workflows.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#00B879] animate-pulse" />
              <span>All Systems Operational (99.98% Uptime)</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenGetStarted}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-xs font-bold transition-all shadow-md shadow-[#00B879]/20 hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Start at ₹1/day</span>
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
              <li>
                <a href="#tools" className="hover:text-[#00B879] transition-colors">
                  Website Builder
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-[#00B879] transition-colors">
                  Customer CRM
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-[#00B879] transition-colors">
                  Sales Pipeline
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-[#00B879] transition-colors">
                  Workflow Automation
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-[#00B879] transition-colors">
                  Analytics & Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a href="#solutions" className="hover:text-[#00B879] transition-colors">
                  Retail & eCommerce
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#00B879] transition-colors">
                  Professional Services
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#00B879] transition-colors">
                  Real Estate
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#00B879] transition-colors">
                  Agencies
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#00B879] transition-colors">
                  Education & Hospitality
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Trust (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a href="#workspace" className="hover:text-[#00B879] transition-colors">
                  About Platform
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#00B879] transition-colors">
                  Customer Stories
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenGetStarted}
                  className="hover:text-[#00B879] transition-colors text-left cursor-pointer"
                >
                  Contact Support
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-[#00B879] transition-colors">
                  Security & Privacy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row: Subtle Divider, Copyright & Hindi Punch Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 CODIIC Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-gray-200 font-medium bg-gray-900/80 px-3.5 py-1.5 rounded-full border border-gray-800">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B879]" />
            <span>Ek platform. Poora business.</span>
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
