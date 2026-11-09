import React from 'react';

export type BrandOrigin =
  | 'linkedin.com'
  | 'github.com'
  | 'stripe.com'
  | 'vercel.com'
  | 'aws.amazon.com'
  | 'linear.app'
  | 'slack.com'
  | 'console.anthropic.com';

export type OperationIllustrationKind =
  | 'passkey-account-create'
  | 'passkey-signin'
  | 'credit-card-charge'
  | 'subscription-cycle'
  | 'analytical-tradeoff'
  | 'ballistic-agent'
  | 'worktree-collision'
  | 'destructive-deploy'
  | 'vault-secret-inject'
  | 'oauth-scope-grant'
  | 'outbound-post'
  | 'human-challenge';

/**
 * Crisp site favicon badge rendered on the left of the header.
 */
export const SiteFavicon: React.FC<{ origin: BrandOrigin; size?: number }> = ({
  origin,
  size = 26,
}) => {
  switch (origin) {
    case 'linkedin.com':
      return (
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-label="LinkedIn favicon">
          <rect width="28" height="28" rx="6" fill="#0A66C2" />
          <path
            d="M8.2 11.5H5.4V21H8.2V11.5ZM6.8 10.3C7.7 10.3 8.4 9.5 8.4 8.6C8.4 7.7 7.7 7 6.8 7C5.9 7 5.2 7.7 5.2 8.6C5.2 9.5 5.9 10.3 6.8 10.3ZM22.6 21H19.8V16.2C19.8 15 19.8 13.5 18.2 13.5C16.5 13.5 16.3 14.8 16.3 16.1V21H13.5V11.5H16.2V12.8H16.24C16.6 12.1 17.5 11.3 19 11.3C21.9 11.3 22.6 13.2 22.6 15.6V21Z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case 'github.com':
      return (
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-label="GitHub favicon">
          <rect width="28" height="28" rx="6" fill="#1B1F24" stroke="#6E7681" strokeWidth="1" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 5.5C9.3 5.5 5.5 9.3 5.5 14C5.5 17.76 7.94 20.94 11.31 22.07C11.74 22.15 11.9 21.89 11.9 21.66C11.9 21.46 11.89 20.8 11.89 20.1C9.53 20.61 9.03 19.1 9.03 19.1C8.65 18.12 8.09 17.86 8.09 17.86C7.32 17.33 8.15 17.34 8.15 17.34C9 17.4 9.45 18.21 9.45 18.21C10.2 19.51 11.43 19.14 11.92 18.92C11.99 18.37 12.21 18 12.46 17.78C10.57 17.57 8.59 16.84 8.59 13.58C8.59 12.65 8.92 11.89 9.47 11.3C9.38 11.08 9.09 10.21 9.55 9.03C9.55 9.03 10.26 8.8 11.89 9.9C12.57 9.71 13.29 9.62 14.01 9.62C14.73 9.62 15.45 9.71 16.13 9.9C17.75 8.8 18.46 9.03 18.46 9.03C18.92 10.21 18.63 11.08 18.55 11.3C19.1 11.89 19.42 12.65 19.42 13.58C19.42 16.85 17.43 17.57 15.54 17.78C15.85 18.05 16.12 18.57 16.12 19.38C16.12 20.54 16.11 21.37 16.11 21.66C16.11 21.89 16.26 22.16 16.7 22.07C20.06 20.94 22.5 17.75 22.5 14C22.5 9.3 18.7 5.5 14 5.5Z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case 'stripe.com':
      return (
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-label="Stripe favicon">
          <rect width="28" height="28" rx="6" fill="#635BFF" />
          <path
            d="M13.3 11.2C13.3 10.4 13.9 10.1 14.9 10.1C16.3 10.1 18.1 10.5 19.5 11.3V7.4C18 6.8 16.5 6.5 14.9 6.5C11.2 6.5 8.7 8.4 8.7 11.5C8.7 16.3 15.3 15.5 15.3 17.6C15.3 18.5 14.5 18.8 13.4 18.8C11.8 18.8 9.7 18.1 8.1 17.2V21.2C9.9 22 11.7 22.3 13.4 22.3C17.2 22.3 19.9 20.5 19.9 17.3C19.9 12.1 13.3 13.1 13.3 11.2Z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case 'vercel.com':
      return (
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-label="Vercel favicon">
          <rect width="28" height="28" rx="6" fill="#17191E" stroke="#6E7681" strokeWidth="1" />
          <path d="M14 7L22 20.5H6L14 7Z" fill="#FFFFFF" />
        </svg>
      );
    case 'aws.amazon.com':
      return (
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-label="AWS favicon">
          <rect width="28" height="28" rx="6" fill="#232F3E" />
          <path d="M7.5 18.2C11.2 20.6 16.8 20.6 20.5 18.2" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" />
          <text x="7.5" y="14.5" fill="#FFFFFF" fontSize="8.5" fontWeight="800" fontFamily="system-ui, sans-serif">
            AWS
          </text>
        </svg>
      );
    case 'linear.app':
      return (
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-label="Linear favicon">
          <rect width="28" height="28" rx="6" fill="#22252A" stroke="#6E7681" strokeWidth="1" />
          <circle cx="14" cy="14" r="7.5" stroke="#CBD5E1" strokeWidth="1.8" />
          <path d="M8.5 17.5L17.5 8.5M10.5 19.5L19.5 10.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'slack.com':
      return (
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-label="Slack favicon">
          <rect width="28" height="28" rx="6" fill="#2C1433" />
          <rect x="7" y="11.5" width="6" height="2.6" rx="1.3" fill="#36C5F0" />
          <rect x="11.5" y="7" width="2.6" height="6" rx="1.3" fill="#2EB67D" />
          <rect x="15" y="14" width="6" height="2.6" rx="1.3" fill="#ECB22E" />
          <rect x="14" y="15" width="2.6" height="6" rx="1.3" fill="#E01E5A" />
        </svg>
      );
    case 'console.anthropic.com':
      return (
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-label="Anthropic favicon">
          <rect width="28" height="28" rx="6" fill="#2B2723" stroke="#6E7681" strokeWidth="1" />
          <path d="M11.5 8L6.8 20H9.4L13.8 8H11.5ZM16.5 8L21.2 20H18.6L14.2 8H16.5Z" fill="#D97757" />
        </svg>
      );
  }
};

/**
 * Universal Action Bucket Badge:
 * Every semantic action icon sits inside a consistent, waveguide-safe Deep Slate-Indigo
 * rounded tile (`#2A3650` -> `#222C42`) so the user immediately recognizes "this is the
 * action bucket" without hunting across left and right corners.
 * All icons are bold, high-contrast silhouettes with zero overlapping line clutter.
 */
export const OperationIllustration: React.FC<{
  kind: OperationIllustrationKind;
  size?: number;
}> = ({ kind, size = 54 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      style={{ flexShrink: 0 }}
      aria-label={`${kind} action badge`}
    >
      <defs>
        <linearGradient id="universalActionTile" x1="0" y1="0" x2="0" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#314163" />
          <stop offset="100%" stopColor="#232E47" />
        </linearGradient>
      </defs>
      {/* Universal Deep Slate-Blue Action Tile Backdrop */}
      <rect
        x="1"
        y="1"
        width="54"
        height="54"
        rx="15"
        fill="url(#universalActionTile)"
        stroke="rgba(147, 197, 253, 0.42)"
        strokeWidth="1.5"
      />

      {kind === 'passkey-account-create' && (
        <>
          {/* Bold Unmistakable Passkey Key (no overlapping shoulder!) + Plus Spark */}
          <circle cx="21" cy="31" r="8.5" stroke="#FFFFFF" strokeWidth="3.2" fill="#1E293B" />
          <circle cx="21" cy="31" r="2.8" fill="#93C5FD" />
          <path
            d="M29.5 31H43M36 31V37M41.5 31V39"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Minting '+' badge in top-right of key */}
          <path d="M38 14V22M34 18H42" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
        </>
      )}

      {kind === 'passkey-signin' && (
        <>
          {/* Bold Shield with Keyhole */}
          <path
            d="M28 10L42 15.5V27.5C42 36.8 35.8 43.8 28 46.5C20.2 43.8 14 36.8 14 27.5V15.5L28 10Z"
            fill="#1E293B"
            stroke="#FFFFFF"
            strokeWidth="2.8"
          />
          <circle cx="28" cy="25" r="4" fill="#60A5FA" />
          <path d="M28 29V36" stroke="#60A5FA" strokeWidth="3.2" strokeLinecap="round" />
        </>
      )}

      {kind === 'credit-card-charge' && (
        <>
          {/* Bold Dollar Coin + Contactless Tap Waves (never looks like a keyboard!) */}
          <circle cx="23" cy="28" r="12" fill="#1E293B" stroke="#FFFFFF" strokeWidth="2.8" />
          <text
            x="23"
            y="33.5"
            textAnchor="middle"
            fill="#FBBF24"
            fontSize="16"
            fontWeight="800"
            fontFamily="system-ui, sans-serif"
          >
            $
          </text>
          <path d="M38 22C40.2 25.2 40.2 30.8 38 34" stroke="#93C5FD" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M43 18.5C46.2 23.8 46.2 32.2 43 37.5" stroke="#93C5FD" strokeWidth="2.6" strokeLinecap="round" />
        </>
      )}

      {kind === 'subscription-cycle' && (
        <>
          {/* Bold Circular Renewal Arrows around '$' */}
          <path d="M16 24C17.5 17.5 23.2 13 30 14C35.2 14.8 39.2 18.5 40.5 23.5" stroke="#93C5FD" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M36.5 20.5L40.8 24.2L43.5 19.5" stroke="#93C5FD" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M40 32C38.5 38.5 32.8 43 26 42C20.8 41.2 16.8 37.5 15.5 32.5" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
          <text x="28" y="33" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="800" fontFamily="system-ui, sans-serif">
            $
          </text>
        </>
      )}

      {kind === 'analytical-tradeoff' && (
        <>
          {/* Bold Y-Fork Decision Signpost */}
          <path d="M28 44V26" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M28 26L16 15M28 26L40 15" stroke="#93C5FD" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M16 21V15H22" stroke="#93C5FD" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M40 21V15H34" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      {kind === 'ballistic-agent' && (
        <>
          {/* Bold Warning Triangle + Runaway Loop Arrow (never looks like a snake or orbit!) */}
          <path
            d="M28 12L44 41H12L28 12Z"
            fill="#3B2328"
            stroke="#FBBF24"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <line x1="28" y1="22" x2="28" y2="31" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="28" cy="36.5" r="2" fill="#FFFFFF" />
        </>
      )}

      {(kind === 'worktree-collision' ||
        kind === 'destructive-deploy' ||
        kind === 'vault-secret-inject' ||
        kind === 'oauth-scope-grant' ||
        kind === 'outbound-post' ||
        kind === 'human-challenge') && (
        <>
          <circle cx="28" cy="28" r="14" fill="#1E293B" stroke="#FFFFFF" strokeWidth="2.8" />
          <path d="M22 28L26.5 32.5L35 23.5" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
};
