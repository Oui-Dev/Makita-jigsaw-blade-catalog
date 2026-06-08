import { bladeRefs } from '@/data/blades';
import type { DocumentPage } from '@/types/catalog';

const BLADES_PER_PAGE = 4;

function chunk<T>(arr: readonly T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    pages.push([...arr.slice(i, i + size)]);
  }
  return pages;
}

const detailPages: DocumentPage[] = chunk(bladeRefs, BLADES_PER_PAGE).map((refs, i) => ({
  type: 'details' as const,
  blocks: refs.map((ref) => ({ kind: 'blade' as const, ref })),
  sectionHead:
    i === 0
      ? {
          num: '03',
          title: 'Fiches detaillees par reference',
          desc: 'Une fiche complete par lame, par ordre de reference.',
        }
      : undefined,
}));

export const documentPages: DocumentPage[] = [
  { type: 'cover' },
  { type: 'legend' },
  { type: 'summary' },
  ...detailPages,
  { type: 'usage-index' },
];
