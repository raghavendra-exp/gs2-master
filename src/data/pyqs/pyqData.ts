export interface PYQItem {
  id: string;
  exam: 'UPSC' | 'UPPSC';
  year: number;
  stage: 'Prelims' | 'Mains';
  paper: string;
  questionNumber: string;
  question: string;
  topic: string;
  subtopic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  conceptsTested: string[];
  officialSource: string;
  explanationOrModelPoints: string[];
  relatedTopics: string[];
  options?: { id: string; text: string }[];
  correctOption?: string;
  mainsMarks?: 10 | 12 | 15 | 20;
}

export const PYQ_DATABASE: PYQItem[] = [
  {
    id: 'pyq-upsc-pre-2023-1',
    exam: 'UPSC',
    year: 2023,
    stage: 'Prelims',
    paper: 'GS Paper I',
    questionNumber: 'Q.14',
    question: 'In India, which one of the following constitutional amendments was widely believed to be enacted to overcome the judicial interpretations of Fundamental Rights?',
    options: [
      { id: 'A', text: '1st Amendment' },
      { id: 'B', text: '42nd Amendment' },
      { id: 'C', text: '44th Amendment' },
      { id: 'D', text: '86th Amendment' }
    ],
    correctOption: 'A',
    topic: 'Constitution',
    subtopic: 'Constitutional Amendments',
    difficulty: 'Medium',
    conceptsTested: ['1st Constitutional Amendment 1951', 'Ninth Schedule', 'Romesh Thappar case', 'Kameshwar Singh case'],
    officialSource: 'UPSC Civil Services Preliminary Examination 2023 Official Answer Key',
    explanationOrModelPoints: [
      'The 1st Amendment Act 1951 was enacted to overcome judicial hurdles created by Supreme Court judgments such as State of Madras v. Champakam Dorairajan (reservation in colleges), Romesh Thappar v. State of Madras (free speech), and Kameshwar Singh (zamindari abolition).',
      'It introduced Article 31A, 31B and the Ninth Schedule to immunize agrarian land reforms from judicial review on fundamental rights grounds.'
    ],
    relatedTopics: ['Fundamental Rights', 'Article 19(2)', 'Ninth Schedule', 'Judicial Review']
  },
  {
    id: 'pyq-upsc-pre-2023-2',
    exam: 'UPSC',
    year: 2023,
    stage: 'Prelims',
    paper: 'GS Paper I',
    questionNumber: 'Q.22',
    question: 'Consider the following statements:\nStatement-I: The Supreme Court of India has held in some judgments that the reservation policies made under Article 16(4) of the Constitution of India would be limited by Article 335 for maintenance of efficiency of administration.\nStatement-II: Article 335 of the Constitution of India defines the term "efficiency of administration".\nWhich one of the following is correct in respect of the above statements?',
    options: [
      { id: 'A', text: 'Both Statement-I and Statement-II are correct and Statement-II is the correct explanation for Statement-I' },
      { id: 'B', text: 'Both Statement-I and Statement-II are correct and Statement-II is not the correct explanation for Statement-I' },
      { id: 'C', text: 'Statement-I is correct but Statement-II is incorrect' },
      { id: 'D', text: 'Statement-I is incorrect but Statement-II is correct' }
    ],
    correctOption: 'C',
    topic: 'Constitution',
    subtopic: 'Fundamental Rights & Reservations',
    difficulty: 'Hard',
    conceptsTested: ['Article 16(4)', 'Article 335', 'Definition of constitutional terms'],
    officialSource: 'UPSC CSE Prelims 2023 Official Answer Key',
    explanationOrModelPoints: [
      'Statement-I is CORRECT: In M. Nagaraj v. Union of India (2006) and Indra Sawhney, the Supreme Court held that Article 335 acts as a limiting factor on the power of reservation under Article 16(4).',
      'Statement-II is INCORRECT: The Constitution of India DOES NOT define the term "efficiency of administration". In B.K. Pavitra (II) (2019), the SC clarified that efficiency is not defined in Art 335 and should be understood inclusively rather than solely through marks-based merit.'
    ],
    relatedTopics: ['Affirmative Action', 'Article 16', 'Article 335', 'Judicial Interpretation']
  },
  {
    id: 'pyq-upsc-mains-2023-1',
    exam: 'UPSC',
    year: 2023,
    stage: 'Mains',
    paper: 'GS-II',
    questionNumber: 'Q.1',
    mainsMarks: 10,
    question: '"Constitutionally guaranteed judicial independence is a prerequisite of democracy." Comment. (Answer in 150 words)',
    topic: 'Judiciary',
    subtopic: 'Judicial Independence & Basic Structure',
    difficulty: 'Medium',
    conceptsTested: ['Judicial Independence', 'Basic Structure', 'Separation of Powers', 'Rule of Law', 'Checks and Balances'],
    officialSource: 'UPSC CSE Mains 2023 GS-II Question Paper',
    explanationOrModelPoints: [
      'Introduction: Define judicial independence as freedom from executive coercion and legislative encroachment, declared a basic feature in NJAC (2015) and 2nd Judges case (1993).',
      'Constitutional safeguards: Security of tenure (Art 124(4)), salaries charged on Consolidated Fund (Art 125/146), bar on discussing judge conduct in Parliament (Art 121), contempt powers (Art 129/215).',
      'Why a prerequisite of democracy: Protects Fundamental Rights against majoritarian tyranny (Art 32/226); acts as neutral umpire in federal disputes (Art 131); checks arbitrariness in executive actions via judicial review.',
      'Emerging challenges: Post-retirement appointments, executive delays in Collegium cleared names, tribunalization, and rising case pendency.',
      'Conclusion: Balance between independence and accountability (Memorandum of Procedure revision, transparency, institutional ethics).'
    ],
    relatedTopics: ['Supreme Court', 'Collegium System', 'Separation of Powers', 'Article 124']
  },
  {
    id: 'pyq-upsc-mains-2023-2',
    exam: 'UPSC',
    year: 2023,
    stage: 'Mains',
    paper: 'GS-II',
    questionNumber: 'Q.14',
    mainsMarks: 15,
    question: '"The expansion and strengthening of NATO and a stronger US-Europe strategic partnership works well for India." What is your opinion about this statement? Give reasons and suitable examples. (Answer in 250 words)',
    topic: 'International Relations',
    subtopic: 'Global Security & Strategic Autonomy',
    difficulty: 'Hard',
    conceptsTested: ['NATO Expansion', 'India-US Strategic Partnership', 'India-Russia Relations', 'Strategic Autonomy'],
    officialSource: 'UPSC CSE Mains 2023 GS-II Question Paper',
    explanationOrModelPoints: [
      'Introduction: Contextualize NATO expansion post-Finland/Sweden accession and the intensification of US-Europe transatlantic defense alliance amidst Russia-Ukraine war.',
      'Favourable Arguments (How it works well for India): (1) Stronger West counterbalances Chinese expansionism in Indo-Pacific; (2) Deepens India-West tech transfers (iCET, clean energy); (3) NATO Plus dialogue offers intelligence sharing on cyber and terrorism.',
      'Unfavourable Arguments (Challenges for India): (1) Severe pressure on India’s historic partnership with Russia (military hardware supply chain, energy imports); (2) Diverts US strategic bandwidth from Indo-Pacific to European theater; (3) Pushes Russia closer into Beijing’s geopolitical orbit.',
      'India’s strategic stance: Multi-alignment, strategic autonomy, engaging Europe (India-Nordic summit, IMEC corridor) while maintaining independent Eurasian policy.',
      'Conclusion: India must safeguard its core security priorities in the Indian Ocean without being trapped in binary European security architecture.'
    ],
    relatedTopics: ['NATO', 'Indo-Pacific', 'India-US Relations', 'India-Russia Relations']
  },
  {
    id: 'pyq-uppsc-mains-2023-1',
    exam: 'UPPSC',
    year: 2023,
    stage: 'Mains',
    paper: 'GS-II',
    questionNumber: 'Q.3',
    mainsMarks: 12,
    question: 'Discuss the powers and role of the Governor of Uttar Pradesh in the constitutional machinery of the State. (Answer in 200 words)',
    topic: 'Polity',
    subtopic: 'State Executive & Governor',
    difficulty: 'Medium',
    conceptsTested: ['Article 153 to 164', 'Gubernatorial discretion', 'Relationship with Chief Minister', 'Assent to Bills under Art 200'],
    officialSource: 'UPPSC Combined State/Upper Subordinate Examination Mains 2023',
    explanationOrModelPoints: [
      'Introduction: Governor is the constitutional head of the state under Article 153, exercising executive powers on the aid and advice of the Council of Ministers headed by the CM (Art 163).',
      'Dual role: Constitutional head of the State + agent of the Union government.',
      'Key Powers: Executive (appointments of CM, Advocate General, UPPSC members), Legislative (summoning, proroguing, ordinance making under Art 213, assent to bills under Art 200), Financial, and Discretionary.',
      'Specific Constitutional Discretion: Selection of CM in hung assembly, dismissal of ministry that lost majority, reporting under Art 356, reservation of bills for President under Art 201.',
      'UP Context: Administration of vast demographic state, ensuring administrative stability, role as Chancellor of State Universities.',
      'Conclusion: Uphold Sarkaria and Punchhi commission norms to function as an impartial constitutional umpire.'
    ],
    relatedTopics: ['Governor', 'Article 163', 'Article 200', 'State Legislature']
  }
];
