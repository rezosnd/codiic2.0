"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { SolutionPage } from "@/components/SolutionPage";
import { HospitalityColorIcon } from "@/components/ColorfulProductIcons";

export default function HospitalityPage() {
  const router = useRouter();
  const goToLogin = () => router.push("/login");

  return (
    <PageShell>
      <SolutionPage
        onOpenGetStarted={goToLogin}
        onOpenSeeHowItWorks={goToLogin}
        data={{
          name: "Hospitality, Salons & Cafes",
          crumb: "Hospitality",
          icon: HospitalityColorIcon,
          badge: "Hospitality, Salons & Cafes",
          headline: (
            <>
              Fill Every Table and Chair —{" "}
              <em className="font-serif italic font-normal text-[#008F60]">With Guests Who Come Back.</em>
            </>
          ),
          subheadline:
            "Instant QR digital menus, table and slot reservation forms, automated WhatsApp booking confirmations, post-visit review collection, and VIP loyalty broadcast campaigns.",
          painSolutions: [
            {
              pain: "Reservations arrive through phone calls, DMs, and walk-ins — double bookings happen weekly.",
              solution: "A single reservation page with live slots and automated WhatsApp confirmations keeps every booking in one queue — conflicts gone.",
            },
            {
              pain: "Printed menus are expensive to update and QR menus usually link to a dead PDF.",
              solution: "A drag-and-drop digital menu updates in seconds — photos, prices, and specials stay current on every table's QR code forever.",
            },
            {
              pain: "Guests visit once and vanish — you have no way to bring them back.",
              solution: "Post-visit review requests and VIP loyalty broadcasts on WhatsApp turn one-time guests into regulars on autopilot.",
            },
          ],
          workflow: [
            {
              title: "QR Menu Scan",
              desc: "Guest browses live digital menu",
              detail: "Guests scan the table QR and see your full menu with photos and today's specials — update prices once and every table sees it instantly.",
            },
            {
              title: "Reserve in Taps",
              desc: "Slot booking with party size",
              detail: "A reservation form captures date, time, and party size — confirmed instantly on WhatsApp with directions and your cancellation policy.",
            },
            {
              title: "Smart Reminders",
              desc: "No-show prevention on WhatsApp",
              detail: "Day-of reminders with one-tap confirm or cancel mean empty seats get released early instead of holding a no-show table.",
            },
            {
              title: "Loyalty Loop",
              desc: "Review request + VIP broadcasts",
              detail: "After the visit, an automated review request builds your ratings — then VIP broadcasts fill slow weekdays with returning regulars.",
            },
          ],
          useCases: [
            {
              title: "Cafes & Casual Dining",
              desc: "QR menus with daily specials plus weekend reservation slots that confirm themselves on WhatsApp.",
              stat: "0 double bookings",
            },
            {
              title: "Salons & Spas",
              desc: "Service menus with stylist-level booking, automated reminders, and rebooking nudges every 4–6 weeks.",
              stat: "+31% rebookings",
            },
            {
              title: "Boutique Hotels & BnBs",
              desc: "Inquiry pages with instant WhatsApp replies, booking confirmations, and pre-arrival upsell messages.",
              stat: "2× direct bookings",
            },
          ],
          testimonial: {
            quote:
              "Our loyalty broadcasts fill Tuesday evenings that used to be dead. The WhatsApp booking confirmations alone saved us a part-time hostess.",
            name: "Sana & Vikram",
            role: "Owners, Bistro & Brew — Bengaluru",
          },
        }}
      />
    </PageShell>
  );
}
