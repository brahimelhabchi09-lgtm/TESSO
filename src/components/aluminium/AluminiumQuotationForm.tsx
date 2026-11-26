import React, { useState, useMemo, useEffect } from 'react';
import { MessageSquare, Copy, Check, Send, Sparkles } from 'lucide-react';
import { ALUMINIUM_PRODUCTS } from '../../data/aluminiumProducts';
import { ALUMINIUM_CATEGORIES } from '../../data/categories';
import { ALUMINIUM_COLOR_NAMES } from '../../data/aluminiumColors';
import { AluminiumCategory, MeasurementUnit } from '../../types/aluminium';
import { AluminiumColorSelector } from './AluminiumColorSelector';
import { DimensionSelector } from './DimensionSelector';
import { buildAluminiumQuotationMessage, getAluminiumQuotationWhatsAppUrl } from '../../config/site';

interface AluminiumQuotationFormProps {
  initialProductId?: string;
  initialCategory?: AluminiumCategory | '';
  initialColor?: string;
}

export const AluminiumQuotationForm: React.FC<AluminiumQuotationFormProps> = ({
  initialProductId,
  initialCategory = '',
  initialColor = 'Gris anthracite',
}) => {
  const productsForInitialCategory = initialCategory
    ? ALUMINIUM_PRODUCTS.filter((product) => product.category === initialCategory)
    : ALUMINIUM_PRODUCTS;
  const initialProduct = initialProductId
    ? ALUMINIUM_PRODUCTS.find((p) => p.id === initialProductId)
    : productsForInitialCategory[0];

  const [selectedCategory, setSelectedCategory] = useState<AluminiumCategory | ''>(
    initialCategory || (initialProduct ? initialProduct.category : '')
  );
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProduct ? initialProduct.id : ALUMINIUM_PRODUCTS[0].id
  );
  const [selectedColor, setSelectedColor] = useState<string>(initialColor);
  const [width, setWidth] = useState<string>('1.50');
  const [height, setHeight] = useState<string>('1.20');
  const [unit, setUnit] = useState<MeasurementUnit>('m');
  const [quantity, setQuantity] = useState<number>(2);
  const [message, setMessage] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const modelsForCategory = useMemo(() => {
    if (!selectedCategory) return ALUMINIUM_PRODUCTS;
    return ALUMINIUM_PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    if (!initialCategory) return;
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    if (!initialProductId) return;
    const initialProduct = ALUMINIUM_PRODUCTS.find((product) => product.id === initialProductId);
    if (!initialProduct) return;
    setSelectedCategory(initialProduct.category);
    setSelectedProductId(initialProduct.id);
  }, [initialProductId]);

  // Keep selected product consistent when category changes
  useEffect(() => {
    if (modelsForCategory.length > 0 && !modelsForCategory.some((p) => p.id === selectedProductId)) {
      setSelectedProductId(modelsForCategory[0].id);
    }
  }, [modelsForCategory, selectedProductId]);

  const activeProduct = useMemo(
    () => ALUMINIUM_PRODUCTS.find((p) => p.id === selectedProductId) || ALUMINIUM_PRODUCTS[0],
    [selectedProductId]
  );

  const formattedMessage = useMemo(
    () =>
      buildAluminiumQuotationMessage({
        productName: activeProduct.name,
        reference: activeProduct.reference,
        color: selectedColor,
        width,
        height,
        unit,
        quantity,
        message,
      }),
    [activeProduct, selectedColor, width, height, unit, quantity, message]
  );

  const whatsappHref = getAluminiumQuotationWhatsAppUrl({
    productName: activeProduct.name,
    reference: activeProduct.reference,
    color: selectedColor,
    width: width || 'À préciser',
    height: height || 'À préciser',
    unit,
    quantity,
    message,
  });

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-md border border-[#CBD5E1] shadow-iridescent p-6 sm:p-8 lg:p-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#E2DFD7]">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#08A6C1] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Devis Aluminium Personnalisé</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#092C49]">
            Configurateur de Demande de Devis
          </h3>
        </div>
        <span className="text-xs font-mono bg-[#E9F4F5] text-[#092C49] px-3 py-1.5 border border-[#08A6C1]/30 self-start sm:self-auto">
          Réf active : {activeProduct.reference}
        </span>
      </div>

      {/* Step 1 & 2: Category & Model */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#092C49] mb-2">
            1. Catégorie de produit
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as AluminiumCategory | '')}
            className="w-full px-4 py-3 bg-[#F7FAFC] border border-[#CBD5E1] focus:border-[#08A6C1] focus:ring-1 focus:ring-[#08A6C1] text-sm text-[#202B35] outline-none transition-colors"
          >
            <option value="">Toutes les catégories aluminium</option>
            {ALUMINIUM_CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#092C49] mb-2">
            2. Modèle souhaité
          </label>
          <select
            value={selectedProductId}
            onChange={(e) => setSelectedProductId(e.target.value)}
            className="w-full px-4 py-3 bg-[#F7FAFC] border border-[#CBD5E1] focus:border-[#08A6C1] focus:ring-1 focus:ring-[#08A6C1] text-sm text-[#202B35] outline-none transition-colors"
          >
            {modelsForCategory.map((prod) => (
              <option key={prod.id} value={prod.id}>
                {prod.name} ({prod.reference})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Step 3: Colour Selector */}
      <div className="pt-2 border-t border-[#E2DFD7]">
        <AluminiumColorSelector
          selectedColor={selectedColor}
          onSelectColor={setSelectedColor}
          availableColorNames={ALUMINIUM_COLOR_NAMES}
        />
      </div>

      {/* Step 4, 5, 6, 7: Width, Height, Unit, Quantity */}
      <div className="pt-2 border-t border-[#E2DFD7]">
        <DimensionSelector
          width={width}
          height={height}
          quantity={quantity}
          unit={unit}
          onWidthChange={setWidth}
          onHeightChange={setHeight}
          onQuantityChange={setQuantity}
          onUnitChange={setUnit}
        />
      </div>

      {/* Step 8: Additional Message */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#092C49] mb-2">
          Message complémentaire (optionnel)
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Précisez votre ville, type de chantier (neuf ou rénovation), ou toute information utile pour notre équipe technique..."
          className="w-full px-4 py-3 bg-[#F7FAFC] border border-[#CBD5E1] focus:border-[#08A6C1] focus:ring-1 focus:ring-[#08A6C1] focus:bg-white text-sm text-[#202B35] outline-none transition-colors resize-none"
        />
      </div>

      {/* Live Preview & Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2 border-t border-[#E2DFD7]">
        <div className="lg:col-span-7 bg-[#101820] text-[#E9F4F5] p-4 sm:p-5 border border-[#08A6C1]/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#08A6C1] font-semibold">
              Aperçu du message de devis
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1 text-[11px] text-[#CBD5E1] hover:text-white transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Copié</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copier</span>
                </>
              )}
            </button>
          </div>
          <pre className="whitespace-pre-wrap font-sans text-xs text-[#E9F4F5]/90 leading-relaxed">
            {formattedMessage}
          </pre>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between gap-3">
          <div className="p-4 bg-[#E9F4F5] border border-[#08A6C1]/25 text-xs text-[#092C49] leading-relaxed">
            <strong>Transmission directe :</strong> Votre demande pré-remplie est envoyée directement à un conseiller AKWA WAKA via WhatsApp, sans création de compte.
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="chrome-sheen w-full py-4 px-5 bg-[#092C49] hover:bg-[#08A6C1] text-white text-xs font-semibold uppercase tracking-[0.16em] flex items-center justify-center gap-2.5 transition-all shadow-iridescent-glow"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            <span>Envoyer la demande sur WhatsApp</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
