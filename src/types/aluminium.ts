export type AluminiumCategory =
  | "Fenêtres en aluminium"
  | "Portes en aluminium"
  | "Baies vitrées coulissantes"
  | "Portes-fenêtres"
  | "Coulissants aluminium"
  | "Portes de garage"
  | "Accessoires aluminium";

export type MeasurementUnit = "mm" | "cm" | "m";

export type GarageOpeningType =
  | "Sectionnelle"
  | "Enroulable"
  | "Basculante"
  | "Battante"
  | "Motorisée";

export interface AluminiumColorOption {
  id: string;
  name: string;
  hex: string;
  secondaryHex?: string;
  pattern?: "solid" | "metallic" | "wood" | "matte" | "gloss";
  textureImage?: string;
  finishDescription: string;
  category: "color" | "finish";
}

export interface AluminiumDimensions {
  width: number | null;
  height: number | null;
  unit: MeasurementUnit;
}

export interface AluminiumSpecification {
  label: string;
  value: string;
}

export interface AluminiumProduct {
  id: string;
  name: string;
  reference: string;
  category: AluminiumCategory;
  image: string;
  imageAlt?: string;
  imageNote?: string;
  description: string;
  shortDescription?: string;
  profile?: string;
  openingSystem?: string;
  garageType?: GarageOpeningType;
  motorisation?: string;
  colors: string[]; // Names matching AluminiumColorOption.name
  dimensions: AluminiumDimensions;
  price: number | null; // null => "Prix sur demande"
  featured?: boolean;
  specifications?: AluminiumSpecification[];
  tags?: string[];
}

export interface AluminiumQuotationInput {
  category: AluminiumCategory | "";
  productId: string;
  productName: string;
  reference: string;
  color: string;
  width: string;
  height: string;
  unit: MeasurementUnit;
  quantity: number;
  message: string;
}
