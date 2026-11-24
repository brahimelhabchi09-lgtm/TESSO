import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Layers, ShieldCheck, CheckCircle2, ArrowRight, FileText, MessageSquare } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/site';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F4F0] pb-24 text-[#202B35]">
      {/* Header Banner */}
      <div className="bg-[#092C49] text-white pt-20 pb-16 border-b border-[#123D64]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#061D31] border border-[#08A6C1]/30 text-[10px] uppercase tracking-[0.25em] text-[#08A6C1] mb-4">
              <Sparkles className="w-3 h-3 text-[#08A6C1]" />
              Maison de Sanitaire & Bain
            </div>
            <h1 className="font-serif text-3xl sm:text-6xl font-light text-white mb-4 leading-tight">
              L'Art du Bain Contemporain <br />
              <span className="italic text-[#08A6C1]">Signé AKWA WAKA</span>
            </h1>
            <p className="text-sm sm:text-base text-[#E9F4F5]/85 font-light leading-relaxed">
              Chez AKWA WAKA, la salle de bain est pensée comme un lieu d'harmonie et d'épure : des meubles modernes, 
              des équipements sanitaires soignés et des finitions durables pour transformer chaque espace en un showroom privé.
            </p>
          </div>
        </div>
      </div>

      {/* Main Philosophy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#08A6C1]">
              Notre Vision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#092C49] leading-tight">
              L'Équilibre Idéal Entre Ergonomie Quotidienne et Esthétique Épurée
            </h2>
            <p className="text-sm text-[#202B35]/80 leading-relaxed">
              Fondée pour répondre aux besoins d'aménagements intérieurs contemporains, AKWA WAKA réunit des collections 
              de meubles de salle de bain suspendus et sur pieds, des vasques design, des miroirs connectés et des équipements sanitaires 
              alliant fonctionnalité et style.
            </p>
            <p className="text-sm text-[#202B35]/80 leading-relaxed">
              Notre catalogue 2026 illustre cette exigence : plus de 40 déclinaisons de meubles pensés pour optimiser l'espace, 
              résister durablement à l'humidité et offrir une signature visuelle affirmée.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={siteConfig.pdfCatalogueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#092C49] hover:bg-[#061D31] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#08A6C1]" />
                <span>Télécharger le Catalogue Meubles 2026 (PDF)</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white border border-[#E2DFD7] p-8 sm:p-12 shadow-luxury">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#E9F4F5] border border-[#08A6C1]/20 flex items-center justify-center text-[#08A6C1]">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-[#092C49]">Mobilier Modulaire</h4>
                <p className="text-xs text-[#627180] leading-relaxed">
                  Dimensions variées de 60 cm à 100 cm avec vasques en céramique et rangements compartimentés.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#E9F4F5] border border-[#08A6C1]/20 flex items-center justify-center text-[#08A6C1]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-[#092C49]">Miroirs Tactiles LED</h4>
                <p className="text-xs text-[#627180] leading-relaxed">
                  Éclairage périphérique intégré, commande tactile et rétroéclairage pour une ambiance showroom.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#E9F4F5] border border-[#08A6C1]/20 flex items-center justify-center text-[#08A6C1]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-[#092C49]">Hydrofuge & Durable</h4>
                <p className="text-xs text-[#627180] leading-relaxed">
                  Matériaux sélectionnés pour leur haute résistance aux projections d'eau et aux variations d'humidité.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#E9F4F5] border border-[#08A6C1]/20 flex items-center justify-center text-[#08A6C1]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-[#092C49]">Équipement Complet</h4>
                <p className="text-xs text-[#627180] leading-relaxed">
                  Du meuble vasque au WC intelligent, une offre harmonieuse pour composer une salle de bain cohérente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 p-12 bg-[#092C49] text-[#E9F4F5] text-center border border-[#123D64] relative overflow-hidden">
          <div className="absolute inset-0 bg-subtle-marble pointer-events-none opacity-40"></div>
          <div className="relative z-10">
            <h3 className="font-serif text-3xl sm:text-4xl font-light mb-4 text-white">
              Donnez Vie à Votre Projet avec AKWA WAKA
            </h3>
            <p className="text-sm text-[#A7DBE2] max-w-xl mx-auto mb-8 font-light">
              Découvrez nos pièces en situation dans le catalogue interactif ou contactez nos conseillers pour un devis direct.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/catalogue"
                className="px-8 py-3.5 bg-[#08A6C1] hover:bg-[#078CA3] text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <span>Consulter le catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppUrl("Bonjour AKWA WAKA, je souhaite échanger sur un projet avec votre équipe.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#061D31] hover:bg-[#123D64] border border-[#08A6C1]/40 text-xs font-semibold uppercase tracking-wider text-white transition-colors inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Demande WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
