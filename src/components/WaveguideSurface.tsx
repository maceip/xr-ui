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
 * Canonical single-surface waveguide card modeled directly on Meta Ray-Ban Display
 * hardware recordings (`rec1_25.jpg`, `rec1_05.jpg`, `rec4_05.jpg`):
 * 1. Light-gray optical light-blocking panel (`#5A5D66` -> `#4C4F57`) to mask room light.
 * 2. Left-aligned visual hierarchy: Site Favicon + Origin at the top-left (nothing in
 *    the top-right corner!), and the 54x54 Universal Slate-Blue Action Tile paired
 *    directly beside the headline on the left.
 * 3. Elevated 3D bevel-lit pillow button when selected; single-verb button labels only.
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
        background: 'linear-gradient(180deg, #5A5D66 0%, #4C4F57 100%)',
        border: '1px solid rgba(255, 255, 255, 0.24)',
        boxShadow:
          'inset 0 1px 1px rgba(255, 255, 255, 0.28), 0 16px 36px rgba(0, 0, 0, 0.55)',
        borderRadius: 26,
        padding: '24px 26px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        color: '#FFFFFF',
      }}
    >
      {/* Top Left Origin Pill ONLY (no competing icon on the right!) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
        <SiteFavicon origin={origin} size={24} />
        <span
          style={{
            fontSize: 14.5,
            fontWeight: 600,
            color: '#FFFFFF',
            letterSpacing: '-0.01em',
          }}
        >
          {origin}
        </span>
        <span style={{ color: 'rgba(255, 255, 255, 0.45)' }}>·</span>
        <span
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.78)',
          }}
        >
          {categoryLabel}
        </span>
      </div>

      {/* Main Action Row: Universal Slate-Blue Action Tile on the Left + Headline/Subtitle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <OperationIllustration kind={illustration} size={56} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flex: 1 }}>
          <div
            style={{
              fontSize: 23,
              fontWeight: 700,
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
            }}
          >
            {headline}
          </div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 1.35,
              color: 'rgba(255, 255, 255, 0.86)',
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      {/* Optional Flat Evidence Strip */}
      {children && (
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.18)',
            paddingTop: 12,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {children}
        </div>
      )}

      {/* Side-by-Side Horizontal Action Pills with Elevated 3D Selected State */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 14,
          marginTop: 2,
        }}
      >
        {actions.map((action, idx) => {
          const isFocused = idx === focusedActionIndex;
          const isDestructive = action.role === 'destructive';

          const selectedBackground = isDestructive
            ? 'linear-gradient(180deg, #8B4C52 0%, #68343A 55%, #743C42 100%)'
            : 'linear-gradient(180deg, #7E828E 0%, #5F636E 52%, #6D717C 100%)';

          const unselectedBackground = isDestructive
            ? 'rgba(90, 34, 40, 0.42)'
            : 'rgba(34, 36, 42, 0.30)';

          return (
            <button
              key={action.id}
              type="button"
              onClick={() => onSelectAction?.(action.id, idx)}
              style={{
                flex: 1,
                height: 50,
                borderRadius: 16,
                background: isFocused ? selectedBackground : unselectedBackground,
                color: isFocused
                  ? '#FFFFFF'
                  : isDestructive
                    ? '#FFD1D1'
                    : 'rgba(255, 255, 255, 0.80)',
                fontSize: 17,
                fontWeight: isFocused ? 700 : 500,
                border: isFocused
                  ? '1.5px solid rgba(255, 255, 255, 0.72)'
                  : '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: isFocused
                  ? 'inset 0 2px 3px rgba(255, 255, 255, 0.65), inset 0 -2px 4px rgba(0, 0, 0, 0.36), 0 6px 14px rgba(0, 0, 0, 0.42)'
                  : 'inset 0 1px 2px rgba(0, 0, 0, 0.20)',
                transform: isFocused ? 'translateY(-1px)' : 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                outline: 'none',
                textShadow: isFocused ? '0 1px 2px rgba(0, 0, 0, 0.35)' : 'none',
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
