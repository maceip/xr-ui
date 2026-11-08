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
 * Crisp 28x28 site favicon badge rendered inside the single flat card header.
 * Gives instant brand recognition without requiring external network fetches on glasses.
 */
export const SiteFavicon: React.FC<{ origin: BrandOrigin; size?: number }> = ({
  origin,
  size = 28,
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
          <rect width="28" height="28" rx="6" fill="#1B1F24" stroke="#484F58" strokeWidth="1" />
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
          <rect width="28" height="28" rx="6" fill="#17191E" stroke="#484F58" strokeWidth="1" />
          <path d="M14 7L22 20.5H6L14 7Z" fill="#FFFFFF" />
        </svg>
      );
    case 'aws.amazon.com':
      return (
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-label="AWS favicon">
          <rect width="28" height="28" rx="6" fill="#232F3E" />
          <path
            d="M7.5 18.2C11.2 20.6 16.8 20.6 20.5 18.2"
            stroke="#FF9900"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path d="M19.2 16.5L21.2 18L19.8 20.1" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="7.5" y="14.5" fill="#FFFFFF" fontSize="8.5" fontWeight="800" fontFamily="system-ui, sans-serif">
            AWS
          </text>
        </svg>
      );
    case 'linear.app':
      return (
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-label="Linear favicon">
          <rect width="28" height="28" rx="6" fill="#22252A" stroke="#4E5562" strokeWidth="1" />
          <circle cx="14" cy="14" r="7.5" stroke="#8A94A6" strokeWidth="1.8" />
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
          <rect width="28" height="28" rx="6" fill="#2B2723" stroke="#574E46" strokeWidth="1" />
          <path d="M11.5 8L6.8 20H9.4L13.8 8H11.5ZM16.5 8L21.2 20H18.6L14.2 8H16.5Z" fill="#D97757" />
        </svg>
      );
  }
};

/**
 * Relatable, restrained two-tone vector illustrations that bucket operations visually
 * so the user grasps the consequence of an action before reading a single word.
 */
export const OperationIllustration: React.FC<{
  kind: OperationIllustrationKind;
  size?: number;
}> = ({ kind, size = 48 }) => {
  switch (kind) {
    case 'passkey-account-create':
      // New User Badge + Minting a Passkey Key in Meta Blitz Browser
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="New account and passkey creation illustration">
          {/* User silhouette */}
          <circle cx="17" cy="16" r="6" stroke="#FFFFFF" strokeWidth="2.2" />
          <path d="M7 33C7 27.8 11.2 24.5 17 24.5C20.2 24.5 22.9 25.5 24.7 27.3" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
          {/* Passkey Key + Plus badge (Blitz browser passkey minting) */}
          <circle cx="31" cy="31" r="5.5" stroke="#60A5FA" strokeWidth="2.4" fill="#1E293B" />
          <circle cx="31" cy="31" r="1.8" fill="#60A5FA" />
          <path d="M36.5 31H43M40.5 31V34.5" stroke="#60A5FA" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M35 12V18M32 15H38" stroke="#60A5FA" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      );

    case 'passkey-signin':
      // Existing Passkey Unlock + Biometric/Pinch Shield
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="Passkey sign-in illustration">
          <path
            d="M24 7L37 12.5V23.5C37 32.2 31.4 39.2 24 41.5C16.6 39.2 11 32.2 11 23.5V12.5L24 7Z"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            fill="#2E3440"
          />
          <circle cx="22" cy="24" r="4" stroke="#60A5FA" strokeWidth="2.2" />
          <path d="M26 24H32M29.5 24V27" stroke="#60A5FA" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case 'credit-card-charge':
      // Credit card with EMV chip + contactless wave
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="Credit card payment illustration">
          <rect x="6" y="12" width="36" height="24" rx="4.5" stroke="#FFFFFF" strokeWidth="2.2" fill="#2E3440" />
          <line x1="6" y1="19" x2="42" y2="19" stroke="#94A3B8" strokeWidth="2.2" />
          <rect x="11" y="24" width="7" height="5.5" rx="1.2" stroke="#FBBF24" strokeWidth="2" />
          <line x1="23" y1="28" x2="36" y2="28" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case 'subscription-cycle':
      // Recurring billing loop around a card badge
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="Recurring subscription illustration">
          <path
            d="M12 20C13.8 13.8 19.6 9.5 26.3 10.2C32.2 10.8 37 15.2 38.2 21"
            stroke="#60A5FA"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path d="M35 17.5L38.5 21.5L41.5 17" stroke="#60A5FA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M36 28C34.2 34.2 28.4 38.5 21.7 37.8C15.8 37.2 11 32.8 9.8 27"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path d="M13 30.5L9.5 26.5L6.5 31" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="18" y="27" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">
            $
          </text>
        </svg>
      );

    case 'analytical-tradeoff':
      // Architectural Fork / Balance Scale between Option A & Option B
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="Analytical architecture decision illustration">
          <path d="M24 39V19" stroke="#94A3B8" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M24 23L13 13M24 23L35 13" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="13" cy="13" r="4.5" fill="#2E3440" stroke="#60A5FA" strokeWidth="2.2" />
          <circle cx="35" cy="13" r="4.5" fill="#2E3440" stroke="#FFFFFF" strokeWidth="2.2" />
          <circle cx="24" cy="39" r="3" fill="#94A3B8" />
        </svg>
      );

    case 'ballistic-agent':
      // Trajectory vector deflecting off-axis from target
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="Ballistic agent trajectory illustration">
          <line x1="8" y1="32" x2="40" y2="32" stroke="#64748B" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="10" cy="32" r="3.5" fill="#FFFFFF" />
          <circle cx="39" cy="32" r="3.5" stroke="#94A3B8" strokeWidth="2" />
          <path d="M10 32L21 32L29 14L36 14" stroke="#F59E0B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="36" cy="14" r="4" fill="#F59E0B" />
        </svg>
      );

    case 'worktree-collision':
      // Two parallel worktree tracks converging on the same file node
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="Worktree collision illustration">
          <path d="M8 15H20L28 24H40" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 33H20L28 24" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="11" cy="15" r="3" fill="#FFFFFF" />
          <circle cx="11" cy="33" r="3" fill="#F59E0B" />
          <circle cx="31" cy="24" r="5" fill="#2E3440" stroke="#F87171" strokeWidth="2.4" />
        </svg>
      );

    case 'destructive-deploy':
      // Production gate / hazard barrier
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="Destructive deploy gate illustration">
          <path d="M24 9L41 38H7L24 9Z" stroke="#F87171" strokeWidth="2.2" strokeLinejoin="round" fill="#3B2328" />
          <line x1="24" y1="19" x2="24" y2="28" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="24" cy="33" r="1.6" fill="#FFFFFF" />
        </svg>
      );

    case 'vault-secret-inject':
      // Blind vault keyhole + masked credential dots
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="Blind vault secret injection illustration">
          <rect x="8" y="14" width="32" height="20" rx="5" stroke="#FFFFFF" strokeWidth="2.2" fill="#2E3440" />
          <circle cx="16" cy="24" r="2.2" fill="#60A5FA" />
          <circle cx="24" cy="24" r="2.2" fill="#60A5FA" />
          <circle cx="32" cy="24" r="2.2" fill="#60A5FA" />
        </svg>
      );

    case 'oauth-scope-grant':
      // Two nodes linked by a permission bridge
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="OAuth scope grant illustration">
          <rect x="7" y="16" width="12" height="16" rx="3" stroke="#FFFFFF" strokeWidth="2.2" />
          <rect x="29" y="16" width="12" height="16" rx="3" stroke="#60A5FA" strokeWidth="2.2" />
          <path d="M19 24H29" stroke="#94A3B8" strokeWidth="2.2" strokeDasharray="2.5 2.5" />
          <circle cx="24" cy="24" r="3" fill="#60A5FA" />
        </svg>
      );

    case 'outbound-post':
      // Paper plane / external broadcast
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="Outbound message commit illustration">
          <path
            d="M9 23L39 10L31 38L22 27L9 23Z"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinejoin="round"
            fill="#2E3440"
          />
          <path d="M22 27L39 10" stroke="#60A5FA" strokeWidth="2" />
        </svg>
      );

    case 'human-challenge':
      // Hand / verification checkpoint
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="Human verification challenge illustration">
          <rect x="10" y="11" width="28" height="26" rx="5" stroke="#FFFFFF" strokeWidth="2.2" fill="#2E3440" />
          <path d="M18 24L22.5 28.5L31 19.5" stroke="#60A5FA" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
};
