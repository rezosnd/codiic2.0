"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Search,
  SlidersHorizontal,
  Play,
  Bookmark,
  Lock,
  TrendingUp,
  TrendingDown,
  Bell,
  Zap,
} from "lucide-react";
import {
  SalesTrackerIcon,
  PortfolioIcon,
  ShopLibraryIcon,
  CompetitorsIcon,
  AdLibraryIcon,
  ProductLibraryIcon,
  AdvertiserTrackerIcon,
  MagicAiIcon,
} from "./ColorfulProductIcons";
import { GoogleAdsLogo, InstagramLogo, MetaLogo } from "./BrandLogos";

interface MainToolsSectionProps {
  onOpenGetStarted: () => void;
}

type IconComponent = React.ComponentType<{ className?: string }>;

interface Tool {
  id: string;
  title: string;
  category: string;
  badge: string;
  desc: string;
  icon: IconComponent;
  stats: { value: string; label: string }[];
  chips: { label: string; value: string; trend: "up" | "down" | "alert" }[];
  highlights: { title: string; desc: string }[];
}

const TOOLS: Tool[] = [
  {
    id: "sales-tracker",
    title: "Sales Tracker",
    category: "Real-time revenue",
    badge: "LIVE DATA",
    desc: "Monitor store and product sales over time to gain insights into revenue, volume, and operational trends.",
    icon: SalesTrackerIcon,
    stats: [
      { value: "15 min", label: "Data refresh cycle" },
      { value: "₹480Cr+", label: "GMV tracked monthly" },
    ],
    chips: [
      { label: "Revenue today", value: "+18.4%", trend: "up" },
      { label: "New orders / hr", value: "+24", trend: "up" },
    ],
    highlights: [
      {
        title: "Real-time revenue monitoring",
        desc: "Track daily, weekly, and monthly sales volume without manual spreadsheets.",
      },
      {
        title: "Product level breakdown",
        desc: "Pinpoint top-performing SKUs and order counts across your catalog.",
      },
      {
        title: "Unit margin calculation",
        desc: "Automatically deduct COGS and shipping to track real net profits.",
      },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    category: "Saved assets",
    badge: "ORGANIZE",
    desc: "Save and organize high-performing stores, winning products, and ad angles into custom monitored portfolios.",
    icon: PortfolioIcon,
    stats: [
      { value: "Unlimited", label: "Folders & watchlists" },
      { value: "Hourly", label: "Auto-sync of tracked stores" },
    ],
    chips: [
      { label: "Bestseller launched", value: "Eco Home", trend: "alert" },
      { label: "Portfolio growth", value: "+31.2%", trend: "up" },
    ],
    highlights: [
      {
        title: "Custom folder organization",
        desc: "Group tracked brands by niche, supplier, or growth opportunity.",
      },
      {
        title: "Automated revenue alerts",
        desc: "Get notified when a tracked store launches a new bestseller or scales ad spend.",
      },
      {
        title: "Collaborative team notes",
        desc: "Tag teammates on prospective products and shared inventory plans.",
      },
    ],
  },
  {
    id: "shop-library",
    title: "Shop Library",
    category: "Store research",
    badge: "MILLIONS OF SHOPS",
    desc: "Search millions of active online storefronts with granular filters for revenue, creation date, theme, and apps used.",
    icon: ShopLibraryIcon,
    stats: [
      { value: "2.4M+", label: "Storefronts indexed" },
      { value: "40+", label: "Granular search filters" },
    ],
    chips: [
      { label: "Stores matched", value: "1,284", trend: "up" },
      { label: "Avg. daily revenue", value: "₹96K", trend: "up" },
    ],
    highlights: [
      {
        title: "Comprehensive storefront database",
        desc: "Filter through verified Shopify, WooCommerce, and custom Indian stores.",
      },
      {
        title: "App & stack detection",
        desc: "See which checkout, logistics, and WhatsApp apps power competitor growth.",
      },
      {
        title: "Historical traffic & rank",
        desc: "Understand store age, visitor velocity, and daily gross order flow.",
      },
    ],
  },
  {
    id: "competitors",
    title: "Competitors",
    category: "Benchmarking",
    badge: "SIDE-BY-SIDE",
    desc: "Benchmark multiple competing brands side-by-side to track catalog updates, pricing changes, and market shifts.",
    icon: CompetitorsIcon,
    stats: [
      { value: "Up to 10", label: "Brands compared at once" },
      { value: "Instant", label: "Price & SKU change alerts" },
    ],
    chips: [
      { label: "Price drop detected", value: "−8%", trend: "down" },
      { label: "New SKUs this week", value: "+12", trend: "alert" },
    ],
    highlights: [
      {
        title: "Direct pricing comparison",
        desc: "Spot competitor price drops, flash discounts, and bundle strategies.",
      },
      {
        title: "New product launch alerts",
        desc: "Know the moment a competitor adds new SKUs or updates their home banner.",
      },
      {
        title: "Market share trajectory",
        desc: "Compare relative sales velocity across leading brands in your niche.",
      },
    ],
  },
  {
    id: "ad-library",
    title: "Ad Library",
    category: "Creative spy",
    badge: "HOT ADS",
    desc: "Explore active high-converting ad creatives across Meta, TikTok, and Google to uncover winning formats.",
    icon: AdLibraryIcon,
    stats: [
      { value: "18M+", label: "Ad creatives archived" },
      { value: "3", label: "Major ad networks covered" },
    ],
    chips: [
      { label: "Running 30+ days", value: "842 ads", trend: "up" },
      { label: "Hook retention", value: "98%", trend: "up" },
    ],
    highlights: [
      {
        title: "Live creative feeds",
        desc: "Analyze active video hooks, carousel designs, and compelling captions.",
      },
      {
        title: "Campaign longevity signals",
        desc: "Filter by ads active for 30+ days to identify proven high-ROI angles.",
      },
      {
        title: "Direct landing page preview",
        desc: "Inspect the exact conversion funnel and checkout flow used by top advertisers.",
      },
    ],
  },
  {
    id: "product-library",
    title: "Product Library",
    category: "Winning catalog",
    badge: "HOT PRODUCTS",
    desc: "Database of trending products with verified order velocity, profit margin calculators, and supplier links.",
    icon: ProductLibraryIcon,
    stats: [
      { value: "350K+", label: "Products with verified orders" },
      { value: "64%", label: "Average tracked margin" },
    ],
    chips: [
      { label: "Trending this week", value: "+212", trend: "up" },
      { label: "Verified suppliers", value: "4.8K", trend: "alert" },
    ],
    highlights: [
      {
        title: "Verified order numbers",
        desc: "Inspect actual transactions instead of vague estimated vanity rankings.",
      },
      {
        title: "Built-in profit calculator",
        desc: "Calculate landed costs, ad targets, and expected margin before sourcing.",
      },
      {
        title: "Verified direct suppliers",
        desc: "Connect directly with verified domestic and international fulfillment partners.",
      },
    ],
  },
  {
    id: "advertiser-tracker",
    title: "Advertiser Tracker",
    category: "Campaign monitor",
    badge: "AD SPEND INTEL",
    desc: "Track competitor advertising campaigns over time to discover when they scale spend or pivot messaging.",
    icon: AdvertiserTrackerIcon,
    stats: [
      { value: "120K+", label: "Advertisers monitored" },
      { value: "Daily", label: "Spend & creative snapshots" },
    ],
    chips: [
      { label: "Spend scaling", value: "+45%", trend: "up" },
      { label: "Creatives paused", value: "6", trend: "down" },
    ],
    highlights: [
      {
        title: "Ad spend scaling alerts",
        desc: "Get pinged when a competitor ramps up new variations of an ad.",
      },
      {
        title: "Creative fatigue detection",
        desc: "See which ad hooks they pause and what new angles replace them.",
      },
      {
        title: "Targeting & demographic insights",
        desc: "Understand buyer age, region, and placement distribution.",
      },
    ],
  },
  {
    id: "magic-ai-search",
    title: "Magic AI Search",
    category: "AI discovery",
    badge: "NATURAL LANGUAGE",
    desc: "Ask AI in plain language to find stores, products, and campaign strategies matching your exact criteria.",
    icon: MagicAiIcon,
    stats: [
      { value: "< 3 sec", label: "Average answer time" },
      { value: "Plain text", label: "No filters or query syntax" },
    ],
    chips: [
      { label: "Opportunities found", value: "18", trend: "alert" },
      { label: "Avg. niche margin", value: "68%", trend: "up" },
    ],
    highlights: [
      {
        title: "Natural language query",
        desc: "Search: 'Find Indian lifestyle brands making ₹15L/mo with high repeat orders.'",
      },
      {
        title: "Instant structured answers",
        desc: "Get sorted tables, growth graphs, and supplier leads within seconds.",
      },
      {
        title: "Predictive opportunity scoring",
        desc: "AI identifies underserved niches with low ad competition and high search demand.",
      },
    ],
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

const Sparkline: React.FC<{ points: number[]; color?: string; className?: string }> = ({
  points,
  color = "#00B879",
  className = "w-16 h-6",
}) => {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const d = points
    .map((p, i) => `${(i / (points.length - 1)) * 100},${28 - ((p - min) / range) * 24}`)
    .join(" ");
  return (
    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className={className}>
      <polyline
        points={d}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

const MockHeader: React.FC<{
  icon?: React.ReactNode;
  title: string;
  right?: React.ReactNode;
}> = ({ icon, title, right }) => (
  <div className="flex items-center justify-between gap-3 pb-3.5 mb-3.5 border-b border-[#EEF0EE]">
    <div className="flex items-center gap-2 min-w-0">
      {icon}
      <span className="text-[13px] font-bold text-[#171923] truncate">{title}</span>
    </div>
    {right}
  </div>
);

const Segmented: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="flex items-center gap-0.5 bg-[#F2F4F1] p-0.5 rounded-lg text-[10px] font-semibold text-[#5A6270] shrink-0">
    {items.map((item, i) => (
      <span
        key={item}
        className={`px-2 py-1 rounded-md ${
          i === 0 ? "bg-white text-[#171923] font-bold shadow-sm" : ""
        }`}
      >
        {item}
      </span>
    ))}
  </div>
);

const ToolMockup: React.FC<{ id: string }> = ({ id }) => {
  switch (id) {
    case "sales-tracker":
      return (
        <>
          <MockHeader
            icon={<span className="w-2 h-2 rounded-full bg-[#00B879] animate-pulse" />}
            title="Sales Dashboard · yourbrand.in"
            right={<Segmented items={["Today", "7D", "30D"]} />}
          />
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { k: "Total sales", v: "₹1,28,450", d: "+18.4%" },
              { k: "Orders", v: "342", d: "+24/hr" },
              { k: "AOV", v: "₹2,499", d: "+6.1%" },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-[#EEF0EE] p-3">
                <div className="text-[10px] uppercase tracking-wider font-bold text-[#8A919C]">{s.k}</div>
                <div className="mt-1 text-[15px] sm:text-lg font-extrabold text-[#171923] tabular-nums">{s.v}</div>
                <div className="text-[10px] font-bold text-[#008F60] mt-0.5">↗ {s.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl border border-[#EEF0EE] p-3">
            <div className="flex items-center justify-between text-[11px] mb-2">
              <span className="font-bold text-[#171923]">Hourly sales velocity</span>
              <span className="text-[#8A919C]">Peak at 9 PM</span>
            </div>
            <svg viewBox="0 0 300 80" preserveAspectRatio="none" className="w-full h-20">
              <defs>
                <linearGradient id="salesArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00B879" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#00B879" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,62 C25,58 40,64 60,52 C80,40 95,50 120,44 C145,38 160,46 180,30 C200,16 220,28 240,18 C260,10 280,14 300,6 L300,80 L0,80 Z"
                fill="url(#salesArea)"
              />
              <path
                d="M0,62 C25,58 40,64 60,52 C80,40 95,50 120,44 C145,38 160,46 180,30 C200,16 220,28 240,18 C260,10 280,14 300,6"
                fill="none"
                stroke="#00B879"
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </>
      );

    case "portfolio":
      return (
        <>
          <MockHeader
            icon={<Bookmark className="w-4 h-4 text-[#00B879]" />}
            title="Saved Portfolios"
            right={
              <span className="text-[10px] bg-[#E8F8F1] text-[#008F60] px-2 py-1 rounded-full font-bold shrink-0">
                4 folders
              </span>
            }
          />
          <div className="space-y-2.5">
            {[
              { e: "🌿", bg: "bg-emerald-100", n: "Eco Lifestyle & Home", m: "14 stores · 89 products", r: "₹42.8L/mo", g: "+28.4%", w: "w-[72%]" },
              { e: "⚡", bg: "bg-indigo-100", n: "Smart Electronics", m: "9 stores · 45 products", r: "₹68.5L/mo", g: "+34.2%", w: "w-[86%]" },
              { e: "💎", bg: "bg-amber-100", n: "Jewellery & Accessories", m: "6 stores · 31 products", r: "₹19.2L/mo", g: "+12.7%", w: "w-[44%]" },
            ].map((f) => (
              <div key={f.n} className="flex items-center gap-3 p-3 rounded-xl border border-[#EEF0EE] hover:border-[#00B879]/40 transition-colors">
                <div className={`w-9 h-9 rounded-lg ${f.bg} flex items-center justify-center text-base shrink-0`}>{f.e}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-[#171923] truncate">{f.n}</div>
                  <div className="text-[10px] text-[#8A919C]">{f.m}</div>
                  <div className="mt-1.5 h-1 rounded-full bg-[#F2F4F1] overflow-hidden">
                    <div className={`h-full ${f.w} rounded-full bg-gradient-to-r from-[#00B879] to-[#34D399]`} />
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-extrabold text-[#171923] tabular-nums">{f.r}</div>
                  <div className="text-[10px] font-bold text-[#008F60]">↗ {f.g}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      );

    case "shop-library":
      return (
        <>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg border border-[#E2E6E4] bg-[#FAFBFA] text-[11px] text-[#5A6270]">
              <Search className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Home decor stores · India · ₹50K+/day</span>
            </div>
            <span className="flex items-center gap-1 px-2.5 py-2 rounded-lg bg-[#171923] text-white text-[10px] font-bold shrink-0">
              <SlidersHorizontal className="w-3 h-3" /> Filters
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {["Shopify", "UPI checkout", "WhatsApp", "< 1 yr old"].map((c) => (
              <span key={c} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#E8F8F1] text-[#008F60]">
                {c}
              </span>
            ))}
          </div>
          <div className="rounded-xl border border-[#EEF0EE] overflow-hidden text-xs">
            <div className="grid grid-cols-12 px-3 py-2 bg-[#FAFBFA] text-[10px] uppercase tracking-wider font-bold text-[#8A919C]">
              <span className="col-span-6">Store</span>
              <span className="col-span-3 text-right">Revenue/day</span>
              <span className="col-span-3 text-right">Trend</span>
            </div>
            {[
              { i: "K", c: "bg-rose-500", n: "kaverilifestyle.in", r: "₹1,12,947", p: [3, 4, 3, 6, 5, 8, 9] },
              { i: "J", c: "bg-amber-500", n: "jaipurjewels.store", r: "₹88,450", p: [4, 3, 5, 4, 6, 6, 8] },
              { i: "N", c: "bg-sky-500", n: "nestandnook.co", r: "₹64,210", p: [2, 3, 3, 4, 4, 5, 7] },
            ].map((s) => (
              <div key={s.n} className="grid grid-cols-12 items-center px-3 py-2.5 border-t border-[#EEF0EE]">
                <div className="col-span-6 flex items-center gap-2 min-w-0">
                  <span className={`w-6 h-6 rounded-md ${s.c} text-white text-[10px] font-bold flex items-center justify-center shrink-0`}>{s.i}</span>
                  <span className="font-bold text-[#171923] truncate">{s.n}</span>
                </div>
                <div className="col-span-3 text-right font-bold text-[#171923] tabular-nums">{s.r}</div>
                <div className="col-span-3 flex justify-end">
                  <Sparkline points={s.p} className="w-14 h-5" />
                </div>
              </div>
            ))}
          </div>
        </>
      );

    case "competitors":
      return (
        <>
          <MockHeader
            icon={<TrendingUp className="w-4 h-4 text-[#00B879]" />}
            title="Competitor Benchmarking"
            right={<Segmented items={["7D", "30D", "90D"]} />}
          />
          <div className="rounded-xl border border-[#EEF0EE] overflow-hidden text-xs">
            <div className="grid grid-cols-12 px-3 py-2 bg-[#FAFBFA] text-[10px] uppercase tracking-wider font-bold text-[#8A919C]">
              <span className="col-span-5">Brand</span>
              <span className="col-span-2 text-right">Avg price</span>
              <span className="col-span-2 text-right">SKUs</span>
              <span className="col-span-3 text-right">Signal</span>
            </div>
            {[
              { i: "A", c: "bg-[#171923]", n: "Brand A", s: "Ceramics", p: "₹1,899", k: "42", b: "Price −8%", bc: "bg-amber-100 text-amber-800" },
              { i: "B", c: "bg-[#00B879]", n: "Brand B", s: "Home Decor", p: "₹2,499", k: "88", b: "+12 SKUs", bc: "bg-emerald-100 text-emerald-800" },
              { i: "C", c: "bg-indigo-500", n: "Brand C", s: "Kitchenware", p: "₹1,249", k: "56", b: "Ads +45%", bc: "bg-indigo-100 text-indigo-800" },
            ].map((r) => (
              <div key={r.n} className="grid grid-cols-12 items-center px-3 py-2.5 border-t border-[#EEF0EE]">
                <div className="col-span-5 flex items-center gap-2 min-w-0">
                  <span className={`w-7 h-7 rounded-lg ${r.c} text-white text-[11px] font-bold flex items-center justify-center shrink-0`}>{r.i}</span>
                  <div className="min-w-0">
                    <div className="font-bold text-[#171923] truncate">{r.n}</div>
                    <div className="text-[10px] text-[#8A919C] truncate">{r.s}</div>
                  </div>
                </div>
                <div className="col-span-2 text-right font-bold text-[#171923] tabular-nums">{r.p}</div>
                <div className="col-span-2 text-right text-[#5A6270] tabular-nums">{r.k}</div>
                <div className="col-span-3 flex justify-end">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold whitespace-nowrap ${r.bc}`}>{r.b}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl border border-[#EEF0EE] p-3">
            <div className="flex items-center justify-between text-[11px] mb-2">
              <span className="font-bold text-[#171923]">Market share · Home & Living</span>
              <span className="text-[#8A919C]">Last 30 days</span>
            </div>
            <div className="flex h-2.5 rounded-full overflow-hidden gap-0.5">
              <div className="w-[38%] bg-[#171923]" />
              <div className="w-[34%] bg-[#00B879]" />
              <div className="w-[18%] bg-indigo-500" />
              <div className="flex-1 bg-[#E2E6E4]" />
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-[10px] text-[#5A6270]">
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#171923]" />A 38%</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#00B879]" />B 34%</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />C 18%</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#E2E6E4]" />Others</span>
            </div>
          </div>
        </>
      );

    case "ad-library":
      return (
        <>
          <MockHeader
            icon={<InstagramLogo className="w-4 h-4" />}
            title="Active Ad Creatives"
            right={
              <div className="flex items-center gap-1.5 shrink-0">
                <MetaLogo className="w-4 h-4" />
                <GoogleAdsLogo className="w-4 h-4" />
              </div>
            }
          />
          <div className="grid grid-cols-2 gap-3">
            {[
              { t: "Portable Blender", g: "from-rose-400 via-orange-300 to-amber-200", d: "42 days", h: "98%" },
              { t: "Thermal Flask UGC", g: "from-sky-400 via-cyan-300 to-emerald-200", d: "28 days", h: "92%" },
            ].map((a) => (
              <div key={a.t} className="rounded-xl border border-[#EEF0EE] overflow-hidden">
                <div className={`relative h-28 bg-gradient-to-br ${a.g} flex items-center justify-center`}>
                  <span className="w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                    <Play className="w-4 h-4 text-[#171923] fill-[#171923] ml-0.5" />
                  </span>
                  <span className="absolute top-2 left-2 text-[9px] font-bold uppercase tracking-wider bg-black/60 text-white px-1.5 py-0.5 rounded">
                    Video
                  </span>
                </div>
                <div className="p-2.5">
                  <div className="text-xs font-bold text-[#171923] truncate">{a.t}</div>
                  <div className="flex justify-between text-[10px] mt-1">
                    <span className="text-[#8A919C]">Active {a.d}</span>
                    <span className="text-[#008F60] font-bold">{a.h} hook</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      );

    case "product-library":
      return (
        <>
          <MockHeader
            icon={<Zap className="w-4 h-4 text-[#00B879]" />}
            title="Winning Products"
            right={<Segmented items={["Trending", "New", "Top"]} />}
          />
          <div className="space-y-2.5">
            {[
              { e: "🐷", n: "Kids ATM Piggy Bank", c: "₹899", s: "₹2,499", m: 64, r: "₹1.28L/mo" },
              { e: "🍼", n: "Portable Bottle Warmer", c: "₹950", s: "₹2,699", m: 65, r: "₹1.13L/mo" },
              { e: "🪴", n: "Self-watering Planter", c: "₹420", s: "₹1,199", m: 58, r: "₹86K/mo" },
            ].map((p) => (
              <div key={p.n} className="flex items-center gap-3 p-3 rounded-xl border border-[#EEF0EE]">
                <div className="w-10 h-10 rounded-lg bg-[#F2F4F1] flex items-center justify-center text-lg shrink-0">{p.e}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-[#171923] truncate">{p.n}</div>
                  <div className="text-[10px] text-[#8A919C]">Cost {p.c} · Sell {p.s}</div>
                </div>
                <div className="hidden sm:block w-20 shrink-0">
                  <div className="text-[10px] font-bold text-[#171923] mb-1">{p.m}% margin</div>
                  <div className="h-1 rounded-full bg-[#F2F4F1] overflow-hidden">
                    <div className="h-full rounded-full bg-[#00B879]" style={{ width: `${p.m}%` }} />
                  </div>
                </div>
                <div className="text-right text-xs font-extrabold text-[#171923] tabular-nums shrink-0">{p.r}</div>
              </div>
            ))}
          </div>
        </>
      );

    case "advertiser-tracker":
      return (
        <>
          <MockHeader
            icon={<GoogleAdsLogo className="w-4 h-4" />}
            title="Advertiser Spend Monitor"
            right={<span className="text-[10px] text-[#8A919C] shrink-0">Updated 4m ago</span>}
          />
          <div className="rounded-xl border border-[#EEF0EE] p-3 mb-3">
            <div className="flex items-center justify-between text-[11px] mb-2">
              <span className="font-bold text-[#171923]">Est. daily spend · Apex Direct</span>
              <span className="font-bold text-[#008F60]">↗ +45%</span>
            </div>
            <div className="flex items-end gap-1 h-14">
              {[30, 34, 28, 40, 38, 46, 52, 50, 64, 72, 80, 96].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm ${i > 7 ? "bg-[#00B879]" : "bg-[#D9DED8]"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            {[
              { n: "Apex Direct", m: "18 campaigns · Meta & Google", b: "Scaling up", bc: "bg-emerald-100 text-emerald-800" },
              { n: "Urban Living Store", m: "6 new creatives this week", b: "Testing angles", bc: "bg-sky-100 text-sky-800" },
            ].map((r) => (
              <div key={r.n} className="flex items-center justify-between gap-3 p-3 rounded-xl border border-[#EEF0EE] text-xs">
                <div className="min-w-0">
                  <div className="font-bold text-[#171923] truncate">{r.n}</div>
                  <div className="text-[10px] text-[#8A919C] truncate">{r.m}</div>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold whitespace-nowrap ${r.bc}`}>{r.b}</span>
              </div>
            ))}
          </div>
        </>
      );

    case "magic-ai-search":
      return (
        <>
          <div className="flex items-start gap-2.5 p-3 rounded-xl border-2 border-[#00B879]/30 bg-[#F6FCF9]">
            <Sparkles className="w-4 h-4 text-[#00B879] mt-0.5 shrink-0" />
            <span className="text-xs text-[#171923] font-medium leading-relaxed">
              Find eco-friendly stores making &gt;₹15L/month with UPI checkout
              <span className="inline-block w-[2px] h-3.5 bg-[#00B879] ml-0.5 align-middle animate-tool-caret" />
            </span>
          </div>
          <div className="mt-3 rounded-xl border border-[#EEF0EE] p-3">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#008F60] mb-2.5">
              <span className="w-4 h-4 rounded-full bg-[#00B879] flex items-center justify-center">
                <Sparkles className="w-2.5 h-2.5 text-white" />
              </span>
              18 high-growth opportunities found
            </div>
            <div className="space-y-2">
              {[
                { n: "Bamboo & eco kitchenware", v: "8 stores", s: "68% margin", w: "w-[92%]" },
                { n: "Ayurvedic organic wellness", v: "6 stores", s: "₹24.5L/mo", w: "w-[78%]" },
                { n: "Handloom apparel", v: "4 stores", s: "42% repeat", w: "w-[61%]" },
              ].map((o) => (
                <div key={o.n} className="text-[11px]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-[#171923] truncate">{o.n}</span>
                    <span className="text-[#5A6270] shrink-0 ml-2">
                      {o.v} · <span className="font-bold text-[#008F60]">{o.s}</span>
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-[#F2F4F1] overflow-hidden">
                    <div className={`h-full ${o.w} rounded-full bg-gradient-to-r from-[#00B879] to-[#34D399]`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );

    default:
      return null;
  }
};

const chipIcon = (trend: "up" | "down" | "alert") => {
  if (trend === "up") return { Icon: TrendingUp, cls: "bg-[#E8F8F1] text-[#00B879]" };
  if (trend === "down") return { Icon: TrendingDown, cls: "bg-amber-100 text-amber-600" };
  return { Icon: Bell, cls: "bg-indigo-100 text-indigo-600" };
};

const FloatingChip: React.FC<{
  chip: Tool["chips"][number];
  className: string;
  floatClass: string;
}> = ({ chip, className, floatClass }) => {
  const { Icon, cls } = chipIcon(chip.trend);
  return (
    <div className={`hidden sm:block absolute z-20 ${className}`}>
      <div className={floatClass}>
        <div className="flex items-center gap-2.5 pl-2 pr-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur shadow-xl shadow-black/25 ring-1 ring-black/5">
          <span className={`w-8 h-8 rounded-xl flex items-center justify-center ${cls}`}>
            <Icon className="w-4 h-4" />
          </span>
          <div className="leading-tight">
            <div className="text-[10px] font-medium text-[#8A919C] whitespace-nowrap">{chip.label}</div>
            <div className="text-sm font-extrabold text-[#171923] tabular-nums">{chip.value}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MainToolsSection: React.FC<MainToolsSectionProps> = ({
  onOpenGetStarted,
}) => {
  const [activeTab, setActiveTab] = useState<string>(TOOLS[0].id);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(true);
  const sectionRef = useRef<HTMLElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);

  const activeIndex = Math.max(0, TOOLS.findIndex((t) => t.id === activeTab));
  const currentTool = TOOLS[activeIndex];

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused || !isInView) return;

    const timer = setInterval(() => {
      setActiveTab((curr) => {
        const i = TOOLS.findIndex((t) => t.id === curr);
        return TOOLS[(i + 1) % TOOLS.length].id;
      });
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, isInView, activeTab]);

  // Keep the active tab visible inside the horizontally scrollable bar on small screens
  useEffect(() => {
    const list = tabListRef.current;
    const btn = list?.querySelector<HTMLButtonElement>(`[data-tab="${activeTab}"]`);
    if (!list || !btn) return;
    const target = btn.offsetLeft - list.clientWidth / 2 + btn.clientWidth / 2;
    list.scrollTo({ left: target, behavior: "smooth" });
  }, [activeTab]);

  const step = (dir: 1 | -1) => {
    setActiveTab(TOOLS[(activeIndex + dir + TOOLS.length) % TOOLS.length].id);
  };

  const CurrentIcon = currentTool.icon;

  return (
    <section
      ref={sectionRef}
      id="tools"
      className="relative z-10 overflow-hidden pt-16 sm:pt-24 lg:pt-32 pb-20 sm:pb-28 bg-[#E9EBE7] border-b border-[#D9DED8]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(#D9DED8_1px,transparent_1px),linear-gradient(90deg,#D9DED8_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split header */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D9DED8] text-[11px] font-bold tracking-widest uppercase text-[#5A6270] shadow-2xs mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B879] animate-pulse" />
              Dropship & business intelligence
            </div>
            <h2 className="text-[34px] sm:text-5xl lg:text-[58px] font-extrabold text-[#171923] tracking-[-0.035em] leading-[1.02]">
              Every tool you need to scale.{" "}
              <span className="text-[#9AA19D]">All in one place.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="text-base sm:text-lg text-[#5A6270] leading-relaxed">
              From product discovery and competitor tracking to sales monitoring and AI search — eight
              connected tools, one workspace.
            </p>
            <div className="mt-5 flex items-center gap-6">
              {[
                { v: "8", l: "Pro tools" },
                { v: "2.4M+", l: "Stores tracked" },
                { v: "24/7", l: "Live data" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#171923] tracking-tight">{s.v}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A919C]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div
            ref={tabListRef}
            role="tablist"
            aria-label="Tools"
            className="relative flex items-center gap-1 p-1.5 bg-white rounded-2xl sm:rounded-full border border-[#D9DED8] shadow-sm max-w-full overflow-x-auto no-scrollbar"
          >
            {TOOLS.map((tool) => {
              const Icon = tool.icon;
              const isActive = activeTab === tool.id;

              return (
                <button
                  key={tool.id}
                  data-tab={tool.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tool.id)}
                  className={`relative flex items-center gap-2 pl-2 pr-3.5 sm:pr-4 py-2 rounded-xl sm:rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 shrink-0 cursor-pointer overflow-hidden ${
                    isActive
                      ? "bg-[#171923] text-white shadow-lg shadow-black/15"
                      : "text-[#5A6270] hover:text-[#171923] hover:bg-[#F2F4F1]"
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span>{tool.title}</span>
                  {isActive && (
                    <span
                      key={`${tool.id}-${isPaused}`}
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#00B879] ${
                        isPaused ? "w-full" : "animate-tab-progress"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden xl:flex items-center gap-2 text-[11px] font-semibold text-[#8A919C] shrink-0">
            <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? "bg-[#9AA19D]" : "bg-[#00B879] animate-pulse"}`} />
            {isPaused ? "Paused" : "Auto-playing"}
          </div>
        </div>

        {/* Showcase card */}
        <div className="bg-white rounded-[28px] border border-[#D9DED8] shadow-[0_30px_80px_-30px_rgba(23,25,35,0.25)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left editorial panel */}
            <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-sm font-bold text-[#171923] tabular-nums">
                  {pad(activeIndex + 1)}
                  <span className="text-[#B4BAB6]"> / {pad(TOOLS.length)}</span>
                </span>
                <span className="h-px flex-1 bg-[#E8EAE7]" />
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => step(-1)}
                    aria-label="Previous tool"
                    className="w-9 h-9 rounded-full border border-[#E2E6E4] flex items-center justify-center text-[#5A6270] hover:bg-[#171923] hover:text-white hover:border-[#171923] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => step(1)}
                    aria-label="Next tool"
                    className="w-9 h-9 rounded-full border border-[#E2E6E4] flex items-center justify-center text-[#5A6270] hover:bg-[#171923] hover:text-white hover:border-[#171923] transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div key={currentTool.id} className="flex-1 flex flex-col animate-tool-in">
                <div className="flex items-center gap-3 mb-5">
                  <CurrentIcon className="w-12 h-12 shrink-0 drop-shadow-[0_8px_16px_rgba(23,25,35,0.18)]" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#008F60]">
                      {currentTool.category}
                    </span>
                    <span className="self-start text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#171923] text-white">
                      {currentTool.badge}
                    </span>
                  </div>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#171923] tracking-[-0.03em] leading-[1.05]">
                  {currentTool.title}
                </h3>
                <p className="mt-4 text-[15px] sm:text-base text-[#5A6270] leading-relaxed">
                  {currentTool.desc}
                </p>

                <div className="mt-7 grid grid-cols-2 border-y border-[#EEF0EE]">
                  {currentTool.stats.map((s, i) => (
                    <div key={s.label} className={`py-4 ${i === 1 ? "pl-5 border-l border-[#EEF0EE]" : "pr-5"}`}>
                      <div className="text-2xl sm:text-[28px] font-extrabold text-[#171923] tracking-tight leading-none">
                        {s.value}
                      </div>
                      <div className="mt-1.5 text-xs text-[#8A919C] leading-snug">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <button
                    onClick={onOpenGetStarted}
                    className="group inline-flex items-center gap-3 pl-6 pr-1.5 py-1.5 rounded-full bg-[#171923] hover:bg-black text-white text-sm font-bold shadow-lg shadow-black/15 transition-all active:scale-[0.97] cursor-pointer"
                  >
                    <span>Explore {currentTool.title}</span>
                    <span className="w-9 h-9 rounded-full bg-[#00B879] flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-45deg]">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                  <button
                    onClick={onOpenGetStarted}
                    className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#171923] cursor-pointer"
                  >
                    <span className="border-b border-[#171923]/20 group-hover:border-[#171923] transition-colors">
                      Book a demo
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right dark stage */}
            <div className="lg:col-span-7 relative bg-[#0B1310] overflow-hidden px-5 py-10 sm:px-12 sm:py-14 lg:px-14 lg:py-16 flex items-center min-h-[420px]">
              <div
                aria-hidden
                className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]"
              />
              <div aria-hidden className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-[#00B879]/30 blur-[110px]" />
              <div aria-hidden className="absolute -bottom-40 -left-24 w-[360px] h-[360px] rounded-full bg-[#0EA5E9]/15 blur-[110px]" />

              <div className="relative w-full max-w-[560px] mx-auto">
                <FloatingChip
                  key={`${currentTool.id}-chip-a`}
                  chip={currentTool.chips[0]}
                  className="-top-7 -left-4 lg:-left-8 animate-tool-in [animation-delay:150ms]"
                  floatClass="animate-tool-float"
                />
                <FloatingChip
                  key={`${currentTool.id}-chip-b`}
                  chip={currentTool.chips[1]}
                  className="-bottom-7 -right-4 lg:-right-8 animate-tool-in [animation-delay:250ms]"
                  floatClass="animate-tool-float-delayed"
                />

                <div className="relative rounded-2xl bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10 overflow-hidden">
                  <div className="flex items-center gap-3 px-4 h-10 bg-[#F6F7F5] border-b border-[#EAECE9]">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="flex-1 flex justify-center min-w-0">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-[#EAECE9] text-[10px] text-[#5A6270] font-medium max-w-full">
                        <Lock className="w-2.5 h-2.5 shrink-0" />
                        <span className="truncate">codiic.app/tools/{currentTool.id}</span>
                      </div>
                    </div>
                    <span className="hidden sm:flex items-center gap-1 text-[10px] font-bold text-[#008F60] shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00B879] animate-pulse" />
                      Live
                    </span>
                  </div>
                  <div key={currentTool.id} className="p-4 sm:p-5 animate-tool-in">
                    <ToolMockup id={currentTool.id} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Numbered highlight strip */}
          <div
            key={`${currentTool.id}-highlights`}
            className="grid grid-cols-1 md:grid-cols-3 border-t border-[#EEF0EE] bg-[#FAFBFA] divide-y md:divide-y-0 md:divide-x divide-[#EEF0EE]"
          >
            {currentTool.highlights.map((h, i) => (
              <div
                key={h.title}
                className="group relative p-6 sm:p-8 hover:bg-white transition-colors animate-tool-in"
                style={{ animationDelay: `${120 + i * 80}ms` }}
              >
                <span className="absolute top-0 left-0 h-[2px] w-0 bg-[#00B879] transition-all duration-500 group-hover:w-full" />
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs font-bold text-[#00B879] pt-0.5">{pad(i + 1)}</span>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#171923] tracking-tight">{h.title}</h4>
                    <p className="mt-1.5 text-[13px] text-[#5A6270] leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
