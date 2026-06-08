export const legendData = {
  "blocks": [
    {
      "title": "Materiau de la lame",
      "items": [
        {
          "kind": "material",
          "code": "HCS",
          "label": "HCS",
          "desc": "Acier au carbone (High Carbon Steel) : bois et plastiques",
          "color": "#E8821E"
        },
        {
          "kind": "material",
          "code": "HSS",
          "label": "HSS",
          "desc": "Acier rapide (High Speed Steel) : metaux, aluminium, non-ferreux",
          "color": "#1F6FB2"
        },
        {
          "kind": "material",
          "code": "BiM",
          "label": "BiM",
          "desc": "Bi-metal (corps souple + dents HSS) : polyvalent, longue duree, anti-casse",
          "color": "#0E9C8A"
        },
        {
          "kind": "material",
          "code": "TCT",
          "label": "TCT",
          "desc": "Carbure de tungstene (grain/dents carbure) : materiaux abrasifs",
          "color": "#3A3F45"
        }
      ],
      "twoCol": false
    },
    {
      "title": "Caracteristiques de coupe",
      "items": [
        {
          "kind": "feature",
          "iconKey": "coupe-rapide",
          "label": "Coupe rapide"
        },
        {
          "kind": "feature",
          "iconKey": "coupe-propre",
          "label": "Coupe propre"
        },
        {
          "kind": "feature",
          "iconKey": "coupe-courbe",
          "label": "Coupe courbe"
        },
        {
          "kind": "feature",
          "iconKey": "coupe-droite",
          "label": "Coupe droite"
        },
        {
          "kind": "feature",
          "iconKey": "lubrification",
          "label": "Lubrification recommandee"
        }
      ],
      "twoCol": false
    },
    {
      "title": "Specifications techniques",
      "items": [
        {
          "kind": "spec",
          "iconKey": "tpi",
          "label": "Nombre de dents (TPI)"
        },
        {
          "kind": "spec",
          "iconKey": "longueur-lame",
          "label": "Longueur de lame"
        },
        {
          "kind": "spec",
          "iconKey": "epaisseur-coupe",
          "label": "Epaisseur de coupe"
        },
        {
          "kind": "spec",
          "iconKey": "type-denture",
          "label": "Type de denture"
        }
      ],
      "twoCol": false
    },
    {
      "title": "Materiaux pouvant etre coupes",
      "items": [
        {
          "kind": "cut-material",
          "iconKey": "bois-tendre",
          "label": "Bois tendre",
          "desc": "Planches et panneaux en bois tendre"
        },
        {
          "kind": "cut-material",
          "iconKey": "bois-dur",
          "label": "Bois dur",
          "desc": "Essences dures, bois massif dense"
        },
        {
          "kind": "cut-material",
          "iconKey": "contreplaque",
          "label": "Contreplaque",
          "desc": "Panneaux contreplaques multiplis"
        },
        {
          "kind": "cut-material",
          "iconKey": "mdf-agglomere",
          "label": "MDF / Agglomere",
          "desc": "MDF, panneaux de particules, agglomere"
        },
        {
          "kind": "cut-material",
          "iconKey": "stratifie-parquet",
          "label": "Stratifie / Parquet",
          "desc": "Sols stratifies, parquet, placages decoratifs"
        },
        {
          "kind": "cut-material",
          "iconKey": "pvc",
          "label": "PVC",
          "desc": "Tubes et profiles PVC"
        },
        {
          "kind": "cut-material",
          "iconKey": "plastique",
          "label": "Plastique",
          "desc": "Plastiques, PMMA, composites"
        },
        {
          "kind": "cut-material",
          "iconKey": "aluminium",
          "label": "Aluminium",
          "desc": "Profiles et toles aluminium"
        },
        {
          "kind": "cut-material",
          "iconKey": "acier",
          "label": "Acier / Acier doux",
          "desc": "Acier doux, toles fines"
        },
        {
          "kind": "cut-material",
          "iconKey": "inox",
          "label": "Inox",
          "desc": "Acier inoxydable"
        },
        {
          "kind": "cut-material",
          "iconKey": "metaux-non-ferreux",
          "label": "Metaux non ferreux",
          "desc": "Cuivre, laiton, bronze, zinc"
        },
        {
          "kind": "cut-material",
          "iconKey": "carrelage-fibre-ciment",
          "label": "Carrelage / Fibre de verre / Ciment",
          "desc": "Carrelage, ceramique, fibrociment, fibre de verre"
        },
        {
          "kind": "cut-material",
          "iconKey": "cuir-mousse",
          "label": "Cuir / Caoutchouc / Carton / Mousse",
          "desc": "Cuir, caoutchouc, mousse, carton, liege"
        }
      ],
      "twoCol": false
    },
    {
      "title": "Types de denture (codes Makita)",
      "items": [
        {
          "kind": "tooth",
          "code": "A",
          "label": "Denture A",
          "desc": "Fraisee, avoyage alterne (milled, side set)"
        },
        {
          "kind": "tooth",
          "code": "B",
          "label": "Denture B",
          "desc": "Fraisee, avoyage ondule (milled, wavy set)"
        },
        {
          "kind": "tooth",
          "code": "C",
          "label": "Denture C",
          "desc": "Rectifiee, avoyage alterne (ground, side set)"
        },
        {
          "kind": "tooth",
          "code": "D",
          "label": "Denture D",
          "desc": "Rectifiee a depouille conique (ground, taper ground)"
        },
        {
          "kind": "tooth",
          "code": "E",
          "label": "Denture E",
          "desc": "Fraisee a depouille conique (milled, taper ground)"
        }
      ],
      "twoCol": false
    }
  ],
  "noteHtml": "\n    <b>Indicateurs derives.</b> Les mentions <b>Coupe rapide</b> et <b>Coupe propre</b> sont deduites du nombre de dents (TPI)\n    et de l'usage decrit par Makita. La <b>Coupe courbe</b> suit la classification Makita (type Scroll / chantournage).\n    La <b>Lubrification recommandee</b> reflete la bonne pratique generale de coupe des metaux (huile de coupe sur acier et inox),\n    et non un parametre publie lame par lame. Lorsqu'une donnee n'est pas publiee de facon fiable, la mention\n    <b>Non documente par Makita</b> est utilisee.\n  "
} as const;
