import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight, ShieldCheck, Gem, Truck } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/site';
import { CATEGORIES } from '../data/categories';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121316] text-[#D8CEBF] border-t border-[#23252B] pt-16 pb-10">
      {/* Upper Features / Guarantees Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-[#23252B]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-none bg-[#1C1E24] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] shrink-0">
              <Gem className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Céramique & Laiton Noble</h4>
              <p className="text-xs text-[#868A94] mt-0.5">Matériaux premium certifiés & finitions PVD durables.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-none bg-[#1C1E24] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] shrink-0">
              <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Garantie & Sérénité</h4>
              <p className="text-xs text-[#868A94] mt-0.5">Jusqu'à 10 ans de garantie constructeur sur nos pièces.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-none bg-[#1C1E24] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] shrink-0">
              <Truck className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Livraison Showroom & Pro</h4>
              <p className="text-xs text-[#868A94] mt-0.5">Expédition soignée sur toute la région et tout le Maroc.</p>
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
              <div className="w-9 h-9 bg-[#1C1D21] border border-[#C5A880] flex items-center justify-center text-[#D4AF37]">
                <span className="font-serif text-xl font-light">T</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white">
                TESSO
              </span>
            </div>
            <p className="text-sm text-[#9498A3] leading-relaxed max-w-sm">
              Maison spécialisée dans l'équipement sanitaire de luxe, l'aménagement de salles de bain raffinées et la robinetterie d'architecte.
            </p>
            <div>
              <a
                href={getWhatsAppUrl("Bonjour, je souhaite échanger avec un conseiller TESSO.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1C1D21] hover:bg-[#252830] border border-[#C5A880]/40 text-xs uppercase tracking-wider text-[#FAF8F5] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Conseiller WhatsApp direct</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
              Collections & Catégories
            </h4>
            <ul className="space-y-2.5 text-sm text-[#9498A3]">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/catalogue?category=${encodeURIComponent(cat.name)}`}
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 bg-[#C5A880] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
              Showroom & Informations
            </h4>
            <div className="space-y-3.5 text-sm text-[#9498A3]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-1" />
                <span>{siteConfig.contact.address.full}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-3 pt-1 border-t border-[#23252B]">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-1" />
                <div className="text-xs space-y-1">
                  <p>{siteConfig.contact.openingHours.weekdays}</p>
                  <p>{siteConfig.contact.openingHours.saturday}</p>
                  <p className="text-[#C5A880]">{siteConfig.contact.openingHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#23252B] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6F737D] gap-4">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
        <div className="flex items-center space-x-6">
          <Link to="/catalogue" className="hover:text-white transition-colors">Catalogue complet</Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-white transition-colors">Prendre rendez-vous</Link>
          <span>•</span>
          <span>Conception Haute Couture</span>
        </div>
      </div>
    </footer>
  );
};
