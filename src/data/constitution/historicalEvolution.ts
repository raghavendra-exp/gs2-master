export interface HistoricalAct {
  id: string;
  year: number;
  actName: string;
  historicalContext: string;
  keyProvisions: string[];
  constitutionalLegacy: string;
  prelimsTrap: string;
  mainsPointers: string[];
  officialSource: string;
}

export interface ConstituentAssemblyMilestone {
  dateOrPeriod: string;
  event: string;
  significance: string;
  keyPersonalities: string[];
  coreDebateOrOutcome: string;
}

export interface ConstitutionalFeatureDetail {
  id: string;
  featureName: string;
  indianModel: string;
  comparisonWithWesternModels: string;
  constitutionalArticles: string[];
  landmarkJudgments: string[];
  criticalAnalysis: string;
}

export const HISTORICAL_ACTS_DATA: HistoricalAct[] = [
  {
    id: 'act-1773',
    year: 1773,
    actName: 'Regulating Act of 1773',
    historicalContext: 'Enacted by Lord North\'s government following the East India Company\'s financial crisis and rampant corruption in Bengal administration.',
    keyProvisions: [
      'Designated Governor of Bengal as "Governor-General of Bengal" (Lord Warren Hastings).',
      'Created an Executive Council of 4 members to assist the Governor-General.',
      'Subordinated the Governors of Bombay and Madras Presidencies to Bengal in certain external matters.',
      'Provided for establishment of a Supreme Court at Fort William, Calcutta (1774) with 1 Chief Justice (Sir Elijah Impey) and 3 other judges.',
      'Strictly prohibited company servants from engaging in private trade or accepting presents/bribes from natives.'
    ],
    constitutionalLegacy: 'First statutory step towards centralized administration and British parliamentary control over company affairs in India.',
    prelimsTrap: 'The Supreme Court established at Calcutta was NOT an apex court for all Indians; it had jurisdiction primarily over British subjects and their servants.',
    mainsPointers: [
      'Marks the transition of East India Company from purely commercial entity to administrative ruling power.',
      'Suffered from ambiguity between Governor-General\'s Council and Supreme Court powers, later rectified by Amending Act of 1781 (Act of Settlement).'
    ],
    officialSource: 'Imperial Gazettes & Constituent Assembly Debates (Vol. I)'
  },
  {
    id: 'act-1784',
    year: 1784,
    actName: 'Pitt\'s India Act of 1784',
    historicalContext: 'Introduced by British Prime Minister William Pitt the Younger to address flaws of the 1773 Act and assert direct crown supervision.',
    keyProvisions: [
      'Established a System of Double Government: Court of Directors managed commercial affairs; Board of Control (6 commissioners) managed political and military affairs.',
      'Empowered the Board of Control to supervise, direct, and control all operations of civil and military government and revenues.',
      'For the first time, company\'s territories in India were officially termed the "British possessions in India".'
    ],
    constitutionalLegacy: 'Institutionalized dual control (Directors vs Crown Board) which persisted until 1858.',
    prelimsTrap: 'Board of Control was a Crown body, while Court of Directors represented the East India Company\'s shareholders.',
    mainsPointers: [
      'Placed the civilian and military government under direct British cabinet supervision.',
      'Set the precedent for civilian supremacy over military and commercial administration.'
    ],
    officialSource: 'British Parliamentary Records 1784'
  },
  {
    id: 'act-1813',
    year: 1813,
    actName: 'Charter Act of 1813',
    historicalContext: 'Pressure from British merchant lobbies following Adam Smith\'s free market principles and Continental System blockade by Napoleon.',
    keyProvisions: [
      'Abolished the trade monopoly of the East India Company in India (Indian trade opened to all British subjects).',
      'Retained the Company\'s monopoly over tea trade and trade with China for another 20 years.',
      'Permitted Christian missionaries to enter India for the purpose of religious and moral instruction.',
      'Allocated a financial provision of ₹1 Lakh annually for the revival, promotion of literature, and encouragement of sciences in India.'
    ],
    constitutionalLegacy: 'First statutory recognition of State responsibility for public education in India.',
    prelimsTrap: 'Company monopoly was NOT completely abolished in 1813; trade in tea and trade with China were retained until 1833.',
    mainsPointers: [
      'Initiated official Western education policy leading to the Anglicist vs Orientalist controversy.',
      'Marked the penetration of British industrial manufactured goods into the Indian domestic economy.'
    ],
    officialSource: 'East India Company Charter Records'
  },
  {
    id: 'act-1833',
    year: 1833,
    actName: 'Charter Act of 1833 (Saint Helena Act)',
    historicalContext: 'Passed during the high watermark of the Whig reform era and utilitarian philosophy in Britain under Lord William Bentinck.',
    keyProvisions: [
      'Elevated Governor-General of Bengal to the "Governor-General of India" (Lord William Bentinck was first).',
      'Vested in the Governor-General of India all civil and military powers.',
      'Deprived Governors of Bombay and Madras of their legislative powers; centralized legislative power solely in Governor-General in Council.',
      'Ended East India Company\'s commercial activities completely; made it a purely administrative body.',
      'Added a fourth member to the Executive Council as "Law Member" (Lord Macaulay) without voting rights initially.',
      'Provided for codification of Indian laws, leading to appointment of First Law Commission (1834).'
    ],
    constitutionalLegacy: 'Highest stage of legislative and administrative centralization under British rule; precursor to the Indian Penal Code (IPC 1860).',
    prelimsTrap: 'Section 87 stated no native should be disabled from holding any office by reason only of religion, place of birth, or color, though implementation was practically shelved.',
    mainsPointers: [
      'Complete transition of EIC from commercial corporation to political agent of the Crown.',
      'Beginning of professional legal drafting and codification of common law in India.'
    ],
    officialSource: 'British Parliamentary Archives & Law Commission of India Reports'
  },
  {
    id: 'act-1853',
    year: 1853,
    actName: 'Charter Act of 1853',
    historicalContext: 'Last of the Charter Acts; enacted amidst growing Indian demands for representation and open access to administration.',
    keyProvisions: [
      'Separated for the first time the legislative and executive functions of the Governor-General\'s Council.',
      'Created a 12-member Indian (Central) Legislative Council (often called the "mini-Parliament").',
      'Introduced open competition for civil service recruitment (Macaulay Committee on Indian Civil Service appointed in 1854).',
      'Introduced local representation in the Central Legislative Council (4 of 6 new legislative members appointed by local governments of Madras, Bombay, Bengal, and Agra).'
    ],
    constitutionalLegacy: 'Genesis of modern parliamentary procedure and merit-based open competition for the civil services.',
    prelimsTrap: 'Did not specify any fixed renewal period (unlike previous 20-year charter acts), hinting at imminent Crown takeover.',
    mainsPointers: [
      'Established the distinct identity of legislative process from executive decrees.',
      'Macaulay Committee recommendations established the meritocracy principle in Indian bureaucracy.'
    ],
    officialSource: 'Macaulay Committee Report 1854'
  },
  {
    id: 'act-1858',
    year: 1858,
    actName: 'Government of India Act 1858 (Act for Better Government of India)',
    historicalContext: 'Enacted in the aftermath of the Revolt of 1857 (First War of Independence); liquidated East India Company rule.',
    keyProvisions: [
      'Transferred the government, territories, and revenues of India directly to the British Crown (Queen Victoria).',
      'Abolished the Board of Control and Court of Directors, ending the Double Government of 1784.',
      'Created the office of "Secretary of State for India", a member of British Cabinet assisted by a 15-member Council of India.',
      'Designated Governor-General as the "Viceroy of India" (Lord Canning became the first Viceroy) acting as direct representative of Crown.'
    ],
    constitutionalLegacy: 'Established direct imperial Crown rule and accountability to British Parliament in Whitehall.',
    prelimsTrap: 'Queen\'s Proclamation of 1858 promised non-interference in religious practices and no further territorial annexation, but brought no representative rights.',
    mainsPointers: [
      'Concentrated all supervisory authority in Whitehall via the Secretary of State.',
      'Left internal administrative machinery largely unchanged while altering supreme political allegiance.'
    ],
    officialSource: 'Government of India Enactments 1858'
  },
  {
    id: 'act-1861',
    year: 1861,
    actName: 'Indian Councils Act of 1861',
    historicalContext: 'British realization that governing India required associating Indians with administration and reversing extreme centralization.',
    keyProvisions: [
      'Initiated association of Indians in lawmaking: Viceroy nominated 3 non-official Indians in 1862 (Raja of Benaras, Maharaja of Patiala, Sir Dinkar Rao).',
      'Initiated Legislative Decentralization by restoring law-making powers to Bombay and Madras Presidencies.',
      'Recognized the Portfolio System introduced by Lord Canning in 1859 (members in charge of specific departments).',
      'Empowered the Viceroy to issue Ordinances in emergencies without council concurrence (valid for 6 months).'
    ],
    constitutionalLegacy: 'Direct ancestor of Cabinet portfolio system and the President\'s Ordinance-making power under Article 123.',
    prelimsTrap: 'Non-official Indian members had no deliberative power, could not vote on budgets, or ask questions to the executive.',
    mainsPointers: [
      'Pioneered legislative devolution reversing the centralizing thrust of the 1833 Charter.',
      'Laid down the emergency ordinance mechanism that remains in the contemporary Indian Constitution.'
    ],
    officialSource: 'Imperial Legislative Council Archives'
  },
  {
    id: 'act-1892',
    year: 1892,
    actName: 'Indian Councils Act of 1892',
    historicalContext: 'Result of persistent nationalist demands by the Indian National Congress (founded 1885) for expansion of legislative councils.',
    keyProvisions: [
      'Increased the number of additional (non-official) members in Central and Provincial Legislative Councils.',
      'Conferred the power to discuss the annual budget and address questions to the executive (with 6 days\' advance notice).',
      'Introduced limited indirect election mechanism: non-official members nominated on recommendation of universities, district boards, municipalities, and chambers of commerce.'
    ],
    constitutionalLegacy: 'First practical introduction of the elective principle into the Indian legislature (though the word "election" was carefully avoided).',
    prelimsTrap: 'Members could discuss the budget but could NOT vote on budget provisions or ask supplementary questions.',
    mainsPointers: [
      'Provided a parliamentary platform used masterfully by leaders like Gopal Krishna Gokhale and Pherozeshah Mehta to critique colonial economics.',
      'Widened the scope of legislative scrutiny over fiscal policy.'
    ],
    officialSource: 'Indian Councils Enactments 1892'
  },
  {
    id: 'act-1909',
    year: 1909,
    actName: 'Indian Councils Act of 1909 (Morley-Minto Reforms)',
    historicalContext: 'Framed by Secretary of State John Morley and Viceroy Lord Minto amid Swadeshi movement and split in Congress.',
    keyProvisions: [
      'Increased Central Council size from 16 to 60 members; non-official majority permitted in provincial councils.',
      'Expanded deliberative powers: members allowed to move resolutions on budget and ask supplementary questions.',
      'Included an Indian in the Viceroy\'s Executive Council for the first time (Satyendra Prasad Sinha as Law Member).',
      'Introduced Communal Electorates for Muslims (separate electorate where Muslim representatives were chosen exclusively by Muslim voters).'
    ],
    constitutionalLegacy: 'Institutionalized communal representation; Lord Minto earned the epithet "Father of Communal Electorate".',
    prelimsTrap: 'Did not grant a non-official majority in the Central Legislative Council; official majority was strictly maintained at the Centre.',
    mainsPointers: [
      'Sowed seeds of institutional communalism that culminated in partition.',
      'Shifted the nature of councils from advisory forums to political debating chambers.'
    ],
    officialSource: 'Morley-Minto Papers & Parliamentary Debates'
  },
  {
    id: 'act-1919',
    year: 1919,
    actName: 'Government of India Act 1919 (Montagu-Chelmsford Reforms)',
    historicalContext: 'Followed Montagu Declaration of August 1917 promising "gradual development of self-governing institutions and progressive realization of responsible government".',
    keyProvisions: [
      'Introduced Dyarchy in Provinces: Provincial subjects split into "Transferred" (administered by Ministers responsible to council) and "Reserved" (administered by Governor & Executive Council without legislative responsibility).',
      'Introduced Bicameralism at the Centre: Council of State (Upper House) and Central Legislative Assembly (Lower House).',
      'Introduced Direct Elections in the country for majority of legislative seats with high property/tax/education franchise.',
      'Separated Provincial budgets from Central budget for the first time.',
      'Extended communal electorates to Sikhs, Indian Christians, Anglo-Indians, and Europeans.',
      'Provided for establishment of a Public Service Commission (Central Public Service Commission set up in 1926 under Lee Commission).'
    ],
    constitutionalLegacy: 'Parent of bicameral federal parliament, Public Service Commissions (Article 315), and division of budgetary resources.',
    prelimsTrap: 'Dyarchy was introduced at the PROVINCIAL level in 1919, NOT at the Central level.',
    mainsPointers: [
      'Transferred ministers held responsibility without finance (Finance remained reserved with Governor).',
      'First statutory step towards federal division of powers between Centre and Provinces.'
    ],
    officialSource: 'Montagu-Chelmsford Report 1918'
  },
  {
    id: 'act-1935',
    year: 1935,
    actName: 'Government of India Act 1935',
    historicalContext: 'Drafted following the Simon Commission (1927), Three Round Table Conferences (1930-32), and British White Paper (1933). Longest British statute enacted till then.',
    keyProvisions: [
      'Envisaged an All-India Federation comprising British Indian provinces and princely states (never came into effect as princely states refused to join).',
      'Divided powers into Three Lists: Federal List (59 items), Provincial List (54 items), and Concurrent List (36 items). Residuary powers vested in Viceroy.',
      'Abolished Dyarchy in provinces; introduced "Provincial Autonomy" with ministers responsible to provincial legislatures.',
      'Proposed Dyarchy at the Centre (Federal subjects divided into Reserved and Transferred; never operationalized).',
      'Introduced Bicameralism in 6 out of 11 provinces (Bengal, Bombay, Madras, Bihar, Assam, United Provinces).',
      'Established a Federal Court (set up in 1937 in Delhi; precursor to Supreme Court of India).',
      'Established Reserve Bank of India (RBI 1935) and Federal Public Service Commission, Provincial PSCs, and Joint PSCs.'
    ],
    constitutionalLegacy: 'Formed the structural backbone of the 1950 Indian Constitution (over 60% of provisions, emergency powers, administrative details, 7th schedule lists derived directly).',
    prelimsTrap: 'Residuary legislative powers under the 1935 Act were given to the GOVERNOR-GENERAL / VICEROY in his discretion, NOT to the Federal Legislature (unlike Art 248 where Parliament has them).',
    mainsPointers: [
      'Provincial autonomy gave the Congress party its first governance experience (1937-39 ministries).',
      'Retained extensive discretionary vetoes and Section 93 governor suspension powers (predecessor of Article 356).'
    ],
    officialSource: 'Government of India Act 1935 (25 & 26 Geo. 5 c. 42)'
  },
  {
    id: 'act-1947',
    year: 1947,
    actName: 'Indian Independence Act 1947',
    historicalContext: 'Formulated on the basis of the Mountbatten Plan (3rd June Plan); received royal assent on July 18, 1947.',
    keyProvisions: [
      'Ended British rule in India; declared India as an independent and sovereign state from August 15, 1947.',
      'Provided for partition and creation of two independent Dominions: India and Pakistan.',
      'Abolished the office of Viceroy; provided a Governor-General for each Dominion appointed by British King on advice of Dominion Cabinet.',
      'Conferred full sovereign power on Constituent Assemblies of both dominions to frame their constitutions and repeal any British act (including Independence Act itself).',
      'Lapsed British paramountcy over princely states; left them free to join India, Pakistan, or remain independent.',
      'Designated the Constituent Assembly as the Dominion Legislature (presided by G.V. Mavalankar when functioning as Parliament).'
    ],
    constitutionalLegacy: 'Transferred unfettered legal sovereignty to the people of India represented through their Constituent Assembly.',
    prelimsTrap: 'Governor-General lost all discretionary powers and became a purely constitutional head acting on advice of the Council of Ministers.',
    mainsPointers: [
      'Effected transfer of power without a vacuum by adopting the 1935 Act as interim constitution.',
      'Empowered Constituent Assembly to act as India\'s first provisional parliament until general elections of 1951-52.'
    ],
    officialSource: 'Statutes of the United Kingdom 1947'
  }
];

export const CONSTITUENT_ASSEMBLY_DATA: ConstituentAssemblyMilestone[] = [
  {
    dateOrPeriod: 'December 9, 1946',
    event: 'First Meeting of the Constituent Assembly',
    significance: 'Assembly met in Constitution Hall (now Central Hall of Parliament). Boycotted by Muslim League.',
    keyPersonalities: ['Dr. Sachchidananda Sinha (Temporary President following French practice)'],
    coreDebateOrOutcome: 'Established rules of procedure and quorum.'
  },
  {
    dateOrPeriod: 'December 11, 1946',
    event: 'Election of Permanent Officers',
    significance: 'Elected Dr. Rajendra Prasad as President, H.C. Mukherjee and V.T. Krishnamachari as Vice-Presidents, Sir B.N. Rau as Constitutional Advisor.',
    keyPersonalities: ['Dr. Rajendra Prasad', 'Sir B.N. Rau', 'H.C. Mukherjee'],
    coreDebateOrOutcome: 'Institutionalized legal expertise through Sir B.N. Rau who traveled to USA, UK, Ireland, and Canada.'
  },
  {
    dateOrPeriod: 'December 13, 1946',
    event: 'Introduction of the Objective Resolution',
    significance: 'Laid down the philosophical roadmap and ideals of the future sovereign independent Republic.',
    keyPersonalities: ['Jawaharlal Nehru'],
    coreDebateOrOutcome: 'Proclaimed justice, equality, liberty, freedom of vocation and association, safeguards for minorities, and international peace. Formed the foundation of the Preamble.'
  },
  {
    dateOrPeriod: 'August 29, 1947',
    event: 'Appointment of the Drafting Committee',
    significance: 'Tasked with scrutinizing the draft constitution prepared by Sir B.N. Rau and preparing the final text.',
    keyPersonalities: ['Dr. B.R. Ambedkar (Chairman)', 'Alladi Krishnaswami Ayyar', 'N. Gopalaswami Ayyangar', 'K.M. Munshi', 'Mohammad Saadulla', 'B.L. Mitter (replaced by N. Madhava Rau)', 'D.P. Khaitan (replaced by T.T. Krishnamachari)'],
    coreDebateOrOutcome: 'Dr. Ambedkar piloted the draft through rigorous clause-by-clause scrutiny across three readings.'
  },
  {
    dateOrPeriod: 'November 26, 1949',
    event: 'Adoption and Enactment of the Constitution',
    significance: 'Constitution adopted by Constituent Assembly; 284 members signed the original calligraphed document.',
    keyPersonalities: ['Dr. B.R. Ambedkar', 'Dr. Rajendra Prasad'],
    coreDebateOrOutcome: 'Provisions relating to Citizenship (Arts 5-9), Elections (Art 324), Provisional Parliament, and Short Title came into force immediately.'
  },
  {
    dateOrPeriod: 'January 26, 1950',
    event: 'Full Enforcement & Commencement of Republic',
    significance: 'Date chosen to commemorate the declaration of Purna Swaraj (Complete Independence) at the Lahore Session of INC (1929).',
    keyPersonalities: ['Dr. Rajendra Prasad (sworn in as first President)'],
    coreDebateOrOutcome: 'Constitution of India came into full force, repealing the Indian Independence Act 1947 and GoI Act 1935 (under Article 395).'
  }
];

export const SALIENT_FEATURES_DATA: ConstitutionalFeatureDetail[] = [
  {
    id: 'feature-written',
    featureName: 'Longest Written Constitution in the World',
    indianModel: 'Originally had 395 Articles, 22 Parts, and 8 Schedules (now over 470 Articles in 25 Parts and 12 Schedules). Elaborates both fundamental principles and detailed administrative machinery.',
    comparisonWithWesternModels: 'Unlike UK (unwritten/conventions) or USA (brief with only 7 Articles), India covers Union, States, Judiciary, Services, Elections, and Emergency in a single constitutional text.',
    constitutionalArticles: ['Article 1', 'Article 395'],
    landmarkJudgments: ['Kesavananda Bharati v. State of Kerala (1973)'],
    criticalAnalysis: 'Criticized by Sir Ivor Jennings as "a lawyer\'s paradise" due to bulk, but necessitated by India\'s vast geographical diversity, linguistic heterogeneity, and historical distrust of unwritten executive conventions.'
  },
  {
    id: 'feature-rigidity-flexibility',
    featureName: 'Blend of Rigidity and Flexibility',
    indianModel: 'Article 368 provides a tripartite amendment mechanism: simple majority for basic organizational issues, special majority (2/3 present & voting + majority of total membership) for key provisions, and special majority with ratification by 50% of State Legislatures for federal provisions.',
    comparisonWithWesternModels: 'More flexible than USA (where 3/4th states must ratify, resulting in only 27 amendments in 230+ years) and more rigid than UK (where any constitutional law can be changed by ordinary parliamentary majority).',
    constitutionalArticles: ['Article 368', 'Article 3', 'Article 169'],
    landmarkJudgments: ['Sankari Prasad (1951)', 'Golaknath (1967)', 'Kesavananda (1973)'],
    criticalAnalysis: 'Maintains stability through the Basic Structure Doctrine while permitting adaptation (106 amendments enacted over 75 years without systemic breakdown).'
  },
  {
    id: 'feature-federal-unitary',
    featureName: 'Federal System with Unitary Bias (Quasi-Federal)',
    indianModel: 'Possesses federal features (written constitution, supremacy, 7th schedule list division, independent judiciary, bicameralism) alongside strong unitary features (single constitution, single citizenship, All India Services, integrated judiciary, emergency powers under 352/356, appointment of Governor).',
    comparisonWithWesternModels: 'Described by K.C. Wheare as "Quasi-federal", by Granville Austin as "Cooperative Federalism", and by Dr. Ambedkar as "a federal system that can become unitary in times of crisis". Distinct from US "indestructible union of indestructible states".',
    constitutionalArticles: ['Article 1', 'Article 246', 'Article 248', 'Article 356', 'Article 312'],
    landmarkJudgments: ['State of West Bengal v. UOI (1963)', 'S.R. Bommai v. UOI (1994)'],
    criticalAnalysis: 'Reflects historical imperative of preserving national unity amidst centrifugal partition shocks while granting regional autonomy for local development.'
  },
  {
    id: 'feature-parliamentary',
    featureName: 'Parliamentary Form of Government (Westminster vs India)',
    indianModel: 'Executive is drawn from and collectively responsible to the Legislature (Article 75(3) for Lok Sabha, Article 164(2) for Vidhan Sabha). Head of State (President) is titular/de jure, while Head of Government (Prime Minister) is real/de facto.',
    comparisonWithWesternModels: 'Unlike UK where the Monarch is hereditary, India is a Republic with an elected President. Unlike UK Parliamentary Sovereignty, Indian Parliament is constrained by a written Constitution and Judicial Review. Unlike US Presidential separation, Indian executive-legislative branches are fused.',
    constitutionalArticles: ['Article 74', 'Article 75', 'Article 163', 'Article 164'],
    landmarkJudgments: ['Ram Jawaya Kapur v. State of Punjab (1955)', 'Shamsher Singh v. State of Punjab (1974)'],
    criticalAnalysis: 'Constituent Assembly favored accountability over presidential stability due to familiar British parliamentary tradition and prevention of one-man dictatorship.'
  },
  {
    id: 'feature-synthesis',
    featureName: 'Synthesis of Parliamentary Sovereignty & Judicial Supremacy',
    indianModel: 'Harmonious reconciliation between British principle of Parliamentary Sovereignty and American principle of Judicial Supremacy. Supreme Court can declare parliamentary laws unconstitutional via Articles 13 & 32, while Parliament can amend the Constitution via Article 368 within Basic Structure bounds.',
    comparisonWithWesternModels: 'Avoids British parliamentary absolutism (where courts cannot invalidate Acts of Parliament) and American judicial exclusivity (where judges have declared socio-economic laws void under substantive due process).',
    constitutionalArticles: ['Article 13', 'Article 32', 'Article 226', 'Article 368'],
    landmarkJudgments: ['A.K. Gopalan (1950)', 'Maneka Gandhi (1978)', 'Minerva Mills (1980)'],
    criticalAnalysis: 'Established a dynamic equilibrium preventing both parliamentary tyranny and judicial despotism.'
  },
  {
    id: 'feature-integrated-judiciary',
    featureName: 'Integrated and Independent Judiciary',
    indianModel: 'Single unified judicial hierarchy (Supreme Court at apex, High Courts in States, Subordinate Courts below) enforcing both Union and State laws. Independent safeguards include security of tenure, charged expenses, and contempt powers.',
    comparisonWithWesternModels: 'USA has dual court system (Federal courts enforce federal laws; State courts enforce state laws). In India, High Courts enforce both Central and State statutes.',
    constitutionalArticles: ['Article 124', 'Article 129', 'Article 214', 'Article 215', 'Article 142'],
    landmarkJudgments: ['Second Judges Case (1993)', 'Third Judges Case (1998)', 'NJAC Judgment (2015)'],
    criticalAnalysis: 'Guarantees uniform interpretation of federal laws and human rights across all states.'
  },
  {
    id: 'feature-secular-state',
    featureName: 'Positive Concept of Secularism',
    indianModel: 'Not strict separation (wall of separation) between religion and state, but "Sarva Dharma Sambhava" (equal respect and treatment of all religions). State can regulate secular aspects of religious practices and provide affirmative support for social reform (e.g., temple entry Article 25(2)(b)).',
    comparisonWithWesternModels: 'Western secularism (e.g. French Laïcité) implies strict exclusion of religion from public sphere. Indian model permits state financial aid to educational institutions run by minorities (Article 30) while banning state-sponsored religious instruction in state schools (Article 28).',
    constitutionalArticles: ['Article 25', 'Article 26', 'Article 27', 'Article 28', 'Article 29', 'Article 30'],
    landmarkJudgments: ['S.R. Bommai (1994)', 'Sabarimala Case (2018)'],
    criticalAnalysis: 'Inscribed in Preamble by 42nd Amendment (1976), but recognized by Supreme Court in Bommai as an inherent part of the Basic Structure from the inception.'
  }
];
