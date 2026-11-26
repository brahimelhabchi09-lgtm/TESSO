import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  MessageSquare,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  FileText,
  Instagram,
  Layers,
  Ruler,
  Palette,
  Bath,
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES, ALUMINIUM_CATEGORIES } from '../data/categories';
import { ALUMINIUM_PRODUCTS } from '../data/aluminiumProducts';
import { ALUMINIUM_COLORS } from '../data/aluminiumColors';
import { ProductCard } from '../components/ProductCard';
import { AluminiumProductCard } from '../components/aluminium/AluminiumProductCard';
import { Hero } from '../components/common/Hero';
import { IridescentCard } from '../components/common/IridescentCard';
import { siteConfig, getWhatsAppUrl } from '../config/site';

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 8);
  const featuredAluminium = ALUMINIUM_PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-[#F7FAFC]">
      {/* 1. REDESIGNED IRIDESCENT 3D HERO */}
      <Hero />

      {/* 2. TWO BUSINESS UNIVERSES OVERVIEW */}
      <section className="py-20 bg-[#F7FAFC] border-b border-[#CBD5E1]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#08A6C1] block mb-2">
              Architecture &amp; Savoir-Faire
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#092C49]">
              Deux Univers d&apos;Excellence
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Universe A: Sanitaire */}
            <IridescentCard className="h-full">
              <div className="p-8 sm:p-10 flex flex-col h-full justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#08A6C1]">
                      <Bath className="w-4 h-4" />
                      Univers 01
                    </span>
                    <span className="text-xs font-mono bg-[#E9F4F5] text-[#092C49] px-2.5 py-1">
                      {PRODUCTS.length} modèles
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl font-normal text-[#092C49]">
                    Sanitaire &amp; Salle de Bain
                  </h3>
                  <p className="text-sm text-[#627180] leading-relaxed">
                    Meubles de salle de bain contemporains, lavabos et vasques, WC et toilettes,
                    robinets et mitigeurs, douches et accessoires coordonnés.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/catalogue?category=${encodeURIComponent(cat.name)}`}
                        className="text-[11px] px-2.5 py-1 bg-[#F7FAFC] border border-[#CBD5E1] text-[#092C49] hover:border-[#08A6C1] hover:text-[#08A6C1] transition-colors"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2DFD7] flex flex-wrap items-center justify-between gap-4">
                  <Link
                    to="/catalogue"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#092C49] hover:text-[#08A6C1] transition-colors"
                  >
                    <span>Découvrir le sanitaire</span>
                    <ArrowRight className="w-4 h-4 text-[#08A6C1]" />
                  </Link>
                  <a
                    href={siteConfig.pdfCatalogueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#08A6C1] hover:text-[#092C49] font-medium"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Catalogue PDF 2026</span>
                  </a>
                </div>
              </div>
            </IridescentCard>

            {/* Universe B: Menuiserie Aluminium */}
            <IridescentCard dark className="h-full" delay={0.1}>
              <div className="p-8 sm:p-10 flex flex-col h-full justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
                      <Layers className="w-4 h-4" />
                      Univers 02
                    </span>
                    <span className="text-xs font-mono bg-[#08A6C1]/20 text-[#22D3EE] border border-[#08A6C1]/40 px-2.5 py-1">
                      Sur mesure &amp; Nuancier
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl font-normal text-white">
                    Menuiserie Aluminium &amp; Portes de Garage
                  </h3>
                  <p className="text-sm text-[#CBD5E1] leading-relaxed">
                    Fenêtres, portes, baies vitrées coulissantes, portes-fenêtres, coulissants aluminium,
                    portes de garage et accessoires sur mesure selon vos dimensions.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {ALUMINIUM_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/aluminium?category=${encodeURIComponent(cat.name)}`}
                        className="text-[11px] px-2.5 py-1 bg-white/5 border border-white/15 text-[#E9F4F5] hover:border-[#08A6C1] hover:text-[#22D3EE] transition-colors"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    to="/aluminium"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#22D3EE] hover:text-white transition-colors"
                  >
                    <span>Explorer l&apos;aluminium</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/aluminium#devis-aluminium"
                    className="inline-flex items-center gap-1.5 text-xs text-[#CBD5E1] hover:text-[#22D3EE]"
                  >
                    <Ruler className="w-3.5 h-3.5 text-[#08A6C1]" />
                    <span>Devis dimensions &amp; couleurs</span>
                  </Link>
                </div>
              </div>
            </IridescentCard>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SANITARY PRODUCTS SECTION (Real Photos Preserved) */}
      <section className="py-24 bg-white border-b border-[#CBD5E1]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#08A6C1] block mb-2">
                Sélection Sanitaire 2026
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#092C49]">
                Pièces Phares &amp; Meubles de Bain
              </h2>
            </div>
            <Link
              to="/catalogue"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#092C49] hover:text-[#08A6C1] transition-colors group"
            >
              <span>Voir tout le sanitaire ({PRODUCTS.length})</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/catalogue"
              className="chrome-sheen inline-flex items-center gap-3 px-8 py-3.5 bg-[#092C49] hover:bg-[#08A6C1] text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
            >
              <span>Accéder au catalogue sanitaire ({PRODUCTS.length} références)</span>
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

      {/* 4. FEATURED ALUMINIUM, GARAGE DOORS & COLOR PALETTE PREVIEW */}
      <section className="py-24 bg-[#F7FAFC] border-b border-[#CBD5E1]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#08A6C1] block mb-2">
                Menuiserie Architecturale &amp; Fermetures
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#092C49]">
                Aluminium &amp; Portes de Garage
              </h2>
            </div>
            <Link
              to="/aluminium"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#092C49] hover:text-[#08A6C1] transition-colors group"
            >
              <span>Explorer toute la gamme aluminium</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAluminium.map((item) => (
              <AluminiumProductCard key={item.id} product={item} />
            ))}
          </div>

          {/* Interactive Colours & Custom Dimensions Callout Strip */}
          <div className="bg-midnight-iridescent text-white p-8 sm:p-10 border border-[#08A6C1]/30 shadow-iridescent grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#22D3EE] font-semibold">
                <Palette className="w-4 h-4" />
                <span>Nuancier &amp; Dimensions Sur Mesure</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light">
                Configurez votre menuiserie selon vos teintes et vos mesures
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                Choisissez parmi nos propositions de coloris et finitions (Blanc, Noir, Gris anthracite, Bronze, Imitation bois, Mat ou Brillant) et indiquez votre largeur, hauteur et quantité pour obtenir un devis personnalisé.
              </p>

              {/* Swatch Preview Row */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                {ALUMINIUM_COLORS.map((c) => (
                  <div
                    key={c.id}
                    className="flex items-center gap-1.5 px-2.5 py-1 glass-panel-dark rounded-full text-[11px] text-[#E9F4F5]"
                    title={c.finishDescription}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-white/40"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span>{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                to="/aluminium#devis-aluminium"
                className="chrome-sheen inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#08A6C1] hover:bg-[#0792AA] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-iridescent-glow"
              >
                <Ruler className="w-4 h-4" />
                <span>Configurer mes dimensions &amp; devis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/aluminium?category=Portes%20de%20garage"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 glass-panel-dark hover:bg-[#092C49] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Découvrir les portes de garage</span>
                <ChevronRight className="w-4 h-4 text-[#08A6C1]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OFFICIAL INSTAGRAM SECTION */}
      <section className="py-20 bg-white border-b border-[#CBD5E1]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IridescentCard>
            <div className="p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#092C49] via-[#08A6C1] to-[#8B5CF6] flex items-center justify-center text-white shadow-iridescent-glow shrink-0">
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
                    Découvrez nos réalisations en situation, nos meubles de salle de bain et nos installations aluminium.
                  </p>
                </div>
              </div>

              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="chrome-sheen inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#092C49] hover:bg-[#08A6C1] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm whitespace-nowrap"
              >
                <Instagram className="w-4 h-4 text-[#08A6C1]" />
                <span>Voir le profil Instagram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </IridescentCard>
        </div>
      </section>

      {/* 6. PROMOTIONAL BANNER & SHOWROOM */}
      <section className="relative py-24 bg-[#092C49] text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#08A6C1] block">
                Projets &amp; Aménagements
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight">
                Accompagnement Sur Mesure : <br />
                <span className="italic text-[#22D3EE]">Particuliers &amp; Professionnels</span>
              </h2>
              <p className="text-sm sm:text-base text-[#E9F4F5]/90 leading-relaxed">
                Construction neuve ou rénovation complète : AKWA WAKA vous accompagne de la sélection de vos équipements sanitaires jusqu&apos;à la prise de mesures de vos menuiseries aluminium et portes de garage.
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
                  <span>Prise en compte des dimensions (mm, cm, m)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#08A6C1] shrink-0" />
                  <span>Validation technique par notre équipe</span>
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chrome-sheen inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#08A6C1] hover:bg-[#0792AA] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Contacter sur WhatsApp</span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#08A6C1] hover:bg-[#123D64] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <span>Formulaire &amp; Showroom</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 glass-panel-dark p-8 space-y-6 shadow-iridescent">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[11px] uppercase tracking-widest text-[#22D3EE] block mb-1">
                  Informations Pratiques
                </span>
                <h3 className="font-serif text-2xl text-white">Showroom AKWA WAKA</h3>
              </div>

              <div className="space-y-4 text-xs text-[#E9F4F5]">
                <div>
                  <strong className="text-white block uppercase tracking-wider mb-1">Localisation</strong>
                  <p className="text-[#CBD5E1]">{siteConfig.contact.address.full}</p>
                </div>
                <div>
                  <strong className="text-white block uppercase tracking-wider mb-1">Horaires d&apos;ouverture</strong>
                  <p className="text-[#CBD5E1]">{siteConfig.contact.openingHours.weekdays}</p>
                  <p className="text-[#CBD5E1]">{siteConfig.contact.openingHours.saturday}</p>
                  <p className="text-[#22D3EE] mt-0.5">{siteConfig.contact.openingHours.sunday}</p>
                </div>
                <div>
                  <strong className="text-white block uppercase tracking-wider mb-1">WhatsApp Direct</strong>
                  <p className="text-[#CBD5E1]">{siteConfig.whatsapp.displayNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
