import React from 'react';
import { ProjectCaseStudy } from '../types';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  Layers, 
  TrendingUp 
} from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onBookSimilar: (title: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onBookSimilar
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="max-w-2xl w-full rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl text-white space-y-6 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close Case Study"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-1">
            {project.category} • {project.client}
          </div>
          <h3 className="text-2xl font-bold tracking-tight">
            {project.title}
          </h3>
        </div>

        {/* Big Visual Snapshot */}
        <div className="rounded-2xl overflow-hidden border border-slate-800 aspect-video w-full relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-base font-extrabold font-mono text-emerald-400">
                {m.value}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Challenge & Solution Narrative */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <h4 className="font-bold text-white mb-1">The Challenge:</h4>
            <p className="text-slate-400">{project.challenge}</p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-950/20 border border-blue-500/20">
            <h4 className="font-bold text-blue-300 mb-1">The Solution &amp; Architecture:</h4>
            <p className="text-slate-300">{project.solution}</p>
          </div>
        </div>

        {/* Key Features List */}
        <div>
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2.5">
            Key Features Implemented:
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
          {project.tags.map((t, idx) => (
            <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono">
              {t}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onBookSimilar(project.title);
            }}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all"
          >
            <span>Start Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
