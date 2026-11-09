import { chromium } from 'playwright';
import sharp from 'sharp';
import path from 'node:path';

const ARTIFACT_DIR = '/Users/mac/.gemini/antigravity/brain/fe8b99f7-f96f-4bb3-b19e-b16e765f2dbb';

const linkedinFavicon = `
<svg width="20" height="20" viewBox="0 0 28 28" fill="none">
  <rect width="28" height="28" rx="6" fill="#0A66C2"/>
  <path d="M8.2 11.5H5.4V21H8.2V11.5ZM6.8 10.3C7.7 10.3 8.4 9.5 8.4 8.6C8.4 7.7 7.7 7 6.8 7C5.9 7 5.2 7.7 5.2 8.6C5.2 9.5 5.9 10.3 6.8 10.3ZM22.6 21H19.8V16.2C19.8 15 19.8 13.5 18.2 13.5C16.5 13.5 16.3 14.8 16.3 16.1V21H13.5V11.5H16.2V12.8H16.24C16.6 12.1 17.5 11.3 19 11.3C21.9 11.3 22.6 13.2 22.6 15.6V21Z" fill="#FFFFFF"/>
</svg>`;

const stripeFavicon = `
<svg width="20" height="20" viewBox="0 0 28 28" fill="none">
  <rect width="28" height="28" rx="6" fill="#635BFF"/>
  <path d="M13.3 11.2C13.3 10.4 13.9 10.1 14.9 10.1C16.3 10.1 18.1 10.5 19.5 11.3V7.4C18 6.8 16.5 6.5 14.9 6.5C11.2 6.5 8.7 8.4 8.7 11.5C8.7 16.3 15.3 15.5 15.3 17.6C15.3 18.5 14.5 18.8 13.4 18.8C11.8 18.8 9.7 18.1 8.1 17.2V21.2C9.9 22 11.7 22.3 13.4 22.3C17.2 22.3 19.9 20.5 19.9 17.3C19.9 12.1 13.3 13.1 13.3 11.2Z" fill="#FFFFFF"/>
</svg>`;

const githubFavicon = `
<svg width="20" height="20" viewBox="0 0 28 28" fill="none">
  <rect width="28" height="28" rx="6" fill="#1B1F24" stroke="#6E7681" stroke-width="1"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5.5C9.3 5.5 5.5 9.3 5.5 14C5.5 17.76 7.94 20.94 11.31 22.07C11.74 22.15 11.9 21.89 11.9 21.66C11.9 21.46 11.89 20.8 11.89 20.1C9.53 20.61 9.03 19.1 9.03 19.1C8.65 18.12 8.09 17.86 8.09 17.86C7.32 17.33 8.15 17.34 8.15 17.34C9 17.4 9.45 18.21 9.45 18.21C10.2 19.51 11.43 19.14 11.92 18.92C11.99 18.37 12.21 18 12.46 17.78C10.57 17.57 8.59 16.84 8.59 13.58C8.59 12.65 8.92 11.89 9.47 11.3C9.38 11.08 9.09 10.21 9.55 9.03C9.55 9.03 10.26 8.8 11.89 9.9C12.57 9.71 13.29 9.62 14.01 9.62C14.73 9.62 15.45 9.71 16.13 9.9C17.75 8.8 18.46 9.03 18.46 9.03C18.92 10.21 18.63 11.08 18.55 11.3C19.1 11.89 19.42 12.65 19.42 13.58C19.42 16.85 17.43 17.57 15.54 17.78C15.85 18.05 16.12 18.57 16.12 19.38C16.12 20.54 16.11 21.37 16.11 21.66C16.11 21.89 16.26 22.16 16.7 22.07C20.06 20.94 22.5 17.75 22.5 14C22.5 9.3 18.7 5.5 14 5.5Z" fill="#FFFFFF"/>
</svg>`;

// Universal Deep Slate-Blue Action Tile Badges (always on the left, bold silhouettes, zero right-corner icons)
const universalKeyTile = `
<svg width="44" height="44" viewBox="0 0 56 56" fill="none" style="flex-shrink:0;">
  <defs>
    <linearGradient id="tileGrad1" x1="0" y1="0" x2="0" y2="56" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#33456B"/>
      <stop offset="100%" stop-color="#222E49"/>
    </linearGradient>
  </defs>
  <rect x="1" y="1" width="54" height="54" rx="14" fill="url(#tileGrad1)" stroke="rgba(147, 197, 253, 0.48)" stroke-width="1.5"/>
  <circle cx="20" cy="31" r="8" stroke="#FFFFFF" stroke-width="3.2" fill="#1B253B"/>
  <circle cx="20" cy="31" r="2.6" fill="#93C5FD"/>
  <path d="M28 31H43M35.5 31V37.5M41 31V39" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round"/>
  <path d="M38 14V22M34 18H42" stroke="#60A5FA" stroke-width="3" stroke-linecap="round"/>
</svg>`;

const universalDollarTile = `
<svg width="44" height="44" viewBox="0 0 56 56" fill="none" style="flex-shrink:0;">
  <defs>
    <linearGradient id="tileGrad2" x1="0" y1="0" x2="0" y2="56" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#33456B"/>
      <stop offset="100%" stop-color="#222E49"/>
    </linearGradient>
  </defs>
  <rect x="1" y="1" width="54" height="54" rx="14" fill="url(#tileGrad2)" stroke="rgba(147, 197, 253, 0.48)" stroke-width="1.5"/>
  <circle cx="23" cy="28" r="12" fill="#1B253B" stroke="#FFFFFF" stroke-width="2.8"/>
  <text x="23" y="33.5" text-anchor="middle" fill="#FBBF24" font-size="16" font-weight="800" font-family="system-ui, sans-serif">$</text>
  <path d="M38 22C40.2 25.2 40.2 30.8 38 34" stroke="#93C5FD" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M43 18.5C46.2 23.8 46.2 32.2 43 37.5" stroke="#93C5FD" stroke-width="2.6" stroke-linecap="round"/>
</svg>`;

const universalHazardTile = `
<svg width="42" height="42" viewBox="0 0 56 56" fill="none" style="flex-shrink:0;">
  <defs>
    <linearGradient id="tileGrad3" x1="0" y1="0" x2="0" y2="56" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#33456B"/>
      <stop offset="100%" stop-color="#222E49"/>
    </linearGradient>
  </defs>
  <rect x="1" y="1" width="54" height="54" rx="14" fill="url(#tileGrad3)" stroke="rgba(147, 197, 253, 0.48)" stroke-width="1.5"/>
  <path d="M28 12L44 41H12L28 12Z" fill="#3B2328" stroke="#FBBF24" stroke-width="2.8" stroke-linejoin="round"/>
  <line x1="28" y1="22" x2="28" y2="31" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round"/>
  <circle cx="28" cy="36.5" r="2" fill="#FFFFFF"/>
</svg>`;

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 540px;
    height: 550px;
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    /* Dark waveguide optical environment — ZERO white modals anywhere */
    background: radial-gradient(circle at 22% 20%, #262A34 0%, #15181F 58%, #0D0F14 100%);
    position: relative;
    color: #FFFFFF;
  }

  /* Recessed right waveguide lens frame */
  .recessed-lens {
    position: absolute;
    top: 46px;
    right: 12px;
    width: 258px;
    height: 476px;
    background: rgba(54, 57, 65, 0.34);
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-shadow: 0 24px 52px rgba(0, 0, 0, 0.55);
    z-index: 1;
  }

  /* Primary foreground waveguide lens frame */
  .primary-lens {
    position: absolute;
    top: 26px;
    left: 16px;
    width: 274px;
    height: 496px;
    background: rgba(62, 66, 75, 0.42);
    border-radius: 32px;
    border: 1.5px solid rgba(255, 255, 255, 0.22);
    box-shadow: 0 28px 60px rgba(0, 0, 0, 0.65);
    z-index: 2;
  }

  /* Top straddling dark-gray waveguide status pill (like the top pill in rec1_14.jpg / rec4_05.jpg) */
  .top-hud-pill {
    position: absolute;
    top: 10px;
    left: 88px;
    background: linear-gradient(180deg, #5F636D 0%, #4D5059 100%);
    border-radius: 999px;
    padding: 5px 14px 5px 10px;
    border: 1px solid rgba(255, 255, 255, 0.32);
    box-shadow: inset 0 1px 1px rgba(255,255,255,0.35), 0 8px 20px rgba(0, 0, 0, 0.50);
    display: flex;
    align-items: center;
    gap: 7px;
    z-index: 9;
  }
  .recording-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #F87171;
  }
  .top-hud-text {
    font-size: 11.5px;
    font-weight: 700;
    color: #FFFFFF;
    letter-spacing: -0.01em;
  }

  /* Canonical Meta Ray-Ban Display Light-Gray Optical Panel (blocks room light behind text) */
  .light-gray-panel {
    background: linear-gradient(180deg, #5C6069 0%, #4D5059 100%);
    border: 1px solid rgba(255, 255, 255, 0.26);
    box-shadow:
      inset 0 1px 1px rgba(255, 255, 255, 0.30),
      0 18px 38px rgba(0, 0, 0, 0.58);
    border-radius: 22px;
    padding: 13px 14px;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  /* Elevated 3D Bevel-Lit Selected Button / Capsule (matching rec1_25.jpg "Liked" & rec1_05.jpg orb) */
  .btn-3d-selected {
    background: linear-gradient(180deg, #828794 0%, #616570 52%, #6E737F 100%);
    border: 1.5px solid rgba(255, 255, 255, 0.76);
    box-shadow:
      inset 0 2px 3px rgba(255, 255, 255, 0.68),
      inset 0 -2px 4px rgba(0, 0, 0, 0.38),
      0 6px 14px rgba(0, 0, 0, 0.45);
    color: #FFFFFF;
    font-weight: 700;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
  }

  /* Unselected recessed button inside light-gray panel */
  .btn-recessed {
    background: rgba(32, 34, 40, 0.32);
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.22);
    color: rgba(255, 255, 255, 0.82);
    font-weight: 500;
  }

  .origin-row {
    display: flex;
    align-items: center;
    gap: 7px;
  }
  .origin-domain {
    font-size: 11.5px;
    font-weight: 700;
    color: #FFFFFF;
  }
  .origin-cat {
    font-size: 10px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.76);
  }

  .action-body-row {
    display: flex;
    align-items: center;
    gap: 11px;
  }
  .card-title {
    font-size: 14.5px;
    font-weight: 700;
    line-height: 1.18;
    letter-spacing: -0.02em;
    color: #FFFFFF;
  }
  .card-sub {
    font-size: 10.5px;
    line-height: 1.3;
    color: rgba(255, 255, 255, 0.85);
    margin-top: 2px;
  }

  .actions-row {
    display: flex;
    gap: 8px;
    margin-top: 2px;
  }
  .action-pill {
    flex: 1;
    height: 31px;
    border-radius: 11px;
    font-size: 11.5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* 1. Top-Left Surface: Passkey Creation Modal (Pop-out left) */
  .surface-top-left {
    position: absolute;
    top: 46px;
    left: 6px;
    width: 276px;
    z-index: 7;
  }

  /* 2. Bottom-Left Surface: Vertical 3D Selection Menu (like rec1_25.jpg "Feeds" menu) */
  .surface-bottom-left {
    position: absolute;
    top: 250px;
    left: 10px;
    width: 268px;
    z-index: 6;
  }
  .menu-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border-radius: 12px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.86);
    font-weight: 500;
  }
  .menu-item-icon {
    width: 16px;
    text-align: center;
    font-size: 12px;
  }

  /* 3. Top-Right Surface: Floating 3D Orb Action Bar (rec1_05.jpg) + Thread Checkout Dock (rec4_05.jpg) */
  .floating-orb-bar {
    position: absolute;
    top: 58px;
    right: 22px;
    background: linear-gradient(180deg, #5C6069 0%, #4D5059 100%);
    border: 1px solid rgba(255, 255, 255, 0.28);
    box-shadow: inset 0 1px 1px rgba(255,255,255,0.30), 0 14px 28px rgba(0, 0, 0, 0.50);
    border-radius: 999px;
    padding: 5px 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    z-index: 6;
  }
  .orb-3d-selected {
    width: 36px;
    height: 36px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
  }

  .surface-mid-right {
    position: absolute;
    top: 118px;
    right: 6px;
    width: 252px;
    z-index: 5;
  }

  /* 4. Bottom-Right Surface: Tabbed Coding Agent Trajectory (rec2_05.jpg + 3-Beat Done/Doing/Should) */
  .surface-bottom-right {
    position: absolute;
    top: 312px;
    right: 6px;
    width: 252px;
    z-index: 5;
  }
  .ledger-row {
    display: flex;
    align-items: baseline;
    gap: 6px;
    font-size: 10px;
    line-height: 1.32;
  }
  .ledger-tag {
    width: 52px;
    flex-shrink: 0;
    font-size: 9px;
    font-weight: 700;
  }
</style>
</head>
<body>
  <!-- Top Straddling HUD Status Pill (dark-gray waveguide pill, NOT white) -->
  <div class="top-hud-pill">
    <div class="recording-dot"></div>
    <span class="top-hud-text">xr-ui · waveguide surfaces</span>
  </div>

  <!-- Overlapping Waveguide Lens Frames -->
  <div class="primary-lens"></div>
  <div class="recessed-lens"></div>

  <!-- SURFACE 1 (Top-Left): Single-Surface Passkey Modal with Left Universal Action Tile & 3D Selected Button -->
  <div class="light-gray-panel surface-top-left">
    <div class="origin-row">
      ${linkedinFavicon}
      <span class="origin-domain">linkedin.com</span>
      <span class="origin-cat">· New Account</span>
    </div>
    <div class="action-body-row">
      ${universalKeyTile}
      <div>
        <div class="card-title">Create LinkedIn account?</div>
        <div class="card-sub">Saves new passkey for ryan@zunftmax.secure.build in Meta Blitz.</div>
      </div>
    </div>
    <div class="actions-row">
      <div class="action-pill btn-3d-selected">Create</div>
      <div class="action-pill btn-recessed">Deny</div>
    </div>
  </div>

  <!-- SURFACE 2 (Bottom-Left): Vertical 3D Selection Menu (modeled directly on Threads "Feeds" in rec1_25.jpg) -->
  <div class="light-gray-panel surface-bottom-left" style="gap: 6px; padding: 12px 13px;">
    <div style="display:flex;align-items:center;justify-content:space-between;padding: 0 4px 2px 4px;">
      <div class="origin-row">
        ${githubFavicon}
        <span class="origin-domain">Agent Actions</span>
      </div>
      <span class="origin-cat">wt-auth</span>
    </div>
    <div class="menu-item">
      <span class="menu-item-icon">▷</span>
      <span>Resume</span>
    </div>
    <div class="menu-item">
      <span class="menu-item-icon">⏸</span>
      <span>Pause</span>
    </div>
    <div class="menu-item btn-3d-selected">
      <span class="menu-item-icon">↺</span>
      <span>Revert</span>
    </div>
    <div class="menu-item">
      <span class="menu-item-icon">🔀</span>
      <span>Switch</span>
    </div>
    <!-- Bottom Conversation Dock Pills (like rec4_05.jpg "Dictate / Write") -->
    <div style="display:flex;align-items:center;gap:6px;margin-top:4px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.16);">
      <div class="btn-recessed" style="width:28px;height:28px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:12px;">🎤</div>
      <div class="btn-3d-selected" style="flex:1;height:28px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:11px;">Dictate</div>
      <div class="btn-recessed" style="flex:1;height:28px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:11px;">Write</div>
    </div>
  </div>

  <!-- SURFACE 3A (Top-Right): Floating 3D Circular Orb Bar (modeled directly on rec1_05.jpg) -->
  <div class="floating-orb-bar">
    <span style="font-size:13px;color:rgba(255,255,255,0.82);">♥</span>
    <span style="font-size:13px;color:rgba(255,255,255,0.82);">⇄</span>
    <div class="orb-3d-selected btn-3d-selected">⌲</div>
    ${stripeFavicon}
    <span style="font-size:14px;color:rgba(255,255,255,0.82);">⋯</span>
  </div>

  <!-- SURFACE 3B (Mid-Right): Payment Card with Universal '$' Coin Tile on Left & Single-Verb 3D Button -->
  <div class="light-gray-panel surface-mid-right">
    <div class="origin-row">
      ${stripeFavicon}
      <span class="origin-domain">stripe.com</span>
      <span class="origin-cat">· Visa •••• 4242</span>
    </div>
    <div class="action-body-row">
      ${universalDollarTile}
      <div>
        <div class="card-title">Pay $48.00 now?</div>
        <div class="card-sub">2× USB-C DisplayPort cables · express shipping.</div>
      </div>
    </div>
    <div class="actions-row">
      <div class="action-pill btn-3d-selected">Pay $48</div>
      <div class="action-pill btn-recessed">Cancel</div>
    </div>
  </div>

  <!-- SURFACE 4 (Bottom-Right): Tabbed Coding Agent Trajectory Check (Done -> Doing -> Should) -->
  <div class="light-gray-panel surface-bottom-right" style="gap:7px;">
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <div class="origin-row">
        ${githubFavicon}
        <span class="origin-domain">walkaway</span>
      </div>
      <div style="display:flex;gap:8px;font-size:10px;padding-right:2px;">
        <span style="color:rgba(255,255,255,0.58);">Worktrees</span>
        <span style="color:#FFFFFF;font-weight:700;">Trajectory</span>
      </div>
    </div>
    <div class="action-body-row">
      ${universalHazardTile}
      <div>
        <div class="card-title">Agent looping outside scope</div>
        <div class="card-sub">7 failed edits since last green test.</div>
      </div>
    </div>
    <div style="border-top:1px solid rgba(255,255,255,0.18);padding-top:6px;display:flex;flex-direction:column;gap:3px;">
      <div class="ledger-row">
        <span class="ledger-tag" style="color:rgba(255,255,255,0.75);">✓ DONE</span>
        <span style="color:#FFFFFF;">WebAuthn verifier in auth.rs</span>
      </div>
      <div class="ledger-row">
        <span class="ledger-tag" style="color:#FDE68A;">↻ DOING</span>
        <span style="color:#FDE68A;font-weight:700;">Deleting asserts in auth_test.rs</span>
      </div>
      <div class="ledger-row">
        <span class="ledger-tag" style="color:#93C5FD;">→ SHOULD</span>
        <span style="color:rgba(255,255,255,0.86);">Run cargo test &amp; open PR</span>
      </div>
    </div>
    <div class="actions-row">
      <div class="action-pill btn-3d-selected">Freeze</div>
      <div class="action-pill btn-recessed">Ignore</div>
    </div>
  </div>
</body>
</html>`;

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
});
const page = await browser.newPage({
  viewport: { width: 540, height: 550 },
  deviceScaleFactor: 1,
});
await page.setContent(html, { waitUntil: 'load' });
const outDemo = path.join(ARTIFACT_DIR, 'xr_ui_collage_demo.png');
await page.screenshot({ path: outDemo });
await browser.close();

const meta = await sharp(outDemo).metadata();
console.log('Rendered waveguide collage demo:', meta.width, 'x', meta.height);
