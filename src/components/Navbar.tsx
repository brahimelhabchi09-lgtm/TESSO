import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, PhoneCall, ArrowUpRight, Search } from 'lucide-react';
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
    { name: "L'Excellence TESSO", path: "/a-propos" },
    { name: "Contact & Showroom", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#141416] text-[#D8CEBF] text-xs py-2 px-4 border-b border-[#2B2D33] hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse"></span>
              Showroom privé ouvert du Lundi au Samedi
            </span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400">Casablanca, Maroc</span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 text-zinc-300 hover:text-[#C5A880] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C5A880]" />
              {siteConfig.contact.phone}
            </a>
            <span className="text-zinc-600">|</span>
            <a
              href={getWhatsAppUrl("Bonjour, je souhaite prendre un rendez-vous pour visiter le showroom.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A880] hover:text-[#DFCEB5] font-medium flex items-center gap-1"
            >
              Conseil & Devis personnalisé
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D7] py-3.5'
            : 'bg-[#FAF8F5] border-b border-[#EAE4D8] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group flex items-center space-x-3">
              <div className="w-10 h-10 rounded-sm bg-[#141416] flex items-center justify-center text-[#C5A880] shadow-sm group-hover:bg-[#1E2024] transition-colors">
                <span className="font-serif text-2xl font-light tracking-widest text-[#D4AF37]">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold tracking-[0.25em] text-[#141416]">
                  TESSO
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#AD926B] font-medium">
                  Sanitaire & Bains
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide transition-colors relative py-1 ${
                    isActive(link.path)
                      ? 'text-[#141416] font-semibold'
                      : 'text-[#595E69] hover:text-[#141416]'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A880] rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/catalogue"
                className="p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
                title="Rechercher dans le catalogue"
              >
                <Search className="w-5 h-5" />
              </Link>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#141416] hover:bg-[#2C2F36] text-[#FAF8F5] text-xs font-medium tracking-wider uppercase px-4 py-2.5 rounded-none border border-[#C5A880]/30 transition-all shadow-sm hover:shadow-md group"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Devis WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile menu trigger button */}
            <div className="flex items-center md:hidden space-x-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#25D366] hover:text-green-600"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5 fill-[#25D366]" />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-zinc-800 hover:text-black focus:outline-none"
                aria-label="Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {isOpen && (
          <div className="md:hidden border-t border-[#EAE4D8] bg-[#FAF8F5] px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base tracking-wide py-2 border-b border-[#F0EBE1] flex items-center justify-between ${
                    isActive(link.path)
                      ? 'text-[#AD926B] font-semibold'
                      : 'text-zinc-700'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                </Link>
              ))}

              <div className="pt-4 flex flex-col space-y-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#141416] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  <span>Demander un devis sur WhatsApp</span>
                </a>
                <p className="text-xs text-center text-zinc-500 pt-2">
                  Showroom : {siteConfig.contact.address.city} • {siteConfig.contact.phone}
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
