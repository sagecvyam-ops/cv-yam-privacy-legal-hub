import { LEGAL_META } from './legalMeta';

export interface SectionContent {
  id: string;
  number: number;
  title: string;
  subsections?: {
    subtitle?: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  paragraphs?: string[];
  bullets?: string[];
  callout?: {
    type: 'info' | 'important' | 'warning';
    title: string;
    content: string;
  };
}

export const PRIVACY_POLICY_SECTIONS: SectionContent[] = [
  {
    id: 'who-we-are',
    number: 1,
    title: 'Who We Are',
    paragraphs: [
      `${LEGAL_META.appName} ("we", "us", or "our") is a digital career platform and AI-powered curriculum vitae (CV) generation service operated in the Republic of South Africa. Our mission is to empower South African and global job seekers to build, refine, format, and share professional CVs and career assets that unlock employment opportunities.`,
      `We operate the ${LEGAL_META.appName} mobile application (available on Google Play for Android devices) as well as our official web portal and supporting cloud services (collectively, the "Service"). For the purposes of South African data protection legislation, specifically the ${LEGAL_META.privacyAct}, ${LEGAL_META.appName} acts as the "responsible party" regarding personal information collected and processed directly by our Service.`,
    ],
  },
  {
    id: 'information-we-collect',
    number: 2,
    title: 'Information We Collect',
    paragraphs: [
      `To deliver high-quality CV generation, cloud backup, job matching, and account features, we collect several categories of information. We strive to collect only what is strictly necessary to fulfill the intended features and services of ${LEGAL_META.appName}.`,
      `Depending on how you use our Service—whether as a guest browsing legal documentation or as an authenticated user creating and managing cloud-backed CVs—we may collect personal information provided directly by you, information generated automatically during app usage, and data provided through integrations with third-party infrastructure.`,
    ],
    bullets: [
      'Account credentials and identity information you submit during registration and login.',
      'Curriculum vitae and professional history data entered into our CV editor forms.',
      'AI prompt parameters, skill highlights, and generated CV phrasing suggestions.',
      'Technical diagnostic metrics, device metadata, crash traces, and approximate network details.',
      'Advertising identifiers and interaction metrics delivered via our advertising partners.',
    ],
  },
  {
    id: 'account-information',
    number: 3,
    title: 'Account Information',
    paragraphs: [
      `When you register for a ${LEGAL_META.appName} account, we collect information required to authenticate your identity, secure your profile, and enable cross-device synchronization.`,
    ],
    bullets: [
      'Your email address (used as your primary account identifier, for email verification, and for account recovery).',
      'Your display name or chosen profile moniker.',
      'Authentication tokens and unique account identifiers generated through Firebase Authentication.',
      'Encrypted password credentials (when using standard email/password authentication; passwords are automatically hashed and never stored in plaintext by us).',
      'Account timestamps, including your registration date, last login timestamp, and terms acceptance history.',
    ],
  },
  {
    id: 'cv-and-career-information',
    number: 4,
    title: 'CV and Career Information',
    paragraphs: [
      `The core purpose of ${LEGAL_META.appName} is CV creation. When you build or edit a CV within the application, you may choose to input rich biographical and career details.`,
    ],
    subsections: [
      {
        subtitle: 'Personal Details & Contact Data',
        paragraphs: [
          'Full legal name, professional title, phone number, physical or residential address, city, postal code, driver\'s licence status, nationality, and links to professional portfolios or LinkedIn profiles.',
        ],
      },
      {
        subtitle: 'Work History & Employment Background',
        paragraphs: [
          'Previous employers, company names, job titles, employment start and end dates, key duties, responsibilities, workplace achievements, and career summaries.',
        ],
      },
      {
        subtitle: 'Education, Qualifications & Certifications',
        paragraphs: [
          'Institutions attended (schools, colleges, universities), degrees or diplomas obtained, field of study, graduation years, matric results or academic honors, and vocational credentials.',
        ],
      },
      {
        subtitle: 'Skills, Languages & References',
        paragraphs: [
          'Technical proficiencies, soft skills, languages spoken, professional memberships, and contact details for character or professional referees.',
        ],
      },
    ],
  },
  {
    id: 'generated-cv-content',
    number: 5,
    title: 'Generated CV Content',
    paragraphs: [
      `When you utilize ${LEGAL_META.appName}'s AI-assisted tools—such as generating a professional summary, rewriting duty bullet points, or tailoring your achievements—our application processes your draft inputs and receives generated responses.`,
      `Both the input snippets you provide for generation and the resulting text suggestions produced by our AI backend are saved with your CV drafts so that you can edit, accept, decline, or export them at your discretion.`,
    ],
  },
  {
    id: 'technical-and-security-information',
    number: 6,
    title: 'Technical and Security Information',
    paragraphs: [
      `When you access our application or website, our systems automatically collect technical diagnostic information to ensure stability, prevent abuse, and safeguard system integrity:`,
    ],
    bullets: [
      'Device model, manufacturer, operating system version (e.g., Android release level), and device hardware specifications.',
      'Internet Protocol (IP) address and generalized geographic region (such as city or province, derived from IP address).',
      'Application session timestamps, feature navigation flows, and response times.',
      'Crash logs, stack traces, and unhandled exception data to diagnose software errors.',
    ],
  },
  {
    id: 'advertising-information',
    number: 7,
    title: 'Advertising Information',
    paragraphs: [
      `${LEGAL_META.appName} utilizes Google AdMob to display advertisements within our free mobile application tier. To serve ads, Google AdMob and its advertising partners may collect and process device advertising identifiers (such as the Google Advertising ID or AAID), IP address, and general ad view and click telemetry.`,
      `You may control or reset your advertising identifier and opt out of personalized advertisements at any time via your Android device\'s Google Settings (under Settings > Google > Ads).`,
    ],
  },
  {
    id: 'how-we-use-your-information',
    number: 8,
    title: 'How We Use Your Information',
    paragraphs: [
      `We process your personal information strictly for legitimate purposes connected directly to the operation of ${LEGAL_META.appName}:`,
    ],
    bullets: [
      'Account Management: To create, authenticate, maintain, and verify your user profile.',
      'CV Construction & Formatting: To structure, render, preview, and export high-resolution PDF and printable CV documents.',
      'Remote Storage & Sync: To securely store your CV data on cloud infrastructure so your records persist when switching or resetting devices.',
      'AI-Powered Writing Assistance: To formulate tailored summaries, bullet points, and skills recommendations upon your request.',
      'Job Matching & Discovery: To evaluate your career skills and recommend relevant job vacancies in South Africa.',
      'Customer Support: To respond to your inquiries, password resets, bug reports, and privacy rights requests.',
      'Security & Fraud Prevention: To monitor against brute-force attacks, unauthorized account takeovers, and Terms violations.',
      'Legal Compliance: To fulfill our obligations under applicable South African laws, including POPIA.',
    ],
  },
  {
    id: 'storage-of-your-cvs',
    number: 9,
    title: 'Storage of Your CVs',
    callout: {
      type: 'important',
      title: 'Updated Architecture: Remote Cloud Storage for Authenticated Accounts',
      content: 'In earlier versions of CV YAM, CV documents were solely saved locally on the user\'s mobile device. Under our current architecture, authenticated users have their CV data saved remotely on secure cloud infrastructure (Cloud Firestore and backend storage). This allows you to log in on any device, recover your CVs after app reinstallations, and keep your documents synchronized across sessions.',
    },
    paragraphs: [
      `When you create an account and save a CV in ${LEGAL_META.appName}, your CV data is transmitted via encrypted HTTPS/TLS connections to our secure cloud database infrastructure.`,
      `Guest users who have not registered or signed in may experience temporary local device cache retention; however, account creation is required for remote cloud backup, cross-device recovery, and extended account synchronization.`,
      `You retain complete ownership over your CV information at all times. You can edit, modify, replace, or delete any of your saved CVs directly within the application at any point.`,
    ],
  },
  {
    id: 'ai-powered-features',
    number: 10,
    title: 'AI-Powered Features',
    paragraphs: [
      `${LEGAL_META.appName} provides optional AI-assisted career tools to help job applicants overcome writer\'s block, draft persuasive profile statements, and format job responsibilities.`,
      `Our backend routes your prompt requests to OpenAI\'s enterprise API infrastructure to process natural language generation. We send only the prompt text and relevant context snippets (e.g., job title, company name, bullet draft) needed to generate the requested output.`,
      `In accordance with enterprise API policies, data submitted through our commercial API integrations is not used by our AI providers to train foundational public models. We do not use your private CV contact information for automated public profiling.`,
      `You are always in control: AI output is provided solely as a suggestion. You must review, verify, and approve all AI-generated content before finalizing or sharing your CV with prospective employers.`,
    ],
  },
  {
    id: 'job-matching',
    number: 11,
    title: 'Job Matching',
    paragraphs: [
      `${LEGAL_META.appName} may provide job search and matching functionality to connect South African candidates with employment opportunities.`,
      `When you engage with job-matching features, our algorithm compares the skills, education, experience levels, and preferred locations indicated in your CV against aggregated vacancy listings supplied by job data providers.`,
      `We do not sell your CV directly to recruiters or distribute your contact details to third-party hiring managers without your affirmative instruction or direct application action.`,
    ],
  },
  {
    id: 'third-party-service-providers',
    number: 12,
    title: 'Third-Party Service Providers',
    paragraphs: [
      `We partner with trusted third-party service providers who assist us in operating our platform, infrastructure, and user communications. Each provider is granted access only to the data strictly necessary for their specific function and is bound by contractual data protection duties:`,
    ],
    bullets: [
      'Firebase Authentication (Google Identity): Provides secure user registration, token validation, and password credential authentication.',
      'Cloud Firestore & Google Cloud Infrastructure: Provides managed, highly available remote database and cloud storage for user profiles and CV documents.',
      'OpenAI API: Powers backend AI content suggestions and professional text refinement.',
      'Google AdMob: Serves mobile in-app advertisements and manages ad frequency capping.',
      'Transactional Email Infrastructure: Delivers account activation emails, password reset links, and critical security notices.',
      'Job Data Aggregators: Feeds public and partner employment listings for in-app career search.',
    ],
  },
  {
    id: 'international-transfers',
    number: 13,
    title: 'International Transfers',
    paragraphs: [
      `${LEGAL_META.appName} is operated from South Africa. However, our third-party infrastructure providers (such as Google Cloud, Firebase, and OpenAI) operate server facilities and data centers in multiple international jurisdictions, including Europe and the United States.`,
      `Where personal information is transferred outside of the Republic of South Africa, we ensure compliance with Section 72 of the Protection of Personal Information Act (POPIA). We verify that the recipient is subject to a law, binding corporate rules, or agreement that provides an adequate level of protection upholding principles substantially similar to POPIA.`,
    ],
  },
  {
    id: 'data-security',
    number: 14,
    title: 'Data Security',
    paragraphs: [
      `We implement robust, industry-standard administrative, physical, and technical safeguards designed to protect personal information against unauthorized access, loss, alteration, or misuse.`,
    ],
    bullets: [
      'Transport Layer Security (TLS/HTTPS): All network traffic between the CV YAM client application, our backend APIs, and database endpoints is encrypted in transit.',
      'Authentication Token Protection: Sensitive account sessions use secure, expiring OAuth tokens rather than storing static passwords.',
      'Granular Database Security Rules: User database records in Cloud Firestore are protected by strict access rules ensuring users can only read and write their own documents.',
      'Minimal Access Controls: Administrative access to production databases and backend configuration is restricted to authorized engineers on a least-privilege basis.',
    ],
    callout: {
      type: 'info',
      title: 'Security Responsibility',
      content: 'While we employ diligent security measures, no electronic transmission over the internet or cloud storage system can guarantee absolute invulnerability. You are responsible for safeguarding your device passcode and login credentials.',
    },
  },
  {
    id: 'data-retention',
    number: 15,
    title: 'Data Retention',
    paragraphs: [
      `We retain your personal information, saved CVs, and account records for as long as your ${LEGAL_META.appName} account remains active or as needed to provide our services.`,
      `If your account remains inactive for an extended period, or if you request account closure, we will initiate our data deletion workflow. We may retain minimal anonymized telemetry data or records required to satisfy statutory tax, audit, or legal dispute defense requirements under South African law.`,
    ],
  },
  {
    id: 'account-deletion',
    number: 16,
    title: 'Account Deletion',
    paragraphs: [
      `You possess the unequivocal right to delete your ${LEGAL_META.appName} account and all associated CV data at any time.`,
    ],
    subsections: [
      {
        subtitle: 'In-App Account Deletion',
        paragraphs: [
          'You may delete your account directly inside the CV YAM Android application by navigating to Account Settings > Security > Delete Account and confirming the prompt.',
        ],
      },
      {
        subtitle: 'Email Request',
        paragraphs: [
          `Alternatively, you may submit a deletion request by emailing us at ${LEGAL_META.contactEmail} from your registered account email address with the subject line "Account Deletion Request". We process verified deletion requests promptly within 30 days.`,
        ],
      },
      {
        subtitle: 'Consequences of Deletion',
        paragraphs: [
          'Deleting your account permanently removes your profile, authentication credentials, and all remote cloud-stored CV records. This action is irreversible. We recommend exporting any completed CVs to PDF before submitting a deletion request.',
        ],
      },
    ],
  },
  {
    id: 'your-privacy-rights',
    number: 17,
    title: 'Your Privacy Rights',
    paragraphs: [
      `Under applicable data protection laws, you enjoy specific enforceable rights regarding your personal information:`,
    ],
    bullets: [
      'Right of Access: You may request confirmation of whether we hold personal information about you, and request a copy of those records.',
      'Right to Rectification: You may request the correction or update of inaccurate, incomplete, misleading, or outdated personal information.',
      'Right to Erasure (Deletion): You may request the deletion of your personal data where we are no longer authorized to retain it.',
      'Right to Object: You may object on reasonable grounds to the processing of your personal information, subject to statutory exceptions.',
      'Right to Withdraw Consent: Where processing relies on your consent, you may withdraw that consent at any time without affecting lawful prior processing.',
    ],
  },
  {
    id: 'popia',
    number: 18,
    title: 'Protection of Personal Information Act (POPIA)',
    callout: {
      type: 'info',
      title: 'South African Regulatory Framework',
      content: 'This policy is prepared in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA) of South Africa. CV YAM commits to processing personal data in line with the eight statutory conditions for lawful processing.',
    },
    paragraphs: [
      `${LEGAL_META.appName} processes personal information as a responsible party in full recognition of the lawful processing conditions set out in Chapter 3 of POPIA: Accountability, Processing Limitation, Purpose Specification, Further Processing Limitation, Information Quality, Openness, Security Safeguards, and Data Subject Participation.`,
      `If you believe that ${LEGAL_META.appName} has processed your personal information in violation of POPIA, we encourage you to contact our team first at ${LEGAL_META.contactEmail} so we can investigate and address your concerns immediately.`,
      `You also have the statutory right to lodge a complaint directly with the Information Regulator of South Africa:`,
    ],
    subsections: [
      {
        subtitle: 'The Information Regulator (South Africa) Contact Information',
        paragraphs: [
          `Physical Address: ${LEGAL_META.informationRegulator.physicalAddress}`,
          `Postal Address: ${LEGAL_META.informationRegulator.postalAddress}`,
          `Complaints Email: ${LEGAL_META.informationRegulator.emailComplaints}`,
          `General Enquiries: ${LEGAL_META.informationRegulator.emailGeneral}`,
          `Official Website: ${LEGAL_META.informationRegulator.website}`,
        ],
      },
    ],
  },
  {
    id: 'childrens-privacy',
    number: 19,
    title: 'Children\'s Privacy',
    paragraphs: [
      `${LEGAL_META.appName} is designed for high school leavers, tertiary students, and adult career seekers seeking formal employment. Our Service is not directed toward children under 16 years of age.`,
      `We do not knowingly collect personal information from individuals under the age of 16 without appropriate parental or legal guardian consent. If we discover that a child under 16 has submitted personal information to our platform without verifiable consent, we will take immediate steps to delete the information and terminate the associated account.`,
    ],
  },
  {
    id: 'advertising',
    number: 20,
    title: 'Advertising and Ad Networks',
    paragraphs: [
      `To sustain free access to our CV building utilities, ${LEGAL_META.appName} features mobile advertising served by Google AdMob.`,
      `Depending on your device configurations and regional permissions, advertisements may be customized or non-personalized. Non-personalized ads do not use third-party user tracking profiles; however, they may still rely on contextual parameters such as coarse location, device type, and app content.`,
      `We do not sell your CV content, employment history, or reference contact details to advertisers.`,
    ],
  },
  {
    id: 'analytics-and-crash-reporting',
    number: 21,
    title: 'Analytics and Crash Reporting',
    paragraphs: [
      `To ensure our Android application functions reliably across thousands of varied mobile device models, we utilize diagnostic logging tools including Firebase Crashlytics.`,
      `These tools capture aggregated technical telemetry when an error or freeze occurs, including device memory state, OS version, application build number, and the line of code that triggered the fault. This data is utilized exclusively for software maintenance and performance optimization.`,
    ],
  },
  {
    id: 'cookies-and-similar-technologies',
    number: 22,
    title: 'Cookies and Similar Technologies',
    paragraphs: [
      `When accessing our web portal or browser-based legal pages, we use essential session cookies and browser local storage strictly necessary to:`,
    ],
    bullets: [
      'Maintain your active authentication state across page navigations.',
      'Remember your preferred interface settings, such as reading view preferences or active tabs.',
      'Safeguard against cross-site request forgery (CSRF) and other automated web exploits.',
    ],
  },
  {
    id: 'information-you-provide-about-other-people',
    number: 23,
    title: 'Information You Provide About Other People',
    paragraphs: [
      `A standard curriculum vitae frequently includes contact details for professional referees, mentors, or past managers.`,
      `Before you enter another person\'s name, phone number, email address, or position title into your ${LEGAL_META.appName} CV, you represent and warrant that you have obtained their informed consent to do so, or are otherwise legally entitled to include their information on your resume.`,
      `We process referee data solely for the purpose of printing or storing your CV and do not harvest referee details for unsolicited marketing campaigns.`,
    ],
  },
  {
    id: 'data-breaches',
    number: 24,
    title: 'Data Breaches & Incident Notification',
    paragraphs: [
      `In the unlikely event of a verified security incident resulting in unauthorized access, loss, or disclosure of personal information, ${LEGAL_META.appName} maintains an active incident response protocol.`,
      `In accordance with Section 22 of POPIA, where there are reasonable grounds to believe that personal information has been accessed or acquired by any unauthorized person, we will notify both the Information Regulator and affected data subjects as soon as reasonably possible, unless law enforcement determines that notification would impede a criminal investigation.`,
    ],
  },
  {
    id: 'changes-to-this-privacy-policy',
    number: 25,
    title: 'Changes to This Privacy Policy',
    paragraphs: [
      `We may update this Privacy Policy periodically to reflect enhancements to our CV features, adjustments to our cloud architecture, or revisions to applicable legal requirements.`,
      `When amendments are published, we will update the "Effective Date" and "Last Updated" timestamps displayed at the top of this document. For material updates affecting how your CV data is stored or processed, we will provide conspicuous notice through the CV YAM mobile application or via email.`,
      `Your continued use of ${LEGAL_META.appName} following the effective date of an updated policy signifies your acceptance of the revised terms.`,
    ],
  },
  {
    id: 'contact-us',
    number: 26,
    title: 'Contact Us',
    paragraphs: [
      `If you have questions, feedback, privacy inquiries, or wish to exercise your data subject rights under POPIA, please reach out directly to our dedicated privacy contact:`,
    ],
    subsections: [
      {
        subtitle: 'Direct Privacy & Legal Contact',
        paragraphs: [
          `${LEGAL_META.appName} Privacy & Legal Desk`,
          `Email: ${LEGAL_META.contactEmail}`,
          `Operating Region: South Africa`,
        ],
      },
    ],
  },
];
