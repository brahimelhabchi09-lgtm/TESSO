import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ArrowUpDown, RotateCcw, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCategory, Product } from '../types/product';
import { ProductGrid } from '../components/ProductGrid';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name-asc';

export const Catalogue: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as ProductCategory | null;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(
    categoryParam || 'all'
  );
  const [sortOption, setSortOption] = useState<SortOption>('default');
  const [priceFilter, setPriceFilter] = useState<'all' | 'priced' | 'on-demand'>('all');

  // Sync category state if URL parameter changes
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategorySelect = (cat: ProductCategory | 'all') => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortOption('default');
    setPriceFilter('all');
    setSearchParams({}, { replace: true });
  };

  // Compute category counts for badge counters
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CATEGORIES.forEach((c) => {
      counts[c.name] = PRODUCTS.filter((p) => p.category === c.name).length;
    });
    return counts;
  }, []);

  // Filter & sort products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Search query filter (by name or reference)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.reference.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q))
      );
    }

    // Price type filter
    if (priceFilter === 'priced') {
      result = result.filter((p) => p.price !== null && p.price !== undefined);
    } else if (priceFilter === 'on-demand') {
      result = result.filter((p) => p.price === null || p.price === undefined);
    }

    // Sort
    if (sortOption === 'price-asc') {
      result.sort((a, b) => {
        if (a.price === null && b.price === null) return 0;
        if (a.price === null) return 1; // null prices at end
        if (b.price === null) return -1;
        return a.price - b.price;
      });
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => {
        if (a.price === null && b.price === null) return 0;
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return b.price - a.price;
      });
    } else if (sortOption === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name, 'fr'));
    }

    return result;
  }, [selectedCategory, searchQuery, priceFilter, sortOption]);

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'all' ||
    priceFilter !== 'all' ||
    sortOption !== 'default';

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      {/* Header Banner */}
      <div className="bg-[#141416] text-[#FAF8F5] pt-16 pb-12 border-b border-[#2A2D35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1F2128] border border-[#C5A880]/30 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-4">
              <Sparkles className="w-3 h-3" />
              Catalogue Officiel
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-white mb-3">
              Collections Sanitaire & Équipements de Bain
            </h1>
            <p className="text-sm text-[#A0A5B2] font-light leading-relaxed">
              Explorez l'intégralité de nos pièces d'exception. Recherchez par référence, filtrez par catégorie 
              et demandez vos devis personnalisés directement auprès de nos conseillers.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Filters and Controls Card */}
        <div className="bg-white border border-[#E6E0D4] shadow-sm p-4 sm:p-6 mb-8 space-y-6">
          {/* Row 1: Search Bar & Sort Dropdowns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-7">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Rechercher par nom ou référence (ex: 2043GR-40, WC, vasque...)"
              />
            </div>

            <div className="lg:col-span-5 flex items-center gap-3 justify-end">
              {/* Sort by dropdown */}
              <div className="relative flex-1 sm:flex-initial">
                <div className="flex items-center bg-[#FAF8F5] border border-[#DDD7CC] px-3 py-2.5 text-xs text-[#1E2024]">
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#AD926B] mr-2 shrink-0" />
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value as SortOption)}
                    className="bg-transparent outline-none cursor-pointer text-xs pr-6"
                    aria-label="Trier par"
                  >
                    <option value="default">Tri par défaut</option>
                    <option value="price-asc">Prix : croissant</option>
                    <option value="price-desc">Prix : décroissant</option>
                    <option value="name-asc">Nom : A à Z</option>
                  </select>
                </div>
              </div>

              {/* Reset filter button if any active */}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-3 py-2.5 bg-[#FAF8F5] hover:bg-[#F2ECE1] border border-[#DDD7CC] text-xs text-[#71757E] hover:text-[#141416] transition-colors flex items-center gap-1.5 shrink-0"
                  title="Réinitialiser tous les filtres"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#AD926B]" />
                  <span className="hidden sm:inline">Effacer</span>
                </button>
              )}
            </div>
          </div>

          {/* Row 2: Category Filter Pills */}
          <div className="pt-2 border-t border-[#F2ECE1]">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
              categoryCounts={categoryCounts}
              totalCount={PRODUCTS.length}
            />
          </div>
        </div>

        {/* Results Metadata Bar */}
        <div className="flex items-center justify-between text-xs text-[#6F737D] mb-6 px-1">
          <div className="flex items-center gap-2">
            <span>
              Affichage de <strong className="text-[#141416] font-semibold">{filteredProducts.length}</strong> pièce{filteredProducts.length > 1 ? 's' : ''}
              {selectedCategory !== 'all' && (
                <span> dans <strong className="text-[#AD926B]">{selectedCategory}</strong></span>
              )}
            </span>
          </div>

          {/* Currency reminder */}
          <span className="hidden sm:inline-block text-[11px] text-[#9E9587]">
            Tarifs indicatifs en MAD (DH) • Prix sur demande pour les séries spéciales
          </span>
        </div>

        {/* Product Grid */}
        <ProductGrid
          products={filteredProducts}
          onResetFilters={handleResetFilters}
        />
      </div>
    </div>
  );
};
