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
    <section className="py-10 bg-white border-b border-[#E8EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Heading */}
        <div className="text-center mb-6">
          <p className="text-[12px] font-bold tracking-widest uppercase text-[#5A6270]">
            ONE WORKSPACE FOR YOUR BUSINESS • NATIVELY CONNECTED
          </p>
        </div>

        {/* Slim Monochrome Integration Strip (Screenshot 1-inspired) */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-70 hover:opacity-100 transition-opacity">
          {integrations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 text-[#171923] hover:text-[#00B879] transition-colors group cursor-default"
              >
                <div className="w-7 h-7 rounded-lg bg-[#F7F9F8] border border-[#E2E8E5] flex items-center justify-center text-[#5A6270] group-hover:text-[#008F60] group-hover:border-[#00B879]/30 transition-all">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-tight text-[#171923] group-hover:text-[#008F60] transition-colors">
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
