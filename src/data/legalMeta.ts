export interface LegalMetaConfig {
  appName: string;
  tagline: string;
  effectiveDate: string;
  lastUpdated: string;
  contactEmail: string;
  playStoreUrl: string;
  jurisdiction: string;
  governingLaw: string;
  privacyAct: string;
  informationRegulator: {
    name: string;
    website: string;
    emailComplaints: string;
    emailGeneral: string;
    physicalAddress: string;
    postalAddress: string;
  };
  technicalArchitecture: {
    authentication: string;
    remoteStorage: string;
    aiProvider: string;
    adNetwork: string;
  };
}

export const LEGAL_META: LegalMetaConfig = {
  appName: 'CV YAM',
  tagline: 'Build a better CV. Build your future.',
  effectiveDate: '6 October 2026',
  lastUpdated: '6 October 2026',
  contactEmail: 'clifortramaramela@gmail.com',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kosha.cv.yam',
  jurisdiction: 'Republic of South Africa',
  governingLaw: 'Laws of the Republic of South Africa',
  privacyAct: 'Protection of Personal Information Act 4 of 2013 (POPIA)',
  informationRegulator: {
    name: 'The Information Regulator (South Africa)',
    website: 'https://inforegulator.org.za',
    emailComplaints: 'POPIAComplaints@inforegulator.org.za',
    emailGeneral: 'enquiries@inforegulator.org.za',
    physicalAddress: 'JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001',
    postalAddress: 'P.O Box 31533, Braamfontein, Johannesburg, 2017',
  },
  technicalArchitecture: {
    authentication: 'Firebase Authentication (Google Identity Services)',
    remoteStorage: 'Cloud Firestore and secure cloud storage infrastructure',
    aiProvider: 'OpenAI API services for AI-assisted CV generation and content optimization',
    adNetwork: 'Google AdMob for application advertisements',
  },
};
