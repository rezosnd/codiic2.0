"use client";

import React, { useId } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * SectionFlow — recurring CODIIC transition visual.
 * Thin organic mint curves that draw themselves as they enter the viewport,
 * with a few particles drifting along the paths (pure SMIL — zero JS cost).
 * Transparent background, blends across section seams, no filters or heavy
 * blur. Each variant bends differently so transitions never feel stamped.
 */

export type SectionFlowVariant = "a" | "b" | "c" | "d";

interface FlowPath {
  d: string;
  /** stroke opacity of the main line */
  opacity: number;
  /** particle duration (s); 0 = no particle */
  dur: number;
}

const VARIANTS: Record<SectionFlowVariant, FlowPath[]> = {
  a: [
    { d: "M-30,118 C220,26 420,150 720,86 C1020,22 1240,128 1470,62", opacity: 0.55, dur: 9 },
    { d: "M-30,140 C260,74 520,160 780,110 C1040,60 1240,150 1470,96", opacity: 0.28, dur: 13 },
    { d: "M-30,88 C200,140 480,40 760,96 C1040,152 1260,52 1470,116", opacity: 0.2, dur: 0 },
  ],
  b: [
    { d: "M-30,60 C240,148 460,20 740,92 C1020,164 1240,48 1470,120", opacity: 0.55, dur: 10 },
    { d: "M-30,110 C280,40 540,150 800,80 C1060,10 1260,120 1470,70", opacity: 0.28, dur: 14 },
    { d: "M-30,142 C220,96 500,178 780,128 C1060,78 1260,160 1470,110", opacity: 0.18, dur: 0 },
  ],
  c: [
    { d: "M-30,96 C200,96 380,30 680,78 C980,126 1160,160 1470,84", opacity: 0.55, dur: 8.5 },
    { d: "M-30,70 C260,120 500,170 760,120 C1020,70 1220,20 1470,60", opacity: 0.26, dur: 12 },
    { d: "M-30,130 C240,150 520,60 800,104 C1080,148 1280,90 1470,132", opacity: 0.2, dur: 0 },
  ],
  d: [
    { d: "M-30,80 C180,140 460,110 720,64 C980,18 1240,120 1470,88", opacity: 0.55, dur: 9.5 },
    { d: "M-30,120 C260,60 520,160 800,116 C1080,72 1260,150 1470,104", opacity: 0.28, dur: 13.5 },
    { d: "M-30,50 C220,80 480,20 780,68 C1080,116 1280,40 1470,74", opacity: 0.18, dur: 0 },
  ],
};

interface SectionFlowProps {
  variant?: SectionFlowVariant;
  /** mirror the curves horizontally */
  flip?: boolean;
  /** accent color for strokes/particles */
  color?: string;
  /** renders in light-on-dark mode (brighter strokes) */
  dark?: boolean;
  className?: string;
}

export function SectionFlow({
  variant = "a",
  flip = false,
  color = "#36D6A6",
  dark = false,
  className = "",
}: SectionFlowProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const reducedMotion = useReducedMotion();
  const paths = VARIANTS[variant];
  const gradId = `sf-grad-${id}`;

  return (
    <div
      aria-hidden
      className={`pointer-events-none relative w-full overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className={`block w-full h-full ${flip ? "-scale-x-100" : ""}`}
        fill="none"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0" />
            <stop offset="18%" stopColor={color} stopOpacity="0.9" />
            <stop offset="55%" stopColor={dark ? "#9AE6C5" : "#008F68"} stopOpacity="1" />
            <stop offset="82%" stopColor={color} stopOpacity="0.9" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {paths.map((p, i) => {
          const pathId = `sf-${id}-p${i}`;
          return (
            <React.Fragment key={pathId}>
              {/* Wide soft under-stroke for a subtle glow */}
              <motion.path
                id={`${pathId}-glow`}
                d={p.d}
                stroke={`url(#${gradId})`}
                strokeWidth="5"
                opacity={p.opacity * 0.3}
                strokeLinecap="round"
                initial={reducedMotion ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 1.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                id={pathId}
                d={p.d}
                stroke={`url(#${gradId})`}
                strokeWidth="1.4"
                opacity={p.opacity}
                strokeLinecap="round"
                initial={reducedMotion ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 1.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Particle drifting along the curve (SMIL — free) */}
              {!reducedMotion && p.dur > 0 && (
                <circle r="2.6" fill={dark ? "#DDF4E9" : color} opacity="0.85">
                  <animateMotion
                    dur={`${p.dur}s`}
                    repeatCount="indefinite"
                    begin={`${i * 2.2}s`}
                  >
                    <mpath href={`#${pathId}`} />
                  </animateMotion>
                </circle>
              )}
            </React.Fragment>
          );
        })}
      </svg>
    </div>
  );
}
