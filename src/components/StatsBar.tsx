import React from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { Award, Clock, CheckCircle, Flame, Shield } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: CheckCircle,
      value: '45+',
      label: 'Projects Delivered',
      sublabel: 'Websites, E-Com & SaaS',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Award,
      value: '99%',
      label: 'Client Satisfaction',
      sublabel: 'Verified 5-Star Reviews',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      value: '< 2h',
      label: 'Avg Response Time',
      sublabel: 'Direct WhatsApp & Email',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Flame,
      value: '5+ Yrs',
      label: 'Full-Stack Experience',
      sublabel: 'React, Node & Automations',
      color: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section id="stats-section" className="py-12 border-y border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                id={`stat-card-${idx}`}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-blue-500" />
                </div>
                <div className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent tracking-tight font-mono`}>
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
