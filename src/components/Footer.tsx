"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="bg-white border-t border-[#E8EAF0] text-[#171923] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E8EAF0]">
          
          {/* Column 1: Brand Info & Newsletter (Col span 4) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Official CODIIC full logo with text */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo_with_text.png"
                alt="CODIIC — All your business. One connected platform."
                width={160}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-[#555A68] leading-relaxed max-w-sm">
              All your business. One connected platform. Build websites, manage customer relationships, organize sales pipelines, and automate everyday workflows.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8F8F1] text-[#008F60] text-xs font-semibold border border-[#00B879]/20">
              <span className="w-2 h-2 rounded-full bg-[#00B879] animate-pulse" />
              <span>All Systems Operational (99.98% Uptime)</span>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#171923] mb-2">
                Stay updated with CODIIC releases
              </div>
              {newsletterSubscribed ? (
                <div className="p-3 bg-[#E8F8F1] border border-[#00B879]/20 rounded-xl text-xs text-[#008F60] flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#00B879]" />
                  <span>Thank you for subscribing! We&apos;ll keep you posted.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your work email"
                    required
                    className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-[#E2E8E5] focus:border-[#00B879] focus:outline-none bg-[#F7F9F8]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#171923] hover:bg-[#00B879] text-white text-xs font-semibold transition-colors shadow-xs"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Platform Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#171923]">
              Platform
            </h4>
            <ul className="space-y-2 text-xs text-[#555A68]">
              <li>
                <a href="#website-builder" className="hover:text-[#008F60] transition-colors">
                  Storefront Builder
                </a>
              </li>
              <li>
                <a href="#crm" className="hover:text-[#008F60] transition-colors">
                  Customer CRM
                </a>
              </li>
              <li>
                <a href="#pipeline" className="hover:text-[#008F60] transition-colors">
                  Sales Pipeline
                </a>
              </li>
              <li>
                <a href="#automation" className="hover:text-[#008F60] transition-colors">
                  Workflow Automation
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#008F60] transition-colors">
                  Business Operations
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#008F60] transition-colors">
                  Analytics & Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#171923]">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-[#555A68]">
              <li>
                <a href="#industries" className="hover:text-[#008F60] transition-colors">
                  Real Estate
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#008F60] transition-colors">
                  Retail & eCommerce
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#008F60] transition-colors">
                  Marketing Agencies
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#008F60] transition-colors">
                  IT & Software Services
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#008F60] transition-colors">
                  Education & EdTech
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#008F60] transition-colors">
                  All 12 Industries
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#171923]">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-[#555A68]">
              <li>
                <a href="#showcase" className="hover:text-[#008F60] transition-colors">
                  Operational Playbooks
                </a>
              </li>
              <li>
                <a href="#integrations" className="hover:text-[#008F60] transition-colors">
                  Integrations Directory
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#008F60] transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#008F60] transition-colors">
                  Quickstart Guides
                </a>
              </li>
              <li>
                <a href="#integrations" className="hover:text-[#008F60] transition-colors">
                  API & Webhooks
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal & Trust (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#171923]">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs text-[#555A68]">
              <li>
                <a href="#capabilities" className="hover:text-[#008F60] transition-colors">
                  About CODIIC
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#008F60] transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#008F60] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#008F60] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#008F60] transition-colors">
                  Security & Compliance
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Hinglish Tag */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#555A68]">
          <div>
            © 2026 CODIIC Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-[#171923] font-medium bg-[#F7F9F8] px-3.5 py-1.5 rounded-full border border-[#E2E8E5]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B879]" />
            <span>Ek platform, poora business.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Cloud Infrastructure</span>
            <span>•</span>
            <span>Built for High Performance</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
