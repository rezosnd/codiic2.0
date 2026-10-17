"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  RetailColorIcon,
  ServicesColorIcon,
  RealEstateColorIcon,
  AgenciesColorIcon,
  EducationColorIcon,
  HospitalityColorIcon,
} from "./ColorfulProductIcons";

interface OlearisIndustrySectionProps {
  onOpenGetStarted: () => void;
}

export const OlearisIndustrySection: React.FC<OlearisIndustrySectionProps> = ({
  onOpenGetStarted,
}) => {
  const industries = [
    {
      id: "retail",
      title: "Retail & eCommerce",
      desc: "Connect your storefront with real-time UPI orders, WhatsApp customer updates, and auto-synced inventory.",
      icon: RetailColorIcon,
      color: "#00B879",
      imageSrc: "/images/industries/retail.jpg",
      imageAlt: "Modern boutique retail storefront with curated lifestyle displays",
      tag: "Storefront & Orders",
    },
    {
      id: "services",
      title: "Professional Services",
      desc: "Organize client consultations, intake briefs, and retainer proposals with clear team task assignment.",
      icon: ServicesColorIcon,
      color: "#008F60",
      imageSrc: "/images/industries/services.jpg",
      imageAlt: "Professional advisory consultants meeting in a bright contemporary office",
      tag: "Retainers & Inquiries",
    },
    {
      id: "real-estate",
      title: "Real Estate & Developers",
      desc: "Keep property inquiries, floorplan shares, and site-visit schedules visible across your deal pipeline.",
      icon: RealEstateColorIcon,
      color: "#00B879",
      imageSrc: "/images/industries/real-estate.jpg",
      imageAlt: "Contemporary architectural residential property development",
      tag: "Site Visits & Deals",
    },
    {
      id: "agencies",
      title: "Creative Agencies",
      desc: "Capture website inquiries, qualify client budgets, and track pitch milestones in one continuous feed.",
      icon: AgenciesColorIcon,
      color: "#008F60",
      imageSrc: "/images/industries/agencies.jpg",
      imageAlt: "Creative digital agency team collaborating on digital campaign design",
      tag: "Pitches & Scopes",
    },
    {
      id: "education",
      title: "Education & Academies",
      desc: "Manage prospective student enrollment forms, batch intake questions, and automated WhatsApp course brochures.",
      icon: EducationColorIcon,
      color: "#00B879",
      imageSrc: "/images/industries/education.jpg",
      imageAlt: "Modern interactive education seminar with active participants",
      tag: "Admissions & Leads",
    },
    {
      id: "hospitality",
      title: "Hospitality & Cafes",
      desc: "Give diners and guests a beautiful online presence to explore menus, reserve tables, and connect via WhatsApp.",
      icon: HospitalityColorIcon,
      color: "#008F60",
      imageSrc: "/images/industries/hospitality.jpg",
      imageAlt: "Aesthetic modern boutique cafe interior with warm natural lighting",
      tag: "Menus & Bookings",
    },
  ];

  return (
    <section
      id="solutions"
      className="py-20 sm:py-28 bg-[#E9EBE7] border-b border-[#D9DED8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Dropship.io headline hierarchy) */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D9DED8] text-[#5A6270] text-[11px] font-bold tracking-widest uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00B879]" />
            <span>INDUSTRY WORKFLOWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight leading-tight">
            Made for the way your business works.
          </h2>

          <p className="text-base sm:text-lg text-[#555A68] leading-relaxed max-w-2xl mx-auto">
            Whether you run a retail shop, advisory practice, or agency, CODIIC connects your daily customer operations.
          </p>
        </div>

        {/* 6 Industry Cards with Curated Licensed Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={onOpenGetStarted}
                className="group cursor-pointer rounded-3xl bg-white border border-[#D9DED8] hover:border-[#00B879]/50 hover:shadow-xl hover:shadow-[#00B879]/8 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image Container with Responsive Next/Image & Smooth Zoom */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#D9DED8]">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      priority
                      unoptimized
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    
                    {/* Dark gradient overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

                    {/* Floating Category Badge & Icon */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md bg-white/95 backdrop-blur-sm p-1.5">
                        <Icon className="w-6 h-6 shrink-0" />
                      </div>
                      <span className="text-[11px] font-bold text-white bg-black/45 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#171923] group-hover:text-[#008F60] transition-colors mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#555A68] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="px-6 pb-6 pt-0">
                  <div className="pt-3.5 border-t border-[#E8EAF0] flex items-center justify-between text-xs font-semibold text-[#008F60]">
                    <span>Explore industry solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
