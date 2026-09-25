import { ConstitutionArticle } from '../../types';

export const CONSTITUTION_ARTICLES: ConstitutionArticle[] = [
  {
    articleNumber: '14',
    part: 'Part III: Fundamental Rights',
    subject: 'Equality before law and equal protection of the laws',
    originalTextExtract: 'The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.',
    simpleExplanation: 'Article 14 guarantees two concepts: (1) Equality before law (British origin, negative concept - absence of arbitrary privilege), and (2) Equal protection of laws (American origin, positive concept - equal treatment among equals under equal circumstances).',
    constitutionalContext: 'Forms the bedrock of Rule of Law (A.V. Dicey) and Article 14, 19, 21 comprise the "Golden Triangle" of the Constitution.',
    relatedArticles: ['15', '16', '17', '18', '21', '32', '226'],
    importantAmendments: ['Basic feature: cannot be abrogated even by constitutional amendment'],
    landmarkCases: [
      'E.P. Royappa v. State of Tamil Nadu (1974) - Equality is dynamic, antithetical to arbitrariness',
      'Maneka Gandhi v. Union of India (1978) - Non-arbitrariness under Art 14 infuses Art 21',
      'Shayara Bano v. Union of India (2017) - Manifest arbitrariness doctrine applies to primary and delegated legislation',
      'Navtej Singh Johar v. UOI (2018) - Discriminatory provisions violate Art 14'
    ],
    currentRelevance: 'Invoked in debates on sub-classification of SC/STs (State of Punjab v. Davinder Singh 2024), citizenship laws, and algorithmic bias in automated public governance.',
    pyqs: [
      'UPSC CSE 2021: "Constitutional morality is rooted in the Constitution itself and is founded on its essential facets..."',
      'UPSC CSE 2017: Concept of equal protection of laws and judicial activism.'
    ],
    prelimsFacts: [
      'Applies to citizens as well as non-citizens (foreigners and legal corporations).',
      'Rule of Law as conceived by Dicey: absence of arbitrary power, equality before law, and primacy of individual rights (in India, the Constitution is the source of rights).',
      'Reasonable classification is permitted if based on intelligible differentia with rational nexus to the objective.'
    ],
    mainsQuestions: [
      'Evaluate how the Supreme Court expanded the scope of Article 14 from a mere anti-discrimination shield to a powerful weapon against "manifest arbitrariness". (15 Marks, 250 Words)'
    ],
    revisionTips: 'Remember: Negative concept = British = No privilege; Positive concept = US = Likes treated alike.',
    source: 'Ministry of Law and Justice, Legislative Department, Constitution of India (Official Text)'
  },
  {
    articleNumber: '19',
    part: 'Part III: Fundamental Rights',
    subject: 'Protection of certain rights regarding freedom of speech, etc.',
    originalTextExtract: 'All citizens shall have the right (a) to freedom of speech and expression; (b) to assemble peaceably and without arms; (c) to form associations or unions; (d) to move freely throughout the territory of India; (e) to reside and settle in any part of the territory of India; and (g) to practise any profession, or to carry on any occupation, trade or business.',
    simpleExplanation: 'Guarantees six basic democratic freedoms to Indian citizens only, subject to reasonable restrictions under clauses (2) to (6).',
    constitutionalContext: 'Forms the core of civil liberties in a democratic republic. It is available only to citizens and not to foreigners or juristic persons like companies.',
    relatedArticles: ['14', '21', '32', '358', '359'],
    importantAmendments: [
      '1st Constitutional Amendment Act 1951: Added "public order", "friendly relations with foreign states", and "incitement to an offence" as grounds for restriction in 19(2).',
      '44th Amendment Act 1978: Omitted right to acquire, hold and dispose of property [Art 19(1)(f)].',
      '97th Amendment Act 2011: Added "co-operative societies" to Art 19(1)(c) [partially read down in Union of India v. Rajendra N Shah 2021 for state cooperatives].'
    ],
    landmarkCases: [
      'Romesh Thappar v. State of Madras (1950) - Freedom of speech includes freedom of propagation of ideas, freedom of circulation.',
      'Shreya Singhal v. Union of India (2015) - Struck down Section 66A of IT Act for violating Art 19(1)(a).',
      'Kaushal Kishor v. State of Uttar Pradesh (2023) - Fundamental rights under Art 19 and 21 can be enforced horizontally against private individuals/entities.',
      'Anuradha Bhasin v. Union of India (2020) - Freedom of speech and trade over the internet is constitutionally protected under Art 19(1)(a) and 19(1)(g).'
    ],
    currentRelevance: 'Internet shutdowns, IT Rules 2021 (Fact Check Units), regulation of OTT platforms, and hate speech discourse.',
    pyqs: [
      'UPSC CSE 2020: Discuss the constitutional validity and scope of restrictions on internet shutdowns under Art 19 and 21.',
      'UPPSC Mains 2022: Examine reasonable restrictions under Article 19(2).'
    ],
    prelimsFacts: [
      'Available ONLY to citizens (not foreigners or legal entities).',
      'Suspension during emergency: Under Art 358, Art 19 is automatically suspended only during National Emergency declared on grounds of War or External Aggression (not Armed Rebellion).',
      'Restrictions in 19(2) are exhaustive: sovereignty and integrity of India, security of the State, friendly relations with foreign States, public order, decency or morality, contempt of court, defamation, or incitement to an offence.'
    ],
    mainsQuestions: [
      'Digital freedom is the modern manifestation of Article 19(1)(a). In light of recent judicial pronouncements, critically analyze the balance between national security and digital free speech. (15 Marks, 250 Words)'
    ],
    revisionTips: 'Trick to remember: 6 freedoms - Speech, Assembly, Association, Movement, Residence, Profession (SAAMRP). Property was deleted by 44th CAA.',
    source: 'Supreme Court of India Case Repository & Legislative Dept'
  },
  {
    articleNumber: '21',
    part: 'Part III: Fundamental Rights',
    subject: 'Protection of life and personal liberty',
    originalTextExtract: 'No person shall be deprived of his life or personal liberty except according to procedure established by law.',
    simpleExplanation: 'Prohibits arbitrary deprivation of life and personal freedom. Expanded by judicial interpretation from "procedure established by law" to incorporate "due process of law" (fair, just and reasonable).',
    constitutionalContext: 'The most expansive fundamental right in the Indian Constitution. It cannot be suspended even during a National Emergency under Article 359 (post-44th CAA 1978).',
    relatedArticles: ['14', '19', '20', '21A', '22', '32', '359'],
    importantAmendments: [
      '44th Amendment Act 1978: Ensured Articles 20 and 21 cannot be suspended during an Emergency under Art 359.',
      '86th Amendment Act 2002: Inserted Article 21A (Right to Education as a fundamental right).'
    ],
    landmarkCases: [
      'A.K. Gopalan v. State of Madras (1950) - Narrow view: literal interpretation of "procedure established by law".',
      'Maneka Gandhi v. Union of India (1978) - Paradigm shift: procedure must be "just, fair and reasonable" incorporating Due Process.',
      'Francis Coralie Mullin (1981) - Right to live with human dignity.',
      'K.S. Puttaswamy v. Union of India (2017) - 9-judge bench unanimously held Right to Privacy is an intrinsic part of Art 21.',
      'Common Cause v. Union of India (2018) - Right to die with dignity (passive euthanasia and living wills).',
      'MK Ranjitsinh v. UOI (2024) - Recognised right to be free from adverse impacts of climate change under Art 21.'
    ],
    currentRelevance: 'Digital Personal Data Protection Act 2023 compliance, climate litigation, bail jurisprudence ("bail is the rule, jail is exception"), and capital punishment guidelines.',
    pyqs: [
      'UPSC CSE Prelims 2021: "A legislation which confers on the executive or administrative authority an unguided and uncontrolled discretionary power in the matter of application of law violates which Article?" (Answer: Article 14 / 21).',
      'UPSC CSE Prelims 2018: "Right to Privacy is protected as an intrinsic part of Right to Life and Personal Liberty under which Article?" (Answer: Article 21).'
    ],
    prelimsFacts: [
      'Applies to both citizens and foreigners.',
      'Cannot be suspended during National Emergency under any circumstances (Article 359 as amended by 44th CAA 1978).',
      'Encompasses un-enumerated rights: privacy, clean environment, speedy trial, free legal aid, shelter, livelihood, health, travel abroad.'
    ],
    mainsQuestions: [
      'Trace the judicial evolution of Article 21 from A.K. Gopalan to K.S. Puttaswamy and M.K. Ranjitsinh. Has judicial activism supplanted legislative authority? (15 Marks, 250 Words)'
    ],
    revisionTips: 'Mnemonic: Gopalan (Narrow) -> Maneka (Broad Due Process) -> Puttaswamy (Privacy) -> Ranjitsinh (Climate).',
    source: 'Supreme Court of India Judgments Information System'
  },
  {
    articleNumber: '32',
    part: 'Part III: Fundamental Rights',
    subject: 'Remedies for enforcement of rights conferred by this Part (Constitutional Remedies)',
    originalTextExtract: 'The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by this Part is guaranteed.',
    simpleExplanation: 'Empowers citizens to directly approach the Supreme Court when Fundamental Rights are infringed. SC can issue writs: Habeas Corpus, Mandamus, Prohibition, Quo-Warranto, and Certiorari.',
    constitutionalContext: 'Dr. B.R. Ambedkar famously called Article 32 the "Heart and Soul of the Constitution". Unlike Article 226, Article 32 is itself a Fundamental Right.',
    relatedArticles: ['13', '136', '142', '226'],
    importantAmendments: ['Part of the Basic Structure (L. Chandra Kumar case 1997)'],
    landmarkCases: [
      'Fertilizer Corporation Kamgar Union (1981) - Expansion of Locus Standi leading to Public Interest Litigation (PIL).',
      'Bandhua Mukti Morcha v. Union of India (1984) - Letters and postcards treated as writ petitions (epistolary jurisdiction).',
      'L. Chandra Kumar v. Union of India (1997) - Writ jurisdiction under Art 32 and 226 is an integral part of the basic structure; tribunals cannot exclude it.'
    ],
    currentRelevance: 'Debate on whether litigants should exhaust High Court remedies under Art 226 first before knocking on SC doors under Art 32.',
    pyqs: [
      'UPSC CSE Prelims 2022: Writ jurisdiction comparison between SC (Art 32) and HC (Art 226).',
      'UPPSC Mains 2021: Role of writs in safeguarding fundamental freedoms.'
    ],
    prelimsFacts: [
      'Article 32 is a Fundamental Right itself; Article 226 is a constitutional right (not in Part III).',
      'Territorial jurisdiction of SC under Art 32 is nationwide; HC under Art 226 is state/cause of action.',
      'Art 32 can be invoked ONLY for Fundamental Rights; Art 226 can be invoked for Fundamental Rights and "any other legal right" (wider substantive scope).'
    ],
    mainsQuestions: [
      '"Article 32 gives meaning and life to all other Fundamental Rights." Critically examine this statement in light of recent tendencies of the Supreme Court to encourage petitioners to approach High Courts first. (10 Marks, 150 Words)'
    ],
    revisionTips: 'Writs: Habeas Corpus (Produce body), Mandamus (We command), Prohibition (Stop lower court), Certiorari (Quash order), Quo Warranto (By what warrant/authority).',
    source: 'Constituent Assembly Debates (Vol. VII) & Supreme Court Record'
  },
  {
    articleNumber: '44',
    part: 'Part IV: Directive Principles of State Policy',
    subject: 'Uniform Civil Code for the citizens',
    originalTextExtract: 'The State shall endeavour to secure for the citizens a Uniform Civil Code throughout the territory of India.',
    simpleExplanation: 'Directs the State to formulate a single common set of civil laws governing personal matters such as marriage, divorce, inheritance, adoption, and maintenance for all citizens irrespective of religion.',
    constitutionalContext: 'Non-justiciable directive under Article 37. Balances religious freedom (Articles 25-28) with gender justice and national integration.',
    relatedArticles: ['14', '15', '25', '26', '37', '39A'],
    importantAmendments: ['State of Uttarakhand passed the Uniform Civil Code Act in 2024 (Presidential assent granted).'],
    landmarkCases: [
      'Shah Bano case (1985) - SC lamented that Art 44 remained a dead letter; urged UCC formulation.',
      'Sarla Mudgal v. Union of India (1995) - Conversion to Islam solely for polygamy declared illegal; reiterated need for UCC.',
      'Shayara Bano (2017) - Triple Talaq struck down; highlighted constitutional morality over discriminatory personal laws.'
    ],
    currentRelevance: 'Uttarakhand UCC Act 2024 implementation, Law Commission of India 22nd Consultation Paper, 21st Law Commission Report (2018) stating UCC is "neither necessary nor desirable at this stage".',
    pyqs: [
      'UPSC CSE Mains 2015: "Discuss the possible factors that inhibit India from enacting for its citizens a uniform civil code as provided for in the Directive Principles of State Policy."',
      'UPPSC Mains 2023: Role of UCC in gender justice.'
    ],
    prelimsFacts: [
      'Goa was the only state with a Portuguese Civil Code 1867; Uttarakhand became the first state in independent India to pass a state UCC (2024).',
      'DPSP is non-justiciable (Art 37) but fundamental in the governance of the country.'
    ],
    mainsQuestions: [
      'Is the enactment of a Uniform Civil Code compatible with India’s rich socio-religious pluralism? Analyze the key challenges and suggest a pragmatic roadmap for reform. (15 Marks, 250 Words)'
    ],
    revisionTips: 'Key contrast: 21st Law Commission (2018) vs Uttarakhand UCC (2024) vs Law Commission 22nd consultations.',
    source: 'Law Commission of India Reports & Legislative Assembly of Uttarakhand'
  },
  {
    articleNumber: '74',
    part: 'Part V: The Union (Chapter I: The Executive)',
    subject: 'Council of Ministers to aid and advise President',
    originalTextExtract: 'There shall be a Council of Ministers with the Prime Minister at the head to aid and advise the President who shall, in the exercise of his functions, act in accordance with such advice.',
    simpleExplanation: 'Establishes the parliamentary form of executive in India. The President is the nominal (de jure) constitutional head, while the Prime Minister and Council of Ministers constitute the real (de facto) executive.',
    constitutionalContext: 'Reflects British Westminister conventions codified into written constitutional text.',
    relatedArticles: ['53', '75', '77', '78', '163'],
    importantAmendments: [
      '42nd Amendment Act 1976: Made the advice of the Council of Ministers explicitly binding on the President.',
      '44th Amendment Act 1978: Added a proviso enabling the President to require the Council of Ministers to reconsider advice once; however, the reconsidered advice is binding.'
    ],
    landmarkCases: [
      'Ram Jawaya Kapur v. State of Punjab (1955) - President is formal executive head; real powers lie in the Cabinet.',
      'Shamsher Singh v. State of Punjab (1974) - 7-judge bench: President and Governors must exercise powers with aid and advice of Ministers except in well-defined discretion.'
    ],
    currentRelevance: 'Scope of presidential and gubernatorial discretion; timing of assent to legislative bills.',
    pyqs: [
      'UPSC CSE Prelims 2020: Position of the Prime Minister and aid & advice to the President.',
      'UPPSC Prelims 2021: Article 74 amendment history.'
    ],
    prelimsFacts: [
      'Article 74(2) bars courts from inquiring into what advice was tendered by Ministers to the President (advice is non-justiciable, though factual material behind it is reviewable - S.R. Bommai).',
      'The PM is appointed by the President, other ministers appointed by President on PM advice (Art 75(1)).'
    ],
    mainsQuestions: [
      '"The Indian President is neither a rubber stamp nor a monarch, but an institution that acts as the constitutional conscience keeper." Discuss in light of Articles 74, 78, and constitutional conventions. (10 Marks, 150 Words)'
    ],
    revisionTips: 'Formula: 42nd CAA = Advice Binding; 44th CAA = Can return ONCE for reconsideration, then binding.',
    source: 'Parliamentary Debates & Supreme Court Constitution Bench Rulings'
  },
  {
    articleNumber: '124',
    part: 'Part V: The Union (Chapter IV: The Union Judiciary)',
    subject: 'Establishment and constitution of the Supreme Court',
    originalTextExtract: 'There shall be a Supreme Court of India consisting of a Chief Justice of India and, until Parliament by law prescribes a larger number, of not more than thirty-four other Judges.',
    simpleExplanation: 'Establishes the Supreme Court of India, judicial qualifications, appointment procedure, tenure, and removal by impeachment.',
    constitutionalContext: 'Anchor for judicial independence in the Indian democratic architecture.',
    relatedArticles: ['124A', '124B', '124C (declared unconstitutional)', '125', '126', '127', '128', '129', '142', '217'],
    importantAmendments: [
      '99th Constitutional Amendment Act 2014 & NJAC Act: Struck down by 5-judge bench in Supreme Court Advocates-on-Record Association (2015) as violating judicial independence / basic structure.',
      'Supreme Court (Number of Judges) Amendment Act 2019: Increased sanctioned judge strength to 34 (33 + CJI).'
    ],
    landmarkCases: [
      'First Judges Case (S.P. Gupta, 1981) - "Consultation" does not mean "concurrence"; executive primacy.',
      'Second Judges Case (SCAORA, 1993) - "Consultation" means "concurrence"; Collegium system created (CJI + 2 senior judges).',
      'Third Judges Case (Special Reference 1 of 1998) - Collegium expanded to CJI + 4 senior-most judges of the SC.',
      'Fourth Judges Case (NJAC, 2015) - Struck down NJAC Act and 99th CAA; revived Collegium system.'
    ],
    currentRelevance: 'Memorandum of Procedure (MoP) revision, judicial vacancies, pendency of 5 crore cases across courts, all-India judicial service proposal.',
    pyqs: [
      'UPSC CSE Mains 2019: "Critically examine the Supreme Court’s verdict on National Judicial Appointments Commission (NJAC) in terms of ensuring judicial independence."',
      'UPSC CSE Prelims 2019: Appointment and tenure of SC judges.'
    ],
    prelimsFacts: [
      'Sanctioned strength: 34 (33 judges + Chief Justice of India).',
      'Retirement age: 65 years for Supreme Court; 62 years for High Court.',
      'Qualifications: Citizen of India + High Court judge for 5 years OR High Court advocate for 10 years OR distinguished jurist in the opinion of the President.',
      'Removal: By presidential order after address supported by special majority in each House of Parliament in the same session, on grounds of "proved misbehaviour or incapacity" (Judges Enquiry Act 1968).'
    ],
    mainsQuestions: [
      'Evaluate the functioning of the Collegium system in India. What institutional safeguards are needed to balance judicial independence with transparency and accountability? (15 Marks, 250 Words)'
    ],
    revisionTips: 'Judges Cases Timeline: 1981 (Executive) -> 1993 (Collegium 1+2) -> 1998 (Collegium 1+4) -> 2015 (NJAC struck down).',
    source: 'Supreme Court Advocates-on-Record Association (1993, 2015)'
  },
  {
    articleNumber: '246',
    part: 'Part XI: Relations Between the Union and the States',
    subject: 'Subject-matter of laws made by Parliament and by the Legislatures of States (Seventh Schedule Lists)',
    originalTextExtract: 'Parliament has exclusive power to make laws with respect to any of the matters enumerated in List I (Union List). State Legislature has exclusive power for List II (State List). Both have power for List III (Concurrent List).',
    simpleExplanation: 'Demarcates the legislative powers between the Union and the States across the Seventh Schedule (Union List: 100 items, State List: 61 items, Concurrent List: 52 items).',
    constitutionalContext: 'Forms the statutory foundation of legislative federalism in India.',
    relatedArticles: ['245', '248', '249', '250', '252', '254', '279A'],
    importantAmendments: [
      '42nd Amendment Act 1976: Transferred 5 subjects from State List to Concurrent List: Education, Forests, Weights and Measures, Protection of wild animals and birds, and Administration of justice.',
      '101st Amendment Act 2016: Inserted Article 246A conferring simultaneous power on Parliament and State Legislatures to make laws with respect to Goods and Services Tax (GST).'
    ],
    landmarkCases: [
      'Prafulla Kumar Mukherjee v. Bank of Commerce, Khulna (1947) - Doctrine of Pith and Substance.',
      'State of Rajasthan v. G. Chawla (1959) - Substantial character of enactment determines legislative competence.',
      'Union of India v. Mohit Minerals (2022) - GST Council recommendations are not legally binding on Parliament and State Legislatures; cooperative federalism principle.'
    ],
    currentRelevance: 'Demands for shifting water/agriculture to Concurrent list, state autonomy debates, federal friction over centrally sponsored schemes.',
    pyqs: [
      'UPSC CSE Mains 2022: "Discuss the essential principles of federalism in the light of the 101st Constitutional Amendment Act."',
      'UPPSC Mains 2020: Legislative distribution of powers between Union and States.'
    ],
    prelimsFacts: [
      'Residuary powers: Article 248 vests residuary legislative power in Parliament (unlike US and Australia where residuary powers rest with States).',
      'Doctrine of Pith and Substance: Used to determine whether a law falls within the enacting legislature’s competence despite incidental encroachment on another list.',
      'Doctrine of Colourable Legislation: What cannot be done directly cannot be done indirectly.'
    ],
    mainsQuestions: [
      'Analyze the impact of Article 246A and the Goods and Services Tax regime on the fiscal autonomy of Indian States. Has it eroded cooperative federalism? (15 Marks, 250 Words)'
    ],
    revisionTips: 'Remember: 42nd CAA moved 5 items (Education, Forests, Weights & Measures, Wildlife, Admin of Justice) from State to Concurrent.',
    source: 'Constitution of India, Seventh Schedule & Law Commission'
  },
  {
    articleNumber: '280',
    part: 'Part XII: Finance, Property, Contracts and Suits',
    subject: 'Finance Commission',
    originalTextExtract: 'The President shall, within two years from the commencement of this Constitution and thereafter at the expiration of every fifth year or at such earlier time as the President considers necessary, by order constitute a Finance Commission...',
    simpleExplanation: 'Provides for the constitution of a quasi-judicial Finance Commission every 5 years by the President to recommend vertical and horizontal sharing of net tax proceeds, principles for grants-in-aid, and measures to augment the consolidated funds of States to supplement resources of Panchayats and Municipalities.',
    constitutionalContext: 'Balancing wheel of fiscal federalism in India.',
    relatedArticles: ['268', '269', '270', '275', '281'],
    importantAmendments: [
      '73rd & 74th Amendments 1992: Added sub-clauses (bb) and (c) to Art 280(3) to recommend measures for augmenting state consolidated funds for Panchayats and Municipalities based on State Finance Commission recommendations.'
    ],
    landmarkCases: [],
    currentRelevance: '16th Finance Commission constituted under Dr. Arvind Panagariya (recommendations to cover 2026-2031); 15th FC (N.K. Singh) recommended 41% vertical devolution (adjusted 1% for J&K and Ladakh).',
    pyqs: [
      'UPSC CSE Prelims 2023: Role and composition of the Finance Commission.',
      'UPSC CSE Mains 2021: "How have the recommendations of the 15th Finance Commission impacted local governments and state finances?"'
    ],
    prelimsFacts: [
      'Composition: 1 Chairman + 4 other members appointed by President.',
      'Qualifications determined by Parliament under the Finance Commission Act 1951.',
      'Nature of recommendations: Advisory only; not binding on the Government (though accepted by convention).',
      'Current: 16th Finance Commission chairman is Dr. Arvind Panagariya.'
    ],
    mainsQuestions: [
      'Examine the terms of reference of the 16th Finance Commission. What challenges does it face in reconciling demographic performance with equity in horizontal devolution? (15 Marks, 250 Words)'
    ],
    revisionTips: 'Devolution: Vertical (Centre to States) + Horizontal (Among States based on formula: Income distance, Population 2011, Area, Forest/Ecology, Demographic performance, Tax effort).',
    source: 'Gazette of India Notifications & Ministry of Finance'
  },
  {
    articleNumber: '324',
    part: 'Part XV: Elections',
    subject: 'Superintendence, direction and control of elections to be vested in an Election Commission',
    originalTextExtract: 'The superintendence, direction and control of the preparation of the electoral rolls for, and the conduct of, all elections to Parliament and to the Legislature of every State and of elections to the offices of President and Vice-President held under this Constitution shall be vested in a Commission...',
    simpleExplanation: 'Establishes the Election Commission of India (ECI) as an independent constitutional body responsible for free and fair elections to Parliament, State Legislatures, and the offices of President and Vice-President.',
    constitutionalContext: 'Guarantor of electoral democracy and constitutional level playing field.',
    relatedArticles: ['325', '326', '327', '328', '329'],
    importantAmendments: [
      'Chief Election Commissioner and other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act 2023: Established a statutory selection committee (PM, Union Cabinet Minister, Leader of Opposition/single largest party).'
    ],
    landmarkCases: [
      'Mohinder Singh Gill v. CEC (1978) - Article 324 is a reservoir of plenary administrative and quasi-legislative powers where enacted law is silent.',
      'T.N. Seshan v. Union of India (1995) - Upheld multi-member commission; CEC and other ECs have equal status and decisions taken by majority.',
      'Anoop Baranwal v. Union of India (2023) - 5-judge bench ordered appointment committee consisting of PM, CJI, and Leader of Opposition until Parliament enacted law.'
    ],
    currentRelevance: 'Implementation of the 2023 Act replacing CJI with a Cabinet Minister in selection panel; One Nation One Election (Kovind Committee report); EVM-VVPAT verification (Association for Democratic Reforms v. ECI 2024).',
    pyqs: [
      'UPSC CSE Mains 2020: "In the light of recent controversy regarding the use of Electronic Voting Machines (EVM), what are the challenges before the Election Commission of India to ensure the trustworthiness of elections in India?"',
      'UPPSC Prelims 2022: Article 324 powers and removal mechanism.'
    ],
    prelimsFacts: [
      'Conducts elections to: Parliament, State Legislatures, President, and Vice President. DOES NOT conduct Panchayat and Municipality elections (conducted by State Election Commissions under Art 243K & 243ZA).',
      'CEC has removal protection equivalent to an SC Judge (proven misbehaviour/incapacity via parliamentary address); other ECs can be removed by the President ONLY on the recommendation of the CEC.',
      'Article 326 guarantees Adult Suffrage (age reduced from 21 to 18 by 61st CAA 1988).'
    ],
    mainsQuestions: [
      'Analyze the evolution of the appointment process of the Election Commission of India from executive discretion to judicial intervention and subsequent legislative enactment in 2023. Does the present mechanism ensure institutional independence? (15 Marks, 250 Words)'
    ],
    revisionTips: 'Key distinction: ECI = Union + State Legislatures + President/VP. SEC = Panchayats + Municipalities.',
    source: 'Election Commission of India & Supreme Court of India'
  },
  {
    articleNumber: '356',
    part: 'Part XVIII: Emergency Provisions',
    subject: 'Provisions in case of failure of constitutional machinery in States (President’s Rule)',
    originalTextExtract: 'If the President, on receipt of report from the Governor of a State or otherwise, is satisfied that a situation has arisen in which the government of the State cannot be carried on in accordance with the provisions of this Constitution, the President may by Proclamation assume to himself all or any of the functions...',
    simpleExplanation: 'Empowers the Union government to impose President’s Rule in a State if constitutional machinery fails or if the State fails to comply with Union directives (under Art 365).',
    constitutionalContext: 'Most controversial federal provision. Dr. Ambedkar anticipated it would remain a "dead letter", but it was frequently invoked until judicial curtailment.',
    relatedArticles: ['256', '257', '352', '355', '357', '365'],
    importantAmendments: [
      '44th Amendment Act 1978: Restricted extension of President’s Rule beyond one year unless a National Emergency is in operation AND the Election Commission certifies that general elections are difficult to hold.'
    ],
    landmarkCases: [
      'State of Rajasthan v. Union of India (1977) - Proclamation under Art 356 held subject to limited judicial review.',
      'S.R. Bommai v. Union of India (1994) - Landmark 9-judge bench: Proclamation is subject to judicial review; satisfaction of President based on relevant material; State Assembly cannot be dissolved until parliamentary approval is obtained; secularism is part of basic structure; floor test is the only constitutional way to test majority.'
    ],
    currentRelevance: 'Gubernatorial discretion, Article 355 duties of the Union, floor test mandates, and federal tensions in opposition-ruled states.',
    pyqs: [
      'UPSC CSE Mains 2018: "Whether the Supreme Court Judgment (July 2018) can settle the political tussle between the Lt. Governor and elected government of Delhi?"',
      'UPPSC Mains 2021: Discuss the constitutional safeguards introduced by the S.R. Bommai judgment against misuse of Article 356.'
    ],
    prelimsFacts: [
      'Approval timeline: Must be approved by both Houses of Parliament within TWO months by simple majority (unlike Art 352 which requires special majority within 1 month).',
      'Maximum duration: 3 years (maximum 6 months at a time; after 1 year, requires Art 352 in force + ECI certification).',
      'Governor report is NOT mandatory ("or otherwise" allows President to act suo motu).',
      'Article 365: Non-compliance with lawful Union directives also triggers Art 356.'
    ],
    mainsQuestions: [
      '"The S.R. Bommai verdict transformed Article 356 from a political weapon into a rare constitutional exception." Critically evaluate this assertion with contemporary examples. (10 Marks, 150 Words)'
    ],
    revisionTips: 'Comparison: Art 352 approval = 1 month (special majority); Art 356 approval = 2 months (simple majority). Assembly kept in suspended animation until approved.',
    source: 'S.R. Bommai v. Union of India (1994) 3 SCC 1'
  },
  {
    articleNumber: '368',
    part: 'Part XX: Amendment of the Constitution',
    subject: 'Power of Parliament to amend the Constitution and procedure therefor',
    originalTextExtract: 'Parliament may in exercise of its constituent power amend by way of addition, variation or repeal any provision of this Constitution in accordance with the procedure laid down in this article.',
    simpleExplanation: 'Lays down the procedure and constituent powers of Parliament to amend the Constitution. Establishes a blend of rigidity (special majority + state ratification for federal provisions) and flexibility (simple majority amendments outside Art 368).',
    constitutionalContext: 'Locus of constitutional evolution and the genesis of the Basic Structure Doctrine.',
    relatedArticles: ['13', '245', '368(4)', '368(5) (struck down in Minerva Mills)'],
    importantAmendments: [
      '24th Amendment Act 1971: Affirmed Parliament’s power to amend any part of the Constitution including Part III; made Presidential assent mandatory.',
      '42nd Amendment Act 1976: Added clauses (4) and (5) stating amendments cannot be questioned in any court and no limitation exists on Parliament’s constituent power (struck down in Minerva Mills 1980).'
    ],
    landmarkCases: [
      'Shankari Prasad v. Union of India (1951) - Constitutional amendment under Art 368 is not "law" under Art 13; Parliament can amend FRs.',
      'Sajjan Singh v. State of Rajasthan (1965) - Reiterated Shankari Prasad.',
      'I.C. Golaknath v. State of Punjab (1967) - 11-judge bench held Fundamental Rights are transcendental; cannot be amended under Art 368.',
      'Kesavananda Bharati v. State of Kerala (1973) - 13-judge bench: Parliament can amend any part including FRs, but CANNOT alter or destroy the Basic Structure of the Constitution.',
      'Minerva Mills v. Union of India (1980) - Struck down Art 368(4) & (5); held limited amending power is itself a basic feature.'
    ],
    currentRelevance: 'Scope of judicial review on amendments, constitutional morality, and federal ratification thresholds.',
    pyqs: [
      'UPSC CSE Mains 2020: "The doctrine of basic structure has saved Indian democracy from majoritarian overreach." Comment.',
      'UPSC CSE Prelims 2019: Can a joint sitting of Parliament be called for a Constitutional Amendment Bill? (Answer: No).'
    ],
    prelimsFacts: [
      'Types of majorities: (1) Simple majority (outside Art 368, e.g., Art 2, 3), (2) Special majority under Art 368 (majority of total membership + 2/3rd present and voting), (3) Special majority + ratification by half of state legislatures by simple majority.',
      'Can be introduced in EITHER House of Parliament; CANNOT be introduced in State Legislatures.',
      'NO provision for Joint Sitting under Article 108 for Constitutional Amendment Bills.',
      'President MUST give assent; cannot withhold or return for reconsideration (24th CAA 1971).'
    ],
    mainsQuestions: [
      'Analyze how the interplay between Article 13 and Article 368 led to the judicial innovation of the Basic Structure doctrine. How does this doctrine maintain constitutional supremacy over parliamentary sovereignty? (15 Marks, 250 Words)'
    ],
    revisionTips: 'Key Rule: No joint sitting, no prior recommendation of President needed, mandatory presidential assent.',
    source: 'Constituent Assembly Debates & Kesavananda Bharati (1973)'
  }
];
