"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Play,
} from "lucide-react";
import {
  WebsiteBuilderColorIcon,
  CustomerCrmColorIcon,
  SalesPipelineColorIcon,
  AutomationColorIcon,
  SalesTrackerIcon,
  AnalyticsColorIcon,
  IntegrationsColorIcon,
  RetailColorIcon,
  ServicesColorIcon,
  RealEstateColorIcon,
  AgenciesColorIcon,
  EducationColorIcon,
  HospitalityColorIcon,
} from "./ColorfulProductIcons";
import {
  MotionNavigationMenu,
  MotionNavigationMenuContent,
  MotionNavigationMenuItem,
  MotionNavigationMenuLink,
  MotionNavigationMenuList,
  MotionNavigationMenuTrigger,
} from "./ui/motion-navigation-menu";

const MOBILE_LINKS = [
  { href: "#tools", label: "Platform & Tools", badge: "8 tools" },
  { href: "#workspace", label: "Connected Workspace" },
  { href: "#integrations", label: "Integrations" },
  { href: "#solutions", label: "Solutions" },
  { href: "#reviews", label: "Reviews" },
];

interface NavbarProps {
  onOpenGetStarted: () => void;
  onOpenSeeHowItWorks: () => void;
  /** Prefix added to in-page anchor links (e.g. "/" so they resolve from subpages). */
  linkPrefix?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenGetStarted,
  onOpenSeeHowItWorks,
  linkPrefix = "",
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScrolled = false;
    const handleScroll = () => {
      // Hysteresis: shrink after 28px, expand back only under 8px — no flicker
      const isScrolled = lastScrolled ? window.scrollY > 8 : window.scrollY > 28;
      if (isScrolled !== lastScrolled) {
        lastScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileMenuOpen(false);
    const onResize = () => window.innerWidth >= 768 && setMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const platformTools = [
    {
      title: "Drag-and-Drop Builder",
      desc: "No-code storefronts, pages & lead forms",
      icon: WebsiteBuilderColorIcon,
      badge: "POPULAR",
      href: "/platform/website-builder",
    },
    {
      title: "Omnichannel Inbox",
      desc: "WhatsApp, Instagram, Facebook, Telegram & Email",
      icon: CustomerCrmColorIcon,
      badge: "HOT",
      href: "/platform/omnichannel-inbox",
    },
    {
      title: "CRM 360 & Pipeline",
      desc: "Custom stages, segments & auto-agent routing",
      icon: SalesPipelineColorIcon,
      badge: "NEW",
      href: "/platform/crm-360",
    },
    {
      title: "AI Voice & Automations",
      desc: "Bulk AI calls & visual drag-and-drop flows",
      icon: AutomationColorIcon,
      badge: "0.4s",
      href: "/platform/bulk-ai-calls",
    },
    {
      title: "Ad & Product Intelligence",
      desc: "8-tool market, ad & competitor research suite",
      icon: AnalyticsColorIcon,
      badge: "LIVE",
      href: "/platform/ad-product-library",
    },
    {
      title: "Sales & Profit Tracker",
      desc: "Live revenue, SKU margins & channel ROI",
      icon: SalesTrackerIcon,
      badge: "15m",
      href: "/platform/sales-tracker",
    },
    {
      title: "Integrations & APIs",
      desc: "Stripe, Razorpay, Meta & 6,000+ app connectors",
      icon: IntegrationsColorIcon,
      badge: "CONNECT",
      href: "/developers",
    },
  ];

  const solutionIndustries = [
    {
      title: "Retail & D2C eCommerce",
      desc: "Drag-and-drop storefronts & WhatsApp order updates",
      icon: RetailColorIcon,
      href: "/solutions/retail-d2c",
    },
    {
      title: "Service Businesses",
      desc: "No-code service pages & booking calendars",
      icon: ServicesColorIcon,
      href: "/solutions/service-businesses",
    },
    {
      title: "Real Estate & Developers",
      desc: "CTWA lead capture & AI voice-booked tours",
      icon: RealEstateColorIcon,
      href: "/solutions/real-estate",
    },
    {
      title: "Agencies",
      desc: "Client workspaces, Auto-DM funnels & ad intel",
      icon: AgenciesColorIcon,
      href: "/solutions/agencies",
    },
    {
      title: "Education & Coaching",
      desc: "Admission pages & AI counselor follow-ups",
      icon: EducationColorIcon,
      href: "/solutions/education",
    },
    {
      title: "Hospitality & Cafes",
      desc: "QR menus, reservations & loyalty broadcasts",
      icon: HospitalityColorIcon,
      href: "/solutions/hospitality",
    },
  ];

  return (
    <header
      ref={navRef}
      className="sticky top-2.5 sm:top-3 z-50 w-full px-2.5 sm:px-6 lg:px-8"
    >
      {mobileMenuOpen && (
        <div
          aria-hidden
          onClick={() => setMobileMenuOpen(false)}
          className="md:hidden fixed inset-0 -z-10 bg-[#0B1120]/35 backdrop-blur-[3px] animate-in fade-in duration-200"
        />
      )}

      {/* Floating Capsule Bar (Dropship-inspired refined SaaS navigation) */}
      <div
        className={`w-full mx-auto rounded-full border border-white/70 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled
            ? "max-w-5xl bg-white/85 shadow-xl shadow-[#065F46]/10 py-1 pl-2.5 pr-1 sm:py-1.5 sm:pl-4 sm:pr-1.5"
            : "max-w-7xl bg-white/65 shadow-lg shadow-[#065F46]/[0.06] py-2 pl-3.5 pr-2 sm:py-3 sm:pl-6 sm:pr-2.5"
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Left: Official CODIIC Logo */}
          <a
            href={linkPrefix || "#"}
            className="flex items-center gap-2 focus:outline-none shrink-0 group py-1"
            aria-label="CODIIC Homepage"
          >
            {/* Desktop: Full Logo with Text — shrinks slightly on scroll */}
            <div
              className={`hidden sm:block relative transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled ? "h-7 w-28 md:w-32" : "h-8 w-32 md:w-36"
                }`}
            >
              <Image
                src="/logo_with_text.png"
                alt="CODIIC All-in-One Business Platform"
                fill
                priority
                className="object-contain object-left transition-transform duration-200 group-hover:scale-102"
              />
            </div>

            {/* Mobile: compact full logo */}
            <div className="block sm:hidden relative h-6 w-[88px]">
              <Image
                src="/logo_with_text.png"
                alt="CODIIC"
                fill
                priority
                sizes="88px"
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Center: Animated spring-viewport navigation menu */}
          <MotionNavigationMenu
            className="hidden md:flex"
            viewportClassName="rounded-3xl"
            springStiffness={420}
            springDamping={34}
          >
            <MotionNavigationMenuList>
              <MotionNavigationMenuItem value="platform">
                <MotionNavigationMenuTrigger>Platform</MotionNavigationMenuTrigger>
                <MotionNavigationMenuContent>
                  <div className="w-[min(680px,80vw)]">
                    <div className="flex items-center justify-between px-2 pb-2">
                      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#4B5563]">
                        <Sparkles className="w-3.5 h-3.5 text-[#064E3B]" />
                        Core platform tools
                      </span>
                      <button
                        type="button"
                        onClick={onOpenSeeHowItWorks}
                        className="flex items-center gap-1 text-xs font-semibold text-[#064E3B] hover:underline cursor-pointer"
                      >
                        Interactive walkthrough
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-0.5">
                      {platformTools.map((tool) => {
                        const Icon = tool.icon;
                        const href = tool.href.startsWith("#")
                          ? `${linkPrefix}${tool.href}`
                          : tool.href;
                        return (
                          <MotionNavigationMenuLink key={tool.title} href={href}>
                            <span className="flex items-center gap-2">
                              <span className="w-7 h-7 flex items-center justify-center shrink-0">
                                <Icon className="w-7 h-7" />
                              </span>
                              <span className="text-xs font-bold text-[#111827]">
                                {tool.title}
                              </span>
                            </span>
                            <span className="text-[11px] text-[#4B5563] leading-snug pl-9 -mt-1">
                              {tool.desc}
                            </span>
                          </MotionNavigationMenuLink>
                        );
                      })}
                    </div>
                  </div>
                </MotionNavigationMenuContent>
              </MotionNavigationMenuItem>

              <MotionNavigationMenuItem value="solutions">
                <MotionNavigationMenuTrigger>Solutions</MotionNavigationMenuTrigger>
                <MotionNavigationMenuContent>
                  <div className="w-[min(560px,80vw)]">
                    <div className="px-2 pb-2 text-[10px] font-bold uppercase tracking-wider text-[#4B5563]">
                      Industry-specific workflows
                    </div>
                    <div className="grid grid-cols-2 gap-0.5">
                      {solutionIndustries.map((ind) => {
                        const Icon = ind.icon;
                        const href = ind.href.startsWith("#")
                          ? `${linkPrefix}${ind.href}`
                          : ind.href;
                        return (
                          <MotionNavigationMenuLink key={ind.title} href={href}>
                            <span className="flex items-center gap-2.5">
                              <span className="w-7 h-7 flex items-center justify-center shrink-0">
                                <Icon className="w-7 h-7" />
                              </span>
                              <span className="text-xs font-bold text-[#111827]">
                                {ind.title}
                              </span>
                            </span>
                            <span className="text-[11px] text-[#4B5563] leading-snug pl-9 -mt-1">
                              {ind.desc}
                            </span>
                          </MotionNavigationMenuLink>
                        );
                      })}
                    </div>
                  </div>
                </MotionNavigationMenuContent>
              </MotionNavigationMenuItem>

              <MotionNavigationMenuItem>
                <MotionNavigationMenuLink
                  href={`${linkPrefix}#integrations`}
                  className="h-9 flex-row items-center px-4 py-2 text-sm font-semibold"
                >
                  Integrations
                </MotionNavigationMenuLink>
              </MotionNavigationMenuItem>

              <MotionNavigationMenuItem>
                <MotionNavigationMenuLink
                  href={`${linkPrefix}#reviews`}
                  className="h-9 flex-row items-center px-4 py-2 text-sm font-semibold"
                >
                  Reviews
                </MotionNavigationMenuLink>
              </MotionNavigationMenuItem>
            </MotionNavigationMenuList>
          </MotionNavigationMenu>

          {/* Right: Actions & Primary Green CTA (Dropship.io 1:1 match) */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Sign In (Hidden on mobile to preserve space for logo and CTA) */}
            <button
              onClick={onOpenGetStarted}
              id="header-signin-button"
              className="hidden sm:block px-3 py-1.5 rounded-full text-xs sm:text-[13px] font-semibold text-[#111827] hover:text-[#064E3B] transition-colors cursor-pointer"
            >
              Sign in
            </button>

            {/* Primary CTA: Get started */}
            <button
              onClick={onOpenGetStarted}
              id="header-cta-button"
              className={`group relative px-3.5 sm:px-5 rounded-full bg-[#065F46] hover:bg-[#064E3B] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#065F46]/30 hover:shadow-lg hover:shadow-[#065F46]/40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center gap-1.5 active:scale-95 cursor-pointer whitespace-nowrap ${scrolled ? "h-8 sm:h-8" : "h-9 sm:h-10"
                }`}
            >
              <span className="sm:hidden">Start Free</span>
              <span className="hidden sm:inline">Start Free</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center cursor-pointer touch-manipulation focus:outline-none active:scale-90 transition-all shrink-0 ${
                mobileMenuOpen
                  ? "bg-[#111827] text-white"
                  : "bg-white/80 text-[#111827] border border-[#DAD8CD]"
              }`}
              aria-label="Toggle navigation menu"
            >
              <span className={`transition-transform duration-300 ${mobileMenuOpen ? "rotate-90" : ""}`}>
                {mobileMenuOpen ? <X className="w-[18px] h-[18px]" /> : <Menu className="w-[18px] h-[18px]" />}
              </span>
            </button>
          </div>
        </div>
      </div>



      {/* Mobile Drawer (Clean, categorized, and touch-friendly) */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-h-[calc(100dvh-5.5rem)] overflow-y-auto no-scrollbar rounded-[26px] border border-white/70 bg-white/85 backdrop-blur-2xl backdrop-saturate-150 p-3 shadow-[0_30px_60px_-20px_rgba(0,60,40,0.35),inset_0_1px_0_rgba(255,255,255,0.9)] animate-tool-in">
          <nav className="flex flex-col">
            {MOBILE_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={`${linkPrefix}${link.href}`}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between px-3.5 py-3.5 rounded-2xl text-[15px] font-semibold text-[#111827] active:bg-[#F1F0EA] hover:bg-[#F1F0EA]/70 transition-colors animate-tool-in"
                style={{ animationDelay: `${60 + i * 40}ms` }}
              >
                <span>{link.label}</span>
                <span className="flex items-center gap-2">
                  {link.badge && (
                    <span className="text-[10px] text-[#064E3B] bg-[#F1F0EA] px-2 py-0.5 rounded-full font-bold">
                      {link.badge}
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#064E3B] transition-colors" />
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-2 p-2 rounded-2xl bg-gradient-to-br from-[#F1F0EA] to-[#D7E7DC] border border-[#DAD8CD] space-y-2">
            <div className="flex items-center justify-center gap-2 pt-1 text-xs font-semibold text-[#065F46]">
              <Sparkles className="w-3.5 h-3.5 text-[#064E3B]" />
              Start free · Pro at <span className="font-extrabold text-[#064E3B]">₹1/day</span>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetStarted();
              }}
              className="w-full py-3.5 rounded-full bg-[#064E3B] active:bg-[#064E3B] text-white text-sm font-bold shadow-lg shadow-[#065F46]/30 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
            >
              Start Free
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSeeHowItWorks();
              }}
              className="w-full py-3 rounded-full bg-white/80 text-[#111827] text-sm font-semibold border border-white flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
            >
              <Play className="w-3.5 h-3.5 text-[#064E3B] fill-[#064E3B]" />
              Explore platform tour
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
