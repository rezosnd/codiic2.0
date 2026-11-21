"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  X,
  Search,
  Play,
  Pause,
  Bookmark,
  PhoneCall,
  ShoppingBag,
  MessageSquare,
  StickyNote,
  Zap,
  Globe,
  TrendingUp,
  ExternalLink,
  Send,
  Image as ImageIcon,
  ChevronDown,
  CircleUser,
  FileText,
} from "lucide-react";

/* ─────────────────────────── Shared bits ─────────────────────────── */

const Shell: React.FC<{ title: string; right?: React.ReactNode; children: React.ReactNode; className?: string }> = ({
  title,
  right,
  children,
  className = "",
}) => (
  <div
    className={`rounded-[24px] bg-white border border-[#E2E6E4] shadow-[0_30px_70px_-30px_rgba(23,25,35,0.25)] overflow-hidden ${className}`}
  >
    <div className="flex items-center gap-3 px-4 sm:px-5 py-3 border-b border-[#EEF0EE] bg-[#FAFBFA]">
      <span className="flex gap-1.5">
        <i className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <i className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <i className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </span>
      <span className="text-[11px] font-bold text-[#5A6270] truncate">{title}</span>
      <span className="ml-auto flex items-center gap-2">{right}</span>
    </div>
    {children}
  </div>
);

const Avatar: React.FC<{ initials: string; tint?: string }> = ({ initials, tint = "bg-[#00B879]" }) => (
  <span
    className={`w-6 h-6 rounded-full ${tint} text-white text-[8px] font-black flex items-center justify-center shrink-0 ring-2 ring-white`}
  >
    {initials}
  </span>
);

const CHANNEL_STYLES: Record<string, string> = {
  WhatsApp: "bg-[#E8F8F1] text-[#008F60]",
  Instagram: "bg-[#F4EDFB] text-[#7C3AED]",
  Web: "bg-[#EAF1FB] text-[#2E6FE8]",
  "AI Voice": "bg-[#FFF6E4] text-[#B07807]",
  Telegram: "bg-[#E4F2FB] text-[#1682C4]",
  Facebook: "bg-[#E7EEFB] text-[#3056C4]",
  Email: "bg-[#F1F3F2] text-[#5A6270]",
};

/* ═══════════════════════ 1. CRM 360 PIPELINE ═══════════════════════ */

const STAGES = ["New Lead", "Contacted", "Qualified", "Proposal", "Won"];
const STAGE_TINTS = ["#8A919C", "#2E6FE8", "#D99A0B", "#7C3AED", "#00B879"];

interface Deal {
  id: string;
  name: string;
  value: string;
  channel: string;
  agent: string;
  agentTint: string;
  stage: number;
  tags: string[];
  segment: string;
  phone: string;
  ltv: string;
  city: string;
  orders: { id: string; item: string; total: string; status: string }[];
}

const INITIAL_DEALS: Deal[] = [
  {
    id: "d1", name: "Kaveri Lifestyle", value: "₹42,500", channel: "WhatsApp", agent: "AS",
    agentTint: "bg-[#00B879]", stage: 0, tags: ["D2C", "Repeat Buyer"], segment: "High-Value",
    phone: "+91 98•• ••210", ltv: "₹1.8L", city: "Jaipur",
    orders: [
      { id: "#1042", item: "Linen Co-ord Set ×2", total: "₹4,999", status: "Delivered" },
      { id: "#1031", item: "Block Print Kurta", total: "₹2,199", status: "Delivered" },
    ],
  },
  {
    id: "d2", name: "Arjun Mehta", value: "₹18,000", channel: "Instagram", agent: "RK",
    agentTint: "bg-[#7C3AED]", stage: 0, tags: ["CTWA Ad"], segment: "New Lead",
    phone: "+91 88•• ••441", ltv: "—", city: "Pune",
    orders: [{ id: "#1044", item: "Aura Lounge Sofa", total: "₹18,499", status: "Quote sent" }],
  },
  {
    id: "d3", name: "Nivaan Realty", value: "₹2,40,000", channel: "Web", agent: "AS",
    agentTint: "bg-[#00B879]", stage: 1, tags: ["Real Estate", "Site Visit"], segment: "Enterprise",
    phone: "+91 97•• ••302", ltv: "₹6.2L", city: "Gurugram",
    orders: [{ id: "#SV-09", item: "3BHK Skyline Tour", total: "Site visit", status: "Scheduled" }],
  },
  {
    id: "d4", name: "BrightPath Academy", value: "₹96,000", channel: "AI Voice", agent: "MP",
    agentTint: "bg-[#2E6FE8]", stage: 2, tags: ["Education", "Bulk Seats"], segment: "High-Value",
    phone: "+91 93•• ••118", ltv: "₹2.4L", city: "Indore",
    orders: [{ id: "#EN-77", item: "30 Admissions · NEET Batch", total: "₹96,000", status: "Negotiation" }],
  },
  {
    id: "d5", name: "Sana Qureshi", value: "₹7,450", channel: "WhatsApp", agent: "RK",
    agentTint: "bg-[#7C3AED]", stage: 2, tags: ["COD Verified"], segment: "New Lead",
    phone: "+91 70•• ••556", ltv: "₹7,450", city: "Lucknow",
    orders: [{ id: "#1050", item: "Nordic Oak Chair", total: "₹7,450", status: "COD Confirmed" }],
  },
  {
    id: "d6", name: "Bistro & Brew", value: "₹54,000", channel: "Instagram", agent: "MP",
    agentTint: "bg-[#2E6FE8]", stage: 3, tags: ["Hospitality", "QR Menu"], segment: "SMB",
    phone: "+91 90•• ••734", ltv: "₹54,000", city: "Bengaluru",
    orders: [{ id: "#PR-12", item: "QR Menu + Loyalty Setup", total: "₹54,000", status: "Proposal" }],
  },
  {
    id: "d7", name: "Rohan Kapoor", value: "₹12,300", channel: "Web", agent: "AS",
    agentTint: "bg-[#00B879]", stage: 4, tags: ["Paid", "Reorder"], segment: "High-Value",
    phone: "+91 95•• ••889", ltv: "₹41,300", city: "Delhi",
    orders: [{ id: "#1048", item: "Ceramic Dinner Set", total: "₹12,300", status: "Paid ✓" }],
  },
];

export const CrmPipelineMockup: React.FC = () => {
  const [deals, setDeals] = useState<Deal[]>(INITIAL_DEALS);
  const [selected, setSelected] = useState<Deal | null>(null);

  const moveDeal = (id: string, dir: 1 | -1) =>
    setDeals((curr) =>
      curr.map((d) =>
        d.id === id ? { ...d, stage: Math.min(STAGES.length - 1, Math.max(0, d.stage + dir)) } : d
      )
    );

  return (
    <Shell
      title="crm-360.codiic.com — Pipeline Board"
      right={
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#008F60] bg-[#E8F8F1] px-2 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00B879] animate-pulse" />
          {deals.length} open deals
        </span>
      }
    >
      <div className="flex flex-col md:flex-row">
        {/* Kanban board */}
        <div className="flex-1 min-w-0 flex overflow-x-auto no-scrollbar">
          {STAGES.map((stage, si) => {
            const stageDeals = deals.filter((d) => d.stage === si);
            return (
              <div key={stage} className={`min-w-[150px] sm:min-w-[170px] md:min-w-0 md:flex-1 p-2.5 sm:p-3 ${si > 0 ? "border-l border-[#EEF0EE]" : ""}`}>
                <div className="flex items-center gap-1.5 mb-2.5 px-1">
                  <span className="w-2 h-2 rounded-full" style={{ background: STAGE_TINTS[si] }} />
                  <span className="text-[10px] font-bold uppercase tracking-wide text-[#5A6270] truncate">
                    {stage}
                  </span>
                  <span className="ml-auto text-[9px] font-bold text-[#8A919C] bg-[#F1F3F2] px-1.5 py-0.5 rounded-full">
                    {stageDeals.length}
                  </span>
                </div>
                <div className="space-y-2 min-h-[80px]">
                  {stageDeals.map((deal) => (
                    <button
                      key={deal.id}
                      type="button"
                      onClick={() => setSelected(deal)}
                      className={`w-full text-left rounded-xl bg-white border p-2.5 transition-all cursor-pointer animate-tool-in ${
                        selected?.id === deal.id
                          ? "border-[#00B879] shadow-[0_0_0_3px_rgba(0,184,121,0.12)]"
                          : "border-[#E2E6E4] hover:border-[#00B879]/50 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-1">
                        <span className="text-[11px] font-bold text-[#171923] leading-tight truncate">
                          {deal.name}
                        </span>
                        <Avatar initials={deal.agent} tint={deal.agentTint} />
                      </div>
                      <div className="mt-1 text-[11px] font-extrabold text-[#008F60]">{deal.value}</div>
                      <div className="mt-1.5 flex items-center justify-between gap-1">
                        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${CHANNEL_STYLES[deal.channel] ?? "bg-[#F1F3F2] text-[#5A6270]"}`}>
                          {deal.channel}
                        </span>
                        <span
                          role="button"
                          tabIndex={0}
                          onClick={(e) => { e.stopPropagation(); moveDeal(deal.id, 1); }}
                          onKeyDown={(e) => e.key === "Enter" && moveDeal(deal.id, 1)}
                          className="w-5 h-5 rounded-full bg-[#F1F3F2] hover:bg-[#E8F8F1] text-[#5A6270] hover:text-[#008F60] flex items-center justify-center transition-colors"
                          title="Move to next stage"
                        >
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Slide-out contact profile */}
        {selected && (
          <div className="w-full md:w-[280px] shrink-0 border-t md:border-t-0 md:border-l border-[#EEF0EE] bg-[#FAFBFA] animate-tool-in">
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[13px] font-bold text-[#171923]">{selected.name}</div>
                  <div className="text-[10px] text-[#8A919C]">{selected.phone} · {selected.city}</div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="w-6 h-6 rounded-full hover:bg-[#EEF0EE] flex items-center justify-center text-[#8A919C] cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {selected.tags.map((t) => (
                  <span key={t} className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#E8F8F1] text-[#008F60]">
                    {t}
                  </span>
                ))}
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#F4EDFB] text-[#7C3AED]">
                  {selected.segment}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  { l: "Deal Value", v: selected.value },
                  { l: "Lifetime Value", v: selected.ltv },
                  { l: "Source", v: selected.channel },
                  { l: "Stage", v: STAGES[selected.stage] },
                ].map((f) => (
                  <div key={f.l} className="rounded-lg bg-white border border-[#EEF0EE] p-2">
                    <div className="text-[8px] font-bold uppercase tracking-wide text-[#8A919C]">{f.l}</div>
                    <div className="text-[11px] font-bold text-[#171923] mt-0.5 truncate">{f.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <div className="text-[9px] font-bold uppercase tracking-wider text-[#8A919C] mb-2">
                  Order History
                </div>
                <div className="space-y-1.5">
                  {selected.orders.map((o) => (
                    <div key={o.id} className="rounded-lg bg-white border border-[#EEF0EE] p-2 flex items-center gap-2">
                      <ShoppingBag className="w-3 h-3 text-[#00B879] shrink-0" />
                      <div className="min-w-0">
                        <div className="text-[10px] font-bold text-[#171923] truncate">
                          {o.id} · {o.item}
                        </div>
                        <div className="text-[9px] text-[#8A919C]">{o.total} · {o.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button type="button" className="flex-1 py-2 rounded-full bg-[#00B879] text-white text-[10px] font-bold cursor-pointer">
                  WhatsApp
                </button>
                <button type="button" className="flex-1 py-2 rounded-full bg-[#171923] text-white text-[10px] font-bold cursor-pointer">
                  AI Call
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Shell>
  );
};

/* ═══════════════════ 2. OMNICHANNEL INBOX ══════════════════════════ */

const CHANNEL_TABS = ["All", "WhatsApp Cloud", "WA Coexistence", "Instagram DM", "Facebook", "Telegram", "Email"];

interface Convo {
  id: string;
  name: string;
  channel: string;
  preview: string;
  time: string;
  unread?: number;
  agent: string;
  messages: { from: "them" | "us"; text: string; time: string }[];
}

const CONVOS: Convo[] = [
  {
    id: "c1", name: "Sana Qureshi", channel: "WhatsApp", preview: "Is the oak chair in stock?", time: "2m", unread: 2, agent: "AS",
    messages: [
      { from: "them", text: "Hi! Is the Nordic Oak Chair in stock?", time: "10:41" },
      { from: "us", text: "Yes Sana — 14 units available. Sharing the catalog now.", time: "10:41" },
      { from: "them", text: "Great, can I get it by Friday?", time: "10:42" },
    ],
  },
  {
    id: "c2", name: "Arjun Mehta", channel: "Instagram", preview: "Saw your reel — price?", time: "9m", agent: "RK",
    messages: [
      { from: "them", text: "Saw your reel — what's the price of the sofa?", time: "10:33" },
      { from: "us", text: "Hey Arjun! The Aura Lounge Sofa is ₹18,499 with free delivery this week.", time: "10:34" },
    ],
  },
  {
    id: "c3", name: "Nivaan Realty", channel: "WhatsApp", preview: "Floorplan for Tower B?", time: "21m", agent: "AS",
    messages: [
      { from: "them", text: "Can you share the Tower B floorplan?", time: "10:20" },
      { from: "us", text: "Sending the 3BHK floorplan PDF on WhatsApp now.", time: "10:21" },
    ],
  },
  {
    id: "c4", name: "Bistro & Brew", channel: "Telegram", preview: "QR menu demo pls", time: "1h", agent: "MP",
    messages: [
      { from: "them", text: "Can we get a QR menu demo for our cafe?", time: "09:40" },
      { from: "us", text: "Absolutely — booking a 15-min demo. Does tomorrow 11 AM work?", time: "09:42" },
    ],
  },
  {
    id: "c5", name: "Rohan Kapoor", channel: "Email", preview: "Invoice for order #1048", time: "3h", agent: "AS",
    messages: [
      { from: "them", text: "Please resend the invoice for order #1048.", time: "07:58" },
      { from: "us", text: "Done — invoice re-sent to your email with GST breakdown.", time: "08:02" },
    ],
  },
];

const QUICK_REPLIES = ["Share catalog", "Price & offers", "Payment link", "Track order"];

export const InboxMockup: React.FC = () => {
  const [channel, setChannel] = useState("All");
  const [activeId, setActiveId] = useState("c1");
  const [noteMode, setNoteMode] = useState(false);
  const [extraMsgs, setExtraMsgs] = useState<Record<string, { from: "them" | "us" | "note"; text: string; time: string }[]>>({});

  const filtered = channel === "All" ? CONVOS
    : channel === "Instagram DM" ? CONVOS.filter((c) => c.channel === "Instagram")
    : channel === "WhatsApp Cloud" || channel === "WA Coexistence" ? CONVOS.filter((c) => c.channel === "WhatsApp")
    : CONVOS.filter((c) => c.channel === channel);

  const convo = CONVOS.find((c) => c.id === activeId) ?? filtered[0] ?? CONVOS[0];
  const thread = [...convo.messages, ...(extraMsgs[convo.id] ?? [])];

  const sendQuick = (text: string) =>
    setExtraMsgs((m) => ({
      ...m,
      [convo.id]: [...(m[convo.id] ?? []), { from: "us", text, time: "now" }],
    }));
  const sendNote = () => {
    setExtraMsgs((m) => ({
      ...m,
      [convo.id]: [...(m[convo.id] ?? []), { from: "note", text: "Internal note — customer prefers COD, follow up Friday.", time: "now" }],
    }));
    setNoteMode(false);
  };

  return (
    <Shell
      title="inbox.codiic.com — Unified Team Inbox"
      right={
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#008F60] bg-[#E8F8F1] px-2 py-1 rounded-full">
          <Zap className="w-3 h-3" /> AI replying in 0.4s
        </span>
      }
    >
      {/* Channel tabs */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#EEF0EE] overflow-x-auto no-scrollbar">
        {CHANNEL_TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setChannel(t)}
            className={`px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap transition-all cursor-pointer ${
              channel === t
                ? "bg-[#171923] text-white"
                : "bg-[#F1F3F2] text-[#5A6270] hover:bg-[#E4E7EB]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 min-h-[340px]">
        {/* Conversation list */}
        <div className="border-b md:border-b-0 md:border-r border-[#EEF0EE] max-h-[200px] md:max-h-none overflow-y-auto no-scrollbar">
          {filtered.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveId(c.id)}
              className={`w-full flex items-center gap-2.5 px-4 py-3 text-left border-b border-[#F4F6F5] transition-colors cursor-pointer ${
                activeId === c.id ? "bg-[#F0FAF5]" : "hover:bg-[#FAFBFA]"
              }`}
            >
              <Avatar initials={c.name.split(" ").map((w) => w[0]).join("").slice(0, 2)} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[12px] font-bold text-[#171923] truncate">{c.name}</span>
                  <span className="text-[9px] text-[#8A919C] shrink-0">{c.time}</span>
                </div>
                <div className="flex items-center justify-between gap-2 mt-0.5">
                  <span className="text-[10px] text-[#8A919C] truncate">{c.preview}</span>
                  {c.unread && (
                    <span className="w-4 h-4 rounded-full bg-[#00B879] text-white text-[8px] font-black flex items-center justify-center shrink-0">
                      {c.unread}
                    </span>
                  )}
                </div>
                <span className={`inline-block mt-1 text-[8px] font-bold px-1.5 py-0.5 rounded-full ${CHANNEL_STYLES[c.channel]}`}>
                  {c.channel}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Chat thread */}
        <div className="md:col-span-2 flex flex-col bg-[#FAFBFA]">
          <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white border-b border-[#EEF0EE]">
            <Avatar initials={convo.name.split(" ").map((w) => w[0]).join("").slice(0, 2)} tint="bg-[#171923]" />
            <div className="min-w-0">
              <div className="text-[12px] font-bold text-[#171923] truncate">{convo.name}</div>
              <div className="text-[9px] text-[#008F60] font-semibold">Assigned to {convo.agent} · Online</div>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setNoteMode((v) => !v)}
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                  noteMode ? "bg-[#FFF6E4] text-[#B07807]" : "bg-[#F1F3F2] text-[#5A6270] hover:text-[#171923]"
                }`}
                title="Internal note"
              >
                <StickyNote className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => sendQuick("📦 Shared your full product catalog — tap to browse & order.")}
                className="w-7 h-7 rounded-full bg-[#F1F3F2] text-[#5A6270] hover:text-[#008F60] flex items-center justify-center transition-colors cursor-pointer"
                title="Share product catalog"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 space-y-2.5 overflow-y-auto no-scrollbar max-h-[240px] md:max-h-[280px]">
            {thread.map((m, i) =>
              m.from === "note" ? (
                <div key={i} className="mx-auto max-w-[85%] rounded-xl bg-[#FFF6E4] border border-[#F5D78E]/60 px-3 py-2 text-[10px] text-[#7A5B0B] animate-tool-in">
                  <span className="font-bold">Internal note</span> · {m.text}
                </div>
              ) : (
                <div key={i} className={`flex ${m.from === "us" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-[11px] leading-relaxed animate-tool-in ${
                      m.from === "us"
                        ? "bg-[#00B879] text-white rounded-br-md"
                        : "bg-white border border-[#E2E6E4] text-[#171923] rounded-bl-md"
                    }`}
                  >
                    {m.text}
                    <span className={`block mt-0.5 text-[8px] ${m.from === "us" ? "text-white/70" : "text-[#B4BBC4]"}`}>
                      {m.time} {m.from === "us" && "· Seen ✓✓"}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Quick replies + composer */}
          <div className="px-4 pb-3">
            <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-2">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => sendQuick(q + " — sent via CODIIC quick reply")}
                  className="px-2.5 py-1 rounded-full bg-white border border-[#E2E6E4] text-[9px] font-bold text-[#5A6270] hover:border-[#00B879]/50 hover:text-[#008F60] whitespace-nowrap transition-colors cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
            {noteMode ? (
              <div className="flex items-center gap-2 rounded-xl bg-[#FFF6E4] border border-[#F5D78E] px-3 py-2">
                <StickyNote className="w-3.5 h-3.5 text-[#B07807] shrink-0" />
                <span className="flex-1 text-[10px] text-[#7A5B0B]">Internal team note — teammates only</span>
                <button type="button" onClick={sendNote} className="px-2.5 py-1 rounded-full bg-[#B07807] text-white text-[9px] font-bold cursor-pointer">
                  Add note
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 rounded-xl bg-white border border-[#E2E6E4] px-3 py-2">
                <ImageIcon className="w-3.5 h-3.5 text-[#8A919C] shrink-0" />
                <span className="flex-1 text-[10px] text-[#B4BBC4]">Type a reply…</span>
                <Send className="w-3.5 h-3.5 text-[#00B879] shrink-0" />
              </div>
            )}
          </div>
        </div>
      </div>
    </Shell>
  );
};

/* ═══════════════════ 3. BULK AI VOICE CALLS ════════════════════════ */

const CALL_METRICS = [
  { label: "Calls Dialed", value: "2,418", tint: "text-[#171923]" },
  { label: "Connected", value: "1,762", tint: "text-[#2E6FE8]" },
  { label: "Appointments Booked", value: "342", tint: "text-[#008F60]" },
  { label: "Orders Confirmed", value: "589", tint: "text-[#008F60]" },
];

const TRANSCRIPT = [
  { who: "AI", text: "Namaste Sana ji! CODIIC ke taraf se — aapka Nordic Oak Chair order confirm karna tha. COD mein delivery theek rahega?" },
  { who: "Sana", text: "Haan, COD theek hai. Friday tak mil jayega?" },
  { who: "AI", text: "Bilkul! Friday 4 PM slot book kar diya hai. Tracking link WhatsApp pe bhej rahi hoon." },
  { who: "System", text: "Disposition: COD Confirmed → CRM stage moved to Qualified · Receipt sent" },
];

const RECENT_CALLS = [
  { name: "Order #1042 · COD verify", result: "Confirmed", tint: "bg-emerald-100 text-emerald-800", time: "Just now" },
  { name: "Lead callback · Riya S.", result: "Appointment Fri 4 PM", tint: "bg-sky-100 text-sky-800", time: "2m ago" },
  { name: "Winback · 214 contacts", result: "In progress · 68%", tint: "bg-amber-100 text-amber-800", time: "Live" },
];

export const AICallsMockup: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const bars = useRef<number[]>(
    Array.from({ length: 42 }, (_, i) => 0.25 + 0.75 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.9)))
  );

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setProgress((p) => Math.min(100, p + 1.2)), 120);
    return () => clearInterval(t);
  }, [playing]);

  useEffect(() => {
    if (progress >= 100) setPlaying(false);
  }, [progress]);

  const visibleLines = Math.max(0, Math.floor(progress / 30));

  return (
    <Shell
      title="voice.codiic.com — Campaign · COD Verification Blast"
      right={
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#B07807] bg-[#FFF6E4] px-2 py-1 rounded-full">
          <PhoneCall className="w-3 h-3" /> Campaign live
        </span>
      }
    >
      <div className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Metrics + player */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {CALL_METRICS.map((m) => (
              <div key={m.label} className="rounded-xl bg-[#FAFBFA] border border-[#EEF0EE] p-3">
                <div className={`text-lg font-extrabold tracking-tight ${m.tint}`}>{m.value}</div>
                <div className="text-[9px] font-bold uppercase tracking-wide text-[#8A919C] mt-0.5 leading-tight">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Waveform player */}
          <div className="rounded-xl border border-[#EEF0EE] bg-white p-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setPlaying((v) => !v)}
                className="w-10 h-10 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white flex items-center justify-center shadow-md shadow-[#00B879]/30 transition-all active:scale-95 cursor-pointer shrink-0"
                aria-label={playing ? "Pause call sample" : "Play call sample"}
              >
                {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              <div className="flex-1">
                <div className="text-[11px] font-bold text-[#171923]">Sample AI Call · Hinglish voice</div>
                <div className="text-[9px] text-[#8A919C]">COD order verification · 38 sec</div>
              </div>
              <span className="text-[10px] font-bold text-[#8A919C] tabular-nums">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="mt-3 flex items-end gap-[3px] h-10">
              {bars.current.map((h, i) => {
                const active = (i / bars.current.length) * 100 < progress;
                return (
                  <span
                    key={i}
                    className={`flex-1 rounded-full transition-all duration-150 ${
                      active ? "bg-[#00B879]" : "bg-[#E4E7EB]"
                    }`}
                    style={{
                      height: `${h * 100}%`,
                      transform: playing && active ? `scaleY(${0.65 + h * 0.6})` : "scaleY(1)",
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* Transcript */}
          <div className="rounded-xl border border-[#EEF0EE] bg-[#FAFBFA] p-4 space-y-2">
            <div className="text-[9px] font-bold uppercase tracking-wider text-[#8A919C]">
              Live Call Transcript {playing && <span className="text-[#00B879]">· streaming…</span>}
            </div>
            {TRANSCRIPT.map((line, i) => (
              <div
                key={i}
                className={`text-[11px] leading-relaxed transition-opacity duration-500 ${
                  i < visibleLines || progress === 0 ? (i < visibleLines ? "opacity-100" : "opacity-30") : "opacity-30"
                }`}
              >
                <span className={`font-bold ${line.who === "AI" ? "text-[#008F60]" : line.who === "System" ? "text-[#B07807]" : "text-[#171923]"}`}>
                  {line.who}:{" "}
                </span>
                <span className={line.who === "System" ? "text-[#8A919C] italic" : "text-[#5A6270]"}>{line.text}</span>
              </div>
            ))}
            {progress === 0 && (
              <p className="text-[10px] text-[#B4BBC4] italic">Press play to hear the AI agent handle a COD verification call.</p>
            )}
          </div>
        </div>

        {/* Disposition log */}
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-[#EEF0EE] bg-white p-4 h-full">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold text-[#171923]">Disposition Log</span>
              <span className="text-[9px] font-bold text-[#008F60] bg-[#E8F8F1] px-2 py-0.5 rounded-full">Auto-synced to CRM</span>
            </div>
            <div className="space-y-2">
              {RECENT_CALLS.map((c) => (
                <div key={c.name} className="flex items-center justify-between gap-2 rounded-lg border border-[#EEF0EE] p-2.5">
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-[#171923] truncate">{c.name}</div>
                    <div className="text-[9px] text-[#8A919C]">{c.time}</div>
                  </div>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${c.tint}`}>
                    {c.result}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-[#E8F8F1] border border-[#00B879]/15 p-3 text-[10px] font-semibold text-[#00593A] leading-relaxed">
              <PhoneCall className="w-3.5 h-3.5 inline mr-1 text-[#00B879]" />
              Every outcome — confirmed, rescheduled, not-interested — writes straight back to the
              deal card and triggers the next automation.
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
};

/* ═══════════════════ 4. AD & PRODUCT LIBRARY ═══════════════════════ */

const INTEL_TABS = ["Winning Ads", "Trending Products", "Top Stores", "Competitor Tracker"];

interface AdCard {
  id: string;
  tab: string;
  title: string;
  sub: string;
  metric: string;
  metricLabel: string;
  grad: string;
  saved?: boolean;
}

const INTEL_CARDS: AdCard[] = [
  { id: "a1", tab: "Winning Ads", title: "Velvet Touch Sofa — UGC Hook", sub: "Kaveri Lifestyle · Meta Feed", metric: "47 days", metricLabel: "Active run", grad: "from-[#0F2027] via-[#203A43] to-[#2C5364]" },
  { id: "a2", tab: "Winning Ads", title: "Skincare Serum — Before/After", sub: "GlowCraft · Reels", metric: "31 days", metricLabel: "Active run", grad: "from-[#5B247A] to-[#1BCEDF]" },
  { id: "a3", tab: "Winning Ads", title: "Bamboo Organizer — Problem/Solution", sub: "Aura Living · Stories", metric: "26 days", metricLabel: "Active run", grad: "from-[#134E5E] to-[#71B280]" },
  { id: "p1", tab: "Trending Products", title: "Ceramic Dinner Set (24pc)", sub: "Home & Kitchen · Demand ↑214%", metric: "₹38/mo", metricLabel: "Est. margin ₹380/unit", grad: "from-[#F7E4B0] to-[#D99A0B]" },
  { id: "p2", tab: "Trending Products", title: "Posture Corrector Chair", sub: "Office · Demand ↑161%", metric: "₹52/mo", metricLabel: "Est. margin ₹520/unit", grad: "from-[#BFE3D2] to-[#008F60]" },
  { id: "s1", tab: "Top Stores", title: "auraliving.com", sub: "Next.js + CODIIC checkout", metric: "₹42.8L", metricLabel: "Monthly est. revenue", grad: "from-[#203A43] to-[#00B879]" },
  { id: "s2", tab: "Top Stores", title: "glowcraft.in", sub: "Beauty D2C · COD heavy", metric: "₹29.5L", metricLabel: "Monthly est. revenue", grad: "from-[#7C3AED] to-[#D4BCF2]" },
  { id: "c1", tab: "Competitor Tracker", title: "Zephyr Decor", sub: "Launched 14 new video ads", metric: "↑ 38%", metricLabel: "Ad spend velocity", grad: "from-[#171923] to-[#4A5160]" },
  { id: "c2", tab: "Competitor Tracker", title: "UrbanNest", sub: "Price drop on 6 bestsellers", metric: "-12%", metricLabel: "Avg price change", grad: "from-[#4A5160] to-[#8A919C]" },
];

export const AdLibraryMockup: React.FC = () => {
  const [tab, setTab] = useState("Winning Ads");
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState<string[]>([]);

  const cards = INTEL_CARDS.filter(
    (c) =>
      c.tab === tab &&
      (query === "" || `${c.title} ${c.sub}`.toLowerCase().includes(query.toLowerCase()))
  );

  const toggleSave = (id: string) =>
    setSaved((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  return (
    <Shell
      title="intel.codiic.com — Ad & Product Library"
      right={
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#008F60] bg-[#E8F8F1] px-2 py-1 rounded-full">
          <Bookmark className="w-3 h-3" /> {saved.length} saved
        </span>
      }
    >
      {/* Tabs + search */}
      <div className="flex flex-wrap items-center gap-2 px-4 py-3 border-b border-[#EEF0EE]">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {INTEL_TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                tab === t ? "bg-[#171923] text-white" : "bg-[#F1F3F2] text-[#5A6270] hover:bg-[#E4E7EB]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2 rounded-full bg-white border border-[#E2E6E4] px-3 py-1.5 min-w-[160px]">
          <Search className="w-3 h-3 text-[#8A919C] shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search ads, stores, SKUs…"
            className="w-full bg-transparent text-[10px] font-semibold text-[#171923] placeholder:text-[#B4BBC4] outline-none"
          />
        </div>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 bg-[#FAFBFA]">
        {cards.map((card) => {
          const isSaved = saved.includes(card.id);
          return (
            <div key={card.id} className="rounded-xl bg-white border border-[#E2E6E4] overflow-hidden hover:border-[#00B879]/50 hover:shadow-md transition-all animate-tool-in">
              <div className={`relative h-24 bg-gradient-to-br ${card.grad} flex items-center justify-center`}>
                <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </span>
                <span className="absolute top-2 left-2 text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/40 text-white backdrop-blur-sm">
                  {card.tab}
                </span>
                <span className="absolute bottom-2 right-2 text-[8px] font-bold px-1.5 py-0.5 rounded bg-black/50 text-white">
                  {card.metric}
                </span>
              </div>
              <div className="p-3">
                <div className="text-[11px] font-bold text-[#171923] leading-tight truncate">{card.title}</div>
                <div className="text-[9px] text-[#8A919C] mt-0.5 truncate">{card.sub}</div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[9px] font-semibold text-[#5A6270]">{card.metricLabel}</span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      className="w-6 h-6 rounded-full bg-[#F1F3F2] text-[#5A6270] hover:text-[#171923] flex items-center justify-center cursor-pointer"
                      title="Open landing page"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleSave(card.id)}
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                        isSaved ? "bg-[#00B879] text-white" : "bg-[#F1F3F2] text-[#5A6270] hover:text-[#008F60]"
                      }`}
                      title="Save to Portfolio"
                    >
                      <Bookmark className={`w-3 h-3 ${isSaved ? "fill-white" : ""}`} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {cards.length === 0 && (
          <div className="col-span-full rounded-xl border-2 border-dashed border-[#E2E6E4] py-10 text-center text-[11px] font-semibold text-[#8A919C]">
            No results for “{query}” — try Magic AI Search instead.
          </div>
        )}
      </div>
    </Shell>
  );
};

/* ═══════════════════ 5. SALES & PROFIT TRACKER ════════════════════ */

const RANGES = ["Today", "7 Days", "30 Days"] as const;

const RANGE_DATA: Record<(typeof RANGES)[number], { revenue: string; profit: string; margin: string; points: number[]; profitPoints: number[] }> = {
  Today: { revenue: "₹1,28,450", profit: "₹41,320", margin: "32.2%", points: [18, 26, 22, 34, 30, 44, 40, 56, 50, 62, 58, 74], profitPoints: [6, 9, 8, 12, 11, 15, 14, 19, 17, 21, 20, 25] },
  "7 Days": { revenue: "₹8,62,900", profit: "₹2,71,810", margin: "31.5%", points: [30, 26, 38, 34, 48, 42, 58, 52, 44, 62, 70, 66], profitPoints: [10, 9, 13, 12, 16, 14, 19, 18, 15, 21, 24, 23] },
  "30 Days": { revenue: "₹32,40,180", profit: "₹10,55,460", margin: "32.6%", points: [22, 30, 28, 40, 36, 50, 46, 58, 54, 66, 62, 78], profitPoints: [8, 11, 10, 14, 13, 17, 16, 20, 19, 23, 22, 27] },
};

const SKU_ROWS = [
  { sku: "Aura Lounge Sofa", sold: 46, revenue: "₹8.5L", margin: "34%", trend: "up" },
  { sku: "Nordic Oak Chair", sold: 128, revenue: "₹6.4L", margin: "29%", trend: "up" },
  { sku: "Ceramic Dinner Set", sold: 92, revenue: "₹4.1L", margin: "38%", trend: "up" },
  { sku: "Linen Co-ord Set", sold: 61, revenue: "₹3.0L", margin: "26%", trend: "down" },
];

const CHANNELS = [
  { name: "Storefront Checkout", value: "₹14.2L", pct: 44, tint: "#00B879" },
  { name: "WhatsApp Catalog", value: "₹9.8L", pct: 30, tint: "#25D366" },
  { name: "Instagram DM", value: "₹5.4L", pct: 17, tint: "#7C3AED" },
  { name: "AI Voice Orders", value: "₹2.8L", pct: 9, tint: "#D99A0B" },
];

function toPath(points: number[], width: number, height: number) {
  const max = Math.max(...points);
  const step = width / (points.length - 1);
  return points.map((p, i) => `${i === 0 ? "M" : "L"}${i * step},${height - (p / max) * height}`).join(" ");
}

export const SalesTrackerMockup: React.FC = () => {
  const [range, setRange] = useState<(typeof RANGES)[number]>("30 Days");
  const data = RANGE_DATA[range];
  const W = 560;
  const H = 110;

  return (
    <Shell
      title="sales.codiic.com — Live Revenue & Profit"
      right={
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#008F60] bg-[#E8F8F1] px-2 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00B879] animate-pulse" />
          Synced 4 min ago
        </span>
      }
    >
      <div className="p-4 sm:p-5">
        {/* Header row */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-[#8A919C]">Total Revenue</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-[#171923] tracking-tight">{data.revenue}</span>
              <span className="text-[10px] font-bold text-[#008F60] bg-[#E8F8F1] px-1.5 py-0.5 rounded-full">+18.4%</span>
            </div>
          </div>
          <div className="ml-6">
            <div className="text-[10px] font-bold uppercase tracking-wide text-[#8A919C]">Net Profit (after COGS + shipping)</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-[#008F60] tracking-tight">{data.profit}</span>
              <span className="text-[10px] font-bold text-[#5A6270]">{data.margin} margin</span>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-1 p-1 rounded-full bg-[#F1F3F2]">
            {RANGES.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRange(r)}
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                  range === r ? "bg-[#171923] text-white" : "text-[#5A6270] hover:text-[#171923]"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="rounded-xl border border-[#EEF0EE] bg-white p-3 overflow-hidden">
          <svg viewBox={`0 0 ${W} ${H + 10}`} className="w-full h-32" preserveAspectRatio="none">
            <defs>
              <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00B879" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#00B879" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="profGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFD84D" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FFD84D" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[0.25, 0.5, 0.75].map((f) => (
              <line key={f} x1="0" y1={H * f} x2={W} y2={H * f} stroke="#EEF0EE" strokeWidth="1" />
            ))}
            <path d={`${toPath(data.points, W, H)} L${W},${H} L0,${H} Z`} fill="url(#revGrad)" />
            <path d={toPath(data.points, W, H)} fill="none" stroke="#00B879" strokeWidth="2.5" strokeLinecap="round" />
            <path d={`${toPath(data.profitPoints, W, H)} L${W},${H} L0,${H} Z`} fill="url(#profGrad)" />
            <path d={toPath(data.profitPoints, W, H)} fill="none" stroke="#D99A0B" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
          </svg>
          <div className="flex items-center gap-4 mt-1 px-1">
            <span className="flex items-center gap-1.5 text-[9px] font-bold text-[#5A6270]">
              <i className="w-2.5 h-[3px] rounded-full bg-[#00B879]" /> Revenue
            </span>
            <span className="flex items-center gap-1.5 text-[9px] font-bold text-[#5A6270]">
              <i className="w-2.5 h-[3px] rounded-full bg-[#D99A0B]" /> Net Profit
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          {/* SKU table */}
          <div className="rounded-xl border border-[#EEF0EE] overflow-hidden">
            <div className="px-3 py-2 bg-[#FAFBFA] border-b border-[#EEF0EE] text-[10px] font-bold uppercase tracking-wide text-[#8A919C]">
              SKU Margin Breakdown
            </div>
            {SKU_ROWS.map((row) => (
              <div key={row.sku} className="flex items-center gap-3 px-3 py-2.5 border-b border-[#F4F6F5] last:border-0">
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold text-[#171923] truncate">{row.sku}</div>
                  <div className="text-[9px] text-[#8A919C]">{row.sold} sold</div>
                </div>
                <span className="text-[11px] font-bold text-[#171923]">{row.revenue}</span>
                <span className="text-[10px] font-bold text-[#008F60] bg-[#E8F8F1] px-1.5 py-0.5 rounded-full">{row.margin}</span>
                <TrendingUp className={`w-3.5 h-3.5 ${row.trend === "up" ? "text-[#00B879]" : "text-[#DC2626] rotate-180"}`} />
              </div>
            ))}
          </div>

          {/* Channel attribution */}
          <div className="rounded-xl border border-[#EEF0EE] p-3.5">
            <div className="text-[10px] font-bold uppercase tracking-wide text-[#8A919C] mb-3">
              Channel Attribution
            </div>
            <div className="space-y-3">
              {CHANNELS.map((c) => (
                <div key={c.name}>
                  <div className="flex items-center justify-between text-[10px] font-bold mb-1">
                    <span className="text-[#171923]">{c.name}</span>
                    <span className="text-[#5A6270]">{c.value} · {c.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#F1F3F2] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${c.pct}%`, background: c.tint }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
};
