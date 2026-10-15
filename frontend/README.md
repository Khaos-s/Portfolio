# John Arvy Lopez Portfolio

A responsive React and Vite portfolio with a warm ivory and muted red visual system. The homepage opens with a full-screen hero and scrolls through Work, About, and Contact. Header links navigate to those sections from every route; project archives and details remain separate pages. Serif headings are paired with system sans-serif body text. Experimental animation components remain available in the source.

## Design and components

- Local Cormorant Garamond Regular headings and a compact 24px italic monogram.
- A featured project followed by supporting cards; archive filters use each project's `category`.
- Shared `ApproachList`, native expandable `Capabilities`, and `ContactPanel` components.
- Contact topic choices populate the existing API's `subject` field. Delivery still requires Resend configuration; no simulated success is used in the app.
- Motion includes staggered hero entrances, one-time viewport reveals, card hover feedback, and capability expansion. The scroll cue stops after three cycles. Reduced-motion preferences disable the effects, including JavaScript reveals; focusing content cancels its reveal immediately. No animation library is required.

## Local development

```bash
npm ci
npm run dev
npm run lint
npm run build
```

## Content updates

Portfolio content is centrally stored in `src/content/portfolio.js`. Add verified project descriptions, screenshots, contributions, outcomes, repositories, and live URLs. Unknown fields are null or empty arrays and are hidden on public pages. The public profile uses Iloilo from the latest homepage content; confirm role and location before publishing.

Add a résumé at `public/resume.pdf` only when it is current and ready to share, then add a download link. Navigation currently links to the About page.

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

## Preview and validation

Vite serves the frontend only. Email delivery requires the Vercel Function and configured Resend environment variables. A missing endpoint or HTML fallback is treated as a failure, and the form preserves the draft. Browser checks cover responsive layouts, route navigation, keyboard menu behavior, and mocked contact success/failure; they do not send email.

## Palette

- Page: #F7F5F2
- Cards: #FFFDFA
- Soft sections: #EEE9E3
- Text: #292524
- Secondary text: #625B55
- Accent: #A63737
