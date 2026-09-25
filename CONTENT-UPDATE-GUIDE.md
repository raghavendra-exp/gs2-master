# GS-II MASTER: Content Update & Scalability Guide

Welcome to the **GS-II MASTER Content Management & Scalability Guide**.
This application separates UI presentation from structured educational knowledge bases, allowing researchers, faculty, and aspirants to update and scale datasets from 500 to 10,000+ items without touching React components.

---

## 1. Data Architecture Overview

All application content resides in `/src/data/` organized by subject domain:

```
/src/data/
├── constitution/
│   ├── articles.ts             # Articles with text extracts, explanations, and cases
│   ├── amendments.ts           # 1st to 106th Amendments with judicial reviews
│   └── basicStructure.ts       # Landmark timeline & recognized basic features
├── polity/
│   └── topics.ts               # Parliament, Executive, Judiciary, Federalism
├── bodies/
│   └── bodiesData.ts           # Constitutional, Statutory, Regulatory, Quasi-Judicial
├── governance/
│   └── governanceData.ts       # Good Governance, DPI, Citizen Charter, Civil Services
├── socialJustice/
│   └── schemes.ts              # Welfare schemes with Scheme A vs B comparison metadata
├── internationalRelations/
│   ├── countries.ts            # Neighbourhood & Strategic Bilateral Relationships
│   └── groupings.ts            # Regional groupings & Global institutions (Quad, BRICS, UNSC, WTO)
├── currentAffairs/
│   └── updates.ts              # GS-II Live Updates with 7-step syllabus links
├── pyqs/
│   └── pyqData.ts              # Official UPSC CSE & UPPSC PCS Previous Year Questions
├── questions/
│   ├── prelimsBank.ts          # Practice Prelims MCQs (multi-statement, assertion-reason)
│   └── mainsBank.ts            # Mains questions with 9-part structured model answers
└── enrichment/
    ├── cases.ts                # Supreme Court case database with official PDFs
    ├── committees.ts           # Sarkaria, Punchhi, 2nd ARC, Kasturirangan, Kovind
    ├── reports.ts              # NITI Aayog MPI, SDG Index, ASER, India Justice Report
    ├── caseStudies.ts          # Kudumbashree, Amrit Sarovar, PRAGATI, ODOP UP
    ├── comparativeConstitution.ts # India vs UK, USA, Canada, France, Germany, South Africa
    └── books.ts                # Recommended reading list with official & open-access links
```

---

## 2. In-App Content Update Centre (No-Code GUI Import)

1. Open the application and click on the **Update Centre** tab in the navigation bar.
2. Choose the category of content you want to import:
   - **Questions** (Prelims MCQs)
   - **Current Affairs** (GS-II Live Updates)
   - **Articles** (Constitutional Articles)
3. Paste a JSON array in the text editor.
4. Click **Validate & Import**.
5. The built-in validator verifies:
   - Duplicate ID detection across existing datasets.
   - Required fields (`questionText`, `options`, `correctOptionId` for questions; `title`, `category`, `summary` for updates).
   - Date format and source citations.
6. Once validated, items are immediately injected into your local active session and stored in browser `localStorage`.

---

## 3. JSON Schemas for Contributors

### A. Prelims Practice Question Schema
```json
{
  "id": "pq-const-003",
  "exam": "UPSC",
  "year": 2025,
  "isPYQ": false,
  "paper": "GS-1 (Polity & Governance)",
  "topic": "Constitution",
  "subtopic": "Fundamental Rights",
  "questionType": "multiple_statement",
  "questionText": "Consider the following statements regarding the Right to Privacy in India:",
  "statements": [
    "It was recognized as an intrinsic part of Article 21 in the Puttaswamy case.",
    "It is an absolute right and cannot be restricted by any state legislation."
  ],
  "options": [
    { "id": "A", "text": "1 only" },
    { "id": "B", "text": "2 only" },
    { "id": "C", "text": "Both 1 and 2" },
    { "id": "D", "text": "Neither 1 nor 2" }
  ],
  "correctOptionId": "A",
  "explanation": "Statement 1 is correct. Statement 2 is incorrect because the Right to Privacy is not absolute and can be restricted under the three-fold test of legality, legitimate state aim, and proportionality.",
  "officialSource": "Justice K.S. Puttaswamy v. Union of India (2017)",
  "difficulty": "Easy",
  "conceptsTested": ["Article 21", "Right to Privacy", "Proportionality Test"],
  "syllabusTag": "Constitution - Fundamental Rights",
  "examSpecificTag": "COMMON"
}
```

### B. GS-II Current Affairs Update Schema
```json
{
  "id": "ca-example-001",
  "date": "2026-09-25",
  "title": "Title of the Judicial or Executive Event",
  "category": "Supreme Court",
  "summary": "Concise summary of the ruling or policy.",
  "background": "Historical context leading up to this event.",
  "whyImportant": "Strategic constitutional or policy significance.",
  "staticTopics": ["Federalism", "Article 200", "State Legislature"],
  "constitutionalLinks": ["Article 200: Assent to Bills", "Article 163: Aid and Advice"],
  "prelimsPoints": ["Fact 1", "Fact 2"],
  "mainsPoints": ["Analytical dimension 1", "Dimension 2"],
  "possibleQuestions": {
    "prelims": "Predicted Prelims MCQ",
    "mains": "Predicted Mains Analytical Question"
  },
  "sources": [
    {
      "title": "Official Press Release or Judgment",
      "organization": "Supreme Court of India",
      "url": "https://main.sci.gov.in",
      "publicationDate": "2026-09-25",
      "lastVerified": "2026-09-25",
      "status": "official"
    }
  ],
  "lastVerified": "2026-09-25",
  "upRelevance": "Specific context for UPPSC exam (optional)"
}
```

---

## 4. Verification and Source Integrity Rules

Contributors must adhere to the **Official-Source-First Policy**:
1. **Never fabricate** constitutional articles, Supreme Court case names, committee recommendations, or statistics.
2. Prioritize primary government sources:
   - Ministry of Law & Justice, Legislative Department
   - Supreme Court of India Judgment Information System
   - Press Information Bureau (PIB)
   - Election Commission of India (ECI)
   - NITI Aayog Official Reports
   - Ministry of External Affairs (MEA) Bilateral Briefs
3. Always include `lastVerified` dates.
