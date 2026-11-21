"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  Lock,
  Server,
  ShieldCheck,
  KeyRound,
  FileCheck,
  Bug,
  ArrowRight,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Reveal } from "@/components/Reveal";

const CONTROLS = [
  {
    icon: Lock,
    title: "256-Bit TLS / AES Encryption",
    desc: "All data is encrypted in transit with TLS 1.3 and at rest with AES-256 — covering your messages, customer records, files, and backups end to end.",
  },
  {
    icon: Server,
    title: "AWS Cloud & Nightly Encrypted Backups",
    desc: "Workspaces run on hardened AWS infrastructure with isolated tenancy, automatic failover, and nightly encrypted backups for disaster recovery.",
  },
  {
    icon: ShieldCheck,
    title: "Official Meta Tech Provider",
    desc: "WhatsApp messaging flows through Meta's official Cloud API infrastructure — no unofficial gateways, no number bans from grey-area workarounds.",
  },
  {
    icon: KeyRound,
    title: "RBAC & Audit Logs",
    desc: "Role-based access control limits every agent to exactly what they need, while immutable audit logs record who changed what, and when.",
  },
  {
    icon: FileCheck,
    title: "GDPR & Global Tax / GST Ready",
    desc: "Data subject rights, consent records, and retention controls built in — plus GST-compliant invoicing and multi-region tax handling out of the box.",
  },
];

export default function SecurityPage() {
  const router = useRouter();
  const goToLogin = () => router.push("/login");

  return (
    <PageShell>
      <section className="pt-10 sm:pt-14 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] font-semibold text-[#8A919C] mb-8">
            <Link href="/" className="hover:text-[#008F60] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#171923]">Security</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E6E4] bg-white text-[11px] font-bold uppercase tracking-wider text-[#5A6270]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#008F60]" />
              Security &amp; Compliance
            </div>
            <h1 className="mt-5 text-[34px] sm:text-5xl lg:text-[56px] font-bold text-[#171923] tracking-[-0.035em] leading-[1.05]">
              Enterprise-grade security,{" "}
              <em className="font-serif italic font-normal text-[#008F60]">every plan size.</em>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#5A6270] leading-relaxed">
              Your customer conversations and business data are the crown jewels of your company. We
              protect them with the same controls enterprises demand — on every plan, including Free.
            </p>
          </div>
        </div>
      </section>

      {/* Control cards */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {CONTROLS.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={i * 60}>
                  <div className="h-full rounded-2xl bg-white border border-[#E2E6E4] p-6 sm:p-7 hover:border-[#00B879]/40 hover:shadow-[0_18px_44px_-20px_rgba(0,143,96,0.3)] transition-all">
                    <span className="w-11 h-11 rounded-2xl bg-[#E8F8F1] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#008F60]" />
                    </span>
                    <h3 className="mt-4 text-[15px] font-bold text-[#171923] tracking-tight">{c.title}</h3>
                    <p className="mt-2 text-[13px] text-[#5A6270] leading-relaxed">{c.desc}</p>
                  </div>
                </Reveal>
              );
            })}

            {/* Vulnerability disclosure */}
            <div className="rounded-2xl bg-[#171923] text-white p-6 sm:p-7 flex flex-col">
              <span className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                <Bug className="w-5 h-5 text-[#00B879]" />
              </span>
              <h3 className="mt-4 text-[15px] font-bold tracking-tight">Responsible Disclosure</h3>
              <p className="mt-2 text-[13px] text-gray-400 leading-relaxed flex-1">
                Found a vulnerability? We take every report seriously and respond within 48 hours.
                Report it to our security team — please don't disclose publicly until we've resolved it.
              </p>
              <a
                href="mailto:security@codiic.com"
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#00B879] hover:text-white transition-colors"
              >
                security@codiic.com
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection onOpenGetStarted={goToLogin} onOpenSeeHowItWorks={goToLogin} />
    </PageShell>
  );
}
