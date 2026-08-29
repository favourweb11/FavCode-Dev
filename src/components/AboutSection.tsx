import React from 'react';
import { DEVELOPER_INFO, ASSET_IMAGES } from '../data/portfolioData';
import { 
  User, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Code2, 
  Sparkles,
  MapPin
} from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left 5 Cols: Developer Portrait Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-950 shadow-2xl group">
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={ASSET_IMAGES.developerProfile}
                  alt={DEVELOPER_INFO.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Overlay Details */}
              <div className="p-6 space-y-2 border-t border-slate-800 bg-slate-950">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {DEVELOPER_INFO.name}
                    </h3>
                    <p className="text-xs text-blue-400 font-mono">
                      {DEVELOPER_INFO.brandName} • Founder &amp; Lead Engineer
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Code2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{DEVELOPER_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-4 -right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="text-2xl font-extrabold font-mono">5+</div>
              <div className="text-[11px] font-bold leading-tight uppercase">
                Years Building<br />Web Solutions
              </div>
            </div>
          </div>

          {/* Right 7 Cols: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-extrabold uppercase tracking-wider">
              <User className="w-3.5 h-3.5" />
              <span>Behind FavCode Dev</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              I Don't Just Write Code. <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                I Engineer Profitable Digital Products.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Hello! I'm Favour, a full-stack web developer and workflow automation architect. Over the past 5 years, I've designed, coded, and deployed web applications and e-commerce stores for clients across Nigeria, the UK, the US, and Europe.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              I believe modern web development shouldn't be complicated or slow. When you work with me, you communicate directly with the engineer writing your code — no account managers, no generic WordPress templates, and no surprise costs.
            </p>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Direct 1-on-1 engineer collaboration',
                'Modular, strictly typed TypeScript code',
                'Mobile-first responsive UX execution',
                'Automated webhook & WhatsApp notifications',
                '100% full source code ownership',
                'Transparent milestone payments'
              ].map((value, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{value}</span>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
              <button
                id="about-start-project-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="about-whatsapp-link"
                href={DEVELOPER_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
