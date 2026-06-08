import type { MaterialCode } from '@/types/catalog';

export const MATERIAL_COLORS: Record<MaterialCode, string> = {
  HCS: '#E8821E',
  HSS: '#1F6FB2',
  BiM: '#0E9C8A',
  TCT: '#3A3F45',
};

export const MATERIAL_LABELS: Record<string, string> = {
  'bois-tendre': 'Bois tendre',
  'bois-dur': 'Bois dur',
  contreplaque: 'Contreplaque',
  'mdf-agglomere': 'MDF / Agglomere',
  'stratifie-parquet': 'Stratifie / Parquet',
  pvc: 'PVC',
  plastique: 'Plastique',
  aluminium: 'Aluminium',
  acier: 'Acier / Acier doux',
  inox: 'Inox',
  'metaux-non-ferreux': 'Metaux non ferreux',
  'carrelage-fibre-ciment': 'Carrelage / Fibre de verre / Ciment',
  'cuir-mousse': 'Cuir / Caoutchouc / Carton / Mousse',
};
