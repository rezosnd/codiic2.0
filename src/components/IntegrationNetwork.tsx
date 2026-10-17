"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { INTEGRATIONS_DATA, IntegrationItem } from "@/data/integrations";
import { renderIntegrationLogo } from "./BrandLogos";

interface IntegrationNetworkProps {
  onOpenGetStarted: () => void;
}

export const IntegrationNetwork: React.FC<IntegrationNetworkProps> = ({
  onOpenGetStarted,
}) => {
  const [selectedId, setSelectedId] = useState<string>("whatsapp");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isInView, setIsInView] = useState<boolean>(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // IntersectionObserver to pause continuous SVG animation when off-screen
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

  // Determine active item (hovered takes priority for immediate inspection feedback)
  const activeItemId = hoveredId || selectedId;
  const activeItem =
    INTEGRATIONS_DATA.find((item) => item.id === activeItemId) ||
    INTEGRATIONS_DATA[0];

  // Mobile category filtering
  const categories = ["All", "Messaging & Comms", "Payments & Billing", "Leads & Marketing", "eCommerce & Store", "Automation & API"];
  const filteredIntegrations =
    activeCategory === "All"
      ? INTEGRATIONS_DATA
      : INTEGRATIONS_DATA.filter((item) => item.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="integrations"
      className="py-20 sm:py-28 bg-[#E9EBE7] border-b border-[#D9DED8] relative overflow-hidden"
      aria-labelledby="integrations-heading"
    >
      {/* Subtle ambient mint background aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[520px] bg-[#E8F8F1]/60 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-[#008F60] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00B879]" aria-hidden="true" />
            <span>CONNECT YOUR WORKSPACE</span>
          </div>

          {/* Headline */}
          <h2
            id="integrations-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight leading-tight"
          >
            Your tools. Connected.
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#555A68] leading-relaxed max-w-2xl mx-auto">
            Bring the tools your business uses into one connected workflow with CODIIC.
          </p>

          {/* Trust & Architecture Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7F9F8] border border-[#E2E8E5] text-xs font-semibold text-[#171923]">
            <span
              className={`w-2 h-2 rounded-full bg-[#00B879] ${
                isInView && !prefersReducedMotion ? "animate-pulse" : ""
              }`}
              aria-hidden="true"
            />
            <span>Single unified database • Real-time webhooks & OAuth 2.0</span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP & TABLET: Interactive SVG Integration Network    */}
        {/* ======================================================== */}
        <div className="hidden md:block relative w-full max-w-5xl mx-auto bg-[#F7F9F8] border border-[#E2E8E5] rounded-3xl p-6 sm:p-8 shadow-sm overflow-hidden">
          {/* Top Status Bar inside Network Container */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E8EAF0] mb-3">
            <div className="flex items-center gap-2.5">
              <span
                className={`w-2.5 h-2.5 rounded-full bg-[#00B879] ${
                  isInView && !prefersReducedMotion ? "animate-pulse" : ""
                }`}
                aria-hidden="true"
              />
              <span className="text-xs font-mono font-bold text-[#171923] tracking-wider uppercase">
                CODIIC UNIFIED SYNC BUS • 8 AUTHENTIC CONNECTORS
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#555A68]">
              <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[#008F60] bg-[#E8F8F1] px-2.5 py-0.5 rounded-full border border-[#00B879]/20">
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Verified Interoperability</span>
              </span>
              <span className="hidden lg:inline text-gray-400">•</span>
              <span className="hidden lg:inline">Hover any card to inspect live data flow</span>
            </div>
          </div>

          {/* SVG Visual Stage (1000 x 580 coordinate system) */}
          <div className="relative w-full h-[580px] select-none">
            {/* SVG Connector Paths & Packet Stream */}
            <svg
              viewBox="0 0 1000 580"
              preserveAspectRatio="xMidYMid meet"
              className="absolute inset-0 w-full h-full pointer-events-none"
              aria-hidden="true"
            >
              <defs>
                {/* Active Connector Gradient */}
                <linearGradient id="grad-active-hub" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00B879" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#008F60" stopOpacity="0.95" />
                </linearGradient>

                {/* Inactive Connector Gradient */}
                <linearGradient id="grad-idle-hub" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D2DDD7" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#D2DDD7" stopOpacity="0.35" />
                </linearGradient>

                {/* Glow Filter for Active Packets */}
                <filter id="packet-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Concentric Guide Rings around CODIIC Hub (500, 290) */}
              <circle
                cx="500"
                cy="290"
                r="78"
                fill="none"
                stroke="#00B879"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                className="opacity-30"
              />
              <circle
                cx="500"
                cy="290"
                r="160"
                fill="none"
                stroke="#00B879"
                strokeWidth="0.8"
                strokeDasharray="6 6"
                className="opacity-20"
              />
              <circle
                cx="500"
                cy="290"
                r="280"
                fill="none"
                stroke="#00B879"
                strokeWidth="0.6"
                strokeDasharray="8 8"
                className="opacity-15"
              />

              {/* 8 Curved SVG Connector Paths */}
              {INTEGRATIONS_DATA.map((item, idx) => {
                const isSelected = activeItemId === item.id;
                const pathId = `connector-path-${item.id}`;
                // Stagger duration between 2.6s and 3.8s for natural light-flow
                const packetDuration = 2.6 + (idx % 4) * 0.4;

                return (
                  <g key={item.id}>
                    {/* Base Inactive Path */}
                    <path
                      id={pathId}
                      d={item.path}
                      fill="none"
                      stroke={isSelected ? "url(#grad-active-hub)" : "url(#grad-idle-hub)"}
                      strokeWidth={isSelected ? "2.5" : "1.5"}
                      strokeDasharray={isSelected ? "6 5" : "4 4"}
                      strokeLinecap="round"
                      className={`transition-all duration-300 ${
                        isSelected && isInView && !prefersReducedMotion
                          ? "animate-connector-flow"
                          : ""
                      }`}
                    />

                    {/* Small anchor pin at card connection coordinate */}
                    <circle
                      cx={item.cx}
                      cy={item.cy}
                      r={isSelected ? "4" : "3"}
                      fill={isSelected ? "#00B879" : "#C4D0CA"}
                      className="transition-all duration-200"
                    />

                    {/* Animated Light-Flow Data Packet along path */}
                    {isInView && !prefersReducedMotion && (
                      <circle
                        r={isSelected ? "4.5" : "3"}
                        fill={isSelected ? "#00B879" : "#00B879"}
                        opacity={isSelected ? "0.95" : "0.55"}
                        filter={isSelected ? "url(#packet-glow)" : undefined}
                      >
                        <animateMotion
                          path={item.path}
                          dur={`${packetDuration}s`}
                          repeatCount="indefinite"
                          begin={`${idx * 0.35}s`}
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Central CODIIC Core Hub Node (Centered at 500, 290 = 50%, 50%) */}
            <div
              className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-auto"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <div className="relative group">
                {/* Pulsing ring aura */}
                <div
                  className={`absolute -inset-4 bg-[#00B879]/20 rounded-full blur-md ${
                    isInView && !prefersReducedMotion ? "animate-hub-ripple" : "opacity-30"
                  }`}
                  aria-hidden="true"
                />

                {/* Central Hub Circle with official symbol logo */}
                <div className="relative w-24 h-24 rounded-full bg-white border-2 border-[#00B879] shadow-xl flex items-center justify-center p-3.5 transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/logo_withot text.png"
                    alt="CODIIC Central Hub"
                    width={64}
                    height={64}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Status pill badge */}
              <div className="mt-2.5 px-3 py-1 rounded-full bg-[#171923] text-white text-[11px] font-bold font-mono shadow-md tracking-wider flex items-center gap-1.5">
                <span
                  className={`w-1.5 h-1.5 rounded-full bg-[#00B879] ${
                    isInView && !prefersReducedMotion ? "animate-pulse" : ""
                  }`}
                  aria-hidden="true"
                />
                <span>CODIIC CORE</span>
              </div>
            </div>

            {/* 8 Orbiting Integration Cards (Positioned via percentage of 1000 x 580) */}
            {INTEGRATIONS_DATA.map((item) => {
              const isSelected = activeItemId === item.id;
              const leftPercent = (item.cx / 1000) * 100;
              const topPercent = (item.cy / 580) * 100;

              return (
                <div
                  key={item.id}
                  style={{
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                  }}
                  onClick={() => setSelectedId(item.id)}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setSelectedId(item.id)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  aria-label={`View integration details for ${item.name}`}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer p-3.5 rounded-2xl transition-all duration-200 border w-[208px] text-left outline-hidden focus-visible:ring-2 focus-visible:ring-[#00B879] ${
                    isSelected
                      ? "bg-white border-[#00B879] shadow-xl shadow-[#00B879]/15 scale-105 ring-2 ring-[#00B879]/20"
                      : "bg-white/95 border-[#E2E6E4] hover:border-[#00B879]/50 hover:bg-white shadow-xs hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    {/* Authentic Brand Logo */}
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center p-1.5 shrink-0 shadow-2xs border transition-colors"
                      style={{
                        backgroundColor: item.brandColorLight,
                        borderColor: item.brandColorBorder,
                      }}
                      aria-label={item.accessibleName}
                    >
                      {renderIntegrationLogo(item.id, "w-full h-full object-contain")}
                    </div>

                    {/* Status / Category Tag */}
                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 rounded-full transition-colors ${
                        isSelected
                          ? "bg-[#E8F8F1] text-[#008F60]"
                          : "bg-[#F7F9F8] text-[#555A68]"
                      }`}
                    >
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Service Name */}
                  <div className="text-xs font-bold text-[#171923] tracking-tight truncate">
                    {item.name}
                  </div>

                  {/* Protocol / Category */}
                  <div className="text-[10px] text-[#555A68] truncate mt-0.5 flex items-center justify-between">
                    <span>{item.protocol}</span>
                    <span className="text-[9px] text-[#008F60] font-mono font-semibold">
                      {item.latency}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Real-Time Live Data Flow Inspection Panel (Below Network) */}
          <div className="mt-3 p-4 rounded-2xl bg-white border border-[#E2E8E5] shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 transition-all">
            <div className="flex items-start gap-3.5 min-w-0">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center p-2 shrink-0 border mt-0.5 shadow-2xs"
                style={{
                  backgroundColor: activeItem.brandColorLight,
                  borderColor: activeItem.brandColorBorder,
                }}
              >
                {renderIntegrationLogo(activeItem.id, "w-full h-full object-contain")}
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-bold text-[#171923]">
                    {activeItem.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#008F60] bg-[#E8F8F1] px-2.5 py-0.5 rounded-full border border-[#00B879]/20 font-semibold">
                    {activeItem.status}
                  </span>
                  <span className="text-[10px] font-mono text-[#555A68] bg-[#F7F9F8] px-2 py-0.5 rounded-full border border-[#E2E8E5]">
                    Latency: {activeItem.latency}
                  </span>
                </div>

                {/* Real Payload Preview */}
                <div className="mt-1.5 flex items-baseline gap-2 text-xs text-[#555A68] font-mono leading-relaxed truncate">
                  <span className="text-[#008F60] font-bold shrink-0">
                    [{activeItem.samplePayload.event}]
                  </span>
                  <span className="truncate text-[#171923]">
                    {activeItem.samplePayload.detail}
                  </span>
                  <span className="text-[#8A90A0] shrink-0">→</span>
                  <span className="text-[#008F60] font-semibold truncate shrink-0">
                    {activeItem.samplePayload.destination}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="shrink-0 flex items-center gap-2 self-end lg:self-center">
              <button
                onClick={onOpenGetStarted}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#171923] hover:bg-[#00B879] text-white text-xs font-bold transition-colors shadow-xs active:scale-95"
              >
                <span>Connect {activeItem.shortName}</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Quick Service Selector Pills for Immediate Interaction */}
          <div className="mt-3 pt-3 border-t border-[#E8EAF0] flex items-center justify-between flex-wrap gap-2 text-xs">
            <span className="text-[11px] font-semibold text-[#555A68]">
              Select connector:
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {INTEGRATIONS_DATA.map((item) => {
                const isSelected = activeItemId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                      isSelected
                        ? "bg-[#00B879] text-white font-bold shadow-2xs"
                        : "bg-white text-[#555A68] hover:text-[#171923] hover:bg-[#F0F4F2] border border-[#E2E8E5]"
                    }`}
                  >
                    {item.shortName}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE VIEW: Deliberately Responsive Vertical Hub & List */}
        {/* ======================================================== */}
        <div className="md:hidden space-y-5">
          {/* Mobile Central Hub Card */}
          <div className="p-4 rounded-3xl bg-[#F7F9F8] border border-[#E2E8E5] shadow-xs relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-2xl bg-white border border-[#00B879]/40 shadow-xs flex items-center justify-center p-2 shrink-0">
                  <Image
                    src="/logo_withot text.png"
                    alt="CODIIC Hub"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                  <span
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#00B879] border-2 border-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#008F60] uppercase tracking-wider">
                    CENTRAL SYNC ENGINE
                  </div>
                  <h3 className="text-sm font-extrabold text-[#171923]">
                    CODIIC Workspace Core
                  </h3>
                  <div className="text-[11px] text-[#555A68]">
                    8 operational connectors active
                  </div>
                </div>
              </div>

              <div className="px-2.5 py-1 rounded-full bg-[#E8F8F1] text-[#008F60] text-[10px] font-bold font-mono">
                99.98% SYNC
              </div>
            </div>

            {/* Downward animated connector line on mobile */}
            <div className="mt-3 pt-3 border-t border-[#E8EAF0] flex items-center justify-center">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono text-[#008F60]">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#00B879] animate-pulse"
                  aria-hidden="true"
                />
                <span>Streaming bidirectional data stream</span>
              </div>
            </div>
          </div>

          {/* Category Filter Pills on Mobile */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                  activeCategory === cat
                    ? "bg-[#171923] text-white"
                    : "bg-[#F7F9F8] text-[#555A68] border border-[#E2E8E5] hover:bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Responsive Touch-Friendly Integration Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {filteredIntegrations.map((item) => {
              const isSelected = selectedId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`p-4 rounded-2xl border transition-all text-left ${
                    isSelected
                      ? "bg-white border-[#00B879] shadow-md ring-1 ring-[#00B879]/30"
                      : "bg-[#F7F9F8] border-[#E2E8E5] active:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center p-1.5 shrink-0 border"
                        style={{
                          backgroundColor: item.brandColorLight,
                          borderColor: item.brandColorBorder,
                        }}
                      >
                        {renderIntegrationLogo(item.id, "w-full h-full object-contain")}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#171923] leading-tight">
                          {item.name}
                        </h4>
                        <span className="text-[10px] text-[#555A68]">
                          {item.protocol}
                        </span>
                      </div>
                    </div>

                    <span className="text-[9px] font-mono font-bold text-[#008F60] bg-[#E8F8F1] px-2 py-0.5 rounded-full border border-[#00B879]/20">
                      {item.latency}
                    </span>
                  </div>

                  <p className="text-xs text-[#555A68] leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Sample payload trigger preview */}
                  <div className="mt-3 pt-2.5 border-t border-[#E8EAF0] flex items-center justify-between text-[11px]">
                    <span className="font-mono text-[#008F60] font-semibold truncate max-w-[200px]">
                      {item.samplePayload.event}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenGetStarted();
                      }}
                      className="text-[#171923] hover:text-[#00B879] font-bold inline-flex items-center gap-1 shrink-0 ml-2"
                    >
                      <span>Connect</span>
                      <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Developer API & Security Trust Callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 sm:px-6 rounded-2xl bg-[#F7F9F8] border border-[#E2E8E5] text-xs text-[#555A68] max-w-2xl mx-auto shadow-2xs">
            <div className="flex items-center gap-2 text-[#171923] font-semibold">
              <Lock className="w-4 h-4 text-[#00B879]" aria-hidden="true" />
              <span>Enterprise Grade Security</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>All webhook signatures verified with HMAC-SHA256 & TLS 1.3 encryption.</span>
            <button
              onClick={onOpenGetStarted}
              className="text-[#008F60] font-bold hover:underline shrink-0"
            >
              Request API Access →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
