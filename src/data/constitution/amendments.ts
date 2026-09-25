import { ConstitutionalAmendment } from '../../types';

export const CONSTITUTIONAL_AMENDMENTS: ConstitutionalAmendment[] = [
  {
    amendmentNumber: '1st Amendment Act',
    year: 1951,
    title: 'Ninth Schedule, Agrarian Land Reforms, Restrictions on Article 19',
    provisionsChanged: [
      'Articles 15, 19, 85, 87, 174, 176, 341, 342, 372, 376',
      'Inserted Articles 31A, 31B and the Ninth Schedule'
    ],
    reasonAndBackground: 'Overcame judicial bottlenecks against land reform laws (e.g., Kameshwar Singh case) and restrictions on free speech (Romesh Thappar case).',
    importance: 'Introduced the Ninth Schedule to immunize selected laws from judicial review on grounds of fundamental right violation; added "public order", "friendly relations with foreign states", and "incitement to an offence" to Art 19(2).',
    controversyOrDebate: 'Immunity granted to laws under Ninth Schedule was later curtailed in I.R. Coelho (2007) by applying the Basic Structure test post-April 24, 1973.',
    relatedJudgment: 'I.R. Coelho v. State of Tamil Nadu (2007) 2 SCC 1',
    prelimsFacts: [
      'Enacted by the Provisional Parliament (Constituent Assembly sitting as interim legislature).',
      'Created Article 31B and the Ninth Schedule.',
      'Added clause (4) to Article 15 allowing special provisions for advancement of socially and educationally backward classes.'
    ],
    mainsRelevance: 'Illustrates early executive-judiciary tensions over property rights, socio-economic redistribution, and freedom of expression.',
    source: 'Gazette of India, Extraordinary, June 18, 1951'
  },
  {
    amendmentNumber: '7th Amendment Act',
    year: 1956,
    title: 'States Reorganisation on Linguistic Basis',
    provisionsChanged: [
      'Abolished 4-fold classification of States (Part A, B, C, D)',
      'Articles 49, 80, 81, 82, 131, 153, 158, 168, 170, 216, 217, 220, 222, 224, 230, 231, 232',
      'Inserted Articles 258A, 290A, 350A, 350B, 371'
    ],
    reasonAndBackground: 'Implemented recommendations of the Fazl Ali Commission (States Reorganisation Commission 1953) to redraw internal boundaries on linguistic lines.',
    importance: 'Created 14 States and 6 Union Territories. Allowed appointment of the same person as Governor for two or more States (Art 153 proviso) and common High Courts (Art 231).',
    prelimsFacts: [
      'Inserted Article 350A (facilities for instruction in mother-tongue at primary stage) and Article 350B (Special Officer for Linguistic Minorities).',
      'Allowed a Governor to act for more than one state.'
    ],
    mainsRelevance: 'Consolidated India’s federal architecture; demonstrated that linguistic reorganization strengthened national unity rather than balkanizing it.',
    source: 'States Reorganisation Act 1956 & 7th Constitutional Amendment'
  },
  {
    amendmentNumber: '24th Amendment Act',
    year: 1971,
    title: 'Parliamentary Competence to Amend Fundamental Rights',
    provisionsChanged: [
      'Amended Article 13 and Article 368',
      'Inserted Art 13(4) and Art 368(3)'
    ],
    reasonAndBackground: 'Enacted to neutralize the Supreme Court’s Golaknath judgment (1967) which ruled that Parliament had no power to abridge Fundamental Rights.',
    importance: 'Explicitly affirmed that Parliament in exercise of constituent power can amend any provision including Part III; made Presidential assent to Constitution Amendment Bills mandatory.',
    relatedJudgment: 'Kesavananda Bharati v. State of Kerala (1973) - Upheld validity of 24th CAA but introduced the Basic Structure doctrine.',
    prelimsFacts: [
      'President cannot withhold assent or return a Constitution Amendment Bill (assent is mandatory).',
      'Art 13(4) specifies that nothing in Article 13 applies to amendments made under Article 368.'
    ],
    mainsRelevance: 'Core milestone in the battle between Parliamentary Sovereignty and Judicial Review in Indian constitutional history.',
    source: 'The Constitution (Twenty-fourth Amendment) Act, 1971'
  },
  {
    amendmentNumber: '42nd Amendment Act',
    year: 1976,
    title: '"Mini-Constitution" - Socialist, Secular, Integrity & Fundamental Duties',
    provisionsChanged: [
      'Preamble: Added "Socialist", "Secular", and "Integrity"',
      'Inserted Part IVA (Article 51A - Fundamental Duties) on Swaran Singh Committee recommendation',
      'Inserted Part XIVA (Articles 323A, 323B - Administrative Tribunals)',
      'Added Articles 39A (Free Legal Aid), 43A (Workers participation), 48A (Environment & Wildlife)',
      'Transferred 5 subjects from State List to Concurrent List (Education, Forests, Weights & Measures, Protection of Animals/Birds, Admin of Justice)',
      'Made President bound by ministerial advice (Art 74)'
    ],
    reasonAndBackground: 'Passed during the Internal Emergency (1975-1977) to assert sweeping supremacy of Parliament and executive authority.',
    importance: 'Most comprehensive constitutional amendment in Indian history; fundamentally restructured the balance of powers and constitutional philosophy.',
    controversyOrDebate: 'Widely criticized for curbing judicial review and civil liberties; most authoritarian features were repealed or rebalanced by the 44th Amendment Act 1978.',
    relatedJudgment: 'Minerva Mills v. Union of India (1980) - Struck down sections 4 and 55 of 42nd CAA.',
    prelimsFacts: [
      'Added Fundamental Duties (10 initially; 11th added by 86th CAA in 2002).',
      'Amended Preamble for the ONLY time till date.',
      'Transferred Education & Forests to Concurrent List.'
    ],
    mainsRelevance: 'Crucial case study on emergency constitutionalism, the expansion of DPSP over FR, and institutional recalibration.',
    source: 'Parliament of India Records & Swaran Singh Committee Report'
  },
  {
    amendmentNumber: '44th Amendment Act',
    year: 1978,
    title: 'Restoration of Civil Liberties & Emergency Safeguards',
    provisionsChanged: [
      'Articles 19, 22, 30, 31, 38, 74, 132, 133, 134, 139A, 150, 217, 226, 227, 239AB, 352, 356, 358, 359, 360',
      'Deleted Right to Property as a Fundamental Right [Art 19(1)(f) and Art 31]; made it a constitutional/legal right under Article 300A'
    ],
    reasonAndBackground: 'Enacted by the Janata Party Government to undo the excesses of the Emergency and the 42nd Amendment Act.',
    importance: 'Replaced "internal disturbance" with "armed rebellion" in Article 352; mandated written advice of Union Cabinet for proclaiming Emergency; ensured Articles 20 & 21 cannot be suspended during Emergency; limited President’s Rule (Art 356) extensions.',
    prelimsFacts: [
      'Right to property removed from Part III and placed in Part XII as Art 300A (legal right, not fundamental right).',
      'Proclamation of National Emergency requires written concurrence of the Union Cabinet (not Prime Minister alone).',
      'President can send ministerial advice back ONCE for reconsideration (Art 74 proviso).'
    ],
    mainsRelevance: 'Erected formidable constitutional barricades against future authoritarian misuse of emergency powers.',
    source: 'Ministry of Law and Justice, Constitution (Forty-fourth Amendment) Act, 1978'
  },
  {
    amendmentNumber: '52nd Amendment Act',
    year: 1985,
    title: 'Anti-Defection Law (Tenth Schedule)',
    provisionsChanged: [
      'Articles 101, 102, 190, 191',
      'Inserted Tenth Schedule'
    ],
    reasonAndBackground: 'Enacted to curb rampant political defections ("Aaya Ram, Gaya Ram" culture) that threatened political stability.',
    importance: 'Disqualifies MPs and MLAs on grounds of defecting voluntarily from their political party or voting contrary to the party whip.',
    controversyOrDebate: 'Role of the Speaker as the deciding authority; perceived curtailment of intra-party dissent and freedom of speech of legislators.',
    relatedJudgment: 'Kihoto Hollohan v. Zachillhu (1992) - Upheld Tenth Schedule, but held that the Speaker’s decision is subject to judicial review.',
    prelimsFacts: [
      'Originally allowed split (1/3rd members); split provision was deleted by the 91st Amendment Act 2003.',
      'Merger exception: Requires at least two-thirds of the members of the legislative party to agree to the merger.',
      'Independent members disqualified if they join any political party after election; Nominated members disqualified if they join a political party after 6 months.'
    ],
    mainsRelevance: 'Central to current debates on government stability, constitutional role of Speakers, and internal party democracy.',
    source: 'Lok Sabha Secretariat & Tenth Schedule'
  },
  {
    amendmentNumber: '73rd Amendment Act',
    year: 1992,
    title: 'Panchayati Raj Institutions (Constitutional Status)',
    provisionsChanged: [
      'Inserted Part IX (Articles 243 to 243O)',
      'Inserted Eleventh Schedule (29 functional items)'
    ],
    reasonAndBackground: 'Institutionalized Mahatma Gandhi’s vision of Gram Swaraj and Article 40 DPSP through constitutional mandate.',
    importance: 'Created a mandatory three-tier Panchayati Raj system, direct elections, mandatory 5-year tenure, State Election Commission, State Finance Commission, and 33% reservation for women.',
    prelimsFacts: [
      'Mandatory 3 tiers in states with population > 20 lakhs (Gram, Intermediate, District).',
      'Gram Sabha is the foundation of the Panchayati Raj system (Art 243A).',
      'Eleventh Schedule contains 29 functional items.',
      'State Election Commission conducts panchayat elections (Art 243K).'
    ],
    mainsRelevance: 'Evaluated through the lens of the "3Fs": Devolution of Functions, Funds, and Functionaries.',
    source: 'Ministry of Panchayati Raj, Government of India'
  },
  {
    amendmentNumber: '74th Amendment Act',
    year: 1992,
    title: 'Urban Local Bodies (Municipalities)',
    provisionsChanged: [
      'Inserted Part IXA (Articles 243P to 243ZG)',
      'Inserted Twelfth Schedule (18 functional items)'
    ],
    reasonAndBackground: 'Provided constitutional status and stability to urban local governments in an increasingly urbanizing India.',
    importance: 'Established Nagar Panchayats, Municipal Councils, and Municipal Corporations; mandated District Planning Committees (Art 243ZD) and Metropolitan Planning Committees (Art 243ZE).',
    prelimsFacts: [
      'Twelfth Schedule contains 18 functional items.',
      'Wards Committees required for municipalities having a population of 3 lakhs or more (Art 243S).',
      'Reservations for SCs, STs, and at least 1/3rd for women.'
    ],
    mainsRelevance: 'Critical for analyzing urban governance deficits, municipal bond markets, and empowerment of Mayors.',
    source: 'Ministry of Housing and Urban Affairs'
  },
  {
    amendmentNumber: '86th Amendment Act',
    year: 2002,
    title: 'Right to Education as a Fundamental Right',
    provisionsChanged: [
      'Inserted Article 21A',
      'Substituted Article 45 in DPSP',
      'Added clause (k) to Article 51A (11th Fundamental Duty)'
    ],
    reasonAndBackground: 'Enacted following the Supreme Court judgment in Unni Krishnan v. State of A.P. (1993) which held education is intrinsic to the right to life.',
    importance: 'Made free and compulsory education for all children between 6 and 14 years of age a Fundamental Right; led to enactment of the RTE Act 2009.',
    prelimsFacts: [
      'Article 21A covers children aged 6 to 14 years.',
      'Modified Art 45 to direct early childhood care and education for all children until they complete the age of six years.',
      '11th Fundamental Duty added for parents/guardians to provide education opportunities.'
    ],
    mainsRelevance: 'Assessment of RTE Act outcomes, learning poverty, and integration with National Education Policy (NEP) 2020.',
    source: 'Ministry of Education & Right to Education Act 2009'
  },
  {
    amendmentNumber: '91st Amendment Act',
    year: 2003,
    title: 'Limiting Size of Council of Ministers & Strengthening Anti-Defection',
    provisionsChanged: [
      'Articles 75, 164',
      'Tenth Schedule (Paragraph 3 omitted)'
    ],
    reasonAndBackground: 'Recommended by the National Commission to Review the Working of the Constitution (NCRWC, Venkatachaliah Commission) to prevent jumbo cabinets used as political patronage.',
    importance: 'Capped the size of the Union and State Council of Ministers to a maximum of 15% of the total strength of the Lok Sabha / Vidhan Sabha; minimum 12 ministers in a State; removed the "split" defense under Tenth Schedule.',
    prelimsFacts: [
      'Max size: 15% of Lok Sabha / Vidhan Sabha (including PM / CM).',
      'Min size for State: 12 ministers (including CM). Exception: Delhi (Art 239AA limits cabinet to 10%).',
      'Deleted the 1/3rd split exemption from the Tenth Schedule.'
    ],
    mainsRelevance: 'Promotes administrative efficiency, checks coalition horse-trading, and streamlines cabinet governance.',
    source: 'NCRWC Report 2002 & Ministry of Law and Justice'
  },
  {
    amendmentNumber: '101st Amendment Act',
    year: 2016,
    title: 'Goods and Services Tax (GST) & GST Council',
    provisionsChanged: [
      'Inserted Articles 246A, 269A, 279A',
      'Amended Articles 248, 249, 250, 268, 269, 270, 271, 286, 366, 368',
      'Omitted Article 268A; modified Sixth and Seventh Schedules'
    ],
    reasonAndBackground: 'Replaced a fragmented indirect tax system (excise, VAT, service tax, entry tax) with a unified destination-based consumption tax.',
    importance: 'Pioneered pooled sovereignty in fiscal federalism; created the GST Council under Article 279A chaired by Union Finance Minister with State Finance Ministers as members.',
    controversyOrDebate: 'Erosion of state fiscal autonomy; compensation cess disputes; SC Mohit Minerals ruling on non-binding nature of recommendations.',
    relatedJudgment: 'Union of India v. Mohit Minerals Pvt Ltd (2022) - GST Council recommendations are persuasive/advisory; Parliament and State Legislatures possess simultaneous legislative competence.',
    prelimsFacts: [
      'GST Council (Art 279A): Union has 1/3rd voting weight; States combined have 2/3rd voting weight. Quorum is 50%; decision requires 75% weighted majority.',
      'Required ratification by at least half of the State Legislatures (Assam was first state to ratify).'
    ],
    mainsRelevance: 'Benchmark study for cooperative federalism, fiscal autonomy, and indirect taxation reform.',
    source: 'GST Council Secretariat & Ministry of Finance'
  },
  {
    amendmentNumber: '103rd Amendment Act',
    year: 2019,
    title: '10% Reservation for Economically Weaker Sections (EWS)',
    provisionsChanged: [
      'Articles 15 and 16',
      'Inserted Articles 15(6) and 16(6)'
    ],
    reasonAndBackground: 'Aimed at providing affirmative action for economically disadvantaged citizens not covered under SC/ST/OBC quotas.',
    importance: 'Introduced economic criteria as an independent basis for affirmative action in higher educational institutions and public employment.',
    relatedJudgment: 'Janjit Abhiyan v. Union of India (2022) - 3:2 majority upheld the 103rd Amendment; held that the 50% cap laid down in Indra Sawhney is not inviolable for EWS.',
    prelimsFacts: [
      'Provides up to 10% reservation for EWS in addition to existing reservations.',
      'Applies to both private aided and unaided educational institutions, except minority institutions under Art 30(1).'
    ],
    mainsRelevance: 'Substantive shift in Indian constitutional jurisprudence from social/educational backwardness to purely economic backwardness.',
    source: 'Supreme Court Janhit Abhiyan Ruling (2022)'
  },
  {
    amendmentNumber: '106th Amendment Act',
    year: 2023,
    title: 'Nari Shakti Vandan Adhiniyam (Women’s Reservation)',
    provisionsChanged: [
      'Inserted Articles 330A, 332A, 334A',
      'Amended Article 239AA'
    ],
    reasonAndBackground: 'Enacted to correct severe gender under-representation in India’s highest legislative bodies.',
    importance: 'Reserves one-third (33%) of all seats for women in the Lok Sabha, State Legislative Assemblies, and the Legislative Assembly of NCT of Delhi, including 33% sub-reservation within SC/ST seats.',
    controversyOrDebate: 'Implementation conditionality: Comes into effect only after a census conducted after the commencement of the Act followed by a delimitation exercise.',
    prelimsFacts: [
      'Sunset clause: Valid for an initial period of 15 years from commencement (can be extended by law).',
      'Seats reserved for women will be rotated after each subsequent delimitation exercise.',
      'Passed almost unanimously in both Houses of Parliament in the New Parliament Building (Special Session, Sept 2023).'
    ],
    mainsRelevance: 'Substantive political representation, gender-inclusive policy formulation, and challenges surrounding delimitation post-census.',
    source: 'The Constitution (One Hundred and Sixth Amendment) Act, 2023, Ministry of Law and Justice'
  }
];
