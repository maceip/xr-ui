import React from 'react';

export type BallisticAlternativeId =
  | 'deflected-vector'
  | 'three-beat-ledger'
  | 'scope-bullseye'
  | 'milestone-vs-thrash'
  | 'glideslope-split';

export interface AgentTrajectoryTelemetry {
  repo: string;
  branch: string;
  doneSummary: string;
  doingSummary: string;
  shouldSummary: string;
  anomalyBadge: string;
  targetScope: string;
  touchedOutOfScope: string[];
  completedMilestones: number;
  totalMilestones: number;
  failedEditLoops: number;
}

export const DEFAULT_BALLISTIC_TELEMETRY: AgentTrajectoryTelemetry = {
  repo: 'maceip/walkaway',
  branch: 'wt-auth',
  doneSummary: 'Added WebAuthn verifier in src/auth.rs',
  doingSummary: 'Rewriting 14 unrelated UI files & deleting test asserts',
  shouldSummary: 'Run cargo test --package auth & open PR',
  anomalyBadge: '6× edit loop · 4 asserts deleted',
  targetScope: 'src/auth/',
  touchedOutOfScope: ['tests/auth_test.rs', 'apps/ui/theme.ts', 'Cargo.toml'],
  completedMilestones: 1,
  totalMilestones: 3,
  failedEditLoops: 7,
};

export const BALLISTIC_ALTERNATIVES_META: Array<{
  id: BallisticAlternativeId;
  shortName: string;
  title: string;
  rationale: string;
}> = [
  {
    id: 'deflected-vector',
    shortName: '1. Deflected Flight Vector',
    title: '3-Node Trajectory Vector (Done ──► ↱ Detour ──⇢ Goal)',
    rationale:
      'Draws a straight horizontal baseline from Done to Goal, and physically bends the middle "Doing Now" node upward off-axis when the agent loops or drifts out of scope.',
  },
  {
    id: 'three-beat-ledger',
    shortName: '2. 3-Beat Temporal Ledger',
    title: 'DONE · DOING · SHOULD DO Receipt',
    rationale:
      'Replaces raw line counts with three scannable temporal rows (Past, Present, Expected Next) and pins the anomaly badge directly onto the middle "DOING" row.',
  },
  {
    id: 'scope-bullseye',
    shortName: '3. Scope Drift Bullseye',
    title: 'Target Boundary vs. Out-of-Bounds Edits',
    rationale:
      'Pairs a 3-step Done/Now/Next strip with a concentric scope target showing edits escaping from src/auth/ into tests/ and unrelated UI folders.',
  },
  {
    id: 'milestone-vs-thrash',
    shortName: '4. Progress-to-Thrash Ratio',
    title: 'Verified Milestones vs. Unverified Edit Loops',
    rationale:
      'Shows the 3 plan steps alongside a single bar contrasting verified progress (1/3 milestones) against wheel-spinning churn (7 failed edit cycles since last green test).',
  },
  {
    id: 'glideslope-split',
    shortName: '5. Plan-vs-Actual Split Rail',
    title: 'Expected Track vs. Diverging Agent Path',
    rationale:
      'Renders two parallel tracks: the top track shows what the agent SHOULD be doing next, while the bottom track forks away at Step 2 to show the actual runaway behavior.',
  },
];

export const BallisticAlternativeView: React.FC<{
  variant: BallisticAlternativeId;
  data?: AgentTrajectoryTelemetry;
}> = ({ variant, data = DEFAULT_BALLISTIC_TELEMETRY }) => {
  switch (variant) {
    case 'deflected-vector':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* SVG Deflected Vector Diagram */}
          <svg width="100%" height="84" viewBox="0 0 480 84" fill="none">
            {/* Expected straight baseline from DONE to SHOULD DO */}
            <line
              x1="44"
              y1="62"
              x2="436"
              y2="62"
              stroke="#64748B"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Actual deflected path up to DOING NOW */}
            <path
              d="M44 62 L150 62 L210 20 L292 20"
              stroke="#F59E0B"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Node 1: DONE */}
            <circle cx="44" cy="62" r="6" fill="#FFFFFF" />
            <text x="20" y="80" fill="#B8C1CF" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif">
              DONE: auth.rs
            </text>

            {/* Node 2: DOING (Off-axis detour) */}
            <circle cx="250" cy="20" r="6.5" fill="#F59E0B" />
            <text x="155" y="13" fill="#FCD34D" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">
              NOW: {data.anomalyBadge}
            </text>

            {/* Node 3: SHOULD DO (Unreached target on baseline) */}
            <circle cx="436" cy="62" r="6" stroke="#94A3B8" strokeWidth="2.2" fill="#252932" />
            <text x="336" y="80" fill="#94A3B8" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif">
              SHOULD: Run auth tests
            </text>
          </svg>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 13.5,
              color: '#CBD5E1',
            }}
          >
            <span>Doing: {data.doingSummary}</span>
          </div>
        </div>
      );

    case 'three-beat-ledger':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span style={{ width: 82, flexShrink: 0, whiteSpace: 'nowrap', fontSize: 12, fontWeight: 700, color: '#94A3B8' }}>
              ✓ DONE
            </span>
            <span style={{ fontSize: 15, color: '#E2E8F0', flex: 1 }}>
              {data.doneSummary}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span style={{ width: 82, flexShrink: 0, whiteSpace: 'nowrap', fontSize: 12, fontWeight: 700, color: '#FBBF24' }}>
              ↻ DOING
            </span>
            <span style={{ fontSize: 15, fontWeight: 600, color: '#FFFFFF', flex: 1 }}>
              {data.doingSummary}
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, color: '#FCD34D', whiteSpace: 'nowrap' }}>
              7× loop
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span style={{ width: 82, flexShrink: 0, whiteSpace: 'nowrap', fontSize: 12, fontWeight: 700, color: '#60A5FA' }}>
              → SHOULD
            </span>
            <span style={{ fontSize: 15, color: '#B8C1CF', flex: 1 }}>
              {data.shouldSummary}
            </span>
          </div>
        </div>
      );

    case 'scope-bullseye':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          {/* Concentric Scope Bullseye */}
          <svg width="88" height="88" viewBox="0 0 88 88" fill="none" style={{ flexShrink: 0 }}>
            {/* Outer Out-of-Scope Ring */}
            <circle cx="44" cy="44" r="39" stroke="#F87171" strokeWidth="1.8" strokeDasharray="3 3" />
            {/* Inner Target Scope */}
            <circle cx="44" cy="44" r="18" stroke="#94A3B8" strokeWidth="1.8" fill="#2E3440" />
            {/* 1 valid dot in target */}
            <circle cx="44" cy="44" r="3.5" fill="#FFFFFF" />
            {/* 4 ballistic dots outside allowed scope */}
            <circle cx="17" cy="24" r="4" fill="#F59E0B" />
            <circle cx="71" cy="28" r="4" fill="#F87171" />
            <circle cx="68" cy="64" r="4" fill="#F87171" />
            <circle cx="22" cy="67" r="4" fill="#F59E0B" />
          </svg>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
            <div style={{ fontSize: 13.5, color: '#B8C1CF' }}>
              <strong style={{ color: '#FFFFFF' }}>Done:</strong> {data.targetScope} verifier
            </div>
            <div style={{ fontSize: 13.5, color: '#FCD34D' }}>
              <strong>Doing:</strong> Touched 3 out-of-scope paths ({data.touchedOutOfScope.slice(0, 2).join(', ')})
            </div>
            <div style={{ fontSize: 13.5, color: '#94A3B8' }}>
              <strong style={{ color: '#CBD5E1' }}>Should:</strong> Stay in {data.targetScope} &amp; run tests
            </div>
          </div>
        </div>
      );

    case 'milestone-vs-thrash':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* 3-Step Milestone Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 13.5 }}>
            <span style={{ color: '#E2E8F0', fontWeight: 600 }}>✓ 1. Auth verifier</span>
            <span style={{ color: '#FCD34D', fontWeight: 700 }}>↻ 2. Stuck editing UI (7×)</span>
            <span style={{ color: '#94A3B8' }}>○ 3. Pass auth CI</span>
          </div>

          {/* Single Ratio Bar: Verified Progress (Left) vs Unverified Thrash Cycles (Right) */}
          <svg width="100%" height="26" viewBox="0 0 480 26" fill="none">
            <defs>
              <pattern id="thrashHatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#F59E0B" strokeWidth="3" />
              </pattern>
            </defs>
            {/* Verified Progress Segment */}
            <rect x="0" y="4" width="110" height="16" rx="4" fill="#FFFFFF" />
            {/* Thrash Segment */}
            <rect x="116" y="4" width="364" height="16" rx="4" fill="url(#thrashHatch)" stroke="#F59E0B" strokeWidth="1" />
          </svg>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, color: '#B8C1CF' }}>
            <span>1 milestone verified</span>
            <span style={{ color: '#FCD34D', fontWeight: 600 }}>
              {data.failedEditLoops} failed edit cycles since last green test
            </span>
          </div>
        </div>
      );

    case 'glideslope-split':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {/* Top Rail: SHOULD BE DOING */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5 }}>
            <span style={{ width: 64, fontSize: 11.5, fontWeight: 700, color: '#94A3B8' }}>
              SHOULD
            </span>
            <span style={{ color: '#E2E8F0' }}>1. Verifier ✓</span>
            <span style={{ color: '#64748B' }}>──►</span>
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>2. Run cargo test</span>
            <span style={{ color: '#64748B' }}>──►</span>
            <span style={{ color: '#94A3B8' }}>3. Open PR</span>
          </div>

          {/* Bottom Rail: ACTUAL PATH */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5 }}>
            <span style={{ width: 64, fontSize: 11.5, fontWeight: 700, color: '#FBBF24' }}>
              ACTUAL
            </span>
            <span style={{ color: '#E2E8F0' }}>1. Verifier ✓</span>
            <span style={{ color: '#F59E0B', fontWeight: 700 }}>──↱</span>
            <span style={{ color: '#FCD34D', fontWeight: 600 }}>
              Deleting 4 test assertions in auth_test.rs
            </span>
          </div>
        </div>
      );
  }
};
