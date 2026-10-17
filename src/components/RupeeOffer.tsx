import React from "react";

interface RupeeOfferPillProps {
  className?: string;
  dark?: boolean;
  label?: string;
}

export const RupeeOfferPill: React.FC<RupeeOfferPillProps> = ({
  className = "",
  dark = false,
  label = "Start with just ₹1 per day",
}) => (
  <span
    className={`relative inline-flex items-center gap-2 pl-1 pr-3.5 py-1 rounded-full overflow-hidden backdrop-blur-md text-xs sm:text-[13px] font-semibold ${
      dark
        ? "bg-white/10 ring-1 ring-white/20 text-white"
        : "bg-white/70 ring-1 ring-[#00B879]/25 text-[#00593A] shadow-[0_10px_30px_-12px_rgba(0,143,96,0.5)]"
    } ${className}`}
  >
    <span className="relative flex items-center justify-center h-6 px-2 rounded-full bg-gradient-to-br from-[#FFD66B] via-[#F5B82E] to-[#D99A0B] text-[#3D2A00] text-[11px] font-extrabold shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_2px_6px_rgba(217,154,11,0.45)]">
      ₹1
    </span>
    <span>{label}</span>
    <span
      aria-hidden
      className="absolute inset-y-0 -left-1/3 w-1/4 rotate-12 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-glass-sheen"
    />
  </span>
);
