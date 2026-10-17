import React from "react";

const GLASS =
  "backdrop-blur-md backdrop-saturate-150 border border-white/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),inset_0_-12px_24px_rgba(0,184,121,0.14),0_24px_48px_-18px_rgba(0,90,60,0.4)]";

/** Specular highlight + sweeping sheen that make a shape read as glass. */
const Reflection: React.FC<{ round?: boolean }> = ({ round }) => (
  <>
    <span
      className={`absolute top-[10%] left-[14%] w-[45%] h-[22%] bg-white/75 blur-[3px] ${
        round ? "rounded-full" : "rounded-[40%]"
      }`}
    />
    <span className="absolute inset-0 overflow-hidden rounded-[inherit]">
      <span className="absolute -inset-y-4 -left-1/2 w-1/3 rotate-[20deg] bg-gradient-to-r from-transparent via-white/60 to-transparent animate-glass-sheen" />
    </span>
  </>
);

export const HeroGlassShapes: React.FC = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
    {/* Large emerald pill, left of the headline */}
    <div className="absolute top-[6%] -left-[6%] sm:left-[2%] lg:left-[6%] animate-glass-float">
      <div
        className={`relative w-32 h-14 sm:w-56 sm:h-24 rounded-full -rotate-[18deg] bg-gradient-to-br from-[#00B879]/35 via-white/30 to-white/10 ${GLASS}`}
      >
        <Reflection round />
      </div>
    </div>

    {/* Glass ring, top right */}
    <div className="absolute -top-[4%] -right-[8%] sm:right-[3%] lg:right-[8%] animate-glass-float-slow">
      <div className="relative w-28 h-28 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-white/70 via-[#5EF0B8]/30 to-[#00B879]/20 border border-white/70 shadow-[0_24px_48px_-18px_rgba(0,90,60,0.45)] backdrop-blur-sm [mask:radial-gradient(farthest-side,transparent_58%,black_60%)]">
        <span className="absolute top-[8%] left-[22%] w-[38%] h-[14%] rounded-full bg-white/90 blur-[2px]" />
      </div>
    </div>

    {/* Tilted glass tile, right of the subtitle */}
    <div className="hidden sm:block absolute top-[52%] right-[1%] lg:right-[10%] animate-glass-float">
      <div className={`relative w-24 h-24 lg:w-28 lg:h-28 rounded-[28px] rotate-[24deg] bg-gradient-to-br from-white/55 to-[#2DD4BF]/15 ${GLASS}`}>
        <Reflection />
      </div>
    </div>

    {/* Small glass orb, left of the subtitle */}
    <div className="absolute top-[58%] left-[2%] lg:left-[12%] animate-glass-float-slow">
      <div className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),rgba(94,240,184,0.35)_45%,rgba(0,184,121,0.25)_100%)] ${GLASS}`}>
        <Reflection round />
      </div>
    </div>

    {/* Faceted shard, above the headline */}
    <div className="hidden md:block absolute top-[-2%] left-[34%] animate-glass-float-slow">
      <div className="relative w-16 h-16 rotate-12 bg-gradient-to-br from-white/80 via-[#5EF0B8]/35 to-[#00B879]/25 backdrop-blur-sm [clip-path:polygon(50%_0,100%_38%,78%_100%,18%_88%,0_30%)] shadow-[0_20px_40px_-12px_rgba(0,90,60,0.4)]">
        <span className="absolute top-[12%] left-[30%] w-[30%] h-[22%] bg-white/90 blur-[1px] [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
      </div>
    </div>
  </div>
);
