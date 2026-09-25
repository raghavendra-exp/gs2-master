import { CurrentAffairItem } from '../../types';

export const CURRENT_AFFAIRS_UPDATES: CurrentAffairItem[] = [
  {
    id: 'ca-sc-subclassification-scst',
    date: '2024-08-01',
    title: 'Supreme Court 7-Judge Bench Upholds Sub-classification within SCs and STs',
    category: 'Supreme Court',
    summary: 'A 7-judge Constitution bench headed by CJI D.Y. Chandrachud ruled 6:1 that State Governments have the constitutional competence to sub-classify Scheduled Castes and Scheduled Tribes to ensure affirmative action benefits reach the most disadvantaged sub-groups.',
    background: 'Overruled the 2004 5-judge bench verdict in E.V. Chinnaiah v. State of Andhra Pradesh, which had held that the SC list under Article 341 is a single indivisible composite class that cannot be splintered by states.',
    whyImportant: 'Redefines the constitutional boundaries of affirmative action, equality jurisprudence under Articles 14 and 16(4), and federal rights of states in tailoring welfare policies.',
    staticTopics: ['Affirmative Action', 'Article 14 & 16', 'Article 341 & 342', 'Federalism', 'Social Justice'],
    constitutionalLinks: [
      'Article 14: Substantive equality requires treating unequals unequally.',
      'Article 16(4): State can make provision for reservation for any backward class not adequately represented.',
      'Article 341: Presidential notification specifying Scheduled Castes; sub-classification does not alter membership of this list.'
    ],
    prelimsPoints: [
      'Overruled 5-judge bench in E.V. Chinnaiah (2004).',
      'Held that sub-classification does NOT violate Article 341(2) as it does not add or exclude castes from the Presidential list.',
      'Four out of seven judges concurred that the "Creamy Layer" principle should also apply to SCs and STs.'
    ],
    mainsPoints: [
      'Shift from formal equality to substantive and nuanced distributive justice.',
      'Requirement for rigorous empirical and quantifiable data before enacting sub-quota laws to avoid arbitrary political patronage.',
      'Federal empowerment of State legislatures in social policy design.'
    ],
    possibleQuestions: {
      prelims: 'With reference to the Supreme Court verdict on sub-classification of SC/STs (2024), consider the following statements: 1. It overruled the E.V. Chinnaiah judgment. 2. States can exclude an entire sub-caste from reservation benefits at their discretion. Which is/are correct?',
      mains: 'Sub-classification within backward classes represents an evolution from mechanical equality to substantive justice. In light of the recent 7-judge Supreme Court ruling, analyze the constitutional opportunities and administrative challenges. (15 Marks, 250 Words)'
    },
    sources: [
      {
        title: 'State of Punjab v. Davinder Singh Judgment',
        organization: 'Supreme Court of India',
        url: 'https://main.sci.gov.in/judgment/judis/davinder_singh_2024.pdf',
        publicationDate: '2024-08-01',
        lastVerified: '2026-09-20',
        status: 'official'
      }
    ],
    lastVerified: '2026-09-22',
    upRelevance: 'Directly impacts affirmative action policy in UP with significant Dalit demographics (e.g. Jatavs, Pasis, Valmikis) and ongoing sub-quota deliberations.'
  },
  {
    id: 'ca-electoral-bonds-sc',
    date: '2024-02-15',
    title: 'Supreme Court Invalidates Electoral Bonds Scheme as Unconstitutional',
    category: 'Elections',
    summary: 'A unanimous 5-judge Constitution Bench struck down the Union Government’s Electoral Bonds Scheme 2018, declaring that unlimited anonymous political donations violate the voters’ fundamental Right to Information under Article 19(1)(a).',
    background: 'Introduced via Finance Act 2017 amendments to RBI Act, Representation of the People Act 1951, Income Tax Act, and Companies Act, allowing individuals and corporates to donate anonymously to registered political parties via SBI.',
    whyImportant: 'Directly touches the democratic architecture, free and fair elections, money power in politics, and constitutional checks against corporate capture of policy-making.',
    staticTopics: ['Representation of the People Act 1951', 'Article 19(1)(a)', 'Money Power in Politics', 'Electoral Funding Reforms', 'Separation of Powers'],
    constitutionalLinks: [
      'Article 19(1)(a): Right to Freedom of Speech and Expression includes the Right to Know / Right to Information of voters.',
      'Article 14: Struck down Section 182(1) Companies Act amendment removing 7.5% profit cap on corporate donations as manifestly arbitrary.'
    ],
    prelimsPoints: [
      'Struck down unanimously by a 5-judge Constitution Bench.',
      'SBI was mandated to furnish full alphanumeric serial numbers matching buyers with recipient political parties to the ECI for public upload.',
      'Held that black money eradication cannot be pursued through measures that obliterate fundamental voter rights.'
    ],
    mainsPoints: [
      'The principle of informed democratic choice: Why anonymous corporate contributions distort electoral level-playing field.',
      'Need for comprehensive electoral financing reforms: Exploring National Electoral Fund, partial state funding (Indrajit Gupta Committee), and cap on party expenditures.'
    ],
    possibleQuestions: {
      prelims: 'In the ADR v. Union of India (2024) judgment, the Supreme Court struck down the Electoral Bond Scheme primarily citing the violation of which Fundamental Right? (Answer: Article 19(1)(a))',
      mains: '"Clean political finance is the lifeblood of an uncorrupted democracy." Discuss the constitutional rationale of the Electoral Bonds verdict and propose systemic alternatives for transparent political funding in India. (15 Marks, 250 Words)'
    },
    sources: [
      {
        title: 'Supreme Court Ruling on Electoral Bonds (Writ Petition (Civil) No. 880 of 2017)',
        organization: 'Supreme Court of India',
        url: 'https://main.sci.gov.in',
        publicationDate: '2024-02-15',
        lastVerified: '2026-09-20',
        status: 'official'
      }
    ],
    lastVerified: '2026-09-22'
  },
  {
    id: 'ca-governor-assent-bills',
    date: '2023-11-20',
    title: 'Supreme Court Curbs Governor’s Discretionary Pocket Veto over State Bills',
    category: 'Judiciary',
    summary: 'Supreme Court ruled that a Governor cannot sit indefinitely on bills passed by the State Legislature; if a Governor decides to withhold assent under Article 200, the bill MUST be returned to the House "as soon as possible" with a message for reconsideration.',
    background: 'Multiple State Governments (Punjab, Tamil Nadu, Kerala, Telangana) moved the Supreme Court complaining that Governors were keeping passed legislative bills pending for months and years without action.',
    whyImportant: 'Reasserts parliamentary democracy, accountability of the non-elected Governor to the elected legislative assembly, and federal constitutional conventions.',
    staticTopics: ['Article 200 & 201', 'Role and Discretion of Governor', 'Federalism', 'Legislative Relations'],
    constitutionalLinks: [
      'Article 200: Four options before Governor upon receipt of bill (Assent, Withhold, Reserve for President, Return for reconsideration).',
      'Article 163: Governor must act on aid and advice of the Council of Ministers except in constitutional discretion.'
    ],
    prelimsPoints: [
      'Governor cannot withhold assent simpliciter without returning the bill to the legislature under Article 200 first proviso.',
      'Once the State Assembly passes the bill again (with or without amendment), the Governor has NO choice and MUST grant assent.',
      'Constitution does not specify an explicit numerical time limit, but the phrase "as soon as possible" implies constitutional promptness.'
    ],
    mainsPoints: [
      'Constitutional role of the Governor: Nominal head vs political bottleneck.',
      'Punchhi Commission and Sarkaria Commission recommendations on time-bound gubernatorial assent (suggested 6 months maximum).',
      'Impact of center-state friction on state development legislation.'
    ],
    possibleQuestions: {
      prelims: 'Under Article 200 of the Indian Constitution, if a State Legislative Assembly passes a returned bill a second time with amendments, what is the Governor’s power? (Answer: Must give assent).',
      mains: 'Examine the emerging institutional conflict between elected State Governments and Governors over legislative assent. How have recent judicial interpretations attempted to reconcile Article 200 with parliamentary conventions? (15 Marks, 250 Words)'
    },
    sources: [
      {
        title: 'State of Punjab v. Principal Secretary to Governor',
        organization: 'Supreme Court of India',
        url: 'https://main.sci.gov.in',
        publicationDate: '2023-11-20',
        lastVerified: '2026-09-20',
        status: 'official'
      }
    ],
    lastVerified: '2026-09-21'
  },
  {
    id: 'ca-senior-citizens-pmjay',
    date: '2024-09-11',
    title: 'Union Cabinet Expands Ayushman Bharat PM-JAY to All Senior Citizens Aged 70 and Above',
    category: 'Welfare Schemes',
    summary: 'The Union Cabinet approved universal health coverage under Ayushman Bharat PM-JAY for all senior citizens aged 70 years and above, irrespective of their socio-economic status, providing an exclusive top-up cover of ₹5 lakh per year.',
    background: 'Previously, PM-JAY was strictly targeted to poor and vulnerable families based on SECC 2011 criteria. Rapid population aging and high elderly healthcare burdens necessitated universal social security for the geriatric demographic.',
    whyImportant: 'Signifies India’s major policy pivot towards universal healthcare protection for elderly citizens, addressing SDG 3 (Good Health and Well-being) and Article 41 DPSP.',
    staticTopics: ['Health Governance', 'Elderly Care & Social Security', 'Article 41 DPSP', 'Universal Health Coverage (UHC)', 'Ayushman Bharat PM-JAY'],
    constitutionalLinks: [
      'Article 21: Right to health is an intrinsic part of right to life.',
      'Article 41: Directive principle to secure right to public assistance in cases of old age, sickness and disablement.',
      'Article 47: Duty of the State to raise the level of nutrition and standard of living and to improve public health.'
    ],
    prelimsPoints: [
      'Age threshold: 70 years and above (irrespective of income, wealth, or caste).',
      'Dedicated distinct card: Ayushman Vay Vandana Card issued.',
      'If family is already covered under PM-JAY, the senior citizen gets an additional distinct ₹5 lakh top-up cover specifically for themselves.'
    ],
    mainsPoints: [
      'Economic and demographic significance: India’s elderly population projected to reach 20% by 2050 (UNFPA India Ageing Report).',
      'Fiscal feasibility and the need to scale geriatric specialized wards and palliative care in district hospitals.',
      'Insurance-led secondary/tertiary hospitalisation vs preventive and home-based primary elderly care.'
    ],
    possibleQuestions: {
      prelims: 'Under the 2024 expansion of Ayushman Bharat PM-JAY, which category of senior citizens is eligible for the ₹5 lakh annual health coverage? (Answer: All senior citizens aged 70 and above, regardless of income).',
      mains: '"Universal health coverage for the elderly is both a moral imperative and an economic stabilizer in an aging India." Evaluate the expansion of PM-JAY to citizens aged 70+ in light of India’s healthcare financing challenges. (15 Marks, 250 Words)'
    },
    sources: [
      {
        title: 'Cabinet approves health coverage to all senior citizens aged 70 years and above under AB PM-JAY',
        organization: 'Press Information Bureau (PIB), GoI',
        url: 'https://pib.gov.in/PressReleasePage.aspx?PRID=2053744',
        publicationDate: '2024-09-11',
        lastVerified: '2026-09-20',
        status: 'official'
      }
    ],
    lastVerified: '2026-09-24',
    upRelevance: 'UP has the largest absolute population of senior citizens in India (over 1.5 crore aged 70+), representing massive implementation outreach across 75 districts.'
  }
];
