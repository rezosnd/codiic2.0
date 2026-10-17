"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
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

/* ─── Data ────────────────────────────────────────────────────────────────── */
const INDUSTRIES = [
  {
    id: "retail",
    title: "Retail & eCommerce",
    tag: "Storefront & Orders",
    icon: RetailColorIcon,
    desc: "Connect your storefront with real-time UPI orders, WhatsApp customer updates, and auto-synced inventory.",
    imageSrc: "/images/industries/retail.jpg",
    imageAlt: "Modern boutique retail storefront with curated lifestyle displays",
    accent: "#00B879",
  },
  {
    id: "services",
    title: "Professional Services",
    tag: "Retainers & Inquiries",
    icon: ServicesColorIcon,
    desc: "Organize client consultations, intake briefs, and retainer proposals with clear team task assignment.",
    imageSrc: "/images/industries/services.jpg",
    imageAlt: "Professional advisory consultants meeting in a bright contemporary office",
    accent: "#008F60",
  },
  {
    id: "real-estate",
    title: "Real Estate & Developers",
    tag: "Site Visits & Deals",
    icon: RealEstateColorIcon,
    desc: "Keep property inquiries, floorplan shares, and site-visit schedules visible across your deal pipeline.",
    imageSrc: "/images/industries/real-estate.jpg",
    imageAlt: "Contemporary architectural residential property development",
    accent: "#00B879",
  },
  {
    id: "agencies",
    title: "Creative Agencies",
    tag: "Pitches & Scopes",
    icon: AgenciesColorIcon,
    desc: "Capture website inquiries, qualify client budgets, and track pitch milestones in one continuous feed.",
    imageSrc: "/images/industries/agencies.jpg",
    imageAlt: "Creative digital agency team collaborating on digital campaign design",
    accent: "#008F60",
  },
  {
    id: "education",
    title: "Education & Academies",
    tag: "Admissions & Leads",
    icon: EducationColorIcon,
    desc: "Manage prospective student enrollment forms, batch intake questions, and automated WhatsApp course brochures.",
    imageSrc: "/images/industries/education.jpg",
    imageAlt: "Modern interactive education seminar with active participants",
    accent: "#00B879",
  },
  {
    id: "hospitality",
    title: "Hospitality & Cafes",
    tag: "Menus & Bookings",
    icon: HospitalityColorIcon,
    desc: "Give diners and guests a beautiful online presence to explore menus, reserve tables, and connect via WhatsApp.",
    imageSrc: "/images/industries/hospitality.jpg",
    imageAlt: "Aesthetic modern boutique cafe interior with warm natural lighting",
    accent: "#008F60",
  },
];

/* ─── Mobile Coverflow ────────────────────────────────────────────────────── */
function MobileCoverflow({ onOpenGetStarted }: { onOpenGetStarted: () => void }) {
  const count = INDUSTRIES.length;
  const [selected, setSelected] = useState(0);
  const [dragging, setDragging] = useState(false);

  const frameRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const posRef = useRef(0);
  const targetRef = useRef(0);
  const widthRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const dragRef = useRef<{ x: number; pos: number; v: number; t: number } | null>(null);

  const ROTATE = 42;
  const DEPTH = 0.45;
  const FADE = 0.25;
  const GAP = 0.10;
  const FALLOFF = 0.6;

  const indexAt = (pos: number) => ((Math.round(pos) % count) + count) % count;

  const paint = () => {
    const width = widthRef.current;
    if (!width) return;
    const pitch = width * (1 + GAP);
    const pos = posRef.current;
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      let offset = index - pos;
      offset = ((offset % count) + count) % count;
      if (offset > count / 2) offset -= count;
      const distance = Math.abs(offset);
      const ramp = Math.pow(distance, FALLOFF);
      const tilt = Math.min(ROTATE * ramp, 80) * Math.sign(offset);
      card.style.transform =
        `translateX(calc(-50% + ${offset * pitch}px)) translateZ(${-DEPTH * width * ramp}px) rotateY(${-tilt}deg)`;
      const edge = Math.min(1, Math.max(0, count / 2 - distance));
      card.style.opacity = String(Math.max(0, 1 - FADE * distance) * edge);
      card.style.zIndex = String(100 - Math.round(distance));
    });
  };

  const settle = (target: number) => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    targetRef.current = target;
    setSelected(indexAt(target));
    const step = () => {
      const remaining = target - posRef.current;
      if (Math.abs(remaining) < 0.0005) {
        posRef.current = target;
        paint();
        rafRef.current = null;
        return;
      }
      posRef.current += remaining * 0.17;
      paint();
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  };

  const clampPos = (pos: number) => pos; // loop mode — no clamping
  const nudge = (by: number) => settle(clampPos(Math.round(targetRef.current) + by));

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const measure = () => {
      const card = cardRefs.current[0];
      if (!card) return;
      widthRef.current = card.offsetWidth;
      paint();
    };
    measure();
    const obs = new ResizeObserver(measure);
    obs.observe(frame);
    return () => { obs.disconnect(); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (rafRef.current !== null) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    e.currentTarget.setPointerCapture(e.pointerId);
    targetRef.current = posRef.current;
    dragRef.current = { x: e.clientX, pos: posRef.current, v: 0, t: performance.now() };
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    const pitch = widthRef.current * (1 + GAP);
    if (!pitch) return;
    const now = performance.now();
    const prev = posRef.current;
    posRef.current = drag.pos - (e.clientX - drag.x) / pitch;
    drag.v = ((posRef.current - prev) / Math.max(now - drag.t, 1)) * 1000;
    drag.t = now;
    const idx = indexAt(posRef.current);
    if (idx !== selected) setSelected(idx);
    paint();
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    dragRef.current = null;
    setDragging(false);
    const carried = Math.max(-2, Math.min(2, drag.v * 0.18));
    settle(Math.round(posRef.current + carried));
  };

  const active = INDUSTRIES[selected];

  return (
    <div className="w-full">
      {/* 3D carousel stage */}
      <div
        ref={frameRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="relative overflow-visible py-6"
        style={{
          perspective: "800px",
          touchAction: "pan-y",
          cursor: dragging ? "grabbing" : "grab",
        }}
      >
        <div
          className="relative mx-auto"
          style={{
            height: "clamp(220px, 65vw, 300px)",
            transformStyle: "preserve-3d",
          }}
        >
          {INDUSTRIES.map((item, index) => (
            <div
              key={item.id}
              ref={(node) => { cardRefs.current[index] = node; }}
              onClick={() => {
                if (index === selected) onOpenGetStarted();
                else settle(index + Math.round((targetRef.current - index) / count) * count);
              }}
              className="absolute left-1/2 top-0 overflow-hidden rounded-3xl shadow-2xl will-change-transform select-none"
              style={{
                width: "clamp(180px, 54vw, 250px)",
                height: "clamp(220px, 65vw, 300px)",
              }}
            >
              {/* Photo */}
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                draggable={false}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              {/* Badge */}
              <div className="absolute top-3 left-3">
                <span
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide text-white"
                  style={{ backgroundColor: `${item.accent}DD`, backdropFilter: "blur(6px)" }}
                >
                  {item.tag}
                </span>
              </div>
              {/* Bottom title with brand icon */}
              <div className="absolute bottom-0 left-0 right-0 p-3.5 flex items-center gap-2.5">
                <div className="w-8 h-8 shrink-0 flex items-center justify-center drop-shadow-md">
                  <item.icon className="w-8 h-8 shrink-0" />
                </div>
                <p className="text-white text-[13px] font-bold leading-snug">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nav arrows */}
      <div className="flex items-center justify-center gap-3 -mt-2 mb-4">
        <button
          type="button"
          onClick={() => nudge(-1)}
          aria-label="Previous"
          className="w-9 h-9 rounded-full bg-white border border-[#E2E6E4] shadow flex items-center justify-center text-[#171923] hover:bg-[#00B879] hover:text-white hover:border-[#00B879] transition-all duration-200 active:scale-95"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        {/* Dot pagination */}
        <div className="flex items-center gap-1.5">
          {INDUSTRIES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to ${INDUSTRIES[i].title}`}
              onClick={() => settle(i + Math.round((targetRef.current - i) / count) * count)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === selected ? 20 : 8,
                height: 8,
                backgroundColor: i === selected ? "#00B879" : "#D1D5DB",
              }}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => nudge(1)}
          aria-label="Next"
          className="w-9 h-9 rounded-full bg-white border border-[#E2E6E4] shadow flex items-center justify-center text-[#171923] hover:bg-[#00B879] hover:text-white hover:border-[#00B879] transition-all duration-200 active:scale-95"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Active card description */}
      <div
        key={selected}
        className="px-4 text-center"
        style={{ animation: "industryCaptionIn 0.3s ease both" }}
      >
        <p className="text-[12px] text-[#5A6270] leading-relaxed">{active.desc}</p>
        <button
          type="button"
          onClick={onOpenGetStarted}
          className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-[#008F60] hover:text-[#00B879] transition-colors"
        >
          Explore industry solution <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

/* ─── Main Section ────────────────────────────────────────────────────────── */
export const OlearisIndustrySection: React.FC<OlearisIndustrySectionProps> = ({
  onOpenGetStarted,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setIsInView(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="solutions"
      aria-labelledby="solutions-heading"
      className="relative py-14 sm:py-24 bg-white overflow-hidden"
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-[#008F60] text-[11px] font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            Industry Workflows
          </div>
          <h2
            id="solutions-heading"
            className="text-[26px] sm:text-[42px] lg:text-[50px] font-extrabold text-[#171923] tracking-[-0.03em] leading-[1.08] mb-3"
          >
            Made for the way your{" "}
            <em className="font-serif italic font-normal text-[#008F60] not-italic">
              business works.
            </em>
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[#5A6270] leading-relaxed">
            Whether you run a retail shop, advisory practice, or agency, CODIIC connects your daily customer operations.
          </p>
        </div>

        {/* ══ MOBILE: Coverflow carousel (< md) ══════════════════════════ */}
        <div className="md:hidden">
          <MobileCoverflow onOpenGetStarted={onOpenGetStarted} />

          <div className="mt-7 text-center">
            <button
              type="button"
              onClick={onOpenGetStarted}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-[13px] font-bold shadow-lg shadow-[#00B879]/25 transition-all duration-200 active:scale-[0.97]"
            >
              See all industry solutions <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ══ DESKTOP: Animated 3-col photo grid (md+) ═══════════════════ */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {INDUSTRIES.map((item, i) => (
            <div
              key={item.id}
              onClick={onOpenGetStarted}
              className={`group cursor-pointer rounded-3xl bg-white border border-[#D9DED8] hover:border-[#00B879]/50 hover:shadow-2xl hover:shadow-[#00B879]/10 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1 ${
                isInView ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms, transform 0.35s ease, box-shadow 0.35s ease, border-color 0.2s ease`,
                transitionDelay: isInView ? `${i * 80}ms` : "0ms",
              }}
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#D9DED8]">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />
                {/* Floating badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold text-white border border-white/20"
                    style={{ backgroundColor: "rgba(0,0,0,0.42)", backdropFilter: "blur(8px)" }}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Text with icon */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 shrink-0 flex items-center justify-center drop-shadow-xs">
                    <item.icon className="w-9 h-9 shrink-0" />
                  </div>
                  <h3 className="text-[15px] font-bold text-[#171923] group-hover:text-[#008F60] transition-colors leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[12.5px] text-[#555A68] leading-relaxed flex-1">{item.desc}</p>
                <div className="mt-4 pt-3.5 border-t border-[#E8EAF0] flex items-center justify-between text-[11.5px] font-bold text-[#008F60]">
                  <span>Explore industry solution</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex justify-center mt-12">
          <button
            type="button"
            onClick={onOpenGetStarted}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#171923] hover:bg-[#00B879] text-white text-[14px] font-bold shadow-lg shadow-black/10 hover:shadow-[#00B879]/25 transition-all duration-200 active:scale-[0.97]"
          >
            Start free — works for any industry
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* CSS for mobile caption animation */}
      <style>{`
        @keyframes industryCaptionIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};
