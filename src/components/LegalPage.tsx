"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

export interface LegalSection {
  id: string;
  title: string;
  body: React.ReactNode;
}

export const LegalPage: React.FC<{
  crumbLabel: string;
  badge: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}> = ({ crumbLabel, badge, title, updated, intro, sections }) => {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <section className="pt-10 sm:pt-14 pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-[11px] font-semibold text-[#8A919C] mb-8"
        >
          <Link href="/" className="hover:text-[#008F60] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#171923]">{crumbLabel}</span>
        </nav>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E6E4] bg-white text-[11px] font-bold uppercase tracking-wider text-[#5A6270]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#008F60]" />
            {badge}
          </div>
          <h1 className="mt-5 text-[32px] sm:text-5xl font-bold text-[#171923] tracking-[-0.035em] leading-[1.06]">
            {title}
          </h1>
          <p className="mt-3 text-xs font-semibold text-[#8A919C]">{updated}</p>
          <p className="mt-5 text-[15px] text-[#5A6270] leading-relaxed">{intro}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky TOC */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#8A919C] mb-3">
                On this page
              </div>
              <nav className="space-y-1 border-l-2 border-[#EEF0EE]">
                {sections.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`-ml-[2px] block pl-4 py-1.5 text-[12px] font-semibold border-l-2 transition-colors ${
                      activeId === s.id
                        ? "border-[#00B879] text-[#008F60]"
                        : "border-transparent text-[#5A6270] hover:text-[#171923]"
                    }`}
                  >
                    {i + 1}. {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-9 max-w-3xl space-y-10">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <Reveal>
                <h2 className="text-[20px] sm:text-2xl font-bold text-[#171923] tracking-tight flex items-baseline gap-3">
                  <span className="text-[#00B879] font-black text-sm">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                <div className="mt-3.5 text-[14px] text-[#5A6270] leading-[1.8] space-y-3 [&_strong]:text-[#171923] [&_strong]:font-bold">
                  {s.body}
                </div>
                </Reveal>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
