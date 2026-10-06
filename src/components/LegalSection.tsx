import React from 'react';
import { SectionContent } from '../data/privacyPolicyData';
import { AlertCircle, Info } from 'lucide-react';

interface LegalSectionProps {
  section: SectionContent;
  searchQuery?: string;
}

export const LegalSection: React.FC<LegalSectionProps> = ({ section, searchQuery = '' }) => {
  const highlightText = (text: string) => {
    if (!searchQuery.trim()) return text;
    const parts = text.split(new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200 text-slate-900 rounded-xs px-0.5 font-medium">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <section
      id={section.id}
      className="scroll-mt-28 py-6 sm:py-8 border-b border-slate-100 last:border-b-0"
    >
      {/* Section Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-baseline gap-2.5">
          <span className="text-[#1E88E5] font-mono font-semibold text-lg sm:text-xl">
            {section.number}.
          </span>
          <span>{highlightText(section.title)}</span>
        </h2>
      </div>

      {/* Callout if present */}
      {section.callout && (
        <div
          className={`mt-4 p-4 rounded-xl border text-sm leading-relaxed ${
            section.callout.type === 'important'
              ? 'bg-amber-50/80 border-amber-200/80 text-amber-950'
              : section.callout.type === 'warning'
              ? 'bg-red-50/80 border-red-200/80 text-red-950'
              : 'bg-[#E3F2FD]/60 border-[#64B5F6]/40 text-blue-950'
          }`}
        >
          <div className="flex items-start gap-3">
            {section.callout.type === 'important' ? (
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            ) : section.callout.type === 'warning' ? (
              <AlertCircle className="w-5 h-5 text-[#D32F2F] shrink-0 mt-0.5" />
            ) : (
              <Info className="w-5 h-5 text-[#1E88E5] shrink-0 mt-0.5" />
            )}

            <div>
              <h3 className="font-bold mb-1 text-slate-900">{section.callout.title}</h3>
              <p className="text-slate-700">{highlightText(section.callout.content)}</p>
            </div>
          </div>
        </div>
      )}

      {/* Paragraphs */}
      {section.paragraphs && section.paragraphs.length > 0 && (
        <div className="mt-4 space-y-3.5 text-base sm:text-[17px] text-slate-700 leading-relaxed font-normal">
          {section.paragraphs.map((p, idx) => (
            <p key={idx}>{highlightText(p)}</p>
          ))}
        </div>
      )}

      {/* Bullets */}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="mt-4 space-y-2 text-base sm:text-[16px] text-slate-700">
          {section.bullets.map((b, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5] mt-2.5 shrink-0" />
              <span className="leading-relaxed">{highlightText(b)}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Subsections */}
      {section.subsections && section.subsections.length > 0 && (
        <div className="mt-6 space-y-5">
          {section.subsections.map((sub, sIdx) => (
            <div key={sIdx} className="pl-3 sm:pl-4 border-l-2 border-slate-200">
              {sub.subtitle && (
                <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1.5">
                  {highlightText(sub.subtitle)}
                </h3>
              )}
              {sub.paragraphs &&
                sub.paragraphs.map((sp, pIdx) => (
                  <p key={pIdx} className="text-base text-slate-700 leading-relaxed mb-2">
                    {highlightText(sp)}
                  </p>
                ))}
              {sub.bullets && (
                <ul className="space-y-1.5 text-base text-slate-700">
                  {sub.bullets.map((sb, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5 shrink-0" />
                      <span>{highlightText(sb)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
