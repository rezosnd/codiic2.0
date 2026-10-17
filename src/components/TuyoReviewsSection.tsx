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
      category: "ALL-IN-ONE WORKSPACE",
      rating: 5,
      quote:
        "“We replaced three disconnected SaaS tools in less than a week. Inquiries from our storefront now feed straight into our CRM and WhatsApp notifications automatically. ",
      highlight: "Finally, a platform that doesn't need constant glue code!",
      quoteEnd: "”",
      author: "Rohan Mehta",
      role: "Co-Founder & COO",
      company: "Apex Logistics",
      avatarBg: "bg-[#1E3B2F] text-white",
      initials: "RM",
      cardBg: "bg-[#DCEEE5]",
      textColor: "text-[#1E3B2F]",
      accentBadge: "bg-[#1E3B2F]/10 text-[#1E3B2F]",
    },
    {
      id: "rev-2",
      category: "EFFORTLESS PIPELINE",
      rating: 5,
      quote:
        "“The follow-up clarity is unmatched. Before CODIIC, leads from our website forms sat in shared inboxes for hours. Now our reps get alerted immediately, and ",
      highlight: "deals move across stages with zero manual copy-pasting.",
      quoteEnd: "”",
      author: "Priya Nair",
      role: "Managing Partner",
      company: "Zenith Advisory",
      avatarBg: "bg-[#493128] text-white",
      initials: "PN",
      cardBg: "bg-[#F2D9CD]",
      textColor: "text-[#493128]",
      accentBadge: "bg-[#493128]/10 text-[#493128]",
    },
    {
      id: "rev-3",
      category: "10X SALES VELOCITY",
      rating: 5,
      quote:
        "“Our property inquiries doubled and our first-contact time dropped to under two minutes. Having website inquiries, WhatsApp chat logs, and site visit schedules in one place made our ",
      highlight: "entire sales team operate with absolute clarity.",
      quoteEnd: "”",
      author: "Aditya Singhania",
      role: "Director of Sales",
      company: "Skyline Realty",
      avatarBg: "bg-[#33254A] text-white",
      initials: "AS",
      cardBg: "bg-[#E8E3F2]",
      textColor: "text-[#33254A]",
      accentBadge: "bg-[#33254A]/10 text-[#33254A]",
    },
    {
      id: "rev-4",
      category: "CUSTOMER RETENTION",
      rating: 5,
      quote:
        "“We run a fast-growing retail brand. Connecting our online store with instant UPI payment links and automated WhatsApp tracking notifications ",
      highlight: "cut our customer support inquiries in half.",
      quoteEnd: "”",
      author: "Ananya Joshi",
      role: "Head of Operations",
      company: "Kaveri Lifestyle",
      avatarBg: "bg-[#483B20] text-white",
      initials: "AJ",
      cardBg: "bg-[#F5EEDB]",
      textColor: "text-[#483B20]",
      accentBadge: "bg-[#483B20]/10 text-[#483B20]",
    },
    {
      id: "rev-5",
      category: "ZERO LEAD LEAKAGE",
      rating: 5,
      quote:
        "“Our conversion rate jumped 34% within the first month. Inquiries from Google and Instagram land directly into the pipeline with ",
      highlight: "zero manual entry and instantaneous brochure replies.",
      quoteEnd: "”",
      author: "Siddharth Verma",
      role: "Founder & CEO",
      company: "Craft & Wood Living",
      avatarBg: "bg-[#1E3447] text-white",
      initials: "SV",
      cardBg: "bg-[#DDEBF5]",
      textColor: "text-[#1E3447]",
      accentBadge: "bg-[#1E3447]/10 text-[#1E3447]",
    },
    {
      id: "rev-6",
      category: "GST & INVOICING READY",
      rating: 5,
      quote:
        "“Having GST invoicing, UPI QR checkout, and customer profiles tied together saved our accounting team hours of reconciliations every single weekend. ",
      highlight: "Incredible value for Indian growing businesses.",
      quoteEnd: "”",
      author: "Meera Agarwal",
      role: "Finance Director",
      company: "Bharat Solar Systems",
      avatarBg: "bg-[#2C3B29] text-white",
      initials: "MA",
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D9DED8] text-[11px] font-bold tracking-widest uppercase text-[#5A6270] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00B879]" />
              <span>TESTIMONIALS & TRUST</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight leading-tight">
              Trusted by fast-growing Indian businesses.
            </h2>
            <p className="text-base text-[#5A6270] max-w-xl">
              Discover how modern founders run websites, CRM, sales, and everyday automations from one connected place.
            </p>
          </div>

          {/* Tuyo.com Circular Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-12 h-12 rounded-full bg-[#171923] hover:bg-[#008F60] text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
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
              className="w-12 h-12 rounded-full bg-[#171923] hover:bg-[#008F60] text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
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

                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-[#D9DED8] text-[11px] text-[#5A6270] shadow-2xs">
            <span>Drag, click, or use arrows to explore reviews</span>
          </div>
        </div>

      </div>
    </section>
  );
};
