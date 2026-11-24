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
  tagline: "L'art du bain et du sanitaire contemporain",
  description: "Catalogue exclusif d'équipements de salle de bain : meubles contemporains, vasques, robinetterie haut de gamme et sanitaires de précision.",
  logo: "/images/brand/akwa-waka-logo.png",
  pdfCatalogueUrl: "/CATALOGUE_MEUBLES_2026.pdf",
  whatsapp: {
    phoneNumber: "212600000000",
    displayNumber: "+212 (0) 6 00 00 00 00",
    defaultMessage: "Bonjour AKWA WAKA, je souhaite avoir plus d'informations concernant vos produits.",
  },
  contact: {
    phone: "+212 (0) 5 22 00 00 00",
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
