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
      <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1C1C1E]">
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
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 bg-[#141416] hover:bg-[#1E2024] text-white px-4 py-3.5 rounded-full shadow-2xl border border-[#C5A880]/40 transition-all duration-300 hover:scale-105"
            aria-label="Contacter sur WhatsApp"
          >
            {/* Pulsing indicator */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
            </span>

            <MessageSquare className="w-5 h-5 text-[#25D366] fill-[#25D366]" />

            <div className="hidden sm:flex flex-col items-start pr-1">
              <span className="text-[10px] uppercase tracking-wider text-[#C5A880] font-semibold leading-none">
                Conseiller en ligne
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
