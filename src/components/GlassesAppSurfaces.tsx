import React from 'react';
import { SiteFavicon, OperationIllustration } from '../icons/FaviconsAndIllustrations';

export const ELEVATED_3D_PILL_STYLE: React.CSSProperties = {
  background: 'linear-gradient(180deg, #7E828E 0%, #5F636E 52%, #6D717C 100%)',
  border: '1.5px solid rgba(255, 255, 255, 0.72)',
  boxShadow:
    'inset 0 2px 3px rgba(255, 255, 255, 0.65), inset 0 -2px 4px rgba(0, 0, 0, 0.36), 0 6px 14px rgba(0, 0, 0, 0.42)',
  color: '#FFFFFF',
  fontWeight: 700,
};

export const LIGHT_GRAY_PANEL_STYLE: React.CSSProperties = {
  background: 'linear-gradient(180deg, #5B5E67 0%, #4D5058 100%)',
  border: '1px solid rgba(255, 255, 255, 0.24)',
  boxShadow:
    'inset 0 1px 1px rgba(255, 255, 255, 0.28), 0 14px 32px rgba(0, 0, 0, 0.52)',
  borderRadius: 24,
  color: '#FFFFFF',
};

/**
 * 1. Vertical 3D Selection Menu (`rec1_25.jpg` — Threads "Feeds" menu with "Liked" elevated in 3D)
 */
export const WaveguideActionMenuSurface: React.FC<{
  title?: string;
  selectedIndex?: number;
}> = ({ title = 'Agent Actions', selectedIndex = 2 }) => {
  const items = [
    { icon: '▷', label: 'Resume' },
    { icon: '⏸', label: 'Pause' },
    { icon: '↺', label: 'Revert' },
    { icon: '🔀', label: 'Switch' },
  ];

  return (
    <div style={{ width: '100%', maxWidth: 440, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: '#FFFFFF', paddingLeft: 8 }}>
        {title}
      </div>
      <div style={{ ...LIGHT_GRAY_PANEL_STYLE, padding: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {items.map((item, idx) => {
          const selected = idx === selectedIndex;
          return (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                padding: '13px 18px',
                borderRadius: 16,
                fontSize: 18,
                ...(selected
                  ? ELEVATED_3D_PILL_STYLE
                  : { color: 'rgba(255, 255, 255, 0.86)', fontWeight: 500 }),
              }}
            >
              <span style={{ width: 22, textAlign: 'center', fontSize: 18 }}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/**
 * 2. Floating 3D Orb Action Bar + Content Card (`rec1_05.jpg` — top pill bar with 3D circular orb)
 */
export const WaveguideFloatingBarSurface: React.FC = () => {
  return (
    <div style={{ width: '100%', maxWidth: 480, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      {/* Top Floating Pill Bar with 3D Circular Orb on Selected Icon */}
      <div
        style={{
          ...LIGHT_GRAY_PANEL_STYLE,
          borderRadius: 999,
          padding: '8px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: 22,
        }}
      >
        <span style={{ fontSize: 19, color: 'rgba(255,255,255,0.82)' }}>✓</span>
        <span style={{ fontSize: 19, color: 'rgba(255,255,255,0.82)' }}>↺</span>
        {/* Selected 3D Circular Orb */}
        <div
          style={{
            ...ELEVATED_3D_PILL_STYLE,
            width: 48,
            height: 48,
            borderRadius: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 20,
          }}
        >
          ⌲
        </div>
        <SiteFavicon origin="linkedin.com" size={28} />
        <span style={{ fontSize: 19, color: 'rgba(255,255,255,0.82)' }}>⋯</span>
      </div>

      {/* Below: Light-gray content card */}
      <div style={{ ...LIGHT_GRAY_PANEL_STYLE, width: '100%', padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <SiteFavicon origin="linkedin.com" size={26} />
            <span style={{ fontSize: 16, fontWeight: 700 }}>linkedin.com</span>
            <span style={{ fontSize: 13, color: '#93C5FD', fontWeight: 600 }}>Passkey Ready</span>
          </div>
          <OperationIllustration kind="passkey-account-create" size={36} />
        </div>
        <div style={{ fontSize: 18, lineHeight: 1.38, color: 'rgba(255,255,255,0.92)' }}>
          Staged new account for <strong>ryan@zunftmax.secure.build</strong> with hardware passkey in Meta Blitz.
        </div>
      </div>
    </div>
  );
};

/**
 * 3. Tabbed Live Telemetry Strip + Trajectory Card (`rec2_05.jpg` — NBA Threads "Trending | Schedule")
 */
export const WaveguideTabbedTelemetrySurface: React.FC = () => {
  return (
    <div style={{ width: '100%', maxWidth: 500, display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Tabs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, paddingLeft: 6 }}>
        <span style={{ fontSize: 18, fontWeight: 600, color: 'rgba(255,255,255,0.58)' }}>Worktrees</span>
        <span style={{ fontSize: 18, fontWeight: 700, color: '#FFFFFF' }}>Trajectory</span>
      </div>

      {/* Horizontal Status Strip Cards (left card has 3D selected bevel + top status bar) */}
      <div style={{ display: 'flex', gap: 12 }}>
        <div
          style={{
            ...ELEVATED_3D_PILL_STYLE,
            flex: 1.25,
            borderRadius: 18,
            padding: '12px 16px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '68%', height: 4, background: '#F59E0B' }} />
          <div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.82)' }}>wt-auth</div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>6× Loop</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 13, color: '#FDE68A' }}>Off-Track</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.78)' }}>1/3 steps</div>
          </div>
        </div>

        <div
          style={{
            ...LIGHT_GRAY_PANEL_STYLE,
            flex: 0.85,
            borderRadius: 18,
            padding: '12px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.72)' }}>main</div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>Clean ✓</div>
        </div>
      </div>

      {/* Main Light-Gray Trajectory Card */}
      <div style={{ ...LIGHT_GRAY_PANEL_STYLE, padding: '18px 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <SiteFavicon origin="github.com" size={22} />
          <span style={{ fontSize: 15, fontWeight: 700 }}>maceip/walkaway</span>
          <span style={{ fontSize: 13, color: '#FCD34D', fontWeight: 600 }}>· Deflected Path</span>
        </div>
        <svg width="100%" height="58" viewBox="0 0 420 58" fill="none">
          <line x1="24" y1="40" x2="396" y2="40" stroke="rgba(255,255,255,0.38)" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M24 40 L125 40 L175 14 L265 14" stroke="#FBBF24" strokeWidth="2.8" strokeLinecap="round" />
          <circle cx="24" cy="40" r="5" fill="#FFFFFF" />
          <text x="8" y="55" fill="#FFFFFF" fontSize="11" fontWeight="600">DONE: auth.rs</text>
          <circle cx="220" cy="14" r="5.5" fill="#FBBF24" />
          <text x="140" y="9" fill="#FDE68A" fontSize="11" fontWeight="700">NOW: 6× loop · -4 asserts</text>
          <circle cx="396" cy="40" r="5" stroke="#FFFFFF" strokeWidth="2" fill="#52555E" />
          <text x="412" y="55" textAnchor="end" fill="rgba(255,255,255,0.82)" fontSize="11" fontWeight="600">SHOULD: Run tests</text>
        </svg>
      </div>
    </div>
  );
};

/**
 * 4. Agent Thread + Bottom 3D Action Dock (`rec4_05.jpg` — "Mom Cell" message bubbles + bottom 3D action pills)
 */
export const WaveguideThreadDockSurface: React.FC = () => {
  return (
    <div style={{ width: '100%', maxWidth: 480, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* Top Centered Contact / Agent Pill */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            ...LIGHT_GRAY_PANEL_STYLE,
            borderRadius: 999,
            padding: '6px 16px 6px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <SiteFavicon origin="stripe.com" size={22} />
          <span style={{ fontSize: 15, fontWeight: 700 }}>Muse · Checkout</span>
        </div>
      </div>

      {/* Light-Gray Message Bubbles */}
      <div style={{ ...LIGHT_GRAY_PANEL_STYLE, alignSelf: 'flex-start', padding: '12px 18px', borderRadius: 20, maxWidth: '82%' }}>
        <div style={{ fontSize: 16, fontWeight: 500 }}>Found 2× USB-C DisplayPort cables in stock.</div>
      </div>

      <div style={{ ...LIGHT_GRAY_PANEL_STYLE, alignSelf: 'flex-start', padding: '14px 18px', borderRadius: 20, maxWidth: '92%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14 }}>
        <div>
          <div style={{ fontSize: 17, fontWeight: 700 }}>Visa •••• 4242 · $48.00</div>
          <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.82)' }}>One-time charge · Express shipping</div>
        </div>
        <OperationIllustration kind="credit-card-charge" size={38} />
      </div>

      {/* Bottom Horizontal Action Dock with Elevated 3D Selected Pill */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 4 }}>
        <div style={{ ...LIGHT_GRAY_PANEL_STYLE, borderRadius: 999, width: 42, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
          🎤
        </div>
        <div
          style={{
            ...ELEVATED_3D_PILL_STYLE,
            borderRadius: 999,
            padding: '10px 22px',
            fontSize: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span>✓</span>
          <span>Pay $48</span>
        </div>
        <div
          style={{
            ...LIGHT_GRAY_PANEL_STYLE,
            borderRadius: 999,
            padding: '10px 18px',
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          Cancel
        </div>
        <div style={{ ...LIGHT_GRAY_PANEL_STYLE, borderRadius: 999, width: 42, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
          ⋯
        </div>
      </div>
    </div>
  );
};
