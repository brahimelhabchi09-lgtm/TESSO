import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  Sparkles, 
  ArrowUpRight, 
  Gem, 
  Award, 
  Layers, 
  ChevronRight,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/ProductCard';
import { siteConfig, getWhatsAppUrl } from '../config/site';

export const Home: React.FC = () => {
  // Grab initial featured products (ensuring product 1 and product 2 are first)
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#141518] text-white overflow-hidden">
        {/* Architectural Bathroom SVG Background with Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bathroom.svg"
            alt="Showroom de salle de bain de luxe"
            className="w-full h-full object-cover object-center opacity-40 scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121316] via-[#121316]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-[#121316]/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl lg:max-w-3xl space-y-8">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1F2127]/90 border border-[#C5A880]/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#D8C2A0]">
                Collection Privée • Sanitaire & Bains
              </span>
            </div>

            {/* Welcome Title in French */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#FAF8F5] leading-[1.08]">
              L'Élégance Pure du <br />
              <span className="italic font-normal text-gold-gradient">Sanitaire & du Bain</span> <br />
              Haut de Gamme.
            </h1>

            {/* Short business description */}
            <p className="text-base sm:text-lg text-[#B5BAC6] font-light leading-relaxed max-w-xl">
              Bienvenue chez <strong className="text-white font-medium">{siteConfig.name}</strong>. 
              Découvrez notre sélection exclusive d'équipements sanitaires d'exception : meubles de créateurs, 
              robinetterie en laiton noble, vasques en marbre véritable et toilettes intelligentes de nouvelle génération.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/catalogue"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C5A880] hover:bg-[#D4AF37] text-[#141416] text-xs font-semibold tracking-[0.2em] uppercase transition-all shadow-lg hover:shadow-[#C5A880]/20"
              >
                <span>Explorer le Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppUrl("Bonjour, je souhaite être conseillé pour mon projet de salle de bain.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#1E2026]/90 hover:bg-[#282B33] text-white text-xs font-semibold tracking-[0.15em] uppercase border border-[#3E424D] hover:border-[#C5A880] transition-all backdrop-blur-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Demander un Devis WhatsApp</span>
              </a>
            </div>

            {/* Reassurance pill */}
            <div className="pt-8 border-t border-[#2A2D35] grid grid-cols-3 gap-6 text-[#9A9EA7]">
              <div>
                <p className="font-serif text-2xl text-[#FAF8F5]">100%</p>
                <p className="text-[11px] uppercase tracking-wider text-[#C5A880] mt-0.5">Finitions Nobles</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#FAF8F5]">6</p>
                <p className="text-[11px] uppercase tracking-wider text-[#C5A880] mt-0.5">Univers Dédiés</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#FAF8F5]">10 Ans</p>
                <p className="text-[11px] uppercase tracking-wider text-[#C5A880] mt-0.5">Garantie Céramique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED CATEGORIES SECTION */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#AD926B] block mb-2">
                Architecture & Matières
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141416]">
                Nos Univers de Produits
              </h2>
            </div>
            <Link
              to="/catalogue"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#141416] hover:text-[#AD926B] transition-colors group"
            >
              <span>Voir toutes les catégories</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((category, index) => (
              <Link
                key={category.id}
                to={`/catalogue?category=${encodeURIComponent(category.name)}`}
                className="group relative flex flex-col p-8 bg-white border border-[#EAE4D8] hover:border-[#C5A880] transition-all duration-300 hover:shadow-luxury-hover"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#9E9587]">
                    0{index + 1}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8E2D7] group-hover:bg-[#141416] group-hover:border-[#141416] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-[#AD926B] group-hover:text-white transition-colors" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-medium text-[#1E2024] group-hover:text-[#AD926B] transition-colors mb-3">
                  {category.name}
                </h3>

                <p className="text-xs text-[#6F737D] leading-relaxed flex-1">
                  {category.description}
                </p>

                <div className="mt-6 pt-4 border-t border-[#F2ECE1] flex items-center justify-between text-[11px] uppercase tracking-wider text-[#AD926B] font-semibold">
                  <span>Découvrir la gamme</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS (Highlighting Product 1 & Product 2) */}
      <section className="py-24 bg-white border-y border-[#ECE7DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#AD926B] block mb-2">
              Sélection Showroom
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141416] mb-4">
              Pièces d'Exception & Références Phares
            </h2>
            <p className="text-sm text-[#6F737D] leading-relaxed">
              Découvrez nos créations emblématiques alliant design minimaliste, ergonomie sophistiquée et longévité absolue.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Catalog link */}
          <div className="text-center mt-12">
            <Link
              to="/catalogue"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#141416] hover:bg-[#282B33] text-[#FAF8F5] text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
            >
              <span>Accéder au catalogue complet ({PRODUCTS.length} références)</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PROMOTIONAL / PRESTIGE BANNER */}
      <section className="relative py-24 bg-[#141416] text-white overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#C5A880]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#C5A880]/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C5A880] block">
                Excellence & Accompagnement
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight">
                L'Art du Bain Haute Couture : <br />
                <span className="italic text-[#D4AF37]">Projets Résidentiels & Architectes</span>
              </h2>
              <p className="text-sm sm:text-base text-[#9DA2AF] leading-relaxed">
                Vous réalisez une villa contemporaine, une rénovation haut de gamme ou un hôtel de charme ?
                Notre bureau d'études met à votre disposition l'intégralité des fiches techniques, nuanciers de matériaux
                et un accompagnement personnalisé pour vos commandes sur mesure.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#D8CEBF] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>Devis chiffré sous 24 heures</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>Plans de réservation & fiches techniques</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>Nuanciers de marbres & finitions PVD</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>Tarifs préférentiels architectes & pros</span>
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={getWhatsAppUrl("Bonjour, je suis architecte / professionnel et souhaite obtenir des renseignements sur votre catalogue.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#C5A880] hover:bg-[#D4AF37] text-[#141416] text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-black" />
                  <span>Contact Professionnel WhatsApp</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-[#525764] hover:border-white text-xs font-semibold tracking-wider uppercase text-white transition-colors"
                >
                  <span>Prendre Rendez-vous au Showroom</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
                </Link>
              </div>
            </div>

            {/* Visual card */}
            <div className="lg:col-span-5">
              <div className="p-8 sm:p-10 bg-[#1D1F25] border border-[#2F333D] relative shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[#C5A880]">
                    <Compass className="w-6 h-6 stroke-[1.5]" />
                    <span className="font-serif text-lg tracking-wider text-white">Showroom Casablanca</span>
                  </div>

                  <p className="text-xs text-[#9DA2AF] leading-relaxed">
                    Venez toucher nos textures, tester l'ergonomie de nos mitigeurs et observer les jeux de lumière sur nos miroirs connectés.
                  </p>

                  <div className="border-t border-[#2F333D] pt-4 space-y-2 text-xs text-[#D8CEBF]">
                    <div className="flex justify-between py-1 border-b border-[#262830]">
                      <span className="text-[#767B87]">Adresse</span>
                      <span className="text-right">{siteConfig.contact.address.city}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#262830]">
                      <span className="text-[#767B87]">Téléphone</span>
                      <span>{siteConfig.contact.phone}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#767B87]">Horaires</span>
                      <span>09h00 - 19h00</span>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppUrl("Bonjour, je souhaite visiter le showroom TESSO cette semaine.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-[#121316] hover:bg-[#252831] border border-[#C5A880]/40 text-center text-xs uppercase tracking-wider text-[#C5A880] transition-colors"
                  >
                    Réserver une visite privée
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
