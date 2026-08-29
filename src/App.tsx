import React, { useState, useEffect } from 'react';
import { Currency, ProjectCaseStudy, ServiceItem, PricingPlan } from './types';
import { DEVELOPER_INFO } from './data/portfolioData';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { ServicesSection } from './components/ServicesSection';
import { AutomationVisualizer } from './components/AutomationVisualizer';
import { AiScopeArchitect } from './components/AiScopeArchitect';
import { ProjectsSection } from './components/ProjectsSection';
import { InteractivePricingCalculator } from './components/InteractivePricingCalculator';
import { PricingSection } from './components/PricingSection';
import { ProcessSection } from './components/ProcessSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PaymentModal } from './components/PaymentModal';
import { CaseStudyModal } from './components/CaseStudyModal';

import { MessageSquare, Sparkles, ArrowUp } from 'lucide-react';

export function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectCaseStudy | null>(null);

  // Shared booking draft state populated by AI Architect or Pricing Calculator
  const [bookingDraft, setBookingDraft] = useState<{
    details: string;
    services: string[];
    budget: string;
    timeline: string;
  }>({
    details: '',
    services: [],
    budget: '',
    timeline: ''
  });

  // Sync dark mode class with <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handler from ServicesSection
  const handleSelectService = (service: ServiceItem) => {
    setBookingDraft({
      details: `Inquiry for ${service.title}:\n• Deliverables: ${service.deliverables.join(', ')}\n• Turnaround: ${service.turnaround}`,
      services: [service.title],
      budget: '',
      timeline: service.turnaround
    });
    scrollTo('booking');
  };

  // Handler from PricingSection
  const handleSelectPricingPlan = (plan: PricingPlan) => {
    setBookingDraft({
      details: `Selected Plan: ${plan.name} (${plan.priceUsd === 0 ? 'Custom' : `$${plan.priceUsd}`})\n• Included features:\n${plan.features.map(f => `  - ${f}`).join('\n')}`,
      services: [plan.name.includes('E-Commerce') ? 'E-Commerce Website' : plan.name.includes('Custom') ? 'Web Application' : 'Business Website'],
      budget: plan.isCustom ? 'Custom' : `$${plan.priceUsd}`,
      timeline: '2–4 Weeks'
    });
    scrollTo('booking');
  };

  // Handler from AI Architect
  const handleApplyAiScope = (scopeData: {
    details: string;
    services: string[];
    budget: string;
    timeline: string;
  }) => {
    setBookingDraft(scopeData);
  };

  // Handler from Interactive Pricing Calculator
  const handleApplyCalculatorEstimate = (data: {
    packageName: string;
    features: string[];
    totalPrice: string;
    timeline: string;
  }) => {
    setBookingDraft({
      details: `Custom Scope from Cost Calculator:\n• Base Architecture: ${data.packageName}\n• Add-On Automations: ${data.features.join(', ')}\n• Total Estimated Cost: ${data.totalPrice}\n• Target Timeline: ${data.timeline}`,
      services: [data.packageName],
      budget: data.totalPrice,
      timeline: data.timeline
    });
  };

  // Handler from Project "Build Similar"
  const handleBookSimilarProject = (projectTitle: string) => {
    setBookingDraft({
      details: `I want to build a platform similar in scope and design to "${projectTitle}".`,
      services: [projectTitle.includes('Auto') ? 'Business Website' : projectTitle.includes('Food') ? 'Web Application' : 'E-Commerce Website'],
      budget: '',
      timeline: '2–4 Weeks'
    });
    scrollTo('booking');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        currency={currency}
        setCurrency={setCurrency}
        onOpenBooking={() => scrollTo('booking')}
        onOpenPaymentModal={() => setIsPaymentModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative overflow-hidden">
        
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={() => scrollTo('booking')}
          onOpenAiArchitect={() => scrollTo('ai-architect')}
          onOpenPaymentModal={() => setIsPaymentModalOpen(true)}
        />

        {/* 2. Stats Bar */}
        <StatsBar />

        {/* 3. Services & Deliverables */}
        <ServicesSection
          currency={currency}
          onSelectService={handleSelectService}
        />

        {/* 4. Workflow Automation Hub */}
        <AutomationVisualizer />

        {/* 5. AI Project Scope Architect (Gemini 3.7 Flash) */}
        <AiScopeArchitect
          currency={currency}
          onApplyToBooking={handleApplyAiScope}
        />

        {/* 6. Featured Case Studies */}
        <ProjectsSection
          onOpenCaseStudy={(project) => setSelectedCaseStudy(project)}
          onBookSimilarProject={handleBookSimilarProject}
        />

        {/* 7. Interactive Pricing Calculator */}
        <InteractivePricingCalculator
          currency={currency}
          onApplyEstimatedPlan={handleApplyCalculatorEstimate}
        />

        {/* 8. Predictable Pricing Packages */}
        <PricingSection
          currency={currency}
          onSelectPlan={handleSelectPricingPlan}
          onOpenPaymentModal={() => setIsPaymentModalOpen(true)}
        />

        {/* 9. 4-Stage Process */}
        <ProcessSection />

        {/* 10. Tech Stack & Frameworks */}
        <SkillsSection />

        {/* 11. About Favour / Story */}
        <AboutSection onOpenBooking={() => scrollTo('booking')} />

        {/* 12. Verified Testimonials */}
        <TestimonialsSection />

        {/* 13. Project Discovery & Booking */}
        <BookingSection
          currency={currency}
          setCurrency={setCurrency}
          bookingDraft={bookingDraft}
          onOpenPaymentModal={() => setIsPaymentModalOpen(true)}
        />

        {/* 14. FAQ Section */}
        <FaqSection />

      </main>

      {/* Footer */}
      <Footer
        onOpenPaymentModal={() => setIsPaymentModalOpen(true)}
        onOpenAiArchitect={() => scrollTo('ai-architect')}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <a
          id="floating-whatsapp-btn"
          href={DEVELOPER_INFO.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl shadow-emerald-600/40 transition-all hover:scale-105 group"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp Favour</span>
        </a>
      </div>

      {/* Modals */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />

      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onBookSimilar={handleBookSimilarProject}
      />

    </div>
  );
}

export default App;
