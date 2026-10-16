"use client";

import React, { useState } from "react";
import {
  Building2,
  ShoppingBag,
  Code2,
  Megaphone,
  HeartPulse,
  Factory,
  Briefcase,
  HardHat,
  GraduationCap,
  UtensilsCrossed,
  Plane,
  Truck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface IndustrySolutionsSectionProps {
  onOpenGetStarted: () => void;
}

export const IndustrySolutionsSection: React.FC<IndustrySolutionsSectionProps> = ({
  onOpenGetStarted,
}) => {
  const [filter, setFilter] = useState<"all" | "commerce" | "services" | "operations">("all");

  const industries = [
    {
      id: "real-estate",
      category: "operations",
      name: "Real Estate & Housing",
      desc: "Manage property inquiries, buyer relationships, site visit schedules, and broker commission pipelines.",
      icon: Building2,
      color: "#00B879",
    },
    {
      id: "retail",
      category: "commerce",
      name: "Retail & Omnichannel Brands",
      desc: "Bring your online storefront, customer catalog, UPI checkout, and multi-channel order tracking into one workspace.",
      icon: ShoppingBag,
      color: "#008F60",
    },
    {
      id: "it-services",
      category: "services",
      name: "IT & Software Services",
      desc: "Track client project milestones, retainer agreements, billable deliverables, and support request tickets.",
      icon: Code2,
      color: "#00B879",
    },
    {
      id: "marketing-agencies",
      category: "services",
      name: "Marketing & Creative Agencies",
      desc: "Manage client campaign accounts, pitch pipelines, creative asset approvals, and monthly retainers.",
      icon: Megaphone,
      color: "#008F60",
    },
    {
      id: "healthcare",
      category: "services",
      name: "Healthcare & Clinics",
      desc: "Coordinate patient appointment inquiries, front-desk reception, and scheduled consultation reminders.",
      icon: HeartPulse,
      color: "#00B879",
    },
    {
      id: "manufacturing",
      category: "operations",
      name: "Manufacturing & Distribution",
      desc: "Coordinate dealer and distributor orders, quotation requests, supplier follow-ups, and dispatch alerts.",
      icon: Factory,
      color: "#008F60",
    },
    {
      id: "professional-services",
      category: "services",
      name: "Legal, Tax & Consulting",
      desc: "Manage advisory client engagements, document verification workflows, and recurring compliance invoicing.",
      icon: Briefcase,
      color: "#00B879",
    },
    {
      id: "construction",
      category: "operations",
      name: "Construction & Contracting",
      desc: "Track tender bids, subcontractor communications, client milestone sign-offs, and project budgets.",
      icon: HardHat,
      color: "#008F60",
    },
    {
      id: "education",
      category: "services",
      name: "Education & EdTech",
      desc: "Organize admissions inquiries, student enrollment communication, fee follow-ups, and administrative tasks.",
      icon: GraduationCap,
      color: "#00B879",
    },
    {
      id: "restaurants",
      category: "commerce",
      name: "Restaurants & Catering",
      desc: "Manage corporate catering inquiries, banquet reservations, menu packages, and customer feedback loops.",
      icon: UtensilsCrossed,
      color: "#008F60",
    },
    {
      id: "travel",
      category: "commerce",
      name: "Travel & Hospitality",
      desc: "Track holiday inquiries, custom package bookings, itinerary dispatches, and scheduled installment reminders.",
      icon: Plane,
      color: "#00B879",
    },
    {
      id: "logistics",
      category: "operations",
      name: "Logistics & Fleet Transport",
      desc: "Manage freight quotes, corporate fleet contracts, consignment inquiries, and customer dispatch alerts.",
      icon: Truck,
      color: "#008F60",
    },
  ];

  const filtered = industries.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <section id="industries" className="py-20 sm:py-28 bg-white border-b border-[#E8EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-[#008F60] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#00B879]" />
            <span>BUILT FOR THE WAY YOU WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight leading-tight">
            One platform. Different ways to do business.
          </h2>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7F9F8] border border-[#E2E8E5] text-xs font-semibold text-[#171923]">
            <span className="w-2 h-2 rounded-full bg-[#00B879]" />
            <span>Har industry ka apna style, CODIIC ka wahi perfect fit.</span>
          </div>

          <p className="text-base sm:text-lg text-[#555A68] leading-relaxed">
            CODIIC provides a flexible, connected foundation that businesses adapt to their specific industry, customer touchpoints, and everyday workflows.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: "all", label: "All Industries (12)" },
              { id: "commerce", label: "Commerce & Retail" },
              { id: "services", label: "Services & Agencies" },
              { id: "operations", label: "Operations & Logistics" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  filter === cat.id
                    ? "bg-[#00B879] text-white shadow-md shadow-[#00B879]/20"
                    : "bg-[#F7F9F8] text-[#555A68] hover:text-[#171923] border border-[#E2E8E5]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={onOpenGetStarted}
                className="group cursor-pointer rounded-3xl p-6 bg-[#F7F9F8] border border-[#E2E8E5] hover:bg-white hover:border-[#00B879]/40 hover:shadow-xl hover:shadow-[#00B879]/5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                    style={{ backgroundColor: "#E8F8F1", color: item.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-[#171923] group-hover:text-[#008F60] transition-colors mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#555A68] leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8EAF0] flex items-center justify-between text-xs font-semibold text-[#008F60] group-hover:underline">
                  <span>Explore solution</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on adaptability */}
        <div className="mt-10 text-center text-xs text-[#555A68] max-w-2xl mx-auto">
          Need custom fields or industry-specific workflow rules? CODIIC adapts to your exact business terminology, pipeline stages, and operational handoffs.
        </div>

      </div>
    </section>
  );
};
