import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Currency, LeadSubmissionResponse } from '../types';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { 
  Send, 
  MessageSquare, 
  Phone, 
  Mail, 
  Building2, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Copy, 
  Check, 
  Lock, 
  ArrowRight,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface BookingSectionProps {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  bookingDraft: {
    details: string;
    services: string[];
    budget: string;
    timeline: string;
  };
  onOpenPaymentModal: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  currency,
  setCurrency,
  bookingDraft,
  onOpenPaymentModal
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    services: bookingDraft.services.length > 0 ? bookingDraft.services : ['Business Website'],
    currency: currency,
    budget: bookingDraft.budget || '',
    timeline: bookingDraft.timeline || '',
    startDate: '',
    contactMethod: 'WhatsApp',
    details: bookingDraft.details || ''
  });

  const [loading, setLoading] = useState(false);
  const [leadReceipt, setLeadReceipt] = useState<LeadSubmissionResponse | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync draft updates if triggered from AI Architect or Pricing Calculator
  React.useEffect(() => {
    if (bookingDraft.details || bookingDraft.services.length > 0 || bookingDraft.budget || bookingDraft.timeline) {
      setFormData(prev => ({
        ...prev,
        details: bookingDraft.details || prev.details,
        services: bookingDraft.services.length > 0 ? bookingDraft.services : prev.services,
        budget: bookingDraft.budget || prev.budget,
        timeline: bookingDraft.timeline || prev.timeline
      }));
    }
  }, [bookingDraft]);

  const serviceOptions = [
    'Business Website',
    'Web Application / SaaS',
    'E-Commerce Website',
    'Full-Stack Development',
    'AI & Automation',
    'UI/UX Design'
  ];

  const toggleService = (svc: string) => {
    setFormData(prev => {
      const exists = prev.services.includes(svc);
      if (exists) {
        return { ...prev, services: prev.services.filter(s => s !== svc) };
      } else {
        return { ...prev, services: [...prev.services, svc] };
      }
    });
  };

  const budgetOptions = {
    USD: ['$450 – $900', '$900 – $1,800', '$1,800 – $3,500', '$3,500+ / Custom'],
    NGN: ['₦350,000 – ₦700,000', '₦700,000 – ₦1,500,000', '₦1,500,000 – ₦3,000,000', '₦3,000,000+ / Custom'],
    EUR: ['€400 – €800', '€800 – €1,600', '€1,600 – €3,200', '€3,200+ / Custom'],
    GBP: ['£350 – £700', '£700 – £1,400', '£1,400 – £2,800', '£2,800+ / Custom']
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.details) {
      alert('Please fill in all required fields (Name, Email, Phone, and Details).');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/lead/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          currency: currency
        })
      });

      if (!res.ok) {
        throw new Error('Failed to submit booking');
      }

      const data: LeadSubmissionResponse = await res.json();
      setLeadReceipt(data);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err: any) {
      console.error(err);
      alert('Could not submit booking automatically. Please reach out directly on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="py-20 md:py-28 relative bg-slate-900/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Project Discovery &amp; Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Build Something High-Performing.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Tell me about your project below. You will receive an automated reference ID, instant quote estimate, and direct WhatsApp sync.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 5 Cols: Quick Contact & Bank Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-md space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  Direct Communication
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Prefer instant messaging? Reach out through any of these direct channels:
                </p>
              </div>

              <div className="space-y-3">
                
                {/* WhatsApp Quick Link */}
                <a
                  id="booking-quick-whatsapp"
                  href={DEVELOPER_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-slate-900 dark:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">WhatsApp Direct Chat</div>
                      <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono">
                        {DEVELOPER_INFO.phone}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-500 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Direct Phone Call */}
                <a
                  id="booking-quick-phone"
                  href={`tel:${DEVELOPER_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 hover:border-blue-500 text-slate-900 dark:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Direct Phone Call</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                        {DEVELOPER_INFO.phone}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Direct Email */}
                <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-slate-900 dark:text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Email Inbox</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                        {DEVELOPER_INFO.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-blue-500 transition-colors"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Bank Transfer Modal Trigger Card */}
                <button
                  id="booking-open-bank-details-btn"
                  onClick={onOpenPaymentModal}
                  className="w-full flex items-center justify-between p-4 rounded-2xl border border-blue-500/40 bg-blue-500/5 hover:bg-blue-500/15 text-slate-900 dark:text-white transition-all group text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Pay by Bank Transfer</div>
                      <div className="text-[11px] text-blue-500 dark:text-blue-400 font-mono">
                        WEMA Bank: 0251427478
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                </button>

              </div>
            </div>

            {/* Inclusions Guarantee Note */}
            <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 text-white space-y-3 text-xs">
              <div className="flex items-center gap-2 font-bold text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Client Security &amp; Ownership Policy</span>
              </div>
              <ul className="space-y-1 text-[11px] text-slate-300">
                <li>• NDA provided on request before project kickoff</li>
                <li>• 100% full original source code handoff upon project completion</li>
                <li>• Complimentary post-launch maintenance &amp; bug fix window</li>
              </ul>
            </div>

          </div>

          {/* Right 7 Cols: Project Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl backdrop-blur-xl">
              
              <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Project Discovery Brief
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Fields with <span className="text-rose-500 font-bold">*</span> are required.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-500 text-xs font-mono font-bold">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Secure Submission</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="booking-input-name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="booking-input-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Phone / WhatsApp <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="booking-input-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234... / +44... / +1..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Business or Brand Name
                    </label>
                    <input
                      id="booking-input-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Autos Ltd (Optional)"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    />
                  </div>
                </div>

                {/* Required Services Checkboxes */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    What digital product do you want to build? <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {serviceOptions.map((svc) => {
                      const isChecked = formData.services.includes(svc);
                      return (
                        <button
                          key={svc}
                          type="button"
                          id={`booking-service-${svc.replace(/\s+/g, '-').toLowerCase()}`}
                          onClick={() => toggleService(svc)}
                          className={`p-2.5 rounded-xl text-left text-xs font-semibold border transition-all flex items-center gap-2 ${
                            isChecked
                              ? 'bg-blue-600/10 border-blue-500 text-blue-600 dark:text-blue-400 font-bold'
                              : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400'
                          }`}
                        >
                          <span className={`w-3.5 h-3.5 rounded-md border flex items-center justify-center text-[10px] ${
                            isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-400'
                          }`}>
                            {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </span>
                          <span className="truncate">{svc}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Currency, Budget, Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Currency
                    </label>
                    <select
                      id="booking-currency-select"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value as Currency)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs font-bold"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="NGN">NGN (₦)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Budget Range
                    </label>
                    <select
                      id="booking-budget-select"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs"
                    >
                      <option value="">Select Range</option>
                      {budgetOptions[currency].map((b, idx) => (
                        <option key={idx} value={b}>{b}</option>
                      ))}
                      <option value="Flexible / Negotiable">Flexible / Negotiable</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Preferred Timeline
                    </label>
                    <select
                      id="booking-timeline-select"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs"
                    >
                      <option value="">Select Timeline</option>
                      <option value="Urgent / Fast-Track (< 10 Days)">Urgent (Fast-Track &lt; 10 Days)</option>
                      <option value="1–2 Weeks">1–2 Weeks</option>
                      <option value="2–4 Weeks">2–4 Weeks</option>
                      <option value="1–2 Months">1–2 Months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Start Date & Preferred Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Preferred Start Date
                    </label>
                    <input
                      id="booking-input-date"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Preferred Contact Channel
                    </label>
                    <select
                      id="booking-contact-method"
                      value={formData.contactMethod}
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs font-bold"
                    >
                      <option value="WhatsApp">WhatsApp Message</option>
                      <option value="Phone Call">Phone Call</option>
                      <option value="Email">Email Follow-Up</option>
                    </select>
                  </div>
                </div>

                {/* Details Textarea */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Tell Me About Your Project Scope &amp; Goals <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="booking-input-details"
                    required
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Describe what features you need (e.g. e-commerce catalog, payment gateway, WhatsApp lead alert, admin portal, or custom design requirements)..."
                    className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  id="submit-booking-btn"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  {loading ? (
                    <span>Submitting Project Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Project Brief &amp; Get Reference ID</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Confirmation Modal upon Submission */}
      {leadReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="max-w-lg w-full rounded-3xl bg-slate-950 border border-emerald-500/50 p-8 shadow-2xl text-white space-y-6 animate-fadeIn">
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                  Project Request Confirmed
                </span>
                <h3 className="text-xl font-bold">
                  Reference: {leadReceipt.refId}
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Thank you, <strong>{leadReceipt.leadSummary.clientName}</strong>! Your project brief has been received. Favour will review your specifications and follow up within <strong>{leadReceipt.leadSummary.estimatedResponseTime}</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono space-y-1.5 text-slate-300">
              <div><strong>Client:</strong> {leadReceipt.leadSummary.clientName}</div>
              <div><strong>Contact:</strong> {leadReceipt.leadSummary.phone} ({leadReceipt.leadSummary.email})</div>
              <div><strong>Services:</strong> {leadReceipt.leadSummary.services.join(', ')}</div>
              <div><strong>Lead Engineer:</strong> {leadReceipt.leadSummary.assignedEngineer}</div>
            </div>

            <div className="space-y-2.5">
              <a
                id="receipt-whatsapp-link"
                href={leadReceipt.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Continue Brief on WhatsApp (Instant Response)</span>
              </a>

              <button
                onClick={() => setLeadReceipt(null)}
                className="w-full py-2.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
