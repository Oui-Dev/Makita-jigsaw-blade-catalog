# Makita Jigsaw Blade Catalog

Catalogue imprimable des lames de scie sauteuse Makita (emmanchement en T), compatible avec les scies sauteuses Makita à emmanchement baionnette (type B).

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

1. Éditer les données dans `src/data/` (principalement `blades.ts`, `usage-index.ts`)
2. Lancer `npm run build` pour générer le HTML
3. Ouvrir le HTML généré et imprimer (Ctrl+P)

Pour une nouvelle lame : ajouter l'entrée dans `blades.ts` (avec son bloc `summary`), insérer la ref au bon endroit dans le tableau `bladeRefs`, et mettre à jour `usage-index.ts` pour la catégorisation par usage. Le tableau récapitulatif et les fiches détaillées suivent automatiquement l'ordre de `bladeRefs`.
