import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MessageSquare, 
  PhoneCall, 
  Copy, 
  Check, 
  ShieldCheck, 
  Ruler, 
  Truck, 
  ArrowUpRight,
  Info,
  FileText
} from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { formatPrice, getProductWhatsAppUrl, siteConfig } from '../config/site';
import { ProductImage } from '../components/ProductImage';
import { ProductCard } from '../components/ProductCard';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-[#F5F4F0] text-center">
        <h2 className="font-serif text-3xl font-light text-[#092C49] mb-3">
          Produit introuvable
        </h2>
        <p className="text-sm text-[#627180] mb-6 max-w-md">
          La référence demandée n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/catalogue"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#092C49] text-white text-xs font-semibold uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4 text-[#08A6C1]" />
          <span>Retour au catalogue</span>
        </Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 3);

  const handleCopyReference = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(product.reference);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0] pb-24">
      {/* Top Breadcrumb & Return Nav */}
      <div className="border-b border-[#E2DFD7] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#627180]">
            <nav className="flex items-center space-x-2">
              <Link to="/" className="hover:text-[#092C49] transition-colors">Accueil</Link>
              <span>/</span>
              <Link to="/catalogue" className="hover:text-[#092C49] transition-colors">Catalogue</Link>
              <span>/</span>
              <Link 
                to={`/catalogue?category=${encodeURIComponent(product.category)}`}
                className="hover:text-[#092C49] transition-colors"
              >
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-[#092C49] font-medium truncate max-w-[200px]">{product.name}</span>
            </nav>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 text-xs text-[#092C49] hover:text-[#08A6C1] font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Retour à la sélection</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Product Sheet */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Large Product Visual Presentation */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] w-full bg-white border border-[#E2DFD7] overflow-hidden shadow-luxury">
              <ProductImage
                src={product.image}
                alt={product.name}
                category={product.category}
                reference={product.reference}
                className="w-full h-full object-cover object-center"
              />

              {/* Status pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1 bg-[#092C49]/90 text-white backdrop-blur-sm">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Note on imagery */}
            <div className="flex items-center justify-between p-3.5 bg-white border border-[#E2DFD7] text-xs text-[#627180]">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[#08A6C1] shrink-0" />
                <span>
                  Photographie fidèle du modèle. Fiche technique fabricant disponible.
                </span>
              </div>

              <a
                href={siteConfig.pdfCatalogueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#08A6C1] hover:text-[#092C49] font-medium flex items-center gap-1 shrink-0 ml-2"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Catalogue PDF</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Product Details & Actions */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Reference & Copy badge */}
            <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-[#627180]">Référence :</span>
                <span className="text-xs font-mono font-bold text-[#092C49] bg-[#E9F4F5] px-2.5 py-1 rounded-sm border border-[#D3ECF0]">
                  {product.reference}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyReference}
                className="text-xs flex items-center gap-1 text-[#627180] hover:text-[#092C49] transition-colors"
                title="Copier la référence"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">Copiée</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#08A6C1]" />
                    <span>Copier la réf</span>
                  </>
                )}
              </button>
            </div>

            {/* Title */}
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#202B35] leading-tight">
                {product.name}
              </h1>
              {product.shortDescription && (
                <p className="text-sm text-[#08A6C1] font-medium mt-1">
                  {product.shortDescription}
                </p>
              )}
            </div>

            {/* Price Box */}
            <div className="p-4 bg-white border border-[#E2DFD7] flex items-baseline justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#627180] block mb-0.5">
                  Tarif
                </span>
                <span className={`text-2xl font-serif ${
                  product.price === null ? 'text-[#08A6C1] italic' : 'text-[#092C49] font-semibold'
                }`}>
                  {formatPrice(product.price)}
                </span>
              </div>
              <span className="text-[11px] text-[#627180]">
                {product.price === null ? "Devis sur mesure" : "Prix indicatif"}
              </span>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#092C49]">
                Description du produit
              </h3>
              <p className="text-sm text-[#627180] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quick Specs summary */}
            <div className="grid grid-cols-2 gap-3 text-xs pt-2">
              {product.dimensions && (
                <div className="p-3 bg-white border border-[#E2DFD7]">
                  <span className="text-[10px] uppercase tracking-wider text-[#627180] block mb-1 flex items-center gap-1">
                    <Ruler className="w-3 h-3 text-[#08A6C1]" />
                    Dimensions
                  </span>
                  <span className="font-medium text-[#202B35]">{product.dimensions}</span>
                </div>
              )}
              {product.material && (
                <div className="p-3 bg-white border border-[#E2DFD7]">
                  <span className="text-[10px] uppercase tracking-wider text-[#627180] block mb-1">
                    Matériaux
                  </span>
                  <span className="font-medium text-[#202B35]">{product.material}</span>
                </div>
              )}
              {product.finish && (
                <div className="p-3 bg-white border border-[#E2DFD7] col-span-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#627180] block mb-1">
                    Finitions
                  </span>
                  <span className="font-medium text-[#202B35]">{product.finish}</span>
                </div>
              )}
            </div>

            {/* WhatsApp & Call CTAs */}
            <div className="space-y-3 pt-4">
              <a
                href={getProductWhatsAppUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-[#092C49] hover:bg-[#08A6C1] text-white text-xs font-semibold uppercase tracking-[0.15em] flex items-center justify-center gap-3 transition-all shadow-md group"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Demander un devis sur WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-[#08A6C1] group-hover:text-white transition-transform" />
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="py-3 px-4 bg-white hover:bg-[#E9F4F5] border border-[#E2DFD7] text-[#092C49] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#08A6C1]" />
                  <span>Appeler</span>
                </a>

                <Link
                  to="/contact"
                  className="py-3 px-4 bg-white hover:bg-[#E9F4F5] border border-[#E2DFD7] text-[#092C49] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Showroom</span>
                </Link>
              </div>
            </div>

            {/* Reassurance list */}
            <div className="pt-4 border-t border-[#E2DFD7] space-y-2 text-xs text-[#627180]">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#08A6C1]" />
                <span>Expédition soignée sous emballage renforcé</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#08A6C1]" />
                <span>Garantie de conformité constructeur</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Specifications Table */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="mt-20 bg-white border border-[#E2DFD7] p-6 sm:p-10 shadow-sm">
            <h2 className="font-serif text-2xl font-normal text-[#092C49] mb-6 flex items-center gap-2">
              <span>Spécifications & Détails Techniques</span>
            </h2>

            <div className="divide-y divide-[#E2DFD7] border-y border-[#E2DFD7]">
              {product.specifications.map((spec, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-3 py-3.5 text-xs sm:text-sm">
                  <span className="font-semibold text-[#092C49] uppercase tracking-wider text-[11px] sm:text-xs">
                    {spec.label}
                  </span>
                  <span className="sm:col-span-2 text-[#627180] mt-1 sm:mt-0 font-light">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[#E2DFD7]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#08A6C1] block mb-1">
                  Dans la même collection
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#092C49]">
                  Modèles similaires dans {product.category}
                </h3>
              </div>
              <Link
                to={`/catalogue?category=${encodeURIComponent(product.category)}`}
                className="text-xs uppercase tracking-wider text-[#08A6C1] font-semibold hover:underline hidden sm:inline"
              >
                Voir toute la catégorie
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
