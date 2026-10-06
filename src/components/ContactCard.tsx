import React from 'react';
import { LucideIcon, Mail, ArrowUpRight } from 'lucide-react';
import { LEGAL_META } from '../data/legalMeta';

interface ContactCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
  items: string[];
  emailSubject: string;
  accentColor?: string;
  onContact?: (title: string, subject: string) => void;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  title,
  description,
  icon: Icon,
  badge,
  items,
  emailSubject,
  onContact,
}) => {
  const mailtoLink = `mailto:${LEGAL_META.contactEmail}?subject=${encodeURIComponent(
    `[CV YAM] ${emailSubject}`
  )}`;

  const handleClick = (e: React.MouseEvent) => {
    if (onContact) {
      e.preventDefault();
      onContact(title, `[CV YAM] ${emailSubject}`);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#E3F2FD] text-[#1E88E5] flex items-center justify-center group-hover:scale-105 transition-transform">
            <Icon className="w-6 h-6" />
          </div>
          {badge && (
            <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {description}
        </p>

        {/* Bullet checklist */}
        <div className="border-t border-slate-100 pt-3 mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Common Inquiries:
          </p>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action email CTA */}
      <div className="pt-4 border-t border-slate-100">
        <a
          href={mailtoLink}
          onClick={handleClick}
          className="inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-[#E3F2FD] text-[#1E88E5] font-semibold text-sm border border-slate-200 hover:border-[#64B5F6] transition-all cursor-pointer group/link"
        >
          <Mail className="w-4 h-4" />
          <span>Email {title}</span>
          <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
};
