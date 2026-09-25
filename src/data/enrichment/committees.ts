import { CommitteeItem } from '../../types';

export const COMMITTEES_DATABASE: CommitteeItem[] = [
  {
    id: 'comm-2nd-arc',
    name: 'Second Administrative Reforms Commission (2nd ARC)',
    year: 2005,
    chairperson: 'M. Veerappa Moily (succeeded by V. Ramachandran)',
    ministryOrOrg: 'Department of Administrative Reforms and Public Grievances (DARPG)',
    purpose: 'Suggest a comprehensive blueprint for revamping the public administration system to achieve a proactive, responsive, accountable, sustainable and efficient governance architecture at all levels.',
    majorRecommendations: [
      'Report 1 (Right to Information): Repeal the Official Secrets Act 1923; insert chapter on official secrecy in National Security Act; proactive disclosure under Section 4.',
      'Report 4 (Ethics in Governance): Statutory code of ethics for civil servants, MPs, and ministers; National Ombudsman (Lokpal) and State Lokayuktas with independent investigation wings; fast-track corruption trials.',
      'Report 6 (Local Governance): Devolution of 3Fs (Functions, Funds, Functionaries); establishment of Ombudsman for local bodies; active Gram Sabhas.',
      'Report 10 (Refurbishing Personnel Administration): Modernize civil services; open lateral entry at senior levels; replace ACR with comprehensive performance evaluation; fix minimum tenure for senior posts.',
      'Report 12 (Citizen-Centric Administration): Universalize the Sevottam model; make Citizen Charters justiciable through Public Service Guarantee Acts; simplify administrative procedures.'
    ],
    status: 'Partially Accepted',
    currentRelevance: 'The foundational benchmark for any GS-II Mains answer on governance, public administration ethics, administrative accountability, and civil service reforms.',
    relatedSyllabusTopic: 'Governance, Civil Services, Accountability, and E-Governance',
    pyqReference: 'UPSC CSE Mains 2016, 2019, 2021 frequently demand specific 2nd ARC recommendations.',
    officialSource: 'https://darpg.gov.in/arc-reports'
  },
  {
    id: 'comm-sarkaria',
    name: 'Sarkaria Commission on Centre-State Relations',
    year: 1983,
    chairperson: 'Justice R.S. Sarkaria',
    ministryOrOrg: 'Ministry of Home Affairs, Government of India',
    purpose: 'Examine and review the working of the existing arrangements between the Union and States in respect of powers, functions and responsibilities in all spheres and recommend measures.',
    majorRecommendations: [
      'Permanently activate the Inter-State Council under Article 263 (constituted in 1990 as a result).',
      'Article 356 (President’s Rule) must be used very sparingly, in extreme cases, as a matter of last resort when all available alternatives fail.',
      'Governor should be an eminent person outside active state politics, not belonging to the ruling party at the Centre, and appointed in consultation with the Chief Minister.',
      'National Development Council (NDC) should be activated; deployment of central armed police forces in states should ideally involve consultation.'
    ],
    status: 'Accepted',
    currentRelevance: 'Primary reference on gubernatorial discretion, Article 356 misuse, and federal conflict arbitration.',
    relatedSyllabusTopic: 'Federalism, Governor, Inter-State Relations',
    pyqReference: 'UPSC CSE Mains 2013, 2018; UPPSC Mains 2019, 2022.',
    officialSource: 'https://interstatecouncil.gov.in'
  },
  {
    id: 'comm-punchhi',
    name: 'Punchhi Commission on Centre-State Relations',
    year: 2007,
    chairperson: 'Justice M.M. Punchhi (former Chief Justice of India)',
    ministryOrOrg: 'Ministry of Home Affairs, Government of India',
    purpose: 'Review Centre-State relations in light of rapid economic liberalization, globalization, coalition politics, and internal security challenges post-Sarkaria Commission.',
    majorRecommendations: [
      'Gubernatorial Appointments and Removal: Governor should have a fixed 5-year tenure; removal should NOT be at the arbitrary pleasure of the Union Government, but via an impeachment process by the State Legislature similar to the President of India.',
      'Discretionary powers under Articles 200 and 201: Governor must decide on legislative bills within a maximum time frame of six months.',
      'Localized Emergency under Article 355: Enable Centre to intervene in specific trouble spots/districts without dismissing the entire elected State government under Art 356.',
      'Treaty-making powers (Art 253): States must be consulted before signing international treaties that impinge on subjects in the State List (e.g. WTO agriculture, water treaties).'
    ],
    status: 'Under Consideration',
    currentRelevance: 'Directly invoked in recent Supreme Court hearings on Governor delays on legislative bills (Punjab, Tamil Nadu, Kerala cases 2023-24).',
    relatedSyllabusTopic: 'Federalism, Governor’s Office, Legislative Relations',
    pyqReference: 'UPSC CSE Mains 2019, 2023.',
    officialSource: 'https://interstatecouncil.gov.in/punchhi-commission'
  },
  {
    id: 'comm-kovind-onoe',
    name: 'High-Level Committee on One Nation, One Election (ONOE)',
    year: 2023,
    chairperson: 'Ram Nath Kovind (former President of India)',
    ministryOrOrg: 'Ministry of Law and Justice',
    purpose: 'Examine the feasibility of holding simultaneous elections for Lok Sabha, State Legislative Assemblies, Municipalities, and Panchayats in India.',
    majorRecommendations: [
      'Two-step implementation: In Step 1, hold simultaneous elections for Lok Sabha and all State Legislative Assemblies. In Step 2, synchronize local body (Panchayat and Municipality) elections within 100 days of general elections.',
      'Constitutional Amendment without State Ratification: Recommended inserting Article 82A for synchronizing Lok Sabha and Assembly elections, which does not require ratification by half of the states.',
      'Common Electoral Roll: Amend Article 325 to create a single common electoral roll for all three tiers (requires state ratification).',
      'Handling hung assembly / no-confidence motion: New elections to be held only for the "unexpired term" (remnant term) of the House to preserve synchronization.'
    ],
    status: 'Accepted',
    currentRelevance: 'Approved by Union Cabinet in September 2024 for legislative tabling in Parliament.',
    relatedSyllabusTopic: 'Elections, Representation of the People, Federalism, Parliamentary Democracy',
    pyqReference: 'UPSC CSE Mains 2017, 2021 on simultaneous elections.',
    officialSource: 'https://onoe.gov.in/HLC-Report.htm'
  },
  {
    id: 'comm-kasturirangan-nep',
    name: 'Committee for Draft National Education Policy',
    year: 2017,
    chairperson: 'Dr. K. Kasturirangan',
    ministryOrOrg: 'Ministry of Education (formerly MHRD)',
    purpose: 'Draft a comprehensive new education policy suited for 21st-century India to replace the 1986 National Policy on Education.',
    majorRecommendations: [
      'Restructuring school curriculum into 5+3+3+4 design (Foundational, Preparatory, Middle, Secondary stages).',
      'Mother tongue / regional language as medium of instruction at least till Grade 5.',
      'Establishment of Higher Education Commission of India (HECI) as a single overarching umbrella regulator with 4 distinct verticals (regulation, accreditation, funding, standards).',
      'Target public education expenditure at 6% of GDP; Vocational education integration from Class 6.'
    ],
    status: 'Accepted',
    currentRelevance: 'Translating into operational execution via NIPUN Bharat, PM SHRI schools, Academic Bank of Credits (ABC), and National Curriculum Framework (NCF).',
    relatedSyllabusTopic: 'Education, Human Resource Development, Social Sector',
    pyqReference: 'UPSC CSE Mains 2020, 2022; UPPSC Mains 2021.',
    officialSource: 'https://www.education.gov.in/nep-2020'
  }
];
