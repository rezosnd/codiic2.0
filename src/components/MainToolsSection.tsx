"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Search,
  Filter,
  ExternalLink,
  ChevronRight,
  Play,
  Flame,
  Layers,
  Compass,
  Radio,
  BarChart3,
  Globe,
  SlidersHorizontal,
  Bookmark,
  Share2,
} from "lucide-react";
import {
  WebsiteBuilderColorIcon,
  CustomerCrmColorIcon,
  SalesPipelineColorIcon,
  AutomationColorIcon,
  AnalyticsColorIcon,
  RetailColorIcon,
} from "./ColorfulProductIcons";
import {
  ShopifyLogo,
  GoogleAdsLogo,
  InstagramLogo,
  MetaLogo,
  RazorpayLogo,
} from "./BrandLogos";

interface MainToolsSectionProps {
  onOpenGetStarted: () => void;
}

export const MainToolsSection: React.FC<MainToolsSectionProps> = ({
  onOpenGetStarted,
}) => {
  const [activeTab, setActiveTab] = useState<string>("sales-tracker");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(true);
  const sectionRef = useRef<HTMLElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);

  // Exact 8 Tools from Dropship.io requested by user
  const tools = [
    {
      id: "sales-tracker",
      title: "Sales Tracker",
      category: "REAL-TIME REVENUE",
      badge: "LIVE DATA",
      desc: "Monitor store and product sales over time to gain insights into revenue, volume, and operational trends.",
      icon: AnalyticsColorIcon,
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
      category: "SAVED ASSETS",
      badge: "ORGANIZE",
      desc: "Save and organize high-performing stores, winning products, and ad angles into custom monitored portfolios.",
      icon: SalesPipelineColorIcon,
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
      category: "STORE RESEARCH",
      badge: "MILLIONS OF SHOPS",
      desc: "Search millions of active online storefronts with granular filters for revenue, creation date, theme, and apps used.",
      icon: WebsiteBuilderColorIcon,
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
      category: "BENCHMARKING",
      badge: "SIDE-BY-SIDE",
      desc: "Benchmark multiple competing brands side-by-side to track catalog updates, pricing changes, and market shifts.",
      icon: CustomerCrmColorIcon,
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
      category: "CREATIVE SPY",
      badge: "HOT ADS",
      desc: "Explore active high-converting ad creatives across Meta, TikTok, and Google to uncover winning formats.",
      icon: RetailColorIcon,
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
      category: "WINNING CATALOG",
      badge: "HOT PRODUCTS",
      desc: "Database of trending products with verified order velocity, profit margin calculators, and supplier links.",
      icon: AutomationColorIcon,
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
      category: "CAMPAIGN MONITOR",
      badge: "AD SPEND INTEL",
      desc: "Track competitor advertising campaigns over time to discover when they scale spend or pivot messaging.",
      icon: CustomerCrmColorIcon,
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
      category: "AI DISCOVERY",
      badge: "NATURAL LANGUAGE",
      desc: "Ask AI in plain language to find stores, products, and campaign strategies matching your exact criteria.",
      icon: Sparkles,
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

  const currentTool = tools.find((t) => t.id === activeTab) || tools[0];

  // IntersectionObserver to pause auto-rotation when section is out of viewport
  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-play tab rotation every 6s (only runs when in view and not paused)
  useEffect(() => {
    if (isPaused || !isInView) return;

    const timer = setInterval(() => {
      setActiveTab((curr) => {
        const currentIndex = tools.findIndex((t) => t.id === curr);
        return tools[(currentIndex + 1) % tools.length].id;
      });
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, isInView, tools]);

  // Handle manual tab switch
  const handleTabChange = (toolId: string) => {
    setActiveTab(toolId);
  };

  return (
    <section
      ref={sectionRef}
      id="tools"
      className="pt-16 sm:pt-24 lg:pt-32 pb-20 sm:pb-28 bg-[#E9EBE7] border-b border-[#D9DED8] relative z-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D9DED8] text-[11px] font-bold tracking-widest uppercase text-[#5A6270] shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00B879]" />
            <span>DROPSHIP & BUSINESS INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight leading-tight">
            Every tool you need to scale. All in one place.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5A6270] leading-relaxed max-w-2xl mx-auto">
            From product discovery and competitor tracking to sales monitoring and AI search.
          </p>
        </div>

        {/* Dropship.io-style Horizontal Tab Bar with Progress Indicator */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div
            ref={tabListRef}
            className="inline-flex items-center gap-1 sm:gap-1.5 p-1.5 bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-full border border-[#D9DED8] shadow-sm max-w-full overflow-x-auto no-scrollbar"
          >
            {tools.map((tool) => {
              const Icon = tool.icon;
              const isActive = activeTab === tool.id;

              return (
                <button
                  key={tool.id}
                  onClick={() => handleTabChange(tool.id)}
                  className={`relative flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-xs font-bold transition-all duration-200 shrink-0 cursor-pointer overflow-hidden ${
                    isActive
                      ? "bg-[#171923] text-white shadow-md shadow-black/10"
                      : "text-[#5A6270] hover:text-[#171923] hover:bg-[#F4F6F3]"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{tool.title}</span>

                  {/* Active Auto-play Progress Line (GPU-accelerated CSS animation) */}
                  {isActive && (
                    <div
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
        </div>

        {/* Masterpiece Tab Showcase Container (Dropship.io `is-tabs` style) */}
        <div className="bg-white rounded-3xl border border-[#D9DED8] p-6 sm:p-9 shadow-xl shadow-black/[0.03] transition-all duration-300">
          
          {/* Top Stage: Left Content & Right Interactive Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-[#E8EAF0]">
            
            {/* Left Content (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E2E6E4] flex items-center justify-center shrink-0 shadow-xs p-2">
                  <currentTool.icon className="w-7 h-7 shrink-0 text-[#00B879]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#171923]">
                      {currentTool.title}
                    </h3>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#E8F8F1] text-[#008F60] border border-[#00B879]/20">
                      {currentTool.badge}
                    </span>
                  </div>
                  <span className="text-xs text-[#008F60] font-semibold">
                    {currentTool.category}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#5A6270] leading-relaxed">
                {currentTool.desc}
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenGetStarted}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#00B879]/20 hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <span>Explore {currentTool.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Stage: Interactive High-Fidelity Tool Mockup (7 cols) */}
            <div className="lg:col-span-7 bg-[#F4F6F3] rounded-2xl border border-[#D9DED8] p-4 sm:p-5 shadow-xs overflow-hidden">
              
              {/* Tool 1: Sales Tracker Live Dashboard */}
              {activeTab === "sales-tracker" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="bg-white rounded-xl p-4 border border-[#E2E6E4] shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-[#F0F2F5] text-xs flex-wrap gap-2">
                      <div className="flex items-center gap-2 font-bold text-[#171923]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#00B879] animate-pulse" />
                        <span>Sales Tracking Dashboard</span>
                        <span className="text-[11px] text-[#5A6270] font-normal">· Store: store.yourbrand.in</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#F4F6F3] p-1 rounded-lg text-[10px] font-semibold text-[#5A6270]">
                        <span className="bg-white px-2 py-0.5 rounded shadow-2xs font-bold text-[#171923]">Today</span>
                        <span className="px-2 py-0.5">7D</span>
                        <span className="px-2 py-0.5">30D</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 py-3 my-2 border-b border-[#F0F2F5]">
                      <div>
                        <div className="text-[10px] text-[#5A6270] uppercase font-bold">Total Sales</div>
                        <div className="text-lg font-bold font-mono text-[#00B879]">₹1,28,450.70</div>
                        <div className="text-[10px] text-[#008F60] font-semibold mt-0.5">↗ +18.4% vs yesterday</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#5A6270] uppercase font-bold">Orders Volume</div>
                        <div className="text-lg font-bold font-mono text-[#171923]">342 orders</div>
                        <div className="text-[10px] text-[#008F60] font-semibold mt-0.5">↗ +24 new orders/hr</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#5A6270] uppercase font-bold">Avg Order Value</div>
                        <div className="text-lg font-bold font-mono text-[#171923]">₹2,499.00</div>
                        <div className="text-[10px] text-[#5A6270] font-medium mt-0.5">UPI & Card verified</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[11px] font-bold text-[#171923]">Hourly Sales Velocity</div>
                      <div className="flex items-end gap-1.5 h-16 pt-2 px-2 bg-[#F4F6F3] rounded-xl">
                        <div className="flex-1 bg-[#D9DED8] h-5 rounded-t-sm" />
                        <div className="flex-1 bg-[#D9DED8] h-8 rounded-t-sm" />
                        <div className="flex-1 bg-[#D9DED8] h-6 rounded-t-sm" />
                        <div className="flex-1 bg-[#00B879]/50 h-11 rounded-t-sm" />
                        <div className="flex-1 bg-[#00B879]/70 h-13 rounded-t-sm" />
                        <div className="flex-1 bg-[#00B879] h-16 rounded-t-sm" />
                        <div className="flex-1 bg-[#00B879] h-14 rounded-t-sm" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tool 2: Portfolio Dashboard */}
              {activeTab === "portfolio" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="bg-white rounded-xl p-4 border border-[#E2E6E4] shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-[#F0F2F5] text-xs">
                      <div className="flex items-center gap-2 font-bold text-[#171923]">
                        <Bookmark className="w-4 h-4 text-[#00B879]" />
                        <span>Saved Portfolios</span>
                        <span className="text-[11px] bg-[#E8F8F1] text-[#008F60] px-2 py-0.5 rounded-full font-bold">4 Active Folders</span>
                      </div>
                      <span className="text-[10px] text-[#5A6270]">Auto-syncs hourly</span>
                    </div>

                    <div className="space-y-2.5 mt-3">
                      <div className="p-3 bg-[#F4F6F3] rounded-xl flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center font-bold text-emerald-800">
                            🌿
                          </div>
                          <div>
                            <div className="font-bold text-[#171923]">Eco Lifestyle & Home</div>
                            <div className="text-[11px] text-[#5A6270]">14 tracked stores · 89 products</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold font-mono text-[#00B879]">₹42,80,000/mo</div>
                          <div className="text-[10px] text-[#008F60] font-semibold">↗ +28.4%</div>
                        </div>
                      </div>

                      <div className="p-3 bg-[#F4F6F3] rounded-xl flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center font-bold text-indigo-800">
                            ⚡
                          </div>
                          <div>
                            <div className="font-bold text-[#171923]">Smart Electronics & Gadgets</div>
                            <div className="text-[11px] text-[#5A6270]">9 tracked stores · 45 products</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold font-mono text-[#00B879]">₹68,50,000/mo</div>
                          <div className="text-[10px] text-[#008F60] font-semibold">↗ +34.2%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tool 3: Shop Library */}
              {activeTab === "shop-library" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="bg-white rounded-xl p-4 border border-[#E2E6E4] shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-[#F0F2F5] text-xs">
                      <div className="flex items-center gap-2 font-bold text-[#171923]">
                        <Search className="w-4 h-4 text-[#00B879]" />
                        <span>Search Shop Database</span>
                      </div>
                      <span className="text-[10px] text-[#5A6270] font-mono">2,400+ Verified Indian Stores</span>
                    </div>

                    <div className="space-y-2 mt-3 text-xs">
                      <div className="grid grid-cols-12 p-2 bg-[#F4F6F3] rounded-lg font-bold text-[#5A6270] text-[10px] uppercase">
                        <span className="col-span-5">Store Domain</span>
                        <span className="col-span-4 text-right">Daily Revenue</span>
                        <span className="col-span-3 text-right">Apps Used</span>
                      </div>

                      <div className="grid grid-cols-12 p-2.5 rounded-lg border border-[#E2E6E4] items-center text-xs">
                        <div className="col-span-5 font-bold text-[#171923] truncate">kaverilifestyle.in</div>
                        <div className="col-span-4 text-right font-mono font-bold text-[#00B879]">₹1,12,947/day</div>
                        <div className="col-span-3 text-right text-[10px] text-[#5A6270]">Shopify, UPI, WA</div>
                      </div>

                      <div className="grid grid-cols-12 p-2.5 rounded-lg border border-[#E2E6E4] items-center text-xs">
                        <div className="col-span-5 font-bold text-[#171923] truncate">jaipurjewels.store</div>
                        <div className="col-span-4 text-right font-mono font-bold text-[#00B879]">₹88,450/day</div>
                        <div className="col-span-3 text-right text-[10px] text-[#5A6270]">Custom, Razorpay</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tool 4: Competitors */}
              {activeTab === "competitors" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="bg-white rounded-xl p-4 border border-[#E2E6E4] shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-[#F0F2F5] text-xs">
                      <div className="flex items-center gap-2 font-bold text-[#171923]">
                        <span className="font-bold">Competitor Benchmarking</span>
                      </div>
                      <span className="text-[10px] bg-[#E8F8F1] text-[#008F60] px-2 py-0.5 rounded font-bold">3 Brands Tracked</span>
                    </div>

                    <div className="mt-3 space-y-2 text-xs">
                      <div className="p-3 bg-[#F4F6F3] rounded-xl flex items-center justify-between">
                        <div>
                          <div className="font-bold text-[#171923]">Brand A (Ceramics)</div>
                          <div className="text-[11px] text-[#5A6270]">Avg Price: ₹1,899 · 42 Catalog Items</div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">Price cut 8%</span>
                        </div>
                      </div>

                      <div className="p-3 bg-[#F4F6F3] rounded-xl flex items-center justify-between">
                        <div>
                          <div className="font-bold text-[#171923]">Brand B (Home Decor)</div>
                          <div className="text-[11px] text-[#5A6270]">Avg Price: ₹2,499 · 88 Catalog Items</div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">+12 New SKUs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tool 5: Ad Library */}
              {activeTab === "ad-library" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="bg-white rounded-xl p-4 border border-[#E2E6E4] shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-[#F0F2F5] text-xs">
                      <div className="flex items-center gap-2 font-bold text-[#171923]">
                        <InstagramLogo className="w-4 h-4" />
                        <span>Active Ad Creative Feed</span>
                      </div>
                      <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">Meta & TikTok</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-3 text-xs">
                      <div className="p-2.5 bg-[#F4F6F3] rounded-xl space-y-2">
                        <div className="h-20 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 font-bold text-xs">
                          <Play className="w-6 h-6 text-slate-500 fill-slate-500" />
                        </div>
                        <div className="font-bold text-[#171923] truncate">Video Ad: Portable Blender</div>
                        <div className="flex justify-between text-[10px] text-[#5A6270]">
                          <span>Active: 42 days</span>
                          <span className="text-[#008F60] font-bold">98% Hook</span>
                        </div>
                      </div>

                      <div className="p-2.5 bg-[#F4F6F3] rounded-xl space-y-2">
                        <div className="h-20 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 font-bold text-xs">
                          <Play className="w-6 h-6 text-slate-500 fill-slate-500" />
                        </div>
                        <div className="font-bold text-[#171923] truncate">UGC Hook: Thermal Flask</div>
                        <div className="flex justify-between text-[10px] text-[#5A6270]">
                          <span>Active: 28 days</span>
                          <span className="text-[#008F60] font-bold">92% Hook</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tool 6: Product Library */}
              {activeTab === "product-library" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="bg-white rounded-xl p-4 border border-[#E2E6E4] shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-[#F0F2F5] text-xs">
                      <div className="flex items-center gap-2 font-bold text-[#171923]">
                        <span>Winning Product Database</span>
                      </div>
                      <span className="text-[10px] text-[#008F60] font-bold">Verified Sales Velocity</span>
                    </div>

                    <div className="space-y-2.5 mt-3 text-xs">
                      <div className="p-3 bg-[#F4F6F3] rounded-xl flex items-center justify-between">
                        <div>
                          <div className="font-bold text-[#171923]">Kids ATM Piggy Bank</div>
                          <div className="text-[11px] text-[#5A6270]">Cost: ₹899 · Sell: ₹2,499 · Margin: 64%</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold font-mono text-[#00B879]">₹1,28,450/mo</div>
                          <span className="text-[10px] text-[#008F60] font-bold">High Demand</span>
                        </div>
                      </div>

                      <div className="p-3 bg-[#F4F6F3] rounded-xl flex items-center justify-between">
                        <div>
                          <div className="font-bold text-[#171923]">Portable Bottle Warmer</div>
                          <div className="text-[11px] text-[#5A6270]">Cost: ₹950 · Sell: ₹2,699 · Margin: 65%</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold font-mono text-[#00B879]">₹1,12,947/mo</div>
                          <span className="text-[10px] text-[#008F60] font-bold">Trending Up</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tool 7: Advertiser Tracker */}
              {activeTab === "advertiser-tracker" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="bg-white rounded-xl p-4 border border-[#E2E6E4] shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-[#F0F2F5] text-xs">
                      <div className="flex items-center gap-2 font-bold text-[#171923]">
                        <GoogleAdsLogo className="w-4 h-4" />
                        <span>Advertiser Spend Monitor</span>
                      </div>
                      <span className="text-[10px] text-[#5A6270]">Real-time ad scaling</span>
                    </div>

                    <div className="space-y-2 mt-3 text-xs">
                      <div className="p-3 bg-[#F4F6F3] rounded-xl flex items-center justify-between">
                        <div>
                          <div className="font-bold text-[#171923]">Apex Direct Ad Account</div>
                          <div className="text-[11px] text-[#5A6270]">18 active campaigns across Meta & Google</div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">Scaling Up (+45%)</span>
                        </div>
                      </div>

                      <div className="p-3 bg-[#F4F6F3] rounded-xl flex items-center justify-between">
                        <div>
                          <div className="font-bold text-[#171923]">Urban Living Store</div>
                          <div className="text-[11px] text-[#5A6270]">6 new video creatives launched this week</div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">Testing Angles</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tool 8: Magic AI Search */}
              {activeTab === "magic-ai-search" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="bg-white rounded-xl p-4 border border-[#E2E6E4] shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-[#F0F2F5] text-xs">
                      <div className="flex items-center gap-2 font-bold text-[#171923]">
                        <Sparkles className="w-4 h-4 text-[#00B879]" />
                        <span>Magic AI Natural Language Search</span>
                      </div>
                      <span className="text-[10px] bg-[#E8F8F1] text-[#008F60] px-2 py-0.5 rounded font-bold">AI Powered</span>
                    </div>

                    <div className="mt-3 space-y-3">
                      <div className="flex items-center gap-2 p-3 bg-[#F4F6F3] rounded-xl border border-[#D9DED8]">
                        <Search className="w-4 h-4 text-[#5A6270]" />
                        <span className="text-xs text-[#171923] font-medium">
                          Find stores selling eco-friendly products making &gt;₹15L/month with UPI checkout
                        </span>
                      </div>

                      <div className="p-3 bg-[#E8F8F1]/40 border border-[#00B879]/20 rounded-xl space-y-1.5 text-xs">
                        <div className="font-bold text-[#008F60] flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#00B879]" />
                          <span>AI Found 18 Matching High-Growth Opportunities:</span>
                        </div>
                        <div className="text-[11px] text-[#171923] pl-5 space-y-1">
                          <div>• 8 stores in Bamboo & Eco Kitchenware (Avg Margin: 68%)</div>
                          <div>• 6 stores in Ayurvedic Organic Wellness (Avg Monthly: ₹24,50,000)</div>
                          <div>• 4 stores in Handloom Apparel with &gt;42% repeat purchase rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Bottom Stage: 3 Distinct Feature Metric Pillars */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentTool.highlights.map((h, i) => (
              <div key={i} className="space-y-1">
                <div className="text-sm font-bold text-[#171923] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B879]" />
                  <span>{h.title}</span>
                </div>
                <p className="text-xs text-[#5A6270] leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
