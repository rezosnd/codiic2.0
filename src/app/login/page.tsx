"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, Lock, Mail } from "lucide-react";

const PERKS = [
  "Website, CRM, pipeline & automation in one login",
  "WhatsApp and UPI built in",
  "Cancel anytime — no lock-in",
];

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#F4F8F6] text-[#171923]">
      {/* Form */}
      <div className="flex flex-col px-5 sm:px-10 lg:px-16 py-6 sm:py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative h-8 w-32" aria-label="CODIIC home">
            <Image src="/logo_with_text.png" alt="CODIIC" fill priority sizes="128px" className="object-contain object-left" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5A6270] hover:text-[#171923] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to site
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center py-10">
          <div className="w-full max-w-[400px]">
            <h1 className="text-3xl sm:text-[34px] font-bold tracking-[-0.03em] leading-tight">
              {mode === "signup" ? "Start at ₹1/day" : "Welcome back"}
            </h1>
            <p className="mt-2 text-[15px] text-[#5A6270]">
              {mode === "signup"
                ? "Create your CODIIC workspace in under 2 minutes."
                : "Log in to your CODIIC workspace."}
            </p>

            <div className="mt-7 grid grid-cols-2 p-1 rounded-full bg-[#E3ECE8]">
              {(["signup", "login"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                    mode === m ? "bg-white text-[#171923] shadow-sm" : "text-[#5A6270] hover:text-[#171923]"
                  }`}
                >
                  {m === "signup" ? "Sign up" : "Log in"}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="mt-6 w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white border border-[#DCE3DF] hover:border-[#B9C4BE] text-sm font-semibold transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
                <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.7-2.4 3.5v2.9h3.9c2.2-2.1 3.5-5.1 3.5-8.6z" />
                <path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.9-2.9c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3C3.4 21.4 7.4 24 12 24z" />
                <path fill="#FBBC05" d="M5.4 14.5c-.2-.7-.4-1.5-.4-2.3s.1-1.6.4-2.3v-3H1.4C.5 8.6 0 10.3 0 12.2s.5 3.6 1.4 5.3l4-3z" />
                <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0 7.4 0 3.4 2.6 1.4 6.6l4 3c.9-2.7 3.5-4.8 6.6-4.8z" />
              </svg>
              Continue with Google
            </button>

            <div className="my-6 flex items-center gap-3 text-xs text-[#8A919C]">
              <span className="h-px flex-1 bg-[#DCE3DF]" />
              or with email
              <span className="h-px flex-1 bg-[#DCE3DF]" />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {mode === "signup" && (
                <label className="block">
                  <span className="text-sm font-semibold">Business name</span>
                  <input
                    type="text"
                    required
                    placeholder="Sharma Traders"
                    className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white border border-[#DCE3DF] focus:border-[#00B879] focus:ring-4 focus:ring-[#00B879]/15 outline-none text-[15px] transition"
                  />
                </label>
              )}
              <label className="block">
                <span className="text-sm font-semibold">Email</span>
                <span className="relative mt-1.5 block">
                  <Mail className="w-4 h-4 text-[#8A919C] absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.in"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-[#DCE3DF] focus:border-[#00B879] focus:ring-4 focus:ring-[#00B879]/15 outline-none text-[15px] transition"
                  />
                </span>
              </label>
              <label className="block">
                <span className="flex items-center justify-between text-sm font-semibold">
                  Password
                  {mode === "login" && (
                    <a href="#" className="text-xs font-semibold text-[#008F60] hover:underline">
                      Forgot password?
                    </a>
                  )}
                </span>
                <span className="relative mt-1.5 block">
                  <Lock className="w-4 h-4 text-[#8A919C] absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={8}
                    autoComplete={mode === "login" ? "current-password" : "new-password"}
                    placeholder="At least 8 characters"
                    className="w-full pl-11 pr-12 py-3 rounded-xl bg-white border border-[#DCE3DF] focus:border-[#00B879] focus:ring-4 focus:ring-[#00B879]/15 outline-none text-[15px] transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-[#8A919C] hover:text-[#171923] cursor-pointer"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </span>
              </label>

              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#00B879] hover:bg-[#008F60] text-white text-[15px] font-bold shadow-[0_12px_28px_-12px_rgba(0,143,96,0.7)] transition-colors active:scale-[0.99] cursor-pointer"
              >
                {mode === "signup" ? "Create workspace" : "Log in"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-[#8A919C]">
              By continuing you agree to CODIIC&apos;s Terms and Privacy Policy.
            </p>
          </div>
        </div>
      </div>

      {/* Brand panel */}
      <aside className="hidden lg:flex relative overflow-hidden m-3 rounded-[28px] bg-[#00A06A] text-white p-12 flex-col">
        <span className="self-start inline-flex items-center gap-2 pl-1 pr-3.5 py-1 rounded-full bg-white/15 text-sm font-semibold">
          <span className="h-6 px-2 rounded-full bg-[#FFD84D] text-[#1F1A05] text-xs font-extrabold flex items-center">₹1</span>
          per day, all tools included
        </span>
        <h2 className="mt-8 text-5xl font-bold tracking-[-0.035em] leading-[1.05] max-w-md">
          All your business.{" "}
          <em className="font-serif italic font-normal">One platform.</em>
        </h2>
        <ul className="mt-8 space-y-3">
          {PERKS.map((p) => (
            <li key={p} className="flex items-center gap-3 text-[15px] text-white/90">
              <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
              </span>
              {p}
            </li>
          ))}
        </ul>

        <figure className="mt-auto rounded-2xl bg-[#111A16] p-6">
          <blockquote className="text-[15px] leading-relaxed text-white/85">
            “We replaced three disconnected tools in less than a week. Inquiries now land straight in our
            CRM and on WhatsApp.”
          </blockquote>
          <figcaption className="mt-4 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#0EA5E9] flex items-center justify-center text-sm font-bold">RM</span>
            <span>
              <span className="block text-sm font-semibold">Rohan Mehta</span>
              <span className="block text-xs text-white/50">Co-Founder, Apex Logistics</span>
            </span>
          </figcaption>
        </figure>
      </aside>
    </div>
  );
}
