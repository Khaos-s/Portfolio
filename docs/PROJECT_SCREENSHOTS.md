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
