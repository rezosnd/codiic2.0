"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Monitor,
  Tablet,
  Smartphone,
  ArrowRight,
  Sparkles,
  Send,
  Zap,
  Check,
  CheckCircle2,
  LayoutTemplate,
  ShoppingBag,
  MessageSquare,
  Search,
  ShieldCheck,
} from "lucide-react";
import {
  WebsiteBuilderColorIcon,
  CustomerCrmColorIcon,
  AutomationColorIcon,
} from "./ColorfulProductIcons";
import { WhatsAppLogo, RazorpayLogo } from "./BrandLogos";

interface WebsiteBuilderSectionProps {
  onOpenGetStarted: () => void;
}

export const WebsiteBuilderSection: React.FC<WebsiteBuilderSectionProps> = ({
  onOpenGetStarted,
}) => {
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [activeBlock, setActiveBlock] = useState<"hero" | "products" | "proof" | "contact">("hero");
  const [isPublished, setIsPublished] = useState(false);
  const [activeTheme, setActiveTheme] = useState<"emerald" | "slate">("emerald");

  const componentsList = [
    { id: "hero", label: "Hero Banner", tag: "Main", icon: LayoutTemplate },
    { id: "products", label: "Product Grid", tag: "Store", icon: ShoppingBag },
    { id: "proof", label: "Client Proof", tag: "Trust", icon: ShieldCheck },
    { id: "contact", label: "CRM Form", tag: "Leads", icon: MessageSquare },
  ] as const;

  const features = [
    {
      icon: WebsiteBuilderColorIcon,
      title: "Visual Drag & Drop",
      desc: "Pre-crafted storefront, catalog & intake modules with zero coding required.",
    },
    {
      icon: AutomationColorIcon,
      title: "Zero Broken Layouts",
      desc: "Fluid responsive rendering on all mobile phones, tablets, and desktop viewports.",
    },
    {
      icon: CustomerCrmColorIcon,
      title: "WhatsApp & CRM Connected",
      desc: "Every buyer inquiry and UPI checkout flows directly into your sales pipeline.",
    },
  ];

  return (
    <section
      id="website-builder"
      aria-labelledby="builder-heading"
      className="py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F7F9F8] to-white border-b border-[#E8EAF0] relative overflow-hidden"
    >
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* ── Section Header (Mobile-Friendly & Concise) ── */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-[#008F60] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3">
            <WebsiteBuilderColorIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span>Storefront & Website Studio</span>
          </div>

          <h2
            id="builder-heading"
            className="text-[24px] xs:text-[28px] sm:text-[42px] lg:text-[50px] font-extrabold text-[#171923] tracking-[-0.03em] leading-[1.1] mb-2.5 sm:mb-3"
          >
            A professional website.{" "}
            <em className="font-serif italic font-normal text-[#008F60] not-italic">
              Without the complexity.
            </em>
          </h2>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8E5] shadow-2xs text-[11px] sm:text-xs font-semibold text-[#171923] mb-3">
            <Sparkles className="w-3 h-3 text-[#00B879]" />
            <span>Code ka jhanjhat khatam. Launch in minutes.</span>
          </div>

          <p className="text-[13px] sm:text-[15px] lg:text-[16px] text-[#5A6270] leading-relaxed max-w-lg mx-auto px-2">
            Design and publish high-converting storefronts, landing pages, and lead intake forms — connected straight to your WhatsApp and sales CRM.
          </p>

          {/* Quick CTA */}
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={onOpenGetStarted}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#00B879]/25 transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <span>Explore Storefront & Website Builder</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-[11px] sm:text-xs font-semibold text-[#5A6270]">
              Included in all plans — <strong className="text-[#008F60]">₹1/day</strong>
            </span>
          </div>
        </div>

        {/* ── Studio Frame (Mobile-Perfect Light Theme with Official Logo) ── */}
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#D9E2DC] shadow-[0_20px_50px_-15px_rgba(0,184,121,0.1),0_8px_25px_-8px_rgba(23,25,35,0.06)] overflow-hidden">
            
            {/* ── Window Top Bar: Clean & Non-Cramped on Mobile ── */}
            <div className="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 border-b border-[#E5ECE7] bg-[#FAFCFA]">
              
              {/* Left: Window Dots + Real CODIIC Logo */}
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 inline-block" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 inline-block" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 inline-block" />
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 pl-2 sm:pl-3 border-l border-[#E2E8E5]">
                  {/* Real Official CODIIC Logo with Text */}
                  <div className="relative h-5 sm:h-6 w-24 sm:w-32 shrink-0">
                    <Image
                      src="/logo_with_text.png"
                      alt="CODIIC Official"
                      fill
                      priority
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="hidden sm:inline px-1.5 py-0.5 rounded bg-[#E8F8F1] text-[#008F60] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                    Studio
                  </span>
                </div>
              </div>

              {/* Center: Device Viewport Toggles (desktop/tablet) */}
              <div className="hidden sm:flex items-center gap-1 bg-[#EEF2EF] p-1 rounded-xl border border-[#DFE5E1]">
                <button
                  type="button"
                  onClick={() => setDeviceView("desktop")}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    deviceView === "desktop"
                      ? "bg-white text-[#171923] shadow-xs"
                      : "text-[#5A6270] hover:text-[#171923]"
                  }`}
                  title="Desktop Preview"
                >
                  <Monitor className="w-3.5 h-3.5 text-[#008F60]" />
                  <span className="hidden md:inline text-[11px]">Desktop</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceView("tablet")}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    deviceView === "tablet"
                      ? "bg-white text-[#171923] shadow-xs"
                      : "text-[#5A6270] hover:text-[#171923]"
                  }`}
                  title="Tablet Preview"
                >
                  <Tablet className="w-3.5 h-3.5 text-[#008F60]" />
                  <span className="hidden md:inline text-[11px]">Tablet</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceView("mobile")}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    deviceView === "mobile"
                      ? "bg-white text-[#171923] shadow-xs"
                      : "text-[#5A6270] hover:text-[#171923]"
                  }`}
                  title="Mobile Preview"
                >
                  <Smartphone className="w-3.5 h-3.5 text-[#008F60]" />
                  <span className="hidden md:inline text-[11px]">Mobile</span>
                </button>
              </div>

              {/* Right: Publish Live Button */}
              <div className="flex items-center gap-2">
                <span className="hidden lg:flex items-center gap-1.5 text-[11px] text-[#5A6270]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B879]" />
                  <span>Auto-saved</span>
                </span>

                <button
                  type="button"
                  onClick={() => setIsPublished(!isPublished)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all duration-200 cursor-pointer active:scale-95 ${
                    isPublished
                      ? "bg-[#171923] text-white"
                      : "bg-[#00B879] hover:bg-[#008F60] text-white shadow-[#00B879]/25"
                  }`}
                >
                  <Send className="w-3 h-3" />
                  <span>{isPublished ? "Live ✓" : "Publish"}</span>
                </button>
              </div>
            </div>

            {/* ── Mobile-Only Section Selector Bar (Touch-Friendly Horizontal Tabs) ── */}
            <div className="md:hidden flex items-center gap-1.5 p-2 bg-[#F7F9F8] border-b border-[#E5ECE7] overflow-x-auto no-scrollbar">
              <span className="text-[10px] font-bold text-[#5A6270] uppercase px-1 shrink-0">
                Section:
              </span>
              {componentsList.map((item) => {
                const Icon = item.icon;
                const isSelected = activeBlock === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveBlock(item.id)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#00B879] text-white shadow-xs"
                        : "bg-white text-[#5A6270] border border-[#E2E8E5]"
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* ── Studio Body ── */}
            <div className="grid grid-cols-12 bg-[#F3F6F4]">
              
              {/* Left Column: Sections Library (Desktop & Tablet) */}
              <aside className="hidden md:block md:col-span-3 lg:col-span-3 bg-white border-r border-[#E5ECE7] p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#EEF2EF]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#171923]">
                      Page Sections
                    </span>
                    <span className="text-[10px] font-mono text-[#008F60] bg-[#E8F8F1] px-1.5 py-0.5 rounded">
                      4 Ready
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {componentsList.map((item) => {
                      const Icon = item.icon;
                      const isSelected = activeBlock === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveBlock(item.id)}
                          className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between cursor-pointer border ${
                            isSelected
                              ? "bg-[#E8F8F1] border-[#00B879]/40 text-[#008F60] shadow-xs"
                              : "bg-[#FAFCFA] hover:bg-[#F2F5F3] border-[#E8EEEA] text-[#171923]"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className={`w-4 h-4 ${isSelected ? "text-[#008F60]" : "text-[#5A6270]"}`} />
                            <span className="text-xs font-bold">{item.label}</span>
                          </div>
                          <span
                            className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${
                              isSelected
                                ? "bg-white text-[#008F60]"
                                : "bg-[#EEF2EF] text-[#5A6270]"
                            }`}
                          >
                            {item.tag}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Live Sync Info Card */}
                <div className="p-3 rounded-xl bg-[#F7F9F8] border border-[#E5ECE7] text-[11px]">
                  <div className="flex items-center gap-1.5 text-[#008F60] font-bold mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#00B879] animate-pulse" />
                    <span>Instant CRM & WhatsApp</span>
                  </div>
                  <p className="text-[10.5px] text-[#5A6270] leading-snug">
                    Customer clicks & inquiries sync in real-time with zero extra plugins.
                  </p>
                </div>
              </aside>

              {/* Center Canvas: Live Preview */}
              <div className="col-span-12 md:col-span-9 lg:col-span-6 p-2.5 sm:p-5 flex flex-col items-center justify-center overflow-x-hidden">
                <div
                  className={`w-full transition-all duration-300 rounded-xl sm:rounded-2xl bg-white border border-[#DCE4DF] shadow-xs sm:shadow-md overflow-hidden flex flex-col ${
                    deviceView === "mobile"
                      ? "max-w-[340px]"
                      : deviceView === "tablet"
                      ? "max-w-[540px]"
                      : "max-w-full"
                  }`}
                >
                  {/* Storefront Mini Browser Header */}
                  <div className="px-3 sm:px-3.5 py-2 sm:py-2.5 bg-[#F9FBF9] border-b border-[#E8EEEA] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] sm:text-xs font-extrabold tracking-tight text-[#171923]">
                        AURA LIVING
                      </span>
                      <span className="text-[8px] sm:text-[9px] text-[#008F60] bg-[#E8F8F1] px-1.5 py-0.2 rounded font-semibold">
                        SSL Live
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[#5A6270]">
                      <Search className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#171923]">
                        <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span>(3)</span>
                      </div>
                    </div>
                  </div>

                  {/* Canvas Viewport Content */}
                  <div className="p-3.5 sm:p-5 flex-1 min-h-[260px] sm:min-h-[300px] flex flex-col justify-between">
                    {activeBlock === "hero" && (
                      <div className="space-y-2.5 sm:space-y-3.5 my-auto text-center py-2">
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8F8F1] text-[#008F60] text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider">
                          <Sparkles className="w-3 h-3 text-[#00B879]" />
                          Festive Home Collection
                        </div>
                        <h3 className="text-base sm:text-xl lg:text-2xl font-extrabold text-[#171923] tracking-tight leading-tight">
                          Modern Sustainable Home Decor
                        </h3>
                        <p className="text-[11px] sm:text-xs text-[#5A6270] max-w-sm mx-auto leading-relaxed">
                          Handcrafted lifestyle essentials designed for contemporary Indian homes. Free delivery nationwide.
                        </p>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 pt-1 w-full max-w-xs mx-auto">
                          <button
                            type="button"
                            onClick={onOpenGetStarted}
                            className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#00B879] text-white text-xs font-bold shadow-xs flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <span>Shop Collection</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                          <div className="w-full sm:w-auto px-3.5 py-2 rounded-full bg-[#E8F8F1] text-[#008F60] text-xs font-semibold flex items-center justify-center gap-1.5">
                            <WhatsAppLogo className="w-3.5 h-3.5" />
                            <span>WhatsApp Buy</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeBlock === "products" && (
                      <div className="space-y-2.5 my-auto">
                        <div className="flex items-center justify-between pb-1 border-b border-[#EEF2EF]">
                          <span className="text-[11px] sm:text-xs font-bold text-[#171923]">Bestselling Products</span>
                          <span className="text-[9px] sm:text-[10px] text-[#008F60] font-semibold">UPI Instant Pay</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-left">
                          <div className="p-2 sm:p-2.5 rounded-xl bg-[#F7F9F8] border border-[#E5ECE7]">
                            <div className="w-full aspect-[4/3] rounded-lg bg-[#E2EAE5] mb-1.5 flex items-center justify-center text-[10px] sm:text-xs font-bold text-[#008F60]">
                              Ceramic Vase
                            </div>
                            <div className="text-[10px] sm:text-[11px] font-bold text-[#171923] truncate">Nordic Glaze Set</div>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-[11px] sm:text-xs font-extrabold text-[#008F60]">₹1,499</span>
                              <span className="text-[8.5px] sm:text-[9px] bg-[#00B879] text-white px-1.5 py-0.5 rounded font-bold">Add</span>
                            </div>
                          </div>
                          <div className="p-2 sm:p-2.5 rounded-xl bg-[#F7F9F8] border border-[#E5ECE7]">
                            <div className="w-full aspect-[4/3] rounded-lg bg-[#E2EAE5] mb-1.5 flex items-center justify-center text-[10px] sm:text-xs font-bold text-[#008F60]">
                              Linen Throw
                            </div>
                            <div className="text-[10px] sm:text-[11px] font-bold text-[#171923] truncate">Handloom Cotton</div>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-[11px] sm:text-xs font-extrabold text-[#008F60]">₹2,199</span>
                              <span className="text-[8.5px] sm:text-[9px] bg-[#00B879] text-white px-1.5 py-0.5 rounded font-bold">Add</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeBlock === "proof" && (
                      <div className="space-y-2.5 text-center my-auto py-2">
                        <div className="inline-block text-[9px] sm:text-[10px] font-bold text-[#008F60] uppercase tracking-wider bg-[#E8F8F1] px-2.5 py-0.5 rounded-full">
                          4.9 ★ from 1,280+ Customers
                        </div>
                        <div className="p-3 rounded-xl bg-[#F7F9F8] border border-[#E5ECE7] text-[11px] sm:text-xs text-[#171923] italic leading-relaxed">
                          &quot;Order confirmation arrived on WhatsApp in 3 seconds. The checkout experience is smoother than any big brand site.&quot;
                        </div>
                        <div className="text-[10px] sm:text-[11px] font-bold text-[#171923]">
                          Ananya Roy <span className="font-normal text-[#5A6270]">· Verified Buyer</span>
                        </div>
                      </div>
                    )}

                    {activeBlock === "contact" && (
                      <div className="space-y-2 max-w-xs mx-auto text-left my-auto w-full py-1">
                        <div className="text-center text-[11px] sm:text-xs font-bold text-[#171923]">
                          Inquiry Form (Synced to CRM)
                        </div>
                        <input
                          type="text"
                          disabled
                          placeholder="Your Name"
                          className="w-full text-[11px] px-3 py-2 rounded-lg border border-[#DCE4DF] bg-[#FAFCFA]"
                        />
                        <input
                          type="tel"
                          disabled
                          placeholder="WhatsApp Phone Number"
                          className="w-full text-[11px] px-3 py-2 rounded-lg border border-[#DCE4DF] bg-[#FAFCFA]"
                        />
                        <button
                          type="button"
                          className="w-full py-2 rounded-lg bg-[#00B879] text-white text-[11px] sm:text-xs font-bold text-center"
                        >
                          Send Inquiry · Auto-reply in 0.4s
                        </button>
                      </div>
                    )}

                    {/* Canvas Floating Footer */}
                    <div className="pt-2.5 border-t border-[#EEF2EF] flex items-center justify-between text-[9px] sm:text-[10px] text-[#5A6270]">
                      <div className="flex items-center gap-1 font-semibold text-[#008F60]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00B879]" />
                        <span>Live Sync Active</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#171923] font-bold">
                        <RazorpayLogo className="w-3 h-3" />
                        <span>UPI Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Health & SEO Meter (Desktop only) */}
              <aside className="hidden lg:block lg:col-span-3 bg-white border-l border-[#E5ECE7] p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#EEF2EF]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#171923]">
                      Page Health
                    </span>
                    <span className="text-[10px] font-bold text-[#008F60]">Live</span>
                  </div>

                  {/* SEO Score Meter */}
                  <div className="p-3.5 rounded-xl bg-[#F7F9F8] border border-[#E5ECE7] text-center mb-4">
                    <div className="text-2xl font-black text-[#008F60] leading-none mb-0.5">
                      98<span className="text-xs font-semibold text-[#5A6270]">/100</span>
                    </div>
                    <div className="text-[10px] font-bold text-[#171923] mb-1.5">
                      Google Core Web Vitals
                    </div>
                    <div className="space-y-1 text-[10px] text-[#5A6270] text-left">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-[#00B879] shrink-0" />
                        <span>Mobile PageSpeed: 0.4s LCP</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-[#00B879] shrink-0" />
                        <span>Auto-generated Meta Tags</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-[#00B879] shrink-0" />
                        <span>Structured Schema Markup</span>
                      </div>
                    </div>
                  </div>

                  {/* Design Tokens Theme Switcher */}
                  <div className="space-y-2 text-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A6270]">
                      Brand Tokens
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveTheme("emerald")}
                        className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-bold border transition-colors ${
                          activeTheme === "emerald"
                            ? "bg-[#E8F8F1] border-[#00B879] text-[#008F60]"
                            : "bg-[#FAFCFA] border-[#E5ECE7] text-[#5A6270]"
                        }`}
                      >
                        Emerald
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTheme("slate")}
                        className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-bold border transition-colors ${
                          activeTheme === "slate"
                            ? "bg-[#E8F8F1] border-[#00B879] text-[#008F60]"
                            : "bg-[#FAFCFA] border-[#E5ECE7] text-[#5A6270]"
                        }`}
                      >
                        Minimal
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#EEF2EF] text-[10.5px] text-[#5A6270] flex items-center justify-between">
                  <span>Custom Domain</span>
                  <span className="font-mono text-[#008F60] font-bold">yourbrand.in</span>
                </div>
              </aside>

            </div>

          </div>
        </div>

        {/* ── 3 Sleek Feature Highlights (Mobile Optimized) ── */}
        <div className="mt-6 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="group p-3.5 sm:p-5 rounded-2xl bg-[#F7F9F8] hover:bg-white border border-[#E2E8E5] hover:border-[#00B879]/40 shadow-2xs hover:shadow-xl hover:shadow-[#00B879]/10 transition-all duration-300 flex items-start gap-3 sm:gap-3.5"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center drop-shadow-xs group-hover:scale-105 transition-transform">
                  <Icon className="w-9 h-9 sm:w-10 sm:h-10 shrink-0" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#171923] group-hover:text-[#008F60] transition-colors leading-tight mb-0.5 sm:mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-[11px] sm:text-[11.5px] text-[#555A68] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
