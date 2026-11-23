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
  containerClassName = "relative w-full h-full overflow-hidden bg-[#F5F2EB]",
  category,
  reference,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={containerClassName}>
      {/* Loading Skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2EEE7] via-[#E8E2D7] to-[#F2EEE7] animate-pulse" />
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
        /* Luxury Architectural Fallback Display when local image is pending */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#FAF8F5] to-[#EFECE6] border border-[#E8E2D7]">
          <div className="w-16 h-16 rounded-full bg-white/80 shadow-sm flex items-center justify-center mb-3 text-[#AD926B] border border-[#E0D8CB]">
            <Sparkles className="w-7 h-7 stroke-[1.5]" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#AD926B] mb-1">
            {category || "Sanitaire Haut de Gamme"}
          </span>
          <p className="text-sm font-medium text-[#1E2024] line-clamp-1 max-w-[220px]">
            {alt}
          </p>
          {reference && (
            <span className="text-xs font-mono text-[#71757E] mt-1 bg-white/70 px-2 py-0.5 rounded border border-[#E0D8CB]">
              Réf : {reference}
            </span>
          )}
          <span className="text-[10px] text-[#9A9EA7] mt-3 tracking-wide flex items-center gap-1">
            <ImageOff className="w-3 h-3" />
            Visuel consultable en showroom
          </span>
        </div>
      )}
    </div>
  );
};
