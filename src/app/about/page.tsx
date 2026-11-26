"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, ArrowRight, Globe, Zap, Heart, Layers, Sparkles } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Reveal } from "@/components/Reveal";

const VALUES = [
  {
    icon: Sparkles,
    title: "Simplicity First",
    desc: "If a feature needs a training video to understand, it doesn't ship. Every screen in CODIIC is designed so a first-time founder can use it in minutes.",
  },
  {
    icon: Layers,
    title: "Zero-Plugin Architecture",
    desc: "Storefront, inbox, CRM, and automation live in one codebase — not stitched together with plugins and webhooks that break on every update.",
  },
  {
    icon: Heart,
    title: "Customer-Obsessed AI",
    desc: "Our AI exists to make your customers feel heard in 0.4 seconds — not to replace the human touch, but to make sure it arrives on time, every time.",
  },
];

const METRICS = [
  { value: "2,400+", label: "Brands & agencies run on CODIIC" },
  { value: "40+", label: "Countries with active workspaces" },
  { value: "0.4s", label: "Average AI first-reply speed" },
  { value: "₹1/day", label: "Entry price to the full platform" },
];

export default function AboutPage() {
  const router = useRouter();
  const goToLogin = () => router.push("/login");

  return (
    <PageShell>
      {/* Mission hero */}
      <section className="pt-10 sm:pt-14 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] font-semibold text-[#6B7280] mb-8">
            <Link href="/" className="hover:text-[#043B2C] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#111827]">About</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E4E2D8] bg-white text-[11px] font-bold uppercase tracking-wider text-[#4B5563]">
              <Globe className="w-3.5 h-3.5 text-[#064E3B]" />
              About CODIIC
            </div>
            <h1 className="mt-5 text-[34px] sm:text-5xl lg:text-[58px] font-bold text-[#111827] tracking-[-0.035em] leading-[1.05]">
              One Platform.{" "}
              <em className="font-serif italic font-normal text-[#043B2C]">Your Entire Business.</em>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              We're building the operating system for modern business — a single workspace where your
              website, customer conversations, sales pipeline, and AI automation actually work
              together.
            </p>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E4E2D8] bg-white text-xs font-semibold text-[#4B5563]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B]" />
            Our Story
          </div>
          <h2 className="mt-5 text-[28px] sm:text-4xl font-bold text-[#111827] tracking-[-0.03em] leading-[1.1]">
            Built to end the{" "}
            <em className="font-serif italic font-normal text-[#043B2C]">subscription sprawl.</em>
          </h2>
          <div className="mt-6 space-y-4 text-[15px] text-[#4B5563] leading-relaxed text-left sm:text-center">
            <p>
              CODIIC started with a simple observation: a modern business needs a website, a CRM, a
              WhatsApp tool, an email platform, an automation engine, and an analytics suite — which
              means six subscriptions, six logins, six bills, and customer data scattered across all of
              them.
            </p>
            <p>
              So we built the opposite. One no-code platform where the storefront you publish, the
              WhatsApp chat you reply to, the deal you close, and the AI call that booked it all live
              in the same database. No plugins, no Zapier glue, no data lost between tools.
            </p>
            <p>
              Today, thousands of brands, agencies, and service businesses in 40+ countries run their
              entire operation on CODIIC — from first ad click to repeat order.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="h-full rounded-2xl bg-white border border-[#E4E2D8] p-6 sm:p-8 hover:border-[#064E3B]/40 hover:shadow-[0_18px_44px_-20px_rgba(4,59,44,0.3)] transition-all">
                    <span className="w-11 h-11 rounded-2xl bg-[#F1F0EA] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#043B2C]" />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-[#111827] tracking-tight">{v.title}</h3>
                    <p className="mt-2 text-[13px] text-[#4B5563] leading-relaxed">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="rounded-[24px] bg-[#111827] text-white p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#064E3B]/20 blur-3xl" />
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
              {METRICS.map((m) => (
                <div key={m.label}>
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#064E3B]">
                    {m.value}
                  </div>
                  <div className="mt-1.5 text-[12px] text-gray-400 leading-snug">{m.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Join CTA */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[26px] sm:text-4xl font-bold text-[#111827] tracking-[-0.03em]">
            Want to build this with us?
          </h2>
          <p className="mt-3 text-[15px] text-[#4B5563]">
            We're always looking for people who care about craft and customers.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={goToLogin}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#064E3B] hover:bg-[#043B2C] text-white text-sm font-bold shadow-xl shadow-[#064E3B]/25 transition-all active:scale-95 cursor-pointer"
            >
              Join Our Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              type="button"
              onClick={goToLogin}
              className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full bg-white text-sm font-bold text-[#111827] border border-[#E4E2D8] hover:border-[#C9CFC0] hover:bg-[#F7F7F2] transition-all active:scale-95"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <FinalCtaSection onOpenGetStarted={goToLogin} onOpenSeeHowItWorks={goToLogin} />
    </PageShell>
  );
}
