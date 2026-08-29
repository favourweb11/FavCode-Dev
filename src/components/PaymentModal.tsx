import React, { useState } from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { 
  Building2, 
  Copy, 
  Check, 
  X, 
  MessageSquare, 
  ShieldCheck, 
  AlertCircle, 
  CreditCard,
  Globe
} from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const [copiedAcc, setCopiedAcc] = useState(false);

  if (!isOpen) return null;

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.bankDetails.accountNumber);
    setCopiedAcc(true);
    setTimeout(() => setCopiedAcc(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="max-w-lg w-full rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl text-white space-y-6 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          id="close-payment-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close Payment Details"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-mono font-bold uppercase">
            <Building2 className="w-3.5 h-3.5" />
            <span>Bank Transfer &amp; International Payments</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Pay For Your Project
          </h3>
          <p className="text-xs text-slate-400">
            Make payment directly to the account details below, then send your payment receipt on WhatsApp or Email for instant milestone confirmation.
          </p>
        </div>

        {/* Nigerian Naira Bank Details Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/30 border border-slate-800 space-y-3.5">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono border-b border-slate-800 pb-2">
            <span>Direct Naira Bank Transfer</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Merchant
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Bank Name</span>
            <strong className="text-sm font-bold text-white tracking-wide">
              {DEVELOPER_INFO.bankDetails.bankName}
            </strong>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Account Number</span>
            <div className="flex items-center gap-2">
              <strong className="text-base font-mono font-bold text-cyan-400">
                {DEVELOPER_INFO.bankDetails.accountNumber}
              </strong>
              <button
                id="copy-account-number-btn"
                onClick={handleCopyAccount}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Copy account number"
              >
                {copiedAcc ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Account Name</span>
            <strong className="text-sm font-bold text-slate-200">
              {DEVELOPER_INFO.bankDetails.accountName}
            </strong>
          </div>
        </div>

        {/* International / USD Client Note */}
        <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-xs text-slate-300 space-y-2">
          <div className="flex items-center gap-2 font-bold text-blue-400">
            <Globe className="w-4 h-4" />
            <span>International / USD Clients</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            For clients paying in USD ($), GBP (£), or EUR (€), we accept Wise transfers, international wire, or instant virtual card payment links. Contact Favour on WhatsApp below to request your customized invoice link.
          </p>
        </div>

        {/* WhatsApp Receipt CTA */}
        <div className="space-y-2 pt-2">
          <a
            id="payment-modal-send-receipt-btn"
            href="https://wa.me/2348167668000?text=Hello%20FavCode%20Dev%2C%20I%20have%20made%20a%20payment%20for%20my%20project%20and%20I%20am%20sending%20my%20receipt."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Payment Receipt on WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="w-full py-2.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
