import React, { useId } from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export type TileIcon = React.FC<IconProps>;

/**
 * App-tile icon helper for other generic icons
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

/* ─── 1. Retail & eCommerce — retail-ecommerce.svg ──────────────────────── */
export const RetailColorIcon: TileIcon = ({ className = "w-6 h-6", size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    width={size}
    height={size}
    role="img"
    aria-label="Retail & eCommerce"
  >
    <rect x="4" y="4" width="56" height="56" rx="15" fill="#E8F8F1" />
    <path d="M14 27h36l-4-12H18l-4 12Z" fill="#00B879" />
    <path d="M17 27v23h30V27" stroke="#008F60" strokeWidth="3" strokeLinejoin="round" />
    <path d="M25 50V36h14v14" stroke="#008F60" strokeWidth="3" />
    <path d="M14 27c0 7 10 7 10 0 0 7 8 7 8 0 0 7 10 7 10 0 0 7 8 7 8 0" stroke="#171923" strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
);

/* ─── 2. Professional Services — professional-services.svg ──────────────── */
export const ServicesColorIcon: TileIcon = ({ className = "w-6 h-6", size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    width={size}
    height={size}
    role="img"
    aria-label="Professional Services"
  >
    <rect x="4" y="4" width="56" height="56" rx="15" fill="#E8F8F1" />
    <rect x="13" y="18" width="38" height="31" rx="5" fill="#00B879" />
    <path d="M23 18v-4h18v4" stroke="#008F60" strokeWidth="3" strokeLinecap="round" />
    <path d="M13 29h38" stroke="#FFFFFF" strokeWidth="2.5" />
    <path d="M26 35h12M26 41h8" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
    <circle cx="32" cy="29" r="3" fill="#171923" />
  </svg>
);

/* ─── 3. Real Estate & Developers — real-estate.svg ─────────────────────── */
export const RealEstateColorIcon: TileIcon = ({ className = "w-6 h-6", size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    width={size}
    height={size}
    role="img"
    aria-label="Real Estate & Developers"
  >
    <rect x="4" y="4" width="56" height="56" rx="15" fill="#E8F8F1" />
    <path d="M11 30 32 13l21 17" stroke="#008F60" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 28v23h30V28" fill="#00B879" />
    <path d="M25 34h6v7h-6zM36 34h6v7h-6zM28 43h8v8h-8z" fill="#FFFFFF" />
  </svg>
);

/* ─── 4. Website Builder — website-builder.svg ───────────────────────────── */
export const WebsiteBuilderColorIcon: TileIcon = ({ className = "w-6 h-6", size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    width={size}
    height={size}
    role="img"
    aria-label="Website Builder"
  >
    <rect x="4" y="4" width="56" height="56" rx="15" fill="#E8F8F1" />
    <rect x="11" y="13" width="42" height="38" rx="5" fill="#FFFFFF" stroke="#00B879" strokeWidth="3" />
    <path d="M11 23h42" stroke="#00B879" strokeWidth="3" />
    <circle cx="17" cy="18" r="1.5" fill="#008F60" />
    <circle cx="22" cy="18" r="1.5" fill="#008F60" />
    <rect x="17" y="29" width="12" height="16" rx="2" fill="#00B879" />
    <path d="M34 31h12M34 37h12M34 43h8" stroke="#008F60" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

/* ─── 5. Customer CRM — customer-crm.svg ─────────────────────────────────── */
export const CustomerCrmColorIcon: TileIcon = ({ className = "w-6 h-6", size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    width={size}
    height={size}
    role="img"
    aria-label="Customer CRM"
  >
    <rect x="4" y="4" width="56" height="56" rx="15" fill="#E8F8F1" />
    <circle cx="25" cy="23" r="8" fill="#00B879" />
    <path d="M10 45c0-8 6-13 15-13s15 5 15 13v3H10v-3Z" fill="#00B879" />
    <circle cx="45" cy="24" r="6" fill="#008F60" />
    <path d="M41 36c8-4 14 1 14 8v4H40v-4c0-3-1-5-3-7" fill="#008F60" />
    <circle cx="49" cy="47" r="8" fill="#171923" />
    <path d="M49 43v8m-4-4h8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/* ─── 6. Sales Pipeline — sales-pipeline.svg ─────────────────────────────── */
export const SalesPipelineColorIcon: TileIcon = ({ className = "w-6 h-6", size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    width={size}
    height={size}
    role="img"
    aria-label="Sales Pipeline"
  >
    <rect x="4" y="4" width="56" height="56" rx="15" fill="#E8F8F1" />
    <rect x="12" y="33" width="11" height="17" rx="3" fill="#00B879" opacity=".45" />
    <rect x="27" y="24" width="11" height="26" rx="3" fill="#00B879" opacity=".7" />
    <rect x="42" y="14" width="11" height="36" rx="3" fill="#008F60" />
    <path d="m13 27 12-8 9 3 15-10" stroke="#171923" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42 12h7v7" stroke="#171923" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── 7. Workflow Automation — workflow-automation.svg ───────────────────── */
export const AutomationColorIcon: TileIcon = ({ className = "w-6 h-6", size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    width={size}
    height={size}
    role="img"
    aria-label="Workflow Automation"
  >
    <rect x="4" y="4" width="56" height="56" rx="15" fill="#E8F8F1" />
    <rect x="10" y="13" width="16" height="13" rx="4" fill="#00B879" />
    <rect x="38" y="38" width="16" height="13" rx="4" fill="#008F60" />
    <rect x="38" y="13" width="16" height="13" rx="4" fill="#00B879" />
    <path d="M26 19.5h7a5 5 0 0 1 5 5V32a5 5 0 0 0 5 5h3" stroke="#008F60" strokeWidth="3" strokeLinecap="round" />
    <path d="m41 32 5 5-5 5" stroke="#008F60" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 26v10a5 5 0 0 0 5 5h15" stroke="#00B879" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

/* ─── 8. Analytics & Reports — analytics-reports.svg ─────────────────────── */
export const AnalyticsColorIcon: TileIcon = ({ className = "w-6 h-6", size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    width={size}
    height={size}
    role="img"
    aria-label="Analytics & Reports"
  >
    <rect x="4" y="4" width="56" height="56" rx="15" fill="#E8F8F1" />
    <path d="M13 49h38" stroke="#171923" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="16" y="34" width="8" height="15" rx="2" fill="#00B879" opacity=".65" />
    <rect x="28" y="25" width="8" height="24" rx="2" fill="#00B879" />
    <rect x="40" y="15" width="8" height="34" rx="2" fill="#008F60" />
    <path d="m15 27 12-8 10 3 13-9" stroke="#171923" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M43 13h7v7" stroke="#171923" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── 9. Integrations — integrations.svg ─────────────────────────────────── */
export const IntegrationsColorIcon: TileIcon = ({ className = "w-6 h-6", size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    width={size}
    height={size}
    role="img"
    aria-label="Integrations"
  >
    <rect x="4" y="4" width="56" height="56" rx="15" fill="#E8F8F1" />
    <rect x="10" y="24" width="15" height="16" rx="4" fill="#00B879" />
    <rect x="39" y="11" width="15" height="15" rx="4" fill="#008F60" />
    <rect x="39" y="38" width="15" height="15" rx="4" fill="#00B879" />
    <path d="M25 32h5a8 8 0 0 0 8-8v-5M30 32a8 8 0 0 1 8 8v5" stroke="#008F60" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="17.5" cy="32" r="2.5" fill="#FFFFFF" />
    <circle cx="46.5" cy="18.5" r="2" fill="#FFFFFF" />
    <circle cx="46.5" cy="45.5" r="2" fill="#FFFFFF" />
  </svg>
);

/* ─── Other Platform & Benefits Icons ───────────────────────────────────── */
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

// Tools showcase — Green SVG Brand Icons
export const SalesTrackerIcon: TileIcon = ({ className = "w-6 h-6", size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    width={size}
    height={size}
    role="img"
    aria-label="Sales Tracker"
  >
    <rect x="4" y="4" width="56" height="56" rx="15" fill="#E8F8F1" />
    <rect x="12" y="14" width="40" height="36" rx="6" fill="#FFFFFF" stroke="#00B879" strokeWidth="3" />
    <path d="M12 25h40" stroke="#00B879" strokeWidth="2.5" />
    <circle cx="18" cy="19.5" r="2" fill="#008F60" />
    <circle cx="24" cy="19.5" r="2" fill="#008F60" />
    <path d="M17 43 L17 38 L25 32 L33 35 L45 27 L45 43 Z" fill="#00B879" opacity=".2" />
    <path d="m17 38 8-6 8 3 12-8" stroke="#171923" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="25" cy="32" r="3" fill="#00B879" />
    <circle cx="33" cy="35" r="3" fill="#00B879" />
    <path d="M39 27h6v6" stroke="#171923" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="46" cy="44" r="7" fill="#008F60" />
    <path d="M44 44h4M46 42v4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const PortfolioIcon: TileIcon = ({ className = "w-6 h-6", size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    width={size}
    height={size}
    role="img"
    aria-label="Portfolio"
  >
    <rect x="4" y="4" width="56" height="56" rx="15" fill="#E8F8F1" />
    <path d="M13 22a4 4 0 0 1 4-4h11l4 4h15a4 4 0 0 1 4 4v5H13v-9Z" fill="#008F60" />
    <rect x="19" y="16" width="26" height="18" rx="3" fill="#FFFFFF" stroke="#171923" strokeWidth="2.5" />
    <path d="M24 22h16M24 26h10" stroke="#00B879" strokeWidth="2" strokeLinecap="round" />
    <rect x="11" y="27" width="42" height="23" rx="5" fill="#00B879" />
    <path d="M11 35h42" stroke="#008F60" strokeWidth="2.5" />
    <circle cx="32" cy="39" r="6" fill="#171923" />
    <path d="m32 35.5 1.1 2.2 2.4.3-1.8 1.7.4 2.4-2.1-1.1-2.1 1.1.4-2.4-1.8-1.7 2.4-.3Z" fill="#FFFFFF" />
  </svg>
);

export const ShopLibraryIcon: TileIcon = ({ className = "w-6 h-6", size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    width={size}
    height={size}
    role="img"
    aria-label="Shop Library"
  >
    <rect x="4" y="4" width="56" height="56" rx="15" fill="#E8F8F1" />
    <path d="M13 25h38l-4-11H17l-4 11Z" fill="#00B879" />
    <path d="M13 25c0 4 6.3 4 6.3 0 0 4 6.3 4 6.3 0 0 4 6.3 4 6.3 0 0 4 6.3 4 6.3 0 0 4 6.3 4 6.3 0 0 4 6.5 4 6.5 0" stroke="#171923" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M16 25v23h32V25" stroke="#008F60" strokeWidth="3" strokeLinejoin="round" fill="#FFFFFF" />
    <rect x="21" y="30" width="9" height="7" rx="2" fill="#00B879" />
    <rect x="34" y="30" width="9" height="7" rx="2" fill="#008F60" />
    <rect x="21" y="39" width="9" height="7" rx="2" fill="#171923" />
    <rect x="34" y="39" width="9" height="7" rx="2" fill="#00B879" opacity=".5" />
  </svg>
);

export const CompetitorsIcon: TileIcon = ({ className = "w-6 h-6", size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    width={size}
    height={size}
    role="img"
    aria-label="Competitors"
  >
    <rect x="4" y="4" width="56" height="56" rx="15" fill="#E8F8F1" />
    <rect x="14" y="24" width="15" height="22" rx="6" fill="#00B879" />
    <rect x="35" y="24" width="15" height="22" rx="6" fill="#00B879" />
    <rect x="17" y="17" width="9" height="8" rx="2.5" fill="#008F60" />
    <rect x="38" y="17" width="9" height="8" rx="2.5" fill="#008F60" />
    <path d="M28 26h8" stroke="#171923" strokeWidth="3.5" strokeLinecap="round" />
    <rect x="29" y="21" width="6" height="10" rx="2" fill="#171923" />
    <circle cx="21.5" cy="38" r="4.5" fill="#FFFFFF" />
    <circle cx="21.5" cy="38" r="2" fill="#008F60" />
    <circle cx="42.5" cy="38" r="4.5" fill="#FFFFFF" />
    <circle cx="42.5" cy="38" r="2" fill="#008F60" />
    <path d="M14 49c2 2 5 3 7.5 3M35 49c2 2 5 3 7.5 3" stroke="#008F60" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const AdLibraryIcon: TileIcon = ({ className = "w-6 h-6", size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    width={size}
    height={size}
    role="img"
    aria-label="Ad Library"
  >
    <rect x="4" y="4" width="56" height="56" rx="15" fill="#E8F8F1" />
    <rect x="18" y="13" width="34" height="28" rx="5" fill="#008F60" opacity=".4" />
    <rect x="12" y="19" width="38" height="31" rx="5" fill="#00B879" />
    <path d="M12 28h38" stroke="#008F60" strokeWidth="2" />
    <circle cx="17" cy="23.5" r="1.5" fill="#FFFFFF" />
    <circle cx="21" cy="23.5" r="1.5" fill="#FFFFFF" />
    <rect x="36" y="21.5" width="10" height="5" rx="1.5" fill="#171923" />
    <circle cx="31" cy="38" r="7.5" fill="#FFFFFF" />
    <path d="m29 34 6 4-6 4v-8Z" fill="#008F60" />
  </svg>
);

export const ProductLibraryIcon: TileIcon = ({ className = "w-6 h-6", size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    width={size}
    height={size}
    role="img"
    aria-label="Product Library"
  >
    <rect x="4" y="4" width="56" height="56" rx="15" fill="#E8F8F1" />
    <path d="M32 13 49 22 32 31 15 22Z" fill="#00B879" />
    <path d="M15 22v18l17 9V31Z" fill="#008F60" />
    <path d="M49 22v18l-17 9V31Z" fill="#00B879" opacity=".65" />
    <path d="M32 31v18" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M23.5 17.5l17 9" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="47" cy="46" r="7.5" fill="#171923" />
    <path d="m44 46 2 2 4.5-4.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const AdvertiserTrackerIcon: TileIcon = ({ className = "w-6 h-6", size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    width={size}
    height={size}
    role="img"
    aria-label="Advertiser Tracker"
  >
    <rect x="4" y="4" width="56" height="56" rx="15" fill="#E8F8F1" />
    <path d="M14 27h7l14-8v24l-14-8h-7a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3Z" fill="#00B879" />
    <path d="M20 34v7a3 3 0 0 0 3 3h2" stroke="#008F60" strokeWidth="3" strokeLinecap="round" />
    <path d="M40 25a7 7 0 0 1 0 14" stroke="#008F60" strokeWidth="3" strokeLinecap="round" />
    <path d="M46 20a14 14 0 0 1 0 24" stroke="#171923" strokeWidth="3" strokeLinecap="round" />
    <path d="M52 15a21 21 0 0 1 0 34" stroke="#00B879" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="16" cy="31" r="1.5" fill="#FFFFFF" />
  </svg>
);

export const MagicAiIcon: TileIcon = ({ className = "w-6 h-6", size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    width={size}
    height={size}
    role="img"
    aria-label="Magic AI Search"
  >
    <rect x="4" y="4" width="56" height="56" rx="15" fill="#E8F8F1" />
    <circle cx="28" cy="28" r="14" stroke="#008F60" strokeWidth="3.5" fill="#FFFFFF" />
    <path d="m38 38 13 13" stroke="#171923" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M28 17c0 5 5 11 11 11-6 0-11 6-11 11 0-5-5-11-11-11 6 0 11-6 11-11Z" fill="#00B879" />
    <path d="M47 16c0 2 2 4 4 4-2 0-4 2-4 4 0-2-2-4-4-4 2 0 4-2 4-4Z" fill="#008F60" />
    <circle cx="16" cy="18" r="2" fill="#00B879" />
    <circle cx="49" cy="29" r="1.5" fill="#171923" />
  </svg>
);
