"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { CoverflowCarousel, type CoverflowSlide } from "@/components/ui/coverflow-carousel";

interface IndustrySolutionsSectionProps {
  onOpenGetStarted: () => void;
}

/* ─── Industry data ────────────────────────────────────────────────────── */
const INDUSTRIES = [
  {
    id: "retail",
    badge: "Retail & eCommerce",
    subtitle: "Storefront & Orders",
    title: "Modern boutique retail storefront with curated lifestyle displays",
    description:
      "Connect your storefront with real-time UPI orders, WhatsApp customer updates, and auto-synced inventory.",
    img: "/images/industries/retail.jpg",
    accent: "#00B879",
  },
  {
    id: "services",
    badge: "Professional Services",
    subtitle: "Retainers & Inquiries",
    title: "Professional advisory consultants meeting in a bright contemporary office",
    description:
      "Organize client consultations, intake briefs, and retainer proposals with clear team task assignment.",
    img: "/images/industries/services.jpg",
    accent: "#008F60",
  },
  {
    id: "real-estate",
    badge: "Real Estate & Developers",
    subtitle: "Site Visits & Deals",
    title: "Contemporary architectural residential property development",
    description:
      "Keep property inquiries, floorplan shares, and site-visit schedules visible across your deal pipeline.",
    img: "/images/industries/real-estate.jpg",
    accent: "#00B879",
  },
  {
    id: "agencies",
    badge: "Creative Agencies",
    subtitle: "Pitches & Scopes",
    title: "Creative digital agency team collaborating on digital campaign design",
    description:
      "Capture website inquiries, qualify client budgets, and track pitch milestones in one continuous feed.",
    img: "/images/industries/agencies.jpg",
    accent: "#008F60",
  },
  {
    id: "education",
    badge: "Education & Academies",
    subtitle: "Admissions & Leads",
    title: "Modern interactive education seminar with active participants",
    description:
      "Manage prospective student enrollment forms, batch intake questions, and automated WhatsApp course brochures.",
    img: "/images/industries/education.jpg",
    accent: "#00B879",
  },
  {
    id: "hospitality",
    badge: "Hospitality & Cafes",
    subtitle: "Menus & Bookings",
    title: "Aesthetic modern boutique cafe interior with warm natural lighting",
    description:
      "Give diners and guests a beautiful online presence to explore menus, reserve tables, and connect via WhatsApp.",
    img: "/images/industries/hospitality.jpg",
    accent: "#008F60",
  },
];

/* Map to CoverflowSlide shape */
const SLIDES: CoverflowSlide[] = INDUSTRIES.map((ind) => ({
  src: ind.img,
  alt: ind.title,
  title: ind.subtitle,
  subtitle: ind.badge,
  badge: ind.badge,
  description: ind.description,
}));

/* ─── Desktop card ─────────────────────────────────────────────────────── */
const DesktopCard: React.FC<{
  item: (typeof INDUSTRIES)[0];
  i: number;
  isInView: boolean;
  onOpenGetStarted: () => void;
}> = ({ item, i, isInView, onOpenGetStarted }) => (
  <div
    className={`group relative overflow-hidden rounded-[28px] cursor-pointer flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.12)] ${
      isInView ? "animate-tool-in opacity-0" : "opacity-0"
    }`}
    style={{ animationDelay: `${i * 90}ms`, animationFillMode: "forwards" }}
    onClick={onOpenGetStarted}
  >
    {/* Photo */}
    <div className="relative overflow-hidden" style={{ aspectRatio: "3/2" }}>
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      {/* Badge */}
      <span
        className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide text-white backdrop-blur-sm"
        style={{ backgroundColor: `${item.accent}CC` }}
      >
        {item.badge}
      </span>
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-5 bg-[#F7F9F8] group-hover:bg-white transition-colors duration-300 border-x border-b border-[#EAEDED] rounded-b-[28px]">
      <p className="text-[11px] font-bold tracking-widest uppercase text-[#00B879] mb-1">
        {item.subtitle}
      </p>
      <p className="text-[13.5px] font-semibold text-[#171923] leading-snug mb-2 line-clamp-2">
        {item.description}
      </p>
      <div className="mt-auto pt-3 border-t border-[#E8EAF0] flex items-center justify-between text-[12px] font-bold text-[#008F60]">
        <span>Explore industry solution</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </div>
  </div>
);

/* ─── Main Section ─────────────────────────────────────────────────────── */
export const IndustrySolutionsSection: React.FC<IndustrySolutionsSectionProps> = ({
  onOpenGetStarted,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setIsInView(true);
        obs.disconnect();
      },
      { threshold: 0.06 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="industries"
      aria-labelledby="industries-heading"
      className="relative py-14 sm:py-24 bg-white overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-[#008F60] text-[11px] font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            Built for every type of business
          </div>

          <h2
            id="industries-heading"
            className="text-[26px] sm:text-[42px] lg:text-[50px] font-extrabold text-[#171923] tracking-[-0.03em] leading-[1.08] mb-4"
          >
            One platform.{" "}
            <em className="font-serif italic font-normal text-[#008F60] not-italic">
              Different ways to work.
            </em>
          </h2>

          <p className="text-[14px] sm:text-[16px] text-[#5A6270] leading-relaxed">
            CODIIC adapts to how your industry actually operates — not the other way around.
          </p>
        </div>

        {/* ══════════════════════════════════════
            MOBILE — Coverflow Carousel
            (hidden on sm and above)
        ══════════════════════════════════════ */}
        <div className="sm:hidden -mx-2">
          <CoverflowCarousel
            slides={SLIDES}
            cardWidth="clamp(190px, 58vw, 240px)"
            rotate={40}
            depth={0.5}
            fade={0.1}
            gap={0.08}
            showCaption={true}
            showNavigation={true}
            showPagination={true}
            label="Industry solutions"
            onSlideClick={onOpenGetStarted}
          />

          {/* Mobile CTA */}
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={onOpenGetStarted}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-sm font-bold shadow-lg shadow-[#00B879]/25 transition-all duration-200 active:scale-[0.97]"
            >
              See all industry solutions
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ══════════════════════════════════════
            DESKTOP — Animated 3-col card grid
            (hidden on mobile)
        ══════════════════════════════════════ */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {INDUSTRIES.map((item, i) => (
            <DesktopCard
              key={item.id}
              item={item}
              i={i}
              isInView={isInView}
              onOpenGetStarted={onOpenGetStarted}
            />
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden sm:flex justify-center mt-12">
          <button
            type="button"
            onClick={onOpenGetStarted}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#171923] hover:bg-[#00B879] text-white text-[14px] font-bold shadow-lg shadow-black/10 hover:shadow-[#00B879]/25 transition-all duration-200 active:scale-[0.97]"
          >
            Start your free trial — any industry
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Legal note */}
        <p className="mt-8 text-center text-[11px] text-[#9AA7A0]">
          Need custom fields or workflow rules?{" "}
          <button
            onClick={onOpenGetStarted}
            className="text-[#008F60] font-semibold hover:underline cursor-pointer"
          >
            Talk to us →
          </button>
        </p>
      </div>
    </section>
  );
};
