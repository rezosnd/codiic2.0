"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  ChevronDown,
  Search,
  Play,
  BookOpen,
  LayoutTemplate,
  MessageSquare,
  CircleUser,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Reveal } from "@/components/Reveal";

const QUICK_STARTS = [
  {
    num: "01",
    title: "Build Your Storefront",
    desc: "Pick a theme, drag in your products, connect your domain — publish in under 5 minutes.",
    icon: LayoutTemplate,
    duration: "4:32",
    href: "/platform/website-builder",
  },
  {
    num: "02",
    title: "Connect WhatsApp Coexistence",
    desc: "Link your Business App and Cloud API on the same number — chat history fully preserved.",
    icon: MessageSquare,
    duration: "3:15",
    href: "/platform/omnichannel-inbox",
  },
  {
    num: "03",
    title: "Set Up CRM 360 Pipeline",
    desc: "Customize your deal stages, import contacts via CSV, and turn on auto-agent routing.",
    icon: CircleUser,
    duration: "5:48",
    href: "/platform/crm-360",
  },
  {
    num: "04",
    title: "Launch Bulk AI Calls",
    desc: "Write your first script, upload contacts, and fire a COD-verification campaign.",
    icon: PhoneCall,
    duration: "6:02",
    href: "/platform/bulk-ai-calls",
  },
];

const GUIDES: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: "Getting Started",
    items: [
      {
        q: "How do I create my CODIIC workspace?",
        a: "Click Start Free, verify your business email, name your workspace, and you're in — the setup wizard walks you through connecting your first channel in about 2 minutes.",
      },
      {
        q: "Can I invite my team and assign roles?",
        a: "Yes — go to Settings → Team. Invite agents by email, then assign them roles (Owner, Manager, Agent) which control what they can see and edit inside the workspace.",
      },
      {
        q: "How does the Free Forever plan work?",
        a: "The free plan includes the drag-and-drop storefront builder, basic CRM 360 pipeline, unified inbox, and manual order management — no credit card and no time limit.",
      },
    ],
  },
  {
    category: "Website & Storefront",
    items: [
      {
        q: "How do I connect a custom domain?",
        a: "Inside the Studio, open Settings → Domains, enter your domain, and follow the guided DNS steps. SSL is issued automatically — most domains go live within minutes.",
      },
      {
        q: "How do product catalogs and SKUs work?",
        a: "Add products in Catalog → Products with variants, pricing, and stock. They instantly appear as blocks in your storefront and as shareable cards in WhatsApp chats.",
      },
      {
        q: "Where do form submissions go?",
        a: "Every lead form on your site creates a contact and deal card in CRM 360 automatically — with the page URL and UTM source attached for attribution.",
      },
    ],
  },
  {
    category: "WhatsApp & Omnichannel Inbox",
    items: [
      {
        q: "What is WhatsApp Coexistence?",
        a: "Coexistence lets your existing WhatsApp Business App and the CODIIC Cloud API work on the same number simultaneously — your phone keeps working exactly as before while your team replies from the shared inbox.",
      },
      {
        q: "How do message templates work?",
        a: "Templates are pre-approved WhatsApp messages for outbound campaigns. Create them in Inbox → Templates; Meta approval usually takes minutes, and utility templates cost up to 40% less.",
      },
      {
        q: "Can I send broadcasts and drip campaigns?",
        a: "Yes — Smart Broadcasts send one-off campaigns to segments, while Drip Campaigns schedule multi-day follow-up sequences. Both include delivery, read, and reply analytics.",
      },
    ],
  },
  {
    category: "AI & Automation",
    items: [
      {
        q: "How do I train the AI Knowledge Base?",
        a: "Go to AI → Knowledge Base and upload PDFs, website URLs, or FAQ text. Your assistant trains within minutes and starts answering customers in about 0.4 seconds.",
      },
      {
        q: "How do Bulk AI Voice campaigns work?",
        a: "Create a campaign, upload contacts or connect a trigger (like a form submission), choose your script and language, then launch — outcomes sync to CRM 360 automatically.",
      },
      {
        q: "What can the Visual Bot Builder automate?",
        a: "Keyword replies, welcome flows, Click-to-WhatsApp ad routing, Instagram Auto-DM funnels, and multi-step qualification flows — all drag-and-drop, no code.",
      },
    ],
  },
];

export default function UserGuidePage() {
  const router = useRouter();
  const goToLogin = () => router.push("/login");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return GUIDES;
    return GUIDES.map((g) => ({
      ...g,
      items: g.items.filter(
        (i) => i.q.toLowerCase().includes(q) || i.a.toLowerCase().includes(q)
      ),
    })).filter((g) => g.items.length > 0);
  }, [query]);

  return (
    <PageShell>
      {/* Hero + search */}
      <section className="pt-10 sm:pt-14 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] font-semibold text-[#8A919C] mb-8">
            <Link href="/" className="hover:text-[#008F60] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#171923]">User Guide</span>
          </nav>

          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E6E4] bg-white text-[11px] font-bold uppercase tracking-wider text-[#5A6270]">
              <BookOpen className="w-3.5 h-3.5 text-[#008F60]" />
              User Guide &amp; Help Center
            </div>
            <h1 className="mt-5 text-[32px] sm:text-5xl font-bold text-[#171923] tracking-[-0.035em] leading-[1.06]">
              Learn CODIIC in an afternoon,{" "}
              <em className="font-serif italic font-normal text-[#008F60]">not a sprint.</em>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#5A6270] leading-relaxed">
              Quick-start walkthroughs and step-by-step guides for every module — search anything or
              follow the 4-step onboarding path.
            </p>

            <div className="mt-7 flex items-center gap-2.5 rounded-full bg-white border border-[#E2E6E4] px-5 py-3.5 max-w-md mx-auto shadow-sm focus-within:border-[#00B879]/50 transition-colors">
              <Search className="w-4 h-4 text-[#8A919C] shrink-0" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search guides — e.g. 'domain', 'coexistence', 'broadcast'…"
                className="w-full bg-transparent text-sm font-semibold text-[#171923] placeholder:text-[#B4BBC4] outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick-start cards */}
      <section className="pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {QUICK_STARTS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.num} delay={i * 70}>
                <Link
                  href={s.href}
                  className="group block h-full rounded-2xl bg-white border border-[#E2E6E4] p-5 hover:border-[#00B879]/40 hover:shadow-[0_18px_44px_-20px_rgba(0,143,96,0.3)] hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-[#E8F8F1] flex items-center justify-center">
                      <Icon className="w-4.5 h-4.5 text-[#008F60]" />
                    </span>
                    <span className="text-[10px] font-black text-[#8A919C]">{s.num}</span>
                  </div>
                  <h3 className="mt-3.5 text-[14px] font-bold text-[#171923] tracking-tight group-hover:text-[#008F60] transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] text-[#5A6270] leading-relaxed">{s.desc}</p>
                  <div className="mt-3.5 flex items-center gap-1.5 text-[11px] font-bold text-[#008F60]">
                    <span className="w-5 h-5 rounded-full bg-[#00B879] text-white flex items-center justify-center">
                      <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                    </span>
                    Watch · {s.duration}
                    <ArrowRight className="w-3 h-3 ml-auto text-[#B4BBC4] group-hover:text-[#00B879] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categorized accordion */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {filtered.map((group) => (
            <div key={group.category}>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#8A919C] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B879]" />
                {group.category}
              </div>
              <div className="space-y-3">
                {group.items.map((item) => {
                  const id = `${group.category}-${item.q}`;
                  const isOpen = open === id;
                  return (
                    <div
                      key={item.q}
                      className={`rounded-2xl border transition-all duration-200 bg-white ${
                        isOpen
                          ? "border-[#00B879]/40 shadow-[0_14px_34px_-18px_rgba(0,143,96,0.35)]"
                          : "border-[#E2E6E4] hover:border-[#C9D0CC]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : id)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                      >
                        <span className="text-[14px] font-bold text-[#171923] leading-snug">{item.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#008F60]" : "text-[#5A6270]"
                          }`}
                          strokeWidth={2.5}
                        />
                      </button>
                      {isOpen && (
                        <p className="px-5 pb-5 -mt-1 text-[13px] text-[#5A6270] leading-relaxed animate-tool-in">
                          {item.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="rounded-2xl border-2 border-dashed border-[#E2E6E4] py-14 text-center">
              <p className="text-sm font-bold text-[#171923]">No guides match “{query}”</p>
              <p className="mt-1.5 text-xs text-[#8A919C]">
                Try a different keyword — or ask our AI inside your workspace.
              </p>
            </div>
          )}
        </div>
      </section>

      <FinalCtaSection
        onOpenGetStarted={goToLogin}
        onOpenSeeHowItWorks={goToLogin}
        headline="Skip the Manual. Try It Live."
        subheadline="Create your free workspace and follow the in-app checklist — you'll be live before this video ends."
        ctaLabel="Start Free & Follow the Checklist"
      />
    </PageShell>
  );
}
