# GS-II MASTER

> **"Governance • Constitution • Polity • Social Justice • International Relations"**  
> *A Complete Interactive Knowledge Base, Syllabus Linker & Civil Services Examination Lab for UPSC CSE & UPPSC PCS*

---

## 🏛 Overview

**GS-II MASTER** is an interactive educational web application designed for candidates preparing for the **UPSC Civil Services Examination (CSE)**, **UPPSC Combined State/Upper Subordinate (PCS)**, and other State Public Service Commission examinations.

It is structured not merely as static notes or articles, but as an **Integrated Knowledge Graph + Examination Lab** connecting:
```
CONSTITUTION → POLITY → GOVERNANCE → LAW → JUDICIARY → CURRENT AFFAIRS → SOCIAL JUSTICE → IR → PYQs → PRELIMS → MAINS → ANSWER WRITING → REVISION
```

---

## 🚀 Key Features

### 1. 📜 Constitution Master & Article Explorer
- **Interactive Article Explorer**: Search Articles 14 to 368 with verbatim extracts, simple explanations, constitutional context, landmark SC judgments, prelims facts, and mains points.
- **Interactive Constitution Map**: Visual node hierarchy from Preamble → 25 Parts → Chapters → Articles → 12 Schedules → 106 Amendments.
- **Amendment Tracker**: Searchable database of landmark amendments (1st to 106th / Nari Shakti Vandan Adhiniyam) with reasons, provisions altered, and judicial review status.
- **Basic Structure Doctrine Engine**: Complete chronological timeline (Shankari Prasad → Golaknath → Kesavananda Bharati → Minerva Mills → Bommai → Coelho → NJAC) and recognized basic features.
- **Comparative Constitution Module**: Structured side-by-side matrices comparing India with the **UK, USA, Canada, France, Germany, and South Africa**.

### 2. 🏛 Polity & Federalism Lab
- **Federalism & 3F Tracker**: Dynamic Centre → State → Local federal flow. Dedicated "3F Tracker" assessing devolution of **Functions, Funds, and Functionaries** to Panchayats and Urban Local Bodies.
- **Separation of Powers Interactive Visualizer**: Real-world constitutional checks and balances across the Legislature, Executive, and Judiciary.
- **Parliamentary Legislative Flow Visualizer**: 7-stage interactive stepper illustrating a Bill’s journey from drafting, readings, and committee scrutiny to Presidential assent under Article 111.
- **Institutional Bodies Directory**: Structured profiles of Constitutional, Statutory, Regulatory, and Quasi-Judicial bodies with appointment panels, tenure, and removal safeguards.
- **Polity Diagram Lab**: Visual schematics for the integrated judicial pyramid, 7th Schedule competence, and federal taxation.

### 3. ⚖️ Governance & Social Justice
- **Governance Pillars**: Good Governance (UN/World Bank 8 dimensions), Digital Public Infrastructure (India Stack - Aadhaar, UPI, DigiLocker, ONDC), Citizen’s Charter, Sevottam Model, and Civil Service Reforms (Mission Karmayogi).
- **Welfare Scheme Explorer**: Searchable schemes (PM-JAY, MGNREGA, NFSA/PMGKAY, Jal Jeevan Mission, UP Kanya Sumangala) with funding patterns, recent changes, and evaluation.
- **Scheme Comparison Tool (Scheme A vs B)**: Direct side-by-side comparison of objectives, ministries, target groups, benefits, and implementation bottlenecks.
- **Vulnerable Sections Architecture**: Constitutional provisions, protective statutes, and national commissions for SCs, STs, OBCs, Women, Children, PwDs, Senior Citizens, and Transgender persons.

### 4. 🌏 International Relations Master
- **Foreign Policy Doctrines**: Strategic Autonomy, Neighbourhood First, Act East, SAGAR (Indian Ocean), and Voice of the Global South.
- **Country Relationship Dashboard**: Multi-dimensional dossiers for India’s neighbours (Pakistan, China, Bangladesh, Nepal, Sri Lanka, etc.) and global partners (USA, Russia, France, Japan, etc.) covering political, trade, defence, diaspora, and challenges.
- **Regional & Global Groupings**: Quad, BRICS+, BIMSTEC, G20, UNSC, WTO, and Bretton Woods institutions with reform demands.
- **Indian Diaspora**: Remittances, geopolitical influence, and crisis evacuation diplomacy (Operation Ganga, Operation Kaveri).

### 5. 📰 GS-II Live Updates & 7-Step Syllabus Linker
- **Single-Window Update Centre**: Time-filtered updates (Today, This Month, Last 3 Months).
- **Signature 7-Step Linker**:
  $$\text{News Event} \to \text{Constitutional Article} \to \text{Judicial Doctrine} \to \text{Static Concept} \to \text{PYQ} \to \text{Predicted Prelims} \to \text{Predicted Mains}$$

### 6. 🎯 Prelims Practice Engine & Mistake Book
- Configurable test modes (5, 10, 20, 50 questions) with real-time countdown timer.
- Supports multi-statement questions, single-choice, and assertion-reason formats with standard negative marking (+2 / -0.66).
- **Automated Mistake Book**: Questions answered incorrectly are logged with cognitive gap tags (`conceptual`, `factual`, `misreading`, `elimination`, `current_gap`).

### 7. ✍️ Mains Answer-Writing Lab
- Timed practice (7 min for 10 Marks / 150 Words; 11 min for 15 Marks / 250 Words).
- **Live Word Counter** with remaining word indicators.
- **9-Part Structure Builder**: Introduction → Core Arguments → Constitutional/Legal Basis → Issues → Stakeholders → Challenges → Government Measures → Way Forward → Conclusion.
- **Answer Enrichment Kit**: One-click "+ Add to Answer" for Articles, Landmark Judgments, Committees, SDGs, and Examiner Keywords.
- **Answer-Quality Checklist**: 8-point self-evaluation checklist.

### 8. 📝 PYQ Analysis Engine
- Authentic UPSC Civil Services & UPPSC PCS Previous Years Questions filterable by year, exam, stage, and topic.
- Concept mapping and model answer points.

### 9. 🔄 Spaced Revision Hub & Flashcards
- 1-day, 3-day, 7-day, 15-day, 30-day, and 90-day intervals to beat the forgetting curve.
- Interactive Prelims & Mains Flashcard Decks with flip animations.
- Smart Adaptive Practice prescriptions based on weak test performance.

### 10. 📊 Personal Dashboard & GS-II Readiness Score
- **0–100 Readiness Indicator** derived from: Static Knowledge (25 pts), Prelims Accuracy (20 pts), Mains Writing (20 pts), PYQ Completion (15 pts), Current Affairs (10 pts), and Revision (10 pts).
- **Daily Study Planner**: Generates realistic tailored daily study timetables for 30m, 1h, 2h, 3h, or 4h study sessions.
- Continuous study streak tracker.

### 11. ⚙️ Content Update Centre
- Built-in JSON importer with real-time schema validation, duplicate ID detection, and error reporting.
- Full local data export backup.

---

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (responsive, clean civil-services typography)
- **Icons**: Lucide React
- **Micro-interactions**: Canvas Confetti
- **State & Storage**: React Context + Browser LocalStorage (Zero external server required)
- **Hosting**: 100% Static & GitHub Pages Ready

---

## 📦 Local Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/gs2-master.git
   cd gs2-master
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```

4. **Build production bundle**:
   ```bash
   npm run build
   ```

---

## 🌐 GitHub Pages Deployment Instructions

This repository is pre-configured for automated deployment to GitHub Pages via GitHub Actions:

1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of GS-II MASTER"
   git branch -M main
   git remote add origin https://github.com/<your-username>/gs2-master.git
   git push -u origin main
   ```
2. In your repository on GitHub:
   - Navigate to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Every subsequent push to `main` will automatically trigger the `.github/workflows/deploy.yml` workflow, building and deploying your static web app directly to `https://<your-username>.github.io/gs2-master/`.
4. The repository includes `public/404.html` and `vite.config.ts` base path configuration to guarantee seamless single-page application routing on GitHub Pages.

---

## 🛡️ Official-Source-First & Anti-Fabrication Pledge

All substantive constitutional articles, judicial rulings, committee reports, schemes, and foreign policy treaties are derived from authentic official repositories:
- Legislative Department, Ministry of Law and Justice, GoI
- Supreme Court of India Judgment Information System
- Election Commission of India (ECI)
- Comptroller and Auditor General of India (CAG)
- NITI Aayog Reports & Strategy Documents
- Ministry of External Affairs (MEA) Official Briefs
- Second Administrative Reforms Commission (2nd ARC)
- Press Information Bureau (PIB)

---

## 📜 Intellectual Property, Licensing & Copyright Certificate

### Official Copyright Certificate
- **Registration Identifier:** `GS2-MSTR-IND-2026-REG01`
- **Jurisdiction:** Republic of India & Berne Convention
- **Author & Maintainer:** Raghavendra ([@raghavendra-exp](https://github.com/raghavendra-exp))
- **Certificate Documentation:** [`COPYRIGHT_CERTIFICATE.md`](./COPYRIGHT_CERTIFICATE.md)

### Dual-License Architecture
- **Software Code:** Licensed under the **[MIT License](./LICENSE)** (permissive for inspection, academic research, and non-commercial forks).
- **Educational Frameworks & Analytics:** Licensed under **[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/)**.

### Statutory Exemptions (Indian Copyright Act, 1957)
- **Section 52(1)(q):** Reproduction of constitutional articles, statutory acts, parliamentary committee reports, and judicial judgments (Supreme Court & High Courts) is exempted from copyright infringement.
- **Section 52(1)(a) & 52(1)(h):** UPSC/UPPSC Previous Years' Questions (PYQs) are reproduced under educational fair dealing exclusively for non-commercial student study, critique, and answer evaluation.

