"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, Star } from "lucide-react";
import {
  WhatsAppLogo,
  RazorpayLogo,
  GoogleWorkspaceLogo,
  GoogleAdsLogo,
  MetaLogo,
  ShopifyLogo,
  BhimUpiLogo,
  BlueDartLogo,
  GstLogo,
  PhonePeLogo,
  GmailLogo,
  InstagramLogo,
} from "./BrandLogos";
import {
  WebsiteBuilderColorIcon,
  CustomerCrmColorIcon,
  SalesPipelineColorIcon,
  AutomationColorIcon,
  AnalyticsColorIcon,
} from "./ColorfulProductIcons";
import { BipsyncHeroCanvas } from "./BipsyncHeroCanvas";
import { RupeeOfferPill } from "./RupeeOffer";

interface HeroProps {
  onOpenGetStarted: () => void;
  onOpenSeeHowItWorks: () => void;
}

type LogoComponent = React.FC<{ className?: string }>;

interface FlowCardItem {
  title: string;
  subtitle: string;
  value: string;
  growth: string;
  Logo: LogoComponent;
}

interface FlowRow {
  duration: number;
  items: FlowCardItem[];
}

const ROWS: FlowRow[] = [
  {
    duration: 44,
    items: [
      { title: "WhatsApp lead", subtitle: "Routed to CRM", value: "+128", growth: "today", Logo: WhatsAppLogo },
      { title: "Store order #1042", subtitle: "UPI payment received", value: "₹14,990", growth: "paid", Logo: ShopifyLogo },
      { title: "Deal won", subtitle: "Moved to Closed · Won", value: "₹4,50,000", growth: "+28%", Logo: SalesPipelineColorIcon },
      { title: "GST invoice", subtitle: "Generated on checkout", value: "₹64,200", growth: "auto", Logo: GstLogo },
      { title: "Shipment booked", subtitle: "Tracking sent on WhatsApp", value: "AWB", growth: "synced", Logo: BlueDartLogo },
      { title: "Google Ads lead", subtitle: "High-intent inquiry", value: "₹2,10,000", growth: "4.8x", Logo: GoogleAdsLogo },
      { title: "Razorpay checkout", subtitle: "Card payment captured", value: "₹8,450", growth: "instant", Logo: RazorpayLogo },
    ],
  },
  {
    duration: 38,
    items: [
      { title: "Customer merged", subtitle: "Web form + WhatsApp", value: "314", growth: "leads", Logo: CustomerCrmColorIcon },
      { title: "BHIM UPI settled", subtitle: "QR merchant payment", value: "₹24,500", growth: "0% fee", Logo: BhimUpiLogo },
      { title: "Catalog sent", subtitle: "Auto-reply on inquiry", value: "0.4s", growth: "99% open", Logo: WhatsAppLogo },
      { title: "Website published", subtitle: "yourbusiness.in is live", value: "Live", growth: "SSL", Logo: WebsiteBuilderColorIcon },
      { title: "PhonePe payment", subtitle: "Storefront checkout", value: "₹1,95,000", growth: "+32%", Logo: PhonePeLogo },
      { title: "Instagram DM", subtitle: "Converted to lead", value: "+31", growth: "today", Logo: InstagramLogo },
    ],
  },
  {
    duration: 50,
    items: [
      { title: "Revenue forecast", subtitle: "18 deals closing", value: "₹28,20,000", growth: "+18%", Logo: AnalyticsColorIcon },
      { title: "Follow-up sent", subtitle: "Round-robin to rep", value: "0.2s", growth: "100%", Logo: AutomationColorIcon },
      { title: "Meeting booked", subtitle: "Calendar synced", value: "12", growth: "this week", Logo: GoogleWorkspaceLogo },
      { title: "Meta lead form", subtitle: "Synced to pipeline", value: "+86", growth: "leads", Logo: MetaLogo },
      { title: "Client email logged", subtitle: "Added to timeline", value: "Inbox 0", growth: "24/7", Logo: GmailLogo },
      { title: "Festive catalog", subtitle: "Inventory auto-synced", value: "420", growth: "orders", Logo: ShopifyLogo },
    ],
  },
];

const FlowCard: React.FC<{ item: FlowCardItem }> = ({ item }) => {
  const Logo = item.Logo;
  return (
    <div className="w-[228px] sm:w-[268px] h-[64px] sm:h-[74px] shrink-0 flex items-center gap-3 pl-2.5 pr-3 sm:pl-3 sm:pr-4 rounded-2xl bg-white border border-[#E6E9E7] shadow-[0_10px_30px_-14px_rgba(23,25,35,0.22)]">
      <span className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-white ring-1 ring-black/[0.06] flex items-center justify-center">
        <Logo className="w-6 h-6" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[12px] sm:text-[13px] font-bold text-[#171923] truncate leading-tight">
          {item.title}
        </div>
        <div className="text-[10px] sm:text-[11px] text-[#6B7280] truncate leading-tight mt-1">
          {item.subtitle}
        </div>
      </div>
      <div className="text-right shrink-0">
        <div className="text-[12px] sm:text-[14px] font-extrabold text-[#171923] tabular-nums leading-tight">
          {item.value}
        </div>
        <span className="inline-block mt-1 text-[9px] font-semibold text-[#008F60] bg-[#E8F8F1] px-1.5 py-0.5 rounded-md leading-none">
          {item.growth}
        </span>
      </div>
    </div>
  );
};

const SkeletonCard: React.FC = () => (
  <div className="w-[228px] sm:w-[268px] h-[64px] sm:h-[74px] shrink-0 flex items-center gap-3 pl-2.5 pr-3 sm:pl-3 sm:pr-4 rounded-2xl bg-white border border-[#ECEFED]">
    <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#EEF1EF] shrink-0" />
    <div className="flex-1 space-y-2">
      <span className="block h-2.5 w-[68%] rounded-full bg-[#EEF1EF]" />
      <span className="block h-2 w-[46%] rounded-full bg-[#F3F5F4]" />
    </div>
    <div className="w-12 space-y-2 flex flex-col items-end">
      <span className="block h-2.5 w-full rounded-full bg-[#EEF1EF]" />
      <span className="block h-2 w-7 rounded-full bg-[#F3F5F4]" />
    </div>
  </div>
);

const Track: React.FC<{ row: FlowRow; skeleton?: boolean; paused: boolean }> = ({
  row,
  skeleton,
  paused,
}) => {
  const loop = [...row.items, ...row.items];
  return (
    <div
      className="flex w-max gap-3 sm:gap-4 animate-integration-flow"
      style={{
        animationDuration: `${row.duration}s`,
        animationPlayState: paused ? "paused" : "running",
      }}
    >
      {loop.map((item, i) => (skeleton ? <SkeletonCard key={i} /> : <FlowCard key={i} item={item} />))}
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({ onOpenGetStarted, onOpenSeeHowItWorks }) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!stageRef.current) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.05,
    });
    observer.observe(stageRef.current);
    return () => observer.disconnect();
  }, []);

  const paused = !inView;

  return (
    <section className="relative overflow-hidden bg-transparent pt-12 sm:pt-20 lg:pt-24">
      {/* Interactive 3D hexagon terrain (reacts to the cursor) */}
      <BipsyncHeroCanvas className="absolute inset-0 pointer-events-none z-0 overflow-hidden" />

      {/* Copy */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Soft halo so the copy stays readable over the 3D terrain */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-10%] -translate-x-1/2 w-[110%] max-w-[980px] h-[120%] -z-10 bg-[radial-gradient(ellipse_at_center,rgba(244,252,248,0.95)_0%,rgba(236,249,243,0.75)_40%,rgba(236,249,243,0)_72%)]"
        />
        <RupeeOfferPill className="mb-6" />

        <h1 className="mx-auto max-w-4xl text-[40px] sm:text-6xl lg:text-[76px] font-bold text-[#171923] tracking-[-0.035em] leading-[1.02] [text-shadow:0_2px_24px_rgba(255,255,255,0.9)]">
          All your business.{" "}
          <em className="font-serif italic font-normal pr-1 text-transparent bg-clip-text bg-[linear-gradient(110deg,#006B48_0%,#00B879_35%,#5EF0B8_50%,#00B879_65%,#006B48_100%)] bg-[length:250%_100%] animate-text-shine [text-shadow:none]">
            One platform.
          </em>
        </h1>

        <div className="mx-auto mt-5 sm:mt-6 max-w-2xl rounded-2xl sm:rounded-3xl px-5 py-3.5 sm:px-7 sm:py-4 bg-white/60 backdrop-blur-xl backdrop-saturate-150 border border-white/80 shadow-[0_20px_50px_-24px_rgba(0,107,72,0.45),inset_0_1px_0_rgba(255,255,255,0.9)]">
          <p className="text-base sm:text-lg lg:text-xl font-medium text-[#2A303C] leading-relaxed">
            Build your website, manage customers, track sales and automate everyday work — all from
            one place.{" "}
            <span className="font-semibold text-[#008F60]">Ek platform, poora business.</span>
          </p>
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onOpenGetStarted}
            id="hero-primary-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-[15px] font-bold shadow-[0_14px_34px_-12px_rgba(0,143,96,0.7)] transition-colors active:scale-[0.98] cursor-pointer"
          >
            Start at ₹1/day
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onOpenSeeHowItWorks}
            id="hero-secondary-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/65 hover:bg-white/85 backdrop-blur-md text-[#171923] text-[15px] font-semibold border border-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-colors active:scale-[0.98] cursor-pointer"
          >
            <Play className="w-4 h-4 fill-[#171923]" />
            See how it works
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#5A6270]">
          <span className="flex items-center gap-0.5 text-amber-400" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </span>
          <span className="font-semibold text-[#171923]">4.9</span>
          <span>from 2,400+ businesses</span>
          <span className="hidden sm:inline text-[#9AA7A0]">·</span>
          <span className="hidden sm:inline">No code, only drag &amp; drop</span>
        </div>
      </div>

      {/* Flow stage: cards travel left → right through the CODIIC hub */}
      <div ref={stageRef} className="relative mt-12 sm:mt-16 h-[300px] sm:h-[380px] lg:h-[400px]" aria-hidden="true">
        {/* Beam */}
        <div className="absolute left-[26%] sm:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] bg-gradient-to-b from-[#00B879]/0 via-[#00B879] to-[#00B879]/0" />

        {/* Rows */}
        <div className="absolute inset-0 flex flex-col justify-center gap-3 sm:gap-4 [perspective:1400px] [mask-image:linear-gradient(90deg,transparent,black_5%,black_92%,transparent)] sm:[mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          {ROWS.map((row, i) => (
            <div
              key={i}
              className="relative h-[64px] sm:h-[74px]"
              style={{ transform: `rotateX(14deg) rotate(${(i - 1) * 0.8}deg) translateZ(0)` }}
            >
              {reducedMotion ? (
                <div className="absolute inset-0 flex justify-center gap-4">
                  {row.items.slice(0, 4).map((item, j) => (
                    <FlowCard key={j} item={item} />
                  ))}
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 overflow-hidden [clip-path:inset(0_74%_0_0)] sm:[clip-path:inset(0_50%_0_0)]">
                    <Track row={row} skeleton paused={paused} />
                  </div>
                  <div className="absolute inset-0 overflow-hidden [clip-path:inset(0_0_0_26%)] sm:[clip-path:inset(0_0_0_50%)]">
                    <Track row={row} paused={paused} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Hub */}
        <div className="absolute left-[26%] sm:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative w-[64px] h-[64px] sm:w-[84px] sm:h-[84px] rounded-[20px] sm:rounded-[26px] bg-[#00B879] ring-[6px] ring-white shadow-[0_20px_50px_-12px_rgba(0,143,96,0.55)] flex items-center justify-center">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/logo_withot text.png"
                alt=""
                fill
                priority
                sizes="40px"
                className="object-contain brightness-0 invert"
              />
            </div>
          </div>
        </div>

        {/* Frosted-glass bottom edge */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 pointer-events-none z-20 backdrop-blur-xl backdrop-saturate-150 bg-gradient-to-t from-[#E3F4EC]/90 via-[#E3F4EC]/45 to-transparent [mask-image:linear-gradient(to_top,black_35%,transparent)]" />
      </div>
    </section>
  );
};
