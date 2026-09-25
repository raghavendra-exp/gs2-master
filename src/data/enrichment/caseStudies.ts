import { CaseStudyItem } from '../../types';

export const CASE_STUDIES_DATABASE: CaseStudyItem[] = [
  {
    id: 'cs-kudumbashree',
    title: 'Kudumbashree: State Poverty Eradication Mission',
    sector: 'Social Justice',
    location: 'Kerala, India',
    problem: 'Pervasive poverty, lack of credit access, and low civic and political participation among marginalized rural and urban women.',
    intervention: 'A three-tiered community network (Neighborhood Groups - NHGs, Area Development Societies - ADSs, and Community Development Societies - CDSs) linked organically to local Panchayati Raj institutions.',
    institution: 'State Poverty Eradication Mission (SPEM), Government of Kerala & Local Self Government Department',
    outcome: 'Over 4.5 million women organized into 3 lakh self-help groups; mobilized micro-credit, established thousands of micro-enterprises, handled community kitchens during natural disasters, and over 7,000 Kudumbashree members won local body elections.',
    lesson: 'Convergence of Self-Help Groups (SHGs) with formal local self-governments bridges the gap between representative democracy and participatory community empowerment.',
    source: 'NITI Aayog Best Practices in Social Development & Kudumbashree Official Mission Reports'
  },
  {
    id: 'cs-amrit-sarovar',
    title: 'Mission Amrit Sarovar: Community Water Rejuvenation',
    sector: 'Local Government',
    location: 'Nationwide (Pioneered intensively across Uttar Pradesh)',
    problem: 'Depleting rural groundwater aquifers, drying up of traditional water bodies, and erratic monsoon cycles threatening agrarian security.',
    intervention: 'A mission to construct or rejuvenate at least 75 Amrit Sarovars (ponds with min 1-acre water holding area) in each district of India through community mobilization, MGNREGA convergence, and geospatial tagging.',
    institution: 'Ministry of Rural Development & Ministry of Panchayati Raj, GoI',
    outcome: 'Over 68,000 Amrit Sarovars completed nationwide; generated millions of person-days of employment; enhanced groundwater recharge and provided livelihood options via inland fisheries and water tourism.',
    lesson: 'Asset creation under wage-employment schemes achieves long-term ecological resilience when combined with civic pride (flag hoisting on Amrit Sarovar banks on Independence Day).',
    source: 'Ministry of Rural Development (https://water.ncog.gov.in/amritSarovar)',
    upSpecific: true
  },
  {
    id: 'cs-pragati-governance',
    title: 'PRAGATI (Pro-Active Governance And Timely Implementation)',
    sector: 'Governance',
    location: 'Union Government of India (PMO & All States)',
    problem: 'Chronic time and cost overruns in multi-billion dollar infrastructure and social development projects due to inter-ministerial silos, stalled state land clearances, and bureaucratic apathy.',
    intervention: 'A multi-modal digital platform uniquely combining digital data management, satellite imagery (geo-spatial monitoring), and monthly interactive video-conferencing chaired personally by the Prime Minister with Central Secretaries and State Chief Secretaries.',
    institution: 'Prime Minister’s Office (PMO) & National Informatics Centre (NIC)',
    outcome: 'Over 340 projects with cumulative investment exceeding ₹17.5 lakh crore reviewed and bottlenecks dismantled; accelerated dedicated freight corridors, metro systems, and highway networks.',
    lesson: 'High-level political ownership combined with technology-driven federal dialogue cuts through administrative gridlocks and establishes vertical executive accountability.',
    source: 'Cabinet Secretariat & Prime Minister’s Office (https://pmindia.gov.in)'
  },
  {
    id: 'cs-odop-up',
    title: 'One District One Product (ODOP) Scheme',
    sector: 'Civil Services',
    location: 'Uttar Pradesh (later scaled nationally by Ministry of Commerce)',
    problem: 'Decline of traditional artisan clusters, lack of modern branding, predatory middlemen, and regional economic imbalances across 75 districts of UP.',
    intervention: 'Civil administration mapped district-specific specialized indigenous products (e.g. Firozabad glass, Bhadohi carpets, Lucknow Chikan, Kannauj perfume), providing common facility centres, skill upgrade, digital marketing on GeM/Amazon, and subsidized credit under Margin Money scheme.',
    institution: 'Department of MSME and Export Promotion, Government of Uttar Pradesh',
    outcome: 'UP’s merchandise exports increased from ~₹88,000 crore to over ₹1.7 lakh crore; revitalized thousands of micro-enterprises and reduced distress migration.',
    lesson: 'Administrative leadership that identifies localized indigenous competitive advantages can ignite rural industrialization and inclusive economic growth.',
    source: 'Department of MSME, Govt of Uttar Pradesh (https://odopup.in)',
    upSpecific: true
  },
  {
    id: 'cs-operation-ganga',
    title: 'Operation Ganga & Operation Kaveri: Humanitarian Evacuation Diplomacy',
    sector: 'International Relations',
    location: 'Ukraine (2022) & Sudan (2023)',
    problem: 'Active war zones trapping thousands of Indian citizens (largely medical students in Ukraine and blue-collar diaspora in Sudan), requiring urgent extraction amidst bombardment.',
    intervention: 'High-level multi-track diplomacy (direct communication with heads of state of Ukraine, Russia, Poland, Romania, Hungary, and Sudan military factions) to establish ceasefire corridors, complemented by deployment of IAF C-17 aircraft and deployment of Special Union Envoys at border checkposts.',
    institution: 'Ministry of External Affairs, Indian Air Force, and Indian Navy',
    outcome: 'Evacuated over 22,500 Indian citizens from Ukraine and over 4,000 from Sudan without loss of Indian lives, while also providing humanitarian assistance to citizens of neighbouring developing countries.',
    lesson: 'Diaspora protection is an integral imperative of India’s foreign policy, projecting state capacity, consular agility, and strategic credibility on the world stage.',
    source: 'Ministry of External Affairs, Annual Report 2022-23'
  }
];
