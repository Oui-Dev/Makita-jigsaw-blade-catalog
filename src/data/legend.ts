export const legendData = {
  blocks: [
    {
      title: 'Materiau de la lame',
      items: [
        {
          kind: 'material',
          code: 'HCS',
          label: 'HCS',
          desc: 'Acier au carbone (High Carbon Steel) : bois et plastiques',
          color: '#E8821E',
        },
        {
          kind: 'material',
          code: 'HSS',
          label: 'HSS',
          desc: 'Acier rapide (High Speed Steel) : metaux, aluminium, non-ferreux',
          color: '#1F6FB2',
        },
        {
          kind: 'material',
          code: 'BiM',
          label: 'BiM',
          desc: 'Bi-metal (corps souple + dents HSS) : polyvalent, longue duree, anti-casse',
          color: '#0E9C8A',
        },
        {
          kind: 'material',
          code: 'TCT',
          label: 'TCT',
          desc: 'Carbure de tungstene (grain/dents carbure) : materiaux abrasifs',
          color: '#3A3F45',
        },
      ],
      twoCol: false,
    },
    {
      title: 'Caracteristiques de coupe',
      items: [
        {
          kind: 'feature',
          iconKey: 'fast-cut',
          label: 'Coupe rapide',
        },
        {
          kind: 'feature',
          iconKey: 'clean-cut',
          label: 'Coupe propre',
        },
        {
          kind: 'feature',
          iconKey: 'curved-cut',
          label: 'Coupe courbe',
        },
        {
          kind: 'feature',
          iconKey: 'straight-cut',
          label: 'Coupe droite',
        },
        {
          kind: 'feature',
          iconKey: 'lubrication',
          label: 'Lubrification recommandee',
        },
      ],
      twoCol: false,
    },
    {
      title: 'Specifications techniques',
      items: [
        {
          kind: 'spec',
          iconKey: 'tpi',
          label: 'Nombre de dents (TPI)',
        },
        {
          kind: 'spec',
          iconKey: 'blade-length',
          label: 'Longueur de lame',
        },
        {
          kind: 'spec',
          iconKey: 'cut-thickness',
          label: 'Epaisseur de coupe',
        },
        {
          kind: 'spec',
          iconKey: 'tooth-type',
          label: 'Type de denture',
        },
      ],
      twoCol: false,
    },
    {
      title: 'Materiaux pouvant etre coupes',
      items: [
        {
          kind: 'cut-material',
          iconKey: 'softwood',
          label: 'Bois tendre',
          desc: 'Planches et panneaux en bois tendre',
        },
        {
          kind: 'cut-material',
          iconKey: 'hardwood',
          label: 'Bois dur',
          desc: 'Essences dures, bois massif dense',
        },
        {
          kind: 'cut-material',
          iconKey: 'plywood',
          label: 'Contreplaque',
          desc: 'Panneaux contreplaques multiplis',
        },
        {
          kind: 'cut-material',
          iconKey: 'mdf-particleboard',
          label: 'MDF / Agglomere',
          desc: 'MDF, panneaux de particules, agglomere',
        },
        {
          kind: 'cut-material',
          iconKey: 'laminate-flooring',
          label: 'Stratifie / Parquet',
          desc: 'Sols stratifies, parquet, placages decoratifs',
        },
        {
          kind: 'cut-material',
          iconKey: 'pvc',
          label: 'PVC',
          desc: 'Tubes et profiles PVC',
        },
        {
          kind: 'cut-material',
          iconKey: 'plastic',
          label: 'Plastique',
          desc: 'Plastiques, PMMA, composites',
        },
        {
          kind: 'cut-material',
          iconKey: 'aluminum',
          label: 'Aluminium',
          desc: 'Profiles et toles aluminium',
        },
        {
          kind: 'cut-material',
          iconKey: 'steel',
          label: 'Acier / Acier doux',
          desc: 'Acier doux, toles fines',
        },
        {
          kind: 'cut-material',
          iconKey: 'stainless-steel',
          label: 'Inox',
          desc: 'Acier inoxydable',
        },
        {
          kind: 'cut-material',
          iconKey: 'non-ferrous-metal',
          label: 'Metaux non ferreux',
          desc: 'Cuivre, laiton, bronze, zinc',
        },
        {
          kind: 'cut-material',
          iconKey: 'tile-fiberglass-cement',
          label: 'Carrelage / Fibre de verre / Ciment',
          desc: 'Carrelage, ceramique, fibrociment, fibre de verre',
        },
        {
          kind: 'cut-material',
          iconKey: 'leather-rubber-foam',
          label: 'Cuir / Caoutchouc / Carton / Mousse',
          desc: 'Cuir, caoutchouc, mousse, carton, liege',
        },
      ],
      twoCol: false,
    },
    {
      title: 'Types de denture (codes Makita)',
      items: [
        {
          kind: 'tooth',
          code: 'A',
          label: 'Denture A',
          desc: 'Fraisee, avoyage alterne (milled, side set)',
        },
        {
          kind: 'tooth',
          code: 'B',
          label: 'Denture B',
          desc: 'Fraisee, avoyage ondule (milled, wavy set)',
        },
        {
          kind: 'tooth',
          code: 'C',
          label: 'Denture C',
          desc: 'Rectifiee, avoyage alterne (ground, side set)',
        },
        {
          kind: 'tooth',
          code: 'D',
          label: 'Denture D',
          desc: 'Rectifiee a depouille conique (ground, taper ground)',
        },
        {
          kind: 'tooth',
          code: 'E',
          label: 'Denture E',
          desc: 'Fraisee a depouille conique (milled, taper ground)',
        },
      ],
      twoCol: false,
    },
  ],
  noteHtml:
    "\n    <b>Indicateurs derives.</b> Les mentions <b>Coupe rapide</b> et <b>Coupe propre</b> sont deduites du nombre de dents (TPI)\n    et de l'usage decrit par Makita. La <b>Coupe courbe</b> suit la classification Makita (type Scroll / chantournage).\n    La <b>Lubrification recommandee</b> reflete la bonne pratique generale de coupe des metaux (huile de coupe sur acier et inox),\n    et non un parametre publie lame par lame. Lorsqu'une donnee n'est pas publiee de facon fiable, la mention\n    <b>Non documente par Makita</b> est utilisee.\n  ",
} as const;
