import { LEGAL_META } from './legalMeta';
import { SectionContent } from './privacyPolicyData';

export const ACCOUNT_TERMS_SECTIONS: SectionContent[] = [
  {
    id: 'account-overview',
    number: 1,
    title: 'Account Overview & Scope',
    paragraphs: [
      `These Account Terms govern your registration, credential maintenance, and usage of authenticated user accounts on ${LEGAL_META.appName} across our Android mobile application and web ecosystem.`,
      `By registering for, logging into, or maintaining an account with ${LEGAL_META.appName}, you agree to these Account Terms in addition to our general Terms & Conditions and Privacy Policy. If you do not agree to these terms, you should not register for an account and may only use guest features where available.`,
    ],
  },
  {
    id: 'creating-an-account',
    number: 2,
    title: 'Creating an Account & Eligibility',
    paragraphs: [
      `To create an account with ${LEGAL_META.appName}, you must provide a valid, active email address and choose a secure password or authenticate through supported identity providers.`,
      `You must be at least 16 years of age to establish an account. You represent and warrant that all registration details you submit are truthful, accurate, and up to date, and that you will maintain the accuracy of such information.`,
      `Each individual user is permitted to maintain one personal active account unless specifically authorized by ${LEGAL_META.appName} in writing. Creating multiple automated or spam accounts is strictly prohibited.`,
    ],
  },
  {
    id: 'authentication-and-passwords',
    number: 3,
    title: 'Authentication & Credential Security',
    paragraphs: [
      `Authentication on ${LEGAL_META.appName} is powered by Firebase Authentication. We enforce standard password complexity thresholds to protect your profile.`,
      `You are solely responsible for maintaining the confidentiality of your login credentials, including your password and email access. You must not disclose your password to any third party or permit others to access the Service through your account.`,
      `If you suspect that your account has been compromised or that unauthorized access has occurred, you must change your password immediately and notify us at ${LEGAL_META.contactEmail}.`,
    ],
  },
  {
    id: 'saving-cvs-and-remote-storage',
    number: 4,
    title: 'Saving CVs & Remote Cloud Storage',
    callout: {
      type: 'important',
      title: 'Cloud Persistence for Authenticated Users',
      content: 'Unlike guest mode or legacy local-only versions of CV YAM, registering an account enables cloud persistence. Your CV profiles, sections, job history, and tailored resumes are transmitted and stored on our remote cloud infrastructure (Cloud Firestore).',
    },
    paragraphs: [
      `When you are logged in, any CV created or modified in ${LEGAL_META.appName} is automatically or manually synchronized with your cloud profile. This guarantees that if you lose your phone, switch to a new Android device, or clear your app cache, your CVs remain intact and recoverable.`,
      `You retain full copyright and ownership of all CV content you create. You can edit, duplicate, download as PDF, or delete your cloud-stored CVs at any time.`,
    ],
  },
  {
    id: 'device-synchronization',
    number: 5,
    title: 'Cross-Device Access & Synchronization',
    paragraphs: [
      `Your ${LEGAL_META.appName} account allows you to seamlessly transition between mobile devices and supported web portals. Changes saved in your account are reflected across devices connected to that account.`,
      `To ensure data consistency during offline periods (e.g., poor connectivity in transit), our application uses intelligent local caching. Any offline edits will sync with remote cloud storage once your device reconnects to the internet.`,
    ],
  },
  {
    id: 'ai-features-and-responsible-usage',
    number: 6,
    title: 'AI Features & Responsible Usage',
    paragraphs: [
      `Authenticated accounts receive access to ${LEGAL_META.appName}'s AI-powered CV generation utilities, powered by OpenAI API integrations. These tools assist in drafting summary statements, bullet points, skills taxonomies, and cover letter drafts.`,
      `You agree to use AI features responsibly and ethically:`,
    ],
    bullets: [
      'You will not use AI prompts to generate fraudulent credentials, fake degrees, or false certifications.',
      'You will review all AI-generated content for accuracy before sharing your CV with prospective employers or recruiters.',
      'You will not attempt prompt injections or abusive automated querying aimed at disrupting the AI infrastructure.',
    ],
  },
  {
    id: 'acceptable-use-of-account',
    number: 7,
    title: 'Acceptable Use of Account Services',
    paragraphs: [
      `Your account must be used solely for legitimate career development, job search preparation, and professional documentation purposes.`,
    ],
    bullets: [
      'No Impersonation: You may not create an account on behalf of another living person without their explicit written authorization.',
      'No Commercial Resale: You may not resell or sublease access to your ${LEGAL_META.appName} account or provide paid CV writing services using automated scripts without a commercial partnership agreement.',
      'No Malicious Activity: You may not use your account to distribute malware, probe system vulnerabilities, or engage in denial-of-service attempts.',
    ],
  },
  {
    id: 'account-inactivity-and-lifecycle',
    number: 8,
    title: 'Account Inactivity & Data Lifecycle',
    paragraphs: [
      `To maintain system performance and protect user privacy, accounts that remain completely inactive (no logins or API interactions) for a continuous period of 24 months may be designated as dormant.`,
      `Before marking an account dormant or scheduling associated CV cloud storage for purge, we will attempt to send warning notices to your registered email address giving you at least 30 days to log in and preserve your data.`,
    ],
  },
  {
    id: 'account-suspension-and-termination',
    number: 9,
    title: 'Account Suspension & Termination',
    paragraphs: [
      `We reserve the right to suspend or terminate your account with immediate effect, without notice or liability, if we determine in our reasonable discretion that:`,
    ],
    bullets: [
      'You have breached these Account Terms, our Terms & Conditions, or applicable South African laws.',
      'Your account activity poses a security risk or operational threat to other users or our infrastructure.',
      'We are required to take action under law enforcement, judicial, or regulatory directives.',
    ],
  },
  {
    id: 'account-deletion-and-data-removal',
    number: 10,
    title: 'Account Deletion & Data Removal',
    paragraphs: [
      `You can delete your account at any time without fees or penalties. You may initiate deletion directly through the CV YAM Android app under Account Settings > Security > Delete Account, or by emailing ${LEGAL_META.contactEmail}.`,
      `Upon deletion confirmation, your authentication record is removed and all CV documents stored in our remote cloud database are permanently erased. This action cannot be reversed.`,
    ],
  },
  {
    id: 'user-responsibilities-and-warranties',
    number: 11,
    title: 'User Responsibilities & Warranties',
    paragraphs: [
      `As an account holder, you expressly warrant that:`,
    ],
    bullets: [
      'You have the legal authority to create this account and submit the personal information provided.',
      'You have obtained consent from any referees or third parties whose contact details are saved in your CVs.',
      'You will maintain backups (PDF downloads) of essential CV documents on your own personal storage devices.',
      'You understand that CV YAM does not guarantee employment outcomes or hiring decisions.',
    ],
  },
  {
    id: 'changes-and-contact',
    number: 12,
    title: 'Changes to Account Terms & Support',
    paragraphs: [
      `We may update these Account Terms to reflect updates to our cloud sync architecture, authentication providers, or regulatory developments. When updates are published, we will update the date at the top of this page.`,
      `For any questions, account recovery inquiries, or password support, please contact our support team at ${LEGAL_META.contactEmail}.`,
    ],
  },
];
