"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export interface CoverflowSlide {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  description?: string;
  cta?: string;
  meta?: { label: string; value: string }[];
}

export interface CoverflowCarouselProps {
  slides: CoverflowSlide[];
  rotate?: number;
  depth?: number;
  perspective?: number;
  falloff?: number;
  fade?: number;
  cardWidth?: string;
  gap?: number;
  loop?: boolean;
  showCaption?: boolean;
  showPagination?: boolean;
  showNavigation?: boolean;
  label?: string;
  className?: string;
  cardClassName?: string;
  onSlideClick?: (index: number) => void;
}

export function CoverflowCarousel({
  slides,
  rotate = 42,
  depth = 0.55,
  perspective = 3,
  falloff = 0.58,
  fade = 0.08,
  cardWidth = "clamp(200px, 56vw, 300px)",
  gap = 0.06,
  loop = true,
  showCaption = true,
  showPagination = true,
  showNavigation = true,
  label = "Industry solutions carousel",
  className,
  cardClassName,
  onSlideClick,
}: CoverflowCarouselProps) {
  const count = slides.length;
  const frameRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const posRef = React.useRef(0);
  const targetRef = React.useRef(0);
  const widthRef = React.useRef(0);
  const rafRef = React.useRef<number | null>(null);
  const dragRef = React.useRef<{ id: number; x: number; pos: number; v: number; t: number } | null>(null);
  const [selected, setSelected] = React.useState(0);

  const indexAt = React.useCallback(
    (pos: number) => ((Math.round(pos) % count) + count) % count,
    [count]
  );

  const paint = React.useCallback(() => {
    const width = widthRef.current;
    if (!width) return;
    const pitch = width * (1 + gap);
    const pos = posRef.current;
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      let offset = index - pos;
      if (loop) {
        offset = ((offset % count) + count) % count;
        if (offset > count / 2) offset -= count;
      }
      const distance = Math.abs(offset);
      const ramp = Math.pow(distance, falloff);
      const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);
      card.style.transform =
        `translateX(calc(-50% + ${offset * pitch}px)) ` +
        `translateZ(${-depth * width * ramp}px) rotateY(${-tilt}deg)`;
      const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;
      card.style.opacity = String(Math.max(0, 1 - fade * distance) * edge);
      card.style.zIndex = String(100 - Math.round(distance));
    });
  }, [count, depth, fade, falloff, gap, loop, rotate]);

  const settle = React.useCallback(
    (target: number) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      targetRef.current = target;
      setSelected(indexAt(target));
      const step = () => {
        const remaining = target - posRef.current;
        if (Math.abs(remaining) < 0.0004) {
          posRef.current = target;
          paint();
          rafRef.current = null;
          return;
        }
        posRef.current += remaining * 0.16;
        paint();
        rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    },
    [indexAt, paint]
  );

  const clampPos = React.useCallback(
    (pos: number) => (loop ? pos : Math.max(0, Math.min(count - 1, pos))),
    [count, loop]
  );

  const goTo = React.useCallback(
    (index: number) => {
      const target = loop
        ? index + Math.round((targetRef.current - index) / count) * count
        : index;
      settle(clampPos(target));
    },
    [clampPos, count, loop, settle]
  );

  const nudge = React.useCallback(
    (by: number) => settle(clampPos(Math.round(targetRef.current) + by)),
    [clampPos, settle]
  );

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (rafRef.current !== null) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    e.currentTarget.setPointerCapture(e.pointerId);
    targetRef.current = posRef.current;
    dragRef.current = { id: e.pointerId, x: e.clientX, pos: posRef.current, v: 0, t: performance.now() };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== e.pointerId) return;
    const pitch = widthRef.current * (1 + gap);
    if (!pitch) return;
    const now = performance.now();
    const prev = posRef.current;
    posRef.current = clampPos(drag.pos - (e.clientX - drag.x) / pitch);
    drag.v = ((posRef.current - prev) / Math.max(now - drag.t, 1)) * 1000;
    drag.t = now;
    const idx = indexAt(posRef.current);
    if (idx !== selected) setSelected(idx);
    paint();
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== e.pointerId) return;
    dragRef.current = null;
    const carried = Math.max(-2, Math.min(2, drag.v * 0.18));
    settle(clampPos(Math.round(posRef.current + carried)));
  };

  useIsoLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const measure = () => {
      const card = cardRefs.current[0];
      if (!card) return;
      widthRef.current = card.offsetWidth;
      paint();
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [paint]);

  React.useEffect(
    () => () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); },
    []
  );

  const active = slides[selected];

  return (
    <div
      className={cn("w-full select-none", className)}
      style={{ ["--cf-card" as string]: cardWidth }}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="relative">
        <div
          ref={frameRef}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") { e.preventDefault(); nudge(-1); }
            else if (e.key === "ArrowRight") { e.preventDefault(); nudge(1); }
          }}
          className="cursor-grab overflow-hidden py-8 outline-none active:cursor-grabbing focus-visible:outline-none"
          style={{ perspective: `calc(var(--cf-card) * ${perspective})`, touchAction: "pan-y" }}
        >
          <div
            className="relative"
            style={{ height: "var(--cf-card)", transformStyle: "preserve-3d" }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                ref={(node) => { cardRefs.current[index] = node; }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}`}
                onClick={() => {
                  if (index === selected) onSlideClick?.(index);
                  else goTo(index);
                }}
                className={cn(
                  "absolute left-1/2 top-0 overflow-hidden rounded-3xl shadow-2xl will-change-transform cursor-pointer",
                  "aspect-[3/4]",
                  cardClassName
                )}
                style={{ width: "var(--cf-card)" }}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  draggable={false}
                  className="h-full w-full object-cover"
                />
                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Slide label on card */}
                {slide.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#00B879]/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-wide">
                      {slide.badge}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {slide.subtitle && (
                    <p className="text-[#5EF0B8] text-[10px] font-bold tracking-widest uppercase mb-1">{slide.subtitle}</p>
                  )}
                  {slide.title && (
                    <p className="text-white text-[14px] font-bold leading-tight">{slide.title}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {showNavigation && (
          <>
            <button
              type="button"
              aria-label="Previous"
              onClick={() => nudge(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-[200] w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-[#E2E6E4] shadow-md flex items-center justify-center text-[#171923] hover:bg-[#00B879] hover:text-white hover:border-[#00B879] transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => nudge(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-[200] w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-[#E2E6E4] shadow-md flex items-center justify-center text-[#171923] hover:bg-[#00B879] hover:text-white hover:border-[#00B879] transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Caption panel */}
      {showCaption && active && (
        <div key={selected} className="mt-4 px-2 animate-[fadeUp_0.35s_ease_both]">
          {active.description && (
            <p className="text-[13px] text-[#5A6270] leading-relaxed text-center mt-1">
              {active.description}
            </p>
          )}
        </div>
      )}

      {/* Dot pagination */}
      {showPagination && (
        <div className="mt-5 flex items-center justify-center gap-1.5">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === selected}
              onClick={() => goTo(index)}
              className={cn(
                "rounded-full transition-all duration-300",
                index === selected
                  ? "w-5 h-2 bg-[#00B879]"
                  : "w-2 h-2 bg-[#D1D5DB] hover:bg-[#00B879]/50"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
