import React from 'react';
import { SectionContent } from '../data/privacyPolicyData';
import { ListFilter } from 'lucide-react';

interface MobileLegalNavigationProps {
  sections: SectionContent[];
  activeSectionId: string;
  onSelectSection: (id: string) => void;
}

export const MobileLegalNavigation: React.FC<MobileLegalNavigationProps> = ({
  sections,
  activeSectionId,
  onSelectSection,
}) => {
  return (
    <div className="lg:hidden sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 px-4 shadow-xs no-print">
      <div className="flex items-center gap-2">
        <label htmlFor="mobile-toc-select" className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 shrink-0">
          <ListFilter className="w-3.5 h-3.5 text-[#1E88E5]" />
          <span>Jump to:</span>
        </label>
        <select
          id="mobile-toc-select"
          value={activeSectionId}
          onChange={(e) => onSelectSection(e.target.value)}
          className="flex-1 min-w-0 bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
        >
          {sections.map((section) => (
            <option key={section.id} value={section.id}>
              {section.number}. {section.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
