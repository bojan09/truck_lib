# Truck Library

Truck Library is a static, photo-first field guide for U.S. trucking equipment, operations, safety, and freight terms.

## Current build

The site has a responsive, searchable single-page catalog with category filters, direct hash links, accessible detail and photo-zoom dialogs, and 63 source-backed photo guides. The library uses 74 distinct licensed documentary photographs across 162 labeled gallery views. See [PROGRESS.md](PROGRESS.md) and [docs/COVERAGE.md](docs/COVERAGE.md).

The gallery uses documentary photographs only. It does not use infographics or generated images as photo substitutes. A small SVG monogram is used as the site icon and wordmark.

## Technical direction

- Semantic HTML, modern CSS, and vanilla JavaScript only.
- Local JSON content and static files; no framework, build step, backend, database, authentication, or paid service.
- Relative asset paths for GitHub Pages project subpaths.
- Client-side search, category filters, deep links, accessible photo zoom, and keyboard navigation.
- Main files: `index.html`, `css/`, `js/`, `data/galleries.json`, `data/topics.json`, `assets/photos/`, and `assets/manifest.json`.

## Accuracy and photo rights

- Every photograph is stored locally with its source page, credit, and license in [`assets/manifest.json`](assets/manifest.json). Gallery details show a source link and credit beside each photo.
- Public availability is not permission. Photographs are included only when the file page establishes a reuse license or public-domain basis.
- Manufacturer and model names appear only when the source establishes them; uncertainties are stated in the gallery.
- No unsupported label is inferred from visual similarity. Position and component claims are limited to what the image and technical sources support.
- Use technical sources for explanations, and vehicle-specific OEM guidance for operating, service, and safety procedures.

## Run locally

From the project directory, run `python3 -m http.server 8000`, then open <http://localhost:8000/>. A local static server is required because the app loads JSON with `fetch()`.

## Phases

The complete phase checklist and audit notes are in [PROGRESS.md](PROGRESS.md).
