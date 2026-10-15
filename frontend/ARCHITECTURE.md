# Portfolio architecture

This is a static React portfolio built with Vite. It is deliberately content-driven: update portfolio facts in one place before changing a page or component.

## Runtime and deployment

- **UI:** React 19 + React Router
- **Build:** Vite
- **Hosting:** Vercel
- **Contact endpoint:** `api/contact.js` Vercel Serverless Function
- **Email provider:** Resend, configured only through Vercel environment variables

## Application map

```
src/
  content/            Portfolio data and reusable project records
  pages/              Route-level compositions
  components/
    layout/            SiteLayout, SiteHeader, SiteFooter, PageIntro
    sections/          HeroSection, Portrait, experience, contact, etc.
    projects/          Project cards, covers, and reel interactions
    ui/                Small shared primitives (Button, Dialog)
  lib/                Utilities, hooks, and SEO helpers
  styles/             Shared color tokens and motion rules
  assets/             Local fonts and imagery
```

Routes are defined in `src/App.jsx`:

- `/` — landing page and selected work
- `/projects` — full project index
- `/projects/:slug` — project detail page
- `/resume` — resume page
- `/contact` — contact form

## Content contract

`src/content/portfolio.js` is the source of truth for profile information, projects, skills, experience, gallery items, and achievements. Add or edit projects there; the projects list, project cards, and detail routes consume the same data.

Each project should keep these fields current:

```js
{
  slug: 'unique-url-slug',
  title: 'Project name',
  summary: 'One-sentence outcome',
  category: 'application',
  role: 'Your contribution',
  technologies: ['React', 'Vite'],
  logo: projectImage,
  outcome: 'What the application does',
  challenge: 'The problem it addresses',
  solution: 'How it works',
  contributions: ['Your verified contribution'],
  liveUrl: 'https://...',
  repoUrl: 'https://github.com/...'
}
```

Do not duplicate a project in a page component. Use the project data record and let `ProjectCard` / `ProjectDetailPage` render it.

## UI rules

- `src/styles/tokens.css` owns the reference palette: black `#0B0B0B`, crimson `#8B0D1A`, off-white `#F5F2ED`. The `.theme-dark` scope maps the same semantic variables to accessible dark surfaces and lighter text/link colors.
- `src/index.css` owns shared layouts, component styles, and breakpoints. `src/styles/motion.css` owns the startup introduction and reduced-motion fallback. `src/styles/hero.css` scopes the cinematic homepage composition and its responsive rules.
- The homepage uses a black cinematic hero, black projects, off-white About, black experience, crimson contact, and a black footer. Home navigation uses the same dark backdrop; other routes retain their existing header theme.
- `HeroSection` layers live HTML text and links around `assets/images/hero-cinematic-shoulder-fixed.png`, a transparent AI-edited portrait based on the user's supplied photos. The wider canvas contains both jacket shoulders; the original `hero-cinematic.png` is retained. Clothing, pose, and studio lighting were changed as requested. The large decorative PORTFOLIO word is hidden from assistive technology; no stats or counters appear in the hero.
- `Portrait` remains the About route's original, unedited formal photo. The homepage edit does not replace that source asset.
- The hero self-hosts Anton (condensed display) and Yellowtail (script greeting) from Google's font repository. Their license files are stored alongside the fonts in `assets/font/hero/`.
- `PageIntro` is mounted by `SiteLayout` once per document load. Its 950ms CSS animation dismisses automatically, is hidden from assistive technology, never captures clicks or focus, and is omitted for reduced motion. It is a brand introduction, not a fabricated asset-loading percentage.
- Put reusable interaction primitives in `components/ui`. They follow the shadcn pattern and are registered in `components.json`.
- `Button` should be used for primary/secondary actions. Use `asChild` when the visual button is a React Router `Link` or a normal anchor.
- `Dialog` is used for media previews so keyboard focus, overlay click, and Escape closing work consistently.
- A section component owns its markup; content belongs in `content/portfolio.js`; route composition belongs in `pages/`.
- Existing project filters, gallery navigation, media dialogs, route links, and contact submission stay in their domain components. Empty certificate collections are omitted from the homepage until real entries are added.

## Responsive layout

- Above 1050px: left-aligned copy, large central portrait, and a small annotation to the right.
- 701–1050px: a larger portrait and repositioned annotation; at 900px and below, the extra header CTA is hidden.
- At 700px and below: menu navigation, copy and annotation above the portrait, and stacked project/contact layouts.
- Container widths and photo aspect ratios change at these breakpoints; text is never split in the middle of a name.

## Adding content

1. Add an optimized image to `src/assets/` (WebP/AVIF is preferred for photos).
2. Add the image import and data record to `src/content/portfolio.js`.
3. Check the project card, full project page, and mobile layout.
4. Run `npm run lint` and `npm run build` from `frontend/`.

## Environment variables

The client must never contain email/API secrets. Configure the contact function in Vercel instead:

```
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
SITE_URL=
```

Do not prefix secrets with `VITE_`; those values are exposed to the browser at build time.
`SITE_URL` is optional and restricts contact requests by origin when configured. Set it to the exact production origin, including `https://` and without a trailing slash.

## Deployment checks

Vercel should use `frontend` as the Root Directory. It detects Vite automatically; the expected commands are:

```
Install: npm install
Build: npm run build
Output: dist
```

Before deploying, run:

```
npm run lint
npm run build
```

Then push the verified changes to GitHub. Vercel will build the `frontend` directory on each push to the configured production branch.
