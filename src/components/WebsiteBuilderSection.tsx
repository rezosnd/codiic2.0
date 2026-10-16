"use client";

import React, { useState } from "react";
import {
  Globe,
  Monitor,
  Tablet,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Palette,
  Send,
  Layout,
  Layers,
} from "lucide-react";

interface WebsiteBuilderSectionProps {
  onOpenGetStarted: () => void;
}

export const WebsiteBuilderSection: React.FC<WebsiteBuilderSectionProps> = ({
  onOpenGetStarted,
}) => {
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [activeSection, setActiveSection] = useState<"hero" | "services" | "testimonials" | "contact">("hero");
  const [isPublished, setIsPublished] = useState(false);

  const benefits = [
    {
      title: "Flexible page layouts",
      desc: "Drag-and-drop pre-designed components tailored for high conversion and business credibility.",
    },
    {
      title: "Responsive design",
      desc: "Automatic fluid formatting for mobile, tablet, and desktop with zero broken layouts.",
    },
    {
      title: "Customizable themes",
      desc: "Match your company's typography, palette, and styling tokens in one unified place.",
    },
    {
      title: "Forms and lead capture",
      desc: "Inquiries sync instantly to your CRM and trigger automated WhatsApp notifications.",
    },
  ];

  return (
    <section id="website-builder" className="py-20 sm:py-28 bg-white border-b border-[#E8EAF0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Copy & Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-[#008F60] text-xs font-bold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5 text-[#00B879]" />
              <span>CREATE YOUR ONLINE PRESENCE</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171923] tracking-tight leading-tight">
                A professional website.{" "}
                <span className="text-[#00B879]">Without the complexity.</span>
              </h2>
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F7F9F8] border border-[#E2E8E5] text-xs font-semibold text-[#171923]">
                <Sparkles className="w-3.5 h-3.5 text-[#00B879]" />
                <span>Code ka jhanjhat khatam. Launch in minutes.</span>
              </div>

              <p className="text-base text-[#555A68] leading-relaxed">
                Create and customize modern business websites using flexible layouts, ready-made sections, and built-in publishing tools that connect straight into your sales pipeline.
              </p>
            </div>

            {/* 4 Core Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {benefits.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#F7F9F8] border border-[#E2E8E5]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B879] shrink-0" />
                    <h3 className="text-xs font-bold text-[#171923]">{item.title}</h3>
                  </div>
                  <p className="text-[11px] text-[#555A68] leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenGetStarted}
                className="group px-6 py-3 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-xs font-bold shadow-md shadow-[#00B879]/20 hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>Explore Storefront & Website Builder</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Builder Mockup */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#171923] border border-gray-800 p-4 sm:p-5 shadow-2xl">
              
              {/* Builder Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 mb-3 border-b border-gray-800 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00B879] animate-pulse" />
                  <span className="font-semibold text-white">CODIIC Web Studio</span>
                  <span className="text-gray-400 text-[11px] hidden sm:inline">• Page: /home</span>
                </div>

                {/* Device Viewport Toggles */}
                <div className="flex items-center gap-1 bg-gray-800/80 p-1 rounded-xl">
                  <button
                    onClick={() => setDeviceView("desktop")}
                    className={`p-1.5 rounded-lg transition-colors ${
                      deviceView === "desktop" ? "bg-[#00B879] text-white" : "text-gray-400 hover:text-white"
                    }`}
                    title="Desktop Preview"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setDeviceView("tablet")}
                    className={`p-1.5 rounded-lg transition-colors ${
                      deviceView === "tablet" ? "bg-[#00B879] text-white" : "text-gray-400 hover:text-white"
                    }`}
                    title="Tablet Preview"
                  >
                    <Tablet className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setDeviceView("mobile")}
                    className={`p-1.5 rounded-lg transition-colors ${
                      deviceView === "mobile" ? "bg-[#00B879] text-white" : "text-gray-400 hover:text-white"
                    }`}
                    title="Mobile Preview"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Publish Button */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400 hidden sm:inline font-mono">
                    {isPublished ? "Published live" : "Draft"}
                  </span>
                  <button
                    onClick={() => setIsPublished(true)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#00B879] hover:bg-[#008F60] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
                  >
                    <Send className="w-3 h-3" />
                    <span>{isPublished ? "Live ✓" : "Publish"}</span>
                  </button>
                </div>
              </div>

              {/* Workspace Body: Left Section Navigator + Center Canvas */}
              <div className="grid grid-cols-12 gap-3 min-h-[340px]">
                
                {/* Left Section Selector */}
                <div className="col-span-3 bg-gray-900/90 border border-gray-800 rounded-2xl p-2.5 hidden sm:block">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 px-1">
                    Sections Library
                  </div>
                  <div className="space-y-1 text-xs">
                    <button
                      onClick={() => setActiveSection("hero")}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between ${
                        activeSection === "hero"
                          ? "bg-[#00B879] text-white font-semibold"
                          : "text-gray-300 hover:bg-gray-800"
                      }`}
                    >
                      <span>Hero Section</span>
                      <span className="text-[10px] opacity-70">Main</span>
                    </button>
                    <button
                      onClick={() => setActiveSection("services")}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between ${
                        activeSection === "services"
                          ? "bg-[#00B879] text-white font-semibold"
                          : "text-gray-300 hover:bg-gray-800"
                      }`}
                    >
                      <span>Products Grid</span>
                      <span className="text-[10px] opacity-70">Shop</span>
                    </button>
                    <button
                      onClick={() => setActiveSection("testimonials")}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between ${
                        activeSection === "testimonials"
                          ? "bg-[#00B879] text-white font-semibold"
                          : "text-gray-300 hover:bg-gray-800"
                      }`}
                    >
                      <span>Client Proof</span>
                      <span className="text-[10px] opacity-70">Trust</span>
                    </button>
                    <button
                      onClick={() => setActiveSection("contact")}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between ${
                        activeSection === "contact"
                          ? "bg-[#00B879] text-white font-semibold"
                          : "text-gray-300 hover:bg-gray-800"
                      }`}
                    >
                      <span>Contact Form</span>
                      <span className="text-[10px] opacity-70">CRM</span>
                    </button>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-800 text-[10px] text-gray-400">
                    <div className="font-semibold text-gray-300 mb-1">Live Integration</div>
                    <div>Form inquiries feed straight into CODIIC CRM in real-time.</div>
                  </div>
                </div>

                {/* Center Canvas */}
                <div className="col-span-12 sm:col-span-9 bg-white text-[#171923] rounded-2xl p-4 sm:p-6 overflow-hidden flex flex-col justify-between border border-gray-200 transition-all">
                  
                  {/* Top Canvas Status */}
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100 text-xs text-[#555A68]">
                    <span className="font-mono text-[10px]">Canvas Mode: Live Interactive Edit</span>
                    <span className="text-[10px] text-[#008F60] font-semibold bg-[#E8F8F1] px-2 py-0.5 rounded">
                      SEO Score: 98/100
                    </span>
                  </div>

                  {/* Section Content Based on Active Section */}
                  <div className="py-4 my-auto">
                    {activeSection === "hero" && (
                      <div className="text-center space-y-3">
                        <div className="inline-block px-3 py-1 rounded-full bg-[#E8F8F1] text-[#008F60] text-xs font-semibold">
                          Customizable Hero Header
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-[#171923]">
                          Elevate Your Business Operations Today
                        </h4>
                        <p className="text-xs text-[#555A68] max-w-sm mx-auto">
                          We help brands scale seamlessly with connected technology, instant checkout, and dedicated WhatsApp support.
                        </p>
                        <div className="flex justify-center gap-2 pt-2">
                          <span className="px-4 py-2 rounded-xl bg-[#00B879] text-white text-xs font-semibold shadow-sm">
                            Get In Touch
                          </span>
                          <span className="px-4 py-2 rounded-xl bg-[#F7F9F8] border border-[#E2E8E5] text-xs font-medium text-[#171923]">
                            View Catalog
                          </span>
                        </div>
                      </div>
                    )}

                    {activeSection === "services" && (
                      <div className="space-y-3">
                        <div className="text-center">
                          <h4 className="text-base font-bold text-[#171923]">Featured Products & Services</h4>
                          <p className="text-[11px] text-[#555A68]">Tailored offerings with integrated Razorpay & UPI checkout</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-3 rounded-xl bg-[#F7F9F8] border border-[#E2E8E5]">
                            <div className="font-bold text-[#171923] text-xs">Premium Solution Package</div>
                            <div className="text-[10px] text-[#008F60] font-bold mt-0.5">₹14,999 • Instant Order</div>
                          </div>
                          <div className="p-3 rounded-xl bg-[#F7F9F8] border border-[#E2E8E5]">
                            <div className="font-bold text-[#171923] text-xs">Annual Retainer Plan</div>
                            <div className="text-[10px] text-[#008F60] font-bold mt-0.5">₹49,999 • B2B Billing</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "testimonials" && (
                      <div className="space-y-3 text-center">
                        <h4 className="text-base font-bold text-[#171923]">Verified Client Reviews</h4>
                        <div className="p-3.5 rounded-2xl bg-[#F7F9F8] border border-[#E2E8E5] max-w-sm mx-auto text-xs text-[#171923] italic">
                          &quot;Deploying our new online portal took under a day with CODIIC. Inquiries doubled within two weeks.&quot;
                        </div>
                        <div className="text-[10px] font-semibold text-[#555A68]">
                          Managing Partner • Consulting Firm
                        </div>
                      </div>
                    )}

                    {activeSection === "contact" && (
                      <div className="space-y-2.5 max-w-xs mx-auto">
                        <div className="text-center font-bold text-xs text-[#171923]">
                          Capture Inquiries Direct to CRM
                        </div>
                        <input
                          type="text"
                          disabled
                          placeholder="Full Name"
                          className="w-full text-xs p-2.5 rounded-xl border border-[#E2E8E5] bg-gray-50"
                        />
                        <input
                          type="email"
                          disabled
                          placeholder="Business Email"
                          className="w-full text-xs p-2.5 rounded-xl border border-[#E2E8E5] bg-gray-50"
                        />
                        <div className="w-full py-2.5 bg-[#00B879] text-white text-xs font-semibold rounded-xl text-center">
                          Submit Inquiry
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Canvas Properties Toolstrip */}
                  <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#555A68]">
                    <div className="flex items-center gap-2">
                      <Palette className="w-3.5 h-3.5 text-[#00B879]" />
                      <span>Theme: Emerald Modern</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layout className="w-3.5 h-3.5 text-[#008F60]" />
                      <span>Grid: 12-Column Responsive</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
