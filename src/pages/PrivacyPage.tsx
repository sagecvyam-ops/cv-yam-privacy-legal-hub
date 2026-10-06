import React, { useState, useEffect } from 'react';
import { PRIVACY_POLICY_SECTIONS } from '../data/privacyPolicyData';
import { LegalDocumentHeader } from '../components/LegalDocumentHeader';
import { LegalTableOfContents } from '../components/LegalTableOfContents';
import { MobileLegalNavigation } from '../components/MobileLegalNavigation';
import { LegalSection } from '../components/LegalSection';
import { Shield, Info } from 'lucide-react';
import { LEGAL_META } from '../data/legalMeta';

export const PrivacyPage: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>(
    PRIVACY_POLICY_SECTIONS[0].id
  );
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Handle URL hash on load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setActiveSectionId(id);
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  // Scroll spy to update active section in TOC
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = PRIVACY_POLICY_SECTIONS.length - 1; i >= 0; i--) {
        const section = PRIVACY_POLICY_SECTIONS[i];
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSectionId(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectSection = (id: string) => {
    setActiveSectionId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  const filteredSections = searchQuery.trim()
    ? PRIVACY_POLICY_SECTIONS.filter((sec) => {
        const q = searchQuery.toLowerCase();
        const matchesTitle = sec.title.toLowerCase().includes(q);
        const matchesParagraphs = sec.paragraphs?.some((p) =>
          p.toLowerCase().includes(q)
        );
        const matchesBullets = sec.bullets?.some((b) =>
          b.toLowerCase().includes(q)
        );
        const matchesSub = sec.subsections?.some(
          (sub) =>
            sub.subtitle?.toLowerCase().includes(q) ||
            sub.paragraphs.some((p) => p.toLowerCase().includes(q))
        );
        const matchesCallout =
          sec.callout?.title.toLowerCase().includes(q) ||
          sec.callout?.content.toLowerCase().includes(q);

        return (
          matchesTitle ||
          matchesParagraphs ||
          matchesBullets ||
          matchesSub ||
          matchesCallout
        );
      })
    : PRIVACY_POLICY_SECTIONS;

  return (
    <div className="bg-[#FAFBFD] pb-20">
      {/* Mobile Sticky Selector */}
      <MobileLegalNavigation
        sections={PRIVACY_POLICY_SECTIONS}
        activeSectionId={activeSectionId}
        onSelectSection={handleSelectSection}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LegalDocumentHeader
          title="Privacy Policy"
          subtitle="How CV YAM collects, uses, stores, and protects your information."
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          documentType="privacy"
        />

        {searchQuery && (
          <div className="mb-6 p-3 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-center justify-between">
            <span>
              Found <strong>{filteredSections.length}</strong> matching sections for &quot;{searchQuery}&quot;
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#1E88E5] font-semibold underline cursor-pointer"
            >
              Reset search
            </button>
          </div>
        )}

        {/* 2-Column Desktop Layout */}
        <div className="flex items-start gap-10 lg:gap-14">
          {/* Sticky Table of Contents (Desktop) */}
          <LegalTableOfContents
            sections={PRIVACY_POLICY_SECTIONS}
            activeSectionId={activeSectionId}
            onSelectSection={handleSelectSection}
          />

          {/* Main Document Content */}
          <article className="flex-1 min-w-0 max-w-4xl bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-xs">
            {/* Quick Context Banner */}
            <div className="mb-8 p-4 rounded-xl bg-[#E3F2FD]/50 border border-[#64B5F6]/40 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
              <Shield className="w-5 h-5 text-[#1E88E5] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">
                  POPIA Responsible Party Statement
                </p>
                <p className="mt-0.5 text-slate-600 leading-relaxed">
                  {LEGAL_META.appName} operates in the Republic of South Africa and processes your personal data strictly under the Protection of Personal Information Act (POPIA). Authenticated users enjoy remote cloud synchronization for saved CV documents.
                </p>
              </div>
            </div>

            {/* Sections */}
            {filteredSections.length === 0 ? (
              <div className="py-12 text-center text-slate-500">
                <Info className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                <p className="text-base font-semibold">No sections matched your query</p>
                <p className="text-xs text-slate-400 mt-1">Try another search term like &quot;POPIA&quot;, &quot;storage&quot;, or &quot;deletion&quot;.</p>
              </div>
            ) : (
              filteredSections.map((section) => (
                <LegalSection
                  key={section.id}
                  section={section}
                  searchQuery={searchQuery}
                />
              ))
            )}
          </article>
        </div>
      </div>
    </div>
  );
};
