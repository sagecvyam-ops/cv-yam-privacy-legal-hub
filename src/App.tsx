import React, { useState, useEffect } from 'react';
import { LegalLayout } from './components/LegalLayout';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { AccountTermsPage } from './pages/AccountTermsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    // Support both pathname and hash routing
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#/privacy') || hash === '#privacy') return '/privacy';
      if (hash.startsWith('#/terms') || hash === '#terms') return '/terms';
      if (hash.startsWith('#/account-terms') || hash === '#account-terms') return '/account-terms';
      if (hash.startsWith('#/contact') || hash === '#contact') return '/contact';

      const path = window.location.pathname.toLowerCase();
      if (path.startsWith('/privacy')) return '/privacy';
      if (path.startsWith('/terms')) return '/terms';
      if (path.startsWith('/account-terms')) return '/account-terms';
      if (path.startsWith('/contact')) return '/contact';
      if (path === '/legal') return '/';
    }
    return '/';
  });

  // Sync browser title and meta description on route changes
  useEffect(() => {
    let title = 'CV YAM - Legal & Privacy Portal';
    let description = 'Official Privacy Policy, Terms & Conditions, Account Terms, and POPIA privacy request portal for CV YAM South Africa.';

    switch (currentPath) {
      case '/privacy':
        title = 'CV YAM Privacy Policy';
        description = 'Learn how CV YAM collects, uses, stores, and protects your personal information.';
        break;
      case '/terms':
        title = 'CV YAM Terms & Conditions';
        description = 'Read the terms and conditions governing your use of CV YAM.';
        break;
      case '/account-terms':
        title = 'CV YAM Account Terms';
        description = 'Learn about CV YAM accounts, authentication, saved CVs, and account responsibilities.';
        break;
      case '/contact':
        title = 'Contact CV YAM';
        description = 'Contact the CV YAM team about account support, privacy requests, or general assistance.';
        break;
      default:
        title = 'CV YAM - Legal & Privacy Portal';
        description = 'Clear information about how CV YAM works, stores your CVs, and protects your data.';
        break;
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }
  }, [currentPath]);

  // Listen for browser popstate (back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (hash.startsWith('#/privacy') || path.startsWith('/privacy')) {
        setCurrentPath('/privacy');
      } else if (hash.startsWith('#/terms') || path.startsWith('/terms')) {
        setCurrentPath('/terms');
      } else if (hash.startsWith('#/account-terms') || path.startsWith('/account-terms')) {
        setCurrentPath('/account-terms');
      } else if (hash.startsWith('#/contact') || path.startsWith('/contact')) {
        setCurrentPath('/contact');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    try {
      window.history.pushState(null, '', path);
    } catch {
      // In constrained iframe environments fallback to hash
      window.location.hash = `#${path.replace('/', '')}`;
    }
  };

  const renderContent = () => {
    switch (currentPath) {
      case '/privacy':
        return <PrivacyPage />;
      case '/terms':
        return <TermsPage />;
      case '/account-terms':
        return <AccountTermsPage />;
      case '/contact':
        return <ContactPage />;
      case '/':
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <LegalLayout currentPath={currentPath} onNavigate={navigateTo}>
      {renderContent()}
    </LegalLayout>
  );
}
