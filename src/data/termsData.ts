import { LEGAL_META } from './legalMeta';
import { SectionContent } from './privacyPolicyData';

export const TERMS_CONDITIONS_SECTIONS: SectionContent[] = [
  {
    id: 'acceptance-of-terms',
    number: 1,
    title: 'Acceptance of Terms',
    paragraphs: [
      `These Terms & Conditions ("Terms") constitute a legally binding agreement between you and ${LEGAL_META.appName} ("we", "us", or "our") concerning your access to and use of the ${LEGAL_META.appName} mobile application, web portal, API endpoints, and associated services (collectively, the "Service").`,
      `By downloading, installing, registering for, accessing, or using ${LEGAL_META.appName}, you confirm that you have read, understood, and agreed to be bound by these Terms. If you do not agree with all of these Terms, you are expressly prohibited from using the Service and must immediately discontinue use and uninstall our application.`,
    ],
  },
  {
    id: 'eligibility',
    number: 2,
    title: 'Eligibility',
    paragraphs: [
      `You must be at least 16 years of age to register for an account or use ${LEGAL_META.appName}. By accessing the Service, you represent and warrant that you meet this minimum age requirement and possess the legal capacity to enter into binding contracts under South African law.`,
      `If you are between the ages of 16 and 18, you represent that you have obtained the informed consent of a parent or legal guardian to access the Service and agree to these Terms.`,
    ],
  },
  {
    id: 'using-cv-yam',
    number: 3,
    title: 'Using CV YAM',
    paragraphs: [
      `${LEGAL_META.appName} provides a specialized software platform designed to assist users in compiling, formatting, managing, and exporting professional curriculum vitae (CV) documents, as well as providing AI-assisted phrasing, career suggestions, and job discovery tools.`,
      `We grant you a revocable, non-exclusive, non-transferable, limited license to download, install, and utilize the Service for your personal, non-commercial employment seeking and career management purposes, strictly in accordance with these Terms.`,
    ],
  },
  {
    id: 'creating-an-account',
    number: 4,
    title: 'Creating an Account',
    paragraphs: [
      `While certain basic informational pages may be accessed without registration, full utilization of CV YAM—including saving CV documents, synchronizing CVs across devices, utilizing AI content generation, and accessing remote backups—requires creating an authenticated account.`,
      `When creating an account, you must provide accurate, current, and complete information, including a valid email address. You agree to maintain and promptly update your account credentials to keep them accurate and complete at all times.`,
    ],
  },
  {
    id: 'authentication',
    number: 5,
    title: 'Authentication',
    paragraphs: [
      `Account authentication is powered through Firebase Authentication and integrated Google identity services. You may register using your email and a secure password or through supported federated authentication providers.`,
      `You acknowledge and agree that your authentication tokens are strictly personal to you. You may not share your login credentials, transfer your account, or allow any third party to access the Service through your profile.`,
    ],
  },
  {
    id: 'account-security',
    number: 6,
    title: 'Account Security',
    paragraphs: [
      `You are solely responsible for maintaining the confidentiality of your account credentials, passwords, and the devices you use to access ${LEGAL_META.appName}.`,
      `You agree to notify us immediately at ${LEGAL_META.contactEmail} upon becoming aware of any unauthorized use of your account or any other breach of security. We cannot and will not be liable for any loss or damage arising from your failure to comply with these security obligations.`,
    ],
  },
  {
    id: 'your-cv-data',
    number: 7,
    title: 'Your CV Data',
    paragraphs: [
      `You retain complete ownership, copyright, and title to all personal information, employment history, qualifications, and custom text that you submit to ${LEGAL_META.appName} ("Your CV Data").`,
      `By uploading or entering Your CV Data into the Service, you grant ${LEGAL_META.appName} a worldwide, non-exclusive, royalty-free license to host, store, reproduce, format, display, and transmit Your CV Data solely to the extent necessary to provide the Service to you (e.g., generating PDFs, rendering templates, cloud backups, and delivering AI suggestions).`,
      `You represent and warrant that you own or have obtained all necessary permissions to input all details contained in your CV, including contact information for professional referees.`,
    ],
  },
  {
    id: 'ai-generated-content',
    number: 8,
    title: 'AI-Generated Content',
    paragraphs: [
      `${LEGAL_META.appName} includes features that leverage artificial intelligence (powered by OpenAI APIs) to draft, refine, summarize, and enhance CV text and job descriptions ("AI-Generated Content").`,
      `You acknowledge and agree that AI-Generated Content is provided as suggestive assistance only. Generative AI models may occasionally produce text that is inaccurate, generic, outdated, or unsuited to your specific career experience.`,
      `It is your absolute responsibility to review, verify, edit, and fact-check all AI-Generated Content before submitting your CV to any prospective employer, recruiter, or academic institution. ${LEGAL_META.appName} disclaims all liability for employment rejections or disciplinary consequences resulting from factual inaccuracies in your CV.`,
    ],
  },
  {
    id: 'cv-storage',
    number: 9,
    title: 'CV Storage',
    callout: {
      type: 'important',
      title: 'Cloud Storage Architecture',
      content: 'By registering for an account, you acknowledge and agree that your saved CV documents are transmitted to and stored on remote cloud infrastructure (Cloud Firestore and backend servers). This enables cross-device access and remote backup.',
    },
    paragraphs: [
      `Authenticated users have their CVs backed up remotely to our secure cloud database infrastructure. While we perform reasonable operational backups and implement access safeguards, ${LEGAL_META.appName} is not an indefinite data archiving service.`,
      `We strongly encourage you to periodically download and save local copies of your CVs in standard PDF format onto your personal hardware storage.`,
    ],
  },
  {
    id: 'account-based-services',
    number: 10,
    title: 'Account-Based Services',
    paragraphs: [
      `Creating an account unlocks key functionality, including:`,
    ],
    bullets: [
      'Multi-CV Management: The ability to create, name, duplicate, and manage multiple tailored CVs simultaneously.',
      'Cloud Synchronization: Automatic synchronization of CV changes across mobile and web platforms.',
      'AI Writing Assist: Access to automated professional summary drafts, bullet generators, and skills recommendations.',
      'Job Discovery: Tailored job vacancy suggestions based on your CV profile.',
    ],
  },
  {
    id: 'acceptable-use',
    number: 11,
    title: 'Acceptable Use',
    paragraphs: [
      `You agree not to access or use the Service for any unlawful purpose or in any manner contrary to these Terms. You specifically agree not to:`,
    ],
    bullets: [
      'Submit false, fraudulent, deceptive, or misleading work history, qualifications, or identity credentials.',
      'Impersonate any person, company, educational institution, or government body.',
      'Upload malicious code, viruses, trojans, worms, or attempt unauthorized access to our backend servers or databases.',
      'Reverse engineer, decompile, disassemble, or extract the source code or proprietary prompt engineering of CV YAM.',
      'Scrape, harvest, or crawl our application or job listing feeds using automated bots, spiders, or scripts.',
      'Abuse, overwhelm, or launch denial-of-service attacks against our API infrastructure or AI provider endpoints.',
      'Use the Service to generate or circulate defamatory, abusive, harassing, hateful, or obscene materials.',
    ],
  },
  {
    id: 'third-party-services',
    number: 12,
    title: 'Third-Party Services',
    paragraphs: [
      `The Service integrates with and relies upon third-party services, including Google Firebase, Google Cloud, OpenAI, and Google AdMob. Your interactions with these third-party platforms may be governed by their respective terms of service and privacy notices.`,
      `${LEGAL_META.appName} does not control and is not liable for third-party service outages, API modifications, or policy changes enacted by external technology providers.`,
    ],
  },
  {
    id: 'service-availability',
    number: 13,
    title: 'Service Availability',
    paragraphs: [
      `We endeavor to maintain high uptime and seamless performance; however, ${LEGAL_META.appName} is provided on an "as is" and "as available" basis.`,
      `We reserve the right to temporarily modify, suspend, or discontinue parts of the Service (including specific AI features or template designs) for routine maintenance, security patching, server upgrades, or infrastructure changes without prior notice.`,
    ],
  },
  {
    id: 'account-suspension-and-termination',
    number: 14,
    title: 'Account Suspension and Termination',
    paragraphs: [
      `We reserve the right, without prejudice to any other remedies, to immediately suspend or terminate your account and refuse access to the Service if:`,
    ],
    bullets: [
      'You violate any provision of these Terms or applicable laws.',
      'You engage in abusive API usage or fraudulent activities.',
      'We are required to do so by a court order, law enforcement directive, or regulatory authority in South Africa.',
    ],
  },
  {
    id: 'account-deletion',
    number: 15,
    title: 'Account Deletion',
    paragraphs: [
      `You may delete your account at any time through the in-app settings or by contacting ${LEGAL_META.contactEmail}.`,
      `Upon deletion, your authentication records and remote cloud-stored CVs are permanently deleted from our primary databases in accordance with our Privacy Policy. Deletion is irreversible.`,
    ],
  },
  {
    id: 'intellectual-property',
    number: 16,
    title: 'Intellectual Property',
    paragraphs: [
      `All intellectual property rights in the Service—including the ${LEGAL_META.appName} name, logo, visual branding, user interface designs, software source code, proprietary algorithms, and CV graphic layout templates—belong exclusively to ${LEGAL_META.appName} and its licensors.`,
      `Nothing in these Terms grants you ownership of our platform design, software code, or templates, other than the right to use generated PDF CVs for your personal job search applications.`,
    ],
  },
  {
    id: 'no-employment-guarantee',
    number: 17,
    title: 'No Employment Guarantee',
    paragraphs: [
      `${LEGAL_META.appName} is a career productivity tool designed to help you organize and format your credentials. We do not guarantee, represent, or warrant that using our CV templates, AI generation tools, or job matching features will result in interviews, job offers, or employment placement.`,
      `Employment outcomes depend entirely on individual candidate credentials, employer hiring standards, economic market conditions, and interview performance.`,
    ],
  },
  {
    id: 'disclaimer',
    number: 18,
    title: 'Disclaimer of Warranties',
    paragraphs: [
      `TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE SOUTH AFRICAN LAW, THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE.`,
      `WE SPECIFICALLY DISCLAIM ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE ERROR-FREE, UNINTERRUPTED, OR FREE OF HARMFUL COMPONENTS.`,
    ],
  },
  {
    id: 'limitation-of-liability',
    number: 19,
    title: 'Limitation of Liability',
    paragraphs: [
      `TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW (INCLUDING THE CONSUMER PROTECTION ACT 68 OF 2008), IN NO EVENT SHALL ${LEGAL_META.appName}, ITS FOUNDERS, EMPLOYEES, CONTRACTORS, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.`,
      `THIS INCLUDES BUT IS NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR MISSED EMPLOYMENT OPPORTUNITIES ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.`,
    ],
  },
  {
    id: 'privacy',
    number: 20,
    title: 'Privacy & Data Protection',
    paragraphs: [
      `Our collection, use, and disclosure of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.`,
      `By agreeing to these Terms, you also acknowledge that you have reviewed and understand our Privacy Policy and agree to our processing of your personal information in accordance with South African law.`,
    ],
  },
  {
    id: 'changes-to-these-terms',
    number: 21,
    title: 'Changes to These Terms',
    paragraphs: [
      `We may revise and update these Terms from time to time at our sole discretion. All changes become effective immediately upon posting to the Service with an updated Effective Date.`,
      `We will notify users of material changes via prominent in-app notices or email announcements. Your continued use of ${LEGAL_META.appName} following the posting of revised Terms means that you accept and agree to the changes.`,
    ],
  },
  {
    id: 'governing-law',
    number: 22,
    title: 'Governing Law and Dispute Resolution',
    paragraphs: [
      `These Terms and any dispute or claim arising out of or in connection with them or their subject matter shall be governed by and construed in accordance with the ${LEGAL_META.governingLaw}.`,
      `You agree that the courts of the Republic of South Africa shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these Terms or your use of the Service.`,
    ],
  },
  {
    id: 'contact',
    number: 23,
    title: 'Contact Information',
    paragraphs: [
      `If you have any questions, comments, or legal concerns regarding these Terms & Conditions, please contact us at:`,
    ],
    subsections: [
      {
        subtitle: 'Legal Support Contact',
        paragraphs: [
          `${LEGAL_META.appName} Legal Desk`,
          `Email: ${LEGAL_META.contactEmail}`,
          `Region: Republic of South Africa`,
        ],
      },
    ],
  },
];
