import React from "react";

export interface IntegrationItem {
  id: string;
  name: string;
  shortName: string;
  category: "Messaging & Comms" | "Payments & Billing" | "Leads & Marketing" | "eCommerce & Store" | "Automation & API";
  categoryLabel: string;
  desc: string;
  status: string;
  statusType: "native" | "oauth" | "webhook" | "api";
  protocol: string;
  latency: string;
  brandColor: string;
  brandColorLight: string;
  brandColorBorder: string;
  accentBg: string;
  supported: boolean;
  accessibleName: string;
  samplePayload: {
    event: string;
    detail: string;
    destination: string;
  };
  // Canvas placement in 1000 x 580 coordinate system
  cx: number;
  cy: number;
  path: string; // Cubic bezier path from hub (500, 290) to card anchor
  anchorAngle: number;
}

export const INTEGRATIONS_DATA: IntegrationItem[] = [
  {
    id: "whatsapp",
    name: "WhatsApp Business API",
    shortName: "WhatsApp",
    category: "Messaging & Comms",
    categoryLabel: "Official Cloud API",
    desc: "Two-way customer messaging, real-time lead capture from chat, automated catalog delivery, and instant status updates.",
    status: "Official Meta Cloud API",
    statusType: "native",
    protocol: "Cloud API v19.0",
    latency: "< 120ms",
    brandColor: "#25D366",
    brandColorLight: "#E8FBF1",
    brandColorBorder: "rgba(37, 211, 102, 0.35)",
    accentBg: "#25D366",
    supported: true,
    accessibleName: "WhatsApp Business API official logo",
    samplePayload: {
      event: "Incoming Customer Chat",
      detail: "Inquiry from +91 98201 44521 with message 'Need custom catalog & pricing'",
      destination: "Auto-synced to CRM Contact Profile & Sales Rep Assigned",
    },
    cx: 160,
    cy: 90,
    path: "M 500 290 C 380 290, 240 180, 160 90",
    anchorAngle: 210,
  },
  {
    id: "razorpay",
    name: "Razorpay Payments",
    shortName: "Razorpay",
    category: "Payments & Billing",
    categoryLabel: "UPI & Cards Gateway",
    desc: "Dynamic UPI QR codes, instant payment link reconciliation, split payouts, and automated webhook payment verification.",
    status: "Native Webhook Verification",
    statusType: "webhook",
    protocol: "HMAC-SHA256 Webhooks",
    latency: "< 95ms",
    brandColor: "#0C2340",
    brandColorLight: "#EFF6FF",
    brandColorBorder: "rgba(51, 149, 255, 0.35)",
    accentBg: "#3395FF",
    supported: true,
    accessibleName: "Razorpay Payments official logo",
    samplePayload: {
      event: "Payment Captured (order_pay_9021)",
      detail: "₹4,890.00 settled via UPI (GooglePay) for Order #1048",
      destination: "Deal moved to 'Closed Won' & GST Invoice auto-generated",
    },
    cx: 360,
    cy: 60,
    path: "M 500 290 C 460 180, 400 110, 360 60",
    anchorAngle: 238,
  },
  {
    id: "google",
    name: "Google Workspace",
    shortName: "Google",
    category: "Messaging & Comms",
    categoryLabel: "Gmail & Calendar Sync",
    desc: "Two-way email threading, client meeting booking via Google Calendar, and shared contact address book synchronization.",
    status: "OAuth 2.0 Bi-directional",
    statusType: "oauth",
    protocol: "Google REST API v3",
    latency: "< 180ms",
    brandColor: "#4285F4",
    brandColorLight: "#F0F5FF",
    brandColorBorder: "rgba(66, 133, 244, 0.35)",
    accentBg: "#4285F4",
    supported: true,
    accessibleName: "Google Workspace official logo",
    samplePayload: {
      event: "Calendar Invite Confirmed",
      detail: "Google Meet 'Product Architecture Walkthrough' accepted by priya@zenith.in",
      destination: "Logged to CRM Timeline & 30-min WhatsApp reminder queued",
    },
    cx: 640,
    cy: 60,
    path: "M 500 290 C 540 180, 600 110, 640 60",
    anchorAngle: 302,
  },
  {
    id: "meta",
    name: "Meta Ads & Lead Gen",
    shortName: "Meta Ads",
    category: "Leads & Marketing",
    categoryLabel: "Instagram & FB Ads",
    desc: "Direct ingestion of leads from Facebook and Instagram instant lead forms straight into sales queues within seconds.",
    status: "Direct Meta Graph Webhook",
    statusType: "webhook",
    protocol: "Graph API v19.0",
    latency: "< 300ms",
    brandColor: "#0668E1",
    brandColorLight: "#EFF6FF",
    brandColorBorder: "rgba(6, 104, 225, 0.35)",
    accentBg: "#0668E1",
    supported: true,
    accessibleName: "Meta Lead Generation official logo",
    samplePayload: {
      event: "Lead Form Submission",
      detail: "Campaign 'Summer B2B Enterprise Launch' (Lead ID: 88402194)",
      destination: "Auto-qualified in Sales Pipeline & notification sent to Territory Lead",
    },
    cx: 840,
    cy: 90,
    path: "M 500 290 C 620 290, 760 180, 840 90",
    anchorAngle: 330,
  },
  {
    id: "shopify",
    name: "Shopify Storefront",
    shortName: "Shopify",
    category: "eCommerce & Store",
    categoryLabel: "Catalog & Orders",
    desc: "Bi-directional product catalog synchronization, real-time inventory adjustments, and abandoned cart follow-up triggers.",
    status: "REST & GraphQL Store API",
    statusType: "api",
    protocol: "Admin API 2024-04",
    latency: "< 140ms",
    brandColor: "#96BF48",
    brandColorLight: "#F6F9EE",
    brandColorBorder: "rgba(150, 191, 72, 0.4)",
    accentBg: "#96BF48",
    supported: true,
    accessibleName: "Shopify Storefront official logo",
    samplePayload: {
      event: "Inventory Update (SKU: COTTON-TEE-BLK)",
      detail: "Stock count adjusted (-3 units) from online checkout",
      destination: "Updated across CODIIC Central Warehouse & POS terminal",
    },
    cx: 840,
    cy: 490,
    path: "M 500 290 C 620 290, 760 400, 840 490",
    anchorAngle: 30,
  },
  {
    id: "stripe",
    name: "Stripe Global",
    shortName: "Stripe",
    category: "Payments & Billing",
    categoryLabel: "Multi-Currency Billing",
    desc: "Accept cards and multi-currency subscription renewals across 135+ countries with automated dunning and receipt delivery.",
    status: "PCI-DSS Level 1 Gateway",
    statusType: "webhook",
    protocol: "Stripe Webhooks API",
    latency: "< 110ms",
    brandColor: "#635BFF",
    brandColorLight: "#F2F1FF",
    brandColorBorder: "rgba(99, 91, 255, 0.35)",
    accentBg: "#635BFF",
    supported: true,
    accessibleName: "Stripe Global Payments official logo",
    samplePayload: {
      event: "Subscription Cycle Renewed",
      detail: "$249.00 USD charged to client card for Growth Tier",
      destination: "Account entitlement refreshed & PDF tax invoice emailed",
    },
    cx: 160,
    cy: 490,
    path: "M 500 290 C 380 290, 240 400, 160 490",
    anchorAngle: 150,
  },
  {
    id: "zapier",
    name: "Zapier & Webhooks",
    shortName: "Zapier",
    category: "Automation & API",
    categoryLabel: "5,000+ App Connectors",
    desc: "Connect thousands of business tools via event-driven inbound and outbound webhooks without writing custom server code.",
    status: "Verified App Connector",
    statusType: "webhook",
    protocol: "REST Webhook Bus",
    latency: "< 210ms",
    brandColor: "#FF4A00",
    brandColorLight: "#FFF3EE",
    brandColorBorder: "rgba(255, 74, 0, 0.35)",
    accentBg: "#FF4A00",
    supported: true,
    accessibleName: "Zapier Automation official logo",
    samplePayload: {
      event: "Outbound Trigger Dispatched",
      detail: "New Qualified Deal ($12,000) broadcast to Slack Executive channel",
      destination: "Triggered Zapier multi-step accounting synchronization",
    },
    cx: 360,
    cy: 520,
    path: "M 500 290 C 460 400, 400 470, 360 520",
    anchorAngle: 122,
  },
  {
    id: "webhooks",
    name: "REST API & Webhooks",
    shortName: "Developer API",
    category: "Automation & API",
    categoryLabel: "Custom Enterprise Bus",
    desc: "Custom HTTP POST/GET endpoints, encrypted S3 cloud storage for invoices and KYC documents, and granular HMAC security.",
    status: "Native Developer SDK",
    statusType: "api",
    protocol: "HTTPS REST / HMAC-SHA256",
    latency: "< 35ms",
    brandColor: "#00B879",
    brandColorLight: "#E8F8F1",
    brandColorBorder: "rgba(0, 184, 121, 0.35)",
    accentBg: "#00B879",
    supported: true,
    accessibleName: "CODIIC Developer REST API & Webhooks logo",
    samplePayload: {
      event: "Custom ERP Sync Hook",
      detail: "POST /v1/orders/export received from internal warehouse server",
      destination: "Validated via 256-bit API secret & batch processed instantly",
    },
    cx: 640,
    cy: 520,
    path: "M 500 290 C 540 400, 600 470, 640 520",
    anchorAngle: 58,
  },
];
