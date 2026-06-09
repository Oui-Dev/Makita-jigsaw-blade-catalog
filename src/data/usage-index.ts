import packageJson from '../../package.json';

export const usageIndex = {
  entries: [
    {
      title: 'Bois',
      iconKey: 'softwood' as const,
      refs: ['B-8', 'B-10', 'B-10S', 'B-11', 'B-12', 'B-13', 'BR-13', 'B-14', 'B-15', 'B-16', 'B-16L', 'B-17', 'B-18', 'B-19', 'B-19S', 'B-23', 'B-25', 'B-26', 'B-28', 'B-29', 'B-50', 'B-52', 'L-1', 'L-2', 'L-10', 'P-49622', 'No.58', 'No.59'],
    },
    {
      title: 'Contreplaqué',
      iconKey: 'plywood' as const,
      refs: ['B-8', 'B-10', 'B-10S', 'B-11', 'B-12', 'B-13', 'BR-13', 'B-14', 'B-15', 'B-17', 'B-18', 'B-19', 'B-19S', 'B-22S', 'B-23', 'B-25', 'B-26', 'B-28', 'B-29', 'B-30', 'B-50', 'B-52', 'B-53', 'B-54', 'L-1', 'L-2', 'L-10', 'P-49622', 'P-38766', 'No.58', 'No.59'],
    },
    {
      title: 'Bois (coupe propre)',
      iconKey: 'softwood' as const,
      refs: ['B-10', 'B-10S', 'B-11', 'B-12', 'B-14', 'B-15', 'B-18', 'B-19', 'B-19S', 'B-28', 'B-29', 'B-50', 'B-55', 'L-1', 'No.59'],
    },
    {
      title: 'Bois épais',
      iconKey: 'hardwood' as const,
      refs: ['B-13', 'B-16L', 'L-1', 'L-2', 'L-10'],
    },
    {
      title: 'MDF / Aggloméré',
      iconKey: 'mdf-particleboard' as const,
      refs: ['B-19', 'B-53', 'B-54', 'B-55', 'B-60', 'B-61', 'P-47204', 'P-49644'],
    },
    {
      title: 'Stratifié',
      iconKey: 'laminate-flooring' as const,
      refs: ['B-19', 'B-53', 'B-54', 'B-55'],
    },
    {
      title: 'PVC',
      iconKey: 'pvc' as const,
      refs: ['B-8', 'B-10', 'B-11', 'B-12', 'B-13', 'B-21', 'B-22', 'B-23', 'B-24', 'B-25', 'B-27', 'B-50', 'B-52', 'B-55', 'P-47210', 'No.58', 'No.59', 'No.51'],
    },
    {
      title: 'Plastique',
      iconKey: 'plastic' as const,
      refs: ['B-8', 'B-10', 'B-11', 'B-12', 'B-13', 'B-14', 'B-15', 'B-16', 'B-16L', 'B-17', 'B-18', 'B-19', 'B-19S', 'B-21', 'B-22', 'B-23', 'B-24', 'B-25', 'B-26', 'B-27', 'B-28', 'B-29', 'B-50', 'B-52', 'B-55', 'L-1', 'L-2', 'L-10', 'No.58', 'No.59', 'No.51'],
    },
    {
      title: 'Acier',
      iconKey: 'steel' as const,
      refs: ['B-21', 'B-22', 'B-22S', 'B-23', 'B-24', 'B-25', 'B-26', 'B-30', 'B-32', 'B-33', 'B-34', 'B-35', 'B-51', 'B-52', 'P-05929', 'P-49622', 'P-47226', 'P-47232', 'P-47204', 'P-47210', 'P-49644', 'No.51'],
    },
    {
      title: 'Métaux non ferreux',
      iconKey: 'non-ferrous-metal' as const,
      refs: ['B-21', 'B-22', 'B-22S', 'B-27', 'B-30', 'B-32', 'B-33', 'B-34', 'P-05929', 'P-47232', 'P-49644'],
    },
    {
      title: 'Inox',
      iconKey: 'stainless-steel' as const,
      refs: ['B-22', 'B-24', 'B-27', 'B-32', 'B-33', 'B-34', 'B-35', 'B-51', 'B-52', 'P-05929', 'P-47226', 'P-47210', 'No.51'],
    },
    {
      title: 'Aluminium',
      iconKey: 'aluminum' as const,
      refs: ['B-21', 'B-22', 'B-23', 'B-24', 'B-25', 'B-26', 'B-27', 'B-52', 'P-47232', 'P-47210', 'No.51'],
    },
    {
      title: 'Carrelage / Fibre de verre / Ciment',
      iconKey: 'tile-fiberglass-cement' as const,
      refs: ['B-60', 'B-61', 'P-38766', 'P-38788'],
    },
    {
      title: 'Coupe rapide',
      iconKey: 'fast-cut' as const,
      refs: ['B-8', 'B-10', 'B-13', 'BR-13', 'B-16', 'B-16L', 'B-17', 'B-23', 'B-25', 'B-26', 'B-50', 'B-51', 'B-52', 'L-2', 'L-10', 'P-49622', 'P-47226', 'P-47232', 'P-47204', 'P-47210', 'P-49644', 'P-38766', 'No.58'],
    },
    {
      title: 'Coupe propre',
      iconKey: 'clean-cut' as const,
      refs: ['B-10', 'B-10S', 'B-11', 'B-12', 'B-14', 'B-15', 'B-18', 'B-19', 'B-19S', 'B-21', 'B-22', 'B-22S', 'B-24', 'B-27', 'B-28', 'B-29', 'B-30', 'B-32', 'B-33', 'B-34', 'B-35', 'B-50', 'B-51', 'B-53', 'B-54', 'B-55', 'B-60', 'B-61', 'B-K', 'L-1', 'P-05929', 'P-38788', 'No.59', 'No.51'],
    },
    {
      title: 'Coupe courbe (chantournage)',
      iconKey: 'curved-cut' as const,
      refs: ['B-17', 'B-18', 'B-26', 'B-27', 'B-29', 'B-53', 'B-54', 'B-60', 'B-61', 'B-K'],
    },
  ],
  noteHtml:
    '\n    Les anciennes lames Makita à queue universelle (série numérotée à code A-858xx) ne sont pas compatibles avec la fixation\n    par baionnette (type B) des scies sauteuses Makita compatibles et ne figurent pas dans cet index. Seules les lames à emmanchement en T (série B, Bayonet type) sont retenues.\n  ',
  footLine: `Guide des lames de scie sauteuse Makita emmanchement T (type B) · Édition du ${packageJson.editionDate}`,
};
