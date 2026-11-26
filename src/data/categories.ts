import { CategoryInfo, ProductCategory } from '../types/product';
import { AluminiumCategory } from '../types/aluminium';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "meubles",
    name: "Meubles de salle de bain",
    description: "Meubles suspendus, ensembles vasque & colonnes de rangement en finitions contemporaines.",
    iconName: "Archive",
  },
  {
    id: "lavabos",
    name: "Lavabos et vasques",
    description: "Vasques à poser en céramique fine, pierre et vasques encastrées.",
    iconName: "Maximize2",
  },
  {
    id: "wc",
    name: "WC et toilettes",
    description: "Cuvettes suspendues sans bride, WC intelligents et réservoirs encastrés.",
    iconName: "Sparkles",
  },
  {
    id: "robinets",
    name: "Robinets et mitigeurs",
    description: "Mitigeurs lavabo, bain-douche et encastrés en finitions contemporaines.",
    iconName: "Droplets",
  },
  {
    id: "douches",
    name: "Douches et accessoires",
    description: "Colonnes thermostatiques, ciels de pluie et parois de douche.",
    iconName: "ShowerHead",
  },
  {
    id: "accessoires",
    name: "Accessoires de salle de bain",
    description: "Miroirs LED rétro-éclairés, porte-serviettes et accessoires coordonnés.",
    iconName: "Sliders",
  },
];

export const CATEGORY_NAMES: ProductCategory[] = CATEGORIES.map((c) => c.name);

export interface AluminiumCategoryInfo {
  id: string;
  name: AluminiumCategory;
  description: string;
  badge?: string;
}

export const ALUMINIUM_CATEGORIES: AluminiumCategoryInfo[] = [
  {
    id: "fenetres-alu",
    name: "Fenêtres en aluminium",
    description: "Fenêtres coulissantes, battantes ou oscillo-battantes réalisées sur mesure.",
  },
  {
    id: "portes-alu",
    name: "Portes en aluminium",
    description: "Portes d’entrée et portes architecturales aux lignes contemporaines.",
  },
  {
    id: "baies-vitrees",
    name: "Baies vitrées coulissantes",
    description: "Grandes ouvertures vitrées panoramiques pour terrasses et façades.",
  },
  {
    id: "portes-fenetres",
    name: "Portes-fenêtres",
    description: "Liaisons lumineuses entre espaces intérieurs et extérieurs.",
  },
  {
    id: "coulissants-alu",
    name: "Coulissants aluminium",
    description: "Systèmes coulissants à profilés fins pour cloisons ou façades.",
  },
  {
    id: "portes-garage",
    name: "Portes de garage",
    description: "Portes sectionnelles, enroulables, basculantes, battantes et motorisées.",
    badge: "Sur mesure",
  },
  {
    id: "accessoires-alu",
    name: "Accessoires aluminium",
    description: "Quincaillerie, poignées et compléments coordonnés au nuancier.",
  },
];

export const ALUMINIUM_CATEGORY_NAMES: AluminiumCategory[] = ALUMINIUM_CATEGORIES.map((c) => c.name);
