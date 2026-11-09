import { chromium } from 'playwright';
import sharp from 'sharp';
import path from 'node:path';

const ARTIFACT_DIR = '/Users/mac/.gemini/antigravity/brain/fe8b99f7-f96f-4bb3-b19e-b16e765f2dbb';

const githubOctocatSvg = `
<svg width="20" height="20" viewBox="0 0 28 28" fill="none">
  <rect width="28" height="28" rx="6" fill="#1B1F24" stroke="#484F58" stroke-width="1"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5.5C9.3 5.5 5.5 9.3 5.5 14C5.5 17.76 7.94 20.94 11.31 22.07C11.74 22.15 11.9 21.89 11.9 21.66C11.9 21.46 11.89 20.8 11.89 20.1C9.53 20.61 9.03 19.1 9.03 19.1C8.65 18.12 8.09 17.86 8.09 17.86C7.32 17.33 8.15 17.34 8.15 17.34C9 17.4 9.45 18.21 9.45 18.21C10.2 19.51 11.43 19.14 11.92 18.92C11.99 18.37 12.21 18 12.46 17.78C10.57 17.57 8.59 16.84 8.59 13.58C8.59 12.65 8.92 11.89 9.47 11.3C9.38 11.08 9.09 10.21 9.55 9.03C9.55 9.03 10.26 8.8 11.89 9.9C12.57 9.71 13.29 9.62 14.01 9.62C14.73 9.62 15.45 9.71 16.13 9.9C17.75 8.8 18.46 9.03 18.46 9.03C18.92 10.21 18.63 11.08 18.55 11.3C19.1 11.89 19.42 12.65 19.42 13.58C19.42 16.85 17.43 17.57 15.54 17.78C15.85 18.05 16.12 18.57 16.12 19.38C16.12 20.54 16.11 21.37 16.11 21.66C16.11 21.89 16.26 22.16 16.7 22.07C20.06 20.94 22.5 17.75 22.5 14C22.5 9.3 18.7 5.5 14 5.5Z" fill="#FFFFFF"/>
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
    background: linear-gradient(145deg, #86A5CE 0%, #C2D4EB 42%, #EDF2F8 82%, #F6F8FB 100%);
    position: relative;
  }

  .studio-glow {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 18%, rgba(255,255,255,0.55) 0%, transparent 48%),
      radial-gradient(circle at 82% 82%, rgba(255,255,255,0.75) 0%, transparent 55%);
    pointer-events: none;
  }

  /* Recessed right frame (tucked behind the left frame, like the Muse reference) */
  .recessed-frame {
    position: absolute;
    top: 60px;
    right: 12px;
    width: 262px;
    height: 444px;
    background: rgba(255, 255, 255, 0.74);
    backdrop-filter: blur(18px);
    border-radius: 30px;
    border: 1.5px solid rgba(255, 255, 255, 0.9);
    box-shadow: 0 20px 44px rgba(15, 23, 42, 0.12);
    z-index: 1;
  }

  /* Primary foreground frame on the left */
  .primary-frame {
    position: absolute;
    top: 32px;
    left: 20px;
    width: 274px;
    height: 472px;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(22px);
    border-radius: 34px;
    border: 2px solid #FFFFFF;
    box-shadow: 0 24px 54px rgba(15, 23, 42, 0.16);
    z-index: 2;
  }

  /* Top straddling identity pill (like the Muse pill on the top bezel) */
  .top-pill {
    position: absolute;
    top: 14px;
    left: 96px;
    background: #FFFFFF;
    border-radius: 999px;
    padding: 5px 13px 5px 8px;
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
    display: flex;
    align-items: center;
    gap: 7px;
    z-index: 8;
    border: 1px solid rgba(226, 232, 240, 0.95);
  }
  .top-pill-icon {
    width: 22px;
    height: 22px;
    border-radius: 999px;
    background: #1E2430;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .top-pill-text {
    font-size: 12px;
    font-weight: 700;
    color: #0F172A;
    letter-spacing: -0.01em;
  }

  /* Top-left floating notification callout (like Meta AI daily briefing callout) */
  .callout-bubble {
    position: absolute;
    top: 48px;
    left: 8px;
    width: 272px;
    background: #FFFFFF;
    border-radius: 16px;
    padding: 8px 11px;
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.11);
    display: flex;
    align-items: center;
    gap: 9px;
    z-index: 6;
  }
  .callout-icon {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    background: #0A66C2;
    color: #FFFFFF;
    font-weight: 800;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .callout-text {
    font-size: 10.5px;
    line-height: 1.28;
    color: #334155;
  }
  .callout-text strong {
    display: block;
    color: #0F172A;
    font-size: 11px;
    font-weight: 700;
    margin-bottom: 1px;
  }

  /* Canonical Single-Surface XR Waveguide Card */
  .xr-card {
    background: #252932;
    border: 1.5px solid #48505E;
    border-radius: 20px;
    padding: 12px 13px;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 7px;
    box-shadow:
      0 18px 36px rgba(9, 13, 22, 0.28),
      0 2px 6px rgba(9, 13, 22, 0.16);
  }
  .xr-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .xr-origin-group {
    display: flex;
    align-items: center;
    gap: 7px;
  }
  .xr-origin-domain {
    font-size: 11px;
    font-weight: 600;
    color: #E2E8F0;
    line-height: 1.15;
  }
  .xr-origin-cat {
    font-size: 9px;
    font-weight: 500;
    color: #94A3B8;
  }
  .xr-title {
    font-size: 14.5px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.18;
    color: #FFFFFF;
  }
  .xr-sub {
    font-size: 10px;
    line-height: 1.3;
    color: #B8C1CF;
  }
  .xr-divider {
    border-top: 1px solid rgba(255, 255, 255, 0.10);
    padding-top: 6px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .xr-kv {
    display: flex;
    justify-content: space-between;
    font-size: 9.5px;
    line-height: 1.3;
  }
  .xr-kv-k { color: #94A3B8; }
  .xr-kv-v { color: #E2E8F0; font-weight: 600; }
  .xr-kv-v.bright { color: #FFFFFF; font-weight: 700; }

  .xr-actions {
    display: flex;
    gap: 7px;
    margin-top: 2px;
  }
  .xr-btn {
    flex: 1;
    height: 27px;
    border-radius: 8px;
    font-size: 10.5px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background: #303540;
    border: 1px solid rgba(255, 255, 255, 0.14);
  }
  .xr-btn.focused {
    background: #384152;
    border: 2px solid #FFFFFF;
  }
  .xr-btn.destructive {
    background: #422328;
    color: #FCA5A5;
  }

  /* Card 1: Left Hero Pop-Out (New Account + Blitz Passkey) */
  .card-left-top {
    position: absolute;
    top: 104px;
    left: 8px;
    width: 274px;
    z-index: 7;
  }

  /* Card 2: Left Bottom (Stripe Credit Card Charge) */
  .card-left-bottom {
    position: absolute;
    top: 326px;
    left: 14px;
    width: 266px;
    z-index: 6;
  }

  /* Card 3: Right Top (Ballistic Agent Deflected Vector) */
  .card-right-top {
    position: absolute;
    top: 76px;
    right: 8px;
    width: 244px;
    z-index: 5;
  }

  /* Card 4: Right Bottom (Scope Drift Bullseye) */
  .card-right-bottom {
    position: absolute;
    top: 292px;
    right: 8px;
    width: 244px;
    z-index: 5;
  }

  /* Floating bottom gesture pill (like "+ Send it ↑" in the Muse reference) */
  .bottom-gesture-pill {
    position: absolute;
    bottom: 12px;
    left: 14px;
    width: 284px;
    height: 36px;
    background: #FFFFFF;
    border-radius: 999px;
    box-shadow: 0 10px 26px rgba(15, 23, 42, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px 0 14px;
    z-index: 8;
  }
  .gesture-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 11.5px;
    font-weight: 600;
    color: #0F172A;
  }
  .gesture-btn {
    width: 26px;
    height: 26px;
    border-radius: 999px;
    background: #D6E6FF;
    color: #0A66C2;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 12.5px;
  }
</style>
</head>
<body>
  <div class="studio-glow"></div>

  <!-- Top straddling badge -->
  <div class="top-pill">
    <div class="top-pill-icon">
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <rect x="1.5" y="4.5" width="5.5" height="4.5" rx="1.5" stroke="#60A5FA" stroke-width="1.5"/>
        <rect x="9" y="4.5" width="5.5" height="4.5" rx="1.5" stroke="#60A5FA" stroke-width="1.5"/>
        <path d="M7 6.5H9" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </div>
    <span class="top-pill-text">xr-ui · glasses hud</span>
  </div>

  <!-- Overlapping glass containers -->
  <div class="primary-frame"></div>
  <div class="recessed-frame"></div>

  <!-- Top-left notification callout -->
  <div class="callout-bubble">
    <div class="callout-icon">in</div>
    <div class="callout-text">
      <strong>Muse staged LinkedIn signup</strong>
      New account + Blitz passkey ready on glasses
    </div>
  </div>

  <!-- Card 1: New Account + Blitz Passkey Creation -->
  <div class="xr-card card-left-top">
    <div class="xr-header">
      <div class="xr-origin-group">
        <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx="6" fill="#0A66C2"/>
          <path d="M8.2 11.5H5.4V21H8.2V11.5ZM6.8 10.3C7.7 10.3 8.4 9.5 8.4 8.6C8.4 7.7 7.7 7 6.8 7C5.9 7 5.2 7.7 5.2 8.6C5.2 9.5 5.9 10.3 6.8 10.3ZM22.6 21H19.8V16.2C19.8 15 19.8 13.5 18.2 13.5C16.5 13.5 16.3 14.8 16.3 16.1V21H13.5V11.5H16.2V12.8H16.24C16.6 12.1 17.5 11.3 19 11.3C21.9 11.3 22.6 13.2 22.6 15.6V21Z" fill="#FFFFFF"/>
        </svg>
        <div>
          <div class="xr-origin-domain">linkedin.com</div>
          <div class="xr-origin-cat">New Account · Mint Blitz Passkey</div>
        </div>
      </div>
      <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
        <circle cx="17" cy="16" r="6" stroke="#FFFFFF" stroke-width="2.4"/>
        <path d="M7 33C7 27.8 11.2 24.5 17 24.5C20.2 24.5 22.9 25.5 24.7 27.3" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round"/>
        <circle cx="31" cy="31" r="5.5" stroke="#60A5FA" stroke-width="2.6" fill="#1E293B"/>
        <path d="M36.5 31H43M40.5 31V34.5" stroke="#60A5FA" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M35 12V18M32 15H38" stroke="#60A5FA" stroke-width="2.6" stroke-linecap="round"/>
      </svg>
    </div>
    <div>
      <div class="xr-title">Create LinkedIn account &amp; passkey?</div>
      <div class="xr-sub">Registers ryan@zunftmax.secure.build in Meta Blitz.</div>
    </div>
    <div class="xr-divider">
      <div class="xr-kv">
        <span class="xr-kv-k">Identity</span>
        <span class="xr-kv-v">ryan@zunftmax.secure.build</span>
      </div>
      <div class="xr-kv">
        <span class="xr-kv-k">Credential</span>
        <span class="xr-kv-v bright">New Ed25519 Passkey in Blitz</span>
      </div>
    </div>
    <div class="xr-actions">
      <div class="xr-btn focused">Create &amp; Mint</div>
      <div class="xr-btn">Deny</div>
    </div>
  </div>

  <!-- Card 2: Credit Card Charge -->
  <div class="xr-card card-left-bottom">
    <div class="xr-header">
      <div class="xr-origin-group">
        <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx="6" fill="#635BFF"/>
          <path d="M13.3 11.2C13.3 10.4 13.9 10.1 14.9 10.1C16.3 10.1 18.1 10.5 19.5 11.3V7.4C18 6.8 16.5 6.5 14.9 6.5C11.2 6.5 8.7 8.4 8.7 11.5C8.7 16.3 15.3 15.5 15.3 17.6C15.3 18.5 14.5 18.8 13.4 18.8C11.8 18.8 9.7 18.1 8.1 17.2V21.2C9.9 22 11.7 22.3 13.4 22.3C17.2 22.3 19.9 20.5 19.9 17.3C19.9 12.1 13.3 13.1 13.3 11.2Z" fill="#FFFFFF"/>
        </svg>
        <div>
          <div class="xr-origin-domain">stripe.com</div>
          <div class="xr-origin-cat">One-Time Card Charge</div>
        </div>
      </div>
      <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="12" width="36" height="24" rx="4.5" stroke="#FFFFFF" stroke-width="2.4" fill="#2E3440"/>
        <line x1="6" y1="19" x2="42" y2="19" stroke="#94A3B8" stroke-width="2.2"/>
        <rect x="11" y="24" width="7" height="5.5" rx="1.2" stroke="#FBBF24" stroke-width="2.2"/>
        <line x1="23" y1="28" x2="36" y2="28" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>
      </svg>
    </div>
    <div>
      <div class="xr-title">Pay $48.00 with Visa •••• 4242?</div>
      <div class="xr-sub">2× USB-C DisplayPort cables · express shipping.</div>
    </div>
    <div class="xr-actions">
      <div class="xr-btn focused">Pay $48.00</div>
      <div class="xr-btn">Cancel</div>
    </div>
  </div>

  <!-- Card 3: Ballistic Agent Deflected Flight Vector -->
  <div class="xr-card card-right-top">
    <div class="xr-header">
      <div class="xr-origin-group">
        ${githubOctocatSvg}
        <div>
          <div class="xr-origin-domain">github.com · walkaway</div>
          <div class="xr-origin-cat">Trajectory Vector · Alt #1</div>
        </div>
      </div>
      <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
        <line x1="8" y1="32" x2="40" y2="32" stroke="#64748B" stroke-width="2.2" stroke-dasharray="3 3"/>
        <path d="M10 32L21 32L29 14L36 14" stroke="#F59E0B" stroke-width="2.6" stroke-linecap="round"/>
        <circle cx="36" cy="14" r="4" fill="#F59E0B"/>
      </svg>
    </div>
    <div>
      <div class="xr-title">Agent off-track — Freeze?</div>
    </div>
    <div class="xr-divider">
      <svg width="100%" height="46" viewBox="0 0 220 46" fill="none">
        <line x1="14" y1="32" x2="204" y2="32" stroke="#64748B" stroke-width="1.6" stroke-dasharray="3 3"/>
        <path d="M14 32 L66 32 L96 11 L140 11" stroke="#F59E0B" stroke-width="2.2" stroke-linecap="round"/>
        <circle cx="14" cy="32" r="3.5" fill="#FFFFFF"/>
        <text x="2" y="44" fill="#B8C1CF" font-size="8.5" font-weight="600">DONE: auth.rs</text>
        <circle cx="118" cy="11" r="4" fill="#F59E0B"/>
        <text x="60" y="7" fill="#FCD34D" font-size="8.5" font-weight="700">NOW: 6× loop · -4 asserts</text>
        <circle cx="204" cy="32" r="3.5" stroke="#94A3B8" stroke-width="1.6" fill="#252932"/>
        <text x="216" y="44" text-anchor="end" fill="#94A3B8" font-size="8.5" font-weight="600">SHOULD: Run tests</text>
      </svg>
    </div>
    <div class="xr-actions">
      <div class="xr-btn focused">Freeze &amp; Revert</div>
      <div class="xr-btn destructive">Continue</div>
    </div>
  </div>

  <!-- Card 4: Ballistic Agent Scope Drift Bullseye -->
  <div class="xr-card card-right-bottom">
    <div class="xr-header">
      <div class="xr-origin-group">
        ${githubOctocatSvg}
        <div>
          <div class="xr-origin-domain">github.com · walkaway</div>
          <div class="xr-origin-cat">Scope Drift Bullseye · Alt #3</div>
        </div>
      </div>
      <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="#F87171" stroke-width="2" stroke-dasharray="3 3"/>
        <circle cx="24" cy="24" r="8" stroke="#94A3B8" stroke-width="2"/>
        <circle cx="24" cy="24" r="2.5" fill="#FFFFFF"/>
        <circle cx="36" cy="14" r="3" fill="#F59E0B"/>
      </svg>
    </div>
    <div class="xr-divider" style="border-top:none;padding-top:2px;gap:5px;">
      <div style="display:flex;align-items: center;gap:10px;">
        <svg width="46" height="46" viewBox="0 0 52 52" fill="none" style="flex-shrink:0;">
          <circle cx="26" cy="26" r="23" stroke="#F87171" stroke-width="1.6" stroke-dasharray="2.5 2.5"/>
          <circle cx="26" cy="26" r="10.5" stroke="#94A3B8" stroke-width="1.6" fill="#2E3440"/>
          <circle cx="26" cy="26" r="2.5" fill="#FFFFFF"/>
          <circle cx="10" cy="14" r="2.8" fill="#F59E0B"/>
          <circle cx="42" cy="16" r="2.8" fill="#F87171"/>
          <circle cx="40" cy="38" r="2.8" fill="#F87171"/>
        </svg>
        <div style="font-size:9.5px;line-height:1.35;color:#B8C1CF;">
          <div><strong style="color:#FFFFFF;">Done:</strong> src/auth/ verifier</div>
          <div style="color:#FCD34D;"><strong>Doing:</strong> Editing tests/ &amp; ui/ (7×)</div>
          <div><strong style="color:#CBD5E1;">Should:</strong> Run auth unit tests</div>
        </div>
      </div>
    </div>
    <div class="xr-actions">
      <div class="xr-btn focused">Freeze &amp; Revert</div>
      <div class="xr-btn destructive">Continue</div>
    </div>
  </div>

  <!-- Bottom Floating Gesture Pill -->
  <div class="bottom-gesture-pill">
    <div class="gesture-label">
      <span style="color:#64748B;font-weight:700;">⟷</span>
      <span>Swipe temple · Pinch to approve</span>
    </div>
    <div class="gesture-btn">✓</div>
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
console.log('Rendered updated collage demo:', meta.width, 'x', meta.height);
