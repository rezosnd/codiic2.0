"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { SolutionPage } from "@/components/SolutionPage";
import { AgenciesColorIcon } from "@/components/ColorfulProductIcons";

export default function AgenciesPage() {
  const router = useRouter();
  const goToLogin = () => router.push("/login");

  return (
    <PageShell>
      <SolutionPage
        onOpenGetStarted={goToLogin}
        onOpenSeeHowItWorks={goToLogin}
        data={{
          name: "Creative & Marketing Agencies",
          crumb: "Agencies",
          icon: AgenciesColorIcon,
          badge: "Creative & Marketing Agencies",
          headline: (
            <>
              Launch Client Campaigns in Days,{" "}
              <em className="font-serif italic font-normal text-[#008F60]">Not Sprint Cycles.</em>
            </>
          ),
          subheadline:
            "Multi-workspace client management, rapid landing page launches, Instagram Auto-DM lead funnels, Ad & Competitor Library research, and automated client retainer billing.",
          painSolutions: [
            {
              pain: "Every client landing page is a mini dev project — designers wait on developers for weeks.",
              solution: "Multi-workspace drag-and-drop studio lets your team ship branded client pages the same day the brief lands — no dev queue.",
            },
            {
              pain: "Client leads scatter across ad managers, DMs, and spreadsheets — attribution is a mess.",
              solution: "Every CTWA ad, Instagram DM, and form fill flows into one tagged pipeline per client workspace — clean reporting, zero leakage.",
            },
            {
              pain: "Retainer renewals and invoicing slip through the cracks at month end.",
              solution: "Automated retainer invoicing and payment reminders keep cash flowing — plus activity logs you can show clients as proof of work.",
            },
          ],
          workflow: [
            {
              title: "Client Workspace",
              desc: "Separate inbox, CRM & store per client",
              detail: "Spin up an isolated workspace per client — their inbox, pipeline, storefront, and automations stay cleanly separated under your agency login.",
            },
            {
              title: "Rapid Page Launch",
              desc: "Branded landing page in hours",
              detail: "Duplicate a proven template, drop in the client's brand kit, connect their domain, and publish — campaign pages ship before lunch.",
            },
            {
              title: "Auto-DM Funnel",
              desc: "IG comments → qualified leads",
              detail: "Instagram Auto-DM funnels convert ad comments into WhatsApp conversations, scored and routed into the client's CRM 360 pipeline.",
            },
            {
              title: "Report & Retain",
              desc: "Ad intel + billing on autopilot",
              detail: "Competitor and ad-library research feeds monthly strategy decks, while automated retainer invoicing lands on schedule — every month.",
            },
          ],
          useCases: [
            {
              title: "Performance Marketing Agencies",
              desc: "Pair CTWA ad campaigns with instant WhatsApp funnels and show clients lead-to-sale attribution inside one dashboard.",
              stat: "Full-funnel proof",
            },
            {
              title: "Creative & Branding Studios",
              desc: "Deliver microsites and campaign pages as a productized service — no freelancers, no missed deadlines.",
              stat: "Same-day launches",
            },
            {
              title: "Social Media Agencies",
              desc: "Turn every client post's comment section into a lead funnel with Auto-DM — engagement becomes pipeline.",
              stat: "3× lead volume",
            },
          ],
          testimonial: {
            quote:
              "We now ship client landing pages the day after kickoff. The Ad Library research alone replaced two paid spy tools we were billing clients for.",
            name: "Rohan Kapoor",
            role: "Founder, Nova Studio — Delhi",
          },
        }}
      />
    </PageShell>
  );
}
