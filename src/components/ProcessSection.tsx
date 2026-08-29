import React from 'react';
import { Search, Compass, Code2, Rocket, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Scope',
      icon: Search,
      desc: 'We analyze your business goals, target audience, technical requirements, and define clear milestone deliverables.',
      badge: 'Day 1–3'
    },
    {
      num: '02',
      title: 'UI Design & Architecture',
      icon: Compass,
      desc: 'Crafting responsive layouts, component hierarchy, database schema, and design systems before writing production code.',
      badge: 'Day 4–7'
    },
    {
      num: '03',
      title: 'Full-Stack Development',
      icon: Code2,
      desc: 'Clean code execution with React 19, TypeScript, backend APIs, payment gateways, and automated webhook pipelines.',
      badge: 'Day 8–18'
    },
    {
      num: '04',
      title: 'QA, Automation & Launch',
      icon: Rocket,
      desc: 'Rigorous testing, SEO configuration, domain SSL deployment, and handoff with comprehensive post-launch support.',
      badge: 'Day 19–21'
    }
  ];

  return (
    <section id="process" className="py-20 md:py-28 relative bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-extrabold uppercase tracking-wider">
            <Rocket className="w-3.5 h-3.5" />
            <span>Development Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Predictable Process. Seamless Delivery.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A transparent 4-stage engineering lifecycle so you always know the exact status of your build.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                id={`process-step-${idx}`}
                className="relative p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-extrabold text-blue-500/60 dark:text-blue-400/60">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400">
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-[11px] text-slate-400 font-mono flex items-center gap-1">
                  <span>Milestone Verified</span>
                  <ArrowRight className="w-3 h-3 text-blue-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
