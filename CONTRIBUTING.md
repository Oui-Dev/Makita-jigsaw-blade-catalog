# Contributing

Thank you for helping improve the Makita Jigsaw Blade Catalog. This guide covers local setup, how to edit catalog data, and what we expect in pull requests.

## Prerequisites

- [Node.js](https://nodejs.org/) **22.12.0** or newer (see `engines` in `package.json`)
- npm (bundled with Node.js)

## Getting started

```bash
git clone https://github.com/Oui-Dev/Makita-jigsaw-blade-catalog.git
cd Makita-jigsaw-blade-catalog
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:4321`) to preview the catalog.

## Development workflow

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Astro dev server with hot reload |
| `npm run build` | Run Biome CI, Astro type check, and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Run Astro/TypeScript diagnostics only |
| `npm run pdf` | Generate a PDF from `dist/` (requires a prior `npm run build`) |
| `npm run check` | Format and lint with Biome (writes fixes) |
| `npm run format` | Format with Biome |
| `npm run lint` | Lint with Biome |
| `npm run check:ci` | Biome CI check (no writes) |

Before opening a pull request, run:

```bash
npm run build
```

If you changed print layout or styles, also verify the PDF:

```bash
npm run pdf
```

The PDF script uses Playwright. On first run, install the browser if prompted:

```bash
npx playwright install chromium
```

## Project layout

| Path | Purpose |
|------|---------|
| `src/data/blades.ts` | Blade records and summary rows |
| `src/data/usage-index.ts` | Usage-based index (material categories → blade refs) |
| `src/data/legend.ts` | Legend page content |
| `src/data/page-layout.ts` | Page breaks and section ordering |
| `src/types/catalog.ts` | Shared TypeScript types |
| `src/lib/icon-svgs.ts` | SVG paths for icons |
| `src/components/` | Astro UI components |
| `src/styles/print.css` | Print and PDF styles |
| `scripts/generate-pdf.mjs` | PDF generation from the built site |

## Editing catalog data

### Updating an existing blade

1. Find the blade entry in `src/data/blades.ts` (keyed by reference, e.g. `'B-8'`).
2. Update fields as needed. Keep `summary` in sync with the fields used in the summary table (`material`, `tpi`, `length`, feature flags, `mainMaterials`).
3. If usage categories change, update the blade's `ref` in the relevant sections of `src/data/usage-index.ts`.
4. Run `npm run build` and check the preview or PDF.

### Adding a new blade

1. Add a new entry to the `blades` object in `src/data/blades.ts`. Required shape is defined by `BladeRecord` in `src/types/catalog.ts`.
2. Include a `summary` object matching `SummaryRow` for the recap table.
3. Set `family` to one of the `FamilySlug` values so the blade appears in the correct section.
4. List compatible materials using `CutMaterialKey` values from `catalog.ts`.
5. Provide `sawPath` as an SVG path for the blade tooth profile illustration.
6. Add the blade `ref` to every relevant category in `src/data/usage-index.ts`.
7. If needed, adjust `src/data/page-layout.ts` for pagination.
8. Build and visually verify the new card, summary row, and index entries.

Catalog copy (names, observations, material labels) is written in **French** to match the printed catalog audience. Keep that language consistent when adding or editing text.

### Types and icons

- Use existing `IconKey` and `CutMaterialKey` values from `src/types/catalog.ts` when possible.
- If you need a new icon or material key, add it to the types and register the SVG in `src/lib/icon-svgs.ts`.

## Code style

This project uses [Biome](https://biomejs.dev/) for formatting and linting. Configuration lives in `biome.json`.

- 2-space indentation, single quotes in JavaScript/TypeScript
- 120-character line width
- LF line endings

Run `npm run check` before committing to apply formatting and safe lint fixes.

## Pull requests

1. Fork the repository and create a branch from `main`.
2. Make focused changes with a clear commit history.
3. Ensure `npm run build` passes.
4. Open a pull request with:
   - A short summary of what changed (data corrections, new blades, layout fixes, etc.)
   - Screenshots or a note if print/PDF layout was affected
5. Link any related issue if one exists.

Data corrections (wrong TPI, length, Makita order code, etc.) are especially welcome. Please cite your source (official Makita documentation, packaging, etc.) in the PR description when possible.

## License

By contributing, you agree that your contributions will be licensed under the same terms as the project. See [LICENSE.md](LICENSE.md): non-commercial use only; commercial use requires prior written permission from the author.
