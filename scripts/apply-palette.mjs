// One-off: migrate old teal/mint palette -> final CODiC palette
// Warm Ivory #F7F7F2 | Deep Emerald #064E3B | Charcoal #111827
// Soft Sage #E8F0E9 | Muted Gold #C6A15B | Pure White #FFFFFF
import { readdirSync, readFileSync, writeFileSync, statSync } from "fs";
import { join } from "path";

const HEX_MAP = {
  // ── Brand greens → deep emerald scale ──────────────────────────
  "#00b879": "#064E3B", // primary bright green → Deep Emerald
  "#008f60": "#043B2C", // darker green (hovers, gradient depth)
  "#14b8a6": "#064E3B", // teal accent → Deep Emerald
  "#0d5c4d": "#065F46",
  "#085433": "#043B2C",
  "#08483c": "#064E3B",
  "#00593a": "#043B2C",
  "#008851": "#0A5C44",
  "#00a06a": "#0E7A5C",
  "#097939": "#0A5C44",
  "#059669": "#0E7A5C",
  "#047857": "#065F46",
  "#10b981": "#0E7A5C",
  "#15803d": "#0A5C44",
  "#20bd5a": "#0E7A5C",
  "#1aab29": "#0E7A5C",
  "#00d08a": "#0E7A5C",
  "#00e08f": "#0E7A5C",
  "#2dd4bf": "#0E7A5C",
  "#5eead4": "#34D399",
  "#5ef0b8": "#34D399",
  "#4ade80": "#34D399",
  "#86efac": "#6EE7B7",
  "#a7f3d0": "#D7E7DC",
  "#c6f3e4": "#D7E7DC",

  // ── Charcoal / text grays → #111827 family ─────────────────────
  "#171923": "#111827",
  "#0f172a": "#111827",
  "#1f2937": "#1F2937",
  "#2d3748": "#374151",
  "#2d3340": "#1F2937",
  "#2a303c": "#1F2937",
  "#232f3e": "#1F2937",
  "#5a6270": "#4B5563",
  "#555a68": "#4B5563",
  "#4a5160": "#4B5563",
  "#4a5260": "#4B5563",
  "#8a919c": "#6B7280",
  "#8a90a0": "#6B7280",
  "#8a939f": "#6B7280",
  "#b4bbc4": "#9CA3AF",
  "#b9c4be": "#9CA3AF",
  "#9aa7a0": "#9CA3AF",

  // ── Dark green/blue-black sections → charcoal ──────────────────
  "#0b1310": "#0B1120",
  "#04120c": "#0B1120",
  "#030806": "#0B1120",
  "#0f2027": "#0B1120",
  "#0c2340": "#0B1120",
  "#072654": "#0B1120",
  "#111a16": "#1F2937",
  "#1d2924": "#1F2937",
  "#1e3b2f": "#1F2937",
  "#0f2a3d": "#1F2937",
  "#1e3447": "#1F2937",
  "#1d3b4f": "#1F2937",
  "#2c5364": "#1F2937",
  "#203a43": "#1F2937",
  "#355368": "#374151",
  "#3b5466": "#374151",
  "#134e5e": "#064E3B",

  // ── Mint / near-white backgrounds → sage + warm ivory ──────────
  "#e5f8f1": "#E8F0E9", // light mint chips/sections → Soft Sage
  "#e8f8f1": "#E8F0E9", // mint sections → Soft Sage
  "#e8fbf1": "#E8F0E9",
  "#e8f6f0": "#E8F0E9",
  "#e4f3ec": "#E8F0E9",
  "#ddf1e8": "#E8F0E9",
  "#dceee5": "#E8F0E9",
  "#d9eee3": "#D5DCCF",
  "#f0faf5": "#EFF3EA",
  "#eef9f4": "#EFF3EA",
  "#f4fbf7": "#EFF3EA",
  "#f0f4f2": "#EFF3EA",
  "#f4f8f6": "#EFF3EA",
  "#f4f7f5": "#EFF3EA",
  "#f6f9ee": "#EFF3EA",
  "#f7f9f8": "#F7F7F2", // near-white → Warm Ivory
  "#f7faf9": "#F7F7F2",
  "#f7fcfa": "#F7F7F2",
  "#fafbfa": "#F7F7F2",
  "#fafcfa": "#F7F7F2",
  "#f9fbf9": "#F7F7F2",
  "#f8fafc": "#F7F7F2",
  "#f1f3f2": "#E8F0E9",
  "#f3f5f4": "#E8F0E9",
  "#f4f6f5": "#E8F0E9",
  "#f0f2f5": "#E8F0E9",
  "#eef0ee": "#E8F0E9",
  "#eef1ef": "#E8F0E9",
  "#eef2ef": "#E8F0E9",
  "#eef1f4": "#E8F0E9",
  "#eaeded": "#E8F0E9",
  "#e2eae5": "#E8F0E9",

  // ── Borders → warm sage-gray ───────────────────────────────────
  "#e8eaf0": "#E4E7DD",
  "#e2e6e4": "#DFE4DB",
  "#e2e8e5": "#DFE4DB",
  "#e4e7eb": "#DFE4DB",
  "#e4e8ec": "#DFE4DB",
  "#e5ece7": "#DFE4DB",
  "#e3ece8": "#DFE4DB",
  "#e3e8e5": "#DFE4DB",
  "#dce3df": "#D5DCCF",
  "#dce4df": "#D5DCCF",
  "#dce9e4": "#D5DCCF",
  "#d9dedc": "#D5DCCF",
  "#d9ded8": "#D5DCCF",
  "#d1d5db": "#C9CFC0",
  "#cbd2d9": "#C9CFC0",
  "#cbd5e1": "#C9CFC0",
  "#c9d0cc": "#C9CFC0",

  // ── Gold / amber → Muted Gold ramp ─────────────────────────────
  "#ffd84d": "#C6A15B", // bright yellow badge → Muted Gold
  "#ffd66b": "#C6A15B",
  "#fcd34d": "#C6A15B",
  "#fbbf24": "#C6A15B",
  "#f5b82e": "#C6A15B",
  "#f8b133": "#C6A15B",
  "#d99a0b": "#A87F3D",
  "#f59e0b": "#A87F3D",
  "#d97706": "#A87F3D",
  "#dea123": "#A87F3D",
  "#b07807": "#8F6E2D",
  "#b45309": "#8F6E2D",
  "#7a5b0b": "#6E5621",
  "#fff6e4": "#F5EFDF",
  "#fff9e6": "#F5EFDF",
  "#fef3c7": "#F5EFDF",
  "#fff7e0": "#F5EFDF",
  "#fff3d6": "#F5EFDF",
  "#f5eedb": "#F5EFDF",
  "#fcebc2": "#F0E6CD",
  "#f7e4b0": "#EDE0C0",
  "#f5d78e": "#E8D6AC",
  "#2d260d": "#3B2E12", // dark text on gold
  "#3d2a00": "#3B2E12",
  "#1f1a05": "#3B2E12",
  "#493128": "#3B2E12",
  "#483b20": "#3B2E12",
  "#4a401a": "#3B2E12",
  "#4a3f0a": "#3B2E12",
};

// rgb()/rgba() equivalents of mapped hexes
const RGB_MAP = [
  [0, 184, 121, "6,78,59"],     // #00B879 → #064E3B
  [0, 143, 96, "4,59,44"],      // #008F60 → #043B2C
  [20, 184, 166, "6,78,59"],    // #14B8A6 → #064E3B
  [13, 92, 77, "6,95,70"],      // #0D5C4D → #065F46
  [23, 25, 35, "17,24,39"],     // #171923 → #111827
  [15, 23, 42, "17,24,39"],     // #0F172A → #111827
  [15, 42, 61, "17,24,39"],
  [14, 60, 90, "17,24,39"],
  [232, 248, 241, "232,240,233"], // #E8F8F1 → #E8F0E9
  [229, 248, 241, "232,240,233"], // #E5F8F1 → #E8F0E9
  [215, 242, 230, "232,240,233"],
  [198, 243, 228, "215,231,220"], // #C6F3E4 → #D7E7DC
  [247, 250, 249, "247,247,242"],
  [217, 154, 11, "168,127,61"],   // #D99A0B → #A87F3D
  [255, 216, 77, "198,161,91"],   // #FFD84D → #C6A15B
  [251, 191, 36, "198,161,91"],   // #FBBF24 → #C6A15B
];

// Tailwind named classes → palette
const CLASS_MAP = {
  "bg-amber-100": "bg-[#F5EFDF]",
  "bg-amber-200": "bg-[#EDE0C0]",
  "bg-amber-500": "bg-[#C6A15B]",
  "text-amber-400": "text-[#C6A15B]",
  "fill-amber-400": "fill-[#C6A15B]",
  "text-amber-500": "text-[#C6A15B]",
  "text-amber-600": "text-[#A87F3D]",
  "text-amber-700": "text-[#8F6E2D]",
  "text-amber-800": "text-[#6E5621]",
  "text-amber-900": "text-[#3B2E12]",
  "border-amber-500": "border-[#C6A15B]",
  "bg-emerald-100": "bg-[#E8F0E9]",
  "text-emerald-800": "text-[#065F46]",
  "text-emerald-400": "text-[#34D399]",
  "group-hover:text-emerald-300": "group-hover:text-[#6EE7B7]",
  "bg-emerald-950": "bg-[#052E22]",
  "border-emerald-800": "border-[#065F46]",
  "bg-gray-50": "bg-[#F7F7F2]",
};

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function walk(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx?|css)$/.test(f)) out.push(p);
  }
  return out;
}

let touched = 0;
for (const file of walk("src")) {
  let c = readFileSync(file, "utf8");
  const orig = c;
  for (const [from, to] of Object.entries(HEX_MAP)) {
    c = c.replace(new RegExp(esc(from) + "(?![0-9A-Fa-f])", "gi"), to);
  }
  for (const [r, g, b, to] of RGB_MAP) {
    c = c.replace(
      new RegExp(`rgba?\\(\\s*${r}\\s*,\\s*${g}\\s*,\\s*${b}\\s*,`, "g"),
      `rgba(${to},`
    );
    c = c.replace(
      new RegExp(`rgb\\(\\s*${r}\\s*,\\s*${g}\\s*,\\s*${b}\\s*\\)`, "g"),
      `rgb(${to})`
    );
  }
  for (const [from, to] of Object.entries(CLASS_MAP)) {
    c = c.replace(new RegExp(`(?<![\\w-])${esc(from)}\\b`, "g"), to);
  }
  if (c !== orig) {
    writeFileSync(file, c);
    touched++;
    console.log("updated", file);
  }
}
console.log(`Done — ${touched} files updated`);
