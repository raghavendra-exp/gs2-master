import { WelfareScheme } from '../../types';

export const WELFARE_SCHEMES: WelfareScheme[] = [
  {
    id: 'scheme-pmjay',
    name: 'Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY)',
    shortName: 'PM-JAY',
    ministry: 'Ministry of Health and Family Welfare',
    launchYear: 2018,
    objective: 'Provide health cover of ₹5 lakh per family per year for secondary and tertiary care hospitalization to bottom 40% vulnerable families and all senior citizens aged 70+.',
    targetGroup: 'Over 12 crore poor and vulnerable families (approx. 55 crore beneficiaries) based on SECC 2011 database + universal coverage for senior citizens aged 70 and above.',
    benefits: 'Cashless and paperless access to healthcare services up to ₹5 lakh per family per year across 27,000+ empanelled public and private hospitals; covers 3 days pre-hospitalization and 15 days post-hospitalization expenses.',
    eligibility: [
      'Families identified in Socio-Economic Caste Census 2011 (SECC) as per deprivation criteria.',
      'No cap on family size, age, or gender.',
      'Pre-existing conditions covered from day one.',
      'Expanded in 2024: All senior citizens aged 70 years and above are entitled to an exclusive ₹5 lakh top-up cover irrespective of income.'
    ],
    implementationMechanism: 'National Health Authority (NHA) at national level; State Health Agencies (SHA) at state level via Trust, Insurance, or Mixed implementation models.',
    fundingPattern: '60:40 between Centre and States/UTs with legislature; 90:10 for North Eastern and Himalayan States; 100% for UTs without legislature.',
    centreStateRole: 'Centre provides funding, IT architecture (National Health Claims Platform), and standard package rates. States empanel hospitals and process claims via State Health Agencies.',
    recentChanges: 'Cabinet approved universal health coverage for all senior citizens aged 70+ in September 2024. Integration with Ayushman Bharat Digital Mission (ABDM) and Ayushman Vay Vandana Cards.',
    challenges: [
      'Disparities in private hospital empanelment in rural and tier-2/3 cities.',
      'Low package reimbursement rates discouraging tertiary multi-specialty hospitals.',
      'Incidence of fraudulent claims and billing malpractices requiring AI fraud detection.'
    ],
    evaluation: 'Over 35 crore Ayushman cards issued; authorized hospital admissions exceeding 6.5 crore worth over ₹80,000 crore, significantly curbing catastrophic out-of-pocket health expenditures.',
    officialSourceUrl: 'https://pmjay.gov.in',
    prelimsPoints: [
      'World’s largest government-funded health assurance scheme.',
      'NHA is an attached office of the Ministry of Health and Family Welfare.',
      'Senior citizens aged 70+ covered universally without income or caste criteria under 2024 expansion.'
    ],
    mainsPoints: [
      'Evaluation of PM-JAY in mitigating catastrophic health expenditure (SDG 3.8).',
      'Critique of the insurance-based model vs strengthening primary healthcare infrastructure (Health and Wellness Centres / Ayushman Arogya Mandirs).'
    ]
  },
  {
    id: 'scheme-mgnrega',
    name: 'Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)',
    shortName: 'MGNREGA',
    ministry: 'Ministry of Rural Development',
    launchYear: 2005,
    objective: 'Enhance livelihood security in rural areas by guaranteeing at least 100 days of wage employment in a financial year to every rural household whose adult members volunteer to do unskilled manual work.',
    targetGroup: 'All rural adult residents willing to perform unskilled manual labour.',
    benefits: 'Guaranteed 100 days statutory wage employment; unemployment allowance if work is not provided within 15 days of demand; creation of durable rural community assets (water harvesting, soil conservation, rural roads).',
    eligibility: [
      'Must be a rural resident.',
      'Must be at least 18 years of age.',
      'Willing to do unskilled manual work.',
      'Equal wages for men and women.'
    ],
    implementationMechanism: 'Gram Panchayats are responsible for planning and implementing at least 50% of the works. Social audits mandated under Section 17.',
    fundingPattern: '100% cost of unskilled labour and 75% cost of material and skilled labour borne by Central Government; rest by State Governments.',
    centreStateRole: 'Central govt fixes state-wise wage rates and releases funds; State govts formulate Rural Employment Guarantee Schemes and bear unemployment allowances.',
    recentChanges: 'Mandatory Aadhaar-Based Payment System (ABPS) and National Mobile Monitoring System (NMMS) app for two-time real-time digital attendance with geo-tagged photos.',
    challenges: [
      'Delay in wage payments due to centralized fund release bottlenecks.',
      'Exclusion issues due to mandatory ABPS and biometric authentication failures in remote areas.',
      'Wage rates in several states remain lower than state minimum agricultural wages.'
    ],
    evaluation: 'Served as the ultimate shock-absorber during rural economic stress (especially COVID-19 pandemic); created over 3 crore rural assets (Amrit Sarovars).',
    officialSourceUrl: 'https://nrega.nic.in',
    prelimsPoints: [
      'Enacted as a statutory legal entitlement, not merely an administrative scheme.',
      'Gram Sabha recommends works and conducts mandatory social audits.',
      'At least one-third of the beneficiaries must be women.'
    ],
    mainsPoints: [
      'MGNREGA as a rights-based demand-driven social safety net.',
      'Technological interventions (NMMS, ABPS): Efficiency vs grassroots exclusion dilemmas.',
      'Asset quality and convergence with Gati Shakti and Jal Jeevan Mission.'
    ]
  },
  {
    id: 'scheme-nfsa',
    name: 'National Food Security Act (NFSA) / Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY)',
    shortName: 'NFSA / PMGKAY',
    ministry: 'Ministry of Consumer Affairs, Food and Public Distribution',
    launchYear: 2013,
    objective: 'Provide food and nutritional security in human life cycle approach, by ensuring access to adequate quantity of quality food at affordable prices.',
    targetGroup: 'Covers up to 75% of rural population and up to 50% of urban population (approx. 81.35 crore beneficiaries).',
    benefits: '5 kg foodgrains per person per month for Priority Households (PHH) and 35 kg per family per month for Antyodaya Anna Yojana (AAY) families. Entire foodgrain quota provided 100% FREE OF COST under unified PMGKAY (extended up to 2028).',
    eligibility: [
      'Beneficiaries categorized into Antyodaya Anna Yojana (poorest of poor) and Priority Households.',
      'Oldest woman of the household (aged 18 or above) designated as the Head of the Household for ration card issuance (Art 12 NFSA).',
      'Nutritional support for pregnant women and lactating mothers (maternity benefit of min ₹6,000).'
    ],
    implementationMechanism: 'Targeted Public Distribution System (TPDS) via 5.4 lakh Fair Price Shops (FPS) enabled with electronic Point of Sale (ePoS) devices.',
    fundingPattern: '100% subsidized by Central Government for foodgrains under PMGKAY.',
    centreStateRole: 'Centre procures foodgrains at MSP via FCI, allocates and transports to state depots. States identify beneficiaries, issue ration cards, and manage last-mile FPS distribution.',
    recentChanges: 'One Nation One Ration Card (ONORC) enabled nationwide biometric portability allowing migrant workers to claim rations from any FPS across India.',
    challenges: [
      'Outdated beneficiary database tied to Census 2011; Supreme Court in migrant workers case directed updating using e-Shram portal.',
      'Grain-centric diet neglecting dietary diversity (pulses, millets, protein).',
      'Storage and transit leakages.'
    ],
    evaluation: 'Ranked globally as one of the largest food safety nets in human history; prevented starvation during macroeconomic shocks.',
    officialSourceUrl: 'https://nfsa.gov.in',
    prelimsPoints: [
      'Eldest woman of 18+ years is designated head of household for ration card.',
      'One Nation One Ration Card uses Mera Ration mobile app and biometric ePoS machines.',
      'Antyodaya Anna Yojana (AAY) receives 35 kg per family/month; Priority Households (PHH) receive 5 kg/person/month.'
    ],
    mainsPoints: [
      'Shift from food security to nutritional security (poshan).',
      'Universalization vs targeting debates in Public Distribution System (PDS).',
      'Integration with millets (Shree Anna) and fortified rice to tackle anemia.'
    ]
  },
  {
    id: 'scheme-jal-jeevan',
    name: 'Jal Jeevan Mission (JJM) - Har Ghar Jal',
    shortName: 'JJM',
    ministry: 'Ministry of Jal Shakti (Department of Drinking Water and Sanitation)',
    launchYear: 2019,
    objective: 'Provide Functional Household Tap Connection (FHTC) to every rural household by ensuring potable water supply in adequate quantity (55 litres per capita per day) of prescribed quality on a regular and long-term basis.',
    targetGroup: 'All rural households, schools, anganwadis, and community centres across India.',
    benefits: '55 lpcd of treated potable piped water supply directly to individual households, eliminating daily drudgery for women and reducing water-borne diseases.',
    eligibility: ['All rural families residing in habitations across India.'],
    implementationMechanism: 'Community-led decentralized model. Village Water and Sanitation Committees (VWSC) / Pani Samitis plan, operate, and maintain in-village water supply schemes.',
    fundingPattern: '50:50 between Centre and States; 90:10 for Himalayan/NE States; 100% for UTs without legislature.',
    centreStateRole: 'Centre funds and monitors via JJM Dashboard and IoT sensors. States execute civil works and district water quality labs.',
    recentChanges: 'Deployment of IoT-based smart sensors for measuring real-time water quantity and flow; chemical and bacteriological water quality testing using Field Test Kits (FTKs).',
    challenges: [
      'Source sustainability in groundwater-stressed regions.',
      'Ensuring long-term operation & maintenance (O&M) capacity of Gram Panchayats.',
      'Water contamination (fluoride, arsenic, salinity) in specific hydro-geological zones.'
    ],
    evaluation: 'Rural tap water connectivity jumped from ~17% in August 2019 to over 78% (covering 15+ crore rural households); multiple states achieved 100% Har Ghar Jal certification.',
    officialSourceUrl: 'https://jaljeevanmission.gov.in',
    prelimsPoints: [
      'Target water quantity: 55 litres per capita per day (lpcd).',
      'Pani Samiti must have at least 50% women members.',
      'Goa was the first state in India to achieve 100% Har Ghar Jal certification.'
    ],
    mainsPoints: [
      'Impact of Har Ghar Jal on gender empowerment, girl child schooling, and rural health (WHO study estimating prevention of 4 lakh diarrheal deaths).',
      'Decentralized governance through Pani Samitis as an exemplar of the 73rd Amendment.'
    ]
  },
  {
    id: 'scheme-up-kanya-sumangala',
    name: 'Mukhyamantri Kanya Sumangala Yojana (Uttar Pradesh)',
    shortName: 'Kanya Sumangala (UP)',
    ministry: 'Department of Women and Child Development, Govt of Uttar Pradesh',
    launchYear: 2019,
    objective: 'Eradicate female feticide, promote girl child education, prevent child marriage, and facilitate holistic financial support to girls from birth through higher education.',
    targetGroup: 'Girl children in Uttar Pradesh belonging to families with an annual income up to ₹3 lakh (maximum two girls per family).',
    benefits: 'Financial assistance of ₹25,000 (enhanced from ₹15,000 in FY 2024-25) deposited directly into bank accounts across 6 milestones: Birth (₹5,000), Complete Immunization at 1 yr (₹2,000), Class 1 Admission (₹3,000), Class 6 (₹3,000), Class 9 (₹5,000), and Admission to 2-yr/degree diploma (₹7,000).',
    eligibility: [
      'Permanent resident of Uttar Pradesh.',
      'Family income not exceeding ₹3,00,000 per annum.',
      'Maximum two daughters per family (relaxable to three in case of second birth being twins).'
    ],
    implementationMechanism: 'End-to-end digital DBT portal via District Probation Officers and Anganwadi tracking.',
    fundingPattern: '100% State Government funded scheme.',
    centreStateRole: 'Exclusively conceptualized, funded, and implemented by the Government of Uttar Pradesh.',
    recentChanges: 'Financial assistance increased from ₹15,000 to ₹25,000 from April 2024 to encourage girls into science, technology, engineering, and graduation courses.',
    challenges: [
      'Documentation barriers for rural marginalized households (birth certificates, immunization cards).',
      'Account linking with Aadhaar and bank operationalization.',
      'Ensuring completion of degree courses after school education.'
    ],
    evaluation: 'Over 18 lakh girls in UP benefited, contributing to improved sex ratio at birth and substantial reduction in school drop-out rates among teenage girls.',
    officialSourceUrl: 'https://mksy.up.gov.in',
    prelimsPoints: [
      'Income ceiling: ₹3,00,000 per annum.',
      'Total DBT assistance: ₹25,000 across 6 stages.',
      'State-specific social welfare scheme of Uttar Pradesh.'
    ],
    mainsPoints: [
      'Conditional Cash Transfers (CCT) as a catalyst for behavioral change against patriarchy.',
      'UP-specific model answer case study for girl-child social protection and female labour force participation.'
    ],
    isUPPSCSpecific: true
  }
];
