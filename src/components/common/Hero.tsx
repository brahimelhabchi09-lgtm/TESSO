import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Download,
  Instagram,
  ArrowUpRight,
  Layers,
  Bath,
  Maximize2,
} from 'lucide-react';
import { siteConfig } from '../../config/site';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[88vh] flex items-center bg-midnight-iridescent text-white overflow-hidden border-b border-[#08A6C1]/20">
      {/* Architectural local background visual + subtle iridescent glass overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bathroom.svg"
          alt="Architecture intérieure AKWA WAKA - Sanitaire et Menuiserie Aluminium"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101820] via-[#092C49]/90 to-[#092C49]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-transparent to-[#101820]/50" />
      </div>

      {/* Subtle floating iridescent 3D orbs (GPU-friendly) */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -14, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-24 right-[10%] w-96 h-96 rounded-full bg-[#08A6C1]/20 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 16, 0], opacity: [0.22, 0.38, 0.22] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="pointer-events-none absolute -bottom-24 right-[28%] w-80 h-80 rounded-full bg-[#8B5CF6]/15 blur-3xl"
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 glass-panel-dark rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#08A6C1]" />
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#E9F4F5]">
                AKWA WAKA • Sanitaire & Menuiserie Aluminium
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05]">
              <span className="text-white block">L&apos;élégance</span>
              <span className="italic font-normal text-iridescent-gradient block">
                prend forme.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-[#E9F4F5]/90 font-light leading-relaxed max-w-xl">
              Des solutions raffinées pour vos espaces de vie, du sanitaire à la menuiserie aluminium.
            </p>

            {/* Two Main CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/catalogue"
                className="chrome-sheen inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#08A6C1] hover:bg-[#0792AA] text-white text-xs font-semibold tracking-[0.18em] uppercase transition-all shadow-iridescent-glow"
              >
                <Bath className="w-4 h-4" />
                <span>Découvrir le sanitaire</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/aluminium"
                className="chrome-sheen inline-flex items-center justify-center gap-3 px-7 py-4 glass-panel-dark hover:bg-[#092C49] text-white text-xs font-semibold tracking-[0.18em] uppercase transition-all border border-[#08A6C1]/50 hover:border-[#22D3EE]"
              >
                <Layers className="w-4 h-4 text-[#22D3EE]" />
                <span>Explorer l&apos;aluminium</span>
                <ArrowRight className="w-4 h-4 text-[#22D3EE]" />
              </Link>
            </div>

            {/* Secondary quick links: PDF + Instagram */}
            <div className="flex flex-wrap items-center gap-5 pt-2 text-xs">
              <a
                href={siteConfig.pdfCatalogueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#A7DBE2] hover:text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#08A6C1]" />
                <span>Catalogue Meubles 2026 (PDF)</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#A7DBE2] hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#08A6C1]" />
                <span>@akwa_waka</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Subtle 3D Glassmorphic Universe Showcase Cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 perspective-container"
          >
            {/* Card 1: Sanitaire Showcase with real local product photo */}
            <Link
              to="/catalogue"
              className="group card-3d-tilt glass-panel-dark iridescent-border p-4 flex items-center gap-4 hover:shadow-iridescent-glow"
            >
              <div className="w-20 h-20 shrink-0 overflow-hidden bg-[#092C49] border border-white/10">
                <img
                  src="/images/products/meubles/v60-60cm.jpg"
                  alt="Meubles de salle de bain AKWA WAKA"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#08A6C1] font-semibold block">
                  Univers 01
                </span>
                <h3 className="font-serif text-xl text-white group-hover:text-[#68C4D3] transition-colors">
                  Sanitaire &amp; Bain
                </h3>
                <p className="text-xs text-[#CBD5E1] line-clamp-2 mt-0.5">
                  43 modèles de meubles de salle de bain, vasques, WC et équipements.
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#08A6C1] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Card 2: Menuiserie Aluminium & Garage Doors */}
            <Link
              to="/aluminium"
              className="group card-3d-tilt glass-panel-dark iridescent-border p-4 flex items-center gap-4 hover:shadow-iridescent-glow"
            >
              <div className="w-20 h-20 shrink-0 bg-gradient-to-br from-[#092C49] via-[#123D64] to-[#101820] border border-[#08A6C1]/30 flex flex-col items-center justify-center text-[#68C4D3]">
                <Maximize2 className="w-6 h-6 stroke-[1.5]" />
                <span className="text-[9px] uppercase tracking-widest mt-1 text-[#CBD5E1]">
                  Sur mesure
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A78BFA] font-semibold block">
                  Univers 02
                </span>
                <h3 className="font-serif text-xl text-white group-hover:text-[#68C4D3] transition-colors">
                  Menuiserie Aluminium
                </h3>
                <p className="text-xs text-[#CBD5E1] line-clamp-2 mt-0.5">
                  Fenêtres, portes, baies vitrées, portes de garage, nuancier &amp; devis dimensions.
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#22D3EE] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Quick Dimensions & Devis pill */}
            <Link
              to="/aluminium#devis-aluminium"
              className="sm:col-span-2 lg:col-span-1 glass-panel-dark px-5 py-3.5 flex items-center justify-between text-xs hover:border-[#08A6C1] transition-colors"
            >
              <span className="text-[#E9F4F5] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#08A6C1] animate-pulse" />
                Configurateur de devis aluminium &amp; dimensions sur mesure
              </span>
              <span className="text-[#08A6C1] font-semibold uppercase tracking-wider text-[11px] flex items-center gap-1 shrink-0 ml-2">
                Configurer <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
