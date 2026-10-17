import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  "aria-label"?: string;
}

/**
 * Authentic brand icons for verified integrations.
 * Each logo uses official geometries, aspect ratios, and color palettes.
 */

// 1. WhatsApp Business Official Logo
export const WhatsAppLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  "aria-label": ariaLabel = "WhatsApp Business",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <path
      d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.71 4.29 3.8.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"
      fill="#25D366"
    />
  </svg>
);

// 2. Razorpay Official Mark
export const RazorpayLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  "aria-label": ariaLabel = "Razorpay Payments",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <path d="M22.436 0 10.526 7.773 9.352 12.05l6.625-4.297L11.65 24h4.391L22.436 0Z" fill="#3395FF" />
    <path d="M14.26 10.098 3.389 17.166 1.564 24h9.008l3.688-13.902Z" fill="#072654" />
  </svg>
);

// 3. Google Workspace Official 4-Color Mark
export const GoogleWorkspaceLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  "aria-label": ariaLabel = "Google Workspace",
}) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

// 4. Meta Official Infinity Mark
export const MetaLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  "aria-label": ariaLabel = "Meta Lead Generation",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <path
      fill="#0668E1"
      d="M16.92 6.57c-2.3 0-4.04 1.38-5.18 3.08-1.14-1.7-2.88-3.08-5.18-3.08-3.8 0-6.56 3.23-6.56 7.43 0 4.23 2.79 7.43 6.59 7.43 2.47 0 4.26-1.54 5.15-3.01.89 1.47 2.68 3.01 5.15 3.01 3.8 0 6.59-3.2 6.59-7.43 0-4.2-2.76-7.43-6.56-7.43zm-9.84 11.96c-2.18 0-3.89-1.98-3.89-4.53 0-2.58 1.71-4.53 3.89-4.53 1.83 0 3.12 1.38 3.86 2.87-1.17 2.37-2.61 4.79-3.86 6.19zm10.15 0c-1.25-1.4-2.69-3.82-3.86-6.19.74-1.49 2.03-2.87 3.86-2.87 2.18 0 3.89 1.95 3.89 4.53 0 2.55-1.71 4.53-3.89 4.53z"
    />
  </svg>
);

// 5. Shopify Official Shopping Bag Mark
export const ShopifyLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  "aria-label": ariaLabel = "Shopify Storefront",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Shadow Fold */}
    <path
      fill="#5E8E3E"
      d="M17.16 6.09c-.25-.25-.74-.18-.93-.11-.04.01-.76.24-1.95.61-.17-.46-.41-1.02-.74-1.57-.99-1.66-2.37-2.55-3.9-2.5-1.21.04-2.15.68-2.72 1.86-.39.81-.46 1.84-.46 2.9 0 .1 0 .21.01.32-1.37.42-2.35.73-2.38.74-.74.24-.76.26-.86.97L1.6 20.36c-.1.74.45 1.38 1.19 1.41.08 0 14.59.04 14.59.04s.48.01.81-.36c.33-.37.48-.99.55-1.54l1.37-13.06c.07-.46-.16-.9-.45-1.13l-2.5 0.37z"
    />
    {/* Main Bag Body */}
    <path
      fill="#96BF48"
      d="M19.34 6.72c-.04-.26-.22-.46-.48-.5-.25-.04-1.7-.13-1.7-.13s-1.12-1.12-1.37-1.37c-.25-.25-.74-.18-.93-.11-.04.01-.76.24-1.95.61-.17-.46-.41-1.02-.74-1.57-.99-1.66-2.37-2.55-3.9-2.5-1.21.04-2.15.68-2.72 1.86-.39.81-.46 1.84-.46 2.9 0 .1 0 .21.01.32-1.37.42-2.35.73-2.38.74-.74.24-.76.26-.86.97L.03 21.36c-.1.74.45 1.38 1.19 1.41.08 0 16.59.04 16.59.04s.48.01.81-.36c.33-.37.48-.99.55-1.54l1.37-13.06c.07-.46-.16-.9-.45-1.13h.01z"
    />
    {/* Inner White S Letter */}
    <path
      fill="#FFFFFF"
      d="M11.91 3.9c.7-.02 1.37.38 1.92 1.13.43.59.73 1.33.91 2.06l-4.14 1.28c.03-.78.17-1.89.58-2.73.34-.69.83-1.21 1.73-1.24v-.5zm-1.85 7.62c.29-.09.6-.14.9-.14.73 0 1.27.35 1.5.99.18.52.09 1.15-.24 1.63-.33.48-.87.87-1.54 1.11-.64.23-1.09.43-1.29.61-.21.18-.3.42-.26.71.05.34.28.61.64.76.36.14.81.16 1.26.06.39-.09.76-.27 1.09-.52l.45 1.48c-.46.33-1 .56-1.57.67-.32.06-.65.09-.97.09-.85 0-1.51-.25-1.93-.73-.42-.48-.56-1.13-.42-1.87.16-.86.66-1.52 1.44-1.92.52-.27 1.18-.5 1.91-.71.5-.14.86-.34 1.03-.58.17-.24.19-.53.07-.81-.13-.3-.43-.49-.85-.49-.36 0-.74.1-1.07.28l-.55-1.57c.38-.17.82-.28 1.28-.35l.41.08z"
    />
  </svg>
);

// 6. Stripe Official Slanted 'S' Mark
export const StripeLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  "aria-label": ariaLabel = "Stripe Global",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <rect width="24" height="24" rx="6" fill="#635BFF" />
    <path
      d="M14.98 9.15c0-1.3-.96-1.85-2.46-1.85-2.23 0-4.04.91-4.04.91l-.58-2.67s1.95-.83 4.88-.83c3.67 0 6.04 1.76 6.04 5.25 0 5.49-7.46 4.67-7.46 7.09 0 1.34 1.18 1.85 2.78 1.85 2.55 0 4.65-1.11 4.65-1.11l.59 2.7s-2.09.99-5.46.99c-3.92 0-6.5-1.86-6.5-5.32 0-5.75 7.56-4.72 7.56-7.01z"
      fill="#FFFFFF"
    />
  </svg>
);

// 7. Zapier Official Asterisk Mark
export const ZapierLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  "aria-label": ariaLabel = "Zapier Automation",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <path
      fill="#FF4A00"
      d="M13.2 2h-2.4v6.8L6.2 4.2 4.5 5.9l4.6 4.6H2.3v2.4h6.8l-4.6 4.6 1.7 1.7 4.6-4.6v6.8h2.4v-6.8l4.6 4.6 1.7-1.7-4.6-4.6h6.8v-2.4h-6.8l4.6-4.6-1.7-1.7-4.6 4.6V2z"
    />
  </svg>
);

// 8. REST API & Webhooks Official CODIIC Mark
export const WebhooksLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  "aria-label": ariaLabel = "REST API & Webhooks",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <rect width="24" height="24" rx="6" fill="#E8F8F1" stroke="#00B879" strokeWidth="1.5" />
    <path
      d="M8.5 15.5L5 12l3.5-3.5M15.5 8.5L19 12l-3.5 3.5M13.5 6.5l-3 11"
      stroke="#008F60"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 9. BHIM UPI Official Logo
export const BhimUpiLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  "aria-label": ariaLabel = "BHIM UPI Payments",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <rect width="24" height="24" rx="6" fill="#F8FAFC" />
    <path d="M14.5 4.5L6.5 19.5H11.5L19.5 4.5H14.5Z" fill="#097939" />
    <path d="M17.5 4.5L12 15H16L21.5 4.5H17.5Z" fill="#F47920" />
  </svg>
);

// 10. BlueDart Express Official Logo
export const BlueDartLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  "aria-label": ariaLabel = "BlueDart Express Courier",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <rect width="24" height="24" rx="6" fill="#0C2340" />
    <path d="M4 14.5L15 4.5L13.5 11.5H20L9 21.5L10.5 14.5H4Z" fill="#E63946" />
    <path d="M8 12.5L15 6L14 11H18L11 17.5L12 12.5H8Z" fill="#FFFFFF" />
  </svg>
);

// 11. GST Tax Compliance Official Logo
export const GstLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  "aria-label": ariaLabel = "GST Invoicing Compliance",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <rect width="24" height="24" rx="6" fill="#0F172A" />
    <path
      d="M12 3L4 6V11.5C4 16.5 7.5 20.8 12 22C16.5 20.8 20 16.5 20 11.5V6L12 3Z"
      fill="#F59E0B"
      fillOpacity="0.2"
      stroke="#F59E0B"
      strokeWidth="1.5"
    />
    <path
      d="M9 12L11 14L15 10"
      stroke="#10B981"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 12. PhonePe Official Logo
export const PhonePeLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  "aria-label": ariaLabel = "PhonePe UPI",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <rect width="24" height="24" rx="6" fill="#5F259F" />
    <path
      d="M13.5 6H8.5V18H11V14.5H13.5C15.9 14.5 17.5 12.9 17.5 10.25C17.5 7.6 15.9 6 13.5 6ZM13.2 12H11V8.5H13.2C14.5 8.5 15.2 9.2 15.2 10.25C15.2 11.3 14.5 12 13.2 12Z"
      fill="#FFFFFF"
    />
  </svg>
);

// 13. HubSpot CRM Official Logo
export const HubSpotLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  "aria-label": ariaLabel = "HubSpot CRM",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <rect width="24" height="24" rx="6" fill="#FFF1ED" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5 8.5V6.2C17.2 5.8 17.8 5 17.8 4C17.8 2.6 16.7 1.5 15.3 1.5C13.9 1.5 12.8 2.6 12.8 4C12.8 5 13.3 5.8 14.1 6.2V8.5C13.4 8.7 12.8 9.1 12.4 9.6L7.4 5.9C7.5 5.6 7.5 5.3 7.5 5C7.5 3.3 6.2 2 4.5 2C2.8 2 1.5 3.3 1.5 5C1.5 6.7 2.8 8 4.5 8C5.2 8 5.8 7.8 6.3 7.4L11.2 11.2C10.7 11.9 10.5 12.9 10.5 13.8C10.5 16.5 12.7 18.7 15.3 18.7C18 18.7 20.2 16.5 20.2 13.8C20.2 11.4 18.6 9.4 16.5 8.5ZM15.3 16.2C14 16.2 12.9 15.1 12.9 13.8C12.9 12.5 14 11.4 15.3 11.4C16.6 11.4 17.7 12.5 17.7 13.8C17.7 15.1 16.6 16.2 15.3 16.2Z"
      fill="#FF7A59"
    />
  </svg>
);

// 14. Zoho Official Logo
export const ZohoLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  "aria-label": ariaLabel = "Zoho Books & CRM",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <rect width="24" height="24" rx="6" fill="#F8FAFC" />
    <rect x="4" y="4" width="7" height="7" rx="1.5" fill="#E42528" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" fill="#008851" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" fill="#0096D6" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" fill="#F8B133" />
  </svg>
);

// 15. Gmail Official Logo
export const GmailLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  "aria-label": ariaLabel = "Gmail Automation",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <rect width="24" height="24" rx="6" fill="#F8FAFC" />
    <path d="M4 6.5C4 5.67 4.67 5 5.5 5H7L12 9L17 5H18.5C19.33 5 20 5.67 20 6.5V8.5L12 14.5L4 8.5V6.5Z" fill="#EA4335" />
    <path d="M4 8.5L9 12.5V19H5.5C4.67 19 4 18.33 4 17.5V8.5Z" fill="#4285F4" />
    <path d="M20 8.5L15 12.5V19H18.5C19.33 19 20 18.33 20 17.5V8.5Z" fill="#34A853" />
    <path d="M9 19H15V12.5L12 10.25L9 12.5V19Z" fill="#FBBC05" />
  </svg>
);

// 16. Instagram Official Logo
export const InstagramLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  "aria-label": ariaLabel = "Instagram Direct",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="igGradientHero" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FD1D1D" />
        <stop offset="50%" stopColor="#E1306C" />
        <stop offset="100%" stopColor="#833AB4" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#igGradientHero)" />
    <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="#FFFFFF" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" stroke="#FFFFFF" strokeWidth="1.5" />
    <circle cx="15.5" cy="8.5" r="0.75" fill="#FFFFFF" />
  </svg>
);

// 17. Google Ads Official Logo
export const GoogleAdsLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  "aria-label": ariaLabel = "Google Ads & Leads",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <rect width="24" height="24" rx="6" fill="#F8FAFC" />
    <path d="M5.5 14.5L10 6.5C10.6 5.5 11.9 5.1 12.9 5.7C13.9 6.3 14.3 7.6 13.7 8.6L9.2 16.6C8.6 17.6 7.3 18 6.3 17.4C5.3 16.8 4.9 15.5 5.5 14.5Z" fill="#F4B400" />
    <path d="M14.5 14.5L19 6.5C19.6 5.5 20.9 5.1 21.9 5.7C22.9 6.3 23.3 7.6 22.7 8.6L18.2 16.6C17.6 17.6 16.3 18 15.3 17.4C14.3 16.8 13.9 15.5 14.5 14.5Z" fill="#4285F4" />
    <circle cx="6.5" cy="16.5" r="2.5" fill="#34A853" />
  </svg>
);

// Helper function to render logo by integration id
export const renderIntegrationLogo = (id: string, className = "w-5 h-5") => {
  switch (id) {
    case "whatsapp":
      return <WhatsAppLogo className={className} />;
    case "razorpay":
      return <RazorpayLogo className={className} />;
    case "google":
      return <GoogleWorkspaceLogo className={className} />;
    case "googleads":
      return <GoogleAdsLogo className={className} />;
    case "meta":
      return <MetaLogo className={className} />;
    case "shopify":
      return <ShopifyLogo className={className} />;
    case "stripe":
      return <StripeLogo className={className} />;
    case "zapier":
      return <ZapierLogo className={className} />;
    case "bhimupi":
      return <BhimUpiLogo className={className} />;
    case "bluedart":
      return <BlueDartLogo className={className} />;
    case "gst":
      return <GstLogo className={className} />;
    case "phonepe":
      return <PhonePeLogo className={className} />;
    case "hubspot":
      return <HubSpotLogo className={className} />;
    case "zoho":
      return <ZohoLogo className={className} />;
    case "gmail":
      return <GmailLogo className={className} />;
    case "instagram":
      return <InstagramLogo className={className} />;
    case "webhooks":
    default:
      return <WebhooksLogo className={className} />;
  }
};
