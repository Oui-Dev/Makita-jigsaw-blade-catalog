export const legendData = {
  blocks: [
    {
      title: 'Matériau de la lame',
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
          desc: 'Acier rapide (High Speed Steel) : métaux, aluminium, non-ferreux',
          color: '#1F6FB2',
        },
        {
          kind: 'material',
          code: 'BiM',
          label: 'BiM',
          desc: 'Bi-metal (corps souple + dents HSS) : polyvalent, longue durée, anti-casse',
          color: '#0E9C8A',
        },
        {
          kind: 'material',
          code: 'TCT',
          label: 'TCT',
          desc: 'Carbure de tungstène (grain/dents carbure) : matériaux abrasifs',
          color: '#3A3F45',
        },
      ],
      twoCol: false,
    },
    {
      title: 'Caractéristiques de coupe',
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
          label: 'Lubrification recommandée',
        },
      ],
      twoCol: false,
    },
    {
      title: 'Spécifications techniques',
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
          label: 'Épaisseur de coupe',
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
      title: 'Matériaux pouvant être coupés',
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
          label: 'Contreplaqué',
          desc: 'Panneaux contreplaqués multiplis',
        },
        {
          kind: 'cut-material',
          iconKey: 'mdf-particleboard',
          label: 'MDF / Aggloméré',
          desc: 'MDF, panneaux de particules, aggloméré',
        },
        {
          kind: 'cut-material',
          iconKey: 'laminate-flooring',
          label: 'Stratifié / Parquet',
          desc: 'Sols stratifiés, parquet, placages décoratifs',
        },
        {
          kind: 'cut-material',
          iconKey: 'pvc',
          label: 'PVC',
          desc: 'Tubes et profilés PVC',
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
          desc: 'Profilés et tôles aluminium',
        },
        {
          kind: 'cut-material',
          iconKey: 'steel',
          label: 'Acier / Acier doux',
          desc: 'Acier doux, tôles fines',
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
          label: 'Métaux non ferreux',
          desc: 'Cuivre, laiton, bronze, zinc',
        },
        {
          kind: 'cut-material',
          iconKey: 'tile-fiberglass-cement',
          label: 'Carrelage / Fibre de verre / Ciment',
          desc: 'Carrelage, céramique, fibrociment, fibre de verre',
        },
        {
          kind: 'cut-material',
          iconKey: 'leather-rubber-foam',
          label: 'Cuir / Caoutchouc / Carton / Mousse',
          desc: 'Cuir, caoutchouc, mousse, carton, liège',
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
          desc: 'Fraisée, avoyage alterne (milled, side set)',
        },
        {
          kind: 'tooth',
          code: 'B',
          label: 'Denture B',
          desc: 'Fraisée, avoyage ondule (milled, wavy set)',
        },
        {
          kind: 'tooth',
          code: 'C',
          label: 'Denture C',
          desc: 'Rectifiée, avoyage alterne (ground, side set)',
        },
        {
          kind: 'tooth',
          code: 'D',
          label: 'Denture D',
          desc: 'Rectifiée à dépouille conique (ground, taper ground)',
        },
        {
          kind: 'tooth',
          code: 'E',
          label: 'Denture E',
          desc: 'Fraisée à dépouille conique (milled, taper ground)',
        },
      ],
      twoCol: false,
    },
  ],
  noteHtml:
    "\n    <b>Indicateurs dérivés.</b> Les mentions <b>Coupe rapide</b> et <b>Coupe propre</b> sont déduites du nombre de dents (TPI)\n    et de l'usage décrit par Makita. La <b>Coupe courbe</b> suit la classification Makita (type Scroll / chantournage).\n    La <b>Lubrification recommandée</b> reflète la bonne pratique générale de coupe des métaux (huile de coupe sur acier et inox),\n    et non un paramètre publié lame par lame. Lorsqu'une donnée n'est pas publiée de façon fiable, la mention\n    <b>Non documenté par Makita</b> est utilisée.\n  ",
} as const;
