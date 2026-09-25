export interface GovernanceConcept {
  id: string;
  title: string;
  pillar: 'Good Governance' | 'E-Governance & DPI' | 'Accountability & RTI' | 'Citizen Charter' | 'Civil Services' | 'Development Industry & NGOs' | 'Scheme Design & CSS';
  summary: string;
  theoreticalFramework: string;
  institutionalMechanisms: string[];
  challengesInPractice: string[];
  reformsAndSolutions: string[];
  caseStudies: { title: string; desc: string; source: string; upSpecific?: boolean }[];
  prelimsPointers: string[];
  mainsPointers: string[];
  officialSource: string;
}

export const GOVERNANCE_MODULES: GovernanceConcept[] = [
  {
    id: 'gov-good-governance',
    title: 'Good Governance: Concepts, Dimensions, and Citizen-Centric Administration',
    pillar: 'Good Governance',
    summary: 'The process of decision-making and the process by which decisions are implemented, characterized by transparency, accountability, participation, and rule of law.',
    theoreticalFramework: 'United Nations / World Bank 8 Core Characteristics: Participation, Rule of Law, Transparency, Responsiveness, Consensus Oriented, Equity and Inclusiveness, Effectiveness and Efficiency, and Accountability. Contrast with Minimal State concept.',
    institutionalMechanisms: [
      '2nd Administrative Reforms Commission (ARC) Report 12: "Citizen Centric Administration - The Heart of Governance".',
      'Right to Public Services Legislation enacted across 20+ States (e.g., UP Janhit Guarantee Act 2011).',
      'PRAGATI platform (Pro-Active Governance And Timely Implementation) chaired monthly by the Prime Minister.',
      'CPGRAMS (Centralized Public Grievance Redress and Monitoring System) with AI-powered grievance auto-categorization.'
    ],
    challengesInPractice: [
      'Bureaucratic inertia, procedural red tape, and siloed administrative culture.',
      'Deficits in institutional empathy and grievance resolution quality (disposals marked without genuine redressal).',
      'Over-centralized decision-making bypassing local democratic tier.'
    ],
    reformsAndSolutions: [
      'Transition from Rule-based to Role-based governance (Mission Karmayogi).',
      'Social Accountability Frameworks and third-party impact assessments.',
      'Mandatory pre-legislative consultation and regulatory impact assessments (RIA).'
    ],
    caseStudies: [
      {
        title: 'PRAGATI Platform',
        desc: 'Reviewed mega infrastructure and social welfare projects worth over ₹17 lakh crore, breaking inter-ministerial gridlocks via real-time satellite imagery and video-conferencing.',
        source: 'PMO & Cabinet Secretariat'
      },
      {
        title: 'UP IGRS (Jansunwai Portal)',
        desc: 'Uttar Pradesh Integrated Grievance Redressal System providing multi-tier tracking, geo-tagged disposal verification, and direct feedback calls to complainants.',
        source: 'Govt of Uttar Pradesh Department of Administrative Reforms',
        upSpecific: true
      }
    ],
    prelimsPointers: [
      'Good Governance Index (GGI) is prepared by the Department of Administrative Reforms and Public Grievances (DARPG).',
      'National Good Governance Day is celebrated on December 25 (birth anniversary of former PM Atal Bihari Vajpayee).',
      'Citizen-centric administration is the central focus of the 12th Report of the 2nd Administrative Reforms Commission.'
    ],
    mainsPointers: [
      'Analyze the shift from "Government" to "Governance" in the post-1991 LPG era.',
      'Evaluate CPGRAMS: Has digital grievance redressal addressed the root causes of administrative apathy or merely digitized pending files?',
      'Discuss how Social Audits and citizen report cards can empower marginalized communities.'
    ],
    officialSource: 'DARPG, Ministry of Personnel, Public Grievances and Pensions & 2nd ARC'
  },
  {
    id: 'gov-e-governance-dpi',
    title: 'E-Governance, Digital Public Infrastructure (DPI), and Emerging Technologies',
    pillar: 'E-Governance & DPI',
    summary: 'Application of Information and Communication Technology (ICT) for delivering government services, exchange of information, and integration of various stand-alone systems between G2C, G2B, G2G, and G2E.',
    theoreticalFramework: 'India Stack Architecture (Identity Layer: Aadhaar; Payments Layer: UPI; Data Empowerment Layer: Account Aggregator & DigiLocker; Open Commerce Layer: ONDC). Gartner’s 4-stage maturity model (Presence -> Interaction -> Transaction -> Transformation).',
    institutionalMechanisms: [
      'National e-Governance Plan (NeGP 2.0) / Digital India initiative.',
      'DigiLocker: Cloud-based document repository with legal parity under Rule 9A of IT Rules 2016.',
      'Bhashini (National Language Translation Mission) for breaking digital language barriers.',
      'GeM (Government e-Marketplace) achieving transparent public procurement and saving thousands of crores.'
    ],
    challengesInPractice: [
      'Digital Divide: Disparities in rural broadband connectivity, gender gap in smartphone ownership, and digital illiteracy.',
      'Privacy and Data Security: Concerns over Aadhaar biometric authentication failures and exclusion errors in welfare delivery.',
      'Cybersecurity threats against critical public infrastructure (e.g., AIIMS ransomware attack).'
    ],
    reformsAndSolutions: [
      'Enforcement of Digital Personal Data Protection Act 2023 with Data Protection Board of India.',
      'Offline fallbacks for welfare benefits to prevent biometric exclusion.',
      'Adoption of open-source standards and architectural interoperability (IndEA 2.0).'
    ],
    caseStudies: [
      {
        title: 'Unified Payments Interface (UPI)',
        desc: 'Processed over 130 billion transactions in 2023-24, democratizing digital payments for roadside vendors to multinational corporations.',
        source: 'NPCI & RBI'
      },
      {
        title: 'UP Mine Mitra & Bhulekh',
        desc: 'Uttar Pradesh digitized over 1 lakh revenue villages on Bhulekh with unique 16-digit land codes (Gata number) and satellite monitoring of mining to prevent illegal quarrying.',
        source: 'Board of Revenue, Uttar Pradesh',
        upSpecific: true
      }
    ],
    prelimsPointers: [
      'NeVA (National e-Vidhan Application) enables legislative assemblies to go paperless (Nagaland was first; UP was largest).',
      'Account Aggregator (AA) framework is regulated by the Reserve Bank of India (RBI).',
      'Open Network for Digital Commerce (ONDC) is an initiative of the Department for Promotion of Industry and Internal Trade (DPIIT).'
    ],
    mainsPointers: [
      'Assess India’s Digital Public Infrastructure (DPI) as a model for the Global South (G20 New Delhi Declaration endorsement).',
      'Examine the ethical and privacy challenges in deploying Artificial Intelligence and Facial Recognition Technologies (FRT) in police investigations.',
      'Evaluate how e-procurement through GeM has curbed corruption and favored MSMEs in public contracts.'
    ],
    officialSource: 'Ministry of Electronics and Information Technology (MeitY) & NITI Aayog'
  },
  {
    id: 'gov-citizen-charter-sevottam',
    title: 'Citizen’s Charter and the Sevottam Model of Service Delivery',
    pillar: 'Citizen Charter',
    summary: 'A public document outlining the commitment of a public authority towards standard, quality, transparency, grievance redressal, and time-bound delivery of services.',
    theoreticalFramework: 'Originated in the UK under John Major (1991). In India, evolved into the Sevottam Model (DARPG), an assessment framework for service delivery based on 3 pillars: (1) Citizen’s Charter, (2) Public Grievance Redressal, and (3) Service Delivery Capability.',
    institutionalMechanisms: [
      'Department of Administrative Reforms and Public Grievances (DARPG) guidelines for Citizen Charters.',
      'Sevottam Certification by Bureau of Indian Standards (IS 15700:2005).',
      'Right to Public Services Acts across Indian States.'
    ],
    challengesInPractice: [
      'Non-justiciability: Citizen Charters lack statutory backing and cannot be enforced in a court of law.',
      'Tokenism: Prepared by senior bureaucrats without consulting frontline staff or citizen stakeholders ("top-down copy-paste").',
      'Lack of awareness: Over 70% of citizens in surveyed districts unaware of charter commitments.',
      'Absence of independent grievance review mechanisms.'
    ],
    reformsAndSolutions: [
      'Enact a national Right to Service and Grievance Redressal Law.',
      'Incorporate compensation clauses for service delivery default.',
      'Regular third-party social audits of charter commitments.'
    ],
    caseStudies: [
      {
        title: 'Passport Seva Project',
        desc: 'Overhauled passport issuance across India through Public-Private Partnership with strict turnaround times, token systems, and SMS alerts.',
        source: 'Ministry of External Affairs'
      },
      {
        title: 'UP Janhit Guarantee Portal',
        desc: 'Statutory delivery of 250+ notified services within prescribed timelines with automatic penalties on defaulting public officials.',
        source: 'Department of IT & Electronics, Govt of UP',
        upSpecific: true
      }
    ],
    prelimsPointers: [
      'Sevottam was conceptualized by the Department of Administrative Reforms and Public Grievances (DARPG).',
      'IS 15700:2005 is the quality standard developed by BIS for public service delivery under Sevottam.',
      'Citizen Charters are NOT legally enforceable in courts in India unless backed by state-specific Service Guarantee legislation.'
    ],
    mainsPointers: [
      'Why did Citizen Charters fail to become an effective instrument of administrative transformation in India? What lessons does the Sevottam model offer?',
      'Discuss the key features of the Public Services Guarantee Acts enacted by various states and suggest measures to enhance their enforceability.'
    ],
    officialSource: 'DARPG, Government of India & 2nd Administrative Reforms Commission'
  },
  {
    id: 'gov-accountability-transparency',
    title: 'Transparency and Accountability: Horizontal vs Vertical, Social Audit, and RTI',
    pillar: 'Accountability & RTI',
    summary: 'The twin pillars of democratic governance ensuring that public officials are answerable for their actions, fiscal appropriations, and policy choices.',
    theoreticalFramework: 'Horizontal Accountability: Checks and balances exercised by independent constitutional/statutory institutions (CAG, CVC, Lokpal, Judiciary). Vertical Accountability: Direct citizen oversight through elections, RTI, civil society activism, and media scrutiny.',
    institutionalMechanisms: [
      'Right to Information (RTI) Act, 2005 (Section 4 proactive disclosure mandates).',
      'Social Audit Units (statutorily mandated under Section 17 of MGNREGA 2005; Meghalaya Community Participation and Public Services Social Audit Act 2017).',
      'Whistleblowers Protection Act, 2014 (framework for protecting persons reporting public corruption).',
      'Lokpal and Lokayuktas Act, 2013 (Apex anti-corruption ombudsman).'
    ],
    challengesInPractice: [
      'RTI Amendment Act 2019: Diluted statutory autonomy of Information Commissioners by granting Centre power to determine tenure and salaries.',
      'Abuse of Section 8 exemptions (national security, commercial confidence, personal privacy) to deny public interest information.',
      'High rate of physical attacks and murders of RTI activists and whistleblowers.',
      'Social Audits diluted by local political-contractor nexus and delayed state funding.'
    ],
    reformsAndSolutions: [
      'Operationalize Whistleblowers Protection Act rules; establish witness protection protocols.',
      'Make proactive digital disclosure under Section 4(1)(b) of RTI Act verifiable and automated.',
      'Empower Social Audit findings with automatic recovery and disciplinary penalties.'
    ],
    caseStudies: [
      {
        title: 'Meghalaya Social Audit Law',
        desc: 'First state in India to pass a comprehensive Social Audit Act covering 21 government programs, institutionalizing village social audit facilitators.',
        source: 'Government of Meghalaya 2017'
      },
      {
        title: 'MKSS Jan Sunwai Model',
        desc: 'Mazdoor Kisan Shakti Sangathan organized public audits of muster rolls in Rajasthan, proving that phantom workers were being paid while poor laborers starved.',
        source: 'MKSS Movement Archives'
      }
    ],
    prelimsPointers: [
      'Meghalaya was the first state in India to pass a dedicated Social Audit Act.',
      'RTI Act 2005 replaced the Freedom of Information Act, 2002.',
      'Chief Information Commissioner is appointed by the President on recommendation of a committee consisting of PM, LoP in Lok Sabha, and a Union Cabinet Minister.'
    ],
    mainsPointers: [
      '"Information is the currency of democracy." Critically examine the impact of recent legislative amendments and administrative delays on the efficacy of the RTI Act.',
      'Analyze the concept of Social Audit and discuss its limitations in institutionalizing bureaucratic accountability.'
    ],
    officialSource: '2nd ARC 1st Report "Right to Information: Master Key to Good Governance"'
  },
  {
    id: 'gov-civil-services-reforms',
    title: 'Civil Services in a Democracy: Role, Neutrality, Anonymity, and Administrative Reforms',
    pillar: 'Civil Services',
    summary: 'The permanent professional executive responsible for policy formulation, execution, and upholding constitutional values across the Union and States.',
    theoreticalFramework: 'Max Weber’s Bureaucratic Model (merit, hierarchy, rules, impersonality) combined with Westminster conventions of Civil Service Neutrality and Anonymity. Contrast with Committed Bureaucracy.',
    institutionalMechanisms: [
      'Constitutional protections under Article 311 (dismissal, removal, or reduction in rank only after inquiry).',
      'All India Services Act 1951 (IAS, IPS, Indian Forest Service created in 1966 under Art 312).',
      'Mission Karmayogi (National Programme for Civil Services Capacity Building - NPCSCB) managed by Capacity Building Commission (CBC).',
      'Central Vigilance Commission (CVC) and Central Bureau of Investigation (CBI) anti-corruption oversight.'
    ],
    challengesInPractice: [
      'Politicization and erosion of neutrality through frequent arbitrary transfers.',
      'Generalist vs Specialist debate: Modern governance requires domain expertise in economics, cyber, trade, and health.',
      'Colonial overhang: Ruler mindset rather than public servant mindset.',
      'Risk aversion: Section 13(1)(d) of Prevention of Corruption Act (amended in 2018) had created fear of vigilance persecution.'
    ],
    reformsAndSolutions: [
      'Civil Services Board implementation as mandated in Prakash Singh (2006) and TSR Subramanian (2013) rulings to ensure minimum tenure.',
      'Institutionalized lateral entry for mid-career domain specialists with transparent recruitment.',
      '360-degree appraisal system and empanelment reforms.'
    ],
    caseStudies: [
      {
        title: 'Mission Karmayogi & iGOT Platform',
        desc: 'Over 4 million civil servants onboarded on iGOT Karmayogi for competency-based continuous digital learning.',
        source: 'Capacity Building Commission'
      },
      {
        title: 'UP One District One Product (ODOP) Administration',
        desc: 'Civil servants mobilized district industrial centres, micro-credit linkages, and export hubs, revitalizing traditional crafts like Moradabad brass and Bhadohi carpets.',
        source: 'Department of MSME, Govt of Uttar Pradesh',
        upSpecific: true
      }
    ],
    prelimsPointers: [
      'Article 312 empowers Rajya Sabha to create a new All-India Service by passing a resolution supported by not less than two-thirds of members present and voting.',
      'Indian Forest Service was created in 1966 as the third All India Service under Article 312.',
      'Capacity Building Commission (CBC) was constituted in 2021 as part of Mission Karmayogi.'
    ],
    mainsPointers: [
      '"Anonymity and neutrality are the cornerstones of civil services in a parliamentary democracy." Critically examine the erosion of these principles in contemporary administration.',
      'Evaluate the arguments for and against Lateral Entry in civil services. How can domain expertise be inducted without compromising affirmative action and institutional esprit de corps?'
    ],
    officialSource: 'Department of Personnel and Training (DoPT) & Capacity Building Commission'
  },
  {
    id: 'gov-development-processes-ngos-shgs',
    title: 'Development Processes & Third Sector: Role of NGOs, SHGs, Cooperatives, and Social Capital',
    pillar: 'Development Industry & NGOs',
    summary: 'The non-state institutional architecture (Third Sector) bridging the gap between state delivery deficits and citizen aspirations through community mobilization.',
    theoreticalFramework: 'Robert Putnam’s Social Capital Theory (Bonding and Bridging social capital). Subsidiarity principle: Issues should be handled by the smallest, lowest, or least centralized competent authority.',
    institutionalMechanisms: [
      'Article 19(1)(c) right to form associations/cooperatives; Article 43B DPSP promotion of cooperatives.',
      'Part IXB of Constitution (Multi-State Cooperatives).',
      'Foreign Contribution (Regulation) Act (FCRA) 2010 (Amended 2020) and NITI Aayog NGO-DARPAN accreditation.',
      'Deendayal Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM) SHG mobilization framework.'
    ],
    challengesInPractice: [
      'Tightening regulatory oversight: Over 6,000 NGOs lost FCRA licenses between 2015 and 2023 for alleged accounting violations.',
      'Politicization and capture of cooperatives by local agrarian elites (sugar lobby in Maharashtra/Karnataka).',
      'Micro-finance over-indebtedness among rural women SHGs.',
      'Lack of professional managerial capacity and poor digital marketing linkages for community collectives.'
    ],
    reformsAndSolutions: [
      'Self-regulatory standards for civil society organizations.',
      'Computerization of 63,000 Primary Agricultural Credit Societies (PACS) with unified ERP software.',
      'Lakhpati Didi scheme providing market linkages, branding, and micro-enterprise capital to SHG women.'
    ],
    caseStudies: [
      {
        title: 'Kudumbashree (Kerala)',
        desc: 'Poverty eradication and women empowerment mission organizing 45 lakh women into neighborhood groups, operating community canteens, agro-enterprises, and panchayat planning.',
        source: 'State Poverty Eradication Mission, Kerala'
      },
      {
        title: 'Mahila Arthik Vikas Mahamandal (MAVIM, Maharashtra)',
        desc: 'Self-sustaining Community Managed Resource Centres (CMRCs) bridging credit, legal counseling, and agribusiness linkages for rural women.',
        source: 'Govt of Maharashtra'
      }
    ],
    prelimsPointers: [
      'National Policy on Voluntary Sector was formulated in 2007 by the Planning Commission.',
      'Supreme Court in Union of India v. Rajendra N. Shah (2021) struck down Part IXB provisions concerning State cooperatives, upholding it only for Multi-State Co-operative Societies (MSCS).',
      'Ministry of Cooperation was created in July 2021 with the motto "Sahakar se Samriddhi".'
    ],
    mainsPointers: [
      'Analyze the role of Self-Help Groups (SHGs) as vehicles of socio-economic empowerment. How can the "Lakhpati Didi" initiative scale grassroots rural entrepreneurship?',
      'Critically evaluate the recent amendments to the FCRA Act. How can the state balance national security imperatives with democratic civil society freedoms?'
    ],
    officialSource: 'Ministry of Cooperation, Ministry of Rural Development & NITI Aayog'
  },
  {
    id: 'gov-css-rationalisation',
    title: 'Government Policies, Scheme Design & Centrally Sponsored Schemes (CSS) Rationalisation',
    pillar: 'Scheme Design & CSS',
    summary: 'The policy architecture of developmental interventions, examining the design, fiscal federal dynamics, and structural implementation bottlenecks of Centrally Sponsored Schemes.',
    theoreticalFramework: 'Fiscal Federalism & Principle of Subsidiarity. Classification into: (1) Core of the Core schemes (e.g., MGNREGA), (2) Core schemes (e.g., PM-JAY, Jal Jeevan Mission, Samagra Shiksha), and (3) Optional schemes.',
    institutionalMechanisms: [
      'NITI Aayog Sub-Group of Chief Ministers on Rationalisation of Centrally Sponsored Schemes (Chaired by Shivraj Singh Chouhan, 2015).',
      'Public Financial Management System (PFMS) with Single Nodal Account (SNA) tracking for Just-in-Time fund releases.',
      'Direct Benefit Transfer (DBT) Mission eliminating middlemen and leakage.'
    ],
    challengesInPractice: [
      'One-size-fits-all design: Rigid national guidelines that fail to accommodate agro-climatic and socio-economic diversity across States.',
      'Fiscal stress on States: Standard 60:40 or 50:50 sharing patterns lock up State fiscal resources in matching funds, reducing state policy flexibility.',
      'Under-utilization of funds due to conditionalities and delayed release of central shares.',
      'Proliferation of umbrella schemes resulting in administrative fragmentation and duplication.'
    ],
    reformsAndSolutions: [
      'Flexi-funds window: Increasing flexible funding quota for States from 10% to 25% of CSS allocation to cater to local priorities.',
      'Sunset Clauses and mandatory third-party independent outcome evaluations before scheme extension.',
      'Just-in-Time funding through SNA model preventing unspent parking of funds in commercial bank accounts.'
    ],
    caseStudies: [
      {
        title: 'Single Nodal Account (SNA) Sparsh Model',
        desc: 'Revamped CSS fund flow mechanism where central funds are disbursed directly to vendor/beneficiary accounts upon bill generation, saving thousands of crores in interest float.',
        source: 'Department of Expenditure, Ministry of Finance 2022'
      },
      {
        title: 'Swachh Bharat Mission (Grameen)',
        desc: 'World\'s largest behavioral change sanitation campaign, constructing over 11 crore household latrines and achieving Open Defecation Free (ODF) declarations backed by geo-tagging verification.',
        source: 'Ministry of Jal Shakti'
      }
    ],
    prelimsPointers: [
      'Under the NITI Aayog Sub-Group recommendations, CSS sharing pattern is 60:40 for general states, 90:10 for 8 North Eastern and 3 Himalayan States, and 100% central funding for UTs without legislatures.',
      'Public Financial Management System (PFMS) is administered by the Controller General of Accounts (CGA), Department of Expenditure.',
      'Core of the Core schemes (like MGNREGA, National Social Assistance Programme) maintain their pre-existing funding pattern.'
    ],
    mainsPointers: [
      '"Centrally Sponsored Schemes have distorted state priorities and eroded fiscal federalism." Critically evaluate in the light of the NITI Aayog Sub-Group recommendations on CSS rationalisation.',
      'Examine the design and implementation challenges of flagship schemes like Smart Cities Mission and Beti Bachao Beti Padhao. Why has behavior change proven harder than physical infrastructure creation?'
    ],
    officialSource: 'NITI Aayog Report of the Sub-Group of Chief Ministers on CSS 2015'
  }
];
