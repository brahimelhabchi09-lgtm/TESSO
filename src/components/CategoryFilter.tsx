import React from 'react';
import { CATEGORIES } from '../data/categories';
import { ProductCategory } from '../types/product';

interface CategoryFilterProps {
  selectedCategory: ProductCategory | 'all';
  onSelectCategory: (category: ProductCategory | 'all') => void;
  categoryCounts?: Record<string, number>;
  totalCount?: number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts = {},
  totalCount = 0,
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none scroll-smooth">
      {/* "All" button */}
      <button
        type="button"
        onClick={() => onSelectCategory('all')}
        className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-wider font-medium border transition-all ${
          selectedCategory === 'all'
            ? 'bg-[#141416] text-[#F5F2EB] border-[#141416] shadow-sm'
            : 'bg-white text-[#5F636E] border-[#E2DCD1] hover:border-[#C5A880] hover:text-[#141416]'
        }`}
      >
        <span>Tous les produits</span>
        {totalCount > 0 && (
          <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${
            selectedCategory === 'all' ? 'bg-[#2A2D35] text-[#C5A880]' : 'bg-[#F2ECE1] text-[#71757E]'
          }`}>
            {totalCount}
          </span>
        )}
      </button>

      {/* Category Pills */}
      {CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat.name;
        const count = categoryCounts[cat.name] || 0;

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.name)}
            className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-wider font-medium border transition-all ${
              isSelected
                ? 'bg-[#141416] text-[#F5F2EB] border-[#141416] shadow-sm'
                : 'bg-white text-[#5F636E] border-[#E2DCD1] hover:border-[#C5A880] hover:text-[#141416]'
            }`}
          >
            <span>{cat.name}</span>
            {count > 0 && (
              <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${
                isSelected ? 'bg-[#2A2D35] text-[#C5A880]' : 'bg-[#F2ECE1] text-[#71757E]'
              }`}>
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
