"use client";

import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  ArrowRight,
  Globe,
  Users,
  Kanban,
  Zap,
  Play,
  ShieldCheck,
  Building,
  Phone,
  Mail,
  User,
} from "lucide-react";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({
  isOpen,
  onClose,
  initialPlan = "Growth",
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("Retail & eCommerce");
  const [plan, setPlan] = useState(initialPlan);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setCompany("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#E2E8E5] p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-[#555A68] hover:text-[#171923] rounded-full hover:bg-[#F7F9F8] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#E8F8F1] text-[#008F60] rounded-full flex items-center justify-center mx-auto border border-[#00B879]/30 shadow-xs">
              <CheckCircle2 className="w-9 h-9 text-[#00B879]" />
            </div>
            <h3 className="text-2xl font-bold text-[#171923]">
              Aapka Workspace Ready Hai!
            </h3>
            <p className="text-sm text-[#555A68] max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{fullName || "Friend"}</strong>! Our solutions specialist will send your instant workspace activation link to <strong>{email || "your email"}</strong> and message on WhatsApp within 15 minutes.
            </p>
            <div className="p-3 bg-[#F7F9F8] border border-[#E2E8E5] rounded-2xl text-xs text-[#171923] font-semibold">
              Selected Plan: {plan} • Zero credit card required
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-xs font-bold transition-all shadow-md shadow-[#00B879]/20"
            >
              Back to Overview
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#E8F8F1] text-[#008F60] text-xs font-bold uppercase tracking-wider border border-[#00B879]/20">
                <span>START FREE TRIAL</span>
                <span>•</span>
                <span>14 DAYS FULL ACCESS</span>
              </div>
              <h3 className="text-2xl font-bold text-[#171923]">
                Get started with CODIIC
              </h3>
              <p className="text-xs text-[#555A68]">
                Website se customer tak — ek connected workspace mein shuru karein.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-[#171923] mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8A90A0] absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Vikram Sharma"
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#E2E8E5] focus:border-[#00B879] focus:outline-none bg-[#F7F9F8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#171923] mb-1">
                    Work Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#8A90A0] absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vikram@company.in"
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#E2E8E5] focus:border-[#00B879] focus:outline-none bg-[#F7F9F8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#171923] mb-1">
                    WhatsApp / Phone
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8A90A0] absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#E2E8E5] focus:border-[#00B879] focus:outline-none bg-[#F7F9F8]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#171923] mb-1">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-[#8A90A0] absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your Business Name"
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#E2E8E5] focus:border-[#00B879] focus:outline-none bg-[#F7F9F8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#171923] mb-1">
                    Industry
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#E2E8E5] focus:border-[#00B879] focus:outline-none bg-[#F7F9F8]"
                  >
                    <option value="Retail & eCommerce">Retail & eCommerce</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="IT & Software Services">IT & Software</option>
                    <option value="Marketing Agency">Marketing Agency</option>
                    <option value="Healthcare">Healthcare & Clinic</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Professional Services">Professional Services</option>
                    <option value="Education">Education & EdTech</option>
                    <option value="Logistics">Logistics & Transport</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#171923] mb-1">
                  Select Plan
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Starter", "Growth", "Business"].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPlan(p)}
                      className={`py-2 rounded-xl border font-bold text-center transition-all ${
                        plan === p
                          ? "bg-[#00B879] text-white border-[#00B879] shadow-xs"
                          : "bg-white text-[#555A68] border-[#E2E8E5] hover:bg-[#F7F9F8]"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-xs font-bold shadow-md shadow-[#00B879]/25 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>Create Workspace Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#555A68] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00B879]" />
                <span>Zero setup fees • Instant access • Cancel anytime</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenGetStarted: () => void;
}

export const TourModal: React.FC<TourModalProps> = ({
  isOpen,
  onClose,
  onOpenGetStarted,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  const tourSteps = [
    {
      title: "1. Storefront & Website Builder",
      icon: Globe,
      color: "#00B879",
      tagline: "Code ka jhanjhat khatam",
      desc: "Drag and drop responsive blocks to launch your storefront or agency landing page in minutes. All inquiry forms sync directly with your CRM.",
      highlights: [
        "Pre-built business sections (Hero, Catalog, Pricing, Testimonials)",
        "Ultra-fast loading with zero code maintenance",
        "Custom domain with automatic SSL security",
      ],
    },
    {
      title: "2. Customer Relationship Management",
      icon: Users,
      color: "#008F60",
      tagline: "Follow-up bhoolna ab band",
      desc: "Connect your WhatsApp Business API, web forms, and advertising channels into one chronological timeline of client interactions.",
      highlights: [
        "Centralized contact profiles with complete conversation logs",
        "Lead scoring and intent qualification rules",
        "Automated follow-up reminders to assigned executives",
      ],
    },
    {
      title: "3. Kanban Sales Pipeline",
      icon: Kanban,
      color: "#00B879",
      tagline: "Har deal, har stage — sab saaf",
      desc: "Move opportunities through stages like New Leads, Contacted, Qualified, Proposal, and Won with clear revenue forecasting in INR.",
      highlights: [
        "Drag-and-drop deal management with deal probabilities",
        "Individual representative quota and conversion tracking",
        "Weighted monthly pipeline forecasting",
      ],
    },
    {
      title: "4. Workflow Automation Engine",
      icon: Zap,
      color: "#008F60",
      tagline: "Kaam smart, growth fast",
      desc: "Set intelligent triggers that automatically enrich leads, assign sales reps, and dispatch instant WhatsApp brochures without manual intervention.",
      highlights: [
        "Visual trigger and action canvas builder",
        "Instant round-robin assignment based on territory or team",
        "Zero-delay automated responses to potential buyers",
      ],
    },
  ];

  const current = tourSteps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E2E8E5] p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#555A68] hover:text-[#171923] rounded-full hover:bg-[#F7F9F8] transition-colors"
          aria-label="Close walkthrough"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#E8F8F1] text-[#008F60] text-xs font-bold uppercase tracking-wider border border-[#00B879]/20">
            <Play className="w-3 h-3 fill-[#00B879]" />
            <span>INTERACTIVE PLATFORM TOUR</span>
          </div>
          <h3 className="text-2xl font-bold text-[#171923]">
            How CODIIC Connects Your Entire Business
          </h3>
          <p className="text-xs text-[#555A68]">
            Four core capabilities working together in real-time.
          </p>
        </div>

        {/* Step Tabs */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {tourSteps.map((st, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`py-2 px-2 rounded-xl text-center text-xs font-bold transition-all border ${
                activeStep === i
                  ? "bg-[#171923] text-white border-[#171923] shadow-sm"
                  : "bg-[#F7F9F8] text-[#555A68] border-[#E2E8E5] hover:text-[#171923]"
              }`}
            >
              Step 0{i + 1}
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="bg-[#F7F9F8] border border-[#E2E8E5] rounded-2xl p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-xs"
                style={{ backgroundColor: "#E8F8F1", color: current.color }}
              >
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#171923]">
                  {current.title}
                </h4>
                <div className="text-xs font-semibold text-[#008F60]">
                  {current.tagline}
                </div>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-[#8A90A0]">
              {activeStep + 1} / 4
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#555A68] leading-relaxed">
            {current.desc}
          </p>

          <div className="space-y-2 pt-2 border-t border-[#E8EAF0]">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#171923]">
              Key Highlights:
            </div>
            {current.highlights.map((h, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#171923]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00B879] shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="px-4 py-2 rounded-full text-xs font-semibold border border-[#E2E8E5] text-[#555A68] hover:text-[#171923] disabled:opacity-40"
          >
            Previous
          </button>

          {activeStep < 3 ? (
            <button
              onClick={() => setActiveStep(activeStep + 1)}
              className="px-5 py-2.5 rounded-full bg-[#171923] hover:bg-[#00B879] text-white text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={() => {
                onClose();
                onOpenGetStarted();
              }}
              className="px-5 py-2.5 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-xs font-bold transition-all shadow-md shadow-[#00B879]/20 flex items-center gap-1.5"
            >
              <span>Explore CODIIC Platform Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
