"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ArrowRight, Compass, Star } from "lucide-react";
import {
  WhatsAppLogo,
  RazorpayLogo,
  GoogleWorkspaceLogo,
  GoogleAdsLogo,
  MetaLogo,
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
import { HeroShaderBackground } from "./ui/hero";
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
      { title: "Drag-and-Drop Storefront published", subtitle: "Custom domain live in 60s", value: "Live", growth: "SSL", Logo: WebsiteBuilderColorIcon },
      { title: "Naya Order Aaya!", subtitle: "WhatsApp pe receipt & tracking sent", value: "₹1,499", growth: "paid", Logo: WhatsAppLogo },
      { title: "Deal won", subtitle: "Moved to Won in CRM 360", value: "₹4,50,000", growth: "+28%", Logo: SalesPipelineColorIcon },
      { title: "Tax invoice", subtitle: "Auto-generated on checkout", value: "₹64,200", growth: "auto", Logo: GstLogo },
      { title: "Shipment booked", subtitle: "Tracking sent on WhatsApp", value: "AWB", growth: "synced", Logo: BlueDartLogo },
      { title: "CTWA ad click", subtitle: "Routed to WhatsApp + CRM", value: "₹2,10,000", growth: "4.8x", Logo: GoogleAdsLogo },
      { title: "Razorpay checkout", subtitle: "Card payment captured", value: "₹8,450", growth: "instant", Logo: RazorpayLogo },
    ],
  },
  {
    duration: 38,
    items: [
      { title: "Customer merged", subtitle: "Web form + WhatsApp", value: "314", growth: "leads", Logo: CustomerCrmColorIcon },
      { title: "UPI payment settled", subtitle: "QR merchant payment", value: "₹24,500", growth: "0% fee", Logo: BhimUpiLogo },
      { title: "Instant AI Reply", subtitle: "0.4s mein catalog bhej diya gaya", value: "0.4s", growth: "99% open", Logo: WhatsAppLogo },
      { title: "Website published", subtitle: "yourbrand.com is live", value: "60s", growth: "SSL", Logo: WebsiteBuilderColorIcon },
      { title: "PhonePe payment", subtitle: "Storefront checkout", value: "₹1,95,000", growth: "+32%", Logo: PhonePeLogo },
      { title: "Instagram Auto-DM triggered", subtitle: "Lead added to CRM 360 Pipeline", value: "+31", growth: "today", Logo: InstagramLogo },
    ],
  },
  {
    duration: 50,
    items: [
      { title: "Revenue forecast", subtitle: "18 deals closing", value: "₹28,20,000", growth: "+18%", Logo: AnalyticsColorIcon },
      { title: "Bulk AI Voice Call completed", subtitle: "42 appointments booked", value: "42", growth: "qualified", Logo: AutomationColorIcon },
      { title: "Meeting booked", subtitle: "Calendar synced", value: "12", growth: "this week", Logo: GoogleWorkspaceLogo },
      { title: "Ad Library Alert", subtitle: "Rival launched 14 Meta video ads", value: "14", growth: "new", Logo: MetaLogo },
      { title: "Client email logged", subtitle: "Added to timeline", value: "Inbox 0", growth: "24/7", Logo: GmailLogo },
      { title: "Meta lead form", subtitle: "Synced to pipeline", value: "+86", growth: "leads", Logo: MetaLogo },
    ],
  },
];

const FlowCard: React.FC<{ item: FlowCardItem }> = ({ item }) => {
  const Logo = item.Logo;
  return (
    <div className="w-[200px] sm:w-[232px] h-[54px] sm:h-[60px] shrink-0 flex items-center gap-2.5 px-2.5 sm:px-3 rounded-xl bg-white border border-[#E4E2D8] shadow-[0_8px_24px_-14px_rgba(17,24,39,0.25)]">
      <span className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-lg bg-white ring-1 ring-black/[0.06] flex items-center justify-center">
        <Logo className="w-5 h-5" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] sm:text-[12px] font-bold text-[#111827] truncate leading-tight">
          {item.title}
        </div>
        <div className="text-[9px] sm:text-[10px] text-[#6B7280] truncate leading-tight mt-0.5">
          {item.subtitle}
        </div>
      </div>
      <div className="text-right shrink-0">
        <div className="text-[11px] sm:text-[12px] font-extrabold text-[#111827] tabular-nums leading-tight">
          {item.value}
        </div>
        <span className="inline-block mt-0.5 text-[8px] font-semibold text-[#064E3B] bg-[#EAF7F1] px-1.5 py-0.5 rounded leading-none">
          {item.growth}
        </span>
      </div>
    </div>
  );
};

const SkeletonCard: React.FC = () => (
  <div className="w-[200px] sm:w-[232px] h-[54px] sm:h-[60px] shrink-0 flex items-center gap-2.5 px-2.5 sm:px-3 rounded-xl bg-white/70 border border-[#E4E2D8]/70">
    <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#EDEBE2] shrink-0" />
    <div className="flex-1 space-y-1.5">
      <span className="block h-2 w-[68%] rounded-full bg-[#EDEBE2]" />
      <span className="block h-1.5 w-[46%] rounded-full bg-[#EDEBE2]" />
    </div>
    <div className="w-10 space-y-1.5 flex flex-col items-end">
      <span className="block h-2 w-full rounded-full bg-[#EDEBE2]" />
      <span className="block h-1.5 w-6 rounded-full bg-[#EDEBE2]" />
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
  const reducedMotion = useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

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
    <section className="relative overflow-hidden bg-[#03271E] -mt-[76px] pt-[118px] sm:pt-[136px] lg:pt-[148px]">
      {/* Animated CODIIC mesh-gradient shader — soft emerald/mint light wash */}
      <HeroShaderBackground className="z-0" />

      {/* Atmospheric vignette — covers the copy area down to the stage seam
          (the stage has its own solid bg at z-10, so this won't tint it) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_62%_58%_at_50%_34%,rgba(3,39,30,0)_0%,rgba(3,39,30,0.5)_62%,rgba(3,39,30,0.85)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px] z-[1] bg-gradient-to-b from-transparent to-[#03271E]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[4%] -translate-x-1/2 z-[1] w-[900px] h-[420px] bg-[radial-gradient(ellipse_at_center,rgba(54,214,166,0.14)_0%,rgba(54,214,166,0)_65%)]"
      />

      {/* Copy */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Announcement badge — small, elegant, existing ₹1/day offer */}
        <RupeeOfferPill
          dark
          className="mb-5 sm:mb-6"
          label="Everything in one plan • Just ₹1/day"
        />

        {/* Eyebrow */}
        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#9FE8C6]/90">
          The All-in-One Business Platform
        </p>

        {/* Headline */}
        <h1 className="mx-auto mt-4 sm:mt-5 max-w-[1100px] text-[40px] sm:text-6xl lg:text-[80px] font-bold tracking-[-0.035em] leading-[1.04] text-white [text-shadow:0_2px_30px_rgba(3,39,30,0.9)]">
          <span className="block">Everything your business needs.</span>
          <span className="block text-[#9FE8C6]">All in one place.</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg lg:text-xl font-medium text-white/75 leading-relaxed">
          Build your website, manage customers, accept payments, and automate your
          business — all from one platform.
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onOpenGetStarted}
            id="hero-primary-cta"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#36D6A6] hover:bg-[#2CC297] text-[#03271E] text-[15px] font-bold shadow-[0_16px_40px_-12px_rgba(54,214,166,0.55)] transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            type="button"
            onClick={onOpenSeeHowItWorks}
            id="hero-secondary-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-md text-white text-[15px] font-semibold border border-white/15 transition-colors duration-200 active:scale-[0.98] cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#9FE8C6]" />
            Explore Features
          </button>
        </div>

        {/* Trust row — one line on desktop, wraps cleanly on mobile */}
        <div className="mt-9 sm:mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm text-white/60">
          <span className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-[#C6A15B] text-[#C6A15B]" aria-hidden="true" />
            <span className="font-semibold text-white/90">4.9/5</span>
          </span>
          <span className="text-white/25" aria-hidden="true">·</span>
          <span>2,400+ brands &amp; agencies</span>
          <span className="text-white/25" aria-hidden="true">·</span>
          <span>Zero coding required</span>
          <span className="text-white/25" aria-hidden="true">·</span>
          <span>2-minute setup</span>
        </div>

        {/* Supporting line */}
        <p className="mt-4 text-xs sm:text-sm italic text-[#9FE8C6]/60">
          From your first website to your next sale, everything works together.
        </p>
      </div>

      {/* Flow stage: cards travel left → right through the CODIIC hub (light band) */}
      <div
        ref={stageRef}
        className="relative z-10 mt-14 sm:mt-20 h-[240px] sm:h-[290px] lg:h-[310px] bg-[#F5F3EC] rounded-t-[32px] sm:rounded-t-[48px] border-t border-white/70 shadow-[0_-24px_60px_-30px_rgba(3,39,30,0.55)] overflow-hidden"
        aria-hidden="true"
      >
        {/* Beam — thin mint line with a soft glow */}
        <div className="absolute left-[26%] sm:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#36D6A6]/0 via-[#36D6A6]/55 to-[#36D6A6]/0" />
        <div className="absolute left-[26%] sm:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-full bg-[#36D6A6]/[0.07] blur-xl" />

        {/* Rows */}
        <div className="absolute inset-0 flex flex-col justify-center gap-2.5 sm:gap-3 [perspective:1200px] [mask-image:linear-gradient(90deg,transparent,black_6%,black_92%,transparent)] sm:[mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          {ROWS.map((row, i) => (
            <div
              key={i}
              className="relative h-[54px] sm:h-[60px]"
              style={{ transform: `rotateX(10deg) rotate(${(i - 1) * 0.6}deg) translateZ(0)` }}
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
          <div className="relative w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-[18px] sm:rounded-[22px] bg-[#075B46] ring-[5px] ring-white shadow-[0_18px_44px_-14px_rgba(0,0,0,0.5)] flex items-center justify-center">
            <div className="relative w-7 h-7 sm:w-9 sm:h-9">
              <Image
                src="/logo_withot text.png"
                alt=""
                fill
                priority
                sizes="36px"
                className="object-contain brightness-0 invert"
              />
            </div>
          </div>
        </div>

        {/* Frosted-glass bottom edge — slim */}
        <div className="absolute inset-x-0 bottom-0 h-12 sm:h-14 pointer-events-none z-20 backdrop-blur-lg bg-gradient-to-t from-[#F5F3EC]/90 via-[#F5F3EC]/40 to-transparent" />
      </div>
    </section>
  );
};
