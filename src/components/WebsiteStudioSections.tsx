"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Check,
  X,
  Play,
  Globe,
  Zap,
  ShieldCheck,
  MousePointerClick,
  Sparkles,
  Eye,
} from "lucide-react";
import { StudioMockup } from "./StudioMockup";
import { WebsiteBuilderSection } from "./WebsiteBuilderSection";
import { FinalCtaSection } from "./FinalCtaSection";
import { RupeeOfferPill } from "./RupeeOffer";
import { Reveal } from "./Reveal";
import {
  ShopLibraryIcon,
  AnalyticsColorIcon,
  CustomerCrmColorIcon,
  WebsiteBuilderColorIcon,
  PortfolioIcon,
  IntegrationsColorIcon,
} from "./ColorfulProductIcons";

interface WebsiteStudioSectionsProps {
  onOpenGetStarted: () => void;
  onOpenSeeHowItWorks: () => void;
}

type IconComponent = React.ComponentType<{ className?: string }>;

/* ═══════════════════════════ 1. HERO + STUDIO ═══════════════════════════ */

const StudioHero: React.FC<{ onOpenGetStarted: () => void }> = ({ onOpenGetStarted }) => (
  <section className="relative pt-10 sm:pt-14 pb-16 sm:pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] font-semibold text-[#6B7280] mb-8">
        <Link href="/" className="hover:text-[#043B2C] transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3 h-3" />
        <span className="hover:text-[#043B2C] transition-colors cursor-default">Platform</span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[#111827]">Drag-and-Drop Builder</span>
      </nav>

      <Reveal className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E4E2D8] bg-white text-[11px] font-bold uppercase tracking-wider text-[#4B5563]">
          <span className="px-1.5 py-0.5 rounded bg-[#C6A15B] text-[#3B2E12] text-[9px] font-extrabold">
            POPULAR
          </span>
          No-Code Drag-and-Drop Studio
        </div>

        <h1 className="mt-5 text-[34px] sm:text-5xl lg:text-[56px] font-bold text-[#111827] tracking-[-0.035em] leading-[1.05]">
          Build High-Converting Storefronts &amp; Lead Pages in Minutes —{" "}
          <em className="font-serif italic font-normal text-[#043B2C]">Zero Code Required.</em>
        </h1>

        <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed">
          Pick a conversion-tested theme, visually drag and drop sections, connect your custom
          domain, and sync every checkout and form submission straight into your CRM 360 &amp;
          WhatsApp inbox.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={onOpenGetStarted}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#064E3B] hover:bg-[#043B2C] text-white text-sm font-bold shadow-xl shadow-[#064E3B]/25 hover:shadow-2xl hover:shadow-[#064E3B]/35 transition-all active:scale-95 cursor-pointer"
          >
            Start Building Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <a
            href="#themes"
            className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full bg-white text-sm font-bold text-[#111827] border border-[#E4E2D8] hover:border-[#C9CFC0] hover:bg-[#F7F7F2] transition-all active:scale-95"
          >
            <Play className="w-3.5 h-3.5 text-[#064E3B] fill-[#064E3B]" />
            Explore Live Themes
          </a>
        </div>

        <p className="mt-4 text-xs text-[#6B7280] font-medium">
          Zero coding required · Free SSL &amp; custom domain · Native CRM &amp; WhatsApp sync
        </p>
      </Reveal>

      {/* Interactive Studio Preview */}
      <Reveal delay={140} className="mt-10 sm:mt-14">
        <StudioMockup />
      </Reveal>
    </div>
  </section>
);

/* ═══════════════════ 2. KEY METRICS STRIP ════════════════════════════════ */

const METRICS = [
  { icon: Zap, value: "Under 5 Minutes", label: "From blank theme to live published storefront" },
  { icon: MousePointerClick, value: "0 Plugins Needed", label: "Built-in payments, CRM 360 & WhatsApp sync" },
  { icon: Globe, value: "100% Responsive", label: "Auto-optimized for Mobile, Tablet & Desktop" },
  { icon: ShieldCheck, value: "Custom Domains", label: "One-click DNS setup with free 256-bit SSL" },
];

const MetricsStrip: React.FC = () => (
  <section className="py-10 sm:py-14">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {METRICS.map((m, i) => {
          const Icon = m.icon;
          return (
            <Reveal key={m.value} delay={i * 60}>
              <div className="h-full rounded-2xl bg-white border border-[#E4E2D8] p-5 sm:p-6 hover:border-[#064E3B]/40 hover:shadow-[0_14px_34px_-18px_rgba(4,59,44,0.3)] transition-all">
                <span className="w-9 h-9 rounded-xl bg-[#F1F0EA] flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5 text-[#043B2C]" />
                </span>
                <div className="mt-3.5 text-lg sm:text-xl font-extrabold text-[#111827] tracking-tight leading-tight">
                  {m.value}
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-[#4B5563] leading-snug">{m.label}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

/* ═══════════════════ 3. SIX-CARD FEATURE GRID ═══════════════════════════ */

const FEATURES: { title: string; desc: string; icon: IconComponent }[] = [
  {
    title: "Storefronts & Product Catalogs",
    desc: "Launch full eCommerce stores with variant pricing, SKU inventory tracking, and native checkout (Stripe, Razorpay, PhonePe & UPI).",
    icon: ShopLibraryIcon,
  },
  {
    title: "High-Converting Landing Pages",
    desc: "Build dedicated campaign pages for Meta and Google ads with fast cloud load speeds and built-in conversion tracking.",
    icon: AnalyticsColorIcon,
  },
  {
    title: "CRM-Connected Lead Gen Forms",
    desc: "Drag-and-drop custom intake forms that automatically create CRM 360 contacts, assign sales reps, and trigger WhatsApp or AI voice follow-ups.",
    icon: CustomerCrmColorIcon,
  },
  {
    title: "Conversion-Ready Themes",
    desc: "Start from industry-tailored templates (Retail, Real Estate, Services, Agencies, Education, Hospitality) and customize brand colors and fonts in one click.",
    icon: WebsiteBuilderColorIcon,
  },
  {
    title: "Menus, Blogs & Legal Policies",
    desc: "Built-in navigation menu editor, SEO-ready blog publisher, and instant Privacy, Terms, and Refund policy pages in one workspace.",
    icon: PortfolioIcon,
  },
  {
    title: "Media Library & Custom Domains",
    desc: "Central asset manager for all product images and videos plus instant custom domain connection with automatic SSL certificates.",
    icon: IntegrationsColorIcon,
  },
];

const FeatureGrid: React.FC = () => (
  <section className="py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E4E2D8] bg-white text-xs font-semibold text-[#4B5563]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B]" />
          One Studio, Every Page
        </div>
        <h2 className="mt-5 text-[30px] sm:text-5xl font-bold text-[#111827] tracking-[-0.035em] leading-[1.08]">
          Everything you can build,{" "}
          <em className="font-serif italic font-normal text-[#043B2C]">in one studio.</em>
        </h2>
        <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed">
          Storefronts, landing pages, lead forms, blogs and policies — all wired natively into your
          CRM, inbox and order pipeline.
        </p>
      </div>

      <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {FEATURES.map((f, i) => {
          const Icon = f.icon;
          return (
            <Reveal key={f.title} delay={i * 60}>
              <div className="group h-full rounded-2xl bg-white border border-[#E4E2D8] p-6 hover:border-[#064E3B]/40 hover:shadow-[0_18px_44px_-20px_rgba(4,59,44,0.3)] hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 flex items-center justify-center drop-shadow-sm group-hover:scale-105 transition-transform">
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-[#111827] tracking-tight group-hover:text-[#043B2C] transition-colors">
                  {f.title}
                </h3>
                <p className="mt-2 text-[13px] text-[#4B5563] leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

/* ═══════════════════ 4. THREE-STEP WORKFLOW ══════════════════════════════ */

const STEPS = [
  {
    num: "01",
    title: "Pick a Theme & Drag Blocks",
    desc: "Choose a ready-made template and visually arrange Hero Banners, Product Grids, Testimonials, and Lead Forms without touching code.",
  },
  {
    num: "02",
    title: "Connect Your Domain & Payments",
    desc: "Link your custom domain and activate global or local payment gateways (Stripe, Razorpay, UPI) in two clicks.",
  },
  {
    num: "03",
    title: "Auto-Sync with CRM & WhatsApp",
    desc: "Every order and form lead flows automatically into CRM 360, Order Management, and WhatsApp / AI Voice follow-ups.",
  },
];

const WorkflowSteps: React.FC = () => (
  <section className="py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E4E2D8] bg-white text-xs font-semibold text-[#4B5563]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B]" />
          Drag, Drop &amp; Auto-Sync
        </div>
        <h2 className="mt-5 text-[30px] sm:text-5xl font-bold text-[#111827] tracking-[-0.035em] leading-[1.08]">
          Live in three steps,{" "}
          <em className="font-serif italic font-normal text-[#043B2C]">fully connected.</em>
        </h2>
      </div>

      <div className="mt-12 sm:mt-16 relative">
        {/* Connector line (desktop) */}
        <div
          aria-hidden
          className="hidden md:block absolute top-7 left-[16%] right-[16%] border-t-2 border-dashed border-[#C9CFC0]"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 90} className="relative text-center md:text-left flex flex-col items-center md:items-start">
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#111827] text-[#C6A15B] flex items-center justify-center text-lg font-black shadow-lg shadow-black/10">
                {step.num}
              </div>
              <div className="mt-5 rounded-2xl bg-white border border-[#E4E2D8] p-5 sm:p-6 w-full hover:border-[#064E3B]/40 transition-colors">
                <h3 className="text-[15px] font-bold text-[#111827] tracking-tight">{step.title}</h3>
                <p className="mt-2 text-[13px] text-[#4B5563] leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════ 5. THEME GALLERY ════════════════════════════════════ */

const THEME_FILTERS = [
  "All Themes",
  "Retail & D2C",
  "Real Estate",
  "Service Business",
  "Agencies",
  "Education",
  "Hospitality",
];

const THEMES: {
  name: string;
  category: string;
  desc: string;
  header: string;
  accent: string;
  tile: string;
}[] = [
  {
    name: "Aura Living",
    category: "Retail & D2C",
    desc: "Minimalist home & lifestyle storefront with quick-buy cart and WhatsApp order updates.",
    header: "bg-[#F1F0EA]",
    accent: "#064E3B",
    tile: "from-[#DAD8CD] to-[#BFE3D2]",
  },
  {
    name: "Skyline Estates",
    category: "Real Estate",
    desc: "Luxury property showcase with interactive floorplan downloads and site-visit booking forms.",
    header: "bg-[#EAF1FB]",
    accent: "#2E6FE8",
    tile: "from-[#D8E4F7] to-[#BBD0F0]",
  },
  {
    name: "Apex Consulting",
    category: "Service Business",
    desc: "High-trust service & appointment booking site synced directly with your calendar.",
    header: "bg-[#F1F0EA]",
    accent: "#111827",
    tile: "from-[#E4E2D8] to-[#C9CFC0]",
  },
  {
    name: "Nova Studio",
    category: "Agencies",
    desc: "Portfolio and lead-qualification funnel for creative and marketing agencies.",
    header: "bg-[#F4EDFB]",
    accent: "#7C3AED",
    tile: "from-[#EADDF9] to-[#D4BCF2]",
  },
  {
    name: "BrightPath Academy",
    category: "Education",
    desc: "Course catalog and student admission page with automated WhatsApp brochure delivery.",
    header: "bg-[#F5EFDF]",
    accent: "#A87F3D",
    tile: "from-[#F0E6CD] to-[#E8D6AC]",
  },
  {
    name: "Bistro & Brew",
    category: "Hospitality",
    desc: "Digital QR menu, table reservation form, and loyalty club signup page.",
    header: "bg-[#FBEAE4]",
    accent: "#D95C2E",
    tile: "from-[#F7D5C4] to-[#F0B89C]",
  },
];

const ThemeThumb: React.FC<{ theme: (typeof THEMES)[number] }> = ({ theme }) => (
  <div className="rounded-t-2xl overflow-hidden border-b border-[#F1F0EA]">
    {/* Mini browser bar */}
    <div className="flex items-center gap-1.5 px-3 py-2 bg-[#F7F7F2] border-b border-[#F1F0EA]">
      <span className="flex gap-1">
        <i className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
        <i className="w-1.5 h-1.5 rounded-full bg-[#FEBC2E]" />
        <i className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
      </span>
      <span className="flex-1" />
    </div>
    {/* Mini site preview */}
    <div className={`${theme.header} p-3.5`}>
      <div className="flex items-center justify-between mb-3">
        <span className="w-12 h-1.5 rounded-full" style={{ background: theme.accent }} />
        <span className="flex gap-1.5">
          <i className="w-5 h-1 rounded-full bg-black/15" />
          <i className="w-5 h-1 rounded-full bg-black/15" />
          <i className="w-5 h-1 rounded-full bg-black/15" />
        </span>
      </div>
      <div className="w-3/4 h-2 rounded-full bg-black/60 mb-1.5" />
      <div className="w-1/2 h-1.5 rounded-full bg-black/25 mb-3" />
      <div className="grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`rounded-md bg-gradient-to-br ${theme.tile} h-8`} />
        ))}
      </div>
      <div className="mt-2.5 flex gap-1.5">
        <span
          className="px-2 py-0.5 rounded-full text-white text-[7px] font-bold"
          style={{ background: theme.accent }}
        >
          Shop Now
        </span>
        <span className="px-2 py-0.5 rounded-full bg-white/80 text-[7px] font-bold text-[#111827] border border-black/10">
          Learn More
        </span>
      </div>
    </div>
  </div>
);

const ThemeGallery: React.FC<{ onOpenGetStarted: () => void }> = ({ onOpenGetStarted }) => {
  const [filter, setFilter] = useState("All Themes");
  const visible = THEMES.filter((t) => filter === "All Themes" || t.category === filter);

  return (
    <section id="themes" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E4E2D8] bg-white text-xs font-semibold text-[#4B5563]">
            <Sparkles className="w-3.5 h-3.5 text-[#064E3B]" />
            Conversion-Tested Themes
          </div>
          <h2 className="mt-5 text-[30px] sm:text-5xl font-bold text-[#111827] tracking-[-0.035em] leading-[1.08]">
            Pick a theme,{" "}
            <em className="font-serif italic font-normal text-[#043B2C]">make it yours.</em>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Industry-tailored templates engineered for conversion — customize colors, fonts and
            sections in one click.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mt-10 flex items-center gap-2 overflow-x-auto no-scrollbar px-1 pb-1 sm:justify-center sm:flex-wrap">
          {THEME_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full border text-[13px] font-semibold whitespace-nowrap shrink-0 cursor-pointer transition-all ${
                filter === f
                  ? "bg-[#111827] border-black/20 text-white shadow-sm"
                  : "bg-white border-[#E4E2D8] text-[#4B5563] hover:text-[#111827] hover:border-[#C9CFC0]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Theme cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {visible.map((theme, i) => (
            <div
              key={theme.name}
              className="group rounded-2xl bg-white border border-[#E4E2D8] overflow-hidden hover:border-[#064E3B]/40 hover:shadow-[0_18px_44px_-20px_rgba(4,59,44,0.3)] hover:-translate-y-0.5 transition-all animate-tool-in"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <ThemeThumb theme={theme} />
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <h3 className="text-[15px] font-bold text-[#111827] tracking-tight">{theme.name}</h3>
                  <span
                    className="text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                    style={{ background: `${theme.accent}1A`, color: theme.accent }}
                  >
                    {theme.category}
                  </span>
                </div>
                <p className="mt-1.5 text-[12px] text-[#4B5563] leading-relaxed">{theme.desc}</p>
                <div className="mt-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onOpenGetStarted}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[12px] font-bold text-[#111827] bg-white border border-[#E4E2D8] hover:border-[#C9CFC0] hover:bg-[#F7F7F2] transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Live Preview
                  </button>
                  <button
                    type="button"
                    onClick={onOpenGetStarted}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[12px] font-bold text-white bg-[#064E3B] hover:bg-[#043B2C] shadow-sm shadow-[#064E3B]/25 transition-all cursor-pointer"
                  >
                    Use Theme
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════ 6. COMPARISON CARD ══════════════════════════════════ */

const TRADITIONAL = [
  "Requires paid third-party plugins for WhatsApp & Instagram chat",
  "Separate CRM subscription + manual Zapier webhooks required",
  "Extra monthly fees for forms, popups, and automated follow-ups",
  "Fragmented customer data across 4+ dashboards",
];

const CODIIC_WAY = [
  "Native WhatsApp Cloud API, Coexistence & Instagram inbox built in",
  "Every form & checkout syncs directly to CRM 360 & Order Management",
  "Built-in AI chat & Bulk AI voice follow-ups out of the box",
  "One unified workspace starting Free (or ₹1/day for custom domains)",
];

const ComparisonCard: React.FC = () => (
  <section className="py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E4E2D8] bg-white text-xs font-semibold text-[#4B5563]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B]" />
          Why Builders Switch
        </div>
        <h2 className="mt-5 text-[30px] sm:text-5xl font-bold text-[#111827] tracking-[-0.035em] leading-[1.08]">
          CODIIC Studio vs.{" "}
          <em className="font-serif italic font-normal text-[#043B2C]">traditional builders.</em>
        </h2>
      </div>

      <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {/* Traditional */}
        <Reveal className="rounded-2xl bg-[#F7F7F2] border border-[#E4E2D8] p-6 sm:p-8">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280]">
            Traditional Website Builders
          </div>
          <div className="mt-1 text-[13px] font-semibold text-[#4B5563]">
            Shopify / Webflow / WordPress
          </div>
          <ul className="mt-5 space-y-3.5">
            {TRADITIONAL.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[13px] text-[#4B5563] leading-relaxed">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center shrink-0">
                  <X className="w-3 h-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* CODIIC */}
        <Reveal delay={100} className="relative rounded-2xl bg-white border-2 border-[#064E3B]/50 p-6 sm:p-8 shadow-[0_24px_60px_-30px_rgba(4,59,44,0.4)]">
          <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-[#064E3B] text-white text-[10px] font-bold uppercase tracking-wider shadow-md shadow-[#064E3B]/30">
            Recommended
          </span>
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#043B2C]">
            CODIIC Drag-and-Drop Studio
          </div>
          <div className="mt-1 text-[13px] font-semibold text-[#111827]">
            One platform. Your entire business.
          </div>
          <ul className="mt-5 space-y-3.5">
            {CODIIC_WAY.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[13px] text-[#111827] font-medium leading-relaxed">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#064E3B] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <RupeeOfferPill className="mt-6" label="Custom domain + full workspace from ₹1/day" />
        </Reveal>
      </div>
    </div>
  </section>
);

/* ═══════════════════ 7. PAGE FAQ ═════════════════════════════════════════ */

const FAQS = [
  {
    q: "Do I need any coding or design skills to build my storefront?",
    a: "No — use CODIIC's visual drag-and-drop blocks and pre-built themes to publish in minutes. Every section snaps into place and stays responsive automatically.",
  },
  {
    q: "Can I connect my own custom domain?",
    a: "Yes — connect any custom domain with automatic free SSL in just a few clicks. DNS setup is guided step-by-step inside the studio.",
  },
  {
    q: "What happens when a visitor submits a lead form or places an order?",
    a: "It immediately creates a contact and deal card in CRM 360, logs the order, and triggers your automated WhatsApp or AI voice sequence — zero plugins needed.",
  },
  {
    q: "Can I start building for free before upgrading?",
    a: "Yes — build and test your storefront on our Free Forever plan, and upgrade to Starter at ₹1/day or Pro whenever you're ready.",
  },
];

const StudioFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section aria-labelledby="studio-faq-heading" className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1F0EA] border border-[#064E3B]/20 text-[#043B2C] text-[11px] font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            Website Studio FAQ
          </div>
          <h2
            id="studio-faq-heading"
            className="text-[28px] sm:text-[40px] lg:text-[48px] font-extrabold text-[#111827] tracking-[-0.03em] leading-[1.1]"
          >
            Questions,{" "}
            <em className="font-serif italic font-normal text-[#043B2C]">answered.</em>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className={`rounded-2xl border transition-all duration-200 bg-white ${
                  isOpen
                    ? "border-[#064E3B]/40 shadow-[0_14px_34px_-18px_rgba(4,59,44,0.35)]"
                    : "border-[#E4E2D8] hover:border-[#C9CFC0]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left cursor-pointer"
                >
                  <span className="text-[14px] sm:text-[15px] font-bold text-[#111827] leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4.5 h-4.5 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#043B2C]" : "text-[#4B5563]"
                    }`}
                    strokeWidth={2.5}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 sm:px-6 pb-5 -mt-1 text-[13px] sm:text-[14px] text-[#4B5563] leading-relaxed animate-tool-in">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════ EXPORT ══════════════════════════════════════════════ */

export const WebsiteStudioSections: React.FC<WebsiteStudioSectionsProps> = ({
  onOpenGetStarted,
  onOpenSeeHowItWorks,
}) => (
  <>
    <StudioHero onOpenGetStarted={onOpenGetStarted} />
    <MetricsStrip />
    <WebsiteBuilderSection onOpenGetStarted={onOpenGetStarted} />
    <FeatureGrid />
    <WorkflowSteps />
    <ThemeGallery onOpenGetStarted={onOpenGetStarted} />
    <ComparisonCard />
    <StudioFaq />
    <FinalCtaSection
      onOpenGetStarted={onOpenGetStarted}
      onOpenSeeHowItWorks={onOpenSeeHowItWorks}
      pillLabel="Drag, drop & go live — start free today"
      headline="Design Your Storefront Today. Connect Everything Automatically."
      subheadline="Launch a no-code website synced with CRM 360, WhatsApp, and AI automation — start free in 2 minutes."
      ctaLabel="Start Building Free"
    />
  </>
);
