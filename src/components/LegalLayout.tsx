import React from 'react';
import { LegalHeader } from './LegalHeader';
import { LegalFooter } from './LegalFooter';
import { LEGAL_META } from '../data/legalMeta';
import { ShieldCheck, Cloud, Sparkles } from 'lucide-react';

interface LegalLayoutProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  children: React.ReactNode;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  currentPath,
  onNavigate,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-slate-800 antialiased selection:bg-[#E3F2FD] selection:text-[#0D47A1]">
      {/* Top Notice Bar */}
      <div className="bg-[#1E88E5] text-white text-xs py-2 px-4 no-print">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium">
            <span className="shrink-0">🇿🇦</span>
            <span>
              Official Legal &amp; Compliance Hub for {LEGAL_META.appName} South Africa · POPIA Compliant
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/90 text-[11px]">
            <span className="hidden md:inline">OpenAI AI Architecture</span>
            <span className="hidden md:inline">·</span>
            <span>Cloud Firestore Remote CV Sync</span>
          </div>
        </div>
      </div>

      {/* Global Header */}
      <LegalHeader currentPath={currentPath} onNavigate={onNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 w-full" id="main-content">
        {children}
      </main>

      {/* Trust & Architecture Strip */}
      <section className="bg-white border-t border-slate-200/80 py-8 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-700">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#E3F2FD] text-[#1E88E5] flex items-center justify-center shrink-0">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Cloud Synchronized</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Remote storage via secure Firestore databases allows seamless multi-device CV editing and backup.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#E3F2FD] text-[#1E88E5] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">OpenAI Powered</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  AI writing assistance via OpenAI APIs helps draft summaries and bullet points without public training on your CV.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#E3F2FD] text-[#1E88E5] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">POPIA Aligned</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Processed in accordance with the Protection of Personal Information Act 4 of 2013 under South African law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <LegalFooter onNavigate={onNavigate} />
    </div>
  );
};
