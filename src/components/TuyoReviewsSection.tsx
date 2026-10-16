"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react";

export const TuyoReviewsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const reviews = [
    {
      id: "rev-1",
      category: "GAME CHANGER",
      rating: 5,
      quote:
        "“We replaced three different disconnected tools in less than a week. Inquiries from our storefront now feed straight into our CRM and WhatsApp notifications automatically. ",
      highlight: "Finally, a platform that doesn't need constant glue code!",
      quoteEnd: "”",
      author: "Rohan Mehta",
      role: "Co-Founder & COO, Apex Logistics",
      source: "Verified Business Workflow",
      bgClass: "bg-[#E8F8F1]/70 border-[#00B879]/30",
      highlightClass: "bg-[#00B879]/15 text-[#008F60] px-1.5 py-0.5 rounded font-semibold",
    },
    {
      id: "rev-2",
      category: "EFFORTLESS PIPELINE",
      rating: 5,
      quote:
        "“The follow-up clarity is unmatched. Before CODIIC, leads from our website forms sat in shared email inboxes for hours. Now our reps get alerted immediately, and ",
      highlight: "deals move across stages with zero manual copy-pasting.",
      quoteEnd: "”",
      author: "Priya Nair",
      role: "Managing Partner, Zenith Advisory",
      source: "Verified Business Workflow",
      bgClass: "bg-[#FBF9F4] border-[#E8E2D2]",
      highlightClass: "bg-amber-100/80 text-amber-900 px-1.5 py-0.5 rounded font-semibold",
    },
    {
      id: "rev-3",
      category: "10X RESPONSE VELOCITY",
      rating: 5,
      quote:
        "“Our property inquiries doubled and our first-contact time dropped significantly. Having website inquiries, WhatsApp chat logs, and site visit schedules in one place made our ",
      highlight: "entire sales team operate with absolute clarity.",
      quoteEnd: "”",
      author: "Aditya Singhania",
      role: "Director of Sales, Skyline Realty",
      source: "Verified Business Workflow",
      bgClass: "bg-[#F7F9F8] border-[#E2E8E5]",
      highlightClass: "bg-[#00B879]/15 text-[#008F60] px-1.5 py-0.5 rounded font-semibold",
    },
    {
      id: "rev-4",
      category: "CUSTOMER LOVE",
      rating: 5,
      quote:
        "“We run a fast-growing retail business. Connecting our online store with instant UPI payment links and automated WhatsApp tracking notifications ",
      highlight: "cut our customer support questions in half.",
      quoteEnd: "”",
      author: "Ananya Joshi",
      role: "Head of Operations, Kaveri Lifestyle",
      source: "Verified Business Workflow",
      bgClass: "bg-[#E8F8F1]/60 border-[#00B879]/30",
      highlightClass: "bg-[#00B879]/15 text-[#008F60] px-1.5 py-0.5 rounded font-semibold",
    },
  ];

  // Auto-rotation timer, paused on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 bg-[#F7F9F8] border-b border-[#E8EAF0] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-[#008F60] text-xs font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#00B879]" />
              <span>TESTIMONIALS & PLAYBOOKS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight leading-tight">
              Good work speaks for itself.
            </h2>

            <p className="mt-3 text-base sm:text-lg text-[#555A68] leading-relaxed">
              See what people say about working with CODIIC.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-11 h-11 rounded-full border border-[#D9DEDC] bg-white hover:bg-[#171923] hover:text-white hover:border-[#171923] text-[#171923] flex items-center justify-center transition-all shadow-xs active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono font-semibold text-[#555A68]">
              0{activeIndex + 1} / 0{reviews.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next review"
              className="w-11 h-11 rounded-full border border-[#D9DEDC] bg-white hover:bg-[#171923] hover:text-white hover:border-[#171923] text-[#171923] flex items-center justify-center transition-all shadow-xs active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tuyo-Inspired Flowing 3-Card Carousel Stage */}
        <div
          className="relative min-h-[380px] flex items-center justify-center py-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="w-full flex items-center justify-center gap-6 overflow-hidden">
            {reviews.map((rev, index) => {
              const total = reviews.length;
              const offset = (index - activeIndex + total) % total;
              
              // Only render or position cards that are active or immediate neighbors
              let isCenter = offset === 0;
              let isLeft = offset === total - 1 || (activeIndex === 0 && index === total - 1);
              let isRight = offset === 1;

              // Hide far cards on desktop
              if (!isCenter && !isLeft && !isRight) {
                return null;
              }

              return (
                <div
                  key={rev.id}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer rounded-3xl p-7 sm:p-9 border transition-all duration-500 flex flex-col justify-between shrink-0 select-none ${
                    rev.bgClass
                  } ${
                    isCenter
                      ? "w-full max-w-xl z-20 shadow-2xl shadow-black/5 scale-100 opacity-100 ring-2 ring-[#00B879]/20"
                      : "hidden lg:flex w-80 xl:w-96 z-10 shadow-sm scale-90 opacity-60 hover:opacity-85"
                  }`}
                  style={{
                    transform: isLeft
                      ? "rotate(-2deg) translateY(8px)"
                      : isRight
                      ? "rotate(2deg) translateY(8px)"
                      : "rotate(0deg) translateY(0px)",
                  }}
                >
                  <div>
                    {/* Card Top: Category Eyebrow & Star Rating */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#5A6270]">
                        {rev.category}
                      </span>
                      <div className="flex items-center gap-1 text-[#171923]">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#171923] text-[#171923]"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Review Quote with subtle pill highlight */}
                    <p className="text-base sm:text-lg text-[#171923] font-normal leading-relaxed mb-6">
                      {rev.quote}
                      <span className={rev.highlightClass}>
                        {rev.highlight}
                      </span>
                      {rev.quoteEnd}
                    </p>
                  </div>

                  <div>
                    {/* Thin Separator Line */}
                    <div className="w-full h-px bg-[#171923]/10 mb-4" />

                    {/* Reviewer Details */}
                    <div>
                      <h4 className="text-sm font-bold text-[#171923]">
                        {rev.author}
                      </h4>
                      <p className="text-xs text-[#555A68] mt-0.5">
                        {rev.role}
                      </p>
                      <div className="text-[11px] text-[#008F60] font-medium mt-1">
                        {rev.source}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Indicators / Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "w-8 bg-[#00B879]"
                  : "w-2 bg-[#D9DEDC] hover:bg-[#8A90A0]"
              }`}
              aria-label={`Jump to review ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
