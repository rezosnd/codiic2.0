"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { SolutionPage } from "@/components/SolutionPage";
import { ServicesColorIcon } from "@/components/ColorfulProductIcons";

export default function ServiceBusinessesPage() {
  const router = useRouter();
  const goToLogin = () => router.push("/login");

  return (
    <PageShell>
      <SolutionPage
        onOpenGetStarted={goToLogin}
        onOpenSeeHowItWorks={goToLogin}
        data={{
          name: "Service Businesses & Consultants",
          crumb: "Service Businesses",
          icon: ServicesColorIcon,
          badge: "Service Businesses & Consultants",
          headline: (
            <>
              Fill Your Calendar with Booked Appointments —{" "}
              <em className="font-serif italic font-normal text-[#008F60]">Not Missed Calls.</em>
            </>
          ),
          subheadline:
            "Drag-and-drop service catalogs, online appointment booking, automated WhatsApp reminders that eliminate no-shows, staff roster assignment, and instant digital invoicing.",
          painSolutions: [
            {
              pain: "Clients book over phone tag — half your day is spent scheduling instead of delivering.",
              solution: "A self-serve booking page lets clients pick a slot, pay a deposit, and get instant WhatsApp confirmation — your calendar fills itself.",
            },
            {
              pain: "No-shows and last-minute cancellations leave expensive gaps in your day.",
              solution: "Automated WhatsApp reminders 24h and 1h before every appointment — with one-tap reschedule — cut no-shows to near zero.",
            },
            {
              pain: "Invoices get chased manually and payments arrive weeks late.",
              solution: "Digital invoices with UPI and card payment links go out automatically after each session — most clients pay the same day.",
            },
          ],
          workflow: [
            {
              title: "Service Page",
              desc: "Catalog with pricing & slots",
              detail: "Clients browse your services, see transparent pricing, and pick an open slot on your live booking calendar — built in minutes with drag-and-drop.",
            },
            {
              title: "WhatsApp Confirm",
              desc: "Instant booking confirmation",
              detail: "The moment a slot is booked, a WhatsApp confirmation fires with date, location or video link, and a calendar file they can save.",
            },
            {
              title: "Smart Reminders",
              desc: "24h + 1h automated nudges",
              detail: "Timed reminders go out on WhatsApp and SMS with a reschedule link — clients who can't make it free up the slot for someone else.",
            },
            {
              title: "Invoice & Review",
              desc: "Auto-invoice + feedback loop",
              detail: "After the appointment, an invoice with a payment link and a review request go out automatically — payment and social proof on autopilot.",
            },
          ],
          useCases: [
            {
              title: "Consultants & Coaches",
              desc: "Sell discovery calls and paid sessions directly — deposits collected upfront, Zoom links sent automatically.",
              stat: "0 scheduling admin",
            },
            {
              title: "Clinics & Wellness Studios",
              desc: "Multi-practitioner rosters, recurring appointments, and reminder sequences that keep chairs full.",
              stat: "-70% no-shows",
            },
            {
              title: "Home Services & Repair",
              desc: "Quote requests come through lead forms, AI voice confirms the job, and invoices land the moment work is done.",
              stat: "Same-day payment",
            },
          ],
          testimonial: {
            quote:
              "I replaced Calendly, a billing tool, and a virtual assistant with CODIIC. My no-show rate dropped to almost zero in the first month.",
            name: "Dr. Meera Iyer",
            role: "Founder, Apex Wellness Studio — Bengaluru",
          },
        }}
      />
    </PageShell>
  );
}
