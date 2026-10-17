"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  X,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Globe,
  Users,
  Kanban,
  Zap,
  Play,
} from "lucide-react";

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STEP_DURATION = 6500;

const TOUR_STEPS = [
  {
    title: "Storefront & Website Builder",
    short: "Website",
    icon: Globe,
    accent: "#00E08F",
    accentSoft: "rgba(0,224,143,0.16)",
    tagline: "Code ka jhanjhat khatam",
    desc: "Drag and drop responsive blocks to launch your storefront or agency landing page in minutes. All inquiry forms sync directly with your CRM.",
    stats: [
      { value: "5 min", label: "To go live" },
      { value: "100%", label: "Mobile ready" },
    ],
    highlights: [
      "Pre-built business sections (Hero, Catalog, Pricing, Testimonials)",
      "Ultra-fast loading with zero code maintenance",
      "Custom domain with automatic SSL security",
    ],
  },
  {
    title: "Customer Relationship Management",
    short: "CRM",
    icon: Users,
    accent: "#38BDF8",
    accentSoft: "rgba(56,189,248,0.16)",
    tagline: "Follow-up bhoolna ab band",
    desc: "Connect your WhatsApp Business API, web forms, and advertising channels into one chronological timeline of client interactions.",
    stats: [
      { value: "1", label: "Timeline per customer" },
      { value: "0", label: "Lost leads" },
    ],
    highlights: [
      "Centralized contact profiles with complete conversation logs",
      "Lead scoring and intent qualification rules",
      "Automated follow-up reminders to assigned executives",
    ],
  },
  {
    title: "Kanban Sales Pipeline",
    short: "Pipeline",
    icon: Kanban,
    accent: "#A78BFA",
    accentSoft: "rgba(167,139,250,0.18)",
    tagline: "Har deal, har stage — sab saaf",
    desc: "Move opportunities through stages like New Leads, Contacted, Qualified, Proposal, and Won with clear revenue forecasting in INR.",
    stats: [
      { value: "₹ INR", label: "Native forecasting" },
      { value: "+28%", label: "Avg. win-rate lift" },
    ],
    highlights: [
      "Drag-and-drop deal management with deal probabilities",
      "Individual representative quota and conversion tracking",
      "Weighted monthly pipeline forecasting",
    ],
  },
  {
    title: "Workflow Automation Engine",
    short: "Automation",
    icon: Zap,
    accent: "#FBBF24",
    accentSoft: "rgba(251,191,36,0.16)",
    tagline: "Kaam smart, growth fast",
    desc: "Set intelligent triggers that automatically enrich leads, assign sales reps, and dispatch instant WhatsApp brochures without manual intervention.",
    stats: [
      { value: "0.4s", label: "Response time" },
      { value: "24/7", label: "Always running" },
    ],
    highlights: [
      "Visual trigger and action canvas builder",
      "Instant round-robin assignment based on territory or team",
      "Zero-delay automated responses to potential buyers",
    ],
  },
];

export const TourModal: React.FC<TourModalProps> = ({ isOpen, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const last = TOUR_STEPS.length - 1;

  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const go = (i: number) => setActiveStep(Math.min(last, Math.max(0, i)));

  useEffect(() => {
    if (!isOpen) return;
    setActiveStep(0);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
      if (e.key === "ArrowRight") setActiveStep((s) => Math.min(last, s + 1));
      if (e.key === "ArrowLeft") setActiveStep((s) => Math.max(0, s - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, last]);

  useEffect(() => {
    if (!isOpen || paused || activeStep === last) return;
    const t = setTimeout(() => setActiveStep((s) => s + 1), STEP_DURATION);
    return () => clearTimeout(t);
  }, [isOpen, paused, activeStep, last]);

  if (!isOpen) return null;

  const current = TOUR_STEPS[activeStep];
  const CurrentIcon = current.icon;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-[#030806]/75 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Interactive platform tour"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > 50) go(activeStep + (dx < 0 ? 1 : -1));
          touchStartX.current = null;
        }}
        className="relative w-full max-w-4xl max-h-[calc(100dvh-1.5rem)] overflow-y-auto no-scrollbar rounded-[28px] bg-[#0B1310] text-white ring-1 ring-white/10 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] animate-tour-in"
      >
        {/* Ambient accent glow + dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full blur-[120px] transition-colors duration-700"
          style={{ backgroundColor: current.accentSoft }}
        />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 w-[420px] h-[420px] rounded-full bg-[#00B879]/10 blur-[120px]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]"
        />

        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 ring-1 ring-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
          aria-label="Close walkthrough"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative grid md:grid-cols-12">
          {/* Sidebar: steps */}
          <aside className="md:col-span-4 p-5 sm:p-7 md:border-r border-white/[0.08]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00B879]/15 ring-1 ring-[#00B879]/30 text-[#5EF0B8] text-[10px] font-bold uppercase tracking-[0.14em]">
              <Play className="w-3 h-3 fill-current" />
              Interactive platform tour
            </div>
            <h3 className="mt-4 text-2xl sm:text-[28px] font-bold tracking-[-0.03em] leading-[1.1] pr-10 md:pr-0">
              How CODIIC connects your{" "}
              <em className="font-serif italic font-normal text-[#5EF0B8]">entire business.</em>
            </h3>

            <div className="mt-6 flex md:flex-col gap-2 overflow-x-auto no-scrollbar -mx-1 px-1 pb-1">
              {TOUR_STEPS.map((st, i) => {
                const Icon = st.icon;
                const isActive = i === activeStep;
                const isDone = i < activeStep;
                return (
                  <button
                    key={st.title}
                    type="button"
                    onClick={() => go(i)}
                    className={`group relative shrink-0 flex items-center gap-3 text-left rounded-2xl px-3 py-2.5 md:py-3 overflow-hidden transition-all cursor-pointer ring-1 ${
                      isActive ? "bg-white/[0.07] ring-white/15" : "ring-transparent hover:bg-white/[0.04]"
                    }`}
                  >
                    <span
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all"
                      style={{
                        backgroundColor: isActive || isDone ? st.accent : "rgba(255,255,255,0.06)",
                        color: isActive || isDone ? "#0B1310" : "rgba(255,255,255,0.6)",
                        boxShadow: isActive ? `0 0 24px -2px ${st.accent}` : undefined,
                      }}
                    >
                      {isDone ? <CheckCircle2 className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-white/40">
                        Step 0{i + 1}
                      </span>
                      <span className={`block text-sm font-semibold whitespace-nowrap ${isActive ? "text-white" : "text-white/65"}`}>
                        {st.short}
                      </span>
                    </span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
                        <span
                          key={`${i}-${paused}`}
                          className={`block h-full ${paused || i === last ? "w-full" : "animate-tour-progress"}`}
                          style={{ backgroundColor: st.accent, animationDuration: `${STEP_DURATION}ms` }}
                        />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Active step */}
          <section key={activeStep} className="md:col-span-8 p-5 sm:p-8 animate-tour-in">
            <div className="flex items-center gap-4">
              <span
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${current.accent}, ${current.accent}99)`,
                  boxShadow: `0 18px 40px -12px ${current.accent}`,
                }}
              >
                <CurrentIcon className="w-7 h-7 text-[#0B1310]" />
              </span>
              <div className="min-w-0">
                <span
                  className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full"
                  style={{ backgroundColor: current.accentSoft, color: current.accent }}
                >
                  {current.tagline}
                </span>
                <h4 className="mt-1.5 text-xl sm:text-2xl font-bold tracking-tight leading-tight">
                  {current.title}
                </h4>
              </div>
            </div>

            <p className="mt-5 text-sm sm:text-[15px] text-white/70 leading-relaxed">{current.desc}</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {current.stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 px-4 py-3.5 backdrop-blur">
                  <div className="text-2xl font-extrabold tracking-tight tabular-nums" style={{ color: current.accent }}>
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-xs text-white/50">{s.label}</div>
                </div>
              ))}
            </div>

            <ul className="mt-5 space-y-2.5">
              {current.highlights.map((h, idx) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-xl px-3.5 py-2.5 bg-white/[0.03] ring-1 ring-white/[0.06] text-sm text-white/85 animate-tour-in"
                  style={{ animationDelay: `${120 + idx * 80}ms` }}
                >
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: current.accent }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Controls */}
            <div className="mt-7 pt-5 border-t border-white/[0.08] flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => go(activeStep - 1)}
                disabled={activeStep === 0}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold text-white/75 ring-1 ring-white/15 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              <div className="hidden sm:flex items-center gap-1.5" aria-hidden>
                {TOUR_STEPS.map((st, i) => (
                  <span
                    key={st.title}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === activeStep ? 22 : 6,
                      backgroundColor: i <= activeStep ? current.accent : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>

              {activeStep < last ? (
                <button
                  type="button"
                  onClick={() => go(activeStep + 1)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold text-[#0B1310] transition-transform active:scale-95 cursor-pointer"
                  style={{ backgroundColor: current.accent, boxShadow: `0 10px 30px -10px ${current.accent}` }}
                >
                  Next step
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#00B879] hover:bg-[#00D08A] text-sm font-bold text-[#0B1310] shadow-[0_10px_30px_-10px_#00B879] transition-colors active:scale-95 cursor-pointer"
                >
                  Start at ₹1/day
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
