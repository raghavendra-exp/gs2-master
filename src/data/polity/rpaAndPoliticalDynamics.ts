export interface RPASectionDetail {
  id: string;
  act: 'RPA 1950' | 'RPA 1951';
  section: string;
  title: string;
  provisionSummary: string;
  significance: string;
  landmarkJudgments: string[];
  reformsDebate: string;
}

export interface PressureGroupCategory {
  id: string;
  category: string;
  prominentExamples: string[];
  roleAndTechniques: string[];
  significanceInPolity: string;
  criticismsAndShortcomings: string[];
}

export interface ExecutiveStructureDetail {
  id: string;
  organ: string;
  constitutionalBasis: string;
  compositionAndStructure: string;
  powersAndRole: string[];
  frictionsAndReforms: string[];
}

export const RPA_PROVISIONS_DATA: RPASectionDetail[] = [
  {
    id: 'rpa-1950-alloc',
    act: 'RPA 1950',
    section: 'Sections 3 to 11',
    title: 'Allocation of Seats & Delimitation of Constituencies',
    provisionSummary: 'Provides for allocation of seats in the House of the People and the Legislative Assemblies and Councils of States; delimitation of parliamentary and assembly constituencies based on Delimitation Commission orders.',
    significance: 'Ensures equitable population-to-seat ratio under Article 82 and 170 (frozen till 2026 by the 84th Constitutional Amendment Act 2001).',
    landmarkJudgments: ['Meghraj Kothari v. Delimitation Commission (1967) - Delimitation orders cannot be challenged in any court under Art 329(a) once published in Gazette.'],
    reformsDebate: 'Post-2026 delimitation debate regarding representation imbalances between northern states with higher population growth and southern states with effective population stabilization.'
  },
  {
    id: 'rpa-1950-rolls',
    act: 'RPA 1950',
    section: 'Sections 14 to 25',
    title: 'Electoral Rolls & Qualification of Electors',
    provisionSummary: 'Lays down qualifications for registration in electoral roll (ordinarily resident, 18+ years of age, not disqualified on grounds of non-residence, unsoundness of mind, or corrupt practices). Designates Chief Electoral Officer (CEO), District Election Officer (DEO), and Electoral Registration Officer (ERO).',
    significance: 'Statutory framework realizing Universal Adult Suffrage under Article 326.',
    landmarkJudgments: ['Lakshmi Charan Sen v. AKM Hassan Uzzaman (1985) - Preparation and revision of electoral rolls is continuous and cannot stall election schedule.'],
    reformsDebate: 'Election Laws (Amendment) Act 2021 introduced 4 qualifying dates (1st Jan, 1st April, 1st July, 1st Oct) and voluntary linking of Aadhaar with voter ID (Form 6B).'
  },
  {
    id: 'rpa-1951-sec8',
    act: 'RPA 1951',
    section: 'Section 8',
    title: 'Disqualification on Conviction for Certain Offences',
    provisionSummary: 'Disqualifies a person convicted of specified heinous offences (Section 8(1)), food adulteration/dowry (Section 8(2)), or sentenced to imprisonment for not less than 2 years for ANY other offence (Section 8(3)) from date of conviction and for a further period of 6 years since release.',
    significance: 'Primary statutory weapon against the criminalisation of politics in India.',
    landmarkJudgments: [
      'Lily Thomas v. Union of India (2013) - Struck down Section 8(4) of RPA 1951 (which previously gave sitting MPs/MLAs a 3-month protection window to appeal without disqualification) as unconstitutional.',
      'Lok Prahari v. UOI (2018) - Clarified that stay of conviction by an appellate court suspends disqualification under Section 8.'
    ],
    reformsDebate: 'Demand by Law Commission (244th Report) and ECI to disqualify candidates upon framing of charges for heinous offences (punishable with 5+ years) by a court of law, rather than waiting for final conviction.'
  },
  {
    id: 'rpa-1951-sec29a',
    act: 'RPA 1951',
    section: 'Section 29A',
    title: 'Registration with the Election Commission of Political Parties',
    provisionSummary: 'Prescribes procedure for registration of political parties with the Election Commission. Requires party constitution to contain a specific pledge bearing true faith and allegiance to the Constitution of India and principles of socialism, secularism, and democracy.',
    significance: 'Recognizes political parties in statutory election law (giving life to 10th Schedule provisions).',
    landmarkJudgments: ['Indian National Congress (I) v. Institute of Social Welfare (2002) - Supreme Court held that ECI has no statutory power to de-register a political party once registered, except in cases of fraud or declaration of party as unlawful.'],
    reformsDebate: 'ECI has repeatedly requested statutory power to de-register dormant, inactive, or money-laundering registered unrecognized political parties (RUPPs).'
  },
  {
    id: 'rpa-1951-sec33a',
    act: 'RPA 1951',
    section: 'Section 33A & 33B',
    title: 'Mandatory Disclosure of Candidate Antecedents (Affidavit Form 26)',
    provisionSummary: 'Requires every candidate to furnish an affidavit detailing criminal antecedents, pending charges framed by courts, financial assets/liabilities (self and spouse), and educational qualifications.',
    significance: 'Derived from Voter\'s Right to Know as an integral part of Freedom of Expression under Article 19(1)(a).',
    landmarkJudgments: [
      'Union of India v. Association for Democratic Reforms (ADR, 2002) - Established constitutional right of voters to know criminal and financial background of candidates.',
      'Public Interest Foundation v. UOI (2018) - Mandated political parties and candidates to publish criminal antecedents in newspapers, TV, and party websites on 3 separate occasions during campaigns.'
    ],
    reformsDebate: 'Ensuring strict compliance; ECI introduced KYC (Know Your Candidate) mobile app for voters to view candidate affidavits with ease.'
  },
  {
    id: 'rpa-1951-sec123',
    act: 'RPA 1951',
    section: 'Section 123',
    title: 'Corrupt Practices during Elections',
    provisionSummary: 'Defines corrupt practices that can invalidate an election: Bribery, Undue Influence, Appeal on ground of religion/race/caste/community/language, Promotion of enmity, Publication of false statements regarding candidate\'s personal character, Free conveyance of voters, Incurring unauthorized election expenditure.',
    significance: 'Forms the legal ground for Election Petitions filed under Article 329(b) before the High Court.',
    landmarkJudgments: [
      'Indira Nehru Gandhi v. Raj Narain (1975) - Prime Minister\'s election set aside by Allahabad High Court under Section 123(7) for taking assistance of gazetted government officers (Yashpal Kapoor).',
      'Abhiram Singh v. C.D. Commachen (2017) - 7-Judge Constitution Bench ruled that appeal for votes in the name of religion, race, caste, community, or language of candidate, rival, or VOTER is a corrupt practice under Section 123(3).'
    ],
    reformsDebate: 'Regulating "freebie" electoral promises versus welfare commitments; defining parameters of bribery in election manifestos.'
  },
  {
    id: 'rpa-funding',
    act: 'RPA 1951',
    section: 'Sections 77 & 78',
    title: 'Election Expenses & Expenditure Ceilings',
    provisionSummary: 'Requires maintaining daily account of election expenses from nomination date till result declaration, and lodging with DEO within 30 days. Maximum expenditure ceilings fixed under Conduct of Elections Rules (currently ₹95 Lakhs for major Lok Sabha constituencies, ₹40 Lakhs for Assembly constituencies).',
    significance: 'Controls money power and prevents plutocratic takeover of representative democracy.',
    landmarkJudgments: [
      'Kanwar Lal Gupta v. Amar Nath Chawla (1975) - Expenses incurred by political party or supporters should be counted towards candidate\'s ceiling (prompted executive amendment to nullify judgment).',
      'Association for Democratic Reforms v. UOI (2024) - 5-Judge Constitution Bench struck down Electoral Bonds Scheme as violative of Article 19(1)(a) voter\'s right to information, restoring transparency in corporate donations.'
    ],
    reformsDebate: 'Ceilings currently apply only to CANDIDATES, with NO statutory ceiling on political party expenditures during election campaigns.'
  }
];

export const PRESSURE_GROUPS_DATA: PressureGroupCategory[] = [
  {
    id: 'pg-business',
    category: 'Business and Industrial Groups',
    prominentExamples: [
      'Federation of Indian Chambers of Commerce and Industry (FICCI - founded 1927 on advice of Mahatma Gandhi)',
      'Confederation of Indian Industry (CII)',
      'Associated Chambers of Commerce and Industry of India (ASSOCHAM)',
      'NASSCOM (National Association of Software and Service Companies)'
    ],
    roleAndTechniques: [
      'Engage in pre-budget consultations with Finance Ministry and line ministries.',
      'Submit whitepapers, organize global investor summits, and lobby for deregulation and tariff reductions.',
      'Offer policy research and industry data directly to government drafting committees.'
    ],
    significanceInPolity: 'Act as institutional bridge between corporate enterprise and state policymakers; key driver of liberalization reforms since 1991.',
    criticismsAndShortcomings: [
      'Disproportionate influence of large corporate conglomerates leading to crony capitalism risks.',
      'Marginalization of micro, small, and medium enterprises (MSMEs) in national economic agenda.'
    ]
  },
  {
    id: 'pg-agrarian',
    category: 'Agrarian and Peasant Associations',
    prominentExamples: [
      'Bharatiya Kisan Union (BKU - headed by Mahendra Singh Tikait / Rakesh Tikait)',
      'All India Kisan Sabha (AIKS)',
      'Samyukt Kisan Morcha (SKM)',
      'Shetkari Sanghatana (Maharashtra)'
    ],
    roleAndTechniques: [
      'Mass mobilization, tractor rallies, highway dharnas, and "Rasta Roko" agitations.',
      'Advocating for legally guaranteed Minimum Support Price (MSP based on Swaminathan C2+50% formula), farm loan waivers, and free agricultural electricity.',
      'Negotiating directly with Union Cabinet Sub-Committees during agricultural reform impasses.'
    ],
    significanceInPolity: 'Provide collective bargaining power to rural peasantry against urban-industrial bias; pivotal in the repeal of the three Farm Laws in 2021.',
    criticismsAndShortcomings: [
      'Dominated predominantly by prosperous landed farmers (Kulak lobby) of Green Revolution belts (Punjab, Haryana, Western UP), often neglecting landless agricultural laborers and tenant farmers.'
    ]
  },
  {
    id: 'pg-trade-unions',
    category: 'Trade Unions and Labor Federations',
    prominentExamples: [
      'Bharatiya Mazdoor Sangh (BMS - affiliated with RSS)',
      'Indian National Trade Union Congress (INTUC - affiliated with INC)',
      'All India Trade Union Congress (AITUC - CPI)',
      'Centre of Indian Trade Unions (CITU - CPI(M))'
    ],
    roleAndTechniques: [
      'Collective bargaining, national general strikes (Bharat Bandh), legal litigation against unfair labor practices.',
      'Advocate for social security, pension restoration (OPS), and opposition to contractualisation of workforce.'
    ],
    significanceInPolity: 'Constitutional watchdog for Article 43 (Living Wage) and Article 43A (Workers\' participation in management).',
    criticismsAndShortcomings: [
      'Subordinated to parent political parties, resulting in fragmented unionism.',
      'Represents only ~10% of India\'s total workforce in the organized sector, leaving 90% unorganized and gig workers largely unrepresented.'
    ]
  },
  {
    id: 'pg-social-environmental',
    category: 'Civil Society, Human Rights & Environmental Collectives',
    prominentExamples: [
      'Narmada Bachao Andolan (Medha Patkar)',
      'Mazdoor Kisan Shakti Sangathan (MKSS - Aruna Roy, pioneer of RTI Act)',
      'Centre for Science and Environment (CSE)',
      'People\'s Union for Civil Liberties (PUCL)'
    ],
    roleAndTechniques: [
      'Public Interest Litigations (PIL) under Article 32/226, social audits, grassroots awareness jan-sunwais (public hearings), peaceful satyagraha.',
      'Instrumental in landmark legislative enactments: RTI Act 2005, MGNREGA 2005, Forest Rights Act 2006.'
    ],
    significanceInPolity: 'Vital deepening of participatory democracy; championing sustainable development and rights of marginalized forest dwellers.',
    criticismsAndShortcomings: [
      'Accusations of stalling critical infrastructure and developmental projects (IB report 2014 controversies).',
      'Foreign funding regulations tightened under FCRA 2020 due to transparency concerns.'
    ]
  }
];

export const EXECUTIVE_STRUCTURE_DATA: ExecutiveStructureDetail[] = [
  {
    id: 'exec-union-cabinet',
    organ: 'Union Council of Ministers & The Cabinet System',
    constitutionalBasis: 'Articles 74, 75, and Article 352(3) (The only place the word "Cabinet" is explicitly mentioned in the Constitution, inserted by 44th Amendment 1978).',
    compositionAndStructure: 'Three-tier classification: Cabinet Ministers (highest decision-making core), Ministers of State (Independent Charge), and Ministers of State (assisting Cabinet Ministers). 91st Constitutional Amendment 2003 capped Council of Ministers at 15% of Lok Sabha strength (maximum 82).',
    powersAndRole: [
      'Supreme directing authority of government policy; controls legislative agenda, treaties, defense, and finances.',
      'Cabinet Committees act as powerful specialized arms: Appointments Committee of the Cabinet (ACC), Cabinet Committee on Political Affairs (CCPA - "Super Cabinet"), Cabinet Committee on Economic Affairs (CCEA), Cabinet Committee on Security (CCS).'
    ],
    frictionsAndReforms: [
      'Over-centralization of decision-making in the Prime Minister\'s Office (PMO) versus Cabinet autonomy.',
      'Erosion of collective responsibility during regional coalition eras versus dominant single-party executive hegemony.'
    ]
  },
  {
    id: 'exec-cabinet-secretariat',
    organ: 'Cabinet Secretariat & The Cabinet Secretary',
    constitutionalBasis: 'Functioning under Government of India (Allocation of Business) Rules, 1961 and (Transaction of Business) Rules, 1961 framed under Article 77(3).',
    compositionAndStructure: 'Headed by the Cabinet Secretary (Senior-most civil servant in India, ex-officio Chairman of the Civil Services Board). Ranks 11th in the Indian Order of Precedence.',
    powersAndRole: [
      'Secretariat assistance to the Cabinet and Cabinet Committees; prepares Cabinet agendas, records minutes, and tracks implementation.',
      'Resolves inter-ministerial disputes and ensures administrative coherence across government departments.',
      'Coordinates emergency crisis responses (National Crisis Management Committee - NCMC chaired by Cabinet Secretary).'
    ],
    frictionsAndReforms: [
      'Balancing Cabinet Secretariat authority with the expanding administrative clout of the PMO.',
      'Implementing 2nd ARC recommendations for streamlined business transaction rules.'
    ]
  },
  {
    id: 'exec-state-governor',
    organ: 'State Executive: Governor, Chief Minister & State Secretariat',
    constitutionalBasis: 'Articles 153 to 167, Constitution of India.',
    compositionAndStructure: 'Governor appointed by President; Chief Minister appointed by Governor; State Council of Ministers collectively responsible to Legislative Assembly (Article 164(2)). Administered by State Secretariat headed by Chief Secretary.',
    powersAndRole: [
      'Governor exercises dual role: Constitutional head of State and vital link / representative of the Union Government.',
      'Discretionary powers under Article 163 (reservation of bills for President Art 200, recommendation of President\'s Rule Art 356, appointment of CM in hung assembly).'
    ],
    frictionsAndReforms: [
      'Perennial Centre-State friction over gubernatorial delays or indefinite withholding of assent to bills passed by State Assemblies (Supreme Court 2023 Punjab judgment holding Governors cannot sit on bills).',
      'Sarkaria and Punchhi Commission recommendations for consultation with Chief Ministers in Governor appointments largely unheeded.'
    ]
  },
  {
    id: 'exec-parl-secretaries',
    organ: 'Parliamentary Secretaries & The Office of Profit Debate',
    constitutionalBasis: 'Articles 102(1)(a) and 191(1)(a) (Disqualification for holding any Office of Profit).',
    compositionAndStructure: 'Appointed by ruling State Governments from among elected legislators to bypass the 15% cabinet ceiling under the 91st Constitutional Amendment.',
    powersAndRole: [
      'Assigned ministerial status, perks, and vehicles to assist Ministers in legislative duties.'
    ],
    frictionsAndReforms: [
      'Multiple High Courts (Calcutta, Bombay, Delhi) and Supreme Court have repeatedly struck down State legislation creating Parliamentary Secretaries as an unconstitutional attempt to circumvent Article 164(1A) 15% limit.',
      'ECI recommended disqualification of 20 Delhi AAP MLAs in 2018 under Office of Profit rules, later remitted by Delhi High Court on natural justice grounds.'
    ]
  }
];
