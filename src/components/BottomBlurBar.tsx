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
      className={`fixed bottom-0 left-0 right-0 w-full h-[12vh] min-h-[70px] max-h-[110px] pointer-events-none z-30 select-none overflow-hidden transition-opacity duration-300 ease-out print:hidden ${
        isNearFooter ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* High-Performance Hardware-Accelerated Single Edge Blur Layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: "blur(14px) saturate(160%)",
          WebkitBackdropFilter: "blur(14px) saturate(160%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,1) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,1) 100%)",
          background:
            "linear-gradient(to bottom, rgba(228,243,236,0) 0%, rgba(228,243,236,0.3) 45%, rgba(228,243,236,0.65) 100%)",
        }}
      />
    </div>
  );
};
