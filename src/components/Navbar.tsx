import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, PhoneCall, ArrowUpRight, Search, FileText, Instagram } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/site';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Catalogue", path: "/catalogue" },
    { name: "L'Univers AKWA WAKA", path: "/a-propos" },
    { name: "Contact & Showroom", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-[#092C49] text-[#E9F4F5] text-xs py-2 px-4 border-b border-[#123D64] hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-[#08A6C1] animate-pulse"></span>
              Showroom privé ouvert du Lundi au Samedi
            </span>
            <span className="text-white/40">•</span>
            <span className="text-[#E9F4F5]/80">Casablanca, Maroc</span>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/90 hover:text-[#08A6C1] transition-colors"
              title="Suivez AKWA WAKA sur Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-[#08A6C1]" />
              <span>@akwa_waka</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              href={siteConfig.pdfCatalogueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#08A6C1] hover:text-white transition-colors font-medium"
              title="Télécharger le catalogue Meubles 2026 (PDF)"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Catalogue PDF</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 text-white/90 hover:text-[#08A6C1] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#08A6C1]" />
              <span>{siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2DFD7] py-3'
            : 'bg-[#F5F4F0] border-b border-[#E2DFD7] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo AKWA WAKA */}
            <Link to="/" className="group flex items-center space-x-3">
              <img
                src={siteConfig.logo}
                alt="AKWA WAKA Logo"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide transition-colors relative py-1 font-medium ${
                    isActive(link.path)
                      ? 'text-[#092C49] font-semibold'
                      : 'text-[#627180] hover:text-[#092C49]'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#08A6C1] rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/catalogue"
                className="p-2 text-[#627180] hover:text-[#092C49] hover:bg-[#E9F4F5] rounded-full transition-colors"
                title="Rechercher dans le catalogue"
              >
                <Search className="w-5 h-5" />
              </Link>

              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#627180] hover:text-[#08A6C1] hover:bg-[#E9F4F5] rounded-full transition-colors"
                aria-label="Instagram AKWA WAKA"
                title="Instagram @akwa_waka"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#092C49] hover:bg-[#08A6C1] text-white text-xs font-semibold tracking-wider uppercase px-4 py-2.5 rounded-sm transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Devis WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#08A6C1] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile menu trigger button */}
            <div className="flex items-center md:hidden space-x-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#092C49] hover:text-[#08A6C1]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#25D366]"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5 fill-[#25D366]" />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[#092C49] hover:text-[#08A6C1] focus:outline-none"
                aria-label="Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {isOpen && (
          <div className="md:hidden border-t border-[#E2DFD7] bg-[#F5F4F0] px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base tracking-wide py-2 border-b border-[#E2DFD7] flex items-center justify-between ${
                    isActive(link.path)
                      ? 'text-[#08A6C1] font-semibold'
                      : 'text-[#202B35]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#627180]" />
                </Link>
              ))}

              <div className="pt-2 flex flex-col space-y-3">
                <a
                  href={siteConfig.pdfCatalogueUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-white text-[#092C49] border border-[#08A6C1]/40 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#08A6C1]" />
                  <span>Télécharger le Catalogue PDF</span>
                </a>

                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-[#E9F4F5] text-[#092C49] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-[#08A6C1]" />
                  <span>Suivre @akwa_waka sur Instagram</span>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#092C49] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  <span>Demander un devis sur WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
