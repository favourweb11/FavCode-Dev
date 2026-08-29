import React from 'react';
import { Currency, ServiceItem } from '../types';
import { SERVICES_LIST, ASSET_IMAGES } from '../data/portfolioData';
import { 
  Globe, 
  LayoutGrid, 
  ShoppingCart, 
  Cpu, 
  PenTool, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  Layers
} from 'lucide-react';

interface ServicesSectionProps {
  currency: Currency;
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currency,
  onSelectServiceForBooking
}) => {
  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-6 h-6" />,
    LayoutGrid: <LayoutGrid className="w-6 h-6" />,
    ShoppingCart: <ShoppingCart className="w-6 h-6" />,
    Cpu: <Cpu className="w-6 h-6" />,
    PenTool: <PenTool className="w-6 h-6" />
  };

  const formatPrice = (usd: number, ngn: number) => {
    switch (currency) {
      case 'NGN':
        return `₦${ngn.toLocaleString()}`;
      case 'EUR':
        return `€${Math.round(usd * 0.92).toLocaleString()}`;
      case 'GBP':
        return `£${Math.round(usd * 0.78).toLocaleString()}`;
      case 'USD':
      default:
        return `$${usd.toLocaleString()}`;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-extrabold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Digital Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tailored Engineering &amp; Modern Web Products
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            From lightning-fast business websites to high-concurrency custom web applications and intelligent AI workflow automations.
          </p>
        </div>

        {/* Featured Banner Visual Card */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 relative shadow-2xl group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-5 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Zero-Compromise Engineering</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Modern Full-Stack Architecture Built For Speed &amp; Conversions
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Every project is crafted with React 19, TypeScript, and cloud-native backends to guarantee sub-second load times, 100% mobile responsiveness, clean modular code, and long-term scalability.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  id="services-banner-book-btn"
                  onClick={() => onSelectServiceForBooking('Full-Stack Development')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all"
                >
                  <span>Book Custom Build</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Includes 100% Source Code &amp; Domain Setup</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[260px] overflow-hidden">
              <img 
                src={ASSET_IMAGES.servicesBanner} 
                alt="FavCode Dev Modern Full-Stack Web Development Architecture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-l from-transparent via-slate-950/40 to-slate-950" />
            </div>

          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_LIST.map((service) => {
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
                  service.featured
                    ? 'bg-gradient-to-b from-blue-950/40 to-slate-900/90 border-blue-500/40 shadow-xl shadow-blue-500/10'
                    : 'bg-white/80 dark:bg-slate-900/70 border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-md hover:shadow-xl'
                } backdrop-blur-xl group`}
              >
                
                {service.featured && (
                  <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                    Featured
                  </span>
                )}

                <div className="space-y-4">
                  
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {iconMap[service.iconName] || <Globe className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Deliverables:
                    </div>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card Footer: Turnaround, Price & Action */}
                <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      <Clock className="w-3 h-3 text-blue-400" />
                      <span>{service.turnaround}</span>
                    </div>
                    <div className="text-base font-extrabold text-slate-900 dark:text-white font-mono mt-0.5">
                      From {formatPrice(service.startingPriceUsd, service.startingPriceNgn)}
                    </div>
                  </div>

                  <button
                    id={`service-book-btn-${service.id}`}
                    onClick={() => onSelectServiceForBooking(service.title)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
