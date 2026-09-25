import React, { useState } from 'react';
import {
  Scale,
  Search,
  CheckCircle2,
  Bookmark,
  Layers,
  FileText,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Users,
  HeartHandshake,
  ArrowRight,
  GitCompare,
  GraduationCap,
  Activity,
  Building2,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import {
  GOVERNANCE_MODULES,
  WELFARE_SCHEMES,
  VULNERABLE_SECTION_LAWS,
  SOCIAL_SECTOR_METRICS,
  DEVELOPMENT_INDUSTRY_DATA
} from '../../data';
import { useUserData } from '../../context/UserDataContext';
import { useExamMode } from '../../context/ExamModeContext';
import { WelfareScheme } from '../../types';

export const GovernanceMaster: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'governance' | 'schemes' | 'schemeCompare' | 'vulnerable' | 'socialSector' | 'developmentIndustry'>('governance');
  const [selectedGovModule, setSelectedGovModule] = useState(GOVERNANCE_MODULES[0]);
  const [schemeSearch, setSchemeSearch] = useState('');
  const [selectedScheme, setSelectedScheme] = useState<WelfareScheme>(WELFARE_SCHEMES[0]);

  // Scheme Compare selection
  const [schemeAId, setSchemeAId] = useState<string>(WELFARE_SCHEMES[0].id);
  const [schemeBId, setSchemeBId] = useState<string>(WELFARE_SCHEMES[1].id);

  // Vulnerable sections state
  const [vulnerableCategory, setVulnerableCategory] = useState<string>('All');
  const [vulnerableSearch, setVulnerableSearch] = useState<string>('');

  // Social Sector state
  const [activeSector, setActiveSector] = useState<'Health' | 'Education' | 'Human Resources' | 'Poverty & Hunger'>('Health');

  const { bookmarks, toggleBookmark } = useUserData();
  const { examMode } = useExamMode();

  const schemeA = WELFARE_SCHEMES.find(s => s.id === schemeAId) || WELFARE_SCHEMES[0];
  const schemeB = WELFARE_SCHEMES.find(s => s.id === schemeBId) || WELFARE_SCHEMES[1];

  const filteredSchemes = WELFARE_SCHEMES.filter(
    s =>
      s.name.toLowerCase().includes(schemeSearch.toLowerCase()) ||
      s.shortName.toLowerCase().includes(schemeSearch.toLowerCase()) ||
      s.ministry.toLowerCase().includes(schemeSearch.toLowerCase()) ||
      s.objective.toLowerCase().includes(schemeSearch.toLowerCase())
  );

  const filteredVulnerableLaws = VULNERABLE_SECTION_LAWS.filter(law => {
    const matchesCategory = vulnerableCategory === 'All' || law.category === vulnerableCategory;
    const matchesSearch = law.lawName.toLowerCase().includes(vulnerableSearch.toLowerCase()) ||
                          law.coreProvisions.some(cp => cp.toLowerCase().includes(vulnerableSearch.toLowerCase())) ||
                          law.mainsSignificance.toLowerCase().includes(vulnerableSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentSectorData = SOCIAL_SECTOR_METRICS.find(s => s.sector === activeSector) || SOCIAL_SECTOR_METRICS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Title & Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-blue-900" />
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Governance & Social Justice</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Citizen-centric administration, Digital Public Infrastructure (DPI), Sevottam model, civil services reforms, and welfare schemes.
          </p>
        </div>

        {/* Sub Navigation */}
        <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-xl">
          {[
            { id: 'governance', label: 'Governance & DPI' },
            { id: 'schemes', label: 'Scheme Explorer' },
            { id: 'schemeCompare', label: 'Scheme A vs B' },
            { id: 'vulnerable', label: 'Vulnerable Laws (8 Groups)' },
            { id: 'socialSector', label: 'Health, Edu & Poverty' },
            { id: 'developmentIndustry', label: 'NGOs, SHGs & Coops' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeSubTab === tab.id
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. GOVERNANCE & DPI */}
      {activeSubTab === 'governance' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Topics List */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-4 space-y-2 shadow-xs h-fit">
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              Governance Pillars
            </div>
            {GOVERNANCE_MODULES.map(mod => (
              <button
                key={mod.id}
                onClick={() => setSelectedGovModule(mod)}
                className={`w-full text-left p-3.5 rounded-xl transition-all ${
                  selectedGovModule.id === mod.id
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'hover:bg-slate-50 text-slate-800'
                }`}
              >
                <div className="text-[11px] font-semibold text-amber-400 mb-0.5">
                  {mod.pillar}
                </div>
                <div className="font-bold text-xs line-clamp-1">{mod.title}</div>
              </button>
            ))}
          </div>

          {/* Right Column: In-depth Dossier */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                {selectedGovModule.pillar}
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">{selectedGovModule.title}</h2>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{selectedGovModule.summary}</p>
            </div>

            {/* Theoretical Framework */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1">
              <div className="font-bold text-slate-900">Theoretical & Administrative Framework:</div>
              <p className="text-slate-700 leading-relaxed">{selectedGovModule.theoreticalFramework}</p>
            </div>

            {/* Institutional Mechanisms & Challenges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 space-y-2">
                <div className="font-bold text-blue-950 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
                  Key Institutional Mechanisms
                </div>
                <ul className="space-y-1 text-slate-700">
                  {selectedGovModule.institutionalMechanisms.map((im, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span>{im}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-200 space-y-2">
                <div className="font-bold text-rose-950 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-rose-700" />
                  Challenges & Deficits in Practice
                </div>
                <ul className="space-y-1 text-slate-700">
                  {selectedGovModule.challengesInPractice.map((ch, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-rose-700 font-bold">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Case Studies */}
            <div className="space-y-2 text-xs">
              <div className="font-bold text-slate-900 uppercase tracking-wider">
                Ground Case Studies & Administrative Innovations
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedGovModule.caseStudies.map((cs, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <div className="font-bold text-blue-900">{cs.title}</div>
                    <p className="text-slate-600 leading-relaxed text-[11px]">{cs.desc}</p>
                    <div className="text-[10px] text-slate-400 font-medium">Source: {cs.source}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mains Enrichment Points */}
            <div className="bg-purple-50/60 border border-purple-200 rounded-xl p-4 space-y-2 text-xs">
              <div className="font-bold text-purple-950 uppercase tracking-wider">
                Mains Evaluator Checklist: What to Write
              </div>
              <ul className="space-y-1 text-slate-700">
                {selectedGovModule.mainsPointers.map((mp, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-purple-700 font-bold">•</span>
                    <span>{mp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 2. SCHEME EXPLORER */}
      {activeSubTab === 'schemes' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Scheme List Column */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-4 space-y-3 shadow-xs h-fit">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={schemeSearch}
                onChange={e => setSchemeSearch(e.target.value)}
                placeholder="Search scheme (e.g. PM-JAY, MGNREGA)..."
                className="w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden"
              />
            </div>

            <div className="overflow-y-auto space-y-1.5 max-h-[70vh]">
              {filteredSchemes.map(sch => (
                <button
                  key={sch.id}
                  onClick={() => setSelectedScheme(sch)}
                  className={`w-full text-left p-3 rounded-xl transition-all ${
                    selectedScheme.id === sch.id
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span
                      className={`font-black ${
                        selectedScheme.id === sch.id ? 'text-amber-300' : 'text-blue-900'
                      }`}
                    >
                      {sch.shortName}
                    </span>
                    <span
                      className={`text-[10px] px-1 rounded ${
                        selectedScheme.id === sch.id
                          ? 'bg-blue-800 text-blue-200'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {sch.launchYear}
                    </span>
                  </div>
                  <div className="text-xs font-semibold line-clamp-1">{sch.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Scheme Details Column */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                  {selectedScheme.ministry}
                </span>
                <h2 className="text-xl font-bold text-slate-900 mt-1">{selectedScheme.name}</h2>
              </div>
              <button
                onClick={() => toggleBookmark(selectedScheme.id)}
                className={`p-2 rounded-lg border transition-colors ${
                  bookmarks.includes(selectedScheme.id)
                    ? 'bg-amber-100 border-amber-300 text-amber-900'
                    : 'border-slate-200 text-slate-500 hover:bg-slate-50'
                }`}
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>

            {/* Objective & Target Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900">Key Objective:</div>
                <p className="text-slate-700 leading-relaxed">{selectedScheme.objective}</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900">Target Group & Coverage:</div>
                <p className="text-slate-700 leading-relaxed">{selectedScheme.targetGroup}</p>
              </div>
            </div>

            {/* Benefits & Funding Architecture */}
            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-200">
                <span className="font-bold text-blue-950">Benefits Provided: </span>
                <span className="text-slate-700">{selectedScheme.benefits}</span>
              </div>

              <div className="p-3.5 bg-purple-50/60 rounded-xl border border-purple-200">
                <span className="font-bold text-purple-950">Funding Pattern & Centre-State Ratio: </span>
                <span className="text-slate-700">{selectedScheme.fundingPattern}</span>
              </div>
            </div>

            {/* Recent Changes & Challenges */}
            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200">
                <span className="font-bold text-amber-950">Recent Updates & Policy Expansions: </span>
                <p className="text-amber-900 mt-1">{selectedScheme.recentChanges}</p>
              </div>

              <div className="space-y-1">
                <div className="font-bold text-slate-900">Operational Challenges:</div>
                <ul className="space-y-0.5 text-slate-600">
                  {selectedScheme.challenges.map((ch, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span className="text-rose-600 font-bold">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Official Source Link */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Verified Government Scheme Profile</span>
              <a
                href={selectedScheme.officialSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 font-medium"
              >
                Official Portal ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 3. SCHEME COMPARISON TOOL (A vs B) */}
      {activeSubTab === 'schemeCompare' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <GitCompare className="w-5 h-5 text-blue-900" />
              Scheme Comparison Matrix (Scheme A vs Scheme B)
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Analyze overlapping target groups, funding structures, and implementation models for Mains evaluation.
            </p>
          </div>

          {/* Scheme Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Select Scheme A:</label>
              <select
                value={schemeAId}
                onChange={e => setSchemeAId(e.target.value)}
                className="w-full bg-white text-xs p-2.5 rounded-xl border border-slate-300 font-semibold text-slate-800"
              >
                {WELFARE_SCHEMES.map(s => (
                  <option key={s.id} value={s.id}>{s.name} ({s.shortName})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Select Scheme B:</label>
              <select
                value={schemeBId}
                onChange={e => setSchemeBId(e.target.value)}
                className="w-full bg-white text-xs p-2.5 rounded-xl border border-slate-300 font-semibold text-slate-800"
              >
                {WELFARE_SCHEMES.map(s => (
                  <option key={s.id} value={s.id}>{s.name} ({s.shortName})</option>
                ))}
              </select>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
            <table className="w-full text-left divide-y divide-slate-200">
              <thead className="bg-slate-50 font-bold text-slate-700">
                <tr>
                  <th className="p-3 w-1/4">Parameter</th>
                  <th className="p-3 w-3/8 text-blue-900">{schemeA.name}</th>
                  <th className="p-3 w-3/8 text-purple-900">{schemeB.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3 font-bold bg-slate-50/50">Nodal Ministry</td>
                  <td className="p-3">{schemeA.ministry}</td>
                  <td className="p-3">{schemeB.ministry}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50/50">Launch Year</td>
                  <td className="p-3">{schemeA.launchYear}</td>
                  <td className="p-3">{schemeB.launchYear}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50/50">Target Group</td>
                  <td className="p-3">{schemeA.targetGroup}</td>
                  <td className="p-3">{schemeB.targetGroup}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50/50">Benefits</td>
                  <td className="p-3">{schemeA.benefits}</td>
                  <td className="p-3">{schemeB.benefits}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50/50">Funding Pattern</td>
                  <td className="p-3">{schemeA.fundingPattern}</td>
                  <td className="p-3">{schemeB.fundingPattern}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50/50">Implementation Agency</td>
                  <td className="p-3">{schemeA.implementationMechanism}</td>
                  <td className="p-3">{schemeB.implementationMechanism}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50/50">Core Challenges</td>
                  <td className="p-3">{schemeA.challenges.join('; ')}</td>
                  <td className="p-3">{schemeB.challenges.join('; ')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. VULNERABLE SECTIONS */}
      {activeSubTab === 'vulnerable' && (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-blue-900" />
                <h2 className="text-lg font-bold text-slate-900">Vulnerable Sections & Statutory Protections</h2>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Exhaustive analysis of legislative frameworks, penalties, institutional mechanisms, and constitutional safeguards for 8 vulnerable groups.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-xl">
              {['All', 'SCs & STs', 'Persons with Disabilities', 'Women', 'Children', 'Elderly', 'Transgender', 'Minorities'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setVulnerableCategory(cat)}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    vulnerableCategory === cat
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by act name, provision keywords, or constitutional significance..."
              value={vulnerableSearch}
              onChange={e => setVulnerableSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
            />
            {vulnerableSearch && (
              <button
                onClick={() => setVulnerableSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Constitutional Architecture Overview Grid */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Constitutional Safeguards & Apex Bodies Matrix
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {[
                {
                  group: 'SCs & STs',
                  articles: 'Art 15(4), 16(4), 17, 46, 330, 332, 338, 338A',
                  body: 'NCSC (Art 338) & NCST (Art 338A)',
                  recentIssue: 'SC sub-classification upheld (Davinder Singh 2024); PM-JANMAN for PVTGs.'
                },
                {
                  group: 'Women',
                  articles: 'Art 15(3), 39(a)/(d)/(e), 42, 106th CAA (Nari Shakti)',
                  body: 'National Commission for Women (NCW 1990)',
                  recentIssue: '33% legislative reservation in Lok Sabha and State Assemblies.'
                },
                {
                  group: 'Children',
                  articles: 'Art 21A, 24, 39(e)/(f), 45',
                  body: 'NCPCR (CPCR Act 2005)',
                  recentIssue: 'POCSO Amendment, digital child protection, Mission Vatsalya.'
                },
                {
                  group: 'Persons with Disabilities',
                  articles: 'Art 41, 14, 21',
                  body: 'Chief Commissioner for PwDs (CCPD)',
                  recentIssue: 'Accessible India Campaign, RPwD Act 2016 4% quota compliance.'
                },
                {
                  group: 'Senior Citizens',
                  articles: 'Art 41 (Old age assistance), Art 47',
                  body: 'National Council for Senior Citizens',
                  recentIssue: 'Ayushman Bharat PM-JAY universal expansion to all 70+ seniors.'
                },
                {
                  group: 'Transgender Persons',
                  articles: 'Art 14, 19, 21 (NALSA 2014)',
                  body: 'National Council for Transgender Persons (NCTP)',
                  recentIssue: 'Transgender Persons Act 2019, SMILE scheme, Garima Greh.'
                },
                {
                  group: 'Linguistic Minorities',
                  articles: 'Art 29, 30, 350A, 350B',
                  body: 'Special Officer for Linguistic Minorities (Art 350B)',
                  recentIssue: 'Mother-tongue primary instruction under NEP 2020.'
                },
                {
                  group: 'Religious Minorities',
                  articles: 'Art 25-28, 29, 30',
                  body: 'National Commission for Minorities (NCM 1992)',
                  recentIssue: 'PM-Virasat Ka Samvardhan (PM VIKAS) and educational scholarships.'
                }
              ].map((v, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                  <div className="font-bold text-blue-950 text-xs">{v.group}</div>
                  <div className="text-[11px]"><strong className="text-slate-800">Articles:</strong> <span className="text-slate-600 font-mono">{v.articles}</span></div>
                  <div className="text-[11px]"><strong className="text-slate-800">Apex Body:</strong> <span className="text-slate-600">{v.body}</span></div>
                  <div className="p-1.5 bg-white rounded border border-slate-200 text-blue-900 text-[10px] font-medium">
                    📌 {v.recentIssue}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Granular Statutory Protection Cards */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Statutory Enactments & Enforcement Machinery ({filteredVulnerableLaws.length} Acts)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredVulnerableLaws.map(law => (
                <div key={law.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full font-bold bg-blue-100 text-blue-900 text-[11px]">
                      {law.category}
                    </span>
                    <span className="text-slate-400 font-medium text-[11px]">Enacted {law.yearEnacted}</span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm">{law.lawName}</h4>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                    <div className="font-bold text-slate-800">Core Statutory Mandates:</div>
                    <ul className="space-y-0.5 text-slate-600">
                      {law.coreProvisions.map((cp, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-blue-900 font-bold">•</span>
                          <span>{cp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="p-2.5 bg-blue-50/60 border border-blue-200 rounded-xl">
                      <span className="font-bold text-blue-950">Institutional Agency:</span>
                      <p className="text-slate-700 mt-0.5 text-[11px]">{law.institutionalMechanism}</p>
                    </div>
                    <div className="p-2.5 bg-purple-50/60 border border-purple-200 rounded-xl">
                      <span className="font-bold text-purple-950">Penalties / Remedies:</span>
                      <p className="text-slate-700 mt-0.5 text-[11px]">{law.penaltiesOrRelief}</p>
                    </div>
                  </div>

                  <div className="p-3 bg-rose-50/60 border border-rose-200 rounded-xl space-y-1">
                    <div className="font-bold text-rose-950">Implementation Hurdles:</div>
                    <ul className="space-y-0.5 text-slate-700 text-[11px]">
                      {law.implementationChallenges.map((ch, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-rose-700 font-bold">•</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl text-slate-700 text-[11px]">
                    <span className="font-bold text-emerald-950">Mains Evaluator Anchor: </span>
                    {law.mainsSignificance}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. SOCIAL SECTOR SERVICES (HEALTH, EDUCATION, HR & POVERTY) */}
      {activeSubTab === 'socialSector' && (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-900" />
                <h2 className="text-lg font-bold text-slate-900">Social Sector Services & Human Capital</h2>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Granular indicators, structural deficiencies, policy benchmarks, and reform roadmaps for Health, Education, Human Capital, and Poverty & Hunger.
              </p>
            </div>

            {/* Sector switcher */}
            <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-xl">
              {(['Health', 'Education', 'Human Resources', 'Poverty & Hunger'] as const).map(sec => (
                <button
                  key={sec}
                  onClick={() => setActiveSector(sec)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeSector === sec
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          {/* Sector Details Dossier */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                Sectoral Diagnosis
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">{currentSectorData.sector} Sector Architecture</h3>
            </div>

            {/* Key Indicators Table */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Key Performance Indicators & Global Benchmarks
              </h4>
              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                <table className="w-full text-left divide-y divide-slate-200">
                  <thead className="bg-slate-50 font-bold text-slate-700">
                    <tr>
                      <th className="p-3">Indicator</th>
                      <th className="p-3 text-blue-900">Current Status (India)</th>
                      <th className="p-3 text-emerald-900">Target / Global Benchmark</th>
                      <th className="p-3 text-slate-500">Official Source</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {currentSectorData.keyIndicators.map((ind, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50">
                        <td className="p-3 font-semibold text-slate-900">{ind.name}</td>
                        <td className="p-3 font-bold text-blue-900">{ind.currentFigure}</td>
                        <td className="p-3 font-bold text-emerald-800">{ind.targetOrGlobalBenchmark}</td>
                        <td className="p-3 text-slate-500 text-[11px]">{ind.source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Structural Bottlenecks vs Policy Interventions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-rose-50/60 rounded-xl border border-rose-200 space-y-2">
                <div className="font-bold text-rose-950 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-700" />
                  Structural Bottlenecks & Deficits
                </div>
                <ul className="space-y-1 text-slate-700">
                  {currentSectorData.structuralWeaknesses.map((w, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-rose-700 font-bold">•</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-200 space-y-2">
                <div className="font-bold text-blue-950 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-700" />
                  Flagship Policies, Acts & National Missions
                </div>
                <ul className="space-y-1 text-slate-700">
                  {currentSectorData.majorPoliciesAndActs.map((pol, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span>{pol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Landmark Reports & Committee Recommendations */}
            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider">
                Landmark Expert Committees & Reports
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentSectorData.landmarkReports.map((rep, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-900 text-xs">{rep.title}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-bold">{rep.year}</span>
                    </div>
                    <div className="text-[11px] font-semibold text-slate-600">{rep.committeeOrBody}</div>
                    <p className="text-slate-700 leading-relaxed text-[11px]">{rep.keyTakeaways}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reform Roadmap for Mains Answers */}
            <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4 space-y-2 text-xs">
              <div className="font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                Mains Solutions & Forward Policy Roadmap
              </div>
              <ul className="space-y-1 text-slate-700">
                {currentSectorData.reformRoadmap.map((rf, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{rf}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 6. DEVELOPMENT INDUSTRY & SOCIAL CAPITAL */}
      {activeSubTab === 'developmentIndustry' && (
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-900" />
              <h2 className="text-lg font-bold text-slate-900">
                Development Industry, Social Capital & Voluntary Sector
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              NGOs, Self-Help Groups (SHGs), Cooperatives, and Community-Based Organizations in deepening participatory democracy.
            </p>
          </div>

          {/* Theoretical Framing Banner */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-5 rounded-2xl shadow-md space-y-2 text-xs">
            <span className="text-[10px] font-mono tracking-widest text-amber-300 font-bold uppercase">
              Sociological & Governance Foundation
            </span>
            <h3 className="font-bold text-base">The Concept of Social Capital in Governance</h3>
            <p className="text-slate-200 leading-relaxed">
              Formulated by Robert Putnam and James Coleman: Social capital refers to networks of social trust, reciprocal norms, and civic associations that facilitate collective action for mutual benefit. In India's governance architecture, civil society bridges the "implementation deficit" between the state and marginalized citizens by mobilizing social capital.
            </p>
            <div className="pt-2 border-t border-blue-800 text-[11px] text-amber-200 font-medium">
              💡 2nd ARC (9th Report "Social Capital - A Shared Destiny") recommended recognizing the voluntary sector as equal development partners.
            </div>
          </div>

          {/* Development Actors Cards */}
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
              Core Actors of the Development Industry
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DEVELOPMENT_INDUSTRY_DATA.map(actor => (
                <div key={actor.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 text-sm">{actor.actorType}</h4>
                  </div>
                  <div className="text-[11px] font-mono text-blue-900 bg-blue-50 px-2.5 py-1 rounded-lg">
                    {actor.constitutionalAndLegalBasis}
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold text-slate-800">Democratic & Developmental Roles:</div>
                    <ul className="space-y-0.5 text-slate-600">
                      {actor.roleAndContribution.map((rc, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-blue-900 font-bold">•</span>
                          <span>{rc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Case Studies */}
                  <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200 space-y-1.5">
                    <div className="font-bold text-emerald-950">Ground Success Case Studies:</div>
                    {actor.keySuccessCaseStudies.map((cs, idx) => (
                      <div key={idx} className="p-2 bg-white rounded-lg border border-emerald-200/60 text-[11px]">
                        <div className="font-bold text-emerald-900">{cs.name} ({cs.region})</div>
                        <p className="text-slate-600 mt-0.5">{cs.impact}</p>
                      </div>
                    ))}
                  </div>

                  {/* Regulatory Bottlenecks */}
                  <div className="p-3 bg-rose-50/60 border border-rose-200 rounded-xl space-y-1">
                    <div className="font-bold text-rose-950">Regulatory & Governance Bottlenecks:</div>
                    <ul className="space-y-0.5 text-slate-700 text-[11px]">
                      {actor.regulatoryAndOperationalChallenges.map((ch, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-rose-700 font-bold">•</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Reform Roadmap */}
                  <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1">
                    <div className="font-bold text-blue-950">Reforms & Policy Recommendations:</div>
                    <ul className="space-y-0.5 text-slate-700 text-[11px]">
                      {actor.reformMeasures.map((rf, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-blue-800 font-bold">•</span>
                          <span>{rf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
