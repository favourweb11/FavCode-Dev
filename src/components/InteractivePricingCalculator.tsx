import React, { useState } from 'react';
import { Currency } from '../types';
import { 
  Calculator, 
  Check, 
  Plus, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle,
  Zap
} from 'lucide-react';

interface InteractivePricingCalculatorProps {
  currency: Currency;
  onApplyEstimatedPlan: (data: {
    packageName: string;
    features: string[];
    totalPrice: string;
    timeline: string;
  }) => void;
}

export const InteractivePricingCalculator: React.FC<InteractivePricingCalculatorProps> = ({
  currency,
  onApplyEstimatedPlan
}) => {
  const baseTiers = [
    {
      id: 'landing',
      name: 'Single Page / Landing',
      days: 5,
      priceUsd: 250,
      priceNgn: 200000,
      desc: 'High-converting single page with lead capture form and responsive design.'
    },
    {
      id: 'business',
      name: 'Standard Business Site',
      days: 10,
      priceUsd: 450,
      priceNgn: 350000,
      desc: 'Up to 5 pages, contact forms, SEO tags, blog structure, and mobile layout.'
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce Storefront',
      days: 18,
      priceUsd: 950,
      priceNgn: 750000,
      desc: 'Product catalog, shopping cart, checkout, payments, and customer accounts.'
    },
    {
      id: 'saas',
      name: 'Custom Web App / SaaS',
      days: 28,
      priceUsd: 1400,
      priceNgn: 1100000,
      desc: 'Bespoke dashboards, cloud database, complex logic, and API integrations.'
    }
  ];

  const featureAddons = [
    { id: 'auth', name: 'User Authentication & Role Permissions', days: 2, priceUsd: 150, priceNgn: 120000 },
    { id: 'payments', name: 'Stripe & Paystack Payment Integration', days: 3, priceUsd: 200, priceNgn: 160000 },
    { id: 'admin', name: 'Admin CMS Management Dashboard', days: 4, priceUsd: 250, priceNgn: 200000 },
    { id: 'ai', name: 'Gemini AI Smart Features & Assistant', days: 4, priceUsd: 300, priceNgn: 240000 },
    { id: 'whatsapp', name: 'WhatsApp & Webhook Automated Alerts', days: 2, priceUsd: 120, priceNgn: 95000 },
    { id: 'multilingual', name: 'Multilingual Multi-Currency Engine', days: 2, priceUsd: 150, priceNgn: 120000 },
    { id: 'cicd', name: 'Automated CI/CD Deployment Pipeline', days: 2, priceUsd: 180, priceNgn: 140000 },
    { id: 'fasttrack', name: 'Priority Express Delivery (Fast-Track)', days: -4, priceUsd: 250, priceNgn: 200000 }
  ];

  const [selectedBase, setSelectedBase] = useState(baseTiers[1]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['whatsapp', 'admin']);

  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId) 
        : [...prev, addonId]
    );
  };

  const totalUsd = selectedBase.priceUsd + selectedAddons.reduce((acc, id) => {
    const item = featureAddons.find(a => a.id === id);
    return acc + (item ? item.priceUsd : 0);
  }, 0);

  const totalNgn = selectedBase.priceNgn + selectedAddons.reduce((acc, id) => {
    const item = featureAddons.find(a => a.id === id);
    return acc + (item ? item.priceNgn : 0);
  }, 0);

  const totalDays = Math.max(
    4,
    selectedBase.days + selectedAddons.reduce((acc, id) => {
      const item = featureAddons.find(a => a.id === id);
      return acc + (item ? item.days : 0);
    }, 0)
  );

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

  const handleApplyEstimate = () => {
    const activeAddonNames = featureAddons
      .filter(a => selectedAddons.includes(a.id))
      .map(a => a.name);

    onApplyEstimatedPlan({
      packageName: selectedBase.name,
      features: activeAddonNames,
      totalPrice: formatPrice(totalUsd, totalNgn),
      timeline: `${totalDays} Business Days`
    });

    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="py-20 md:py-28 relative bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Real-Time Cost Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Calculate Your Exact Project Investment
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            No hidden fees. Select your baseline requirements and automated features to generate an instant upfront estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 7 cols: Base Type & Feature Addons */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Base Platform */}
            <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-md">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Step 1: Choose Base Architecture
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {baseTiers.map((tier) => {
                  const isSelected = selectedBase.id === tier.id;
                  return (
                    <button
                      key={tier.id}
                      id={`calc-tier-${tier.id}`}
                      onClick={() => setSelectedBase(tier)}
                      className={`text-left p-4 rounded-2xl border transition-all ${
                        isSelected
                          ? 'bg-blue-600/10 border-blue-500 text-slate-900 dark:text-white shadow-md'
                          : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold">{tier.name}</span>
                        <span className="text-xs font-mono font-bold text-blue-500">
                          {formatPrice(tier.priceUsd, tier.priceNgn)}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {tier.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-On Features */}
            <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-md">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Step 2: Add-On Integrations &amp; Automations
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featureAddons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      id={`calc-addon-${addon.id}`}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-emerald-500/10 border-emerald-500 text-slate-900 dark:text-white'
                          : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                          isChecked ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-400'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-semibold">{addon.name}</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-500 ml-2 whitespace-nowrap">
                        +{formatPrice(addon.priceUsd, addon.priceNgn)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right 5 cols: Live Calculation Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 text-white shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="text-xs font-mono font-bold uppercase text-emerald-400">
                  Estimated Investment
                </div>
                <div className="text-xs text-slate-400">
                  {selectedAddons.length + 1} Scope Items
                </div>
              </div>

              {/* Big Price Display */}
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
                  {formatPrice(totalUsd, totalNgn)}
                </div>
                <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Estimated Delivery Time: ~<strong>{totalDays} Business Days</strong></span>
                </div>
              </div>

              {/* Selected Breakdown Items */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Base: {selectedBase.name}</span>
                  <span className="font-mono text-slate-200">{formatPrice(selectedBase.priceUsd, selectedBase.priceNgn)}</span>
                </div>

                {selectedAddons.map(id => {
                  const item = featureAddons.find(a => a.id === id);
                  if (!item) return null;
                  return (
                    <div key={id} className="flex items-center justify-between text-slate-400">
                      <span>+ {item.name}</span>
                      <span className="font-mono text-slate-300">+{formatPrice(item.priceUsd, item.priceNgn)}</span>
                    </div>
                  );
                })}
              </div>

              {/* Inclusions Guarantee */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Guaranteed Inclusions</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  • 100% Full Source Code Rights &amp; GitHub repo<br />
                  • Post-Launch Technical Support Window Included<br />
                  • Free SSL Certificate &amp; Domain Connection
                </div>
              </div>

              {/* Action Button */}
              <button
                id="apply-calculator-estimate-btn"
                onClick={handleApplyEstimate}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-600/30 transition-all"
              >
                <span>Book With This Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
