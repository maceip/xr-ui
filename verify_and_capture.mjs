import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ARTIFACT_DIR = '/Users/mac/.gemini/antigravity/brain/fe8b99f7-f96f-4bb3-b19e-b16e765f2dbb';
const SPECIMEN_DIR = '/Users/mac/xr-ui/specimens';
fs.mkdirSync(SPECIMEN_DIR, { recursive: true });

const server = spawn('npx', ['vite', 'preview', '--host', '127.0.0.1', '--port', '4179'], {
  cwd: '/Users/mac/xr-ui',
  stdio: 'pipe',
});

await new Promise((resolve) => setTimeout(resolve, 1200));

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
});
const page = await browser.newPage({ viewport: { width: 600, height: 600 }, deviceScaleFactor: 2 });

const cardsToCapture = [
  'account-passkey-create',
  'passkey-signin',
  'credit-card-charge',
  'subscription-upgrade',
  'analytical-tradeoff',
  'worktree-collision',
  'destructive-deploy',
  'vault-secret-inject',
  'oauth-scope-grant',
  'outbound-post',
  'human-challenge',
];

for (const id of cardsToCapture) {
  await page.goto(`http://127.0.0.1:4179/?hud=1&card=${id}`, { waitUntil: 'networkidle' });
  // Test keyboard navigation
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowLeft');
  const outSpec = path.join(SPECIMEN_DIR, `modal_${id}.png`);
  const outArt = path.join(ARTIFACT_DIR, `xrui_${id}.png`);
  await page.screenshot({ path: outSpec });
  fs.copyFileSync(outSpec, outArt);
}

const ballisticVariants = [
  'deflected-vector',
  'three-beat-ledger',
  'scope-bullseye',
  'milestone-vs-thrash',
  'glideslope-split',
];

for (const v of ballisticVariants) {
  await page.goto(`http://127.0.0.1:4179/?hud=1&card=ballistic-agent&ballistic=${v}`, {
    waitUntil: 'networkidle',
  });
  const outSpec = path.join(SPECIMEN_DIR, `ballistic_${v}.png`);
  const outArt = path.join(ARTIFACT_DIR, `xrui_ballistic_${v}.png`);
  await page.screenshot({ path: outSpec });
  fs.copyFileSync(outSpec, outArt);
}

// Also test interactive gallery page at 1440x960
await page.setViewportSize({ width: 1440, height: 960 });
await page.goto('http://127.0.0.1:4179/', { waitUntil: 'networkidle' });
await page.screenshot({ path: path.join(SPECIMEN_DIR, 'workbench_overview.png') });
fs.copyFileSync(
  path.join(SPECIMEN_DIR, 'workbench_overview.png'),
  path.join(ARTIFACT_DIR, 'xrui_workbench_overview.png')
);

await browser.close();
server.kill('SIGTERM');
console.log('Captured all 12 modal specimens + 5 ballistic alternatives successfully.');
