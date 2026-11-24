import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowUpDown, RotateCcw, Sparkles, FileText, Download } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCategory } from '../types/product';
import { ProductGrid } from '../components/ProductGrid';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { siteConfig } from '../config/site';

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
        if (a.price === null) return 1;
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
    <div className="min-h-screen bg-[#F5F4F0] pb-24">
      {/* Header Banner */}
      <div className="bg-[#092C49] text-white pt-16 pb-12 border-b border-[#123D64]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#061D31] border border-[#08A6C1]/30 text-[10px] uppercase tracking-[0.25em] text-[#08A6C1] mb-4">
                <Sparkles className="w-3 h-3" />
                Catalogue Officiel AKWA WAKA
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-white mb-3">
                Collections Sanitaire & Meubles de Bain
              </h1>
              <p className="text-sm text-[#E9F4F5]/85 font-light leading-relaxed">
                Explorez l'intégralité de nos pièces. Recherchez par référence, filtrez par catégorie 
                et demandez vos devis personnalisés directement sur WhatsApp.
              </p>
            </div>

            {/* PDF Catalogue Button */}
            <div className="shrink-0">
              <a
                href={siteConfig.pdfCatalogueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#08A6C1] hover:bg-[#0792AA] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger Catalogue PDF (43 Meubles)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Filters and Controls Card */}
        <div className="bg-white border border-[#E2DFD7] shadow-sm p-4 sm:p-6 mb-8 space-y-6">
          {/* Row 1: Search Bar & Sort Dropdowns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-7">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Rechercher par nom ou référence (ex: V60, V2, Y11, WC, vasque...)"
              />
            </div>

            <div className="lg:col-span-5 flex items-center gap-3 justify-end">
              {/* Sort by dropdown */}
              <div className="relative flex-1 sm:flex-initial">
                <div className="flex items-center bg-[#F5F4F0] border border-[#E2DFD7] px-3 py-2.5 text-xs text-[#202B35]">
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#08A6C1] mr-2 shrink-0" />
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
                  className="px-3 py-2.5 bg-[#F5F4F0] hover:bg-[#E9F4F5] border border-[#E2DFD7] text-xs text-[#627180] hover:text-[#092C49] transition-colors flex items-center gap-1.5 shrink-0"
                  title="Réinitialiser tous les filtres"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#08A6C1]" />
                  <span className="hidden sm:inline">Effacer</span>
                </button>
              )}
            </div>
          </div>

          {/* Row 2: Category Filter Pills */}
          <div className="pt-2 border-t border-[#E2DFD7]">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
              categoryCounts={categoryCounts}
              totalCount={PRODUCTS.length}
            />
          </div>
        </div>

        {/* Results Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between text-xs text-[#627180] mb-6 px-1 gap-2">
          <div className="flex items-center gap-2">
            <span>
              Affichage de <strong className="text-[#092C49] font-semibold">{filteredProducts.length}</strong> pièce{filteredProducts.length > 1 ? 's' : ''}
              {selectedCategory !== 'all' && (
                <span> dans <strong className="text-[#08A6C1]">{selectedCategory}</strong></span>
              )}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#627180]">
            <a
              href={siteConfig.pdfCatalogueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#08A6C1] flex items-center gap-1 font-medium"
            >
              <FileText className="w-3.5 h-3.5 text-[#08A6C1]" />
              <span>Catalogue Meubles 2026 disponible en PDF</span>
            </a>
            <span>•</span>
            <span>Tarifs indicatifs en MAD (DH)</span>
          </div>
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
