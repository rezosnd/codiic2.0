"use client";

import React from "react";
import { ArrowRight, Check, MessageCircle, PhoneCall, CalendarCheck } from "lucide-react";

interface BenefitsSectionProps {
  onOpenGetStarted?: () => void;
}

const UNIFIED = ["Website & store", "Customer CRM", "WhatsApp inbox", "UPI payments"];

const DEALS = [
  { name: "Rohan Mehta", company: "Apex Logistics", initials: "RM", color: "#0EA5E9", stage: "Proposal", value: "₹4,50,000" },
  { name: "Priya Nair", company: "Zenith Advisory", initials: "PN", color: "#F97316", stage: "Qualified", value: "₹1,20,000" },
  { name: "Aditya Singh", company: "Skyline Realty", initials: "AS", color: "#8B5CF6", stage: "Won", value: "₹8,75,000" },
  { name: "Meera Agarwal", company: "Bharat Solar", initials: "MA", color: "#E11D48", stage: "Contacted", value: "₹2,40,000" },
];

const STAGE_STYLE: Record<string, string> = {
  Won: "bg-[#DCFCE7] text-[#15803D]",
  Proposal: "bg-[#E0F2FE] text-[#0369A1]",
  Qualified: "bg-[#EDE9FE] text-[#6D28D9]",
  Contacted: "bg-[#FEF3C7] text-[#B45309]",
};

const ORBIT = [
  { initials: "VK", color: "#0EA5E9", pos: "top-[18%] left-[16%]" },
  { initials: "NS", color: "#F97316", pos: "top-[10%] left-[52%]" },
  { initials: "AJ", color: "#8B5CF6", pos: "top-[42%] left-[78%]" },
  { initials: "RK", color: "#E11D48", pos: "top-[62%] left-[30%]" },
  { initials: "SP", color: "#15803D", pos: "top-[70%] left-[64%]" },
];

const FOLLOW_UPS = [
  { icon: MessageCircle, label: "WhatsApp brochure sent", meta: "Instantly · Auto", tone: "text-[#4ADE80]" },
  { icon: PhoneCall, label: "Call reminder for Rahul", meta: "Today, 4:30 PM", tone: "text-[#38BDF8]" },
  { icon: CalendarCheck, label: "Site visit confirmed", meta: "Sat, 11:00 AM", tone: "text-[#FBBF24]" },
];

const Avatar: React.FC<{ initials: string; color: string; className?: string }> = ({ initials, color, className = "w-9 h-9 text-xs" }) => (
  <span
    className={`rounded-full flex items-center justify-center font-bold text-white ring-2 ring-white shrink-0 ${className}`}
    style={{ backgroundColor: color }}
  >
    {initials}
  </span>
);

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onOpenGetStarted }) => (
  <section className="py-20 sm:py-28 bg-transparent">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="grid lg:grid-cols-12 gap-6 items-end mb-10 sm:mb-14">
        <div className="lg:col-span-7">
          <span className="text-sm font-semibold text-[#008F60]">Why CODIIC</span>
          <h2 className="mt-3 text-[34px] sm:text-5xl lg:text-[56px] font-bold text-[#171923] tracking-[-0.035em] leading-[1.05]">
            Built for{" "}
            <em className="font-serif italic font-normal text-[#008F60]">everyday clarity.</em>
          </h2>
        </div>
        <p className="lg:col-span-5 text-base sm:text-lg text-[#4A5260] leading-relaxed">
          Kaam smart, growth fast. Fewer tabs, clearer numbers and follow-ups that never slip.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
        {/* Less switching — solid emerald */}
        <article className="lg:col-span-4 relative overflow-hidden rounded-[22px] bg-[#00A06A] text-white p-7 sm:p-8 flex flex-col min-h-[400px]">
          <h3 className="text-[22px] font-bold tracking-tight">Less switching</h3>
          <p className="mt-3 text-[15px] text-white/85 leading-relaxed">
            Website forms, CRM sheets and WhatsApp chats stop living in different apps. One login,
            one place.
          </p>

          <div className="mt-auto -mx-7 sm:-mx-8 -mb-7 sm:-mb-8 pt-8">
            <div className="ml-7 sm:ml-8 rounded-tl-[20px] bg-[#111A16] p-5 pr-7 space-y-2.5 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.5)]">
              {UNIFIED.map((item) => (
                <div
                  key={item}
                  className="inline-flex w-fit items-center gap-2.5 px-3.5 py-2 rounded-lg bg-[#1D2924] ring-1 ring-white/10 text-sm text-white/90 mr-2"
                >
                  <Check className="w-4 h-4 text-[#4ADE80]" strokeWidth={2.5} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Clearer sales — light card with deal list + rep orbit */}
        <article className="lg:col-span-8 relative overflow-hidden rounded-[22px] bg-[#D8EEF9] p-6 sm:p-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 h-full">
            <div className="relative z-10 rounded-2xl bg-white p-5 shadow-[0_18px_40px_-20px_rgba(14,60,90,0.35)] self-start">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-[#171923]">Pipeline this month</h4>
                <span className="text-xs font-semibold text-[#5A6270]">4 open</span>
              </div>
              <ul className="mt-3 divide-y divide-[#EEF1F4]">
                {DEALS.map((d) => (
                  <li key={d.name} className="flex items-center gap-3 py-3">
                    <Avatar initials={d.initials} color={d.color} />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-[#171923] truncate">{d.name}</div>
                      <div className="text-xs text-[#6B7280] truncate">{d.company}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded ${STAGE_STYLE[d.stage]}`}>
                        {d.stage}
                      </span>
                      <div className="mt-1 text-xs font-bold text-[#171923] tabular-nums">{d.value}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex flex-col min-h-[300px]">
              <h3 className="text-[22px] font-bold tracking-tight text-[#0F2A3D]">Clearer sales</h3>
              <p className="mt-3 text-[15px] text-[#3B5466] leading-relaxed">
                Every lead, its stage, its value and who owns it — visible to the whole team in rupees,
                not guesswork.
              </p>

              <div className="relative flex-1 mt-4 min-h-[200px]" aria-hidden>
                {[100, 72, 44].map((size) => (
                  <span
                    key={size}
                    className="absolute left-1/2 top-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0EA5E9]/20"
                    style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
                  />
                ))}
                {ORBIT.map((o) => (
                  <span key={o.initials} className={`absolute ${o.pos}`}>
                    <Avatar initials={o.initials} color={o.color} className="w-11 h-11 text-sm shadow-lg" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Smoother follow-ups — dark */}
        <article className="lg:col-span-7 rounded-[22px] bg-[#111A16] text-white p-7 sm:p-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-[22px] font-bold tracking-tight">Smoother follow-ups</h3>
            <p className="mt-3 text-[15px] text-white/70 leading-relaxed">
              Instant replies and scheduled reminders keep the next step in front of your team, so no
              inquiry goes cold.
            </p>
          </div>
          <ol className="relative space-y-3 before:absolute before:left-[19px] before:top-3 before:bottom-3 before:w-px before:bg-white/10">
            {FOLLOW_UPS.map(({ icon: Icon, label, meta, tone }) => (
              <li key={label} className="relative flex items-center gap-3 rounded-xl bg-[#1D2924] ring-1 ring-white/10 px-3 py-2.5">
                <span className="w-[26px] h-[26px] rounded-lg bg-[#111A16] ring-1 ring-white/10 flex items-center justify-center shrink-0">
                  <Icon className={`w-3.5 h-3.5 ${tone}`} />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-semibold truncate">{label}</div>
                  <div className="text-xs text-white/50">{meta}</div>
                </div>
              </li>
            ))}
          </ol>
        </article>

        {/* Stat — bold yellow */}
        <article className="lg:col-span-5 rounded-[22px] bg-[#FFD84D] text-[#1F1A05] p-7 sm:p-8 flex flex-col">
          <span className="text-sm font-semibold">Average first reply</span>
          <div className="mt-2 text-[64px] sm:text-[80px] font-bold tracking-[-0.05em] leading-none">0.4s</div>
          <p className="mt-3 text-[15px] text-[#4A3F0A] leading-relaxed max-w-sm">
            Leads hear back while they are still on your website — every plan, from ₹1/day.
          </p>
          {onOpenGetStarted && (
            <button
              type="button"
              onClick={onOpenGetStarted}
              className="mt-6 self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F1A05] hover:bg-black text-white text-sm font-bold transition-colors active:scale-[0.98] cursor-pointer"
            >
              Start at ₹1/day
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </article>
      </div>
    </div>
  </section>
);
