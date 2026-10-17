"use client";

import React from "react";
import {
  WhatsAppLogo,
  RazorpayLogo,
  GoogleWorkspaceLogo,
  MetaLogo,
  ShopifyLogo,
  AwsLogo,
} from "./BrandLogos";

interface IntegrationItem {
  name: string;
  Logo: React.FC<{ className?: string }>;
}

const integrations: IntegrationItem[] = [
  { name: "WhatsApp Business", Logo: WhatsAppLogo },
  { name: "Razorpay",          Logo: RazorpayLogo },
  { name: "Google Workspace",  Logo: GoogleWorkspaceLogo },
  { name: "Meta",              Logo: MetaLogo },
  { name: "Shopify",           Logo: ShopifyLogo },
  { name: "AWS",               Logo: AwsLogo },
];

// Duplicate 4× so the marquee never shows a gap on any screen width
const track = [
  ...integrations,
  ...integrations,
  ...integrations,
  ...integrations,
];

const Pill: React.FC<{ item: IntegrationItem; id: string }> = ({ item, id }) => (
  <div
    key={id}
    className="
      group flex items-center gap-2.5 px-4 py-2.5 shrink-0
      rounded-full
      bg-white/60 hover:bg-white/90
      border border-black/[0.06] hover:border-black/[0.12]
      shadow-[0_1px_4px_rgba(0,0,0,0.06)]
      hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)]
      backdrop-blur-md
      transition-all duration-300 ease-out
      hover:-translate-y-px
      select-none cursor-default
    "
  >
    {/* Colourful brand logo — naturally coloured, no tint */}
    <item.Logo className="w-[18px] h-[18px] shrink-0 opacity-90 group-hover:opacity-100 transition-opacity" />

    {/* Brand name — neutral, no brand colour forced */}
    <span className="text-[13px] font-semibold text-[#2D3340] tracking-[-0.01em] whitespace-nowrap">
      {item.name}
    </span>
  </div>
);

export const LogoStrip: React.FC = () => (
  <section className="py-10 sm:py-12 overflow-hidden">
    {/* Subtle eyebrow */}
    <p className="text-center text-[11px] sm:text-xs font-medium text-[#8A939F] tracking-[0.08em] uppercase mb-6 sm:mb-8 px-4">
      Natively connected to the tools you already use
    </p>

    {/* Marquee wrapper with fade-out edge masks */}
    <div
      className="relative w-full overflow-hidden pause-on-hover"
      style={{
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)",
        maskImage:
          "linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)",
      }}
    >
      {/* Infinite scroll track — two identical halves = seamless loop */}
      <div className="flex w-max animate-marquee-left will-change-transform">
        {/* Half A */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 px-1.5">
          {track.map((item, i) => (
            <Pill key={`a-${item.name}-${i}`} item={item} id={`a-${item.name}-${i}`} />
          ))}
        </div>
        {/* Half B — aria-hidden clone to close the loop */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 px-1.5" aria-hidden>
          {track.map((item, i) => (
            <Pill key={`b-${item.name}-${i}`} item={item} id={`b-${item.name}-${i}`} />
          ))}
        </div>
      </div>
    </div>
  </section>
);
