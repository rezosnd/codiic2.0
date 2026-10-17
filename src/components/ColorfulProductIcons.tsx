import React, { useId } from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export type TileIcon = React.FC<IconProps>;

/**
 * App-tile icon: gradient rounded square with a white 24px-grid line glyph.
 * Every product/industry icon shares this geometry so they read as one family.
 */
export const createTileIcon = (
  label: string,
  from: string,
  to: string,
  glyph: React.ReactNode
): TileIcon => {
  const Icon: TileIcon = ({ className = "w-6 h-6" }) => {
    const id = useId().replace(/:/g, "");
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label={label}
      >
        <defs>
          <linearGradient id={`${id}-bg`} x1="4" y1="0" x2="20" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor={from} />
            <stop offset="1" stopColor={to} />
          </linearGradient>
          <linearGradient id={`${id}-hl`} x1="12" y1="0" x2="12" y2="13" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6.5" fill={`url(#${id}-bg)`} />
        <rect
          x="0.5"
          y="0.5"
          width="23"
          height="23"
          rx="6"
          fill={`url(#${id}-hl)`}
          stroke="#FFFFFF"
          strokeOpacity="0.22"
        />
        <g
          transform="translate(5.5 5.5) scale(0.5417)"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {glyph}
        </g>
      </svg>
    );
  };
  Icon.displayName = label.replace(/\W/g, "");
  return Icon;
};

// Platform tools
export const WebsiteBuilderColorIcon = createTileIcon(
  "Website Builder",
  "#38BDF8",
  "#0369A1",
  <>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 9h20" />
    <path d="M6 6.5h.01M9 6.5h.01" />
    <path d="M7 14h5M7 17h3" />
  </>
);

export const CustomerCrmColorIcon = createTileIcon(
  "Customer CRM",
  "#34D399",
  "#047857",
  <>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>
);

export const SalesPipelineColorIcon = createTileIcon(
  "Sales Pipeline",
  "#A78BFA",
  "#6D28D9",
  <>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 7v7M12 7v4M16 7v9" />
  </>
);

export const AutomationColorIcon = createTileIcon(
  "Workflow Automation",
  "#FBBF24",
  "#EA580C",
  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
);

export const AnalyticsColorIcon = createTileIcon(
  "Analytics & Reports",
  "#818CF8",
  "#4338CA",
  <>
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <path d="M8 17v-3M13 17V9M18 17V5" />
  </>
);

// Benefits
export const LessSwitchingColorIcon = createTileIcon(
  "Less Switching",
  "#34D399",
  "#047857",
  <>
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
  </>
);

export const ClearerSalesColorIcon = createTileIcon(
  "Clearer Sales",
  "#60A5FA",
  "#1D4ED8",
  <>
    <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
    <path d="M16 7h6v6" />
  </>
);

export const SmootherFollowupsColorIcon = createTileIcon(
  "Smoother Follow-ups",
  "#FBBF24",
  "#D97706",
  <>
    <path d="M10.27 21a2 2 0 0 0 3.46 0" />
    <path d="M3.26 15.33A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.67C19.41 13.96 18 12.5 18 8A6 6 0 0 0 6 8c0 4.5-1.41 5.96-2.74 7.33" />
    <path d="M22 8c0-2.3-.8-4.3-2-6M4 2C2.8 3.7 2 5.7 2 8" />
  </>
);

// Industries
export const RetailColorIcon = createTileIcon(
  "Retail & eCommerce",
  "#FB7185",
  "#BE123C",
  <>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </>
);

export const ServicesColorIcon = createTileIcon(
  "Professional Services",
  "#60A5FA",
  "#1E40AF",
  <>
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect x="2" y="6" width="20" height="14" rx="2" />
  </>
);

export const RealEstateColorIcon = createTileIcon(
  "Real Estate",
  "#2DD4BF",
  "#0F766E",
  <>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
  </>
);

export const AgenciesColorIcon = createTileIcon(
  "Creative Agencies",
  "#E879F9",
  "#7E22CE",
  <>
    <path d="m3 11 18-5v12L3 14v-3z" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  </>
);

export const EducationColorIcon = createTileIcon(
  "Education & Academies",
  "#FCD34D",
  "#B45309",
  <>
    <path d="M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z" />
    <path d="M22 10v6" />
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
  </>
);

export const HospitalityColorIcon = createTileIcon(
  "Hospitality & Cafes",
  "#FDBA74",
  "#C2410C",
  <>
    <path d="M10 2v2M14 2v2M6 2v2" />
    <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
  </>
);

// Tools showcase (dropship intelligence suite)
export const SalesTrackerIcon = createTileIcon(
  "Sales Tracker",
  "#34D399",
  "#047857",
  <>
    <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
    <path d="M16 7h6v6" />
  </>
);

export const PortfolioIcon = createTileIcon(
  "Portfolio",
  "#A78BFA",
  "#6D28D9",
  <>
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    <path d="M12 10v6M9 13h6" />
  </>
);

export const ShopLibraryIcon = createTileIcon(
  "Shop Library",
  "#38BDF8",
  "#0369A1",
  <>
    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
    <path d="M2 7h20" />
    <path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" />
  </>
);

export const CompetitorsIcon = createTileIcon(
  "Competitors",
  "#475569",
  "#0F172A",
  <>
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10M12 3v18" />
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  </>
);

export const AdLibraryIcon = createTileIcon(
  "Ad Library",
  "#FB7185",
  "#BE123C",
  <>
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="M10 9.2v5.6a.5.5 0 0 0 .76.43l4.5-2.8a.5.5 0 0 0 0-.86l-4.5-2.8a.5.5 0 0 0-.76.43Z" />
  </>
);

export const ProductLibraryIcon = createTileIcon(
  "Product Library",
  "#FBBF24",
  "#EA580C",
  <>
    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
    <path d="M12 22V12" />
    <path d="M3.29 7 12 12l8.71-5" />
  </>
);

export const AdvertiserTrackerIcon = createTileIcon(
  "Advertiser Tracker",
  "#818CF8",
  "#4338CA",
  <>
    <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
    <path d="M4 6h.01" />
    <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
    <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
    <path d="M12 18h.01" />
    <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
    <circle cx="12" cy="12" r="2" />
    <path d="m13.41 10.59 5.66-5.66" />
  </>
);

export const MagicAiIcon = createTileIcon(
  "Magic AI Search",
  "#F472B6",
  "#7C3AED",
  <>
    <path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.14 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z" />
    <path d="M20 3v4M22 5h-4" />
  </>
);
