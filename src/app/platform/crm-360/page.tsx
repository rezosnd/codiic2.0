"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { FeaturePage } from "@/components/FeaturePage";
import { CrmPipelineMockup } from "@/components/PlatformMockups";
import {
  SalesPipelineColorIcon,
  AutomationColorIcon,
  CustomerCrmColorIcon,
  PortfolioIcon,
  AnalyticsColorIcon,
  IntegrationsColorIcon,
} from "@/components/ColorfulProductIcons";

export default function Crm360Page() {
  const router = useRouter();
  const goToLogin = () => router.push("/login");

  return (
    <PageShell>
      <FeaturePage
        onOpenGetStarted={goToLogin}
        onOpenSeeHowItWorks={goToLogin}
        crumbLabel="CRM 360 & Pipeline"
        badge="Unified Customer Database • CRM 360"
        headline={
          <>
            Every Customer, Deal, and Conversation in One{" "}
            <em className="font-serif italic font-normal text-[#043B2C]">360° Workspace.</em>
          </>
        }
        subheadline="Automatically capture leads from your storefront, WhatsApp, Instagram, and ads — assign agents, move deals across visual pipeline stages, and never miss a follow-up."
        primaryCta="Start Free"
        secondaryCta={{ label: "See the inbox", href: "/platform/omnichannel-inbox" }}
        microTrust="Zero setup pipelines · Auto-agent routing · Full order & chat history on every card"
        mockup={<CrmPipelineMockup />}
        featuresHeading={
          <>
            Pipeline clarity,{" "}
            <em className="font-serif italic font-normal text-[#043B2C]">without the spreadsheets.</em>
          </>
        }
        features={[
          {
            title: "Visual Pipeline Board",
            desc: "Kanban deal stages — New Lead, Contacted, Qualified, Proposal, Won — customized to your exact sales process with drag-and-drop movement.",
            icon: SalesPipelineColorIcon,
          },
          {
            title: "Auto-Agent Assignment",
            desc: "Round-robin and skill-based routing assigns every new lead to the right agent instantly — no cherry-picking, no missed follow-ups.",
            icon: AutomationColorIcon,
          },
          {
            title: "Customer Segments & Labels",
            desc: "Tag and segment customers by value, source, behavior or custom lists — then target broadcasts and drips at exactly the right audience.",
            icon: CustomerCrmColorIcon,
          },
          {
            title: "Custom Data Fields",
            desc: "Add the fields your business actually needs — GST number, property budget, course batch, or anything else — searchable and reportable.",
            icon: PortfolioIcon,
          },
          {
            title: "Lead Reports & Analytics",
            desc: "See conversion rates per stage, per agent, and per channel — know exactly where deals stall and which sources actually pay.",
            icon: AnalyticsColorIcon,
          },
          {
            title: "Bulk CSV Import & Logs",
            desc: "Migrate your existing contacts in minutes with bulk CSV import, dedupe, and a full activity log of every change to every record.",
            icon: IntegrationsColorIcon,
          },
        ]}
        ctaHeadline="Your Entire Customer History. One Workspace. Start Today."
        ctaSubheadline="Import your leads, connect your channels, and watch deals move themselves — start free in 2 minutes."
        ctaLabel="Create Your Free Workspace"
      />
    </PageShell>
  );
}
