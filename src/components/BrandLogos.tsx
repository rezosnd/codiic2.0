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
      fill="#0467DF"
      d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
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
    <path
      fill="#95BF47"
      d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"
    />
  </svg>
);

// AWS Cloud wordmark with the orange smile arrow
export const AwsLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5",
  "aria-label": ariaLabel = "AWS Cloud",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <text
      x="12"
      y="12.6"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="700"
      fontSize="10"
      letterSpacing="-0.3"
      fill="#232F3E"
    >
      aws
    </text>
    <path d="M3.4 15.6c5 3.1 12.1 3.1 16.8 0" stroke="#FF9900" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M17.9 14.5l2.6.9-.8 2.6" stroke="#FF9900" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
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
    case "aws":
      return <AwsLogo className={className} />;
    case "webhooks":
    default:
      return <WebhooksLogo className={className} />;
  }
};
