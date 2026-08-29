import React, { useState } from 'react';
import { ASSET_IMAGES, DEVELOPER_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  MessageSquare, 
  Copy, 
  Check, 
  Terminal, 
  Flame, 
  Play
} from 'lucide-react';

interface HeroProps {
  onOpenAiArchitect: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAiArchitect, onOpenBooking }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'solution' | 'config' | 'pipeline'>('solution');

  const codeSnippets = {
    solution: `// FavCode Dev — Full-Stack Architecture
import { createDigitalProduct } from '@favcode/engine';

export async function launchClientVision() {
  return await createDigitalProduct({
    performance: 'Sub-second Edge CDN',
    responsiveness: '100% Mobile & Desktop Fluid',
    automations: ['WhatsApp Alert', 'AI Invoicing', 'CI/CD'],
    security: 'SSL + Role-Based Access Control',
    conversionRate: 'Maximized'
  });
}`,
    config: `// Project Discovery & Scalability Config
export const projectConfig = {
  stack: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL'],
  apiGateways: ['Stripe', 'Paystack', 'Gemini 3.7 AI', 'Resend'],
  milestones: ['Design Approval', 'Core APIs', 'Live Launch'],
  ownership: '100% Client Full Source Rights'
};`,
    pipeline: `# Automated Deployment Pipeline (GitHub Actions)
name: Production Edge Deployment
on: [push to main branch]
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm run test:all && npm run build
      - name: Deploy to Cloud Run Zero-Downtime
        run: gcloud run deploy --region=europe-west2`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-24 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Badge */}
        <div className="flex items-center justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wide uppercase backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>FavCode Dev • Available for Q3/Q4 Projects</span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:inline text-slate-300 font-normal">Custom Web Apps & Automations</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Build Your <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Digital Future
              </span>{' '}
              With Code & Automation
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              I help entrepreneurs, businesses, and founders turn ideas into fast, responsive, high-converting digital products. From bespoke web apps and e-commerce platforms to AI-driven workflow automations.
            </p>

            {/* Interactive Call-To-Action Cluster */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              
              <button
                id="hero-start-project-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/45 transition-all transform hover:-translate-y-0.5"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-ai-architect-btn"
                onClick={onOpenAiArchitect}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl text-sm font-bold border border-purple-500/40 bg-purple-500/10 text-purple-600 dark:text-purple-300 hover:bg-purple-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>AI Scope & Cost Generator</span>
              </button>

              <a
                id="hero-whatsapp-btn"
                href={DEVELOPER_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                <span>100% Responsive</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Sub-Second Speed</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>100% Code Ownership</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech Visual Terminal & Workspace Image */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Glass Container */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-slate-900/90 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
              
              {/* Workspace Real Image Preview Banner */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden group">
                <img 
                  src={ASSET_IMAGES.heroWorkspace} 
                  alt="FavCode Dev High-Tech Workspace and Engineering Setup"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-700/60 backdrop-blur-md text-[11px] font-mono text-cyan-400">
                  <Terminal className="w-3 h-3" />
                  <span>production.live_ready</span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">Engineering Hub</div>
                    <div className="text-[11px] text-slate-300">Modern Full-Stack & Automated Web Solutions</div>
                  </div>
                  <div className="flex items-center gap-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>99.9% Uptime</span>
                  </div>
                </div>
              </div>

              {/* Code Terminal Tabs */}
              <div className="border-t border-slate-800 bg-slate-950/90 px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <div className="ml-2 flex items-center gap-1">
                    {(['solution', 'config', 'pipeline'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition-colors ${
                          activeTab === tab 
                            ? 'bg-blue-600/30 text-blue-400 border border-blue-500/30' 
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {tab === 'solution' ? 'Solution.ts' : tab === 'config' ? 'Config.ts' : 'Deploy.yml'}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-1 rounded hover:bg-slate-800 transition-colors"
                  title="Copy code snippet"
                >
                  {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCode ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Code Box */}
              <div className="p-4 bg-slate-950/95 font-mono text-xs text-slate-300 overflow-x-auto min-h-[170px]">
                <pre className="text-slate-200 font-mono text-[11px] leading-relaxed">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Bottom Indicator */}
              <div className="px-4 py-2.5 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span>React 19 + TypeScript + Gemini AI Ready</span>
                </span>
                <span className="font-mono text-slate-500">v3.7.0</span>
              </div>

            </div>

            {/* Floating Tech Chips around container */}
            <div className="absolute -bottom-5 -left-4 bg-slate-900 border border-slate-700 text-white px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2 text-xs font-bold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Tailwind + Motion</span>
            </div>

            <div className="absolute -top-4 -right-3 bg-slate-900 border border-slate-700 text-white px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2 text-xs font-bold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>AI Automated Workflows</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
