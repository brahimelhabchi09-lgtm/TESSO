import React from 'react';
import { Product } from '../types/product';
import { ProductCard } from './ProductCard';
import { SearchX, RotateCcw } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onResetFilters?: () => void;
  isLoading?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onResetFilters,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white border border-[#EAE4D8] p-4 animate-pulse space-y-4">
            <div className="aspect-[4/3] bg-[#EAE4D8]" />
            <div className="h-4 bg-[#EAE4D8] w-2/3" />
            <div className="h-3 bg-[#EAE4D8] w-1/2" />
            <div className="h-8 bg-[#EAE4D8] w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white border border-dashed border-[#DCD6C9]">
        <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#E8E2D7] flex items-center justify-center text-[#AD926B] mb-4">
          <SearchX className="w-8 h-8 stroke-[1.5]" />
        </div>
        <h3 className="font-serif text-2xl font-medium text-[#1E2024] mb-2">
          Aucun produit ne correspond à votre recherche
        </h3>
        <p className="text-sm text-[#7D818A] max-w-md mb-6">
          Essayez d'ajuster vos filtres, de vérifier l'orthographe du nom ou de la référence, ou réinitialisez la sélection.
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#141416] hover:bg-[#282B33] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-[#C5A880]" />
            <span>Réinitialiser les filtres</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
