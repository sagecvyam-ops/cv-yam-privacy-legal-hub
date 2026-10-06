import React from 'react';

export interface ConsentNoticeProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  onNavigate?: (path: string) => void;
  showError?: boolean;
  errorMessage?: string;
  className?: string;
  compact?: boolean;
}

/**
 * Reusable legal-consent component for CV YAM registration & account creation flows.
 * Displays unchecked agreement checkbox with active clickable links to Terms and Privacy Policy.
 */
export const ConsentNotice: React.FC<ConsentNoticeProps> = ({
  checked,
  onChange,
  onNavigate,
  showError = false,
  errorMessage = 'Please agree to the Terms & Conditions and acknowledge the Privacy Policy to continue.',
  className = '',
  compact = false,
}) => {
  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.stopPropagation();
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <div className={`transition-all ${className}`}>
      <label
        htmlFor="cv-yam-consent-checkbox"
        className={`flex items-start gap-3 select-none cursor-pointer p-3 rounded-xl border transition-colors ${
          showError
            ? 'bg-red-50/60 border-red-300'
            : checked
            ? 'bg-[#E3F2FD]/40 border-[#64B5F6]/60'
            : 'bg-white border-slate-200 hover:border-slate-300'
        }`}
      >
        <div className="relative flex items-center justify-center mt-0.5">
          <input
            id="cv-yam-consent-checkbox"
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 text-[#1E88E5] focus:ring-[#1E88E5] focus:ring-offset-1 focus:ring-2 cursor-pointer transition-all"
            aria-describedby={showError ? 'cv-yam-consent-error' : undefined}
          />
        </div>

        <div className={`leading-relaxed text-slate-700 ${compact ? 'text-xs' : 'text-sm'}`}>
          <span>I agree to the </span>
          <a
            href="/terms"
            onClick={(e) => handleLinkClick(e, '/terms')}
            className="font-semibold text-[#1E88E5] hover:text-[#0D47A1] hover:underline underline-offset-2 transition-colors cursor-pointer"
          >
            CV YAM Terms &amp; Conditions
          </a>
          <span> and acknowledge the </span>
          <a
            href="/privacy"
            onClick={(e) => handleLinkClick(e, '/privacy')}
            className="font-semibold text-[#1E88E5] hover:text-[#0D47A1] hover:underline underline-offset-2 transition-colors cursor-pointer"
          >
            Privacy Policy
          </a>
          <span>.</span>
        </div>
      </label>

      {showError && (
        <p
          id="cv-yam-consent-error"
          className="mt-1.5 text-xs font-medium text-[#D32F2F] flex items-center gap-1.5"
          role="alert"
        >
          <span className="w-1 h-1 rounded-full bg-[#D32F2F]" />
          <span>{errorMessage}</span>
        </p>
      )}
    </div>
  );
};
