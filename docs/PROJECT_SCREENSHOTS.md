# Project homepage screenshots

Captured on 2026-10-15. These are browser screenshots of the actual interfaces, not generated mockups. Files live in `frontend/src/assets/images/projects/` and are imported through `frontend/src/content/portfolio.js` as `screenshot`. The shared card and project-detail components prefer screenshots while retaining the original logo/artwork as a fallback.

| Project | Capture source | Framing |
| --- | --- | --- |
| Car-Pass | `C:/temporary_git_repo/car-pass/client`, port 5190 | Header and hero |
| Plustech | `C:/temporary_git_repo/plustech/frontend`, port 5180 | First desktop viewport |
| PHINMA Event | `C:/temporary_git_repo/Phinma-Event`, Flask on port 5000 | First desktop viewport |
| E-Thrift | `C:/temporary_git_repo/E-Thrift`, PHP on port 8001 | First desktop viewport |
| Virtual Space Offices | `C:/temporary_git_repo/Virutal-Space-Offices/frontend`, port 5191 | Header and hero |
| Portfolio Website | This local portfolio, port 5174 | First desktop viewport |
| BreedSmart Oton | `https://www.breedsmartoton.site/` | First desktop viewport |

MangaFlix keeps its existing interface artwork: no runnable MangaFlix application was present in the supplied folder. `resources/phinmawebcite` is a reference copy of PHINMA Event, not another project.

Car-Pass and Virtual Space Offices were captured with their data backends offline. Their public header and hero render normally; the subsequent unavailable-data panels are outside the screenshot crop. These screenshots do not verify parking availability, office listings, authentication, bookings, email, or database functionality. No database setup, seed, or form submission was performed.

PHINMA Event's description now reflects the Flask application found locally rather than the older static prototype. Virtual Space Offices was added from its local source and README; no personal role or contributions were inferred.

All screenshots were taken at a 1440px desktop width and saved as compressed JPEGs. Cards contain the complete image to preserve interface labels; project details show it uncropped. The original capture work was kept local for review; Git history records subsequent publishing updates.

## GitHub content refresh — 2026-11-12

Project copy now follows the linked GitHub default branches. The original PHINMA Event repository is an early HTML/CSS prototype with archived Flask/MySQL exercises; its previous screenshot came from a different local application and is no longer rendered. The newer Next.js/Supabase application is listed separately as PHINMA UI Event. Updated on 2026-11-13: it and AI Agent Office HQ now use reviewed screenshots captured from their deployed interfaces. Existing screenshots are historical previews, not proof of connected backend behavior. See [repository verification](PROJECT_REPOSITORIES.md).

## User-supplied thumbnails — 2026-11-13

| Project | File | Supplied screen |
| --- | --- | --- |
| AI Agent Office HQ | `ai-agent-office-hq.png` | Office overview with agent names and the command panel visible. |
| PHINMA UI Event | `phinma-ui-event-home.png` | Public campus homepage with the PHINMA UI Event hero. |

These PNGs are the user's supplied screenshots, copied without cropping or image edits. They replace the earlier office and admin-screen JPEGs. The shared project records display them in the featured grid, archive, and detail pages. Credentials and browser session data are not stored in the repository.

The four homepage entries remain BreedSmart Oton, PHINMA UI Event, AI Agent Office HQ, and PlusTech. MangaFlix remains in the full archive.
