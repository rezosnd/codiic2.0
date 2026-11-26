"use client";

import React from "react";
import HalftoneWordmarkFooter, {
  type FooterColumn,
} from "@/components/ui/halftone-wordmark-footer";

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Platform Tools",
    links: [
      { label: "Website Builder", href: "/platform/website-builder" },
      { label: "CRM 360", href: "/platform/crm-360" },
      { label: "Omnichannel Inbox", href: "/platform/omnichannel-inbox" },
      { label: "Bulk AI Calls", href: "/platform/bulk-ai-calls" },
      { label: "Ad & Product Library", href: "/platform/ad-product-library" },
      { label: "Sales Tracker", href: "/platform/sales-tracker" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Retail & D2C", href: "/solutions/retail-d2c" },
      { label: "Real Estate", href: "/solutions/real-estate" },
      { label: "Service Businesses", href: "/solutions/service-businesses" },
      { label: "Agencies", href: "/solutions/agencies" },
      { label: "Education", href: "/solutions/education" },
      { label: "Hospitality", href: "/solutions/hospitality" },
    ],
  },
  {
    title: "Company & Legal",
    links: [
      { label: "About", href: "/about" },
      { label: "API & Developers", href: "/developers" },
      { label: "User Guide", href: "/user-guide" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/security" },
    ],
  },
];

interface ChakorFooterProps {
  onOpenGetStarted: () => void;
}

export const ChakorFooter: React.FC<ChakorFooterProps> = ({
  onOpenGetStarted,
}) => {
  return (
    <HalftoneWordmarkFooter
      wordmark="codiic"
      preset="codiic"
      label="CODIIC — One platform for your entire business"
      meta="© 2026 CODIIC Technologies · All rights reserved"
      columns={FOOTER_COLUMNS}
      cta={{ label: "Start Free →", onClick: onOpenGetStarted }}
      height="600px"
      dotGap={7}
      radius={90}
      crop={0.22}
      fontWeight={800}
    />
  );
};
