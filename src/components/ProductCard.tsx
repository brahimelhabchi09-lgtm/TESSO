import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowUpRight, Eye } from 'lucide-react';
import { Product } from '../types/product';
import { ProductImage } from './ProductImage';
import { formatPrice, getProductWhatsAppUrl } from '../config/site';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  return (
    <div className="group relative flex flex-col bg-white border border-[#E8E4DD] hover:border-[#C5A880]/70 transition-all duration-300 hover:shadow-luxury-hover">
      {/* Category & Status Badges */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <span className="text-[10px] font-semibold tracking-wider uppercase bg-[#141416]/85 backdrop-blur-sm text-[#F5F2EB] px-2.5 py-1">
          {product.category}
        </span>
        {product.featured && (
          <span className="text-[10px] font-semibold tracking-wider uppercase bg-[#C5A880] text-black px-2 py-0.5 shadow-sm">
            Signature
          </span>
        )}
      </div>

      {/* Image Container with Hover Zoom */}
      <Link
        to={`/catalogue/${product.id}`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-[#F6F4EF]"
      >
        <ProductImage
          src={product.image}
          alt={product.name}
          category={product.category}
          reference={product.reference}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Overlay hover action */}
        <div className="absolute inset-0 bg-[#121316]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F5] text-xs font-medium uppercase tracking-wider text-[#141416] shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-3.5 h-3.5 text-[#C5A880]" />
            Détails
          </span>
        </div>
      </Link>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-5">
        {/* Reference */}
        <div className="flex items-center justify-between text-xs text-[#7D818A] mb-1.5 font-mono">
          <span>Réf : {product.reference}</span>
          {product.warranty && <span>Garantie {product.warranty}</span>}
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-medium text-[#1E2024] group-hover:text-[#9A7D55] transition-colors line-clamp-1 mb-2">
          <Link to={`/catalogue/${product.id}`}>
            {product.name}
          </Link>
        </h3>

        {/* Short description */}
        <p className="text-xs text-[#6F737D] line-clamp-2 leading-relaxed mb-4 flex-1">
          {product.shortDescription || product.description}
        </p>

        {/* Price & Divider */}
        <div className="pt-3 border-t border-[#F0EBE1] flex items-baseline justify-between mb-4">
          <span className="text-[11px] uppercase tracking-wider text-[#91959E]">Tarif</span>
          <span className={`text-sm font-semibold tracking-wide ${
            product.price === null ? 'text-[#AD926B] italic font-serif text-base' : 'text-[#1E2024]'
          }`}>
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Actions buttons */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <Link
            to={`/catalogue/${product.id}`}
            className="w-full py-2.5 px-2 bg-[#F4F1EA] hover:bg-[#EBE5DB] text-[#1E2024] text-[11px] font-semibold tracking-wider uppercase text-center transition-colors flex items-center justify-center gap-1"
          >
            <span>Fiche</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#7D818A]" />
          </Link>

          <a
            href={getProductWhatsAppUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-2 bg-[#141416] hover:bg-[#282B33] text-[#FAF8F5] text-[11px] font-semibold tracking-wider uppercase text-center transition-colors flex items-center justify-center gap-1.5"
            title="Demander un devis sur WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
            <span>Devis</span>
          </a>
        </div>
      </div>
    </div>
  );
};
