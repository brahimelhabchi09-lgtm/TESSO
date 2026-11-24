import { Product } from '../types/product';

/**
 * CATALOGUE CENTRALISÉ DES PRODUITS AKWA WAKA
 * 
 * - Tous les meubles issus du CATALOGUE_MEUBLES_2026.pdf (43 références réelles)
 * - Produits sanitaires complémentaires (WC, vasques, robinetterie, douches, accessoires)
 * - Prix null = "Prix sur demande"
 * - Numéro WhatsApp et contact configurés dans `src/config/site.ts`
 */

const MEUBLES_CATALOGUE: Product[] = [
  {
    id: 13,
    name: "Ensemble Meuble Suspendu V60 60cm",
    reference: "V60-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/v60-60cm.jpg",
    price: null,
    description: "Meuble de salle de bain suspendu contemporain avec façades blanches sculptées en relief losange 3D. Comprend le meuble sous-vasque 2 tiroirs, le plan vasque céramique et le miroir rétro-éclairé LED.",
    shortDescription: "Façade texturée losange 3D, vasque céramique et miroir LED.",
    featured: true,
    dimensions: "L 60 x P 48 x H 50 cm",
    material: "MDF hydrofuge & Céramique sanitaire",
    finish: "Blanc mat texturé",
    specifications: [
      { label: "Largeur", value: "60 cm" },
      { label: "Configuration", value: "Meuble suspendu 2 tiroirs amortis + Vasque + Miroir LED" },
      { label: "Finition façade", value: "Relief géométrique losange 3D" }
    ],
    tags: ["Meuble", "60cm", "Blanc", "Miroir LED"]
  },
  {
    id: 14,
    name: "Ensemble Meuble Suspendu V60 80cm",
    reference: "V60-80 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/v60-80cm.jpg",
    price: null,
    description: "Meuble vasque grand format 80cm avec façades à motifs géométriques en relief diamant. Tiroirs à fermeture douce Soft-Close, plan vasque ergonomique et miroir LED panoramique.",
    shortDescription: "Grand format 80cm à façade diamantée 3D et miroir tactile.",
    featured: false,
    dimensions: "L 80 x P 48 x H 50 cm",
    material: "MDF hydrofuge & Céramique",
    finish: "Blanc mat texturé",
    specifications: [
      { label: "Largeur", value: "80 cm" },
      { label: "Configuration", value: "Meuble suspendu 2 tiroirs + Vasque céramique + Miroir LED" }
    ],
    tags: ["Meuble", "80cm", "Blanc"]
  },
  {
    id: 15,
    name: "Ensemble Meuble Suspendu V2 60cm",
    reference: "V2-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/v2-60cm.jpg",
    price: null,
    description: "Meuble vasque contemporain blanc aux façades cannelées verticales élégantes et angles arrondis. Équipé d'une vasque céramique et d'un grand miroir rectangulaire rétro-éclairé.",
    shortDescription: "Lignes cannelées verticales et angles doux arrondis.",
    featured: true,
    dimensions: "L 60 x P 48 x H 52 cm",
    material: "MDF hydrofuge haute densité",
    finish: "Blanc pur laqué",
    specifications: [
      { label: "Largeur", value: "60 cm" },
      { label: "Façade", value: "Cannelures verticales délicates" },
      { label: "Équipement", value: "Vasque céramique et miroir LED anti-buée" }
    ],
    tags: ["Meuble", "60cm", "Cannelé"]
  },
  {
    id: 16,
    name: "Ensemble Meuble Suspendu V2 80cm",
    reference: "V2-80 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/v2-80cm.jpg",
    price: null,
    description: "Version 80cm du modèle V2 avec grand volume de rangement, façades cannelées design et miroir panoramique rectangulaire à bords arrondis.",
    shortDescription: "Largeur 80cm à finition cannelée et miroir panoramique LED.",
    featured: false,
    dimensions: "L 80 x P 48 x H 52 cm",
    material: "MDF hydrofuge & Céramique",
    finish: "Blanc satiné",
    specifications: [
      { label: "Largeur", value: "80 cm" },
      { label: "Tiroirs", value: "2 tiroirs coulissants grande capacité" }
    ],
    tags: ["Meuble", "80cm", "Cannelé"]
  },
  {
    id: 17,
    name: "Ensemble Meuble Suspendu V9 60cm",
    reference: "V9-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/v9-60cm.jpg",
    price: null,
    description: "Meuble suspendu minimaliste blanc mat aux lignes épurées sans poignées visibles. Plan vasque céramique extra-plat et miroir rectangulaire LED à coins arrondis.",
    shortDescription: "Design minimaliste épuré avec vasque céramique et miroir LED.",
    featured: false,
    dimensions: "L 60 x P 48 x H 50 cm",
    material: "MDF hydrofuge",
    finish: "Blanc mat soyeux",
    specifications: [
      { label: "Largeur", value: "60 cm" },
      { label: "Style", value: "Minimaliste contemporain" }
    ],
    tags: ["Meuble", "60cm", "Minimaliste"]
  },
  {
    id: 18,
    name: "Ensemble Meuble Suspendu V9 80cm",
    reference: "V9-80 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/v9-80cm.jpg",
    price: null,
    description: "Meuble vasque 80cm à deux tiroirs lisses au toucher velours avec prise de main intégrée discrète et miroir lumineux LED assorti.",
    shortDescription: "80cm deux tiroirs lisses sans poignées et miroir LED.",
    featured: false,
    dimensions: "L 80 x P 48 x H 50 cm",
    material: "MDF hydrofuge",
    finish: "Blanc mat",
    specifications: [
      { label: "Largeur", value: "80 cm" },
      { label: "Rangement", value: "2 tiroirs spacieux" }
    ],
    tags: ["Meuble", "80cm"]
  },
  {
    id: 19,
    name: "Ensemble Meuble Suspendu V1 60cm",
    reference: "V1-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/v1-60cm.jpg",
    price: null,
    description: "Meuble suspendu design avec bandeau d'ambiance LED sous la vasque créant un halo lumineux chaleureux. Comprend vasque et miroir tactile.",
    shortDescription: "Bandeau lumineux LED sous-vasque intégré et miroir tactile.",
    featured: true,
    dimensions: "L 60 x P 48 x H 52 cm",
    material: "MDF hydrofuge & Éclairage LED",
    finish: "Blanc laqué",
    specifications: [
      { label: "Largeur", value: "60 cm" },
      { label: "Éclairage", value: "Bandeau LED d'ambiance intégré" }
    ],
    tags: ["Meuble", "60cm", "LED intégrée"]
  },
  {
    id: 20,
    name: "Ensemble Meuble Suspendu V1 80cm",
    reference: "V1-80 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/v1-80cm.jpg",
    price: null,
    description: "Meuble suspendu 80cm combinant 2 tiroirs centraux et une porte latérale cannelée, surmonté d'un bandeau lumineux LED continu.",
    shortDescription: "Format 80cm avec tiroirs, porte cannelée et bandeau lumineux.",
    featured: false,
    dimensions: "L 80 x P 48 x H 52 cm",
    material: "MDF hydrofuge & Céramique",
    finish: "Blanc satiné",
    specifications: [
      { label: "Largeur", value: "80 cm" },
      { label: "Configuration", value: "Tiroirs + porte latérale + bandeau LED" }
    ],
    tags: ["Meuble", "80cm", "LED"]
  },
  {
    id: 21,
    name: "Ensemble Meuble Y11 60cm avec Colonne",
    reference: "Y11-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y11-60cm.jpg",
    price: null,
    description: "Ensemble complet d'exception comprenant un meuble vasque cannelé, un miroir rond effet soleil avec LED rétro-éclairé et une colonne haute suspendue assortie.",
    shortDescription: "Meuble cannelé avec miroir rond soleil LED et colonne haute.",
    featured: true,
    dimensions: "L 60 x P 48 x H 52 cm (Colonne: 30 x 140 cm)",
    material: "MDF hydrofuge haute qualité",
    finish: "Blanc mat strié",
    specifications: [
      { label: "Largeur meuble", value: "60 cm" },
      { label: "Miroir", value: "Rond rétro-éclairé effet soleil tactile" },
      { label: "Inclus", value: "Colonne de rangement haute assortie" }
    ],
    tags: ["Meuble", "60cm", "Colonne", "Miroir rond"]
  },
  {
    id: 22,
    name: "Ensemble Meuble Y11 80cm avec Colonne",
    reference: "Y11-80 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y11-80cm.jpg",
    price: null,
    description: "Grand ensemble 80cm avec meuble vasque cannelé double tiroir, miroir soleil lumineux grand diamètre et colonne murale suspendue.",
    shortDescription: "Grand format 80cm avec miroir rond soleil et colonne.",
    featured: false,
    dimensions: "L 80 x P 48 x H 52 cm",
    material: "MDF hydrofuge",
    finish: "Blanc mat strié",
    specifications: [
      { label: "Largeur", value: "80 cm" },
      { label: "Éléments", value: "Meuble 80cm + Colonne + Miroir soleil" }
    ],
    tags: ["Meuble", "80cm", "Colonne"]
  },
  {
    id: 23,
    name: "Ensemble Meuble Suspendu Y15 60cm",
    reference: "Y15-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y15-60cm.jpg",
    price: null,
    description: "Meuble suspendu avec tiroirs profilés ergonomiques et armoire de toilette haute à miroir avec éclairage supérieur intégré.",
    shortDescription: "Meuble suspendu 60cm et armoire de toilette miroir lumineuse.",
    featured: false,
    dimensions: "L 60 x P 48 x H 50 cm",
    material: "MDF hydrofuge",
    finish: "Blanc soyeux",
    specifications: [
      { label: "Largeur", value: "60 cm" },
      { label: "Haut", value: "Armoire miroir de rangement" }
    ],
    tags: ["Meuble", "60cm", "Armoire miroir"]
  },
  {
    id: 24,
    name: "Ensemble Meuble Suspendu Y15 80cm",
    reference: "Y15-80 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y15-80cm.jpg",
    price: null,
    description: "Meuble vasque 80cm à double tiroir amorti avec armoire de toilette miroir 2 portes et réglette LED intégrée.",
    shortDescription: "Largeur 80cm avec grande armoire miroir 2 portes.",
    featured: false,
    dimensions: "L 80 x P 48 x H 50 cm",
    material: "MDF hydrofuge",
    finish: "Blanc soyeux",
    specifications: [
      { label: "Largeur", value: "80 cm" }
    ],
    tags: ["Meuble", "80cm"]
  },
  {
    id: 25,
    name: "Ensemble Meuble Suspendu Y14 60cm",
    reference: "Y14-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y14-60cm.jpg",
    price: null,
    description: "Design contemporain épuré à double tiroir lisse sans poignées, vasque céramique et miroir rectangulaire aux coins adoucis.",
    shortDescription: "Lignes douces sans poignée et miroir panoramique LED.",
    featured: false,
    dimensions: "L 60 x P 48 x H 50 cm",
    material: "MDF hydrofuge & Céramique",
    finish: "Blanc mat",
    specifications: [
      { label: "Largeur", value: "60 cm" }
    ],
    tags: ["Meuble", "60cm"]
  },
  {
    id: 26,
    name: "Ensemble Meuble Suspendu Y14 80cm",
    reference: "Y14-80 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y14-80cm.jpg",
    price: null,
    description: "Meuble suspendu 80cm à double tiroir grande largeur, plan vasque ergonomique et grand miroir horizontal LED.",
    shortDescription: "Format 80cm deux tiroirs horizontaux et miroir LED.",
    featured: false,
    dimensions: "L 80 x P 48 x H 50 cm",
    material: "MDF hydrofuge",
    finish: "Blanc mat",
    specifications: [
      { label: "Largeur", value: "80 cm" }
    ],
    tags: ["Meuble", "80cm"]
  },
  {
    id: 27,
    name: "Ensemble Meuble Suspendu Y9 60cm",
    reference: "Y9-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y9-60cm.jpg",
    price: null,
    description: "Meuble vasque avec façades striées verticales fines, éclairage d'ambiance LED sous-vasque et miroir carré lumineux.",
    shortDescription: "Façade cannelée fine, bandeau LED d'ambiance et miroir carré.",
    featured: false,
    dimensions: "L 60 x P 48 x H 52 cm",
    material: "MDF hydrofuge",
    finish: "Blanc mat",
    specifications: [
      { label: "Largeur", value: "60 cm" }
    ],
    tags: ["Meuble", "60cm", "Cannelé"]
  },
  {
    id: 28,
    name: "Ensemble Meuble Suspendu Y9 80cm",
    reference: "Y9-80 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y9-80cm.jpg",
    price: null,
    description: "Meuble 80cm avec façades striées délicates, éclairage LED sous plan vasque et grand miroir rectangulaire assorti.",
    shortDescription: "80cm strié vertical avec bandeau lumineux LED intégré.",
    featured: false,
    dimensions: "L 80 x P 48 x H 52 cm",
    material: "MDF hydrofuge",
    finish: "Blanc mat",
    specifications: [
      { label: "Largeur", value: "80 cm" }
    ],
    tags: ["Meuble", "80cm"]
  },
  {
    id: 29,
    name: "Ensemble Meuble Suspendu Y7 60cm",
    reference: "Y7-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y7-60cm.jpg",
    price: null,
    description: "Meuble suspendu cannelé avec plan vasque céramique encastré, bandeau lumineux LED et miroir vertical tactile.",
    shortDescription: "Style cannelé moderne avec bandeau LED et miroir vertical.",
    featured: false,
    dimensions: "L 60 x P 48 x H 52 cm",
    material: "MDF hydrofuge",
    finish: "Blanc pur",
    specifications: [
      { label: "Largeur", value: "60 cm" }
    ],
    tags: ["Meuble", "60cm"]
  },
  {
    id: 30,
    name: "Ensemble Meuble Suspendu Y310 60cm",
    reference: "Y310-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y310-60cm.jpg",
    price: null,
    description: "Meuble de caractère avec façade travaillée en nid d'abeille 3D, vasque moulée blanche et miroir carré LED.",
    shortDescription: "Façade motif nid d'abeille 3D et miroir carré LED.",
    featured: false,
    dimensions: "L 60 x P 48 x H 50 cm",
    material: "MDF hydrofuge",
    finish: "Blanc texturé",
    specifications: [
      { label: "Largeur", value: "60 cm" },
      { label: "Motif", value: "Nid d'abeille géométrique" }
    ],
    tags: ["Meuble", "60cm", "Texturé"]
  },
  {
    id: 31,
    name: "Ensemble Meuble Suspendu V6 60cm",
    reference: "V6-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/v6-60cm.jpg",
    price: null,
    description: "Meuble vasque avec façade en relief losange matelassé contemporain, tiroirs amortis et miroir vertical LED.",
    shortDescription: "Façade matelassée géométrique et miroir vertical LED.",
    featured: false,
    dimensions: "L 60 x P 48 x H 50 cm",
    material: "MDF hydrofuge",
    finish: "Blanc mat",
    specifications: [
      { label: "Largeur", value: "60 cm" }
    ],
    tags: ["Meuble", "60cm"]
  },
  {
    id: 32,
    name: "Ensemble Meuble Suspendu V6 80cm",
    reference: "V6-80 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/v6-80cm.jpg",
    price: null,
    description: "Meuble suspendu 80cm à double tiroir texturé effet diamant 3D, vasque ergonomique et miroir rectangulaire LED.",
    shortDescription: "Largeur 80cm à façade diamantée 3D et grand miroir LED.",
    featured: false,
    dimensions: "L 80 x P 48 x H 50 cm",
    material: "MDF hydrofuge",
    finish: "Blanc mat",
    specifications: [
      { label: "Largeur", value: "80 cm" }
    ],
    tags: ["Meuble", "80cm"]
  },
  {
    id: 33,
    name: "Ensemble Meuble Suspendu V4 60cm",
    reference: "V4-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/v4-60cm.jpg",
    price: null,
    description: "Meuble vasque à double tiroir aux cannelures profondes verticales, vasque rectangulaire et grand miroir rétro-éclairé.",
    shortDescription: "Cannelures verticales profondes et miroir LED.",
    featured: false,
    dimensions: "L 60 x P 48 x H 52 cm",
    material: "MDF hydrofuge",
    finish: "Blanc mat",
    specifications: [
      { label: "Largeur", value: "60 cm" }
    ],
    tags: ["Meuble", "60cm"]
  },
  {
    id: 34,
    name: "Ensemble Meuble Suspendu V4 80cm",
    reference: "V4-80 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/v4-80cm.jpg",
    price: null,
    description: "Format 80cm avec façades cannelées deux tiroirs, vasque céramique et miroir panoramique LED.",
    shortDescription: "80cm cannelé avec vasque céramique et miroir panoramique.",
    featured: false,
    dimensions: "L 80 x P 48 x H 52 cm",
    material: "MDF hydrofuge",
    finish: "Blanc mat",
    specifications: [
      { label: "Largeur", value: "80 cm" }
    ],
    tags: ["Meuble", "80cm"]
  },
  {
    id: 35,
    name: "Ensemble Meuble V5 60cm avec Colonne",
    reference: "V5-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/v5-60cm.jpg",
    price: null,
    description: "Ensemble salle de bain comprenant le meuble vasque cannelé deux tiroirs, le miroir rectangulaire LED et une colonne suspendue assortie.",
    shortDescription: "Meuble cannelé 60cm avec colonne de rangement haute et miroir LED.",
    featured: false,
    dimensions: "L 60 x P 48 x H 52 cm",
    material: "MDF hydrofuge",
    finish: "Blanc mat",
    specifications: [
      { label: "Largeur", value: "60 cm" },
      { label: "Colonne incluse", value: "Oui" }
    ],
    tags: ["Meuble", "60cm", "Colonne"]
  },
  {
    id: 36,
    name: "Ensemble Meuble Suspendu Y38 60cm",
    reference: "Y38-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y38-60cm.jpg",
    price: null,
    description: "Meuble suspendu architectural moderne avec niche inférieure arquée rétro-éclairée par LED, vasque céramique et miroir LED.",
    shortDescription: "Niche inférieure rétro-éclairée et miroir carré LED.",
    featured: true,
    dimensions: "L 60 x P 48 x H 55 cm",
    material: "MDF hydrofuge & LED",
    finish: "Blanc pur",
    specifications: [
      { label: "Largeur", value: "60 cm" },
      { label: "Particularité", value: "Niche inférieure avec éclairage LED intégré" }
    ],
    tags: ["Meuble", "60cm", "Niche LED"]
  },
  {
    id: 37,
    name: "Ensemble Meuble Suspendu Y3 60cm",
    reference: "Y3-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y3-60cm.jpg",
    price: null,
    description: "Meuble deux tiroirs blanc lisse associé à une armoire haute à porte miroir intégrant une réglette lumineuse LED.",
    shortDescription: "Tiroirs épurés et armoire miroir de toilette lumineuse.",
    featured: false,
    dimensions: "L 60 x P 48 x H 50 cm",
    material: "MDF hydrofuge",
    finish: "Blanc mat",
    specifications: [
      { label: "Largeur", value: "60 cm" }
    ],
    tags: ["Meuble", "60cm", "Armoire miroir"]
  },
  {
    id: 38,
    name: "Ensemble Meuble Y39 60cm avec Miroir Rond",
    reference: "Y39-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y39-60cm.jpg",
    price: null,
    description: "Meuble contemporain blanc avec poignées fines noires horizontales, miroir rond rétro-éclairé LED et colonne de rangement murale.",
    shortDescription: "Poignées noires mates contrastées, miroir rond et colonne.",
    featured: false,
    dimensions: "L 60 x P 48 x H 50 cm",
    material: "MDF hydrofuge",
    finish: "Blanc mat & Poignées noires",
    specifications: [
      { label: "Largeur", value: "60 cm" },
      { label: "Inclus", value: "Meuble + Miroir rond + Colonne" }
    ],
    tags: ["Meuble", "60cm", "Miroir rond"]
  },
  {
    id: 39,
    name: "Ensemble Meuble Suspendu Y2 60cm",
    reference: "Y2-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y2-60cm.jpg",
    price: null,
    description: "Meuble suspendu deux tiroirs aux stries verticales fines, vasque céramique et miroir vertical LED.",
    shortDescription: "Stries verticales élégantes et miroir vertical LED.",
    featured: false,
    dimensions: "L 60 x P 48 x H 52 cm",
    material: "MDF hydrofuge",
    finish: "Blanc mat",
    specifications: [
      { label: "Largeur", value: "60 cm" }
    ],
    tags: ["Meuble", "60cm"]
  },
  {
    id: 40,
    name: "Ensemble Meuble Suspendu Y1 60cm",
    reference: "Y1-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y1-60cm.jpg",
    price: null,
    description: "Meuble suspendu avec gorge lumineuse LED sous-vasque, poignée intégrée profilée et miroir d'ambiance.",
    shortDescription: "Gorge lumineuse LED intégrée et miroir tactile.",
    featured: false,
    dimensions: "L 60 x P 48 x H 52 cm",
    material: "MDF hydrofuge",
    finish: "Blanc laqué",
    specifications: [
      { label: "Largeur", value: "60 cm" }
    ],
    tags: ["Meuble", "60cm"]
  },
  {
    id: 41,
    name: "Ensemble Meuble Suspendu Y1 80cm",
    reference: "Y1-80 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y1-80cm.jpg",
    price: null,
    description: "Format 80cm combinant tiroirs centraux, porte latérale cannelée et bandeau lumineux d'ambiance LED sous-vasque.",
    shortDescription: "80cm avec tiroirs, porte striée et bandeau lumineux LED.",
    featured: false,
    dimensions: "L 80 x P 48 x H 52 cm",
    material: "MDF hydrofuge",
    finish: "Blanc laqué",
    specifications: [
      { label: "Largeur", value: "80 cm" }
    ],
    tags: ["Meuble", "80cm"]
  },
  {
    id: 42,
    name: "Ensemble Meuble Noir Mat Y1N 60cm",
    reference: "Y1N-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y1n-60cm.jpg",
    price: null,
    description: "Meuble suspendu de caractère noir mat profond avec poignée dorée laiton brossé, plan vasque blanc et miroir carré LED.",
    shortDescription: "Noir mat profond et poignée laiton or brossé.",
    featured: true,
    dimensions: "L 60 x P 48 x H 52 cm",
    material: "MDF hydrofuge & Laiton",
    finish: "Noir mat & Or brossé",
    specifications: [
      { label: "Largeur", value: "60 cm" },
      { label: "Coloris", value: "Noir mat et poignée or brossé" }
    ],
    tags: ["Meuble", "60cm", "Noir mat", "Or"]
  },
  {
    id: 43,
    name: "Ensemble Meuble Noir Mat Y1N 80cm",
    reference: "Y1N-80 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y1n-80cm.jpg",
    price: null,
    description: "Version 80cm noir mat avec porte latérale striée, poignée dorée et miroir rectangulaire LED grand format.",
    shortDescription: "Noir mat 80cm avec porte striée et accents dorés.",
    featured: false,
    dimensions: "L 80 x P 48 x H 52 cm",
    material: "MDF hydrofuge & Laiton",
    finish: "Noir mat & Or brossé",
    specifications: [
      { label: "Largeur", value: "80 cm" }
    ],
    tags: ["Meuble", "80cm", "Noir mat"]
  },
  {
    id: 44,
    name: "Ensemble Meuble Suspendu Y12 60cm",
    reference: "Y12-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y12-60cm.jpg",
    price: null,
    description: "Meuble vasque contemporain blanc avec poignées fines noires contrastées et miroir rectangulaire à cadre arrondi LED.",
    shortDescription: "Meuble blanc à poignées noires graphiques et miroir LED.",
    featured: false,
    dimensions: "L 60 x P 48 x H 50 cm",
    material: "MDF hydrofuge",
    finish: "Blanc satiné",
    specifications: [
      { label: "Largeur", value: "60 cm" }
    ],
    tags: ["Meuble", "60cm"]
  },
  {
    id: 45,
    name: "Ensemble Meuble Suspendu Y12 80cm",
    reference: "Y12-80 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y12-80cm.jpg",
    price: null,
    description: "Format 80cm deux tiroirs avec poignées noires horizontales épurées, plan vasque ergonomique et miroir LED.",
    shortDescription: "Format 80cm avec poignées noires et miroir panoramique.",
    featured: false,
    dimensions: "L 80 x P 48 x H 50 cm",
    material: "MDF hydrofuge",
    finish: "Blanc satiné",
    specifications: [
      { label: "Largeur", value: "80 cm" }
    ],
    tags: ["Meuble", "80cm"]
  },
  {
    id: 46,
    name: "Ensemble Meuble Y10 60cm avec Miroir Ovale",
    reference: "Y10-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y10-60cm.jpg",
    price: null,
    description: "Meuble suspendu avec façade texturée losange, poignées fines or brossé et somptueux miroir ovale cerclé de laiton rétro-éclairé.",
    shortDescription: "Façade texturée, détails laiton doré et miroir ovale LED.",
    featured: true,
    dimensions: "L 60 x P 48 x H 50 cm",
    material: "MDF hydrofuge & Laiton",
    finish: "Blanc texturé & Or brossé",
    specifications: [
      { label: "Largeur", value: "60 cm" },
      { label: "Miroir", value: "Ovale rétro-éclairé avec cerclage doré" }
    ],
    tags: ["Meuble", "60cm", "Miroir ovale", "Or"]
  },
  {
    id: 47,
    name: "Ensemble Meuble Y10 80cm avec Miroir Ovale",
    reference: "Y10-80 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y10-80cm.jpg",
    price: null,
    description: "Version 80cm texturée avec poignées en laiton doré et grand miroir ovale rétro-éclairé LED.",
    shortDescription: "80cm texturé avec accents laiton et miroir ovale LED.",
    featured: false,
    dimensions: "L 80 x P 48 x H 50 cm",
    material: "MDF hydrofuge & Laiton",
    finish: "Blanc texturé & Or brossé",
    specifications: [
      { label: "Largeur", value: "80 cm" }
    ],
    tags: ["Meuble", "80cm", "Miroir ovale"]
  },
  {
    id: 48,
    name: "Ensemble Meuble Suspendu Y13 60cm",
    reference: "Y13-60 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y13-60cm.jpg",
    price: null,
    description: "Meuble suspendu avec poignée découpée demi-lune et partie basse cannelée, vasque céramique et miroir d'angle doux LED.",
    shortDescription: "Poignée demi-lune et façade striée bicolore avec miroir LED.",
    featured: false,
    dimensions: "L 60 x P 48 x H 50 cm",
    material: "MDF hydrofuge",
    finish: "Blanc mat",
    specifications: [
      { label: "Largeur", value: "60 cm" }
    ],
    tags: ["Meuble", "60cm"]
  },
  {
    id: 49,
    name: "Ensemble Meuble Suspendu Y13 80cm",
    reference: "Y13-80 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/y13-80cm.jpg",
    price: null,
    description: "Version 80cm du modèle Y13 à double tiroir avec prise de main arrondie élégante et grand miroir panoramique LED.",
    shortDescription: "Format 80cm avec prise de main arrondie et miroir LED.",
    featured: false,
    dimensions: "L 80 x P 48 x H 50 cm",
    material: "MDF hydrofuge",
    finish: "Blanc mat",
    specifications: [
      { label: "Largeur", value: "80 cm" }
    ],
    tags: ["Meuble", "80cm"]
  },
  {
    id: 50,
    name: "Ensemble Meuble Suspendu 106 80cm",
    reference: "106-80 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/106-80cm.jpg",
    price: null,
    description: "Meuble suspendu 80cm blanc deux tiroirs avec boutons boules raffinés en laiton doré et grand miroir rond rétro-éclairé LED.",
    shortDescription: "Boutons boules en laiton doré et grand miroir rond LED.",
    featured: true,
    dimensions: "L 80 x P 48 x H 50 cm",
    material: "MDF hydrofuge & Laiton",
    finish: "Blanc pur & Or brossé",
    specifications: [
      { label: "Largeur", value: "80 cm" },
      { label: "Poignées", value: "Boutons ronds laiton doré" },
      { label: "Miroir", value: "Rond grand diamètre rétro-éclairé LED" }
    ],
    tags: ["Meuble", "80cm", "Or", "Miroir rond"]
  },
  {
    id: 51,
    name: "Ensemble Meuble Suspendu MN3003 60cm",
    reference: "MN3003-60CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/mn3003-60cm.jpg",
    price: null,
    description: "Meuble suspendu avec angles adoucis, deux tiroirs blancs lisses, vasque céramique et miroir rond épuré.",
    shortDescription: "Angles doux incurvés deux tiroirs et miroir rond.",
    featured: false,
    dimensions: "L 60 x P 48 x H 50 cm",
    material: "MDF hydrofuge",
    finish: "Blanc satiné",
    specifications: [
      { label: "Largeur", value: "60 cm" }
    ],
    tags: ["Meuble", "60cm", "Miroir rond"]
  },
  {
    id: 52,
    name: "Ensemble Meuble Suspendu MT801 80cm",
    reference: "MT801-80CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/mt801-80cm.jpg",
    price: null,
    description: "Meuble sous-vasque 80cm à deux portes battantes blanc avec bandeau supérieur en aluminium brossé et miroir rectangulaire.",
    shortDescription: "Deux portes battantes et insert supérieur aluminium brossé.",
    featured: false,
    dimensions: "L 80 x P 48 x H 50 cm",
    material: "MDF hydrofuge & Aluminium",
    finish: "Blanc satiné",
    specifications: [
      { label: "Largeur", value: "80 cm" },
      { label: "Ouverture", value: "2 portes battantes" }
    ],
    tags: ["Meuble", "80cm"]
  },
  {
    id: 53,
    name: "Ensemble Meuble Gris Anthracite MN705 80cm",
    reference: "MN705-80CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/mn705-80cm.jpg",
    price: null,
    description: "Meuble suspendu contemporain 80cm en gris anthracite mat avec insert métallique brossé et grand miroir rectangulaire LED.",
    shortDescription: "Finition gris anthracite mat contemporain et miroir LED.",
    featured: true,
    dimensions: "L 80 x P 48 x H 50 cm",
    material: "MDF hydrofuge & Aluminium",
    finish: "Gris anthracite mat",
    specifications: [
      { label: "Largeur", value: "80 cm" },
      { label: "Coloris", value: "Gris anthracite contemporain" }
    ],
    tags: ["Meuble", "80cm", "Gris anthracite"]
  },
  {
    id: 54,
    name: "Ensemble Meuble Gris Perle 116 80cm avec Colonne",
    reference: "116-80 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/116-80cm.jpg",
    price: null,
    description: "Ensemble d'architecte gris perle comprenant meuble vasque à porte et tiroir avec niche ouverte centrale, miroir LED et colonne vitrée haute.",
    shortDescription: "Gris perle avec niche centrale ouverte, miroir LED et colonne.",
    featured: false,
    dimensions: "L 80 x P 48 x H 52 cm",
    material: "MDF hydrofuge & Verre",
    finish: "Gris perle satiné",
    specifications: [
      { label: "Largeur", value: "80 cm" },
      { label: "Inclus", value: "Meuble avec niche + Miroir LED + Colonne vitrée" }
    ],
    tags: ["Meuble", "80cm", "Gris", "Colonne"]
  },
  {
    id: 55,
    name: "Ensemble Meuble Suspendu 109 80cm avec Étagère",
    reference: "109-80 CM",
    category: "Meubles de salle de bain",
    image: "/images/products/meubles/109-80cm.jpg",
    price: null,
    description: "Meuble vasque 80cm gris souris deux portes asymétriques avec miroir rond et double tablette murale assortie.",
    shortDescription: "Gris souris avec miroir rond et tablettes murales assorties.",
    featured: false,
    dimensions: "L 80 x P 48 x H 52 cm",
    material: "MDF hydrofuge",
    finish: "Gris souris mat",
    specifications: [
      { label: "Largeur", value: "80 cm" },
      { label: "Accessoires", value: "Miroir rond et tablette murale inclus" }
    ],
    tags: ["Meuble", "80cm", "Gris"]
  }
];

export const PRODUCTS: Product[] = [
  // Les 43 Meubles de salle de bain réels du CATALOGUE_MEUBLES_2026.pdf
  ...MEUBLES_CATALOGUE
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
