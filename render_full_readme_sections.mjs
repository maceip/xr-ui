import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const ARTIFACT_DIR = '/Users/mac/.gemini/antigravity/brain/fe8b99f7-f96f-4bb3-b19e-b16e765f2dbb';
const SPECIMEN_DIR = '/Users/mac/xr-ui/specimens';
fs.mkdirSync(SPECIMEN_DIR, { recursive: true });

const sharedCss = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #0D0F14;
    color: #FFFFFF;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    padding: 22px;
  }
  .board {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  .grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .light-panel {
    background: linear-gradient(180deg, #5C6069 0%, #4C4F58 100%);
    border: 1px solid rgba(255, 255, 255, 0.28);
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.32), 0 16px 34px rgba(0, 0, 0, 0.55);
    border-radius: 24px;
    padding: 18px 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
  }
  .btn-3d {
    background: linear-gradient(180deg, #838895 0%, #616570 52%, #6E737F 100%);
    border: 1.5px solid rgba(255, 255, 255, 0.78);
    box-shadow:
      inset 0 2px 3px rgba(255, 255, 255, 0.68),
      inset 0 -2px 4px rgba(0, 0, 0, 0.38),
      0 6px 14px rgba(0, 0, 0, 0.45);
    color: #FFFFFF;
    font-weight: 700;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
    border-radius: 13px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13.5px;
    flex: 1;
  }
  .btn-recessed {
    background: rgba(28, 30, 36, 0.34);
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.24);
    color: rgba(255, 255, 255, 0.82);
    font-weight: 500;
    border-radius: 13px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13.5px;
    flex: 1;
  }
  .btn-row {
    display: flex;
    gap: 10px;
    margin-top: auto;
    padding-top: 4px;
  }
  .tag-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 700;
    color: #93C5FD;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
  .card-h {
    font-size: 16.5px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #FFFFFF;
  }
  .card-p {
    font-size: 12.5px;
    line-height: 1.35;
    color: rgba(255, 255, 255, 0.86);
  }
  .universal-tile {
    width: 52px;
    height: 52px;
    border-radius: 15px;
    background: linear-gradient(180deg, #33456B 0%, #222E49 100%);
    border: 1.5px solid rgba(147, 197, 253, 0.48);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: inset 0 1px 2px rgba(255,255,255,0.28);
  }
`;

// ============================================================================
// SECTION 1: 5 UNIQUE WINDOW OUTLINES
// ============================================================================
const section1Html = `<!doctype html><html><head><meta charset="utf-8"/><style>
${sharedCss}
.outline-notched {
  background: linear-gradient(180deg, #5C6069 0%, #4C4F58 100%);
  border-radius: 0 24px 24px 24px;
  border: 1px solid rgba(255,255,255,0.28);
  padding: 18px 20px;
  margin-top: 26px;
  position: relative;
  box-shadow: 0 16px 34px rgba(0,0,0,0.55);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.outline-notched-tab {
  position: absolute;
  top: -27px;
  left: -1px;
  height: 28px;
  padding: 0 16px 0 12px;
  background: #5C6069;
  border-top: 1px solid rgba(255,255,255,0.32);
  border-left: 1px solid rgba(255,255,255,0.28);
  border-right: 1px solid rgba(255,255,255,0.28);
  border-radius: 14px 14px 0 0;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 700;
}
.outline-chamfer {
  background: linear-gradient(180deg, #5A5E68 0%, #4A4D56 100%);
  clip-path: polygon(18px 0%, calc(100% - 18px) 0%, 100% 18px, 100% calc(100% - 18px), calc(100% - 18px) 100%, 18px 100%, 0% calc(100% - 18px), 0% 18px);
  border-left: 5px solid #FBBF24;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.outline-split-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.outline-split-orb-bar {
  background: linear-gradient(180deg, #60646E 0%, #4E515A 100%);
  border: 1px solid rgba(255,255,255,0.30);
  border-radius: 999px;
  padding: 5px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 10px 22px rgba(0,0,0,0.45);
}
.outline-ribbon {
  background: linear-gradient(180deg, #5C6069 0%, #4B4E57 100%);
  border: 1px solid rgba(255,255,255,0.30);
  border-radius: 999px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.32), 0 14px 30px rgba(0,0,0,0.55);
}
</style></head><body>
<div class="board">
  <div class="grid-2">
    <div class="light-panel">
      <div class="tag-chip">Outline #1 · Classic 26px Squircle Light-Shield</div>
      <div style="display:flex;align-items:center;gap:12px;">
        <div class="universal-tile">
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
            <circle cx="11" cy="18" r="5" stroke="#FFF" stroke-width="2.4"/>
            <path d="M16 18H27M22 18V22M26 18V23" stroke="#FFF" stroke-width="2.4" stroke-linecap="round"/>
            <path d="M24 7V13M21 10H27" stroke="#60A5FA" stroke-width="2.4" stroke-linecap="round"/>
          </svg>
        </div>
        <div>
          <div class="card-h">Continuous Rounded Bevel</div>
          <div class="card-p">Blocks room light behind text with zero internal boxes or dark gutters.</div>
        </div>
      </div>
      <div class="btn-row"><div class="btn-3d">Create</div><div class="btn-recessed">Deny</div></div>
    </div>

    <div>
      <div class="outline-notched">
        <div class="outline-notched-tab">
          <span style="width:14px;height:14px;border-radius:4px;background:#0A66C2;display:inline-flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;">in</span>
          <span>linkedin.com · Outline #2 Integrated Origin Tab</span>
        </div>
        <div style="display:flex;align-items:center;gap:12px;">
          <div class="universal-tile">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
              <path d="M16 5L26 9.5V17.5C26 23.8 21.6 28.5 16 30.2C10.4 28.5 6 23.8 6 17.5V9.5L16 5Z" stroke="#FFF" stroke-width="2.2" fill="#1B253B"/>
              <circle cx="16" cy="16" r="3" fill="#60A5FA"/>
            </svg>
          </div>
          <div>
            <div class="card-h">Keystone Folder Silhouette</div>
            <div class="card-p">Fuses the relying-party origin badge into the top-left perimeter contour.</div>
          </div>
        </div>
        <div class="btn-row"><div class="btn-3d">Approve</div><div class="btn-recessed">Cancel</div></div>
      </div>
    </div>

    <div class="outline-chamfer">
      <div class="tag-chip" style="color:#FDE68A;">Outline #3 · 45° Chamfered Telemetry Cutout</div>
      <div style="display:flex;align-items:center;gap:12px;">
        <div class="universal-tile">
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
            <path d="M16 6L28 26H4L16 6Z" fill="#3B2328" stroke="#FBBF24" stroke-width="2.2" stroke-linejoin="round"/>
            <line x1="16" y1="13" x2="16" y2="19" stroke="#FFF" stroke-width="2.4" stroke-linecap="round"/>
            <circle cx="16" cy="23" r="1.5" fill="#FFF"/>
          </svg>
        </div>
        <div>
          <div class="card-h">Clipped-Corner Alert Silhouette</div>
          <div class="card-p">Instant peripheral recognition: clipped 45° corners + amber spine = code anomaly.</div>
        </div>
      </div>
      <div class="btn-row"><div class="btn-3d">Freeze</div><div class="btn-recessed">Ignore</div></div>
    </div>

    <div class="outline-split-wrap">
      <div class="outline-split-orb-bar">
        <span style="font-size:13px;opacity:0.8;">✓</span>
        <span style="font-size:13px;opacity:0.8;">↺</span>
        <div class="btn-3d" style="width:34px;height:34px;border-radius:999px;flex:none;">⌲</div>
        <span style="font-size:12px;font-weight:700;color:#93C5FD;">Outline #4 · Split Orb Deck</span>
      </div>
      <div class="light-panel" style="width:100%;padding:14px 18px;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div class="universal-tile" style="width:44px;height:44px;">
            <span style="font-size:18px;font-weight:800;color:#FBBF24;">$</span>
          </div>
          <div>
            <div class="card-h" style="font-size:15.5px;">Detached 3D Orb Toolbar + Card</div>
            <div class="card-p">Separates temple-swipe icon navigation from the evidence deck below.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="outline-ribbon">
    <div style="display:flex;align-items:center;gap:12px;">
      <div class="universal-tile" style="width:42px;height:42px;border-radius:999px;">
        <span style="font-size:16px;color:#60A5FA;font-weight:800;">●</span>
      </div>
      <div>
        <div style="font-size:11px;font-weight:700;color:#93C5FD;text-transform:uppercase;">Outline #5 · Horizon Whisper Pill (Leaves 80% of Lens Clear)</div>
        <div style="font-size:15px;font-weight:700;">Muse staged ryan@zunftmax.secure.build on linkedin.com</div>
      </div>
    </div>
    <div style="display:flex;gap:8px;width:210px;flex-shrink:0;">
      <div class="btn-3d" style="border-radius:999px;height:36px;">Submit</div>
      <div class="btn-recessed" style="border-radius:999px;height:36px;">Skip</div>
    </div>
  </div>
</div>
</body></html>`;

// ============================================================================
// SECTION 2: 5 VISUALIZATION TECHNIQUES FOR PROJECT / REPO ACTIVITY
// ============================================================================
const section2Html = `<!doctype html><html><head><meta charset="utf-8"/><style>
${sharedCss}
</style></head><body>
<div class="board">
  <div class="grid-2">
    <div class="light-panel">
      <div class="tag-chip">1 · Deflected Flight Vector (Done ──► ↱ Detour ──⇢ Goal)</div>
      <div class="card-h">Bends Off-Axis When Looping Outside Plan</div>
      <svg width="100%" height="68" viewBox="0 0 380 68" fill="none">
        <line x1="24" y1="48" x2="356" y2="48" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="4 4"/>
        <path d="M24 48 L115 48 L160 15 L245 15" stroke="#FBBF24" stroke-width="3" stroke-linecap="round"/>
        <circle cx="24" cy="48" r="5" fill="#FFF"/>
        <text x="6" y="64" fill="#FFF" font-size="11" font-weight="600">DONE: auth.rs</text>
        <circle cx="202" cy="15" r="5.5" fill="#FBBF24"/>
        <text x="118" y="10" fill="#FDE68A" font-size="11" font-weight="700">NOW: 6× loop · -4 asserts</text>
        <circle cx="356" cy="48" r="5" stroke="#FFF" stroke-width="2" fill="#4D5059"/>
        <text x="372" y="64" text-anchor="end" fill="rgba(255,255,255,0.85)" font-size="11" font-weight="600">SHOULD: Run tests</text>
      </svg>
      <div class="btn-row"><div class="btn-3d">Freeze</div><div class="btn-recessed">Ignore</div></div>
    </div>

    <div class="light-panel">
      <div class="tag-chip">2 · Scope Drift Bullseye (Target Folder vs. Out-of-Bounds)</div>
      <div style="display:flex;align-items:center;gap:16px;margin: 4px 0;">
        <svg width="74" height="74" viewBox="0 0 74 74" fill="none" style="flex-shrink:0;">
          <circle cx="37" cy="37" r="33" stroke="#FCA5A5" stroke-width="2" stroke-dasharray="3 3"/>
          <circle cx="37" cy="37" r="15" stroke="#93C5FD" stroke-width="2" fill="#28334A"/>
          <circle cx="37" cy="37" r="3.5" fill="#FFF"/>
          <circle cx="14" cy="19" r="4" fill="#FBBF24"/>
          <circle cx="60" cy="22" r="4" fill="#F87171"/>
          <circle cx="56" cy="55" r="4" fill="#F87171"/>
        </svg>
        <div style="display:flex;flex-direction:column;gap:4px;font-size:12.5px;">
          <div><strong>Done:</strong> Inside <code style="color:#93C5FD;">src/auth/</code> target ring</div>
          <div style="color:#FDE68A;"><strong>Doing:</strong> 3 edits escaped to <code>tests/</code> &amp; <code>ui/</code></div>
          <div style="opacity:0.85;"><strong>Should:</strong> Keep edits in <code>src/auth/</code> &amp; test</div>
        </div>
      </div>
      <div class="btn-row"><div class="btn-3d">Revert</div><div class="btn-recessed">Allow</div></div>
    </div>

    <div class="light-panel">
      <div class="tag-chip">3 · Verified Milestone vs. Wheel-Spin Thrash Bar</div>
      <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:600;">
        <span>✓ 1. Auth Schema</span>
        <span style="color:#FDE68A;">↻ 2. Stuck in UI (7×)</span>
        <span style="opacity:0.75;">○ 3. Pass CI</span>
      </div>
      <svg width="100%" height="26" viewBox="0 0 380 26" fill="none">
        <defs>
          <pattern id="hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#FBBF24" stroke-width="3"/>
          </pattern>
        </defs>
        <rect x="0" y="4" width="96" height="18" rx="5" fill="#FFFFFF"/>
        <rect x="104" y="4" width="276" height="18" rx="5" fill="url(#hatch)" stroke="#FBBF24" stroke-width="1.2"/>
      </svg>
      <div style="display:flex;justify-content:space-between;font-size:11.5px;">
        <span>1 milestone verified green</span>
        <span style="color:#FDE68A;font-weight:700;">7 failed edit cycles since last pass</span>
      </div>
      <div class="btn-row"><div class="btn-3d">Pause</div><div class="btn-recessed">Skip</div></div>
    </div>

    <div class="light-panel">
      <div class="tag-chip">4 · Worktree Swimlanes + Shared-File Collision Staple (╫)</div>
      <svg width="100%" height="74" viewBox="0 0 380 74" fill="none">
        <text x="0" y="20" fill="#FFF" font-size="11.5" font-weight="700">wt-auth (Codex)</text>
        <rect x="105" y="10" width="180" height="12" rx="6" fill="#93C5FD"/>
        <text x="0" y="56" fill="#FFF" font-size="11.5" font-weight="700">main (Muse)</text>
        <rect x="105" y="46" width="145" height="12" rx="6" fill="#CBD5E1"/>
        <rect x="210" y="6" width="8" height="56" rx="3" fill="#F87171"/>
        <rect x="224" y="23" width="148" height="22" rx="6" fill="#3B2328" stroke="#FCA5A5"/>
        <text x="298" y="38" text-anchor="middle" fill="#FFE4E6" font-size="10.5" font-weight="700">⚡ Both editing auth.rs</text>
      </svg>
      <div class="btn-row"><div class="btn-3d">Keep wt-auth</div><div class="btn-recessed">Pause</div></div>
    </div>
  </div>

  <div class="light-panel">
    <div class="tag-chip">5 · Plan-vs-Actual Glideslope Split + 3-Beat Temporal Receipt (DONE · DOING · SHOULD)</div>
    <div style="display:grid;grid-template-columns:1.25fr 0.75fr;gap:18px;align-items:center;">
      <div style="display:flex;flex-direction:column;gap:6px;font-size:13px;">
        <div><strong style="color:#CBD5E1;display:inline-block;width:82px;white-space:nowrap;">✓ DONE</strong> Added WebAuthn verifier in <code>src/auth.rs</code></div>
        <div style="color:#FDE68A;"><strong style="display:inline-block;width:82px;white-space:nowrap;">↻ DOING</strong> Deleting 4 test assertions in <code>auth_test.rs</code></div>
        <div><strong style="color:#93C5FD;display:inline-block;width:82px;white-space:nowrap;">→ SHOULD</strong> Run <code>cargo test --package auth</code> &amp; open PR</div>
      </div>
      <div style="display:flex;gap:10px;">
        <div class="btn-3d">Freeze</div>
        <div class="btn-recessed">Revert</div>
      </div>
    </div>
  </div>
</div>
</body></html>`;

// ============================================================================
// SECTION 3.1: CHATTY LLM COMPRESSION — "WHAT IS THE LLM DOING RIGHT NOW?" (3 PANELS)
// ============================================================================
const section3DoingNowHtml = `<!doctype html><html><head><meta charset="utf-8"/><style>
${sharedCss}
</style></head><body>
<div class="grid-3">
  <div class="light-panel">
    <div class="tag-chip">LLM Now #1 · 3-Word Verb + Target Pill</div>
    <div style="display:flex;align-items:center;gap:12px;margin:4px 0;">
      <div class="universal-tile">
        <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
          <circle cx="13" cy="13" r="7" stroke="#93C5FD" stroke-width="2.6"/>
          <path d="M18.5 18.5L24 24" stroke="#FFF" stroke-width="2.6" stroke-linecap="round"/>
        </svg>
      </div>
      <div>
        <div class="card-h">Staging signup form</div>
        <div class="card-p">linkedin.com · 4 fields matched</div>
      </div>
    </div>
    <div style="font-size:11px;color:rgba(255,255,255,0.75);border-top:1px solid rgba(255,255,255,0.16);padding-top:8px;">
      Compresses 180 words of LLM DOM narration into 3 words + origin.
    </div>
  </div>

  <div class="light-panel">
    <div class="tag-chip">LLM Now #2 · 3-Bead Phase Stepper</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin:2px 0;">
      <div style="display:flex;align-items:center;gap:8px;font-size:13px;opacity:0.82;">
        <span>✓</span><span>1. Read page DOM</span>
      </div>
      <div class="btn-3d" style="justify-content:flex-start;padding:0 12px;height:34px;font-size:13px;flex:none;">
        <span style="margin-right:8px;">●</span><span>2. Filling Vault credentials</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px;font-size:13px;opacity:0.68;">
        <span>○</span><span>3. Await your pinch to submit</span>
      </div>
    </div>
  </div>

  <div class="light-panel">
    <div class="tag-chip">LLM Now #3 · Active Tool + Step Counter</div>
    <div style="display:flex;align-items:center;gap:12px;margin:4px 0;">
      <div class="universal-tile" style="font-size:16px;font-weight:800;color:#93C5FD;">2/3</div>
      <div>
        <div class="card-h">cargo test --auth</div>
        <div class="card-p">12s elapsed · 0 errors</div>
      </div>
    </div>
    <div class="btn-row"><div class="btn-3d">Pause</div><div class="btn-recessed">Hide</div></div>
  </div>
</div>
</body></html>`;

// ============================================================================
// SECTION 3.2A: BUYING AN ITEM — 3 OPTIMIZED UI PANELS WITH IMAGES & 3D BUTTONS
// ============================================================================
const section3BuyingHtml = `<!doctype html><html><head><meta charset="utf-8"/><style>
${sharedCss}
</style></head><body>
<div class="grid-3">
  <!-- Buy Panel A1: Visual Product Thumbnail + Bold Price + Card -->
  <div class="light-panel">
    <div class="tag-chip">Buy Panel A1 · Product Image + Total Only</div>
    <div style="display:flex;align-items:center;gap:12px;">
      <div class="universal-tile">
        <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
          <path d="M8 32L12 18L22 23L34 20L41 27V34H8V32Z" fill="#60A5FA" stroke="#FFF" stroke-width="2.2" stroke-linejoin="round"/>
          <line x1="8" y1="36" x2="41" y2="36" stroke="#FBBF24" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>
      <div>
        <div class="card-h">$128 · Nike Killshot 2</div>
        <div class="card-p">Size 10.5 · In stock · Visa •••• 4242</div>
      </div>
    </div>
    <div class="btn-row"><div class="btn-3d">Buy $128</div><div class="btn-recessed">Skip</div></div>
  </div>

  <!-- Buy Panel A2: Contactless Dollar Coin Tile + Quantity & Delivery Promise -->
  <div class="light-panel">
    <div class="tag-chip">Buy Panel A2 · Quantity + Arrival Receipt</div>
    <div style="display:flex;align-items:center;gap:12px;">
      <div class="universal-tile">
        <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
          <circle cx="15" cy="18" r="9" fill="#1B253B" stroke="#FFF" stroke-width="2.2"/>
          <text x="15" y="22" text-anchor="middle" fill="#FBBF24" font-size="12" font-weight="800">$</text>
          <path d="M27 13C29 16 29 20 27 23" stroke="#93C5FD" stroke-width="2.2" stroke-linecap="round"/>
        </svg>
      </div>
      <div>
        <div class="card-h">$48 · 2× USB-C Cables</div>
        <div class="card-p">Arrives tomorrow · Free Prime shipping</div>
      </div>
    </div>
    <div class="btn-row"><div class="btn-3d">Pay $48</div><div class="btn-recessed">Cancel</div></div>
  </div>

  <!-- Buy Panel A3: Headphones Product Image + Price Target Gauge -->
  <div class="light-panel">
    <div class="tag-chip">Buy Panel A3 · Product + Target Gauge</div>
    <div style="display:flex;align-items:center;gap:12px;">
      <div class="universal-tile">
        <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
          <path d="M8 20V17C8 11.5 12.5 7 18 7C23.5 7 28 11.5 28 17V20" stroke="#FFF" stroke-width="2.4" stroke-linecap="round"/>
          <rect x="6" y="19" width="5" height="9" rx="2.5" fill="#60A5FA" stroke="#FFF" stroke-width="1.8"/>
          <rect x="25" y="19" width="5" height="9" rx="2.5" fill="#60A5FA" stroke="#FFF" stroke-width="1.8"/>
        </svg>
      </div>
      <div style="flex:1;">
        <div class="card-h">$219 · Sony XM5</div>
        <div class="card-p" style="color:#A7F3D0;font-weight:600;">$61 below $280 target</div>
      </div>
    </div>
    <div class="btn-row"><div class="btn-3d">Buy $219</div><div class="btn-recessed">Dismiss</div></div>
  </div>
</div>
</body></html>`;

// ============================================================================
// SECTION 3.2B: AUTHORIZING AN ACTION — 3 OPTIMIZED UI PANELS WITH IMAGES
// ============================================================================
const section3AuthHtml = `<!doctype html><html><head><meta charset="utf-8"/><style>
${sharedCss}
</style></head><body>
<div class="grid-3">
  <!-- Auth Panel B1: New Account + Blitz Passkey Key Tile -->
  <div class="light-panel">
    <div class="tag-chip">Auth Panel B1 · Identity + Passkey Mint</div>
    <div style="display:flex;align-items:center;gap:12px;">
      <div class="universal-tile">
        <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
          <circle cx="12" cy="20" r="5.5" stroke="#FFF" stroke-width="2.4"/>
          <path d="M17.5 20H29M24 20V25M28 20V26" stroke="#FFF" stroke-width="2.4" stroke-linecap="round"/>
          <path d="M26 8V14M23 11H29" stroke="#60A5FA" stroke-width="2.4" stroke-linecap="round"/>
        </svg>
      </div>
      <div>
        <div class="card-h">Create LinkedIn account?</div>
        <div class="card-p">ryan@zunftmax.secure.build · Blitz Passkey</div>
      </div>
    </div>
    <div class="btn-row"><div class="btn-3d">Create</div><div class="btn-recessed">Deny</div></div>
  </div>

  <!-- Auth Panel B2: Permission Bridge Illustration + Visual Scope Chips -->
  <div class="light-panel">
    <div class="tag-chip">Auth Panel B2 · Visual Scope Chips</div>
    <div style="display:flex;align-items:center;gap:12px;">
      <div class="universal-tile">
        <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
          <path d="M18 5L29 10V18C29 25 24 30 18 32C12 30 7 25 7 18V10L18 5Z" fill="#1B253B" stroke="#FFF" stroke-width="2.2"/>
          <path d="M13 18L16.5 21.5L23.5 14.5" stroke="#6EE7B7" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div>
        <div class="card-h">Grant Linear access?</div>
        <div class="card-p" style="color:#A7F3D0;font-weight:600;">✓ Issues · 🔒 No Billing</div>
      </div>
    </div>
    <div class="btn-row"><div class="btn-3d">Grant</div><div class="btn-recessed">Deny</div></div>
  </div>

  <!-- Auth Panel B3: Blind Vault Secret Injection -->
  <div class="light-panel">
    <div class="tag-chip">Auth Panel B3 · Zero-Plaintext Vault Fill</div>
    <div style="display:flex;align-items:center;gap:12px;">
      <div class="universal-tile">
        <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
          <rect x="5" y="10" width="26" height="16" rx="4" stroke="#FFF" stroke-width="2.2" fill="#1B253B"/>
          <circle cx="12" cy="18" r="2" fill="#60A5FA"/>
          <circle cx="18" cy="18" r="2" fill="#60A5FA"/>
          <circle cx="24" cy="18" r="2" fill="#60A5FA"/>
        </svg>
      </div>
      <div>
        <div class="card-h">Inject ANTHROPIC_KEY?</div>
        <div class="card-p">sk-ant-••••9Q2A → walkaway/.env</div>
      </div>
    </div>
    <div class="btn-row"><div class="btn-3d">Inject</div><div class="btn-recessed">Block</div></div>
  </div>
</div>
</body></html>`;

// ============================================================================
// SECTION 3.2C: MAKING A "WRITE" DECISION THAT CHANGES THE WORLD — 3 PANELS
// ============================================================================
const section3WriteHtml = `<!doctype html><html><head><meta charset="utf-8"/><style>
${sharedCss}
</style></head><body>
<div class="grid-3">
  <!-- Write Panel C1: Hazard Gate Tile + Before -> After State Diff -->
  <div class="light-panel">
    <div class="tag-chip">Write Panel C1 · Before → After State Diff</div>
    <div style="display:flex;align-items:center;gap:12px;">
      <div class="universal-tile">
        <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
          <path d="M18 6L31 29H5L18 6Z" fill="#3B2328" stroke="#FBBF24" stroke-width="2.2" stroke-linejoin="round"/>
          <line x1="18" y1="14" x2="18" y2="21" stroke="#FFF" stroke-width="2.4" stroke-linecap="round"/>
          <circle cx="18" cy="25" r="1.5" fill="#FFF"/>
        </svg>
      </div>
      <div>
        <div class="card-h">Drop legacy_sessions?</div>
        <div class="card-p"><span style="color:#FDE68A;font-weight:700;">14.2k rows → 0</span> (snapshot saved)</div>
      </div>
    </div>
    <div class="btn-row"><div class="btn-3d">Abort</div><div class="btn-recessed">Drop</div></div>
  </div>

  <!-- Write Panel C2: Broadcast Plane Tile + Audience & 10-Word Quote -->
  <div class="light-panel">
    <div class="tag-chip">Write Panel C2 · Audience + 10-Word Quote</div>
    <div style="display:flex;align-items:center;gap:12px;">
      <div class="universal-tile">
        <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
          <path d="M6 17L30 7L24 29L17 21L6 17Z" fill="#1B253B" stroke="#FFF" stroke-width="2.2" stroke-linejoin="round"/>
          <path d="M17 21L30 7" stroke="#60A5FA" stroke-width="2"/>
        </svg>
      </div>
      <div>
        <div class="card-h">Post to #release-ops (38)?</div>
        <div class="card-p">"Walkaway v0.4 shipped: 3D buttons live."</div>
      </div>
    </div>
    <div class="btn-row"><div class="btn-3d">Send</div><div class="btn-recessed">Discard</div></div>
  </div>

  <!-- Write Panel C3: Architectural Fork (Two Selectable 3D World Branches) -->
  <div class="light-panel">
    <div class="tag-chip">Write Panel C3 · World-Branching Fork</div>
    <div style="display:flex;align-items:center;gap:12px;">
      <div class="universal-tile">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <path d="M16 27V16M16 16L8 8M16 16L24 8" stroke="#93C5FD" stroke-width="2.6" stroke-linecap="round"/>
          <circle cx="8" cy="8" r="2.5" fill="#FFF"/>
          <circle cx="24" cy="8" r="2.5" fill="#60A5FA"/>
        </svg>
      </div>
      <div>
        <div class="card-h">Choose passkey relay path</div>
        <div class="card-p">A: Local 18ms USB · B: Cellular 420ms</div>
      </div>
    </div>
    <div class="btn-row"><div class="btn-3d">Option A</div><div class="btn-recessed">Option B</div></div>
  </div>
</div>
</body></html>`;

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
});

async function renderBoard(html, filename, width, height) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: 'load' });
  const specPath = path.join(SPECIMEN_DIR, filename);
  const artPath = path.join(ARTIFACT_DIR, filename);
  await page.screenshot({ path: specPath });
  fs.copyFileSync(specPath, artPath);
  await page.close();
}

await renderBoard(section1Html, 'section1_window_outlines.png', 880, 560);
await renderBoard(section2Html, 'section2_repo_activity_5ways.png', 880, 636);
await renderBoard(section3DoingNowHtml, 'section3_llm_doing_now.png', 880, 250);
await renderBoard(section3BuyingHtml, 'section3_bucket_a_buying.png', 880, 240);
await renderBoard(section3AuthHtml, 'section3_bucket_b_authorizing.png', 880, 240);
await renderBoard(section3WriteHtml, 'section3_bucket_c_write_decisions.png', 880, 240);

await browser.close();
console.log('Re-rendered all 6 showcase section boards cleanly.');
