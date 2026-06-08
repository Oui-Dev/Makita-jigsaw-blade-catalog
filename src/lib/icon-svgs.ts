/** SVG inner markup keyed by icon id (paths copied from original HTML). */
export const ICON_SVGS: Record<string, string> = {
  'coupe-rapide': `<path d="M13 2.5L5.5 13H10l-1.2 8.5L18.5 10H13z" fill="currentColor"/>`,
  'coupe-propre': `<path d="M12 2.8l1.9 5.3 5.3 1.9-5.3 1.9L12 17.2l-1.9-5.3L4.8 10l5.3-1.9z" fill="currentColor"/>
        <path d="M18.5 15l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" fill="currentColor"/>`,
  'coupe-courbe': `<path d="M4 19c0-7.5 5.5-13 13-13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M12.5 6H17.5V11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  'coupe-droite': `<path d="M3 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M14 7l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  lubrification: `<path d="M12 3c4 5.5 6 7.8 6 10.8A6 6 0 0 1 6 13.8C6 10.8 8 8.5 12 3z" fill="currentColor"/>
        <path d="M9.5 14.2a2.5 2.5 0 0 0 2 2.3" fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.85"/>`,
  tpi: `<path d="M3 16.5h18" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
        <path d="M4.5 16.5l2-5 2 5 2-5 2 5 2-5 2 5 2-5 2 5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>`,
  'longueur-lame': `<rect x="3" y="9" width="18" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <path d="M7 9v2.4M11 9v3M15 9v2.4M19 9v3" stroke="currentColor" stroke-width="1.2"/>`,
  'epaisseur-coupe': `<path d="M6 4v16M18 4v16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        <path d="M6 12h12" stroke="currentColor" stroke-width="1.4"/>
        <path d="M9.5 9l-3 3 3 3M14.5 9l3 3-3 3" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>`,
  'type-denture': `<path d="M3 17h12M5 17l1.6-4 1.6 4 1.6-4 1.6 4 1.6-4 1.6 4" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
        <circle cx="17.5" cy="9.5" r="3.2" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <path d="M19.8 11.8L22 14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,
  'bois-tendre': `<rect x="3" y="7" width="18" height="10" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <path d="M5.5 10.4c3-1.3 5 1.3 8 0s4.5-1.1 5.4-.2" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
        <path d="M5.5 13.6c3-1.3 5 1.3 8 0s4.5-1.1 5.4-.2" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`,
  'bois-dur': `<rect x="3" y="6" width="18" height="12" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <ellipse cx="9" cy="12" rx="3" ry="4" fill="none" stroke="currentColor" stroke-width="1.3"/>
        <ellipse cx="9" cy="12" rx="1.2" ry="1.8" fill="none" stroke="currentColor" stroke-width="1.1"/>
        <path d="M15 8v8M18 8v8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`,
  contreplaque: `<rect x="3" y="7" width="18" height="10" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <path d="M3.4 10.5h17.2M3.4 13.5h17.2" stroke="currentColor" stroke-width="1.1"/>`,
  'mdf-agglomere': `<rect x="3" y="7" width="18" height="10" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <g fill="currentColor"><circle cx="7" cy="10.5" r="0.7"/><circle cx="11" cy="13" r="0.7"/><circle cx="15" cy="10" r="0.7"/><circle cx="18" cy="13.5" r="0.7"/><circle cx="9.5" cy="14.5" r="0.6"/><circle cx="13" cy="9.5" r="0.6"/><circle cx="17" cy="12" r="0.6"/></g>`,
  'stratifie-parquet': `<rect x="3" y="6" width="18" height="12" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <path d="M3 12h18M9 6v6M15 12v6" stroke="currentColor" stroke-width="1.2"/>`,
  pvc: `<path d="M9 7h8v10H9a5 5 0 0 1 0-10z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
        <ellipse cx="9" cy="12" rx="2.1" ry="5" fill="none" stroke="currentColor" stroke-width="1.4"/>`,
  plastique: `<rect x="5" y="5" width="14" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <path d="M8 9.5l3.5 3.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
        <path d="M8 13l2 2" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>`,
  aluminium: `<path d="M6 4v15h14v-3.6h-10.4V4z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>`,
  acier: `<path d="M3 14.5l5.5-6h12.5l-5.5 6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
        <path d="M3 14.5v2.4l12.5 0v-2.4" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>`,
  inox: `<path d="M3 15l5-5.5h11l-5 5.5z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
        <path d="M17.5 5.5l.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8z" fill="currentColor"/>`,
  'metaux-non-ferreux': `<rect x="3" y="9.5" width="18" height="5" rx="0.6" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <path d="M7 9.5l-2 5M11 9.5l-2 5M15 9.5l-2 5M19 9.5l-2 5" stroke="currentColor" stroke-width="1"/>`,
  'carrelage-fibre-ciment': `<rect x="4" y="4" width="16" height="16" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <path d="M4 12h16M12 4v16" stroke="currentColor" stroke-width="1.2"/>`,
  'cuir-mousse': `<path d="M4 8c3-2 5 2 8 0s5-2 8 0v8c-3 2-5-2-8 0s-5 2-8 0z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>`,
};
