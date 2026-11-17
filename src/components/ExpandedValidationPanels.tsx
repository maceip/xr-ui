import React from 'react';

export interface ExpandedValidationSpec {
  id: 'expanded-buy' | 'expanded-auth' | 'expanded-write';
  tag: string;
  pick1Title: string;
  pick1Meta: string;
  pick2Title: string;
  pick2Meta: string;
  userPrompt: string;
  agentReply: string;
  primaryVerb: string;
  secondaryVerb: string;
}

export const EXPANDED_VALIDATION_SPECS: ExpandedValidationSpec[] = [
  {
    id: 'expanded-buy',
    tag: 'Expanded Buy · #1 Pick vs. #2 Runner-Up',
    pick1Title: '#1 · Nike Killshot 2 · $128',
    pick1Meta: 'In stock · Arrives tomorrow',
    pick2Title: '#2 · Adidas Samba OG · $115',
    pick2Meta: '$13 cheaper · Ships in 5 days',
    userPrompt: 'Why not the $115 Samba?',
    agentReply:
      'Samba ships next Tuesday; Killshot arrives before your Friday flight.',
    primaryVerb: 'Buy #1',
    secondaryVerb: 'Buy #2',
  },
  {
    id: 'expanded-auth',
    tag: 'Expanded Auth · Scope Diff + Chat Validation',
    pick1Title: '#1 · Read + Write Issues',
    pick1Meta: 'Files bug reports · No Billing',
    pick2Title: '#2 · Read-Only (1h TTL)',
    pick2Meta: 'Views issues · Cannot file bugs',
    userPrompt: 'Why does it need Write?',
    agentReply:
      'To open the 3 regression tickets from cargo test automatically.',
    primaryVerb: 'Grant #1',
    secondaryVerb: 'Use #2',
  },
  {
    id: 'expanded-write',
    tag: 'Expanded Write · #1 Drop vs. #2 Cold Archive',
    pick1Title: '#2 · Archive to S3 Parquet',
    pick1Meta: 'Keeps 14.2k rows · 2s restore',
    pick2Title: '#1 · Drop legacy_sessions',
    pick2Meta: '14.2k rows → 0 · Irreversible',
    userPrompt: 'Any clients using it?',
    agentReply:
      '0 hits in 14d, but Option #2 moves rows to S3 first so rollback is instant.',
    primaryVerb: 'Archive #2',
    secondaryVerb: 'Drop #1',
  },
];

export const ExpandedValidationCard: React.FC<{
  spec: ExpandedValidationSpec;
  onAction?: (verb: string) => void;
}> = ({ spec, onAction }) => {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #5C6069 0%, #4C4F58 100%)',
        border: '1px solid rgba(255,255,255,0.28)',
        borderRadius: 24,
        padding: '18px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        boxShadow:
          'inset 0 1px 1px rgba(255,255,255,0.32), 0 16px 34px rgba(0,0,0,0.55)',
      }}
    >
      <div
        style={{
          fontSize: 10.5,
          fontWeight: 700,
          color: '#93C5FD',
          textTransform: 'uppercase',
          letterSpacing: '0.03em',
        }}
      >
        {spec.tag}
      </div>

      <div
        style={{
          paddingBottom: 8,
          borderBottom: '1px solid rgba(255,255,255,0.16)',
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF' }}>
          {spec.pick1Title}
        </div>
        <div style={{ fontSize: 11.5, color: '#A7F3D0', marginTop: 2 }}>
          {spec.pick1Meta}
        </div>
      </div>

      <div
        style={{
          paddingBottom: 8,
          borderBottom: '1px solid rgba(255,255,255,0.16)',
        }}
      >
        <div style={{ fontSize: 13.5, fontWeight: 600, color: '#FFFFFF' }}>
          {spec.pick2Title}
        </div>
        <div style={{ fontSize: 11.5, color: '#FDE68A', marginTop: 2 }}>
          {spec.pick2Meta}
        </div>
      </div>

      <div
        style={{
          borderLeft: '3px solid #93C5FD',
          paddingLeft: 10,
          fontSize: 11.5,
          lineHeight: 1.35,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <div style={{ color: '#93C5FD', fontWeight: 700 }}>
          🎙️ You: &ldquo;{spec.userPrompt}&rdquo;
        </div>
        <div style={{ color: '#FFFFFF' }}>
          <strong>Muse:</strong> &ldquo;{spec.agentReply}&rdquo;
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10, marginTop: 'auto', paddingTop: 4 }}>
        <button
          type="button"
          onClick={() => onAction?.(spec.primaryVerb)}
          style={{
            flex: 1,
            height: 36,
            borderRadius: 13,
            background:
              'linear-gradient(180deg, #838895 0%, #616570 52%, #6E737F 100%)',
            border: '1.5px solid rgba(255,255,255,0.78)',
            color: '#FFFFFF',
            fontWeight: 700,
            fontSize: 13,
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
            height: 36,
            borderRadius: 13,
            background: 'rgba(28,30,36,0.34)',
            border: '1px solid rgba(255,255,255,0.16)',
            color: 'rgba(255,255,255,0.82)',
            fontWeight: 500,
            fontSize: 13,
            cursor: 'pointer',
          }}
        >
          {spec.secondaryVerb}
        </button>
      </div>
    </div>
  );
};
