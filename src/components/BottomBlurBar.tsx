"use client";

import React, { useState, useEffect } from "react";

export const BottomBlurBar: React.FC = () => {
  // Hide blur when reaching the footer so footer text and controls are 100% crisp
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer") || document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearFooter(entry.isIntersecting);
      },
      {
        threshold: 0.04,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 w-full h-[14vh] min-h-[75px] max-h-[125px] pointer-events-none z-30 select-none overflow-hidden transition-opacity duration-300 ease-out print:hidden ${
        isNearFooter ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* ── Apple-Grade Optical Glassmorphism Progressive Edge Blur (NO white blur, pure refraction) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: "blur(24px) saturate(190%) contrast(102%)",
          WebkitBackdropFilter: "blur(24px) saturate(190%) contrast(102%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0.65) 65%, rgba(0,0,0,1) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0.65) 65%, rgba(0,0,0,1) 100%)",
          background:
            "linear-gradient(to bottom, rgba(15,23,42,0) 0%, rgba(15,23,42,0.05) 50%, rgba(15,23,42,0.14) 100%)",
        }}
      />
    </div>
  );
};
