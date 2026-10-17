"use client";

import React, { useState } from "react";
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
import { GetStartedModal, TourModal } from "@/components/Modals";

export default function Home() {
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#171923] selection:bg-[#00B879]/20 selection:text-[#008F60]">
      {/* 1. Header (TeaCode-inspired floating pill navigation) */}
      <Navbar
        onOpenGetStarted={() => setGetStartedOpen(true)}
        onOpenSeeHowItWorks={() => setTourOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section (All your business. One connected platform.) */}
        <Hero
          onOpenGetStarted={() => setGetStartedOpen(true)}
          onOpenSeeHowItWorks={() => setTourOpen(true)}
        />

        {/* 3. Main Product Tools (5 key tools in a compact overview) */}
        <MainToolsSection
          onOpenGetStarted={() => setGetStartedOpen(true)}
        />

        {/* 4. Connected Workspace (Everything works together.) */}
        <ConnectedWorkspaceSection
          onOpenGetStarted={() => setGetStartedOpen(true)}
        />

        {/* 5. Three Concise Benefits (Less switching, Clearer sales, Smoother follow-ups) */}
        <BenefitsSection />

        {/* 6. Animated Integration Network (Your tools. Connected.) */}
        <IntegrationNetwork
          onOpenGetStarted={() => setGetStartedOpen(true)}
        />

        {/* 7. Industry Showcase (Olearis-inspired 6 compact tiles) */}
        <OlearisIndustrySection
          onOpenGetStarted={() => setGetStartedOpen(true)}
        />

        {/* 7. Customer Reviews & Playbooks (Tuyo-inspired large flowing review cards) */}
        <TuyoReviewsSection />

        {/* 8. Customer / Integration Logo Strip (Understated slim monochrome logo strip) */}
        <LogoStrip />

        {/* 9. Final CTA (Ready to bring your business together?) */}
        <FinalCtaSection
          onOpenGetStarted={() => setGetStartedOpen(true)}
          onOpenSeeHowItWorks={() => setTourOpen(true)}
        />
      </main>

      {/* 10. Premium Dark Footer (The Chakor-inspired #171923 organization) */}
      <ChakorFooter
        onOpenGetStarted={() => setGetStartedOpen(true)}
      />

      {/* 11. WhatsApp Floating Contact Button (Only active when real number is configured) */}
      <WhatsAppFloatingButton
        onOpenContact={() => setGetStartedOpen(true)}
      />

      {/* 12. Tuyo.com Progressive Bottom Edge Blur Bar (dissolves at footer) */}
      <BottomBlurBar />

      {/* 13. Interactive Modals */}
      <GetStartedModal
        isOpen={getStartedOpen}
        onClose={() => setGetStartedOpen(false)}
      />

      <TourModal
        isOpen={tourOpen}
        onClose={() => setTourOpen(false)}
        onOpenGetStarted={() => setGetStartedOpen(true)}
      />
    </div>
  );
}
