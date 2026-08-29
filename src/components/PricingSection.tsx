import React from 'react';
import { Currency, PricingPlan } from '../types';
import { PRICING_PLANS } from '../data/portfolioData';
import { CheckCircle2, ArrowRight, Building2, ShieldCheck, Sparkles } from 'lucide-react';

interface PricingSectionProps {
  currency: Currency;
  onSelectPlan: (plan: PricingPlan) => void;
  onOpenPaymentModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  currency,
  onSelectPlan,
  onOpenPaymentModal
}) => {
  const formatPrice = (usd: number, ngn: number, isCustom?: boolean) => {
    if (isCustom) return 'Custom';
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
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Predictable Packages. Zero Surprises.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Clear fixed-price milestones with 100% full source code ownership, free SSL, and post-launch technical support included.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              id={`pricing-card-${plan.id}`}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                plan.featured
                  ? 'bg-gradient-to-b from-blue-950/60 via-slate-900 to-slate-950 border-blue-500/60 shadow-2xl shadow-blue-500/15 lg:-translate-y-2'
                  : 'bg-white/80 dark:bg-slate-900/70 border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl'
              } backdrop-blur-xl`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {plan.tagline}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 dark:text-white">
                      {formatPrice(plan.priceUsd, plan.priceNgn, plan.isCustom)}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {plan.isCustom ? 'quote' : '/ project'}
                    </span>
                  </div>
                  <div className="text-[11px] text-emerald-500 dark:text-emerald-400 font-mono mt-1 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{plan.supportDuration}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Included Features:
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 space-y-2.5">
                <button
                  id={`choose-plan-btn-${plan.id}`}
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all ${
                    plan.featured
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100'
                  }`}
                >
                  <span>Choose {plan.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  id={`pay-bank-transfer-btn-${plan.id}`}
                  onClick={onOpenPaymentModal}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-[11px] font-semibold border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
                >
                  <Building2 className="w-3 h-3" />
                  <span>Pay by Bank Transfer (WEMA Bank)</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-xs text-slate-500 dark:text-slate-400">
          Need a specific feature or flexible payment milestone?{' '}
          <button 
            onClick={onOpenPaymentModal} 
            className="text-blue-500 underline font-semibold hover:text-blue-400"
          >
            View bank transfer details &amp; international wire options
          </button>
        </div>

      </div>
    </section>
  );
};
