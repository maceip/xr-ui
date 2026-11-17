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
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    flex: 1;
  }
  .btn-recessed {
    background: rgba(28, 30, 36, 0.34);
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.24);
    color: rgba(255, 255, 255, 0.82);
    font-weight: 500;
    border-radius: 13px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
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
    font-size: 10.5px;
    font-weight: 700;
    color: #93C5FD;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
  .card-h {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #FFFFFF;
  }
  .card-p {
    font-size: 12px;
    line-height: 1.35;
    color: rgba(255, 255, 255, 0.86);
  }
  .universal-tile {
    width: 50px;
    height: 50px;
    border-radius: 14px;
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
// SECTION 0: INTRO PILLARS BOARD (UNIVERSAL BLUE ACTION ICONS + ORGANIC WINDOW SHAPES)
// ============================================================================
const section0IntroHtml = `<!doctype html><html><head><meta charset="utf-8"/><style>
${sharedCss}
.icon-strip {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  margin-top: 4px;
}
.icon-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  text-align: center;
  font-size: 10.5px;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
}
</style></head><body>
<div class="grid-2">
  <!-- PILLAR 1: COMMON ACTION ICONOGRAPHY (UNIVERSAL SLATE-BLUE ACTION TILES) -->
  <div class="light-panel">
    <div class="tag-chip">Core Idea #1 · Universal Slate-Blue Action Iconography</div>
    <div class="card-h">Left-Anchored #33456B Tiles for Instant Action Recognition</div>
    <div class="card-p">Every window anchors icons exclusively on the left with a consistent deep blue-slate backdrop so your eye knows the action class before reading a word:</div>
    <div class="icon-strip">
      <div class="icon-cell">
        <div class="universal-tile" style="width:44px;height:44px;">
          <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
            <circle cx="12" cy="20" r="5" stroke="#FFF" stroke-width="2.4"/>
            <path d="M17 20H29M24 20V25M28 20V26" stroke="#FFF" stroke-width="2.4" stroke-linecap="round"/>
            <path d="M26 8V14M23 11H29" stroke="#60A5FA" stroke-width="2.4" stroke-linecap="round"/>
          </svg>
        </div>
        <span>Passkey</span>
      </div>
      <div class="icon-cell">
        <div class="universal-tile" style="width:44px;height:44px;">
          <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
            <circle cx="15" cy="18" r="8.5" fill="#1B253B" stroke="#FFF" stroke-width="2.2"/>
            <text x="15" y="22" text-anchor="middle" fill="#FBBF24" font-size="11" font-weight="800">$</text>
            <path d="M27 13C29 16 29 20 27 23" stroke="#93C5FD" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
        </div>
        <span>Buy / Pay</span>
      </div>
      <div class="icon-cell">
        <div class="universal-tile" style="width:44px;height:44px;">
          <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
            <path d="M18 5L29 10V18C29 25 24 30 18 32C12 30 7 25 7 18V10L18 5Z" fill="#1B253B" stroke="#FFF" stroke-width="2.2"/>
            <path d="M13 18L16.5 21.5L23.5 14.5" stroke="#6EE7B7" stroke-width="2.6" stroke-linecap="round"/>
          </svg>
        </div>
        <span>Scope</span>
      </div>
      <div class="icon-cell">
        <div class="universal-tile" style="width:44px;height:44px;">
          <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
            <rect x="5" y="10" width="26" height="16" rx="4" stroke="#FFF" stroke-width="2.2" fill="#1B253B"/>
            <circle cx="12" cy="18" r="2" fill="#60A5FA"/><circle cx="18" cy="18" r="2" fill="#60A5FA"/><circle cx="24" cy="18" r="2" fill="#60A5FA"/>
          </svg>
        </div>
        <span>Vault Fill</span>
      </div>
      <div class="icon-cell">
        <div class="universal-tile" style="width:44px;height:44px;">
          <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
            <path d="M18 6L31 29H5L18 6Z" fill="#3B2328" stroke="#FBBF24" stroke-width="2.2"/>
            <line x1="18" y1="14" x2="18" y2="21" stroke="#FFF" stroke-width="2.4"/>
          </svg>
        </div>
        <span>Hazard</span>
      </div>
      <div class="icon-cell">
        <div class="universal-tile" style="width:44px;height:44px;border-radius:999px;background:radial-gradient(circle, #090D16 36%, #263859 75%, #60A5FA 100%);">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="5" fill="#090D16" stroke="#FBBF24" stroke-width="2"/>
            <path d="M6 16C6 10.5 11 7 16 7C21 7 26 10.5 26 16" stroke="#93C5FD" stroke-width="2"/>
          </svg>
        </div>
        <span>Code Loop</span>
      </div>
    </div>
  </div>

  <!-- PILLAR 2: ORGANIC & TASK-SEMANTIC WINDOW SILHOUETTES -->
  <div class="light-panel">
    <div class="tag-chip">Core Idea #2 · Organic Task-Shaped Window Silhouettes</div>
    <div class="card-h">Human Head, Cumulus Cloud, Whisper Leaf, Heart &amp; Black Hole</div>
    <div class="card-p">Instead of generic rectangles, the outer window silhouette morphs into an unmistakable organic contour so peripheral vision classifies the request in 50ms:</div>
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;align-items:center;margin-top:4px;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10px;font-weight:700;color:#5EEAD4;">
        <svg width="56" height="48" viewBox="0 0 56 48">
          <path d="M28 4 C17 4, 12 10, 12 17 C8 17, 6 20, 6 24 C6 28, 9 30, 12 30 C14 38, 21 44, 28 45 C35 44, 42 38, 44 30 C47 30, 50 28, 50 24 C50 20, 48 17, 44 17 C44 10, 39 4, 28 4 Z" fill="#585D66" stroke="#5EEAD4" stroke-width="2"/>
        </svg>
        <span>Human Head</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10px;font-weight:700;color:#5EEAD4;">
        <svg width="56" height="48" viewBox="0 0 56 48">
          <path d="M12 36 C9 30, 12 18, 22 12 C32 6, 44 7, 50 7 C49 16, 48 28, 42 36 C35 43, 20 43, 12 36 Z" fill="#585D66" stroke="#5EEAD4" stroke-width="2"/>
        </svg>
        <span>Whisper Leaf</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10px;font-weight:700;color:#E2E8F0;">
        <svg width="62" height="48" viewBox="0 0 62 48">
          <path d="M6 40 C6 33, 11 29, 16 29 C16 22, 21 18, 27 19 C30 11, 39 9, 45 15 C48 20, 48 24, 49 25 C55 25, 58 31, 57 40 Z" fill="#5C6069" stroke="#FDE68A" stroke-width="1.8"/>
        </svg>
        <span>Cloud Sync</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10px;font-weight:700;color:#F9A8D4;">
        <svg width="56" height="48" viewBox="0 0 56 48">
          <path d="M28 11 C21 2, 5 3, 5 18 C5 30, 20 39, 28 44 C36 39, 51 30, 51 18 C51 3, 35 2, 28 11 Z" fill="#5E5866" stroke="#F9A8D4" stroke-width="2"/>
        </svg>
        <span>Social Heart</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10px;font-weight:700;color:#93C5FD;">
        <svg width="56" height="48" viewBox="0 0 56 48">
          <path d="M8 9 C20 3, 23 15, 28 15 C33 15, 36 3, 48 9 C55 15, 44 24, 44 24 C44 24, 55 33, 48 39 C36 45, 33 33, 28 33 C23 33, 20 45, 8 39 C1 33, 12 24, 12 24 C12 24, 1 15, 8 9 Z" fill="#4E5464" stroke="#93C5FD" stroke-width="2"/>
        </svg>
        <span>Black Hole</span>
      </div>
    </div>
  </div>
</div>
</body></html>`;

// ============================================================================
// SECTION 1A: DRAMATIC ORGANIC & TASK-SEMANTIC WINDOW OUTLINES (6 SILHOUETTES)
// Refined directly from user's sketch (Human Head, Pointed Whisper Leaf, Cumulus Cloud)
// + Social Heart, Collapsing Black-Hole Code Vortex, and Commerce Price-Tag
// ============================================================================
const section1SemanticOutlinesHtml = `<!doctype html><html><head><meta charset="utf-8"/><style>
${sharedCss}
.semantic-card {
  position: relative;
  height: 278px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  filter: drop-shadow(0 16px 28px rgba(0,0,0,0.62));
}
.semantic-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.semantic-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
</style></head><body>
<div class="board">
  <div class="grid-3">
    <!-- 1. HUMAN HEAD PORTRAIT SILHOUETTE (IDENTITY / PERSON / CALLER) -->
    <div class="semantic-card" style="padding: 44px 36px 40px 36px;">
      <svg class="semantic-bg" viewBox="0 0 272 278" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id="headG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#60656F"/>
            <stop offset="100%" stop-color="#4C505A"/>
          </linearGradient>
        </defs>
        <!-- Refined Human Head Silhouette: Roomy cranium dome + sculpted ear lobes + full jawline & chin -->
        <path d="M 136 8
                 C 70 8, 34 36, 32 84
                 C 12 84, 4 100, 4 128
                 C 4 156, 14 172, 32 174
                 C 40 232, 86 266, 136 272
                 C 186 266, 232 232, 240 174
                 C 258 172, 268 156, 268 128
                 C 268 100, 260 84, 240 84
                 C 238 36, 202 8, 136 8 Z"
              fill="url(#headG)"
              stroke="#5EEAD4"
              stroke-width="2.6"/>
      </svg>
      <div class="semantic-content" style="align-items:center;text-align:center;">
        <div class="tag-chip" style="color:#5EEAD4;">1 · Human Head Silhouette</div>
        <div style="display:flex;align-items:center;gap:10px;text-align:left;">
          <div class="universal-tile" style="width:42px;height:42px;">
            <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
              <circle cx="12" cy="20" r="5" stroke="#FFF" stroke-width="2.4"/>
              <path d="M17 20H29M24 20V25M28 20V26" stroke="#FFF" stroke-width="2.4" stroke-linecap="round"/>
              <path d="M26 8V14M23 11H29" stroke="#5EEAD4" stroke-width="2.4" stroke-linecap="round"/>
            </svg>
          </div>
          <div>
            <div class="card-h" style="font-size:14px;">Mint Passkey?</div>
            <div class="card-p" style="font-size:11px;">Cranium dome + ears + chin = identity</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;width:136px;">
          <div class="btn-3d" style="height:32px;border-radius:999px;">Create</div>
          <div class="btn-recessed" style="height:32px;border-radius:999px;">Deny</div>
        </div>
      </div>
    </div>

    <!-- 2. ORGANIC WHISPER LEAF / POINTED SPEECH-DROP SILHOUETTE -->
    <div class="semantic-card" style="padding: 46px 36px 40px 36px;">
      <svg class="semantic-bg" viewBox="0 0 272 278" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id="leafG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#5E646E"/>
            <stop offset="100%" stop-color="#4B5059"/>
          </linearGradient>
        </defs>
        <!-- Refined Botanical Leaf / Pointed Speech-Drop Silhouette sweeping to top-right apex -->
        <path d="M 260 14
                 C 172 10, 78 18, 36 62
                 C 6 94, 4 158, 22 206
                 C 42 250, 98 268, 160 264
                 C 216 260, 244 226, 252 172
                 C 258 128, 254 68, 260 14 Z"
              fill="url(#leafG)"
              stroke="#5EEAD4"
              stroke-width="2.6"
              stroke-linejoin="round"/>
      </svg>
      <div class="semantic-content" style="align-items:center;">
        <div class="tag-chip" style="color:#5EEAD4;">2 · Organic Whisper Leaf</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="universal-tile" style="width:42px;height:42px;">
            <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
              <path d="M6 17L30 7L24 29L17 21L6 17Z" fill="#1B253B" stroke="#FFF" stroke-width="2.2"/>
            </svg>
          </div>
          <div>
            <div class="card-h" style="font-size:14px;">Post to #release?</div>
            <div class="card-p" style="font-size:11px;">Pointed top-right leaf apex = whisper</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;width:148px;">
          <div class="btn-3d" style="height:32px;border-radius:999px;">Send</div>
          <div class="btn-recessed" style="height:32px;border-radius:999px;">Drop</div>
        </div>
      </div>
    </div>

    <!-- 3. CUMULUS CLOUD SILHOUETTE (CLOUD DEPLOY / REMOTE INFRASTRUCTURE) -->
    <div class="semantic-card" style="padding: 76px 24px 24px 38px;">
      <svg class="semantic-bg" viewBox="0 0 272 278" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id="cloudG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#676B75"/>
            <stop offset="100%" stop-color="#4D5059"/>
          </linearGradient>
        </defs>
        <!-- Multi-Dome Cumulus Cloud Silhouette with wide left puff + tall central dome + flat horizon base -->
        <path d="M 8 260
                 C 2 186, 10 124, 34 118
                 C 38 68, 72 44, 112 54
                 C 132 12, 194 12, 218 60
                 C 254 68, 268 118, 264 260
                 Z"
              fill="url(#cloudG)"
              stroke="#FDE68A"
              stroke-width="2.4"
              stroke-linejoin="round"/>
      </svg>
      <div class="semantic-content" style="justify-content:space-between;">
        <div class="tag-chip" style="color:#FDE68A;justify-content:center;">3 · Cumulus Cloud</div>
        <div style="display:flex;align-items:center;gap:10px;padding:0 4px;">
          <div class="universal-tile" style="width:42px;height:42px;">
            <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
              <path d="M18 5L29 10V18C29 25 24 30 18 32C12 30 7 25 7 18V10L18 5Z" fill="#1B253B" stroke="#FFF" stroke-width="2.2"/>
              <path d="M13 18L16.5 21.5L23.5 14.5" stroke="#6EE7B7" stroke-width="2.6" stroke-linecap="round"/>
            </svg>
          </div>
          <div>
            <div class="card-h" style="font-size:14px;">Sync Vault to Cloud?</div>
            <div class="card-p" style="font-size:11px;">Triple cloud dome + flat horizon base</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;padding:0 6px;">
          <div class="btn-3d" style="height:32px;">Sync</div>
          <div class="btn-recessed" style="height:32px;">Local</div>
        </div>
      </div>
    </div>

    <!-- 4. SOCIAL HEART SILHOUETTE (AFFECTION / FAMILY / PERSONAL DM) -->
    <div class="semantic-card" style="padding: 44px 32px 42px 32px;">
      <svg class="semantic-bg" viewBox="0 0 272 278" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id="heartG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#665C69"/>
            <stop offset="100%" stop-color="#4D4754"/>
          </linearGradient>
        </defs>
        <path d="M 136 36
                 C 116 4, 44 2, 16 28
                 C -4 48, 2 114, 18 168
                 C 36 226, 88 260, 136 272
                 C 184 260, 236 226, 254 168
                 C 270 114, 276 48, 256 28
                 C 228 2, 156 4, 136 36 Z"
              fill="url(#heartG)"
              stroke="#F9A8D4"
              stroke-width="2.4"/>
      </svg>
      <div class="semantic-content" style="align-items:center;text-align:center;">
        <div class="tag-chip" style="color:#F9A8D4;">4 · Social Heart Silhouette</div>
        <div style="display:flex;align-items:center;gap:10px;text-align:left;">
          <div class="universal-tile" style="width:42px;height:42px;">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <path d="M16 26C16 26 6 19.2 6 12.2C6 8.8 8.7 6.2 12 6.2C13.9 6.2 15.3 7.1 16 8.4C16.7 7.1 18.1 6.2 20 6.2C23.3 6.2 26 8.8 26 12.2C26 19.2 16 26 16 26Z" fill="#F472B6" stroke="#FFF" stroke-width="2"/>
            </svg>
          </div>
          <div>
            <div class="card-h" style="font-size:14px;">Maya: "7pm sushi?"</div>
            <div class="card-p" style="font-size:11px;">Twin top lobes + heart point = personal</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;width:142px;">
          <div class="btn-3d" style="height:32px;border-radius:999px;">Reply</div>
          <div class="btn-recessed" style="height:32px;border-radius:999px;">Mute</div>
        </div>
      </div>
    </div>

    <!-- 5. COLLAPSING BLACK HOLE VORTEX SILHOUETTE (CODE / REPO ANOMALY) -->
    <div class="semantic-card" style="padding: 40px 30px 38px 30px;">
      <svg class="semantic-bg" viewBox="0 0 272 278" preserveAspectRatio="none" fill="none">
        <defs>
          <radialGradient id="bhCore" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stop-color="#373D4D"/>
            <stop offset="70%" stop-color="#4E5362"/>
            <stop offset="100%" stop-color="#606675"/>
          </radialGradient>
        </defs>
        <path d="M 22 14
                 C 74 2, 102 28, 136 28
                 C 170 28, 198 2, 250 14
                 C 272 20, 270 68, 248 106
                 C 234 130, 234 148, 248 172
                 C 270 210, 272 258, 250 264
                 C 198 276, 170 250, 136 250
                 C 102 250, 74 276, 22 264
                 C 0 258, 2 210, 24 172
                 C 38 148, 38 130, 24 106
                 C 2 68, 0 20, 22 14 Z"
              fill="url(#bhCore)"
              stroke="#93C5FD"
              stroke-width="2.4"/>
        <ellipse cx="136" cy="139" rx="102" ry="62" stroke="rgba(251,191,36,0.32)" stroke-width="1.5" stroke-dasharray="5 5"/>
      </svg>
      <div class="semantic-content" style="align-items:center;">
        <div class="tag-chip" style="color:#93C5FD;">5 · Black-Hole Code Vortex</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="universal-tile" style="width:42px;height:42px;border-radius:999px;background:radial-gradient(circle, #090D16 38%, #263859 75%, #60A5FA 100%);">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="5" fill="#090D16" stroke="#FBBF24" stroke-width="2"/>
              <path d="M6 16C6 10.5 11 7 16 7C21 7 26 10.5 26 16" stroke="#93C5FD" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div>
            <div class="card-h" style="font-size:14px;">auth.rs 6× Loop</div>
            <div class="card-p" style="font-size:11px;">Pinched waist + vortex ring = loop</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;width:168px;">
          <div class="btn-3d" style="height:32px;">Freeze</div>
          <div class="btn-recessed" style="height:32px;">Revert</div>
        </div>
      </div>
    </div>

    <!-- 6. COMMERCE DIE-CUT PRICE TAG + RECEIPT TEETH SILHOUETTE -->
    <div class="semantic-card" style="padding: 28px 26px 28px 40px;">
      <svg class="semantic-bg" viewBox="0 0 272 278" preserveAspectRatio="none" fill="none">
        <path d="M 48 12
                 L 248 12
                 L 264 30 L 248 48 L 264 66 L 248 84 L 264 102 L 248 120 L 264 138 L 248 156 L 264 174 L 248 192 L 264 210 L 248 228 L 264 246 L 248 266
                 L 48 266
                 L 8 198
                 L 8 80
                 Z"
              fill="#555963"
              stroke="#FBBF24"
              stroke-width="2.4"/>
        <circle cx="26" cy="139" r="8" fill="#0D0F14" stroke="#FBBF24" stroke-width="2.2"/>
      </svg>
      <div class="semantic-content">
        <div class="tag-chip" style="color:#FDE68A;">6 · Commerce Price-Tag</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="universal-tile" style="width:42px;height:42px;">
            <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
              <circle cx="15" cy="18" r="8.5" fill="#1B253B" stroke="#FFF" stroke-width="2.2"/>
              <text x="15" y="22" text-anchor="middle" fill="#FBBF24" font-size="11" font-weight="800">$</text>
              <path d="M27 13C29 16 29 20 27 23" stroke="#93C5FD" stroke-width="2.2" stroke-linecap="round"/>
            </svg>
          </div>
          <div>
            <div class="card-h" style="font-size:14px;">$128 · Killshot 2</div>
            <div class="card-p" style="font-size:11px;">Left tag eyelet + receipt teeth = buy</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;padding-right:8px;">
          <div class="btn-3d" style="height:32px;">Buy $128</div>
          <div class="btn-recessed" style="height:32px;">Skip</div>
        </div>
      </div>
    </div>
  </div>
</div>
</body></html>`;

// ============================================================================
// SECTION 1B: 5 STRUCTURAL WAVEGUIDE WINDOW OUTLINES
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
      <div class="tag-chip">Structural #1 · Classic 26px Squircle Light-Shield</div>
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
          <span>linkedin.com · Structural #2 Origin Tab</span>
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
      <div class="tag-chip" style="color:#FDE68A;">Structural #3 · 45° Chamfered Telemetry Cutout</div>
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
          <div class="card-p">Instant peripheral recognition: clipped 45° corners + amber spine = telemetry.</div>
        </div>
      </div>
      <div class="btn-row"><div class="btn-3d">Freeze</div><div class="btn-recessed">Ignore</div></div>
    </div>

    <div class="outline-split-wrap">
      <div class="outline-split-orb-bar">
        <span style="font-size:13px;opacity:0.8;">✓</span>
        <span style="font-size:13px;opacity:0.8;">↺</span>
        <div class="btn-3d" style="width:34px;height:34px;border-radius:999px;flex:none;">⌲</div>
        <span style="font-size:12px;font-weight:700;color:#93C5FD;">Structural #4 · Split Orb Deck</span>
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
        <div style="font-size:11px;font-weight:700;color:#93C5FD;text-transform:uppercase;">Structural #5 · Horizon Whisper Pill (Leaves 80% of Lens Clear)</div>
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

// ============================================================================
// SECTION 3.3: EXPANDED-SIZE HUMAN VALIDATION PANELS (#1 PICK VS #2 RUNNER-UP + CHAT VALIDATION)
// ============================================================================
const section3ExpandedValidationHtml = `<!doctype html><html><head><meta charset="utf-8"/><style>
${sharedCss}
.option-line {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  border-bottom: 1px solid rgba(255,255,255,0.16);
}
.chat-quote {
  border-left: 3px solid #93C5FD;
  padding-left: 10px;
  font-size: 11.5px;
  line-height: 1.35;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
</style></head><body>
<div class="grid-3">
  <div class="light-panel">
    <div class="tag-chip">Expanded Buy · #1 Pick vs. #2 Runner-Up</div>
    <div class="option-line">
      <div class="universal-tile" style="width:42px;height:42px;">
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
          <path d="M8 32L12 18L22 23L34 20L41 27V34H8V32Z" fill="#60A5FA" stroke="#FFF" stroke-width="2.2"/>
          <line x1="8" y1="36" x2="41" y2="36" stroke="#FBBF24" stroke-width="3"/>
        </svg>
      </div>
      <div>
        <div style="font-size:13.5px;font-weight:700;">#1 · Nike Killshot 2 · $128</div>
        <div style="font-size:11.5px;color:#A7F3D0;">In stock · Arrives tomorrow</div>
      </div>
    </div>

    <div class="option-line">
      <div class="universal-tile" style="width:42px;height:42px;opacity:0.78;">
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
          <path d="M8 32L13 20L23 24L35 21L41 28V34H8V32Z" fill="#94A3B8" stroke="#FFF" stroke-width="2"/>
          <line x1="8" y1="36" x2="41" y2="36" stroke="#CBD5E1" stroke-width="3"/>
        </svg>
      </div>
      <div>
        <div style="font-size:13px;font-weight:600;opacity:0.92;">#2 · Adidas Samba OG · $115</div>
        <div style="font-size:11.5px;color:#FDE68A;">$13 cheaper · Ships in 5 days</div>
      </div>
    </div>

    <div class="chat-quote">
      <div style="color:#93C5FD;font-weight:700;">🎙️ You: "Why not the $115 Samba?"</div>
      <div><strong>Muse:</strong> "Samba ships next Tuesday; Killshot arrives before your Friday flight."</div>
    </div>

    <div class="btn-row">
      <div class="btn-3d">Buy #1</div>
      <div class="btn-recessed">Buy #2</div>
    </div>
  </div>

  <div class="light-panel">
    <div class="tag-chip">Expanded Auth · Scope Diff + Chat Validation</div>
    <div class="option-line">
      <div class="universal-tile" style="width:42px;height:42px;">
        <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
          <path d="M18 5L29 10V18C29 25 24 30 18 32C12 30 7 25 7 18V10L18 5Z" fill="#1B253B" stroke="#FFF" stroke-width="2.2"/>
          <path d="M13 18L16.5 21.5L23.5 14.5" stroke="#6EE7B7" stroke-width="2.6" stroke-linecap="round"/>
        </svg>
      </div>
      <div>
        <div style="font-size:13.5px;font-weight:700;">#1 · Read + Write Issues</div>
        <div style="font-size:11.5px;color:#A7F3D0;">Files bug reports · No Billing</div>
      </div>
    </div>

    <div class="option-line">
      <div class="universal-tile" style="width:42px;height:42px;opacity:0.78;">
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
          <rect x="7" y="14" width="18" height="13" rx="3" stroke="#FFF" stroke-width="2.2"/>
          <path d="M11 14V10C11 7.2 13.2 5 16 5C18.8 5 21 7.2 21 10V14" stroke="#93C5FD" stroke-width="2.2"/>
        </svg>
      </div>
      <div>
        <div style="font-size:13px;font-weight:600;opacity:0.92;">#2 · Read-Only (1h TTL)</div>
        <div style="font-size:11.5px;color:#CBD5E1;">Views issues · Cannot file bugs</div>
      </div>
    </div>

    <div class="chat-quote">
      <div style="color:#93C5FD;font-weight:700;">🎙️ You: "Why does it need Write?"</div>
      <div><strong>Muse:</strong> "To open the 3 regression tickets from cargo test automatically."</div>
    </div>

    <div class="btn-row">
      <div class="btn-3d">Grant #1</div>
      <div class="btn-recessed">Use #2</div>
    </div>
  </div>

  <div class="light-panel">
    <div class="tag-chip">Expanded Write · #1 Drop vs. #2 Cold Archive</div>
    <div class="option-line">
      <div class="universal-tile" style="width:42px;height:42px;">
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="8" width="20" height="18" rx="3" stroke="#6EE7B7" stroke-width="2.2"/>
          <path d="M12 16L15 19L21 13" stroke="#6EE7B7" stroke-width="2.2" stroke-linecap="round"/>
        </svg>
      </div>
      <div>
        <div style="font-size:13.5px;font-weight:700;">#2 · Archive to S3 Parquet</div>
        <div style="font-size:11.5px;color:#A7F3D0;">Keeps 14.2k rows · 2s restore</div>
      </div>
    </div>

    <div class="option-line">
      <div class="universal-tile" style="width:42px;height:42px;">
        <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
          <path d="M18 6L31 29H5L18 6Z" fill="#3B2328" stroke="#FBBF24" stroke-width="2.2"/>
          <line x1="18" y1="14" x2="18" y2="21" stroke="#FFF" stroke-width="2.4"/>
        </svg>
      </div>
      <div>
        <div style="font-size:13px;font-weight:600;opacity:0.92;">#1 · Drop legacy_sessions</div>
        <div style="font-size:11.5px;color:#FDE68A;">14.2k rows → 0 · Irreversible</div>
      </div>
    </div>

    <div class="chat-quote">
      <div style="color:#93C5FD;font-weight:700;">🎙️ You: "Any clients using it?"</div>
      <div><strong>Muse:</strong> "0 hits in 14d, but Option #2 moves rows to S3 first so rollback is instant."</div>
    </div>

    <div class="btn-row">
      <div class="btn-3d">Archive #2</div>
      <div class="btn-recessed">Drop #1</div>
    </div>
  </div>
</div>
</body></html>`;

// ============================================================================
// SECTION 4: VERCEL JSON-RENDER (JSONUI) GENERATIVE UI REALITY ON SMART GLASSES
// ============================================================================
const section4VercelJsonUiHtml = `<!doctype html><html><head><meta charset="utf-8"/><style>
${sharedCss}
.code-pill {
  font-family: "SF Mono", "JetBrains Mono", monospace;
  font-size: 11px;
  border-left: 3px solid #93C5FD;
  padding: 4px 10px;
  color: #E2E8F0;
  line-height: 1.38;
}
.check-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12px;
  line-height: 1.35;
}
</style></head><body>
<div class="board">
  <div class="grid-2">
    <div class="light-panel">
      <div class="tag-chip" style="color:#A7F3D0;">Can Generate On-The-Fly · vercel-labs/json-render SpecStream</div>
      <div class="card-h">Schema-Constrained Component Trees &amp; Live Props</div>
      <div class="code-pill">
        { "type": "ExpandedBuyValidation",<br/>
        &nbsp;&nbsp;"props": { "outline": "price_tag", "pick1": "$128 Killshot",<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;"pick2": "$115 Samba (5d)", "verb": "Buy #1" } }
      </div>
      <div style="display:flex;flex-direction:column;gap:7px;">
        <div class="check-row">
          <span style="color:#6EE7B7;font-weight:800;">✓</span>
          <span><strong>Template &amp; Silhouette Selection:</strong> Choosing <code>HumanHeadWindow</code>, <code>CumulusCloudWindow</code>, or <code>ExpandedBuyValidation</code> from <code>defineCatalog()</code>.</span>
        </div>
        <div class="check-row">
          <span style="color:#6EE7B7;font-weight:800;">✓</span>
          <span><strong>Zod-Validated Data Hydration:</strong> Streaming prices, #1 vs. #2 runner-up diffs, file paths, and 10-word chat answers into strict slots.</span>
        </div>
        <div class="check-row">
          <span style="color:#6EE7B7;font-weight:800;">✓</span>
          <span><strong>Parameterized Telemetry Coordinates:</strong> Feeding <code>loopCount: 6</code> or <code>escapedFiles: 3</code> into pre-built SVG widgets.</span>
        </div>
      </div>
    </div>

    <div class="light-panel">
      <div class="tag-chip" style="color:#FDE68A;">Cannot Generate On-The-Fly · Must Be Pre-Built in xr-ui Registry</div>
      <div class="card-h">Optical Physics, 3D Bevels &amp; Organic Window Contours</div>
      <div class="code-pill" style="border-left-color:#FBBF24;color:#FDE68A;">
        ✗ Raw LLM SVG/CSS blocked by catalog.jsonSchema({ strict: true })<br/>
        ✓ Mapped to pre-compiled &lt;HumanHeadWindow /&gt; &amp; &lt;Btn3D /&gt;
      </div>
      <div style="display:flex;flex-direction:column;gap:7px;">
        <div class="check-row">
          <span style="color:#FBBF24;font-weight:800;">✗</span>
          <span><strong>Organic Silhouettes (Head, Cloud, Leaf, Black Hole):</strong> Freeform LLM SVG paths clip text and miss optical margins; contours must be pre-authored.</span>
        </div>
        <div class="check-row">
          <span style="color:#FBBF24;font-weight:800;">✗</span>
          <span><strong>Waveguide Light-Shield &amp; 3D Buttons:</strong> Raw LLM CSS emits blinding <code>#FFFFFF</code> modals or dead <code>#000000</code> holes; <code>#5C6069</code> shields &amp; 3D bevels must be fixed tokens.</span>
        </div>
        <div class="check-row">
          <span style="color:#FBBF24;font-weight:800;">✗</span>
          <span><strong>50×50 Action Icons &amp; Temple Focus:</strong> Freeform LLM SVGs become unreadable blobs at lens scale; icons must be enum-selected from the Universal Slate-Blue Tile registry.</span>
        </div>
      </div>
    </div>
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

await renderBoard(section0IntroHtml, 'section0_intro_pillars.png', 880, 310);
await renderBoard(section1SemanticOutlinesHtml, 'section1_semantic_task_outlines.png', 880, 610);
await renderBoard(section1Html, 'section1_window_outlines.png', 880, 560);
await renderBoard(section2Html, 'section2_repo_activity_5ways.png', 880, 636);
await renderBoard(section3DoingNowHtml, 'section3_llm_doing_now.png', 880, 250);
await renderBoard(section3BuyingHtml, 'section3_bucket_a_buying.png', 880, 240);
await renderBoard(section3AuthHtml, 'section3_bucket_b_authorizing.png', 880, 240);
await renderBoard(section3WriteHtml, 'section3_bucket_c_write_decisions.png', 880, 240);
await renderBoard(section3ExpandedValidationHtml, 'section3_expanded_human_validation.png', 880, 340);
await renderBoard(section4VercelJsonUiHtml, 'section4_vercel_jsonui_reality.png', 880, 410);

await browser.close();
console.log('Rendered all 10 showcase section boards with refined organic silhouettes.');
