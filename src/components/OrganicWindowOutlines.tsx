import React from 'react';

export type OrganicSilhouetteId =
  | 'human-head'
  | 'whisper-leaf'
  | 'cumulus-cloud'
  | 'social-heart'
  | 'black-hole'
  | 'price-tag';

export interface OrganicSilhouetteSpec {
  id: OrganicSilhouetteId;
  label: string;
  domain: string;
  title: string;
  subtitle: string;
  primaryVerb: string;
  secondaryVerb: string;
  strokeColor: string;
  svgPath: string;
}

export const ORGANIC_SILHOUETTE_SPECS: OrganicSilhouetteSpec[] = [
  {
    id: 'human-head',
    label: '1 · Human Head Silhouette',
    domain: 'Identity / Account / Person',
    title: 'Mint Passkey?',
    subtitle: 'Cranium dome + ears + chin = human identity',
    primaryVerb: 'Create',
    secondaryVerb: 'Deny',
    strokeColor: '#5EEAD4',
    svgPath:
      'M 136 8 C 70 8, 34 36, 32 84 C 12 84, 4 100, 4 128 C 4 156, 14 172, 32 174 C 40 232, 86 266, 136 272 C 186 266, 232 232, 240 174 C 258 172, 268 156, 268 128 C 268 100, 260 84, 240 84 C 238 36, 202 8, 136 8 Z',
  },
  {
    id: 'whisper-leaf',
    label: '2 · Organic Whisper Leaf',
    domain: 'Outbound Whisper / Note',
    title: 'Post to #release?',
    subtitle: 'Pointed top-right leaf apex = outbound whisper',
    primaryVerb: 'Send',
    secondaryVerb: 'Drop',
    strokeColor: '#5EEAD4',
    svgPath:
      'M 260 14 C 172 10, 78 18, 36 62 C 6 94, 4 158, 22 206 C 42 250, 98 268, 160 264 C 216 260, 244 226, 252 172 C 258 128, 254 68, 260 14 Z',
  },
  {
    id: 'cumulus-cloud',
    label: '3 · Cumulus Cloud',
    domain: 'Cloud Sync / Remote State',
    title: 'Sync Vault to Cloud?',
    subtitle: 'Triple cloud dome + flat horizon base',
    primaryVerb: 'Sync',
    secondaryVerb: 'Local',
    strokeColor: '#FDE68A',
    svgPath:
      'M 8 260 C 2 186, 10 124, 34 118 C 38 68, 72 44, 112 54 C 132 12, 194 12, 218 60 C 254 68, 268 118, 264 260 Z',
  },
  {
    id: 'social-heart',
    label: '4 · Social Heart Silhouette',
    domain: 'Close Relationship / DM',
    title: 'Maya: "7pm sushi?"',
    subtitle: 'Twin top lobes + heart point = personal',
    primaryVerb: 'Reply',
    secondaryVerb: 'Mute',
    strokeColor: '#F9A8D4',
    svgPath:
      'M 136 36 C 116 4, 44 2, 16 28 C -4 48, 2 114, 18 168 C 36 226, 88 260, 136 272 C 184 260, 236 226, 254 168 C 270 114, 276 48, 256 28 C 228 2, 156 4, 136 36 Z',
  },
  {
    id: 'black-hole',
    label: '5 · Black-Hole Code Vortex',
    domain: 'Runaway Code / Repo Loop',
    title: 'auth.rs 6× Loop',
    subtitle: 'Pinched waist + vortex ring = loop',
    primaryVerb: 'Freeze',
    secondaryVerb: 'Revert',
    strokeColor: '#93C5FD',
    svgPath:
      'M 22 14 C 74 2, 102 28, 136 28 C 170 28, 198 2, 250 14 C 272 20, 270 68, 248 106 C 234 130, 234 148, 248 172 C 270 210, 272 258, 250 264 C 198 276, 170 250, 136 250 C 102 250, 74 276, 22 264 C 0 258, 2 210, 24 172 C 38 148, 38 130, 24 106 C 2 68, 0 20, 22 14 Z',
  },
  {
    id: 'price-tag',
    label: '6 · Commerce Price-Tag',
    domain: 'Checkout / Purchase',
    title: '$128 · Killshot 2',
    subtitle: 'Left tag eyelet + receipt teeth = buy',
    primaryVerb: 'Buy $128',
    secondaryVerb: 'Skip',
    strokeColor: '#FBBF24',
    svgPath:
      'M 48 12 L 248 12 L 264 30 L 248 48 L 264 66 L 248 84 L 264 102 L 248 120 L 264 138 L 248 156 L 264 174 L 248 192 L 264 210 L 248 228 L 264 246 L 248 266 L 48 266 L 8 198 L 8 80 Z',
  },
];

export const OrganicWindowOutlineCard: React.FC<{
  spec: OrganicSilhouetteSpec;
  onAction?: (verb: string) => void;
}> = ({ spec, onAction }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: 272,
        height: 278,
        padding:
          spec.id === 'cumulus-cloud'
            ? '76px 24px 24px 38px'
            : '42px 32px 38px 32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <svg
        viewBox="0 0 272 278"
        preserveAspectRatio="none"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        <path
          d={spec.svgPath}
          fill="#585D67"
          stroke={spec.strokeColor}
          strokeWidth={2.4}
        />
      </svg>
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          fontSize: 10.5,
          fontWeight: 700,
          color: spec.strokeColor,
          textTransform: 'uppercase',
          letterSpacing: '0.03em',
        }}
      >
        {spec.label}
      </div>
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#FFFFFF' }}>
          {spec.title}
        </div>
        <div
          style={{
            fontSize: 11.5,
            color: 'rgba(255,255,255,0.85)',
            marginTop: 4,
          }}
        >
          {spec.subtitle}
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          gap: 8,
          width: 148,
        }}
      >
        <button
          type="button"
          onClick={() => onAction?.(spec.primaryVerb)}
          style={{
            flex: 1,
            height: 32,
            borderRadius: 999,
            background:
              'linear-gradient(180deg, #838895 0%, #616570 52%, #6E737F 100%)',
            border: '1.5px solid rgba(255,255,255,0.78)',
            color: '#FFFFFF',
            fontWeight: 700,
            fontSize: 12.5,
            cursor: 'pointer',
          }}
        >
          {spec.primaryVerb}
        </button>
        <button
          type="button"
          onClick={() => onAction?.(spec.secondaryVerb)}
          style={{
            flex: 1,
            height: 32,
            borderRadius: 999,
            background: 'rgba(28,30,36,0.34)',
            border: '1px solid rgba(255,255,255,0.16)',
            color: 'rgba(255,255,255,0.82)',
            fontWeight: 500,
            fontSize: 12.5,
            cursor: 'pointer',
          }}
        >
          {spec.secondaryVerb}
        </button>
      </div>
    </div>
  );
};
