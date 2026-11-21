"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "./Navbar";
import { ChakorFooter } from "./ChakorFooter";
import { WhatsAppFloatingButton } from "./WhatsAppFloatingButton";
import { BottomBlurBar } from "./BottomBlurBar";
import { FrostedEmeraldBackdrop } from "./FrostedEmeraldBackdrop";

/**
 * Shared page chrome for all sub-pages: floating navbar (anchored back to home),
 * emerald backdrop, dark footer, WhatsApp button and bottom blur bar.
 */
export const PageShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const goToLogin = () => router.push("/login");

  return (
    <div className="relative isolate min-h-screen flex flex-col text-[#171923] selection:bg-[#00B879]/20 selection:text-[#008F60]">
      <FrostedEmeraldBackdrop />
      <Navbar onOpenGetStarted={goToLogin} onOpenSeeHowItWorks={goToLogin} linkPrefix="/" />
      <main className="flex-1">{children}</main>
      <ChakorFooter onOpenGetStarted={goToLogin} />
      <WhatsAppFloatingButton onOpenContact={goToLogin} />
      <BottomBlurBar />
    </div>
  );
};
