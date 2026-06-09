# Makita Jigsaw Blade Catalog

Printable catalog of Makita jigsaw blades, compatible with Makita jigsaw saws that use a bayonet shank (also known as a T-shank).

## Project structure

- `src/data/` — catalog data (blades, legend, pagination, index)
- `src/components/` — Astro components (blade cards, summary table, legend, etc.)
- `src/lib/` — constants and SVG icon registry (`icon-svgs.ts`)
- `src/types/` — TypeScript types (`catalog.ts`)
- `src/styles/print.css` — print styles

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Local preview with hot reload |
| `npm run build` | TypeScript check + build to `dist/` |
| `npm run pdf` | Generate the print PDF from `dist/` |
| `npm run typecheck` | TypeScript diagnostics only |

## Editing the catalog

1. Edit data in `src/data/` (mainly `blades.ts`, `usage-index.ts`)
2. Run `npm run build` to generate the HTML
3. Run `npm run pdf` to generate the print PDF (or open the built HTML and print from the browser)

To add a new blade: add an entry in `blades.ts` (including its `summary` block), and update `usage-index.ts` for usage-based categorization. The summary table and detail pages follow the order defined in `blades`.

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup, code style, and pull request guidelines.
