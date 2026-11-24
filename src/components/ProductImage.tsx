import React, { useState } from 'react';
import { ImageOff, Sparkles } from 'lucide-react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  category?: string;
  reference?: string;
  priority?: boolean;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  className = "w-full h-full object-cover",
  containerClassName = "relative w-full h-full overflow-hidden bg-[#E9F4F5]",
  category,
  reference,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={containerClassName}>
      {/* Loading Skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#E9F4F5] via-[#D3ECF0] to-[#E9F4F5] animate-pulse" />
      )}

      {/* Main Image or Architectural Fallback */}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          className={`${className} ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} transition-all duration-700 ease-out`}
        />
      ) : (
        /* AKWA WAKA Clean Fallback Display */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#FFFFFF] to-[#E9F4F5] border border-[#D3ECF0]">
          <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 text-[#08A6C1] border border-[#A7DBE2]">
            <Sparkles className="w-6 h-6 stroke-[1.5]" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#08A6C1] mb-1">
            {category || "Sanitaire & Bains"}
          </span>
          <p className="text-sm font-medium text-[#092C49] line-clamp-1 max-w-[220px]">
            {alt}
          </p>
          {reference && (
            <span className="text-xs font-mono text-[#627180] mt-1 bg-white/80 px-2 py-0.5 rounded border border-[#D3ECF0]">
              Réf : {reference}
            </span>
          )}
          <span className="text-[10px] text-[#627180] mt-3 tracking-wide flex items-center gap-1">
            <ImageOff className="w-3 h-3 text-[#08A6C1]" />
            Visuel consultable en showroom
          </span>
        </div>
      )}
    </div>
  );
};
