import type { BladeRecord } from '@/types/catalog';

export const blades: Record<string, BladeRecord> = {
  "B-10": {
    "ref": "B-10",
    "pack": "Boite de 5",
    "name": "Finition rapide bois et contreplaque",
    "material": "HCS",
    "tpi": "9",
    "length": "100 mm",
    "usefulLength": "Non doc.",
    "toothType": "D",
    "boschEquiv": "T101B",
    "makitaCode": "A-85628",
    "cutThickness": "Bois / contreplaque (denture moyenne)",
    "observations": "Lame polyvalente de coupe rapide dans le bois et le contreplaque. Finition correcte. Reference classique de la gamme.",
    "observationsHtml": "<b>Observations.</b> Lame polyvalente de coupe rapide dans le bois et le contreplaque. Finition correcte. Reference classique de la gamme. <b>Code de commande Makita :</b> <span class=\"mono\">A-85628</span>.",
    "materials": [
      "softwood",
      "plywood",
      "plastic"
    ],
    "features": {
      "fast": true,
      "clean": false,
      "curved": false,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L13.3 6 L20.7 23 L28.0 6 L35.3 23 L42.7 6 L50.0 23 L57.3 6 L64.7 23 L72.0 6 L79.3 23 L86.7 6 L94.0 23 L101.3 6 L108.7 23 L116.0 6 L123.3 23 L130.7 6 L138.0 23",
    "family": "wood-plywood-plastics",
    "summary": {
      "ref": "B-10",
      "material": "HCS",
      "tpi": "9",
      "length": "100 mm",
      "mainMaterials": "Bois tendre, Contreplaque, Plastique",
      "fast": true,
      "clean": false,
      "curved": false,
      "lubrication": false
    }
  },
  "B-10S": {
    "ref": "B-10S",
    "pack": "Boite de 5",
    "name": "Coupe sans eclats dans le bois (sans poncage)",
    "material": "HCS",
    "tpi": "13",
    "length": "92 mm",
    "usefulLength": "Non doc.",
    "toothType": "D",
    "boschEquiv": "T101BRF",
    "makitaCode": "792691-8",
    "cutThickness": null,
    "observations": "Denture fine pour des coupes nettes sans eclats ne necessitant pas de poncage. Corps court pour materiaux fins.",
    "observationsHtml": "<b>Observations.</b> Denture fine pour des coupes nettes sans eclats ne necessitant pas de poncage. Corps court pour materiaux fins. <b>Code de commande Makita :</b> <span class=\"mono\">792691-8</span>.",
    "materials": [
      "softwood",
      "plywood"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": false,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L11.1 6 L16.2 23 L21.2 6 L26.3 23 L31.4 6 L36.5 23 L41.5 6 L46.6 23 L51.7 6 L56.8 23 L61.8 6 L66.9 23 L72.0 6 L77.1 23 L82.2 6 L87.2 23 L92.3 6 L97.4 23 L102.5 6 L107.5 23 L112.6 6 L117.7 23 L122.8 6 L127.8 23 L132.9 6 L138.0 23",
    "family": "wood-plywood-plastics",
    "summary": {
      "ref": "B-10S",
      "material": "HCS",
      "tpi": "13",
      "length": "92 mm",
      "mainMaterials": "Bois tendre, Contreplaque",
      "fast": false,
      "clean": true,
      "curved": false,
      "lubrication": false
    }
  },
  "B-11": {
    "ref": "B-11",
    "pack": "Boite de 5",
    "name": "Coupe rapide bois, contreplaque et plastiques",
    "material": "HCS",
    "tpi": "9",
    "length": "100 mm",
    "usefulLength": "75 mm",
    "toothType": "D",
    "boschEquiv": "T101B",
    "makitaCode": "B-01270",
    "cutThickness": "Bois / plastiques : 3 a 60 mm",
    "observations": "Lame standard de coupe rapide pour le travail courant du bois et du contreplaque.",
    "observationsHtml": "<b>Observations.</b> Lame standard de coupe rapide pour le travail courant du bois et du contreplaque. <b>Code de commande Makita :</b> <span class=\"mono\">B-01270</span>.",
    "materials": [
      "softwood",
      "plywood",
      "plastic"
    ],
    "features": {
      "fast": true,
      "clean": false,
      "curved": false,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L13.3 6 L20.7 23 L28.0 6 L35.3 23 L42.7 6 L50.0 23 L57.3 6 L64.7 23 L72.0 6 L79.3 23 L86.7 6 L94.0 23 L101.3 6 L108.7 23 L116.0 6 L123.3 23 L130.7 6 L138.0 23",
    "family": "wood-plywood-plastics",
    "summary": {
      "ref": "B-11",
      "material": "HCS",
      "tpi": "9",
      "length": "100 mm",
      "mainMaterials": "Bois tendre, Contreplaque, Plastique",
      "fast": true,
      "clean": false,
      "curved": false,
      "lubrication": false
    }
  },
  "B-12": {
    "ref": "B-12",
    "pack": "Boite de 5",
    "name": "Coupe fine bois, contreplaque et plastiques",
    "material": "HCS",
    "tpi": "6",
    "length": "100 mm",
    "usefulLength": "75 mm",
    "toothType": "D",
    "boschEquiv": "T101D",
    "makitaCode": "A-85640",
    "cutThickness": "Bois / plastiques : 5 a 65 mm",
    "observations": "Grosse denture (6 TPI) pour une coupe rapide dans les materiaux epais jusqu'a 65 mm.",
    "observationsHtml": "<b>Observations.</b> Grosse denture (6 TPI) pour une coupe rapide dans les materiaux epais jusqu'a 65 mm. <b>Code de commande Makita :</b> <span class=\"mono\">A-85640</span>.",
    "materials": [
      "softwood",
      "plywood",
      "plastic"
    ],
    "features": {
      "fast": true,
      "clean": false,
      "curved": false,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L17.0 6 L28.0 23 L39.0 6 L50.0 23 L61.0 6 L72.0 23 L83.0 6 L94.0 23 L105.0 6 L116.0 23 L127.0 6 L138.0 23",
    "family": "wood-plywood-plastics",
    "summary": {
      "ref": "B-12",
      "material": "HCS",
      "tpi": "6",
      "length": "100 mm",
      "mainMaterials": "Bois tendre, Contreplaque, Plastique",
      "fast": true,
      "clean": false,
      "curved": false,
      "lubrication": false
    }
  },
  "B-13": {
    "ref": "B-13",
    "pack": "Boite de 5",
    "name": "Coupe generale bois, contreplaque et plastiques",
    "material": "HCS",
    "tpi": "8",
    "length": "105 mm",
    "usefulLength": "80 mm",
    "toothType": "A",
    "boschEquiv": "T111C",
    "makitaCode": "B-01286",
    "cutThickness": "Bois / plastiques : jusqu'a 65 mm",
    "observations": "Lame longue (105 mm) pour coupe generale et materiaux epais. Reference incluse dans le coffret A-86898.",
    "observationsHtml": "<b>Observations.</b> Lame longue (105 mm) pour coupe generale et materiaux epais. Reference incluse dans le coffret A-86898. <b>Code de commande Makita :</b> <span class=\"mono\">B-01286</span>.",
    "materials": [
      "softwood",
      "plywood",
      "plastic"
    ],
    "features": {
      "fast": true,
      "clean": false,
      "curved": false,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L14.2 6 L22.5 23 L30.8 6 L39.0 23 L47.2 6 L55.5 23 L63.8 6 L72.0 23 L80.2 6 L88.5 23 L96.8 6 L105.0 23 L113.2 6 L121.5 23 L129.8 6 L138.0 23",
    "family": "wood-plywood-plastics",
    "summary": {
      "ref": "B-13",
      "material": "HCS",
      "tpi": "8",
      "length": "105 mm",
      "mainMaterials": "Bois tendre, Contreplaque, Plastique",
      "fast": true,
      "clean": false,
      "curved": false,
      "lubrication": false
    }
  },
  "BR-13": {
    "ref": "BR-13",
    "pack": "Boite de 5",
    "name": "Coupe rapide bois et contreplaque",
    "material": "HCS",
    "tpi": "9",
    "length": "100 mm",
    "usefulLength": "Non doc.",
    "toothType": "A",
    "boschEquiv": "-",
    "makitaCode": "792729-9",
    "cutThickness": null,
    "observations": "Variante de coupe rapide bois et contreplaque, denture fraisee avoyage alterne.",
    "observationsHtml": "<b>Observations.</b> Variante de coupe rapide bois et contreplaque, denture fraisee avoyage alterne. <b>Code de commande Makita :</b> <span class=\"mono\">792729-9</span>.",
    "materials": [
      "softwood",
      "plywood"
    ],
    "features": {
      "fast": true,
      "clean": false,
      "curved": false,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L13.3 6 L20.7 23 L28.0 6 L35.3 23 L42.7 6 L50.0 23 L57.3 6 L64.7 23 L72.0 6 L79.3 23 L86.7 6 L94.0 23 L101.3 6 L108.7 23 L116.0 6 L123.3 23 L130.7 6 L138.0 23",
    "family": "wood-plywood-plastics",
    "summary": {
      "ref": "BR-13",
      "material": "HCS",
      "tpi": "9",
      "length": "100 mm",
      "mainMaterials": "Bois tendre, Contreplaque",
      "fast": true,
      "clean": false,
      "curved": false,
      "lubrication": false
    }
  },
  "B-14": {
    "ref": "B-14",
    "pack": "Boite de 5",
    "name": "Materiaux fins, bois avec clous",
    "material": "HCS",
    "tpi": "18",
    "length": "76 mm",
    "usefulLength": "Non doc.",
    "toothType": "B",
    "boschEquiv": "-",
    "makitaCode": "A-85662",
    "cutThickness": "Materiaux fins ; bois avec residus de clous",
    "observations": "Denture fine (18 TPI) ideale pour les materiaux fins et le bois contenant des clous.",
    "observationsHtml": "<b>Observations.</b> Denture fine (18 TPI) ideale pour les materiaux fins et le bois contenant des clous. <b>Code de commande Makita :</b> <span class=\"mono\">A-85662</span>.",
    "materials": [
      "softwood",
      "plywood",
      "plastic"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": false,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L9.7 6 L13.3 23 L17.0 6 L20.7 23 L24.3 6 L28.0 23 L31.7 6 L35.3 23 L39.0 6 L42.7 23 L46.3 6 L50.0 23 L53.7 6 L57.3 23 L61.0 6 L64.7 23 L68.3 6 L72.0 23 L75.7 6 L79.3 23 L83.0 6 L86.7 23 L90.3 6 L94.0 23 L97.7 6 L101.3 23 L105.0 6 L108.7 23 L112.3 6 L116.0 23 L119.7 6 L123.3 23 L127.0 6 L130.7 23 L134.3 6 L138.0 23",
    "family": "wood-plywood-plastics",
    "summary": {
      "ref": "B-14",
      "material": "HCS",
      "tpi": "18",
      "length": "76 mm",
      "mainMaterials": "Bois tendre, Contreplaque, Plastique",
      "fast": false,
      "clean": true,
      "curved": false,
      "lubrication": false
    }
  },
  "B-15": {
    "ref": "B-15",
    "pack": "Boite de 5",
    "name": "Coupe bois, contreplaque et plastiques",
    "material": "HCS",
    "tpi": "12",
    "length": "76 mm",
    "usefulLength": "Non doc.",
    "toothType": "B",
    "boschEquiv": "T119B",
    "makitaCode": "A-85678",
    "cutThickness": "Bois / plastiques : 3 a 35 mm",
    "observations": "Denture moyenne-fine pour bois, contreplaque et plastiques, bon compromis vitesse/proprete.",
    "observationsHtml": "<b>Observations.</b> Denture moyenne-fine pour bois, contreplaque et plastiques, bon compromis vitesse/proprete. <b>Code de commande Makita :</b> <span class=\"mono\">A-85678</span>.",
    "materials": [
      "softwood",
      "plywood",
      "plastic"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": false,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L11.5 6 L17.0 23 L22.5 6 L28.0 23 L33.5 6 L39.0 23 L44.5 6 L50.0 23 L55.5 6 L61.0 23 L66.5 6 L72.0 23 L77.5 6 L83.0 23 L88.5 6 L94.0 23 L99.5 6 L105.0 23 L110.5 6 L116.0 23 L121.5 6 L127.0 23 L132.5 6 L138.0 23",
    "family": "wood-plywood-plastics",
    "summary": {
      "ref": "B-15",
      "material": "HCS",
      "tpi": "12",
      "length": "76 mm",
      "mainMaterials": "Bois tendre, Contreplaque, Plastique",
      "fast": false,
      "clean": true,
      "curved": false,
      "lubrication": false
    }
  },
  "B-16": {
    "ref": "B-16",
    "pack": "Boite de 5",
    "name": "Coupe bois et plastiques",
    "material": "HCS",
    "tpi": "6",
    "length": "100 mm",
    "usefulLength": "Non doc.",
    "toothType": "C",
    "boschEquiv": "T144D",
    "makitaCode": "B-01292",
    "cutThickness": "Bois / plastiques : jusqu'a 65 mm",
    "observations": "Denture rectifiee a 6 TPI pour une coupe rapide et propre du bois. Incluse dans le coffret A-86898.",
    "observationsHtml": "<b>Observations.</b> Denture rectifiee a 6 TPI pour une coupe rapide et propre du bois. Incluse dans le coffret A-86898. <b>Code de commande Makita :</b> <span class=\"mono\">B-01292</span>.",
    "materials": [
      "softwood",
      "plastic"
    ],
    "features": {
      "fast": true,
      "clean": false,
      "curved": false,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L17.0 6 L28.0 23 L39.0 6 L50.0 23 L61.0 6 L72.0 23 L83.0 6 L94.0 23 L105.0 6 L116.0 23 L127.0 6 L138.0 23",
    "family": "wood-plywood-plastics",
    "summary": {
      "ref": "B-16",
      "material": "HCS",
      "tpi": "6",
      "length": "100 mm",
      "mainMaterials": "Bois tendre, Plastique",
      "fast": true,
      "clean": false,
      "curved": false,
      "lubrication": false
    }
  },
  "B-16L": {
    "ref": "B-16L",
    "pack": "Boite de 5",
    "name": "Materiaux epais",
    "material": "HCS",
    "tpi": "6",
    "length": "150 mm",
    "usefulLength": "Non doc.",
    "toothType": "C",
    "boschEquiv": "-",
    "makitaCode": "792730-4",
    "cutThickness": "Materiaux epais (lame longue 150 mm)",
    "observations": "Version longue (150 mm) de la B-16 pour les materiaux tres epais.",
    "observationsHtml": "<b>Observations.</b> Version longue (150 mm) de la B-16 pour les materiaux tres epais. <b>Code de commande Makita :</b> <span class=\"mono\">792730-4</span>.",
    "materials": [
      "softwood",
      "plastic"
    ],
    "features": {
      "fast": true,
      "clean": false,
      "curved": false,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L17.0 6 L28.0 23 L39.0 6 L50.0 23 L61.0 6 L72.0 23 L83.0 6 L94.0 23 L105.0 6 L116.0 23 L127.0 6 L138.0 23",
    "family": "wood-plywood-plastics",
    "summary": {
      "ref": "B-16L",
      "material": "HCS",
      "tpi": "6",
      "length": "150 mm",
      "mainMaterials": "Bois tendre, Plastique",
      "fast": true,
      "clean": false,
      "curved": false,
      "lubrication": false
    }
  },
  "B-17": {
    "ref": "B-17",
    "pack": "Boite de 5",
    "name": "Coupe chantournee bois, contreplaque, plastiques",
    "material": "HCS",
    "tpi": "6",
    "length": "100 mm",
    "usefulLength": "Non doc.",
    "toothType": "C",
    "boschEquiv": "T244D",
    "makitaCode": "B-01301",
    "cutThickness": null,
    "observations": "Corps etroit pour coupe chantournee (courbes) rapide dans le bois et les plastiques.",
    "observationsHtml": "<b>Observations.</b> Corps etroit pour coupe chantournee (courbes) rapide dans le bois et les plastiques. <b>Code de commande Makita :</b> <span class=\"mono\">B-01301</span>.",
    "materials": [
      "softwood",
      "plywood",
      "plastic"
    ],
    "features": {
      "fast": true,
      "clean": false,
      "curved": true,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L17.0 6 L28.0 23 L39.0 6 L50.0 23 L61.0 6 L72.0 23 L83.0 6 L94.0 23 L105.0 6 L116.0 23 L127.0 6 L138.0 23",
    "family": "wood-plywood-plastics",
    "summary": {
      "ref": "B-17",
      "material": "HCS",
      "tpi": "6",
      "length": "100 mm",
      "mainMaterials": "Bois tendre, Contreplaque, Plastique",
      "fast": true,
      "clean": false,
      "curved": true,
      "lubrication": false
    }
  },
  "B-18": {
    "ref": "B-18",
    "pack": "Boite de 5",
    "name": "Coupe chantournee de finition bois et plastiques",
    "material": "HCS",
    "tpi": "14",
    "length": "77 mm",
    "usefulLength": "Non doc.",
    "toothType": "B",
    "boschEquiv": "T119BO",
    "makitaCode": "A-85709",
    "cutThickness": "Bois / plastiques : 2 a 35 mm",
    "observations": "Denture fine et corps etroit pour des courbes serrees et une finition soignee.",
    "observationsHtml": "<b>Observations.</b> Denture fine et corps etroit pour des courbes serrees et une finition soignee. <b>Code de commande Makita :</b> <span class=\"mono\">A-85709</span>.",
    "materials": [
      "softwood",
      "plywood",
      "plastic"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": true,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L10.7 6 L15.4 23 L20.1 6 L24.9 23 L29.6 6 L34.3 23 L39.0 6 L43.7 23 L48.4 6 L53.1 23 L57.9 6 L62.6 23 L67.3 6 L72.0 23 L76.7 6 L81.4 23 L86.1 6 L90.9 23 L95.6 6 L100.3 23 L105.0 6 L109.7 23 L114.4 6 L119.1 23 L123.9 6 L128.6 23 L133.3 6 L138.0 23",
    "family": "wood-plywood-plastics",
    "summary": {
      "ref": "B-18",
      "material": "HCS",
      "tpi": "14",
      "length": "77 mm",
      "mainMaterials": "Bois tendre, Contreplaque, Plastique",
      "fast": false,
      "clean": true,
      "curved": true,
      "lubrication": false
    }
  },
  "B-19": {
    "ref": "B-19",
    "pack": "Boite de 5",
    "name": "Coupe bois, contreplaque et plastiques",
    "material": "HCS",
    "tpi": "12",
    "length": "90 mm",
    "usefulLength": "Non doc.",
    "toothType": "-",
    "boschEquiv": "-",
    "makitaCode": "792471-2",
    "cutThickness": null,
    "observations": "Denture moyenne-fine, bonne proprete sur bois, contreplaque et plastiques.",
    "observationsHtml": "<b>Observations.</b> Denture moyenne-fine, bonne proprete sur bois, contreplaque et plastiques. <b>Code de commande Makita :</b> <span class=\"mono\">792471-2</span>.",
    "materials": [
      "softwood",
      "plywood",
      "plastic"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": false,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L11.5 6 L17.0 23 L22.5 6 L28.0 23 L33.5 6 L39.0 23 L44.5 6 L50.0 23 L55.5 6 L61.0 23 L66.5 6 L72.0 23 L77.5 6 L83.0 23 L88.5 6 L94.0 23 L99.5 6 L105.0 23 L110.5 6 L116.0 23 L121.5 6 L127.0 23 L132.5 6 L138.0 23",
    "family": "wood-plywood-plastics",
    "summary": {
      "ref": "B-19",
      "material": "HCS",
      "tpi": "12",
      "length": "90 mm",
      "mainMaterials": "Bois tendre, Contreplaque, Plastique",
      "fast": false,
      "clean": true,
      "curved": false,
      "lubrication": false
    }
  },
  "B-19S": {
    "ref": "B-19S",
    "pack": "Boite de 5",
    "name": "Coupe bois, contreplaque et plastiques (court)",
    "material": "HCS",
    "tpi": "12",
    "length": "67 mm",
    "usefulLength": "Non doc.",
    "toothType": "-",
    "boschEquiv": "-",
    "makitaCode": "B-04933",
    "cutThickness": null,
    "observations": "Version courte (67 mm) pour materiaux fins, denture 12 TPI.",
    "observationsHtml": "<b>Observations.</b> Version courte (67 mm) pour materiaux fins, denture 12 TPI. <b>Code de commande Makita :</b> <span class=\"mono\">B-04933</span>.",
    "materials": [
      "softwood",
      "plywood",
      "plastic"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": false,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L11.5 6 L17.0 23 L22.5 6 L28.0 23 L33.5 6 L39.0 23 L44.5 6 L50.0 23 L55.5 6 L61.0 23 L66.5 6 L72.0 23 L77.5 6 L83.0 23 L88.5 6 L94.0 23 L99.5 6 L105.0 23 L110.5 6 L116.0 23 L121.5 6 L127.0 23 L132.5 6 L138.0 23",
    "family": "wood-plywood-plastics",
    "summary": {
      "ref": "B-19S",
      "material": "HCS",
      "tpi": "12",
      "length": "67 mm",
      "mainMaterials": "Bois tendre, Contreplaque, Plastique",
      "fast": false,
      "clean": true,
      "curved": false,
      "lubrication": false
    }
  },
  "B-50": {
    "ref": "B-50",
    "pack": "Boite de 5",
    "name": "Bois et plastiques, coupe nette et rapide (Super Express)",
    "material": "HCS",
    "tpi": "8.5 - 10.6",
    "length": "75 mm",
    "usefulLength": "73 mm",
    "toothType": "D",
    "boschEquiv": "TA234X",
    "makitaCode": "B-06460",
    "cutThickness": "Bois / contreplaque / agglomere / PVC : 5 a 50 mm",
    "observations": "Gamme Super Express : corps a meulage conique et triple affutage des dents (denture progressive type japonais). Coupe a la fois tres nette et tres rapide, ideale sur outil sans fil. Pas 2,4 mm.",
    "observationsHtml": "<b>Observations.</b> Gamme Super Express : corps a meulage conique et triple affutage des dents (denture progressive type japonais). Coupe a la fois tres nette et tres rapide, ideale sur outil sans fil. Pas 2,4 mm. <b>Code de commande Makita :</b> <span class=\"mono\">B-06460</span>.",
    "materials": [
      "softwood",
      "hardwood",
      "plywood",
      "mdf-particleboard",
      "pvc",
      "plastic"
    ],
    "features": {
      "fast": true,
      "clean": true,
      "curved": false,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L12.6 6 L19.2 23 L25.8 6 L32.4 23 L39.0 6 L45.6 23 L52.2 6 L58.8 23 L65.4 6 L72.0 23 L78.6 6 L85.2 23 L91.8 6 L98.4 23 L105.0 6 L111.6 23 L118.2 6 L124.8 23 L131.4 6 L138.0 23",
    "family": "wood-plywood-plastics",
    "summary": {
      "ref": "B-50",
      "material": "HCS",
      "tpi": "8.5 - 10.6",
      "length": "75 mm",
      "mainMaterials": "Bois tendre, Bois dur, Contreplaque, MDF / Agglomere, ...",
      "fast": true,
      "clean": true,
      "curved": false,
      "lubrication": false
    }
  },
  "B-21": {
    "ref": "B-21",
    "pack": "Boite de 5",
    "name": "Metaux non ferreux, dont aluminium",
    "material": "HCS",
    "tpi": "12",
    "length": "100 mm",
    "usefulLength": "Non doc.",
    "toothType": "E",
    "boschEquiv": "-",
    "makitaCode": "B-01317",
    "cutThickness": "Metaux non ferreux / aluminium",
    "observations": "Denture a depouille conique (12 TPI) pour les metaux non ferreux et l'aluminium. Huile de coupe conseillee.",
    "observationsHtml": "<b>Observations.</b> Denture a depouille conique (12 TPI) pour les metaux non ferreux et l'aluminium. Huile de coupe conseillee. <b>Code de commande Makita :</b> <span class=\"mono\">B-01317</span>.",
    "materials": [
      "non-ferrous-metal",
      "aluminum",
      "plastic"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": false,
      "straight": true,
      "lubrication": true
    },
    "sawPath": "M6 23 L11.5 6 L17.0 23 L22.5 6 L28.0 23 L33.5 6 L39.0 23 L44.5 6 L50.0 23 L55.5 6 L61.0 23 L66.5 6 L72.0 23 L77.5 6 L83.0 23 L88.5 6 L94.0 23 L99.5 6 L105.0 23 L110.5 6 L116.0 23 L121.5 6 L127.0 23 L132.5 6 L138.0 23",
    "family": "plastics-non-ferrous-metals",
    "summary": {
      "ref": "B-21",
      "material": "HCS",
      "tpi": "12",
      "length": "100 mm",
      "mainMaterials": "Non ferreux, Aluminium, Plastique",
      "fast": false,
      "clean": true,
      "curved": false,
      "lubrication": true
    }
  },
  "B-23": {
    "ref": "B-23",
    "pack": "Boite de 5",
    "name": "Plastiques, contreplaque, stratifies, placages",
    "material": "HCS",
    "tpi": "14",
    "length": "75 mm",
    "usefulLength": "Non doc.",
    "toothType": "-",
    "boschEquiv": "T118B",
    "makitaCode": "B-01339",
    "cutThickness": "3 a 35 mm",
    "observations": "Denture fine pour placages decoratifs, stratifies et plastiques avec une coupe propre.",
    "observationsHtml": "<b>Observations.</b> Denture fine pour placages decoratifs, stratifies et plastiques avec une coupe propre. <b>Code de commande Makita :</b> <span class=\"mono\">B-01339</span>.",
    "materials": [
      "plastic",
      "plywood",
      "laminate-flooring",
      "softwood"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": false,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L10.7 6 L15.4 23 L20.1 6 L24.9 23 L29.6 6 L34.3 23 L39.0 6 L43.7 23 L48.4 6 L53.1 23 L57.9 6 L62.6 23 L67.3 6 L72.0 23 L76.7 6 L81.4 23 L86.1 6 L90.9 23 L95.6 6 L100.3 23 L105.0 6 L109.7 23 L114.4 6 L119.1 23 L123.9 6 L128.6 23 L133.3 6 L138.0 23",
    "family": "plastics-non-ferrous-metals",
    "summary": {
      "ref": "B-23",
      "material": "HCS",
      "tpi": "14",
      "length": "75 mm",
      "mainMaterials": "Plastique, Contreplaque, Stratifie / Parquet, Bois tendre",
      "fast": false,
      "clean": true,
      "curved": false,
      "lubrication": false
    }
  },
  "B-25": {
    "ref": "B-25",
    "pack": "Boite de 5",
    "name": "Bois, plastiques et acier doux",
    "material": "HCS",
    "tpi": "9",
    "length": "100 mm",
    "usefulLength": "Non doc.",
    "toothType": "-",
    "boschEquiv": "-",
    "makitaCode": "B-01345",
    "cutThickness": null,
    "observations": "Lame mixte bois / plastiques / acier doux pour usages combines. Huile de coupe conseillee sur acier.",
    "observationsHtml": "<b>Observations.</b> Lame mixte bois / plastiques / acier doux pour usages combines. Huile de coupe conseillee sur acier. <b>Code de commande Makita :</b> <span class=\"mono\">B-01345</span>.",
    "materials": [
      "softwood",
      "plastic",
      "steel"
    ],
    "features": {
      "fast": true,
      "clean": false,
      "curved": false,
      "straight": true,
      "lubrication": true
    },
    "sawPath": "M6 23 L13.3 6 L20.7 23 L28.0 6 L35.3 23 L42.7 6 L50.0 23 L57.3 6 L64.7 23 L72.0 6 L79.3 23 L86.7 6 L94.0 23 L101.3 6 L108.7 23 L116.0 6 L123.3 23 L130.7 6 L138.0 23",
    "family": "plastics-non-ferrous-metals",
    "summary": {
      "ref": "B-25",
      "material": "HCS",
      "tpi": "9",
      "length": "100 mm",
      "mainMaterials": "Bois tendre, Plastique, Acier doux",
      "fast": true,
      "clean": false,
      "curved": false,
      "lubrication": true
    }
  },
  "B-22": {
    "ref": "B-22",
    "pack": "Boite de 5",
    "name": "Inox, plastiques durs, metaux non ferreux",
    "material": "HSS",
    "tpi": "24",
    "length": "50 mm",
    "usefulLength": "Non doc.",
    "toothType": "B",
    "boschEquiv": "T118A",
    "makitaCode": "B-01323",
    "cutThickness": "Inox : 1 a 3 mm ; plastiques durs",
    "observations": "Denture fine HSS (24 TPI) pour acier doux, inox fin et plastiques durs. Huile de coupe recommandee.",
    "observationsHtml": "<b>Observations.</b> Denture fine HSS (24 TPI) pour acier doux, inox fin et plastiques durs. Huile de coupe recommandee. <b>Code de commande Makita :</b> <span class=\"mono\">B-01323</span>.",
    "materials": [
      "stainless-steel",
      "steel",
      "non-ferrous-metal",
      "plastic"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": false,
      "straight": true,
      "lubrication": true
    },
    "sawPath": "M6 23 L9.7 6 L13.3 23 L17.0 6 L20.7 23 L24.3 6 L28.0 23 L31.7 6 L35.3 23 L39.0 6 L42.7 23 L46.3 6 L50.0 23 L53.7 6 L57.3 23 L61.0 6 L64.7 23 L68.3 6 L72.0 23 L75.7 6 L79.3 23 L83.0 6 L86.7 23 L90.3 6 L94.0 23 L97.7 6 L101.3 23 L105.0 6 L108.7 23 L112.3 6 L116.0 23 L119.7 6 L123.3 23 L127.0 6 L130.7 23 L134.3 6 L138.0 23",
    "family": "metal-steel-stainless",
    "summary": {
      "ref": "B-22",
      "material": "HSS",
      "tpi": "24",
      "length": "50 mm",
      "mainMaterials": "Inox, Acier doux, Non ferreux, Plastique",
      "fast": false,
      "clean": true,
      "curved": false,
      "lubrication": true
    }
  },
  "B-22S": {
    "ref": "B-22S",
    "pack": "Boite de 5",
    "name": "Contreplaque, metaux legers et non ferreux (court)",
    "material": "HSS",
    "tpi": "24",
    "length": "57 mm",
    "usefulLength": "Non doc.",
    "toothType": "B",
    "boschEquiv": "-",
    "makitaCode": "B-04949",
    "cutThickness": "Toles fines",
    "observations": "Version courte de la B-22 pour toles fines et metaux non ferreux.",
    "observationsHtml": "<b>Observations.</b> Version courte de la B-22 pour toles fines et metaux non ferreux. <b>Code de commande Makita :</b> <span class=\"mono\">B-04949</span>.",
    "materials": [
      "steel",
      "non-ferrous-metal",
      "plywood"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": false,
      "straight": true,
      "lubrication": true
    },
    "sawPath": "M6 23 L9.7 6 L13.3 23 L17.0 6 L20.7 23 L24.3 6 L28.0 23 L31.7 6 L35.3 23 L39.0 6 L42.7 23 L46.3 6 L50.0 23 L53.7 6 L57.3 23 L61.0 6 L64.7 23 L68.3 6 L72.0 23 L75.7 6 L79.3 23 L83.0 6 L86.7 23 L90.3 6 L94.0 23 L97.7 6 L101.3 23 L105.0 6 L108.7 23 L112.3 6 L116.0 23 L119.7 6 L123.3 23 L127.0 6 L130.7 23 L134.3 6 L138.0 23",
    "family": "metal-steel-stainless",
    "summary": {
      "ref": "B-22S",
      "material": "HSS",
      "tpi": "24",
      "length": "57 mm",
      "mainMaterials": "Acier doux, Non ferreux, Contreplaque",
      "fast": false,
      "clean": true,
      "curved": false,
      "lubrication": true
    }
  },
  "B-24": {
    "ref": "B-24",
    "pack": "Boite de 5",
    "name": "Acier doux, plastiques",
    "material": "HSS",
    "tpi": "32",
    "length": "100 mm",
    "usefulLength": "Non doc.",
    "toothType": "-",
    "boschEquiv": "-",
    "makitaCode": "792475-4",
    "cutThickness": "Toles minces (denture tres fine)",
    "observations": "Denture tres fine (32 TPI) pour toles minces en acier doux. Huile de coupe recommandee.",
    "observationsHtml": "<b>Observations.</b> Denture tres fine (32 TPI) pour toles minces en acier doux. Huile de coupe recommandee. <b>Code de commande Makita :</b> <span class=\"mono\">792475-4</span>.",
    "materials": [
      "steel",
      "plastic"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": false,
      "straight": true,
      "lubrication": true
    },
    "sawPath": "M6 23 L9.7 6 L13.3 23 L17.0 6 L20.7 23 L24.3 6 L28.0 23 L31.7 6 L35.3 23 L39.0 6 L42.7 23 L46.3 6 L50.0 23 L53.7 6 L57.3 23 L61.0 6 L64.7 23 L68.3 6 L72.0 23 L75.7 6 L79.3 23 L83.0 6 L86.7 23 L90.3 6 L94.0 23 L97.7 6 L101.3 23 L105.0 6 L108.7 23 L112.3 6 L116.0 23 L119.7 6 L123.3 23 L127.0 6 L130.7 23 L134.3 6 L138.0 23",
    "family": "metal-steel-stainless",
    "summary": {
      "ref": "B-24",
      "material": "HSS",
      "tpi": "32",
      "length": "100 mm",
      "mainMaterials": "Acier doux, Plastique",
      "fast": false,
      "clean": true,
      "curved": false,
      "lubrication": true
    }
  },
  "B-26": {
    "ref": "B-26",
    "pack": "Boite de 5",
    "name": "Coupe chantournee bois dur, plastiques, alu, acier doux",
    "material": "HSS",
    "tpi": "9",
    "length": "100 mm",
    "usefulLength": "Non doc.",
    "toothType": "-",
    "boschEquiv": "-",
    "makitaCode": "B-01351",
    "cutThickness": null,
    "observations": "Lame HSS chantournee pour materiaux mixtes (bois dur, plastiques, alu, acier doux).",
    "observationsHtml": "<b>Observations.</b> Lame HSS chantournee pour materiaux mixtes (bois dur, plastiques, alu, acier doux). <b>Code de commande Makita :</b> <span class=\"mono\">B-01351</span>.",
    "materials": [
      "hardwood",
      "plastic",
      "aluminum",
      "steel"
    ],
    "features": {
      "fast": true,
      "clean": false,
      "curved": true,
      "straight": true,
      "lubrication": true
    },
    "sawPath": "M6 23 L13.3 6 L20.7 23 L28.0 6 L35.3 23 L42.7 6 L50.0 23 L57.3 6 L64.7 23 L72.0 6 L79.3 23 L86.7 6 L94.0 23 L101.3 6 L108.7 23 L116.0 6 L123.3 23 L130.7 6 L138.0 23",
    "family": "metal-steel-stainless",
    "summary": {
      "ref": "B-26",
      "material": "HSS",
      "tpi": "9",
      "length": "100 mm",
      "mainMaterials": "Bois dur, Plastique, Aluminium, Acier doux",
      "fast": true,
      "clean": false,
      "curved": true,
      "lubrication": true
    }
  },
  "B-27": {
    "ref": "B-27",
    "pack": "Boite de 5",
    "name": "Coupe chantournee metaux non ferreux (<= 3 mm)",
    "material": "HCS",
    "tpi": "24",
    "length": "100 mm",
    "usefulLength": "Non doc.",
    "toothType": "-",
    "boschEquiv": "-",
    "makitaCode": "B-01367",
    "cutThickness": "Metaux non ferreux jusqu'a 3 mm",
    "observations": "Coupe chantournee fine dans les metaux non ferreux jusqu'a 3 mm d'epaisseur.",
    "observationsHtml": "<b>Observations.</b> Coupe chantournee fine dans les metaux non ferreux jusqu'a 3 mm d'epaisseur. <b>Code de commande Makita :</b> <span class=\"mono\">B-01367</span>.",
    "materials": [
      "non-ferrous-metal",
      "aluminum"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": true,
      "straight": true,
      "lubrication": true
    },
    "sawPath": "M6 23 L9.7 6 L13.3 23 L17.0 6 L20.7 23 L24.3 6 L28.0 23 L31.7 6 L35.3 23 L39.0 6 L42.7 23 L46.3 6 L50.0 23 L53.7 6 L57.3 23 L61.0 6 L64.7 23 L68.3 6 L72.0 23 L75.7 6 L79.3 23 L83.0 6 L86.7 23 L90.3 6 L94.0 23 L97.7 6 L101.3 23 L105.0 6 L108.7 23 L112.3 6 L116.0 23 L119.7 6 L123.3 23 L127.0 6 L130.7 23 L134.3 6 L138.0 23",
    "family": "metal-steel-stainless",
    "summary": {
      "ref": "B-27",
      "material": "HCS",
      "tpi": "24",
      "length": "100 mm",
      "mainMaterials": "Non ferreux, Aluminium",
      "fast": false,
      "clean": true,
      "curved": true,
      "lubrication": true
    }
  },
  "B-28": {
    "ref": "B-28",
    "pack": "Boite de 5",
    "name": "Acier doux (lame courte)",
    "material": "HSS",
    "tpi": "16",
    "length": "64 mm",
    "usefulLength": "Non doc.",
    "toothType": "-",
    "boschEquiv": "-",
    "makitaCode": "A-80391",
    "cutThickness": null,
    "observations": "Lame courte HSS (16 TPI) pour la coupe du metal. Huile de coupe recommandee.",
    "observationsHtml": "<b>Observations.</b> Lame courte HSS (16 TPI) pour la coupe du metal. Huile de coupe recommandee. <b>Code de commande Makita :</b> <span class=\"mono\">A-80391</span>.",
    "materials": [
      "steel",
      "non-ferrous-metal"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": false,
      "straight": true,
      "lubrication": true
    },
    "sawPath": "M6 23 L10.1 6 L14.2 23 L18.4 6 L22.5 23 L26.6 6 L30.8 23 L34.9 6 L39.0 23 L43.1 6 L47.2 23 L51.4 6 L55.5 23 L59.6 6 L63.8 23 L67.9 6 L72.0 23 L76.1 6 L80.2 23 L84.4 6 L88.5 23 L92.6 6 L96.8 23 L100.9 6 L105.0 23 L109.1 6 L113.2 23 L117.4 6 L121.5 23 L125.6 6 L129.8 23 L133.9 6 L138.0 23",
    "family": "metal-steel-stainless",
    "summary": {
      "ref": "B-28",
      "material": "HSS",
      "tpi": "16",
      "length": "64 mm",
      "mainMaterials": "Acier doux, Non ferreux",
      "fast": false,
      "clean": true,
      "curved": false,
      "lubrication": true
    }
  },
  "B-29": {
    "ref": "B-29",
    "pack": "Boite de 5",
    "name": "Coupe chantournee dans le bois (lame courte)",
    "material": "HCS",
    "tpi": "16",
    "length": "41 mm",
    "usefulLength": "Non doc.",
    "toothType": "-",
    "boschEquiv": "-",
    "makitaCode": "A-80400",
    "cutThickness": null,
    "observations": "Lame tres courte (41 mm) pour coupe chantournee fine dans le bois.",
    "observationsHtml": "<b>Observations.</b> Lame tres courte (41 mm) pour coupe chantournee fine dans le bois. <b>Code de commande Makita :</b> <span class=\"mono\">A-80400</span>.",
    "materials": [
      "softwood",
      "plywood"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": true,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L10.1 6 L14.2 23 L18.4 6 L22.5 23 L26.6 6 L30.8 23 L34.9 6 L39.0 23 L43.1 6 L47.2 23 L51.4 6 L55.5 23 L59.6 6 L63.8 23 L67.9 6 L72.0 23 L76.1 6 L80.2 23 L84.4 6 L88.5 23 L92.6 6 L96.8 23 L100.9 6 L105.0 23 L109.1 6 L113.2 23 L117.4 6 L121.5 23 L125.6 6 L129.8 23 L133.9 6 L138.0 23",
    "family": "metal-steel-stainless",
    "summary": {
      "ref": "B-29",
      "material": "HCS",
      "tpi": "16",
      "length": "41 mm",
      "mainMaterials": "Bois tendre, Contreplaque",
      "fast": false,
      "clean": true,
      "curved": true,
      "lubrication": false
    }
  },
  "B-30": {
    "ref": "B-30",
    "pack": "Boite de 5",
    "name": "Contreplaque, metaux legers et non ferreux",
    "material": "HSS",
    "tpi": "24",
    "length": "76 mm",
    "usefulLength": "Non doc.",
    "toothType": "-",
    "boschEquiv": "-",
    "makitaCode": "B-04961",
    "cutThickness": "Toles fines",
    "observations": "Denture fine (24 TPI) pour contreplaque, metaux legers et non ferreux.",
    "observationsHtml": "<b>Observations.</b> Denture fine (24 TPI) pour contreplaque, metaux legers et non ferreux. <b>Code de commande Makita :</b> <span class=\"mono\">B-04961</span>.",
    "materials": [
      "steel",
      "non-ferrous-metal",
      "plywood"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": false,
      "straight": true,
      "lubrication": true
    },
    "sawPath": "M6 23 L9.7 6 L13.3 23 L17.0 6 L20.7 23 L24.3 6 L28.0 23 L31.7 6 L35.3 23 L39.0 6 L42.7 23 L46.3 6 L50.0 23 L53.7 6 L57.3 23 L61.0 6 L64.7 23 L68.3 6 L72.0 23 L75.7 6 L79.3 23 L83.0 6 L86.7 23 L90.3 6 L94.0 23 L97.7 6 L101.3 23 L105.0 6 L108.7 23 L112.3 6 L116.0 23 L119.7 6 L123.3 23 L127.0 6 L130.7 23 L134.3 6 L138.0 23",
    "family": "metal-steel-stainless",
    "summary": {
      "ref": "B-30",
      "material": "HSS",
      "tpi": "24",
      "length": "76 mm",
      "mainMaterials": "Acier doux, Non ferreux, Contreplaque",
      "fast": false,
      "clean": true,
      "curved": false,
      "lubrication": true
    }
  },
  "B-32": {
    "ref": "B-32",
    "pack": "Boite de 5",
    "name": "Metal, profiles et tubes",
    "material": "HSS",
    "tpi": "18",
    "length": "100 mm",
    "usefulLength": "Non doc.",
    "toothType": "-",
    "boschEquiv": "-",
    "makitaCode": "B-10431",
    "cutThickness": null,
    "observations": "Lame HSS (18 TPI) pour la coupe du metal, des profiles et des tubes. Huile de coupe recommandee.",
    "observationsHtml": "<b>Observations.</b> Lame HSS (18 TPI) pour la coupe du metal, des profiles et des tubes. Huile de coupe recommandee. <b>Code de commande Makita :</b> <span class=\"mono\">B-10431</span>.",
    "materials": [
      "steel",
      "stainless-steel",
      "non-ferrous-metal"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": false,
      "straight": true,
      "lubrication": true
    },
    "sawPath": "M6 23 L9.7 6 L13.3 23 L17.0 6 L20.7 23 L24.3 6 L28.0 23 L31.7 6 L35.3 23 L39.0 6 L42.7 23 L46.3 6 L50.0 23 L53.7 6 L57.3 23 L61.0 6 L64.7 23 L68.3 6 L72.0 23 L75.7 6 L79.3 23 L83.0 6 L86.7 23 L90.3 6 L94.0 23 L97.7 6 L101.3 23 L105.0 6 L108.7 23 L112.3 6 L116.0 23 L119.7 6 L123.3 23 L127.0 6 L130.7 23 L134.3 6 L138.0 23",
    "family": "metal-steel-stainless",
    "summary": {
      "ref": "B-32",
      "material": "HSS",
      "tpi": "18",
      "length": "100 mm",
      "mainMaterials": "Acier doux, Inox, Non ferreux",
      "fast": false,
      "clean": true,
      "curved": false,
      "lubrication": true
    }
  },
  "B-33": {
    "ref": "B-33",
    "pack": "Boite de 5",
    "name": "Plaque metallique moyenne, tubes et profiles",
    "material": "HSS",
    "tpi": "14",
    "length": "132 mm",
    "usefulLength": "Non doc.",
    "toothType": "B",
    "boschEquiv": "-",
    "makitaCode": "B-10447",
    "cutThickness": "Plaque metallique moyenne, tubes, profiles",
    "observations": "Lame longue (132 mm) HSS pour plaques metalliques moyennes, tubes et profiles. Huile de coupe recommandee.",
    "observationsHtml": "<b>Observations.</b> Lame longue (132 mm) HSS pour plaques metalliques moyennes, tubes et profiles. Huile de coupe recommandee. <b>Code de commande Makita :</b> <span class=\"mono\">B-10447</span>.",
    "materials": [
      "steel",
      "stainless-steel",
      "non-ferrous-metal"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": false,
      "straight": true,
      "lubrication": true
    },
    "sawPath": "M6 23 L10.7 6 L15.4 23 L20.1 6 L24.9 23 L29.6 6 L34.3 23 L39.0 6 L43.7 23 L48.4 6 L53.1 23 L57.9 6 L62.6 23 L67.3 6 L72.0 23 L76.7 6 L81.4 23 L86.1 6 L90.9 23 L95.6 6 L100.3 23 L105.0 6 L109.7 23 L114.4 6 L119.1 23 L123.9 6 L128.6 23 L133.3 6 L138.0 23",
    "family": "metal-steel-stainless",
    "summary": {
      "ref": "B-33",
      "material": "HSS",
      "tpi": "14",
      "length": "132 mm",
      "mainMaterials": "Acier doux, Inox, Non ferreux",
      "fast": false,
      "clean": true,
      "curved": false,
      "lubrication": true
    }
  },
  "B-34": {
    "ref": "B-34",
    "pack": "Boite de 5",
    "name": "Metal (lame courte)",
    "material": "HSS",
    "tpi": "18",
    "length": "50 mm",
    "usefulLength": "Non doc.",
    "toothType": "-",
    "boschEquiv": "-",
    "makitaCode": "B-10453",
    "cutThickness": null,
    "observations": "Lame courte HSS (18 TPI) pour la coupe du metal sur faible epaisseur.",
    "observationsHtml": "<b>Observations.</b> Lame courte HSS (18 TPI) pour la coupe du metal sur faible epaisseur. <b>Code de commande Makita :</b> <span class=\"mono\">B-10453</span>.",
    "materials": [
      "steel",
      "stainless-steel",
      "non-ferrous-metal"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": false,
      "straight": true,
      "lubrication": true
    },
    "sawPath": "M6 23 L9.7 6 L13.3 23 L17.0 6 L20.7 23 L24.3 6 L28.0 23 L31.7 6 L35.3 23 L39.0 6 L42.7 23 L46.3 6 L50.0 23 L53.7 6 L57.3 23 L61.0 6 L64.7 23 L68.3 6 L72.0 23 L75.7 6 L79.3 23 L83.0 6 L86.7 23 L90.3 6 L94.0 23 L97.7 6 L101.3 23 L105.0 6 L108.7 23 L112.3 6 L116.0 23 L119.7 6 L123.3 23 L127.0 6 L130.7 23 L134.3 6 L138.0 23",
    "family": "metal-steel-stainless",
    "summary": {
      "ref": "B-34",
      "material": "HSS",
      "tpi": "18",
      "length": "50 mm",
      "mainMaterials": "Acier doux, Inox, Non ferreux",
      "fast": false,
      "clean": true,
      "curved": false,
      "lubrication": true
    }
  },
  "B-35": {
    "ref": "B-35",
    "pack": "Boite de 5",
    "name": "Metal epais (bi-metal, longue duree)",
    "material": "BiM",
    "tpi": "14",
    "length": "150 mm",
    "usefulLength": "Non doc.",
    "toothType": "-",
    "boschEquiv": "-",
    "makitaCode": "B-10469",
    "cutThickness": "Metal epais (lame longue 150 mm)",
    "observations": "Lame bi-metal longue (150 mm), resistante a la casse, pour metal epais. Huile de coupe recommandee.",
    "observationsHtml": "<b>Observations.</b> Lame bi-metal longue (150 mm), resistante a la casse, pour metal epais. Huile de coupe recommandee. <b>Code de commande Makita :</b> <span class=\"mono\">B-10469</span>.",
    "materials": [
      "steel",
      "stainless-steel"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": false,
      "straight": true,
      "lubrication": true
    },
    "sawPath": "M6 23 L10.7 6 L15.4 23 L20.1 6 L24.9 23 L29.6 6 L34.3 23 L39.0 6 L43.7 23 L48.4 6 L53.1 23 L57.9 6 L62.6 23 L67.3 6 L72.0 23 L76.7 6 L81.4 23 L86.1 6 L90.9 23 L95.6 6 L100.3 23 L105.0 6 L109.7 23 L114.4 6 L119.1 23 L123.9 6 L128.6 23 L133.3 6 L138.0 23",
    "family": "metal-steel-stainless",
    "summary": {
      "ref": "B-35",
      "material": "BiM",
      "tpi": "14",
      "length": "150 mm",
      "mainMaterials": "Acier doux, Inox",
      "fast": false,
      "clean": true,
      "curved": false,
      "lubrication": true
    }
  },
  "B-51": {
    "ref": "B-51",
    "pack": "Boite de 5",
    "name": "Tole et inox, coupe rapide et droite (Super Express)",
    "material": "HSS",
    "tpi": "9.8 - 18.1",
    "length": "75 mm",
    "usefulLength": "73 mm",
    "toothType": "B",
    "boschEquiv": "TA123X",
    "makitaCode": "B-06476",
    "cutThickness": "Tole : 1 a 8 mm ; inox : 1 a 3 mm",
    "observations": "Gamme Super Express : denture progressive HSS pour des coupes rapides et droites dans la tole et l'inox. Permet de couper fin et epais avec la meme lame. Huile de coupe recommandee.",
    "observationsHtml": "<b>Observations.</b> Gamme Super Express : denture progressive HSS pour des coupes rapides et droites dans la tole et l'inox. Permet de couper fin et epais avec la meme lame. Huile de coupe recommandee. <b>Code de commande Makita :</b> <span class=\"mono\">B-06476</span>.",
    "materials": [
      "steel",
      "stainless-steel"
    ],
    "features": {
      "fast": true,
      "clean": true,
      "curved": false,
      "straight": true,
      "lubrication": true
    },
    "sawPath": "M6 23 L10.7 6 L15.4 23 L20.1 6 L24.9 23 L29.6 6 L34.3 23 L39.0 6 L43.7 23 L48.4 6 L53.1 23 L57.9 6 L62.6 23 L67.3 6 L72.0 23 L76.7 6 L81.4 23 L86.1 6 L90.9 23 L95.6 6 L100.3 23 L105.0 6 L109.7 23 L114.4 6 L119.1 23 L123.9 6 L128.6 23 L133.3 6 L138.0 23",
    "family": "metal-steel-stainless",
    "summary": {
      "ref": "B-51",
      "material": "HSS",
      "tpi": "9.8 - 18.1",
      "length": "75 mm",
      "mainMaterials": "Acier doux, Inox",
      "fast": true,
      "clean": true,
      "curved": false,
      "lubrication": true
    }
  },
  "B-52": {
    "ref": "B-52",
    "pack": "Boite de 5",
    "name": "Universel bois / metal / alu / plastique (Super Express)",
    "material": "HSS",
    "tpi": "5.5 - 9.8",
    "length": "75 mm",
    "usefulLength": "73 mm",
    "toothType": "B",
    "boschEquiv": "TA345X",
    "makitaCode": "B-06482",
    "cutThickness": "Metal 3 a 8 mm ; aluminium 3 a 35 mm ; bois 5 a 50 mm",
    "observations": "Gamme Super Express : lame universelle (denture progressive HSS, pas 2,6 a 4,6 mm) pour bois, metal, aluminium et plastique, y compris bois avec residus de clous. Huile de coupe conseillee sur metal.",
    "observationsHtml": "<b>Observations.</b> Gamme Super Express : lame universelle (denture progressive HSS, pas 2,6 a 4,6 mm) pour bois, metal, aluminium et plastique, y compris bois avec residus de clous. Huile de coupe conseillee sur metal. <b>Code de commande Makita :</b> <span class=\"mono\">B-06482</span>.",
    "materials": [
      "softwood",
      "plywood",
      "pvc",
      "plastic",
      "aluminum",
      "steel",
      "stainless-steel"
    ],
    "features": {
      "fast": true,
      "clean": false,
      "curved": false,
      "straight": true,
      "lubrication": true
    },
    "sawPath": "M6 23 L14.2 6 L22.5 23 L30.8 6 L39.0 23 L47.2 6 L55.5 23 L63.8 6 L72.0 23 L80.2 6 L88.5 23 L96.8 6 L105.0 23 L113.2 6 L121.5 23 L129.8 6 L138.0 23",
    "family": "metal-steel-stainless",
    "summary": {
      "ref": "B-52",
      "material": "HSS",
      "tpi": "5.5 - 9.8",
      "length": "75 mm",
      "mainMaterials": "Bois tendre, Contreplaque, PVC, Plastique, ...",
      "fast": true,
      "clean": false,
      "curved": false,
      "lubrication": true
    }
  },
  "B-53": {
    "ref": "B-53",
    "pack": "Boite de 5",
    "name": "Stratifie, coupe nette droite (bi-metal, longue duree)",
    "material": "BiM",
    "tpi": "15",
    "length": "82 mm",
    "usefulLength": "59 mm",
    "toothType": "D",
    "boschEquiv": "-",
    "makitaCode": "B-10970",
    "cutThickness": "Stratifie / parquet : 1,5 a 15 mm",
    "observations": "Corps a meulage conique, dents transversales pointees vers le bas pour des coupes propres et sans eclats dans le stratifie et le parquet sensibles a l'eclatement. Bi-metal longue duree sur materiaux abrasifs. Pas 1,7 mm.",
    "observationsHtml": "<b>Observations.</b> Corps a meulage conique, dents transversales pointees vers le bas pour des coupes propres et sans eclats dans le stratifie et le parquet sensibles a l'eclatement. Bi-metal longue duree sur materiaux abrasifs. Pas 1,7 mm. <b>Code de commande Makita :</b> <span class=\"mono\">B-10970</span>.",
    "materials": [
      "laminate-flooring",
      "mdf-particleboard",
      "plywood"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": true,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L10.4 6 L14.8 23 L19.2 6 L23.6 23 L28.0 6 L32.4 23 L36.8 6 L41.2 23 L45.6 6 L50.0 23 L54.4 6 L58.8 23 L63.2 6 L67.6 23 L72.0 6 L76.4 23 L80.8 6 L85.2 23 L89.6 6 L94.0 23 L98.4 6 L102.8 23 L107.2 6 L111.6 23 L116.0 6 L120.4 23 L124.8 6 L129.2 23 L133.6 6 L138.0 23",
    "family": "laminate-flooring",
    "summary": {
      "ref": "B-53",
      "material": "BiM",
      "tpi": "15",
      "length": "82 mm",
      "mainMaterials": "Stratifie / Parquet, MDF / Agglomere, Contreplaque",
      "fast": false,
      "clean": true,
      "curved": true,
      "lubrication": false
    }
  },
  "B-54": {
    "ref": "B-54",
    "pack": "Boite de 5",
    "name": "Stratifie, coupe nette en courbe (bi-metal, longue duree)",
    "material": "BiM",
    "tpi": "15",
    "length": "82 mm",
    "usefulLength": "59 mm",
    "toothType": "D",
    "boschEquiv": "-",
    "makitaCode": "B-10986",
    "cutThickness": "Stratifie / parquet : 1,5 a 15 mm",
    "observations": "Corps etroit a meulage conique, dents transversales pointees vers le bas, pour des coupes courbes particulierement propres dans le stratifie et le parquet. Bi-metal longue duree. Pas 1,4 mm.",
    "observationsHtml": "<b>Observations.</b> Corps etroit a meulage conique, dents transversales pointees vers le bas, pour des coupes courbes particulierement propres dans le stratifie et le parquet. Bi-metal longue duree. Pas 1,4 mm. <b>Code de commande Makita :</b> <span class=\"mono\">B-10986</span>.",
    "materials": [
      "laminate-flooring",
      "mdf-particleboard",
      "plywood"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": true,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 23 L10.4 6 L14.8 23 L19.2 6 L23.6 23 L28.0 6 L32.4 23 L36.8 6 L41.2 23 L45.6 6 L50.0 23 L54.4 6 L58.8 23 L63.2 6 L67.6 23 L72.0 6 L76.4 23 L80.8 6 L85.2 23 L89.6 6 L94.0 23 L98.4 6 L102.8 23 L107.2 6 L111.6 23 L116.0 6 L120.4 23 L124.8 6 L129.2 23 L133.6 6 L138.0 23",
    "family": "laminate-flooring",
    "summary": {
      "ref": "B-54",
      "material": "BiM",
      "tpi": "15",
      "length": "82 mm",
      "mainMaterials": "Stratifie / Parquet, MDF / Agglomere, Contreplaque",
      "fast": false,
      "clean": true,
      "curved": true,
      "lubrication": false
    }
  },
  "B-60": {
    "ref": "B-60",
    "pack": "Boite de 3",
    "name": "Carrelage, fibre de verre, ciment (grain carbure)",
    "material": "TCT",
    "tpi": "Sans denture (grain carbure)",
    "length": "76 mm",
    "usefulLength": "Non doc.",
    "toothType": "-",
    "boschEquiv": "-",
    "makitaCode": "B-06909",
    "cutThickness": null,
    "observations": "Lame a grain carbure (sans dents) pour materiaux abrasifs : carrelage, marbre, fibre de verre, fibrociment, ceramique. Coupe dans toutes les directions.",
    "observationsHtml": "<b>Observations.</b> Lame a grain carbure (sans dents) pour materiaux abrasifs : carrelage, marbre, fibre de verre, fibrociment, ceramique. Coupe dans toutes les directions. <b>Code de commande Makita :</b> <span class=\"mono\">B-06909</span>.",
    "materials": [
      "tile-fiberglass-cement"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": true,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 21 H138",
    "family": "special-uses",
    "summary": {
      "ref": "B-60",
      "material": "TCT",
      "tpi": "Sans denture (grain carbure)",
      "length": "76 mm",
      "mainMaterials": "Carrelage / Fibre",
      "fast": false,
      "clean": true,
      "curved": true,
      "lubrication": false
    }
  },
  "B-61": {
    "ref": "B-61",
    "pack": "Boite de 3",
    "name": "Carrelage, fibre de verre, ciment (grain carbure)",
    "material": "TCT",
    "tpi": "Sans denture (grain carbure)",
    "length": "100 mm",
    "usefulLength": "Non doc.",
    "toothType": "-",
    "boschEquiv": "-",
    "makitaCode": "B-06890",
    "cutThickness": null,
    "observations": "Version longue de lame a grain carbure pour materiaux abrasifs (carrelage, fibrociment, fibre de verre). Coupe omnidirectionnelle.",
    "observationsHtml": "<b>Observations.</b> Version longue de lame a grain carbure pour materiaux abrasifs (carrelage, fibrociment, fibre de verre). Coupe omnidirectionnelle. <b>Code de commande Makita :</b> <span class=\"mono\">B-06890</span>.",
    "materials": [
      "tile-fiberglass-cement"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": true,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 21 H138",
    "family": "special-uses",
    "summary": {
      "ref": "B-61",
      "material": "TCT",
      "tpi": "Sans denture (grain carbure)",
      "length": "100 mm",
      "mainMaterials": "Carrelage / Fibre",
      "fast": false,
      "clean": true,
      "curved": true,
      "lubrication": false
    }
  },
  "B-K": {
    "ref": "B-K",
    "pack": "Boite de 1",
    "name": "Lame couteau : papier, liege, cuir, mousse, caoutchouc",
    "material": "HCS",
    "tpi": "Sans denture (lame couteau)",
    "length": "Non doc.",
    "usefulLength": "Non doc.",
    "toothType": "-",
    "boschEquiv": "-",
    "makitaCode": "A-80416",
    "cutThickness": null,
    "observations": "Lame couteau lisse (sans dents) pour les materiaux souples : papier, carton, liege, cuir, mousse, caoutchouc.",
    "observationsHtml": "<b>Observations.</b> Lame couteau lisse (sans dents) pour les materiaux souples : papier, carton, liege, cuir, mousse, caoutchouc. <b>Code de commande Makita :</b> <span class=\"mono\">A-80416</span>.",
    "materials": [
      "leather-rubber-foam"
    ],
    "features": {
      "fast": false,
      "clean": true,
      "curved": true,
      "straight": true,
      "lubrication": false
    },
    "sawPath": "M6 21 H138",
    "family": "special-uses",
    "summary": {
      "ref": "B-K",
      "material": "HCS",
      "tpi": "Sans denture (lame couteau)",
      "length": "Non doc.",
      "mainMaterials": "Cuir / Mousse",
      "fast": false,
      "clean": true,
      "curved": true,
      "lubrication": false
    }
  }
};

export const bladeRefs = ["B-10","B-10S","B-11","B-12","B-13","BR-13","B-14","B-15","B-16","B-16L","B-17","B-18","B-19","B-19S","B-50","B-21","B-23","B-25","B-22","B-22S","B-24","B-26","B-27","B-28","B-29","B-30","B-32","B-33","B-34","B-35","B-51","B-52","B-53","B-54","B-60","B-61","B-K"] as const;
