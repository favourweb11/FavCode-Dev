import React, { useState } from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { 
  Code2, 
  Phone, 
  MessageSquare, 
  Mail, 
  Copy, 
  Check, 
  ShieldCheck, 
  Heart, 
  Building2, 
  ArrowUp,
  Github,
  Linkedin,
  Facebook
} from 'lucide-react';

interface FooterProps {
  onOpenPaymentModal: () => void;
  onOpenAiArchitect: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPaymentModal,
  onOpenAiArchitect
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col 4 */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="font-bold text-base text-slate-900 dark:text-white">
                FavCode <span className="text-blue-500">Dev</span>
              </div>
            </div>

            <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              Custom web engineering studio founded by Favour Ogunmola. Delivering high-speed business websites, full-stack web applications, e-commerce stores, and AI-driven automated pipelines.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={DEVELOPER_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-emerald-500 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={DEVELOPER_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={DEVELOPER_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-blue-500 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={DEVELOPER_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-blue-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Col 3 */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Platform Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('home')} className="hover:text-blue-500 transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-blue-500 transition-colors">
                  Services &amp; Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('automation')} className="hover:text-blue-500 transition-colors">
                  Automation Visualizer
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('ai-architect')} className="hover:text-purple-400 transition-colors flex items-center gap-1">
                  <span>AI Architecture Generator</span>
                  <span className="text-[10px] bg-purple-500/20 text-purple-400 px-1.5 py-0.2 rounded">New</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('projects')} className="hover:text-blue-500 transition-colors">
                  Featured Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('calculator')} className="hover:text-emerald-500 transition-colors">
                  Cost &amp; Feature Estimator
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricing')} className="hover:text-blue-500 transition-colors">
                  Investment Packages
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('booking')} className="hover:text-blue-500 font-bold transition-colors">
                  Book a Project
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Col 2 */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Digital Solutions
            </div>
            <ul className="space-y-2">
              <li>Business Websites</li>
              <li>Custom Web Apps</li>
              <li>E-Commerce Stores</li>
              <li>AI Integrations</li>
              <li>Webhook Automations</li>
              <li>UI/UX Design Tokens</li>
              <li>Cloud CI/CD Pipelines</li>
            </ul>
          </div>

          {/* Direct Contact Col 3 */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Direct Contact
            </div>
            <div className="space-y-2.5">
              
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                <a href={`tel:${DEVELOPER_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-blue-500 font-mono">
                  {DEVELOPER_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <a href={DEVELOPER_INFO.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 font-mono">
                  WhatsApp Direct
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                <a href={`mailto:${DEVELOPER_INFO.email}`} className="hover:text-purple-500 font-mono truncate max-w-[180px]">
                  {DEVELOPER_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 text-slate-400 hover:text-blue-500 transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              <button
                onClick={onOpenPaymentModal}
                className="inline-flex items-center gap-1.5 text-[11px] text-blue-500 dark:text-blue-400 hover:underline pt-1"
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>WEMA Bank: 0251427478</span>
              </button>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} FavCode Dev (Favour Ogunmola). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <span>Built with</span>
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
              <span>React 19 &amp; TypeScript</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-blue-500 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
