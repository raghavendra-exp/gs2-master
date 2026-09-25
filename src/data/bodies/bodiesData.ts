export interface BodyProfile {
  id: string;
  name: string;
  type: 'Constitutional' | 'Statutory' | 'Regulatory' | 'Quasi-Judicial' | 'Executive / Advisory';
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
  // ==================== CONSTITUTIONAL BODIES ====================
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
      'Audits all expenditure from Consolidated Fund of India, Consolidated Funds of each State, and UTs with Assemblies.',
      'Audits Contingency Funds and Public Accounts of Union and States.',
      'Submits audit reports to President/Governor, who causes them to be laid before Parliament/State Legislature (Art 151).',
      'Acts as friend, philosopher, and guide to the Public Accounts Committee (PAC).'
    ],
    limitationsAndIssues: [
      'Post-facto audit: Audits expenditure after it has already occurred ("post-mortem" function).',
      'No power to enforce audit findings; reports are recommendatory.',
      'Limited access to secret service funds and private-public partnerships (PPPs) / Special Purpose Vehicles (SPVs).'
    ],
    independenceSafeguards: [
      'Security of tenure (removal like SC judge).',
      'Ineligible for further office under Central or State Government after retirement.',
      'Administrative expenses and salaries are CHARGED upon the Consolidated Fund of India (non-votable).'
    ],
    recentDevelopments: 'Pioneered environmental and digital public infrastructure audits; introduced AI-enabled data analytics and continuous auditing via One IA&AD platform.',
    prelimsFacts: [
      'Dr. Ambedkar called CAG the most important officer under the Constitution of India.',
      'Submits 3 reports: Appropriation Accounts, Finance Accounts, and Public Undertakings.',
      'Does NOT audit local bodies directly unless requested under section 20 of the CAG Act.'
    ],
    mainsRelevance: 'Accountability, legislative control over finance, performance auditing, and executive friction.',
    officialUrl: 'https://cag.gov.in',
    upRelevance: 'CAG maintains the accounts of the State of Uttar Pradesh through the Principal Accountant General (A&E) office in Prayagraj.'
  },
  {
    id: 'body-eci',
    name: 'Election Commission of India (ECI)',
    type: 'Constitutional',
    articleOrAct: 'Article 324, Constitution of India & Chief Election Commissioner and other ECs Act 2023',
    yearEstablished: 1950,
    ministryOrParent: 'Independent Constitutional Body',
    composition: 'Chief Election Commissioner (CEC) and 2 Election Commissioners (multi-member body since 1993).',
    appointmentProcess: 'Appointed by President on recommendation of Selection Committee: PM (Chair), a Union Cabinet Minister, and Leader of Opposition / largest opposition party leader in Lok Sabha (Act of 2023).',
    tenureAndRemoval: 'Tenure: 6 years or 65 years of age. CEC can only be removed like a Supreme Court Judge. Other ECs can be removed only on recommendation of the CEC.',
    mandateAndPowers: [
      'Superintendence, direction, and control of elections to Parliament, State Legislatures, President, and Vice-President.',
      'Prepares electoral rolls, recognizes political parties, allocates symbols, enforces Model Code of Conduct (MCC).',
      'Advises President/Governor on disqualification of sitting legislators (Articles 103 and 192).'
    ],
    limitationsAndIssues: [
      'Differential removal procedure: ECs do not enjoy the same constitutional protection as the CEC.',
      'Exclusion of Chief Justice of India from selection panel in 2023 Act criticized vis-a-vis Anoop Baranwal (2023) judgment.',
      'No post-retirement bar on commissioners accepting government appointments.'
    ],
    independenceSafeguards: [
      'CEC enjoys security of tenure equal to SC judge.',
      'Service conditions of CEC cannot be varied to his disadvantage after appointment.'
    ],
    recentDevelopments: 'Implemented nationwide VVPAT audit matching; digitized voter services via ECISVEEP and cVIGIL apps.',
    prelimsFacts: [
      'ECI does NOT conduct Panchayat and Municipal elections (State Election Commissions do under Articles 243K & 243ZA).',
      'Decisions in multi-member Commission are taken by consensus or majority vote; all three have equal salary and status.'
    ],
    mainsRelevance: 'Electoral integrity, institutional autonomy, Model Code of Conduct legal status, and simultaneous elections.',
    officialUrl: 'https://eci.gov.in',
    upRelevance: 'Administers Assembly and Parliamentary elections across 80 Lok Sabha and 403 Vidhan Sabha constituencies in UP.'
  },
  {
    id: 'body-upsc',
    name: 'Union Public Service Commission (UPSC)',
    type: 'Constitutional',
    articleOrAct: 'Articles 315 to 323, Part XIV, Constitution of India',
    yearEstablished: 1926,
    ministryOrParent: 'Independent Constitutional Body (Nodal: Ministry of Personnel, Public Grievances & Pensions)',
    composition: 'Chairman and other members (usually 9 to 11 members appointed by the President).',
    appointmentProcess: 'Appointed by the President. Half of the members must have held office for at least 10 years under Government of India or a State.',
    tenureAndRemoval: '6 years or up to 65 years. Removed by President on grounds of misbehaviour only after Supreme Court inquiry under Article 317.',
    mandateAndPowers: [
      'Conducts examinations for appointment to the services of the Union (All India Services, Central Civil Services).',
      'Consulted on all disciplinary matters affecting a civil servant and principles of promotions and transfers (Article 320).',
      'Submits annual report on work done to President, which is laid before both Houses with memorandum explaining any non-acceptance.'
    ],
    limitationsAndIssues: [
      'Advisory role only: Recommendations are not binding on the executive.',
      'Can be excluded from consultation by Presidential regulations (Article 320(4)). Central Vigilance Commission often shares disciplinary jurisdiction.',
      'Does not handle reservations (handled by DoPT).'
    ],
    independenceSafeguards: [
      'Security of tenure with SC inquiry safeguard under Art 317.',
      'Salaries and expenses charged on Consolidated Fund of India.',
      'Chairman is ineligible for further employment under Central or State Government.'
    ],
    recentDevelopments: 'Integration of digital verification, candidate biometric authentication, and lateral entry recruitment examinations.',
    prelimsFacts: [
      'Article 315 also allows two or more states to agree to have a Joint Public Service Commission (JSPSC created by Act of Parliament).',
      'Origin traces back to the Lee Commission recommendation (1924) establishing the Public Service Commission in 1926.'
    ],
    mainsRelevance: 'Merit system watchdog, All India Services federal neutral character, and lateral entry vs traditional cadre recruitment.',
    officialUrl: 'https://upsc.gov.in'
  },
  {
    id: 'body-spsc',
    name: 'State Public Service Commission (SPSC / UPPSC)',
    type: 'Constitutional',
    articleOrAct: 'Articles 315 to 323, Part XIV, Constitution of India',
    yearEstablished: 1937,
    ministryOrParent: 'State Government (Uttar Pradesh Public Service Commission, Prayagraj)',
    composition: 'Chairman and other members as determined by the Governor of the State.',
    appointmentProcess: 'Appointed by the GOVERNOR of the State.',
    tenureAndRemoval: '6 years or up to 62 years of age (NOTE: Age limit is 62, unlike UPSC\'s 65). CRITICAL: Can only be removed by the PRESIDENT (not Governor) on grounds of misbehaviour after SC inquiry.',
    mandateAndPowers: [
      'Conducts examinations for appointments to the civil services and posts under the State Government (e.g. UP Combined State / Upper Subordinate exam).',
      'Consulted by State Government on methods of recruitment, disciplinary matters, and claims for reimbursement of legal expenses.',
      'Submits annual report to Governor who places it before the State Legislature.'
    ],
    limitationsAndIssues: [
      'Advisory nature of recommendations.',
      'Delays in examinations and litigation surrounding paper integrity and evaluation moderation.',
      'Subordinate to State government decisions on service cadre rules and reservation rosters.'
    ],
    independenceSafeguards: [
      'Governor appoints, but ONLY President can remove.',
      'Expenses charged on the Consolidated Fund of the State.',
      'Chairman of SPSC is eligible for appointment as Chairman/Member of UPSC or Chairman of another SPSC, but ineligible for any other govt post.'
    ],
    recentDevelopments: 'UPPSC implemented one-time registration (OTR), negative marking in preliminary screening tests, and strict paper custody protocols.',
    prelimsFacts: [
      'Governor appoints SPSC members, but CANNOT remove them. Only the President can remove an SPSC member.',
      'Retirement age is 62 years (raised from 60 by 41st Constitutional Amendment 1976).'
    ],
    mainsRelevance: 'Provincial civil administration, meritocracy, recruitment governance, and state-level administrative capacity.',
    officialUrl: 'https://uppsc.up.nic.in',
    upRelevance: 'Headquartered in Prayagraj, UPPSC conducts PCS, ACF/RFO, and RO/ARO examinations for UP state cadres.'
  },
  {
    id: 'body-fc',
    name: 'Finance Commission of India',
    type: 'Constitutional',
    articleOrAct: 'Article 280, Constitution of India & Finance Commission (Miscellaneous Provisions) Act 1951',
    yearEstablished: 1951,
    ministryOrParent: 'Constitutional Body (Constituted every 5th year or earlier by President)',
    composition: 'Chairman and 4 other members appointed by President.',
    appointmentProcess: 'Appointed by the President. Parliament has prescribed qualifications by law (judges/finance/economics/public administration experts).',
    tenureAndRemoval: 'Specified by the President in the appointment order; eligible for reappointment.',
    mandateAndPowers: [
      'Recommends distribution of net tax proceeds between Union and States (Vertical Devolution).',
      'Recommends allocation between States of their respective shares (Horizontal Devolution).',
      'Recommends principles governing grants-in-aid to States out of Consolidated Fund of India (Article 275).',
      'Recommends measures to augment State Consolidated Funds to supplement resources of Panchayats and Municipalities.'
    ],
    limitationsAndIssues: [
      'Recommendations are purely ADVISORY in nature and not legally binding on Government of India.',
      'Proliferation of cesses and surcharges (non-divisible pool) reduces the effective share of divisible pool received by states.',
      'Tension between performance-based incentives and demographic re-weighting (2011 census vs 1971 census).'
    ],
    independenceSafeguards: [
      'Quasi-judicial powers under Code of Civil Procedure 1908 to summon witnesses and requisition records.',
      'Periodic constitutional renewal outside regular ministerial hierarchy.'
    ],
    recentDevelopments: '16th Finance Commission constituted under chairmanship of Dr. Arvind Panagariya (recommendations cover 2026-2031 period). 15th FC (N.K. Singh) maintained 41% vertical devolution.',
    prelimsFacts: [
      'First Finance Commission was set up in 1951 under chairmanship of K.C. Neogy.',
      '15th FC introduced 12.5% demographic performance metric to balance southern states\' population stabilization success.'
    ],
    mainsRelevance: 'Fiscal federalism, vertical fiscal imbalance, cesses/surcharges erosion, and local body grant conditionalities.',
    officialUrl: 'https://fincomindia.nic.in'
  },
  {
    id: 'body-ncsc',
    name: 'National Commission for Scheduled Castes (NCSC)',
    type: 'Constitutional',
    articleOrAct: 'Article 338, Constitution of India (bifurcated from joint commission by 89th Amendment Act 2003)',
    yearEstablished: 2004,
    ministryOrParent: 'Ministry of Social Justice and Empowerment',
    composition: 'Chairperson, Vice-Chairperson, and 3 other Members (at least one woman member).',
    appointmentProcess: 'Appointed by the President by warrant under his hand and seal.',
    tenureAndRemoval: 'Tenure determined by President (typically 3 years). Conditions of service similar to Minister of State / Secretary.',
    mandateAndPowers: [
      'Investigates and monitors all matters relating to constitutional and legal safeguards for Scheduled Castes.',
      'Inquires into specific complaints with respect to deprivation of rights and safeguards of SCs.',
      'Participates and advises on planning process of socio-economic development of SCs.',
      'Vested with all powers of a Civil Court trying a suit under CPC 1908 (summoning, evidence, discovery).'
    ],
    limitationsAndIssues: [
      'Reports are recommendatory; no power to punish offenders directly or award binding compensation.',
      'High vacancy rates and inadequate staffing weaken field investigation capacity.',
      'Duplication of proceedings with State SC Commissions.'
    ],
    independenceSafeguards: [
      'Constitutional status under Article 338.',
      'Reports must be laid before Parliament and concerned State Legislatures with action-taken memorandum.'
    ],
    recentDevelopments: 'Digitized online grievance tracking system for atrocities; proactive suo motu cognizance in cases of manual scavenging deaths.',
    prelimsFacts: [
      'Earlier combined commission was bifurcated into NCSC (Art 338) and NCST (Art 338A) by 89th Constitutional Amendment 2003.',
      'Also formerly handled Anglo-Indians safeguards until Anglo-Indian reservation lapsed via 104th Amendment 2019.'
    ],
    mainsRelevance: 'Social justice, institutional monitoring of affirmative action, and implementation of PCR Act 1955 and SC/ST PoA Act 1989.',
    officialUrl: 'https://ncsc.nic.in'
  },
  {
    id: 'body-ncst',
    name: 'National Commission for Scheduled Tribes (NCST)',
    type: 'Constitutional',
    articleOrAct: 'Article 338A, Constitution of India (inserted by 89th Constitutional Amendment Act 2003)',
    yearEstablished: 2004,
    ministryOrParent: 'Ministry of Tribal Affairs',
    composition: 'Chairperson, Vice-Chairperson, and 3 Members (including at least one woman).',
    appointmentProcess: 'Appointed by the President by warrant under his hand and seal.',
    tenureAndRemoval: '3 years tenure from date of assumption of office.',
    mandateAndPowers: [
      'Investigate and monitor safeguards provided for Scheduled Tribes under Constitution, FRA 2006, and PESA 1996.',
      'Evaluate progress of ST development under Union and States, including Tribal Sub-Plan / DAJGAY funds.',
      'Inquire into complaints regarding tribal land alienation, displacement, and forest dwelling rights.',
      'Powers of a Civil Court while investigating matters.'
    ],
    limitationsAndIssues: [
      'Non-binding advisory nature of findings.',
      'Inability to stop arbitrary forest evictions or environmental clearances that bypass Gram Sabha consent under FRA/PESA.'
    ],
    independenceSafeguards: [
      'Direct constitutional standing under Article 338A.',
      'Mandatory tabling of annual reports before Parliament and State Assemblies.'
    ],
    recentDevelopments: 'Special focus on Particularly Vulnerable Tribal Groups (PVTGs) through PM-JANMAN mission and tracking FRA individual/community forest titles.',
    prelimsFacts: [
      'Has special duties regarding measures over conferring ownership rights in respect of minor forest produce to STs under PESA.',
      'Chairperson has the rank of a Union Cabinet Minister.'
    ],
    mainsRelevance: 'Tribal rights, Forest Rights Act 2006 compliance, PESA implementation gaps, and development-induced displacement.',
    officialUrl: 'https://ncst.nic.in'
  },
  {
    id: 'body-ncbc',
    name: 'National Commission for Backward Classes (NCBC)',
    type: 'Constitutional',
    articleOrAct: 'Article 338B, Constitution of India (accorded constitutional status by 102nd Constitutional Amendment Act 2018)',
    yearEstablished: 2018,
    ministryOrParent: 'Ministry of Social Justice and Empowerment',
    composition: 'Chairperson, Vice-Chairperson, and 3 other Members.',
    appointmentProcess: 'Appointed by the President by warrant under his hand and seal.',
    tenureAndRemoval: '3 years tenure under conditions prescribed by President.',
    mandateAndPowers: [
      'Investigates and monitors all matters relating to safeguards for socially and educationally backward classes (SEBCs).',
      'Inquires into specific complaints of deprivation of rights of OBCs.',
      'Participates and advises on socio-economic development of SEBCs.',
      'Holds powers of a Civil Court.'
    ],
    limitationsAndIssues: [
      'Earlier statutory NCBC (1993) set up post-Indra Sawhney had limited mandate to examine inclusion/exclusion requests; constitutional status under 338B expanded mandate but institutional staffing remains constrained.',
      'Sub-categorization of OBCs handled by Justice Rohini Commission rather than NCBC itself.'
    ],
    independenceSafeguards: [
      'Constitutional status parity with NCSC and NCST.',
      'Mandatory consultation by Union and State governments on all major policy matters affecting SEBCs.'
    ],
    recentDevelopments: '105th Constitutional Amendment (2021) clarified that States have the power to maintain their own state lists of SEBCs (restoring pre-Maratha judgment position).',
    prelimsFacts: [
      'Accorded constitutional status by 102nd Amendment Act 2018 (inserted Art 338B and 342A).',
      '105th Amendment 2021 amended Article 342A to explicitly empower State Governments to identify OBCs for state purposes.'
    ],
    mainsRelevance: 'OBC reservation politics, sub-categorization of backward classes, creamy layer criteria, and affirmative action governance.',
    officialUrl: 'https://ncbc.nic.in'
  },
  {
    id: 'body-linguistic',
    name: 'Special Officer for Linguistic Minorities',
    type: 'Constitutional',
    articleOrAct: 'Article 350B, Constitution of India (inserted by 7th Constitutional Amendment Act 1956)',
    yearEstablished: 1957,
    ministryOrParent: 'Ministry of Minority Affairs (Commissioner for Linguistic Minorities - CLM)',
    composition: 'Designated as the Commissioner for Linguistic Minorities, assisted by Deputy Commissioners and Assistant Commissioners.',
    appointmentProcess: 'Appointed by the President of India.',
    tenureAndRemoval: 'Tenure determined by the President.',
    mandateAndPowers: [
      'Investigate all matters relating to the safeguards provided for linguistic minorities under the Constitution (e.g. Art 29, 30, 350A instruction in mother tongue at primary stage).',
      'Submit reports to President at specified intervals, laid before each House of Parliament and sent to State Governments.'
    ],
    limitationsAndIssues: [
      'Lacks executive enforcement powers; cannot issue binding directives to State education boards.',
      'Low public awareness and minimal institutional visibility compared to other commissions.'
    ],
    independenceSafeguards: [
      'Constitutional creation under States Reorganisation recommendations.'
    ],
    recentDevelopments: 'Active oversight on preservation of endangered languages and implementation of three-language formula under NEP 2020.',
    prelimsFacts: [
      'Created pursuant to recommendations of States Reorganisation Commission (Fazl Ali Commission) via 7th Amendment 1956.',
      'Headquartered in New Delhi, with regional offices at Belgaum, Chennai, and Kolkata.'
    ],
    mainsRelevance: 'Linguistic federalism, minority educational rights, and implementation of Article 350A and 350B.',
    officialUrl: 'https://clm.gov.in'
  },
  {
    id: 'body-agi',
    name: 'Attorney General of India (AGI)',
    type: 'Constitutional',
    articleOrAct: 'Article 76, Constitution of India',
    yearEstablished: 1950,
    ministryOrParent: 'Highest Law Officer in the Country (Ministry of Law and Justice)',
    composition: 'Single individual office.',
    appointmentProcess: 'Appointed by the President. Must be a person qualified to be appointed a Judge of the Supreme Court.',
    tenureAndRemoval: 'Holds office during the PLEASURE of the President (no fixed constitutional tenure). Receives remuneration as the President may determine. Resigns conventionally when Government changes.',
    mandateAndPowers: [
      'Gives advice to Government of India upon legal matters referred by President.',
      'Appears on behalf of GoI in all cases before Supreme Court (Article 143 references, original suits, appeals).',
      'Right of audience in ALL courts in the territory of India (Article 76(3)).',
      'Right to speak and take part in proceedings of both Houses of Parliament, joint sittings, and parliamentary committees of which he may be named a member, but WITHOUT THE RIGHT TO VOTE (Article 88).'
    ],
    limitationsAndIssues: [
      'Not a full-time government servant; not debarred from private legal practice (cannot advise or hold brief against GoI).',
      'Does not have a seat in the Cabinet (the Law Minister handles ministry affairs in Cabinet).'
    ],
    independenceSafeguards: [
      'Supreme Court judge qualifications guarantee eminent legal stature.'
    ],
    recentDevelopments: 'Key representation in Electoral Bonds, Article 370 abrogation, and Sub-classification of SC/ST cases.',
    prelimsFacts: [
      'Attorney General has the right to speak in Parliament but CANNOT vote (Article 88).',
      'Assisted by Solicitor General of India and Additional Solicitors General (who are statutory offices, not mentioned in Constitution).'
    ],
    mainsRelevance: 'Rule of law, legal advice to executive, Article 143 advisory references, and constitutional litigation.',
    officialUrl: 'https://lawmin.gov.in'
  },
  {
    id: 'body-adv-gen',
    name: 'Advocate General of the State',
    type: 'Constitutional',
    articleOrAct: 'Article 165, Constitution of India',
    yearEstablished: 1950,
    ministryOrParent: 'Highest Law Officer in the State',
    composition: 'Single individual office.',
    appointmentProcess: 'Appointed by the GOVERNOR of the State. Must be a person qualified to be appointed a Judge of a High Court.',
    tenureAndRemoval: 'Holds office during the PLEASURE of the Governor. Remuneration determined by Governor.',
    mandateAndPowers: [
      'Advises State Government on legal matters referred by Governor.',
      'Appears for the State in High Court and Supreme Court.',
      'Right of audience before any court in the state.',
      'Right to speak and take part in proceedings of State Legislature (Vidhan Sabha & Vidhan Parishad) and its committees, but WITHOUT RIGHT TO VOTE (Article 177).'
    ],
    limitationsAndIssues: [
      'Not a government servant; permitted private legal practice provided it is not adverse to State interests.'
    ],
    independenceSafeguards: [
      'High Court judge qualifications mandate senior bar status.'
    ],
    recentDevelopments: 'Representation of State Governments in inter-state water disputes, GST dispute resolution, and local reservation legislations.',
    prelimsFacts: [
      'Article 177 grants Advocate General the right to speak in State Legislature without the right to vote.',
      'Holds office during the pleasure of the Governor (conventionally resigns with ministry change).'
    ],
    mainsRelevance: 'State legal advisory mechanisms, federal litigation, and legislative procedural integrity.',
    officialUrl: 'https://upadvocateoffice.gov.in',
    upRelevance: 'Advocate General of Uttar Pradesh represents the State government before Allahabad High Court (Principal Bench and Lucknow Bench).'
  },

  // ==================== STATUTORY, REGULATORY & QUASI-JUDICIAL BODIES ====================
  {
    id: 'body-niti',
    name: 'NITI Aayog (National Institution for Transforming India)',
    type: 'Executive / Advisory',
    articleOrAct: 'Cabinet Resolution dated January 1, 2015 (Replaced Planning Commission)',
    yearEstablished: 2015,
    ministryOrParent: 'Apex Public Policy Think Tank, Government of India',
    composition: 'Chairperson: Prime Minister; Vice-Chairperson (Cabinet Minister rank); Full-time Members (MoS rank); Ex-officio members (Union Ministers); CEO (Secretary rank); Governing Council: All Chief Ministers and Lt. Governors.',
    appointmentProcess: 'Appointed directly by the Prime Minister.',
    tenureAndRemoval: 'At the pleasure of the Prime Minister / tenure as specified by Government.',
    mandateAndPowers: [
      'Fosters Cooperative and Competitive Federalism through structured, continuous engagement with States.',
      'Acts as a cutting-edge resource centre, knowledge hub, and think tank.',
      'Designs strategic long-term policy frameworks (Vision, Strategy, Action Agenda).',
      'Publishes diagnostic performance indices: Multidimensional Poverty Index (MPI), SDG India Index, State Health Index, Composite Water Management Index, Aspirational Districts Programme.'
    ],
    limitationsAndIssues: [
      'Lacks financial allocation power (unlike erstwhile Planning Commission which allocated capital plan expenditure).',
      'Cannot enforce policy compliance; purely advisory.',
      'Criticism from regional parties regarding uneven policy prioritization.'
    ],
    independenceSafeguards: [
      'Governing Council platform brings all States and UTs on equal constitutional footing with Centre.'
    ],
    recentDevelopments: 'Spearheading Aspirational Blocks Programme (covering 500 underserved blocks), Mission LiFE, and national green hydrogen policy roadmaps.',
    prelimsFacts: [
      'NITI Aayog is NEITHER a constitutional body NOR a statutory body; it is a non-statutory body created by an executive resolution.',
      'Governing Council includes all Chief Ministers of States and Union Territories with legislatures and Lt. Governors of other UTs.'
    ],
    mainsRelevance: 'Cooperative federalism, evidence-based policy making, sunset reviews of CSS, and Aspirational Districts model.',
    officialUrl: 'https://niti.gov.in',
    upRelevance: 'UP has actively partnered in Aspirational Districts Programme (e.g. Balrampur, Shravasti, Bahraich) and constituted State Transformation Commission (STC) on NITI lines.'
  },
  {
    id: 'body-rbi',
    name: 'Reserve Bank of India (RBI)',
    type: 'Regulatory',
    articleOrAct: 'Reserve Bank of India Act, 1934 (Nationalised 1949 under RBI Transfer to Public Ownership Act 1948)',
    yearEstablished: 1935,
    ministryOrParent: 'Central Banking Institution (Ministry of Finance)',
    composition: 'Central Board of Directors headed by Governor and up to 4 Deputy Governors appointed by Central Government.',
    appointmentProcess: 'Appointed by Appointments Committee of the Cabinet (ACC) on recommendation of FSRASC.',
    tenureAndRemoval: 'Tenure up to 3 years (eligible for extension). Removed by Central Government.',
    mandateAndPowers: [
      'Monetary policy formulation via Monetary Policy Committee (MPC) targeting 4% (+/- 2%) CPI inflation.',
      'Sole issuer of currency notes (except one-rupee note/coin issued by MoF).',
      'Banker and debt manager to Central and State Governments; banker to commercial banks.',
      'Regulates and supervises commercial banks, NBFCs, payment and settlement systems (PSSA 2007).'
    ],
    limitationsAndIssues: [
      'Section 7 of RBI Act empowers Central Government to issue binding directions to RBI in public interest after consultation.',
      'Tension between growth promotion and inflation targeting; regulation of fintechs and digital lending apps.'
    ],
    independenceSafeguards: [
      'Statutory institutional autonomy in interest rate determination via 6-member MPC (3 RBI + 3 External).',
      'Separate balance sheet and economic capital framework (Jalan Committee).'
    ],
    recentDevelopments: 'Launched Central Bank Digital Currency (CBDC - Digital Rupee), regulatory sandbox for fintech, and unified payments interface (UPI) internationalization.',
    prelimsFacts: [
      'Set up on the recommendation of the Royal Commission on Indian Currency and Finance (Hilton Young Commission) 1926.',
      'Began operations on April 1, 1935 in Calcutta, later permanently shifted to Mumbai in 1937.'
    ],
    mainsRelevance: 'Institutional autonomy, inflation targeting framework, NPA resolution (IBC interface), and financial stability.',
    officialUrl: 'https://rbi.org.in'
  },
  {
    id: 'body-nhrc',
    name: 'National Human Rights Commission (NHRC)',
    type: 'Statutory',
    articleOrAct: 'Protection of Human Rights Act, 1993 (amended in 2006 and 2019)',
    yearEstablished: 1993,
    ministryOrParent: 'Ministry of Home Affairs',
    composition: 'Chairperson (former CJI or Judge of Supreme Court) + 5 full-time members + 7 ex-officio members (Chairpersons of NCSC, NCST, NCBC, NCW, NCPCR, NCM, and Chief Commissioner for PwDs).',
    appointmentProcess: 'Appointed by President on recommendation of a 6-member committee: Prime Minister (Head), Speaker of Lok Sabha, Deputy Chairman of Rajya Sabha, Leaders of Opposition in both Houses, Union Home Minister.',
    tenureAndRemoval: 'Tenure: 3 years or up to 70 years of age (2019 amendment reduced tenure from 5 to 3 years; eligible for reappointment). Removed by President on proved misbehaviour after SC inquiry.',
    mandateAndPowers: [
      'Inquires suo motu or on petition into violation of human rights or negligence in prevention by a public servant.',
      'Visits jails and custodial institutions; reviews constitutional/legal safeguards for human rights.',
      'Civil court powers to summon witnesses and examine oaths; maintains its own investigative staff.'
    ],
    limitationsAndIssues: [
      'Purely recommendatory powers; cannot award binding punishment or damages directly.',
      'Limited jurisdiction over armed forces (can only seek a report from Central Government).',
      'Cannot investigate any matter after expiry of 1 year from the date of occurrence (Section 36(2) limitation).'
    ],
    independenceSafeguards: [
      'Broad multi-partisan selection committee involving executive, presiding officers, and opposition.',
      'High judicial eligibility requirements and security of tenure.'
    ],
    recentDevelopments: 'Intensive monitoring of mental healthcare homes, child trafficking prevention, and review of prison conditions.',
    prelimsFacts: [
      'Paris Principles compliant (National Human Rights Institutions standards).',
      '2019 Amendment allowed ANY Supreme Court judge to be Chairperson (not just Chief Justice of India).'
    ],
    mainsRelevance: 'Human rights protection, custodial violence, prison reforms, armed forces oversight, and institutional teeth.',
    officialUrl: 'https://nhrc.nic.in'
  },
  {
    id: 'body-shrc',
    name: 'State Human Rights Commission (SHRC / UP SHRC)',
    type: 'Statutory',
    articleOrAct: 'Section 21, Protection of Human Rights Act 1993',
    yearEstablished: 1996,
    ministryOrParent: 'State Government (Uttar Pradesh SHRC, Lucknow)',
    composition: 'Chairperson (former Chief Justice or Judge of High Court) and 2 Members.',
    appointmentProcess: 'Appointed by Governor on recommendation of a Committee: Chief Minister (Head), Speaker of Legislative Assembly, State Home Minister, Leader of Opposition in Assembly (and Council Chairman & LoP if bicameral).',
    tenureAndRemoval: '3 years or 70 years of age. CRITICAL PRELIMS TRAP: Appointed by Governor, but can ONLY be REMOVED by the PRESIDENT of India on proved misbehaviour after SC inquiry.',
    mandateAndPowers: [
      'Inquires into violation of human rights in respect of matters covered under State List (List II) and Concurrent List (List III) of 7th Schedule.',
      'Civil court powers; inspects state prisons, mental institutions, and police lockups.'
    ],
    limitationsAndIssues: [
      'Recommendatory nature; cannot investigate matters already under NHRC or other statutory commissions.',
      'Inadequate funding and dependence on State police for investigations.'
    ],
    independenceSafeguards: [
      'Removal reserved solely for President, preventing arbitrary dismissal by State Cabinet.'
    ],
    recentDevelopments: 'UP SHRC established dedicated helplines for reporting police encounter complaints and illegal detentions.',
    prelimsFacts: [
      'Appointed by Governor, but removed ONLY by the President.',
      '2019 amendment enabled High Court Judges (not just Chief Justices) to be eligible as Chairperson.'
    ],
    mainsRelevance: 'Custodial torture, police reforms (Prakash Singh directives), and sub-national human rights enforcement.',
    officialUrl: 'https://upshrc.up.nic.in',
    upRelevance: 'Located in Lucknow; handles custodial death and encounter compliance inquiries in UP.'
  },
  {
    id: 'body-cic',
    name: 'Central Information Commission (CIC)',
    type: 'Statutory',
    articleOrAct: 'Section 12, Right to Information (RTI) Act, 2005',
    yearEstablished: 2005,
    ministryOrParent: 'Ministry of Personnel, Public Grievances & Pensions',
    composition: 'Chief Information Commissioner (CIC) and up to 10 Information Commissioners (ICs).',
    appointmentProcess: 'Appointed by President on recommendation of a Committee: Prime Minister (Chair), Leader of Opposition in Lok Sabha, and a Union Cabinet Minister nominated by PM.',
    tenureAndRemoval: 'Tenure determined by Central Government (RTI Amendment Act 2019 replaced fixed 5-year tenure with central rule determination, currently set at 3 years). Removed by President on proved misbehaviour after SC inquiry.',
    mandateAndPowers: [
      'Entertains and decides second appeals and complaints under the RTI Act 2005.',
      'Can impose penalties of ₹250 per day up to ₹25,000 on Public Information Officers (PIOs) for unreasonable delays or denials.',
      'Can recommend disciplinary proceedings against errant PIOs and award compensation to complainants.',
      'Civil court powers to summon, inspect documents, and enforce attendance.'
    ],
    limitationsAndIssues: [
      '2019 RTI Amendment altered statutory parity with Election Commission, giving Centre control over tenure, salaries, and allowances.',
      'Huge pendency of second appeals (averaging 1-2 years backlog in many cases).',
      'High vacancy rates frequently challenged in Supreme Court (Anjali Bhardwaj cases).'
    ],
    independenceSafeguards: [
      'Independent appellate jurisdiction shielded from executive appeals.',
      'Not eligible for reappointment to the same office.'
    ],
    recentDevelopments: 'Digital hearings via video-conferencing; online appeal filing system integrated with RTI Online portal.',
    prelimsFacts: [
      'RTI Act 2005 provides for both Central Information Commission and State Information Commissions (SICs).',
      'CIC is NOT a constitutional body; it is a statutory body.'
    ],
    mainsRelevance: 'Transparency, right to know as part of Article 19(1)(a), weakening of RTI through amendments, and administrative secrecy.',
    officialUrl: 'https://cic.gov.in'
  },
  {
    id: 'body-cvc',
    name: 'Central Vigilance Commission (CVC)',
    type: 'Statutory',
    articleOrAct: 'Central Vigilance Commission Act, 2003 (originally set up by Executive Resolution 1964 on Santhanam Committee recommendations)',
    yearEstablished: 2003,
    ministryOrParent: 'Independent Vigilance Watchdog (Submits report to President)',
    composition: 'Central Vigilance Commissioner (Chairperson) and not more than 2 Vigilance Commissioners.',
    appointmentProcess: 'Appointed by President by warrant under hand and seal on recommendation of 3-member committee: Prime Minister (Head), Union Home Minister, Leader of Opposition in Lok Sabha.',
    tenureAndRemoval: 'Tenure: 4 years or up to 65 years of age (NOTE: Unique 4-year tenure!). Ineligible for further employment under Central or State Government. Removed by President on proved misbehaviour after SC inquiry.',
    mandateAndPowers: [
      'Apex integrity and anti-corruption watchdog for Central Government.',
      'Exercises superintendence over the functioning of Delhi Special Police Establishment (CBI) in investigation of offences under Prevention of Corruption Act 1988.',
      'Inquires into complaints against Group A officers of Central Government, members of All India Services, and executives of PSUs and Public Sector Banks.',
      'Designated agency under Whistleblowers Protection Act.'
    ],
    limitationsAndIssues: [
      'Cannot investigate private sector or state government corruption directly.',
      'Advisory body; disciplinary sanction powers remain with administrative ministries.',
      'Lacks direct prosecutorial powers (relies on CBI or departmental enquiry officers).'
    ],
    independenceSafeguards: [
      'Statutory autonomy conferred following Supreme Court\'s landmark Vineet Narain (1997) judgment.',
      'Security of tenure and charged financial allocations.'
    ],
    recentDevelopments: 'Implemented preventative vigilance modules and integrity pacts in major public procurement contracts above specified thresholds.',
    prelimsFacts: [
      'Tenure is 4 YEARS or 65 years of age (different from typical 3, 5, or 6-year tenures).',
      'Origin traces directly to the Santhanam Committee on Prevention of Corruption (1962-64).'
    ],
    mainsRelevance: 'Anti-corruption framework, superintendence over CBI, whistleblower protection, and preventive vs punitive vigilance.',
    officialUrl: 'https://cvc.gov.in'
  },
  {
    id: 'body-cbi',
    name: 'Central Bureau of Investigation (CBI)',
    type: 'Statutory',
    articleOrAct: 'Delhi Special Police Establishment (DSPE) Act, 1946 (set up by MHA resolution 1963 on Santhanam recommendation)',
    yearEstablished: 1963,
    ministryOrParent: 'Ministry of Personnel, Public Grievances & Pensions (DoPT)',
    composition: 'Director, CBI, assisted by Special Directors, Additional Directors, and Joint Directors.',
    appointmentProcess: 'Appointed by Central Government on recommendation of 3-member committee: Prime Minister (Chair), Leader of Opposition in Lok Sabha, and Chief Justice of India (or SC Judge nominated by CJI) under Section 4A DSPE Act.',
    tenureAndRemoval: 'Tenure: Minimum 2-year tenure guaranteed by CVC Act / Vineet Narain judgment. 2021 amendment permits up to 3 annual extensions (max total 5 years) in public interest.',
    mandateAndPowers: [
      'Premier investigating police agency in India for corruption, economic offences, and heinous/transnational crimes.',
      'Acts as the National Central Bureau for INTERPOL in India.',
      'Superintended by CVC for Prevention of Corruption Act cases, and by Central Government for other criminal cases.'
    ],
    limitationsAndIssues: [
      'Section 6 DSPE Act requires GENERAL CONSENT of State Government to investigate offences in state territory (several opposition states have withdrawn general consent).',
      'Tagged as a "caged parrot speaking in its master\'s voice" by the Supreme Court (Coalgate case 2013).',
      'Dual control: DoPT handles cadre, CVC handles vigilance superintendence, MHA handles international cooperation.'
    ],
    independenceSafeguards: [
      'Tripartite appointment panel (PM, LoP, CJI) and statutory 2-year minimum tenure.',
      'Superintendence vested in CVC for anti-corruption cases.'
    ],
    recentDevelopments: 'High-profile investigations into bank fraud, digital financial scams, and cross-border fugitive extradition requests.',
    prelimsFacts: [
      'CBI is NOT a statutory body itself; it derives its police investigating powers from the Delhi Special Police Establishment Act, 1946.',
      'Supreme Court and High Courts can order CBI to investigate a crime anywhere in India WITHOUT the consent of the State Government.'
    ],
    mainsRelevance: 'Federal investigative friction, general consent withdrawals, institutional autonomy, and police reform.',
    officialUrl: 'https://cbi.gov.in'
  },
  {
    id: 'body-lokpal',
    name: 'Lokpal and Lokayuktas',
    type: 'Statutory',
    articleOrAct: 'Lokpal and Lokayuktas Act, 2013',
    yearEstablished: 2019,
    ministryOrParent: 'Independent Anti-Corruption Ombudsman',
    composition: 'Chairperson (former CJI, former SC Judge, or eminent person) + up to 8 Members (50% judicial members; at least 50% from SC/ST/OBC/Minorities/Women).',
    appointmentProcess: 'Appointed by President on recommendation of Selection Committee: PM (Chair), Speaker of Lok Sabha, Leader of Opposition in Lok Sabha, CJI (or nominee SC Judge), and an Eminent Jurist nominated by President on recommendation of the first four.',
    tenureAndRemoval: '5 years or 70 years of age. Removed by President on ground of misbehaviour on a reference made to SC signed by at least 100 MPs.',
    mandateAndPowers: [
      'Jurisdiction over Prime Minister (with specific procedural exclusions on international relations, security, public order, atomic energy, and space).',
      'Jurisdiction over Union Ministers, Members of Parliament, and Group A, B, C, D officers.',
      'Has Inquiry Wing and Prosecution Wing; can refer cases to CBI or CVC and exercise superintendence over CBI for those cases.',
      'Power of attachment of assets acquired through corrupt means even during preliminary inquiry.'
    ],
    limitationsAndIssues: [
      'Lengthy initial delay (first Lokpal Justice P.C. Ghose appointed only in 2019, six years after Act passed).',
      'Cannot initiate suo motu investigations; requires a formal complaint.',
      'Exclusion of anonymous complaints and penal provisions for false complaints deter whistleblowers.'
    ],
    independenceSafeguards: [
      'Bipartisan selection panel including CJI and eminent jurist.',
      'Expenses charged upon Consolidated Fund of India.'
    ],
    recentDevelopments: 'Operationalized online grievance management system; initiated investigations into central public sector officials.',
    prelimsFacts: [
      'Administrative Reforms Commission (1966) under Morarji Desai first recommended setting up Lokpal and Lokayuktas on Scandinavian Ombudsman model.',
      'Maharashtra was the first state to establish the institution of Lokayukta in 1971.'
    ],
    mainsRelevance: 'Ombudsman model, anti-corruption architecture, public ombudsman accountability, and Lokayukta functioning across States.',
    officialUrl: 'https://lokpal.gov.in',
    upRelevance: 'Uttar Pradesh Lokayukta Act was enacted in 1975; UP Lokayukta investigates corruption allegations against State public servants.'
  },
  {
    id: 'body-ncw',
    name: 'National Commission for Women (NCW)',
    type: 'Statutory',
    articleOrAct: 'National Commission for Women Act, 1990',
    yearEstablished: 1992,
    ministryOrParent: 'Ministry of Women and Child Development',
    composition: 'Chairperson, 5 Members (at least one each from SC and ST), and a Member-Secretary.',
    appointmentProcess: 'Nominated by the Central Government.',
    tenureAndRemoval: '3 years tenure or up to 65 years.',
    mandateAndPowers: [
      'Investigates and reviews constitutional and legal safeguards for women.',
      'Recommends remedial legislative measures to eliminate gender discrimination.',
      'Facilitates redressal of grievances regarding domestic violence, workplace harassment, dowry, and rape.',
      'Powers of a Civil Court while investigating matters.'
    ],
    limitationsAndIssues: [
      'Findings are recommendatory; cannot execute orders or punish culprits directly.',
      'Dependent entirely on government funding and ministerial staffing approvals.'
    ],
    independenceSafeguards: [
      'Statutory standing and civil court subpoena powers.'
    ],
    recentDevelopments: 'Active oversight on sexual harassment at workplace (POSH Act) compliance and 24x7 cyber harassment helpline.',
    prelimsFacts: [
      'First Chairperson was Jayanti Patnaik in 1992.',
      'Submits annual reports to the Central Government, laid before each House of Parliament.'
    ],
    mainsRelevance: 'Gender justice, institutional mechanisms for women empowerment, POSH Act enforcement, and safety infrastructure.',
    officialUrl: 'https://ncw.nic.in'
  },
  {
    id: 'body-ncm',
    name: 'National Commission for Minorities (NCM)',
    type: 'Statutory',
    articleOrAct: 'National Commission for Minorities Act, 1992',
    yearEstablished: 1993,
    ministryOrParent: 'Ministry of Minority Affairs',
    composition: 'Chairperson, Vice-Chairperson, and 5 Members representing the 6 notified national religious minorities (Muslims, Christians, Sikhs, Buddhists, Parsis, Jains).',
    appointmentProcess: 'Nominated by Central Government from persons of eminence and integrity.',
    tenureAndRemoval: '3 years tenure from date of assumption of office.',
    mandateAndPowers: [
      'Evaluates progress of development of notified minorities under Union and States.',
      'Monitors working of constitutional safeguards (Articles 25-30) and central/state laws.',
      'Investigates specific complaints of discrimination against minorities.',
      'Civil Court powers for requisitioning public records and summoning witnesses.'
    ],
    limitationsAndIssues: [
      'Does not have constitutional status (unlike NCSC, NCST, NCBC).',
      'Advisory recommendations frequently face delays in executive implementation.'
    ],
    independenceSafeguards: [
      'Statutory requirement of representation from diverse minority communities.'
    ],
    recentDevelopments: 'Monitoring implementation of Pradhan Mantri Jan Vikas Karyakram (PMJVK) in minority-concentrated blocks.',
    prelimsFacts: [
      'Jains were notified as the 6th religious minority community in 2014.',
      'Linguistic minorities do NOT come under NCM; they fall under the Special Officer for Linguistic Minorities (Article 350B).'
    ],
    mainsRelevance: 'Minority rights, secularism, educational institution protection under Article 30, and Sachar Committee recommendations.',
    officialUrl: 'https://ncm.nic.in'
  },
  {
    id: 'body-irdai',
    name: 'Insurance Regulatory and Development Authority of India (IRDAI)',
    type: 'Regulatory',
    articleOrAct: 'Insurance Regulatory and Development Authority Act, 1999',
    yearEstablished: 1999,
    ministryOrParent: 'Ministry of Finance (Department of Financial Services)',
    composition: 'Chairperson and not more than 5 whole-time members and 4 part-time members.',
    appointmentProcess: 'Appointed by Central Government on recommendation of selection committee.',
    tenureAndRemoval: 'Chairperson tenure 5 years or 65 years of age. Whole-time members 5 years or 62 years.',
    mandateAndPowers: [
      'Regulates, promotes, and ensures orderly growth of insurance and re-insurance business.',
      'Protects interests of insurance policyholders (claim settlement, surrender value, policy terms).',
      'Specifies code of conduct for insurance intermediaries, agents, and surveyors.',
      'Sets solvency margins and investment patterns for insurance funds.'
    ],
    limitationsAndIssues: [
      'Low insurance penetration (around 4% of GDP) and density in rural and informal sectors.',
      'Misselling of unit-linked insurance plans (ULIPs) and health claim dispute rejections.'
    ],
    independenceSafeguards: [
      'Statutory autonomous regulatory authority with independent fund (IRDAI Fund).'
    ],
    recentDevelopments: 'Mission "Insurance for All by 2047"; introduction of Bima Sugam (unified digital portal), Bima Vistaar, and Bima Vahak.',
    prelimsFacts: [
      'Constituted following the recommendations of the Malhotra Committee Report (1994) on insurance sector reforms.',
      'Headquartered in Hyderabad (moved from New Delhi in 2001).'
    ],
    mainsRelevance: 'Financial sector regulation, social security nets, universal health insurance coverage, and disaster risk financing.',
    officialUrl: 'https://irdai.gov.in'
  },
  {
    id: 'body-sebi',
    name: 'Securities and Exchange Board of India (SEBI)',
    type: 'Regulatory',
    articleOrAct: 'Securities and Exchange Board of India Act, 1992',
    yearEstablished: 1992,
    ministryOrParent: 'Ministry of Finance (Department of Economic Affairs)',
    composition: 'Chairman, 2 members from Finance Ministry, 1 from RBI, and 5 other members (at least 3 whole-time).',
    appointmentProcess: 'Appointed by Central Government on recommendation of Search-cum-Selection Committee.',
    tenureAndRemoval: 'Tenure specified by Central Government (usually 3 to 5 years, up to 65 years).',
    mandateAndPowers: [
      'Quasi-legislative, quasi-judicial, and quasi-executive powers over securities market.',
      'Drafts regulations (legislative), conducts investigations and audits (executive), and passes cease-and-desist or penalty orders (judicial).',
      'Protects interests of investors in securities and promotes market development.',
      'Regulates stock exchanges, mutual funds, merchant bankers, credit rating agencies, and foreign portfolio investors (FPIs).'
    ],
    limitationsAndIssues: [
      'Appeals against SEBI orders lie before the Securities Appellate Tribunal (SAT).',
      'Surveillance challenges in complex algorithmic trading, front-running, and unauthorized financial influencers (finfluencers).'
    ],
    independenceSafeguards: [
      'Financially self-sustaining through market fees and levies; autonomous regulatory powers.'
    ],
    recentDevelopments: 'Introduced T+1 and instant T+0 settlement cycles, social stock exchange framework, and tightened index derivatives regulations.',
    prelimsFacts: [
      'Initially set up in 1988 as a non-statutory body; acquired statutory status with wide powers via SEBI Act 1992.',
      'Appeals against SAT orders go directly to the Supreme Court of India.'
    ],
    mainsRelevance: 'Capital markets governance, investor protection, regulatory oversight of corporate governance, and regulatory capacity.',
    officialUrl: 'https://sebi.gov.in'
  },
  {
    id: 'body-cci',
    name: 'Competition Commission of India (CCI)',
    type: 'Quasi-Judicial',
    articleOrAct: 'Competition Act, 2002 (replaced Monopolies and Restrictive Trade Practices Act 1969)',
    yearEstablished: 2003,
    ministryOrParent: 'Ministry of Corporate Affairs',
    composition: 'Chairperson and not less than 2 and not more than 6 other Members.',
    appointmentProcess: 'Appointed by Central Government on recommendation of a selection committee headed by CJI or his nominee.',
    tenureAndRemoval: '5 years or up to 65 years of age.',
    mandateAndPowers: [
      'Eliminates practices having an Adverse Effect on Competition (AAEC).',
      'Promotes and sustains competition, protects interests of consumers, and ensures freedom of trade.',
      'Prohibits anti-competitive agreements (cartels, bid rigging) and abuse of dominant position.',
      'Regulates combinations (mergers, amalgamations, acquisitions) beyond prescribed asset/turnover thresholds.',
      'Maintains Director General (DG) as independent investigative arm.'
    ],
    limitationsAndIssues: [
      'Regulating Big Tech platforms (Google, Apple, Amazon) operating in multi-sided digital markets where traditional turnover thresholds fail.',
      'Appellate burden shifted to NCLAT after abolition of Competition Appellate Tribunal (COMPAT) in 2017.'
    ],
    independenceSafeguards: [
      'Quasi-judicial standing with power to impose heavy financial penalties up to 10% of average turnover.'
    ],
    recentDevelopments: 'Competition (Amendment) Act 2023 introduced Deal Value Threshold (DVT of ₹2000 Cr) for digital acquisitions and settlement/commitment mechanisms.',
    prelimsFacts: [
      'Established on recommendations of the Raghavan Committee on Competition Law (2000).',
      'Appeals against CCI orders lie before National Company Law Appellate Tribunal (NCLAT).'
    ],
    mainsRelevance: 'Digital market regulation, anti-monopoly jurisprudence, consumer welfare, and ease of doing business.',
    officialUrl: 'https://cci.gov.in'
  },
  {
    id: 'body-trai',
    name: 'Telecom Regulatory Authority of India (TRAI)',
    type: 'Regulatory',
    articleOrAct: 'Telecom Regulatory Authority of India Act, 1997',
    yearEstablished: 1997,
    ministryOrParent: 'Ministry of Communications (Department of Telecommunications)',
    composition: 'Chairperson and not more than 2 whole-time and 2 part-time members.',
    appointmentProcess: 'Appointed by Central Government.',
    tenureAndRemoval: '3 years or up to 65 years.',
    mandateAndPowers: [
      'Regulates telecommunication services, tariffs, interconnection terms, and quality of service.',
      'Protects interests of telecom and broadcasting service consumers.',
      'Makes recommendations on terms of licenses, spectrum management, and introduction of new technologies (5G/6G).'
    ],
    limitationsAndIssues: [
      'Recommendations on licensing are not binding on Central Government (DoT).',
      'Dispute resolution powers were separated and transferred to TDSAT via 2000 amendment.'
    ],
    independenceSafeguards: [
      'Statutory autonomous regulatory authority.'
    ],
    recentDevelopments: 'Framed regulations on spam call mitigation using AI/blockchain, net neutrality frameworks, and satcom spectrum allocation.',
    prelimsFacts: [
      'TRAI Act was amended in 2000 to establish the Telecom Disputes Settlement and Appellate Tribunal (TDSAT) to take over adjudicatory functions from TRAI.',
      'Also regulates broadcasting and cable services.'
    ],
    mainsRelevance: 'Digital connectivity, telecom spectrum policy, net neutrality, consumer data privacy, and over-the-top (OTT) regulation.',
    officialUrl: 'https://trai.gov.in'
  },
  {
    id: 'body-cerc',
    name: 'Central Electricity Regulatory Commission (CERC)',
    type: 'Regulatory',
    articleOrAct: 'Electricity Act, 2003 (originally Electricity Regulatory Commissions Act 1998)',
    yearEstablished: 1998,
    ministryOrParent: 'Ministry of Power',
    composition: 'Chairperson and 3 other members, plus Chairperson of Central Electricity Authority (CEA) as ex-officio member.',
    appointmentProcess: 'Appointed by Central Government on recommendation of Selection Committee.',
    tenureAndRemoval: '5 years or 65 years of age.',
    mandateAndPowers: [
      'Regulates tariff of generating companies owned or controlled by Central Government.',
      'Regulates interstate transmission of electricity and determines interstate transmission tariffs.',
      'Issues licenses for interstate transmission and electricity trading; promotes competitive power markets.',
      'Adjudicates disputes involving generating companies or transmission licensees.'
    ],
    limitationsAndIssues: [
      'High aggregate technical and commercial (AT&C) losses of State DISCOMs impact cross-border power purchase agreements.',
      'Integration of intermittent renewable energy with base-load thermal power grid.'
    ],
    independenceSafeguards: [
      'Quasi-judicial standing; appeals lie before Appellate Tribunal for Electricity (APTEL).'
    ],
    recentDevelopments: 'Operationalized General Network Access (GNA) regulations and green day-ahead market (G-DAM) for clean energy integration.',
    prelimsFacts: [
      'Appeals against CERC orders lie before the Appellate Tribunal for Electricity (APTEL).',
      'State-level counterpart is the State Electricity Regulatory Commission (SERC).'
    ],
    mainsRelevance: 'Power sector reforms, DISCOM financial turnaround (UDAY), renewable energy integration, and federal grid stability.',
    officialUrl: 'https://cercind.gov.in'
  },
  {
    id: 'body-aerb',
    name: 'Atomic Energy Regulatory Board (AERB)',
    type: 'Regulatory',
    articleOrAct: 'Constituted under Section 27 of Atomic Energy Act, 1962 (via Presidential notification 1983)',
    yearEstablished: 1983,
    ministryOrParent: 'Department of Atomic Energy (Prime Minister\'s Office)',
    composition: 'Full-time Chairman, an ex-officio Member, 3 part-time Members, and a Secretary.',
    appointmentProcess: 'Appointed by Central Government.',
    tenureAndRemoval: 'Tenure determined by Central Government (usually 3 years).',
    mandateAndPowers: [
      'Ensures that use of ionizing radiation and nuclear energy in India does not cause undue health risk and environmental damage.',
      'Enforces safety codes, guides, and standards for siting, design, construction, commissioning, and operation of nuclear facilities.',
      'Carries out regulatory inspections of all nuclear power plants (Kudankulam, Tarapur, Rawatbhata) and radiation facilities in hospitals/industry.'
    ],
    limitationsAndIssues: [
      'Subordinated administratively to the Department of Atomic Energy (DAE) and Atomic Energy Commission (AEC), creating perceived conflict of interest.',
      'Nuclear Safety Regulatory Authority (NSRA) Bill to create a truly independent statutory regulator has remained pending.'
    ],
    independenceSafeguards: [
      'De-facto technical independence backed by premier scientific research committees.'
    ],
    recentDevelopments: 'Safety surveillance for indigenous 700 MWe Pressurised Heavy Water Reactors (Kakrapar Unit 3 & 4) and Prototype Fast Breeder Reactor (PFBR Kalpakkam).',
    prelimsFacts: [
      'AERB is NOT an independent statutory body created by an Act of Parliament; it was established by an executive order under the Atomic Energy Act, 1962.',
      'Reports directly to the Atomic Energy Commission.'
    ],
    mainsRelevance: 'Nuclear safety governance, civilian nuclear energy expansion, international IAEA safety compliance, and regulatory independence.',
    officialUrl: 'https://aerb.gov.in'
  },
  {
    id: 'body-cpcb',
    name: 'Central Pollution Control Board (CPCB)',
    type: 'Statutory',
    articleOrAct: 'Water (Prevention and Control of Pollution) Act, 1974 & Air (Prevention and Control of Pollution) Act, 1981',
    yearEstablished: 1974,
    ministryOrParent: 'Ministry of Environment, Forest and Climate Change (MoEFCC)',
    composition: 'Full-time Chairman, up to 5 officials nominated by Central Government, up to 5 persons from State Boards, up to 3 non-officials representing agriculture/industry, 2 representatives from government corporations, and a full-time Member-Secretary.',
    appointmentProcess: 'Appointed by Central Government.',
    tenureAndRemoval: '3 years tenure.',
    mandateAndPowers: [
      'Promotes cleanliness of streams and wells; improves air quality across India.',
      'Advises Central Government on prevention and control of water and air pollution.',
      'Coordinates activities of State Pollution Control Boards (SPCBs) and provides technical assistance.',
      'Maintains National Air Quality Index (AQI) and National Ambient Air Quality Monitoring Programme (NAMP).',
      'Vested with power under Environment Protection Act 1986 to issue binding closure orders and disconnect water/electricity to polluting units.'
    ],
    limitationsAndIssues: [
      'Chronic shortage of technical staff and laboratory infrastructure.',
      'Enforcement deficits in municipal sewage treatment and industrial effluent discharge.',
      'Air Quality Management in NCR was largely subsumed by the statutory Commission for Air Quality Management (CAQM 2021).'
    ],
    independenceSafeguards: [
      'Statutory autonomous technical authority.'
    ],
    recentDevelopments: 'Real-time online continuous emission monitoring systems (OCEMS) mandate for 17 categories of highly polluting industries.',
    prelimsFacts: [
      'Originally established under the Water Act, 1974; later entrusted with powers under the Air Act, 1981.',
      'Provides technical services to MoEFCC under provisions of the Environment (Protection) Act, 1986.'
    ],
    mainsRelevance: 'Environmental federalism, industrial pollution compliance, circular economy guidelines, and river rejuvenation (Namami Gange).',
    officialUrl: 'https://cpcb.nic.in',
    upRelevance: 'Monitors Ganga and Yamuna river pollution in coordination with UP Pollution Control Board (UPPCB).'
  },
  {
    id: 'body-nmc',
    name: 'National Medical Commission (NMC / formerly Medical Council of India)',
    type: 'Statutory',
    articleOrAct: 'National Medical Commission Act, 2019 (Repealed Indian Medical Council Act 1956)',
    yearEstablished: 2020,
    ministryOrParent: 'Ministry of Health and Family Welfare',
    composition: 'Chairperson, 10 ex-officio members, and 22 part-time members.',
    appointmentProcess: 'Appointed by Central Government on recommendation of Search Committee headed by Cabinet Secretary.',
    tenureAndRemoval: '4 years tenure.',
    mandateAndPowers: [
      'Regulates medical education and medical professionals across India.',
      'Assisted by 4 autonomous boards: Under-Graduate Medical Education Board (UGMEB), Post-Graduate Medical Education Board (PGMEB), Medical Assessment and Rating Board (MARB), and Ethics and Medical Registration Board (EMRB).',
      'Conducts National Eligibility-cum-Entrance Test (NEET) and National Exit Test (NExT) for licensing and PG admissions.',
      'Frames guidelines for determination of fees for 50% seats in private medical colleges.'
    ],
    limitationsAndIssues: [
      'Replaced MCI due to pervasive corruption scandals and opaque college inspection practices.',
      'Implementation hurdles and resistance from medical student bodies regarding NExT examination modalities.'
    ],
    independenceSafeguards: [
      'Autonomous functional boards insulated from daily bureaucratic interference.'
    ],
    recentDevelopments: 'Standardized Competency-Based Medical Education (CBME) curriculum and digital registry for licensed medical practitioners.',
    prelimsFacts: [
      'Indian Medical Council Act 1956 was formally repealed on September 25, 2020 when NMC came into existence.',
      'Has 4 autonomous boards functioning under it.'
    ],
    mainsRelevance: 'Healthcare human resource governance, medical education affordability, doctor-population ratio, and ethical standards.',
    officialUrl: 'https://nmc.org.in'
  },
  {
    id: 'body-iwai',
    name: 'Inland Waterways Authority of India (IWAI)',
    type: 'Statutory',
    articleOrAct: 'Inland Waterways Authority of India Act, 1985',
    yearEstablished: 1986,
    ministryOrParent: 'Ministry of Ports, Shipping and Waterways',
    composition: 'Chairman, Vice-Chairman, and full-time and part-time members.',
    appointmentProcess: 'Appointed by Central Government.',
    tenureAndRemoval: 'Tenure determined by Central Government.',
    mandateAndPowers: [
      'Development, maintenance, and regulation of National Waterways (NWs) for shipping and navigation.',
      'Develops fairway channels, navigation aids, and multi-modal terminal infrastructure.',
      'Implementing Jal Marg Vikas Project (JMVP) on National Waterway 1 (Ganga: Varanasi to Haldia) with World Bank support.'
    ],
    limitationsAndIssues: [
      'Siltation and lack of adequate Least Available Depth (LAD) during dry winter months.',
      'Low share of inland water transport (less than 2%) in India\'s total freight modal mix.'
    ],
    independenceSafeguards: [
      'Statutory autonomous development authority headquartered in Noida, UP.'
    ],
    recentDevelopments: 'Operationalized multi-modal cargo terminal at Varanasi and Sahibganj; freight movement from Varanasi to Dibrugarh via Indo-Bangladesh Protocol Route.',
    prelimsFacts: [
      'National Waterways Act 2016 declared 111 National Waterways across India (including NW-1 on Ganga).',
      'Headquartered in Noida, Uttar Pradesh.'
    ],
    mainsRelevance: 'Logistics cost reduction (National Logistics Policy), multi-modal connectivity (PM Gati Shakti), and eco-friendly freight transport.',
    officialUrl: 'https://iwai.nic.in',
    upRelevance: 'NW-1 runs through Prayagraj and Varanasi, where a major Multi-Modal Freight Terminal has been developed.'
  },
  {
    id: 'body-cgwa',
    name: 'Central Ground Water Authority (CGWA)',
    type: 'Quasi-Judicial',
    articleOrAct: 'Constituted under Section 3(3) of Environment (Protection) Act, 1986',
    yearEstablished: 1997,
    ministryOrParent: 'Ministry of Jal Shakti (Department of Water Resources)',
    composition: 'Headed by Chairman, Central Ground Water Board (CGWB) and technical members.',
    appointmentProcess: 'Appointed by Central Government.',
    tenureAndRemoval: 'Tenure co-terminus with CGWB service.',
    mandateAndPowers: [
      'Regulates and controls groundwater extraction and development in India.',
      'Notifies critical, semi-critical, and over-exploited assessment units (blocks/talukas).',
      'Issues No Objection Certificates (NOCs) for groundwater withdrawal to industries, infrastructure projects, and mining operations.',
      'Can penalize illegal borewells and levy Environmental Compensation.'
    ],
    limitationsAndIssues: [
      'Agricultural groundwater extraction (accounting for ~90% of total use) is largely outside the permit net due to political sensitivities and free farm power.',
      'Groundwater is technically a State subject under Entry 17, List II, creating regulatory federal conflict.'
    ],
    independenceSafeguards: [
      'Direct powers conferred under Environment Protection Act following Supreme Court directives in M.C. Mehta cases.'
    ],
    recentDevelopments: 'Revised guidelines mandated digital water flow meters with telemetry and water auditing for industrial extractors.',
    prelimsFacts: [
      'Constitutional origin traces to Supreme Court\'s order in M.C. Mehta v. Union of India (1997) directing Centre to constitute an authority under EPA 1986.',
      'Works in tandem with Central Ground Water Board (CGWB) which conducts hydro-geological surveys.'
    ],
    mainsRelevance: 'Groundwater depletion crisis, water-energy nexus in agriculture, Atal Bhujal Yojana, and industrial compliance.',
    officialUrl: 'https://cgwa-noc.gov.in'
  },
  {
    id: 'body-dgca',
    name: 'Directorate General of Civil Aviation (DGCA)',
    type: 'Regulatory',
    articleOrAct: 'Aircraft Act, 1934 & Aircraft Rules 1937 (Replaced by Bharatiya Vayuyan Vidheyak 2024)',
    yearEstablished: 1932,
    ministryOrParent: 'Ministry of Civil Aviation',
    composition: 'Headed by Director General of Civil Aviation, assisted by Joint Directors and safety inspectors.',
    appointmentProcess: 'Appointed by Central Government (ACC).',
    tenureAndRemoval: 'Tenure determined by Central Government.',
    mandateAndPowers: [
      'Principal regulatory body for civil aviation safety, airworthiness standards, and pilot licensing.',
      'Investigates aviation safety incidents, conducts safety oversight, and enforces International Civil Aviation Organization (ICAO) standards.',
      'Registers aircraft and certifies airports, flight training organizations, and air traffic control personnel.'
    ],
    limitationsAndIssues: [
      'Staffing crunch of certified flight inspectors and flight operations officers.',
      'High growth rate of Indian civil aviation market (world\'s 3rd largest domestic market) strains regulatory oversight capacity.'
    ],
    independenceSafeguards: [
      'Independent technical safety oversight agency.'
    ],
    recentDevelopments: 'Transitioning under the Bharatiya Vayuyan Vidheyak 2024 to simplify civil aviation regulations and enhance ease of doing business.',
    prelimsFacts: [
      'Headquartered in New Delhi, opposite Safdarjung Airport.',
      'Aircraft accident investigations are handled by a SEPARATE independent agency called Aircraft Accident Investigation Bureau (AAIB), not DGCA.'
    ],
    mainsRelevance: 'Aviation safety, UDAN regional connectivity scheme, drone regulation (Drone Rules 2021), and airspace management.',
    officialUrl: 'https://dgca.gov.in'
  },
  {
    id: 'body-pfrda',
    name: 'Pension Fund Regulatory and Development Authority (PFRDA)',
    type: 'Regulatory',
    articleOrAct: 'Pension Fund Regulatory and Development Authority Act, 2013',
    yearEstablished: 2014,
    ministryOrParent: 'Ministry of Finance (Department of Financial Services)',
    composition: 'Chairperson and not more than 5 members (at least 3 whole-time).',
    appointmentProcess: 'Appointed by Central Government on recommendation of selection committee.',
    tenureAndRemoval: '5 years or 65 years of age.',
    mandateAndPowers: [
      'Regulates, promotes, and ensures orderly growth of the National Pension System (NPS) and pension schemes.',
      'Protects interests of subscribers to schemes of pension funds.',
      'Regulates pension funds, central recordkeeping agencies (CRAs), and points of presence (PoPs).',
      'Administers Atal Pension Yojana (APY) targeting the unorganized sector.'
    ],
    limitationsAndIssues: [
      'Low coverage among informal and agricultural workers despite APY.',
      'Inter-governmental friction over Old Pension Scheme (OPS) reversion demands by several State Governments; Unified Pension Scheme (UPS) announced in 2024.'
    ],
    independenceSafeguards: [
      'Statutory autonomous financial regulator with PFRDA General Fund.'
    ],
    recentDevelopments: 'Launch of Unified Pension Scheme (UPS) guaranteeing 50% of average basic pay as pension for central government employees completing 25 years service.',
    prelimsFacts: [
      'Originally constituted as an interim regulator via executive resolution in 2003; obtained statutory backing via PFRDA Act 2013 (operationalized Feb 2014).',
      'NPS was made mandatory for all new central government employees (except armed forces) joining from January 1, 2004.'
    ],
    mainsRelevance: 'Old Pension Scheme (OPS) vs NPS vs UPS debate, fiscal implications of unfunded pension liabilities, and social security coverage.',
    officialUrl: 'https://pfrda.org.in'
  },
  {
    id: 'body-fssai',
    name: 'Food Safety and Standards Authority of India (FSSAI)',
    type: 'Regulatory',
    articleOrAct: 'Food Safety and Standards Act, 2006',
    yearEstablished: 2008,
    ministryOrParent: 'Ministry of Health and Family Welfare',
    composition: 'Chairperson and 22 members (at least one-third shall be women).',
    appointmentProcess: 'Appointed by Central Government on recommendation of Cabinet Secretary Search Committee.',
    tenureAndRemoval: '3 years or 65 years of age.',
    mandateAndPowers: [
      'Single consolidated regulator for food safety, replacing multiple repealed orders (Prevention of Food Adulteration Act 1954, Fruit Products Order, etc.).',
      'Lays down science-based standards for articles of food, food additives, contaminants, and pesticide residues.',
      'Regulates manufacturing, storage, distribution, sale, and import of food to ensure wholesome human consumption.',
      'Accredits food testing laboratories and enforces food safety audits.'
    ],
    limitationsAndIssues: [
      'Vast unorganized street food and rural weekly market sector makes uniform enforcement challenging.',
      'Shortage of certified food safety officers (FSOs) and state testing laboratories.'
    ],
    independenceSafeguards: [
      'Statutory autonomous agency guided by independent Scientific Panels and Scientific Committee.'
    ],
    recentDevelopments: 'Front-of-Pack Nutrition Labelling (FoPNL) regulations, Trans-fat elimination campaign, and Eat Right India movement.',
    prelimsFacts: [
      'Established under Ministry of Health and Family Welfare (NOT Ministry of Consumer Affairs or Food Processing).',
      'Chairperson holds the rank of Secretary to the Government of India.'
    ],
    mainsRelevance: 'Food safety standards, public health nutrition, fortification mandates, and consumer protection.',
    officialUrl: 'https://fssai.gov.in'
  },
  {
    id: 'body-bci',
    name: 'Bar Council of India (BCI)',
    type: 'Statutory',
    articleOrAct: 'Section 4, Advocates Act, 1961',
    yearEstablished: 1961,
    ministryOrParent: 'Ministry of Law and Justice (Apex Professional Body for Lawyers)',
    composition: 'Attorney General of India (ex-officio), Solicitor General of India (ex-officio), and one member elected by each State Bar Council.',
    appointmentProcess: 'Elected body representing advocates across India.',
    tenureAndRemoval: 'Elected members have a term of 5 years.',
    mandateAndPowers: [
      'Lays down standards of professional conduct and etiquette for advocates.',
      'Lays down standards of legal education and recognizes universities whose degrees in law qualify for enrollment as an advocate.',
      'Exercises disciplinary jurisdiction over the legal profession via its Disciplinary Committee.',
      'Promotes legal aid to the poor.'
    ],
    limitationsAndIssues: [
      'Criticized for outdated law school curricula and delay in permitting entry of foreign law firms.',
      'Strikes and boycotts by lawyer associations in lower courts impacting justice delivery.'
    ],
    independenceSafeguards: [
      'Statutory democratic self-governing profession.'
    ],
    recentDevelopments: 'Issued Bar Council of India Rules for Registration and Regulation of Foreign Lawyers and Foreign Law Firms in India (2023) on reciprocity basis.',
    prelimsFacts: [
      'Attorney General and Solicitor General of India are ex-officio members of BCI.',
      'Conducts the All India Bar Examination (AIBE) required to practice law in courts.'
    ],
    mainsRelevance: 'Judicial delivery system, legal education standards, ethics at the bar, and entry of foreign legal professionals.',
    officialUrl: 'https://barcouncilofindia.org',
    upRelevance: 'Bar Council of Uttar Pradesh in Prayagraj is the largest state bar council in India by enrolled advocates.'
  },
  {
    id: 'body-ugc',
    name: 'University Grants Commission (UGC)',
    type: 'Statutory',
    articleOrAct: 'University Grants Commission Act, 1956',
    yearEstablished: 1956,
    ministryOrParent: 'Ministry of Education (Department of Higher Education)',
    composition: 'Chairman, Vice-Chairman, and 10 other members appointed by Central Government.',
    appointmentProcess: 'Appointed by Central Government.',
    tenureAndRemoval: 'Chairman tenure 5 years or 65 years. Members 3 years.',
    mandateAndPowers: [
      'Coordination, determination, and maintenance of standards of university education.',
      'Allocates and disburses grants to Central and State universities.',
      'Specifies minimum qualifications for appointment of teachers and academic staff.',
      'Conducts National Eligibility Test (NET) for Junior Research Fellowship and Assistant Professor eligibility.'
    ],
    limitationsAndIssues: [
      'Dual role of fund disbursement and quality regulation caused bureaucratic bottlenecks.',
      'NEP 2020 recommended dissolving UGC and AICTE to create a single umbrella Higher Education Commission of India (HECI).'
    ],
    independenceSafeguards: [
      'Statutory autonomous authority under Entry 66 of Union List.'
    ],
    recentDevelopments: 'Introduced National Higher Education Qualifications Framework (NHEQF), Academic Bank of Credits (ABC), and regulations allowing foreign universities to set up Indian campuses.',
    prelimsFacts: [
      'Set up on the recommendation of the University Education Commission (1948-49) headed by Dr. S. Radhakrishnan.',
      'Derives constitutional authority from Entry 66 of the Union List (Coordination and determination of standards in institutions for higher education).'
    ],
    mainsRelevance: 'Higher education governance, NEP 2020 institutional reorganization (HECI), academic freedom, and research funding.',
    officialUrl: 'https://ugc.gov.in'
  },
  {
    id: 'body-aicte',
    name: 'All India Council for Technical Education (AICTE)',
    type: 'Statutory',
    articleOrAct: 'All India Council for Technical Education Act, 1987',
    yearEstablished: 1987,
    ministryOrParent: 'Ministry of Education',
    composition: 'Chairman, Vice-Chairman, Member-Secretary, and representatives from ministries, industry, and academia.',
    appointmentProcess: 'Appointed by Central Government.',
    tenureAndRemoval: '3 years tenure.',
    mandateAndPowers: [
      'Proper planning and coordinated development of technical education (engineering, technology, architecture, pharmacy, management) across India.',
      'Regulates quality, norms, and standards in technical institutions; accords approvals for new colleges and course intake.',
      'Promotes industry-academia linkage and curriculum modernization.'
    ],
    limitationsAndIssues: [
      'Unchecked proliferation of private engineering and management colleges resulting in low employability among graduates.',
      'Proposed merger into Higher Education Commission of India (HECI).'
    ],
    independenceSafeguards: [
      'Statutory regulatory body.'
    ],
    recentDevelopments: 'Approved engineering courses in regional Indian languages; launched Smart India Hackathon and faculty training programmes (ATAL Academy).',
    prelimsFacts: [
      'Initially set up in 1945 as an advisory body; granted statutory status by Parliament in 1987.',
      'Supreme Court in Bharathidasan University case held that universities do not require AICTE approval to commence technical courses.'
    ],
    mainsRelevance: 'Technical skilling, engineering curriculum alignment with Industry 4.0, and higher education regulatory restructuring.',
    officialUrl: 'https://aicte-india.org'
  },
  {
    id: 'body-fsdc',
    name: 'Financial Stability and Development Council (FSDC)',
    type: 'Executive / Advisory',
    articleOrAct: 'Non-statutory apex council set up by Executive Notification in 2010 (Raghuram Rajan Committee recommendation)',
    yearEstablished: 2010,
    ministryOrParent: 'Ministry of Finance (Secretariat: Department of Economic Affairs)',
    composition: 'Chairperson: Union Finance Minister; Members: Governor RBI, Finance Secretary, Chief Economic Advisor, Chairpersons of SEBI, IRDAI, PFRDA, IBBI, and Secretaries of Financial Services and IT.',
    appointmentProcess: 'Ex-officio institutional representation.',
    tenureAndRemoval: 'Co-terminus with official post.',
    mandateAndPowers: [
      'Fosters financial stability and macro-prudential surveillance.',
      'Strengthens inter-regulatory coordination among financial regulators (RBI, SEBI, IRDAI, PFRDA, IBBI).',
      'Promotes financial sector development and financial inclusion.',
      'Assisted by FSDC Sub-Committee chaired by the Governor of RBI.'
    ],
    limitationsAndIssues: [
      'Non-statutory status: Has no independent statutory backing or penal powers; works on consensus among sovereign regulators.',
      'Careful balancing required to avoid encroaching upon the statutory autonomy of regulators like RBI.'
    ],
    independenceSafeguards: [
      'Brings sovereign central bank governor and capital market heads onto a common consultative platform.'
    ],
    recentDevelopments: 'Coordinated framework for tracking cyber security vulnerabilities in financial sector and unified KYC onboarding.',
    prelimsFacts: [
      'FSDC is NOT a statutory body; it was created by an executive notification in December 2010 on Raghuram Rajan Committee recommendations.',
      'Union Finance Minister is the Chairman of FSDC, but the FSDC Sub-Committee is chaired by the Governor of RBI.'
    ],
    mainsRelevance: 'Macro-prudential stability, inter-regulatory arbitration, financial inclusion architecture, and digital asset risks.',
    officialUrl: 'https://dea.gov.in'
  },
  {
    id: 'body-ngt',
    name: 'National Green Tribunal (NGT)',
    type: 'Quasi-Judicial',
    articleOrAct: 'National Green Tribunal Act, 2010',
    yearEstablished: 2010,
    ministryOrParent: 'Specialized Judicial Tribunal (MoEFCC administrative nodal)',
    composition: 'Full-time Chairperson (retired SC Judge or HC Chief Justice), 10 to 20 Judicial Members, and 10 to 20 Expert Members.',
    appointmentProcess: 'Chairperson appointed by Central Government in consultation with Chief Justice of India. Members appointed on recommendation of Selection Committee.',
    tenureAndRemoval: '5 years tenure; NOT eligible for reappointment.',
    mandateAndPowers: [
      'Effective and expeditious disposal of cases relating to environmental protection, conservation of forests, and enforcement of legal rights relating to environment.',
      'Awards relief, compensation to victims of pollution, and restitution of property and environment.',
      'Mandated to endeavor to dispose of applications or appeals within 6 months of filing.',
      'Not bound by procedure of CPC 1908 or Indian Evidence Act 1872; guided by Principles of Natural Justice, Polluter Pays Principle, Precautionary Principle, and Inter-generational Equity.'
    ],
    limitationsAndIssues: [
      'Does NOT have jurisdiction under Wildlife (Protection) Act 1972 and Indian Forest Act 1927 (specifically excluded from Schedule I).',
      'Appeals against NGT orders go directly to the Supreme Court of India within 90 days.',
      'High vacancy rates and executive resistance to aggressive environmental compensation orders.'
    ],
    independenceSafeguards: [
      'Bar on reappointment guarantees impartiality.',
      'Chaired by a former Supreme Court judge with expert scientific members.'
    ],
    recentDevelopments: 'Strict enforcement of orders on solid waste management fines on state governments, Yamuna floodplain encroachment bans, and stubble burning monitoring.',
    prelimsFacts: [
      'India is the 3rd country in the world (after Australia and New Zealand) and the 1st developing nation to set up a dedicated environmental tribunal.',
      'Principal Bench is in New Delhi; 4 regional benches are at Bhopal, Pune, Kolkata, and Chennai.'
    ],
    mainsRelevance: 'Environmental jurisprudence, Right to clean environment (Article 21), judicial activism vs development tradeoffs, and polluter pays enforcement.',
    officialUrl: 'https://greentribunal.gov.in',
    upRelevance: 'Central Zone Bench in Bhopal covers Central India; Principal Bench in Delhi hears UP matters including Ganga and Noida floodplain cases.'
  },
  {
    id: 'body-nclat',
    name: 'National Company Law Appellate Tribunal (NCLAT / COMPAT)',
    type: 'Quasi-Judicial',
    articleOrAct: 'Section 410, Companies Act, 2013 & Finance Act 2017 (merged Competition Appellate Tribunal COMPAT into NCLAT)',
    yearEstablished: 2016,
    ministryOrParent: 'Ministry of Corporate Affairs',
    composition: 'Chairperson (former SC Judge or HC Chief Justice) and Judicial and Technical Members.',
    appointmentProcess: 'Appointed by Central Government on recommendation of a Selection Committee headed by CJI or his nominee.',
    tenureAndRemoval: '5 years tenure (eligible for reappointment).',
    mandateAndPowers: [
      'Hears appeals against orders of the National Company Law Tribunal (NCLT) under Companies Act 2013.',
      'Appellate Authority for Insolvency and Bankruptcy Code, 2016 (IBC) orders passed by NCLT.',
      'Hears appeals against orders and directions of the Competition Commission of India (CCI).',
      'Appellate Authority for National Financial Reporting Authority (NFRA).'
    ],
    limitationsAndIssues: [
      'Huge backlog of corporate insolvency resolution appeals causing breaches of the 330-day IBC resolution timeline.',
      'Heavy burden resulting from merger of competition law appellate jurisdiction with corporate bankruptcy.'
    ],
    independenceSafeguards: [
      'Headed by a former Supreme Court judge; decisions subject to appeal solely before the Supreme Court of India.'
    ],
    recentDevelopments: 'Key judgments on resolution plans for major infrastructure conglomerates, home-buyers rights, and competition penalties on tech platforms.',
    prelimsFacts: [
      'Finance Act 2017 abolished the Competition Appellate Tribunal (COMPAT) and transferred its entire appellate jurisdiction to NCLAT.',
      'Appeals against NCLAT orders lie directly before the Supreme Court of India on questions of law.'
    ],
    mainsRelevance: 'Corporate dispute resolution, Insolvency and Bankruptcy Code (IBC) efficiency, creditor-in-control model, and ease of doing business.',
    officialUrl: 'https://nclat.nic.in'
  },
  {
    id: 'body-itat',
    name: 'Income-Tax Appellate Tribunal (ITAT)',
    type: 'Quasi-Judicial',
    articleOrAct: 'Section 252, Income Tax Act, 1961',
    yearEstablished: 1941,
    ministryOrParent: 'Ministry of Law and Justice (Department of Legal Affairs)',
    composition: 'President, Senior Vice-President, Vice-Presidents, Judicial Members, and Accountant Members.',
    appointmentProcess: 'Appointed by Central Government on recommendation of Search-cum-Selection Committee chaired by SC Judge.',
    tenureAndRemoval: 'Tenure governed by Tribunal Reforms Act 2021 (4 years or 67 years for members; 70 for President).',
    mandateAndPowers: [
      'Second appellate authority for direct taxes (Income Tax, Wealth Tax).',
      'Final fact-finding authority in income tax matters (appeals to High Court under Section 260A lie ONLY on substantial questions of law).',
      'Benches operate across all major commercial centres in India.'
    ],
    limitationsAndIssues: [
      'Pending tax disputes locking up lakhs of crores in government tax revenue.',
      'Frequent changes in tribunal member service rules challenged in Madras Bar Association judgments.'
    ],
    independenceSafeguards: [
      'Placed administratively under Ministry of Law and Justice (NOT Ministry of Finance) to maintain complete judicial independence from the tax-collecting department.'
    ],
    recentDevelopments: 'Paperless e-courts and faceless appeals interface integration.',
    prelimsFacts: [
      'ITAT is the OLDEST tribunal in India, set up in January 1941.',
      'It is functioning under the Department of Legal Affairs in Ministry of Law and Justice, NOT Ministry of Finance.',
      'It is the final fact-finding authority; High Court cannot entertain an appeal on findings of fact.'
    ],
    mainsRelevance: 'Direct tax dispute resolution, certainty in fiscal law, tribunalization of justice, and investor confidence.',
    officialUrl: 'https://itat.gov.in'
  },
  {
    id: 'body-cat',
    name: 'Central Administrative Tribunal (CAT)',
    type: 'Quasi-Judicial',
    articleOrAct: 'Article 323A, Constitution of India & Administrative Tribunals Act, 1985',
    yearEstablished: 1985,
    ministryOrParent: 'Ministry of Personnel, Public Grievances & Pensions',
    composition: 'Chairman and Judicial and Administrative Members.',
    appointmentProcess: 'Appointed by President on recommendation of Selection Committee headed by a sitting Supreme Court Judge nominated by CJI.',
    tenureAndRemoval: 'Governed by Tribunal Reforms Act 2021.',
    mandateAndPowers: [
      'Adjudicates disputes and complaints with respect to recruitment and conditions of service of persons appointed to public services and posts under the Union.',
      'Covers All India Services, Central Civil Services, civilian defence employees, and notified public corporations.',
      'Guided by Principles of Natural Justice, not bound by strict CPC 1908 procedures.'
    ],
    limitationsAndIssues: [
      'Supreme Court in L. Chandra Kumar (1997) held that orders of CAT are subject to writ jurisdiction of the Division Bench of High Court under Article 226/227.',
      'Introduced another tier of litigation rather than substituting High Courts.'
    ],
    independenceSafeguards: [
      'Chaired by a retired High Court Chief Justice or Judge.'
    ],
    recentDevelopments: 'Digitization of pleadings through e-filing portal (CAT-eCourt).',
    prelimsFacts: [
      'Article 323A enables Parliament to establish administrative tribunals for public service matters (State Administrative Tribunals SATs can also be set up).',
      'Members of defence forces, officers and servants of Supreme Court, and Secretarial staff of Parliament are EXCLUDED from CAT jurisdiction.'
    ],
    mainsRelevance: 'Service jurisprudence, tribunalization of justice, impact of L. Chandra Kumar judgment, and civil servant grievance redressal.',
    officialUrl: 'https://cgat.gov.in'
  },
  {
    id: 'body-tdsat',
    name: 'Telecom Disputes Settlement and Appellate Tribunal (TDSAT)',
    type: 'Quasi-Judicial',
    articleOrAct: 'TRAI (Amendment) Act, 2000 (Later vested with Cyber Appellate and Airport Tariff appeals)',
    yearEstablished: 2000,
    ministryOrParent: 'Ministry of Communications',
    composition: 'Chairperson (former SC Judge or HC Chief Justice) and 2 Members.',
    appointmentProcess: 'Appointed by Central Government in consultation with Chief Justice of India.',
    tenureAndRemoval: 'Governed by Tribunal Reforms provisions.',
    mandateAndPowers: [
      'Adjudicates disputes between a licensor (DoT) and a licensee, between two or more service providers, and between a service provider and a group of consumers.',
      'Hears appeals against any direction, decision, or order of TRAI.',
      'Vested with powers of Cyber Appellate Tribunal (CyAT) under Information Technology Act 2000 (via Finance Act 2017).',
      'Hears appeals against Airports Economic Regulatory Authority (AERA) orders.'
    ],
    limitationsAndIssues: [
      'Complex technical and commercial tariff litigation between legacy telecom operators and satellite broadband entrants.'
    ],
    independenceSafeguards: [
      'Headed by a former Supreme Court judge; decisions appealable directly to Supreme Court of India.'
    ],
    recentDevelopments: 'Adjudication on OTT communication service regulatory boundaries, AGR dues calculations, and spectrum sharing guidelines.',
    prelimsFacts: [
      'Cyber Appellate Tribunal was merged into TDSAT by the Finance Act 2017.',
      'Appeals against TDSAT orders lie directly before the Supreme Court of India.'
    ],
    mainsRelevance: 'Telecom sector financial health, digital disputes adjudication, cyber litigation, and regulatory separation of powers.',
    officialUrl: 'https://tdsat.gov.in'
  },
  {
    id: 'body-ipab',
    name: 'Intellectual Property Appellate Board (IPAB - Abolished)',
    type: 'Quasi-Judicial',
    articleOrAct: 'Trade Marks Act, 1999 (Abolished by Tribunal Reforms Act, 2021)',
    yearEstablished: 2003,
    ministryOrParent: 'Ministry of Commerce and Industry (Jurisdiction transferred to High Courts)',
    composition: 'Formerly Chairman, Vice-Chairman, and Technical Members (Patents, Trademarks, Copyright).',
    appointmentProcess: 'Central Government on selection committee recommendation.',
    tenureAndRemoval: 'Abolished in August 2021.',
    mandateAndPowers: [
      'Formerly heard appeals against decisions of the Registrar under Trade Marks Act, Geographical Indications Act, Patents Act, and Copyright Act.',
      'Tribunal Reforms Act 2021 abolished IPAB and transferred all pending cases and appellate powers BACK to the Commercial Benches of High Courts (e.g. Delhi HC Intellectual Property Division).'
    ],
    limitationsAndIssues: [
      'Chronic delays in appointments of Technical Members left the tribunal non-functional for years.',
      'Litigants suffered due to frequent lack of quorum, prompting the Legislature to de-tribunalize IP disputes.'
    ],
    independenceSafeguards: [
      'High Courts now handle IP disputes directly with greater judicial independence and faster disposition.'
    ],
    recentDevelopments: 'Delhi High Court created a dedicated Intellectual Property Division (IPD) which has become a national benchmark for expeditious patent and trademark litigation.',
    prelimsFacts: [
      'IPAB was formally abolished by the Tribunal Reforms Act, 2021, and its powers were restored to High Courts.',
      'One of the clearest examples of "De-tribunalization" in Indian legal history.'
    ],
    mainsRelevance: 'Tribunalization vs regular court adjudication, intellectual property rights enforcement, and judicial infrastructure reforms.',
    officialUrl: 'https://delhihighcourt.nic.in'
  }
];
