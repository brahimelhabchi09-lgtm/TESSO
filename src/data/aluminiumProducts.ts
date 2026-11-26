import { AluminiumProduct } from '../types/aluminium';

/**
 * Catalogue Menuiserie Aluminium & Portes de Garage AKWA WAKA.
 *
 * Note importante :
 * - Les tarifs sont sur devis (`price: null` => "Prix sur demande").
 * - Les dimensions sont saisies par le client lors de la demande de devis et confirmées
 *   par notre équipe technique.
 * - Aucune donnée technique non vérifiée ou prix arbitraire n'est inventé.
 */
export const ALUMINIUM_PRODUCTS: AluminiumProduct[] = [
  {
    id: 'alu-fen-001',
    name: 'Fenêtre aluminium coulissante',
    reference: 'ALU-FEN-001',
    category: 'Fenêtres en aluminium',
    image: '/images/products/aluminium/windows/fenetre-aluminium-illustration.jpg',
    imageAlt: 'Exposition de fenêtres et cadres en aluminium',
    imageNote: 'Photo d’illustration — ne représente pas un modèle AKWA WAKA précis.',
    description:
      'Fenêtre en aluminium à ouverture coulissante sur mesure. Conception épurée permettant un apport lumineux optimal et une manipulation fluide au quotidien.',
    shortDescription: 'Ouverture coulissante sur mesure avec profilé fin en aluminium.',
    openingSystem: 'Coulissant',
    colors: ['Blanc', 'Noir', 'Gris anthracite', 'Gris aluminium', 'Imitation bois', 'Finition mate'],
    dimensions: {
      width: null,
      height: null,
      unit: 'cm',
    },
    price: null,
    featured: true,
    tags: ['Fenêtre', 'Coulissant', 'Sur mesure'],
  },
  {
    id: 'alu-fen-002',
    name: 'Fenêtre aluminium à frappe / battante',
    reference: 'ALU-FEN-002',
    category: 'Fenêtres en aluminium',
    image: '/images/products/aluminium/windows/profil-fenetre-aluminium-illustration.jpg',
    imageAlt: 'Détail d’un profilé de fenêtre en aluminium examiné à la main',
    imageNote: 'Photo d’illustration — ne représente pas un modèle AKWA WAKA précis.',
    description:
      'Fenêtre aluminium à ouverture à la française (battante) ou oscillo-battante selon la configuration souhaitée lors de l’étude technique.',
    shortDescription: 'Ouverture battante classique ou oscillo-battante sur mesure.',
    openingSystem: 'Battant / Oscillo-battant',
    colors: ['Blanc', 'Noir', 'Gris anthracite', 'Bronze', 'Beige', 'Finition mate'],
    dimensions: {
      width: null,
      height: null,
      unit: 'cm',
    },
    price: null,
    featured: false,
    tags: ['Fenêtre', 'Battante', 'Sur mesure'],
  },
  {
    id: 'alu-baie-001',
    name: 'Baie vitrée coulissante grand format',
    reference: 'ALU-BAIE-001',
    category: 'Baies vitrées coulissantes',
    image: '/images/products/aluminium/windows/baie-vitree-coulissante.jpg',
    description:
      'Baie vitrée coulissante en aluminium conçue pour les grandes ouvertures vers terrasses, jardins et balcons. Configuration multi-vantaux sur devis.',
    shortDescription: 'Grande ouverture panoramique à vantaux coulissants.',
    openingSystem: 'Coulissant multi-rails',
    colors: ['Blanc', 'Noir', 'Gris anthracite', 'Gris aluminium', 'Argent', 'Finition brillante'],
    dimensions: {
      width: null,
      height: null,
      unit: 'm',
    },
    price: null,
    featured: true,
    tags: ['Baie vitrée', 'Panoramique', 'Coulissant'],
  },
  {
    id: 'alu-pf-001',
    name: 'Porte-fenêtre aluminium',
    reference: 'ALU-PF-001',
    category: 'Portes-fenêtres',
    image: '/images/products/aluminium/doors/porte-fenetre.jpg',
    description:
      'Porte-fenêtre en aluminium assurant la liaison entre intérieur et extérieur. Réalisée aux dimensions du bâti après prise de côtes.',
    shortDescription: 'Accès terrasse ou balcon en menuiserie aluminium sur mesure.',
    openingSystem: 'Battant ou coulissant',
    colors: ['Blanc', 'Noir', 'Gris anthracite', 'Marron', 'Beige', 'Imitation bois'],
    dimensions: {
      width: null,
      height: null,
      unit: 'cm',
    },
    price: null,
    featured: false,
    tags: ['Porte-fenêtre', 'Extérieur'],
  },
  {
    id: 'alu-por-001',
    name: 'Porte d’entrée aluminium architecturale',
    reference: 'ALU-POR-001',
    category: 'Portes en aluminium',
    image: '/images/products/aluminium/doors/porte-entree-alu.jpg',
    description:
      'Porte en aluminium destinée aux entrées résidentielles et professionnelles. Choix de teintes et de finitions selon nuancier AKWA WAKA.',
    shortDescription: 'Porte d’entrée contemporaine en aluminium personnalisable.',
    openingSystem: 'Battant',
    colors: ['Noir', 'Gris anthracite', 'Blanc', 'Bronze', 'Imitation bois', 'Finition mate'],
    dimensions: {
      width: null,
      height: null,
      unit: 'cm',
    },
    price: null,
    featured: true,
    tags: ['Porte', 'Entrée', 'Architecture'],
  },
  {
    id: 'alu-coul-001',
    name: 'Ensemble coulissant aluminium minimaliste',
    reference: 'ALU-COUL-001',
    category: 'Coulissants aluminium',
    image: '/images/products/aluminium/windows/coulissant-minimaliste.jpg',
    description:
      'Système coulissant en aluminium à lignes fines pour séparation d’espaces intérieurs ou ouvertures extérieures.',
    shortDescription: 'Coulissant fin pour séparation ou façade vitrée.',
    openingSystem: 'Coulissant',
    colors: ['Noir', 'Gris anthracite', 'Argent', 'Blanc', 'Finition mate'],
    dimensions: {
      width: null,
      height: null,
      unit: 'cm',
    },
    price: null,
    featured: false,
    tags: ['Coulissant', 'Minimaliste'],
  },
  {
    id: 'alu-gar-001',
    name: 'Porte de garage sectionnelle',
    reference: 'ALU-GAR-SEC',
    category: 'Portes de garage',
    image: '/images/products/aluminium/garage/porte-garage-sectionnelle.jpg',
    description:
      'Porte de garage sectionnelle à ouverture verticale sous plafond, optimisant l’espace intérieur et extérieur devant le garage.',
    shortDescription: 'Ouverture verticale sectionnelle optimisant l’encombrement.',
    openingSystem: 'Ouverture sectionnelle',
    garageType: 'Sectionnelle',
    colors: ['Blanc', 'Gris anthracite', 'Noir', 'Gris aluminium', 'Imitation bois', 'Marron'],
    dimensions: {
      width: null,
      height: null,
      unit: 'm',
    },
    price: null,
    featured: true,
    tags: ['Porte de garage', 'Sectionnelle'],
  },
  {
    id: 'alu-gar-002',
    name: 'Porte de garage enroulable',
    reference: 'ALU-GAR-ENR',
    category: 'Portes de garage',
    image: '/images/products/aluminium/garage/porte-garage-enroulable.jpg',
    description:
      'Porte de garage enroulable en lames aluminium s’enroulant dans un coffre compact, laissant les murs latéraux et le plafond dégagés.',
    shortDescription: 'Enroulement compact en lames aluminium pour dégagement total.',
    openingSystem: 'Enroulement vertical',
    garageType: 'Enroulable',
    colors: ['Blanc', 'Gris anthracite', 'Noir', 'Beige', 'Marron'],
    dimensions: {
      width: null,
      height: null,
      unit: 'm',
    },
    price: null,
    featured: true,
    tags: ['Porte de garage', 'Enroulable'],
  },
  {
    id: 'alu-gar-003',
    name: 'Porte de garage basculante',
    reference: 'ALU-GAR-BAS',
    category: 'Portes de garage',
    image: '/images/products/aluminium/garage/porte-garage-basculante.jpg',
    description:
      'Porte de garage basculante robuste à panneau unique, adaptée aux configurations résidentielles standard ou sur mesure.',
    shortDescription: 'Ouverture basculante à panneau unique.',
    openingSystem: 'Basculante',
    garageType: 'Basculante',
    colors: ['Blanc', 'Gris anthracite', 'Gris aluminium', 'Marron'],
    dimensions: {
      width: null,
      height: null,
      unit: 'm',
    },
    price: null,
    featured: false,
    tags: ['Porte de garage', 'Basculante'],
  },
  {
    id: 'alu-gar-004',
    name: 'Porte de garage battante',
    reference: 'ALU-GAR-BAT',
    category: 'Portes de garage',
    image: '/images/products/aluminium/garage/porte-garage-battante.jpg',
    description:
      'Porte de garage battante à deux vantaux vers l’extérieur, préservant l’intégralité de l’espace sous plafond du garage.',
    shortDescription: 'Ouverture à deux vantaux sans encombrement au plafond.',
    openingSystem: 'Battante à 2 vantaux',
    garageType: 'Battante',
    colors: ['Blanc', 'Gris anthracite', 'Imitation bois', 'Bronze', 'Noir'],
    dimensions: {
      width: null,
      height: null,
      unit: 'm',
    },
    price: null,
    featured: false,
    tags: ['Porte de garage', 'Battante'],
  },
  {
    id: 'alu-gar-005',
    name: 'Porte de garage motorisée',
    reference: 'ALU-GAR-MOT',
    category: 'Portes de garage',
    image: '/images/products/aluminium/garage/porte-garage-motorisee.jpg',
    description:
      'Solution de porte de garage équipée d’une motorisation sur mesure. Les caractéristiques de motorisation sont précisées lors de l’étude technique selon les dimensions.',
    shortDescription: 'Confort d’ouverture motorisée configurable selon votre projet.',
    openingSystem: 'Motorisée (selon configuration)',
    garageType: 'Motorisée',
    motorisation: 'Motorisation configurable — précisée lors du devis technique',
    colors: ['Gris anthracite', 'Blanc', 'Noir', 'Imitation bois', 'Finition mate'],
    dimensions: {
      width: null,
      height: null,
      unit: 'm',
    },
    price: null,
    featured: true,
    tags: ['Porte de garage', 'Motorisée'],
  },
  {
    id: 'alu-acc-001',
    name: 'Accessoires & quincaillerie aluminium',
    reference: 'ALU-ACC-001',
    category: 'Accessoires aluminium',
    image: '/images/products/aluminium/windows/accessoires-alu.jpg',
    description:
      'Poignées, crémones, rails, joints et pièces d’habillage assortis aux teintes de nos menuiseries aluminium.',
    shortDescription: 'Poignées, profilés complémentaires et quincaillerie coordonnée.',
    openingSystem: 'Selon équipement',
    colors: ['Noir', 'Blanc', 'Gris anthracite', 'Argent', 'Bronze'],
    dimensions: {
      width: null,
      height: null,
      unit: 'mm',
    },
    price: null,
    featured: false,
    tags: ['Accessoires', 'Quincaillerie', 'Aluminium'],
  },
];

export function getAluminiumProductById(id: string): AluminiumProduct | undefined {
  return ALUMINIUM_PRODUCTS.find((p) => p.id === id);
}

export function getAluminiumProductsByCategory(category: string): AluminiumProduct[] {
  return ALUMINIUM_PRODUCTS.filter((p) => p.category === category);
}

export function getRelatedAluminiumProducts(productId: string, limit = 3): AluminiumProduct[] {
  const current = getAluminiumProductById(productId);
  if (!current) return ALUMINIUM_PRODUCTS.slice(0, limit);
  const sameCategory = ALUMINIUM_PRODUCTS.filter(
    (p) => p.id !== productId && p.category === current.category
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const others = ALUMINIUM_PRODUCTS.filter(
    (p) => p.id !== productId && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}
