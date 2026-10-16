"use client";

import React from "react";
import {
  MessageCircle,
  CreditCard,
  Mail,
  Share2,
  ShoppingBag,
  Cloud,
} from "lucide-react";

export const LogoStrip: React.FC = () => {
  const integrations = [
    { name: "WhatsApp Business", icon: MessageCircle },
    { name: "Razorpay Payments", icon: CreditCard },
    { name: "Google Workspace", icon: Mail },
    { name: "Meta Lead Gen", icon: Share2 },
    { name: "Shopify Store", icon: ShoppingBag },
    { name: "AWS Cloud", icon: Cloud },
  ];

  return (
    <section className="py-12 bg-white border-b border-[#E8EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Heading */}
        <div className="text-center mb-8">
          <p className="text-[11px] font-bold tracking-widest uppercase text-[#5A6270]">
            ONE WORKSPACE FOR YOUR BUSINESS • NATIVELY CONNECTED
          </p>
        </div>

        {/* Slim Monochrome Integration Strip (Dropship.io rhythm) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
          {integrations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F7F9F8] border border-[#E2E6E4] hover:border-[#00B879]/40 hover:bg-white text-[#171923] hover:text-[#008F60] transition-all duration-200 group cursor-default shadow-2xs hover:shadow-xs"
              >
                <div className="w-6 h-6 rounded-lg bg-white border border-[#E2E6E4] flex items-center justify-center text-[#5A6270] group-hover:text-[#008F60] group-hover:border-[#00B879]/30 transition-all shrink-0">
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.8} />
                </div>
                <span className="text-xs font-bold tracking-tight text-[#171923] group-hover:text-[#008F60] transition-colors">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
