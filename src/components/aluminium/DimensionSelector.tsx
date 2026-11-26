import React from 'react';
import { Ruler, Info, Hash } from 'lucide-react';
import { MeasurementUnit } from '../../types/aluminium';
import { formatMeasurement } from '../../config/site';

interface DimensionSelectorProps {
  width: string;
  height: string;
  quantity: number;
  unit: MeasurementUnit;
  onWidthChange: (val: string) => void;
  onHeightChange: (val: string) => void;
  onQuantityChange: (val: number) => void;
  onUnitChange: (unit: MeasurementUnit) => void;
}

const UNITS: { value: MeasurementUnit; label: string }[] = [
  { value: 'mm', label: 'Millimètres (mm)' },
  { value: 'cm', label: 'Centimètres (cm)' },
  { value: 'm', label: 'Mètres (m)' },
];

export const DimensionSelector: React.FC<DimensionSelectorProps> = ({
  width,
  height,
  quantity,
  unit,
  onWidthChange,
  onHeightChange,
  onQuantityChange,
  onUnitChange,
}) => {
  const placeholderExample = unit === 'm' ? 'Ex : 1.50' : unit === 'cm' ? 'Ex : 150' : 'Ex : 1500';
  const heightPlaceholder = unit === 'm' ? 'Ex : 1.20' : unit === 'cm' ? 'Ex : 120' : 'Ex : 1200';

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#092C49]">
          <Ruler className="w-4 h-4 text-[#08A6C1]" />
          <span>Dimensions &amp; Mesures pour Devis</span>
        </label>

        {/* Unit Selector Pills */}
        <div className="inline-flex border border-[#CBD5E1] bg-white p-0.5">
          {UNITS.map((u) => (
            <button
              key={u.value}
              type="button"
              onClick={() => onUnitChange(u.value)}
              className={`px-2.5 py-1 text-[11px] font-semibold uppercase transition-colors ${
                unit === u.value
                  ? 'bg-[#092C49] text-white'
                  : 'text-[#627180] hover:text-[#092C49]'
              }`}
              title={u.label}
            >
              {u.value}
            </button>
          ))}
        </div>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#627180] mb-1">
            Largeur ({unit})
          </label>
          <input
            type="number"
            min="0"
            step="any"
            value={width}
            onChange={(e) => onWidthChange(e.target.value)}
            placeholder={placeholderExample}
            className="w-full px-3.5 py-2.5 bg-[#F7FAFC] border border-[#CBD5E1] focus:border-[#08A6C1] focus:ring-1 focus:ring-[#08A6C1] focus:bg-white text-sm text-[#202B35] outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#627180] mb-1">
            Hauteur ({unit})
          </label>
          <input
            type="number"
            min="0"
            step="any"
            value={height}
            onChange={(e) => onHeightChange(e.target.value)}
            placeholder={heightPlaceholder}
            className="w-full px-3.5 py-2.5 bg-[#F7FAFC] border border-[#CBD5E1] focus:border-[#08A6C1] focus:ring-1 focus:ring-[#08A6C1] focus:bg-white text-sm text-[#202B35] outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#627180] mb-1">
            Quantité
          </label>
          <div className="relative flex items-center">
            <Hash className="w-3.5 h-3.5 text-[#08A6C1] absolute left-3 pointer-events-none" />
            <input
              type="number"
              min={1}
              step={1}
              value={quantity}
              onChange={(e) => {
                const parsed = parseInt(e.target.value, 10);
                onQuantityChange(Number.isNaN(parsed) || parsed < 1 ? 1 : parsed);
              }}
              className="w-full pl-8 pr-3 py-2.5 bg-[#F7FAFC] border border-[#CBD5E1] focus:border-[#08A6C1] focus:ring-1 focus:ring-[#08A6C1] focus:bg-white text-sm text-[#202B35] outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Live Summary */}
      <div className="p-3.5 bg-[#E9F4F5]/70 border border-[#08A6C1]/30 flex flex-wrap items-center justify-between gap-3 text-xs">
        <span className="font-semibold uppercase tracking-wider text-[#092C49] text-[11px]">
          Récapitulatif saisi :
        </span>
        <div className="flex flex-wrap items-center gap-3 font-mono text-[#092C49]">
          <span className="bg-white px-2.5 py-1 border border-[#CBD5E1]">
            Largeur : <strong>{formatMeasurement(width, unit)}</strong>
          </span>
          <span className="bg-white px-2.5 py-1 border border-[#CBD5E1]">
            Hauteur : <strong>{formatMeasurement(height, unit)}</strong>
          </span>
          <span className="bg-white px-2.5 py-1 border border-[#CBD5E1]">
            Quantité : <strong>{quantity}</strong>
          </span>
        </div>
      </div>

      {/* Mandatory Technical Notice */}
      <div className="p-3 bg-white border-l-2 border-[#08A6C1] text-xs text-[#202B35]/80 flex items-start gap-2">
        <Info className="w-4 h-4 text-[#08A6C1] shrink-0 mt-0.5" />
        <span>
          Les dimensions définitives seront confirmées par notre équipe technique.
        </span>
      </div>
    </div>
  );
};
