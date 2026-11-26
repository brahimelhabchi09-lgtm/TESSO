import React from 'react';
import { Check, Info, Palette } from 'lucide-react';
import { ALUMINIUM_COLORS } from '../../data/aluminiumColors';
import { AluminiumColorOption } from '../../types/aluminium';

interface AluminiumColorSelectorProps {
  selectedColor: string;
  onSelectColor: (colorName: string) => void;
  availableColorNames?: string[];
  compact?: boolean;
}

function getSwatchStyle(option: AluminiumColorOption): React.CSSProperties {
  if (option.pattern === 'wood') {
    return {
      background: `repeating-linear-gradient(
        115deg,
        ${option.hex} 0px,
        ${option.hex} 6px,
        ${option.secondaryHex || '#B8845B'} 6px,
        ${option.secondaryHex || '#B8845B'} 10px
      )`,
    };
  }
  if (option.pattern === 'metallic' || option.pattern === 'gloss') {
    return {
      background: `linear-gradient(135deg, ${option.secondaryHex || option.hex} 0%, ${option.hex} 50%, ${option.secondaryHex || option.hex} 100%)`,
    };
  }
  return {
    backgroundColor: option.hex,
  };
}

export const AluminiumColorSelector: React.FC<AluminiumColorSelectorProps> = ({
  selectedColor,
  onSelectColor,
  availableColorNames,
  compact = false,
}) => {
  const options = availableColorNames && availableColorNames.length > 0
    ? ALUMINIUM_COLORS.filter((c) => availableColorNames.includes(c.name))
    : ALUMINIUM_COLORS;

  const activeOption =
    options.find((c) => c.name === selectedColor) ||
    ALUMINIUM_COLORS.find((c) => c.name === selectedColor) ||
    options[0];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#092C49]">
          <Palette className="w-4 h-4 text-[#08A6C1]" />
          <span>Couleur &amp; Finition Aluminium</span>
        </label>
        {activeOption && (
          <span className="text-xs font-medium text-[#08A6C1] bg-[#E9F4F5] px-2.5 py-0.5 border border-[#08A6C1]/25">
            {activeOption.name}
          </span>
        )}
      </div>

      {/* Swatches Grid */}
      <div className={`grid gap-2.5 ${compact ? 'grid-cols-4 sm:grid-cols-6' : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6'}`}>
        {options.map((option) => {
          const isSelected = selectedColor === option.name;
          const isLight = option.id === 'blanc' || option.id === 'beige' || option.id === 'argent';

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelectColor(option.name)}
              className={`group relative flex flex-col items-center p-2 border transition-all text-center ${
                isSelected
                  ? 'border-[#08A6C1] bg-[#E9F4F5]/70 shadow-iridescent ring-1 ring-[#08A6C1]'
                  : 'border-[#CBD5E1]/70 bg-white hover:border-[#08A6C1]/60'
              }`}
              title={`${option.name} — ${option.finishDescription}`}
            >
              <div
                className={`w-9 h-9 rounded-full border shadow-inner flex items-center justify-center transition-transform group-hover:scale-105 ${
                  isSelected ? 'border-[#092C49] scale-105' : 'border-[#CBD5E1]'
                }`}
                style={getSwatchStyle(option)}
              >
                {isSelected && (
                  <Check
                    className={`w-4 h-4 stroke-[2.5] ${
                      isLight ? 'text-[#092C49]' : 'text-white'
                    }`}
                  />
                )}
              </div>
              <span className="mt-1.5 text-[11px] font-medium text-[#202B35] leading-tight line-clamp-2">
                {option.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Finish Description */}
      {activeOption && !compact && (
        <div className="p-3 bg-[#F7FAFC] border border-[#CBD5E1]/70 text-xs text-[#202B35]/85 flex items-start gap-2.5">
          <div
            className="w-5 h-5 rounded-full shrink-0 border border-[#CBD5E1] mt-0.5"
            style={getSwatchStyle(activeOption)}
          />
          <div>
            <span className="font-semibold text-[#092C49]">{activeOption.name} : </span>
            <span>{activeOption.finishDescription}</span>
          </div>
        </div>
      )}

      {/* Proposed Interface Options Notice */}
      <p className="text-[11px] text-[#627180] flex items-start gap-1.5 leading-relaxed">
        <Info className="w-3.5 h-3.5 text-[#08A6C1] shrink-0 mt-0.5" />
        <span>
          Options indicatives proposées pour votre demande de devis. La disponibilité effective et le nuancier définitif sont confirmés par notre équipe technique.
        </span>
      </p>
    </div>
  );
};
