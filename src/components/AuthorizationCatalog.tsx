import React from 'react';
import {
  BallisticAlternativeId,
  BallisticAlternativeView,
  DEFAULT_BALLISTIC_TELEMETRY,
} from './BallisticAlternatives';
import { WaveguideAction, WaveguideSurface } from './WaveguideSurface';
import {
  BrandOrigin,
  OperationIllustrationKind,
} from '../icons/FaviconsAndIllustrations';

export interface CatalogModalItem {
  id: string;
  number: number;
  name: string;
  origin: BrandOrigin;
  categoryLabel: string;
  illustration: OperationIllustrationKind;
  headline: string;
  subtitle: string;
  renderEvidence?: (ballisticVariant: BallisticAlternativeId) => React.ReactNode;
  actions: WaveguideAction[];
}

const KVRow: React.FC<{ label: string; value: string; accent?: boolean }> = ({
  label,
  value,
  accent = false,
}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      fontSize: 15,
      lineHeight: 1.35,
    }}
  >
    <span style={{ color: '#94A3B8', fontWeight: 500 }}>{label}</span>
    <span
      style={{
        color: accent ? '#FFFFFF' : '#E2E8F0',
        fontWeight: accent ? 700 : 500,
      }}
    >
      {value}
    </span>
  </div>
);

export const AUTHORIZATION_CATALOG: CatalogModalItem[] = [
  {
    id: 'account-passkey-create',
    number: 1,
    name: 'New Account + Blitz Passkey Creation',
    origin: 'linkedin.com',
    categoryLabel: 'New Account · Mint Blitz Passkey',
    illustration: 'passkey-account-create',
    headline: 'Create LinkedIn account & passkey?',
    subtitle:
      'Registers ryan@zunftmax.secure.build and stores a new hardware-bound passkey in Meta Blitz.',
    renderEvidence: () => (
      <>
        <KVRow label="Account identity" value="Ryan MacArthur (ryan@zunftmax.secure.build)" />
        <KVRow label="Credential minted" value="New Ed25519 Passkey in Blitz Vault" accent />
      </>
    ),
    actions: [
      { id: 'approve', label: 'Create & Mint', role: 'primary' },
      { id: 'deny', label: 'Deny', role: 'secondary' },
    ],
  },
  {
    id: 'passkey-signin',
    number: 2,
    name: 'Existing Passkey Sign-In (WebAuthn)',
    origin: 'github.com',
    categoryLabel: 'Passkey Assertion · Walkaway Relay',
    illustration: 'passkey-signin',
    headline: 'Sign in to GitHub with passkey?',
    subtitle:
      'Signs a one-time WebAuthn challenge for maceip using your desktop vault key.',
    renderEvidence: () => (
      <>
        <KVRow label="Relying party" value="github.com (verified TLS)" />
        <KVRow label="Key handle" value="maceip · YubiKey / enclave #4F9A" accent />
      </>
    ),
    actions: [
      { id: 'approve', label: 'Sign In', role: 'primary' },
      { id: 'deny', label: 'Deny', role: 'secondary' },
    ],
  },
  {
    id: 'credit-card-charge',
    number: 3,
    name: 'Credit Card Purchase Commit',
    origin: 'stripe.com',
    categoryLabel: 'One-Time Card Charge',
    illustration: 'credit-card-charge',
    headline: 'Pay $48.00 with Visa •••• 4242?',
    subtitle:
      'Completes checkout for 2× USB-C DisplayPort cables with express shipping.',
    renderEvidence: () => (
      <>
        <KVRow label="Payment method" value="Visa •••• 4242 (Vault autofill)" />
        <KVRow label="Total charge" value="$48.00 USD (one-time)" accent />
      </>
    ),
    actions: [
      { id: 'approve', label: 'Pay $48.00', role: 'primary' },
      { id: 'deny', label: 'Cancel', role: 'secondary' },
    ],
  },
  {
    id: 'subscription-upgrade',
    number: 4,
    name: 'Recurring Subscription Commit',
    origin: 'vercel.com',
    categoryLabel: 'Recurring Billing · Monthly',
    illustration: 'subscription-cycle',
    headline: 'Start Vercel Pro at $20 / month?',
    subtitle:
      'Upgrades team workspace maceip-labs and bills Visa •••• 4242 monthly starting today.',
    renderEvidence: () => (
      <>
        <KVRow label="Billing cadence" value="$20.00 / month · auto-renews" accent />
        <KVRow label="Next charge date" value="Dec 8, 2026 on Visa •••• 4242" />
      </>
    ),
    actions: [
      { id: 'approve', label: 'Subscribe', role: 'primary' },
      { id: 'deny', label: 'Deny', role: 'secondary' },
    ],
  },
  {
    id: 'analytical-tradeoff',
    number: 5,
    name: 'Analytical Architecture Decision',
    origin: 'github.com',
    categoryLabel: 'Architecture Settlement · 2 Options',
    illustration: 'analytical-tradeoff',
    headline: 'Select auth relay architecture?',
    subtitle:
      'Agent needs a settlement before wiring the glasses passkey transport.',
    renderEvidence: () => (
      <>
        <KVRow
          label="Option A · Local Broker"
          value="18ms latency · requires USB/LAN bridge"
          accent
        />
        <KVRow
          label="Option B · CIBA Push"
          value="Works over cellular · +420ms cloud hop"
        />
      </>
    ),
    actions: [
      { id: 'opt-a', label: 'Use Option A', role: 'primary' },
      { id: 'opt-b', label: 'Use Option B', role: 'secondary' },
    ],
  },
  {
    id: 'ballistic-agent',
    number: 6,
    name: 'Ballistic Coding Agent Intervention',
    origin: 'github.com',
    categoryLabel: 'Runaway Trajectory · maceip/walkaway',
    illustration: 'ballistic-agent',
    headline: 'Agent off-track — Freeze & revert?',
    subtitle:
      'Agent finished the auth verifier but is now looping outside scope instead of running tests.',
    renderEvidence: (ballisticVariant) => (
      <BallisticAlternativeView variant={ballisticVariant} />
    ),
    actions: [
      { id: 'freeze', label: 'Freeze & Revert', role: 'primary' },
      { id: 'allow', label: 'Let Continue', role: 'destructive' },
    ],
  },
  {
    id: 'worktree-collision',
    number: 7,
    name: 'Multi-Agent Worktree Collision',
    origin: 'github.com',
    categoryLabel: 'Shared File Conflict · 2 Worktrees',
    illustration: 'worktree-collision',
    headline: 'Two agents editing src/auth.rs',
    subtitle:
      'Codex (wt-auth) and Muse (main) both modified WebAuthnVerifier::verify().',
    renderEvidence: () => (
      <>
        <KVRow label="Keep wt-auth (Codex)" value="Strict origin check + unit test" accent />
        <KVRow label="Pause main (Muse)" value="Rebase onto wt-auth after merge" />
      </>
    ),
    actions: [
      { id: 'keep-wt', label: 'Keep wt-auth', role: 'primary' },
      { id: 'halt-both', label: 'Pause Both', role: 'secondary' },
    ],
  },
  {
    id: 'destructive-deploy',
    number: 8,
    name: 'Destructive Git / Prod Deploy Gate',
    origin: 'aws.amazon.com',
    categoryLabel: 'Production Gate · Irreversible',
    illustration: 'destructive-deploy',
    headline: 'Drop legacy_sessions table in prod?',
    subtitle:
      'Migration 0042 permanently removes 14,200 expired rows in us-west-2.',
    renderEvidence: () => (
      <>
        <KVRow label="Target cluster" value="prod-rds-us-west-2 (snapshot taken)" />
        <KVRow label="Default if ignored" value="Auto-denies in 15s" accent />
      </>
    ),
    actions: [
      { id: 'deny', label: 'Abort Deploy', role: 'destructive' },
      { id: 'approve', label: 'Run Migration', role: 'secondary' },
    ],
  },
  {
    id: 'vault-secret-inject',
    number: 9,
    name: 'Blind Vault API Key Injection',
    origin: 'console.anthropic.com',
    categoryLabel: 'Blind Vault Secret · Zero-Plaintext',
    illustration: 'vault-secret-inject',
    headline: 'Inject ANTHROPIC_API_KEY into .env?',
    subtitle:
      'Binds production secret into walkaway-relay without revealing the key to the LLM.',
    renderEvidence: () => (
      <>
        <KVRow label="Vault item" value="ANTHROPIC_API_KEY (sk-ant-••••9Q2A)" accent />
        <KVRow label="Destination" value="/Users/mac/walkaway-monorepo/.env" />
      </>
    ),
    actions: [
      { id: 'approve', label: 'Inject Secret', role: 'primary' },
      { id: 'deny', label: 'Deny', role: 'secondary' },
    ],
  },
  {
    id: 'oauth-scope-grant',
    number: 10,
    name: 'OAuth / MCP Tool Scope Grant',
    origin: 'linear.app',
    categoryLabel: 'OAuth 2.0 Permission Request',
    illustration: 'oauth-scope-grant',
    headline: 'Grant Linear write access to Muse?',
    subtitle:
      'Allows the agent to create and close issues in the Walkaway engineering team.',
    renderEvidence: () => (
      <>
        <KVRow label="Requested scopes" value="issues:write, comments:create" accent />
        <KVRow label="Excluded scopes" value="admin:org, billing:manage" />
      </>
    ),
    actions: [
      { id: 'approve', label: 'Grant Access', role: 'primary' },
      { id: 'deny', label: 'Deny', role: 'secondary' },
    ],
  },
  {
    id: 'outbound-post',
    number: 11,
    name: 'Outbound Message / Public Post Commit',
    origin: 'slack.com',
    categoryLabel: 'External Message · #release-ops',
    illustration: 'outbound-post',
    headline: 'Post release note to #release-ops?',
    subtitle:
      '"Walkaway v0.4.2 shipped: Bluetooth auto-recovery and single-card glasses modals."',
    renderEvidence: () => (
      <>
        <KVRow label="Channel & audience" value="#release-ops · 38 members" />
        <KVRow label="Sender identity" value="Ryan MacArthur (@ryan)" accent />
      </>
    ),
    actions: [
      { id: 'approve', label: 'Send Message', role: 'primary' },
      { id: 'deny', label: 'Discard', role: 'secondary' },
    ],
  },
  {
    id: 'human-challenge',
    number: 12,
    name: '2FA / Hardware Verification Relay',
    origin: 'aws.amazon.com',
    categoryLabel: 'Step-Up Verification · SMS / TOTP',
    illustration: 'human-challenge',
    headline: 'Forward 6-digit TOTP code to AWS?',
    subtitle:
      'Root console login paused at MFA step; vault generated current authenticator code.',
    renderEvidence: () => (
      <>
        <KVRow label="Authenticator code" value="849 201 (expires in 19s)" accent />
        <KVRow label="Session origin" value="Walkaway Desktop Browser (macOS)" />
      </>
    ),
    actions: [
      { id: 'approve', label: 'Fill 849 201', role: 'primary' },
      { id: 'deny', label: 'Block Login', role: 'secondary' },
    ],
  },
];

export const CatalogCardRenderer: React.FC<{
  item: CatalogModalItem;
  ballisticVariant?: BallisticAlternativeId;
  focusedActionIndex?: number;
  onSelectAction?: (actionId: string, index: number) => void;
}> = ({
  item,
  ballisticVariant = 'deflected-vector',
  focusedActionIndex = 0,
  onSelectAction,
}) => {
  return (
    <WaveguideSurface
      origin={item.origin}
      categoryLabel={item.categoryLabel}
      illustration={item.illustration}
      headline={item.headline}
      subtitle={item.subtitle}
      actions={item.actions}
      focusedActionIndex={focusedActionIndex}
      onSelectAction={onSelectAction}
    >
      {item.renderEvidence?.(ballisticVariant)}
    </WaveguideSurface>
  );
};
