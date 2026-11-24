import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Catalogue } from './pages/Catalogue';
import { ProductDetails } from './pages/ProductDetails';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { getWhatsAppUrl } from './config/site';

// Component to scroll to top automatically on route change
const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname, search]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F5F4F0] text-[#202B35]">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/catalogue/:id" element={<ProductDetails />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating Luxury WhatsApp Inquiry Pill */}
        <div className="fixed bottom-6 right-6 z-40">
          <a
            href={getWhatsAppUrl("Bonjour AKWA WAKA, je souhaite avoir plus d'informations concernant vos produits.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 bg-[#092C49] hover:bg-[#061D31] text-white px-4 py-3.5 rounded-full shadow-2xl border border-[#08A6C1]/40 transition-all duration-300 hover:scale-105"
            aria-label="Contacter sur WhatsApp"
          >
            {/* Pulsing indicator */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
            </span>

            <MessageSquare className="w-5 h-5 text-[#25D366] fill-[#25D366]" />

            <div className="hidden sm:flex flex-col items-start pr-1">
              <span className="text-[10px] uppercase tracking-wider text-[#08A6C1] font-semibold leading-none">
                Conseiller AKWA WAKA
              </span>
              <span className="text-xs font-medium text-white leading-tight mt-0.5">
                Devis WhatsApp
              </span>
            </div>
          </a>
        </div>
      </div>
    </Router>
  );
};

export default App;
