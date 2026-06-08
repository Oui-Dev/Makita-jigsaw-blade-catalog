# Makita Jigsaw Blade Catalog

Catalogue imprimable des lames de scie sauteuse Makita (emmanchement en T), compatible DJV185Z.

## Structure du projet

- `src/data/` — données du catalogue (lames, légende, pagination, index)
- `src/components/` — composants Astro (fiches lame, tableau, légende…)
- `src/styles/print.css` — styles d'impression
- `archive/` — HTML source de référence (migration initiale)

## Commandes

| Commande | Description |
|----------|-------------|
| `npm run dev` | Prévisualisation locale avec rechargement |
| `npm run build` | Build statique dans `dist/` |
| `npm run export` | Génère `Makita_Lames_Scie_Sauteuse_DJV185Z.html` (après build) |
| `npm run export:full` | Build + export en une commande |
| `npm run extract` | Régénère `src/data/` depuis `archive/` (migration) |
| `npm run validate` | Vérifie la structure de l'export vs l'archive |

## Modifier le catalogue

1. Éditer les données dans `src/data/` (principalement `blades.ts`, `usage-index.ts`, `page-layout.ts`)
2. Lancer `npm run export:full`
3. Ouvrir le HTML généré et imprimer (Ctrl+P)

Pour une nouvelle lame : ajouter l'entrée dans `blades.ts`, mettre à jour le tableau récap (`summary.ts`), l'index (`usage-index.ts`) et la pagination (`page-layout.ts`).
