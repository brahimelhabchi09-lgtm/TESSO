export type ProductCategory =
  | "Meubles de salle de bain"
  | "Lavabos et vasques"
  | "WC et toilettes"
  | "Robinets et mitigeurs"
  | "Douches et accessoires"
  | "Accessoires de salle de bain";

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  reference: string;
  category: ProductCategory;
  image: string;
  price: number | null; // null represents "Prix sur demande"
  description: string;
  shortDescription?: string;
  featured?: boolean;
  dimensions?: string;
  material?: string;
  finish?: string;
  warranty?: string;
  specifications?: ProductSpecification[];
  tags?: string[];
}

export interface CategoryInfo {
  id: string;
  name: ProductCategory;
  description: string;
  iconName: string;
  itemCount?: number;
}
