import React from 'react';
import { TECH_STACK } from '../data/portfolioData';
import { 
  FileCode2, 
  Atom, 
  Server, 
  Layers, 
  Palette, 
  Database, 
  HardDrive, 
  Sparkles, 
  CreditCard, 
  Box, 
  GitBranch, 
  Network,
  Cpu
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    FileCode2: <FileCode2 className="w-5 h-5" />,
    Atom: <Atom className="w-5 h-5" />,
    Server: <Server className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />,
    Palette: <Palette className="w-5 h-5" />,
    Database: <Database className="w-5 h-5" />,
    HardDrive: <HardDrive className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />,
    CreditCard: <CreditCard className="w-5 h-5" />,
    Box: <Box className="w-5 h-5" />,
    GitBranch: <GitBranch className="w-5 h-5" />,
    Network: <Network className="w-5 h-5" />
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-extrabold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technologies &amp; Frameworks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Modern Tech Stack for Maximum Scalability
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            We use industry-standard languages, modern reactive frameworks, and reliable cloud databases to deliver enterprise-grade software.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {TECH_STACK.map((tech, idx) => (
            <div
              key={idx}
              id={`tech-item-${idx}`}
              className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 flex flex-col items-center text-center hover:border-blue-500/50 hover:shadow-lg transition-all group"
            >
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${tech.color}15`, color: tech.color }}
              >
                {iconMap[tech.icon] || <Cpu className="w-5 h-5" />}
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                {tech.name}
              </div>
              <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                {tech.category}
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full mt-2.5 overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${tech.proficiency}%`, backgroundColor: tech.color }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
