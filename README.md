# Truck Library

Truck Library is a planned static, image-first field guide to American heavy-duty trucks, trailers, tires, axles, mechanical systems, and related equipment.

## Status

Phase 0 is complete: repository and scope inspection, implementation plan, accuracy policy, and a 33-gallery coverage checklist. The galleries and browsing experience are not implemented yet. See [PROGRESS.md](PROGRESS.md) and [docs/COVERAGE.md](docs/COVERAGE.md).

## Technical direction

- Semantic HTML, modern CSS, and vanilla JavaScript only.
- Local JSON content and a static-file layout; no framework, build step, backend, database, authentication, or paid service.
- Relative asset paths so the site can run from a GitHub Pages project subpath.
- A searchable, filterable single-page gallery index with deep links, accessible detail views, and keyboard-operable image zoom.
- Proposed layout: `index.html`, `css/`, `js/`, `data/galleries.json`, `assets/manifest.json`, and locally stored, rights-cleared visual assets under `assets/`.

## Accuracy and asset policy

- Every technical claim and subject-specific visual needs a traceable source or must be clearly marked as an original illustration.
- Do not use a public image just because it is viewable. Record the source URL, source title, depicted subject, owner/credit, and license or permitted-use basis before inclusion.
- Do not hotlink copyrighted images, scrape indiscriminately, invent model identities, or reuse an image under incompatible labels.
- For unsupported model-specific claims, state the uncertainty in the interface. Use original, unbranded diagrams where rights-cleared photographs are unavailable.
- Keep categories distinct when they describe different things: tread designs vs. tire configurations; tire positions vs. tire construction; material vs. wheel arrangement; 6×2 vs. 6×4 drive layouts.
- Show safety-related material for identification and learning only. Do not give unsafe repair or inspection instructions.
- Use concise US English, readable labels, accessible contrast/focus states, responsive layouts, and reduced-motion support.

## Local run (once Phase 1 exists)

From the project directory, run `python3 -m http.server 8000`, then open `http://localhost:8000/`.

## Phase plan

See [PROGRESS.md](PROGRESS.md) for phase boundaries and current status. Work stops after each phase for review, as requested in the project brief.