import { RegionalGrouping, GlobalInstitution } from '../../types';

export interface GlobalDynamicIssue {
  id: string;
  title: string;
  category: 'Geopolitics' | 'Geo-economics' | 'Multilateral Reform' | 'Security & Conflict';
  backgroundAndContext: string;
  impactOnIndia: string[];
  indiaResponseAndStrategy: string[];
  keyDataOrPrecedent: string;
}

export interface DiasporaPolicyItem {
  id: string;
  pillar: string;
  details: string;
  initiatives: string[];
  challengesAndDebates: string[];
  officialSource: string;
}

export const REGIONAL_GROUPINGS: RegionalGrouping[] = [
  {
    id: 'grp-quad',
    name: 'Quadrilateral Security Dialogue',
    acronym: 'QUAD',
    originYear: 2007,
    headquarters: 'No permanent secretariat (Diplomatic consultative network)',
    memberCountries: ['India', 'United States', 'Japan', 'Australia'],
    purpose: 'Upholding a Free, Open, Inclusive, and Rules-based Indo-Pacific; maritime domain awareness, humanitarian assistance, cyber security, vaccine diplomacy, and critical tech supply chains.',
    structure: 'Annual Leader Summits, Foreign Ministers’ Meetings, Sherpa track, and working groups on Climate, Space, Critical Technologies, and Maritime Security.',
    indiaRole: 'Foundational anchor and only non-treaty-allied nation in Quad; advocates that Quad is not an "Asian NATO" but a constructive diplomatic coalition for public goods.',
    indiaInterests: [
      'Counterbalancing coercive unilateralism in the Indian Ocean and South China Sea.',
      'Securing semiconductor and critical mineral supply chains.',
      'Indo-Pacific Maritime Domain Awareness (IPMDA) satellite tracking for illegal and unregulated fishing.'
    ],
    recentDevelopments: 'Quad Leaders’ Summit in Wilmington, Delaware (2024): Launched Quad Cancer Moonshot, Maritime Initiative for Training in the Indo-Pacific (MAITRI), and Coast Guard interoperability operations.',
    challenges: [
      'China’s persistent depiction of Quad as an exclusive anti-China containment bloc.',
      'India’s strategic autonomy and divergence on European security conflicts.',
      'Maintaining balance between military deterrence and civilian public goods delivery.'
    ],
    futureRelevance: 'Pivotal plurilateral pillar of the Indo-Pacific regional architecture bridging the Indian and Pacific Oceans.',
    officialSource: 'MEA, Joint Statement of Quad Leaders’ Summit 2024'
  },
  {
    id: 'grp-brics',
    name: 'BRICS (Brazil, Russia, India, China, South Africa + Expanded Members)',
    acronym: 'BRICS+',
    originYear: 2009,
    headquarters: 'New Development Bank (NDB) headquartered in Shanghai, China',
    memberCountries: ['Brazil', 'Russia', 'India', 'China', 'South Africa', 'Egypt', 'Ethiopia', 'Iran', 'Saudi Arabia', 'UAE'],
    purpose: 'Voice of the Global South; advocating reform of the post-WWII multilateral financial and political architecture (UNSC, IMF, World Bank quota reforms).',
    structure: 'Annual Summits rotated among member nations, Ministerial Councils, New Development Bank (NDB), and Contingent Reserve Arrangement (CRA).',
    indiaRole: 'Founding member; champions fair representation for developing countries while preventing the grouping from becoming an overtly anti-Western platform.',
    indiaInterests: [
      'Reforming Bretton Woods institutions and global governance.',
      'Diversifying trade payment mechanisms and local currency settlements.',
      'Infrastructure financing through the New Development Bank without onerous political conditions.'
    ],
    recentDevelopments: 'Kazan Summit 2024 in Russia: Consolidated BRICS expansion (BRICS+), partner country category, and discussion on cross-border payment platforms (BRICS Bridge).',
    challenges: [
      'Internal ideological divergence and Sino-Indian strategic friction.',
      'Risk of grouping being perceived as an anti-Western axis led by China and Russia.'
    ],
    futureRelevance: 'Represents nearly 45% of world population and over 35% of global GDP in PPP terms.',
    officialSource: 'Kazan Declaration, 16th BRICS Summit 2024'
  },
  {
    id: 'grp-bimstec',
    name: 'Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation',
    acronym: 'BIMSTEC',
    originYear: 1997,
    headquarters: 'Dhaka, Bangladesh',
    memberCountries: ['Bangladesh', 'Bhutan', 'India', 'Myanmar', 'Nepal', 'Sri Lanka', 'Thailand'],
    purpose: 'Fostering regional socio-economic cooperation among littoral and adjacent states of the Bay of Bengal bridging South Asia and Southeast Asia.',
    structure: 'BIMSTEC Charter (entered into force in May 2024), Summits, Ministerial Meetings, Permanent Secretariat in Dhaka.',
    indiaRole: 'Lead country for the Security Sector (Counter-Terrorism, Transnational Crime, Disaster Management, Energy). India funds the major operational costs of the Secretariat.',
    indiaInterests: [
      'Natural alternative to stalled SAARC; key vehicle for Neighborhood First and Act East policies.',
      'Integration of India\'s landlocked North-Eastern Region with Bay of Bengal maritime lanes.',
      'Sub-regional energy grid interconnection and master plan for transport connectivity.'
    ],
    recentDevelopments: 'BIMSTEC Charter formally came into force on May 20, 2024, endowing it with legal personality and formal rules of procedure.',
    challenges: [
      'Resource and financial constraints of member states.',
      'Civil war in Myanmar disrupting physical highway corridors.',
      'Slow progress on the proposed BIMSTEC Free Trade Agreement (FTA).'
    ],
    futureRelevance: 'Crucial bridge connecting South Asia with ASEAN; economic nexus for 1.8 billion people.',
    officialSource: 'BIMSTEC Secretariat & MEA India'
  },
  {
    id: 'grp-saarc',
    name: 'South Asian Association for Regional Cooperation',
    acronym: 'SAARC',
    originYear: 1985,
    headquarters: 'Kathmandu, Nepal',
    memberCountries: ['Afghanistan', 'Bangladesh', 'Bhutan', 'India', 'Maldives', 'Nepal', 'Pakistan', 'Sri Lanka'],
    purpose: 'Promote welfare of the peoples of South Asia, accelerate economic growth, social progress, and cultural development.',
    structure: 'Summits, Council of Ministers, Standing Committee of Foreign Secretaries, SAARC Specialized Bodies (South Asian University New Delhi, SAARC Development Fund).',
    indiaRole: 'Largest member representing over 70% of region\'s landmass, population, and GDP. Provided South Asia Satellite (GSAT-9) for regional use.',
    indiaInterests: [
      'Regional economic integration and disaster relief.',
      'Zero tolerance against terrorism as a non-negotiable precondition for regional cooperation.'
    ],
    recentDevelopments: '19th SAARC Summit scheduled for Islamabad in 2016 was cancelled following the Uri terror attack; summits have remained suspended ever since.',
    challenges: [
      'Structural stalemate caused by Pakistan\'s sponsorship of cross-border terrorism and vetoing of regional connectivity pacts (e.g. SAARC Motor Vehicles Agreement).',
      'Article X of Charter bars discussion on contentious bilateral issues.',
      'South Asia remains one of the least economically integrated regions in the world (intra-regional trade < 5%).'
    ],
    futureRelevance: 'Functionally dormant; India has pivoted towards BIMSTEC, BBIN, and bilateral partnerships for regional integration.',
    officialSource: 'SAARC Secretariat, Kathmandu'
  },
  {
    id: 'grp-bbin',
    name: 'Bangladesh, Bhutan, India, Nepal Sub-regional Initiative',
    acronym: 'BBIN',
    originYear: 2015,
    headquarters: 'Sub-regional project-driven framework (No permanent secretariat)',
    memberCountries: ['Bangladesh', 'Bhutan', 'India', 'Nepal'],
    purpose: 'Sub-regional connectivity, seamless vehicular movement, water resource management, and cross-border power trade.',
    structure: 'Transport and Power Secretaries working group meetings.',
    indiaRole: 'Lead proponent; providing funding and customs infrastructure (Integrated Check Posts ICPs).',
    indiaInterests: [
      'Overcoming SAARC consensus deadlock through flexible "coalitions of the willing".',
      'Operationalizing BBIN Motor Vehicles Agreement (MVA) for seamless cargo transit.',
      'Sub-regional trilateral power grid linking Nepal, Bhutan, India, and Bangladesh.'
    ],
    recentDevelopments: 'First trilateral cross-border electricity transaction: Nepal exporting 40 MW of hydroelectricity to Bangladesh via the Indian transmission network in late 2024.',
    challenges: [
      'Bhutan Parliament opted out of ratifying the BBIN MVA in 2017 citing environmental and vehicular congestion concerns (permitted the other three to implement it).',
      'Harmonization of customs documentation, electronic cargo tracking, and insurance regimes.'
    ],
    futureRelevance: 'Blueprint for sub-regional economic corridors in Eastern South Asia.',
    officialSource: 'Ministry of External Affairs, Government of India & BBIN Working Group'
  },
  {
    id: 'grp-sco',
    name: 'Shanghai Cooperation Organisation',
    acronym: 'SCO',
    originYear: 2001,
    headquarters: 'Beijing, China (RATS Executive Committee in Tashkent, Uzbekistan)',
    memberCountries: ['China', 'Russia', 'Kazakhstan', 'Kyrgyzstan', 'Tajikistan', 'Uzbekistan', 'India', 'Pakistan', 'Iran', 'Belarus'],
    purpose: 'Regional security, counter-terrorism, border stability, economic cooperation, and Eurasian geopolitical dialogue.',
    structure: 'Heads of State Council (HSC), Heads of Government Council (HGC), Regional Anti-Terrorist Structure (RATS Tashkent).',
    indiaRole: 'Full member since 2017 (along with Pakistan). Chaired SCO Summit virtually in 2023 ("SECURE SCO" vision).',
    indiaInterests: [
      'Deepening engagement with Central Asian Republics ("Extended Neighborhood").',
      'Intelligence sharing on terrorism, separatism, and extremism via RATS Tashkent.',
      'Promoting International North-South Transport Corridor (INSTC) and Chabahar port connectivity.'
    ],
    recentDevelopments: 'Iran joined in 2023, Belarus in 2024. External Affairs Minister S. Jaishankar represented India at the 23rd SCO Heads of Government meeting in Islamabad in October 2024.',
    challenges: [
      'Dominated by China and Russia; used by Beijing to legitimize Belt and Road Initiative (India routinely dissociates from BRI endorsement clauses in SCO declarations).',
      'Pakistani bilateral posturing on Kashmir and terrorism.'
    ],
    futureRelevance: 'Primary Eurasian continental dialogue platform preventing India from being shut out of Central Asian geopolitics.',
    officialSource: 'SCO Secretariat & MEA India'
  },
  {
    id: 'grp-asean',
    name: 'Association of Southeast Asian Nations',
    acronym: 'ASEAN',
    originYear: 1967,
    headquarters: 'Jakarta, Indonesia',
    memberCountries: ['Indonesia', 'Malaysia', 'Philippines', 'Singapore', 'Thailand', 'Brunei', 'Vietnam', 'Laos', 'Myanmar', 'Cambodia'],
    purpose: 'Accelerate economic growth, social progress, cultural development, and regional peace and stability in Southeast Asia.',
    structure: 'ASEAN Summit, ASEAN Coordinating Council, East Asia Summit (EAS), ASEAN Regional Forum (ARF), ADMM-Plus.',
    indiaRole: 'Comprehensive Strategic Partner (2022). Annual ASEAN-India Summits. India views ASEAN Centrality as the foundational core of its Indo-Pacific Oceans Initiative (IPOI).',
    indiaInterests: [
      'Pillar of India\'s Act East Policy; bilateral trade exceeds $130 billion.',
      'Maritime security, freedom of navigation in the South China Sea in accordance with UNCLOS 1982.',
      'Review of the ASEAN-India Trade in Goods Agreement (AITIGA) to address inverted duty structures and non-tariff barriers.'
    ],
    recentDevelopments: '21st ASEAN-India Summit in Vientiane, Laos (October 2024): Prime Minister Modi announced a 10-point plan for digital public infrastructure, green hydrogen, and cyber security cooperation.',
    challenges: [
      'Growing trade deficit with ASEAN post-AITIGA implementation.',
      'Divergence within ASEAN on Chinese aggressive behavior in the South China Sea.',
      'India\'s exit from RCEP (2019) creating free-trade integration asymmetry.'
    ],
    futureRelevance: 'Indispensable anchor of the Indo-Pacific geopolitical and economic architecture.',
    officialSource: 'ASEAN Secretariat & MEA India'
  },
  {
    id: 'grp-rcep',
    name: 'Regional Comprehensive Economic Partnership',
    acronym: 'RCEP',
    originYear: 2020,
    headquarters: 'Secretariat hosted within ASEAN Secretariat, Jakarta',
    memberCountries: ['10 ASEAN Members', 'China', 'Japan', 'South Korea', 'Australia', 'New Zealand'],
    purpose: 'Create the world\'s largest free trade area covering ~30% of global GDP and population.',
    structure: 'Free trade agreement covering trade in goods, services, investment, economic and technical cooperation, intellectual property, and e-commerce.',
    indiaRole: 'Participated in all 28 rounds of negotiations (2012-2019) but decided NOT to join at the Bangkok Summit in November 2019.',
    indiaInterests: [
      'Protecting vulnerable domestic sectors: Indian dairy farmers (against Australian/New Zealand imports), MSMEs, textile, and steel manufacturers.',
      'Preventing circumvention of Rules of Origin and dumping of cheap Chinese manufactured goods via third countries.',
      'Inadequate market access commitments for Indian services professionals (Mode 4 mobility).'
    ],
    recentDevelopments: 'RCEP entered into force in January 2022 without India; agreement contains a fast-track accession clause should India choose to apply in future.',
    challenges: [
      'Exclusion from the world\'s largest trading bloc risks supply chain bypassing.',
      'However, joining would have severely compounded India\'s trade deficit with China ($100B+) without reciprocal gains.'
    ],
    futureRelevance: 'Exemplifies India\'s pragmatic shift towards calibrated, bilateral trade pacts (UAE, Australia, EFTA) over sweeping multilateral mega-FTAs.',
    officialSource: 'Ministry of Commerce and Industry, Government of India 2019'
  },
  {
    id: 'grp-g20',
    name: 'Group of Twenty',
    acronym: 'G-20',
    originYear: 1999,
    headquarters: 'No permanent secretariat (Troika leadership system)',
    memberCountries: ['19 Sovereign Countries', 'European Union', 'African Union (Inducted permanently in 2023)'],
    purpose: 'Premier forum for international economic cooperation, financial stability, sustainable development, and global macro-economic governance.',
    structure: 'Finance Track (Finance Ministers & Central Bank Governors), Sherpa Track (Working groups on development, anti-corruption, digital economy, environment), and Engagement Groups (B20, C20, W20, Y20).',
    indiaRole: 'Held G20 Presidency from Dec 1, 2022 to Nov 30, 2023 under theme "Vasudhaiva Kutumbakam" (One Earth, One Family, One Future).',
    indiaInterests: [
      'Amplifying Voice of the Global South (held two Voice of Global South Summits).',
      'Securing consensus on multilateral development bank (MDB) reforms (Larry Summers-N.K. Singh Expert Group).',
      'Mainstreaming Digital Public Infrastructure (DPI) and launching Global Biofuels Alliance (GBA).'
    ],
    recentDevelopments: 'New Delhi Leaders’ Declaration adopted with 100% consensus across all 83 paragraphs despite deep Ukraine war geopolitical polarization; permanent induction of African Union (AU).',
    challenges: [
      'Rising protectionism, trade wars, and sovereign debt distress across vulnerable developing nations.',
      'Great-power geopolitical rivalry (US-China-Russia) paralyzing joint communiques.'
    ],
    futureRelevance: 'Remains the most consequential steering committee of the global economy, representing 85% of global GDP and 75% of international trade.',
    officialSource: 'G20 New Delhi Leaders’ Declaration 2023'
  },
  {
    id: 'grp-iora',
    name: 'Indian Ocean Rim Association',
    acronym: 'IORA',
    originYear: 1997,
    headquarters: 'Ebene Cybercity, Mauritius',
    memberCountries: ['23 Member States littoral to the Indian Ocean', '11 Dialogue Partners'],
    purpose: 'Promote sustainable growth and balanced development in the Indian Ocean region; focus on Maritime Safety and Security, Trade and Investment Facilitation, Fisheries Management, Disaster Risk Management, Blue Economy, and Tourism.',
    structure: 'Council of Foreign Ministers (meets annually), Committee of Senior Officials, Working Groups.',
    indiaRole: 'Founding member and primary maritime security provider; established IORA Information Fusion Centre - Indian Ocean Region (IFC-IOR) at Gurugram.',
    indiaInterests: [
      'Net Security Provider in the Indian Ocean under SAGAR doctrine (Security and Growth for All in the Region).',
      'Sustainable harness of the Blue Economy (deep-sea mining, marine biotechnology).',
      'Countering piracy, illicit drug trafficking, and unauthorized naval surveying.'
    ],
    recentDevelopments: 'Adoption of the IORA-ASEAN Outlook on the Indo-Pacific (AOIP) cooperation framework; India assumed the Vice-Chairmanship of IORA for 2023-2025.',
    challenges: [
      'Huge institutional and economic disparities among member states (from Australia and Singapore to Yemen and Somalia).',
      'Chinese naval penetration via dual-use commercial port infrastructure.'
    ],
    futureRelevance: 'Core regional organization governing the world\'s most strategic oceanic space carrying 80% of world\'s seaborne oil trade.',
    officialSource: 'IORA Secretariat, Mauritius'
  },
  {
    id: 'grp-ibsa',
    name: 'India, Brazil, South Africa Dialogue Forum',
    acronym: 'IBSA',
    originYear: 2003,
    headquarters: 'Coordinating mechanism rotated among three nations',
    memberCountries: ['India', 'Brazil', 'South Africa'],
    purpose: 'Promote South-South cooperation, democratic values, and consensus-building among three large, multi-ethnic developing democracies across three continents.',
    structure: 'Summits, Trilateral Ministerial Commission, IBSA Fund for Alleviation of Poverty and Hunger (administered by UN Office for South-South Cooperation UNOSSC).',
    indiaRole: 'Key architect; regular contributor to IBSA Fund providing grant funding for grassroots developmental projects in least developed countries (Haiti, Palestine, Burundi).',
    indiaInterests: [
      'Pure democratic South-South coalition distinct from BRICS (which includes autocracies China and Russia).',
      'Coordinating positions on UNSC permanent membership (G4) and WTO agricultural negotiations.'
    ],
    recentDevelopments: 'IBSA Fund celebrated surpassing $50 million in cumulative project funding across 37 developing nations; Joint naval exercise: IBSAMAR.',
    challenges: [
      'Overshadowed by the higher diplomatic profile and financial heft of expanded BRICS+.',
      'Infrequent summitry at the Head of State level.'
    ],
    futureRelevance: 'Unique trilateral democratic forum for South-South solidarity and public health / pharmaceutical cooperation.',
    officialSource: 'MEA India & UNOSSC'
  },
  {
    id: 'grp-mgc',
    name: 'Mekong-Ganga Cooperation',
    acronym: 'MGC',
    originYear: 2000,
    headquarters: 'No permanent secretariat; annual ministerial meetings on sidelines of ASEAN',
    memberCountries: ['India', 'Cambodia', 'Laos', 'Myanmar', 'Thailand', 'Vietnam'],
    purpose: 'Promote connectivity, tourism, culture, education, and transport cooperation among the river basins of Ganga and Mekong.',
    structure: 'Annual Foreign Ministers\' Meeting, Senior Officials\' Meetings, and 4 thematic working groups.',
    indiaRole: 'Initiator; provides annual Quick Impact Projects (QIPs) funding small community development schemes in Cambodia, Laos, and Vietnam.',
    indiaInterests: [
      'Cultural diplomacy leveraging shared Buddhist and Hindu heritage (Angkor Wat, Wat Phou).',
      'Counterbalancing Chinese downstream hydrological leverage on the Mekong (Lancang) River.',
      'Trilateral Highway extension from Thailand to Laos and Cambodia.'
    ],
    recentDevelopments: 'Over 100 Quick Impact Projects executed; scholarships under MGC Asian Traditional Textiles Museum in Siem Reap, Cambodia.',
    challenges: [
      'Low financial allocation compared to China\'s Lancang-Mekong Cooperation (LMC) backed by massive infrastructure loans.'
    ],
    futureRelevance: 'Soft-power pillar reinforcing the historical maritime and cultural connect under Act East Policy.',
    officialSource: 'Ministry of External Affairs, India-Mekong Ganga Cooperation'
  },
  {
    id: 'grp-export-regimes',
    name: 'Multilateral Nuclear Export Control Regimes',
    acronym: 'MTCR / WA / AG',
    originYear: 1987,
    headquarters: 'Voluntary non-treaty supplier cartels',
    memberCountries: [
      'Missile Technology Control Regime (MTCR - India joined 2016)',
      'Wassenaar Arrangement (WA on conventional arms/dual-use goods - India joined 2017)',
      'Australia Group (AG on chemical/biological materials - India joined 2018)'
    ],
    purpose: 'Prevent proliferation of weapons of mass destruction (WMD), delivery systems, and dual-use technologies through coordinated national export licensing.',
    structure: 'Plenary meetings, export control lists, and information sharing.',
    indiaRole: 'Admitted as a full member of MTCR, Wassenaar Arrangement, and Australia Group, affirming India\'s impeccable non-proliferation credentials despite being a non-signatory to the NPT.',
    indiaInterests: [
      'Legitimizes India\'s nuclear and high-tech trade with advanced Western nations.',
      'Enabled joint development and export of BrahMos cruise missile (range extended beyond 290 km post-MTCR accession).',
      'Final frontier remains the Nuclear Suppliers Group (NSG), where Indian membership is blocked by China demanding NPT signature or parity with Pakistan.'
    ],
    recentDevelopments: 'India chaired the Plenary of the Wassenaar Arrangement in 2023, showcasing leadership in dual-use export control governance.',
    challenges: [
      'Chinese veto blocking consensus on India\'s NSG membership.',
      'Compliance burdens for Indian high-tech and defense manufacturing exporters (SCOMET lists).'
    ],
    futureRelevance: 'Demonstrates India\'s global integration as a responsible nuclear weapons power and reliable technology partner.',
    officialSource: 'Ministry of External Affairs & Directorate General of Foreign Trade (SCOMET)'
  }
];

export const GLOBAL_INSTITUTIONS: GlobalInstitution[] = [
  {
    id: 'inst-un',
    name: 'United Nations Organization & Security Council',
    acronym: 'UN / UNSC',
    establishedYear: 1945,
    headquarters: 'New York City, United States',
    membersCount: '193 Member States',
    mandate: 'Maintain international peace and security, develop friendly relations among nations, achieve international cooperation, and harmonize actions of nations.',
    structureAndVoting: 'General Assembly (one nation, one vote); Security Council (15 members: 5 Permanent with veto power - US, UK, France, Russia, China; and 10 Non-permanent elected for 2-year terms).',
    indiaRole: 'Founding signatory of UN Charter (1945); largest cumulative troop contributor to UN Peacekeeping operations (over 280,000 troops across 50+ missions); served 8 terms as non-permanent member of UNSC (most recently 2021-22).',
    reformDemands: 'Core demand for comprehensive UNSC expansion in both permanent and non-permanent categories through the G4 group (India, Brazil, Germany, Japan). India asserts the current 1945 structure reflects a bygone colonial era and suffers from an acute deficit of legitimacy, representation, and effectiveness.',
    recentDevelopments: 'Adoption of the "Pact for the Future" at the UN Summit of the Future (September 2024) containing an explicit commitment to reform the Security Council, make it more representative, and address historical under-representation of Africa.',
    challenges: [
      'Veto paralysis: P5 members routinely using veto to shield allies (e.g. Ukraine conflict, Gaza conflict, cross-border terror designations).',
      'Opposition to G4 permanent membership by the "Uniting for Consensus" (Coffee Club) group led by Pakistan, Italy, Mexico, South Korea.'
    ],
    pyqs: [
      'UPSC CSE Mains 2022: "Discuss the impediments in the reform of the United Nations Security Council. Evaluate India\'s claim for a permanent seat in the restructured council."',
      'UPSC CSE Mains 2015: "What are the key areas of reform in the UN that India has been advocating? Assess the prospects of these reforms."'
    ],
    officialSource: 'Permanent Mission of India to the UN, New York'
  },
  {
    id: 'inst-wto',
    name: 'World Trade Organization',
    acronym: 'WTO',
    establishedYear: 1995,
    headquarters: 'Geneva, Switzerland',
    membersCount: '166 Member States (joined by Comoros and Timor-Leste in 2024)',
    mandate: 'Regulate international trade in goods, services, and intellectual property; administer dispute settlement mechanism; facilitate multilateral trade negotiations.',
    structureAndVoting: 'Ministerial Conference (highest decision-making body, meets every 2 years), General Council, Dispute Settlement Body (DSB), Appellate Body. Decisions taken by consensus.',
    indiaRole: 'Founding member; vocal leader of developing country coalitions (G33 on agriculture, African Group) championing special and differential treatment (S&DT) and public stockholding for food security.',
    reformDemands: 'Immediate restoration of the 2-tier Dispute Settlement System (Appellate Body has been non-functional since Dec 2019 due to US blocking judicial appointments); permanent solution for Public Stockholding (PSH) for food security; opposing attempts by developed nations to push plurilateral agreements (Joint Statement Initiatives JSI) without consensus.',
    recentDevelopments: '13th Ministerial Conference (MC13) in Abu Dhabi (Feb 2024): India firmly protected farmer MSP procurement under the Bali Peace Clause; resisted premature phase-out of artisanal fisheries subsidies.',
    challenges: [
      'Appellate Body paralysis reducing the WTO into an unenforceable forum ("appeals into the void").',
      'Profligacy of bilateral/regional FTAs and unilateral green trade barriers (e.g. EU CBAM).'
    ],
    pyqs: [
      'UPSC CSE Mains 2023: "The dispute settlement mechanism of the WTO is in deep crisis. Discuss the reasons behind this impasse and its implications for developing countries like India."',
      'UPSC CSE Mains 2017: "India’s food security programs are caught between domestic imperatives and international trade rules under WTO. Comment."'
    ],
    officialSource: 'Department of Commerce & WTO Secretariat'
  },
  {
    id: 'inst-imf-wb',
    name: 'Bretton Woods Institutions (IMF & World Bank Group)',
    acronym: 'IMF & WBG',
    establishedYear: 1944,
    headquarters: 'Washington, D.C., United States',
    membersCount: '190 Member States',
    mandate: 'IMF: Maintain international monetary and financial stability, macroeconomic surveillance, and balance of payments lending. World Bank (IBRD, IDA, IFC, MIGA, ICSID): Long-term poverty reduction, infrastructure financing, and developmental project lending.',
    structureAndVoting: 'Quota-based voting power: Member quotas determined by economic size and openness. US holds effective veto power (>15% voting share) on major charter decisions.',
    indiaRole: 'Founding member; represented on Executive Boards of both institutions. India is one of the largest historic borrowers from IBRD/IDA and a major recipient of green transition financing.',
    reformDemands: '16th General Review of Quotas concluded in 2023 with an equi-proportional 50% increase, but postponed quota realignment. India strongly demands realignment of quota shares to reflect actual economic weight of emerging market economies (India\'s quota share is currently only 2.75%, far below its share of global GDP).',
    recentDevelopments: 'Adoption of G20 Independent Expert Group recommendations on Strengthening Multilateral Development Banks (MDBs) co-chaired by N.K. Singh and Larry Summers during India\'s G20 presidency.',
    challenges: [
      'US legislative resistance to surrendering veto share prevents meaningful governance transfer to Asian powers.',
      'Sovereign debt distress in Global South; lack of transparent debt restructuring mechanisms (Common Framework delays).'
    ],
    pyqs: [
      'UPSC CSE Mains 2020: "Critically evaluate the governance structure of Bretton Woods institutions. Why is quota reform in the IMF vital for reflecting the economic realities of the 21st century?"'
    ],
    officialSource: 'Ministry of Finance & IMF/World Bank Annual Reports'
  },
  {
    id: 'inst-wef',
    name: 'World Economic Forum',
    acronym: 'WEF',
    establishedYear: 1971,
    headquarters: 'Cologny, Geneva, Switzerland',
    membersCount: 'International organization for public-private cooperation',
    mandate: 'Engages foremost political, business, cultural, and other leaders of society to shape global, regional, and industry agendas.',
    structureAndVoting: 'Annual Meeting in Davos-Klosters, Switzerland; Centre for the Fourth Industrial Revolution (C4IR) network.',
    indiaRole: 'High-level participation by Union Cabinet Ministers and Chief Ministers; host to C4IR India in Mumbai focusing on AI, blockchain, and drones in agriculture.',
    reformDemands: 'Greater integration of frugal grassroots innovations from developing economies into global supply chain dialogues.',
    recentDevelopments: 'WEF Davos 2024 launched the "Alliance for Global Good-Gender Equity and Equality" spearheaded by India.',
    challenges: [
      'Criticism of Davos as an elitist talking shop disconnected from grassroots developmental realities.'
    ],
    pyqs: [
      'UPSC CSE Prelims: Frequently tests flagship WEF publications: Global Competitiveness Report, Global Gender Gap Report, Global Risks Report, Energy Transition Index.'
    ],
    officialSource: 'WEF Annual Meeting Communiques'
  }
];

export const GLOBAL_DYNAMICS_DATA: GlobalDynamicIssue[] = [
  {
    id: 'dyn-bri',
    title: 'China\'s Belt and Road Initiative (BRI) & CPEC Sovereignty Challenge',
    category: 'Geopolitics',
    backgroundAndContext: 'Launched by Xi Jinping in 2013; trillion-dollar trans-continental infrastructure connectivity network spanning Silk Road Economic Belt and 21st Century Maritime Silk Road. China-Pakistan Economic Corridor (CPEC) is its flagship project.',
    impactOnIndia: [
      'Sovereignty Violation: CPEC passes through Gilgit-Baltistan in Pakistan-occupied Kashmir (PoK), an integral part of India under illegal Pakistani occupation.',
      'Debt-Trap Diplomacy: Strategic encirclement of India through unsustainable infrastructure loans leading to asset seizures (Hambantota port in Sri Lanka 99-year lease).',
      'Maritime vulnerability: Chinese militarization of dual-use Indian Ocean ports (Gwadar, Kyaukpyu, Djibouti).'
    ],
    indiaResponseAndStrategy: [
      'Principled Boycott: India is the only major Asian economy that has steadfastly refused to endorse or join BRI.',
      'Articulating Connectivity Principles: India advocates that international connectivity initiatives must respect sovereignty, territorial integrity, transparency, rule of law, and financial sustainability.',
      'Counter-Corridors: India-Middle East-Europe Economic Corridor (IMEC), INSTC, Chabahar Port, and Asia-Africa Growth Corridor (AAGC).'
    ],
    keyDataOrPrecedent: 'Prime Minister Modi at Raisina Dialogue: "Connectivity projects must be transparent, consultative, and respect territorial sovereignty."'
  },
  {
    id: 'dyn-instc',
    title: 'International North-South Transport Corridor (INSTC) & IMEC Alternatives',
    category: 'Geo-economics',
    backgroundAndContext: '7,200 km multi-modal freight network (ship, rail, road) connecting Mumbai to Saint Petersburg via Iran, Azerbaijan, and Russia. Established in 2000 by India, Iran, and Russia.',
    impactOnIndia: [
      'Reduces freight transit time from 45 days (via Suez Canal) to ~25 days; cuts logistics costs by ~30%.',
      'Unlocks landlocked Central Asian Republics (CARs) bypassing Pakistan.',
      'Complemented by the India-Middle East-Europe Economic Corridor (IMEC) launched at G20 New Delhi 2023.'
    ],
    indiaResponseAndStrategy: [
      'Signed 10-year long-term contract for Shahid Beheshti Port at Chabahar (Iran) in May 2024 to serve as the golden maritime gateway for INSTC.',
      'Integrating Chabahar with the INSTC framework to link western Indian ports (Jawaharlal Nehru Port, Kandla) directly to Central Asia and Europe.'
    ],
    keyDataOrPrecedent: 'Studies by Federation of Freight Forwarders’ Associations in India (FFFAI) show INSTC is 30% cheaper and 40% shorter than the traditional Suez Canal route.'
  },
  {
    id: 'dyn-dedollarization',
    title: 'Global Currency Wars, Sanctions & De-Dollarization Trends',
    category: 'Geo-economics',
    backgroundAndContext: 'Weaponization of the US Dollar and SWIFT banking messaging system following sanctions on Russia in 2022 accelerated global moves to settle trade in local and national currencies.',
    impactOnIndia: [
      'Need to insulate strategic imports (crude oil from Russia/Gulf, defense equipment) from third-party extraterritorial sanctions.',
      'Volatility in Indian Rupee exchange rates driven by US Federal Reserve interest rate hikes and global capital outflows.'
    ],
    indiaResponseAndStrategy: [
      'Internationalization of the Indian Rupee (INR): RBI operationalized Special Rupee Vostro Accounts (SRVA) permitting 22 partner nations to settle trade in INR.',
      'Local Currency Settlement (LCS) agreements signed with UAE (Rupee-Dirham) and explored with Indonesia, Maldives, and Sri Lanka.',
      'Cross-border digital linkage of UPI with Singapore (PayNow), UAE (Jaywan), and France.'
    ],
    keyDataOrPrecedent: 'Tarapore Committee benchmarks on Capital Account Convertibility; RBI framework on international trade settlement in Indian Rupees (July 2022).'
  },
  {
    id: 'dyn-scs',
    title: 'South China Sea Dispute & UNCLOS Maritime Law',
    category: 'Security & Conflict',
    backgroundAndContext: 'China asserts sweeping historical sovereignty over nearly 90% of the South China Sea through its illegal "Nine-Dash Line" (and 2023 Ten-Dash Map), contesting maritime zones of Vietnam, Philippines, Malaysia, Brunei, and Taiwan.',
    impactOnIndia: [
      'Nearly 55% of India\'s seaborne trade passes through the South China Sea and Malacca Strait.',
      'ONGC Videsh Ltd (OVL) holds offshore oil and gas exploration concessions in Vietnamese Exclusive Economic Zone (Blocks 127 and 128).'
    ],
    indiaResponseAndStrategy: [
      'Unwavering support for Freedom of Navigation, Overflight, and unimpeded lawful commerce in international waters under UNCLOS 1982.',
      'Endorsed the 2016 Permanent Court of Arbitration (PCA) ruling that invalidated China\'s historic rights claims under the Nine-Dash Line.',
      'Defense exports: Delivery of BrahMos supersonic shore-based anti-ship missile batteries to the Philippines Marine Corps (2024).'
    ],
    keyDataOrPrecedent: 'UNCLOS 1982 Article 87 (Freedom of the High Seas) and Indo-Pacific Oceans Initiative (IPOI).'
  }
];

export const DIASPORA_POLICY_DATA: DiasporaPolicyItem[] = [
  {
    id: 'diaspora-profile',
    pillar: 'Profile and Global Footprint of the Indian Diaspora',
    details: 'With over 32 million Non-Resident Indians (NRIs) and Persons of Indian Origin (PIOs), the Indian diaspora is the world\'s largest overseas expatriate population (UN World Migration Report).',
    initiatives: [
      'Concentrations: 9 million in West Asia / Gulf (predominantly semi-skilled & blue-collar contract laborers); 4.5 million in USA (high-income tech, academic, and entrepreneurial elite); 1.8 million in UK; substantial populations in Canada, Australia, South Africa, Mauritius, and Fiji.'
    ],
    challengesAndDebates: [
      'Heterogeneity: Vast divide between affluent white-collar citizens in the West and vulnerable, contract-bound laborers in the Gulf under the Kafala sponsorship system.',
      'Domestic political entanglements: Separatist/extremist elements exploiting diaspora freedoms in Canada, UK, and Australia.'
    ],
    officialSource: 'Ministry of External Affairs, Population of Overseas Indians 2024'
  },
  {
    id: 'diaspora-policy-evolution',
    pillar: 'Evolution of Diaspora Policy: From Nehruvian Detachment to Modi\'s Strategic Asset',
    details: 'Shift from Jawaharlal Nehru\'s policy of non-intervention ("diaspora should integrate with host nations") to active institutional embrace post-1990s following the LM Singhvi High-Level Committee Report (2000-2002).',
    initiatives: [
      'Pravasi Bharatiya Divas (PBD): Celebrated biennially on January 9 (commemorating Mahatma Gandhi\'s return from South Africa in 1915).',
      'Overseas Citizenship of India (OCI) Card: Introduced under Citizenship (Amendment) Act 2005 (PIO card formally merged into OCI card in 2015) granting lifelong visa-free travel and economic parity (except agricultural land acquisition).',
      'Pravasi Bharatiya Samman Award (PBSA): Highest national honor conferred on overseas Indians.',
      'Welfare Platforms: MADAD online grievance portal, e-Migrate digital recruitment system, and Indian Community Welfare Fund (ICWF).'
    ],
    challengesAndDebates: [
      'Dual Citizenship: Article 9 of the Constitution strictly prohibits dual citizenship. OCI card is NOT dual citizenship; OCI holders do not have voting rights, cannot hold constitutional posts, and cannot contest elections.'
    ],
    officialSource: 'LM Singhvi High Level Committee Report on the Indian Diaspora (2002)'
  },
  {
    id: 'diaspora-economic-power',
    pillar: 'Economic Lifeline: Remittances & Capital Investments',
    details: 'India is the world\'s uncontested number one recipient of foreign remittances, surpassing $125 billion annually (World Bank Inward Remittance Report).',
    initiatives: [
      'Remittances account for ~3% of India\'s GDP, providing critical balance of payments buffer and household consumption support across Kerala, Punjab, UP, and Bihar.',
      'Diaspora bonds and NRI deposit schemes (FCNR-B, NRE, NRO accounts) with tax exemptions.'
    ],
    challengesAndDebates: [
      'High transaction costs of remittances through legacy banking channels (mitigated by UPI-PayNow and cross-border digital payment rails).',
      'Brain Drain vs Brain Gain / Brain Circulation debate: Retaining top scientific and AI talent in India.'
    ],
    officialSource: 'World Bank Migration and Development Brief 2024'
  },
  {
    id: 'diaspora-political-rights',
    pillar: 'Voting Rights & Political Representation for NRIs',
    details: 'Representation of the People (Amendment) Act 2010 conferred voting rights on Non-Resident Indian citizens (NRIs who hold Indian passports) under Section 20A.',
    initiatives: [
      'Current Rule: NRIs can vote in person at their designated polling booth in India upon presenting original Indian passport.',
      'Proposed Reforms: Electronically Transmitted Postal Ballot System (ETPBS) for overseas voters; proxy voting bill was passed by 16th Lok Sabha but lapsed in Rajya Sabha.'
    ],
    challengesAndDebates: [
      'Logistical challenges in conducting overseas voting across 100+ countries with diplomatic missions.',
      'Opposition concerns regarding secrecy of the ballot and verification of proxy credentials.'
    ],
    officialSource: 'Election Commission of India & Law Commission Report No. 255'
  }
];
