import React from 'react';
import { SectionContent } from '../data/privacyPolicyData';
import { Bookmark } from 'lucide-react';

interface LegalTableOfContentsProps {
  sections: SectionContent[];
  activeSectionId: string;
  onSelectSection: (id: string) => void;
}

export const LegalTableOfContents: React.FC<LegalTableOfContentsProps> = ({
  sections,
  activeSectionId,
  onSelectSection,
}) => {
  return (
    <nav
      aria-label="Table of contents"
      className="hidden lg:block w-72 shrink-0 sticky top-28 max-h-[calc(100vh-8.5rem)] overflow-y-auto pr-3 text-sm no-print"
    >
      <div className="flex items-center gap-2 pb-3 mb-2 border-b border-slate-200">
        <Bookmark className="w-4 h-4 text-[#1E88E5]" />
        <h2 className="font-bold text-xs uppercase tracking-wider text-slate-800">
          On this page
        </h2>
      </div>

      <ul className="space-y-1">
        {sections.map((section) => {
          const isActive = activeSectionId === section.id;
          return (
            <li key={section.id}>
              <button
                onClick={() => onSelectSection(section.id)}
                className={`w-full text-left py-1.5 px-2.5 rounded-md transition-all text-xs leading-snug cursor-pointer group flex items-start gap-2 ${
                  isActive
                    ? 'bg-[#E3F2FD] text-[#1E88E5] font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span
                  className={`shrink-0 font-mono text-[11px] ${
                    isActive ? 'text-[#1E88E5]' : 'text-slate-400 group-hover:text-slate-600'
                  }`}
                >
                  {section.number}.
                </span>
                <span className="truncate">{section.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
