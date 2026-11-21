"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { RupeeOfferPill } from "./RupeeOffer";
import { ArrowRight, Check, PhoneCall } from "lucide-react";
import {
  WebsiteBuilderColorIcon,
  CustomerCrmColorIcon,
  SalesPipelineColorIcon,
  AutomationColorIcon,
  AgenciesColorIcon,
  MagicAiIcon,
  SalesTrackerIcon,
  SmootherFollowupsColorIcon,
} from "./ColorfulProductIcons";

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
  /** Product screenshot (1536×1024) shown in the tab panel; falls back to the inline mockup. */
  image?: string;
  stats: { value: string; label: string }[];
  chips: { label: string; value: string; trend: "up" | "down" | "alert" }[];
  highlights: { title: string; desc: string }[];
}

const TOOLS: Tool[] = [
  {
    id: "website-studio",
    title: "Drag-and-Drop Website Studio",
    category: "No-code storefront",
    badge: "NO-CODE BUILDER",
    desc: "Pick a theme and visually build your storefront — pages, product catalogs, blogs, menus, and store policies — responsive across every device with instant custom domain connection.",
    icon: WebsiteBuilderColorIcon,
    image: "/module1.avif",
    stats: [
      { value: "60 sec", label: "Custom domain live" },
      { value: "100%", label: "Responsive themes" },
    ],
    chips: [
      { label: "Pages published", value: "+3", trend: "up" },
      { label: "Domain status", value: "SSL live", trend: "alert" },
    ],
    highlights: [
      {
        title: "True visual block library",
        desc: "Drag in Hero Banners, Product Grids, Client Proof, Galleries & Lead Forms — zero code.",
      },
      {
        title: "Complete site management",
        desc: "Pages, catalogs, blogs, menus, media & store policies in one visual editor.",
      },
      {
        title: "Instant custom domain",
        desc: "Connect your domain and go live in 60 seconds with free SSL included.",
      },
    ],
  },
  {
    id: "omnichannel-inbox",
    title: "Omnichannel Unified Inbox",
    category: "Team chat hub",
    badge: "MULTI-CHANNEL CHAT",
    desc: "Manage and reply to customers across WhatsApp Cloud API, WhatsApp Business App (Coexistence), Instagram, Facebook, Telegram, and Email from one shared team inbox.",
    icon: CustomerCrmColorIcon,
    image: "/module2.avif",
    stats: [
      { value: "6+", label: "Channels unified" },
      { value: "0.4s", label: "AI first-reply speed" },
    ],
    chips: [
      { label: "Open chats", value: "128", trend: "up" },
      { label: "Missed messages", value: "0", trend: "alert" },
    ],
    highlights: [
      {
        title: "WhatsApp Coexistence built-in",
        desc: "Cloud API and your Business App run side-by-side on the same number.",
      },
      {
        title: "Shared team inbox",
        desc: "Agent assignment, internal notes, labels and full chat history in one view.",
      },
      {
        title: "Keyword triggers & templates",
        desc: "Preset replies and smart triggers that cut messaging costs up to 40%.",
      },
    ],
  },
  {
    id: "crm-pipeline",
    title: "CRM 360 & Visual Pipeline",
    category: "Leads & deals",
    badge: "LEAD & DEAL CRM",
    desc: "Track every lead from first message to closed sale with customizable deal stages, auto-agent routing, customer segments, labels, and instant profile history.",
    icon: SalesPipelineColorIcon,
    image: "/module3.avif",
    stats: [
      { value: "360°", label: "Customer timeline" },
      { value: "Auto", label: "Agent routing" },
    ],
    chips: [
      { label: "Deals moved", value: "+18", trend: "up" },
      { label: "Won this week", value: "₹4.5L", trend: "up" },
    ],
    highlights: [
      {
        title: "Customizable Kanban stages",
        desc: "New Lead, Contacted, Qualified, Proposal, Won — shape stages to your process.",
      },
      {
        title: "Auto-agent routing",
        desc: "Round-robin assignment, segments and labels keep every lead owned.",
      },
      {
        title: "Instant profile history",
        desc: "Full chat, order and deal timeline on every customer card.",
      },
    ],
  },
  {
    id: "bot-flow-builder",
    title: "Visual Bot & Flow Builder",
    category: "No-code automation",
    badge: "NO-CODE AUTOMATION",
    desc: "Build drag-and-drop chat automations, keyword triggers, Click-to-WhatsApp (CTWA) ad flows, and Instagram Auto-DM funnels without writing code.",
    icon: AutomationColorIcon,
    image: "/module4.avif",
    stats: [
      { value: "Unlimited", label: "Automation flows" },
      { value: "0", label: "Lines of code" },
    ],
    chips: [
      { label: "Auto-DM replies", value: "Live", trend: "up" },
      { label: "CTWA flows", value: "+12", trend: "alert" },
    ],
    highlights: [
      {
        title: "Drag-and-drop flow canvas",
        desc: "Connect triggers, conditions and replies visually — publish in minutes.",
      },
      {
        title: "CTWA ad routing",
        desc: "Click-to-WhatsApp ads drop leads straight into the right flow.",
      },
      {
        title: "Instagram Auto-DM funnels",
        desc: "Turn comments and story replies into automated conversations.",
      },
    ],
  },
  {
    id: "broadcasts-drips",
    title: "Smart Broadcasts & Drips",
    category: "Campaign engine",
    badge: "CAMPAIGN ENGINE",
    desc: "Send high-converting WhatsApp campaigns and automated multi-day drip sequences using pre-approved templates that cut messaging costs by up to 40%.",
    icon: AgenciesColorIcon,
    image: "/module5.avif",
    stats: [
      { value: "40%", label: "Lower messaging cost" },
      { value: "Multi-day", label: "Drip sequences" },
    ],
    chips: [
      { label: "Campaign sent", value: "12.4K", trend: "up" },
      { label: "Drip day 3", value: "Scheduled", trend: "alert" },
    ],
    highlights: [
      {
        title: "High-converting broadcasts",
        desc: "Segment audiences and send offers, launches and restock alerts at scale.",
      },
      {
        title: "Automated drip sequences",
        desc: "Multi-day follow-up journeys that nurture leads until they buy.",
      },
      {
        title: "Pre-approved templates",
        desc: "Ready-made Meta-approved templates that maximize delivery and savings.",
      },
    ],
  },
  {
    id: "ai-knowledge-base",
    title: "AI Knowledge Base & 24/7 Assistant",
    category: "Custom AI brain",
    badge: "CUSTOM AI BRAIN",
    desc: "Train your AI assistant on your business PDFs, website pages, and FAQs so it answers customer questions and shares catalogs in 0.4 seconds.",
    icon: MagicAiIcon,
    image: "/module6.avif",
    stats: [
      { value: "0.4s", label: "Answer speed" },
      { value: "24/7", label: "Always-on coverage" },
    ],
    chips: [
      { label: "Questions answered", value: "Auto", trend: "up" },
      { label: "Catalogs shared", value: "Instant", trend: "alert" },
    ],
    highlights: [
      {
        title: "Train on your content",
        desc: "Upload PDFs, website pages and FAQs — your AI learns your business.",
      },
      {
        title: "Instant answers & catalogs",
        desc: "Replies and product catalogs delivered to customers in 0.4 seconds.",
      },
      {
        title: "Human handoff anytime",
        desc: "Seamlessly routes tricky chats to your team inside the same inbox.",
      },
    ],
  },
  {
    id: "catalog-orders",
    title: "Catalog, Orders & Bookings",
    category: "Commerce & scheduling",
    badge: "COMMERCE & SCHEDULING",
    desc: "Manage product SKUs, track live customer orders, schedule service appointments, and send automated receipts and status updates in one workspace.",
    icon: SalesTrackerIcon,
    image: "/module7.avif",
    stats: [
      { value: "Live", label: "Order tracking" },
      { value: "Auto", label: "Receipts & updates" },
    ],
    chips: [
      { label: "Orders today", value: "+42", trend: "up" },
      { label: "Bookings", value: "12 slots", trend: "alert" },
    ],
    highlights: [
      {
        title: "Product catalog & SKUs",
        desc: "Organize variants, pricing and inventory across your storefront and inbox.",
      },
      {
        title: "Orders & appointments",
        desc: "Track live orders and schedule service bookings from one table.",
      },
      {
        title: "Automated status updates",
        desc: "Receipts, confirmations and tracking sent to customers on WhatsApp.",
      },
    ],
  },
  {
    id: "ai-voice-calls",
    title: "Bulk AI Voice Calls",
    category: "AI voice engine",
    badge: "AI VOICE",
    desc: "Automatically call new leads, confirm orders, and book appointments directly onto your calendar with human-like AI voice agents.",
    icon: SmootherFollowupsColorIcon,
    stats: [
      { value: "Bulk", label: "Simultaneous calls" },
      { value: "Auto", label: "Calendar bookings" },
    ],
    chips: [
      { label: "Calls completed", value: "1.2K", trend: "up" },
      { label: "Appointments", value: "+42", trend: "alert" },
    ],
    highlights: [
      {
        title: "Instant lead callbacks",
        desc: "AI calls every new lead within seconds of capture — no manual dialing.",
      },
      {
        title: "Order verification calls",
        desc: "Confirm COD orders and delivery details automatically by voice.",
      },
      {
        title: "Calendar appointment booking",
        desc: "Books demos, site visits and consultations straight onto your calendar.",
      },
    ],
  },
];

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

const ToolMockup: React.FC<{ id: string }> = ({ id }) => {
  if (id === "ai-voice-calls") {
    return (
      <>
        <MockHeader
          icon={<PhoneCall className="w-4 h-4 text-[#00B879]" />}
          title="AI Voice Queue · Bulk Campaign"
          right={
            <span className="text-[10px] bg-[#E8F8F1] text-[#008F60] px-2 py-1 rounded-full font-bold shrink-0">
              Running
            </span>
          }
        />
        <div className="space-y-2">
          {[
            { n: "Order confirmation — #1042", m: "Completed · COD verified", b: "Done", bc: "bg-emerald-100 text-emerald-800" },
            { n: "New lead callback — Riya S.", m: "Appointment booked · Fri 4 PM", b: "Booked", bc: "bg-sky-100 text-sky-800" },
            { n: "Winback campaign — 214 contacts", m: "In progress · 68% reached", b: "Calling", bc: "bg-amber-100 text-amber-800" },
          ].map((r) => (
            <div key={r.n} className="flex items-center justify-between gap-3 p-3 rounded-xl border border-[#EEF0EE] text-xs">
              <div className="min-w-0">
                <div className="font-bold text-[#171923] truncate">{r.n}</div>
                <div className="text-[10px] text-[#8A919C] truncate">{r.m}</div>
              </div>
              <span className={"text-[10px] px-2 py-0.5 rounded-full font-bold whitespace-nowrap " + r.bc}>{r.b}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-[#EEF0EE] p-3">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold text-[#171923]">Appointments booked</span>
            <span className="font-bold text-[#008F60]">42 today</span>
          </div>
        </div>
      </>
    );
  }
  return null;
};

export const MainToolsSection: React.FC<MainToolsSectionProps> = ({ onOpenGetStarted }) => {
  const [activeTab, setActiveTab] = useState<string>(TOOLS[0].id);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(true);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);

  const activeIndex = Math.max(0, TOOLS.findIndex((t) => t.id === activeTab));
  const currentTool = TOOLS[activeIndex];

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), {
      threshold: 0.1,
    });
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
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, isInView, activeTab]);

  // Keep the active tab visible inside the horizontally scrollable bar on small screens
  useEffect(() => {
    const list = tabListRef.current;
    const btn = list?.querySelector<HTMLButtonElement>(`[data-tab="${activeTab}"]`);
    if (!list || !btn) return;
    const btnRect = btn.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    const target =
      list.scrollLeft + btnRect.left - listRect.left - list.clientWidth / 2 + btnRect.width / 2;
    list.scrollTo({ left: target, behavior: "smooth" });
  }, [activeTab]);

  // Track scrollable edges so the tab bar can fade overflow hints
  useEffect(() => {
    const list = tabListRef.current;
    if (!list) return;
    const update = () => {
      setCanScrollLeft(list.scrollLeft > 4);
      setCanScrollRight(list.scrollLeft + list.clientWidth < list.scrollWidth - 4);
    };
    update();
    list.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      list.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const tiltRef = useRef<HTMLDivElement>(null);

  const handleTilt = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el || e.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${x * 7}deg) rotateX(${-y * 5}deg)`;
  };

  const resetTilt = () => {
    if (tiltRef.current) tiltRef.current.style.transform = "";
  };

  const CurrentIcon = currentTool.icon;

  const tabMask =
    canScrollLeft && canScrollRight
      ? "linear-gradient(to right, transparent, black 28px, black calc(100% - 28px), transparent)"
      : canScrollLeft
        ? "linear-gradient(to right, transparent, black 28px)"
        : canScrollRight
          ? "linear-gradient(to left, transparent, black 28px)"
          : undefined;

  return (
    <section
      ref={sectionRef}
      id="tools"
      className="relative bg-transparent py-20 sm:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E6E4] bg-white text-xs font-semibold text-[#5A6270]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B879]" />
            Core Workspace Modules
          </div>
          <h2 className="mt-5 text-[34px] sm:text-5xl lg:text-[56px] font-bold text-[#171923] tracking-[-0.035em] leading-[1.05]">
            Every tool you need to grow,{" "}
            <em className="font-serif italic font-normal text-[#008F60]">in one place.</em>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#5A6270] leading-relaxed">
            From your drag-and-drop storefront and unified inbox to CRM, AI automation and order
            management — eight connected modules that run your entire business.
          </p>
        </div>

        {/* Tabs */}
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Tools"
          style={tabMask ? { maskImage: tabMask, WebkitMaskImage: tabMask } : undefined}
          className="mt-10 sm:mt-12 flex items-center gap-2 overflow-x-auto no-scrollbar px-4 pb-1 sm:[justify-content:safe_center]"
        >
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            const isActive = activeTab === tool.id;
            return (
              <button
                key={tool.id}
                type="button"
                data-tab={tool.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tool.id)}
                className={`relative flex items-center gap-2.5 pl-2 pr-4 py-1.5 rounded-full border text-[13px] font-semibold whitespace-nowrap shrink-0 cursor-pointer transition-all ${
                  isActive
                    ? "bg-[#FFD84D] border-black/20 text-[#171923] shadow-sm font-bold ring-1 ring-black/10"
                    : "bg-white border-[#E2E6E4] text-[#5A6270] hover:text-[#171923] hover:border-[#C9D0CC]"
                }`}
              >
                <Icon className="w-6 h-6 shrink-0" />
                <span>{tool.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab panel */}
        <div
          key={currentTool.id}
          role="tabpanel"
          className="mt-6 sm:mt-8 rounded-[28px] bg-[#FFD84D] border border-black/10 shadow-[0_24px_50px_-20px_rgba(23,25,35,0.2)] p-5 sm:p-8 lg:p-12 animate-tool-in text-[#171923]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Copy */}
            <div className="lg:col-span-5">
              <div className="w-14 h-14 flex items-center justify-center drop-shadow-md">
                <CurrentIcon className="w-14 h-14" />
              </div>
              <h3 className="mt-5 text-3xl sm:text-4xl font-bold text-[#171923] tracking-[-0.03em] leading-[1.08]">
                {currentTool.title}
              </h3>
              <p className="mt-4 text-[15px] sm:text-base text-[#2D260D] leading-relaxed">
                {currentTool.desc}
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-4">
                {currentTool.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-xs text-[#4A401A] font-semibold">{s.label}</dt>
                    <dd className="mt-0.5 text-xl font-bold text-[#171923] tracking-tight">{s.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenGetStarted}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171923] hover:bg-black text-white text-sm font-bold transition-all shadow-md shadow-black/15 active:scale-[0.98] cursor-pointer"
                >
                  Explore {currentTool.title}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={onOpenGetStarted}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-bold text-[#171923] bg-white/40 hover:bg-white border border-black/10 transition-colors cursor-pointer"
                >
                  Book a demo
                </button>
              </div>
              <RupeeOfferPill className="mt-5" label={`${currentTool.title} included in Pro · from ₹1/day`} />
            </div>

            {/* Product preview */}
            <div className="lg:col-span-7">
              {currentTool.image ? (
                <div
                  ref={tiltRef}
                  onPointerMove={handleTilt}
                  onPointerLeave={resetTilt}
                  className="relative transition-transform duration-300 ease-out"
                >
                  <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-white border border-black/10 shadow-[0_24px_60px_-30px_rgba(23,25,35,0.35)]">
                    <div className="absolute inset-0 animate-shot-reveal">
                      <div className="absolute inset-0 animate-shot-zoom">
                        <Image
                          src={currentTool.image}
                          alt={`${currentTool.title} dashboard in CODIIC`}
                          fill
                          sizes="(min-width: 1024px) 720px, 100vw"
                          className="object-cover object-left-top"
                          priority={activeIndex === 0}
                        />
                      </div>
                    </div>
                    <span
                      aria-hidden
                      className="absolute inset-y-0 -left-1 w-1 bg-[#00B879] shadow-[0_0_24px_6px_rgba(0,184,121,0.55)] animate-shot-scan pointer-events-none"
                    />
                    {!isPaused && (
                      <span
                        aria-hidden
                        className="absolute bottom-0 left-0 h-[3px] bg-[#00B879] animate-shot-progress"
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl bg-white border border-black/10 shadow-[0_24px_60px_-30px_rgba(23,25,35,0.35)] p-4 sm:p-6">
                  <ToolMockup id={currentTool.id} />
                </div>
              )}
            </div>
          </div>

          {/* Highlights */}
          <div className="hidden md:grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-black/10">
            {currentTool.highlights.map((h) => (
              <div key={h.title} className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-[#171923] text-[#FFD84D] flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <div>
                  <h4 className="text-[15px] font-bold text-[#171923] tracking-tight">{h.title}</h4>
                  <p className="mt-1 text-[13px] text-[#2D260D] leading-relaxed font-medium">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
