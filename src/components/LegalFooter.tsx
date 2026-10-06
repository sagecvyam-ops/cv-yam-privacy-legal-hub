import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { LEGAL_META } from '../data/legalMeta';

interface LegalFooterProps {
  onNavigate: (path: string) => void;
}

export const LegalFooter: React.FC<LegalFooterProps> = ({ onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEmailClick = async (e: React.MouseEvent) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(LEGAL_META.contactEmail);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
      }
    } catch {
      // Ignore
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#1E88E5] to-[#64B5F6] flex items-center justify-center text-white font-black text-lg">
                CY
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {LEGAL_META.appName}
              </span>
            </div>
            <p className="text-base text-slate-300 font-medium">
              {LEGAL_META.tagline}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              South Africa&apos;s intelligent CV builder. Empowering job applicants with modern templates, OpenAI content refinement, cloud-synchronized profiles, and compliant data stewardship.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-[#64B5F6]" />
              <a
                href={`mailto:${LEGAL_META.contactEmail}`}
                onClick={handleEmailClick}
                className="text-slate-300 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
                title="Click to copy address or open in email"
              >
                {LEGAL_META.contactEmail}
              </a>
              {copiedEmail && (
                <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/80 border border-emerald-800/80 px-1.5 py-0.5 rounded">
                  Copied!
                </span>
              )}
            </div>
          </div>

          {/* Quick Legal Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Legal &amp; Policy
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('/privacy')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/terms')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/account-terms')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Account Terms
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/contact')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* South Africa Compliance Badge & Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Compliance &amp; Standards
            </h3>
            <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 space-y-1.5">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <span>🇿🇦 South African Law</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Compliant with the {LEGAL_META.privacyAct} (POPIA).
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white p-2 rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to top</span>
            </button>
          </div>
        </div>

        {/* Bottom border & copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© 2026 {LEGAL_META.appName}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Operating from South Africa</span>
            <span>·</span>
            <span>Effective 6 October 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
