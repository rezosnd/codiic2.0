"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  TrendingUp,
} from "lucide-react";
import {
  WhatsAppLogo,
  RazorpayLogo,
  GoogleWorkspaceLogo,
  GoogleAdsLogo,
  MetaLogo,
  ShopifyLogo,
  StripeLogo,
  BhimUpiLogo,
  BlueDartLogo,
  GstLogo,
  PhonePeLogo,
  HubSpotLogo,
  ZohoLogo,
  GmailLogo,
  InstagramLogo,
  WebhooksLogo,
} from "./BrandLogos";

import {
  WebsiteBuilderColorIcon,
  CustomerCrmColorIcon,
  SalesPipelineColorIcon,
  AutomationColorIcon,
  AnalyticsColorIcon,
} from "./ColorfulProductIcons";

interface HeroProps {
  onOpenGetStarted: () => void;
  onOpenSeeHowItWorks: () => void;
}

interface MarqueeCardItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  value: string;
  growth: string;
  LogoComponent: React.FC<{ className?: string }>;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenGetStarted,
  onOpenSeeHowItWorks,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [emblemActive, setEmblemActive] = useState<boolean>(false);

  // Clear, intuitive CODIIC software operations aligned directly with your 5 connected tools
  // Row 1 (Curve: Bowl - smile curvature)
  const row1Items: MarqueeCardItem[] = [
    {
      id: "crm-1-1",
      title: "WhatsApp Lead Capture",
      subtitle: "New buyer inquiry routed to CRM",
      tag: "Auto-Assigned",
      value: "0.2s Sync",
      growth: "Zero Leak",
      LogoComponent: WhatsAppLogo,
    },
    {
      id: "crm-1-2",
      title: "Online Store Order",
      subtitle: "Curated storefront order #1042",
      tag: "UPI Received",
      value: "₹14,990",
      growth: "Instant",
      LogoComponent: ShopifyLogo,
    },
    {
      id: "crm-1-3",
      title: "Commercial Deal Won",
      subtitle: "Contract signed & moved to Won",
      tag: "Pipeline Value",
      value: "₹4,50,000",
      growth: "+28.4%",
      LogoComponent: SalesPipelineColorIcon,
    },
    {
      id: "crm-1-4",
      title: "GST Tax Invoice",
      subtitle: "Auto-generated on checkout",
      tag: "Auto-Invoiced",
      value: "₹64,200",
      growth: "100% Valid",
      LogoComponent: GstLogo,
    },
    {
      id: "crm-1-5",
      title: "BlueDart Air Waybill",
      subtitle: "Tracking dispatched via WhatsApp",
      tag: "Courier Synced",
      value: "0.1s Trigger",
      growth: "Webhook",
      LogoComponent: BlueDartLogo,
    },
    {
      id: "crm-1-6",
      title: "Google Ads Lead Capture",
      subtitle: "High-intent commercial buyers",
      tag: "Direct to CRM",
      value: "₹2,10,000",
      growth: "4.8x ROI",
      LogoComponent: GoogleAdsLogo,
    },
    {
      id: "crm-1-7",
      title: "Razorpay Web Checkout",
      subtitle: "Customer online card payment",
      tag: "Auto-Receipt",
      value: "₹8,450",
      growth: "Instant",
      LogoComponent: RazorpayLogo,
    },
  ];

  // Row 2 (Curve: Straight - horizontal)
  const row2Items: MarqueeCardItem[] = [
    {
      id: "crm-2-1",
      title: "Unified Client CRM",
      subtitle: "Web form + WhatsApp timeline merged",
      tag: "Zero Duplicates",
      value: "314 Leads",
      growth: "Realtime",
      LogoComponent: CustomerCrmColorIcon,
    },
    {
      id: "crm-2-2",
      title: "BHIM UPI Settlement",
      subtitle: "Direct QR merchant payment",
      tag: "Bank Settled",
      value: "₹24,500",
      growth: "0% Fee",
      LogoComponent: BhimUpiLogo,
    },
    {
      id: "crm-2-3",
      title: "Automated WhatsApp Catalog",
      subtitle: "Instant brochure sent on inquiry",
      tag: "Automated",
      value: "0.4s Reply",
      growth: "99.2% Open",
      LogoComponent: WhatsAppLogo,
    },
    {
      id: "crm-2-4",
      title: "Custom Domain Storefront",
      subtitle: "yourbusiness.in published live",
      tag: "Mobile Ready",
      value: "100% Live",
      growth: "Fast SSL",
      LogoComponent: WebsiteBuilderColorIcon,
    },
    {
      id: "crm-2-5",
      title: "PhonePe Instant Pay",
      subtitle: "Storefront buyer QR settlement",
      tag: "UPI Revenue",
      value: "₹1,95,000",
      growth: "+32.1%",
      LogoComponent: PhonePeLogo,
    },
    {
      id: "crm-2-6",
      title: "HubSpot Deal Sync",
      subtitle: "Stage-by-stage sales milestones",
      tag: "Active Deals",
      value: "₹54,60,000",
      growth: "Synced",
      LogoComponent: HubSpotLogo,
    },
    {
      id: "crm-2-7",
      title: "Instagram DM Routing",
      subtitle: "Social inquiries converted to CRM",
      tag: "Direct Leads",
      value: "₹4,20,000",
      growth: "0.4s Fast",
      LogoComponent: InstagramLogo,
    },
  ];

  // Row 3 (Curve: Arch - rainbow curvature)
  const row3Items: MarqueeCardItem[] = [
    {
      id: "crm-3-1",
      title: "Monthly Revenue Forecast",
      subtitle: "18 active deals moving to close",
      tag: "Sales Pipeline",
      value: "₹28,20,000",
      growth: "+18.4%",
      LogoComponent: AnalyticsColorIcon,
    },
    {
      id: "crm-3-2",
      title: "Instant Team Follow-up",
      subtitle: "Round-robin rep alert dispatched",
      tag: "Zero Leak",
      value: "0.2s Alert",
      growth: "100% Touch",
      LogoComponent: AutomationColorIcon,
    },
    {
      id: "crm-3-3",
      title: "Enterprise Zoho Books",
      subtitle: "GST filing & client ledger updated",
      tag: "Ledger Synced",
      value: "₹18,00,000",
      growth: "99.9%",
      LogoComponent: ZohoLogo,
    },
    {
      id: "crm-3-4",
      title: "Google Workspace Sync",
      subtitle: "Calendar meetings & site visit booked",
      tag: "Auto-Booked",
      value: "12 Meetings",
      growth: "No Conflict",
      LogoComponent: GoogleWorkspaceLogo,
    },
    {
      id: "crm-3-5",
      title: "Stripe Global Invoicing",
      subtitle: "International client retainer draft",
      tag: "Card Auto-Pay",
      value: "₹15,40,000",
      growth: "Stage 3",
      LogoComponent: StripeLogo,
    },
    {
      id: "crm-3-6",
      title: "Gmail Automated Intake",
      subtitle: "Client brief logged into timeline",
      tag: "Auto-Logged",
      value: "Inbox 0",
      growth: "24/7 Live",
      LogoComponent: GmailLogo,
    },
    {
      id: "crm-3-7",
      title: "Mobile Store Catalog",
      subtitle: "Festive inventory auto-synced",
      tag: "Storefront",
      value: "420 Orders",
      growth: "+45.8%",
      LogoComponent: WebsiteBuilderColorIcon,
    },
  ];

  // Dropship.io-inspired 3D Organic Curve & Scanner Clip Calculation
  useEffect(() => {
    let animId: number;
    let isRunning = true;

    const updateCurvatureAndScanner = () => {
      if (!isRunning || !containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const centerLine = rect.left + rect.width / 2;
      const isMobile = window.innerWidth <= 768;
      const radius = isMobile ? 1800 : 3200;

      const rows = [
        { ref: row1Ref, curve: "bowl" },
        { ref: row2Ref, curve: "straight" },
        { ref: row3Ref, curve: "arch" },
      ];

      rows.forEach(({ ref, curve }) => {
        if (!ref.current) return;
        const cards = ref.current.querySelectorAll<HTMLElement>("[data-marquee-card]");

        cards.forEach((card) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const dist = cardCenter - centerLine;

          // Curvature geometry (exact Dropship.io formula)
          if (curve !== "straight") {
            const clampedDist = Math.min(Math.abs(dist), radius);
            const sag = Math.sqrt(radius * radius - clampedDist * clampedDist) - radius;
            const angle =
              Math.atan2(clampedDist, Math.sqrt(radius * radius - clampedDist * clampedDist)) *
              (180 / Math.PI) *
              Math.sign(dist);

            const y = curve === "bowl" ? sag : -sag;
            const rot = curve === "bowl" ? -angle : angle;
            card.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) rotate(${rot.toFixed(2)}deg)`;
          }

          // Scanner reveal effect (as card crosses center laser beam)
          const skeleton = card.querySelector<HTMLElement>("[data-skeleton-overlay]");
          if (skeleton) {
            const cardWidth = card.offsetWidth;
            // Ratio of card that has crossed to the right of centerLine
            const progress = Math.max(0, Math.min(1, (cardRect.right - centerLine) / cardWidth));
            const clipAmount = Math.round(progress * cardWidth);
            // Inset clip from the right side, revealing the colorful verified card from left to right!
            skeleton.style.clipPath = `inset(0 ${clipAmount}px 0 0 round 16px)`;
          }
        });
      });

      animId = requestAnimationFrame(updateCurvatureAndScanner);
    };

    animId = requestAnimationFrame(updateCurvatureAndScanner);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animId);
    };
  }, []);

  // Handle click on center emblem (triggers Dropship hyper-speed burst animation)
  const handleEmblemBurst = () => {
    if (emblemActive) return;
    setEmblemActive(true);
    setSpeedMultiplier(5);

    setTimeout(() => {
      setSpeedMultiplier(1);
      setTimeout(() => setEmblemActive(false), 800);
    }, 1200);
  };

  // Render Card with Real Colorful Brand Logo and Live Dropship-style Scanner Skeleton Overlay
  const renderCard = (item: MarqueeCardItem, key: string) => {
    const Logo = item.LogoComponent || WebhooksLogo;
    return (
      <div
        key={key}
        data-marquee-card
        className="relative flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-white border border-[#D9DED8] shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-[#00B879]/50 transition-shadow duration-200 shrink-0 min-w-[285px] sm:min-w-[315px] select-none group cursor-pointer overflow-hidden will-change-transform"
      >
        {/* ================================================================= */}
        {/* Base Layer: Verified Colorful Brand Event                         */}
        {/* ================================================================= */}
        {/* Left: Real Colorful Brand Icon */}
        <div className="w-11 h-11 rounded-xl bg-white border border-[#E2E6E4] shadow-xs flex items-center justify-center p-2 shrink-0 group-hover:scale-108 transition-transform">
          <Logo className="w-6 h-6 shrink-0" />
        </div>

        {/* Left Text: Lead/Deal Name & Context */}
        <div className="min-w-[110px] sm:min-w-[125px]">
          <p className="text-xs sm:text-[13px] font-bold text-[#171923] truncate leading-tight group-hover:text-[#008F60] transition-colors">
            {item.title}
          </p>
          <p className="text-[11px] text-[#5A6270] font-medium truncate leading-tight mt-1">
            {item.subtitle}
          </p>
        </div>

        {/* Center: Hairline Vertical Divider */}
        <div className="w-px h-8 bg-[#E2E6E4] shrink-0 mx-0.5" />

        {/* Right Text: Bold INR Value & Growth Badge */}
        <div className="text-right min-w-[90px] sm:min-w-[100px]">
          <p className="text-xs sm:text-[13px] font-bold font-mono text-[#00B879] leading-tight">
            {item.value}
          </p>
          <div className="flex items-center justify-end gap-1.5 mt-1">
            <span className="text-[10px] text-[#5A6270] font-medium leading-none">
              {item.tag}
            </span>
            <div className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-[#E8F8F1] text-[#008F60] text-[9px] font-mono font-bold leading-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 8 8"
                fill="none"
                className="w-2 h-2 shrink-0"
              >
                <path
                  d="M7.63109 1.69396L7.47911 3.15856C7.46152 3.31933 7.26432 3.38841 7.15126 3.27537L6.79203 2.91612L4.52982 5.17833C4.38788 5.32027 4.13792 5.32027 3.99598 5.17833L2.74995 3.9323L0.644751 6.03875C0.571896 6.1116 0.475183 6.14929 0.378462 6.14929C0.281741 6.14929 0.185028 6.1116 0.112173 6.03875C-0.0347868 5.89179 -0.0347868 5.65314 0.112173 5.50492L2.48366 3.13343C2.6256 2.99149 2.87556 2.99149 3.01624 3.13343L4.26353 4.37946L6.25946 2.38355L5.83865 1.96276C5.72436 1.84845 5.79344 1.65125 5.95422 1.63492L7.41882 1.48294C7.54065 1.46912 7.64366 1.57212 7.63109 1.69396Z"
                  fill="currentColor"
                />
              </svg>
              <span>{item.growth}</span>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* Scanner Overlay Layer: Dropship Wireframe Skeleton                */}
        {/* (Clipped dynamically as card crosses center laser beam)           */}
        {/* ================================================================= */}
        <div
          data-skeleton-overlay
          className="absolute inset-0 z-10 bg-[#F4F6F3] border border-[#D9DED8] flex items-center gap-3.5 px-4 py-3 pointer-events-none transition-[clip-path] duration-75"
          style={{ clipPath: "inset(0 0px 0 0 round 16px)" }}
        >
          <div className="w-11 h-11 rounded-xl bg-[#E2E6E4] shrink-0" />
          <div className="min-w-[105px] space-y-2">
            <div className="h-3 w-22 bg-[#E2E6E4] rounded-full" />
            <div className="h-2 w-14 bg-[#E2E6E4]/70 rounded-full" />
          </div>
          <div className="w-px h-8 bg-[#E2E6E4] shrink-0 mx-0.5" />
          <div className="min-w-[85px] space-y-2 flex flex-col items-end">
            <div className="h-3.5 w-18 bg-[#E2E6E4] rounded-full" />
            <div className="h-2 w-11 bg-[#E2E6E4]/70 rounded-full" />
          </div>
        </div>
      </div>
    );
  };

  const track1Duration = 38 / speedMultiplier;
  const track2Duration = 42 / speedMultiplier;
  const track3Duration = 48 / speedMultiplier;

  return (
    <section className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 lg:pb-32 overflow-hidden bg-[#E9EBE7]">
      {/* Subtle radial ambient mint glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[520px] bg-[radial-gradient(ellipse_at_center,rgba(0,184,121,0.08),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* CODIIC Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        
        {/* CODIIC Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold text-[#171923] tracking-tight leading-[1.06] mb-5 max-w-4xl mx-auto">
          All your business.{" "}
          <span className="text-[#00B879]">One connected platform.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-[#5A6270] leading-relaxed max-w-2xl mx-auto mb-4 sm:mb-5 font-normal">
          Build your website, manage customers, track sales, and automate everyday work—all from one place.
        </p>

        {/* Hindi Punchline Capsule */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#D9DED8] text-xs font-semibold text-[#008F60] mb-6 sm:mb-7 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#00B879]" />
          <span><em>Ek platform. Poora business.</em></span>
        </div>

        {/* Social Proof & Trust Capsule */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-[#D9DED8] text-xs text-[#5A6270] shadow-xs">
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

        {/* Button Group (Primary Green CTA + Secondary Explore Platform) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-10 sm:mb-14">
          <button
            onClick={onOpenGetStarted}
            id="hero-primary-cta"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#00B879] hover:bg-[#008F60] text-white text-sm sm:text-base font-bold shadow-md shadow-[#00B879]/20 hover:shadow-lg hover:shadow-[#00B879]/30 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
          >
            <span>Get started</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenSeeHowItWorks}
            id="hero-secondary-cta"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-[#F4F6F3] text-[#171923] text-sm font-semibold border border-[#D9DED8] hover:border-[#00B879]/40 transition-all flex items-center justify-center gap-2.5 shadow-xs active:scale-95 cursor-pointer"
          >
            <Play className="w-4 h-4 text-[#00B879] fill-[#00B879]" />
            <span>Explore the platform</span>
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 1:1 Dropship.io Visual Marquee Stage (Curved Arcs & Real-time Scanner)    */}
      {/* ========================================================================= */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden pt-6 pb-20 select-none bg-[#E9EBE7]"
      >
        
        {/* Central Vertical Glowing Laser Beam */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-12 w-[2px] pointer-events-none z-20 overflow-visible flex flex-col items-center">
          <div className="w-[2px] h-full bg-gradient-to-b from-[#00B879]/0 via-[#00B879] to-[#00B879]/20" />
          <div className="absolute top-1/4 w-10 h-96 bg-[#00B879]/20 blur-xl" />
        </div>

        {/* Central Floating Squircle Emblem Badge (hero_icon-wrap) */}
        <div
          onClick={handleEmblemBurst}
          title="Click to boost stream velocity!"
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer flex flex-col items-center group transition-transform duration-300 ${
            emblemActive ? "scale-115" : "hover:scale-105 active:scale-95"
          }`}
        >
          {/* Subtle pulse aura */}
          <div
            className={`absolute -inset-4 rounded-3xl bg-[#00B879]/30 blur-xl transition-opacity duration-300 ${
              emblemActive ? "opacity-100 scale-125" : "opacity-60 animate-pulse"
            }`}
          />
          
          {/* The High-Elevation Squircle Badge */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-[22px] bg-[#00B879] flex items-center justify-center text-white shadow-[0_16px_45px_rgba(0,184,121,0.5)] ring-8 ring-[#E9EBE7] group-hover:shadow-[0_20px_50px_rgba(0,184,121,0.65)] transition-all">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11">
              <Image
                src="/logo_withot text.png"
                alt="CODIIC"
                fill
                priority
                className="object-contain filter brightness-0 invert"
              />
            </div>
          </div>
        </div>

        {/* Marquee Layout with 3 Organic Curvature Tracks */}
        <div className="w-[125%] -ml-[12.5%] py-6 space-y-4 will-change-transform pause-on-hover">
          {/* Track 1: Bowl Curve (Scrolls Left) */}
          <div
            ref={row1Ref}
            style={{ animationDuration: `${track1Duration}s` }}
            className="animate-marquee-left flex gap-4"
          >
            {[...row1Items, ...row1Items].map((item, idx) =>
              renderCard(item, `r1-card-${idx}`)
            )}
          </div>

          {/* Track 2: Straight (Scrolls Right) */}
          <div
            ref={row2Ref}
            style={{ animationDuration: `${track2Duration}s` }}
            className="animate-marquee-right flex gap-4"
          >
            {[...row2Items, ...row2Items].map((item, idx) =>
              renderCard(item, `r2-card-${idx}`)
            )}
          </div>

          {/* Track 3: Arch Curve (Scrolls Left Slow) */}
          <div
            ref={row3Ref}
            style={{ animationDuration: `${track3Duration}s` }}
            className="animate-marquee-left-slow flex gap-4"
          >
            {[...row3Items, ...row3Items].map((item, idx) =>
              renderCard(item, `r3-card-${idx}`)
            )}
          </div>
        </div>

        {/* Left and Right Edge Gradient Masks in #E9EBE7 */}
        <div className="absolute top-0 bottom-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-[#E9EBE7] via-[#E9EBE7]/90 to-transparent pointer-events-none z-15" />
        <div className="absolute top-0 bottom-0 right-0 w-32 sm:w-64 bg-gradient-to-l from-[#E9EBE7] via-[#E9EBE7]/90 to-transparent pointer-events-none z-15" />

        {/* Bottom Wave & Transition Fade in #E9EBE7 */}
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#E9EBE7] via-[#E9EBE7]/90 to-transparent pointer-events-none z-20 flex items-end">
          <svg
            className="w-full text-[#E9EBE7] fill-current opacity-95"
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
          >
            <path d="M0,20L80,24C160,28,320,36,480,36C640,36,800,28,960,24C1120,20,1280,20,1360,20L1440,20L1440,60L1360,60C1280,60,1120,60,960,60C800,60,640,60,480,60C320,60,160,60,80,60L0,60Z" />
          </svg>
        </div>
      </div>
    </section>
  );
};
