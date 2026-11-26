import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowUpRight, SlidersHorizontal, Ruler } from 'lucide-react';
import { AluminiumProduct } from '../../types/aluminium';
import { ALUMINIUM_COLORS } from '../../data/aluminiumColors';
import { ProductImage } from '../ProductImage';
import { formatPrice, getAluminiumQuotationWhatsAppUrl } from '../../config/site';

interface AluminiumProductCardProps {
  product: AluminiumProduct;
}

export const AluminiumProductCard: React.FC<AluminiumProductCardProps> = ({ product }) => {
  const colorSwatches = ALUMINIUM_COLORS.filter((c) => product.colors.includes(c.name)).slice(0, 6);

  return (
    <div className="perspective-container h-full">
      <div className="group relative flex flex-col h-full bg-white/95 backdrop-blur-sm border border-[#CBD5E1]/80 hover:border-[#08A6C1] transition-all duration-300 card-3d-tilt hover:shadow-iridescent">
        {/* Category & Status Badges */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between gap-2 pointer-events-none">
          <span className="text-[10px] font-semibold tracking-wider uppercase bg-[#092C49]/90 backdrop-blur-sm text-white px-2.5 py-1">
            {product.category}
          </span>
          {product.garageType ? (
            <span className="text-[10px] font-semibold tracking-wider uppercase bg-[#08A6C1] text-white px-2 py-0.5 shadow-sm">
              {product.garageType}
            </span>
          ) : product.featured ? (
            <span className="text-[10px] font-semibold tracking-wider uppercase bg-[#08A6C1] text-white px-2 py-0.5 shadow-sm">
              Sur mesure
            </span>
          ) : null}
        </div>

        {/* Visual Container */}
        <Link
          to={`/aluminium/${product.id}`}
          className="relative block aspect-[4/3] w-full overflow-hidden bg-[#F7FAFC]"
        >
          <ProductImage
            src={product.image}
            alt={product.imageAlt || product.name}
            category={product.category}
            reference={product.reference}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {product.imageNote && (
            <span className="absolute bottom-2 left-2 z-10 bg-[#092C49]/85 px-2 py-1 text-[9px] text-white backdrop-blur-sm">
              {product.imageNote}
            </span>
          )}

          <div className="absolute inset-0 bg-[#092C49]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-xs font-medium uppercase tracking-wider text-[#092C49] shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#08A6C1]" />
              Configurer &amp; Devis
            </span>
          </div>
        </Link>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          {/* Reference & Opening system */}
          <div className="flex items-center justify-between gap-2 text-xs text-[#627180] mb-1.5 font-mono">
            <span className="bg-[#E9F4F5] text-[#092C49] px-2 py-0.5 rounded font-semibold text-[11px]">
              Réf : {product.reference}
            </span>
            {product.openingSystem && (
              <span className="text-[11px] text-[#08A6C1] font-sans font-medium truncate">
                {product.openingSystem}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg sm:text-xl font-medium text-[#202B35] group-hover:text-[#08A6C1] transition-colors line-clamp-1 mb-2">
            <Link to={`/aluminium/${product.id}`}>{product.name}</Link>
          </h3>

          {/* Description */}
          <p className="text-xs text-[#627180] line-clamp-2 leading-relaxed mb-4 flex-1">
            {product.shortDescription || product.description}
          </p>

          {/* Swatch Dots + Dimensions Note */}
          <div className="flex items-center justify-between gap-2 mb-4 pt-2 border-t border-[#E2DFD7]/70">
            <div className="flex items-center gap-1.5" title="Coloris disponibles sur devis">
              {colorSwatches.map((color) => (
                <span
                  key={color.id}
                  className="w-3.5 h-3.5 rounded-full border border-[#CBD5E1] shadow-inner"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
              {product.colors.length > 6 && (
                <span className="text-[10px] text-[#627180] font-medium">
                  +{product.colors.length - 6}
                </span>
              )}
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] text-[#627180] uppercase tracking-wider">
              <Ruler className="w-3 h-3 text-[#08A6C1]" />
              Unité : {product.dimensions.unit}
            </span>
          </div>

          {/* Price row */}
          <div className="pt-2.5 border-t border-[#E2DFD7] flex items-baseline justify-between mb-4">
            <span className="text-[11px] uppercase tracking-wider text-[#627180]">Tarif</span>
            <span
              className={`text-sm font-semibold tracking-wide ${
                product.price === null ? 'text-[#08A6C1] italic font-serif text-base' : 'text-[#092C49]'
              }`}
            >
              {formatPrice(product.price)}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 mt-auto">
            <Link
              to={`/aluminium/${product.id}`}
              className="w-full py-2.5 px-2 bg-[#E9F4F5] hover:bg-[#D3ECF0] text-[#092C49] text-[11px] font-semibold tracking-wider uppercase text-center transition-colors flex items-center justify-center gap-1"
            >
              <span>Configurer</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#08A6C1]" />
            </Link>

            <a
              href={getAluminiumQuotationWhatsAppUrl({
                productName: product.name,
                reference: product.reference,
              })}
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
    </div>
  );
};
