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
];

/* ─── Animated SVG Network ─────────────────────────────────────────────────── */

/**
 * Each integration tile sits at a specific (cx, cy) in the 800×420 viewBox.
 * Paths all converge at the hub on the left at (80, 210).
 */
const HUB = { x: 80, y: 210 };

interface TilePos {
  id: string;
  cx: number;
  cy: number;
  Logo: LogoComponent;
  label: string;
}

// Desktop tile positions — mimicking the reference fan-out layout
const TILES_DESKTOP: TilePos[] = [
  { id: "whatsapp", cx: 340, cy: 60,  Logo: WhatsAppLogo,       label: "WhatsApp" },
  { id: "google",   cx: 540, cy: 130, Logo: GoogleWorkspaceLogo, label: "Workspace" },
  { id: "meta",     cx: 700, cy: 185, Logo: MetaLogo,            label: "Meta" },
  { id: "razorpay", cx: 420, cy: 215, Logo: RazorpayLogo,        label: "Razorpay" },
  { id: "shopify",  cx: 620, cy: 280, Logo: ShopifyLogo,         label: "Shopify" },
  { id: "aws",      cx: 340, cy: 370, Logo: AwsLogo,             label: "AWS" },
];

// Mobile tile positions inside a narrower 360×340 viewBox
const TILES_MOBILE: TilePos[] = [
  { id: "whatsapp", cx: 195, cy: 42,  Logo: WhatsAppLogo,       label: "WhatsApp" },
  { id: "google",   cx: 290, cy: 100, Logo: GoogleWorkspaceLogo, label: "Workspace" },
  { id: "meta",     cx: 310, cy: 175, Logo: MetaLogo,            label: "Meta" },
  { id: "razorpay", cx: 200, cy: 185, Logo: RazorpayLogo,        label: "Razorpay" },
  { id: "shopify",  cx: 290, cy: 265, Logo: ShopifyLogo,         label: "Shopify" },
  { id: "aws",      cx: 185, cy: 310, Logo: AwsLogo,             label: "AWS" },
];

/** Cubic bezier path from hub to tile with a horizontal bias */
function cubicPath(
  hub: { x: number; y: number },
  tile: { cx: number; cy: number }
) {
  const cpx1 = hub.x + (tile.cx - hub.x) * 0.55;
  const cpx2 = tile.cx - (tile.cx - hub.x) * 0.3;
  return `M ${hub.x} ${hub.y} C ${cpx1} ${hub.y}, ${cpx2} ${tile.cy}, ${tile.cx} ${tile.cy}`;
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

  return (
    <svg
      viewBox={`0 0 ${vw} ${vh}`}
      aria-hidden="true"
      className="w-full h-full overflow-visible"
      style={{ display: "block" }}
    >
      <defs>
        {/* Radial glow on hub */}
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00B879" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00B879" stopOpacity="0" />
        </radialGradient>
        {/* Traveling pulse gradient */}
        <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00B879" stopOpacity="0" />
          <stop offset="50%" stopColor="#00B879" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00B879" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ── Base connector paths (static light lines) ── */}
      {paths.map((d, i) => (
        <path
          key={`base-${tiles[i].id}`}
          d={d}
          fill="none"
          stroke="#CBD8EF"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={isInView ? 0.65 : 0}
          style={{
            transition: reducedMotion ? "none" : `opacity 0.8s ease ${i * 120}ms`,
          }}
        />
      ))}

      {/* ── Animated dashed flow lines ── */}
      {!reducedMotion &&
        paths.map((d, i) => (
          <path
            key={`flow-${tiles[i].id}`}
            d={d}
            fill="none"
            stroke="#00B879"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity={isInView ? 0.45 : 0}
            className="animate-connector-flow"
            style={{
              animationDelay: `${i * 0.38}s`,
              transition: `opacity 0.6s ease ${i * 100}ms`,
            }}
          />
        ))}

      {/* ── Hub node ── */}
      {/* outer glow */}
      <circle
        cx={hub.x}
        cy={hub.y}
        r={hubSize + 14}
        fill="url(#hubGlow)"
        opacity={isInView ? 1 : 0}
        style={{ transition: reducedMotion ? "none" : "opacity 0.8s ease" }}
      />
      {/* ring */}
      <circle
        cx={hub.x}
        cy={hub.y}
        r={hubSize + 4}
        fill="none"
        stroke="#00B879"
        strokeWidth="1"
        opacity={isInView ? 0.3 : 0}
        style={{ transition: reducedMotion ? "none" : "opacity 0.8s ease 0.2s" }}
      />
      {/* hub body */}
      <circle
        cx={hub.x}
        cy={hub.y}
        r={hubSize}
        fill="white"
        stroke="#E2E6E4"
        strokeWidth="1.5"
        filter="drop-shadow(0 4px 12px rgba(0,0,0,0.10))"
        opacity={isInView ? 1 : 0}
        style={{ transition: reducedMotion ? "none" : "opacity 0.6s ease 0.1s" }}
      />
      {/* CODIIC "C" lettermark */}
      <text
        x={hub.x}
        y={hub.y + 5}
        textAnchor="middle"
        fontSize={hubSize * 0.72}
        fontWeight="900"
        fontFamily="system-ui, -apple-system, sans-serif"
        fill="#00B879"
        opacity={isInView ? 1 : 0}
        style={{ transition: reducedMotion ? "none" : "opacity 0.5s ease 0.3s" }}
      >
        C
      </text>

      {/* ── Integration icon tiles ── */}
      {tiles.map((t, i) => {
        const half = tileSize / 2;
        const iconPad = tileSize * 0.22;
        const iconSize = tileSize - iconPad * 2;
        const r = tileSize * 0.28;
        return (
          <g
            key={t.id}
            opacity={isInView ? 1 : 0}
            style={{
              transition: reducedMotion
                ? "none"
                : `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${300 + i * 90}ms`,
            }}
          >
            {/* White rounded-square tile */}
            <rect
              x={t.cx - half}
              y={t.cy - half}
              width={tileSize}
              height={tileSize}
              rx={r}
              ry={r}
              fill="white"
              stroke="#E5E8EC"
              strokeWidth="1.2"
              filter="drop-shadow(0 3px 10px rgba(0,0,0,0.08))"
            />
            {/* Brand logo rendered via foreignObject (standard SVG spec) */}
            <foreignObject
              x={t.cx - iconSize / 2}
              y={t.cy - iconSize / 2}
              width={iconSize}
              height={iconSize}
            >
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <t.Logo className="w-full h-full" />
              </div>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
};

/* ─── Main Section ─────────────────────────────────────────────────────────── */

export const IntegrationNetwork: React.FC<IntegrationNetworkProps> = ({
  onOpenGetStarted,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsInView(true);
        observer.disconnect();
      },
      { threshold: 0.08 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="integrations"
      aria-labelledby="integrations-heading"
      className="relative bg-white py-20 sm:py-28 overflow-hidden"
    >
      {/* Very faint dot-grid texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header row ─────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: heading */}
          <div>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E6E4] bg-[#F7F9F8] text-xs font-semibold text-[#5A6270] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B879] animate-pulse-green" />
              Integrations
            </div>

            <h2
              id="integrations-heading"
              className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-[#171923] tracking-[-0.03em] leading-[1.08]"
            >
              Works with the tools{" "}
              <em className="font-serif italic font-normal text-[#008F60] not-italic">
                you already use.
              </em>
            </h2>
          </div>

          {/* Right: description + CTA */}
          <div className="flex flex-col justify-start pt-1 lg:pt-3">
            <p className="text-base sm:text-[17px] text-[#5A6270] leading-relaxed">
              Messages, payments, leads, orders and files flow into one CODIIC
              workspace — automatically, in real time. Connect once, and
              everything stays in sync.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenGetStarted}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#171923] hover:bg-[#00B879] text-white text-sm font-bold transition-all duration-200 active:scale-[0.97] cursor-pointer shadow-lg shadow-black/10 hover:shadow-[#00B879]/25"
              >
                Connect your tools
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <p className="text-[13px] font-semibold text-[#5A6270]">
                All integrations included —{" "}
                <span className="text-[#008F60] font-extrabold">₹1/day</span>
              </p>
            </div>
          </div>
        </div>

        {/* ── Animated Network (desktop) ─────────────────────── */}
        <div
          className="hidden sm:block mt-14 lg:mt-16 relative w-full"
          style={{ height: "clamp(300px, 38vw, 420px)" }}
          aria-hidden="true"
        >
          <NetworkSVG
            tiles={TILES_DESKTOP}
            hub={HUB}
            vw={800}
            vh={420}
            tileSize={64}
            hubSize={30}
            isInView={isInView}
            reducedMotion={reducedMotion}
          />
        </div>

        {/* ── Animated Network (mobile) ──────────────────────── */}
        <div
          className="sm:hidden mt-10 relative w-full"
          style={{ height: "340px" }}
          aria-hidden="true"
        >
          <NetworkSVG
            tiles={TILES_MOBILE}
            hub={{ x: 40, y: 175 }}
            vw={360}
            vh={340}
            tileSize={52}
            hubSize={22}
            isInView={isInView}
            reducedMotion={reducedMotion}
          />
        </div>

        {/* ── Integration Cards Grid ─────────────────────────── */}
        <ul
          id="integrations-list"
          className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          aria-label="Integrations list"
        >
          {INTEGRATIONS.map((item, i) => {
            const Logo = item.logo;
            return (
              <li
                key={item.id}
                className={`group rounded-[22px] bg-[#F7F9F8] hover:bg-white border border-transparent hover:border-[#E2E6E4] p-6 sm:p-7 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] ${
                  isInView ? "animate-tool-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 75}ms` }}
              >
                {/* Logo + name */}
                <div className="flex items-center gap-4">
                  <span className="w-13 h-13 shrink-0 rounded-2xl bg-white ring-1 ring-black/[0.06] flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:ring-[#00B879]/20 transition-all duration-300">
                    <Logo className="w-7 h-7" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[15px] font-bold text-[#171923] leading-tight">
                      {item.name}
                    </div>
                    <div className="mt-0.5 text-[13px] text-[#6B7280] leading-snug">
                      {item.role}
                    </div>
                  </div>
                </div>

                {/* Feature points */}
                <ul className="mt-5 space-y-2.5">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-[13.5px] text-[#3C4450] leading-snug"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#E8F8F1] text-[#008F60] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        {/* ── Trust footer ──────────────────────────────────── */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-[12px] text-[#8A939F] text-center">
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#171923]">
            <Lock className="w-3.5 h-3.5 text-[#00B879]" aria-hidden="true" />
            OAuth 2.0 &amp; signed webhooks
          </span>
          <span className="hidden sm:inline text-[#D1D5DB]">•</span>
          <span>Brand names and logos belong to their respective owners.</span>
        </div>
      </div>
    </section>
  );
};
