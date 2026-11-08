import React from 'react';
import {
  BrandOrigin,
  OperationIllustration,
  OperationIllustrationKind,
  SiteFavicon,
} from '../icons/FaviconsAndIllustrations';

export interface WaveguideAction {
  id: string;
  label: string;
  role: 'primary' | 'secondary' | 'destructive';
}

export interface WaveguideCardProps {
  origin: BrandOrigin;
  categoryLabel: string;
  illustration: OperationIllustrationKind;
  headline: string;
  subtitle: string;
  children?: React.ReactNode;
  actions: WaveguideAction[];
  focusedActionIndex?: number;
  onSelectAction?: (actionId: string, index: number) => void;
}

/**
 * Canonical single-surface waveguide card modeled after Meta's first-party
 * Threads / WhatsApp glasses modals:
 * - Exactly ONE rounded card surface (#252932) on transparent black (#000000).
 * - Zero nested ovals, zero dark gutters/moats inside the card, zero rainbow fills.
 * - Real site favicon + origin identity paired with a relatable 2-tone operation illustration.
 * - Side-by-side horizontal action buttons at the bottom for 1D temple swipe navigation.
 */
export const WaveguideSurface: React.FC<WaveguideCardProps> = ({
  origin,
  categoryLabel,
  illustration,
  headline,
  subtitle,
  children,
  actions,
  focusedActionIndex = 0,
  onSelectAction,
}) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 536,
        backgroundColor: '#252932',
        border: '1.5px solid #48505E',
        borderRadius: 28,
        padding: '26px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        color: '#FFFFFF',
      }}
    >
      {/* Top Identity Row: Real Site Favicon + Domain + Operation Bucket Illustration */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <SiteFavicon origin={origin} size={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <span
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: '#E2E8F0',
                letterSpacing: '-0.01em',
              }}
            >
              {origin}
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: '#94A3B8',
                letterSpacing: '0.02em',
              }}
            >
              {categoryLabel}
            </span>
          </div>
        </div>

        <OperationIllustration kind={illustration} size={44} />
      </div>

      {/* Primary Question & Concise Context */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div
          style={{
            fontSize: 25,
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
          }}
        >
          {headline}
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.38,
            color: '#B8C1CF',
          }}
        >
          {subtitle}
        </div>
      </div>

      {/* Optional Flat Evidence Strip (separated only by a 1px hairline — never a nested box or oval) */}
      {children && (
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.10)',
            paddingTop: 14,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          {children}
        </div>
      )}

      {/* Side-by-Side Horizontal Action Pills */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 12,
          marginTop: 2,
        }}
      >
        {actions.map((action, idx) => {
          const isFocused = idx === focusedActionIndex;
          const isDestructive = action.role === 'destructive';
          const isPrimary = action.role === 'primary';

          const bg = isPrimary
            ? '#384152'
            : isDestructive
              ? '#422328'
              : '#303540';

          const textColor = isDestructive ? '#FCA5A5' : '#FFFFFF';

          return (
            <button
              key={action.id}
              type="button"
              onClick={() => onSelectAction?.(action.id, idx)}
              style={{
                flex: 1,
                height: 50,
                borderRadius: 14,
                backgroundColor: bg,
                color: textColor,
                fontSize: 17,
                fontWeight: 600,
                border: isFocused
                  ? '2.5px solid #FFFFFF'
                  : '1px solid rgba(255, 255, 255, 0.14)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                outline: 'none',
              }}
            >
              {action.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
