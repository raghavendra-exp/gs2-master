import { TopicItem } from '../../types';

export const POLITY_TOPICS: TopicItem[] = [
  {
    id: 'topic-parliament-legislative-process',
    title: 'Parliament and State Legislatures: Structure, Functioning, and Legislative Process',
    category: 'Polity',
    subtopic: 'Parliamentary Procedures & Scrutiny',
    examRelevance: ['UPSC', 'UPPSC', 'State PSC'],
    examSpecificNotes: {
      upsc: 'Focus on declining legislative scrutiny, ordinances, private member bills, and Parliamentary Standing Committees.',
      uppsc: 'Focus on UP Vidhan Sabha (403 seats) and UP Vidhan Parishad (100 seats), legislative council powers, and state financial procedures.'
    },
    summary: 'The legislative branch of the Indian Union and States, examining composition, bill passage, parliamentary control over executive, budget cycle, committees, and challenges of disruption.',
    staticContent: 'Parliament of India consists of the President, the Council of States (Rajya Sabha), and the House of the People (Lok Sabha) under Article 79. Bills pass through three readings: Introduction, Committee/Clause-by-Clause scrutiny, and Final Voting, followed by transmission to the second house and Presidential assent.',
    easyExplanation: 'Parliament is where laws are debated and passed. It controls government spending, questions ministers during Question Hour, and represents citizens.',
    advancedAnalysis: 'The Indian Parliament is transitioning from a vibrant deliberative body to an arena of executive dominance. Key institutional stresses include: decline in bills referred to Departmentally Related Standing Committees (dropped from over 60% in 14th/15th Lok Sabha to under 25% in 17th Lok Sabha), weaponization of disruptions, frequent passage of legislation via voice votes without division, misuse of Money Bill classification (Article 110) to bypass the Rajya Sabha, and the chilling effect of the anti-defection law on independent legislative voice.',
    constitutionalBasis: [
      { article: '79', title: 'Constitution of Parliament', provision: 'Parliament comprises the President and two Houses.' },
      { article: '107-111', title: 'Legislative Procedure', provision: 'Passage of Ordinary Bills, Money Bills (Art 109-110), Finance Bills (Art 117), and Assent (Art 111).' },
      { article: '108', title: 'Joint Sitting', provision: 'Summoned by President, presided by Speaker of Lok Sabha; only for Ordinary and Financial Bills (not Money or Constitution Amendment Bills).' },
      { article: '105 & 194', title: 'Parliamentary Privileges', provision: 'Freedom of speech in Parliament, immunity from court proceedings for votes/speeches.' }
    ],
    laws: ['Rules of Procedure and Conduct of Business in Lok Sabha', 'Judges (Inquiry) Act 1968', 'Salary, Allowances and Pension of Members of Parliament Act'],
    judgments: [
      { name: 'Raja Ram Pal v. Hon’ble Speaker, Lok Sabha', year: 2007, principle: 'Judicial review extends to parliamentary proceedings if there is gross illegality or unconstitutionality.' , relevance: 'Parliamentary privileges are subject to constitutional supremacy.' },
      { name: 'Rojer Mathew v. Union of India', year: 2019, principle: 'Referred the question of what constitutes a Money Bill under Article 110 to a 7-judge Constitution bench.', relevance: 'Challenged Finance Act riders bypassing Rajya Sabha.' }
    ],
    committees: [
      { name: 'Rules Committee & Business Advisory Committee', year: 2024, recommendations: ['Mandatory minimum sitting days (recommended 100 days per year for Parliament, 60 days for State Assemblies).', 'Dedicated Opposition Day debate mechanisms.'] }
    ],
    reports: [
      { name: 'PRS Legislative Research Annual Review', publisher: 'PRS', year: 2024, keyFindings: '17th Lok Sabha sat for only 274 days, the lowest for any full 5-year term Lok Sabha; 58% of bills were passed with under 3 hours of discussion.' }
    ],
    schemes: [],
    currentAffairsIds: ['ca-parliament-deliberation', 'ca-money-bill-hearing'],
    prelimsFacts: [
      'Money Bill under Article 110 can ONLY be introduced in Lok Sabha with prior recommendation of the President. Rajya Sabha can only delay it for 14 days and cannot reject or amend it.',
      'Speaker’s decision on whether a Bill is a Money Bill is final in Parliament, though judicially reviewable under Rojer Mathew.',
      'Joint sitting under Article 108 is NOT available for Money Bills or Constitution Amendment Bills.',
      'Quorum for either House is 1/10th of the total number of members (Article 100(3)).'
    ],
    mainsPointers: [
      'Institutional erosion: Drop in standing committee referrals, routine suspension of opposition MPs.',
      'Bypassing Rajya Sabha using Money Bill certificates for non-taxation laws.',
      'Solutions: Implement 2nd ARC recommendation on code of conduct, mandate pre-legislative consultation policy, institute British-style "Opposition Days", and fix minimum sitting calendars.'
    ],
    examples: [
      { title: 'Passage of Criminal Law Bills (BNS, BNSS, BSA)', description: 'Passed in December 2023 when over 140 opposition MPs were under suspension.', source: 'Lok Sabha Debates, Dec 2023' },
      { title: 'UP Vidhan Sabha Digital Sansad (e-Vidhan)', description: 'Uttar Pradesh Vidhan Sabha adopted complete paperless proceedings under the NeVA initiative.', source: 'UP Legislative Assembly Secretariat 2022', upRelevance: true }
    ],
    sources: [
      { title: 'Rules of Procedure and Conduct of Business in Lok Sabha', organization: 'Lok Sabha Secretariat', url: 'https://loksabha.nic.in', publicationDate: '2024-01-01', lastVerified: '2026-09-20', status: 'official' },
      { title: 'Report on Functioning of Parliament', organization: 'PRS Legislative Research', url: 'https://prsindia.org', publicationDate: '2024-06-15', lastVerified: '2026-09-22', status: 'verified_secondary' }
    ],
    lastVerified: '2026-09-24',
    claimType: 'ANALYSIS'
  },
  {
    id: 'topic-federalism-centre-state',
    title: 'Indian Federalism: Dynamics, Friction Points, Fiscal Relations, and Local Governance',
    category: 'Polity',
    subtopic: 'Union-State Relations & 3F Devolution',
    examRelevance: ['UPSC', 'UPPSC', 'State PSC'],
    examSpecificNotes: {
      upsc: 'Cooperative vs Competitive federalism, GST Council dynamics, Centrally Sponsored Schemes conditionality, and asymmetric federalism (Sixth Schedule / Art 371).',
      uppsc: 'Fiscal devolution to UP, State Finance Commission reports, UP Panchayati Raj Act 1947 & Municipal Corporation governance.'
    },
    summary: 'Examines India’s quasi-federal constitutional structure (K.C. Wheare), legislative and administrative division, fiscal federalism, gubernatorial friction, and the 3F devolution tracker to local bodies.',
    staticContent: 'Article 1 describes India as a "Union of States". The Constitution creates a federal structure with a strong unitary bias (Articles 245-293). It divides legislative subjects via the Seventh Schedule (Union, State, Concurrent Lists), empowers the Centre to issue administrative directions (Articles 256, 257), and vests fiscal arbitration in the Finance Commission (Article 280) and GST Council (Article 279A).',
    easyExplanation: 'Federalism means dividing powers between the central government in New Delhi and state governments across India, while ensuring national unity and regional aspirations.',
    advancedAnalysis: 'Indian federalism is undergoing a structural tension between political centralism and economic regionalism. Key stress points: (1) Office of the Governor: withholding assent to bills indefinitely (addressed in State of Punjab v. Governor 2023), (2) Fiscal squeeze: Cess and surcharges not shared with states rising to over 25% of gross tax revenue, reducing the effective divisible pool; net borrowing ceilings imposed under Article 293(3) (Kerala v. UOI 2024), (3) Conditionality in Centrally Sponsored Schemes (CSS) limiting state policy innovation, (4) Incomplete 3F devolution to Panchayats and Urban Local Bodies.',
    constitutionalBasis: [
      { article: '1', title: 'Name and territory of the Union', provision: 'India, that is Bharat, shall be a Union of States.' },
      { article: '246 & 246A', title: 'Subject-matter of laws', provision: 'Seventh Schedule distribution of powers; 246A provides simultaneous power over GST.' },
      { article: '262', title: 'Inter-State River Water Disputes', provision: 'Parliament may by law provide for adjudication of disputes relating to waters of inter-State rivers.' },
      { article: '263', title: 'Inter-State Council', provision: 'President can establish an Inter-State Council to investigate and discuss subjects of common interest.' },
      { article: '280', title: 'Finance Commission', provision: 'Recommends vertical devolution of central taxes and horizontal formula.' },
      { article: '200', title: 'Assent to Bills by Governor', provision: 'Governor may declare assent, withhold assent, reserve for President, or return for reconsideration.' }
    ],
    laws: ['Inter-State River Water Disputes Act 1956', 'Finance Commission Act 1951', 'Disaster Management Act 2005'],
    judgments: [
      { name: 'State of West Bengal v. Union of India', year: 1963, principle: 'Indian Constitution is not truly federal; unitary bias is fundamental.', relevance: 'Early judicial view of quasi-federalism.' },
      { name: 'S.R. Bommai v. Union of India', year: 1994, principle: 'Federalism is an essential part of the Basic Structure.', relevance: 'Curtailed unilateral central intervention under Art 356.' },
      { name: 'State of Punjab v. Principal Secretary to Governor', year: 2023, principle: 'Governor cannot sit indefinitely on bills passed by the legislature; must act in terms of Article 200.', relevance: 'Checked gubernatorial veto on state legislation.' },
      { name: 'Union of India v. Mohit Minerals Pvt Ltd', year: 2022, principle: 'GST Council recommendations are not binding; Parliament and States have simultaneous unalienable legislative powers.', relevance: 'Reaffirmed cooperative and un-cooperative federalism.' }
    ],
    committees: [
      { name: 'Sarkaria Commission', year: 1988, recommendations: ['Inter-State Council should be permanently activated.', 'Governor should be an eminent person outside state politics, appointed in consultation with Chief Minister.', 'Article 356 must be used only as an extreme last resort.'] },
      { name: 'Punchhi Commission', year: 2010, recommendations: ['Governor should have a fixed 5-year tenure and removal should be by impeachment process akin to President.', 'Doctrine of executive necessity should be codified.'] }
    ],
    reports: [
      { name: '15th Finance Commission Final Report', publisher: 'Finance Commission of India', year: 2021, keyFindings: 'Maintained 41% vertical devolution; introduced performance-linked grants for air quality, water sanitation, and primary health.' },
      { name: 'NITI Aayog Fiscal Federalism Working Paper', publisher: 'NITI Aayog', year: 2023, keyFindings: 'Identified gaps in own-source revenue mobilization of local governments (ULBs collect <1% of GDP in taxes).' }
    ],
    schemes: ['Centrally Sponsored Schemes (CSS) Rationalisation', 'Scheme for Special Assistance to States for Capital Investment (Interest-free 50-year loans)'],
    currentAffairsIds: ['ca-governor-assent-bills', 'ca-16th-finance-commission'],
    prelimsFacts: [
      'Residuary legislative powers belong to the Centre (Article 248) under the Indian Constitution, unlike the USA or Switzerland.',
      'Parliament can legislate on State List subjects under Art 249 (Rajya Sabha resolution by 2/3rd majority), Art 250 (National Emergency), Art 252 (Request of two or more States), and Art 253 (International Agreements).',
      'The 3Fs of local governance: Functions (29 in 11th Schedule, 18 in 12th Schedule), Funds (State Finance Commission under 243I/243Y, property taxes), and Functionaries (staff and administrative capacity).'
    ],
    mainsPointers: [
      'Evaluate Sarkaria and Punchhi Commission recommendations on the Governor’s role.',
      'Analyze the impact of cess/surcharge proliferation on state developmental budgets.',
      'Discuss how asymmetric federalism (Articles 371 to 371J, Sixth Schedule Autonomous District Councils) accommodated cultural diversity.'
    ],
    examples: [
      { title: 'GST Dispute Mechanism', description: 'Consensus-driven model in GST Council where over 95% of decisions were taken unanimously without formal voting.', source: 'GST Council Secretariat' },
      { title: 'UP Model Gram Panchayat Digital Citizen Services', description: 'UP established Panchayat Sachivalayas in 58,000+ gram panchayats with broadband connectivity for CSC delivery.', source: 'Panchayati Raj Dept, Govt of Uttar Pradesh', upRelevance: true }
    ],
    sources: [
      { title: 'Sarkaria Commission Report on Centre-State Relations', organization: 'Ministry of Home Affairs', url: 'https://interstatecouncil.gov.in', publicationDate: '1988-01-01', lastVerified: '2026-09-20', status: 'official' },
      { title: '15th Finance Commission Report for 2021-26', organization: 'Ministry of Finance', url: 'https://fincomindia.nic.in', publicationDate: '2021-02-01', lastVerified: '2026-09-22', status: 'official' }
    ],
    lastVerified: '2026-09-24',
    claimType: 'ANALYSIS'
  },
  {
    id: 'topic-judiciary-separation-powers',
    title: 'Judiciary and Separation of Powers: Hierarchy, Judicial Independence, Activism, and Reforms',
    category: 'Polity',
    subtopic: 'Judicial Appointments, Review, and Subordinate Courts',
    examRelevance: ['UPSC', 'UPPSC', 'State PSC'],
    examSpecificNotes: {
      upsc: 'Collegium transparency, Article 142 complete justice, judicial activism vs judicial overreach, tribunalisation, and case pendency.',
      uppsc: 'Allahabad High Court (largest sanctioned strength in India with 160 judges), UP Subordinate Judicial Services, Lok Adalats, and Gram Nyayalayas in UP.'
    },
    summary: 'Covers the structure of India’s integrated judiciary, appointment of judges, judicial review, contempt of court, public interest litigation (PIL), tribunal reforms, and systemic delays.',
    staticContent: 'India has an integrated judicial system with the Supreme Court at the apex, High Courts at the state level, and subordinate courts below them. The Supreme Court has Original (Art 131), Appellate (Art 132-134), Advisory (Art 143), Writ (Art 32), and Special Leave (Art 136) jurisdictions. Article 142 empowers the SC to pass any decree necessary for doing "complete justice".',
    easyExplanation: 'The judiciary interprets the laws, protects citizen rights, and ensures the government stays within constitutional boundaries.',
    advancedAnalysis: 'The Indian judiciary exercises immense moral authority but suffers from debilitating administrative deficits. Key challenges: (1) Over 5.1 crore pending cases across all tiers, with subordinate courts carrying 87% of the pendency, (2) Judicial appointments impasse: tension between the executive and the Supreme Court Collegium over Memorandum of Procedure (MoP) revision, (3) Judicial Overreach: entering policy domains (e.g., liquor ban on highways, firecracker bans) without fiscal or executive accountability, (4) Inadequate budget allocation (<0.1% of GDP allocated to judiciary).',
    constitutionalBasis: [
      { article: '50', title: 'Separation of Judiciary from Executive', provision: 'The State shall take steps to separate the judiciary from the executive in the public services.' },
      { article: '124-147', title: 'The Union Judiciary', provision: 'Establishment, jurisdiction, powers, and procedure of the Supreme Court.' },
      { article: '142', title: 'Complete Justice', provision: 'Enforcement of decrees and orders of Supreme Court in the interest of doing complete justice in any cause or matter.' },
      { article: '214-231', title: 'High Courts in the States', provision: 'Establishment, powers, writ jurisdiction (Art 226), and superintendence (Art 227).' }
    ],
    laws: ['Judges (Enquiry) Act 1968', 'Tribunals Reforms Act 2021', 'Legal Services Authorities Act 1987', 'Gram Nyayalayas Act 2008'],
    judgments: [
      { name: 'Supreme Court Advocates-on-Record Association (NJAC Case)', year: 2015, principle: 'Struck down 99th Constitutional Amendment and NJAC; judicial primacy in appointments is basic structure.', relevance: 'Reaffirmed Collegium system.' },
      { name: 'Common Cause v. Union of India', year: 2018, principle: 'Recognized passive euthanasia and living wills under Article 21 using Article 142.', relevance: 'Demonstration of complete justice power.' },
      { name: 'Madras Bar Association v. Union of India', year: 2021, principle: 'Struck down provisions of Tribunals Reforms Act that infringed judicial independence and tenure.', relevance: 'Checks on executive control of quasi-judicial tribunals.' }
    ],
    committees: [
      { name: 'Malimath Committee', year: 2003, recommendations: ['Comprehensive overhaul of the criminal justice system.', 'Inquisitorial elements in criminal trial.'] },
      { name: 'Law Commission of India (230th & 245th Reports)', year: 2014, recommendations: ['Abolition of court vacation system.', 'Creation of All India Judicial Service (AIJS) under Article 312.'] }
    ],
    reports: [
      { name: 'India Justice Report 2023', publisher: 'Tata Trusts & Partners', year: 2023, keyFindings: 'Subordinate courts have nearly 21% vacancies; national judge-to-population ratio is only ~21 per million against Law Commission recommendation of 50 per million.' }
    ],
    schemes: ['e-Courts Integrated Mission Mode Project (Phase III)', 'Tele-Law Service (NALSA & Dept of Justice)'],
    currentAffairsIds: ['ca-sc-collegium-transparency', 'ca-all-india-judicial-service'],
    prelimsFacts: [
      'Retirement age of Supreme Court judges is 65 years; High Court judges is 62 years.',
      'Supreme Court judge can be removed only by an order of the President passed after an address by each House of Parliament supported by a special majority (majority of total membership and not less than 2/3rd of members present and voting).',
      'Article 131 gives SC exclusive original jurisdiction in disputes between Government of India and one or more States, or between two or more States (excluding inter-state river disputes barred by Art 262).'
    ],
    mainsPointers: [
      'Debate between Judicial Activism vs Judicial Overreach.',
      'Need and challenges of establishing the All India Judicial Service (AIJS) under Article 312.',
      'Deploying AI and digital infrastructure (SUPACE, SUVAS, e-Courts Phase III) to tackle case pendency.'
    ],
    examples: [
      { title: 'National Judicial Data Grid (NJDG)', description: 'Real-time open tracking of over 4.4 crore cases providing transparency on pendency across all district and high courts.', source: 'e-Committee, Supreme Court of India' },
      { title: 'Allahabad High Court Case Pendency Intervention', description: 'Setting up dedicated special benches for criminal appeals older than 30 years in UP.', source: 'High Court of Judicature at Allahabad', upRelevance: true }
    ],
    sources: [
      { title: 'Annual Report 2023-24', organization: 'Supreme Court of India', url: 'https://main.sci.gov.in', publicationDate: '2024-03-01', lastVerified: '2026-09-20', status: 'official' },
      { title: 'India Justice Report', organization: 'Tata Trusts', url: 'https://indiajusticereport.org', publicationDate: '2023-04-04', lastVerified: '2026-09-21', status: 'verified_secondary' }
    ],
    lastVerified: '2026-09-24',
    claimType: 'ANALYSIS'
  },
  {
    id: 'topic-centre-state-relations-emergency-governor',
    title: 'Centre-State Relations, 7th Schedule Principles, Emergency Provisions & Role of Governor',
    category: 'Polity',
    subtopic: 'Inter-State Relations & Federal Friction Points',
    examRelevance: ['UPSC', 'UPPSC', 'State PSC'],
    examSpecificNotes: {
      upsc: 'Focus on 7th schedule doctrines (pith & substance, colorable legislation, repugnancy Art 254), cesses/surcharges, Article 356 misuse, and Sarkaria/Punchhi commission norms.',
      uppsc: 'Focus on UP Governor role, Inter-State water issues (Yamuna/Betwa water accords), and State Finance Commission recommendations.'
    },
    summary: 'Comprehensive analysis of Legislative (Arts 245-255), Administrative (Arts 256-263), and Financial relations (Arts 268-293), Inter-State disputes, Emergency powers, and the constitutional friction surrounding the Governor\'s office.',
    staticContent: 'The 7th Schedule divides powers into Union List (List I - 100 items), State List (List II - 61 items), and Concurrent List (List III - 52 items). Residuary powers are vested in Parliament under Article 248. The Constitution contains inter-state dispute resolution mechanisms including Inter-State River Water Disputes Tribunals under Article 262 and Inter-State Council under Article 263.',
    easyExplanation: 'India balances central unity with state powers. When conflicts arise over laws, central law prevails on concurrent subjects. Governors represent the Centre in states, which sometimes causes friction when different parties rule.',
    advancedAnalysis: 'Contemporary federalism is tested along multiple structural fault lines: (1) Legislative: Centralization via expansive interpretation of Union/Concurrent entries (e.g. farm laws, electricity amendment); (2) Financial: Expansion of non-divisible cesses and surcharges (exceeding 20% of gross tax revenue), off-budget borrowing caps on states under Article 293(3), and delays in GST compensation cess cessations; (3) Administrative: Withholding or indefinite delay of gubernatorial assent to State bills (Article 200), appointment of Governors without state consultation, and misuse of central investigative agencies.',
    constitutionalBasis: [
      { article: '245-255', title: 'Legislative Relations', provision: 'Territorial extent, subject-matter division, Parliament\'s power to legislate on State List items in national interest (Art 249, 250, 252, 253).' },
      { article: '256-263', title: 'Administrative Relations', provision: 'Compliance of State laws, Union directions, delegation of functions, All India Services (Art 312), Inter-State Council (Art 263).' },
      { article: '262', title: 'Inter-State River Water Disputes', provision: 'Parliament may by law provide for adjudication of disputes relating to waters of inter-state rivers and bar Supreme Court jurisdiction.' },
      { article: '268-293', title: 'Financial Relations', provision: 'Distribution of taxes, GST Council (Art 279A), Grants-in-Aid (Art 275), State borrowing powers (Art 293).' },
      { article: '352, 356, 360', title: 'Emergency Provisions', provision: 'National Emergency, President\'s Rule on failure of constitutional machinery, and Financial Emergency.' }
    ],
    laws: ['Inter-State River Water Disputes Act 1956', 'States Reorganisation Act 1956 (Zonal Councils)', 'Goods and Services Tax (GST) Acts 2017'],
    judgments: [
      { name: 'S.R. Bommai v. Union of India', year: 1994, principle: 'Presidential proclamation under Article 356 is subject to judicial review; floor test in Legislative Assembly is the only valid forum to test majority.', relevance: 'Dramatically curtailed arbitrary imposition of President\'s Rule.' },
      { name: 'State of Punjab v. Principal Secretary to Governor', year: 2023, principle: 'Governor cannot sit indefinitely on bills passed by State Legislature; if assent is withheld, bill must be returned "as soon as possible" with a message under Article 200.', relevance: 'Checked gubernatorial pocket vetoes on state enactments.' },
      { name: 'Union of India v. Mohit Minerals (GST Council Ruling)', year: 2022, principle: 'GST Council recommendations are not unexceptionally binding on State Legislatures; Indian federalism is a dialogue between cooperative partners.', relevance: 'Affirmed simultaneous legislative power under Article 246A.' }
    ],
    committees: [
      { name: 'Sarkaria Commission on Centre-State Relations', year: 1988, recommendations: ['Governor should be an eminent person outside state politics.', 'Article 356 to be used only as a measure of last resort (in extremis).', 'Activation of Inter-State Council under Article 263.'] },
      { name: 'M.M. Punchhi Commission', year: 2010, recommendations: ['Fixed 5-year tenure for Governors; removal by impeachment by State Legislature on lines of President.', 'Doctrine of executive necessity to be strictly constrained.'] }
    ],
    reports: [
      { name: 'Report on Fiscal Federalism', publisher: 'NITI Aayog / 15th Finance Commission', year: 2021, keyFindings: 'Need to rationalize Centrally Sponsored Schemes and contain off-budget fiscal risks of states while ensuring national priorities.' }
    ],
    schemes: ['Special Assistance to States for Capital Investment (50-year interest-free loans)'],
    currentAffairsIds: ['ca-governor-bill-withholding', 'ca-inter-state-water-amendment'],
    prelimsFacts: [
      'Under Article 262, Parliament enacted the Inter-State River Water Disputes Act, 1956; Supreme Court and other courts have NO jurisdiction over water disputes referred to a Tribunal.',
      'Zonal Councils are STATUTORY bodies established under the States Reorganisation Act 1956 (chaired by the Union Home Minister).',
      'North-Eastern Council is a separate statutory body created under the North-Eastern Council Act, 1971.',
      'Article 248 vests residuary powers of legislation exclusively in Parliament (unlike USA and Australia where residuary powers belong to states).'
    ],
    mainsPointers: [
      'Evaluate the evolving role of the Governor: from an "elder statesman" to an instrument of partisan central friction.',
      'Analyze the impact of GST Council and 15th Finance Commission awards on Cooperative Fiscal Federalism.',
      'Assess why Inter-State Water Disputes Tribunals suffer from protracted delays (Cauvery, Krishna, Sutlej-Yamuna Link) and suggest institutional remedies.'
    ],
    examples: [
      { title: 'Ken-Betwa River Interlinking Project', description: 'Historic tripartite agreement between Union Jal Shakti Ministry, MP, and UP to transfer surplus water from Ken basin to drought-prone Bundelkhand region.', source: 'Ministry of Jal Shakti', upRelevance: true }
    ],
    sources: [
      { title: 'Sarkaria Commission Report on Centre-State Relations', organization: 'Ministry of Home Affairs', url: 'https://interstatecouncil.gov.in', publicationDate: '1988-01-01', lastVerified: '2026-09-20', status: 'official' },
      { title: 'M.M. Punchhi Commission Report', organization: 'Inter-State Council Secretariat', url: 'https://interstatecouncil.gov.in', publicationDate: '2010-04-01', lastVerified: '2026-09-20', status: 'official' }
    ],
    lastVerified: '2026-09-24',
    claimType: 'ANALYSIS'
  },
  {
    id: 'topic-local-governance-3f-devolution',
    title: 'Decentralisation and Local Governance: 73rd & 74th Amendments, 3F Devolution, and PESA',
    category: 'Polity',
    subtopic: 'Panchayati Raj & Urban Local Bodies',
    examRelevance: ['UPSC', 'UPPSC', 'State PSC'],
    examSpecificNotes: {
      upsc: 'Focus on 3Fs starvation (Functions, Funds, Functionaries), Panchayat Devolution Index by MoPR/NITI Aayog, and PESA Act 1996 in Scheduled Areas.',
      uppsc: 'Focus on UP Panchayati Raj Act 1947, UP Municipalities Act 1916, UP State Finance Commission, and Gram Panchayat Sachiv cadre.'
    },
    summary: 'The third tier of Indian democracy, analyzing constitutional mandates under Part IX and IXA, 11th and 12th Schedules, State Finance Commissions, and structural barriers to effective grassroots autonomy.',
    staticContent: '73rd and 74th Constitutional Amendment Acts (1992) accorded constitutional status to Panchayati Raj Institutions (PRIs) and Urban Local Bodies (ULBs). Added Part IX (Arts 243 to 243O) and Part IXA (Arts 243P to 243ZG), along with 11th Schedule (29 functional subjects) and 12th Schedule (18 functional subjects). Mandated 33% reservation for women, State Election Commission (Art 243K), and State Finance Commission (Art 243I).',
    easyExplanation: 'Village Panchayats and City Municipalities bring democracy to citizens\' doorsteps. They manage local roads, sanitation, drinking water, and schools.',
    advancedAnalysis: 'Despite 30+ years of constitutionalization, local bodies suffer from severe structural "3Fs Starvation": (1) Functions: Incomplete functional devolution by state line departments; (2) Funds: Chronic lack of own-source revenue (own-tax revenue of Panchayats is less than 5% of total revenue); state governments delay or reject State Finance Commission recommendations; (3) Functionaries: Severe staff shortages, dual allegiance of deputed state administrative officers (BDOs, Executive Officers) who undermine elected Sarpanches/Mayors. In Fifth Schedule tribal areas, PESA Act 1996 Gram Sabha powers are regularly bypassed for mining and industrial acquisitions.',
    constitutionalBasis: [
      { article: '40', title: 'Organization of Village Panchayats', provision: 'DPSP directive to organize village panchayats as units of self-government.' },
      { article: '243-243O', title: 'Part IX - The Panchayats', provision: 'Three-tier structure (Gram, Intermediate, District), Gram Sabha, reservations, elections, and 11th Schedule powers.' },
      { article: '243I & 243Y', title: 'State Finance Commission', provision: 'Constituted every 5 years by Governor to review financial position of local bodies.' },
      { article: '243K & 243ZA', title: 'State Election Commission', provision: 'Superintendence, direction, and control of local body elections.' },
      { article: '243ZD & 243ZE', title: 'District & Metropolitan Planning Committees', provision: 'Consolidate plans prepared by Panchayats and Municipalities.' }
    ],
    laws: ['Provisions of the Panchayats (Extension to the Scheduled Areas) Act, 1996 (PESA)', 'State Panchayati Raj Acts'],
    judgments: [
      { name: 'K. Krishna Murthy v. Union of India', year: 2010, principle: 'Reservation for OBCs in local bodies is constitutionally permissible subject to the "Triple Test" (empirical commission, proportionate quota, 50% aggregate cap).', relevance: 'Governs OBC reservation criteria in Panchayat/Municipal elections.' },
      { name: 'Suresh Mahajan v. State of MP', year: 2022, principle: 'No election to local bodies can be deferred beyond the 5-year constitutional term; State Election Commission must conduct elections promptly upon expiry of tenure.', relevance: 'Enforces strict adherence to 5-year constitutional term under Art 243E.' }
    ],
    committees: [
      { name: 'Balwant Rai Mehta Committee', year: 1957, recommendations: ['Pioneered democratic decentralization and recommended three-tier Panchayati Raj system.'] },
      { name: 'Ashok Mehta Committee', year: 1977, recommendations: ['Recommended 2-tier system (Zila Parishad and Mandal Panchayat) with political party participation.'] },
      { name: 'L.M. Singhvi Committee', year: 1986, recommendations: ['Recommended according constitutional recognition and protection to Panchayati Raj institutions.'] }
    ],
    reports: [
      { name: 'Panchayat Devolution Index Report', publisher: 'Ministry of Panchayati Raj / NITI Aayog', year: 2023, keyFindings: 'States like Kerala, Karnataka, and Maharashtra lead in functional and fiscal devolution; northern states lag in own-source tax collection.' }
    ],
    schemes: ['e-Gram Swaraj portal', 'SVAMITVA Scheme (drone surveying of inhabited rural abadi lands)'],
    currentAffairsIds: ['ca-svamitva-property-cards', 'ca-pesa-state-rules'],
    prelimsFacts: [
      'Rajasthan (Nagaur district) was the first state to establish Panchayati Raj on October 2, 1959, followed by Andhra Pradesh.',
      '73rd Amendment is NOT applicable to Nagaland, Meghalaya, and Mizoram, and tribal areas in Assam, Meghalaya, Tripura, Mizoram, and hill areas of Manipur.',
      'PESA Act, 1996 was enacted on the recommendations of the Dilip Singh Bhuria Committee.',
      '11th Schedule has 29 items; 12th Schedule has 18 items.'
    ],
    mainsPointers: [
      '"Panchayats in India have transformed political democracy but failed to become viable institutions of local economic self-governance." Critically evaluate.',
      'Analyze the phenomenon of "Sarpanch Pati" (proxy rule by husbands of elected women representatives) and evaluate policy interventions to foster substantive female leadership.',
      'Examine the implementation bottlenecks of the PESA Act in Fifth Schedule areas. Why has Gram Sabha consent been reduced to a bureaucratic formality?'
    ],
    examples: [
      { title: 'Hiware Bazar Gram Panchayat (Maharashtra)', description: 'Popatrao Pawar transformed a drought-prone village into a prosperous model community through watershed management, prohibition, and participatory Gram Sabha budgeting.', source: 'National Water Mission Case Studies' },
      { title: 'UP SVAMITVA "Gharauni" Property Cards', description: 'Over 60 lakh rural households in Uttar Pradesh issued digital property title cards following drone-based land parcel mapping, unlocking bank credit access.', source: 'Revenue Department, Govt of UP', upRelevance: true }
    ],
    sources: [
      { title: 'Report of the 15th Finance Commission: Local Governments', organization: 'Finance Commission of India', url: 'https://fincomindia.nic.in', publicationDate: '2021-02-01', lastVerified: '2026-09-20', status: 'official' },
      { title: 'Annual Report 2023-24', organization: 'Ministry of Panchayati Raj', url: 'https://panchayat.gov.in', publicationDate: '2024-04-15', lastVerified: '2026-09-22', status: 'official' }
    ],
    lastVerified: '2026-09-24',
    claimType: 'ANALYSIS'
  },
  {
    id: 'topic-dispute-redressal-tribunals-pil',
    title: 'Dispute Redressal Mechanisms: RTI, Public Interest Litigation (PIL), and Tribunals',
    category: 'Polity',
    subtopic: 'Judicial Institutions & Alternative Redressal',
    examRelevance: ['UPSC', 'UPPSC', 'State PSC'],
    examSpecificNotes: {
      upsc: 'Focus on Articles 323A & 323B, Tribunal Reforms Act 2021, L. Chandra Kumar ruling, and limits of PIL (preventing frivolous litigation).',
      uppsc: 'Focus on UP Public Services Tribunal, UP Real Estate Regulatory Authority (UP RERA), and Lok Adalats.'
    },
    summary: 'Analysis of non-traditional dispute resolution and adjudicatory mechanisms designed to relieve judicial congestion, expand access to justice, and enforce administrative accountability.',
    staticContent: '42nd Constitutional Amendment (1976) inserted Part XIVA containing Article 323A (Administrative Tribunals for public service matters) and Article 323B (Tribunals for other matters such as taxation, land reforms, foreign exchange). Public Interest Litigation (PIL) developed as judge-led innovation relaxing classical rules of locus standi.',
    easyExplanation: 'Courts are overloaded with millions of pending cases. Tribunals, PILs, and RTI allow faster decisions, expert technical judging, and help citizens demand justice for public issues without expensive lawyer fees.',
    advancedAnalysis: 'The Tribunalisation of Justice in India reflects a chronic constitutional tension: While created to bring technical domain expertise and speed, tribunals have frequently suffered from: (1) Executive encroachment on judicial independence through short tenures (4 years), lack of financial autonomy, and dominance of bureaucrats on search-cum-selection committees (repeatedly struck down in Madras Bar Association judgments); (2) Added appellate tier: Post-L. Chandra Kumar (1997), tribunal orders are appealable before the Division Bench of High Courts under Article 226/227, defeating the purpose of speedy single-tier disposal; (3) Pendency and vacancy crises. Similarly, PIL has faced criticism for judicial populism and frivolous litigation.',
    constitutionalBasis: [
      { article: '323A', title: 'Administrative Tribunals', provision: 'Parliament may by law provide for adjudication of disputes relating to recruitment and conditions of service of public servants.' },
      { article: '323B', title: 'Tribunals for other matters', provision: 'Parliament and State Legislatures may establish tribunals for tax, foreign exchange, industrial disputes, land reforms, rent.' },
      { article: '32 & 226', title: 'Writ Jurisdictions', provision: 'Remedies for enforcement of Fundamental Rights and legal rights, giving birth to PIL jurisprudence.' },
      { article: '39A', title: 'Equal Justice and Free Legal Aid', provision: 'DPSP guiding Legal Services Authorities Act 1987 and Lok Adalats.' }
    ],
    laws: ['Administrative Tribunals Act 1985', 'Tribunals Reforms Act 2021', 'Legal Services Authorities Act 1987 (Lok Adalats)'],
    judgments: [
      { name: 'L. Chandra Kumar v. Union of India', year: 1997, principle: 'Power of judicial review under Articles 226/227 (High Courts) and 32 (Supreme Court) is an integral part of the Basic Structure. Tribunals are subordinate to High Courts.', relevance: 'Held that tribunal decisions are subject to scrutiny by Division Benches of High Courts.' },
      { name: 'Madras Bar Association v. Union of India (Series: 2010, 2014, 2020, 2021)', year: 2021, principle: 'Struck down provisions fixing 4-year tenures, minimum age of 50 years, and executive dominance on selection committees as direct assaults on judicial independence.', relevance: 'Reiterated need for a National Tribunals Commission (NTC).' },
      { name: 'S.P. Gupta v. Union of India (Judges Transfer Case)', year: 1981, principle: 'Relaxed the traditional rule of locus standi; any public-spirited citizen or NGO can approach the court on behalf of disadvantaged persons.', relevance: 'Pioneered Public Interest Litigation in India.' }
    ],
    committees: [
      { name: 'Swaran Singh Committee', year: 1976, recommendations: ['Recommended insertion of Part XIVA (Articles 323A and 323B) to establish specialized tribunals.'] },
      { name: 'Justice V.S. Malimath Committee on Tribunals', year: 1990, recommendations: ['Proposed comprehensive restructuring and oversight of central and state tribunals.'] }
    ],
    reports: [
      { name: 'Law Commission of India Report No. 272', publisher: 'Law Commission of India', year: 2017, keyFindings: 'Recommended uniform terms and conditions of service for tribunal members and establishment of a statutory National Tribunals Commission.' }
    ],
    schemes: ['National Legal Services Authority (NALSA) Free Legal Aid', 'e-Lok Adalats'],
    currentAffairsIds: ['ca-tribunal-reforms-act-controversy', 'ca-pil-guidelines-review'],
    prelimsFacts: [
      'Article 323A can be established ONLY by Parliament, whereas Article 323B tribunals can be established by BOTH Parliament and State Legislatures.',
      'Under Article 323A, there is no hierarchy of tribunals (only one Central and one State tribunal for each state/joint), whereas under Article 323B a hierarchy can be created.',
      'Lok Adalat awards have the statutory status of a civil court decree under Legal Services Authorities Act 1987, and NO APPEAL lies against an award of Lok Adalat.'
    ],
    mainsPointers: [
      'Critically examine whether the tribunalisation of justice in India has delivered on its promise of speedy, specialized dispute resolution or merely created "bureaucratic post-retirement rehabilitation centres".',
      'Assess the case for creating an independent, statutory "National Tribunals Commission" to oversee tribunal appointments, infrastructure, and budgeting.',
      'Discuss the evolution of PIL from a tool of public interest to private interest litigation and evaluate measures to curb judicial overreach.'
    ],
    examples: [
      { title: 'UP Real Estate Regulatory Authority (UP RERA)', description: 'Adjudicated over 50,000 homebuyer-builder disputes in Noida, Greater Noida, and Lucknow, recovering hundreds of crores in recovery certificates.', source: 'UP RERA Annual Performance Review 2023', upRelevance: true }
    ],
    sources: [
      { title: 'Report No. 272 on Assessment of Statutory Framework of Tribunals', organization: 'Law Commission of India', url: 'https://lawcommissionofindia.nic.in', publicationDate: '2017-10-27', lastVerified: '2026-09-20', status: 'official' }
    ],
    lastVerified: '2026-09-24',
    claimType: 'ANALYSIS'
  }
];
