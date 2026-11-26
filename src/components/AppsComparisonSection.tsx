"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createTileIcon, type TileIcon } from "./ColorfulProductIcons";
import { RupeeOfferPill } from "./RupeeOffer";

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

/* ─── Hand-drawn annotation machinery ─────────────────────────────────────── */

type ArrowKind = "dr" | "dl" | "d" | "u" | "ur" | "ul" | "r" | "l";
type Where = "tl" | "tc" | "tr" | "l" | "r" | "bl" | "bc" | "br";

interface NoteDef {
  text: string;
  where: Where;
  rot?: number;
  /** Bigger free-floating comment in the brand accent color. */
  comment?: boolean;
}

interface AppDef {
  name: string;
  icon: TileIcon;
  notes?: NoteDef[];
}

const INK = "#171923";

/** Pen-style arrows: slightly wavy shaft + an open V-flick head drawn through the tip. */
const ARROW_PATHS: Record<ArrowKind, string> = {
  dr: "M4 4 C 12 14, 22 22, 32 30 S 46 39, 53 41 M45 40 Q 49 41, 53 41 Q 52 36, 50 32",
  dl: "M56 4 C 48 14, 38 22, 28 30 S 14 39, 7 41 M15 40 Q 11 41, 7 41 Q 8 36, 10 32",
  d: "M30 3 C 24 14, 36 24, 30 40 M23.5 34 Q 26.5 39, 30 40 Q 33.5 39, 36.5 34",
  u: "M30 41 C 36 30, 24 20, 30 4 M23.5 10 Q 26.5 5, 30 4 Q 33.5 5, 36.5 10",
  ur: "M5 41 C 15 32, 26 26, 38 18 S 50 8, 55 3 M46 12 Q 51 7, 55 3 Q 53 10, 50 16",
  ul: "M55 41 C 45 32, 34 26, 22 18 S 10 8, 5 3 M14 12 Q 9 7, 5 3 Q 7 10, 10 16",
  r: "M4 8 C 16 20, 32 29, 55 30 M45 34 Q 50.5 32, 55 30 Q 51.5 26, 48 22",
  l: "M56 8 C 44 20, 28 29, 5 30 M15 34 Q 9.5 32, 5 30 Q 8.5 26, 12 22",
};

const PLACEMENT: Record<
  Where,
  { wrap: string; arrow: ArrowKind; arrowFirst: boolean; arrowCls: string }
> = {
  tl: {
    wrap: "bottom-full left-[-12px] flex-col items-start",
    arrow: "dr",
    arrowFirst: false,
    arrowCls: "ml-4 translate-y-1.5",
  },
  tc: {
    wrap: "bottom-full left-1/2 -translate-x-1/2 flex-col items-center",
    arrow: "d",
    arrowFirst: false,
    arrowCls: "translate-y-1.5",
  },
  tr: {
    wrap: "bottom-full right-[-12px] flex-col items-end",
    arrow: "dl",
    arrowFirst: false,
    arrowCls: "mr-4 translate-y-1.5",
  },
  l: {
    wrap: "right-[calc(100%+10px)] top-1/3 flex-row items-center",
    arrow: "r",
    arrowFirst: false,
    arrowCls: "mt-3 -ml-1 translate-x-1",
  },
  r: {
    wrap: "left-[calc(100%+10px)] top-1/3 flex-row items-center",
    arrow: "l",
    arrowFirst: true,
    arrowCls: "mt-3 -mr-1 -translate-x-1",
  },
  bl: {
    wrap: "top-[calc(100%+26px)] left-[-8px] flex-col items-start",
    arrow: "ur",
    arrowFirst: true,
    arrowCls: "ml-4 -translate-y-1.5",
  },
  bc: {
    wrap: "top-[calc(100%+26px)] left-1/2 -translate-x-1/2 flex-col items-center",
    arrow: "u",
    arrowFirst: true,
    arrowCls: "-translate-y-1.5",
  },
  br: {
    wrap: "top-[calc(100%+26px)] right-[-8px] flex-col items-end",
    arrow: "ul",
    arrowFirst: true,
    arrowCls: "mr-4 -translate-y-1.5",
  },
};

const Arrow: React.FC<{ kind: ArrowKind; className?: string }> = ({ kind, className }) => (
  <svg viewBox="0 0 60 44" fill="none" className={`h-7 w-10 shrink-0 ${className ?? ""}`} aria-hidden>
    <path
      d={ARROW_PATHS[kind]}
      stroke={INK}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.85"
    />
  </svg>
);

/* ─── The apps: every tile replaces a separate tool you'd otherwise pay for ── */

const APPS: AppDef[] = [
  // Row 1 — placements alternate so no two labels can ever touch
  { name: "Website", icon: WebsiteIcon, notes: [{ text: "Wix", where: "tl" }] },
  { name: "Storefront", icon: StorefrontIcon, notes: [{ text: "Shopify", where: "tr" }] },
  { name: "CRM 360", icon: CrmIcon, notes: [{ text: "Salesforce", where: "tc" }] },
  { name: "Inbox", icon: InboxIcon, notes: [{ text: "Wati", where: "tl" }] },
  { name: "Automation", icon: AutomationIcon, notes: [{ text: "Zapier", where: "tc" }] },
  { name: "AI Assistant", icon: AiIcon, notes: [{ text: "Chatbase", where: "tr" }] },
  // Row 2
  {
    name: "Sales",
    icon: SalesIcon,
    notes: [
      { text: "Pipedrive", where: "tl" },
      { text: "nothing connects", where: "l", comment: true, rot: -8 },
    ],
  },
  { name: "Voice Calls", icon: VoiceIcon, notes: [{ text: "Exotel", where: "tc" }] },
  { name: "Broadcasts", icon: BroadcastsIcon, notes: [{ text: "Mailchimp", where: "tr" }] },
  { name: "Bookings", icon: BookingsIcon, notes: [{ text: "Calendly", where: "tc" }] },
  { name: "Catalog", icon: CatalogIcon, notes: [{ text: "Excel, honestly", where: "tc", rot: -6 }] },
  {
    name: "Analytics",
    icon: AnalyticsIcon,
    notes: [
      { text: "Tableau", where: "tr" },
      { text: "six data silos", where: "r", comment: true, rot: 6 },
    ],
  },
  // Row 3
  { name: "Ad Library", icon: AdLibraryIcon, notes: [{ text: "Foreplay", where: "tl" }] },
  { name: "Ad Tracker", icon: AdTrackerIcon, notes: [{ text: "Triple Whale", where: "tl" }] },
  { name: "Competitors", icon: CompetitorsIcon, notes: [{ text: "Similarweb", where: "tc" }] },
  { name: "Portfolio", icon: PortfolioIcon },
  { name: "Integrations", icon: IntegrationsIcon, notes: [{ text: "Make", where: "tl" }] },
  {
    name: "Knowledge",
    icon: KnowledgeIcon,
    notes: [
      { text: "Notion", where: "tr" },
      { text: "per-seat pricing", where: "r", comment: true, rot: 5 },
    ],
  },
  // Row 4 — the ops row under the brace
  { name: "Retail POS", icon: RetailIcon, notes: [{ text: "Lightspeed", where: "tl" }] },
  { name: "Invoicing", icon: InvoicingIcon, notes: [{ text: "Vyapar", where: "tl" }] },
  { name: "Projects", icon: ProjectsIcon, notes: [{ text: "Asana", where: "tc" }] },
  { name: "eSign", icon: SignIcon, notes: [{ text: "DocuSign", where: "tl" }] },
  { name: "HR", icon: HrIcon, notes: [{ text: "Keka", where: "tl" }] },
  { name: "Helpdesk", icon: HelpdeskIcon, notes: [{ text: "Zendesk", where: "tr" }] },
];

const TOTAL_NOTES = APPS.reduce((n, a) => n + (a.notes?.length ?? 0), 0);

/* ─── Section ─────────────────────────────────────────────────────────────── */

export const AppsComparisonSection: React.FC = () => {
  const [without, setWithout] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Trigger the draw-in of the red X + platform card shortly after first paint
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 700);
    return () => clearTimeout(t);
  }, []);

  const codiicOn = mounted && !without;

  let noteIndex = -1;

  return (
    <section id="one-platform" className="relative bg-transparent py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E6E4] bg-white text-xs font-semibold text-[#5A6270]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B879]" />
            One platform, not twelve tools
          </div>
          <h2 className="mt-5 text-[34px] sm:text-5xl lg:text-[56px] font-bold text-[#171923] tracking-[-0.035em] leading-[1.05]">
            Everything connected.{" "}
            <em className="font-serif italic font-normal text-[#008F60]">Nothing duct-taped.</em>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#5A6270] leading-relaxed">
            These aren&apos;t integrations — they&apos;re one system. Flip the switch to remember
            what running a business looked like before CODIIC.
          </p>
        </div>

        {/* App grid + annotation layer */}
        <div className="relative max-w-5xl mx-auto mt-2 pt-12 pb-20 px-2 sm:px-8 lg:px-32">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-16 sm:gap-x-6 sm:gap-y-20">
            {APPS.map((app, appIdx) => {
              const Icon = app.icon;
              return (
                <div
                  key={app.name}
                  className={`relative transition-all duration-500 ${
                    without ? "" : "opacity-40 saturate-[0.5]"
                  }`}
                >
                  {app.notes?.map((note) => {
                    noteIndex += 1;
                    const p = PLACEMENT[note.where];
                    // Below lg the grid reflows to 3/4 columns — show only the
                    // alternating (even-index) notes so labels can never collide.
                    const hideBelowLg = note.comment || appIdx % 2 === 1;
                    const visibility = hideBelowLg ? "hidden lg:flex" : "flex";
                    return (
                      <div
                        key={note.text}
                        aria-hidden
                        className={`without-note pointer-events-none absolute z-20 ${p.wrap} ${visibility} transition-all duration-500 ease-out ${
                          without
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-3 scale-95"
                        }`}
                        style={{ transitionDelay: without ? `${120 + noteIndex * 45}ms` : "0ms" }}
                      >
                        {p.arrowFirst && <Arrow kind={p.arrow} className={p.arrowCls} />}
                        <span
                          className={`font-serif italic whitespace-nowrap leading-none ${
                            note.comment
                              ? "text-lg sm:text-xl text-[#008F60]"
                              : "text-xl sm:text-2xl text-[#171923]"
                          }`}
                          style={{ rotate: `${note.rot ?? (note.comment ? -7 : -4)}deg` }}
                        >
                          {note.text}
                        </span>
                        {!p.arrowFirst && <Arrow kind={p.arrow} className={p.arrowCls} />}
                      </div>
                    );
                  })}

                  {/* Tile */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-white border border-black/[0.04] shadow-[0_14px_30px_-14px_rgba(23,25,35,0.22)] flex items-center justify-center transition-transform duration-300 hover:-translate-y-1">
                    <Icon className="w-8 h-8 sm:w-9 sm:h-9" />
                  </div>

                  {/* Red strike through this scattered tool — CODIIC is on */}
                  <svg
                    viewBox="0 0 64 64"
                    aria-hidden
                    className={`without-note pointer-events-none absolute top-0 inset-x-0 mx-auto w-14 h-14 sm:w-16 sm:h-16 z-10 transition-opacity duration-200 ${
                      without ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <path
                      d="M11 11 L53 53 M53 11 L11 53"
                      stroke="#E11D48"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      fill="none"
                      pathLength={100}
                      strokeDasharray="100"
                      style={{
                        strokeDashoffset: codiicOn ? 0 : 100,
                        transition: "stroke-dashoffset 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                        transitionDelay: `${appIdx * 40}ms`,
                      }}
                    />
                  </svg>

                  <div className="mt-2 text-[11px] sm:text-xs font-semibold text-[#171923]/85 text-center leading-tight">
                    {app.name}
                  </div>
                </div>
              );
            })}
          </div>

          {/* The one platform that replaces them all */}
          <div
            aria-hidden={without}
            className={`absolute left-1/2 top-[48%] z-30 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out ${
              without || !mounted
                ? "opacity-0 scale-90 pointer-events-none"
                : "opacity-100 scale-100"
            }`}
          >
            <div className="animate-tool-float w-[240px] sm:w-[300px] rounded-3xl bg-white border border-black/[0.06] shadow-[0_30px_70px_-20px_rgba(23,25,35,0.35)] px-6 py-6 sm:px-8 sm:py-7 text-center">
              <div className="mx-auto w-12 h-12 rounded-2xl bg-[#F1F0EA] flex items-center justify-center">
                <Image
                  src="/logo_withot text.png"
                  alt="CODIIC"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <div className="mt-3 text-xl sm:text-2xl font-bold text-[#171923] tracking-tight leading-tight">
                One platform.{" "}
                <em className="font-serif italic font-normal text-[#008F60]">Every app.</em>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm text-[#5A6270]">
                All tools · every feature · one login
              </p>
              <div className="mt-4 flex justify-center">
                <RupeeOfferPill />
              </div>
            </div>
          </div>

          {/* Hand-drawn brace under the ops row */}
          <div
            aria-hidden
            className={`without-note pointer-events-none absolute left-[3%] bottom-5 w-[64%] transition-all duration-500 ease-out ${
              without ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ transitionDelay: without ? `${140 + TOTAL_NOTES * 45}ms` : "0ms" }}
          >
            <svg viewBox="0 0 600 44" preserveAspectRatio="none" className="w-full h-10" fill="none">
              <path
                d="M8 8 Q 150 38 296 38 Q 446 38 592 10 M8 8 L3 2 M592 10 L597 4"
                stroke={INK}
                strokeWidth="2.5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                opacity="0.8"
              />
            </svg>
            <span
              className="font-serif italic text-xl sm:text-2xl whitespace-nowrap absolute left-1/2 top-full -translate-x-1/2 -translate-y-1.5 text-[#171923]"
              style={{ rotate: "-2deg" }}
            >
              each billed per seat, per month
            </span>
          </div>
        </div>

        {/* Toggle + price story */}
        <div className="max-w-5xl mx-auto flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between px-2 sm:px-8 lg:px-24">
          <button
            type="button"
            role="switch"
            aria-checked={without}
            onClick={() => setWithout((v) => !v)}
            className="group flex items-center gap-3 cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className={`w-6 h-6 transition-colors duration-300 ${
                without ? "text-[#171923]" : "text-[#00B879]"
              }`}
              aria-hidden
            >
              <path
                d="M12 4v3.5M12 16.5V20M4 12h3.5M16.5 12H20M6.3 6.3l2.4 2.4M15.3 15.3l2.4 2.4M6.3 17.7l2.4-2.4M15.3 8.7l2.4-2.4"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
            <span
              className={`relative inline-flex w-11 h-6 shrink-0 rounded-full transition-colors duration-300 ${
                without ? "bg-[#171923]" : "bg-[#CBD5E1]"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${
                  without ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </span>
            <span
              className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${
                without ? "text-[#171923]" : "text-[#5A6270]"
              }`}
            >
              Imagine without <span className="font-bold">CODIIC</span>
            </span>
          </button>

          {/* Price story: scattered-tool bill struck out by the ₹1/day offer */}
          <div className="flex flex-col sm:items-end gap-2.5">
            <div className="relative inline-flex self-start sm:self-end">
              <span
                className={`font-serif italic text-xl sm:text-2xl whitespace-nowrap transition-colors duration-300 ${
                  without ? "text-[#171923]" : "text-[#8A919C]"
                }`}
              >
                ₹40,000+/mo in tools
              </span>
              {/* Big red hand-drawn cross — only while CODIIC is in the picture */}
              <svg
                viewBox="0 0 160 44"
                preserveAspectRatio="none"
                aria-hidden
                className={`without-note pointer-events-none absolute -inset-x-3 -inset-y-1 w-[calc(100%+24px)] h-[calc(100%+8px)] transition-all duration-500 ease-out ${
                  without ? "opacity-0 scale-90" : "opacity-100 scale-100"
                }`}
              >
                <path
                  d="M6 6 C 55 18, 108 28, 154 38 M154 6 C 106 16, 54 28, 6 38"
                  stroke="#E11D48"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
