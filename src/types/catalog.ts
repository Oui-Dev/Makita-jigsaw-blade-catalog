export type MaterialCode = 'HCS' | 'HSS' | 'BiM' | 'TCT';

export interface BladeFeatures {
  rapide: boolean;
  propre: boolean;
  courbe: boolean;
  droite: boolean;
  lubrif: boolean;
}

export interface SummaryRow {
  ref: string;
  material: string;
  tpi: string;
  length: string;
  mainMaterials: string;
  rapide: boolean;
  propre: boolean;
  courbe: boolean;
  lubrif: boolean;
}

export interface BladeRecord {
  ref: string;
  pack: string;
  name: string;
  material: string;
  tpi: string;
  length: string;
  usefulLength: string;
  toothType: string;
  boschEquiv: string;
  makitaCode: string;
  cutThickness: string | null;
  observations: string;
  observationsHtml: string;
  materials: string[];
  features: BladeFeatures;
  sawPath: string;
  family: string;
  summary?: SummaryRow;
}

export interface SectionHeadData {
  num: string;
  title: string;
  desc: string;
}

export type PageBlock =
  | { kind: 'family'; name: string; slug: string; count: string }
  | { kind: 'blade'; ref: string };

export type DocumentPage =
  | { type: 'cover' }
  | { type: 'legend' }
  | { type: 'summary' }
  | { type: 'usage-index' }
  | {
      type: 'details';
      pad: boolean;
      blocks: PageBlock[];
      sectionHead?: SectionHeadData;
    };
