import React, { useState, useEffect } from 'react';
import { ACCOUNT_TERMS_SECTIONS } from '../data/accountTermsData';
import { LegalDocumentHeader } from '../components/LegalDocumentHeader';
import { LegalTableOfContents } from '../components/LegalTableOfContents';
import { MobileLegalNavigation } from '../components/MobileLegalNavigation';
import { LegalSection } from '../components/LegalSection';
import { UserCheck, Cloud, Info } from 'lucide-react';
import { LEGAL_META } from '../data/legalMeta';

export const AccountTermsPage: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>(
    ACCOUNT_TERMS_SECTIONS[0].id
  );
  const [searchQuery, setSearchQuery] = useState<string>('');

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = ACCOUNT_TERMS_SECTIONS.length - 1; i >= 0; i--) {
        const section = ACCOUNT_TERMS_SECTIONS[i];
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
    ? ACCOUNT_TERMS_SECTIONS.filter((sec) => {
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
    : ACCOUNT_TERMS_SECTIONS;

  return (
    <div className="bg-[#FAFBFD] pb-20">
      <MobileLegalNavigation
        sections={ACCOUNT_TERMS_SECTIONS}
        activeSectionId={activeSectionId}
        onSelectSection={handleSelectSection}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LegalDocumentHeader
          title="Account Terms"
          subtitle="Important information about creating and using your CV YAM account."
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          documentType="account-terms"
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

        <div className="flex items-start gap-10 lg:gap-14">
          <LegalTableOfContents
            sections={ACCOUNT_TERMS_SECTIONS}
            activeSectionId={activeSectionId}
            onSelectSection={handleSelectSection}
          />

          <article className="flex-1 min-w-0 max-w-4xl bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-xs">
            <div className="mb-8 p-4 rounded-xl bg-[#E3F2FD]/50 border border-[#64B5F6]/40 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
              <Cloud className="w-5 h-5 text-[#1E88E5] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">
                  Authenticated Accounts &amp; Cloud Persistence
                </p>
                <p className="mt-0.5 text-slate-600 leading-relaxed">
                  Creating an account enables remote cloud backup in {LEGAL_META.appName}, safeguarding your CVs across device reboots and reinstallations.
                </p>
              </div>
            </div>

            {filteredSections.length === 0 ? (
              <div className="py-12 text-center text-slate-500">
                <Info className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                <p className="text-base font-semibold">No sections matched your query</p>
                <p className="text-xs text-slate-400 mt-1">Try another search term like &quot;password&quot;, &quot;sync&quot;, or &quot;deletion&quot;.</p>
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
