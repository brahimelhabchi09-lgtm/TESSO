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
  ArrowUpRight 
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
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      {/* Banner */}
      <div className="bg-[#141416] text-[#FAF8F5] pt-16 pb-12 border-b border-[#2A2D35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1F2128] border border-[#C5A880]/30 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-4">
              <Sparkles className="w-3 h-3" />
              Service Client & Showroom
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-light text-white mb-3">
              Contact & Espace Conseil
            </h1>
            <p className="text-sm text-[#A0A5B2] font-light leading-relaxed">
              Venez découvrir nos collections en showroom ou échangez directement avec nos conseillers techniques
              pour concevoir la salle de bain de vos rêves.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Showroom & Contact Informations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Showroom Details Card */}
            <div className="bg-white border border-[#E4DDD0] p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#F0EBE1]">
                <div className="w-10 h-10 bg-[#FAF8F5] border border-[#E2DBD0] flex items-center justify-center text-[#AD926B]">
                  <Compass className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-normal text-[#141416]">Notre Showroom</h2>
                  <p className="text-xs text-[#8A8E99]">{siteConfig.contact.address.city}, Maroc</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#5F636E]">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#AD926B] shrink-0 mt-1" />
                  <div>
                    <span className="block font-semibold text-[#141416] uppercase text-[11px] mb-0.5">Adresse</span>
                    <span>{siteConfig.contact.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#AD926B] shrink-0 mt-1" />
                  <div>
                    <span className="block font-semibold text-[#141416] uppercase text-[11px] mb-0.5">Téléphone direct</span>
                    <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#141416] transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-[#AD926B] shrink-0 mt-1" />
                  <div>
                    <span className="block font-semibold text-[#141416] uppercase text-[11px] mb-0.5">Courriel</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#141416] transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2 border-t border-[#F0EBE1]">
                  <Clock className="w-4 h-4 text-[#AD926B] shrink-0 mt-1" />
                  <div className="space-y-1">
                    <span className="block font-semibold text-[#141416] uppercase text-[11px] mb-0.5">Heures d'ouverture</span>
                    <p className="text-xs">{siteConfig.contact.openingHours.weekdays}</p>
                    <p className="text-xs">{siteConfig.contact.openingHours.saturday}</p>
                    <p className="text-xs text-[#AD926B] font-medium">{siteConfig.contact.openingHours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp direct CTA */}
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Bonjour, je souhaite échanger directement avec un conseiller.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#141416] hover:bg-[#252831] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  <span>Discussion instantanée sur WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
                </a>
              </div>
            </div>

            {/* Private appointment banner */}
            <div className="bg-[#FAF8F5] border border-[#DDD7CC] p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#141416] mb-1">
                Accueil Privilège pour Architectes & Décorateurs
              </h3>
              <p className="text-xs text-[#71757E] leading-relaxed">
                Profitez de créneaux exclusifs hors affluence pour étudier vos plans, manipuler les échantillons et établir vos métrés en toute tranquillité.
              </p>
            </div>
          </div>

          {/* RIGHT: Contact / Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E4DDD0] p-6 sm:p-10 shadow-sm">
              <h2 className="font-serif text-2xl font-normal text-[#141416] mb-2">
                Formulaire de Demande & Devis
              </h2>
              <p className="text-xs sm:text-sm text-[#71757E] mb-8">
                Remplissez les informations ci-dessous. Un conseiller TESSO vous recontactera sous 24 heures ouvrées.
              </p>

              {submitted ? (
                <div className="p-8 bg-[#FAF8F5] border border-[#C5A880]/50 text-center space-y-4">
                  <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center text-emerald-600 shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#141416]">Demande transmise avec succès</h3>
                  <p className="text-xs sm:text-sm text-[#71757E] max-w-md mx-auto">
                    Merci <strong>{formData.name || 'cher client'}</strong>. Votre demande a bien été enregistrée par notre équipe commerciale.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'Demande de devis', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 bg-[#141416] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#141416] mb-1.5">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex : M. Mehdi Alami"
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD7CC] focus:border-[#AD926B] focus:bg-white text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#141416] mb-1.5">
                        Téléphone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ex : +212 6 00 00 00 00"
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD7CC] focus:border-[#AD926B] focus:bg-white text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#141416] mb-1.5">
                        Adresse e-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Ex : mehdi@exemple.ma"
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD7CC] focus:border-[#AD926B] focus:bg-white text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#141416] mb-1.5">
                        Objet de la demande
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD7CC] focus:border-[#AD926B] focus:bg-white text-xs sm:text-sm outline-none transition-colors"
                      >
                        <option value="Demande de devis">Demande de devis chiffré</option>
                        <option value="Rendez-vous showroom">Prise de rendez-vous en showroom</option>
                        <option value="Projet architecte">Partenariat / Projet d'architecture</option>
                        <option value="Disponibilité produit">Renseignement sur une référence</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#141416] mb-1.5">
                      Message ou références souhaitées *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Précisez votre projet, les références souhaitées (ex: 2043GR-40, WC-001) et vos contraintes de calendrier..."
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD7CC] focus:border-[#AD926B] focus:bg-white text-xs sm:text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#141416] hover:bg-[#252831] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <Send className="w-4 h-4 text-[#C5A880]" />
                    <span>Transmettre ma demande de devis</span>
                  </button>

                  <p className="text-[11px] text-center text-[#9A9EA7] pt-2">
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
