"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { FeaturePage } from "@/components/FeaturePage";
import { AICallsMockup } from "@/components/PlatformMockups";
import {
  SmootherFollowupsColorIcon,
  SalesTrackerIcon,
  ServicesColorIcon,
  MagicAiIcon,
  AnalyticsColorIcon,
  SalesPipelineColorIcon,
} from "@/components/ColorfulProductIcons";

export default function BulkAICallsPage() {
  const router = useRouter();
  const goToLogin = () => router.push("/login");

  return (
    <PageShell>
      <FeaturePage
        onOpenGetStarted={goToLogin}
        onOpenSeeHowItWorks={goToLogin}
        crumbLabel="Bulk AI Voice Calls"
        badge="24/7 AI Voice Agents • Automated Outbound & Inbound"
        headline={
          <>
            Qualify Leads, Confirm Orders &amp; Book Appointments —{" "}
            <em className="font-serif italic font-normal text-[#008F60]">Automatically with AI Voice.</em>
          </>
        }
        subheadline="Launch natural-sounding Bulk AI Voice campaigns in English, Hinglish, and regional languages — trigger instant calls when a lead submits a form and sync outcomes straight to CRM 360."
        primaryCta="Launch Your First AI Campaign"
        secondaryCta={{ label: "See CRM 360", href: "/platform/crm-360" }}
        microTrust="English, Hindi & regional voices · Instant lead-to-call triggers · Outcomes synced to CRM"
        mockup={<AICallsMockup />}
        featuresHeading={
          <>
            An outbound sales team that{" "}
            <em className="font-serif italic font-normal text-[#008F60]">never sleeps.</em>
          </>
        }
        features={[
          {
            title: "Instant Lead-to-Call Triggers",
            desc: "The moment a lead submits a form or clicks a CTWA ad, your AI agent calls within seconds — while buying intent is still hot.",
            icon: SmootherFollowupsColorIcon,
          },
          {
            title: "COD & Order Verification Calls",
            desc: "Automatically verify cash-on-delivery orders, confirm addresses, and cut RTO losses before a single package ships.",
            icon: SalesTrackerIcon,
          },
          {
            title: "Automated Calendar Appointment Booking",
            desc: "AI books demos, site visits, and consultations directly onto your team's calendar with confirmations and reminders on WhatsApp.",
            icon: ServicesColorIcon,
          },
          {
            title: "Custom AI Voice Scripts & Knowledge Base",
            desc: "Train your voice agent on your offers, FAQs and objection handling — it answers like your best rep, in your brand's tone.",
            icon: MagicAiIcon,
          },
          {
            title: "Real-Time Call Recordings & Transcripts",
            desc: "Every call is recorded, transcribed, and summarized — review outcomes, coach your team, and audit quality anytime.",
            icon: AnalyticsColorIcon,
          },
          {
            title: "Automatic CRM Stage Updates",
            desc: "Confirmed, rescheduled, or not-interested — each disposition moves the deal card, logs the note, and triggers the next follow-up.",
            icon: SalesPipelineColorIcon,
          },
        ]}
        ctaHeadline="Let AI Make the Calls Your Team Never Has Time For."
        ctaSubheadline="Launch your first bulk voice campaign in minutes — qualify, confirm and book while you focus on closing."
        ctaLabel="Create Your Free Workspace"
      />
    </PageShell>
  );
}
