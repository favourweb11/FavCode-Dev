import React, { useState } from 'react';
import { ProjectCaseStudy } from '../types';
import { PROJECTS_LIST } from '../data/portfolioData';
import { 
  FolderGit2, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Eye, 
  TrendingUp, 
  Sparkles 
} from 'lucide-react';

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
  onBookSimilarProject: (title: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenCaseStudy,
  onBookSimilarProject
}) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Automotive', 'E-Commerce', 'Food & Beverage'];

  const filteredProjects = PROJECTS_LIST.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Automotive') return p.category.includes('Automotive');
    if (activeFilter === 'E-Commerce') return p.category.includes('E-Commerce');
    if (activeFilter === 'Food & Beverage') return p.category.includes('Food');
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-extrabold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Proven Results &amp; Real Production Work
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Explore recent digital platforms engineered for conversion, automated client workflows, and sub-second speed.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`project-filter-${cat}`}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              
              {/* Project Visual Snapshot */}
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-[10px] font-mono text-cyan-300">
                    {project.client}
                  </div>

                  {/* View Details Quick Overlay */}
                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="absolute inset-0 bg-blue-950/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Full Case Study</span>
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono font-semibold text-blue-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    {project.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="p-2 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
                        <div className="text-sm font-extrabold font-mono text-emerald-500 dark:text-emerald-400">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 mt-4">
                <button
                  id={`view-case-study-btn-${project.id}`}
                  onClick={() => onOpenCaseStudy(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  id={`book-similar-btn-${project.id}`}
                  onClick={() => onBookSimilarProject(project.title)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-all text-slate-700 dark:text-slate-300"
                >
                  Build Similar
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
