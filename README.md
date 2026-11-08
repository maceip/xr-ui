# xr-ui

Canonical visual component library and semantic illustration system for head-worn / waveguide displays (Meta Ray-Ban Display DAT `600x600`, WebXR HUDs, and Astryx surfaces).

## Core Principles
1. **Single Flat Card Surface**: Never nest moats, dark gutters, or multi-oval borders inside `FlexBoxBackground.CARD`—additive waveguides let background light bleed through dark cutouts.
2. **Site Identity (Favicon + Origin)**: Every authorization surface displays the real site favicon alongside the canonical origin badge so the user sees who they are interacting with at a glance.
3. **Semantic Operation Buckets (Visual Illustrations)**: Instead of forcing the user to parse dense text on a HUD, operations map into high-recognition visual illustration buckets:
   - **Account Creation / Passkey Provisioning** (e.g., new account + Meta Blitz browser passkey / vault credential creation)
   - **Sign-In / Passkey Assertion** (unlocking an existing account with an existing credential)
   - **Financial / Payment Commit** (authorizing a charge or transfer)
   - **Data / Form Submission** (committing profile edits, messages, or posts)
   - **System / Attention Recovery** (CAPTCHA, 2FA challenge, or blocked navigation)
