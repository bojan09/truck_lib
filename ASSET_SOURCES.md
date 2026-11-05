# Asset Sources and Rights Register

Truck Library uses real documentary photographs for every gallery visual. The full per-file register—including depiction, photographer credit, source page, license and license link, alt text, and modification notes—is [`assets/manifest.json`](assets/manifest.json). That manifest is authoritative for individual asset attribution.

## Collection summary

- 75 distinct locally stored photographs are used across 161 labeled views in 63 guides.
- All 75 gallery assets are cataloged as `Photograph`; there are no infographic, generated, or drawn substitutes.
- The interface shows a credit and direct image source link with each gallery photograph. The hero photograph has its own credit link.
- Photographs are reused only as context across related guides; captions state when an image does not prove a rating, configuration, procedure, event, or transaction.

## Rights and accuracy rules

1. Each local photograph has a documented source and a reuse license or public-domain basis in the manifest.
2. Credit and license terms are preserved. Commons-generated thumbnails and source-hosted images are used without crops or other image edits, as recorded per asset.
3. Do not infer model year, make, component identity, class, tire count, or technical rating unless the source establishes it.
4. Gallery entries have a factual alt description, visible label, explanatory caption, placement note, photograph type, photographer credit, and image-source link.
5. Local-only asset paths are used; the site does not hotlink its gallery photographs.
6. Technical claims cite a supporting source in the guide. Operating procedures and safety requirements are framed around the applicable vehicle, jurisdiction, or contract.

## Photograph subjects

The locally stored set covers tractors and cabs; trailer types and hardware; fifth wheels and kingpins; truck engines and drivetrain parts; aftertreatment; truck and trailer wheels, tires, brakes, axles, and suspension; lights, mirrors, dashboards, and safety equipment; cargo handling, freight docks, and equipment in operation. Photographs are from licensed Wikimedia Commons records, Flickr Commons/photographer records, U.S. government sources, and other explicitly licensed sources documented individually in the manifest.

## Technical references

Each guide lists its direct references. Major primary and authoritative sources include:

| Reference | Relevant subjects |
|---|---|
| [49 CFR § 393.75 — Tires](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-G/section-393.75) | U.S. tread-depth and tire rules |
| [49 CFR § 392.22 — Emergency signals](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-392/subpart-C/section-392.22) | Warning devices for stopped commercial vehicles |
| [49 CFR § 396.11 — Driver vehicle inspection reports](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-396/section-396.11) and [FMCSA DVIR guidance](https://www.fmcsa.dot.gov/regulations/inspection-repair-and-maintenance-driver-vehicle-inspection-report-dvir) | Inspection, defect repair, and certification loop |
| [CVSA — All inspection levels](https://cvsa.org/inspections/all-inspection-levels/) | Level I, II, and III scope |
| [EPA — Diesel particulate filter operation and maintenance](https://www.epa.gov/sites/default/files/2016-03/documents/420f10027.pdf) | General DPF and regeneration overview |
| [Cummins — Six answers about diesel exhaust fluid](https://www.cummins.com/en-na/news/2016/01/04/6-answers-about-diesel-exhaust-fluid) | DEF freeze point and handling context |
| [SAE J560 — Seven-conductor truck–trailer connector](https://saemobilus.sae.org/standards/j560_202002-primary-auxiliary-seven-conductor-electrical-connector-truck-trailer-jumper-cable) | Connector pin assignment context; verify vehicle-specific wiring |
| [FMCSA — Regulations](https://www.fmcsa.dot.gov/regulations) | General U.S. carrier/intermodal regulatory context |

## Audit

All image paths used by `data/galleries.json` are local and map to a manifest record. No orphaned or undocumented photograph is intentionally retained in the gallery asset directory. Counts and route status are tracked in [`docs/COVERAGE.md`](docs/COVERAGE.md).
