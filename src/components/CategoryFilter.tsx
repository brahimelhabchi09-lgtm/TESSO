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
            ? 'bg-[#092C49] text-white border-[#092C49] shadow-sm'
            : 'bg-white text-[#627180] border-[#E2DFD7] hover:border-[#08A6C1] hover:text-[#092C49]'
        }`}
      >
        <span>Tous les produits</span>
        {totalCount > 0 && (
          <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${
            selectedCategory === 'all' ? 'bg-[#08A6C1] text-white' : 'bg-[#E9F4F5] text-[#092C49]'
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
                ? 'bg-[#092C49] text-white border-[#092C49] shadow-sm'
                : 'bg-white text-[#627180] border-[#E2DFD7] hover:border-[#08A6C1] hover:text-[#092C49]'
            }`}
          >
            <span>{cat.name}</span>
            {count > 0 && (
              <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${
                isSelected ? 'bg-[#08A6C1] text-white' : 'bg-[#E9F4F5] text-[#092C49]'
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
