# John Arvy Lopez Portfolio

A responsive React and Vite portfolio with a transparent landing-page header, a project-first layout, and an original horizontal project reel.

## Local development

```bash
npm ci
npm run dev
npm run lint
npm run build
```

## Content updates

Portfolio content is centrally stored in `src/content/portfolio.js`. Replace all project entries marked as sample content with verified descriptions, screenshots, contributions, outcomes, repositories, and live URLs before publishing.

Add a résumé at `public/resume.pdf` only when it is current and ready to share.

## Contact form

The Vercel Function at `api/contact.js` uses Resend. Copy `.env.example` to `.env.local` for local configuration; never commit that file. In Vercel, add these as Sensitive Environment Variables:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
- `SITE_URL`

The form includes validation, a honeypot, maximum field sizes, and an optional production-origin check. Add durable rate limiting (for example, Vercel KV/Upstash) before exposing it to high traffic.

## Vercel deployment

Import the repository into Vercel and set the project Root Directory to `frontend`.

- Framework preset: Vite
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`

`vercel.json` contains the SPA fallback needed for React Router routes and baseline response headers. Configure the environment variables, deploy a Preview deployment, test direct visits to `/projects`, `/projects/:slug`, `/resume`, and `/contact`, then attach the production domain.
