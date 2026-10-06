import React, { useState } from 'react';
import { ContactCard } from '../components/ContactCard';
import { UserCheck, Shield, LifeBuoy, Mail, Send, Copy, Check, ExternalLink, Building2 } from 'lucide-react';
import { LEGAL_META } from '../data/legalMeta';

export const ContactPage: React.FC = () => {
  const [requestType, setRequestType] = useState('account_support');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [copiedDraft, setCopiedDraft] = useState(false);

  const requestOptions = [
    { id: 'account_support', label: 'Account Support (Login / Password Reset)', subject: 'Account Support Request' },
    { id: 'popia_access', label: 'POPIA Request: Access to Personal Information', subject: 'POPIA Section 23 - Request for Access to Information' },
    { id: 'popia_correction', label: 'POPIA Request: Correction of Personal Information', subject: 'POPIA Section 24 - Correction of Personal Information' },
    { id: 'popia_deletion', label: 'Account & Data Deletion Request', subject: 'Account Deletion & Data Erasure Request' },
    { id: 'general_feedback', label: 'General Feedback & CV Assistance', subject: 'General Support / CV Feedback' },
  ];

  const currentOption = requestOptions.find((o) => o.id === requestType) || requestOptions[0];

  const emailSubject = `[CV YAM] ${currentOption.subject}${userName ? ` - ${userName}` : ''}`;
  const emailBody = `Dear ${LEGAL_META.appName} Team,\n\nName: ${userName || '[Your Name]'}\nRegistered Email: ${userEmail || '[Your Email]'}\nRequest Type: ${currentOption.label}\n\nDetails of Request:\n${userMessage || 'Please provide information regarding my request.'}\n\nThank you,\n${userName || '[Your Name]'}`;

  const mailtoUrl = `mailto:${LEGAL_META.contactEmail}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const copyTemplate = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(`Subject: ${emailSubject}\n\n${emailBody}`);
        setCopiedDraft(true);
        setTimeout(() => setCopiedDraft(false), 2000);
      }
    } catch {
      // Ignore
    }
  };

  return (
    <div className="bg-[#FAFBFD] pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#E3F2FD]/50 via-white to-white pt-10 sm:pt-16 pb-10 sm:pb-14 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E3F2FD] text-[#0D47A1] text-xs font-semibold mb-4">
            <Mail className="w-3.5 h-3.5 text-[#1E88E5]" />
            <span>Support &amp; Data Subject Privacy Desk</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            How can we help?
          </h1>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have a question about your account, CVs, or privacy? Get in touch with the {LEGAL_META.appName} team.
          </p>

          {/* Prominent Clickable Email */}
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-3 p-3.5 sm:px-6 rounded-2xl bg-white border border-slate-300/80 shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Direct Contact:
            </span>
            <a
              href={`mailto:${LEGAL_META.contactEmail}`}
              className="text-base sm:text-lg font-bold text-[#1E88E5] hover:text-[#0D47A1] hover:underline underline-offset-4 flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Mail className="w-5 h-5 text-[#1E88E5]" />
              <span>{LEGAL_META.contactEmail}</span>
            </a>
          </div>
        </div>
      </section>

      {/* The Three Required Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Account Support */}
          <ContactCard
            title="Account Support"
            description="Assistance with signing in, password recoveries, and managing your verified CV YAM profile."
            icon={UserCheck}
            badge="Authentication"
            emailSubject="Account Support"
            items={[
              'Login & Authentication',
              'Registration Assistance',
              'Password Reset Help',
              'Email Verification Issues',
              'Account Access Recovery',
            ]}
          />

          {/* Card 2: Privacy Requests */}
          <ContactCard
            title="Privacy Requests"
            description="Inquiries and formal requests pursuant to the Protection of Personal Information Act (POPIA)."
            icon={Shield}
            badge="POPIA Compliance"
            emailSubject="Privacy Request"
            items={[
              'Access to Personal Information',
              'Correction of Personal Information',
              'Account Deletion & Data Erasure',
              'Privacy Questions & Objections',
              'POPIA-Related Requests',
            ]}
          />

          {/* Card 3: General Support */}
          <ContactCard
            title="General Support"
            description="Questions about CV generation, formatting options, job search feeds, and app feedback."
            icon={LifeBuoy}
            badge="Product Desk"
            emailSubject="General Support"
            items={[
              'AI CV Generation Questions',
              'Saved Cloud CV Synchronization',
              'Job Matching & Discovery',
              'Application Issues & Bug Reports',
              'General Product Feedback',
            ]}
          />
        </div>
      </section>

      {/* Interactive Email Assistant */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="border-b border-slate-100 pb-4 mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              Quick Request Assistant
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select your topic to automatically prefill an email draft to <span className="font-semibold text-slate-800">{LEGAL_META.contactEmail}</span>.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="request-type-select" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Topic or Request Category
              </label>
              <select
                id="request-type-select"
                value={requestType}
                onChange={(e) => setRequestType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
              >
                {requestOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-user-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  id="contact-user-name"
                  type="text"
                  placeholder="e.g. Sipho Ndlovu"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
                />
              </div>

              <div>
                <label htmlFor="contact-user-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Registered Email
                </label>
                <input
                  id="contact-user-email"
                  type="email"
                  placeholder="e.g. sipho@example.co.za"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-user-message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Details or Description
              </label>
              <textarea
                id="contact-user-message"
                rows={3}
                placeholder="Describe your question or provide specific details regarding your account..."
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={mailtoUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1E88E5] text-white font-semibold text-sm hover:bg-[#1976D2] shadow-xs transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Open in Email App</span>
              </a>

              <button
                type="button"
                onClick={copyTemplate}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
              >
                {copiedDraft ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Copied Email Text</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Copy Draft Text</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Information Regulator Contact Block */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-slate-100/90 rounded-2xl border border-slate-200 p-6 sm:p-7 text-xs text-slate-600 space-y-2.5">
          <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
            <Building2 className="w-4 h-4 text-slate-700" />
            <span>The Information Regulator (South Africa)</span>
          </div>
          <p className="leading-relaxed">
            If you have raised a data privacy concern with us and are not satisfied with our resolution, you have the statutory right under POPIA to lodge a complaint with the South African Information Regulator:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-[11px] text-slate-700">
            <div>
              <span className="font-sans font-semibold text-slate-500">Complaints:</span>{' '}
              <a href={`mailto:${LEGAL_META.informationRegulator.emailComplaints}`} className="text-[#1E88E5] hover:underline">
                {LEGAL_META.informationRegulator.emailComplaints}
              </a>
            </div>
            <div>
              <span className="font-sans font-semibold text-slate-500">General:</span>{' '}
              <a href={`mailto:${LEGAL_META.informationRegulator.emailGeneral}`} className="text-[#1E88E5] hover:underline">
                {LEGAL_META.informationRegulator.emailGeneral}
              </a>
            </div>
            <div className="sm:col-span-2">
              <span className="font-sans font-semibold text-slate-500">Website:</span>{' '}
              <a
                href={LEGAL_META.informationRegulator.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E88E5] hover:underline inline-flex items-center gap-1"
              >
                <span>{LEGAL_META.informationRegulator.website}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
