# Makita Jigsaw Blade Catalog

Catalogue imprimable des lames de scie sauteuse Makita (emmanchement en T), compatible DJV185Z.

## Structure du projet

- `src/data/` — données du catalogue (lames, légende, pagination, index)
- `src/components/` — composants Astro (fiches lame, tableau, légende…)
- `src/lib/` — constantes, registre des icônes SVG (`icon-svgs.ts`)
- `src/types/` — types TypeScript (`catalog.ts`)
- `src/styles/print.css` — styles d'impression
- `archive/` — HTML source de référence (migration initiale)

## Commandes

| Commande | Description |
|----------|-------------|
| `npm run dev` | Prévisualisation locale avec rechargement |
| `npm run build` | Vérification TypeScript + build dans `dist/` |
| `npm run typecheck` | Diagnostic TypeScript uniquement |
| `npm run export` | Génère `Makita_Lames_Scie_Sauteuse_DJV185Z.html` (après build) |

## Modifier le catalogue

1. Éditer les données dans `src/data/` (principalement `blades.ts`, `summary.ts`, `usage-index.ts`, `page-layout.ts`)
2. Lancer `npm run build` pour générer le HTML
3. Ouvrir le HTML généré et imprimer (Ctrl+P)

Pour une nouvelle lame : ajouter l'entrée dans `blades.ts`, mettre à jour `summary.ts`, `usage-index.ts` et `page-layout.ts`. Utiliser des clés anglaises pour `materials`, `iconKey`, `family` et `features` (voir `src/types/catalog.ts`).
