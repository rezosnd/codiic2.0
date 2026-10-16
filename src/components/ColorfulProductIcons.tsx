import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

// 1. Website Builder: Modern multi-device browser storefront with glossy gradient
export const WebsiteBuilderColorIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Website Builder"
  >
    <defs>
      <linearGradient id="wbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00B879" />
        <stop offset="100%" stopColor="#0EA5E9" />
      </linearGradient>
      <linearGradient id="wbCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E8F8F1" />
        <stop offset="100%" stopColor="#E0F2FE" />
      </linearGradient>
    </defs>
    {/* Browser Frame */}
    <rect x="2" y="4" width="28" height="24" rx="5" fill="url(#wbGrad)" />
    {/* Browser Bar */}
    <rect x="2" y="4" width="28" height="6" rx="5" fill="#008F60" />
    {/* Traffic lights */}
    <circle cx="6" cy="7" r="1.2" fill="#EF4444" />
    <circle cx="9.5" cy="7" r="1.2" fill="#F59E0B" />
    <circle cx="13" cy="7" r="1.2" fill="#10B981" />
    {/* Search bar */}
    <rect x="16" y="5.5" width="12" height="3" rx="1.5" fill="#FFFFFF" fillOpacity="0.3" />
    {/* Inner Web Page Body */}
    <rect x="4" y="12" width="24" height="14" rx="3" fill="#FFFFFF" />
    {/* Hero Banner preview */}
    <rect x="6" y="14" width="13" height="4" rx="1" fill="url(#wbGrad)" />
    <rect x="21" y="14" width="5" height="4" rx="1" fill="#F1F5F9" />
    {/* Content Cards */}
    <rect x="6" y="20" width="6" height="4" rx="1" fill="url(#wbCardGrad)" />
    <rect x="13" y="20" width="6" height="4" rx="1" fill="url(#wbCardGrad)" />
    <rect x="20" y="20" width="6" height="4" rx="1" fill="url(#wbCardGrad)" />
  </svg>
);

// 2. Customer CRM: Official WhatsApp Green chat & contact intelligence
export const CustomerCrmColorIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Customer CRM"
  >
    <defs>
      <linearGradient id="crmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#25D366" />
        <stop offset="100%" stopColor="#008F60" />
      </linearGradient>
      <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
    </defs>
    {/* Background Rounded Shield */}
    <rect x="2" y="2" width="28" height="28" rx="8" fill="#F0FDF4" stroke="#DCFCE7" strokeWidth="1" />
    {/* Chat Bubble with WhatsApp Green */}
    <path
      d="M25 15C25 9.477 20.523 5 15 5C9.477 5 5 9.477 5 15C5 17.065 5.626 18.984 6.703 20.58L5.5 25.5L10.61 24.331C11.95 24.757 13.43 25 15 25C20.523 25 25 20.523 25 15Z"
      fill="url(#crmGrad)"
    />
    {/* User Avatars Inside Chat */}
    <circle cx="15" cy="12.5" r="3" fill="#FFFFFF" />
    <path
      d="M10.5 19.5C10.5 17.5 12.5 16.5 15 16.5C17.5 16.5 19.5 17.5 19.5 19.5"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Verified Green Check Pill */}
    <circle cx="23" cy="9" r="4.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
    <path d="M21.5 9L22.5 10L24.5 8" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 3. Sales Pipeline: Multi-color Kanban deal stages & INR revenue board
export const SalesPipelineColorIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Sales Pipeline"
  >
    <defs>
      <linearGradient id="pipeBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F8FAFC" />
        <stop offset="100%" stopColor="#EEF2F6" />
      </linearGradient>
    </defs>
    <rect x="2" y="3" width="28" height="26" rx="6" fill="url(#pipeBg)" stroke="#E2E8F0" strokeWidth="1" />
    {/* Column 1: Lead/Inquiry (Blue) */}
    <rect x="5" y="6" width="6" height="3" rx="1.5" fill="#3B82F6" />
    <rect x="5" y="10.5" width="6" height="7" rx="1.5" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1" />
    <rect x="6.5" y="12" width="3" height="1" rx="0.5" fill="#3B82F6" />
    <rect x="5" y="19" width="6" height="8" rx="1.5" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1" />
    {/* Column 2: Negotiation (Amber) */}
    <rect x="13" y="6" width="6" height="3" rx="1.5" fill="#F59E0B" />
    <rect x="13" y="10.5" width="6" height="9" rx="1.5" fill="#FFFFFF" stroke="#FDE68A" strokeWidth="1" />
    <rect x="14.5" y="12" width="3" height="1" rx="0.5" fill="#F59E0B" />
    <rect x="13" y="21" width="6" height="6" rx="1.5" fill="#FFFFFF" stroke="#FDE68A" strokeWidth="1" />
    {/* Column 3: Won Deal (Green) */}
    <rect x="21" y="6" width="6" height="3" rx="1.5" fill="#10B981" />
    <rect x="21" y="10.5" width="6" height="11" rx="1.5" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="1" />
    <rect x="22.5" y="12" width="3" height="1" rx="0.5" fill="#10B981" />
    <circle cx="24" cy="17" r="2" fill="#10B981" />
    <path d="M23 17L23.7 17.7L25.2 16.2" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 4. Automation Engine: Lightning trigger with amber gears & cyan flow
export const AutomationColorIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Automation Engine"
  >
    <defs>
      <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#F97316" />
      </linearGradient>
      <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0EA5E9" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
    </defs>
    {/* Background */}
    <rect x="2" y="2" width="28" height="28" rx="8" fill="#FFFBEB" stroke="#FEF3C7" strokeWidth="1" />
    {/* Outer Gear Teeth Accent */}
    <circle cx="16" cy="16" r="10.5" stroke="url(#gearGrad)" strokeWidth="2.5" strokeDasharray="3 3" />
    <circle cx="16" cy="16" r="8" fill="#FFFFFF" />
    {/* Fiery Gold Lightning Bolt */}
    <path
      d="M17.5 5L8.5 17H15.5L14.5 27L23.5 15H16.5L17.5 5Z"
      fill="url(#boltGrad)"
      stroke="#D97706"
      strokeWidth="0.8"
      strokeLinejoin="round"
    />
  </svg>
);

// 5. Analytics & Reports: Multi-color 3D Bar chart with upward green trend
export const AnalyticsColorIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Analytics & Reports"
  >
    <defs>
      <linearGradient id="bar1Grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
      <linearGradient id="bar2Grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#A78BFA" />
        <stop offset="100%" stopColor="#7C3AED" />
      </linearGradient>
      <linearGradient id="bar3Grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#34D399" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    {/* Background Frame */}
    <rect x="2" y="2" width="28" height="28" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
    {/* Baseline */}
    <line x1="5" y1="26" x2="27" y2="26" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
    {/* Bar 1 (Blue) */}
    <rect x="6" y="18" width="4.5" height="7" rx="1.5" fill="url(#bar1Grad)" />
    {/* Bar 2 (Purple) */}
    <rect x="13.5" y="13" width="4.5" height="12" rx="1.5" fill="url(#bar2Grad)" />
    {/* Bar 3 (Emerald Green) */}
    <rect x="21" y="8" width="4.5" height="17" rx="1.5" fill="url(#bar3Grad)" />
    {/* Trending line curve */}
    <path
      d="M8.25 15.5L15.75 11L23.25 5.5"
      stroke="#10B981"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="23.25" cy="5.5" r="2" fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />
  </svg>
);

// 6. Benefits: Less Switching (Unified All-in-One Workspace Hub)
export const LessSwitchingColorIcon: React.FC<IconProps> = ({
  className = "w-8 h-8",
}) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Less Switching"
  >
    <defs>
      <linearGradient id="lsBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E8F8F1" />
        <stop offset="100%" stopColor="#D1FAE5" />
      </linearGradient>
    </defs>
    <rect width="36" height="36" rx="10" fill="url(#lsBg)" />
    {/* Stacked Layers */}
    <path
      d="M18 6L6 12L18 18L30 12L18 6Z"
      fill="#00B879"
      stroke="#008F60"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M6 18L18 24L30 18"
      stroke="#0284C7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 24L18 30L30 24"
      stroke="#6366F1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 7. Benefits: Clearer Sales (Target & Upward Rupee Growth)
export const ClearerSalesColorIcon: React.FC<IconProps> = ({
  className = "w-8 h-8",
}) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Clearer Sales"
  >
    <defs>
      <linearGradient id="csBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EFF6FF" />
        <stop offset="100%" stopColor="#DBEAFE" />
      </linearGradient>
    </defs>
    <rect width="36" height="36" rx="10" fill="url(#csBg)" />
    {/* Kanban Columns */}
    <rect x="7" y="8" width="5.5" height="18" rx="2" fill="#3B82F6" fillOpacity="0.3" stroke="#2563EB" strokeWidth="1.2" />
    <rect x="15.25" y="8" width="5.5" height="14" rx="2" fill="#F59E0B" fillOpacity="0.3" stroke="#D97706" strokeWidth="1.2" />
    <rect x="23.5" y="8" width="5.5" height="20" rx="2" fill="#10B981" fillOpacity="0.3" stroke="#059669" strokeWidth="1.2" />
    {/* Upward Growth Arrow */}
    <path d="M10 26L26 10M26 10H19M26 10V17" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 8. Benefits: Smoother Follow-ups (24/7 Fast WhatsApp Instant Response)
export const SmootherFollowupsColorIcon: React.FC<IconProps> = ({
  className = "w-8 h-8",
}) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Smoother Follow-ups"
  >
    <defs>
      <linearGradient id="sfBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FEF3C7" />
        <stop offset="100%" stopColor="#FDE68A" />
      </linearGradient>
    </defs>
    <rect width="36" height="36" rx="10" fill="url(#sfBg)" />
    {/* Outer Clock Circle */}
    <circle cx="18" cy="18" r="11" fill="#FFFFFF" stroke="#D97706" strokeWidth="1.5" />
    {/* Clock Hands */}
    <path d="M18 12V18L22 20" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
    {/* Lightning Instant Badge */}
    <circle cx="26" cy="10" r="6" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
    <path d="M26.5 6.5L24 10.5H27L25.5 13.5" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 9. Industry Icons: Retail & eCommerce (Vibrant Shopping Bag & Storefront)
export const RetailColorIcon: React.FC<IconProps> = ({
  className = "w-5 h-5",
}) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="24" height="24" rx="6" fill="#FFF1F2" />
    <path
      d="M16 8V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V8M4 8H20L21 21H3L4 8Z"
      stroke="#F43F5E"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="13" r="1.5" fill="#10B981" />
  </svg>
);

// 10. Industry Icons: Professional Services (Vibrant Executive Briefcase)
export const ServicesColorIcon: React.FC<IconProps> = ({
  className = "w-5 h-5",
}) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="24" height="24" rx="6" fill="#EFF6FF" />
    <rect x="3" y="7" width="18" height="14" rx="3" stroke="#2563EB" strokeWidth="1.8" />
    <path d="M8 7V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V7" stroke="#2563EB" strokeWidth="1.8" />
    <path d="M3 12H21" stroke="#F59E0B" strokeWidth="1.5" />
    <rect x="10" y="10.5" width="4" height="3" rx="1" fill="#F59E0B" />
  </svg>
);

// 11. Industry Icons: Real Estate (Vibrant Modern Building)
export const RealEstateColorIcon: React.FC<IconProps> = ({
  className = "w-5 h-5",
}) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="24" height="24" rx="6" fill="#F0FDF4" />
    <path d="M3 21H21M5 21V7L13 3V21M13 9L19 12V21" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="8" y="7" width="2" height="2" fill="#3B82F6" />
    <rect x="8" y="11" width="2" height="2" fill="#3B82F6" />
    <rect x="8" y="15" width="2" height="2" fill="#3B82F6" />
    <rect x="15" y="14" width="2" height="2" fill="#F59E0B" />
  </svg>
);

// 12. Industry Icons: Creative Agencies (Vibrant Megaphone & Studio)
export const AgenciesColorIcon: React.FC<IconProps> = ({
  className = "w-5 h-5",
}) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="24" height="24" rx="6" fill="#FAF5FF" />
    <path
      d="M18 8L7 4V14L18 10V8ZM7 9H4C3.45 9 3 9.45 3 10V12C3 12.55 3.45 13 4 13H7M7 14L8 20H10L9 14"
      stroke="#7C3AED"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M20 7C21 8.5 21 10.5 20 12" stroke="#EC4899" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 13. Industry Icons: Education & Academies (Vibrant Graduation Cap)
export const EducationColorIcon: React.FC<IconProps> = ({
  className = "w-5 h-5",
}) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="24" height="24" rx="6" fill="#FEF3C7" />
    <path d="M12 3L2 8L12 13L22 8L12 3Z" fill="#D97706" stroke="#B45309" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M6 10.5V16C6 18.5 8.7 20.5 12 20.5C15.3 20.5 18 18.5 18 16V10.5" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M22 8V15" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 14. Industry Icons: Hospitality & Food (Vibrant Culinary Cloche)
export const HospitalityColorIcon: React.FC<IconProps> = ({
  className = "w-5 h-5",
}) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="24" height="24" rx="6" fill="#FFF7ED" />
    <path d="M2 19H22M4 16C4 11.58 7.58 8 12 8C16.42 8 20 11.58 20 16H4Z" stroke="#EA580C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="6" r="1.5" fill="#F59E0B" />
  </svg>
);
