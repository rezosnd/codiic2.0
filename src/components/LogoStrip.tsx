"use client";

import React from "react";
import {
  WhatsAppLogo,
  RazorpayLogo,
  GoogleWorkspaceLogo,
  MetaLogo,
  ShopifyLogo,
  AwsLogo,
} from "./BrandLogos";

export const LogoStrip: React.FC = () => {
  const integrations = [
    { name: "WhatsApp Business", Logo: WhatsAppLogo },
    { name: "Razorpay", Logo: RazorpayLogo },
    { name: "Google Workspace", Logo: GoogleWorkspaceLogo },
    { name: "Meta", Logo: MetaLogo },
    { name: "Shopify", Logo: ShopifyLogo },
    { name: "AWS", Logo: AwsLogo },
  ];

  return (
    <section className="py-12 sm:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-[#5A6270] mb-7">
          One workspace, natively connected to the tools you already use
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {integrations.map(({ name, Logo }) => (
            <div
              key={name}
              className="flex items-center gap-2.5 text-[#171923] opacity-80 hover:opacity-100 transition-opacity"
            >
              <Logo className="w-6 h-6 shrink-0" />
              <span className="text-sm font-semibold tracking-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
