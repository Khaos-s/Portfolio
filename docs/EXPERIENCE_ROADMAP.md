# College experience roadmap

Confirmed directly by John Arvy Lopez on 2026-10-15:

| College year | Projects / status |
| --- | --- |
| 1st year | PHINMA Event |
| 2nd year | E-Thrift |
| 3rd year | Virtual Space Offices, Plustech, Car-Pass, BreedSmart Oton |
| 4th year | Current college year |

John confirmed his course as BS Information Technology (BS IT) on 2026-10-16. Calendar dates, individual team responsibilities, and future milestones are not inferred. The roadmap replaces the former chapter tabs and unconfirmed education/community placeholders. The About copy identifies John as a fourth-year BS IT student rather than implying a completed degree.

## Content and layout

Edit `experienceRoadmap` in `frontend/src/content/portfolio.js`. Each entry holds its label, description, project slugs, and optional `current` state. Project titles and detail URLs come from the existing project collection rather than a second copy of project metadata.

`ExperienceSection.jsx` renders the years in chronological order as an ordered list, with `aria-current="step"` for the fourth-year entry. Desktop uses a sticky introduction beside the roadmap; tablet uses a compact two-column introduction above it; mobile stacks the introduction and milestones. The shared reveal hook supplies a one-time entrance and cancels movement for reduced motion or keyboard focus.

`ExperienceGallery.jsx` follows the roadmap as a single **Web Design Champion** photo carousel. It includes all three photos from `frontend/src/assets/Awarding`: the awarding photo (`webdesign_champion1-9bPkXgsv.webp`), champion team portrait (`webdesign_champion2-BtAF-fbt.webp`), and collaboration photo (`team collaboration.webp`). Previous/Next arrows sit over the image with a photo counter; the three selection boxes below have been removed. Arrows, keyboard navigation, swipe gestures, and the lightbox move through the photos while the title and description stay unchanged. Navigation wraps at each end and is hidden for a single photo. No competition dates or additional credentials are inferred. Achievements still follow the gallery when real entries are supplied.

To add another photo, import it in `frontend/src/content/portfolio.js` and append `{ image: importedPhoto, alt: 'Description of the photo' }` to `experienceGallery.photos`. The photo counter and navigation update automatically. `experienceGallery` is one object containing `title`, `category`, `description`, and a nonempty `photos` array.

## Portrait

The homepage now uses `frontend/src/assets/images/hero-cinematic-retouched.png`, edited with the built-in image tool for localized facial blemish removal. The 1392 × 1130 canvas and PNG alpha transparency are preserved. The original `hero-cinematic-shoulder-fixed.png` remains available. The complete edit prompt is saved in `hero-cinematic-retouched.prompt.md` beside the asset.

## Verification

ESLint and the production build were checked. Targeted browser verification passed 48 checks, including exact project-year mapping, current-year state, layout widths of 320, 390, 768, 844 landscape, and 1440 pixels, all six project detail links, gallery buttons/thumbnails/keyboard navigation/lightbox, reduced motion, keyboard focus, original portrait dimensions, and actual transparent corner pixels. Before/after gallery text matched at desktop, tablet, and mobile widths.

The whole-page style inspector has explicit allowances for the existing hero's utility labels and dim gradient lettering because the request was to preserve the hero while changing only facial blemishes. It can also misclassify the previous milestone's project links as labels for the next milestone. Existing palette, overall font-size count, and lack-of-video warnings are outside this section change; no video or extra decorative animation was added just to satisfy the meter.

The original implementation was kept local for review. Git history records subsequent publishing updates.
