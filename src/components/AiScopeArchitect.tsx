import React, { useState } from 'react';
import { Currency, AiArchitectureResult } from '../types';
import { 
  Sparkles, 
  Send, 
  RefreshCw, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Coins, 
  Workflow, 
  ArrowRight, 
  FileCode, 
  AlertCircle, 
  Cpu
} from 'lucide-react';

interface AiScopeArchitectProps {
  currency: Currency;
  onApplyToBooking: (scopeData: {
    details: string;
    services: string[];
    budget: string;
    timeline: string;
  }) => void;
}

export const AiScopeArchitect: React.FC<AiScopeArchitectProps> = ({
  currency,
  onApplyToBooking
}) => {
  const [promptInput, setPromptInput] = useState('');
  const [selectedServiceType, setSelectedServiceType] = useState('Web Application');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiArchitectureResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const samplePrompts = [
    {
      title: 'Luxury E-Commerce Platform',
      text: 'A high-end fashion e-commerce storefront with Stripe payments, variant selectors, multi-currency checkout, and automated WhatsApp shipping updates.'
    },
    {
      title: 'Auto Dealership & Inventory System',
      text: 'A modern vehicle showroom with dynamic multi-filter inventory, financing loan calculator, test-drive calendar booking, and dealer admin dashboard.'
    },
    {
      title: 'SaaS Client Portal & Invoicing',
      text: 'A subscription-based SaaS dashboard with role-based permissions, automated PDF invoice generation, Stripe billing, and team analytics.'
    },
    {
      title: 'Restaurant Online Ordering App',
      text: 'A restaurant website with visual food menu, table reservation system, live kitchen order tickets, and customer loyalty rewards.'
    }
  ];

  const handleAnalyzeScope = async (customPrompt?: string) => {
    const textToSend = customPrompt || promptInput;
    if (!textToSend.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/gemini/analyze-scope', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: textToSend,
          services: [selectedServiceType],
          currency: currency
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate architectural blueprint.');
      }

      const data: AiArchitectureResult = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error('Scope generation error:', err);
      setError(err?.message || 'Failed to generate blueprint. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleApplyToBookingForm = () => {
    if (!result) return;
    onApplyToBooking({
      details: `${promptInput || 'Generated Project Architecture'}\n\nKey Scope: ${result.summary}\n\nRecommended Stack: ${result.recommendedStack.map(s => s.name).join(', ')}`,
      services: [selectedServiceType],
      budget: result.estimatedBudgetRange,
      timeline: result.estimatedTimeline
    });

    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="ai-architect" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AI Project Architect &amp; Scope Generator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Describe Your App Idea. Get an Instant Blueprint.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Powered by Google Gemini 3.7 Flash — get an instant breakdown of your recommended tech stack, milestone roadmap, automation strategy, and estimated timeline.
          </p>
        </div>

        {/* Interactive Scope Input Box */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl backdrop-blur-xl mb-12">
          
          {/* Sample Template Pills */}
          <div className="mb-4">
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Quick Templates (Click to test):
            </div>
            <div className="flex flex-wrap gap-2">
              {samplePrompts.map((sample, idx) => (
                <button
                  key={idx}
                  id={`sample-prompt-btn-${idx}`}
                  onClick={() => {
                    setPromptInput(sample.text);
                    handleAnalyzeScope(sample.text);
                  }}
                  className="text-xs px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:border-purple-500/50 hover:text-purple-500 transition-colors text-left"
                >
                  {sample.title}
                </button>
              ))}
            </div>
          </div>

          {/* Prompt Textarea */}
          <div className="relative mb-4">
            <textarea
              id="ai-prompt-input"
              rows={3}
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              placeholder="e.g. I want to build an online car dealership website with 360-degree car images, monthly loan calculator, WhatsApp test-drive booking, and Stripe deposit checkout..."
              className="w-full p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40"
            />
          </div>

          {/* Action Row: Service Category & Generate Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">Primary Category:</span>
              <select
                id="ai-service-category"
                value={selectedServiceType}
                onChange={(e) => setSelectedServiceType(e.target.value)}
                className="text-xs font-bold px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <option value="Web Application">Custom Web Application / SaaS</option>
                <option value="E-Commerce Website">E-Commerce Storefront</option>
                <option value="Business Website">Business Website</option>
                <option value="Full-Stack Development">Full-Stack Development</option>
                <option value="AI & Automation">AI &amp; Workflow Automation</option>
              </select>
            </div>

            <button
              id="generate-blueprint-btn"
              onClick={() => handleAnalyzeScope()}
              disabled={loading || !promptInput.trim()}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white shadow-lg transition-all ${
                loading || !promptInput.trim()
                  ? 'bg-slate-700 opacity-60 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-purple-600/30'
              }`}
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-purple-200" />
                  <span>Gemini AI Analyzing Architecture...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Generate Architecture Blueprint</span>
                </>
              )}
            </button>

          </div>

          {error && (
            <div className="mt-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

        </div>

        {/* Blueprint Output Display */}
        {result && (
          <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 bg-slate-950 border border-purple-500/40 shadow-2xl space-y-8 animate-fadeIn">
            
            {/* Header / Summary */}
            <div className="border-b border-slate-800 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-bold">
                  <Cpu className="w-3.5 h-3.5 text-amber-300" />
                  <span>Architectural Specification</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <strong>Timeline:</strong> {result.estimatedTimeline}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Coins className="w-3.5 h-3.5 text-emerald-400" />
                    <strong>Budget Range:</strong> {result.estimatedBudgetRange}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Executive Summary</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{result.summary}</p>
            </div>

            {/* Recommended Stack Grid */}
            <div>
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                <FileCode className="w-4 h-4 text-blue-400" />
                <span>Recommended Engineering Stack</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {result.recommendedStack.map((tech, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[10px] font-mono font-semibold text-purple-400 uppercase">
                      {tech.category}
                    </div>
                    <div className="text-xs font-bold text-white mt-0.5">
                      {tech.name}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {tech.reason}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestones & Deliverables Roadmap */}
            <div>
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Development Milestone Roadmap</span>
              </h4>
              <div className="space-y-2.5">
                {result.suggestedMilestones.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span>{m.phase}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 ml-3.5 mt-0.5">
                        {m.deliverable}
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-cyan-400 self-start sm:self-center">
                      {m.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Automations */}
            <div>
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Workflow className="w-4 h-4 text-amber-400" />
                <span>Suggested Workflow Automations</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {result.automatedWorkflows.map((wf, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>{wf.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {wf.description}
                    </p>
                    <span className="inline-block text-[10px] font-mono text-purple-300 mt-2 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                      Tools: {wf.tools}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 1-Click Apply to Booking Form CTA */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Ready to turn this specification into reality? Apply this blueprint directly to the project form.
              </div>

              <button
                id="apply-scope-to-booking-btn"
                onClick={handleApplyToBookingForm}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-600/30 transition-all"
              >
                <span>Apply Blueprint to Booking Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
