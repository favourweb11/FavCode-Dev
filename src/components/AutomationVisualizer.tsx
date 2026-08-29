import React, { useState } from 'react';
import { AUTOMATION_WORKFLOWS, ASSET_IMAGES } from '../data/portfolioData';
import { 
  Bot, 
  Play, 
  CheckCircle2, 
  Terminal, 
  GitPullRequest, 
  MessageSquareShare, 
  Receipt, 
  Sparkles, 
  Workflow, 
  ArrowRight,
  RefreshCw,
  Cpu
} from 'lucide-react';

export const AutomationVisualizer: React.FC = () => {
  const [activeWorkflow, setActiveWorkflow] = useState(AUTOMATION_WORKFLOWS[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([
    'System ready. Select a workflow or click "Run Simulation" to execute automated pipeline.'
  ]);

  const iconMap: Record<string, React.ReactNode> = {
    MessageSquareShare: <MessageSquareShare className="w-5 h-5" />,
    GitPullRequest: <GitPullRequest className="w-5 h-5" />,
    Receipt: <Receipt className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />
  };

  const handleRunSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationLogs([`[0.00s] Initializing ${activeWorkflow.title}...`]);

    setTimeout(() => {
      setSimulationLogs(prev => [...prev, `[0.45s] Event Triggered: "${activeWorkflow.trigger}"`]);
    }, 450);

    setTimeout(() => {
      setSimulationLogs(prev => [...prev, `[1.10s] Executing Worker Action: "${activeWorkflow.action}"`]);
    }, 1100);

    setTimeout(() => {
      setSimulationLogs(prev => [...prev, `[1.85s] Synchronizing webhooks across: ${activeWorkflow.tech.join(', ')}`]);
    }, 1850);

    setTimeout(() => {
      setSimulationLogs(prev => [
        ...prev, 
        `[2.40s] SUCCESS: "${activeWorkflow.outcome}"`,
        `[2.45s] Pipeline execution completed with 0 errors.`
      ]);
      setIsSimulating(false);
    }, 2450);
  };

  return (
    <section id="automation" className="py-20 md:py-28 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 text-xs font-extrabold uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" />
            <span>Workflow Automation Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Stop Repeating Work. Automate Everything.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            I connect your website directly to automated pipelines: WhatsApp customer alerts, AI inquiry parsing, zero-downtime deployments, and automated billing.
          </p>
        </div>

        {/* Visual Automation Banner Header */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 relative shadow-2xl group">
          <div className="relative h-48 sm:h-64 w-full overflow-hidden">
            <img 
              src={ASSET_IMAGES.automationBanner} 
              alt="FavCode Dev Automated Webhooks and Cloud Deployment Pipeline"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                  Live Cloud Pipeline Simulator
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Real-Time Event Triggers &amp; Microservice Automations
                </h3>
              </div>

              <button
                id="run-simulation-btn"
                onClick={handleRunSimulation}
                disabled={isSimulating}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-lg transition-all ${
                  isSimulating 
                    ? 'bg-slate-700 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-cyan-600/30'
                }`}
              >
                {isSimulating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-cyan-300" />
                    <span>Executing Pipeline...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                    <span>Run Live Simulation</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Automation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Workflow Selection List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Select Automated Pipeline:
            </div>
            {AUTOMATION_WORKFLOWS.map((wf) => {
              const isSelected = activeWorkflow.id === wf.id;
              return (
                <div
                  key={wf.id}
                  id={`workflow-selector-${wf.id}`}
                  onClick={() => {
                    setActiveWorkflow(wf);
                    setSimulationLogs([`Workflow selected: ${wf.title}. Click "Run Live Simulation" to test.`]);
                  }}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                      : 'bg-white/70 dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {iconMap[wf.icon] || <Bot className="w-4 h-4" />}
                      </div>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {wf.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {wf.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {wf.trigger} → {wf.outcome}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Active Workflow Details & Live Console */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step-by-Step Flow Visualizer */}
            <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-md">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>Pipeline Architecture:</span>
                <span className="text-cyan-500 font-mono">{activeWorkflow.badge}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
                
                {/* Step 1: Trigger */}
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                  <div className="text-[10px] font-bold text-amber-500 uppercase tracking-wider mb-1">
                    1. Inbound Event
                  </div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    {activeWorkflow.trigger}
                  </div>
                  <div className="mt-3 text-[10px] text-slate-400 font-mono">
                    Webhook Listener
                  </div>
                </div>

                {/* Step 2: Action */}
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                  <div className="text-[10px] font-bold text-cyan-500 uppercase tracking-wider mb-1">
                    2. AI / Server Logic
                  </div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    {activeWorkflow.action}
                  </div>
                  <div className="mt-3 text-[10px] text-slate-400 font-mono">
                    Async Cloud Function
                  </div>
                </div>

                {/* Step 3: Outcome */}
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                  <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider mb-1">
                    3. Automated Outcome
                  </div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    {activeWorkflow.outcome}
                  </div>
                  <div className="mt-3 text-[10px] text-slate-400 font-mono">
                    Client & Admin Alert
                  </div>
                </div>

              </div>

              {/* Technologies Tag Row */}
              <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-500">Tech Stack:</span>
                {activeWorkflow.tech.map((t, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Terminal Log Output */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs shadow-xl">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>automation-stream.log</span>
                </div>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live Listener
                </span>
              </div>

              <div className="space-y-1.5 min-h-[100px] max-h-[140px] overflow-y-auto text-slate-300">
                {simulationLogs.map((log, idx) => (
                  <div 
                    key={idx} 
                    className={`leading-relaxed ${
                      log.includes('SUCCESS') 
                        ? 'text-emerald-400 font-bold' 
                        : log.includes('Executing') 
                          ? 'text-cyan-300' 
                          : 'text-slate-400'
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
