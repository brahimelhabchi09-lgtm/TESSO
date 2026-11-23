import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Gem, ShieldCheck, Layers, Award, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../config/site';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      {/* Header Banner */}
      <div className="bg-[#141416] text-[#FAF8F5] pt-20 pb-16 border-b border-[#2A2D35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1F2128] border border-[#C5A880]/30 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-4">
              <Sparkles className="w-3 h-3" />
              Maison de Sanitaire
            </div>
            <h1 className="font-serif text-3xl sm:text-6xl font-light text-white mb-4 leading-tight">
              L'Art du Bain Réinventé <br />
              <span className="italic text-gold-gradient">Par la Pureté et la Matière</span>
            </h1>
            <p className="text-sm sm:text-base text-[#A0A5B2] font-light leading-relaxed">
              Chez TESSO, la salle de bain n'est pas une simple pièce technique : c'est un sanctuaire d'intimité, 
              de ressourcement et de design contemporain.
            </p>
          </div>
        </div>
      </div>

      {/* Main Philosophy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#AD926B]">
              Notre Vision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#141416] leading-tight">
              L'Équilibre Idéal Entre Ingénierie Précise et Raffinement Intemporel
            </h2>
            <p className="text-sm text-[#5F636E] leading-relaxed">
              Fondée pour répondre aux exigences des amoureux d'architecture intérieure, TESSO sélectionne des équipements 
              sanitaires conçus selon les standards européens les plus stricts. 
            </p>
            <p className="text-sm text-[#5F636E] leading-relaxed">
              Chaque vasque, mitigeur, meuble suspendu ou cuvette de WC intelligente est éprouvée pour résister aux agressions 
              quotidiennes de l'eau et de l'humidité, tout en conservant une ligne sculpturale d'une pureté exemplaire.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white border border-[#E2DBD0] p-8 sm:p-12 shadow-luxury">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#FAF8F5] border border-[#E4DDD0] flex items-center justify-center text-[#AD926B]">
                  <Gem className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-[#141416]">Marbres Véritables</h4>
                <p className="text-xs text-[#71757E] leading-relaxed">
                  Blocs de marbre Calacatta et Carrare taillés sur mesure et hydrofugés en profondeur.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#FAF8F5] border border-[#E4DDD0] flex items-center justify-center text-[#AD926B]">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-[#141416]">Finitions PVD Laiton</h4>
                <p className="text-xs text-[#71757E] leading-relaxed">
                  Dépôt physique en phase vapeur garantissant une résistance absolue aux micro-rayures et au calcaire.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#FAF8F5] border border-[#E4DDD0] flex items-center justify-center text-[#AD926B]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-[#141416]">Céramique Sans Bride</h4>
                <p className="text-xs text-[#71757E] leading-relaxed">
                  Émail vitrifié antibactérien à très haute température pour une hygiène irréprochable.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#FAF8F5] border border-[#E4DDD0] flex items-center justify-center text-[#AD926B]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-[#141416]">Garantie Jusqu'à 10 Ans</h4>
                <p className="text-xs text-[#71757E] leading-relaxed">
                  Traçabilité complète des références et disponibilité garantie des pièces détachées.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 p-12 bg-[#141416] text-[#FAF8F5] text-center border border-[#2A2D35] relative overflow-hidden">
          <h3 className="font-serif text-3xl sm:text-4xl font-light mb-4 text-white">
            Donnez Vie à Votre Projet d'Exception
          </h3>
          <p className="text-sm text-[#A0A5B2] max-w-xl mx-auto mb-8 font-light">
            Découvrez nos pièces en situation dans notre catalogue ou réservez votre visite privée au showroom.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/catalogue"
              className="px-8 py-3.5 bg-[#C5A880] hover:bg-[#D4AF37] text-[#141416] text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <span>Consulter le catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={getWhatsAppUrl("Bonjour, je souhaite échanger sur un projet avec votre équipe.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#1F2128] hover:bg-[#2B2E38] border border-[#444854] text-xs font-semibold uppercase tracking-wider text-white transition-colors"
            >
              Demande WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
