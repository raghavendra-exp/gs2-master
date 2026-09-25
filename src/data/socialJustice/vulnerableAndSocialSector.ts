export interface StatutoryProtectionLaw {
  id: string;
  category: 'SCs & STs' | 'Persons with Disabilities' | 'Women' | 'Children' | 'Elderly' | 'Transgender' | 'Minorities';
  lawName: string;
  yearEnacted: number;
  coreProvisions: string[];
  institutionalMechanism: string;
  penaltiesOrRelief: string;
  implementationChallenges: string[];
  mainsSignificance: string;
}

export interface SocialSectorMetric {
  sector: 'Health' | 'Education' | 'Human Resources' | 'Poverty & Hunger';
  keyIndicators: { name: string; currentFigure: string; targetOrGlobalBenchmark: string; source: string }[];
  structuralWeaknesses: string[];
  majorPoliciesAndActs: string[];
  landmarkReports: { title: string; committeeOrBody: string; year: number; keyTakeaways: string }[];
  reformRoadmap: string[];
}

export interface DevelopmentIndustryActor {
  id: string;
  actorType: 'NGOs' | 'Self Help Groups (SHGs)' | 'Cooperatives' | 'Societies and Trusts';
  constitutionalAndLegalBasis: string;
  roleAndContribution: string[];
  keySuccessCaseStudies: { name: string; region: string; impact: string }[];
  regulatoryAndOperationalChallenges: string[];
  reformMeasures: string[];
}

export const VULNERABLE_SECTION_LAWS: StatutoryProtectionLaw[] = [
  // --- SCs & STs ---
  {
    id: 'law-pcr-1955',
    category: 'SCs & STs',
    lawName: 'Protection of Civil Rights (PCR) Act, 1955',
    yearEnacted: 1955,
    coreProvisions: [
      'Prescribes punishment for the preaching and practice of "Untouchability" in any form, operationalizing Article 17.',
      'Penalizes refusal of admission to hospitals, educational institutions, or places of public entertainment/worship on ground of untouchability.',
      'Shifts burden of proof to the accused under Section 12.'
    ],
    institutionalMechanism: 'State Governments and Special Courts; Union Ministry of Social Justice and Empowerment submits annual statutory reports to Parliament.',
    penaltiesOrRelief: 'Imprisonment ranging from 1 month to 6 months and fines; cancellation of public licenses.',
    implementationChallenges: ['Low conviction rates, police reluctance to register FIRs, and social boycott of reporting victims.'],
    mainsSignificance: 'Fundamental statutory tool for dismantling caste apartheid and securing equal civic participation.'
  },
  {
    id: 'law-poa-1989',
    category: 'SCs & STs',
    lawName: 'Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989 (Amended 2015 & 2018)',
    yearEnacted: 1989,
    coreProvisions: [
      'Criminalizes 29 distinct forms of atrocities, social humiliation, economic exploitation, and caste slurs against SC/ST individuals.',
      'Mandatory establishment of Exclusive Special Courts at district level and Special Public Prosecutors.',
      'Section 18 bars grant of Anticipatory Bail under Section 438 of CrPC for offences under the Act.',
      '2018 Amendment inserted Section 18A: preliminary enquiry is NOT required prior to FIR registration, and arrest does not require approval of appointing authority (nullifying Subhash Kashinath Mahajan judgment).'
    ],
    institutionalMechanism: 'Exclusive Special Courts, District Level Vigilance & Monitoring Committees, State Nodal Officers.',
    penaltiesOrRelief: 'Stringent imprisonment ranging from 6 months to life imprisonment; structured financial relief/rehabilitation package for victims.',
    implementationChallenges: ['High pendency in courts (over 80% pending cases), witness hostility, delays in compensation disbursement.'],
    mainsSignificance: 'Core legal charter against violent casteism; balanced between civil liberties and affirmative protection.'
  },
  {
    id: 'law-fra-2006',
    category: 'SCs & STs',
    lawName: 'Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006 (FRA)',
    yearEnacted: 2006,
    coreProvisions: [
      'Recognizes individual forest rights (IFR) up to 4 hectares for pre-2005 cultivation, and Community Forest Rights (CFR) over minor forest produce (MFP), grazing, and water bodies.',
      'Recognizes right to protect, regenerate, conserve, or manage community forest resources.',
      'Empowers Gram Sabha as the supreme statutory authority to initiate the process for determining nature and extent of forest rights.'
    ],
    institutionalMechanism: 'Three-tier structure: Gram Sabha (Sub-Divisional Level Committee SDLC, District Level Committee DLC chaired by District Collector).',
    penaltiesOrRelief: 'Legal immunity from eviction from forest lands until verification process is complete.',
    implementationChallenges: ['Arbitrary rejection of land claims by forest bureaucracy without giving reasons; friction with wildlife conservation lobbies.'],
    mainsSignificance: 'Historical undoing of colonial injustice; democratizing forest governance through Gram Sabha sovereignty.'
  },

  // --- Persons with Disabilities ---
  {
    id: 'law-rpwd-2016',
    category: 'Persons with Disabilities',
    lawName: 'Rights of Persons with Disabilities (RPwD) Act, 2016',
    yearEnacted: 2016,
    coreProvisions: [
      'Replaced PwD Act 1995; expanded recognized disabilities from 7 to 21 types (including mental illness, autism, cerebral palsy, muscular dystrophy, acid attack victims, Parkinson\'s, and blood disorders like Thalassemia).',
      'Increased reservation for persons with benchmark disabilities from 3% to 4% in government jobs, and from 3% to 5% in higher educational institutions.',
      'Guarantees free education for children with benchmark disabilities between 6 and 18 years.',
      'Mandatory accessibility standards for public buildings, transport, websites, and consumer products.'
    ],
    institutionalMechanism: 'Chief Commissioner for Persons with Disabilities (Centre), State Commissioners, and Special Courts in each district.',
    penaltiesOrRelief: 'Penal provisions (imprisonment up to 2 years and fines up to ₹5 Lakhs) for insults, atrocities, or denial of rights to disabled persons.',
    implementationChallenges: ['Slow physical retrofitting of public infrastructure (Accessible India Campaign gaps); lack of assistive technologies in schools.'],
    mainsSignificance: 'Transitions disability policy from charity/welfare model to rights-based social model in accordance with UNCRPD.'
  },

  // --- Women ---
  {
    id: 'law-dv-2005',
    category: 'Women',
    lawName: 'Protection of Women from Domestic Violence Act (PWDVA), 2005',
    yearEnacted: 2005,
    coreProvisions: [
      'Comprehensive definition of domestic violence covering physical, sexual, verbal, emotional, and economic abuse.',
      'Secures right to reside in the shared household (Section 17), irrespective of title or ownership.',
      'Provides emergency civil reliefs: Protection Orders, Residence Orders, Monetary Relief, and Custody Orders without requiring a formal divorce proceeding.'
    ],
    institutionalMechanism: 'Protection Officers (POs), Service Providers (NGOs), and Judicial Magistrates First Class.',
    penaltiesOrRelief: 'Breach of Protection Order is a cognizable and non-bailable offence punishable with imprisonment up to 1 year.',
    implementationChallenges: ['Inadequate full-time Protection Officers (often given as dual charge to block officers); deficit in shelter homes.'],
    mainsSignificance: 'Revolutionary civil law weapon securing immediate spatial and economic protection for battered women.'
  },
  {
    id: 'law-posh-2013',
    category: 'Women',
    lawName: 'Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH)',
    yearEnacted: 2013,
    coreProvisions: [
      'Codified and expanded the Supreme Court\'s landmark Vishaka Guidelines (1997).',
      'Mandatory constitution of Internal Complaints Committee (ICC) in all workplaces employing 10 or more workers.',
      'Mandatory Local Complaints Committee (LCC) at district level for unorganized sector, domestic workers, and small establishments.',
      'Strict confidentiality requirements regarding inquiry proceedings.'
    ],
    institutionalMechanism: 'Internal Complaints Committees (headed by a senior woman employee) and District Officers.',
    penaltiesOrRelief: 'Cancellation of business licenses and fine up to ₹50,000 for non-compliance; service disciplinary actions against perpetrators.',
    implementationChallenges: ['Poor establishment of Local Committees for informal women workers; fear of career retaliation; lack of awareness.'],
    mainsSignificance: 'Safe economic spaces; constitutional enforcement of Article 14, 19(1)(g), and 21 for working women.'
  },
  {
    id: 'law-maternity-2017',
    category: 'Women',
    lawName: 'Maternity Benefit (Amendment) Act, 2017',
    yearEnacted: 2017,
    coreProvisions: [
      'Increased paid maternity leave for women employees from 12 weeks to 26 weeks for up to the first two surviving children (12 weeks for subsequent children).',
      'Extended 12-week paid maternity leave to adopting mothers and commissioning (surrogate) mothers.',
      'Mandatory creche facility in every establishment employing 50 or more employees, with 4 daily visits permitted to the mother.',
      'Work-from-home provision after expiry of 26-week period upon mutual agreement.'
    ],
    institutionalMechanism: 'Chief Inspector of Factories and Labor Commissioners.',
    penaltiesOrRelief: 'Employer liability to pay full average daily wages; imprisonment for wrongful dismissal during maternity.',
    implementationChallenges: ['Unintended consequence of hiring bias against female candidates in private sector where employers bear 100% wage cost (unlike global state-sponsored social security funding).'],
    mainsSignificance: 'Maternal health protection, infant cognitive development, and female labor force retention.'
  },
  {
    id: 'law-pcpndt-1994',
    category: 'Women',
    lawName: 'Pre-Conception and Pre-Natal Diagnostic Techniques (PC&PNDT) Act, 1994',
    yearEnacted: 1994,
    coreProvisions: [
      'Prohibits sex selection before or after conception and bans disclosure of sex of foetus.',
      'Regulates use of pre-natal diagnostic techniques (ultrasound machines, genetic clinics) solely for detecting genetic abnormalities.',
      'Mandatory registration of all ultrasound clinics, genetic counseling centres, and imaging laboratories.'
    ],
    institutionalMechanism: 'Central Supervisory Board, State Supervisory Boards, and District Appropriate Authorities (Civil Surgeons / District Magistrates).',
    penaltiesOrRelief: 'Imprisonment up to 3 years and fine up to ₹10,000 (first offence); suspension/cancellation of medical license.',
    implementationChallenges: ['Prosecution delays; portable handheld ultrasound machines used in clandestine rural clinics.'],
    mainsSignificance: 'Combatting female foeticide and improving Child Sex Ratio (CSR) under Beti Bachao Beti Padhao mission.'
  },

  // --- Children ---
  {
    id: 'law-pocso-2012',
    category: 'Children',
    lawName: 'Protection of Children from Sexual Offences (POCSO) Act, 2012 (Amended 2019)',
    yearEnacted: 2012,
    coreProvisions: [
      'Gender-neutral legislation protecting all children below 18 years from sexual assault, sexual harassment, and child pornography.',
      'Defines Aggravated Penetrative Sexual Assault with enhanced minimum mandatory sentences (death penalty introduced in 2019 for penetrative assault on child below 12 years).',
      'Mandatory reporting of sexual offences with legal protection for whistleblowers; failure to report is a penal offence.',
      'Child-friendly court procedures: recording evidence via video link, no cross-examination by accused, in-camera trials.'
    ],
    institutionalMechanism: 'Special Courts designated under POCSO, Special Juvenile Police Units (SJPUs), Child Welfare Committees (CWCs).',
    penaltiesOrRelief: 'Stringent minimum mandatory imprisonment ranging from 3 years to life imprisonment/death penalty; mandatory interim compensation.',
    implementationChallenges: ['High pendency in Special Courts; misuse in consensual adolescent romance cases (leading to Law Commission review).'],
    mainsSignificance: 'Zero-tolerance child protection jurisprudence and mental health safeguarding.'
  },
  {
    id: 'law-jj-2015',
    category: 'Children',
    lawName: 'Juvenile Justice (Care and Protection of Children) Act, 2015 (Amended 2021)',
    yearEnacted: 2015,
    coreProvisions: [
      'Permits juveniles in conflict with law between 16 and 18 years to be tried as adults for "heinous offences" after preliminary assessment by Juvenile Justice Board (JJB).',
      'Streamlines adoption procedures under Central Adoption Resource Agency (CARA).',
      '2021 Amendment empowered District Magistrates (DMs) to issue adoption orders directly, replacing court orders for faster clearance.'
    ],
    institutionalMechanism: 'Juvenile Justice Boards (JJBs), Child Welfare Committees (CWCs), CARA, District Child Protection Units (DCPUs).',
    penaltiesOrRelief: 'Institutional care, foster care, sponsorship, and adoption.',
    implementationChallenges: ['Overburdened DMs delaying adoption clearances; substandard conditions in child observation homes.'],
    mainsSignificance: 'Delicate balance between child rehabilitation and accountability in violent juvenile crime.'
  },

  // --- Elderly ---
  {
    id: 'law-senior-citizens-2007',
    category: 'Elderly',
    lawName: 'Maintenance and Welfare of Parents and Senior Citizens Act, 2007',
    yearEnacted: 2007,
    coreProvisions: [
      'Obligates adult children and legal heirs to maintain parents and senior citizens (food, clothing, residence, medical care).',
      'Empowers Maintenance Tribunals to order monthly maintenance allowance up to ₹10,000 (cap proposed to be removed in pending amendment bill).',
      'Section 23: Voiding of property transfers if condition of care and basic physical needs is breached by transferee.',
      'Mandates establishment of old age homes in every district.'
    ],
    institutionalMechanism: 'Maintenance Tribunals (headed by Sub-Divisional Officers SDO/SDM) and Appellate Tribunals.',
    penaltiesOrRelief: 'Abandonment of senior citizen is a cognizable offence punishable with imprisonment up to 3 months and fines.',
    implementationChallenges: ['Senior citizens reluctant to drag own children to tribunals due to emotional attachment; poor quality of district old age homes.'],
    mainsSignificance: 'Addressing rapid demographic ageing (elderly population projected to touch 20% by 2050).'
  },

  // --- Transgender ---
  {
    id: 'law-transgender-2019',
    category: 'Transgender',
    lawName: 'Transgender Persons (Protection of Rights) Act, 2019',
    yearEnacted: 2019,
    coreProvisions: [
      'Prohibits discrimination against transgender persons in education, employment, healthcare, and public facilities.',
      'Recognizes right to self-perceived gender identity; provides certificate of identity issued by District Magistrate.',
      'Requires sex reassignment surgery (SRS) proof for change of gender to male/female in official identity documents.',
      'Establishes the National Council for Transgender Persons (NCTP).'
    ],
    institutionalMechanism: 'National Council for Transgender Persons (chaired by Minister of Social Justice), District Magistrates.',
    penaltiesOrRelief: 'Punishment from 6 months to 2 years for forcing transgender persons into bonded labor or sexual abuse.',
    implementationChallenges: ['Criticized by activists for requiring medical certificate of surgery to change gender from transgender to male/female, seen as diluting NALSA (2014) self-identification right.'],
    mainsSignificance: 'Constitutional realization of Article 14 and 21 for sexual and gender minorities; supported by the SMILE scheme.'
  }
];

export const SOCIAL_SECTOR_METRICS: SocialSectorMetric[] = [
  {
    sector: 'Health',
    keyIndicators: [
      { name: 'Infant Mortality Rate (IMR)', currentFigure: '28 per 1,000 live births (SRS 2020)', targetOrGlobalBenchmark: 'SDG target <= 12 per 1,000', source: 'Registrar General of India (SRS)' },
      { name: 'Maternal Mortality Ratio (MMR)', currentFigure: '97 per 100,000 live births (SRS 2018-20)', targetOrGlobalBenchmark: 'SDG target <= 70 per 100,000', source: 'SRS Bulletin' },
      { name: 'Total Fertility Rate (TFR)', currentFigure: '2.0 (below replacement level of 2.1)', targetOrGlobalBenchmark: 'Stabilization benchmark: 2.1', source: 'NFHS-5' },
      { name: 'Government Health Expenditure as % of GDP', currentFigure: '~1.8% of GDP', targetOrGlobalBenchmark: 'National Health Policy target: 2.5% of GDP', source: 'National Health Accounts' },
      { name: 'Out-of-Pocket Expenditure (OOPE)', currentFigure: '47.1% of total health expenditure (down from 64.2% in 2014)', targetOrGlobalBenchmark: 'Global ideal < 20%', source: 'National Health Accounts 2019-20' }
    ],
    structuralWeaknesses: [
      'Inadequate public healthcare financing forcing catastrophic out-of-pocket expenditure.',
      'Severe rural-urban disparity in specialist doctors (over 70% of specialists work in urban areas catering to 30% of population).',
      'Dual disease burden: Rising Non-Communicable Diseases (cardiovascular, diabetes, cancer accounting for 65% of deaths) alongside persistent communicable threats (TB, malaria).',
      'Antimicrobial Resistance (AMR) driven by over-the-counter antibiotic sales and poultry feed overuse.'
    ],
    majorPoliciesAndActs: [
      'National Health Policy 2017',
      'Ayushman Bharat (PM-JAY secondary/tertiary hospitalization cover of ₹5 Lakh/family + 1.6 Lakh Ayushman Arogya Mandirs)',
      'Pradhan Mantri Ayushman Bharat Health Infrastructure Mission (PM-ABHIM)',
      'National Health Mission (NHM: NRHM & NUHM)',
      'National Action Plan on Antimicrobial Resistance (NAP-AMR)'
    ],
    landmarkReports: [
      { title: 'National Family Health Survey (NFHS-5)', committeeOrBody: 'IIPS / MoHFW', year: 2021, keyTakeaways: 'Childhood stunting (35.5%), wasting (19.3%), and anaemia in women (57%) remain serious public health alarms.' },
      { title: 'NITI Aayog State Health Index', committeeOrBody: 'NITI Aayog / World Bank', year: 2023, keyTakeaways: 'Southern states (Kerala, Tamil Nadu) lead in health governance; UP has shown fastest incremental progress from low base.' }
    ],
    reformRoadmap: [
      'Hike public health spending to at least 2.5% of GDP as mandated by NHP 2017.',
      'Strengthen primary healthcare gatekeeping through Comprehensive Primary Health Care (CPHC) at Ayushman Arogya Mandirs.',
      'Digitize health records through Ayushman Bharat Digital Mission (ABDM) creating unified digital health accounts (ABHA IDs).'
    ]
  },
  {
    sector: 'Education',
    keyIndicators: [
      { name: 'Literacy Rate', currentFigure: '77.7% (Male: 84.7%, Female: 70.3%)', targetOrGlobalBenchmark: '100% universal foundational literacy', source: 'NSO Survey 2021' },
      { name: 'Gross Enrolment Ratio (GER) Higher Education', currentFigure: '28.4% (AISHE 2021-22)', targetOrGlobalBenchmark: 'NEP 2020 target: 50% by 2035', source: 'AISHE Report' },
      { name: 'Public Spending on Education as % of GDP', currentFigure: '~4.1% of GDP', targetOrGlobalBenchmark: 'Kothari Commission / NEP target: 6% of GDP', source: 'Economic Survey' },
      { name: 'Pupil-Teacher Ratio (PTR) Primary', currentFigure: '26:1 (meets RTE norm of 30:1 at national aggregate)', targetOrGlobalBenchmark: '30:1 primary, 35:1 upper primary', source: 'UDISE+ 2021-22' }
    ],
    structuralWeaknesses: [
      'Foundational Learning Crisis: Pratham\'s ASER reports consistently show that nearly 50% of Grade 5 students cannot read a Grade 2 level text.',
      'Rote memorization and examination-oriented pedagogy failing to foster critical inquiry and problem-solving.',
      'Digital divide exposed during pandemic disruptions; inadequate internet connectivity in rural schools.',
      'Teacher vacancies, absenteeism, and deployment of teachers for non-educational administrative duties.'
    ],
    majorPoliciesAndActs: [
      'National Education Policy (NEP) 2020 (replaces 10+2 with 5+3+3+4 pedagogical structure, Mother tongue instruction in early years).',
      'Right of Children to Free and Compulsory Education (RTE) Act, 2009 (Section 12(1)(c) 25% reservation for EWS in private schools).',
      'NIPUN Bharat Mission (National Initiative for Proficiency in Reading with Understanding and Numeracy).',
      'PM-SHRI (Prime Minister\'s Schools for Rising India).',
      'National Credit Framework (NCrF) and APAAR (Automated Permanent Academic Account Registry).'
    ],
    landmarkReports: [
      { title: 'Draft National Education Policy Report', committeeOrBody: 'Dr. K. Kasturirangan Committee', year: 2019, keyTakeaways: 'Restructuring school stages, National Research Foundation, higher education single umbrella regulator (HECI).' },
      { title: 'New Education Policy Evolution Report', committeeOrBody: 'T.S.R. Subramanian Committee', year: 2016, keyTakeaways: 'Early childhood care, pre-service teacher licensing, and Indian Education Service (IES) creation.' }
    ],
    reformRoadmap: [
      'Universalize foundational literacy and numeracy (FLN) by Grade 3 under NIPUN Bharat.',
      'Institutionalize multidisciplinary higher education with multiple entry and exit points.',
      'Increase government education budget allocation to 6% of GDP.'
    ]
  },
  {
    sector: 'Human Resources',
    keyIndicators: [
      { name: 'Formally Skilled Workforce', currentFigure: '~5% of total Indian workforce', targetOrGlobalBenchmark: 'South Korea 96%, Germany 75%, UK 68%', source: 'MSDE / NITI Aayog' },
      { name: 'Female Labor Force Participation Rate (FLFPR)', currentFigure: '37.0% (PLFS 2022-23, up from 23.3% in 2017-18)', targetOrGlobalBenchmark: 'Global average ~47%', source: 'Periodic Labour Force Survey' },
      { name: 'Demographic Dividend Window', currentFigure: 'Working-age population (15-64) exceeds 67%', targetOrGlobalBenchmark: 'Window peaks between 2020 and 2041', source: 'UNFPA India' }
    ],
    structuralWeaknesses: [
      'Massive mismatch between industrial job requirements and university graduate skill sets (unemployability crisis).',
      'Vast informal sector (over 85% of workforce) lacking formal certification, apprenticeships, and social security.',
      'Low female participation driven by unpaid care work burden, safety concerns, and mobility constraints.'
    ],
    majorPoliciesAndActs: [
      'National Skill Development Mission & Skill India Mission',
      'Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)',
      'National Apprenticeship Promotion Scheme (NAPS)',
      'e-Shram Portal for unorganized worker social security registration',
      'Code on Social Security, 2020 (recognizing gig and platform workers)'
    ],
    landmarkReports: [
      { title: 'Sharda Prasad Committee on Rationalization of Sector Skill Councils', committeeOrBody: 'Ministry of Skill Development', year: 2016, keyTakeaways: 'Eliminating commercial fraud in short-term skill certificates; aligning training with international NOS standards.' }
    ],
    reformRoadmap: [
      'Shift skill training from input-driven targets to industry-linked placement outcomes.',
      'Expand paid dual-vocational apprenticeships on the German model.',
      'Promote care economy infrastructure (creches, elder care) to unleash female labour productivity.'
    ]
  },
  {
    sector: 'Poverty & Hunger',
    keyIndicators: [
      { name: 'Multidimensional Poverty Index (MPI) Headcount', currentFigure: '11.28% in 2022-23 (down from 24.85% in 2015-16)', targetOrGlobalBenchmark: '13.5 Crore people lifted out of multidimensional poverty in 5 years', source: 'NITI Aayog National MPI 2023' },
      { name: 'Global Hunger Index (GHI) Rank', currentFigure: '105 out of 127 countries (2024)', targetOrGlobalBenchmark: 'Categorized as "Serious" (critiqued by GoI for sample bias)', source: 'Welthungerhilfe & Concern Worldwide' },
      { name: 'Stunting in Children under 5 years', currentFigure: '35.5% (chronic undernutrition)', targetOrGlobalBenchmark: 'POSHAN Abhiyaan target: < 25%', source: 'NFHS-5' },
      { name: 'Wasting in Children under 5 years', currentFigure: '19.3% (acute malnutrition)', targetOrGlobalBenchmark: 'Global threshold < 5%', source: 'NFHS-5' },
      { name: 'Anaemia in Women (15-49 years)', currentFigure: '57.0% (alarming public health prevalence)', targetOrGlobalBenchmark: 'Anaemia Mukt Bharat annual reduction target 3%', source: 'NFHS-5' }
    ],
    structuralWeaknesses: [
      'Hidden Hunger (Micronutrient Deficiency): Diets overwhelmingly carbohydrate-heavy (rice/wheat subsidies) lacking protein, pulses, fruits, and vegetables.',
      'Structural gender inequities: Intra-household food distribution bias where women eat last and least.',
      'Last-mile leakages in Public Distribution System (PDS) and storage distress in FCI godowns.'
    ],
    majorPoliciesAndActs: [
      'National Food Security Act (NFSA), 2013 (statutory right to food for 67% population: 75% rural, 50% urban).',
      'Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY: free 5kg foodgrains per beneficiary extended till 2028).',
      'One Nation One Ration Card (ONORC - biometric nationwide portability for migrant laborers).',
      'POSHAN Abhiyaan 2.0 (National Nutrition Mission targeting stunting, wasting, anaemia).',
      'PM-POSHAN (earlier Mid-Day Meal Scheme covering 12 Crore schoolchildren with hot cooked meals).',
      'Mandatory Rice Fortification with Iron, Folic Acid, and Vitamin B12.'
    ],
    landmarkReports: [
      { title: 'National Multidimensional Poverty Index', committeeOrBody: 'NITI Aayog', year: 2023, keyTakeaways: 'Fastest reduction in UP, Bihar, MP, and Odisha; dramatic gains in electricity, sanitation, and bank accounts.' },
      { title: 'Evaluation of PDS & Targeted Subsidies', committeeOrBody: 'Shanta Kumar High-Level Committee', year: 2015, keyTakeaways: 'Unbundling FCI into procurement, storage, and distribution; cash transfers in food-surplus cities.' }
    ],
    reformRoadmap: [
      'Diversify PDS basket beyond wheat and rice to include millets (Shree Anna), pulses, and edible oils.',
      'Leverage digital direct benefit transfer (DBT) and Aadhaar-enabled biometric authentication (AePS) to plug leakages.',
      'Target first 1,000 days of child life (conception to age 2) through convergent maternal nutrition interventions.'
    ]
  }
];

export const DEVELOPMENT_INDUSTRY_DATA: DevelopmentIndustryActor[] = [
  {
    id: 'actor-ngos',
    actorType: 'NGOs',
    constitutionalAndLegalBasis: 'Freedom of Association under Article 19(1)(c); Registered under Societies Registration Act 1860, Indian Trusts Act 1882, or Section 8 Companies Act 2013. Foreign donations regulated under Foreign Contribution (Regulation) Act (FCRA) 2010 (Amended 2020).',
    roleAndContribution: [
      'Grassroots service delivery in remote tribal and border areas where state administrative presence is thin.',
      'Policy advocacy and public interest mobilization leading to landmark legislations (RTI, FRA, Domestic Violence, POCSO).',
      'Independent watchdogs auditing government schemes and environmental compliance.'
    ],
    keySuccessCaseStudies: [
      { name: 'Mazdoor Kisan Shakti Sangathan (MKSS)', region: 'Rajasthan', impact: 'Pioneered jan-sunwais (public hearings) and social audit methodologies that formed the backbone of the RTI Act 2005.' },
      { name: 'Pratham Education Foundation', region: 'Pan-India', impact: 'Produces the annual citizen-led ASER report transforming national focus from school enrollment to foundational learning outcomes.' }
    ],
    regulatoryAndOperationalChallenges: [
      'FCRA 2020 amendments: mandatory SBI New Delhi main branch account, cap of administrative expenses at 20% (reduced from 50%), and ban on sub-granting between NGOs.',
      'Accreditation and tax-compliance scrutiny on NITI Aayog NGO-DARPAN portal.',
      'CBI reporting in 2015 that only ~10% of India\'s 30 lakh NGOs filed audited financial statements.'
    ],
    reformMeasures: [
      'Self-regulatory accreditation framework; transparent digital accounting; distinguishing legitimate development NGOs from front entities.'
    ]
  },
  {
    id: 'actor-shgs',
    actorType: 'Self Help Groups (SHGs)',
    constitutionalAndLegalBasis: 'Informal village-level financial intermediary committees (typically 10-20 local women); institutionalized via NABARD SHG-Bank Linkage Programme (1992) and Deendayal Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM).',
    roleAndContribution: [
      'Financial inclusion: Mobilizes micro-savings and facilitates collateral-free bank loans.',
      'Women empowerment: Enhances intra-household decision making, social capital, and mobility.',
      'Grassroots social leadership: Active in community health, anti-liquor campaigns, sanitation drives, and disaster relief.'
    ],
    keySuccessCaseStudies: [
      { name: 'Kudumbashree', region: 'Kerala', impact: 'Over 45 lakh women organized into neighborhood groups (NHGs), running micro-enterprises, canteens, and local governance committees with zero bank default.' },
      { name: 'Mahila Arthik Vikas Mahamandal (MAVIM)', region: 'Maharashtra', impact: 'Community Managed Resource Centres (CMRCs) making SHGs financially self-sufficient.' },
      { name: 'Mission Shakti', region: 'Odisha', impact: 'State-wide SHG federation handling public procurement of mid-day meals and electricity meter reading.' }
    ],
    regulatoryAndOperationalChallenges: [
      'Dependence on male family members ("Sarpanch Pati" syndrome in financial choices).',
      'Micro-finance over-indebtedness due to aggressive private MFIs operating outside bank-linkage norms.',
      'Lack of market access, branding, packaging, and digital marketing skills for SHG cottage products.'
    ],
    reformMeasures: [
      'Lakhpati Didi initiative: Skilling women SHG members to earn sustainable annual income of ₹1 Lakh or more.',
      'Drone Didi: Training SHG women in operating agricultural drones for fertilizer and pesticide spraying.',
      'Backward and forward linkages through e-commerce integration (GeM portal, ONDC).'
    ]
  },
  {
    id: 'actor-cooperatives',
    actorType: 'Cooperatives',
    constitutionalAndLegalBasis: 'Article 19(1)(c) right to form cooperatives; Article 43B DPSP; Part IXB (Articles 243ZH to 243ZT) inserted by 97th Constitutional Amendment Act 2011. Union Ministry of Cooperation created in July 2021. Multi-State Co-operative Societies (MSCS) Act, 2002 (Amended 2023).',
    roleAndContribution: [
      'Agricultural credit delivery: Primary Agricultural Credit Societies (PACS) form the grassroots credit pipeline.',
      'Dairy and agrarian revolutions: Amul (Gujarat Co-operative Milk Marketing Federation), IFFCO, KRIBHCO.',
      'Fostering economic democracy: Democratic control on "one member, one vote" principle.'
    ],
    keySuccessCaseStudies: [
      { name: 'AMUL (GCMMF)', region: 'Gujarat (Anand)', impact: 'White Revolution model uniting 36 lakh milk producers; India became world\'s largest milk producer.' },
      { name: 'Lijjat Papad (Shri Mahila Griha Udyog)', region: 'Maharashtra', impact: 'Cooperative model started by 7 women, now employing over 45,000 women nationwide.' }
    ],
    regulatoryAndOperationalChallenges: [
      'Supreme Court judgment in Union of India v. Rajendra N. Shah (2021) struck down Part IXB provisions relating to State cooperatives for lack of ratification by 50% of State legislatures under Article 368(2) (upheld Part IXB only for Multi-State cooperatives).',
      'Political interference, financial misappropriation, and dual regulation of Urban Cooperative Banks (UCBs) by RBI and State Registrars.'
    ],
    reformMeasures: [
      'Computerization of 63,000 PACS with standardized Enterprise Resource Planning (ERP) software.',
      'Multi-State Co-operative Societies (Amendment) Act 2023: Created Co-operative Election Authority and Co-operative Ombudsman.',
      'Setting up 3 new national level apex multi-state cooperatives: Exports, Organic products, and Seeds.'
    ]
  }
];
