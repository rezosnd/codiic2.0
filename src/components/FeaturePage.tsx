"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { FinalCtaSection } from "./FinalCtaSection";
import { Reveal } from "./Reveal";

export interface FeatureCard {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface FeaturePageProps {
  /** e.g. "CRM 360 & Pipeline" — used in the breadcrumb last segment */
  crumbLabel: string;
  crumbParent?: { label: string; href: string };
  badge: string;
  badgeChip?: string; // e.g. "POPULAR" — optional leading chip inside badge pill
  headline: React.ReactNode;
  subheadline: string;
  primaryCta?: string;
  secondaryCta?: { label: string; href: string };
  microTrust?: string;
  /** Interactive dashboard-style mockup rendered under the hero copy */
  mockup: React.ReactNode;
  features: FeatureCard[];
  featuresHeading?: React.ReactNode;
  featuresSub?: string;
  /** Optional extra sections rendered between features and CTA */
  extras?: React.ReactNode;
  ctaHeadline?: string;
  ctaSubheadline?: string;
  ctaLabel?: string;
  ctaPill?: string;
  onOpenGetStarted: () => void;
  onOpenSeeHowItWorks: () => void;
}

export const FeaturePage: React.FC<FeaturePageProps> = ({
  crumbLabel,
  crumbParent = { label: "Platform", href: "/#tools" },
  badge,
  badgeChip,
  headline,
  subheadline,
  primaryCta = "Start Free",
  secondaryCta,
  microTrust,
  mockup,
  features,
  featuresHeading = (
    <>
      Built for everyday clarity,{" "}
      <em className="font-serif italic font-normal text-[#043B2C]">zero plugins.</em>
    </>
  ),
  featuresSub,
  extras,
  ctaHeadline,
  ctaSubheadline,
  ctaLabel,
  ctaPill,
  onOpenGetStarted,
  onOpenSeeHowItWorks,
}) => (
  <>
    {/* ── Hero ─────────────────────────────────────────────────────── */}
    <section className="relative pt-10 sm:pt-14 pb-16 sm:pb-20">
      {/* Emerald glow + dot-grid accents */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[480px] overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[860px] h-[420px] bg-[#064E3B]/10 blur-3xl rounded-full" />
        <div className="dot-grid absolute inset-x-0 top-0 h-64 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-[11px] font-semibold text-[#6B7280] mb-8"
        >
          <Link href="/" className="hover:text-[#043B2C] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={crumbParent.href} className="hover:text-[#043B2C] transition-colors">
            {crumbParent.label}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#111827]">{crumbLabel}</span>
        </nav>

        <Reveal className="text-center max-w-3xl mx-auto">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-3.5 py-1.5 rounded-full border border-[#E4E2D8] bg-white text-[11px] font-bold uppercase tracking-wider text-[#4B5563] max-w-full">
            {badgeChip && (
              <span className="px-1.5 py-0.5 rounded bg-[#C6A15B] text-[#3B2E12] text-[9px] font-extrabold shrink-0">
                {badgeChip}
              </span>
            )}
            <span className="text-center leading-snug">{badge}</span>
          </div>

          <h1 className="mt-5 text-[32px] sm:text-5xl lg:text-[54px] font-bold text-[#111827] tracking-[-0.035em] leading-[1.06]">
            {headline}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed">{subheadline}</p>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={onOpenGetStarted}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#064E3B] hover:bg-[#043B2C] text-white text-sm font-bold shadow-xl shadow-[#064E3B]/25 hover:shadow-2xl hover:shadow-[#064E3B]/35 transition-all active:scale-95 cursor-pointer"
            >
              {primaryCta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full bg-white text-sm font-bold text-[#111827] border border-[#E4E2D8] hover:border-[#C9CFC0] hover:bg-[#F7F7F2] transition-all active:scale-95"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>

          {microTrust && (
            <p className="mt-4 text-xs text-[#6B7280] font-medium">{microTrust}</p>
          )}
        </Reveal>

        <Reveal delay={140} className="mt-10 sm:mt-14">{mockup}</Reveal>
      </div>
    </section>

    {/* ── Feature Grid ─────────────────────────────────────────────── */}
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E4E2D8] bg-white text-xs font-semibold text-[#4B5563]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B]" />
            Everything Included
          </div>
          <h2 className="mt-5 text-[30px] sm:text-5xl font-bold text-[#111827] tracking-[-0.035em] leading-[1.08]">
            {featuresHeading}
          </h2>
          {featuresSub && (
            <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed">{featuresSub}</p>
          )}
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 70}>
                <div className="group h-full rounded-2xl bg-white border border-[#E4E2D8] p-6 hover:border-[#064E3B]/40 hover:shadow-[0_18px_44px_-20px_rgba(4,59,44,0.3)] hover:-translate-y-0.5 transition-all">
                  <div className="w-12 h-12 flex items-center justify-center drop-shadow-sm group-hover:scale-105 transition-transform">
                    <Icon className="w-12 h-12" />
                  </div>
                  <h3 className="mt-4 text-[15px] font-bold text-[#111827] tracking-tight group-hover:text-[#043B2C] transition-colors">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-[#4B5563] leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {extras}

    <FinalCtaSection
      onOpenGetStarted={onOpenGetStarted}
      onOpenSeeHowItWorks={onOpenSeeHowItWorks}
      pillLabel={ctaPill}
      headline={ctaHeadline}
      subheadline={ctaSubheadline}
      ctaLabel={ctaLabel}
    />
  </>
);
