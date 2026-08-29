import React, { useState, useEffect } from 'react';
import { Currency } from '../types';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { 
  Code2, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  ArrowRight, 
  MessageSquare, 
  Building2, 
  Sparkles,
  CheckCircle2,
  DollarSign
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  onOpenPaymentModal: () => void;
  onOpenAiArchitect: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  currency,
  setCurrency,
  onOpenPaymentModal,
  onOpenAiArchitect,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'automation', 'ai-architect', 'projects', 'pricing', 'calculator', 'skills', 'about', 'faq', 'booking'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'automation', label: 'Automations' },
    { id: 'ai-architect', label: 'AI Architect' },
    { id: 'projects', label: 'Projects' },
    { id: 'calculator', label: 'Cost Estimator' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'about', label: 'About' },
    { id: 'booking', label: 'Book Project' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? darkMode 
            ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-slate-950/40' 
            : 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-lg shadow-slate-200/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button 
            id="nav-logo-btn"
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-lg tracking-tight flex items-center gap-1">
                <span className={darkMode ? 'text-white' : 'text-slate-900'}>FavCode</span>
                <span className="text-blue-500 font-extrabold">Dev</span>
              </div>
              <div className="text-[10px] tracking-wider font-semibold uppercase flex items-center gap-1 text-emerald-500 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                <span>Available for Hire</span>
              </div>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 p-1.5 rounded-full bg-slate-900/10 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                      : darkMode
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Currency Switcher */}
            <div className="relative">
              <select
                id="currency-selector"
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                aria-label="Select Currency"
                className={`text-xs font-bold px-2.5 py-1.5 rounded-lg border appearance-none pr-6 cursor-pointer transition-colors ${
                  darkMode 
                    ? 'bg-slate-900 border-slate-700 text-slate-200 hover:border-slate-600' 
                    : 'bg-slate-100 border-slate-300 text-slate-800 hover:border-slate-400'
                }`}
              >
                <option value="USD">USD ($)</option>
                <option value="NGN">NGN (₦)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
              </select>
              <DollarSign className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
            </div>

            {/* Dark / Light Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle Theme"
              className={`p-2 rounded-xl border transition-all ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800 hover:border-slate-700'
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 hover:border-slate-400'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Bank Transfer Details Trigger */}
            <button
              id="nav-bank-transfer-btn"
              onClick={onOpenPaymentModal}
              title="View Bank Transfer Account Details"
              className={`hidden sm:flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border transition-all ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50'
                  : 'bg-white border-slate-300 text-slate-700 hover:text-blue-600 hover:border-blue-300'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-blue-500" />
              <span>WEMA Bank</span>
            </button>

            {/* Primary CTA */}
            <button
              id="nav-book-cta-btn"
              onClick={() => scrollTo('booking')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <span>Book Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden p-2 rounded-xl border ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-white'
                  : 'bg-slate-100 border-slate-300 text-slate-800'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className={`xl:hidden border-b transition-all px-4 pt-3 pb-6 ${
          darkMode 
            ? 'bg-slate-950/95 border-slate-800 text-white backdrop-blur-2xl' 
            : 'bg-white/95 border-slate-200 text-slate-900 backdrop-blur-2xl'
        }`}>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-link-${link.id}`}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'bg-blue-600 text-white'
                    : darkMode
                      ? 'text-slate-300 hover:bg-slate-900'
                      : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/40 flex flex-col gap-2">
            <button
              id="mobile-ai-architect-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiArchitect();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Launch AI Project Architect</span>
            </button>

            <button
              id="mobile-payment-modal-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPaymentModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold border border-slate-700 hover:bg-slate-800"
            >
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>Bank Payment Details (WEMA Bank)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
