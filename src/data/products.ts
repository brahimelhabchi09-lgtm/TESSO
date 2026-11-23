import { Product } from '../types/product';

/**
 * CATALOGUE CENTRALISÉ DES PRODUITS TESSO
 * 
 * Conseils de mise à jour :
 * 1. Pour ajouter une image : déposez le fichier dans `public/images/products/`
 *    et indiquez le chemin `/images/products/nom-fichier.jpg`.
 * 2. Si le prix n'est pas encore défini, indiquez `price: null` (affichera "Prix sur demande").
 * 3. Si un prix est disponible, indiquez le montant numérique en Dirhams marocains (ex: 4500 pour 4 500 DH).
 */
export const PRODUCTS: Product[] = [
  // 1. Premier produit de référence demandé
  {
    id: 1,
    name: "Meuble de salle de bain",
    reference: "2043GR-40",
    category: "Meubles de salle de bain",
    image: "/images/products/meuble-salle-de-bain.jpg",
    price: null,
    description: "Meuble moderne avec lavabo en céramique et miroir intégré. Conçu avec des matériaux haut de gamme hydrofuges, tiroirs à fermeture amortie et finition gris mat contemporaine.",
    shortDescription: "Ensemble meuble suspendu gris contemporain avec vasque céramique et miroir.",
    featured: true,
    dimensions: "100 x 48 x 52 cm",
    material: "MDF hydrofuge haute densité & Céramique vitrifiée",
    finish: "Gris anthracite satiné & blanc pur",
    warranty: "5 ans",
    specifications: [
      { label: "Configuration", value: "Meuble suspendu 2 tiroirs + Vasque + Miroir LED" },
      { label: "Dimensions meuble", value: "L 100 x P 48 x H 52 cm" },
      { label: "Dimensions miroir", value: "Ø 80 cm, éclairage tactile anti-buée" },
      { label: "Système de fermeture", value: "Coulisses Blum® Soft-Close silencieuses" },
      { label: "Type de vasque", value: "Céramique fine avec trop-plein invisible" },
      { label: "Finition robinetterie requise", value: "Robinetterie monotrou standard" }
    ],
    tags: ["Meuble", "Gris", "Miroir LED", "Céramique"]
  },

  // 2. Second produit de référence demandé
  {
    id: 2,
    name: "WC intelligent",
    reference: "WC-001",
    category: "WC et toilettes",
    image: "/images/products/wc-intelligent.jpg",
    price: null,
    description: "Toilette moderne au design élégant intégrant des fonctionnalités d'hygiène avancées : bidet lavant à température réglable, séchage air chaud, ouverture automatique et chasse cyclonique économique.",
    shortDescription: "Toilette japonaise high-tech au design épuré et fonctionnalités bien-être.",
    featured: true,
    dimensions: "68 x 39 x 49 cm",
    material: "Céramique traitée antibactérienne & ABS médical",
    finish: "Blanc brillant anti-adhérence",
    warranty: "3 ans composants électroniques, 10 ans céramique",
    specifications: [
      { label: "Type d'installation", value: "Posé au sol ou suspendu sur bâti-support standard" },
      { label: "Fonctions lavage", value: "Jet oscillant, température et pression personnalisables" },
      { label: "Séchage", value: "Soufflerie air tiède multidirectionnelle" },
      { label: "Siège chauffant", value: "Température ergonomique 4 niveaux" },
      { label: "Commande", value: "Télécommande murale tactile & affichage LED" },
      { label: "Chasse d'eau", value: "Rinçage Tornado silencieux 3.5L / 4.8L" },
      { label: "Désodorisation", value: "Filtre charbon actif catalytique automatique" }
    ],
    tags: ["WC", "Intelligent", "Luxe", "High-Tech"]
  },

  // 3. Meubles de salle de bain additionnels
  {
    id: 3,
    name: "Ensemble Meuble Chêne Massif & Pierre",
    reference: "TESSO-VAN-080",
    category: "Meubles de salle de bain",
    image: "/images/products/meuble-chene-pierre.jpg",
    price: null,
    description: "Meuble vasque en chêne naturel cannelé avec plan de travail en travertin poli. Un équilibre parfait entre organicité naturelle et précision architecturale contemporaine.",
    shortDescription: "Chêne naturel cannelé avec plateau en travertin véritable.",
    featured: true,
    dimensions: "120 x 50 x 55 cm",
    material: "Chêne massif labellisé FSC & Travertin naturel",
    finish: "Chêne naturel mat huilé",
    warranty: "5 ans",
    specifications: [
      { label: "Dimensions", value: "L 120 x P 50 x H 55 cm" },
      { label: "Rangements", value: "2 grands tiroirs avec découpe pour siphon" },
      { label: "Plan vasque", value: "Travertin naturel percé pour robinet encastré ou sur plan" }
    ],
    tags: ["Chêne massif", "Travertin", "Haut de gamme"]
  },

  // 4. Lavabos et Vasques
  {
    id: 4,
    name: "Vasque à Poser Marbre Calacatta",
    reference: "VAS-CAL-42",
    category: "Lavabos et vasques",
    image: "/images/products/vasque-calacatta.jpg",
    price: null,
    description: "Vasque sculptée d'un seul bloc dans du marbre Calacatta d'Italie. Ses veinures dorées et grises uniques confèrent un cachet majestueux à votre espace bain.",
    shortDescription: "Sculptée d'un bloc dans du marbre Calacatta italien.",
    featured: true,
    dimensions: "Ø 42 cm x H 14 cm",
    material: "Marbre Calacatta naturel taillé",
    finish: "Poli satiné hydrofugé",
    warranty: "10 ans",
    specifications: [
      { label: "Type", value: "Vasque bol à poser sans trop-plein" },
      { label: "Diamètre", value: "420 mm" },
      { label: "Hauteur", value: "140 mm" },
      { label: "Bonde", value: "Bonde assortie en marbre incluse" }
    ],
    tags: ["Marbre", "Vasque", "Calacatta", "Italie"]
  },
  {
    id: 5,
    name: "Vasque Ovale Céramique Fine Noir Mat",
    reference: "VAS-OVL-BL02",
    category: "Lavabos et vasques",
    image: "/images/products/vasque-noir-mat.jpg",
    price: null,
    description: "Vasque ovale extra-fine en céramique haute densité. Rebords biseautés de seulement 4 mm d'épaisseur et traitement anti-calcaire longue durée.",
    shortDescription: "Bords fins biseautés et toucher velours noir mat anti-taches.",
    featured: false,
    dimensions: "60 x 38 x 12 cm",
    material: "Céramique fine TitanCeram",
    finish: "Noir mat satiné velours",
    warranty: "5 ans",
    specifications: [
      { label: "Épaisseur rebord", value: "4 mm ultra-slim" },
      { label: "Nettoyage", value: "Surface CeramicPlus déperlante" },
      { label: "Installation", value: "Sur plan de toilette" }
    ],
    tags: ["Noir mat", "Minimaliste", "Design"]
  },

  // 5. WC et Toilettes additionnels
  {
    id: 6,
    name: "Cuvette WC Suspendue Rimless Noir Mat",
    reference: "WC-SUS-NOIR",
    category: "WC et toilettes",
    image: "/images/products/wc-suspendu-noir.jpg",
    price: null,
    description: "Cuvette de WC suspendue sans bride (Rimless) avec abattant ultrafin soft-close déclipsable d'un clic. Céramique haut de gamme traitée pour un entretien simplifié.",
    shortDescription: "Cuvette suspendue épurée sans bride avec abattant amovible frein de chute.",
    featured: false,
    dimensions: "53 x 36 x 35 cm",
    material: "Céramique vitrifiée sanitaire",
    finish: "Noir mat soyeux",
    warranty: "10 ans céramique",
    specifications: [
      { label: "Technologie", value: "Sans bride (Rimless) hygiène totale" },
      { label: "Fixation", value: "Fixations invisibles par le dessus fournies" },
      { label: "Abattant", value: "Duroplast fin avec frein de chute et boutons quick-release" }
    ],
    tags: ["WC Suspendu", "Rimless", "Noir mat"]
  },

  // 6. Robinets et Mitigeurs
  {
    id: 7,
    name: "Mitigeur Lavabo Haut Laiton Brossé",
    reference: "MIT-LUX-BR01",
    category: "Robinets et mitigeurs",
    image: "/images/products/mitigeur-laiton-haut.jpg",
    price: null,
    description: "Mitigeur rehaussé pour vasque à poser, forgé en laiton massif haute résistance avec cartouche céramique Sedal®. Finition laiton brossé résistant aux traces de doigts.",
    shortDescription: "Laiton brossé PVD anti-traces pour vasques à poser surélevées.",
    featured: true,
    dimensions: "Hauteur totale 31 cm - Hauteur sous bec 23 cm",
    material: "Laiton massif CW617N sans plomb",
    finish: "Laiton doré brossé PVD",
    warranty: "5 ans",
    specifications: [
      { label: "Cartouche", value: "Céramique 35 mm garantie 500 000 cycles" },
      { label: "Aérateur", value: "Neoperl® économique 5,7 L/min avec jet aéré sans éclaboussures" },
      { label: "Flexibles", value: "Tressés inox G3/8 certifiés ACS inclus" }
    ],
    tags: ["Laiton brossé", "Or", "Mitigeur haut"]
  },
  {
    id: 8,
    name: "Mitigeur Encastré Mural 2 Éléments Gun Metal",
    reference: "ROB-ENC-GM",
    category: "Robinets et mitigeurs",
    image: "/images/products/mitigeur-encastre-gunmetal.jpg",
    price: null,
    description: "Robinetterie murale encastrée deux pièces avec bec courbé et manette ergonomique moletée. Finition titane brossé (Gun Metal) d'une extrême élégance.",
    shortDescription: "Installation murale discrète avec texture moletée diamant.",
    featured: false,
    dimensions: "Saillie du bec : 20 cm",
    material: "Laiton massif",
    finish: "Gun Metal / Titane brossé PVD",
    warranty: "5 ans",
    specifications: [
      { label: "Corps d'encastrement", value: "Boîtier d'encastrement étanche fourni" },
      { label: "Manette", value: "Texture guillochée antidérapante" },
      { label: "Compatibilité", value: "Idéal pour vasques totem et vasques sur plan" }
    ],
    tags: ["Encastré", "Gun Metal", "Mural"]
  },

  // 7. Douches et Accessoires
  {
    id: 9,
    name: "Colonne de Douche Thermostatique Or Brossé",
    reference: "COL-DOU-AU88",
    category: "Douches et accessoires",
    image: "/images/products/colonne-douche-or.jpg",
    price: null,
    description: "Système de douche complet thermostatique comprenant une tête de douche pluie extra-plate de 30 cm, une douchette à main stylisée en cylindre et un mitigeur thermostatique avec sécurité 38°C.",
    shortDescription: "Ciel de pluie 30 cm et corps thermostatique haute précision anti-brûlure.",
    featured: true,
    dimensions: "Hauteur ajustable 85 à 125 cm - Tête Ø 30 cm",
    material: "Laiton et Inox 304",
    finish: "Or brossé champagne PVD",
    warranty: "5 ans",
    specifications: [
      { label: "Sécurité", value: "Bouton de blocage thermostatique à 38°C (CoolTouch)" },
      { label: "Picots", value: "Silicone souple anti-calcaire nettoyable au doigt" },
      { label: "Flexible", value: "Anti-torsion lisse aspect métal 1,60 m" }
    ],
    tags: ["Douche", "Or brossé", "Thermostatique", "Ciel de pluie"]
  },
  {
    id: 10,
    name: "Ciel de Pluie Encastré Plafond XXL avec Chromothérapie",
    reference: "PLU-ENC-50",
    category: "Douches et accessoires",
    image: "/images/products/ciel-pluie-plafond.jpg",
    price: null,
    description: "Plafond de douche grand format 50x50 cm encastré affleurant. Double fonction : rideau de pluie tropicale et brumisateur relaxant avec éclairage LED d'ambiance intégré.",
    shortDescription: "Ciel de pluie affleurant 50x50 cm avec fonction cascade et brume.",
    featured: false,
    dimensions: "50 x 50 x 2.5 cm",
    material: "Acier inoxydable qualité marine AISI 316",
    finish: "Inox brossé miroir ou noir mat au choix",
    warranty: "5 ans",
    specifications: [
      { label: "Modes de jet", value: "Pluie tropicale, Cascade d'eau douce, Brume d'eau" },
      { label: "Installation", value: "Encastrement plafond avec cadre de fixation inclus" }
    ],
    tags: ["Plafond de douche", "XXL", "Chromothérapie"]
  },

  // 8. Accessoires de salle de bain
  {
    id: 11,
    name: "Miroir LED Organique Rétro-éclairé",
    reference: "MIR-ORG-90",
    category: "Accessoires de salle de bain",
    image: "/images/products/miroir-organique-led.jpg",
    price: null,
    description: "Miroir contemporain aux formes fluides asymétriques avec halo lumineux LED périphérique. Commande tactile discrète, variateur d'intensité lumineuse et fonction désembuage automatique.",
    shortDescription: "Forme asymétrique sculpturale avec variateur d'intensité et anti-buée.",
    featured: true,
    dimensions: "90 x 70 cm - Épaisseur 3 cm",
    material: "Verre argenté sans cuivre 5 mm & Châssis aluminium",
    finish: "Bords polis miroir haute clarté",
    warranty: "3 ans",
    specifications: [
      { label: "Éclairage", value: "LED CRI > 90, 3000K (chaud) à 4000K (naturel)" },
      { label: "Capteur", value: "Touche tactile invisible sur la surface du miroir" },
      { label: "Protection", value: "Indice IP44 certifié pour pièces d'eau" }
    ],
    tags: ["Miroir", "LED", "Organique", "Anti-buée"]
  },
  {
    id: 12,
    name: "Sèche-serviettes Électrique Sculptural Laiton",
    reference: "RAD-RAD-GOLD",
    category: "Accessoires de salle de bain",
    image: "/images/products/seche-serviettes-laiton.jpg",
    price: null,
    description: "Radiateur sèche-serviettes vertical au profil architectural ultra-plat. Chauffage par rayonnement homogène avec programmateur thermostat sans fil intelligent.",
    shortDescription: "Design géométrique minimaliste pour serviettes chaudes et ambiance cosy.",
    featured: false,
    dimensions: "160 x 50 cm",
    material: "Acier thermolaqué & tubes laiton",
    finish: "Laiton satiné brossé",
    warranty: "5 ans",
    specifications: [
      { label: "Puissance", value: "750 Watts à inertie sèche" },
      { label: "Thermostat", value: "Boîtier mural digital déporté avec fonction Boost" },
      { label: "Norme", value: "Classe II - IPX4" }
    ],
    tags: ["Chauffage", "Sèche-serviette", "Design"]
  }
];

/**
 * Fonctions utilitaires de filtrage et recherche
 */
export function getProductById(id: number | string): Product | undefined {
  const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
  return PRODUCTS.find(p => p.id === numericId);
}

export function getProductByReference(ref: string): Product | undefined {
  return PRODUCTS.find(p => p.reference.toLowerCase() === ref.toLowerCase());
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(p => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter(p => p.category === category);
}

export function getRelatedProducts(productId: number, limit = 3): Product[] {
  const current = getProductById(productId);
  if (!current) return PRODUCTS.slice(0, limit);
  return PRODUCTS
    .filter(p => p.id !== productId && p.category === current.category)
    .slice(0, limit);
}
