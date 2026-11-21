"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { SolutionPage } from "@/components/SolutionPage";
import { RetailColorIcon } from "@/components/ColorfulProductIcons";

export default function RetailD2CPage() {
  const router = useRouter();
  const goToLogin = () => router.push("/login");

  return (
    <PageShell>
      <SolutionPage
        onOpenGetStarted={goToLogin}
        onOpenSeeHowItWorks={goToLogin}
        data={{
          name: "Retail & D2C eCommerce",
          crumb: "Retail & D2C",
          icon: RetailColorIcon,
          badge: "Retail & D2C eCommerce",
          headline: (
            <>
              Sell Online with a Storefront That{" "}
              <em className="font-serif italic font-normal text-[#008F60]">Follows Up for You.</em>
            </>
          ),
          subheadline:
            "Launch a drag-and-drop online store with one-click checkout (Stripe, Razorpay, UPI), AI voice COD confirmation, WhatsApp order tracking, and abandoned-cart drip campaigns — all from one workspace.",
          painSolutions: [
            {
              pain: "COD orders that never get picked up — RTO rates eat 15–25% of your revenue.",
              solution: "Automated AI voice calls verify every COD order before dispatch — confirming address, intent, and delivery slot — cutting RTO dramatically.",
            },
            {
              pain: "Customers constantly ping 'where is my order?' across WhatsApp and Instagram.",
              solution: "Automated WhatsApp order confirmations, dispatch alerts, and live tracking links keep buyers informed without your team lifting a finger.",
            },
            {
              pain: "Abandoned carts pile up while your team is too busy packing orders to follow up.",
              solution: "Abandoned-cart drip campaigns nudge shoppers on WhatsApp with their exact cart, a reminder, and a payment link — recovering sales on autopilot.",
            },
          ],
          workflow: [
            {
              title: "Storefront Live",
              desc: "No-code store with UPI & card checkout",
              detail: "A shopper finds your Meta ad, lands on your CODIIC storefront, and checks out with UPI or COD in under a minute — no plugins, no developers.",
            },
            {
              title: "WhatsApp Confirm",
              desc: "Instant order receipt & tracking",
              detail: "The second checkout completes, a branded WhatsApp message fires with the receipt, expected delivery date, and live tracking link.",
            },
            {
              title: "CRM 360 Deal",
              desc: "Auto-logged order & customer profile",
              detail: "Every order creates a deal card with items, payment status, and channel attribution — repeat buyers are auto-tagged for future campaigns.",
            },
            {
              title: "AI Follow-Up",
              desc: "COD verify calls & review requests",
              detail: "For COD orders, an AI voice call confirms the order before dispatch. After delivery, an automated message collects the review and offers a reorder coupon.",
            },
          ],
          useCases: [
            {
              title: "Fashion & Apparel Drops",
              desc: "Launch collection drops with a themed storefront, announce via WhatsApp broadcast, and let Auto-DM handle 'price?' replies on Instagram.",
              stat: "3× faster drops",
            },
            {
              title: "COD-Heavy Regional Brands",
              desc: "AI voice verification plus WhatsApp address confirmation slashes fake orders and delivery failures in COD-first markets.",
              stat: "-40% RTO losses",
            },
            {
              title: "Repeat-Purchase Consumables",
              desc: "Drip campaigns remind customers to reorder skincare, snacks, or supplements right when they're about to run out.",
              stat: "+28% repeat rate",
            },
          ],
          testimonial: {
            quote:
              "We went from a clunky Shopify + 4 plugins setup to CODIIC in a weekend. The AI COD verification calls alone recovered more revenue than the platform costs.",
            name: "Kaveri Shah",
            role: "Founder, Kaveri Lifestyle — Jaipur",
          },
        }}
      />
    </PageShell>
  );
}
