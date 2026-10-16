"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

interface PricingSectionProps {
  onOpenGetStarted: () => void;
  onOpenContactSales: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenGetStarted,
  onOpenContactSales,
}) => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  const plans = [
    {
      id: "starter",
      name: "Starter",
      badge: "Emerging Businesses",
      desc: "For growing businesses looking to establish an online storefront and manage customer leads systematically.",
      monthlyPrice: "₹2,499",
      annualPrice: "₹1,999",
      billingNote: "per month, billed annually",
      popular: false,
      ctaText: "Get Started",
      action: onOpenGetStarted,
      features: [
        "Connected business workspace for up to 3 team members",
        "Website & Storefront builder with custom domain support",
        "Centralized CRM lead capture & contact profile timeline",
        "Visual sales pipeline with up to 3 customizable stages",
        "Automated email notifications & follow-up reminder alerts",
        "Standard onboarding & email support",
      ],
      notIncluded: [
        "Advanced WhatsApp Business API automation",
        "Multi-team round-robin lead distribution",
      ],
    },
    {
      id: "growth",
      name: "Growth",
      badge: "Most Popular",
      desc: "For active businesses that require connected workflows, WhatsApp automation, and sales pipeline forecasting.",
      monthlyPrice: "₹5,999",
      annualPrice: "₹4,999",
      billingNote: "per month, billed annually",
      popular: true,
      ctaText: "Start Growth Plan",
      action: onOpenGetStarted,
      features: [
        "Full connected workspace for up to 15 team members",
        "E-commerce storefront with integrated Razorpay & UPI checkout",
        "Complete Customer CRM with two-way WhatsApp API sync",
        "Multi-stage Kanban sales pipeline with revenue forecasting",
        "Visual workflow automation builder (unlimited runs)",
        "Automated lead scoring & smart round-robin distribution",
        "Real-time executive analytics & conversion velocity reports",
        "Priority chat support & dedicated onboarding specialist",
      ],
      notIncluded: [
        "Custom ERP integrations & on-premise dedicated server",
      ],
    },
    {
      id: "business",
      name: "Business",
      badge: "Multi-Team & Enterprise",
      desc: "For established organizations with multi-department teams, complex approval chains, and custom integrations.",
      monthlyPrice: "₹11,999",
      annualPrice: "₹9,999",
      billingNote: "per month, billed annually",
      popular: false,
      ctaText: "Contact Sales",
      action: onOpenContactSales,
      features: [
        "Unlimited users across multiple departments and branches",
        "Everything in Growth plus full enterprise business suite",
        "Custom approval chains, internal task boards & client portals",
        "Inventory management, quote generation & PDF invoicing",
        "Custom API webhooks, Zapier & legacy accounting sync",
        "Granular role-based permissions & security audit logs",
        "Dedicated account manager with 99.9% uptime SLA",
        "Custom team training & tailored workflow architecture",
      ],
      notIncluded: [],
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white border-b border-[#E8EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-[#008F60] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#00B879]" />
            <span>TRANSPARENT, FLEXIBLE PLANS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight leading-tight">
            Choose the tools that fit your business.
          </h2>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7F9F8] border border-[#E2E8E5] text-xs font-semibold text-[#171923]">
            <span className="w-2 h-2 rounded-full bg-[#00B879]" />
            <span>Transparent pricing. Koi hidden charges nahi.</span>
          </div>

          <p className="text-base sm:text-lg text-[#555A68] leading-relaxed">
            Start with the essentials and activate additional modules as your team and customer volume expand. No lock-in.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span
              className={`text-xs font-bold cursor-pointer transition-colors ${
                billingCycle === "monthly" ? "text-[#171923]" : "text-[#8A90A0]"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly Billing
            </span>

            <button
              onClick={() =>
                setBillingCycle(billingCycle === "annual" ? "monthly" : "annual")
              }
              className="w-12 h-6 rounded-full bg-[#171923] p-0.5 transition-colors relative focus:outline-none"
              aria-label="Toggle Annual or Monthly Billing"
            >
              <div
                className={`w-5 h-5 rounded-full bg-[#00B879] transition-transform shadow-xs ${
                  billingCycle === "annual" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>

            <span
              className={`text-xs font-bold cursor-pointer flex items-center gap-1.5 transition-colors ${
                billingCycle === "annual" ? "text-[#171923]" : "text-[#8A90A0]"
              }`}
              onClick={() => setBillingCycle("annual")}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-[#E8F8F1] text-[#008F60] text-[10px] font-bold border border-[#00B879]/20">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 relative ${
                  plan.popular
                    ? "bg-white border-2 border-[#00B879] shadow-xl shadow-[#00B879]/10 ring-4 ring-[#00B879]/10 lg:-translate-y-2"
                    : "bg-white border border-[#E2E8E5] hover:border-[#00B879]/40 hover:shadow-md"
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#00B879] text-white text-[10px] font-extrabold tracking-wider uppercase shadow-md shadow-[#00B879]/25">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#171923]">{plan.name}</h3>
                    <span className="text-[11px] font-bold text-[#008F60] bg-[#E8F8F1] px-2.5 py-0.5 rounded-full border border-[#00B879]/20">
                      {plan.badge}
                    </span>
                  </div>

                  <p className="text-xs text-[#555A68] min-h-[36px] mb-5 leading-relaxed">
                    {plan.desc}
                  </p>

                  {/* Pricing line */}
                  <div className="pb-5 mb-5 border-b border-[#E8EAF0]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-[#171923] font-mono">
                        {price}
                      </span>
                      <span className="text-xs text-[#555A68] font-medium">
                        / month
                      </span>
                    </div>
                    <div className="text-[11px] text-[#555A68] mt-1 font-mono">
                      {billingCycle === "annual"
                        ? "Billed annually (Includes 20% discount)"
                        : "Billed monthly, cancel anytime"}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#171923]">
                      Included Features:
                    </div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#171923]">
                        <div className="w-4 h-4 rounded-full bg-[#E8F8F1] text-[#00B879] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-[#E8EAF0]">
                  <button
                    onClick={plan.action}
                    className={`w-full py-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-[#00B879] hover:bg-[#008F60] text-white shadow-md shadow-[#00B879]/25 hover:shadow-lg"
                        : "bg-[#171923] hover:bg-[#00B879] text-white"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <div className="text-center text-[10px] text-[#8A90A0] mt-2">
                    Features adapt to your actual business requirements
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on plan variations */}
        <div className="mt-12 p-5 rounded-2xl bg-[#F7F9F8] border border-[#E2E8E5] max-w-3xl mx-auto text-center text-xs text-[#555A68] space-y-1">
          <div className="font-bold text-[#171923] flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#00B879]" />
            <span>Note on Plan Capabilities</span>
          </div>
          <p>
            Available features vary by plan. All subscriptions include secure cloud hosting, 99.9% uptime SLA, automated daily backups, and SSL encryption.
          </p>
        </div>

      </div>
    </section>
  );
};
