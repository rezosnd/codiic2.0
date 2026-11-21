"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { SolutionPage } from "@/components/SolutionPage";
import { RealEstateColorIcon } from "@/components/ColorfulProductIcons";

export default function RealEstatePage() {
  const router = useRouter();
  const goToLogin = () => router.push("/login");

  return (
    <PageShell>
      <SolutionPage
        onOpenGetStarted={goToLogin}
        onOpenSeeHowItWorks={goToLogin}
        data={{
          name: "Real Estate & Developers",
          crumb: "Real Estate",
          icon: RealEstateColorIcon,
          badge: "Real Estate & Developers",
          headline: (
            <>
              Turn Property Ads into Booked Site Visits —{" "}
              <em className="font-serif italic font-normal text-[#008F60]">On Autopilot.</em>
            </>
          ),
          subheadline:
            "High-converting property landing pages, instant Click-to-WhatsApp lead capture, automated brochure & floorplan delivery, and AI voice-booked site visits synced to agent calendars.",
          painSolutions: [
            {
              pain: "Expensive property leads go cold because your sales team calls back hours later.",
              solution: "Instant CTWA lead capture triggers an AI voice callback within seconds — qualifying budget and booking the site visit while intent is hot.",
            },
            {
              pain: "Brokers manually WhatsApp floorplans and brochures to hundreds of leads every week.",
              solution: "Automated WhatsApp delivery sends the exact tower, floorplan, and price sheet a lead asked about — tagged and logged in CRM 360.",
            },
            {
              pain: "Site visits get scheduled over endless back-and-forth calls, and no-shows waste agent days.",
              solution: "AI voice agents propose slots, book the visit on the agent's calendar, and send WhatsApp confirmations plus day-of reminders — no-shows plummet.",
            },
          ],
          workflow: [
            {
              title: "CTWA Ad Click",
              desc: "Property ad opens WhatsApp instantly",
              detail: "A buyer taps your Meta ad and lands straight in WhatsApp with the project name pre-filled — the lead is captured in CRM 360 before they even type.",
            },
            {
              title: "Instant Brochure",
              desc: "Floorplan & price sheet auto-sent",
              detail: "Your automation detects which project they asked about and replies in 0.4s with the exact brochure, floorplan PDF, and payment plan.",
            },
            {
              title: "AI Voice Booking",
              desc: "Site visit scheduled on agent calendar",
              detail: "The AI voice agent calls to qualify budget and timeline, then books a site visit directly onto the assigned agent's calendar.",
            },
            {
              title: "Visit & Nurture",
              desc: "Reminders, follow-ups & deal stages",
              detail: "Day-before and hour-before WhatsApp reminders cut no-shows; post-visit drip sequences nurture the deal through Proposal to Won.",
            },
          ],
          useCases: [
            {
              title: "New Project Launches",
              desc: "Flood a launch landing page with CTWA ads — every inquiry gets an instant brochure and a booked site visit without hiring telecallers.",
              stat: "6× more site visits",
            },
            {
              title: "Channel Partner Networks",
              desc: "Route partner leads into the same pipeline with source tagging, so commissions and attribution stay crystal clear.",
              stat: "100% source tracking",
            },
            {
              title: "Ready-to-Move Inventory",
              desc: "Reactivate old lead databases with AI voice winback campaigns — book walkthroughs for inventory that's been sitting for months.",
              stat: "18% reactivation",
            },
          ],
          testimonial: {
            quote:
              "Our AI agent booked 42 site visits in the first month — more than our entire telecalling team did last quarter. The WhatsApp brochure delivery is instant.",
            name: "Nivaan Gupta",
            role: "Sales Director, Nivaan Realty — Gurugram",
          },
        }}
      />
    </PageShell>
  );
}
