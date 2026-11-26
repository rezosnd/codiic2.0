"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { FeaturePage } from "@/components/FeaturePage";
import { SalesTrackerMockup } from "@/components/PlatformMockups";
import {
  SalesTrackerIcon,
  AnalyticsColorIcon,
  ProductLibraryIcon,
  IntegrationsColorIcon,
  PortfolioIcon,
  ClearerSalesColorIcon,
} from "@/components/ColorfulProductIcons";

export default function SalesTrackerPage() {
  const router = useRouter();
  const goToLogin = () => router.push("/login");

  return (
    <PageShell>
      <FeaturePage
        onOpenGetStarted={goToLogin}
        onOpenSeeHowItWorks={goToLogin}
        crumbLabel="Sales & Profit Tracker"
        badge="Live Commerce Analytics • 15-Minute Refresh"
        headline={
          <>
            Track Live Revenue, SKU Margins &amp; Net Profit{" "}
            <em className="font-serif italic font-normal text-[#043B2C]">Across Every Channel.</em>
          </>
        }
        subheadline="Stop guessing your true margins in spreadsheets. Monitor live orders, automatically deduct COGS and shipping, and track team & channel ROI in one dashboard."
        primaryCta="See Your Real Numbers"
        secondaryCta={{ label: "Explore the intelligence suite", href: "/platform/ad-product-library" }}
        microTrust="15-minute live refresh · Automatic COGS & shipping deductions · Channel-level ROI"
        mockup={<SalesTrackerMockup />}
        featuresHeading={
          <>
            Real profit numbers,{" "}
            <em className="font-serif italic font-normal text-[#043B2C]">not vanity revenue.</em>
          </>
        }
        features={[
          {
            title: "15-Minute Real-Time Revenue Sync",
            desc: "Orders from your storefront, WhatsApp, and every connected channel stream in every 15 minutes — your numbers are always current.",
            icon: SalesTrackerIcon,
          },
          {
            title: "Automatic Net-Margin & COGS Calculator",
            desc: "CODIIC deducts product cost, shipping, and gateway fees automatically — see true profit per order, not just top-line revenue.",
            icon: AnalyticsColorIcon,
          },
          {
            title: "SKU-Level Performance Breakdown",
            desc: "Know exactly which products make money and which bleed margin — sort by units, revenue, or margin percentage in one table.",
            icon: ProductLibraryIcon,
          },
          {
            title: "Channel & CTWA Ad Attribution",
            desc: "Attribute every rupee of revenue to the exact channel — storefront, WhatsApp catalog, Instagram DM, or AI voice — plus CTWA ad ROI.",
            icon: IntegrationsColorIcon,
          },
          {
            title: "Automated Tax & GST Invoicing",
            desc: "Generate compliant invoices with GST breakdowns automatically on every order — synced with Zoho Books for clean books.",
            icon: PortfolioIcon,
          },
          {
            title: "Exportable Financial & Order Reports",
            desc: "One-click CSV and PDF exports for your accountant — daily, weekly, and monthly P&L summaries with zero manual work.",
            icon: ClearerSalesColorIcon,
          },
        ]}
        ctaHeadline="Know Your Real Profit — Down to the Last SKU. Start Today."
        ctaSubheadline="Connect your channels and watch live revenue, margins, and channel ROI appear in minutes."
        ctaLabel="Create Your Free Workspace"
      />
    </PageShell>
  );
}
