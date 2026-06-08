export const catalogMeta = {
  title: 'Lames de scie sauteuse Makita - Guide emmanchement T',
  kicker: 'Guide de reference outillage',
  heading: 'Lames de scie sauteuse Makita a emmanchement en T',
  subtitle:
    'Catalogue complet des lames Makita compatibles, classees par usage, avec caracteristiques techniques et pictogrammes normalises.',
  compatibleModelGroups: [
    {
      label: 'Filaire',
      models: ['4326', '4327', '4328', '4329', '4350', '4351', 'BJV140', 'BJV180', 'JR1000', 'JR105', 'JV0600'],
    },
    {
      label: 'LXT 18V',
      models: ['DJV141', 'DJV142', 'DJV180', 'DJV181', 'DJV182', 'DJV184', 'DJV185', 'DJV186'],
    },
    {
      label: 'XGT 40V',
      models: ['JV001', 'JV002'],
    },
    {
      label: 'CXT 12V',
      models: ['JV101', 'JV102', 'JV103', 'JV183'],
    },
  ],
  stats: [
    {
      value: '37',
      label: 'References',
    },
    {
      value: '08/06/2026',
      label: 'Edition',
    },
  ],
  footnote:
    "Document de synthese, non officiel, etabli a partir de sources croisees. Les references et caracteristiques peuvent evoluer : verifier la disponibilite aupres de Makita ou d'un revendeur agree.",
} as const;
