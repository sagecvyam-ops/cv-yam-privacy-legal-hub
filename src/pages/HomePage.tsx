import React, { useState } from 'react';
import { Shield, FileText, UserCheck, Mail, ArrowRight, ExternalLink, CheckCircle2, Cloud, Sparkles, Smartphone, Copy, Check } from 'lucide-react';
import { LEGAL_META } from '../data/legalMeta';
import { ConsentNotice } from '../components/ConsentNotice';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [demoConsentChecked, setDemoConsentChecked] = useState(false);
  const [demoError, setDemoError] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const handleTestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoConsentChecked) {
      setDemoError(true);
    } else {
      setDemoError(false);
      alert('Consent verified! In the actual application, registration proceeds.');
    }
  };

  const codeSnippet = `<!-- CV YAM Legal Consent Component Pattern -->
<label class="consent-checkbox">
  <input type="checkbox" name="legal_consent" required />
  <span>
    I agree to the 
    <a href="https://cv-yam.co.za/terms" target="_blank">CV YAM Terms & Conditions</a>
    and acknowledge the 
    <a href="https://cv-yam.co.za/privacy" target="_blank">Privacy Policy</a>.
  </span>
</label>`;

  const copyCode = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(codeSnippet);
        setCopiedSnippet(true);
        setTimeout(() => setCopiedSnippet(false), 2000);
      }
    } catch {
      // Ignore
    }
  };

  const legalHubCards = [
    {
      title: 'Privacy Policy',
      path: '/privacy',
      icon: Shield,
      description: 'How CV YAM collects, uses, stores, and protects your information under South African POPIA.',
      badge: '26 Sections',
      highlights: ['Remote Cloud Storage', 'OpenAI Integration', 'POPIA Rights & Regulator'],
    },
    {
      title: 'Terms & Conditions',
      path: '/terms',
      icon: FileText,
      description: 'The terms governing your access to and use of the CV YAM mobile and web platforms.',
      badge: '23 Sections',
      highlights: ['Acceptable Use', 'Intellectual Property', 'Disclaimers & Liability'],
    },
    {
      title: 'Account Terms',
      path: '/account-terms',
      icon: UserCheck,
      description: 'Crucial rules regarding account creation, password security, remote CV sync, and deletion.',
      badge: 'Account Focus',
      highlights: ['Firebase Auth', 'Cloud Persistence', 'Account Deletion Policy'],
    },
    {
      title: 'Contact / Privacy Requests',
      path: '/contact',
      icon: Mail,
      description: 'Direct inquiries, password recovery support, and POPIA privacy rights requests.',
      badge: 'Direct Help',
      highlights: ['Account Support', 'Privacy Officer', 'General Inquiries'],
    },
  ];

  return (
    <div className="pb-16 sm:pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#E3F2FD]/50 via-white to-white pt-12 sm:pt-20 pb-12 sm:pb-16 border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E3F2FD] text-[#0D47A1] text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#1E88E5]" />
            <span>Official Legal Documentation Portal · South Africa</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Privacy &amp; Legal
          </h1>

          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Clear, transparent information about how <span className="font-semibold text-slate-900">{LEGAL_META.appName}</span> works, stores your CVs, and protects your data.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('/privacy')}
              className="px-5 py-3 rounded-xl bg-[#1E88E5] text-white font-semibold text-sm hover:bg-[#1976D2] shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Privacy Policy</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/terms')}
              className="px-5 py-3 rounded-xl bg-white text-slate-800 font-semibold text-sm border border-slate-300 hover:bg-slate-50 transition-all cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <button
              onClick={() => onNavigate('/account-terms')}
              className="px-5 py-3 rounded-xl bg-white text-slate-800 font-semibold text-sm border border-slate-300 hover:bg-slate-50 transition-all cursor-pointer"
            >
              Account Terms
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-5 py-3 rounded-xl bg-white text-[#1E88E5] font-semibold text-sm border border-[#64B5F6] hover:bg-[#E3F2FD] transition-all cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200/60 max-w-lg mx-auto flex items-center justify-center gap-4 text-xs text-slate-500">
            <span>Effective: {LEGAL_META.effectiveDate}</span>
            <span>·</span>
            <span>Last Updated: {LEGAL_META.lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Main Legal Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {legalHubCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.path}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E3F2FD] text-[#1E88E5] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-[#1E88E5] bg-[#E3F2FD] px-2.5 py-1 rounded-md">
                      {card.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-[#1E88E5] transition-colors">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <ul className="space-y-1.5 text-xs text-slate-500">
                      {card.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#64B5F6]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      onNavigate(card.path);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#E3F2FD] text-[#1E88E5] font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Read {card.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technical Architecture Notice: Remote Storage & OpenAI */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18">
        <div className="bg-white rounded-2xl border border-blue-100 p-6 sm:p-8 bg-gradient-to-br from-white to-[#E3F2FD]/30 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E88E5]">
                <span>Product Update &amp; Cloud Architecture</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Remote Cloud Storage for Authenticated Accounts
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Earlier editions of CV YAM stored resumes strictly in local phone storage. Our updated architecture allows registered users to securely save CVs in the cloud (Cloud Firestore) so your career documents synchronize seamlessly across Android devices and web sessions.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/privacy')}
              className="shrink-0 px-4 py-2.5 rounded-xl bg-[#1E88E5] text-white text-xs font-semibold hover:bg-[#1976D2] transition-colors cursor-pointer"
            >
              Learn More in Section 9
            </button>
          </div>
        </div>
      </section>

      {/* Reusable Legal Consent Component Interactive Showcase */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18">
        <div className="border border-slate-200 rounded-2xl bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <Smartphone className="w-4 h-4 text-[#1E88E5]" />
                <span>Integration Component</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                CV YAM Registration Consent Component
              </h3>
              <p className="text-sm text-slate-600 mt-0.5">
                The exact reusable legal consent checkbox used during Android app account creation and web registration.
              </p>
            </div>

            <button
              onClick={copyCode}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors self-start md:self-auto cursor-pointer"
            >
              {copiedSnippet ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied HTML</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code Spec</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-start">
            {/* Live Interactive Sandbox */}
            <div className="lg:col-span-6 bg-slate-50 p-5 sm:p-6 rounded-xl border border-slate-200/80">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-3">
                Live Interactive Sandbox
              </span>

              <form onSubmit={handleTestSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Sample Email</label>
                  <input
                    type="email"
                    disabled
                    value="applicant@example.co.za"
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-600"
                  />
                </div>

                {/* The Reusable Component */}
                <ConsentNotice
                  checked={demoConsentChecked}
                  onChange={(val) => {
                    setDemoConsentChecked(val);
                    if (val) setDemoError(false);
                  }}
                  onNavigate={onNavigate}
                  showError={demoError}
                />

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1E88E5] text-white font-semibold text-xs rounded-lg hover:bg-[#1976D2] transition-colors cursor-pointer"
                  >
                    Test Register Account
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setDemoConsentChecked(false);
                      setDemoError(false);
                    }}
                    className="px-3 py-2 text-slate-500 hover:text-slate-700 text-xs font-medium cursor-pointer"
                  >
                    Reset
                  </button>
                </div>
              </form>

              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                Status:{' '}
                <span className={demoConsentChecked ? 'text-emerald-600 font-semibold' : 'text-slate-600'}>
                  {demoConsentChecked ? 'Consent Active (Checked)' : 'Not Selected (Unchecked)'}
                </span>
              </div>
            </div>

            {/* Architectural Rules Description */}
            <div className="lg:col-span-6 space-y-3.5 text-xs sm:text-sm text-slate-600">
              <h4 className="font-bold text-slate-900 text-sm">Design &amp; Legal Requirements</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Never Pre-Checked:</strong> The user must affirmatively toggle the checkbox per POPIA conditions for valid consent.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Direct Navigation:</strong> Terms &amp; Conditions and Privacy Policy links navigate directly to full legal documentation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Registration Exclusive:</strong> Required upon account creation; existing authenticated users are not forced to re-agree on every login.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
