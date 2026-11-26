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
    className={`rounded-[24px] bg-white border border-[#E4E2D8] shadow-[0_30px_70px_-30px_rgba(17,24,39,0.25)] overflow-hidden ${className}`}
  >
    <div className="flex items-center gap-3 px-4 sm:px-5 py-3 border-b border-[#F1F0EA] bg-[#F7F7F2]">
      <span className="flex gap-1.5">
        <i className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <i className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <i className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </span>
      <span className="text-[11px] font-bold text-[#4B5563] truncate">{title}</span>
      <span className="ml-auto flex items-center gap-2">{right}</span>
    </div>
    {children}
  </div>
);

const Avatar: React.FC<{ initials: string; tint?: string }> = ({ initials, tint = "bg-[#064E3B]" }) => (
  <span
    className={`w-6 h-6 rounded-full ${tint} text-white text-[8px] font-black flex items-center justify-center shrink-0 ring-2 ring-white`}
  >
    {initials}
  </span>
);

const CHANNEL_STYLES: Record<string, string> = {
  WhatsApp: "bg-[#F1F0EA] text-[#043B2C]",
  Instagram: "bg-[#F4EDFB] text-[#7C3AED]",
  Web: "bg-[#EAF1FB] text-[#2E6FE8]",
  "AI Voice": "bg-[#F5EFDF] text-[#8F6E2D]",
  Telegram: "bg-[#E4F2FB] text-[#1682C4]",
  Facebook: "bg-[#E7EEFB] text-[#3056C4]",
  Email: "bg-[#F1F0EA] text-[#4B5563]",
};

/* ═══════════════════════ 1. CRM 360 PIPELINE ═══════════════════════ */

const STAGES = ["New Lead", "Contacted", "Qualified", "Proposal", "Won"];
const STAGE_TINTS = ["#6B7280", "#2E6FE8", "#A87F3D", "#7C3AED", "#064E3B"];

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
    agentTint: "bg-[#064E3B]", stage: 0, tags: ["D2C", "Repeat Buyer"], segment: "High-Value",
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
    agentTint: "bg-[#064E3B]", stage: 1, tags: ["Real Estate", "Site Visit"], segment: "Enterprise",
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
    agentTint: "bg-[#064E3B]", stage: 4, tags: ["Paid", "Reorder"], segment: "High-Value",
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
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#043B2C] bg-[#F1F0EA] px-2 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B] animate-pulse" />
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
              <div key={stage} className={`min-w-[150px] sm:min-w-[170px] md:min-w-0 md:flex-1 p-2.5 sm:p-3 ${si > 0 ? "border-l border-[#F1F0EA]" : ""}`}>
                <div className="flex items-center gap-1.5 mb-2.5 px-1">
                  <span className="w-2 h-2 rounded-full" style={{ background: STAGE_TINTS[si] }} />
                  <span className="text-[10px] font-bold uppercase tracking-wide text-[#4B5563] truncate">
                    {stage}
                  </span>
                  <span className="ml-auto text-[9px] font-bold text-[#6B7280] bg-[#F1F0EA] px-1.5 py-0.5 rounded-full">
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
                          ? "border-[#064E3B] shadow-[0_0_0_3px_rgba(6,78,59,0.12)]"
                          : "border-[#E4E2D8] hover:border-[#064E3B]/50 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-1">
                        <span className="text-[11px] font-bold text-[#111827] leading-tight truncate">
                          {deal.name}
                        </span>
                        <Avatar initials={deal.agent} tint={deal.agentTint} />
                      </div>
                      <div className="mt-1 text-[11px] font-extrabold text-[#043B2C]">{deal.value}</div>
                      <div className="mt-1.5 flex items-center justify-between gap-1">
                        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${CHANNEL_STYLES[deal.channel] ?? "bg-[#F1F0EA] text-[#4B5563]"}`}>
                          {deal.channel}
                        </span>
                        <span
                          role="button"
                          tabIndex={0}
                          onClick={(e) => { e.stopPropagation(); moveDeal(deal.id, 1); }}
                          onKeyDown={(e) => e.key === "Enter" && moveDeal(deal.id, 1)}
                          className="w-5 h-5 rounded-full bg-[#F1F0EA] hover:bg-[#F1F0EA] text-[#4B5563] hover:text-[#043B2C] flex items-center justify-center transition-colors"
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
          <div className="w-full md:w-[280px] shrink-0 border-t md:border-t-0 md:border-l border-[#F1F0EA] bg-[#F7F7F2] animate-tool-in">
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[13px] font-bold text-[#111827]">{selected.name}</div>
                  <div className="text-[10px] text-[#6B7280]">{selected.phone} · {selected.city}</div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="w-6 h-6 rounded-full hover:bg-[#F1F0EA] flex items-center justify-center text-[#6B7280] cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {selected.tags.map((t) => (
                  <span key={t} className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#F1F0EA] text-[#043B2C]">
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
                  <div key={f.l} className="rounded-lg bg-white border border-[#F1F0EA] p-2">
                    <div className="text-[8px] font-bold uppercase tracking-wide text-[#6B7280]">{f.l}</div>
                    <div className="text-[11px] font-bold text-[#111827] mt-0.5 truncate">{f.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <div className="text-[9px] font-bold uppercase tracking-wider text-[#6B7280] mb-2">
                  Order History
                </div>
                <div className="space-y-1.5">
                  {selected.orders.map((o) => (
                    <div key={o.id} className="rounded-lg bg-white border border-[#F1F0EA] p-2 flex items-center gap-2">
                      <ShoppingBag className="w-3 h-3 text-[#064E3B] shrink-0" />
                      <div className="min-w-0">
                        <div className="text-[10px] font-bold text-[#111827] truncate">
                          {o.id} · {o.item}
                        </div>
                        <div className="text-[9px] text-[#6B7280]">{o.total} · {o.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button type="button" className="flex-1 py-2 rounded-full bg-[#064E3B] text-white text-[10px] font-bold cursor-pointer">
                  WhatsApp
                </button>
                <button type="button" className="flex-1 py-2 rounded-full bg-[#111827] text-white text-[10px] font-bold cursor-pointer">
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
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#043B2C] bg-[#F1F0EA] px-2 py-1 rounded-full">
          <Zap className="w-3 h-3" /> AI replying in 0.4s
        </span>
      }
    >
      {/* Channel tabs */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#F1F0EA] overflow-x-auto no-scrollbar">
        {CHANNEL_TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setChannel(t)}
            className={`px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap transition-all cursor-pointer ${
              channel === t
                ? "bg-[#111827] text-white"
                : "bg-[#F1F0EA] text-[#4B5563] hover:bg-[#E4E2D8]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 min-h-[340px]">
        {/* Conversation list */}
        <div className="border-b md:border-b-0 md:border-r border-[#F1F0EA] max-h-[200px] md:max-h-none overflow-y-auto no-scrollbar">
          {filtered.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveId(c.id)}
              className={`w-full flex items-center gap-2.5 px-4 py-3 text-left border-b border-[#F1F0EA] transition-colors cursor-pointer ${
                activeId === c.id ? "bg-[#F1F0EA]" : "hover:bg-[#F7F7F2]"
              }`}
            >
              <Avatar initials={c.name.split(" ").map((w) => w[0]).join("").slice(0, 2)} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[12px] font-bold text-[#111827] truncate">{c.name}</span>
                  <span className="text-[9px] text-[#6B7280] shrink-0">{c.time}</span>
                </div>
                <div className="flex items-center justify-between gap-2 mt-0.5">
                  <span className="text-[10px] text-[#6B7280] truncate">{c.preview}</span>
                  {c.unread && (
                    <span className="w-4 h-4 rounded-full bg-[#064E3B] text-white text-[8px] font-black flex items-center justify-center shrink-0">
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
        <div className="md:col-span-2 flex flex-col bg-[#F7F7F2]">
          <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white border-b border-[#F1F0EA]">
            <Avatar initials={convo.name.split(" ").map((w) => w[0]).join("").slice(0, 2)} tint="bg-[#111827]" />
            <div className="min-w-0">
              <div className="text-[12px] font-bold text-[#111827] truncate">{convo.name}</div>
              <div className="text-[9px] text-[#043B2C] font-semibold">Assigned to {convo.agent} · Online</div>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setNoteMode((v) => !v)}
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                  noteMode ? "bg-[#F5EFDF] text-[#8F6E2D]" : "bg-[#F1F0EA] text-[#4B5563] hover:text-[#111827]"
                }`}
                title="Internal note"
              >
                <StickyNote className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => sendQuick("📦 Shared your full product catalog — tap to browse & order.")}
                className="w-7 h-7 rounded-full bg-[#F1F0EA] text-[#4B5563] hover:text-[#043B2C] flex items-center justify-center transition-colors cursor-pointer"
                title="Share product catalog"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 space-y-2.5 overflow-y-auto no-scrollbar max-h-[240px] md:max-h-[280px]">
            {thread.map((m, i) =>
              m.from === "note" ? (
                <div key={i} className="mx-auto max-w-[85%] rounded-xl bg-[#F5EFDF] border border-[#E8D6AC]/60 px-3 py-2 text-[10px] text-[#6E5621] animate-tool-in">
                  <span className="font-bold">Internal note</span> · {m.text}
                </div>
              ) : (
                <div key={i} className={`flex ${m.from === "us" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-[11px] leading-relaxed animate-tool-in ${
                      m.from === "us"
                        ? "bg-[#064E3B] text-white rounded-br-md"
                        : "bg-white border border-[#E4E2D8] text-[#111827] rounded-bl-md"
                    }`}
                  >
                    {m.text}
                    <span className={`block mt-0.5 text-[8px] ${m.from === "us" ? "text-white/70" : "text-[#9CA3AF]"}`}>
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
                  className="px-2.5 py-1 rounded-full bg-white border border-[#E4E2D8] text-[9px] font-bold text-[#4B5563] hover:border-[#064E3B]/50 hover:text-[#043B2C] whitespace-nowrap transition-colors cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
            {noteMode ? (
              <div className="flex items-center gap-2 rounded-xl bg-[#F5EFDF] border border-[#E8D6AC] px-3 py-2">
                <StickyNote className="w-3.5 h-3.5 text-[#8F6E2D] shrink-0" />
                <span className="flex-1 text-[10px] text-[#6E5621]">Internal team note — teammates only</span>
                <button type="button" onClick={sendNote} className="px-2.5 py-1 rounded-full bg-[#8F6E2D] text-white text-[9px] font-bold cursor-pointer">
                  Add note
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 rounded-xl bg-white border border-[#E4E2D8] px-3 py-2">
                <ImageIcon className="w-3.5 h-3.5 text-[#6B7280] shrink-0" />
                <span className="flex-1 text-[10px] text-[#9CA3AF]">Type a reply…</span>
                <Send className="w-3.5 h-3.5 text-[#064E3B] shrink-0" />
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
  { label: "Calls Dialed", value: "2,418", tint: "text-[#111827]" },
  { label: "Connected", value: "1,762", tint: "text-[#2E6FE8]" },
  { label: "Appointments Booked", value: "342", tint: "text-[#043B2C]" },
  { label: "Orders Confirmed", value: "589", tint: "text-[#043B2C]" },
];

const TRANSCRIPT = [
  { who: "AI", text: "Namaste Sana ji! CODIIC ke taraf se — aapka Nordic Oak Chair order confirm karna tha. COD mein delivery theek rahega?" },
  { who: "Sana", text: "Haan, COD theek hai. Friday tak mil jayega?" },
  { who: "AI", text: "Bilkul! Friday 4 PM slot book kar diya hai. Tracking link WhatsApp pe bhej rahi hoon." },
  { who: "System", text: "Disposition: COD Confirmed → CRM stage moved to Qualified · Receipt sent" },
];

const RECENT_CALLS = [
  { name: "Order #1042 · COD verify", result: "Confirmed", tint: "bg-[#F1F0EA] text-[#065F46]", time: "Just now" },
  { name: "Lead callback · Riya S.", result: "Appointment Fri 4 PM", tint: "bg-sky-100 text-sky-800", time: "2m ago" },
  { name: "Winback · 214 contacts", result: "In progress · 68%", tint: "bg-[#F5EFDF] text-[#6E5621]", time: "Live" },
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
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#8F6E2D] bg-[#F5EFDF] px-2 py-1 rounded-full">
          <PhoneCall className="w-3 h-3" /> Campaign live
        </span>
      }
    >
      <div className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Metrics + player */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {CALL_METRICS.map((m) => (
              <div key={m.label} className="rounded-xl bg-[#F7F7F2] border border-[#F1F0EA] p-3">
                <div className={`text-lg font-extrabold tracking-tight ${m.tint}`}>{m.value}</div>
                <div className="text-[9px] font-bold uppercase tracking-wide text-[#6B7280] mt-0.5 leading-tight">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Waveform player */}
          <div className="rounded-xl border border-[#F1F0EA] bg-white p-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setPlaying((v) => !v)}
                className="w-10 h-10 rounded-full bg-[#064E3B] hover:bg-[#043B2C] text-white flex items-center justify-center shadow-md shadow-[#064E3B]/30 transition-all active:scale-95 cursor-pointer shrink-0"
                aria-label={playing ? "Pause call sample" : "Play call sample"}
              >
                {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              <div className="flex-1">
                <div className="text-[11px] font-bold text-[#111827]">Sample AI Call · Hinglish voice</div>
                <div className="text-[9px] text-[#6B7280]">COD order verification · 38 sec</div>
              </div>
              <span className="text-[10px] font-bold text-[#6B7280] tabular-nums">
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
                      active ? "bg-[#064E3B]" : "bg-[#E4E2D8]"
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
          <div className="rounded-xl border border-[#F1F0EA] bg-[#F7F7F2] p-4 space-y-2">
            <div className="text-[9px] font-bold uppercase tracking-wider text-[#6B7280]">
              Live Call Transcript {playing && <span className="text-[#064E3B]">· streaming…</span>}
            </div>
            {TRANSCRIPT.map((line, i) => (
              <div
                key={i}
                className={`text-[11px] leading-relaxed transition-opacity duration-500 ${
                  i < visibleLines || progress === 0 ? (i < visibleLines ? "opacity-100" : "opacity-30") : "opacity-30"
                }`}
              >
                <span className={`font-bold ${line.who === "AI" ? "text-[#043B2C]" : line.who === "System" ? "text-[#8F6E2D]" : "text-[#111827]"}`}>
                  {line.who}:{" "}
                </span>
                <span className={line.who === "System" ? "text-[#6B7280] italic" : "text-[#4B5563]"}>{line.text}</span>
              </div>
            ))}
            {progress === 0 && (
              <p className="text-[10px] text-[#9CA3AF] italic">Press play to hear the AI agent handle a COD verification call.</p>
            )}
          </div>
        </div>

        {/* Disposition log */}
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-[#F1F0EA] bg-white p-4 h-full">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold text-[#111827]">Disposition Log</span>
              <span className="text-[9px] font-bold text-[#043B2C] bg-[#F1F0EA] px-2 py-0.5 rounded-full">Auto-synced to CRM</span>
            </div>
            <div className="space-y-2">
              {RECENT_CALLS.map((c) => (
                <div key={c.name} className="flex items-center justify-between gap-2 rounded-lg border border-[#F1F0EA] p-2.5">
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-[#111827] truncate">{c.name}</div>
                    <div className="text-[9px] text-[#6B7280]">{c.time}</div>
                  </div>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${c.tint}`}>
                    {c.result}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-[#F1F0EA] border border-[#064E3B]/15 p-3 text-[10px] font-semibold text-[#043B2C] leading-relaxed">
              <PhoneCall className="w-3.5 h-3.5 inline mr-1 text-[#064E3B]" />
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
  { id: "a1", tab: "Winning Ads", title: "Velvet Touch Sofa — UGC Hook", sub: "Kaveri Lifestyle · Meta Feed", metric: "47 days", metricLabel: "Active run", grad: "from-[#0B1120] via-[#1F2937] to-[#1F2937]" },
  { id: "a2", tab: "Winning Ads", title: "Skincare Serum — Before/After", sub: "GlowCraft · Reels", metric: "31 days", metricLabel: "Active run", grad: "from-[#5B247A] to-[#1BCEDF]" },
  { id: "a3", tab: "Winning Ads", title: "Bamboo Organizer — Problem/Solution", sub: "Aura Living · Stories", metric: "26 days", metricLabel: "Active run", grad: "from-[#064E3B] to-[#71B280]" },
  { id: "p1", tab: "Trending Products", title: "Ceramic Dinner Set (24pc)", sub: "Home & Kitchen · Demand ↑214%", metric: "₹38/mo", metricLabel: "Est. margin ₹380/unit", grad: "from-[#EDE0C0] to-[#A87F3D]" },
  { id: "p2", tab: "Trending Products", title: "Posture Corrector Chair", sub: "Office · Demand ↑161%", metric: "₹52/mo", metricLabel: "Est. margin ₹520/unit", grad: "from-[#BFE3D2] to-[#043B2C]" },
  { id: "s1", tab: "Top Stores", title: "auraliving.com", sub: "Next.js + CODIIC checkout", metric: "₹42.8L", metricLabel: "Monthly est. revenue", grad: "from-[#1F2937] to-[#064E3B]" },
  { id: "s2", tab: "Top Stores", title: "glowcraft.in", sub: "Beauty D2C · COD heavy", metric: "₹29.5L", metricLabel: "Monthly est. revenue", grad: "from-[#7C3AED] to-[#D4BCF2]" },
  { id: "c1", tab: "Competitor Tracker", title: "Zephyr Decor", sub: "Launched 14 new video ads", metric: "↑ 38%", metricLabel: "Ad spend velocity", grad: "from-[#111827] to-[#4B5563]" },
  { id: "c2", tab: "Competitor Tracker", title: "UrbanNest", sub: "Price drop on 6 bestsellers", metric: "-12%", metricLabel: "Avg price change", grad: "from-[#4B5563] to-[#6B7280]" },
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
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#043B2C] bg-[#F1F0EA] px-2 py-1 rounded-full">
          <Bookmark className="w-3 h-3" /> {saved.length} saved
        </span>
      }
    >
      {/* Tabs + search */}
      <div className="flex flex-wrap items-center gap-2 px-4 py-3 border-b border-[#F1F0EA]">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {INTEL_TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                tab === t ? "bg-[#111827] text-white" : "bg-[#F1F0EA] text-[#4B5563] hover:bg-[#E4E2D8]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2 rounded-full bg-white border border-[#E4E2D8] px-3 py-1.5 min-w-[160px]">
          <Search className="w-3 h-3 text-[#6B7280] shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search ads, stores, SKUs…"
            className="w-full bg-transparent text-[10px] font-semibold text-[#111827] placeholder:text-[#9CA3AF] outline-none"
          />
        </div>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 bg-[#F7F7F2]">
        {cards.map((card) => {
          const isSaved = saved.includes(card.id);
          return (
            <div key={card.id} className="rounded-xl bg-white border border-[#E4E2D8] overflow-hidden hover:border-[#064E3B]/50 hover:shadow-md transition-all animate-tool-in">
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
                <div className="text-[11px] font-bold text-[#111827] leading-tight truncate">{card.title}</div>
                <div className="text-[9px] text-[#6B7280] mt-0.5 truncate">{card.sub}</div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[9px] font-semibold text-[#4B5563]">{card.metricLabel}</span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      className="w-6 h-6 rounded-full bg-[#F1F0EA] text-[#4B5563] hover:text-[#111827] flex items-center justify-center cursor-pointer"
                      title="Open landing page"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleSave(card.id)}
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                        isSaved ? "bg-[#064E3B] text-white" : "bg-[#F1F0EA] text-[#4B5563] hover:text-[#043B2C]"
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
          <div className="col-span-full rounded-xl border-2 border-dashed border-[#E4E2D8] py-10 text-center text-[11px] font-semibold text-[#6B7280]">
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
  { name: "Storefront Checkout", value: "₹14.2L", pct: 44, tint: "#064E3B" },
  { name: "WhatsApp Catalog", value: "₹9.8L", pct: 30, tint: "#25D366" },
  { name: "Instagram DM", value: "₹5.4L", pct: 17, tint: "#7C3AED" },
  { name: "AI Voice Orders", value: "₹2.8L", pct: 9, tint: "#A87F3D" },
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
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#043B2C] bg-[#F1F0EA] px-2 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B] animate-pulse" />
          Synced 4 min ago
        </span>
      }
    >
      <div className="p-4 sm:p-5">
        {/* Header row */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-[#6B7280]">Total Revenue</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-[#111827] tracking-tight">{data.revenue}</span>
              <span className="text-[10px] font-bold text-[#043B2C] bg-[#F1F0EA] px-1.5 py-0.5 rounded-full">+18.4%</span>
            </div>
          </div>
          <div className="ml-6">
            <div className="text-[10px] font-bold uppercase tracking-wide text-[#6B7280]">Net Profit (after COGS + shipping)</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-[#043B2C] tracking-tight">{data.profit}</span>
              <span className="text-[10px] font-bold text-[#4B5563]">{data.margin} margin</span>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-1 p-1 rounded-full bg-[#F1F0EA]">
            {RANGES.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRange(r)}
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                  range === r ? "bg-[#111827] text-white" : "text-[#4B5563] hover:text-[#111827]"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="rounded-xl border border-[#F1F0EA] bg-white p-3 overflow-hidden">
          <svg viewBox={`0 0 ${W} ${H + 10}`} className="w-full h-32" preserveAspectRatio="none">
            <defs>
              <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#064E3B" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#064E3B" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="profGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C6A15B" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#C6A15B" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[0.25, 0.5, 0.75].map((f) => (
              <line key={f} x1="0" y1={H * f} x2={W} y2={H * f} stroke="#F1F0EA" strokeWidth="1" />
            ))}
            <path d={`${toPath(data.points, W, H)} L${W},${H} L0,${H} Z`} fill="url(#revGrad)" />
            <path d={toPath(data.points, W, H)} fill="none" stroke="#064E3B" strokeWidth="2.5" strokeLinecap="round" />
            <path d={`${toPath(data.profitPoints, W, H)} L${W},${H} L0,${H} Z`} fill="url(#profGrad)" />
            <path d={toPath(data.profitPoints, W, H)} fill="none" stroke="#A87F3D" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
          </svg>
          <div className="flex items-center gap-4 mt-1 px-1">
            <span className="flex items-center gap-1.5 text-[9px] font-bold text-[#4B5563]">
              <i className="w-2.5 h-[3px] rounded-full bg-[#064E3B]" /> Revenue
            </span>
            <span className="flex items-center gap-1.5 text-[9px] font-bold text-[#4B5563]">
              <i className="w-2.5 h-[3px] rounded-full bg-[#A87F3D]" /> Net Profit
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          {/* SKU table */}
          <div className="rounded-xl border border-[#F1F0EA] overflow-hidden">
            <div className="px-3 py-2 bg-[#F7F7F2] border-b border-[#F1F0EA] text-[10px] font-bold uppercase tracking-wide text-[#6B7280]">
              SKU Margin Breakdown
            </div>
            {SKU_ROWS.map((row) => (
              <div key={row.sku} className="flex items-center gap-3 px-3 py-2.5 border-b border-[#F1F0EA] last:border-0">
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold text-[#111827] truncate">{row.sku}</div>
                  <div className="text-[9px] text-[#6B7280]">{row.sold} sold</div>
                </div>
                <span className="text-[11px] font-bold text-[#111827]">{row.revenue}</span>
                <span className="text-[10px] font-bold text-[#043B2C] bg-[#F1F0EA] px-1.5 py-0.5 rounded-full">{row.margin}</span>
                <TrendingUp className={`w-3.5 h-3.5 ${row.trend === "up" ? "text-[#064E3B]" : "text-[#DC2626] rotate-180"}`} />
              </div>
            ))}
          </div>

          {/* Channel attribution */}
          <div className="rounded-xl border border-[#F1F0EA] p-3.5">
            <div className="text-[10px] font-bold uppercase tracking-wide text-[#6B7280] mb-3">
              Channel Attribution
            </div>
            <div className="space-y-3">
              {CHANNELS.map((c) => (
                <div key={c.name}>
                  <div className="flex items-center justify-between text-[10px] font-bold mb-1">
                    <span className="text-[#111827]">{c.name}</span>
                    <span className="text-[#4B5563]">{c.value} · {c.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#F1F0EA] overflow-hidden">
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
