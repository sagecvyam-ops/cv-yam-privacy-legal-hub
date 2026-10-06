import React, { useState } from 'react';
import { Menu, X, FileText, Shield, UserCheck, Mail, Sparkles, ExternalLink } from 'lucide-react';
import { LEGAL_META } from '../data/legalMeta';

interface LegalHeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const LegalHeader: React.FC<LegalHeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/', icon: Sparkles },
    { label: 'Privacy', path: '/privacy', icon: Shield },
    { label: 'Terms', path: '/terms', icon: FileText },
    { label: 'Account Terms', path: '/account-terms', icon: UserCheck },
    { label: 'Contact', path: '/contact', icon: Mail },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path: string) => {
    if (path === '/' && (currentPath === '/' || currentPath === '/legal')) return true;
    return currentPath === path;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3 text-left group focus-visible:outline-2 focus-visible:outline-[#1E88E5] focus-visible:outline-offset-4 rounded-lg cursor-pointer"
            aria-label="CV YAM Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#1E88E5] to-[#64B5F6] flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform">
              CY
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-[#1E88E5] transition-colors">
                  {LEGAL_META.appName}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                  Legal
                </span>
              </div>
              <p className="text-xs text-slate-600 hidden sm:block">
                South Africa · AI CV Builder
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                    active
                      ? 'text-[#1E88E5] bg-[#E3F2FD] font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="h-4 w-px bg-slate-200 mx-2" aria-hidden="true" />
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#1E88E5] px-2.5 py-1.5 rounded-md hover:bg-slate-50 transition-colors"
            >
              <span>Get Android App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-[#1E88E5]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const Icon = link.icon;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-lg text-left text-base font-medium transition-colors cursor-pointer ${
                    active
                      ? 'text-[#1E88E5] bg-[#E3F2FD] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${active ? 'text-[#1E88E5]' : 'text-slate-600'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <span>Official Legal Documentation</span>
            <span className="font-medium text-slate-700">Republic of South Africa</span>
          </div>
        </div>
      )}
    </header>
  );
};
