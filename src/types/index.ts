export type ExamMode = 'ALL' | 'UPSC' | 'UPPSC';

export type ClaimType = 'FACT' | 'ANALYSIS' | 'INTERPRETATION' | 'OPINION' | 'CONTROVERSIAL CLAIM' | 'SOURCE-ATTRIBUTED CLAIM';

export interface OfficialSource {
  title: string;
  organization: string;
  url: string;
  publicationDate: string;
  lastVerified: string;
  status: 'official' | 'statutory' | 'academic' | 'verified_secondary';
}

export interface TopicItem {
  id: string;
  title: string;
  category: 'Constitution' | 'Polity' | 'Governance' | 'Social Justice' | 'International Relations';
  subtopic: string;
  examRelevance: ('UPSC' | 'UPPSC' | 'State PSC')[];
  examSpecificNotes?: {
    upsc?: string;
    uppsc?: string;
  };
  summary: string;
  staticContent: string;
  easyExplanation: string;
  advancedAnalysis: string;
  constitutionalBasis: { article: string; title: string; provision: string }[];
  laws: string[];
  judgments: { name: string; year: number; citation?: string; principle: string; relevance: string }[];
  committees: { name: string; year: number; chair?: string; recommendations: string[] }[];
  reports: { name: string; publisher: string; year: number; keyFindings: string }[];
  schemes: string[];
  currentAffairsIds: string[];
  prelimsFacts: string[];
  mainsPointers: string[];
  examples: { title: string; description: string; source: string; upRelevance?: boolean }[];
  sources: OfficialSource[];
  lastVerified: string;
  claimType: ClaimType;
}

export interface ConstitutionArticle {
  articleNumber: string; // e.g. "14", "21", "368"
  part: string;
  chapter?: string;
  subject: string;
  originalTextExtract: string;
  simpleExplanation: string;
  constitutionalContext: string;
  relatedArticles: string[];
  importantAmendments: string[];
  landmarkCases: string[];
  currentRelevance: string;
  pyqs: string[];
  prelimsFacts: string[];
  mainsQuestions: string[];
  revisionTips: string;
  source: string;
}

export interface ConstitutionalAmendment {
  amendmentNumber: string;
  year: number;
  title: string;
  subject?: string;
  provisionsChanged: string[];
  reasonAndBackground: string;
  importance: string;
  controversyOrDebate?: string;
  relatedJudgment?: string;
  prelimsFacts: string[];
  mainsRelevance: string;
  source: string;
}

export interface SupremeCourtCase {
  id: string;
  name: string;
  year: number;
  bench?: string;
  constitutionalProvisions: string[];
  issue: string;
  judgmentSummary: string;
  principleEstablished: string;
  impact: string;
  relatedCases: string[];
  gs2Relevance: string;
  prelimsFact: string;
  mainsApplication: string;
  officialSourceUrl: string;
  tags: string[];
}

export interface CurrentAffairItem {
  id: string;
  date: string;
  title: string;
  category: 
    | 'Constitution' 
    | 'Supreme Court' 
    | 'Parliament' 
    | 'Judiciary' 
    | 'Elections' 
    | 'Governance' 
    | 'Welfare Schemes' 
    | 'Health' 
    | 'Education' 
    | 'Poverty' 
    | 'E-Governance' 
    | 'Civil Services' 
    | 'Neighbourhood' 
    | 'Bilateral Relations' 
    | 'International Organisations' 
    | 'Agreements';
  summary: string;
  background: string;
  whyImportant: string;
  staticTopics: string[];
  constitutionalLinks: string[];
  prelimsPoints: string[];
  mainsPoints: string[];
  possibleQuestions: {
    prelims: string;
    mains: string;
  };
  sources: OfficialSource[];
  lastVerified: string;
  upRelevance?: string;
}

export interface PrelimsQuestion {
  id: string;
  exam: 'UPSC' | 'UPPSC' | 'State PSC';
  year?: number;
  isPYQ: boolean;
  paper: 'GS-1 (Polity & Governance)';
  topic: string;
  subtopic: string;
  questionType: 'single_choice' | 'multiple_statement' | 'assertion_reason' | 'match_pairs';
  questionText: string;
  statements?: string[];
  pairs?: { itemA: string; itemB: string }[];
  assertion?: string;
  reason?: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  officialSource: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  conceptsTested: string[];
  syllabusTag: string;
  examSpecificTag: 'COMMON' | 'UPSC_ONLY' | 'UPPSC_ONLY';
}

export interface MainsQuestion {
  id: string;
  exam: 'UPSC' | 'UPPSC' | 'State PSC';
  year?: number;
  isPYQ: boolean;
  paper: 'GS-II';
  marks: 10 | 12 | 15 | 20;
  targetWords: 125 | 150 | 200 | 250;
  topic: string;
  subtopic: string;
  questionText: string;
  modelStructure: {
    introduction: string;
    coreArgument: string[];
    constitutionalLegalBasis: string[];
    issues: string[];
    stakeholders: string[];
    challenges: string[];
    governmentMeasures: string[];
    wayForward: string[];
    conclusion: string;
  };
  enrichmentKit: {
    articles: string[];
    cases: string[];
    committees: string[];
    reports: string[];
    schemes: string[];
    statistics: string[];
    sdgs: string[];
    keywords: string[];
  };
  examSpecificTag: 'COMMON' | 'UPSC_ONLY' | 'UPPSC_ONLY';
}

export interface CommitteeItem {
  id: string;
  name: string;
  year: number;
  chairperson: string;
  ministryOrOrg: string;
  purpose: string;
  majorRecommendations: string[];
  status: 'Accepted' | 'Partially Accepted' | 'Under Consideration';
  currentRelevance: string;
  relatedSyllabusTopic: string;
  pyqReference: string;
  officialSource: string;
}

export interface ReportItem {
  id: string;
  title: string;
  publisher: string;
  year: number;
  purpose: string;
  majorFindings: string[];
  indiaSpecificData: string;
  gs2Relevance: string;
  officialUrl: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  sector: 'Governance' | 'Health' | 'Education' | 'Local Government' | 'Digital Governance' | 'Social Justice' | 'Civil Services' | 'Federalism' | 'International Relations';
  location: string;
  problem: string;
  intervention: string;
  institution: string;
  outcome: string;
  lesson: string;
  source: string;
  upSpecific?: boolean;
}

export interface WelfareScheme {
  id: string;
  name: string;
  shortName: string;
  ministry: string;
  launchYear: number;
  objective: string;
  targetGroup: string;
  benefits: string;
  eligibility: string[];
  implementationMechanism: string;
  fundingPattern: string; // e.g., "100% Central Sector" or "60:40 Centrally Sponsored"
  centreStateRole: string;
  recentChanges: string;
  challenges: string[];
  evaluation: string;
  officialSourceUrl: string;
  prelimsPoints: string[];
  mainsPoints: string[];
  isUPSCSpecific?: boolean;
  isUPPSCSpecific?: boolean;
}

export interface CountryRelationship {
  id: string;
  country: string;
  region: 'Neighbourhood' | 'Major Power' | 'Indo-Pacific' | 'West Asia' | 'Europe' | 'Global South';
  flag: string;
  historicalBackground: string;
  politicalRelations: string;
  economicAndTrade: string;
  defenceAndSecurity: string;
  borderOrMaritimeIssues?: string;
  waterOrEnergyCooperation?: string;
  diasporaProfile: string;
  multilateralCooperation: string[];
  recentDevelopments: string;
  strategicChallenges: string[];
  opportunities: string[];
  keyAgreements: string[];
  pyqs: string[];
  officialSource: string;
}

export interface RegionalGrouping {
  id: string;
  name: string;
  acronym: string;
  originYear: number;
  headquarters: string;
  memberCountries: string[];
  purpose: string;
  structure: string;
  indiaRole: string;
  indiaInterests: string[];
  recentDevelopments: string;
  challenges: string[];
  futureRelevance: string;
  officialSource: string;
}

export interface GlobalInstitution {
  id: string;
  name: string;
  acronym: string;
  establishedYear: number;
  headquarters: string;
  membersCount: string;
  mandate: string;
  structureAndVoting: string;
  indiaRole: string;
  reformDemands: string;
  recentDevelopments: string;
  challenges: string[];
  pyqs: string[];
  officialSource: string;
}

export interface InternationalAgreement {
  id: string;
  agreementName: string;
  year: number;
  participatingCountriesOrOrg: string;
  purpose: string;
  indiaInvolvement: string;
  strategicSignificance: string;
  economicRelevance: string;
  securityRelevance: string;
  environmentalRelevance?: string;
  currentStatus: string;
  officialSource: string;
}

export interface BookResource {
  id: string;
  title: string;
  author: string;
  publisher: string;
  editionOrYear: string;
  category: 'Constitution' | 'Polity' | 'Governance' | 'Social Justice' | 'International Relations' | 'Current Affairs' | 'UPPSC' | 'Answer Writing';
  topicCoverage: string;
  level: 'Foundational' | 'Standard' | 'Advanced' | 'Official Document';
  examRelevance: string;
  suggestedUse: string;
  keyChapters: string[];
  officialOrLegitimateLink: string;
  isOpenAccess: boolean;
  notes: string;
}

export interface FlashcardItem {
  id: string;
  type: 'prelims' | 'mains';
  category: string;
  subtopic: string;
  front: string;
  back: {
    corePoint: string;
    details: string[];
    constitutionalBasis?: string;
    exampleOrCase?: string;
  };
}

export interface ComparativeConstitutionalEntry {
  country: string;
  system: string;
  executive: string;
  legislature: string;
  judiciary: string;
  federalism: string;
  billOfRights: string;
  amendmentProcedure: string;
  judicialReview: string;
  keyComparisonWithIndia: string;
}
