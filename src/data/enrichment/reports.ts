import { ReportItem } from '../../types';

export const REPORTS_DATABASE: ReportItem[] = [
  {
    id: 'rep-mpi-niti',
    title: 'National Multidimensional Poverty Index (MPI): A Progress Review',
    publisher: 'NITI Aayog',
    year: 2023,
    purpose: 'Measure acute deprivations in health, education, and standard of living across 12 indicators aligned with global Alkire-Foster methodology.',
    majorFindings: [
      'Steep decline in multidimensional poverty in India from 24.85% in 2015-16 to 14.96% in 2019-21.',
      'Approximately 13.5 crore Indians exited multidimensional poverty within a five-year period.',
      'Fastest reduction observed in rural areas where poverty dropped from 32.59% to 19.28%.',
      'Cooking fuel, sanitation, and housing deprivations witnessed the steepest reductions due to targeted welfare missions (Ujjwala, SBM-G, PMAY).'
    ],
    indiaSpecificData: 'Uttar Pradesh registered the largest absolute decline in multidimensionally poor population across India (3.43 crore people lifted out of multidimensional poverty), followed by Bihar and Madhya Pradesh.',
    gs2Relevance: 'Poverty measurement, human development indicators, targeting of social protection schemes, and socio-economic rights.',
    officialUrl: 'https://niti.gov.in/report/national-multidimensional-poverty-index-2023'
  },
  {
    id: 'rep-sdg-india-index',
    title: 'SDG India Index & Dashboard',
    publisher: 'NITI Aayog & United Nations in India',
    year: 2024,
    purpose: 'Track holistic progress of all 28 States and 8 UTs on 113 national indicators across 16 Sustainable Development Goals (SDGs).',
    majorFindings: [
      'Composite national SDG score improved from 57 in 2018 to 74 in 2023-24.',
      'Significant progress in Goal 1 (No Poverty), Goal 6 (Clean Water and Sanitation), Goal 7 (Affordable Clean Energy), and Goal 11 (Sustainable Cities).',
      'Persistent lag in Goal 2 (Zero Hunger / Nutrition) and Goal 5 (Gender Equality).'
    ],
    indiaSpecificData: 'Top performing States: Kerala and Uttarakhand (Score: 79). Fast mover category: Uttar Pradesh improved score from 42 (2018) to 67 (2024), shifting from Aspirant to Performer category.',
    gs2Relevance: 'Cooperative and competitive federalism, institutional localization of SDGs, social justice tracking, and state-level benchmarking.',
    officialUrl: 'https://sdgindiaindex.niti.gov.in'
  },
  {
    id: 'rep-aser-pratham',
    title: 'Annual Status of Education Report (ASER)',
    publisher: 'Pratham Education Foundation',
    year: 2023,
    purpose: 'Assess basic foundational literacy and numeracy (FLN) among rural children aged 6-14 and digital readiness among youth aged 14-18.',
    majorFindings: [
      'National enrollment rates remain high at 98.4% for ages 6-14, demonstrating near-universal access.',
      'Severe learning deficits: Only ~42% of Class 5 students in rural government schools can read a simple Class 2 level text.',
      'Basic arithmetic deficits: Less than 26% of Class 5 children can solve a basic 3-digit by 1-digit division problem.',
      'High digital device ownership among rural youth (>90% smartphone access), but usage is predominantly entertainment-driven rather than educational.'
    ],
    indiaSpecificData: 'Reiterated the urgent need for mission-mode implementation of NIPUN Bharat (National Initiative for Proficiency in Reading with Understanding and Numeracy) by Grade 3.',
    gs2Relevance: 'School education, learning poverty, demographic dividend, RTE Act performance, and human capital formation.',
    officialUrl: 'https://asercentre.org'
  },
  {
    id: 'rep-ijr-tata',
    title: 'India Justice Report: Ranking States on Police, Judiciary, Prisons and Legal Aid',
    publisher: 'Tata Trusts & Centre for Social Justice, DAKSH, CHRI, Vidhi',
    year: 2023,
    purpose: 'Quantitatively benchmark the four pillars of the justice system (Police, Judiciary, Prisons, Legal Aid) across 18 large and mid-sized States.',
    majorFindings: [
      'Not a single State achieves 100% sanctioned capacity across all four pillars.',
      'Prison overcrowding: National prison occupancy stands at 130%; undertrial prisoners account for 77% of all inmates.',
      'Women representation across justice institutions remains sluggish at only ~13% in police and ~35% in subordinate courts.',
      'High judicial vacancies: Nearly 30% of High Court judge posts and 21% of subordinate court judge posts remain unfilled.'
    ],
    indiaSpecificData: 'Top ranked large state for overall justice delivery was Karnataka; Uttar Pradesh ranked in lower tier due to severe case backlogs in Allahabad High Court and crowded correctional facilities.',
    gs2Relevance: 'Criminal justice reforms, prison overpopulation, police reforms (Prakash Singh directives), and access to justice under Article 39A.',
    officialUrl: 'https://indiajusticereport.org'
  }
];
