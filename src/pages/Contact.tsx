import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  ArrowUpRight,
  Instagram
} from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/site';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Demande de devis',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0] pb-24 text-[#202B35]">
      {/* Banner */}
      <div className="bg-[#092C49] text-white pt-16 pb-12 border-b border-[#123D64]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#061D31] border border-[#08A6C1]/30 text-[10px] uppercase tracking-[0.25em] text-[#08A6C1] mb-4">
              <Sparkles className="w-3 h-3 text-[#08A6C1]" />
              Service Client & Showroom
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-light text-white mb-3">
              Contact & Espace Devis
            </h1>
            <p className="text-sm text-[#E9F4F5]/85 font-light leading-relaxed">
              Venez découvrir nos collections en showroom ou échangez directement avec nos conseillers AKWA WAKA
              pour concevoir la salle de bain adaptée à vos espaces.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Showroom & Contact Informations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Showroom Details Card */}
            <div className="bg-white border border-[#E2DFD7] p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#E2DFD7]">
                <div className="w-10 h-10 bg-[#E9F4F5] border border-[#08A6C1]/20 flex items-center justify-center text-[#08A6C1]">
                  <Compass className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-normal text-[#092C49]">Notre Showroom</h2>
                  <p className="text-xs text-[#627180]">{siteConfig.contact.address.city}, Maroc</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#202B35]/80">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#08A6C1] shrink-0 mt-1" />
                  <div>
                    <span className="block font-semibold text-[#092C49] uppercase text-[11px] mb-0.5">Adresse</span>
                    <span>{siteConfig.contact.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#08A6C1] shrink-0 mt-1" />
                  <div>
                    <span className="block font-semibold text-[#092C49] uppercase text-[11px] mb-0.5">Téléphone direct</span>
                    <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#08A6C1] transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-[#08A6C1] shrink-0 mt-1" />
                  <div>
                    <span className="block font-semibold text-[#092C49] uppercase text-[11px] mb-0.5">Courriel</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#08A6C1] transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Instagram className="w-4 h-4 text-[#08A6C1] shrink-0 mt-1" />
                  <div>
                    <span className="block font-semibold text-[#092C49] uppercase text-[11px] mb-0.5">Instagram Officiel</span>
                    <a
                      href={siteConfig.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#08A6C1] transition-colors inline-flex items-center gap-1 font-medium"
                    >
                      <span>@akwa_waka</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#08A6C1]" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2 border-t border-[#E2DFD7]">
                  <Clock className="w-4 h-4 text-[#08A6C1] shrink-0 mt-1" />
                  <div className="space-y-1">
                    <span className="block font-semibold text-[#092C49] uppercase text-[11px] mb-0.5">Heures d'ouverture</span>
                    <p className="text-xs">{siteConfig.contact.openingHours.weekdays}</p>
                    <p className="text-xs">{siteConfig.contact.openingHours.saturday}</p>
                    <p className="text-xs text-[#08A6C1] font-medium">{siteConfig.contact.openingHours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp direct CTA */}
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Bonjour AKWA WAKA, je souhaite échanger directement avec un conseiller.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#092C49] hover:bg-[#061D31] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  <span>Discussion instantanée sur WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-[#08A6C1]" />
                </a>
              </div>
            </div>

            {/* Privilege appointment banner */}
            <div className="bg-white border border-[#E2DFD7] p-5 shadow-sm">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#092C49] mb-1">
                Accueil Professionnels & Particuliers
              </h3>
              <p className="text-xs text-[#627180] leading-relaxed">
                Profitez de conseils personnalisés pour étudier vos plans d'aménagement, choisir les dimensions adaptées à vos meubles et obtenir un chiffrage rapide.
              </p>
            </div>
          </div>

          {/* RIGHT: Contact / Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E2DFD7] p-6 sm:p-10 shadow-sm">
              <h2 className="font-serif text-2xl font-normal text-[#092C49] mb-2">
                Formulaire de Demande & Devis
              </h2>
              <p className="text-xs sm:text-sm text-[#627180] mb-8">
                Remplissez les informations ci-dessous. Un conseiller AKWA WAKA vous recontactera sous 24 heures ouvrées.
              </p>

              {submitted ? (
                <div className="p-8 bg-[#E9F4F5] border border-[#08A6C1]/30 text-center space-y-4">
                  <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center text-[#08A6C1] shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#092C49]">Demande transmise avec succès</h3>
                  <p className="text-xs sm:text-sm text-[#202B35]/80 max-w-md mx-auto">
                    Merci <strong>{formData.name || 'cher client'}</strong>. Votre demande a bien été enregistrée par notre équipe commerciale AKWA WAKA.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'Demande de devis', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 bg-[#092C49] hover:bg-[#061D31] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#092C49] mb-1.5">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex : M. Mehdi Alami"
                        className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#E2DFD7] focus:border-[#08A6C1] focus:ring-1 focus:ring-[#08A6C1] focus:bg-white text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#092C49] mb-1.5">
                        Téléphone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ex : +212 6 00 00 00 00"
                        className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#E2DFD7] focus:border-[#08A6C1] focus:ring-1 focus:ring-[#08A6C1] focus:bg-white text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#092C49] mb-1.5">
                        Adresse e-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Ex : mehdi@exemple.ma"
                        className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#E2DFD7] focus:border-[#08A6C1] focus:ring-1 focus:ring-[#08A6C1] focus:bg-white text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#092C49] mb-1.5">
                        Objet de la demande
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#E2DFD7] focus:border-[#08A6C1] focus:ring-1 focus:ring-[#08A6C1] focus:bg-white text-xs sm:text-sm outline-none transition-colors"
                      >
                        <option value="Demande de devis">Demande de devis chiffré</option>
                        <option value="Rendez-vous showroom">Prise de rendez-vous en showroom</option>
                        <option value="Projet architecte">Partenariat / Projet d'architecture</option>
                        <option value="Disponibilité produit">Renseignement sur une référence catalogue</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#092C49] mb-1.5">
                      Message ou références souhaitées *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Précisez votre projet, les références souhaitées (ex: V60-60 CM, WC-001) et vos contraintes de dimensions..."
                      className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#E2DFD7] focus:border-[#08A6C1] focus:ring-1 focus:ring-[#08A6C1] focus:bg-white text-xs sm:text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#092C49] hover:bg-[#061D31] text-white text-xs font-semibold uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <Send className="w-4 h-4 text-[#08A6C1]" />
                    <span>Transmettre ma demande de devis</span>
                  </button>

                  <p className="text-[11px] text-center text-[#627180] pt-2">
                    Vos données sont strictement confidentielles et ne seront jamais partagées.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
