import { ComparativeConstitutionalEntry } from '../../types';

export const COMPARATIVE_CONSTITUTIONS: ComparativeConstitutionalEntry[] = [
  {
    country: 'United Kingdom (UK)',
    system: 'Unitary Constitutional Monarchy with Parliamentary Sovereignty',
    executive: 'De jure Monarch; De facto Prime Minister and Cabinet drawn from and strictly accountable to the House of Commons. "Collective ministerial responsibility".',
    legislature: 'Bicameral Parliament (House of Commons - elected, House of Lords - hereditary and life peers). Parliament is sovereign; no written constitutional limitation.',
    judiciary: 'Supreme Court established in 2009 (separated from House of Lords Appellate Committee). Cannot strike down primary Acts of Parliament (no substantive judicial review of legislation; can only issue "Declaration of Incompatibility" under Human Rights Act 1998).',
    federalism: 'Unitary State with asymmetric Devolution to Scotland, Wales, and Northern Ireland via statutory Acts (Westminster retains formal ultimate sovereignty).',
    billOfRights: 'Uncodified constitution. Rights protected via common law traditions, Magna Carta (1215), Bill of Rights (1689), and Human Rights Act 1998 incorporating the European Convention on Human Rights (ECHR).',
    amendmentProcedure: 'Flexible: Simple ordinary legislation passed by Parliament can alter constitutional conventions and statutes.',
    judicialReview: 'Weak form: Procedural review of administrative actions (Ultra Vires), but cannot invalidate primary parliamentary statutes.',
    keyComparisonWithIndia: 'India synthesized British Parliamentary executive accountability with American constitutional supremacy. While the UK Parliament is legally omnipotent ("can do everything except make a woman a man and a man a woman"), the Indian Parliament is creature of a written Constitution and subject to Judicial Review and the Basic Structure Doctrine.'
  },
  {
    country: 'United States of America (USA)',
    system: 'Federal Republic with Presidential System and Separation of Powers',
    executive: 'President is both Head of State and Head of Government, elected through an Electoral College for a fixed 4-year term (maximum 2 terms under 22nd Amendment). Ministers (Secretaries) are chosen from outside Congress and not accountable to Congress.',
    legislature: 'Bicameral Congress: Senate (100 members, equal representation of 2 per state) and House of Representatives (435 members apportioned by population). Absolute separation of personnel between executive and legislature.',
    judiciary: 'Independent Federal Judiciary headed by US Supreme Court. Judges appointed for life during "good behavior". Established Judicial Review in Marbury v. Madison (1803). Enforces "Due Process of Law".',
    federalism: 'True / Classical Federalism: "Indestructible Union composed of indestructible States" (Texas v. White). Residuary powers belong to the States (Tenth Amendment). Dual citizenship (US + State).',
    billOfRights: 'Codified first 10 amendments (1791) guaranteeing freedom of speech, religion, right to bear arms, due process, trial by jury.',
    amendmentProcedure: 'Extremely rigid: Proposal by 2/3rd vote in both Houses of Congress (or convention called by 2/3rd state legislatures) + Ratification by 3/4th of the 50 States (38 States). Only 27 amendments in 235+ years.',
    judicialReview: 'Strong form: Supreme Court can strike down both federal and state statutes as unconstitutional under substantive and procedural Due Process.',
    keyComparisonWithIndia: 'India adopted American-style Judicial Review and Fundamental Rights, but rejected the strict Presidential separation of powers and dual citizenship. India’s federalism is "indestructible Union of destructible States" (Article 3) with residuary powers vesting in the Centre (Article 248), unlike the US model.'
  },
  {
    country: 'Canada',
    system: 'Federal Constitutional Monarchy with Parliamentary Democracy',
    executive: 'Governor General represents British Monarch; Prime Minister and Cabinet drawn from House of Commons (Cabinet Government).',
    legislature: 'Bicameral Parliament: House of Commons (elected) and Senate (appointed by Governor General on advice of Prime Minister).',
    judiciary: 'Supreme Court of Canada. Integrated judicial system adjudicating federal and provincial laws.',
    federalism: 'Federation created by British North America Act 1867 (Constitution Act). Federation with a strong Centre: Residuary powers vest in the federal Parliament; federal government can disallow provincial legislation and appoints Provincial Lieutenant Governors.',
    billOfRights: 'Canadian Charter of Rights and Freedoms (1982) entrenched in the Constitution.',
    amendmentProcedure: 'Complex general formula: Federal Parliament approval + at least 7 of 10 provincial legislatures representing at least 50% of the population.',
    judicialReview: 'Strong form: Courts enforce Charter of Rights; contains unique "Notwithstanding Clause" (Section 33) allowing Parliament or provincial legislatures to temporarily override certain Charter rights for 5 years.',
    keyComparisonWithIndia: 'The structural inspiration for India’s "quasi-federal" design was the Canadian model (Union with a strong centre, appointment of state governors by Centre, and vesting of residuary powers in the Union Parliament).'
  },
  {
    country: 'France',
    system: 'Semi-Presidential Republic (Fifth Republic, 1958 Constitution)',
    executive: 'Dual Executive: Directly elected President with strong independent powers (defence, foreign policy, emergency under Art 16) and a Prime Minister appointed by the President, responsible to the National Assembly. "Cohabitation" occurs when President and Parliamentary majority belong to rival parties.',
    legislature: 'Bicameral Parliament: National Assembly (directly elected) and Senate (indirectly elected representing territorial collectivities). Executive can pass bills without vote via Article 49.3.',
    judiciary: 'Dual Court System: Judicial Courts (Cour de Cassation) for private disputes and Administrative Courts (Conseil d’État) for disputes involving public authorities (Droit Administratif).',
    federalism: 'Unitary State with administrative decentralization into Regions, Departments, and Communes.',
    billOfRights: 'Preamble incorporates the Declaration of the Rights of Man and of the Citizen (1789). Concept of "Laïcité" (strict separation of Church and State, barring religious symbols in public spaces).',
    amendmentProcedure: 'Proposed by President/PM and passed in identical terms by both houses, then ratified by referendum OR by 3/5th majority in Congress of Parliament.',
    judicialReview: 'Constitutional Council (Conseil Constitutionnel) exercises predominantly ex-ante (preventive) constitutional review before bills are promulgated, as well as ex-post review (QPC).',
    keyComparisonWithIndia: 'Contrast between French Laïcité (strict banishment of religion from the public sphere) and Indian Secularism (Sarva Dharma Sambhava / principled distance / equal respect and support for all religions).'
  },
  {
    country: 'Germany',
    system: 'Federal Parliamentary Republic (Basic Law - Grundgesetz 1949)',
    executive: 'Federal President (Ceremonial Head of State); Federal Chancellor (Head of Government elected by the Bundestag). Feature: "Constructive Vote of No-Confidence" (Chancellor can be unseated only if Bundestag simultaneously elects a successor).',
    legislature: 'Bundestag (Federal Diet - mixed-member proportional representation) and Bundesrat (Federal Council representing 16 Länder / State governments, with delegates casting bloc votes).',
    judiciary: 'Federal Constitutional Court (Bundesverfassungsgericht) in Karlsruhe. Highly respected guardian of the Basic Law.',
    federalism: 'Cooperative / Administrative Federalism: Federal government makes framework laws; Länder (States) implement and administer them.',
    billOfRights: 'Basic Law Article 1: "Human dignity shall be inviolable." Unalterable human rights.',
    amendmentProcedure: '2/3rd majority in both Bundestag and Bundesrat. Explicit "Eternity Clause" (Article 79(3)) which prohibits any amendment affecting human dignity or federal organization.',
    judicialReview: 'Extremely strong: Constitutional Court protects the constitutional order; pioneered the "Basic Structure" inspiration developed in Kesavananda Bharati through German jurist Dieter Conrad.',
    keyComparisonWithIndia: 'The conceptual seed of the Basic Structure doctrine was influenced by Professor Dieter Conrad’s lecture on the German Basic Law’s "Eternity Clause" (Article 79(3)) delivered in India before the Kesavananda Bharati hearings.'
  },
  {
    country: 'South Africa',
    system: 'Constitutional Democracy with Executive President elected by Parliament',
    executive: 'President is elected by the National Assembly from among its members and is leader of the Cabinet; serves maximum two 5-year terms.',
    legislature: 'Bicameral Parliament: National Assembly (proportional representation) and National Council of Provinces (NCOP).',
    judiciary: 'Constitutional Court at apex for constitutional matters. Highest Court of Appeal for non-constitutional matters.',
    federalism: 'Quasi-federal / Unitary with 9 Provinces exercising concurrent and exclusive powers under cooperative governance principles.',
    billOfRights: 'Chapter 2 contains one of the most progressive Bills of Rights globally, guaranteeing civil liberties alongside socio-economic rights (housing, healthcare, food, water, social security, environmental protection).',
    amendmentProcedure: 'Requires 2/3rd majority of National Assembly + 6 of 9 provinces in NCOP for certain sections; 75% majority for amending Section 1 foundational values.',
    judicialReview: 'Deep substantive review; courts enforce socio-economic rights through the standard of "reasonableness" (e.g. Grootboom case on housing).',
    keyComparisonWithIndia: 'South Africa constitutionalized socio-economic rights directly into its justiciable Bill of Rights, whereas India originally placed them as non-justiciable Directive Principles (Part IV), which the Supreme Court later read into Article 21.'
  }
];
