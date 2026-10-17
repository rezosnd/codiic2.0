"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MainToolsSection } from "@/components/MainToolsSection";
import { ConnectedWorkspaceSection } from "@/components/ConnectedWorkspaceSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { IntegrationNetwork } from "@/components/IntegrationNetwork";
import { OlearisIndustrySection } from "@/components/OlearisIndustrySection";
import { TuyoReviewsSection } from "@/components/TuyoReviewsSection";
import { LogoStrip } from "@/components/LogoStrip";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { ChakorFooter } from "@/components/ChakorFooter";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { BottomBlurBar } from "@/components/BottomBlurBar";
import { FrostedEmeraldBackdrop } from "@/components/FrostedEmeraldBackdrop";

export default function Home() {
  const router = useRouter();
  const goToLogin = () => router.push("/login");

  return (
    <div className="relative isolate min-h-screen flex flex-col text-[#171923] selection:bg-[#00B879]/20 selection:text-[#008F60]">
      <FrostedEmeraldBackdrop />
      {/* 1. Header (TeaCode-inspired floating pill navigation) */}
      <Navbar onOpenGetStarted={goToLogin} onOpenSeeHowItWorks={goToLogin} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section (All your business. One connected platform.) */}
        <Hero onOpenGetStarted={goToLogin} onOpenSeeHowItWorks={goToLogin} />

        {/* 3. Main Product Tools (5 key tools in a compact overview) */}
        <MainToolsSection onOpenGetStarted={goToLogin} />

        {/* 4. Connected Workspace (Everything works together.) */}
        <ConnectedWorkspaceSection onOpenGetStarted={goToLogin} />

        {/* 5. Benefits bento (Less switching, Clearer sales, Smoother follow-ups) */}
        <BenefitsSection onOpenGetStarted={goToLogin} />

        {/* 6. Animated Integration Network (Your tools. Connected.) */}
        <IntegrationNetwork onOpenGetStarted={goToLogin} />

        {/* 7. Industry Showcase (Olearis-inspired 6 compact tiles) */}
        <OlearisIndustrySection onOpenGetStarted={goToLogin} />

        {/* 7. Customer Reviews & Playbooks (Tuyo-inspired large flowing review cards) */}
        <TuyoReviewsSection />

        {/* 8. Customer / Integration Logo Strip (Understated slim monochrome logo strip) */}
        <LogoStrip />

        {/* 9. Final CTA (Ready to bring your business together?) */}
        <FinalCtaSection onOpenGetStarted={goToLogin} onOpenSeeHowItWorks={goToLogin} />
      </main>

      {/* 10. Premium Dark Footer (The Chakor-inspired #171923 organization) */}
      <ChakorFooter onOpenGetStarted={goToLogin} />

      {/* 11. WhatsApp Floating Contact Button (Only active when real number is configured) */}
      <WhatsAppFloatingButton onOpenContact={goToLogin} />

      {/* 12. Tuyo.com Progressive Bottom Edge Blur Bar (dissolves at footer) */}
      <BottomBlurBar />
    </div>
  );
}
