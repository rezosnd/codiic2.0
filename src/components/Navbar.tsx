"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Play,
} from "lucide-react";
import {
  WebsiteBuilderColorIcon,
  CustomerCrmColorIcon,
  SalesPipelineColorIcon,
  AutomationColorIcon,
  AnalyticsColorIcon,
  RetailColorIcon,
  ServicesColorIcon,
  RealEstateColorIcon,
} from "./ColorfulProductIcons";

interface NavbarProps {
  onOpenGetStarted: () => void;
  onOpenSeeHowItWorks: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenGetStarted,
  onOpenSeeHowItWorks,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"platform" | "solutions" | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const platformTools = [
    {
      title: "Website Builder",
      desc: "Fast responsive storefronts & landing pages",
      icon: WebsiteBuilderColorIcon,
      badge: "POPULAR",
      href: "#tools",
    },
    {
      title: "Customer CRM",
      desc: "Unified customer leads & WhatsApp chat history",
      icon: CustomerCrmColorIcon,
      badge: "HOT",
      href: "#tools",
    },
    {
      title: "Sales Pipeline",
      desc: "Visual Kanban deals with stage-by-stage revenue",
      icon: SalesPipelineColorIcon,
      badge: "NEW",
      href: "#tools",
    },
    {
      title: "Workflow Automation",
      desc: "Zero-delay triggers & instant buyer follow-ups",
      icon: AutomationColorIcon,
      badge: "0.4s",
      href: "#tools",
    },
    {
      title: "Analytics & Reports",
      desc: "Real-time conversion metrics and revenue tracking",
      icon: AnalyticsColorIcon,
      badge: "LIVE",
      href: "#tools",
    },
  ];

  const solutionIndustries = [
    {
      title: "Retail & eCommerce",
      desc: "Storefronts with real-time UPI orders & WhatsApp updates",
      icon: RetailColorIcon,
      href: "#solutions",
    },
    {
      title: "Professional Services",
      desc: "Client intake briefs & retainer agreement tracking",
      icon: ServicesColorIcon,
      href: "#solutions",
    },
    {
      title: "Real Estate & Developers",
      desc: "Property inquiries, floorplans & site visit schedules",
      icon: RealEstateColorIcon,
      href: "#solutions",
    },
  ];

  return (
    <header
      ref={navRef}
      className="sticky top-3.5 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-300"
    >
      {/* Floating Capsule Bar (Dropship-inspired refined SaaS navigation) */}
      <div
        className={`w-full rounded-full transition-all duration-300 border border-[#E2E6E4] ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl shadow-black/[0.04] py-2 px-3.5 sm:px-6"
            : "bg-white/90 backdrop-blur-sm shadow-md shadow-black/[0.02] py-2.5 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Left: Official CODIIC Logo */}
          <a
            href="#"
            className="flex items-center gap-2 focus:outline-none shrink-0 group py-1"
            aria-label="CODIIC Homepage"
          >
            {/* Desktop: Full Logo with Text */}
            <div className="hidden sm:block relative h-8 w-32 md:w-36">
              <Image
                src="/logo_with_text.png"
                alt="CODIIC All-in-One Business Platform"
                fill
                priority
                className="object-contain object-left transition-transform duration-200 group-hover:scale-102"
              />
            </div>

            {/* Mobile: Symbol-Only Logo */}
            <div className="block sm:hidden relative h-7 w-9">
              <Image
                src="/logo_withot text.png"
                alt="CODIIC Symbol"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Center: Clean SaaS Dropdowns & Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-[13px] font-semibold text-[#171923]">
            {/* Platform Dropdown Trigger */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(activeDropdown === "platform" ? null : "platform")
                }
                onMouseEnter={() => setActiveDropdown("platform")}
                aria-expanded={activeDropdown === "platform"}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeDropdown === "platform"
                    ? "bg-[#E8F8F1] text-[#008F60]"
                    : "text-[#171923] hover:text-[#00B879] hover:bg-[#F7F9F8]"
                }`}
              >
                <span>Platform</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "platform" ? "rotate-180 text-[#008F60]" : "text-[#5A6270]"
                  }`}
                  strokeWidth={2}
                />
              </button>
            </div>

            {/* Solutions Dropdown Trigger */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(activeDropdown === "solutions" ? null : "solutions")
                }
                onMouseEnter={() => setActiveDropdown("solutions")}
                aria-expanded={activeDropdown === "solutions"}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeDropdown === "solutions"
                    ? "bg-[#E8F8F1] text-[#008F60]"
                    : "text-[#171923] hover:text-[#00B879] hover:bg-[#F7F9F8]"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "solutions" ? "rotate-180 text-[#008F60]" : "text-[#5A6270]"
                  }`}
                  strokeWidth={2}
                />
              </button>
            </div>

            {/* Integrations Link */}
            <a
              href="#integrations"
              onClick={() => setActiveDropdown(null)}
              className="px-3.5 py-1.5 rounded-full text-[#171923] hover:text-[#00B879] hover:bg-[#F7F9F8] transition-all"
            >
              Integrations
            </a>

            {/* Reviews Link */}
            <a
              href="#reviews"
              onClick={() => setActiveDropdown(null)}
              className="px-3.5 py-1.5 rounded-full text-[#171923] hover:text-[#00B879] hover:bg-[#F7F9F8] transition-all"
            >
              Reviews
            </a>
          </nav>

          {/* Right: Actions & Primary Green CTA (Dropship.io 1:1 match) */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Sign In */}
            <button
              onClick={onOpenGetStarted}
              id="header-signin-button"
              className="px-3 py-1.5 rounded-full text-xs sm:text-[13px] font-semibold text-[#171923] hover:text-[#00B879] transition-colors cursor-pointer"
            >
              Sign in
            </button>

            {/* Primary CTA: Get started */}
            <button
              onClick={onOpenGetStarted}
              id="header-cta-button"
              className="group relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#00B879]/20 hover:shadow-lg hover:shadow-[#00B879]/30 transition-all duration-200 flex items-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <span>Get started</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[#171923] hover:bg-[#F7F9F8] border border-[#E2E6E4] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropship-inspired Mega Dropdown Panels (Desktop) */}
      {activeDropdown && (
        <div
          onMouseLeave={() => setActiveDropdown(null)}
          className="hidden md:block absolute top-full left-4 right-4 mt-2 max-w-4xl mx-auto bg-white rounded-3xl border border-[#E2E6E4] shadow-2xl p-5 sm:p-6 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
        >
          {activeDropdown === "platform" && (
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E8EAF0]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#00B879]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#171923]">
                    Core Platform Tools
                  </span>
                </div>
                <button
                  onClick={() => {
                    setActiveDropdown(null);
                    onOpenSeeHowItWorks();
                  }}
                  className="text-xs font-semibold text-[#008F60] hover:text-[#00B879] flex items-center gap-1 cursor-pointer"
                >
                  <span>Interactive Walkthrough</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5">
                {platformTools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <a
                      key={tool.title}
                      href={tool.href}
                      onClick={() => setActiveDropdown(null)}
                      className="group p-3 rounded-2xl hover:bg-[#F7F9F8] border border-transparent hover:border-[#E2E6E4] transition-all flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E6E4] flex items-center justify-center shrink-0 p-1.5 shadow-2xs group-hover:scale-105 transition-transform">
                        <Icon className="w-7 h-7 shrink-0" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#171923] group-hover:text-[#008F60] transition-colors truncate">
                            {tool.title}
                          </span>
                          <span className="text-[9px] font-bold font-mono px-1.5 py-0.2 rounded bg-[#E8F8F1] text-[#008F60] border border-[#00B879]/20">
                            {tool.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#5A6270] mt-0.5 line-clamp-2 leading-snug">
                          {tool.desc}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {activeDropdown === "solutions" && (
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E8EAF0]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00B879]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#171923]">
                    Industry-Specific Workflows
                  </span>
                </div>
                <span className="text-xs text-[#5A6270]">Built for Indian business operations</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {solutionIndustries.map((ind) => {
                  const Icon = ind.icon;
                  return (
                    <a
                      key={ind.title}
                      href={ind.href}
                      onClick={() => setActiveDropdown(null)}
                      className="group p-3.5 rounded-2xl hover:bg-[#F7F9F8] border border-transparent hover:border-[#E2E6E4] transition-all flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E6E4] flex items-center justify-center shrink-0 p-1.5 shadow-2xs group-hover:scale-105 transition-transform">
                        <Icon className="w-7 h-7 shrink-0" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#171923] group-hover:text-[#008F60] transition-colors">
                          {ind.title}
                        </div>
                        <p className="text-[11px] text-[#5A6270] mt-0.5 leading-snug">
                          {ind.desc}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mobile Drawer (Clean, categorized, and touch-friendly) */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white rounded-3xl border border-[#E2E6E4] p-5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="space-y-4">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#5A6270] mb-2 px-1">
                Navigation
              </div>
              <div className="space-y-1">
                <a
                  href="#tools"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl text-sm font-bold text-[#171923] hover:bg-[#E8F8F1] hover:text-[#008F60] transition-colors"
                >
                  <span>Platform & Tools</span>
                  <span className="text-[10px] font-mono text-[#008F60] bg-[#E8F8F1] px-2 py-0.5 rounded-full font-bold">
                    5 Tools
                  </span>
                </a>
                <a
                  href="#workspace"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block p-2.5 rounded-xl text-sm font-bold text-[#171923] hover:bg-[#E8F8F1] hover:text-[#008F60] transition-colors"
                >
                  Connected Workspace
                </a>
                <a
                  href="#integrations"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block p-2.5 rounded-xl text-sm font-bold text-[#171923] hover:bg-[#E8F8F1] hover:text-[#008F60] transition-colors"
                >
                  Integrations
                </a>
                <a
                  href="#solutions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block p-2.5 rounded-xl text-sm font-bold text-[#171923] hover:bg-[#E8F8F1] hover:text-[#008F60] transition-colors"
                >
                  Solutions
                </a>
                <a
                  href="#reviews"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block p-2.5 rounded-xl text-sm font-bold text-[#171923] hover:bg-[#E8F8F1] hover:text-[#008F60] transition-colors"
                >
                  Reviews
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E8EAF0] space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSeeHowItWorks();
                }}
                className="w-full py-2.5 rounded-full bg-[#F7F9F8] hover:bg-[#E8F8F1] text-[#171923] text-xs font-semibold border border-[#E2E6E4] flex items-center justify-center gap-2"
              >
                <Play className="w-3.5 h-3.5 text-[#00B879] fill-[#00B879]" />
                <span>Explore Platform Tour</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGetStarted();
                }}
                className="w-full py-3 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-xs font-bold shadow-md shadow-[#00B879]/20 flex items-center justify-center gap-2"
              >
                <span>Get started free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
