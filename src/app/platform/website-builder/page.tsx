"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { WebsiteStudioSections } from "@/components/WebsiteStudioSections";

export default function WebsiteBuilderPage() {
  const router = useRouter();
  const goToLogin = () => router.push("/login");

  return (
    <PageShell>
      <WebsiteStudioSections
        onOpenGetStarted={goToLogin}
        onOpenSeeHowItWorks={goToLogin}
      />
    </PageShell>
  );
}
