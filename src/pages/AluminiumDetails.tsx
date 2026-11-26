import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  MessageSquare,
  Copy,
  Check,
  Info,
  Layers,
  Shield,
  Send,
} from 'lucide-react';
import { getAluminiumProductById, getRelatedAluminiumProducts } from '../data/aluminiumProducts';
import { formatPrice, getAluminiumQuotationWhatsAppUrl } from '../config/site';
import { MeasurementUnit } from '../types/aluminium';
import { ProductImage } from '../components/ProductImage';
import { AluminiumColorSelector } from '../components/aluminium/AluminiumColorSelector';
import { DimensionSelector } from '../components/aluminium/DimensionSelector';
import { AluminiumProductCard } from '../components/aluminium/AluminiumProductCard';

export const AluminiumDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = id ? getAluminiumProductById(id) : undefined;

  const [selectedColor, setSelectedColor] = useState<string>(
    product?.colors[0] || 'Gris anthracite'
  );
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [unit, setUnit] = useState<MeasurementUnit>(product?.dimensions.unit || 'cm');
  const [quantity, setQuantity] = useState<number>(1);
  const [notes, setNotes] = useState<string>('');
  const [copiedRef, setCopiedRef] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-[#F7FAFC] text-center">
        <h2 className="font-serif text-3xl font-light text-[#092C49] mb-3">
          Modèle aluminium introuvable
        </h2>
        <p className="text-sm text-[#627180] mb-6 max-w-md">
          La référence demandée n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          to="/aluminium"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#092C49] text-white text-xs font-semibold uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4 text-[#08A6C1]" />
          <span>Retour au catalogue aluminium</span>
        </Link>
      </div>
    );
  }

  const related = getRelatedAluminiumProducts(product.id, 3);

  const handleCopyRef = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(product.reference);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  const quotationHref = getAluminiumQuotationWhatsAppUrl({
    productName: product.name,
    reference: product.reference,
    color: selectedColor,
    width: width || 'À préciser',
    height: height || 'À préciser',
    unit,
    quantity,
    message: notes,
  });

  return (
    <div className="min-h-screen bg-[#F7FAFC] pb-24">
      {/* Breadcrumb */}
      <div className="border-b border-[#CBD5E1]/70 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#627180]">
            <nav className="flex items-center space-x-2">
              <Link to="/" className="hover:text-[#092C49] transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <Link to="/aluminium" className="hover:text-[#092C49] transition-colors">
                Menuiserie Aluminium
              </Link>
              <span>/</span>
              <Link
                to={`/aluminium?category=${encodeURIComponent(product.category)}`}
                className="hover:text-[#092C49] transition-colors"
              >
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-[#092C49] font-medium truncate max-w-[200px]">
                {product.name}
              </span>
            </nav>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 text-xs text-[#092C49] hover:text-[#08A6C1] font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Retour</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: Visual & Technical Overview */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative aspect-[4/3] w-full bg-white border border-[#CBD5E1] overflow-hidden shadow-iridescent">
              <ProductImage
                src={product.image}
                alt={product.imageAlt || product.name}
                category={product.category}
                reference={product.reference}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1 bg-[#092C49]/90 text-white backdrop-blur-sm">
                  {product.category}
                </span>
                {product.garageType && (
                  <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 bg-[#08A6C1] text-white">
                    {product.garageType}
                  </span>
                )}
              </div>
            </div>
            {product.imageNote && (
              <p className="text-[11px] text-[#627180]">{product.imageNote}</p>
            )}

            {/* Quick Technical Details */}
            <div className="bg-white border border-[#CBD5E1]/80 p-5 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#092C49] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#08A6C1]" />
                <span>Informations du Modèle</span>
              </h3>
              <dl className="divide-y divide-[#E2DFD7] text-xs">
                <div className="py-2 flex justify-between gap-4">
                  <dt className="text-[#627180]">Référence</dt>
                  <dd className="font-mono font-semibold text-[#092C49]">{product.reference}</dd>
                </div>
                {product.openingSystem && (
                  <div className="py-2 flex justify-between gap-4">
                    <dt className="text-[#627180]">Système d&apos;ouverture</dt>
                    <dd className="font-medium text-[#202B35]">{product.openingSystem}</dd>
                  </div>
                )}
                {product.profile && (
                  <div className="py-2 flex justify-between gap-4">
                    <dt className="text-[#627180]">Profilé</dt>
                    <dd className="font-medium text-[#202B35]">{product.profile}</dd>
                  </div>
                )}
                {product.motorisation && (
                  <div className="py-2 flex justify-between gap-4">
                    <dt className="text-[#627180] flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5 text-[#08A6C1]" />
                      Motorisation
                    </dt>
                    <dd className="font-medium text-[#202B35] text-right">{product.motorisation}</dd>
                  </div>
                )}
                <div className="py-2 flex justify-between gap-4">
                  <dt className="text-[#627180]">Fabrication</dt>
                  <dd className="font-medium text-[#08A6C1]">Sur mesure selon vos côtes</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* RIGHT: Interactive Configuration & Quotation */}
          <div className="lg:col-span-7 bg-white border border-[#CBD5E1] p-6 sm:p-8 shadow-iridescent space-y-7">
            {/* Header */}
            <div className="space-y-3 border-b border-[#E2DFD7] pb-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono bg-[#E9F4F5] px-3 py-1 border border-[#08A6C1]/25 text-[#092C49]">
                  <span>Réf : <strong>{product.reference}</strong></span>
                  <button
                    type="button"
                    onClick={handleCopyRef}
                    className="text-[#08A6C1] hover:text-[#092C49] transition-colors"
                    title="Copier la référence"
                  >
                    {copiedRef ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <span className="text-base font-serif italic font-semibold text-[#08A6C1]">
                  {formatPrice(product.price)}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-light text-[#092C49]">
                {product.name}
              </h1>

              <p className="text-sm text-[#202B35]/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Colour Selector */}
            <AluminiumColorSelector
              selectedColor={selectedColor}
              onSelectColor={setSelectedColor}
              availableColorNames={product.colors}
            />

            {/* Dimensions & Quantity */}
            <div className="pt-4 border-t border-[#E2DFD7]">
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

            {/* Additional Message */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#092C49] mb-1.5">
                Précisions complémentaires (optionnel)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ex : type de vitrage souhaité, accès chantier, ville..."
                className="w-full px-3.5 py-2.5 bg-[#F7FAFC] border border-[#CBD5E1] focus:border-[#08A6C1] focus:ring-1 focus:ring-[#08A6C1] text-sm outline-none resize-none"
              />
            </div>

            {/* CTA */}
            <div className="pt-2 space-y-3">
              <a
                href={quotationHref}
                target="_blank"
                rel="noopener noreferrer"
                className="chrome-sheen w-full py-4 px-6 bg-[#092C49] hover:bg-[#08A6C1] text-white text-xs font-semibold uppercase tracking-[0.18em] flex items-center justify-center gap-2.5 transition-all shadow-iridescent-glow"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Demander mon devis personnalisé sur WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </a>
              <p className="text-[11px] text-[#627180] flex items-center justify-center gap-1.5 text-center">
                <Info className="w-3.5 h-3.5 text-[#08A6C1]" />
                <span>Le message WhatsApp est pré-rempli avec votre couleur, vos mesures et la quantité.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Related Aluminium Products */}
        {related.length > 0 && (
          <div className="mt-20 pt-14 border-t border-[#CBD5E1]">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#08A6C1] block mb-1">
                  Menuiserie Aluminium
                </span>
                <h2 className="font-serif text-3xl font-light text-[#092C49]">
                  Autres Solutions Aluminium
                </h2>
              </div>
              <Link
                to="/aluminium"
                className="text-xs font-semibold uppercase tracking-wider text-[#092C49] hover:text-[#08A6C1] transition-colors"
              >
                Tout voir →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {related.map((item) => (
                <AluminiumProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
