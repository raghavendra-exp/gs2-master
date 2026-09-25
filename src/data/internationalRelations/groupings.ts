import { RegionalGrouping, GlobalInstitution } from '../../types';

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
      'Risk of being perceived as an anti-Western axis due to Russian and Iranian membership.',
      'Economic asymmetries among member states.'
    ],
    futureRelevance: 'Represents over 45% of the world’s population and ~37% of global GDP in PPP terms; paramount vehicle for South-South cooperation.',
    officialSource: 'BRICS Information Centre & Ministry of External Affairs'
  },
  {
    id: 'grp-bimstec',
    name: 'Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation',
    acronym: 'BIMSTEC',
    originYear: 1997,
    headquarters: 'Dhaka, Bangladesh',
    memberCountries: ['Bangladesh', 'Bhutan', 'India', 'Myanmar', 'Nepal', 'Sri Lanka', 'Thailand'],
    purpose: 'Bridge between South Asia and Southeast Asia; sub-regional economic, trade, connectivity, and technological cooperation surrounding the Bay of Bengal.',
    structure: 'Summit, Ministerial Meetings, Senior Officials’ Meetings, and Permanent Secretariat in Dhaka.',
    indiaRole: 'Lead country; driving maritime security, coastal shipping, disaster management, and physical connectivity (Kaladan Multi-Modal Project, India-Myanmar-Thailand Trilateral Highway).',
    indiaInterests: [
      'Vehicle for both "Neighbourhood First" and "Act East" foreign policy doctrines.',
      'Alternative to the stalled SAARC (blocked due to Pakistan’s non-cooperation).',
      'Economic integration and maritime access for India’s landlocked North Eastern Region.'
    ],
    recentDevelopments: 'Entry into force of the BIMSTEC Charter (2024) granting legal personality and institutional framework; BIMSTEC Master Plan for Transport Connectivity.',
    challenges: [
      'Political volatility in Myanmar and regime shifts in Bangladesh.',
      'Sluggish pace of concluding the BIMSTEC Free Trade Agreement (FTA) initiated in 2004.',
      'Modest institutional funding and administrative bandwidth compared to ASEAN.'
    ],
    futureRelevance: 'Key to unlocking the untapped economic potential of the Bay of Bengal littoral, connecting 1.7 billion people.',
    officialSource: 'BIMSTEC Secretariat (https://bimstec.org) & MEA'
  },
  {
    id: 'grp-g20',
    name: 'Group of Twenty',
    acronym: 'G20',
    originYear: 1999,
    headquarters: 'No permanent secretariat (Rotating Troika Presidency)',
    memberCountries: ['19 Countries + European Union + African Union (admitted under India’s 2023 Presidency)'],
    purpose: 'Premier forum for international economic cooperation, global financial stability, climate mitigation, debt restructuring, and sustainable development.',
    structure: 'Finance Track (Finance Ministers & Central Bank Governors) and Sherpa Track (Socio-economic policies).',
    indiaRole: 'Presidency in 2023 ("Vasudhaiva Kutumbakam - One Earth, One Family, One Future"); successfully inducted the African Union as a permanent member.',
    indiaInterests: [
      'Championing Global South priorities: Multilateral Development Bank (MDB) reforms, sovereign debt relief, green development pact.',
      'Global consensus on Digital Public Infrastructure (DPI) and AI governance.',
      'Launching the Global Biofuels Alliance and the India-Middle East-Europe Economic Corridor (IMEC).'
    ],
    recentDevelopments: 'Follow-up under Brazilian Presidency (2024) and South African Presidency (2025) advancing India’s developmental priorities on global hunger and MDB reforms.',
    challenges: [
      'Geopolitical fault lines (Russia-Ukraine, West Asia crisis) impeding economic communiqués.',
      'Rising protectionism and unilateral trade tariffs among member economies.',
      'Debt distress in low-income countries remaining unresolved by the G20 Common Framework.'
    ],
    futureRelevance: 'Only forum that brings together the leaders of developed and developing superpowers representing 85% of global GDP.',
    officialSource: 'G20 India 2023 Archives & Ministry of External Affairs'
  }
];

export const GLOBAL_INSTITUTIONS: GlobalInstitution[] = [
  {
    id: 'org-unsc',
    name: 'United Nations Security Council',
    acronym: 'UNSC',
    establishedYear: 1945,
    headquarters: 'New York City, USA',
    membersCount: '15 Members (5 Permanent: P5 - USA, Russia, China, UK, France with veto power; 10 Non-permanent elected for 2-year terms)',
    mandate: 'Primary responsibility under the UN Charter for the maintenance of international peace and security. Can adopt binding resolutions, authorize military interventions, and impose sanctions.',
    structureAndVoting: 'Each member has one vote. Substantive decisions require 9 affirmative votes including the concurring votes of all P5 members. A single negative vote by any P5 constitutes a VETO.',
    indiaRole: 'Elected 8 times as a non-permanent member (last term 2021-22). Founding member of the G4 (India, Brazil, Germany, Japan) and L.69 grouping demanding urgent comprehensive expansion in both permanent and non-permanent categories.',
    reformDemands: 'Text-Based Negotiations (IGN - Intergovernmental Negotiations) for UNSC expansion, abolition or regulation of the veto, and representation for Africa and Latin America.',
    recentDevelopments: 'UN Summit of the Future (September 2024) adopted the "Pact for the Future", explicitly recognizing the urgent need to make the Security Council more representative and effective.',
    challenges: [
      'Paralysis caused by P5 veto use during major international wars (Gaza, Ukraine, Syria).',
      'Resistance from the "Uniting for Consensus" (Coffee Club) grouping opposing new permanent seats.',
      'Loss of institutional legitimacy and credibility as the primary guardian of global peace.'
    ],
    pyqs: [
      'UPSC CSE Mains 2021: "Critically examine the role of India in UN Peacekeeping operations and the need for structural reforms in the UNSC."',
      'UPSC CSE Mains 2015: "Discuss the impediments India faces in securing a permanent seat in the UN Security Council."'
    ],
    officialSource: 'United Nations Charter & Permanent Mission of India to the UN'
  },
  {
    id: 'org-wto',
    name: 'World Trade Organization',
    acronym: 'WTO',
    establishedYear: 1995,
    headquarters: 'Geneva, Switzerland',
    membersCount: '166 Member States',
    mandate: 'Supervises and liberalizes international trade; administers multilateral trade agreements; serves as a forum for trade negotiations and dispute settlement.',
    structureAndVoting: 'Ministerial Conference (highest body meeting biennially); General Council; Dispute Settlement Body (DSB) and Appellate Body. Operates by consensus.',
    indiaRole: 'Leading defender of developing country interests and Special and Differential Treatment (S&DT); spearheaded the demand for a permanent solution on public stockholding for food security.',
    reformDemands: 'Restoration of the two-tier dispute settlement mechanism (Appellate Body has been non-functional since 2019 due to US blocking judge appointments) and preserving consensus-based decision-making.',
    recentDevelopments: '13th Ministerial Conference (MC13) in Abu Dhabi (2024): India successfully defended the moratorium on e-commerce customs duties while keeping public stockholding negotiations alive.',
    challenges: [
      'Paralysis of the Appellate Body rendering the dispute resolution mechanism toothless.',
      'Proliferation of plurilateral agreements (Joint Statement Initiatives - JSIs) bypassing the multilateral consensus principle.',
      'Unilateral green subsidies and carbon border adjustment mechanisms (EU CBAM) challenging WTO non-discrimination principles.'
    ],
    pyqs: [
      'UPSC CSE Mains 2018: "What are the key issues that hinder the dispute resolution mechanism of the WTO? How does it affect developing countries like India?"',
      'UPSC CSE Mains 2020: "COVID-19 pandemic exposed the fragility of global trade rules. In this context, evaluate WTO reforms."'
    ],
    officialSource: 'WTO Official Portal (https://wto.org) & Ministry of Commerce and Industry'
  }
];
