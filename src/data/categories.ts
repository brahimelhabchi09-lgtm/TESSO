import { CategoryInfo, ProductCategory } from '../types/product';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "meubles",
    name: "Meubles de salle de bain",
    description: "Meubles suspendus, ensembles vasque & colonnes de rangement en bois noble et finitions laquées.",
    iconName: "Archive",
  },
  {
    id: "lavabos",
    name: "Lavabos et vasques",
    description: "Vasques à poser en céramique fine, marbre taillé, pierre naturelle et vasques encastrées.",
    iconName: "Maximize2",
  },
  {
    id: "wc",
    name: "WC et toilettes",
    description: "Cuvettes suspendues sans bride, WC japonais intelligents et réservoirs encastrés discrets.",
    iconName: "Sparkles",
  },
  {
    id: "robinets",
    name: "Robinets et mitigeurs",
    description: "Mitigeurs lavabo, bain-douche et encastrés en laiton brossé, noir mat ou chrome poli.",
    iconName: "Droplets",
  },
  {
    id: "douches",
    name: "Douches et accessoires",
    description: "Colonnes thermostatiques, ciels de pluie encastrés, parois verrières et caniveaux invisibles.",
    iconName: "ShowerHead",
  },
  {
    id: "accessoires",
    name: "Accessoires de salle de bain",
    description: "Miroirs LED rétro-éclairés, porte-serviettes chauffants, patères et distributeurs de luxe.",
    iconName: "Sliders",
  },
];

export const CATEGORY_NAMES: ProductCategory[] = CATEGORIES.map((c) => c.name);
