"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, Sparkles } from "lucide-react";

interface ReviewItem {
  id: string;
  category: string;
  rating: number;
  quote: string;
  highlight: string;
  quoteEnd: string;
  author: string;
  role: string;
  company: string;
  avatarBg: string;
  initials: string;
  cardBg: string;
  textColor: string;
  accentBadge: string;
}

export const TuyoReviewsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const dragStartX = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 6 Authentic Business Reviews with Tuyo-inspired pastel colorways
  const reviews: ReviewItem[] = [
    {
      id: "rev-1",
      category: "NO-CODE STOREFRONT",
      rating: 5,
      quote:
        "“We built and launched our entire store with drag-and-drop — no developer, no designer. Checkout orders now flow straight into CRM 360 with automatic WhatsApp receipts. ",
      highlight: "Live in 20 minutes, zero code!",
      quoteEnd: "”",
      author: "Sarah Mitchell",
      role: "Founder",
      company: "Bloom & Birch, US",
      avatarBg: "bg-[#1F2937] text-white",
      initials: "SM",
      cardBg: "bg-[#F1F0EA]",
      textColor: "text-[#1F2937]",
      accentBadge: "bg-[#1F2937]/10 text-[#1F2937]",
    },
    {
      id: "rev-2",
      category: "STACK SAVINGS",
      rating: 5,
      quote:
        "“We replaced four separate SaaS tools — site builder, shared inbox, CRM, and an ad-spy subscription — with a single CODIIC login. ",
      highlight: "We're saving $300+ every single month.",
      quoteEnd: "”",
      author: "Daniel Osei",
      role: "Agency Founder",
      company: "Northline Creative, UK",
      avatarBg: "bg-[#3B2E12] text-white",
      initials: "DO",
      cardBg: "bg-[#F2D9CD]",
      textColor: "text-[#3B2E12]",
      accentBadge: "bg-[#3B2E12]/10 text-[#3B2E12]",
    },
    {
      id: "rev-3",
      category: "MARKET INTELLIGENCE",
      rating: 5,
      quote:
        "“We spotted our best-selling SKU inside the Product & Ad Library, cloned the winning angle onto a drag-and-drop landing page, and ",
      highlight: "scaled it profitably within two weeks.",
      quoteEnd: "”",
      author: "Aarav Kapoor",
      role: "D2C Operator",
      company: "Craft & Wood Living, India",
      avatarBg: "bg-[#33254A] text-white",
      initials: "AK",
      cardBg: "bg-[#E8E3F2]",
      textColor: "text-[#33254A]",
      accentBadge: "bg-[#33254A]/10 text-[#33254A]",
    },
    {
      id: "rev-4",
      category: "OMNICHANNEL INBOX",
      rating: 5,
      quote:
        "“We kept our existing WhatsApp Business number and every chat — the phone app and CODIIC inbox now run side by side. ",
      highlight: "Zero lost messages with Coexistence.",
      quoteEnd: "”",
      author: "Layla Haddad",
      role: "Head of Operations",
      company: "Sahara Living, UAE",
      avatarBg: "bg-[#3B2E12] text-white",
      initials: "LH",
      cardBg: "bg-[#F5EFDF]",
      textColor: "text-[#3B2E12]",
      accentBadge: "bg-[#3B2E12]/10 text-[#3B2E12]",
    },
    {
      id: "rev-5",
      category: "AI AUTOMATION",
      rating: 5,
      quote:
        "“Bulk AI voice calls confirmed 200+ orders overnight and booked appointments straight onto our calendar. ",
      highlight: "42 qualified appointments while we slept.",
      quoteEnd: "”",
      author: "Marcus Tan",
      role: "Growth Lead",
      company: "Orbit Homeware, Singapore",
      avatarBg: "bg-[#1F2937] text-white",
      initials: "MT",
      cardBg: "bg-[#DDEBF5]",
      textColor: "text-[#1F2937]",
      accentBadge: "bg-[#1F2937]/10 text-[#1F2937]",
    },
    {
      id: "rev-6",
      category: "AUTOMATED PIPELINE",
      rating: 5,
      quote:
        "“Instagram Auto-DM and WhatsApp drip campaigns turned our comment sections into a qualified pipeline — ",
      highlight: "conversions jumped 34% in the first month.",
      quoteEnd: "”",
      author: "Emma Rodriguez",
      role: "Marketing Director",
      company: "Verde Skincare, US",
      avatarBg: "bg-[#2C3B29] text-white",
      initials: "ER",
      cardBg: "bg-[#E4EAE2]",
      textColor: "text-[#2C3B29]",
      accentBadge: "bg-[#2C3B29]/10 text-[#2C3B29]",
    },
  ];

  const total = reviews.length;

  // Auto-rotation timer, paused on hover or drag
  useEffect(() => {
    if (isPaused || isDragging) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, isDragging, total]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Pointer drag & touch interactions (Tuyo-inspired interactive physics)
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    setDragOffset(0);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX.current;
    setDragOffset(delta);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -45) {
      handleNext();
    } else if (dragOffset > 45) {
      handlePrev();
    }
    setDragOffset(0);
  };

  // Calculate shortest circular offset for card slot
  const getSlot = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section
      id="reviews"
      aria-label="Customer reviews"
      className="py-20 sm:py-28 bg-transparent relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tuyo.com-style Header: Left Title + Right Circular Dark Navigation Arrows */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DAD8CD] text-[11px] font-bold tracking-widest uppercase text-[#4B5563] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#064E3B]" />
              <span>TESTIMONIALS & TRUST</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Trusted by fast-growing businesses worldwide.
            </h2>
            <p className="text-base text-[#4B5563] max-w-xl">
              Founders, D2C operators and agency leaders across the US, UK, UAE, India and Singapore run their entire business on CODIIC.
            </p>
          </div>

          {/* Tuyo.com Circular Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-12 h-12 rounded-full bg-[#111827] hover:bg-[#043B2C] text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 12H5M12 19L5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next review"
              className="w-12 h-12 rounded-full bg-[#111827] hover:bg-[#043B2C] text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M12 5L19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Tuyo.com 3D Interactive Card Stack Stage (Drag, Click, & Smooth Spring)   */}
        {/* ========================================================================= */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="relative w-full h-[430px] sm:h-[450px] flex items-center justify-center overflow-visible touch-pan-y cursor-grab active:cursor-grabbing"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          {reviews.map((rev, index) => {
            const slot = getSlot(index);
            const isCenter = slot === 0;

            // Responsive slot transforms matching Tuyo.com
            let xOffset = slot * 240 + dragOffset;
            let yOffset = Math.abs(slot) * 24;
            let rot = slot * 4.5;
            let scale = Math.max(0.75, 1 - Math.abs(slot) * 0.08);
            let opacity = Math.abs(slot) > 2 ? 0 : Math.max(0, 1 - Math.abs(slot) * 0.28);
            let zIndex = 10 - Math.abs(slot);

            return (
              <article
                key={rev.id}
                onClick={() => {
                  if (slot !== 0) setActiveIndex(index);
                }}
                className={`absolute top-1/2 left-1/2 w-[340px] sm:w-[420px] md:w-[460px] h-[330px] sm:h-[350px] -ml-[170px] sm:-ml-[210px] md:-ml-[230px] -mt-[165px] sm:-mt-[175px] p-6 sm:p-8 rounded-[28px] ${rev.cardBg} ${rev.textColor} flex flex-col justify-between shadow-[0_20px_45px_-15px_rgba(0,0,0,0.12)] border border-black/[0.06] select-none`}
                style={{
                  transform: `translate3d(${xOffset}px, ${yOffset}px, 0) rotate(${rot}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  pointerEvents: Math.abs(slot) > 2 ? "none" : "auto",
                  transition: isDragging
                    ? "none"
                    : "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.55s ease, box-shadow 0.55s ease",
                }}
              >
                {/* Top Row: Category Pill & 5 Gold Stars */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${rev.accentBadge}`}
                  >
                    {rev.category}
                  </span>

                  <div className="flex items-center gap-1 text-[#C6A15B]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#C6A15B] text-[#C6A15B]"
                      />
                    ))}
                  </div>
                </div>

                {/* Middle: Review Quote with Authentic Highlights */}
                <p className="text-sm sm:text-base leading-relaxed font-medium">
                  {rev.quote}
                  <span className="font-bold underline decoration-black/25 underline-offset-4">
                    {rev.highlight}
                  </span>
                  {rev.quoteEnd}
                </p>

                {/* Bottom Row: Avatar, Author, Role & Company */}
                <div className="pt-4 border-t border-black/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${rev.avatarBg} font-bold text-xs flex items-center justify-center shrink-0 shadow-xs`}
                    >
                      {rev.initials}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold leading-tight">
                        {rev.author}
                      </h4>
                      <p className="text-[11px] opacity-75 leading-tight mt-0.5">
                        {rev.role}, {rev.company}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono opacity-60">
                    0{index + 1}/0{total}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Tuyo.com Interactive Drag Indicator Pill */}
        <div className="flex justify-center mt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-[#DAD8CD] text-[11px] text-[#4B5563] shadow-2xs">
            <span>Drag, click, or use arrows to explore reviews</span>
          </div>
        </div>

      </div>
    </section>
  );
};
