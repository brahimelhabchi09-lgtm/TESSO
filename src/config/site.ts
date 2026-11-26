export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  logo: string;
  pdfCatalogueUrl: string;
  whatsapp: {
    phoneNumber: string; // international format without + or spaces for wa.me, e.g. "212600000000"
    displayNumber: string; // pretty display e.g. "+212 (0) 6 00 00 00 00"
    defaultMessage: string;
  };
  contact: {
    phone: string;
    email: string;
    address: {
      street: string;
      city: string;
      country: string;
      full: string;
    };
    openingHours: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
  };
  currency: {
    code: string;
    symbol: string;
    position: 'after' | 'before';
    onDemandText: string;
  };
  socials: {
    instagram: string;
    facebook?: string;
    linkedin?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "AKWA WAKA",
  shortName: "AKWA WAKA",
  tagline: "L'élégance prend forme.",
  description: "Des solutions raffinées pour vos espaces de vie, du sanitaire à la menuiserie aluminium : meubles de salle de bain, fenêtres, portes et portes de garage sur devis.",
  logo: "/images/brand/akwa-waka-logo.png",
  pdfCatalogueUrl: "/CATALOGUE_MEUBLES_2026.pdf",
  whatsapp: {
    phoneNumber: "212699084841",
    displayNumber: "+212 699-084841",
    defaultMessage: "Bonjour AKWA WAKA, je souhaite avoir plus d'informations concernant vos produits.",
  },
  contact: {
    phone: "+212 699-084841",
    email: "contact@akwawaka.ma",
    address: {
      street: "Showroom Sanitaire & Bain",
      city: "Casablanca",
      country: "Maroc",
      full: "Showroom Sanitaire & Bain, Casablanca, Maroc",
    },
    openingHours: {
      weekdays: "Lundi - Vendredi : 09h00 - 19h00",
      saturday: "Samedi : 09h30 - 18h30",
      sunday: "Dimanche : Sur rendez-vous",
    },
  },
  currency: {
    code: "MAD",
    symbol: "DH",
    position: "after",
    onDemandText: "Prix sur demande",
  },
  socials: {
    instagram: "https://www.instagram.com/akwa_waka/",
  },
};

/**
 * Format price according to catalogue rules
 * - null or undefined => "Prix sur demande"
 * - number => formatted with thousand separators and currency symbol
 */
export function formatPrice(price: number | null | undefined): string {
  if (price === null || price === undefined) {
    return siteConfig.currency.onDemandText;
  }
  const formattedNumber = new Intl.NumberFormat('fr-MA', {
    maximumFractionDigits: 0,
  }).format(price);

  return siteConfig.currency.position === 'after'
    ? `${formattedNumber} ${siteConfig.currency.symbol}`
    : `${siteConfig.currency.symbol} ${formattedNumber}`;
}

/**
 * Generate a pre-filled WhatsApp link for general contact or specific product inquiry
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${siteConfig.whatsapp.phoneNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a direct WhatsApp inquiry URL for a specific product
 */
export function getProductWhatsAppUrl(product: { name: string; reference: string }): string {
  const text = `Bonjour AKWA WAKA, je souhaite demander des informations et un devis pour le produit suivant :\n\n• Produit : ${product.name}\n• Référence : ${product.reference}\n\nMerci d'avance pour votre retour.`;
  return getWhatsAppUrl(text);
}

/**
 * Format a measurement for French quotation copy (1.50 m → 1,50 m).
 * Non-numeric placeholders such as "À préciser" are returned unchanged.
 */
export function formatMeasurement(value: string, unit?: string): string {
  const trimmed = value.trim();
  if (!trimmed || trimmed.toLowerCase() === 'à préciser') {
    return 'À préciser';
  }

  const normalized = trimmed.replace(/\s/g, '').replace(',', '.');
  const num = Number(normalized);
  if (!Number.isFinite(num)) {
    return unit ? `${trimmed} ${unit}` : trimmed;
  }

  const decimals = Math.min((normalized.split('.')[1] || '').length, 2);
  const formatted = new Intl.NumberFormat('fr-FR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: 2,
  }).format(num);

  return unit ? `${formatted} ${unit}` : formatted;
}

export interface AluminiumQuotationParams {
  productName: string;
  reference?: string;
  color?: string;
  width?: string;
  height?: string;
  unit?: string;
  quantity?: number;
  message?: string;
}

/**
 * French quotation request shared by the on-page preview and the WhatsApp link.
 */
export function buildAluminiumQuotationMessage(params: AluminiumQuotationParams): string {
  const unit = params.unit || 'cm';
  const lines = [
    'Bonjour AKWA WAKA,',
    '',
    'Je souhaite demander un devis pour :',
    '',
    `Produit : ${params.productName}${params.reference ? ` (Réf : ${params.reference})` : ''}`,
  ];

  if (params.color) {
    lines.push(`Couleur : ${params.color}`);
  }

  const widthLabel = formatMeasurement(params.width || '', unit);
  const heightLabel = formatMeasurement(params.height || '', unit);
  lines.push(`Largeur : ${widthLabel}`);
  lines.push(`Hauteur : ${heightLabel}`);

  if (params.quantity && params.quantity > 0) {
    lines.push(`Quantité : ${params.quantity}`);
  }
  if (params.message && params.message.trim()) {
    lines.push('');
    lines.push(`Précisions : ${params.message.trim()}`);
  }

  lines.push('');
  lines.push("Merci de me contacter pour plus d'informations.");

  return lines.join('\n');
}

/**
 * Generate a formatted French WhatsApp quotation request for custom aluminium products
 */
export function getAluminiumQuotationWhatsAppUrl(params: AluminiumQuotationParams): string {
  return getWhatsAppUrl(buildAluminiumQuotationMessage(params));
}
