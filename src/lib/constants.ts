import type { CutMaterialKey, MaterialCode } from '@/types/catalog';

export const MATERIAL_COLORS: Record<MaterialCode, string> = {
  HCS: '#E8821E',
  HSS: '#1F6FB2',
  BiM: '#0E9C8A',
  TCT: '#3A3F45',
};

/** Dev keys → user-facing French labels (printed in the catalog). */
export const MATERIAL_LABELS: Record<CutMaterialKey, string> = {
  softwood: 'Bois tendre',
  hardwood: 'Bois dur',
  plywood: 'Contreplaqué',
  'mdf-particleboard': 'MDF / Aggloméré',
  'laminate-flooring': 'Stratifié / Parquet',
  pvc: 'PVC',
  plastic: 'Plastique',
  aluminum: 'Aluminium',
  steel: 'Acier / Acier doux',
  'stainless-steel': 'Inox',
  'non-ferrous-metal': 'Métaux non ferreux',
  'tile-fiberglass-cement': 'Carrelage / Fibre de verre / Ciment',
  'leather-rubber-foam': 'Cuir / Caoutchouc / Carton / Mousse',
};
