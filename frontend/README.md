# Portfolio frontend

React 19 + Vite 7 application for John Arvy Lopez's portfolio. See the [repository README](../README.md) for the live site, feature overview, screenshots, and content/deployment guidance, and [ARCHITECTURE.md](ARCHITECTURE.md) for the component map and design rules.

## Development

Run commands from this `frontend/` directory. Node must satisfy `>=20.19.0 <25`.

```bash
npm ci
npm run dev
```

```bash
npm run lint
npm run build
npm run preview
```

The project uses the locked npm dependency versions. The production output is `dist/`.

## Content and styling

- `src/content/portfolio.js`: profile, project records, skills, approach, college roadmap, gallery, and achievements.
- `src/components/sections/ExperienceGallery.jsx`: a single Web Design Champion carousel; add photos to `experienceGallery.photos` instead of adding category tabs.
- `src/components/sections/ContactPanel.jsx`: the shared contact introduction, direct email link, and form.
- `src/styles/tokens.css`: semantic colors, type variables, and dark-section tokens.
- `src/index.css`: shared layout, component styles, and breakpoints.
- `src/styles/hero.css` and `src/styles/motion.css`: homepage composition and motion behavior.

The reference palette is black `#0B0B0B`, crimson `#8B0D1A`, and off-white `#F5F2ED`. Keep changes consistent with these shared tokens and respect reduced-motion preferences.

## Contact endpoint

`api/contact.js` is a Vercel Function. Configure `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, and optionally `SITE_URL` on the server. The optional origin must match exactly, including `https://` and without a trailing slash.

The example file `.env.example` contains placeholders only. For local Vercel development, copy it to an ignored `.env.local` and configure credentials privately. Do not commit that file or use the `VITE_` prefix for server secrets.

Vite dev/preview serves only the frontend; it does not run this function. The contact form treats a missing endpoint or HTML fallback as a failure and preserves the draft. The direct email link does not depend on the API.

## Deployment

Vercel's Root Directory must be `frontend`, with the Vite preset, `npm ci`, `npm run build`, and output directory `dist`. `vercel.json` supplies the SPA rewrite and response security headers.

Validate `/`, `/projects`, a real `/projects/:slug`, `/resume`, and `/contact`, including direct refreshes. Check the carousel's Previous/Next controls and full-photo preview on desktop and mobile. Verify real email delivery separately when the server settings are available.
