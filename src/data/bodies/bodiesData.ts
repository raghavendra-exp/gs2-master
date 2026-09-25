export interface BodyProfile {
  id: string;
  name: string;
  type: 'Constitutional' | 'Statutory' | 'Regulatory' | 'Quasi-Judicial';
  articleOrAct: string;
  yearEstablished: number;
  ministryOrParent: string;
  composition: string;
  appointmentProcess: string;
  tenureAndRemoval: string;
  mandateAndPowers: string[];
  limitationsAndIssues: string[];
  independenceSafeguards: string[];
  recentDevelopments: string;
  prelimsFacts: string[];
  mainsRelevance: string;
  officialUrl: string;
  upRelevance?: string;
}

export const INSTITUTIONAL_BODIES: BodyProfile[] = [
  {
    id: 'body-cag',
    name: 'Comptroller and Auditor General of India (CAG)',
    type: 'Constitutional',
    articleOrAct: 'Article 148 to 151, Constitution of India & CAG (DPC) Act 1971',
    yearEstablished: 1950,
    ministryOrParent: 'Independent Constitutional Authority',
    composition: 'Single-member constitutional authority (assisted by Indian Audit and Accounts Department).',
    appointmentProcess: 'Appointed by the President by warrant under his hand and seal.',
    tenureAndRemoval: 'Tenure: 6 years or up to 65 years of age, whichever is earlier. Removed by the President on the same grounds and manner as a Supreme Court Judge (proved misbehaviour or incapacity via special majority address by Parliament).',
    mandateAndPowers: [
      'Guardian of the public purse; controls entire financial system of Union and States.',
      'Audits all expenditure from Consolidated Fund of India, Consolidated Funds of each State, and UTs having Legislative Assemblies.',
      'Audits Contingency Funds and Public Accounts of Union and States.',
      'Submits audit reports to President/Governor, who causes them to be laid before Parliament/State Legislature (Art 151).',
      'Acts as friend, philosopher, and guide to the Public Accounts Committee (PAC).'
    ],
    limitationsAndIssues: [
      'Post-facto audit: Audits expenditure after it has already occurred ("post-mortem" function).',
      'No power to enforce audit findings; reports are recommendatory.',
      'Limited access to secret service funds and private-public partnerships (PPPs) / Special Purpose Vehicles (SPVs).',
      'Role as "Comptroller" (controlling issue of money from exchequer) is negligible compared to British counterpart where money cannot be issued without CAG sanction.'
    ],
    independenceSafeguards: [
      'Security of tenure (removal like SC judge).',
      'Ineligible for further office under Central or State Government after retirement.',
      'Salary and service conditions cannot be varied to disadvantage after appointment.',
      'Administrative expenses and salaries are CHARGED upon the Consolidated Fund of India (non-votable).'
    ],
    recentDevelopments: 'Pioneered environmental and digital public infrastructure audits; introduced AI-enabled data analytics and continuous auditing via One IA&AD platform.',
    prelimsFacts: [
      'Dr. Ambedkar called CAG the most important officer under the Constitution of India.',
      'Submits 3 reports to the President: Audit report on Appropriation Accounts, Finance Accounts, and Public Undertakings.',
      'Does NOT audit local bodies directly unless requested under section 20 of the CAG Act.'
    ],
    mainsRelevance: 'Accountability, legislative control over finance, performance auditing, and executive friction.',
    officialUrl: 'https://cag.gov.in',
    upRelevance: 'CAG maintains the accounts of the State of Uttar Pradesh through the Principal Accountant General (A&E) office in Prayagraj.'
  },
  {
    id: 'body-upsc',
    name: 'Union Public Service Commission (UPSC)',
    type: 'Constitutional',
    articleOrAct: 'Articles 315 to 323, Part XIV, Constitution of India',
    yearEstablished: 1926,
    ministryOrParent: 'Independent Constitutional Authority (Nodal: DoPT)',
    composition: 'Chairman and 9 to 11 members (determined by the President).',
    appointmentProcess: 'Appointed by the President. Half of the members must have held office for at least 10 years under the Government of India or a State Government.',
    tenureAndRemoval: 'Tenure: 6 years or until 65 years of age. Removed by the President on grounds of misbehaviour ONLY after the Supreme Court conducts an inquiry under Article 317 and upholds removal (SC advice is binding).',
    mandateAndPowers: [
      'Conducts examinations for appointments to All-India Services, Central Services, and Public Services.',
      'Consulted on matters relating to recruitment methods, promotions, transfers, and disciplinary actions affecting civil servants.',
      'Submits annual report to the President, which is laid before each House of Parliament with a memorandum explaining cases where advice was not accepted.'
    ],
    limitationsAndIssues: [
      'Advisory body: Its advice is not mandatory on the government (though conventions dictate acceptance).',
      'Excluded from reservation classifications, creamy layer guidelines, and selection of certain posts/tribunals via regulations made under Art 320 proviso.'
    ],
    independenceSafeguards: [
      'Security of tenure subject to Article 317 inquiry by Supreme Court.',
      'Salaries and expenses charged on the Consolidated Fund of India.',
      'Chairman is ineligible for any further employment under GoI or State Govt. Members are eligible only for UPSC chairmanship or State PSC chairmanship.'
    ],
    recentDevelopments: 'Introduction of biometric and facial recognition measures, digital verification of certificates, and evaluation of lateral entry scheme recruitment.',
    prelimsFacts: [
      'Predecessor: Public Service Commission established in 1926 under Government of India Act 1919 following Lee Commission (1924) recommendations.',
      'Article 315 provides for UPSC for the Union and a State Public Service Commission (SPSC) for each State.',
      'Joint State Public Service Commission (JSPSC) is a STATUTORY body created by Parliament, not a constitutional body.'
    ],
    mainsRelevance: 'Civil service neutrality, meritocracy in recruitment, lateral entry debates, and institutional integrity.',
    officialUrl: 'https://upsc.gov.in',
    upRelevance: 'UPPSC (Uttar Pradesh Public Service Commission, Prayagraj) operates under Article 315 with removal power vested solely in the President of India (not the Governor).'
  },
  {
    id: 'body-nhrc',
    name: 'National Human Rights Commission (NHRC)',
    type: 'Statutory',
    articleOrAct: 'Protection of Human Rights Act 1993 (amended in 2006 & 2019)',
    yearEstablished: 1993,
    ministryOrParent: 'Ministry of Home Affairs',
    composition: 'Chairperson (former CJI or Supreme Court Judge) + 5 full-time members + 7 ex-officio members (Chairpersons of NCW, NCPCR, NCSC, NCST, NCBC, NCM, and Chief Commissioner for Persons with Disabilities).',
    appointmentProcess: 'Appointed by the President on the recommendation of a 6-member committee: Prime Minister (Head), Speaker of Lok Sabha, Deputy Chairman of Rajya Sabha, Leaders of Opposition in both Houses, and Union Home Minister.',
    tenureAndRemoval: 'Tenure: 3 years or up to 70 years of age (eligible for reappointment). Removed by President on grounds of proved misbehaviour after Supreme Court inquiry.',
    mandateAndPowers: [
      'Inquire suo motu or on petition into human rights violations or negligence by public servants.',
      'Intervene in court proceedings involving human rights allegations.',
      'Visit jails and detention centres to study living conditions.',
      'Vested with powers of a Civil Court trying a suit under Code of Civil Procedure 1908.'
    ],
    limitationsAndIssues: [
      'Recommendations are purely advisory; cannot punish violators or award monetary relief directly (often characterized as "toothless tiger").',
      'Cannot investigate complaints made after one year from date of incident (Section 36(2) limitation period).',
      'Limited jurisdiction over armed forces (can only seek report from Central government).'
    ],
    independenceSafeguards: [
      'Multi-party selection panel including Opposition Leaders.',
      'Salaries cannot be varied to disadvantage during tenure.',
      'Specialized investigative staff.'
    ],
    recentDevelopments: 'Global Alliance of National Human Rights Institutions (GANHRI) deferred NHRC accreditation review, citing concerns on composition, diversity, and independence.',
    prelimsFacts: [
      '2019 Amendment: Reduced tenure from 5 years to 3 years; allowed any Supreme Court Judge (not just CJI) to be appointed Chairperson.',
      'Cannot inquire into any matter after the expiry of 1 year from the date on which the act is alleged to have been committed.'
    ],
    mainsRelevance: 'Human rights protection, custodial torture prevention, statutory commission efficacy, and civil liberties.',
    officialUrl: 'https://nhrc.nic.in',
    upRelevance: 'UP State Human Rights Commission (UPSHRC) is headquartered in Lucknow, addressing custodial violence and prison conditions.'
  },
  {
    id: 'body-lokpal',
    name: 'Lokpal and Lokayuktas',
    type: 'Statutory',
    articleOrAct: 'Lokpal and Lokayuktas Act 2013',
    yearEstablished: 2019,
    ministryOrParent: 'Department of Personnel and Training (DoPT)',
    composition: 'Chairperson (former CJI / SC Judge / eminent person) + maximum 8 members (50% judicial members; at least 50% from SC/ST/OBC/Minorities/Women).',
    appointmentProcess: 'Appointed by President on recommendation of Selection Committee: PM (Chair), Speaker of Lok Sabha, Leader of Opposition in Lok Sabha, Chief Justice of India (or nominee), and an eminent jurist.',
    tenureAndRemoval: 'Tenure: 5 years or up to 70 years of age. Removed by President on ground of misbehaviour after reference to Supreme Court on petition signed by at least 100 MPs.',
    mandateAndPowers: [
      'Apex anti-corruption ombudsman with jurisdiction over Prime Minister (with exceptions), Union Ministers, MPs, Group A, B, C, D central government officers.',
      'Has supervisory authority over CBI for cases referred by Lokpal; CBI investigating officers cannot be transferred without Lokpal approval.',
      'Can confiscate assets acquired through corrupt means even during investigation.'
    ],
    limitationsAndIssues: [
      'Exceptions for PM: Allegations regarding international relations, external/internal security, public order, atomic energy, and space cannot be inquired into unless approved by 2/3rd full bench of Lokpal in camera.',
      'Procedural delays in appointment of members and director of inquiry.',
      'Cannot initiate suo motu inquiries; requires formal complaint.'
    ],
    independenceSafeguards: [
      'Statutory selection committee with bipartisan and judicial representation.',
      'Dedicated prosecution and inquiry wings.',
      'Finances charged upon the Consolidated Fund of India.'
    ],
    recentDevelopments: 'Digital Lokpal portal launched for paperless complaint filing and real-time status tracking.',
    prelimsFacts: [
      'Administrative Reforms Commission (ARC 1966) headed by Morarji Desai first recommended establishing Lokpal and Lokayukta.',
      'Maharashtra was the first state to establish Lokayukta in 1971.',
      'First Lokpal Chairperson was Justice Pinaki Chandra Ghose (appointed in March 2019).'
    ],
    mainsRelevance: 'Institutional anti-corruption architecture, 2nd ARC recommendations, transparency, and Whistleblowers Protection.',
    officialUrl: 'https://lokpal.gov.in',
    upRelevance: 'UP Lokayukta Act 1975 established UP Lokayukta; covers state ministers, legislators, and public servants.'
  },
  {
    id: 'body-rbi',
    name: 'Reserve Bank of India (RBI)',
    type: 'Regulatory',
    articleOrAct: 'Reserve Bank of India Act 1934 & Banking Regulation Act 1949',
    yearEstablished: 1935,
    ministryOrParent: 'Ministry of Finance (Autonomous Statutory Regulator)',
    composition: 'Central Board of Directors headed by Governor and up to 4 Deputy Governors, plus government-nominated directors.',
    appointmentProcess: 'Governor and Deputy Governors appointed by the Central Government on recommendation of Financial Sector Regulatory Appointment Search Committee (FSRASC).',
    tenureAndRemoval: 'Tenure: Usually 3 years (eligible for extension). Removed by Central Government under statutory provisions.',
    mandateAndPowers: [
      'Sole issuer of currency notes (except one-rupee note/coins issued by Ministry of Finance).',
      'Monetary Policy Committee (MPC under Section 45ZB): 6 members, targets headline CPI inflation (4% +/- 2%).',
      'Banker to Central and State Governments; banker to banks.',
      'Regulates commercial banks, NBFCs, payment systems (PSSA 2007), and foreign exchange (FEMA 1999).'
    ],
    limitationsAndIssues: [
      'Section 7 of the RBI Act empowers Central Government to issue directions to the RBI Governor in the public interest after consultation.',
      'Dual regulation friction over public sector banks between RBI and Finance Ministry.',
      'Regulating rapidly evolving fintech, digital lending apps, and crypto assets.'
    ],
    independenceSafeguards: [
      'Statutory autonomy in monetary policy execution.',
      'Independent MPC structure where Governor has casting vote in tie.',
      'Strong institutional prestige and foreign reserve management autonomy.'
    ],
    recentDevelopments: 'Central Bank Digital Currency (e-Rupee pilot), UPI internationalisation, project finance regulatory frameworks, and tokenization.',
    prelimsFacts: [
      'Established on April 1, 1935 on the recommendation of the Hilton Young Commission (Royal Commission on Indian Currency and Finance 1926).',
      'Nationalized on January 1, 1949.',
      'MPC consists of 6 members: 3 from RBI (including Governor) and 3 external members appointed by Central Government. Quorum is 4 members.'
    ],
    mainsRelevance: 'Regulatory autonomy vs sovereign accountability, inflation targeting, financial stability, and digital currency.',
    officialUrl: 'https://rbi.org.in'
  },
  {
    id: 'body-ngt',
    name: 'National Green Tribunal (NGT)',
    type: 'Quasi-Judicial',
    articleOrAct: 'National Green Tribunal Act 2010 (Article 21 alignment)',
    yearEstablished: 2010,
    ministryOrParent: 'Ministry of Environment, Forest and Climate Change',
    composition: 'Full-time Chairperson (retired SC judge or HC Chief Justice) + minimum 10 and maximum 20 Judicial Members + minimum 10 and maximum 20 Expert Members.',
    appointmentProcess: 'Chairperson appointed by Central Government in consultation with CJI. Members selected by a Selection Committee.',
    tenureAndRemoval: 'Tenure: 5 years; not eligible for reappointment.',
    mandateAndPowers: [
      'Adjudicates substantial questions relating to environment and enforcement of legal rights relating to environment.',
      'Guided by principles of Natural Justice; not bound by the Code of Civil Procedure 1908 or Indian Evidence Act 1872.',
      'Applies the Precautionary Principle, Polluter Pays Principle, and Sustainable Development.',
      'Mandated to dispose of cases within 6 months of filing.'
    ],
    limitationsAndIssues: [
      'Excluded from jurisdiction over Wildlife (Protection) Act 1972 and Indian Forest Act 1927.',
      'Vacancies in expert and judicial benches leading to backlogs.',
      'Appeals directly to Supreme Court under Section 22 within 90 days.'
    ],
    independenceSafeguards: [
      'Judicial leadership; members cannot be re-appointed.',
      'Civil Court equivalent powers including powers to execute orders as a decree of a court.'
    ],
    recentDevelopments: 'Suo motu cognizance confirmed as valid by Supreme Court (Municipal Corporation of Greater Mumbai v. Ankita Sinha 2021).',
    prelimsFacts: [
      'India is only the third country in the world (after Australia and New Zealand) to establish a dedicated specialized environmental tribunal.',
      'Headquartered in New Delhi, with regional benches in Bhopal, Pune, Kolkata, and Chennai.',
      'Has jurisdiction over 7 civil environmental laws: Water Act, Air Act, Environment Protection Act, Forest Conservation Act, Public Liability Insurance Act, Biological Diversity Act.'
    ],
    mainsRelevance: 'Environmental jurisprudence, ease of doing business vs environmental clearance, climate justice, and tribunal efficacy.',
    officialUrl: 'https://greentribunal.gov.in',
    upRelevance: 'NGT Principal Bench actively oversees National Mission for Clean Ganga (NMCG) and air pollution control in the NCR-UP industrial belt.'
  }
];
