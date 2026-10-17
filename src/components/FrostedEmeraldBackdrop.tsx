import React from "react";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

export const FrostedEmeraldBackdrop: React.FC = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#E4F3EC]">
    <div className="absolute inset-0 bg-[linear-gradient(160deg,#EEF9F4_0%,#DDF1E8_45%,#E8F6F0_100%)]" />

    <div className="absolute -top-[18%] -left-[12%] w-[60vw] h-[60vw] max-w-[820px] max-h-[820px] rounded-full bg-[#00B879]/25 blur-[120px] animate-emerald-drift" />
    <div className="absolute top-[30%] -right-[15%] w-[55vw] h-[55vw] max-w-[760px] max-h-[760px] rounded-full bg-[#2DD4BF]/20 blur-[130px] animate-emerald-drift-slow" />
    <div className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-[#86EFAC]/25 blur-[120px] animate-emerald-drift" />

    {/* Frosted pane: milky haze, grain and a diagonal reflection */}
    <div className="absolute inset-0 bg-white/35" />
    <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply" style={{ backgroundImage: NOISE }} />
    <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.45)_45%,transparent_60%)]" />
  </div>
);
