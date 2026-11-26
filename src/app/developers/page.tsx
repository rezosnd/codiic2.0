"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  Copy,
  Check,
  Terminal,
  Webhook,
  KeyRound,
  Activity,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Reveal } from "@/components/Reveal";

type Lang = "curl" | "node" | "python";

interface Endpoint {
  id: string;
  method: "POST" | "GET";
  path: string;
  title: string;
  desc: string;
  snippets: Record<Lang, string>;
}

const ENDPOINTS: Endpoint[] = [
  {
    id: "send-message",
    method: "POST",
    path: "/v1/messages/send",
    title: "Send a WhatsApp message",
    desc: "Delivers a template or session message through your connected WhatsApp Cloud API number.",
    snippets: {
      curl: `curl -X POST https://api.codiic.com/v1/messages/send \\
  -H "Authorization: Bearer sk_live_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+919876543210",
    "type": "template",
    "template": { "name": "order_update", "language": "en" }
  }'`,
      node: `const res = await fetch("https://api.codiic.com/v1/messages/send", {
  method: "POST",
  headers: {
    Authorization: "Bearer sk_live_xxxxxxxx",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    to: "+919876543210",
    type: "template",
    template: { name: "order_update", language: "en" },
  }),
});
const data = await res.json();`,
      python: `import requests

res = requests.post(
    "https://api.codiic.com/v1/messages/send",
    headers={"Authorization": "Bearer sk_live_xxxxxxxx"},
    json={
        "to": "+919876543210",
        "type": "template",
        "template": {"name": "order_update", "language": "en"},
    },
)
data = res.json()`,
    },
  },
  {
    id: "create-lead",
    method: "POST",
    path: "/v1/leads/create",
    title: "Create a CRM 360 lead",
    desc: "Pushes a new lead into your pipeline with source attribution and optional agent assignment.",
    snippets: {
      curl: `curl -X POST https://api.codiic.com/v1/leads/create \\
  -H "Authorization: Bearer sk_live_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Sana Qureshi",
    "phone": "+919876543210",
    "source": "website_form",
    "stage": "new_lead",
    "tags": ["d2c", "high-intent"]
  }'`,
      node: `const res = await fetch("https://api.codiic.com/v1/leads/create", {
  method: "POST",
  headers: {
    Authorization: "Bearer sk_live_xxxxxxxx",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Sana Qureshi",
    phone: "+919876543210",
    source: "website_form",
    stage: "new_lead",
    tags: ["d2c", "high-intent"],
  }),
});
const data = await res.json();`,
      python: `import requests

res = requests.post(
    "https://api.codiic.com/v1/leads/create",
    headers={"Authorization": "Bearer sk_live_xxxxxxxx"},
    json={
        "name": "Sana Qureshi",
        "phone": "+919876543210",
        "source": "website_form",
        "stage": "new_lead",
        "tags": ["d2c", "high-intent"],
    },
)
data = res.json()`,
    },
  },
  {
    id: "trigger-call",
    method: "POST",
    path: "/v1/calls/trigger",
    title: "Trigger an AI voice call",
    desc: "Queues an outbound AI voice call using your configured script and knowledge base.",
    snippets: {
      curl: `curl -X POST https://api.codiic.com/v1/calls/trigger \\
  -H "Authorization: Bearer sk_live_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+919876543210",
    "agent": "cod_verification",
    "language": "hinglish",
    "context": { "order_id": "1042", "customer_name": "Sana" }
  }'`,
      node: `const res = await fetch("https://api.codiic.com/v1/calls/trigger", {
  method: "POST",
  headers: {
    Authorization: "Bearer sk_live_xxxxxxxx",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    to: "+919876543210",
    agent: "cod_verification",
    language: "hinglish",
    context: { order_id: "1042", customer_name: "Sana" },
  }),
});
const data = await res.json();`,
      python: `import requests

res = requests.post(
    "https://api.codiic.com/v1/calls/trigger",
    headers={"Authorization": "Bearer sk_live_xxxxxxxx"},
    json={
        "to": "+919876543210",
        "agent": "cod_verification",
        "language": "hinglish",
        "context": {"order_id": "1042", "customer_name": "Sana"},
    },
)
data = res.json()`,
    },
  },
];

const LANG_TABS: { id: Lang; label: string }[] = [
  { id: "curl", label: "cURL" },
  { id: "node", label: "Node.js" },
  { id: "python", label: "Python" },
];

const WEBHOOK_EVENTS = [
  { event: "message.received", desc: "Inbound message on any connected channel" },
  { event: "deal.stage_changed", desc: "Deal moved across CRM 360 pipeline stages" },
  { event: "call.completed", desc: "AI voice call finished with transcript & disposition" },
  { event: "order.paid", desc: "Storefront or catalog order paid successfully" },
];

export default function DevelopersPage() {
  const router = useRouter();
  const goToLogin = () => router.push("/login");
  const [activeEndpoint, setActiveEndpoint] = useState(ENDPOINTS[0].id);
  const [lang, setLang] = useState<Lang>("curl");
  const [copied, setCopied] = useState(false);

  const endpoint = ENDPOINTS.find((e) => e.id === activeEndpoint)!;

  const copySnippet = async () => {
    try {
      await navigator.clipboard.writeText(endpoint.snippets[lang]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <PageShell>
      {/* Hero */}
      <section className="pt-10 sm:pt-14 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] font-semibold text-[#6B7280] mb-8">
            <Link href="/" className="hover:text-[#043B2C] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#111827]">API &amp; Developers</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E4E2D8] bg-white text-[11px] font-bold uppercase tracking-wider text-[#4B5563]">
                <Terminal className="w-3.5 h-3.5 text-[#043B2C]" />
                CODIIC REST API · v1
              </div>
              <h1 className="mt-5 text-[32px] sm:text-5xl font-bold text-[#111827] tracking-[-0.035em] leading-[1.06]">
                Everything in the dashboard,{" "}
                <em className="font-serif italic font-normal text-[#043B2C]">as an API.</em>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed">
                Send messages, create leads, trigger AI calls, and sync orders programmatically —
                with signed webhooks and OAuth 2.0 throughout.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F1F0EA] border border-[#064E3B]/20 text-[#043B2C] text-[11px] font-bold">
                <Activity className="w-3.5 h-3.5" />
                API Status · 99.99% Uptime
              </span>
              <button
                type="button"
                onClick={goToLogin}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#064E3B] hover:bg-[#043B2C] text-white text-xs font-bold shadow-md shadow-[#064E3B]/25 transition-all cursor-pointer"
              >
                Get API Keys
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoint explorer */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="rounded-[24px] bg-white border border-[#E4E2D8] shadow-[0_30px_70px_-30px_rgba(17,24,39,0.25)] overflow-hidden">
            <div className="flex items-center gap-3 px-4 sm:px-5 py-3 border-b border-[#F1F0EA] bg-[#F7F7F2]">
              <Terminal className="w-4 h-4 text-[#064E3B]" />
              <span className="text-[11px] font-bold text-[#4B5563]">api.codiic.com — Endpoint Explorer</span>
              <span className="ml-auto flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-[#6B7280]" />
                <span className="text-[10px] font-semibold text-[#6B7280]">Bearer auth</span>
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Endpoint list */}
              <div className="border-b lg:border-b-0 lg:border-r border-[#F1F0EA]">
                {ENDPOINTS.map((ep) => {
                  const active = ep.id === activeEndpoint;
                  return (
                    <button
                      key={ep.id}
                      type="button"
                      onClick={() => setActiveEndpoint(ep.id)}
                      className={`w-full text-left px-4 sm:px-5 py-4 border-b border-[#F1F0EA] last:border-b-0 transition-colors cursor-pointer ${
                        active ? "bg-[#F1F0EA]" : "hover:bg-[#F7F7F2]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded-md ${
                          ep.method === "POST" ? "bg-[#F1F0EA] text-[#043B2C]" : "bg-[#EAF1FB] text-[#2E6FE8]"
                        }`}>
                          {ep.method}
                        </span>
                        <code className="text-[12px] font-bold text-[#111827] font-mono">{ep.path}</code>
                      </div>
                      <div className="mt-1 text-[12px] font-semibold text-[#111827]">{ep.title}</div>
                      <p className="mt-0.5 text-[11px] text-[#6B7280] leading-snug">{ep.desc}</p>
                    </button>
                  );
                })}
              </div>

              {/* Code viewer */}
              <div className="bg-[#111827] flex flex-col">
                <div className="flex items-center gap-1.5 px-4 pt-4">
                  {LANG_TABS.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setLang(t.id)}
                      className={`px-3 py-1.5 rounded-t-lg text-[11px] font-bold transition-colors cursor-pointer ${
                        lang === t.id ? "bg-white/10 text-white" : "text-gray-500 hover:text-gray-300"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={copySnippet}
                    className="ml-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-[#064E3B]" /> : <Copy className="w-3 h-3" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
                <pre className="flex-1 m-0 p-4 pt-2 text-[11px] leading-relaxed text-[#D7E7DC] font-mono overflow-x-auto whitespace-pre">
                  {endpoint.snippets[lang]}
                </pre>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Webhooks + Auth */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Webhooks */}
          <Reveal className="rounded-2xl bg-white border border-[#E4E2D8] p-6 sm:p-8">
            <span className="w-11 h-11 rounded-2xl bg-[#F1F0EA] flex items-center justify-center">
              <Webhook className="w-5 h-5 text-[#043B2C]" />
            </span>
            <h2 className="mt-4 text-xl font-bold text-[#111827] tracking-tight">Signed Webhooks</h2>
            <p className="mt-2 text-[13px] text-[#4B5563] leading-relaxed">
              Every webhook is signed with your workspace secret via the{" "}
              <code className="text-[11px] font-mono bg-[#F1F0EA] px-1.5 py-0.5 rounded">X-CODIIC-Signature</code>{" "}
              header — verify it before processing.
            </p>
            <div className="mt-5 space-y-2">
              {WEBHOOK_EVENTS.map((w) => (
                <div key={w.event} className="flex items-center gap-3 rounded-xl border border-[#F1F0EA] px-3.5 py-2.5">
                  <code className="text-[11px] font-bold font-mono text-[#043B2C] shrink-0">{w.event}</code>
                  <span className="text-[11px] text-[#4B5563] leading-snug">{w.desc}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* OAuth */}
          <Reveal delay={90} className="rounded-2xl bg-white border border-[#E4E2D8] p-6 sm:p-8">
            <span className="w-11 h-11 rounded-2xl bg-[#F1F0EA] flex items-center justify-center">
              <KeyRound className="w-5 h-5 text-[#043B2C]" />
            </span>
            <h2 className="mt-4 text-xl font-bold text-[#111827] tracking-tight">Authentication</h2>
            <p className="mt-2 text-[13px] text-[#4B5563] leading-relaxed">
              Server-side integrations use workspace API keys; third-party apps connect via OAuth 2.0
              authorization code flow with granular scopes.
            </p>
            <div className="mt-5 space-y-3">
              {[
                { step: "1", text: "Create a keypair in Settings → Developers → API Keys" },
                { step: "2", text: "Send it as Authorization: Bearer sk_live_... on every request" },
                { step: "3", text: "Rotate keys anytime — old keys expire after a 24h grace period" },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#111827] text-[#C6A15B] text-[10px] font-black flex items-center justify-center shrink-0">
                    {s.step}
                  </span>
                  <p className="text-[13px] text-[#4B5563] leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl bg-[#F7F7F2] border border-[#F1F0EA] p-3.5 flex items-center gap-2.5">
              <BookOpen className="w-4 h-4 text-[#064E3B] shrink-0" />
              <span className="text-[11px] font-semibold text-[#4B5563]">
                Full OpenAPI 3.1 spec available in your workspace developer settings.
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCtaSection
        onOpenGetStarted={goToLogin}
        onOpenSeeHowItWorks={goToLogin}
        headline="Build On the Platform That Runs Your Business."
        subheadline="Create a free workspace, grab your API keys, and ship your first integration in minutes."
        ctaLabel="Get API Access Free"
      />
    </PageShell>
  );
}
