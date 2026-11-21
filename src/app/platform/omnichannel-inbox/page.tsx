"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { FeaturePage } from "@/components/FeaturePage";
import { InboxMockup } from "@/components/PlatformMockups";
import {
  CustomerCrmColorIcon,
  AutomationColorIcon,
  IntegrationsColorIcon,
  AgenciesColorIcon,
  PortfolioIcon,
  SmootherFollowupsColorIcon,
} from "@/components/ColorfulProductIcons";

export default function OmnichannelInboxPage() {
  const router = useRouter();
  const goToLogin = () => router.push("/login");

  return (
    <PageShell>
      <FeaturePage
        onOpenGetStarted={goToLogin}
        onOpenSeeHowItWorks={goToLogin}
        crumbLabel="Omnichannel Unified Inbox"
        badgeChip="OFFICIAL"
        badge="Meta Cloud API & WhatsApp Coexistence"
        headline={
          <>
            WhatsApp, Instagram, Facebook, Telegram &amp; Email —{" "}
            <em className="font-serif italic font-normal text-[#008F60]">One Team Inbox.</em>
          </>
        }
        subheadline="Keep your existing WhatsApp Business phone app working alongside CODIIC with Official Coexistence, reply in 0.4s with AI, and assign chats across your team without collisions."
        primaryCta="Connect Your Channels Free"
        secondaryCta={{ label: "Explore automations", href: "/platform/bulk-ai-calls" }}
        microTrust="Keep your existing number · Official Meta partner · Zero per-message markup"
        mockup={<InboxMockup />}
        featuresHeading={
          <>
            Every channel your customers use,{" "}
            <em className="font-serif italic font-normal text-[#008F60]">one shared screen.</em>
          </>
        }
        features={[
          {
            title: "WhatsApp Business App Coexistence",
            desc: "Run the official Cloud API and your personal Business App on the same number simultaneously — full chat history preserved on both sides.",
            icon: CustomerCrmColorIcon,
          },
          {
            title: "Instagram Auto-DM & Story Replies",
            desc: "Turn comments, story mentions, and DMs into automated conversations — instant Auto-DM replies that push leads straight into CRM 360.",
            icon: AutomationColorIcon,
          },
          {
            title: "Facebook & Telegram Unified Sync",
            desc: "Facebook Page inbox, Telegram bot and personal messages, and Email threads — all routed into one queue with channel badges.",
            icon: IntegrationsColorIcon,
          },
          {
            title: "Smart Broadcasts & Drip Campaigns",
            desc: "Send high-converting WhatsApp campaigns and multi-day drip sequences to segmented audiences with delivery, read, and reply analytics.",
            icon: AgenciesColorIcon,
          },
          {
            title: "Preset Templates — Save 40% on Meta Fees",
            desc: "Pre-approved, utility-optimized message templates that cut your Meta conversation charges by up to 40% at zero platform markup.",
            icon: PortfolioIcon,
          },
          {
            title: "Multi-Agent Routing & Collision Detection",
            desc: "Assign chats, add internal notes, and see live typing indicators — two agents can never accidentally reply to the same customer twice.",
            icon: SmootherFollowupsColorIcon,
          },
        ]}
        ctaHeadline="One Inbox for Every Customer Chat. Start Today."
        ctaSubheadline="Connect WhatsApp and Instagram in 2 minutes — your AI and your team reply together, instantly."
        ctaLabel="Create Your Free Workspace"
      />
    </PageShell>
  );
}
