"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenGetStarted: () => void;
  onOpenSeeHowItWorks: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenGetStarted,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-300">
      {/* Floating Pill/Capsule Navbar Container */}
      <div
        className={`w-full rounded-full transition-all duration-300 border border-[#E2E6E4] ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 py-2.5 px-4 sm:px-6"
            : "bg-white/90 backdrop-blur-sm shadow-md shadow-black/[0.03] py-3 px-5 sm:px-7"
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Left: Official CODIIC Logo */}
          <a
            href="#"
            className="flex items-center gap-2 focus:outline-none shrink-0 group"
            aria-label="CODIIC Homepage"
          >
            {/* Desktop: Full Logo with Text */}
            <div className="hidden sm:block relative h-9 w-36">
              <Image
                src="/logo_with_text.png"
                alt="CODIIC All-in-One Business Platform"
                fill
                priority
                className="object-contain object-left transition-transform duration-200 group-hover:scale-105"
              />
            </div>

            {/* Mobile: Symbol-Only Logo */}
            <div className="block sm:hidden relative h-8 w-10">
              <Image
                src="/logo_withot text.png"
                alt="CODIIC Symbol"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Center: Clean, Small Set of Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-semibold text-[#171923]">
            <a
              href="#tools"
              className="hover:text-[#00B879] transition-colors py-1.5"
            >
              Platform
            </a>
            <a
              href="#integrations"
              className="hover:text-[#00B879] transition-colors py-1.5"
            >
              Integrations
            </a>
            <a
              href="#solutions"
              className="hover:text-[#00B879] transition-colors py-1.5"
            >
              Solutions
            </a>
            <a
              href="#reviews"
              className="hover:text-[#00B879] transition-colors py-1.5"
            >
              Reviews
            </a>
          </nav>

          {/* Right: Primary Green CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenGetStarted}
              id="header-cta-button"
              className="px-6 py-2.5 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#00B879]/20 hover:shadow-lg transition-all duration-200 flex items-center gap-1.5 active:scale-95"
            >
              <span>Get started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[#171923] hover:bg-[#F7F9F8] border border-[#E2E6E4]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Clean and Uncluttered) */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white rounded-3xl border border-[#E2E6E4] p-5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="space-y-3">
            <a
              href="#tools"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-2xl text-sm font-bold text-[#171923] hover:bg-[#E8F8F1] hover:text-[#008F60] transition-colors"
            >
              Platform
            </a>
            <a
              href="#integrations"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-2xl text-sm font-bold text-[#171923] hover:bg-[#E8F8F1] hover:text-[#008F60] transition-colors"
            >
              Integrations
            </a>
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-2xl text-sm font-bold text-[#171923] hover:bg-[#E8F8F1] hover:text-[#008F60] transition-colors"
            >
              Solutions
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-2xl text-sm font-bold text-[#171923] hover:bg-[#E8F8F1] hover:text-[#008F60] transition-colors"
            >
              Reviews
            </a>
            <div className="pt-2 border-t border-[#E8EAF0]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGetStarted();
                }}
                className="w-full py-3 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-xs font-bold shadow-md shadow-[#00B879]/20 flex items-center justify-center gap-2"
              >
                <span>Get started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
