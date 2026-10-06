import React from 'react';
import { Search, X } from 'lucide-react';
import { LEGAL_META } from '../data/legalMeta';

interface LegalDocumentHeaderProps {
  title: string;
  subtitle: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  documentType: 'privacy' | 'terms' | 'account-terms';
}

export const LegalDocumentHeader: React.FC<LegalDocumentHeaderProps> = ({
  title,
  subtitle,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="border-b border-slate-200 pb-8 pt-6 sm:pt-10 mb-8 sm:mb-12">
      {/* Breadcrumb / Kicker */}
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E88E5] mb-3">
        <span>{LEGAL_META.appName}</span>
        <span aria-hidden="true">·</span>
        <span>Legal Documentation</span>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {title}
      </h1>

      <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
        {subtitle}
      </p>

      {/* Metadata without pills */}
      <div className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-slate-600">
        <div>
          <span className="font-semibold text-slate-700">Effective Date:</span>{' '}
          <span>{LEGAL_META.effectiveDate}</span>
        </div>
        <span aria-hidden="true" className="text-slate-400">·</span>
        <div>
          <span className="font-semibold text-slate-700">Last Updated:</span>{' '}
          <span>{LEGAL_META.lastUpdated}</span>
        </div>
        <span aria-hidden="true" className="text-slate-400">·</span>
        <div>
          <span className="font-semibold text-slate-700">Jurisdiction:</span>{' '}
          <span>{LEGAL_META.jurisdiction}</span>
        </div>
      </div>

      {/* In-Document Search Bar */}
      <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between no-print">
        <div className="relative flex-1 max-w-md">
          <label htmlFor="legal-search" className="sr-only">
            Search in document
          </label>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            id="legal-search"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search keywords (e.g., POPIA, storage, AI, deletion)..."
            className="w-full pl-10 pr-9 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

