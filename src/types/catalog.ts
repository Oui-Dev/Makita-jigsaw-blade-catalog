export type MaterialCode = 'HCS' | 'HSS' | 'BiM' | 'TCT';

export type IconKey =
  | 'fast-cut'
  | 'clean-cut'
  | 'curved-cut'
  | 'straight-cut'
  | 'lubrication'
  | 'tpi'
  | 'blade-length'
  | 'cut-thickness'
  | 'tooth-type'
  | CutMaterialKey;

export type CutMaterialKey =
  | 'softwood'
  | 'hardwood'
  | 'plywood'
  | 'mdf-particleboard'
  | 'laminate-flooring'
  | 'pvc'
  | 'plastic'
  | 'aluminum'
  | 'steel'
  | 'stainless-steel'
  | 'non-ferrous-metal'
  | 'tile-fiberglass-cement'
  | 'leather-rubber-foam';

export type FamilySlug =
  | 'wood-plywood-plastics'
  | 'plastics-non-ferrous-metals'
  | 'metal-steel-stainless'
  | 'laminate-flooring'
  | 'special-uses';

export interface BladeFeatures {
  fast: boolean;
  clean: boolean;
  curved: boolean;
  straight: boolean;
  lubrication: boolean;
}

export interface SummaryRow {
  ref: string;
  material: string;
  tpi: string;
  length: string;
  mainMaterials: string;
  fast: boolean;
  clean: boolean;
  curved: boolean;
  lubrication: boolean;
}

export interface BladeRecord {
  ref: string;
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
  materials: CutMaterialKey[];
  features: BladeFeatures;
  sawPath: string;
  family: FamilySlug;
  summary: SummaryRow;
}

export interface SectionHeadData {
  num: string;
  title: string;
  desc: string;
}

export type PageBlock = { kind: 'blade'; ref: string };

export type DocumentPage =
  | { type: 'cover' }
  | { type: 'legend' }
  | { type: 'summary' }
  | { type: 'usage-index' }
  | {
      type: 'details';
      blocks: PageBlock[];
      sectionHead?: SectionHeadData;
    };
