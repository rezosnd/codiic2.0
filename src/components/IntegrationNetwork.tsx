"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Lock } from "lucide-react";
import {
  WhatsAppLogo,
  RazorpayLogo,
  GoogleWorkspaceLogo,
  MetaLogo,
  ShopifyLogo,
  AwsLogo,
  StripeLogo,
  ZapierLogo,
  InstagramLogo,
  PhonePeLogo,
  ZohoLogo,
  GmailLogo,
} from "./BrandLogos";

interface IntegrationNetworkProps {
  onOpenGetStarted: () => void;
}

type LogoComponent = React.FC<{ className?: string }>;

interface Integration {
  id: string;
  name: string;
  role: string;
  points: string[];
  logo: LogoComponent;
}

const INTEGRATIONS: Integration[] = [
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    role: "Messaging & lead capture",
    points: ["Leads land in your CRM", "Order updates & catalogs"],
    logo: WhatsAppLogo,
  },
  {
    id: "razorpay",
    name: "Razorpay Payments",
    role: "UPI, cards & payment links",
    points: ["Auto-matched to invoices", "Instant settlement status"],
    logo: RazorpayLogo,
  },
  {
    id: "google",
    name: "Google Workspace",
    role: "Gmail, Calendar & Contacts",
    points: ["Emails logged to timeline", "Meetings synced both ways"],
    logo: GoogleWorkspaceLogo,
  },
  {
    id: "meta",
    name: "Meta Lead Gen",
    role: "Facebook & Instagram leads",
    points: ["Lead forms routed to reps", "DMs converted to leads"],
    logo: MetaLogo,
  },
  {
    id: "shopify",
    name: "Shopify Store",
    role: "Orders, catalog & inventory",
    points: ["Orders sync in real time", "Stock levels stay accurate"],
    logo: ShopifyLogo,
  },
  {
    id: "aws",
    name: "AWS Cloud",
    role: "Secure storage & backups",
    points: ["Encrypted file storage", "Nightly automated backups"],
    logo: AwsLogo,
  },
  {
    id: "stripe",
    name: "Stripe",
    role: "Global card & subscription billing",
    points: ["International payments supported", "Subscription auto-renewals"],
    logo: StripeLogo,
  },
  {
    id: "instagram",
    name: "Instagram Direct",
    role: "DMs & story lead capture",
    points: ["Replies routed to CRM", "Story leads auto-tagged"],
    logo: InstagramLogo,
  },
  {
    id: "zapier",
    name: "Zapier",
    role: "Connect 6000+ apps via Zaps",
    points: ["No-code automation triggers", "Multi-step workflow builder"],
    logo: ZapierLogo,
  },
  {
    id: "zoho",
    name: "Zoho Books",
    role: "GST invoicing & ledger sync",
    points: ["Auto-generate GST invoices", "Real-time P&L reconciliation"],
    logo: ZohoLogo,
  },
  {
    id: "phonepe",
    name: "PhonePe",
    role: "UPI payments & settlements",
    points: ["QR-code payment collection", "Instant settlement alerts"],
    logo: PhonePeLogo,
  },
  {
    id: "gmail",
    name: "Gmail",
    role: "Email automation & logging",
    points: ["Emails tracked in timeline", "Smart follow-up sequences"],
    logo: GmailLogo,
  },
];

/* ─── SVG Network ─────────────────────────────────────────────────────────── */

interface TilePos {
  id: string;
  cx: number;
  cy: number;
  Logo: LogoComponent;
  label: string;
}

const HUB_D = { x: 72, y: 240 };
const HUB_M = { x: 44, y: 170 };

const TILES_DESKTOP: TilePos[] = [
  { id: "whatsapp",  cx: 250, cy: 40,  Logo: WhatsAppLogo,        label: "WhatsApp"  },
  { id: "google",    cx: 430, cy: 80,  Logo: GoogleWorkspaceLogo,  label: "Workspace" },
  { id: "stripe",    cx: 640, cy: 60,  Logo: StripeLogo,           label: "Stripe"    },
  { id: "meta",      cx: 760, cy: 140, Logo: MetaLogo,             label: "Meta"      },
  { id: "instagram", cx: 310, cy: 175, Logo: InstagramLogo,        label: "Instagram" },
  { id: "razorpay",  cx: 530, cy: 200, Logo: RazorpayLogo,         label: "Razorpay"  },
  { id: "shopify",   cx: 730, cy: 250, Logo: ShopifyLogo,          label: "Shopify"   },
  { id: "zapier",    cx: 420, cy: 310, Logo: ZapierLogo,           label: "Zapier"    },
  { id: "zoho",      cx: 620, cy: 360, Logo: ZohoLogo,             label: "Zoho"      },
  { id: "phonepe",   cx: 260, cy: 390, Logo: PhonePeLogo,          label: "PhonePe"   },
  { id: "aws",       cx: 760, cy: 410, Logo: AwsLogo,              label: "AWS"       },
];

const TILES_MOBILE: TilePos[] = [
  { id: "whatsapp",  cx: 160, cy: 32,  Logo: WhatsAppLogo,        label: "WhatsApp"  },
  { id: "google",    cx: 295, cy: 78,  Logo: GoogleWorkspaceLogo,  label: "Workspace" },
  { id: "stripe",    cx: 320, cy: 155, Logo: StripeLogo,           label: "Stripe"    },
  { id: "meta",      cx: 185, cy: 148, Logo: MetaLogo,             label: "Meta"      },
  { id: "razorpay",  cx: 305, cy: 238, Logo: RazorpayLogo,         label: "Razorpay"  },
  { id: "shopify",   cx: 162, cy: 252, Logo: ShopifyLogo,          label: "Shopify"   },
  { id: "aws",       cx: 148, cy: 328, Logo: AwsLogo,              label: "AWS"       },
  { id: "zapier",    cx: 285, cy: 315, Logo: ZapierLogo,           label: "Zapier"    },
];

function cubicPath(hub: { x: number; y: number }, tile: { cx: number; cy: number }) {
  const dx = tile.cx - hub.x;
  return `M ${hub.x} ${hub.y} C ${hub.x + dx * 0.52} ${hub.y}, ${tile.cx - dx * 0.28} ${tile.cy}, ${tile.cx} ${tile.cy}`;
}

interface NetworkSVGProps {
  tiles: TilePos[];
  hub: { x: number; y: number };
  vw: number;
  vh: number;
  tileSize: number;
  hubSize: number;
  isInView: boolean;
  reducedMotion: boolean;
}

const NetworkSVG: React.FC<NetworkSVGProps> = ({
  tiles, hub, vw, vh, tileSize, hubSize, isInView, reducedMotion,
}) => {
  const paths = tiles.map((t) => cubicPath(hub, t));
  const iconPad = tileSize * 0.22;
  const iconSize = tileSize - iconPad * 2;
  const r = tileSize * 0.28;

  return (
    <svg
      viewBox={`0 0 ${vw} ${vh}`}
      aria-hidden="true"
      className="w-full h-full overflow-visible"
      style={{ display: "block" }}
    >
      <defs>
        <radialGradient id="intHubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00B879" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#00B879" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Base connector paths */}
      {paths.map((d, i) => (
        <path
          key={`base-${tiles[i].id}`}
          d={d}
          fill="none"
          stroke="#BDD0E8"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity={isInView ? 0.7 : 0}
          style={{ transition: reducedMotion ? "none" : `opacity 0.7s ease ${i * 90}ms` }}
        />
      ))}

      {/* Animated dashed flow paths */}
      {!reducedMotion && paths.map((d, i) => (
        <path
          key={`flow-${tiles[i].id}`}
          d={d}
          fill="none"
          stroke="#00B879"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={isInView ? 0.5 : 0}
          className="animate-connector-flow"
          style={{
            animationDelay: `${i * 0.32}s`,
            transition: `opacity 0.5s ease ${i * 80}ms`,
          }}
        />
      ))}

      {/* Hub glow */}
      <circle cx={hub.x} cy={hub.y} r={hubSize + 18} fill="url(#intHubGlow)"
        opacity={isInView ? 1 : 0}
        style={{ transition: reducedMotion ? "none" : "opacity 0.8s ease" }} />
      <circle cx={hub.x} cy={hub.y} r={hubSize + 5} fill="none" stroke="#00B879"
        strokeWidth="1" opacity={isInView ? 0.28 : 0}
        style={{ transition: reducedMotion ? "none" : "opacity 0.8s ease 0.2s" }} />
      <circle cx={hub.x} cy={hub.y} r={hubSize} fill="white" stroke="#E2E6E4"
        strokeWidth="1.5" filter="drop-shadow(0 4px 14px rgba(0,0,0,0.11))"
        opacity={isInView ? 1 : 0}
        style={{ transition: reducedMotion ? "none" : "opacity 0.6s ease 0.1s" }} />

      {/* CODIIC logo inside hub */}
      <foreignObject
        x={hub.x - hubSize * 0.58} y={hub.y - hubSize * 0.58}
        width={hubSize * 1.16} height={hubSize * 1.16}
        opacity={isInView ? 1 : 0}
        style={{ transition: reducedMotion ? "none" : "opacity 0.5s ease 0.35s" }}
      >
        {/* @ts-ignore */}
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="/logo_withot text.png" alt="CODIIC"
            style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>
      </foreignObject>

      {/* Integration icon tiles */}
      {tiles.map((t, i) => (
        <g key={t.id} opacity={isInView ? 1 : 0}
          style={{ transition: reducedMotion ? "none" : `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${280 + i * 80}ms` }}>
          <rect
            x={t.cx - tileSize / 2} y={t.cy - tileSize / 2}
            width={tileSize} height={tileSize}
            rx={r} ry={r}
            fill="white" stroke="#E4E8EC" strokeWidth="1.1"
            filter="drop-shadow(0 3px 10px rgba(0,0,0,0.08))"
          />
          <foreignObject
            x={t.cx - iconSize / 2} y={t.cy - iconSize / 2}
            width={iconSize} height={iconSize}
          >
            {/* @ts-ignore */}
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <t.Logo className="w-full h-full" />
            </div>
          </foreignObject>
        </g>
      ))}
    </svg>
  );
};

/* ─── Main Section ─────────────────────────────────────────────────────────── */

export const IntegrationNetwork: React.FC<IntegrationNetworkProps> = ({ onOpenGetStarted }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView]       = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showAll, setShowAll]         = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const h = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (!e.isIntersecting) return; setIsInView(true); obs.disconnect(); },
      { threshold: 0.06 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const MOBILE_INITIAL = 6;
  const mobileVisible  = showAll ? INTEGRATIONS : INTEGRATIONS.slice(0, MOBILE_INITIAL);
  const hiddenCount    = INTEGRATIONS.length - MOBILE_INITIAL;

  return (
    <section
      ref={sectionRef}
      id="integrations"
      aria-labelledby="integrations-heading"
      className="relative bg-white py-14 sm:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E6E4] bg-[#F7F9F8] text-xs font-semibold text-[#5A6270] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B879] animate-pulse-green" />
              Integrations
            </div>
            <h2
              id="integrations-heading"
              className="text-[26px] sm:text-[40px] lg:text-[50px] font-bold text-[#171923] tracking-[-0.03em] leading-[1.1]"
            >
              Works with the tools{" "}
              <em className="font-serif italic font-normal text-[#008F60] not-italic">
                you already use.
              </em>
            </h2>
          </div>

          <div className="flex flex-col lg:pt-3">
            <p className="text-[15px] sm:text-[17px] text-[#5A6270] leading-relaxed">
              Messages, payments, leads, orders and files flow into one CODIIC
              workspace — automatically, in real time. Connect once, and
              everything stays in sync.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenGetStarted}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171923] hover:bg-[#00B879] text-white text-sm font-bold transition-all duration-200 active:scale-[0.97] cursor-pointer shadow-lg shadow-black/10 hover:shadow-[#00B879]/25"
              >
                Connect your tools
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <p className="text-[13px] font-semibold text-[#5A6270]">
                All included — <span className="text-[#008F60] font-extrabold">₹1/day</span>
              </p>
            </div>
          </div>
        </div>

        {/* ── SVG Network — Desktop ──────────────────── */}
        <div
          className="hidden sm:block mt-12 lg:mt-14 w-full select-none"
          style={{ height: "clamp(300px, 40vw, 460px)" }}
          aria-hidden="true"
        >
          <NetworkSVG
            tiles={TILES_DESKTOP} hub={HUB_D}
            vw={860} vh={480} tileSize={62} hubSize={34}
            isInView={isInView} reducedMotion={reducedMotion}
          />
        </div>

        {/* ── SVG Network — Mobile (tight height) ────── */}
        <div
          className="sm:hidden mt-6 w-full select-none"
          style={{ height: "260px" }}
          aria-hidden="true"
        >
          <NetworkSVG
            tiles={TILES_MOBILE} hub={HUB_M}
            vw={370} vh={340} tileSize={44} hubSize={22}
            isInView={isInView} reducedMotion={reducedMotion}
          />
        </div>

        {/* ══════════════════════════════════════════════
            MOBILE — compact 2-col chips + show-more
            (hidden on sm and above)
        ══════════════════════════════════════════════ */}
        <div className="sm:hidden mt-7">
          <ul className="grid grid-cols-2 gap-2" aria-label="Integrations">
            {mobileVisible.map((item, i) => {
              const Logo = item.logo;
              return (
                <li
                  key={item.id}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-2xl bg-[#D8EEF9] border border-[#BCE1F5] active:bg-[#C8E4F3] transition-colors ${isInView ? "animate-tool-in" : "opacity-0"}`}
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <span className="w-8 h-8 shrink-0 rounded-xl bg-white ring-1 ring-black/[0.08] flex items-center justify-center shadow-xs">
                    <Logo className="w-4.5 h-4.5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11.5px] font-bold text-[#0F2A3D] leading-tight truncate">{item.name}</div>
                    <div className="text-[10px] text-[#355368] leading-tight truncate mt-0.5 font-medium">{item.role}</div>
                  </div>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="mt-3 w-full py-2.5 rounded-2xl border border-[#BCE1F5] bg-[#D8EEF9] hover:bg-[#C8E4F3] text-[12.5px] font-bold text-[#0F2A3D] transition-colors flex items-center justify-center gap-1.5 active:scale-[0.98]"
          >
            {showAll ? (
              <>Show less <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><path d="M2 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></>
            ) : (
              <>+{hiddenCount} more integrations <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></>
            )}
          </button>
        </div>

        {/* ══════════════════════════════════════════════
            DESKTOP — full 4-col detail grid
            (hidden on mobile)
        ══════════════════════════════════════════════ */}
        <ul
          id="integrations-list"
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12 sm:mt-14"
          aria-label="All integrations"
        >
          {INTEGRATIONS.map((item, i) => {
            const Logo = item.logo;
            return (
              <li
                key={item.id}
                className={`group rounded-[20px] bg-[#D8EEF9] hover:bg-[#CEEAF7] border border-[#BCE1F5] hover:border-[#9FD4F1] p-5 transition-all duration-300 hover:shadow-[0_12px_32px_-8px_rgba(15,42,61,0.15)] hover:-translate-y-0.5 ${isInView ? "animate-tool-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 shrink-0 rounded-xl bg-white ring-1 ring-black/[0.08] flex items-center justify-center shadow-xs group-hover:shadow-md transition-all duration-300">
                    <Logo className="w-6 h-6" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[13.5px] font-bold text-[#0F2A3D] leading-tight truncate">{item.name}</div>
                    <div className="mt-0.5 text-[11.5px] text-[#355368] leading-snug truncate font-medium">{item.role}</div>
                  </div>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-[12px] text-[#1D3B4F] leading-snug font-medium">
                      <span className="mt-0.5 w-3.5 h-3.5 rounded-full bg-white text-[#0369A1] shadow-2xs flex items-center justify-center shrink-0">
                        <Check className="w-2 h-2" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        {/* ── Trust line ─────────────────────────────── */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-[11.5px] text-[#8A939F] text-center">
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#171923]">
            <Lock className="w-3 h-3 text-[#00B879]" aria-hidden="true" />
            OAuth 2.0 &amp; signed webhooks
          </span>
          <span className="hidden sm:inline text-[#D1D5DB]">•</span>
          <span>Brand names and logos belong to their respective owners.</span>
        </div>
      </div>
    </section>
  );
};
