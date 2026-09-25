import { PrelimsQuestion } from '../../types';

export const PRELIMS_QUESTIONS_BANK: PrelimsQuestion[] = [
  {
    id: 'pq-const-001',
    exam: 'UPSC',
    year: 2024,
    isPYQ: false,
    paper: 'GS-1 (Polity & Governance)',
    topic: 'Constitution',
    subtopic: 'Fundamental Rights & Equality',
    questionType: 'multiple_statement',
    questionText: 'With reference to the Doctrine of Manifest Arbitrariness under Article 14 of the Constitution of India, consider the following statements:',
    statements: [
      'It was expounded in the landmark judgment of Shayara Bano v. Union of India (2017).',
      'It can be invoked to strike down not only executive action but also plenary legislation enacted by Parliament.',
      'A law is manifestly arbitrary when it is enacted without an adequate determining principle or is discriminatory, excessive, and disproportionate.'
    ],
    options: [
      { id: 'A', text: '1 and 2 only' },
      { id: 'B', text: '2 and 3 only' },
      { id: 'C', text: '1 and 3 only' },
      { id: 'D', text: '1, 2 and 3' }
    ],
    correctOptionId: 'D',
    explanation: 'All three statements are correct. In Shayara Bano (2017) (Triple Talaq case), the Supreme Court cemented the doctrine of "manifest arbitrariness" as a ground to strike down both subordinate and plenary parliamentary legislation under Article 14. A legislation is manifestly arbitrary when it lacks an adequate determining principle, is capricious, irrational, or disproportionate.',
    officialSource: 'Shayara Bano v. Union of India (2017) 9 SCC 1',
    difficulty: 'Medium',
    conceptsTested: ['Article 14', 'Manifest Arbitrariness', 'Judicial Review of Plenary Legislation'],
    syllabusTag: 'Constitution - Fundamental Rights',
    examSpecificTag: 'COMMON'
  },
  {
    id: 'pq-const-002',
    exam: 'UPSC',
    year: 2024,
    isPYQ: false,
    paper: 'GS-1 (Polity & Governance)',
    topic: 'Constitution',
    subtopic: 'Article 21 & Environmental Rights',
    questionType: 'single_choice',
    questionText: 'In MK Ranjitsinh v. Union of India (2024), the Supreme Court recognized which one of the following as a fundamental right under Article 21 and Article 14?',
    options: [
      { id: 'A', text: 'Right to uninterrupted internet connectivity in public spaces' },
      { id: 'B', text: 'Right to be free from the adverse impacts of climate change' },
      { id: 'C', text: 'Right to universal basic income for subsistence farmers' },
      { id: 'D', text: 'Right to free legal representation at the pre-arrest stage' }
    ],
    correctOptionId: 'B',
    explanation: 'In MK Ranjitsinh v. Union of India (March 2024), while hearing a case on overhead power lines affecting the critically endangered Great Indian Bustard, a 3-judge bench headed by CJI D.Y. Chandrachud recognized that citizens have a fundamental "right to be free from the adverse impacts of climate change" emanating from Article 21 (right to life) and Article 14 (equality).',
    officialSource: 'Supreme Court of India (M.K. Ranjitsinh, 2024)',
    difficulty: 'Medium',
    conceptsTested: ['Article 21', 'Climate Rights', 'Judicial Expansion of Part III'],
    syllabusTag: 'Constitution - Fundamental Rights',
    examSpecificTag: 'COMMON'
  },
  {
    id: 'pq-pol-001',
    exam: 'UPSC',
    year: 2023,
    isPYQ: false,
    paper: 'GS-1 (Polity & Governance)',
    topic: 'Polity',
    subtopic: 'Parliamentary Committees',
    questionType: 'multiple_statement',
    questionText: 'Consider the following statements regarding Departmentally Related Standing Committees (DRSCs) of the Indian Parliament:',
    statements: [
      'Each Standing Committee consists of 31 members (21 from Lok Sabha and 10 from Rajya Sabha).',
      'The members of the Lok Sabha are nominated by the Speaker, while the members of the Rajya Sabha are nominated by the Chairman.',
      'A Minister is eligible to be nominated as a member of any of the Standing Committees.'
    ],
    options: [
      { id: 'A', text: '1 and 2 only' },
      { id: 'B', text: '2 and 3 only' },
      { id: 'C', text: '1 and 3 only' },
      { id: 'D', text: '1, 2 and 3' }
    ],
    correctOptionId: 'A',
    explanation: 'Statements 1 and 2 are correct. Statement 3 is INCORRECT: A Minister is strictly NOT eligible to be nominated as a member of any Standing Committee. If a member, after nomination to the committee, is appointed a Minister, they cease to be a member of the committee from the date of such appointment to preserve legislative oversight over the executive.',
    officialSource: 'Lok Sabha Rules of Procedure & Practice',
    difficulty: 'Easy',
    conceptsTested: ['Parliamentary Committees', 'DRSC Composition', 'Legislative Control over Executive'],
    syllabusTag: 'Parliament - Committee System',
    examSpecificTag: 'COMMON'
  },
  {
    id: 'pq-pol-002',
    exam: 'UPSC',
    year: 2024,
    isPYQ: false,
    paper: 'GS-1 (Polity & Governance)',
    topic: 'Polity',
    subtopic: 'Anti-Defection Law',
    questionType: 'multiple_statement',
    questionText: 'With reference to the Anti-Defection Law in India (Tenth Schedule), consider the following statements:',
    statements: [
      'An elected member of a House belonging to any political party is disqualified if they voluntarily give up their membership of such political party.',
      'A nominated member of a House becomes disqualified if they join any political party after the expiry of six months from taking their seat.',
      'The law provides a specific statutory time limit of three months within which the Presiding Officer must decide a disqualification petition.'
    ],
    options: [
      { id: 'A', text: '1 and 2 only' },
      { id: 'B', text: '2 and 3 only' },
      { id: 'C', text: '1 and 3 only' },
      { id: 'D', text: '1, 2 and 3' }
    ],
    correctOptionId: 'A',
    explanation: 'Statements 1 and 2 are correct. Statement 3 is INCORRECT: The Tenth Schedule does NOT prescribe any time limit within which the Presiding Officer must decide a disqualification petition. In Keisham Meghachandra Singh v. Speaker, Manipur (2020), the Supreme Court recommended that Speakers should decide petitions within a reasonable period, ideally three months, but this is a judicial direction, not a statutory clause in the Tenth Schedule itself.',
    officialSource: 'Constitution of India, Tenth Schedule & Keisham Meghachandra Singh (2020)',
    difficulty: 'Medium',
    conceptsTested: ['Tenth Schedule', 'Anti-Defection', 'Speaker Discretion'],
    syllabusTag: 'Parliament & State Legislatures - Disqualification',
    examSpecificTag: 'COMMON'
  },
  {
    id: 'pq-gov-001',
    exam: 'UPSC',
    year: 2023,
    isPYQ: false,
    paper: 'GS-1 (Polity & Governance)',
    topic: 'Governance',
    subtopic: 'Right to Information Act',
    questionType: 'multiple_statement',
    questionText: 'Under the Right to Information Act 2005, which of the following categories of information are exempt from mandatory disclosure under Section 8(1)?',
    statements: [
      'Information which would prejudicially affect the sovereignty and integrity of India.',
      'Information received in confidence from foreign Governments.',
      'Information which relates to personal information having no relationship to any public activity or interest.',
      'Cabinet papers including records of deliberations of the Council of Ministers, before a final decision has been taken.'
    ],
    options: [
      { id: 'A', text: '1, 2 and 3 only' },
      { id: 'B', text: '2 and 4 only' },
      { id: 'C', text: '1, 3 and 4 only' },
      { id: 'D', text: '1, 2, 3 and 4' }
    ],
    correctOptionId: 'D',
    explanation: 'All four statements are exempt under Section 8(1) of the RTI Act 2005. Section 8(1)(a) protects sovereignty/integrity; 8(1)(f) protects foreign government confidences; 8(1)(j) protects personal privacy; and 8(1)(i) protects Cabinet papers until a decision is taken and the matter is complete.',
    officialSource: 'Right to Information Act, 2005 (Official Gazette)',
    difficulty: 'Medium',
    conceptsTested: ['RTI Act 2005', 'Section 8 Exemptions', 'Transparency vs Secrecy'],
    syllabusTag: 'Governance - Transparency & RTI',
    examSpecificTag: 'COMMON'
  },
  {
    id: 'pq-sj-001',
    exam: 'UPSC',
    year: 2024,
    isPYQ: false,
    paper: 'GS-1 (Polity & Governance)',
    topic: 'Social Justice',
    subtopic: 'Welfare Schemes & Healthcare',
    questionType: 'multiple_statement',
    questionText: 'Consider the following statements regarding Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY):',
    statements: [
      'It provides health coverage of ₹5 lakh per family per year for secondary and tertiary care hospitalization.',
      'Under the 2024 expansion, all senior citizens aged 70 years and above are entitled to health cover regardless of their family income.',
      'It is implemented at the apex level by the National Health Authority (NHA).'
    ],
    options: [
      { id: 'A', text: '1 and 2 only' },
      { id: 'B', text: '2 and 3 only' },
      { id: 'C', text: '1 and 3 only' },
      { id: 'D', text: '1, 2 and 3' }
    ],
    correctOptionId: 'D',
    explanation: 'All three statements are correct. PM-JAY provides ₹5 lakh health insurance per family per year for secondary and tertiary care. In September 2024, the Union Cabinet approved extending this ₹5 lakh cover to all senior citizens aged 70 years and older universally without income restrictions. NHA is the apex implementing agency.',
    officialSource: 'PIB Notification & National Health Authority (NHA)',
    difficulty: 'Easy',
    conceptsTested: ['PM-JAY', 'Universal Health Coverage', 'Elderly Social Security'],
    syllabusTag: 'Social Justice - Health & Welfare',
    examSpecificTag: 'COMMON'
  },
  {
    id: 'pq-ir-001',
    exam: 'UPSC',
    year: 2024,
    isPYQ: false,
    paper: 'GS-1 (Polity & Governance)',
    topic: 'International Relations',
    subtopic: 'Regional & Global Groupings',
    questionType: 'multiple_statement',
    questionText: 'Consider the following countries:\n1. Egypt\n2. Ethiopia\n3. Iran\n4. Saudi Arabia\n5. United Arab Emirates\nWhich of the above countries officially joined the BRICS grouping as new members during its expansion?',
    options: [
      { id: 'A', text: '1, 2 and 3 only' },
      { id: 'B', text: '3, 4 and 5 only' },
      { id: 'C', text: '1, 3, 4 and 5 only' },
      { id: 'D', text: '1, 2, 3, 4 and 5' }
    ],
    correctOptionId: 'D',
    explanation: 'All five countries (Egypt, Ethiopia, Iran, Saudi Arabia, and UAE) were invited at the 15th Johannesburg Summit in 2023 and became official full members of the expanded BRICS (BRICS+) in 2024. Argentina initially invited, later declined under President Javier Milei.',
    officialSource: 'Johannesburg Declaration II & MEA Briefings',
    difficulty: 'Medium',
    conceptsTested: ['BRICS Expansion', 'South-South Cooperation', 'Global South'],
    syllabusTag: 'International Relations - Global Groupings',
    examSpecificTag: 'COMMON'
  },
  {
    id: 'pq-uppsc-001',
    exam: 'UPPSC',
    year: 2023,
    isPYQ: false,
    paper: 'GS-1 (Polity & Governance)',
    topic: 'Polity',
    subtopic: 'State Legislature of Uttar Pradesh',
    questionType: 'multiple_statement',
    questionText: 'With reference to the State Legislature of Uttar Pradesh, consider the following statements:',
    statements: [
      'Uttar Pradesh has a bicameral legislature consisting of the Vidhan Sabha and the Vidhan Parishad.',
      'The Vidhan Sabha has 403 directly elected members.',
      'The Vidhan Parishad of Uttar Pradesh has 100 members, making it the largest legislative council in India.'
    ],
    options: [
      { id: 'A', text: '1 and 2 only' },
      { id: 'B', text: '2 and 3 only' },
      { id: 'C', text: '1 and 3 only' },
      { id: 'D', text: '1, 2 and 3' }
    ],
    correctOptionId: 'D',
    explanation: 'All three statements are correct. Uttar Pradesh has a bicameral legislature. The Uttar Pradesh Legislative Assembly (Vidhan Sabha) has 403 elected members (the Anglo-Indian nominated seat was abolished by 104th CAA). The Uttar Pradesh Legislative Council (Vidhan Parishad) has 100 members, the largest among all Indian states.',
    officialSource: 'Uttar Pradesh Legislative Assembly Secretariat & Constitution of India',
    difficulty: 'Easy',
    conceptsTested: ['UP Vidhan Sabha', 'UP Vidhan Parishad', 'Bicameral State Legislature'],
    syllabusTag: 'State Legislature - UP Specific',
    examSpecificTag: 'UPPSC_ONLY'
  }
];
