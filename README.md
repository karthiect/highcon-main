# Highcon

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Environment Variables

Copy `.env-example` to `.env` and set the required variables:

```env
VITE_SENDER_EMAIL="info@highcon.in"

# Privacy-Conscious Analytics Setup
VITE_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
VITE_CLARITY_PROJECT_ID="xxxxxxxx"
```

## Privacy & Analytics Architecture

This application implements privacy-conscious, consent-gated Google Analytics 4 (GA4) and Microsoft Clarity:

- **Consent-Gated**: GA4 and Microsoft Clarity scripts load **only after** explicit user consent via the consent banner.
- **Default Consent**: Initial GA consent defaults set `analytics_storage`, `ad_storage`, `ad_user_data`, and `ad_personalization` to `denied`. Google signals and ad personalization are explicitly disabled.
- **Route Safety**: SPA navigations strip query parameters and hash fragments, normalizing dynamic URLs (e.g. `/blog/:slug/`, `/bulk-material-handling/:layerOne/`). Unknown routes default to `/other/`.
- **Consent Withdrawal**: Users can open "Cookie Preferences" anytime from the footer to reject analytics. Consent withdrawal updates storage settings and performs best-effort deletion of first-party `_ga` and `_clsk`/`_clck` cookies.
- **SSR / Prerender Safe**: Script injection and storage checks are guarded against SSR / prerender runtime errors.