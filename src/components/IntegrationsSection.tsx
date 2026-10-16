"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  CreditCard,
  Mail,
  Calendar,
  Share2,
  ShoppingBag,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  RefreshCw,
  Server,
  Activity,
} from "lucide-react";

interface IntegrationsSectionProps {
  onOpenGetStarted: () => void;
}

export const IntegrationsSection: React.FC<IntegrationsSectionProps> = ({
  onOpenGetStarted,
}) => {
  const [selectedNode, setSelectedNode] = useState<string>("whatsapp");

  // 8 Verified Authentic Integrations
  const nodes = [
    {
      id: "whatsapp",
      name: "WhatsApp Business API",
      category: "Messaging & Comms",
      desc: "Instant customer chats, interactive catalog sharing, and automated broadcast follow-ups.",
      status: "Official Cloud API",
      badge: "Real-time Two-way",
      color: "#25D366",
      icon: MessageCircle,
      samplePayload: "Customer 'Rohan M.' sent WhatsApp inquiry → Synced to CRM with phone & chat transcript.",
      // SVG canvas coords (viewBox 900 x 520)
      cx: 140,
      cy: 90,
      path: "M 450 260 C 350 200, 240 130, 140 90",
    },
    {
      id: "razorpay",
      name: "Razorpay Payments",
      category: "UPI & Payment Gateway",
      desc: "Dynamic UPI QR codes, debit/credit cards, and automated payment receipt generation.",
      status: "Native Webhook",
      badge: "Instant Settlement",
      color: "#00B879",
      icon: CreditCard,
      samplePayload: "Payment of ₹4,890 verified via UPI webhook → Order marked 'Paid' in Pipeline.",
      cx: 330,
      cy: 60,
      path: "M 450 260 C 400 170, 370 100, 330 60",
    },
    {
      id: "google",
      name: "Google Workspace",
      category: "Gmail & Calendar Sync",
      desc: "Two-way email threading, Google Meet client scheduling, and shared contact sync.",
      status: "OAuth 2.0 Verified",
      badge: "Bi-directional",
      color: "#4285F4",
      icon: Mail,
      samplePayload: "Calendar invite for 'Demo Walkthrough' accepted → Attached to Deal Card.",
      cx: 570,
      cy: 60,
      path: "M 450 260 C 500 170, 530 100, 570 60",
    },
    {
      id: "meta",
      name: "Meta Ads & Lead Gen",
      category: "Instagram & FB Ads",
      desc: "Direct lead ingestion from Facebook and Instagram Lead Form campaigns within 3 seconds.",
      status: "Direct Webhook",
      badge: "3-Sec Ingestion",
      color: "#0668E1",
      icon: Share2,
      samplePayload: "New lead from Instagram Ad campaign 'Summer Launch' → Auto-assigned to Sales Rep.",
      cx: 760,
      cy: 90,
      path: "M 450 260 C 650 200, 680 130, 760 90",
    },
    {
      id: "stripe",
      name: "Stripe Global",
      category: "International Billing",
      desc: "Accept cards and multi-currency recurring subscriptions across 135+ countries.",
      status: "Global Gateway",
      badge: "SaaS & Invoicing",
      color: "#635BFF",
      icon: CreditCard,
      samplePayload: "Subscription renewed ($149/mo) → Invoice generated & client portal updated.",
      cx: 140,
      cy: 430,
      path: "M 450 260 C 350 320, 240 390, 140 430",
    },
    {
      id: "shopify",
      name: "Shopify Storefront",
      category: "eCommerce Catalog",
      desc: "Sync products, order statuses, inventory counts, and abandoned checkout events.",
      status: "Catalog REST API",
      badge: "Order Sync",
      color: "#96BF48",
      icon: ShoppingBag,
      samplePayload: "SKU 'Organic Cotton Tee' stock updated (-2) → Reflected in CODIIC Inventory.",
      cx: 330,
      cy: 460,
      path: "M 450 260 C 400 350, 370 420, 330 460",
    },
    {
      id: "zapier",
      name: "Zapier & Webhooks",
      category: "Automation Connectors",
      desc: "Connect thousands of apps through incoming and outgoing HTTPS REST webhooks.",
      status: "Developer API",
      badge: "5,000+ Services",
      color: "#FF4A00",
      icon: Zap,
      samplePayload: "Custom webhook triggered from accounting ERP → Vendor record synchronized.",
      cx: 570,
      cy: 460,
      path: "M 450 260 C 500 350, 530 420, 570 460",
    },
    {
      id: "cloud",
      name: "AWS Cloud Infrastructure",
      category: "Storage & Documents",
      desc: "Encrypted S3 document storage for invoices, customer KYC files, and proposal PDFs.",
      status: "AES-256 Cloud",
      badge: "Encrypted Vault",
      color: "#FF9900",
      icon: Server,
      samplePayload: "Signed proposal PDF encrypted & stored in private S3 bucket with audit log.",
      cx: 760,
      cy: 430,
      path: "M 450 260 C 650 320, 680 390, 760 430",
    },
  ];

  const active = nodes.find((n) => n.id === selectedNode) || nodes[0];

  return (
    <section id="integrations" className="py-20 sm:py-28 bg-white border-b border-[#E8EAF0] relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E8F8F1]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-[#008F60] text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#00B879]" />
            <span>CONNECTED INTEGRATION NETWORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight leading-tight">
            Works with the tools your business already uses.
          </h2>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7F9F8] border border-[#E2E8E5] text-xs font-semibold text-[#171923]">
            <span className="w-2 h-2 rounded-full bg-[#00B879] animate-pulse" />
            <span>Existing tools badalna zaroori nahi — sab seamlessly jud jayenge.</span>
          </div>

          <p className="text-base sm:text-lg text-[#555A68] leading-relaxed">
            Connect CODIIC directly to your communication channels, payment processors, advertising accounts, and business software without fragile custom code.
          </p>
        </div>

        {/* Desktop Interactive Animated Network Canvas (Visible on md and up) */}
        <div className="hidden md:block relative w-full max-w-5xl mx-auto bg-[#F7F9F8] border border-[#E2E8E5] rounded-3xl p-6 sm:p-10 shadow-sm overflow-hidden">
          
          {/* Top Status Bar inside canvas */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E8EAF0] mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00B879] animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#171923]">
                CODIIC UNIFIED SYNC BUS • 8 CONNECTORS ACTIVE
              </span>
            </div>
            <span className="text-xs text-[#555A68]">
              Hover or click any service to inspect real-time data flow
            </span>
          </div>

          {/* SVG Visual Stage */}
          <div className="relative w-full h-[520px]">
            
            {/* SVG Connector Paths */}
            <svg
              viewBox="0 0 900 520"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <defs>
                <linearGradient id="grad-active" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00B879" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#008F60" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="grad-inactive" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D9DEDC" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#D9DEDC" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Central Concentric Pulse Rings */}
              <circle
                cx="450"
                cy="260"
                r="70"
                fill="none"
                stroke="#00B879"
                strokeWidth="1"
                strokeDasharray="4 4"
                className="opacity-30"
              />
              <circle
                cx="450"
                cy="260"
                r="110"
                fill="none"
                stroke="#00B879"
                strokeWidth="0.75"
                strokeDasharray="6 6"
                className="opacity-20"
              />

              {/* Connecting Paths */}
              {nodes.map((node) => {
                const isSelected = selectedNode === node.id;
                return (
                  <g key={node.id}>
                    {/* Base Path Line */}
                    <path
                      d={node.path}
                      fill="none"
                      stroke={isSelected ? "url(#grad-active)" : "url(#grad-inactive)"}
                      strokeWidth={isSelected ? "2.5" : "1.5"}
                      strokeDasharray={isSelected ? "6 4" : "4 4"}
                      className={isSelected ? "animate-connector-flow transition-all" : "transition-all"}
                    />
                    
                    {/* Active moving packet point */}
                    {isSelected && (
                      <circle
                        r="4"
                        fill="#00B879"
                        className="animate-pulse"
                      >
                        <animateMotion
                          path={node.path}
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Central CODIIC Core Hub Node */}
            <div className="absolute top-[260px] left-[450px] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
              <div className="relative group cursor-pointer">
                {/* Pulsing ring */}
                <div className="absolute -inset-3 bg-[#00B879]/20 rounded-full blur-md animate-pulse" />
                
                {/* Center Core Circle with official symbol logo */}
                <div className="relative w-24 h-24 rounded-full bg-white border-2 border-[#00B879] shadow-xl flex items-center justify-center p-3.5 transition-transform hover:scale-105">
                  <Image
                    src="/logo_withot text.png"
                    alt="CODIIC Central Hub"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="mt-2.5 px-3 py-1 rounded-full bg-[#171923] text-white text-[11px] font-bold font-mono shadow-md tracking-wider">
                CODIIC CORE
              </div>
            </div>

            {/* 8 Radiating Integration Cards positioned absolute according to coordinates */}
            {nodes.map((node) => {
              const isSelected = selectedNode === node.id;
              const Icon = node.icon;

              // Convert viewBox 900x520 to percentage
              const leftPct = (node.cx / 900) * 100;
              const topPct = (node.cy / 520) * 100;

              return (
                <div
                  key={node.id}
                  style={{ left: `${leftPct}%`, top: `${topPct}%` }}
                  onClick={() => setSelectedNode(node.id)}
                  onMouseEnter={() => setSelectedNode(node.id)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer p-3 sm:p-3.5 rounded-2xl transition-all duration-200 border w-48 text-left ${
                    isSelected
                      ? "bg-white border-[#00B879] shadow-xl shadow-[#00B879]/15 scale-105 ring-2 ring-[#00B879]/20"
                      : "bg-white/95 border-[#E2E8E5] hover:border-[#00B879]/40 hover:bg-white shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                      style={{ backgroundColor: node.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-[#E8F8F1] text-[#008F60]"
                          : "bg-[#F7F9F8] text-[#555A68]"
                      }`}
                    >
                      {node.badge}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-[#171923] line-clamp-1">
                    {node.name}
                  </div>
                  <div className="text-[10px] text-[#555A68] line-clamp-1">
                    {node.category}
                  </div>
                </div>
              );
            })}

          </div>

          {/* Bottom Live Data Inspection Panel */}
          <div className="mt-4 p-4 rounded-2xl bg-white border border-[#E2E8E5] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0 mt-0.5"
                style={{ backgroundColor: active.color }}
              >
                <active.icon className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#171923]">
                    {active.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#008F60] bg-[#E8F8F1] px-2 py-0.5 rounded-full border border-[#00B879]/20">
                    {active.status}
                  </span>
                </div>
                <p className="text-xs text-[#555A68] mt-0.5 font-mono">
                  Payload Simulation: &quot;{active.samplePayload}&quot;
                </p>
              </div>
            </div>

            <button
              onClick={onOpenGetStarted}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#171923] hover:bg-[#00B879] text-white text-xs font-bold transition-colors shrink-0"
            >
              <span>Connect {active.name.split(" ")[0]}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Mobile View: Clean Responsive Grid Cards (< 768px) */}
        <div className="md:hidden space-y-4">
          <div className="p-4 rounded-2xl bg-[#E8F8F1] border border-[#00B879]/20 flex items-center gap-3">
            <Image
              src="/logo_withot text.png"
              alt="CODIIC Symbol"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
            />
            <div>
              <div className="text-xs font-bold text-[#171923]">CODIIC Unified Sync Hub</div>
              <div className="text-[11px] text-[#008F60]">Connects 8+ core operational channels</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {nodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  className="p-4 rounded-2xl bg-[#F7F9F8] border border-[#E2E8E5] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                        style={{ backgroundColor: node.color }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-semibold text-[#008F60] bg-[#E8F8F1] px-2 py-0.5 rounded-full border border-[#00B879]/20">
                        {node.status}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-[#171923]">{node.name}</h3>
                    <p className="text-xs text-[#555A68] mt-1 leading-relaxed">{node.desc}</p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#E8EAF0] flex items-center justify-between text-[11px] text-[#555A68]">
                    <span>Zero-code setup</span>
                    <span className="text-[#008F60] font-semibold">Native sync →</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 rounded-2xl bg-[#F7F9F8] border border-[#E2E8E5] text-xs text-[#555A68] max-w-2xl mx-auto">
            <div className="flex items-center gap-2 text-[#171923] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#00B879]" />
              <span>Developer API & Custom Webhooks</span>
            </div>
            <span>•</span>
            <span>REST API documentation available for enterprise custom systems.</span>
            <button
              onClick={onOpenGetStarted}
              className="text-[#008F60] font-bold hover:underline"
            >
              Request API Key →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
