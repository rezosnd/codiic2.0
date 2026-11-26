"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MainToolsSection } from "@/components/MainToolsSection";
import { ConnectedWorkspaceSection } from "@/components/ConnectedWorkspaceSection";
import { AppsComparisonSection } from "@/components/AppsComparisonSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { IntegrationNetwork } from "@/components/IntegrationNetwork";
import { OlearisIndustrySection } from "@/components/OlearisIndustrySection";
import { TuyoReviewsSection } from "@/components/TuyoReviewsSection";
import { LogoStrip } from "@/components/LogoStrip";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { ChakorFooter } from "@/components/ChakorFooter";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { BottomBlurBar } from "@/components/BottomBlurBar";
import { FrostedEmeraldBackdrop } from "@/components/FrostedEmeraldBackdrop";
import { Skiper31 } from "@/components/ui/text-scroll-animation";

export default function Home() {
  const router = useRouter();
  const goToLogin = () => router.push("/login");

  return (
    <div className="relative isolate min-h-screen flex flex-col text-[#111827] selection:bg-[#064E3B]/20 selection:text-[#043B2C]">
      <FrostedEmeraldBackdrop />
      {/* 1. Header (TeaCode-inspired floating pill navigation) */}
      <Navbar onOpenGetStarted={goToLogin} onOpenSeeHowItWorks={goToLogin} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section (All your business. One connected platform.) */}
        <Hero onOpenGetStarted={goToLogin} onOpenSeeHowItWorks={goToLogin} />

        {/* 2b. Skiper31 scroll-scrubbed word reveal (Why CODIIC works) */}
        <Skiper31 onOpenGetStarted={goToLogin} />

        {/* 3. Main Product Tools (Platform intelligence) */}
        <MainToolsSection onOpenGetStarted={goToLogin} />

        {/* 4. Connected Workspace (Everything works together.) */}
        <ConnectedWorkspaceSection onOpenGetStarted={goToLogin} />

        {/* 5. Apps Comparison (Imagine without CODIIC — Odoo-style toggle grid) */}
        <AppsComparisonSection onOpenGetStarted={goToLogin} />

        {/* 7. Benefits bento (Less switching, Clearer sales, Smoother follow-ups) */}
        <BenefitsSection onOpenGetStarted={goToLogin} />

        {/* 8. Animated Integration Network (Your tools. Connected.) */}
        <IntegrationNetwork onOpenGetStarted={goToLogin} />

        {/* 9. Industry Showcase (Olearis-inspired 6 compact tiles) */}
        <OlearisIndustrySection onOpenGetStarted={goToLogin} />

        {/* 10. Customer Reviews & Playbooks (Tuyo-inspired large flowing review cards) */}
        <TuyoReviewsSection />

        {/* 12. Customer / Integration Logo Strip (Understated slim monochrome logo strip) */}
        <LogoStrip />

        {/* 13. Objection-Handling FAQ (Clean accordion) */}
        <FaqSection />

        {/* 14. Final CTA (One Platform. Your Entire Business.) */}
        <FinalCtaSection onOpenGetStarted={goToLogin} onOpenSeeHowItWorks={goToLogin} />
      </main>

      {/* 13. Premium Dark Footer (The Chakor-inspired #111827 organization) */}
      <ChakorFooter onOpenGetStarted={goToLogin} />

      {/* 14. WhatsApp Floating Contact Button */}
      <WhatsAppFloatingButton onOpenContact={goToLogin} />

      {/* 15. Apple-grade Glassmorphic Dock & Bottom Ambient Blur */}
      <BottomBlurBar />
    </div>
  );
}
