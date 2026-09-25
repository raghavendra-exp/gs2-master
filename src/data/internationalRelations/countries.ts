import { CountryRelationship } from '../../types';

export const COUNTRY_RELATIONSHIPS: CountryRelationship[] = [
  // ==================== NEIGHBOURHOOD (ALL 9 COUNTRIES) ====================
  {
    id: 'country-china',
    country: 'China',
    region: 'Neighbourhood',
    flag: '🇨🇳',
    historicalBackground: 'Historical civilizational exchanges (Buddhism, Silk Route) interrupted by the 1962 Sino-Indian War. Border tranquility maintained via 1993 Border Peace and Tranquility Agreement and 1996 CBMs until recent escalations.',
    politicalRelations: 'Complex relationship characterized by simultaneous cooperation in multilateral fora (BRICS, SCO) and intense bilateral strategic competition. Disrupted severely following the 2020 Galwan Valley clash.',
    economicAndTrade: 'Bilateral trade exceeded $136 billion in 2023 with a colossal trade deficit of over $100 billion in China’s favor. India heavily dependent on Chinese active pharmaceutical ingredients (APIs), electronics, and solar cells.',
    defenceAndSecurity: '3,488 km disputed Line of Actual Control (LAC) split into Western (Aksai Chin), Middle (Uttarakhand/HP), and Eastern (Arunachal Pradesh / McMahon Line). Severe militarization post-Galwan; bilateral patrols resumed in late 2024 following disengagement consensus at Depsang and Demchok.',
    borderOrMaritimeIssues: 'Border disputes in Ladakh and Arunachal Pradesh (stapled visa issue, renaming of places by China). Chinese "String of Pearls" encirclement via Hambantota, Gwadar, Kyaukpyu, and Chittagong.',
    waterOrEnergyCooperation: 'Brahmaputra (Yarlung Tsangpo) trans-boundary river: China building massive cascade dams in Tibet (Medog mega-dam) without a formal bilateral water-sharing treaty, causing downstream flood and ecological security alarms.',
    diasporaProfile: 'Small Indian trading and student community (mainly medical students) in Guangzhou, Yiwu, and Shanghai.',
    multilateralCooperation: ['BRICS+', 'SCO', 'G20', 'AIIB', 'RIC'],
    recentDevelopments: 'October 2024 bilateral consensus on patrolling arrangements along the LAC in Eastern Ladakh, paving the way for Modi-Xi bilateral meeting at Kazan BRICS Summit.',
    strategicChallenges: [
      'Violations of 1993/1996 border agreements and unilateral attempts to alter LAC status quo.',
      'China-Pakistan Economic Corridor (CPEC) passing through Pakistan-occupied Kashmir (PoK), violating Indian sovereignty.',
      'Persistent blocking of Indian permanent membership in UNSC and nuclear export control regimes (NSG).'
    ],
    opportunities: [
      'De-escalation and verifiable disengagement to restore bilateral peace and normal trade relations.',
      'Cooperation on climate finance and reformed multilateralism for the Global South.'
    ],
    keyAgreements: [
      'Panchsheel Agreement (Five Principles of Peaceful Coexistence) 1954',
      'Border Peace and Tranquility Agreement (BPTA) 1993',
      'Agreement on Military Confidence Building Measures along the LAC 1996',
      'Protocol on Modalities for the Implementation of CBMs 2005'
    ],
    pyqs: [
      'UPSC CSE Mains 2020: "China is using its economic relations and positive trade surplus as tools to develop its potential power in Asia. In the light of this statement, discuss its impact on India as her neighbor."',
      'UPSC CSE Mains 2014: "The Chinese sphere of influence in the Indian Ocean is a cause of concern for India. Evaluate."'
    ],
    officialSource: 'Ministry of External Affairs, India-China Bilateral Brief 2024'
  },
  {
    id: 'country-pakistan',
    country: 'Pakistan',
    region: 'Neighbourhood',
    flag: '🇵🇰',
    historicalBackground: 'Born out of the painful partition of 1947; characterized by persistent structural conflict, wars in 1947-48, 1965, 1971 (Liberation of Bangladesh), and 1999 Kargil conflict.',
    politicalRelations: 'Diplomatic relations downgraded since August 2019 following revocation of Article 370 in Jammu & Kashmir. High Commissions operating without High Commissioners (at Cd\'A level). Bilateral trade suspended by Pakistan.',
    economicAndTrade: 'Direct trade virtually frozen since 2019 (limited essential pharmaceutical imports). MFN status granted by India in 1996 was withdrawn post-Pulwama in 2019; informal trade routed through Dubai.',
    defenceAndSecurity: 'Ceasefire along Line of Control (LoC) reaffirmed in February 2021. Core security challenge is cross-border state-sponsored terrorism and drone drops of arms/narcotics across Punjab/J&K borders.',
    borderOrMaritimeIssues: 'Sir Creek maritime dispute in Rann of Kutch; Siachen Glacier (Operation Meghdoot 1984); Line of Control (LoC) status.',
    waterOrEnergyCooperation: 'Indus Waters Treaty (IWT) 1960 brokered by World Bank: Allocates Western rivers (Indus, Jhelum, Chenab) to Pakistan and Eastern rivers (Ravi, Beas, Sutlej) to India. India has issued formal notices to Pakistan seeking modification of IWT under Article XII(3) due to material changes in circumstances and Pakistan\'s obstruction of run-of-the-river hydroelectric projects (Kishanganga and Ratle).',
    diasporaProfile: 'No significant Indian diaspora in Pakistan; cross-border religious pilgrimages (Kartarpur Corridor under 2019 bilateral agreement).',
    multilateralCooperation: ['SCO', 'SAARC (dormant)'],
    recentDevelopments: 'Visit of External Affairs Minister S. Jaishankar to Islamabad for SCO Heads of Government meeting in October 2024 (first Indian EAM visit to Pakistan in 9 years).',
    strategicChallenges: [
      'Infrastructure of terrorism (LeT, JeM) operating with institutional state backing.',
      'Sino-Pak strategic nexus and CPEC infrastructure passing through Pakistan-occupied Kashmir.',
      'Nuclear brinkmanship and tactical nuclear weapons doctrine (Nasr missiles).'
    ],
    opportunities: [
      'Operationalization of Kartarpur Sahib Gurdwara pilgrimage corridor as a people-to-people bridge.',
      'Regional environmental cooperation on air pollution/smog in Punjab plains and Indus basin water conservation.'
    ],
    keyAgreements: [
      'Indus Waters Treaty (IWT) 1960',
      'Tashkent Declaration 1966',
      'Simla Agreement 1972 (bilateral framework to resolve disputes without third-party intervention)',
      'Lahore Declaration 1999',
      'Kartarpur Corridor Agreement 2019'
    ],
    pyqs: [
      'UPSC CSE Mains 2021: "The long-standing Indus Waters Treaty has weathered wars and political tensions. Critically analyze its resilience in light of recent disputes over hydel projects."'
    ],
    officialSource: 'Ministry of External Affairs, India-Pakistan Bilateral Relations'
  },
  {
    id: 'country-bangladesh',
    country: 'Bangladesh',
    region: 'Neighbourhood',
    flag: '🇧🇩',
    historicalBackground: 'India played a decisive military and humanitarian role in the 1971 Liberation War (Operation Jackpot / Indo-Pak War 1971). Shared history, language, and cultural heritage.',
    politicalRelations: 'Described as a "Golden Era" (Sonali Adhyay) under Sheikh Hasina; entered a delicate transitional phase following the August 2024 political revolution and installation of the Interim Government led by Prof. Muhammad Yunus.',
    economicAndTrade: 'Bangladesh is India\'s largest trading partner in South Asia (~$14 billion). Free trade under SAFTA; negotiations for Comprehensive Economic Partnership Agreement (CEPA) initiated.',
    defenceAndSecurity: '4,096 km longest land boundary India shares with any neighbor. Historical settlement of land and maritime borders. Security cooperation against northeast insurgent hideouts (ULFA, NDFB). Joint military exercise: SAMPRITI.',
    borderOrMaritimeIssues: 'Settled Land Boundary Agreement (LBA) via 100th Constitutional Amendment 2015 exchanging 162 enclaves. Maritime boundary settled by UNCLOS Permanent Court of Arbitration (PCA) in 2014.',
    waterOrEnergyCooperation: '54 trans-boundary rivers. Ganga Water Treaty 1996 (up for renewal in 2026). Teesta River water-sharing agreement remains stalled due to West Bengal state government objections. India supplies over 1,160 MW of electricity (including Maitree Super Thermal Power Plant at Rampal and Adani Godda cross-border power supply).',
    diasporaProfile: 'Vibrant presence of Indian professionals in textile, IT, and manufacturing sectors in Dhaka and Chittagong.',
    multilateralCooperation: ['BIMSTEC (Headquarters in Dhaka)', 'BBIN', 'IORA', 'Commonwealth'],
    recentDevelopments: 'Operationalization of Akhaura-Agartala cross-border rail link and Khulna-Mongla port rail line; access to Chittagong and Mongla ports for Indian northeastern cargo.',
    strategicChallenges: [
      'Protection of Hindu and other religious minority communities post-Hasina political transition.',
      'Illegal immigration and border fencing frictions along porous riverine stretches.',
      'Growing Chinese economic and defense footprint (submarines and naval bases).'
    ],
    opportunities: [
      'Multi-modal transit hub linking India\'s landlocked Northeast to the Bay of Bengal.',
      'Sub-regional energy grid integration under BBIN framework.'
    ],
    keyAgreements: [
      'Treaty of Friendship, Cooperation and Peace 1972',
      'Ganga Water Sharing Treaty 1996 (30-year treaty)',
      'Land Boundary Agreement (LBA) 2015',
      'Cooperation in Civil Nuclear Energy and Cyber Security 2017'
    ],
    pyqs: [
      'UPSC CSE Mains 2020: "The settlement of the boundary issue has removed a major irritant in India-Bangladesh relations. Analyze the key opportunities and challenges in the bilateral relationship."'
    ],
    officialSource: 'Ministry of External Affairs, India-Bangladesh Brief 2024'
  },
  {
    id: 'country-myanmar',
    country: 'Myanmar',
    region: 'Neighbourhood',
    flag: '🇲🇲',
    historicalBackground: 'Historical cultural, religious (Theravada Buddhism), and colonial ties (administered as a province of British India until 1937 Government of India Act).',
    politicalRelations: 'Vital geopolitical pivot connecting India with ASEAN; only ASEAN country sharing a land border with India (1,643 km). Relations complicated by the February 2021 military coup (Tatmadaw junta) and escalating civil war with ethnic armed organizations.',
    economicAndTrade: 'Bilateral trade ~$$1.5 billion; major exporter of pulses and timber to India. India has provided developmental lines of credit for infrastructure.',
    defenceAndSecurity: 'Cooperation along the border to neutralize insurgent groups operating in Nagaland and Manipur. Joint exercise: IMBAX.',
    borderOrMaritimeIssues: '1,643 km border with Arunachal Pradesh, Nagaland, Manipur, and Mizoram. In 2024, Government of India decided to scrap the Free Movement Regime (FMR - which permitted border residents to travel 16 km without visas) and construct border fencing to prevent influx of refugees and insurgent movements.',
    waterOrEnergyCooperation: 'Offshore natural gas exploration (Shwe gas project involving ONGC Videsh and GAIL).',
    diasporaProfile: 'Approximately 1.5 to 2 million Persons of Indian Origin (PIOs) residing in Yangon, Mandalay, and Bago.',
    multilateralCooperation: ['BIMSTEC', 'ASEAN Dialogue Partner', 'Mekong-Ganga Cooperation (MGC)'],
    recentDevelopments: 'Operationalization of Sittwe Port in Rakhine State developed under Kaladan Multi-Modal Transit Transport Project; Indian humanitarian assistance (Operation Karuna after Cyclone Mocha).',
    strategicChallenges: [
      'Security volatility in Rakhine, Chin, and Shan states impacting completion of the Kaladan and Trilateral Highway projects.',
      'Refugee influx (Chin and Rohingya) into Mizoram and Manipur exacerbating local ethnic friction.',
      'Expanding Chinese strategic footprint through China-Myanmar Economic Corridor (CMEC) connecting Yunnan to Kyaukpyu deep-sea port.'
    ],
    opportunities: [
      'Gateway to Southeast Asia under Act East Policy; vital alternative sea-river-road transit route for Northeast India via Sittwe Port.'
    ],
    keyAgreements: [
      'Treaty of Friendship 1951',
      'Border Trade Agreement 1994',
      'Kaladan Multi-Modal Transit Transport Agreement 2008'
    ],
    pyqs: [
      'UPSC CSE Mains 2018: "Evaluate the significance of Myanmar in India\'s \'Act East Policy\' and the challenges arising out of the internal political dynamics in Myanmar."'
    ],
    officialSource: 'Ministry of External Affairs, India-Myanmar Bilateral Relations 2024'
  },
  {
    id: 'country-bhutan',
    country: 'Bhutan',
    region: 'Neighbourhood',
    flag: '🇧🇹',
    historicalBackground: 'Exemplary bilateral friendship founded on shared Buddhist heritage, geographical contiguity, and deep mutual trust.',
    politicalRelations: 'Governed by the historic Treaty of Friendship and Cooperation of 1949 (updated in 2007 to reflect Bhutan\'s democratic transition and sovereign foreign policy autonomy).',
    economicAndTrade: 'India is Bhutan\'s largest trading partner (accounting for over 80% of Bhutan\'s trade) and primary development assistance partner. Bhutanese Ngultrum is pegged to the Indian Rupee at parity.',
    defenceAndSecurity: 'Indian Military Training Team (IMTRAT) permanently trains Royal Bhutan Army; close coordination on border defense (exemplified during the 2017 Doklam standoff between India and China).',
    borderOrMaritimeIssues: 'Undelimited northern Bhutan-China boundary: Negotiations between Thimphu and Beijing over Doklam plateau and Jakarlung/Pasamlung valleys closely monitored by New Delhi due to proximity to the Siliguri Corridor ("Chicken\'s Neck").',
    waterOrEnergyCooperation: 'Hydropower is the hallmark of economic cooperation: Mutually beneficial run-of-the-river projects (Chukha, Kurichhu, Tala, Mangdechhu 720 MW, and Punatsangchhu). Bhutan exports clean surplus power to India.',
    diasporaProfile: 'Over 50,000 Indian citizens working in Bhutan (mainly in infrastructure, education, and technical consultancy).',
    multilateralCooperation: ['BIMSTEC', 'BBIN', 'SAARC'],
    recentDevelopments: 'Prime Minister Modi conferred Bhutan\'s highest civilian honor (Order of the Druk Gyalpo) in 2024; cooperation on the planned Gelephu Mindfulness City and Kokrajhar-Gelephu cross-border railway line.',
    strategicChallenges: [
      'Chinese diplomatic and boundary pressure on Bhutan to finalize border demarcation involving the Doklam tri-junction.',
      'Diversifying Bhutan\'s economy beyond hydropower and creating private employment for youth.'
    ],
    opportunities: [
      'Sub-regional trilateral power trade (Bhutan exporting power to Bangladesh through Indian transmission grid under BBIN).',
      'Cross-border digital payment integration (BHIM-UPI operational in Bhutan).'
    ],
    keyAgreements: [
      'Indo-Bhutan Treaty of Friendship 1949 (revised in 2007)',
      'Agreement on Trade, Commerce and Transit 2016'
    ],
    pyqs: [
      'UPSC CSE Mains 2017: "The Doklam standoff highlighted the strategic significance of Bhutan in India\'s national security calculus. Discuss."'
    ],
    officialSource: 'Ministry of External Affairs, India-Bhutan Bilateral Relations 2024'
  },
  {
    id: 'country-srilanka',
    country: 'Sri Lanka',
    region: 'Neighbourhood',
    flag: '🇱🇰',
    historicalBackground: 'Over 2,500 years of shared civilizational, religious, and literary ties. Relationship tested during the civil war (LTTE / IPKF 1987-1990) and human rights debates post-2009.',
    politicalRelations: 'Marked by India\'s Neighborhood First policy; deep engagement continued following the election of President Anura Kumara Dissanayake (NPP) in September 2024.',
    economicAndTrade: 'India was the first country to provide over $4 billion in emergency lines of credit, currency swaps, and fuel/food assistance during Sri Lanka\'s catastrophic economic meltdown in 2022.',
    defenceAndSecurity: 'Trilateral maritime security cooperation (India, Sri Lanka, Maldives - Colombo Security Conclave). Joint military exercise: Mitra Shakti; Naval exercise: SLINEX.',
    borderOrMaritimeIssues: 'Katchatheevu Island ceded to Sri Lanka under 1974/1976 maritime agreements; recurring arrests of Tamil Nadu fishermen and impounding of trawlers for crossing the International Maritime Boundary Line (IMBL).',
    waterOrEnergyCooperation: 'Grid interconnection between India and Sri Lanka; petroleum pipeline from Southern India to Trincomalee; development of Trincomalee Oil Tank Farms by Lanka IOC.',
    diasporaProfile: 'Indian-origin Tamils (Estate Tamils) brought during colonial rule working in tea/rubber plantations, and Sri Lankan Tamil diaspora.',
    multilateralCooperation: ['BIMSTEC', 'IORA', 'Colombo Security Conclave'],
    recentDevelopments: 'Development of the West Container Terminal (WCT) at Colombo Port by Adani Ports; introduction of UPI digital payments and Indian Rupee as designated currency for trade.',
    strategicChallenges: [
      'Chinese strategic inroads: Hambantota port (99-year lease to China Merchants Port), Colombo Port City, and docking of Chinese military survey/research vessels (Yuan Wang).',
      'Implementation of the 13th Amendment to the Sri Lankan Constitution for political devolution to Tamil provinces.'
    ],
    opportunities: [
      'Land bridge connectivity (Palk Strait bridge proposal) and ferry services (Nagapattinam to Kankesanthurai).',
      'Renewable energy exports from northern Sri Lanka to India.'
    ],
    keyAgreements: [
      'Indo-Sri Lanka Peace Accord 1987 (13th Amendment basis)',
      'Free Trade Agreement (ISFTA) 1998 (India\'s first bilateral FTA)',
      'Joint Declaration on Vision for Connectivity 2023'
    ],
    pyqs: [
      'UPSC CSE Mains 2022: "In what ways has India\'s economic assistance to Sri Lanka during its 2022 economic crisis reinforced its \'Neighborhood First\' policy? Discuss in comparison to China\'s role."'
    ],
    officialSource: 'Ministry of External Affairs, India-Sri Lanka Relations 2024'
  },
  {
    id: 'country-nepal',
    country: 'Nepal',
    region: 'Neighbourhood',
    flag: '🇳🇵',
    historicalBackground: 'Unique "Roti-Beti" (kinship and matrimonial) bond and open border rooted in shared Hindu and Buddhist heritage. Landlocked buffer state between India and China.',
    politicalRelations: 'Governed by the 1950 Treaty of Peace and Friendship. Transitioned from monarchy to federal democratic republic; coalition politics in Kathmandu often oscillates between pro-India and Beijing-balancing stances.',
    economicAndTrade: 'India is Nepal\'s largest trading partner, primary transit route (via Kolkata/Haldia and Visakhapatnam ports), and leading foreign investor. Nepal uses Indian Rupee widely in border belts.',
    defenceAndSecurity: 'Open border (1,850 km); Gorkha soldiers have served in the Indian Army with distinction for over two centuries. Chief of Army Staff of both countries conferred honorary rank of General in each other\'s armies. Joint exercise: Surya Kiran.',
    borderOrMaritimeIssues: 'Territorial dispute over Kalapani, Lipulekh, and Limpiyadhura (heightened after Nepal issued a revised political map in 2020 following India\'s inauguration of Lipulekh road to Kailash Mansarovar); Susta border issue along Gandak river.',
    waterOrEnergyCooperation: 'Mahakali Treaty 1996 (Pancheshwar Multipurpose Project); Kosi and Gandak barrages. Breakthrough 10-year Long-Term Power Trade Agreement (2024) under which India will import 10,000 MW of hydroelectricity from Nepal.',
    diasporaProfile: 'Over 6 million Nepalese citizens live and work in India enjoying national treatment under the 1950 Treaty (freedom to work, own property, and enter government services except IAS/IPS/IFS).',
    multilateralCooperation: ['BIMSTEC', 'BBIN', 'SAARC (Secretariat in Kathmandu)'],
    recentDevelopments: 'Operationalization of South Asia\'s first cross-border petroleum pipeline (Motihari in Bihar to Amlekhgunj in Nepal); Jaynagar-Kurtha cross-border passenger railway; unified cross-border UPI payments with Fonepay.',
    strategicChallenges: [
      'Chinese encroachment and infrastructure push under Belt and Road Initiative (Trans-Himalayan Multi-Dimensional Connectivity Network).',
      'Revision of 1950 Treaty demands and unresolved recommendations of the Eminent Persons Group (EPG).',
      'Suspension of Gorkha recruitment in Indian Army following the launch of the Agnipath scheme.'
    ],
    opportunities: [
      'Sub-regional trilateral power exports: Nepal exporting hydropower to Bangladesh via Indian transmission corridor.',
      'Ramayana and Buddhist tourism circuits linking Lumbini, Janakpur, Ayodhya, and Bodh Gaya.'
    ],
    keyAgreements: [
      'Treaty of Peace and Friendship 1950',
      'Revised Treaty of Trade and Agreement of Cooperation to Control Unauthorized Trade 2009',
      'Long-Term Power Trade Agreement 2024'
    ],
    pyqs: [
      'UPSC CSE Mains 2020: "The border dispute between India and Nepal over Kalapani has strained historical ties. What are the root causes and how can the two nations resolve it through diplomatic dialogue?"'
    ],
    officialSource: 'Ministry of External Affairs, India-Nepal Brief 2024'
  },
  {
    id: 'country-maldives',
    country: 'Maldives',
    region: 'Neighbourhood',
    flag: '🇲🇻',
    historicalBackground: 'Maritime neighbor located barely 70 nautical miles from Minicoy Island (Lakshadweep). Deep ethnic, linguistic (Dhivehi linked to Sanskrit/Pali), and economic ties.',
    politicalRelations: 'Historically anchored by India\'s rapid assistance: Operation Cactus (1988 military intervention to foil mercenary coup), 2004 Tsunami relief, and 2014 Male Water Crisis (Operation Neer). Strained under President Mohamed Muizzu\'s "India Out" campaign, followed by pragmatism and high-level state visits in late 2024.',
    economicAndTrade: 'India is a major supplier of essential commodities (rice, wheat, sugar, construction materials exempted from export quotas). Significant bilateral currency swap agreement ($400 million and ₹30 billion) provided in 2024 to avert Maldivian debt default.',
    defenceAndSecurity: 'Strategic position astride vital Sea Lines of Communication (SLOCs: 8 Degree and 1.5 Degree channels) linking Gulf of Aden to Malacca Strait. Coastal Radar Surveillance System (CRSS) and joint exercise: Ekuverin.',
    borderOrMaritimeIssues: 'Maritime boundary demarcated amicably in 1976 recognizing Minicoy on the Indian side.',
    diasporaProfile: 'Over 25,000 Indians (doctors, teachers, hospitality professionals) constitute the second largest expatriate community in Maldives.',
    multilateralCooperation: ['Colombo Security Conclave', 'IORA', 'Commonwealth'],
    recentDevelopments: 'Withdrawal of 76 Indian military personnel operating 2 Dhruv ALH helicopters and Dornier aircraft, replaced by Indian civilian technical experts in May 2024; execution of Greater Male Connectivity Project (GMCP - 6.7 km bridge).',
    strategicChallenges: [
      'Chinese commercial maritime presence and free trade agreement implementation.',
      'Islamic radicalization and foreign fighter returnees from Middle Eastern conflicts.'
    ],
    opportunities: [
      'Comprehensive Economic and Maritime Security Partnership roadmap adopted in October 2024.',
      'Development of Uthuru Thila Falhu (UTF) naval dockyard for Maldivian National Defence Force.'
    ],
    keyAgreements: [
      'Maritime Boundary Treaty 1976',
      'Comprehensive Maritime Security Partnership Roadmap 2024'
    ],
    pyqs: [
      'UPSC CSE Mains 2019: "Evaluate the strategic significance of the Maldives for India\'s maritime security in the Indian Ocean in the backdrop of changing political regimes in Male."'
    ],
    officialSource: 'Ministry of External Affairs, India-Maldives Relations 2024'
  },
  {
    id: 'country-afghanistan',
    country: 'Afghanistan',
    region: 'Neighbourhood',
    flag: '🇦🇫',
    historicalBackground: 'Historical civilizational continuity (Gandhara civilization, Grand Trunk Road). India maintained staunch ties with democratic Afghan governments post-2001.',
    politicalRelations: 'India evacuated embassy in August 2021 upon Taliban takeover. Re-established a permanent "Technical Mission" in Kabul in June 2022 to oversee humanitarian assistance. Pursues pragmatic engagement without granting formal de jure diplomatic recognition to the Taliban regime.',
    economicAndTrade: 'Historically India invested over $3 billion in high-impact community development projects across all 34 provinces. Trade routed via Chabahar Port (Iran) and air freight corridors.',
    defenceAndSecurity: 'Concerns over terror groups (Al-Qaeda, ISKP, Jaish, Lashkar) using Afghan territory for anti-India operations. Reaffirms UNSC Resolution 2593 mandating Afghan soil not be used to threaten any nation.',
    borderOrMaritimeIssues: 'India shares a de jure 106 km border with Afghanistan in the Wakhan Corridor (currently in Pakistan-occupied Kashmir).',
    waterOrEnergyCooperation: 'India constructed the Afghan-India Friendship Dam (Salma Dam in Herat) and planned Shahtoot Dam for Kabul drinking water.',
    diasporaProfile: 'Historical Hindu and Sikh Afghan communities, majority evacuated post-Taliban takeover under Operation Devi Shakti.',
    multilateralCooperation: ['Heart of Asia - Istanbul Process', 'Moscow Format', 'Regional Security Dialogue on Afghanistan'],
    recentDevelopments: 'India dispatched over 50,000 metric tonnes of wheat, medical supplies, earthquake relief, and polio vaccines directly to Afghan people through UN agencies.',
    strategicChallenges: [
      'Denial of basic human rights, female education, and democratic representation by the Taliban.',
      'Pakistani military interference and terror safe-havens along the Durand Line.',
      'Chinese moves to exploit lithium and copper deposits (Mes Aynak).'
    ],
    opportunities: [
      'Connecting Central Asia to South Asia; Chabahar Port connectivity for Afghan dried fruits and saffron exports to Indian markets.'
    ],
    keyAgreements: [
      'Strategic Partnership Agreement (SPA) 2011 (India\'s first strategic partnership with a South Asian country)',
      'Chabahar Trilateral Transit Agreement (India-Iran-Afghanistan) 2016'
    ],
    pyqs: [
      'UPSC CSE Mains 2021: "India\'s \'wait and watch\' policy towards Taliban-ruled Afghanistan has its own limitations. In this context, discuss India\'s strategic options to protect its national security and regional investments."'
    ],
    officialSource: 'Ministry of External Affairs, India-Afghanistan Bilateral Brief 2024'
  },

  // ==================== MAJOR POWERS & EXTENDED REGIONS ====================
  {
    id: 'country-usa',
    country: 'United States of America',
    region: 'Major Power',
    flag: '🇺🇸',
    historicalBackground: 'Evolved from "estranged democracies" during the Cold War to "engaged democracies" and today a Comprehensive Global Strategic Partnership.',
    politicalRelations: 'Institutionalized 2+2 Ministerial Dialogue (Foreign and Defence Ministers). Cooperation via Quad, I2U2, and Indo-Pacific Economic Framework (IPEF).',
    economicAndTrade: 'USA is India’s largest trading partner (bilateral trade exceeding $120 billion) with India enjoying a trade surplus. Strong collaboration in critical and emerging technologies (iCET).',
    defenceAndSecurity: 'Designated as a "Major Defense Partner" (2016). Foundation defence agreements signed: LEMOA (2016), COMCASA (2018), BECA (2020), and GSOMIA (2002). Joint exercises: Yudh Abhyas, Vajra Prahar, Malabar.',
    diasporaProfile: 'Over 4.5 million Indian-Americans representing highest median household income demographic with deep presence in tech leadership, academia, and US Congress (Samosa Caucus).',
    multilateralCooperation: ['QUAD', 'I2U2', 'IPEF', 'G20', 'UN'],
    recentDevelopments: 'India-US Initiative on Critical and Emerging Technologies (iCET) focusing on semiconductor supply chains, jet engines (GE F414 co-production with HAL), quantum computing, AI, and defense innovation ecosystems (INDUS-X).',
    strategicChallenges: [
      'Differing approaches toward Russia-Ukraine conflict and strategic autonomy.',
      'Extraterritorial sanctions (CAATSA risks).',
      'H-1B visa caps and tariff disputes on medical devices, IT hardware, and agricultural imports.'
    ],
    opportunities: [
      'Friendshoring and supply chain resilience away from China.',
      'Civil nuclear energy and defense co-development under iCET.',
      'Space exploration collaboration (Artemis Accords, NISAR satellite mission).'
    ],
    keyAgreements: [
      'LEMOA (Logistics Exchange Memorandum of Agreement) 2016',
      'COMCASA (Communications Compatibility and Security Agreement) 2018',
      'BECA (Basic Exchange and Cooperation Agreement for Geospatial Cooperation) 2020',
      'India-US Civil Nuclear Agreement (123 Agreement) 2008'
    ],
    pyqs: [
      'UPSC CSE Mains 2021: "The USA is facing an existential threat in the form of a China that is much more challenging than the erstwhile Soviet Union. Discuss the role of India in this context."'
    ],
    officialSource: 'Ministry of External Affairs, India-US Bilateral Relations Brief 2024'
  },
  {
    id: 'country-russia',
    country: 'Russia',
    region: 'Major Power',
    flag: '🇷🇺',
    historicalBackground: 'Time-tested partnership dating back to the 1971 Indo-Soviet Treaty of Peace, Friendship and Cooperation. Russia has historically provided critical diplomatic vetos in UNSC on Kashmir and 1971 war.',
    politicalRelations: 'Special and Privileged Strategic Partnership. Annual Bilateral Summit mechanism between Prime Minister of India and President of Russia (22nd Summit held in Moscow in July 2024).',
    economicAndTrade: 'Bilateral trade surged to historic highs exceeding $65 billion driven primarily by India\'s discounted crude oil imports following Western sanctions post-Ukraine war. Trade imbalance heavily tilted towards Russia.',
    defenceAndSecurity: 'Russia remains India\'s largest defense equipment supplier (~45% of Indian military inventory), though share is diversifying. Major joint ventures: BrahMos supersonic cruise missile, AK-203 rifles factory in Amethi, UP, S-400 Triumf air defense systems, licensed Su-30MKI production.',
    waterOrEnergyCooperation: 'Kudankulam Nuclear Power Plant (KKNPP) in Tamil Nadu built with Rosatom assistance (Units 1-6); Russian hydrocarbon investments (Vankor, Sakhalin-1).',
    diasporaProfile: 'Approximately 30,000 Indians, predominantly medical students in Russian universities and business professionals in Moscow/St. Petersburg.',
    multilateralCooperation: ['BRICS+', 'SCO', 'G20', 'RIC', 'INSTC'],
    recentDevelopments: 'Settlement of bilateral trade in national currencies (Rupee-Rouble mechanism); development of Chennai-Vladivostok Eastern Maritime Corridor (EMC) linking India to Russian Far East.',
    strategicChallenges: [
      'Deepening Sino-Russian strategic axis ("no limits" partnership) limiting Russian flexibility in Asian balance of power.',
      'Payment bottlenecks under Western CAATSA and SWIFT sanctions; delays in supply of defense spares and S-400 batteries due to Ukraine war demands.'
    ],
    opportunities: [
      'Exploitation of Arctic Northern Sea Route and hydrocarbon exploration in Russian Far East.',
      'Accelerating INSTC (International North-South Transport Corridor) via Iran.'
    ],
    keyAgreements: [
      'Indo-Soviet Treaty of Peace, Friendship and Cooperation 1971',
      'Declaration on Strategic Partnership 2000',
      'Inter-Governmental Agreement on S-400 Air Defence Systems 2016'
    ],
    pyqs: [
      'UPSC CSE Mains 2022: "In what ways has the Russia-Ukraine crisis impacted India’s strategic autonomy and energy security? Discuss India’s diplomatic balancing act."'
    ],
    officialSource: 'Ministry of External Affairs, India-Russia Bilateral Relations Brief 2024',
    upRelevance: 'Indo-Russian Rifles Private Limited (IRRPL) joint venture factory producing AK-203 assault rifles is located in Korwa, Amethi district, UP.'
  },
  {
    id: 'country-japan',
    country: 'Japan',
    region: 'Indo-Pacific',
    flag: '🇯🇵',
    historicalBackground: 'Historical spiritual connect through Buddhism; post-war diplomatic ties initiated by Justice Radhabinod Pal\'s Tokyo Tribunal dissent; upgraded to Special Strategic and Global Partnership.',
    politicalRelations: 'Annual Prime Ministerial Summits and 2+2 Foreign and Defence Ministerial meetings. Founding partners of the Quad and Indo-Pacific vision (Shinzo Abe\'s "Confluence of the Two Seas" address in Indian Parliament 2007).',
    economicAndTrade: 'Bilateral Comprehensive Economic Partnership Agreement (CEPA 2011). Japan is the 5th largest FDI investor in India and largest provider of Official Development Assistance (ODA). Funding Mumbai-Ahmedabad High Speed Rail (Bullet Train project) and Western Dedicated Freight Corridor.',
    defenceAndSecurity: 'Acquisition and Cross-Servicing Agreement (ACSA) military logistics pact signed in 2020. Trilateral and quadrilateral naval exercises: Malabar, Dharma Guardian, JIMEX, Veer Guardian.',
    diasporaProfile: 'Growing Indian IT and engineering professional diaspora in Tokyo (~45,000).',
    multilateralCooperation: ['QUAD', 'G4 (UNSC Permanent Seat quest)', 'G20', 'Supply Chain Resilience Initiative (SCRI)'],
    recentDevelopments: 'Supply Chain Resilience Initiative (SCRI with India, Japan, Australia) to reduce dependency on China; target of 5 trillion Yen Japanese investment in India.',
    strategicChallenges: [
      'Slow execution timelines of mega-infrastructure projects in India.',
      'Reluctance of Japanese corporate risk culture compared to aggressive Western venture funds.'
    ],
    opportunities: [
      'Joint development projects in third countries (e.g. Asia-Africa Growth Corridor AAGC, Sri Lanka, Bangladesh Matarbari deep port).',
      'Semiconductor, critical minerals, and clean hydrogen technology partnerships.'
    ],
    keyAgreements: [
      'Comprehensive Economic Partnership Agreement (CEPA) 2011',
      'Civil Nuclear Cooperation Agreement 2016',
      'Acquisition and Cross-Servicing Agreement (ACSA) 2020'
    ],
    pyqs: [
      'UPSC CSE Mains 2021: "Examine the role of the \'Special Strategic and Global Partnership\' between India and Japan in ensuring a free, open and inclusive Indo-Pacific."'
    ],
    officialSource: 'Ministry of External Affairs, India-Japan Bilateral Relations 2024'
  },
  {
    id: 'country-central-asia',
    country: 'Central Asian Republics (CARs)',
    region: 'Neighbourhood',
    flag: '🇰🇿',
    historicalBackground: 'Historical Silk Road linkages; shared historical memory via Babur, Sufi saints, and Indian cinema popularity in the Soviet era.',
    politicalRelations: 'Covers five republics: Kazakhstan, Uzbekistan, Tajikistan, Kyrgyzstan, and Turkmenistan. India launched "Connect Central Asia Policy" in 2012; first India-Central Asia Summit held virtually in January 2022.',
    economicAndTrade: 'Subdued trade (~$2-3 billion) primarily due to lack of direct overland connectivity through Pakistan. Kazakhstan is India\'s largest trade partner and major supplier of natural uranium for civil reactors.',
    defenceAndSecurity: 'Farkhor and Ayni air facilities in Tajikistan (India\'s first overseas military logistics footholds). Joint military exercises: KAZIND (Kazakhstan), DUSTLIK (Uzbekistan), KHANJAR (Kyrgyzstan).',
    borderOrMaritimeIssues: 'Overland transit blocked by Pakistan\'s refusal of transit rights across its territory.',
    waterOrEnergyCooperation: 'TAPI (Turkmenistan-Afghanistan-Pakistan-India) natural gas pipeline (stalled due to Afghan security issues). Uranium supply agreements with Kazakhstan and Uzbekistan.',
    diasporaProfile: 'Substantial Indian medical student population (~15,000) across universities in Kyrgyzstan, Kazakhstan, and Tajikistan.',
    multilateralCooperation: ['SCO', 'Ashgabat Agreement', 'INSTC'],
    recentDevelopments: 'Operationalization of Shahid Beheshti Terminal at Chabahar Port (Iran) where India Ports Global Ltd signed a 10-year long-term contract in May 2024 to provide direct maritime-rail access to Central Asia.',
    strategicChallenges: [
      'Overwhelming Chinese economic dominance via Belt and Road Initiative (BRI) and Russian security hegemony (CSTO).',
      'Instability emanating from Taliban-controlled Afghanistan affecting border security.'
    ],
    opportunities: [
      'Integration of Chabahar Port with INSTC to create an uninterrupted trade corridor from Mumbai to Eurasia.',
      'Rare earth minerals and critical green energy minerals exploration.'
    ],
    keyAgreements: [
      'Ashgabat Agreement accession (2018)',
      'TAPI Inter-Governmental Agreement'
    ],
    pyqs: [
      'UPSC CSE Mains 2016: "Critically evaluate the importance of Central Asian Republics for India\'s energy security and geopolitical interests in Eurasia."'
    ],
    officialSource: 'Ministry of External Affairs, India-Central Asia Relations'
  },
  {
    id: 'country-west-asia',
    country: 'West Asia (Middle East / Gulf)',
    region: 'West Asia',
    flag: '🇦🇪',
    historicalBackground: 'Centuries of dhow trade across the Arabian Sea; transformed into India\'s primary energy reservoir and diaspora home since the 1970s oil boom.',
    politicalRelations: 'Engineered through Prime Minister Modi\'s "Think West Policy": Successful de-hyphenation and balanced diplomacy simultaneously engaging Saudi Arabia, UAE, Israel, and Iran without taking sides.',
    economicAndTrade: 'Bilateral trade with UAE alone exceeded $85 billion (boosted by India-UAE Comprehensive Economic Partnership Agreement CEPA 2022). Rupee-Dirham local currency settlement (LCS) agreement signed.',
    defenceAndSecurity: 'Naval port visits, defense intelligence sharing on terrorism, and joint exercises (Zayed Talwar with UAE, Al-Mohed Al-Hindi with Saudi Arabia). Extradition of financial fugitives and terror suspects.',
    waterOrEnergyCooperation: 'West Asia supplies over 60% of India\'s crude oil and 80% of LNG imports. Strategic petroleum reserve investments by ADNOC at Mangalore and Padur.',
    diasporaProfile: 'Over 9 million Indian expatriate workers residing across the 6 GCC states sending back over $50 billion annually in remittances.',
    multilateralCooperation: ['I2U2 (India, Israel, UAE, USA - "West Asian Quad")', 'India-Middle East-Europe Economic Corridor (IMEC) launched at G20 New Delhi', 'BRICS+ (Saudi Arabia, UAE, Iran, Egypt inducted)'],
    recentDevelopments: 'Inauguration of the BAPS Hindu Mandir in Abu Dhabi (2024); signing of 10-year bilateral contract for operation of Chabahar Port with Iran.',
    strategicChallenges: [
      'Escalating Israel-Hamas-Iran conflict threatening regional stability and delaying physical work on the IMEC corridor.',
      'Houthi drone and missile attacks in the Red Sea disrupting commercial shipping lanes.',
      'Welfare of vulnerable blue-collar laborers under the traditional Kafala sponsorship system.'
    ],
    opportunities: [
      'IMEC connectivity corridor positioning India at the heart of global trade routes.',
      'Sovereign wealth fund investments (Mubadala, ADIA, PIF) into Indian infrastructure, renewable energy, and digital tech.'
    ],
    keyAgreements: [
      'India-UAE CEPA 2022',
      'Strategic Partnership Council Agreement with Saudi Arabia 2019',
      'Chabahar Long-Term Contract 2024'
    ],
    pyqs: [
      'UPSC CSE Mains 2023: "The India-Middle East-Europe Economic Corridor (IMEC) has the potential to reshape global supply chains. Discuss its strategic and economic implications for India in the context of West Asian geopolitics."'
    ],
    officialSource: 'Ministry of External Affairs, India-Gulf Bilateral Briefs 2024'
  },
  {
    id: 'country-africa',
    country: 'African Continent',
    region: 'Global South',
    flag: '🇿🇦',
    historicalBackground: 'Shared history of anti-colonial struggle, Gandhi\'s political awakening in South Africa, and Non-Aligned Movement solidarity.',
    politicalRelations: 'Historic achievement: Permanent induction of the 55-member African Union (AU) into the G20 during India\'s G20 Presidency in New Delhi (September 2023). India-Africa Forum Summit (IAFS) institutional framework.',
    economicAndTrade: 'Bilateral trade ~$$100 billion. India is the 5th largest investor in Africa ($74+ billion cumulative). Duty-Free Tariff Preference (DFTP) scheme granted to 33 Least Developed African countries.',
    defenceAndSecurity: 'Maritime security cooperation in Western Indian Ocean (Mozambique, Madagascar, Seychelles, Mauritius). Pan-African defense training; joint exercise: AFINDEX.',
    waterOrEnergyCooperation: 'Concessional Lines of Credit (LoCs) exceeding $12 billion disbursed for drinking water schemes, rural electrification, and agro-processing plants.',
    diasporaProfile: 'Approximately 3 million strong Indian diaspora in South Africa, Kenya, Mauritius (where PIOs are majority and hold constitutional posts), Tanzania, and Nigeria.',
    multilateralCooperation: ['BRICS+ (South Africa, Egypt, Ethiopia)', 'IBSA', 'G20', 'International Solar Alliance (ISA)'],
    recentDevelopments: 'First overseas campus of IIT Madras established in Zanzibar, Tanzania (2023); first overseas campus of National Forensic Sciences University in Uganda.',
    strategicChallenges: [
      'Intense competition with China\'s Belt and Road Initiative (BRI) and large-scale state-backed loan diplomacy.',
      'Internal political coups across the Sahel region (Niger, Mali, Burkina Faso) and civil war in Sudan.'
    ],
    opportunities: [
      'Access to critical minerals (cobalt in DRC, lithium in Zimbabwe, platinum in South Africa).',
      'Pan-African e-Network project (tele-education and tele-medicine) expansion under eVAB (e-VidyaBharati and e-ArogyaBharati).'
    ],
    keyAgreements: [
      'India-Africa Forum Summit Declarations (Delhi, Addis Ababa, New Delhi)',
      'CECPA with Mauritius 2021 (India\'s first trade agreement with an African nation)'
    ],
    pyqs: [
      'UPSC CSE Mains 2021: "‘India’s Africa policy has acquired a new momentum in recent years.’ Discuss how India’s developmental partnership with Africa differs from that of China."'
    ],
    officialSource: 'Ministry of External Affairs, India-Africa Relations Brief 2024'
  },
  {
    id: 'country-australia',
    country: 'Australia & New Zealand',
    region: 'Indo-Pacific',
    flag: '🇦🇺',
    historicalBackground: 'Connected through Commonwealth heritage, parliamentary democracy, English language, and the 3Cs (Commonwealth, Cricket, and Curry); upgraded to Comprehensive Strategic Partnership.',
    politicalRelations: 'Annual Leaders\' Summits, 2+2 Ministerial Dialogues, and active cooperation under Quad. Mutual Logistics Support Agreement (MLSA) signed in 2020.',
    economicAndTrade: 'Economic Cooperation and Trade Agreement (ECTA) operationalized in December 2022 (eliminating customs duties on 96% of Indian exports). Negotiations underway for full Comprehensive Economic Cooperation Agreement (CECA).',
    defenceAndSecurity: 'Deep interoperability in maritime domain: Australia permanent participant in Malabar naval exercise since 2020; joint exercises: AUSINDEX, Pitch Black, Kakadu.',
    diasporaProfile: 'Over 800,000 Indian-Australians representing the second-largest and fastest-growing overseas immigrant community in Australia.',
    multilateralCooperation: ['QUAD', 'Supply Chain Resilience Initiative (SCRI)', 'G20', 'East Asia Summit'],
    recentDevelopments: 'Mechanism for Mutual Recognition of Educational Qualifications signed in 2023; Australian universities (Deakin and Wollongong) opened first foreign branch campuses in GIFT City, Gujarat.',
    strategicChallenges: [
      'Incidents of vandalism and attacks on Hindu temples by separatist fringe elements in Australian cities.',
      'Balancing commodity trade dynamics (coal, wine, agricultural access).'
    ],
    opportunities: [
      'Critical Minerals Investment Partnership: Australia has world\'s largest lithium and second-largest cobalt reserves vital for India\'s EV and battery manufacturing ambitions.'
    ],
    keyAgreements: [
      'Mutual Logistics Support Agreement (MLSA) 2020',
      'India-Australia Economic Cooperation and Trade Agreement (ECTA) 2022'
    ],
    pyqs: [
      'UPSC CSE Mains 2023: "The burgeoning India-Australia strategic ties are anchored in shared democratic values and a common vision for a free and open Indo-Pacific. Analyze."'
    ],
    officialSource: 'Ministry of External Affairs, India-Australia Bilateral Brief 2024'
  },
  {
    id: 'country-eu',
    country: 'European Union & Major European Powers',
    region: 'Europe',
    flag: '🇪🇺',
    historicalBackground: 'Deep historical, economic, and strategic links with member states (France, Germany, Italy, Nordics). France has acted as India\'s most reliable strategic partner in the Western world.',
    politicalRelations: 'Strategic Partnership established in 2004; Trade and Technology Council (TTC) launched in 2022 (second such platform for EU after US). Regular bilateral summits with France (President Macron Chief Guest at Republic Day 2024) and Germany.',
    economicAndTrade: 'EU is India\'s 2nd largest trading partner in goods (~€115 billion in 2022-23). Negotiations resumed for a tripartite comprehensive package: Bilateral Trade Agreement (FTA), Investment Protection Agreement, and Geographical Indications (GI) Agreement.',
    defenceAndSecurity: 'France is India\'s 2nd largest arms supplier (36 Rafale jets, Scorpene submarines P-75, Safran engine collaboration). Joint exercises with France: Varuna (naval), Garuda (air), Shakti (army).',
    waterOrEnergyCooperation: 'India-EU Clean Energy and Climate Partnership; green hydrogen taskforces with Germany.',
    diasporaProfile: 'Over 1.5 million Indians across EU countries, with Germany and Nordic nations actively attracting Indian STEM professionals through Mobility Partnerships.',
    multilateralCooperation: ['G20', 'UN', 'International Solar Alliance (co-founded with France)'],
    recentDevelopments: 'India-EFTA (European Free Trade Association: Switzerland, Norway, Iceland, Liechtenstein) Trade and Economic Partnership Agreement (TEPA) signed in March 2024 with a $100 billion investment commitment over 15 years.',
    strategicChallenges: [
      'EU\'s Carbon Border Adjustment Mechanism (CBAM - carbon tax on steel, aluminum imports) penalizing Indian industrial exports.',
      'Differing assessments regarding the Russia-Ukraine war and EU\'s human rights conditionalities in trade pacts.'
    ],
    opportunities: [
      'Diversifying defense technology away from Russia through European co-production.',
      'Migration and Mobility Partnership Agreements (MMPA) facilitating legal talent mobility for Indian tech professionals.'
    ],
    keyAgreements: [
      'India-EU Strategic Partnership 2004',
      'India-France Horizon 2047 Roadmap',
      'India-EFTA TEPA 2024'
    ],
    pyqs: [
      'UPSC CSE Mains 2023: "Discuss the implications of the European Union’s Carbon Border Adjustment Mechanism (CBAM) for India’s manufacturing exports and how India should respond diplomatically."'
    ],
    officialSource: 'Ministry of External Affairs, India-EU Brief 2024'
  },
  {
    id: 'country-latin-america',
    country: 'Latin America & Caribbean (LAC)',
    region: 'Global South',
    flag: '🇧🇷',
    historicalBackground: 'Traditionally constrained by geographic distance; transformed through South-South cooperation, BRICS (Brazil), and expanding energy/agricultural ties.',
    politicalRelations: 'Anchored by bilateral ties with Brazil (Strategic Partnership), Mexico, Argentina, and Chile. India-SICA and India-CARICOM summit dialogues.',
    economicAndTrade: 'Bilateral trade exceeded $50 billion. Preferential Trade Agreements (PTA) operational with MERCOSUR (Brazil, Argentina, Paraguay, Uruguay) and Chile.',
    defenceAndSecurity: 'Defense exports of BrahMos and radar systems explored; defense training cooperation with Brazil.',
    waterOrEnergyCooperation: 'Crude oil imports from Venezuela, Brazil, and Colombia; agricultural edible oil (soybean) imports from Argentina and Brazil.',
    diasporaProfile: 'Historical Indian indenture diaspora in Guyana, Suriname, and Trinidad & Tobago (where persons of Indian descent have served as Presidents and Prime Ministers).',
    multilateralCooperation: ['BRICS+ (Brazil)', 'G4 (India and Brazil)', 'IBSA', 'G20'],
    recentDevelopments: 'KABIL (Khanij Bidesh India Ltd) signed an agreement in January 2024 for lithium exploration and mining rights over 5 blocks in Catamarca province, Argentina.',
    strategicChallenges: [
      'Long maritime transit times and high shipping freight logistics costs.',
      'Political volatility and left-right ideological shifts across Latin American capitals.'
    ],
    opportunities: [
      '"Lithium Triangle" (Argentina, Bolivia, Chile) partnerships to power India\'s electric mobility transition.',
      'Expansion of MERCOSUR PTA into a comprehensive economic partnership.'
    ],
    keyAgreements: [
      'India-MERCOSUR Preferential Trade Agreement (PTA) 2004',
      'KABIL-CAMYEN Lithium Exploration Pact 2024'
    ],
    pyqs: [
      'UPSC CSE Mains 2018: "India\'s relations with Latin America have remained largely transactional and limited. Discuss how India can leverage the \'Lithium Triangle\' and South-South cooperation to expand its footprint in the region."'
    ],
    officialSource: 'Ministry of External Affairs, India-LAC Relations Brief 2024'
  },
  {
    id: 'country-pacific-islands',
    country: 'Pacific Island Nations (FIPIC)',
    region: 'Indo-Pacific',
    flag: '🇫🇯',
    historicalBackground: 'Strong historical connect with Fiji where "Girmitiya" indentured laborers settled in late 19th century; shared vulnerability to climate change and sea-level rise.',
    politicalRelations: 'Institutionalized through the Forum for India-Pacific Islands Cooperation (FIPIC) comprising India and 14 Pacific Island nations (Fiji, Papua New Guinea, Cook Islands, Kiribati, Marshall Islands, Micronesia, Nauru, Niue, Palau, Samoa, Solomon Islands, Tonga, Tuvalu, Vanuatu).',
    economicAndTrade: 'Concessional lines of credit, grant-in-aid development assistance, and capacity building under ITEC scholarships.',
    defenceAndSecurity: 'Cooperation in Maritime Domain Awareness (MDA) and disaster management; balancing major-power militarization in the South Pacific.',
    diasporaProfile: 'Substantial Indian-origin population in Fiji (~37% of total population).',
    multilateralCooperation: ['FIPIC', 'International Solar Alliance', 'Coalition for Disaster Resilient Infrastructure (CDRI)'],
    recentDevelopments: '3rd FIPIC Summit co-chaired by Prime Minister Modi in Port Moresby, Papua New Guinea (May 2023); highest civilian honors conferred on PM Modi by Papua New Guinea and Fiji.',
    strategicChallenges: [
      'Intense geopolitical rivalry between China (security pacts with Solomon Islands) and US-Australia alliances.',
      'Catastrophic existential threat of climate change and submersion of low-lying atoll nations.'
    ],
    opportunities: [
      'Establishment of super-specialty cardiology hospital in Fiji and solarization of Pacific government buildings.',
      'Strengthening Pacific voice in multilateral climate negotiations and Loss and Damage funding.'
    ],
    keyAgreements: [
      'FIPIC Summit Declarations (Suva, Jaipur, Port Moresby)'
    ],
    pyqs: [
      'UPSC CSE Mains 2023: "Examine the strategic and developmental significance of the Forum for India-Pacific Islands Cooperation (FIPIC) for India’s Indo-Pacific strategy."'
    ],
    officialSource: 'Ministry of External Affairs, FIPIC Overview 2024'
  }
];
