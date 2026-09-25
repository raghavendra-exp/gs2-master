export interface BasicStructureMilestone {
  year: number;
  caseOrEvent: string;
  benchSize: number | string;
  verdict: string;
  impactOnDoctrine: string;
}

export const BASIC_STRUCTURE_TIMELINE: BasicStructureMilestone[] = [
  {
    year: 1951,
    caseOrEvent: 'Shankari Prasad v. Union of India',
    benchSize: 5,
    verdict: 'Parliament can amend any part of the Constitution, including Fundamental Rights under Article 368. An amendment is not "law" under Article 13(2).',
    impactOnDoctrine: 'Established total parliamentary supremacy over Fundamental Rights.'
  },
  {
    year: 1965,
    caseOrEvent: 'Sajjan Singh v. State of Rajasthan',
    benchSize: 5,
    verdict: 'Reiterated Shankari Prasad. However, Justice J.R. Mudholkar raised the question whether the basic features of the Constitution could be changed by amendment.',
    impactOnDoctrine: 'First judicial conceptual seeds of "basic features" planted.'
  },
  {
    year: 1967,
    caseOrEvent: 'I.C. Golaknath v. State of Punjab',
    benchSize: 11,
    verdict: '6:5 majority held that Fundamental Rights are transcendental and immutable. Constitutional amendments are "law" under Article 13(2); Parliament has no power to abrogate them.',
    impactOnDoctrine: 'Complete swing towards judicial supremacy; precipitated constitutional conflict.'
  },
  {
    year: 1971,
    caseOrEvent: '24th and 25th Constitutional Amendments',
    benchSize: 'Parliament',
    verdict: 'Parliament amended Articles 13 and 368 to explicitly assert constituent power to amend any provision of the Constitution without limits.',
    impactOnDoctrine: 'Legislative counter-attack on Golaknath ruling.'
  },
  {
    year: 1973,
    caseOrEvent: 'Kesavananda Bharati v. State of Kerala (April 24, 1973)',
    benchSize: 13,
    verdict: '7:6 historic majority overruled Golaknath. Upheld 24th Amendment, but held Parliament’s amending power under Article 368 is limited: it CANNOT alter or destroy the "Basic Structure" of the Constitution.',
    impactOnDoctrine: 'Birth of the Basic Structure Doctrine; established Constitutional Supremacy over Parliamentary Sovereignty.'
  },
  {
    year: 1975,
    caseOrEvent: 'Indira Nehru Gandhi v. Raj Narain',
    benchSize: 5,
    verdict: 'Struck down Article 329A(4) (inserted by 39th CAA) which placed the election of Prime Minister and Speaker outside judicial review. Held rule of law, democracy, and free & fair elections are basic features.',
    impactOnDoctrine: 'First practical application of the doctrine to strike down a constitutional amendment.'
  },
  {
    year: 1980,
    caseOrEvent: 'Minerva Mills v. Union of India',
    benchSize: 5,
    verdict: 'Struck down Section 4 and Section 55 of 42nd CAA. Held that limited amending power itself is a basic feature; balance between Part III (FRs) and Part IV (DPSPs) is part of basic structure.',
    impactOnDoctrine: 'Prevented Parliament from expanding its own amending power into unlimited constituent power.'
  },
  {
    year: 1981,
    caseOrEvent: 'Waman Rao v. Union of India',
    benchSize: 5,
    verdict: 'Clarified the cut-off date: All amendments and Ninth Schedule inclusions made before April 24, 1973 are valid, but those post-April 24, 1973 are subject to the Basic Structure test.',
    impactOnDoctrine: 'Set a clear temporal boundary (Doctrine of prospective operation).'
  },
  {
    year: 1994,
    caseOrEvent: 'S.R. Bommai v. Union of India',
    benchSize: 9,
    verdict: 'Held Federalism and Secularism are integral parts of the basic structure. Proclamation of President’s Rule under Article 356 is subject to judicial review.',
    impactOnDoctrine: 'Expanded doctrine to protect federal principles and secular credentials.'
  },
  {
    year: 1997,
    caseOrEvent: 'L. Chandra Kumar v. Union of India',
    benchSize: 7,
    verdict: 'Held the power of judicial review under Articles 32 and 226 over administrative and tribunal orders is an essential basic feature that cannot be excluded.',
    impactOnDoctrine: 'Guaranteed access to High Courts and Supreme Court against tribunalization.'
  },
  {
    year: 2007,
    caseOrEvent: 'I.R. Coelho v. State of Tamil Nadu',
    benchSize: 9,
    verdict: 'Unanimously ruled that Ninth Schedule laws inserted after April 24, 1973 do not enjoy blanket immunity. If they violate the "essence of Fundamental Rights" or Basic Structure, they will be invalidated.',
    impactOnDoctrine: 'Subjugated Ninth Schedule completely to Basic Structure scrutiny.'
  },
  {
    year: 2015,
    caseOrEvent: 'Supreme Court Advocates-on-Record Association (NJAC Case)',
    benchSize: 5,
    verdict: '4:1 majority struck down 99th Constitutional Amendment Act and the NJAC Act. Held that Judicial Independence and Collegium primacy are part of the basic structure.',
    impactOnDoctrine: 'Asserted that executive inclusion in judicial appointment alters judicial independence.'
  }
];

export const BASIC_STRUCTURE_FEATURES: { feature: string; sourceCase: string; description: string }[] = [
  { feature: 'Supremacy of the Constitution', sourceCase: 'Kesavananda Bharati (1973)', description: 'The Constitution, not Parliament or Executive, is supreme.' },
  { feature: 'Republican and Democratic form of government', sourceCase: 'Kesavananda Bharati (1973)', description: 'Elected heads, adult franchise, and periodic free elections.' },
  { feature: 'Secular character of the Constitution', sourceCase: 'Kesavananda Bharati (1973) & S.R. Bommai (1994)', description: 'State has no official religion; treats all faiths equally.' },
  { feature: 'Federal character of the Constitution', sourceCase: 'Kesavananda Bharati (1973) & S.R. Bommai (1994)', description: 'Constitutional division of legislative, executive and financial powers between Union and States.' },
  { feature: 'Separation of Powers', sourceCase: 'Kesavananda Bharati (1973)', description: 'Demarcation of roles among Legislature, Executive, and Judiciary with checks and balances.' },
  { feature: 'Judicial Review', sourceCase: 'Minerva Mills (1980) & L. Chandra Kumar (1997)', description: 'Inherent authority of constitutional courts to examine legislative and executive acts.' },
  { feature: 'Rule of Law', sourceCase: 'Indira Nehru Gandhi (1975)', description: 'No arbitrary governance; governance by established legal norms.' },
  { feature: 'Free and Fair Elections', sourceCase: 'Indira Nehru Gandhi (1975)', description: 'Indispensable requirement for meaningful representative democracy.' },
  { feature: 'Independence of the Judiciary', sourceCase: 'Supreme Court Advocates-on-Record (1993, 2015)', description: 'Freedom of the judicial branch from executive coercion and legislative overreach.' },
  { feature: 'Harmony and balance between Fundamental Rights and DPSPs', sourceCase: 'Minerva Mills (1980)', description: 'The two are like two wheels of a chariot; neither may be destroyed to elevate the other.' },
  { feature: 'Principle of Equality (Art 14)', sourceCase: 'Indira Nehru Gandhi (1975) & M. Nagaraj (2006)', description: 'Non-arbitrariness, non-discrimination, and fairness in state action.' },
  { feature: 'Limited amending power of Parliament', sourceCase: 'Minerva Mills (1980)', description: 'Parliament cannot expand its delegated amending power into infinite power to destroy the Constitution.' },
  { feature: 'Effective access to justice', sourceCase: 'Anita Kushwaha v. Pushap Sudan (2016)', description: 'Inherent right under Articles 14 and 21 to seek justice from competent courts.' }
];
