import React, { useState } from 'react';
import { X, Mail, Check, Copy, ExternalLink } from 'lucide-react';
import { LEGAL_META } from '../data/legalMeta';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject?: string;
  body?: string;
  categoryTitle?: string;
}

export const EmailModal: React.FC<EmailModalProps> = ({
  isOpen,
  onClose,
  subject = 'Inquiry regarding CV YAM',
  body = 'Hi CV YAM team,\n\nI would like to inquire about...',
  categoryTitle = 'Support Inquiry',
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  if (!isOpen) return null;

  const email = LEGAL_META.contactEmail;
  const fullSubject = subject.startsWith('[CV YAM]') ? subject : `[CV YAM] ${subject}`;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(body)}`;

  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(
    email
  )}&subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(body)}`;

  const mailtoUrl = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
    fullSubject
  )}&body=${encodeURIComponent(body)}`;

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
      }
    } catch {
      // Fallback
    }
  };

  const handleCopyAll = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(
          `To: ${email}\nSubject: ${fullSubject}\n\n${body}`
        );
        setCopiedAll(true);
        setTimeout(() => setCopiedAll(false), 2500);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-modal-title"
    >
      <div
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#FAFBFD]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#E3F2FD] text-[#1E88E5] flex items-center justify-center font-bold">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h2 id="email-modal-title" className="text-base font-bold text-slate-900">
                Email CV YAM Support
              </h2>
              <p className="text-xs text-slate-500">{categoryTitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Recipient Card */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                Recipient Email
              </span>
              <p className="text-sm font-bold text-slate-900 truncate">
                {email}
              </p>
            </div>
            <button
              onClick={handleCopyEmail}
              className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Subject Preview */}
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-600">Subject:</span>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800">
              {fullSubject}
            </div>
          </div>

          {/* Direct Send Buttons */}
          <div className="space-y-2 pt-1">
            <span className="text-xs font-semibold text-slate-700 block">
              Choose how you want to send:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Gmail Button */}
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl border border-red-200 bg-red-50/50 hover:bg-red-50 text-red-900 font-semibold text-xs transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span>Open in Gmail</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-red-500 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Outlook Button */}
              <a
                href={outlookUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl border border-sky-200 bg-sky-50/50 hover:bg-sky-50 text-sky-900 font-semibold text-xs transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  <span>Open in Outlook</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-sky-500 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Standard Mail App Button */}
            <a
              href={mailtoUrl}
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-[#1E88E5] hover:bg-[#1976D2] text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Open in Default System Mail App</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#FAFBFD] border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={handleCopyAll}
            className="text-xs text-slate-600 hover:text-slate-900 font-medium inline-flex items-center gap-1.5 cursor-pointer"
          >
            {copiedAll ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied all message details!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy full email draft</span>
              </>
            )}
          </button>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
