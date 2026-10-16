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
    <path
      d="M17.8 2.5H6.2L2.5 12h6.2l-2.8 9.5 13.6-11.2h-6.2l4.5-7.8z"
      fill="#0C2340"
    />
    <path
      d="M15.5 3H7.5L4.2 11.5h5.5l-2.4 8 11.2-9.2h-5.2l3.8-6.3z"
      fill="#3395FF"
    />
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

// Helper function to render logo by integration id
export const renderIntegrationLogo = (id: string, className = "w-5 h-5") => {
  switch (id) {
    case "whatsapp":
      return <WhatsAppLogo className={className} />;
    case "razorpay":
      return <RazorpayLogo className={className} />;
    case "google":
      return <GoogleWorkspaceLogo className={className} />;
    case "meta":
      return <MetaLogo className={className} />;
    case "shopify":
      return <ShopifyLogo className={className} />;
    case "stripe":
      return <StripeLogo className={className} />;
    case "zapier":
      return <ZapierLogo className={className} />;
    case "webhooks":
    default:
      return <WebhooksLogo className={className} />;
  }
};
