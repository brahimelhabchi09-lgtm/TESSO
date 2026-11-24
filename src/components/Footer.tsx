import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight, ShieldCheck, Gem, Truck, Instagram, FileText } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/site';
import { CATEGORIES } from '../data/categories';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#092C49] text-[#E9F4F5] border-t border-[#123D64] pt-16 pb-10">
      {/* Upper Features / Guarantees Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-[#123D64]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 bg-[#061D31] border border-[#08A6C1]/30 flex items-center justify-center text-[#08A6C1] shrink-0">
              <Gem className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Design Contemporain</h4>
              <p className="text-xs text-[#A7DBE2] mt-0.5">Lignes épurées, finitions soignées et matériaux durables.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 bg-[#061D31] border border-[#08A6C1]/30 flex items-center justify-center text-[#08A6C1] shrink-0">
              <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Qualité & Fiabilité</h4>
              <p className="text-xs text-[#A7DBE2] mt-0.5">Produits contrôlés selon les exigences techniques de l'équipement sanitaire.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 bg-[#061D31] border border-[#08A6C1]/30 flex items-center justify-center text-[#08A6C1] shrink-0">
              <Truck className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Service & Accompagnement</h4>
              <p className="text-xs text-[#A7DBE2] mt-0.5">Conseils sur mesure pour particuliers et professionnels.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <img
                src={siteConfig.logo}
                alt="AKWA WAKA Logo"
                className="h-10 w-auto bg-white p-1 rounded-sm object-contain"
              />
              <span className="font-serif text-2xl font-bold tracking-[0.15em] text-white">
                AKWA WAKA
              </span>
            </div>
            <p className="text-sm text-[#A7DBE2] leading-relaxed max-w-sm">
              Marque spécialisée dans l'équipement sanitaire contemporain : meubles de salle de bain innovants, vasques, robinetterie et accessoires de bain.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#061D31] hover:bg-[#08A6C1] border border-[#08A6C1]/30 text-xs uppercase tracking-wider text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#08A6C1] group-hover:text-white" />
                <span>Instagram @akwa_waka</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={siteConfig.pdfCatalogueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#061D31] hover:bg-[#08A6C1] border border-[#08A6C1]/30 text-xs uppercase tracking-wider text-white transition-colors"
              >
                <FileText className="w-4 h-4 text-[#08A6C1]" />
                <span>Catalogue PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#08A6C1]">
              Collections & Catégories
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A7DBE2]">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/catalogue?category=${encodeURIComponent(cat.name)}`}
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 bg-[#08A6C1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#08A6C1]">
              Informations & Contact
            </h4>
            <div className="space-y-3.5 text-sm text-[#A7DBE2]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#08A6C1] shrink-0 mt-1" />
                <span>{siteConfig.contact.address.full}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#08A6C1] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#08A6C1] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-3 pt-1 border-t border-[#123D64]">
                <Clock className="w-4 h-4 text-[#08A6C1] shrink-0 mt-1" />
                <div className="text-xs space-y-1">
                  <p>{siteConfig.contact.openingHours.weekdays}</p>
                  <p>{siteConfig.contact.openingHours.saturday}</p>
                  <p className="text-[#08A6C1] font-medium">{siteConfig.contact.openingHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#123D64] flex flex-col sm:flex-row items-center justify-between text-xs text-[#A7DBE2]/60 gap-4">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
        <div className="flex items-center space-x-6">
          <Link to="/catalogue" className="hover:text-white transition-colors">Catalogue complet</Link>
          <span>•</span>
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram @akwa_waka
          </a>
          <span>•</span>
          <Link to="/contact" className="hover:text-white transition-colors">Contactez-nous</Link>
        </div>
      </div>
    </footer>
  );
};
