"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Monitor,
  Tablet,
  Smartphone,
  ChevronDown,
  Globe,
  LayoutTemplate,
  LayoutGrid,
  FormInput,
  Star,
  ListChecks,
  Tags,
  ShoppingBag,
  Zap,
  ArrowRight,
  Check,
  PhoneCall,
  FileText,
} from "lucide-react";

type Viewport = "desktop" | "tablet" | "mobile";

const VIEWPORTS: { id: Viewport; label: string; icon: React.ComponentType<{ className?: string }>; maxWidth: string }[] = [
  { id: "desktop", label: "Desktop", icon: Monitor, maxWidth: "max-w-none" },
  { id: "tablet", label: "Tablet", icon: Tablet, maxWidth: "max-w-[540px]" },
  { id: "mobile", label: "Mobile", icon: Smartphone, maxWidth: "max-w-[320px]" },
];

const BLOCKS = [
  { id: "hero", label: "Hero Banner", icon: LayoutTemplate },
  { id: "grid", label: "Product Grid", icon: LayoutGrid },
  { id: "form", label: "Lead Capture Form", icon: FormInput },
  { id: "proof", label: "Client Proof", icon: Star },
  { id: "faq", label: "FAQ Accordion", icon: ListChecks },
  { id: "pricing", label: "Pricing Table", icon: Tags },
];

const FEED_EVENTS = [
  {
    icon: FormInput,
    title: "Form Submitted",
    desc: "Deal created in CRM 360 Pipeline",
    tag: "CRM 360",
  },
  {
    icon: ShoppingBag,
    title: "Checkout Paid (₹1,499)",
    desc: "Order logged + WhatsApp receipt sent in 0.4s",
    tag: "Orders",
  },
  {
    icon: Zap,
    title: "Buy Now clicked",
    desc: "WhatsApp catalog shared instantly",
    tag: "Inbox",
  },
  {
    icon: Globe,
    title: "New visitor from Meta Ad",
    desc: "UTM captured & tagged in CRM 360",
    tag: "CRM 360",
  },
  {
    icon: PhoneCall,
    title: "Lead qualified",
    desc: "Bulk AI Voice follow-up scheduled",
    tag: "AI Voice",
  },
  {
    icon: FileText,
    title: "Refund Policy viewed",
    desc: "Engagement logged on customer profile",
    tag: "Analytics",
  },
];

interface FeedItem {
  key: number;
  event: (typeof FEED_EVENTS)[number];
}

const BlockLabel: React.FC<{ label: string }> = ({ label }) => (
  <span className="absolute -top-2.5 left-3 z-10 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#00B879] text-white opacity-0 group-hover/block:opacity-100 transition-opacity pointer-events-none shadow-sm">
    {label}
  </span>
);

const StudioBlock: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="group/block relative rounded-xl ring-1 ring-transparent hover:ring-[#00B879]/50 hover:shadow-[0_0_0_4px_rgba(0,184,121,0.08)] transition-all">
    <BlockLabel label={label} />
    {children}
  </div>
);

export const StudioMockup: React.FC = () => {
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [activeBlocks, setActiveBlocks] = useState<string[]>(["hero", "proof", "grid", "form"]);
  const [feed, setFeed] = useState<FeedItem[]>([
    { key: 0, event: FEED_EVENTS[0] },
    { key: 1, event: FEED_EVENTS[1] },
  ]);
  const feedCounter = useRef(2);
  const eventIndex = useRef(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setFeed((curr) => {
        const next = [
          { key: feedCounter.current++, event: FEED_EVENTS[eventIndex.current % FEED_EVENTS.length] },
          ...curr,
        ];
        eventIndex.current += 1;
        return next.slice(0, 4);
      });
    }, 3400);
    return () => clearInterval(timer);
  }, []);

  const toggleBlock = (id: string) =>
    setActiveBlocks((curr) =>
      curr.includes(id) ? curr.filter((b) => b !== id) : [...curr, id]
    );

  const isActive = (id: string) => activeBlocks.includes(id);
  const vp = VIEWPORTS.find((v) => v.id === viewport)!;

  return (
    <div className="rounded-[24px] bg-white border border-[#E2E6E4] shadow-[0_30px_70px_-30px_rgba(23,25,35,0.25)] overflow-hidden">
      {/* ── Top Toolbar ─────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 border-b border-[#EEF0EE] bg-[#FAFBFA]">
        {/* Theme selector */}
        <button
          type="button"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E2E6E4] text-xs font-bold text-[#171923] hover:border-[#00B879]/50 transition-colors cursor-pointer"
        >
          <span className="w-4 h-4 rounded-md bg-gradient-to-br from-[#00B879] to-[#008F60]" />
          Aura Living
          <ChevronDown className="w-3.5 h-3.5 text-[#5A6270]" />
        </button>

        {/* Viewport switcher */}
        <div className="inline-flex items-center gap-1 p-1 rounded-full bg-white border border-[#E2E6E4]">
          {VIEWPORTS.map((v) => {
            const Icon = v.icon;
            const selected = viewport === v.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setViewport(v.id)}
                aria-pressed={selected}
                className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  selected
                    ? "bg-[#171923] text-white shadow-sm"
                    : "text-[#5A6270] hover:text-[#171923]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{v.label}</span>
              </button>
            );
          })}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <span className="hidden sm:inline text-[10px] font-semibold text-[#8A919C]">
            Draft saved · just now
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00B879] text-white text-[11px] font-bold shadow-sm shadow-[#00B879]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Publish Live
          </span>
        </div>
      </div>

      {/* ── 3-Column Studio Body ────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left: Blocks & Sections */}
        <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-[#EEF0EE] bg-[#FAFBFA] p-4">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#8A919C] mb-3 flex items-center justify-between">
            Blocks &amp; Sections
            <span className="text-[9px] font-semibold text-[#008F60] bg-[#E8F8F1] px-1.5 py-0.5 rounded-full">
              {activeBlocks.length} active
            </span>
          </div>
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible no-scrollbar">
            {BLOCKS.map((block) => {
              const Icon = block.icon;
              const on = isActive(block.id);
              return (
                <button
                  key={block.id}
                  type="button"
                  onClick={() => toggleBlock(block.id)}
                  aria-pressed={on}
                  className={`shrink-0 flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-[12px] font-bold transition-all cursor-pointer lg:w-full ${
                    on
                      ? "bg-white border-[#00B879]/60 text-[#171923] shadow-sm"
                      : "bg-white/60 border-[#E2E6E4] text-[#8A919C] hover:text-[#5A6270] hover:border-[#C9D0CC]"
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      on ? "bg-[#E8F8F1] text-[#008F60]" : "bg-[#F1F3F2] text-[#8A919C]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                  <span className="whitespace-nowrap">{block.label}</span>
                  <span
                    className={`ml-auto hidden lg:flex w-4 h-4 rounded-full items-center justify-center shrink-0 ${
                      on ? "bg-[#00B879] text-white" : "bg-[#EEF0EE] text-[#C9D0CC]"
                    }`}
                  >
                    <Check className="w-2.5 h-2.5" strokeWidth={3.5} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Center: Live Storefront Canvas */}
        <div className="lg:col-span-6 bg-[#F1F3F2] p-4 sm:p-5 flex justify-center">
          <div
            className={`w-full ${vp.maxWidth} mx-auto transition-all duration-500 ease-out bg-white rounded-2xl border border-[#E2E6E4] shadow-[0_16px_40px_-20px_rgba(23,25,35,0.25)] overflow-hidden`}
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#FAFBFA] border-b border-[#EEF0EE]">
              <span className="flex gap-1">
                <i className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                <i className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
                <i className="w-2 h-2 rounded-full bg-[#28C840]" />
              </span>
              <span className="flex-1 min-w-0 text-center text-[10px] font-semibold text-[#8A919C] bg-white border border-[#EEF0EE] rounded-full px-3 py-0.5 truncate">
                auraliving.com
              </span>
            </div>

            {/* Site header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#F1F3F2]">
              <span className="text-[12px] font-black tracking-tight text-[#171923]">
                Aura<span className="text-[#00B879]">Living</span>
              </span>
              <span className="hidden min-[380px]:flex gap-3 text-[9px] font-semibold text-[#8A919C]">
                <span>Shop</span>
                <span>Collections</span>
                <span>About</span>
              </span>
              <span className="w-6 h-6 rounded-full bg-[#F1F3F2] flex items-center justify-center">
                <ShoppingBag className="w-3 h-3 text-[#171923]" />
              </span>
            </div>

            {/* Canvas blocks */}
            <div className="p-3 space-y-3">
              {isActive("hero") && (
                <StudioBlock label="Hero Banner">
                  <div className="rounded-xl bg-gradient-to-br from-[#E8F8F1] via-[#F4FBF7] to-[#FFF7E0] p-4 animate-tool-in">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-[#008F60]">
                      New Collection
                    </span>
                    <h4 className="mt-1 text-[15px] font-black tracking-tight text-[#171923] leading-tight">
                      Furniture that breathes.
                    </h4>
                    <p className="mt-0.5 text-[9px] text-[#5A6270]">
                      Handcrafted minimal pieces for modern homes.
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#171923] text-white text-[9px] font-bold">
                      Shop the drop <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </StudioBlock>
              )}

              {isActive("proof") && (
                <StudioBlock label="Client Proof">
                  <div className="rounded-xl border border-[#EEF0EE] p-3 flex items-center gap-2.5 animate-tool-in">
                    <span className="flex -space-x-1.5">
                      {["from-[#00B879] to-[#008F60]", "from-[#FFD84D] to-[#F5B82E]", "from-[#171923] to-[#4A5160]"].map(
                        (g) => (
                          <i
                            key={g}
                            className={`w-5 h-5 rounded-full border-2 border-white bg-gradient-to-br ${g}`}
                          />
                        )
                      )}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-0.5 text-[#F5B82E]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-current" />
                        ))}
                        <span className="ml-1 text-[9px] font-bold text-[#171923]">4.9</span>
                      </div>
                      <p className="text-[8px] text-[#8A919C]">2,400+ homes furnished worldwide</p>
                    </div>
                  </div>
                </StudioBlock>
              )}

              {isActive("grid") && (
                <StudioBlock label="Product Grid">
                  <div className="rounded-xl border border-[#EEF0EE] p-3 animate-tool-in">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-[#171923]">Bestsellers</span>
                      <span className="text-[8px] font-semibold text-[#008F60]">View all</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { n: "Nordic Oak Chair", p: "₹4,999", g: "from-[#D9EEE3] to-[#BFE3D2]" },
                        { n: "Aura Lounge Sofa", p: "₹18,499", g: "from-[#FFF3D6] to-[#F7E4B0]" },
                      ].map((prod) => (
                        <div key={prod.n} className="rounded-lg border border-[#EEF0EE] overflow-hidden">
                          <div className={`h-10 bg-gradient-to-br ${prod.g}`} />
                          <div className="p-2">
                            <div className="text-[9px] font-bold text-[#171923] truncate">{prod.n}</div>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-[9px] font-bold text-[#008F60]">{prod.p}</span>
                              <span className="px-1.5 py-0.5 rounded-full bg-[#00B879] text-white text-[7px] font-bold">
                                Buy Now
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </StudioBlock>
              )}

              {isActive("form") && (
                <StudioBlock label="Lead Capture Form">
                  <div className="rounded-xl border border-[#00B879]/25 bg-[#F7FCFA] p-3 animate-tool-in">
                    <div className="text-[10px] font-bold text-[#171923]">
                      Get 10% off your first order
                    </div>
                    <div className="mt-2 space-y-1.5">
                      <div className="h-6 rounded-md bg-white border border-[#E2E6E4] px-2 flex items-center text-[8px] text-[#B4BBC4]">
                        Your name
                      </div>
                      <div className="h-6 rounded-md bg-white border border-[#E2E6E4] px-2 flex items-center text-[8px] text-[#B4BBC4]">
                        WhatsApp number
                      </div>
                      <div className="h-7 rounded-md bg-[#00B879] flex items-center justify-center text-[9px] font-bold text-white">
                        Claim my offer
                      </div>
                    </div>
                  </div>
                </StudioBlock>
              )}

              {isActive("faq") && (
                <StudioBlock label="FAQ Accordion">
                  <div className="rounded-xl border border-[#EEF0EE] p-3 space-y-1.5 animate-tool-in">
                    {["Is assembly included?", "Do you ship pan-India?"].map((q) => (
                      <div
                        key={q}
                        className="flex items-center justify-between rounded-lg bg-[#FAFBFA] border border-[#EEF0EE] px-2.5 py-1.5"
                      >
                        <span className="text-[9px] font-semibold text-[#171923]">{q}</span>
                        <ChevronDown className="w-3 h-3 text-[#8A919C]" />
                      </div>
                    ))}
                  </div>
                </StudioBlock>
              )}

              {isActive("pricing") && (
                <StudioBlock label="Pricing Table">
                  <div className="rounded-xl border border-[#EEF0EE] p-3 grid grid-cols-2 gap-2 animate-tool-in">
                    {[
                      { n: "Starter", p: "₹999/mo" },
                      { n: "Pro", p: "₹1,999/mo" },
                    ].map((plan) => (
                      <div key={plan.n} className="rounded-lg border border-[#EEF0EE] p-2.5 text-center">
                        <div className="text-[9px] font-bold text-[#171923]">{plan.n}</div>
                        <div className="text-[11px] font-black text-[#008F60] mt-0.5">{plan.p}</div>
                      </div>
                    ))}
                  </div>
                </StudioBlock>
              )}

              {activeBlocks.length === 0 && (
                <div className="rounded-xl border-2 border-dashed border-[#E2E6E4] py-8 text-center text-[10px] font-semibold text-[#8A919C] animate-tool-in">
                  Drag blocks from the left panel to start building
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Live Sync Feed */}
        <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-[#EEF0EE] bg-[#FAFBFA] p-4">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#8A919C] mb-3 flex items-center gap-1.5">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[#00B879] opacity-60 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[#00B879]" />
            </span>
            Live Zero-Plugin Sync
          </div>
          <div className="space-y-2">
            {feed.map((item) => {
              const Icon = item.event.icon;
              return (
                <div
                  key={item.key}
                  className="rounded-xl bg-white border border-[#E2E6E4] p-2.5 animate-tool-in"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#E8F8F1] flex items-center justify-center shrink-0">
                      <Icon className="w-3 h-3 text-[#008F60]" />
                    </span>
                    <span className="text-[11px] font-bold text-[#171923] leading-tight">
                      {item.event.title}
                    </span>
                    <span className="ml-auto text-[8px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-[#F1F3F2] text-[#5A6270] shrink-0">
                      {item.event.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-[10px] text-[#5A6270] leading-snug pl-8">
                    → {item.event.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-3 rounded-xl bg-[#E8F8F1] border border-[#00B879]/15 p-2.5 text-[10px] font-semibold text-[#00593A] flex items-center gap-1.5">
            <Zap className="w-3 h-3 text-[#00B879]" />
            Every click syncs to CRM 360 &amp; WhatsApp — no plugins needed.
          </div>
        </div>
      </div>
    </div>
  );
};
