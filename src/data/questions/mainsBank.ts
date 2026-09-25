import { MainsQuestion } from '../../types';

export const MAINS_QUESTIONS_BANK: MainsQuestion[] = [
  {
    id: 'mq-const-001',
    exam: 'UPSC',
    year: 2024,
    isPYQ: false,
    paper: 'GS-II',
    marks: 15,
    targetWords: 250,
    topic: 'Constitution',
    subtopic: 'Basic Structure & Constitutional Morality',
    questionText: '"The doctrine of Basic Structure has evolved from a shield protecting fundamental freedoms into a compass guiding constitutional morality in Indian governance." Critically examine this statement with reference to landmark judicial pronouncements.',
    modelStructure: {
      introduction: 'Define Basic Structure (Kesavananda Bharati 1973) as an implied limitation on Article 368 and explain Constitutional Morality (Dr. Ambedkar) as adherence to core constitutional values over majoritarian public impulses.',
      coreArgument: [
        'Shift from defensive shield (preventing authoritarian amendment of Part III) to proactive normative compass (enforcing secularism, federalism, institutional dignity).',
        'Application of constitutional morality to evaluate manifest arbitrariness in state statutes.'
      ],
      constitutionalLegalBasis: [
        'Article 368: Scope and limitations on constituent amending power.',
        'Article 13: Subjection of ordinary laws to fundamental rights.',
        'Preamble: Sovereign, Socialist, Secular, Democratic, Republic, Justice, Liberty, Equality, Fraternity.'
      ],
      issues: [
        'Accusations of "judicial overreach" and the creation of an un-elected "third chamber" of legislature.',
        'Subjectivity in defining which features belong to the basic structure without explicit textual codification.'
      ],
      stakeholders: ['Parliament', 'Judiciary', 'Union & State Executives', 'Citizens'],
      challenges: [
        'Absence of an exhaustive definition of basic structure in the Constitution.',
        'Risk of subjective judicial discretion superseding popular electoral mandates.'
      ],
      governmentMeasures: [
        'Constitutional amendments respecting basic limits (e.g. 106th CAA for women representation).',
        'Efforts to establish transparent judicial appointment frameworks (NJAC Act).'
      ],
      wayForward: [
        'Institutional dialogue between Parliament and Supreme Court rather than institutional confrontation.',
        'Anchoring constitutional morality in Constituent Assembly debates and objective constitutional principles.'
      ],
      conclusion: 'The basic structure doctrine is not an impediment to legislative change, but the constitutional gyroscope that preserves democratic republicanism across political vicissitudes.'
    },
    enrichmentKit: {
      articles: ['Article 368', 'Article 13', 'Article 14', 'Article 21'],
      cases: [
        'Kesavananda Bharati v. State of Kerala (1973)',
        'Indira Nehru Gandhi v. Raj Narain (1975)',
        'Minerva Mills v. Union of India (1980)',
        'S.R. Bommai v. Union of India (1994)',
        'Navtej Singh Johar v. UOI (2018)'
      ],
      committees: ['NCRWC (Venkatachaliah Commission 2002)'],
      reports: ['Law Commission 170th Report'],
      schemes: [],
      statistics: ['Over 106 Constitutional Amendments enacted, with only 5 amendments invalidated in part or full under basic structure.'],
      sdgs: ['SDG 16: Peace, Justice, and Strong Institutions'],
      keywords: ['Constitutionalism', 'Constitutional Morality', 'Implied Limitations', 'Judicial Review', 'Separation of Powers']
    },
    examSpecificTag: 'COMMON'
  },
  {
    id: 'mq-pol-001',
    exam: 'UPSC',
    year: 2024,
    isPYQ: false,
    paper: 'GS-II',
    marks: 10,
    targetWords: 150,
    topic: 'Polity',
    subtopic: 'Office of Governor & Federalism',
    questionText: '"The Governor’s power to withhold assent to bills under Article 200 has increasingly become a flashpoint in Indian federalism." Analyze in light of recent Supreme Court pronouncements. (10 Marks, 150 Words)',
    modelStructure: {
      introduction: 'Mention Article 200 which outlines Governor’s options on receipt of state legislative bills and state that recent delays have brought the office into federal controversy.',
      coreArgument: [
        'Elected State Assemblies represent popular sovereignty; Governors cannot act as political gatekeepers to stall state legislation.',
        'Supreme Court in State of Punjab (2023) held Governor cannot exercise a pocket veto and must return bills "as soon as possible".'
      ],
      constitutionalLegalBasis: [
        'Article 200: Options upon presentation of a bill (Assent, Withhold, Reserve for President, Return).',
        'Article 163: Governor bound by aid and advice except in explicit constitutional discretion.',
        'Article 174: Summoning of the legislative assembly.'
      ],
      issues: [
        'Bills lying pending indefinitely without reason or presidential reference.',
        'Erosion of trust between Union-appointed Governors and elected State Councils of Ministers.'
      ],
      stakeholders: ['State Legislative Assemblies', 'Governor', 'Union Ministry of Home Affairs', 'Citizens of the State'],
      challenges: [
        'Lack of an explicit time-limit in Article 200 (uses the phrase "as soon as possible").',
        'Partisan perceptions surrounding gubernatorial decisions.'
      ],
      governmentMeasures: [
        'Sarkaria Commission (1988) and Punchhi Commission (2010) recommendations on gubernatorial neutrality.'
      ],
      wayForward: [
        'Fix a statutory/constitutional time limit of 6 months for gubernatorial decision as recommended by Punchhi Commission.',
        'Appoint non-partisan eminent persons in consultation with State Chief Ministers.'
      ],
      conclusion: 'The Governor must act as a constitutional bridge and sage counsellor, not an impediment to the democratic process.'
    },
    enrichmentKit: {
      articles: ['Article 200', 'Article 201', 'Article 163', 'Article 174'],
      cases: [
        'Shamsher Singh v. State of Punjab (1974)',
        'State of Punjab v. Principal Secretary to Governor (2023)',
        'State of Telangana v. Secretary to Governor (2023)'
      ],
      committees: ['Sarkaria Commission (1988)', 'Punchhi Commission (2010)'],
      reports: ['2nd ARC 6th Report on Local Governance & Federalism'],
      schemes: [],
      statistics: ['Over 10 State bills were kept pending for more than 2 years in southern and eastern states during 2021-2023.'],
      sdgs: ['SDG 16: Effective, Accountable and Inclusive Institutions'],
      keywords: ['Pocket Veto', 'Constitutional Head', 'Aid and Advice', 'Cooperative Federalism', 'Inter-State Friction']
    },
    examSpecificTag: 'COMMON'
  },
  {
    id: 'mq-gov-001',
    exam: 'UPSC',
    year: 2024,
    isPYQ: false,
    paper: 'GS-II',
    marks: 15,
    targetWords: 250,
    topic: 'Governance',
    subtopic: 'Digital Public Infrastructure (DPI) & Exclusion',
    questionText: 'India’s Digital Public Infrastructure (DPI) has revolutionized welfare delivery and financial inclusion, yet challenges of digital exclusion, privacy, and algorithmic opacity persist. Critically evaluate. (15 Marks, 250 Words)',
    modelStructure: {
      introduction: 'Define India’s DPI (India Stack: Identity, Payments, Data layers) and mention its global recognition at G20 as a public good delivering direct benefits.',
      coreArgument: [
        'Revolutionized welfare: Direct Benefit Transfer (DBT) has eliminated ghost beneficiaries and saved over ₹3 lakh crore in public funds.',
        'Financial inclusion: UPI, Jan Dhan, and mobile connectivity (JAM Trinity) brought banking to the unbanked.',
        'Counter-perspective: Biometric mismatch, network failures in tribal belts, and algorithmic opacity lead to denial of genuine entitlements.'
      ],
      constitutionalLegalBasis: [
        'Article 21: Right to Life with dignity includes right to food and privacy (Puttaswamy 2017).',
        'Digital Personal Data Protection Act 2023.',
        'Information Technology Act 2000.'
      ],
      issues: [
        'Exclusion errors: Elderly citizens suffering biometric fingerprint erosion deprived of ration/pension.',
        'Centralized data breaches and cyber risks to critical public infrastructure.'
      ],
      stakeholders: ['Marginalized Welfare Beneficiaries', 'MeitY & UIDAI', 'NPCI & Banks', 'Civil Society / PDS Dealers'],
      challenges: [
        'Digital divide: Rural internet penetration, smartphone gender gap.',
        'Weak physical grievance redressal alternatives when digital systems fail.'
      ],
      governmentMeasures: [
        'Enactment of DPDP Act 2023 and creation of Data Protection Board of India.',
        'Offline alternatives (OTP, exception registers, nominee systems under PDS).'
      ],
      wayForward: [
        'Implement "Digital Plus Physical" hybrid delivery channels to guarantee zero exclusion.',
        'Mandate algorithmic auditing and explainability for government AI systems.',
        'Establish independent statutory grievance tribunals at the block level.'
      ],
      conclusion: 'Technology must remain an enabler of constitutional rights, never a barrier to survival entitlements for the most vulnerable.'
    },
    enrichmentKit: {
      articles: ['Article 21', 'Article 14', 'Article 47'],
      cases: [
        'K.S. Puttaswamy v. Union of India (2017 - Privacy)',
        'K.S. Puttaswamy (Aadhaar Case) (2018)'
      ],
      committees: ['Justice B.N. Srikrishna Committee on Data Protection (2018)'],
      reports: ['NITI Aayog Strategy for New India @ 75', 'World Bank G20 Policy Guide on DPI'],
      schemes: ['Direct Benefit Transfer (DBT)', 'UPI', 'DigiLocker', 'Bhashini'],
      statistics: ['Over ₹34 lakh crore disbursed cumulatively through DBT; UPI accounts for ~46% of global real-time digital payment volume.'],
      sdgs: ['SDG 1: No Poverty', 'SDG 8: Decent Work & Economic Growth', 'SDG 10: Reduced Inequality'],
      keywords: ['Digital Public Goods', 'JAM Trinity', 'Biometric Exclusion', 'Data Sovereignty', 'Technological Determinism']
    },
    examSpecificTag: 'COMMON'
  },
  {
    id: 'mq-uppsc-001',
    exam: 'UPPSC',
    year: 2023,
    isPYQ: false,
    paper: 'GS-II',
    marks: 12,
    targetWords: 200,
    topic: 'Governance',
    subtopic: 'Public Grievance Redressal in Uttar Pradesh',
    questionText: 'Evaluate the effectiveness of the Integrated Grievance Redressal System (IGRS / Jansunwai Portal) in ensuring accountable and responsive governance in Uttar Pradesh. (Answer in 200 words)',
    modelStructure: {
      introduction: 'Introduce IGRS (Jansunwai) as UP’s flagship digital governance initiative for citizen grievance registration, tracking, and redressing across all 75 districts.',
      coreArgument: [
        'Democratizes administrative access by allowing citizens to lodge complaints online via portal, mobile app, or CM Helpline 1076 without visiting physical offices.',
        'Features automated escalation to higher authorities if not resolved within stipulated time frame, with feedback phone calls from the CM Dashboard.'
      ],
      constitutionalLegalBasis: [
        'UP Janhit Guarantee Act 2011 (Right to Public Services).',
        'Article 19(1)(a) & Good Governance principles (responsiveness, accountability).'
      ],
      issues: [
        'Disposal vs Redressal: Frontline block-level officials often close complaints with perfunctory reports without resolving the citizen’s ground problem.',
        'Digital illiteracy among rural villagers requiring reliance on private CSC operators.'
      ],
      stakeholders: ['Rural & Urban Citizens of UP', 'District Magistrates & SSPs', 'Frontline Tehsildars/BDOs', 'Chief Minister’s Office (CMO)'],
      challenges: [
        'High volume of complaints straining administrative processing capacity.',
        'Lack of punitive actions on officials submitting misleading disposal reports.'
      ],
      governmentMeasures: [
        'Ranking of districts based on grievance disposal quality and citizen satisfaction feedback.',
        'Special review meetings during "Tehsil Diwas" and "Thana Diwas".'
      ],
      wayForward: [
        'Conduct random physical social audits of disposed complaints by independent civil society observers.',
        'Integrate AI-based natural language processing in Hindi to detect recurrent administrative failure patterns.'
      ],
      conclusion: 'Jansunwai has established high executive visibility, but its ultimate success hinges on transforming administrative culture from paper compliance to citizen satisfaction.'
    },
    enrichmentKit: {
      articles: ['Article 14', 'Article 21'],
      cases: [],
      committees: ['2nd ARC 12th Report (Citizen-Centric Administration)'],
      reports: ['DARPG Good Governance Index'],
      schemes: ['UP IGRS Jansunwai', 'CM Helpline 1076', 'UP Janhit Guarantee Act 2011'],
      statistics: ['Over 1.5 crore grievances processed through Jansunwai with real-time ranking of 75 districts.'],
      sdgs: ['SDG 16: Accountable Institutions'],
      keywords: ['Citizen-Centric Governance', 'Sevottam Model', 'Tehsil Diwas', 'Grievance Escalation', 'Social Accountability']
    },
    examSpecificTag: 'UPPSC_ONLY'
  }
];
