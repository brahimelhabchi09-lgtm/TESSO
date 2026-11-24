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

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative flex flex-col bg-white border border-[#E2DFD7] hover:border-[#08A6C1] transition-all duration-300 hover:shadow-luxury-hover">
      {/* Category & Status Badges */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <span className="text-[10px] font-semibold tracking-wider uppercase bg-[#092C49]/90 backdrop-blur-sm text-white px-2.5 py-1">
          {product.category}
        </span>
        {product.featured && (
          <span className="text-[10px] font-semibold tracking-wider uppercase bg-[#08A6C1] text-white px-2 py-0.5 shadow-sm">
            Vedette
          </span>
        )}
      </div>

      {/* Image Container with Hover Zoom */}
      <Link
        to={`/catalogue/${product.id}`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-[#E9F4F5]"
      >
        <ProductImage
          src={product.image}
          alt={product.name}
          category={product.category}
          reference={product.reference}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Overlay hover action */}
        <div className="absolute inset-0 bg-[#092C49]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-xs font-medium uppercase tracking-wider text-[#092C49] shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-3.5 h-3.5 text-[#08A6C1]" />
            Détails
          </span>
        </div>
      </Link>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-5">
        {/* Reference */}
        <div className="flex items-center justify-between text-xs text-[#627180] mb-1.5 font-mono">
          <span className="bg-[#E9F4F5] text-[#092C49] px-2 py-0.5 rounded font-semibold text-[11px]">
            Réf : {product.reference}
          </span>
          {product.dimensions && <span className="text-[11px] text-[#627180]">{product.dimensions}</span>}
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg sm:text-xl font-medium text-[#202B35] group-hover:text-[#08A6C1] transition-colors line-clamp-1 mb-2">
          <Link to={`/catalogue/${product.id}`}>
            {product.name}
          </Link>
        </h3>

        {/* Short description */}
        <p className="text-xs text-[#627180] line-clamp-2 leading-relaxed mb-4 flex-1">
          {product.shortDescription || product.description}
        </p>

        {/* Price & Divider */}
        <div className="pt-3 border-t border-[#E2DFD7] flex items-baseline justify-between mb-4">
          <span className="text-[11px] uppercase tracking-wider text-[#627180]">Tarif</span>
          <span className={`text-sm font-semibold tracking-wide ${
            product.price === null ? 'text-[#08A6C1] italic font-serif text-base' : 'text-[#092C49]'
          }`}>
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Actions buttons */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <Link
            to={`/catalogue/${product.id}`}
            className="w-full py-2.5 px-2 bg-[#E9F4F5] hover:bg-[#D3ECF0] text-[#092C49] text-[11px] font-semibold tracking-wider uppercase text-center transition-colors flex items-center justify-center gap-1"
          >
            <span>Fiche</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#08A6C1]" />
          </Link>

          <a
            href={getProductWhatsAppUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-2 bg-[#092C49] hover:bg-[#08A6C1] text-white text-[11px] font-semibold tracking-wider uppercase text-center transition-colors flex items-center justify-center gap-1.5"
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
