import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  Sparkles, 
  ArrowUpRight, 
  Gem, 
  ChevronRight,
  Compass,
  CheckCircle2,
  FileText,
  Instagram,
  Download
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/ProductCard';
import { siteConfig, getWhatsAppUrl } from '../config/site';

export const Home: React.FC = () => {
  // Grab featured products
  const featuredProducts = PRODUCTS.filter(p => p.featured).slice(0, 8);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#092C49] text-white overflow-hidden">
        {/* Background architectural visual with gradient overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bathroom.svg"
            alt="Showroom de salle de bain AKWA WAKA"
            className="w-full h-full object-cover object-center opacity-30 scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#092C49] via-[#092C49]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#092C49] via-transparent to-[#092C49]/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl lg:max-w-3xl space-y-8">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#061D31]/90 border border-[#08A6C1]/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#08A6C1]" />
              <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#E9F4F5]">
                Collection Officielle • Sanitaire & Bains
              </span>
            </div>

            {/* Welcome Title in French */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08]">
              L'Art de l'Eau & du Bain <br />
              <span className="italic font-normal text-[#08A6C1]">Contemporain</span> <br />
              par AKWA WAKA.
            </h1>

            {/* Business description */}
            <p className="text-base sm:text-lg text-[#E9F4F5]/90 font-light leading-relaxed max-w-xl">
              Bienvenue chez <strong className="text-white font-medium">{siteConfig.name}</strong>. 
              Découvrez notre collection complète de meubles de salle de bain contemporains, 
              robinetterie de précision, vasques design et sanitaires conçus pour sublimer votre espace bien-être.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/catalogue"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#08A6C1] hover:bg-[#0792AA] text-white text-xs font-semibold tracking-[0.2em] uppercase transition-all shadow-lg hover:shadow-[#08A6C1]/20"
              >
                <span>Explorer le Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={siteConfig.pdfCatalogueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#061D31]/90 hover:bg-[#123D64] text-white text-xs font-semibold tracking-[0.15em] uppercase border border-[#08A6C1]/40 transition-all backdrop-blur-sm"
              >
                <Download className="w-4 h-4 text-[#08A6C1]" />
                <span>Télécharger Catalogue PDF (43 Modèles)</span>
              </a>
            </div>

            {/* Instagram Quick Link Pill */}
            <div className="pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#E9F4F5]/80 hover:text-[#08A6C1] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#08A6C1]" />
                <span>Rejoignez notre communauté officielle sur Instagram <strong>@akwa_waka</strong></span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Key figures */}
            <div className="pt-8 border-t border-[#123D64] grid grid-cols-3 gap-6 text-[#A7DBE2]">
              <div>
                <p className="font-serif text-2xl text-white">43+</p>
                <p className="text-[11px] uppercase tracking-wider text-[#08A6C1] mt-0.5">Meubles de Bain</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-white">6</p>
                <p className="text-[11px] uppercase tracking-wider text-[#08A6C1] mt-0.5">Univers Dédiés</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-white">100%</p>
                <p className="text-[11px] uppercase tracking-wider text-[#08A6C1] mt-0.5">Finitions Soignées</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED CATEGORIES SECTION */}
      <section className="py-24 bg-[#F5F4F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#08A6C1] block mb-2">
                Architecture & Collections
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#092C49]">
                Nos Univers de Produits
              </h2>
            </div>
            <Link
              to="/catalogue"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#092C49] hover:text-[#08A6C1] transition-colors group"
            >
              <span>Voir tout le catalogue</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((category, index) => (
              <Link
                key={category.id}
                to={`/catalogue?category=${encodeURIComponent(category.name)}`}
                className="group relative flex flex-col p-8 bg-white border border-[#E2DFD7] hover:border-[#08A6C1] transition-all duration-300 hover:shadow-luxury-hover"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#08A6C1] font-semibold">
                    0{index + 1}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#E9F4F5] border border-[#D3ECF0] group-hover:bg-[#092C49] group-hover:border-[#092C49] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-[#08A6C1] group-hover:text-white transition-colors" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-medium text-[#202B35] group-hover:text-[#08A6C1] transition-colors mb-3">
                  {category.name}
                </h3>

                <p className="text-xs text-[#627180] leading-relaxed flex-1">
                  {category.description}
                </p>

                <div className="mt-6 pt-4 border-t border-[#E2DFD7] flex items-center justify-between text-[11px] uppercase tracking-wider text-[#08A6C1] font-semibold">
                  <span>Découvrir la gamme</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SECTION */}
      <section className="py-24 bg-white border-y border-[#E2DFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#08A6C1] block mb-2">
              Sélection Showroom
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#092C49] mb-4">
              Pièces Phares & Créations 2026
            </h2>
            <p className="text-sm text-[#627180] leading-relaxed">
              Une sélection de nos ensembles de meubles et sanitaires les plus plébiscités, alliant ergonomie soignée et finitions actuelles.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Catalog link */}
          <div className="text-center mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/catalogue"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#092C49] hover:bg-[#08A6C1] text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
            >
              <span>Accéder au catalogue complet ({PRODUCTS.length} références)</span>
              <ArrowRight className="w-4 h-4 text-[#08A6C1]" />
            </Link>

            <a
              href={siteConfig.pdfCatalogueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E9F4F5] hover:bg-[#D3ECF0] text-[#092C49] text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              <FileText className="w-4 h-4 text-[#08A6C1]" />
              <span>Consulter le Catalogue PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. OFFICIAL INSTAGRAM SECTION */}
      <section className="py-20 bg-[#F5F4F0] border-b border-[#E2DFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E2DFD7] p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#092C49] via-[#08A6C1] to-[#38BDF8] flex items-center justify-center text-white shadow-md shrink-0">
                <Instagram className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#08A6C1] font-semibold block mb-1">
                  Réseaux Sociaux Officiels
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#092C49]">
                  Suivez @akwa_waka sur Instagram
                </h3>
                <p className="text-xs sm:text-sm text-[#627180] mt-1 max-w-xl">
                  Découvrez nos réalisations en situation, les présentations vidéos de nos nouveaux meubles et l'actualité de nos arrivages.
                </p>
              </div>
            </div>

            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#092C49] hover:bg-[#08A6C1] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm whitespace-nowrap"
            >
              <Instagram className="w-4 h-4 text-[#08A6C1]" />
              <span>Voir le profil Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. PROMOTIONAL BANNER & SHOWROOM */}
      <section className="relative py-24 bg-[#092C49] text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#08A6C1] block">
                Projets & Aménagements
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight">
                Équipement Sanitaire Contemporain : <br />
                <span className="italic text-[#08A6C1]">Particuliers & Professionnels</span>
              </h2>
              <p className="text-sm sm:text-base text-[#E9F4F5]/90 leading-relaxed">
                Vous avez un projet de construction, de rénovation ou d'aménagement de salle de bain ? 
                L'équipe AKWA WAKA vous accompagne dans le choix des dimensions adaptées, des finitions et des agencements.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#E9F4F5] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#08A6C1] shrink-0" />
                  <span>Devis personnalisé rapide sur WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#08A6C1] shrink-0" />
                  <span>Catalogue meubles 2026 complet téléchargeable</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#08A6C1] shrink-0" />
                  <span>Large choix de dimensions : 60cm, 80cm, 100cm</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#08A6C1] shrink-0" />
                  <span>Écoute technique pour architectes et installateurs</span>
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#08A6C1] hover:bg-[#0792AA] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Échanger sur WhatsApp</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-[#08A6C1]/50 hover:border-white text-xs font-semibold tracking-wider uppercase text-white transition-colors"
                >
                  <span>Prendre Contact</span>
                  <ArrowUpRight className="w-4 h-4 text-[#08A6C1]" />
                </Link>
              </div>
            </div>

            {/* Showroom card */}
            <div className="lg:col-span-5">
              <div className="p-8 sm:p-10 bg-[#061D31] border border-[#123D64] relative shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[#08A6C1]">
                    <Compass className="w-6 h-6 stroke-[1.5]" />
                    <span className="font-serif text-lg tracking-wider text-white">Espace Showroom</span>
                  </div>

                  <p className="text-xs text-[#A7DBE2] leading-relaxed">
                    Découvrez nos collections de meubles, miroirs connectés et robinetterie exposés en situation.
                  </p>

                  <div className="border-t border-[#123D64] pt-4 space-y-2 text-xs text-[#E9F4F5]">
                    <div className="flex justify-between py-1 border-b border-[#123D64]">
                      <span className="text-[#A7DBE2]">Ville</span>
                      <span className="text-right">{siteConfig.contact.address.city}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#123D64]">
                      <span className="text-[#A7DBE2]">Téléphone</span>
                      <span>{siteConfig.contact.phone}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#A7DBE2]">Horaires</span>
                      <span>09h00 - 19h00</span>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppUrl("Bonjour AKWA WAKA, je souhaite visiter votre showroom.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-[#092C49] hover:bg-[#08A6C1] border border-[#08A6C1]/40 text-center text-xs uppercase tracking-wider text-white transition-colors"
                  >
                    Demander une visite
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
