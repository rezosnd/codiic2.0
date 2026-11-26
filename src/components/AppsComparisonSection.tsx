"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { createTileIcon, type TileIcon } from "./ColorfulProductIcons";

/* ─── App icons — uniform gradient tiles, CODIIC's own icon language ───────── */

const WebsiteIcon = createTileIcon(
  "Website",
  "#38BDF8",
  "#2563EB",
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </>
);

const StorefrontIcon = createTileIcon(
  "Storefront",
  "#FB923C",
  "#C2410C",
  <>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </>
);

const CrmIcon = createTileIcon(
  "CRM 360",
  "#F472B6",
  "#DB2777",
  <>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>
);

const InboxIcon = createTileIcon(
  "Inbox",
  "#22D3EE",
  "#0284C7",
  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
);

const AutomationIcon = createTileIcon(
  "Automation",
  "#A78BFA",
  "#7C3AED",
  <>
    <rect width="8" height="8" x="3" y="3" rx="2" />
    <path d="M7 11v4a2 2 0 0 0 2 2h4" />
    <rect width="8" height="8" x="13" y="13" rx="2" />
  </>
);

const AiIcon = createTileIcon(
  "AI Assistant",
  "#E879F9",
  "#A21CAF",
  <>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </>
);

const SalesIcon = createTileIcon(
  "Sales",
  "#4ADE80",
  "#15803D",
  <>
    <path d="M16 7h6v6" />
    <path d="m22 7-8.5 8.5-5-5L2 17" />
  </>
);

const VoiceIcon = createTileIcon(
  "Voice Calls",
  "#FB7185",
  "#BE123C",
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
);

const BroadcastsIcon = createTileIcon(
  "Broadcasts",
  "#FCD34D",
  "#D97706",
  <>
    <path d="m3 11 18-5v12L3 14v-3z" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  </>
);

const BookingsIcon = createTileIcon(
  "Bookings",
  "#34D399",
  "#0891B2",
  <>
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
    <path d="m9 16 2 2 4-4" />
  </>
);

const CatalogIcon = createTileIcon(
  "Catalog",
  "#818CF8",
  "#4338CA",
  <>
    <path d="m7.5 4.27 9 5.15" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </>
);

const AnalyticsIcon = createTileIcon(
  "Analytics",
  "#2DD4BF",
  "#0F766E",
  <>
    <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" />
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
  </>
);

const AdLibraryIcon = createTileIcon(
  "Ad Library",
  "#C084FC",
  "#7E22CE",
  <>
    <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
    <path d="m6.2 5.3 3.1 3.9" />
    <path d="m12.4 3.4 3.1 4" />
    <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
  </>
);

const AdTrackerIcon = createTileIcon(
  "Ad Tracker",
  "#F87171",
  "#DC2626",
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M22 12h-4" />
    <path d="M6 12H2" />
    <path d="M12 6V2" />
    <path d="M12 22v-4" />
  </>
);

const CompetitorsIcon = createTileIcon(
  "Competitors",
  "#FDE047",
  "#CA8A04",
  <>
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
    <circle cx="12" cy="12" r="3" />
  </>
);

const PortfolioIcon = createTileIcon(
  "Portfolio",
  "#FDBA74",
  "#9A3412",
  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
);

const IntegrationsIcon = createTileIcon(
  "Integrations",
  "#7DD3FC",
  "#0369A1",
  <>
    <rect width="7" height="7" x="14" y="3" rx="1" />
    <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
  </>
);

const KnowledgeIcon = createTileIcon(
  "Knowledge",
  "#94A3B8",
  "#334155",
  <>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </>
);

const RetailIcon = createTileIcon(
  "Retail POS",
  "#A3E635",
  "#4D7C0F",
  <>
    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
    <path d="M2 7h20" />
    <path d="M22 7v3a2 2 0 0 1-2 2 2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" />
  </>
);

const InvoicingIcon = createTileIcon(
  "Invoicing",
  "#34D399",
  "#065F46",
  <>
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
    <path d="M9 7h6" />
    <path d="M9 9.5h6" />
    <path d="M12.5 7c2 0 3.5 1 3.5 2.5S14.5 13 12 13l5 6" />
  </>
);

const ProjectsIcon = createTileIcon(
  "Projects",
  "#F9A8D4",
  "#BE185D",
  <>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M8 7v7" />
    <path d="M12 7v4" />
    <path d="M16 7v9" />
  </>
);

const SignIcon = createTileIcon(
  "eSign",
  "#67E8F9",
  "#0E7490",
  <>
    <path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" />
    <path d="M3 21a45.51 45.51 0 0 0 11.5-1.35" />
  </>
);

const HrIcon = createTileIcon(
  "HR",
  "#C4B5FD",
  "#6D28D9",
  <>
    <path d="M16 10h2" />
    <path d="M16 14h2" />
    <path d="M6.17 15a3 3 0 0 1 5.66 0" />
    <circle cx="9" cy="11" r="2" />
    <rect x="2" y="5" width="20" height="14" rx="2" />
  </>
);

const HelpdeskIcon = createTileIcon(
  "Helpdesk",
  "#93C5FD",
  "#1E40AF",
  <>
    <path d="M3 11a9 9 0 0 1 18 0" />
    <path d="M21 11v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
    <path d="M3 11v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3Z" />
    <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
  </>
);

/* ─── The disconnected stack — real tools businesses juggle today ──────────── */

interface AppDef {
  /** The third-party tool */
  name: string;
  /** The CODIIC module category it maps to */
  cat: string;
  icon: TileIcon;
}

const APPS: AppDef[] = [
  { name: "Wix", cat: "Website", icon: WebsiteIcon },
  { name: "Shopify", cat: "Storefront", icon: StorefrontIcon },
  { name: "Salesforce", cat: "CRM 360", icon: CrmIcon },
  { name: "Wati", cat: "Inbox", icon: InboxIcon },
  { name: "Zapier", cat: "Automation", icon: AutomationIcon },
  { name: "Chatbase", cat: "AI Assistant", icon: AiIcon },
  { name: "Pipedrive", cat: "Sales", icon: SalesIcon },
  { name: "Exotel", cat: "Voice Calls", icon: VoiceIcon },
  { name: "Mailchimp", cat: "Broadcasts", icon: BroadcastsIcon },
  { name: "Calendly", cat: "Bookings", icon: BookingsIcon },
  { name: "Excel", cat: "Catalog", icon: CatalogIcon },
  { name: "Tableau", cat: "Analytics", icon: AnalyticsIcon },
  { name: "Foreplay", cat: "Ad Library", icon: AdLibraryIcon },
  { name: "Triple Whale", cat: "Ad Tracker", icon: AdTrackerIcon },
  { name: "Similarweb", cat: "Competitors", icon: CompetitorsIcon },
  { name: "Portfolio", cat: "Portfolio", icon: PortfolioIcon },
  { name: "Make", cat: "Integrations", icon: IntegrationsIcon },
  { name: "Notion", cat: "Knowledge", icon: KnowledgeIcon },
  { name: "Lightspeed", cat: "Retail POS", icon: RetailIcon },
  { name: "Vyapar", cat: "Invoicing", icon: InvoicingIcon },
  { name: "Asana", cat: "Projects", icon: ProjectsIcon },
  { name: "DocuSign", cat: "eSign", icon: SignIcon },
  { name: "Keka", cat: "HR", icon: HrIcon },
  { name: "Zendesk", cat: "Helpdesk", icon: HelpdeskIcon },
];

/* ─── The connected CODIIC modules ─────────────────────────────────────────── */

const MODULES: { name: string; icon: TileIcon }[] = [
  { name: "Website Builder", icon: WebsiteIcon },
  { name: "Omnichannel Inbox", icon: InboxIcon },
  { name: "CRM 360", icon: CrmIcon },
  { name: "Automation", icon: AutomationIcon },
  { name: "Sales Tracker", icon: SalesIcon },
  { name: "AI Voice Calls", icon: VoiceIcon },
  { name: "Analytics", icon: AnalyticsIcon },
  { name: "Integrations", icon: IntegrationsIcon },
];

/* ─── Converging transition: lavender → mint → CODIIC green ────────────────── */

const FLOW_PATHS = [
  "M60,0 C180,60 360,110 560,168",
  "M300,0 C360,70 480,120 575,168",
  "M540,0 C560,80 580,130 596,168",
  "M660,0 C640,80 620,130 604,168",
  "M900,0 C840,70 720,120 625,168",
  "M1140,0 C1020,60 840,110 640,168",
];

function StackConvergence() {
  const reducedMotion = useReducedMotion();

  return (
    <div aria-hidden className="relative w-full h-32 sm:h-44 -my-2 select-none">
      <svg
        viewBox="0 0 1200 180"
        preserveAspectRatio="none"
        className="block w-full h-full"
        fill="none"
      >
        <defs>
          <linearGradient id="stackFlowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DCC9F9" stopOpacity="0.7" />
            <stop offset="55%" stopColor="#9FE8C5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#08745A" stopOpacity="1" />
          </linearGradient>
        </defs>

        {FLOW_PATHS.map((d, i) => (
          <React.Fragment key={d}>
            <motion.path
              id={`stack-flow-${i}`}
              d={d}
              stroke="url(#stackFlowGrad)"
              strokeWidth={i === 2 || i === 3 ? 2 : 1.3}
              strokeLinecap="round"
              opacity={i === 2 || i === 3 ? 0.9 : 0.55}
              initial={reducedMotion ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 1.6,
                delay: 0.15 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            {/* Translucent dots drifting down the two outer curves */}
            {!reducedMotion && (i === 0 || i === 5) && (
              <circle r="3" fill="#08745A" opacity="0.55">
                <animateMotion dur={`${i === 0 ? 7 : 9}s`} repeatCount="indefinite">
                  <mpath href={`#stack-flow-${i}`} />
                </animateMotion>
              </circle>
            )}
            {!reducedMotion && i === 3 && (
              <circle r="2.4" fill="#DCC9F9" opacity="0.9">
                <animateMotion dur="6s" repeatCount="indefinite">
                  <mpath href="#stack-flow-3" />
                </animateMotion>
              </circle>
            )}
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
}

/* ─── Fragmented connector hints inside the disconnected grid ──────────────── */

const FRAGMENTS: { cls: string }[] = [
  { cls: "top-[16%] left-[9%] w-[9%] border-t" },
  { cls: "top-[16%] right-[18%] w-[7%] border-t" },
  { cls: "top-[49%] left-[24%] w-[10%] border-t" },
  { cls: "top-[49%] right-[8%] w-[8%] border-t" },
  { cls: "top-[82%] left-[14%] w-[8%] border-t" },
  { cls: "top-[82%] right-[27%] w-[9%] border-t" },
];

/* ─── Section ──────────────────────────────────────────────────────────────── */

interface AppsComparisonSectionProps {
  onOpenGetStarted?: () => void;
}

export const AppsComparisonSection: React.FC<AppsComparisonSectionProps> = ({
  onOpenGetStarted,
}) => {
  const [view, setView] = useState<"without" | "with">("without");
  const withCodiic = view === "with";

  return (
    <section id="one-platform" className="relative bg-transparent py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Heading ─────────────────────────────────────────── */}
        <div className="text-center max-w-[900px] mx-auto">
          <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.24em] text-[#08745A]">
            The old way vs. the CODIIC way
          </p>
          <h2 className="mt-4 text-[32px] sm:text-5xl lg:text-[56px] font-bold text-[#111827] tracking-[-0.035em] leading-[1.06]">
            Too many tools.{" "}
            <span className="text-[#08745A]">One better way</span> to run your
            business.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#64706B] leading-relaxed max-w-2xl mx-auto">
            Your website, customer conversations, sales, payments, and operations
            shouldn&apos;t live in separate systems. CODIIC brings everything
            together in one connected platform.
          </p>

          {/* Segmented control */}
          <div className="mt-8 inline-flex relative rounded-full bg-white border border-[#E5E7E1] p-1 shadow-sm">
            <motion.span
              aria-hidden
              initial={false}
              animate={{ x: withCodiic ? "100%" : "0%" }}
              transition={{ type: "spring", stiffness: 380, damping: 34 }}
              className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-[#075C46]"
            />
            {(["without", "with"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                aria-pressed={view === v}
                className={`relative z-10 w-32 sm:w-36 py-2 rounded-full text-[13px] font-bold transition-colors duration-300 cursor-pointer ${
                  view === v ? "text-white" : "text-[#64706B] hover:text-[#111827]"
                }`}
              >
                {v === "without" ? "Without CODIIC" : "With CODIIC"}
              </button>
            ))}
          </div>
        </div>

        {/* ── The disconnected stack ──────────────────────────── */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#64706B]">
              The disconnected stack
            </p>
            <p className="mt-1.5 text-sm text-[#64706B]">
              Separate tools. Separate logins. Separate data.
            </p>
          </div>

          <div
            className={`relative mt-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              withCodiic ? "opacity-35 saturate-[0.35]" : "opacity-100"
            }`}
          >
            {/* Fragmented connector hints — thin, muted, broken */}
            {FRAGMENTS.map((f) => (
              <span
                key={f.cls}
                aria-hidden
                className={`hidden sm:block absolute border-dashed border-[#64706B]/25 ${f.cls}`}
              />
            ))}

            <div className="relative grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-7 sm:gap-x-6 sm:gap-y-8">
              {APPS.map((app) => {
                const Icon = app.icon;
                return (
                  <div key={app.name} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border border-[#E5E7E1] shadow-[0_8px_20px_-12px_rgba(17,24,39,0.18)] flex items-center justify-center transition-transform duration-300 hover:-translate-y-1">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div className="mt-2.5 text-[13px] sm:text-sm font-semibold text-[#111827] leading-tight">
                      {app.name}
                    </div>
                    <div className="mt-0.5 text-[11px] sm:text-xs text-[#64706B] leading-tight">
                      {app.cat}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Lavender → mint → green converging transition ───── */}
        <StackConvergence />

        {/* ── The connected CODIIC platform ───────────────────── */}
        <div
          className={`relative max-w-4xl mx-auto rounded-3xl bg-white border transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            withCodiic
              ? "border-[#08745A]/30 shadow-[0_36px_90px_-34px_rgba(7,92,70,0.4)] ring-1 ring-[#08745A]/15"
              : "border-[#E5E7E1] shadow-[0_20px_50px_-30px_rgba(17,24,39,0.25)] opacity-90"
          }`}
        >
          <div className="px-5 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-10 text-center">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-[#075C46] shadow-[0_14px_34px_-12px_rgba(7,92,70,0.6)] flex items-center justify-center">
              <Image
                src="/logo_withot text.png"
                alt="CODIIC"
                width={32}
                height={32}
                className="object-contain brightness-0 invert"
              />
            </div>
            <h3 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] tracking-[-0.03em] leading-tight">
              One platform. Every app.
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#64706B]">
              All tools. Every feature. One login.
            </p>
          </div>

          {/* Modules wired into the platform */}
          <div className="relative px-5 pb-8 sm:px-10 sm:pb-10">
            <div className="relative">
              {/* Connector lines fanning from the hub into every module */}
              <svg
                aria-hidden
                viewBox="0 0 800 210"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 w-full h-full"
                fill="none"
              >
                {MODULES.map((_, i) => {
                  const col = i % 4;
                  const row = Math.floor(i / 4);
                  const x = 100 + col * 200;
                  const y = row === 0 ? 62 : 168;
                  return (
                    <path
                      key={i}
                      d={`M400,0 C400,${y * 0.45} ${x},${y * 0.55} ${x},${y}`}
                      stroke="#08745A"
                      strokeWidth="1.5"
                      strokeDasharray="5 6"
                      strokeLinecap="round"
                      className="transition-opacity duration-700"
                      opacity={withCodiic ? 0.65 : 0.15}
                      pathLength={100}
                      style={{
                        strokeDashoffset: 0,
                      }}
                    />
                  );
                })}
              </svg>

              <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6">
                {MODULES.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div
                      key={m.name}
                      className="flex items-center gap-2.5 rounded-xl bg-[#F7F6EF] border border-[#E5E7E1] px-3 py-2.5 transition-colors duration-300 hover:border-[#9FE8C5]"
                    >
                      <span className="w-8 h-8 shrink-0 rounded-lg bg-white ring-1 ring-black/[0.05] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="text-xs sm:text-[13px] font-semibold text-[#111827] leading-tight">
                        {m.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── Pricing comparison ──────────────────────────────── */}
        <div className="mt-14 sm:mt-16 grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {/* Without CODIIC */}
          <div
            className={`rounded-2xl bg-[#F1EFE7] border p-6 sm:p-8 transition-all duration-500 ${
              view === "without"
                ? "border-[#111827]/15 ring-2 ring-[#111827]/10"
                : "border-[#E5E7E1]"
            }`}
          >
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#64706B]">
              Without CODIIC
            </p>
            <p className="mt-2 text-sm text-[#64706B] leading-relaxed">
              Multiple tools. Multiple subscriptions. Multiple logins.
            </p>
            <div className="mt-5 flex items-baseline gap-1.5">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
                ₹40,000+
              </span>
              <span className="text-sm font-semibold text-[#64706B]">/mo</span>
            </div>
            <p className="mt-3 text-xs text-[#64706B]">
              Illustrative cost of a fragmented software stack.{" "}
              <span className="font-semibold text-[#111827]">
                Each billed per seat, per month.
              </span>
            </p>
          </div>

          {/* With CODIIC */}
          <div
            className={`rounded-2xl bg-[#075C46] border p-6 sm:p-8 transition-all duration-500 ${
              withCodiic
                ? "border-[#08745A] ring-2 ring-[#08745A]/40 shadow-[0_24px_60px_-28px_rgba(7,92,70,0.5)]"
                : "border-transparent"
            }`}
          >
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9FE8C5]">
              With CODIIC
            </p>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              One connected platform. One simple starting price.
            </p>
            <div className="mt-5 flex items-baseline gap-1.5">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                ₹1
              </span>
              <span className="text-sm font-semibold text-[#9FE8C5]">/day</span>
            </div>
            <p className="mt-3 text-xs text-white/60">
              Start with just ₹1 per day.
            </p>
          </div>
        </div>

        {/* ── CTA into the next section ───────────────────────── */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={onOpenGetStarted}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#08745A] hover:bg-[#075C46] text-white text-sm font-bold shadow-[0_16px_40px_-14px_rgba(8,116,90,0.6)] transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            Start free — ₹1/day
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
