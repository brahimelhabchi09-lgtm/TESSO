import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, RotateCcw, Layers, Shield, Ruler } from 'lucide-react';
import { ALUMINIUM_PRODUCTS } from '../data/aluminiumProducts';
import { ALUMINIUM_CATEGORIES } from '../data/categories';
import { AluminiumCategory, GarageOpeningType } from '../types/aluminium';
import { AluminiumProductCard } from '../components/aluminium/AluminiumProductCard';
import { AluminiumQuotationForm } from '../components/aluminium/AluminiumQuotationForm';
import { SearchBar } from '../components/SearchBar';

const GARAGE_TYPE_ORDER: GarageOpeningType[] = [
  'Sectionnelle',
  'Enroulable',
  'Basculante',
  'Battante',
  'Motorisée',
];

export const Aluminium: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as AluminiumCategory | null;

  const [selectedCategory, setSelectedCategory] = useState<AluminiumCategory | 'all'>(
    categoryParam || 'all'
  );
  const [selectedGarageType, setSelectedGarageType] = useState<GarageOpeningType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('all');
    }
    setSelectedGarageType('all');
  }, [categoryParam]);

  const handleCategorySelect = (cat: AluminiumCategory | 'all') => {
    setSelectedCategory(cat);
    setSelectedGarageType('all');
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedGarageType('all');
    setSearchParams({}, { replace: true });
  };

  const availableGarageTypes = useMemo(() => {
    const present = new Set(
      ALUMINIUM_PRODUCTS
        .filter((product) => product.category === 'Portes de garage' && product.garageType)
        .map((product) => product.garageType as GarageOpeningType)
    );
    return GARAGE_TYPE_ORDER.filter((type) => present.has(type));
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    ALUMINIUM_CATEGORIES.forEach((cat) => {
      counts[cat.name] = ALUMINIUM_PRODUCTS.filter((p) => p.category === cat.name).length;
    });
    return counts;
  }, []);

  const filteredProducts = useMemo(() => {
    let list = [...ALUMINIUM_PRODUCTS];

    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (selectedCategory === 'Portes de garage' && selectedGarageType !== 'all') {
      list = list.filter((p) => p.garageType === selectedGarageType);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.reference.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedCategory, selectedGarageType, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F7FAFC] pb-24">
      {/* Iridescent Midnight Header Banner */}
      <div className="bg-midnight-iridescent text-white pt-16 pb-14 border-b border-[#08A6C1]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          >
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 glass-panel-dark rounded-full text-[10px] uppercase tracking-[0.25em] text-[#22D3EE]">
                <Layers className="w-3.5 h-3.5 text-[#08A6C1]" />
                <span>Univers Menuiserie Aluminium</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-light text-white">
                Menuiserie Aluminium &amp; <span className="italic text-iridescent-gradient">Portes de Garage</span>
              </h1>
              <p className="text-sm text-[#CBD5E1] font-light leading-relaxed">
                Fenêtres, portes, baies vitrées coulissantes, portes-fenêtres et portes de garage sur mesure.
                Sélectionnez votre modèle, choisissez votre teinte et saisissez vos dimensions pour un devis direct.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#devis-aluminium"
                className="chrome-sheen inline-flex items-center gap-2 px-5 py-3 bg-[#08A6C1] hover:bg-[#0792AA] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-iridescent-glow"
              >
                <Ruler className="w-4 h-4" />
                <span>Configurateur de devis</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        {/* Search & Filter Panel */}
        <div className="bg-white/95 backdrop-blur-md border border-[#CBD5E1]/80 p-5 sm:p-6 shadow-luxury space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-6">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Rechercher une menuiserie, porte de garage ou référence (ex: ALU-GAR-SEC)..."
              />
            </div>

            <div className="lg:col-span-6 flex items-center justify-between lg:justify-end gap-4 text-xs text-[#627180]">
              <span>
                <strong className="text-[#092C49] font-serif text-base mr-1">
                  {filteredProducts.length}
                </strong>
                solution{filteredProducts.length > 1 ? 's' : ''} affichée{filteredProducts.length > 1 ? 's' : ''}
              </span>

              {(selectedCategory !== 'all' || searchQuery.trim() !== '') && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#08A6C1] hover:text-[#092C49] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Réinitialiser</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              type="button"
              onClick={() => handleCategorySelect('all')}
              className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-wider font-medium border transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#092C49] text-white border-[#092C49] shadow-sm'
                  : 'bg-white text-[#627180] border-[#CBD5E1] hover:border-[#08A6C1] hover:text-[#092C49]'
              }`}
            >
              <span>Tout l&apos;aluminium</span>
              <span
                className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${
                  selectedCategory === 'all' ? 'bg-[#08A6C1] text-white' : 'bg-[#E9F4F5] text-[#092C49]'
                }`}
              >
                {ALUMINIUM_PRODUCTS.length}
              </span>
            </button>

            {ALUMINIUM_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.name;
              const count = categoryCounts[cat.name] || 0;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategorySelect(cat.name)}
                  className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-wider font-medium border transition-all ${
                    active
                      ? 'bg-[#092C49] text-white border-[#092C49] shadow-sm'
                      : 'bg-white text-[#627180] border-[#CBD5E1] hover:border-[#08A6C1] hover:text-[#092C49]'
                  }`}
                >
                  <span>{cat.name}</span>
                  {count > 0 && (
                    <span
                      className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${
                        active ? 'bg-[#08A6C1] text-white' : 'bg-[#E9F4F5] text-[#092C49]'
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Garage Door Sub-filter when Portes de garage is active */}
          {selectedCategory === 'Portes de garage' && (
            <div className="pt-3 border-t border-[#E2DFD7] flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#092C49] mr-2 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#08A6C1]" />
                Type de porte :
              </span>
              {(['all', ...availableGarageTypes] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedGarageType(type)}
                  className={`px-3 py-1 text-xs font-medium border transition-colors ${
                    selectedGarageType === type
                      ? 'bg-[#08A6C1] text-white border-[#08A6C1]'
                      : 'bg-[#F7FAFC] text-[#627180] border-[#CBD5E1] hover:border-[#08A6C1]'
                  }`}
                >
                  {type === 'all' ? 'Tous les types' : type}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white border border-dashed border-[#CBD5E1] py-16 px-4 text-center space-y-4">
            <Sparkles className="w-8 h-8 text-[#08A6C1] mx-auto" />
            <h3 className="font-serif text-2xl text-[#092C49]">
              Aucun modèle aluminium trouvé
            </h3>
            <p className="text-xs sm:text-sm text-[#627180] max-w-md mx-auto">
              Modifiez votre recherche ou réinitialisez les filtres pour afficher l&apos;ensemble de la gamme aluminium.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="px-5 py-2.5 bg-[#092C49] text-white text-xs font-semibold uppercase tracking-wider"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <AluminiumProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Custom Quotation Configurator Section */}
        <section id="devis-aluminium" className="pt-8 scroll-mt-24">
          <AluminiumQuotationForm
            initialCategory={selectedCategory !== 'all' ? selectedCategory : ''}
          />
        </section>
      </div>
    </div>
  );
};
