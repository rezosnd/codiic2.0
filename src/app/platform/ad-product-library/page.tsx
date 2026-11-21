"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { FeaturePage } from "@/components/FeaturePage";
import { AdLibraryMockup } from "@/components/PlatformMockups";
import {
  AdLibraryIcon,
  ProductLibraryIcon,
  CompetitorsIcon,
  ShopLibraryIcon,
  AdvertiserTrackerIcon,
  MagicAiIcon,
} from "@/components/ColorfulProductIcons";

export default function AdProductLibraryPage() {
  const router = useRouter();
  const goToLogin = () => router.push("/login");

  return (
    <PageShell>
      <FeaturePage
        onOpenGetStarted={goToLogin}
        onOpenSeeHowItWorks={goToLogin}
        crumbLabel="Ad & Product Intelligence"
        badge="Market & Creative Intelligence Suite"
        headline={
          <>
            Discover Winning Products &amp; High-Converting Ad Creatives{" "}
            <em className="font-serif italic font-normal text-[#008F60]">Before They Saturate.</em>
          </>
        }
        subheadline="Research top-performing Meta ads, track competitor storefronts, analyze trending SKUs, and use Magic AI Search to spot your next profitable product launch."
        primaryCta="Start Researching Free"
        secondaryCta={{ label: "See Sales Tracker", href: "/platform/sales-tracker" }}
        microTrust="Live Meta ad data · Competitor price alerts · Magic AI natural-language search"
        mockup={<AdLibraryMockup />}
        featuresHeading={
          <>
            Eight research tools,{" "}
            <em className="font-serif italic font-normal text-[#008F60]">one intelligence suite.</em>
          </>
        }
        features={[
          {
            title: "Global Meta Ad Library",
            desc: "Search high-performing Facebook & Instagram creatives by niche, hook type, and active run-time across every major market.",
            icon: AdLibraryIcon,
          },
          {
            title: "Trending Product Library",
            desc: "Spot high-margin winning products before saturation — with demand signals, supplier insights, and margin estimates built in.",
            icon: ProductLibraryIcon,
          },
          {
            title: "Competitor Store & Price Tracker",
            desc: "Get alerted the moment a rival store changes prices, launches products, or updates their funnel — never be blindsided.",
            icon: CompetitorsIcon,
          },
          {
            title: "Live Shop Library & Tech Stack Detector",
            desc: "Benchmark thousands of active storefronts — see their niches, pricing models, and the exact tech stack behind every build.",
            icon: ShopLibraryIcon,
          },
          {
            title: "Advertiser Scaling Tracker",
            desc: "Monitor top-spending advertisers, active ad volumes, scaling velocity, and seasonal campaign shifts in real time.",
            icon: AdvertiserTrackerIcon,
          },
          {
            title: "Magic AI Natural-Language Search",
            desc: "Ask questions across your store data, competitor ads, and CRM leads — 'which SKU has the best margin this month?' — and get instant answers.",
            icon: MagicAiIcon,
          },
        ]}
        ctaHeadline="Stop Guessing. Start Spying — Ethically. Start Today."
        ctaSubheadline="Find your next winning product and proven creative angles in minutes, not weeks."
        ctaLabel="Create Your Free Workspace"
      />
    </PageShell>
  );
}
