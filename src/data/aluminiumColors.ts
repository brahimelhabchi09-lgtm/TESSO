import { AluminiumColorOption } from '../types/aluminium';

/**
 * Nuancier indicatif des coloris et finitions Aluminium AKWA WAKA.
 * Note : Ces options sont des propositions d'interface pour les demandes de devis ;
 * la disponibilité effective est confirmée par notre équipe technique.
 */
export const ALUMINIUM_COLORS: AluminiumColorOption[] = [
  {
    id: 'blanc',
    name: 'Blanc',
    hex: '#F8FAFC',
    secondaryHex: '#E2E8F0',
    pattern: 'solid',
    finishDescription: 'Blanc pur lumineux, adapté aux architectures contemporaines et façades épurées.',
    category: 'color',
  },
  {
    id: 'noir',
    name: 'Noir',
    hex: '#14181F',
    secondaryHex: '#272E3B',
    pattern: 'solid',
    finishDescription: 'Noir profond architectural pour un contraste graphique et structuré.',
    category: 'color',
  },
  {
    id: 'gris-anthracite',
    name: 'Gris anthracite',
    hex: '#333940',
    secondaryHex: '#4B535D',
    pattern: 'solid',
    finishDescription: 'Teinte gris anthracite contemporaine, sobre et intemporelle.',
    category: 'color',
  },
  {
    id: 'gris-aluminium',
    name: 'Gris aluminium',
    hex: '#9BA4AE',
    secondaryHex: '#CBD5E1',
    pattern: 'metallic',
    finishDescription: 'Gris métallisé naturel évoquant l’éclat brut de l’aluminium.',
    category: 'color',
  },
  {
    id: 'argent',
    name: 'Argent',
    hex: '#CBD5E1',
    secondaryHex: '#F1F5F9',
    pattern: 'metallic',
    finishDescription: 'Aspect argenté anodisé aux reflets fins et satinés.',
    category: 'color',
  },
  {
    id: 'bronze',
    name: 'Bronze',
    hex: '#6E563F',
    secondaryHex: '#8C7055',
    pattern: 'metallic',
    finishDescription: 'Nuance bronze chaleureuse pour façades de caractère.',
    category: 'color',
  },
  {
    id: 'marron',
    name: 'Marron',
    hex: '#4E3629',
    secondaryHex: '#694A39',
    pattern: 'solid',
    finishDescription: 'Brun profond classique s’intégrant aux architectures traditionnelles ou mixtes.',
    category: 'color',
  },
  {
    id: 'beige',
    name: 'Beige',
    hex: '#D8CBB8',
    secondaryHex: '#EBE2D5',
    pattern: 'solid',
    finishDescription: 'Ton sable doux et minéral pour une intégration discrète.',
    category: 'color',
  },
  {
    id: 'imitation-bois',
    name: 'Imitation bois',
    hex: '#8C5E3C',
    secondaryHex: '#B8845B',
    pattern: 'wood',
    finishDescription: 'Aspect veiné bois naturel combinant chaleur esthétique et tenue de l’aluminium.',
    category: 'color',
  },
  {
    id: 'finition-mate',
    name: 'Finition mate',
    hex: '#475569',
    secondaryHex: '#334155',
    pattern: 'matte',
    finishDescription: 'Texture thermolaquée mate à toucher doux et faible réflectance.',
    category: 'finish',
  },
  {
    id: 'finition-brillante',
    name: 'Finition brillante',
    hex: '#64748B',
    secondaryHex: '#E2E8F0',
    pattern: 'gloss',
    finishDescription: 'Surface lisse à brillance élevée accentuant la luminosité des profilés.',
    category: 'finish',
  },
];

export const ALUMINIUM_COLOR_NAMES = ALUMINIUM_COLORS.map((c) => c.name);
