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
  GitCompare
} from 'lucide-react';
import { GOVERNANCE_MODULES, WELFARE_SCHEMES } from '../../data';
import { useUserData } from '../../context/UserDataContext';
import { useExamMode } from '../../context/ExamModeContext';
import { WelfareScheme } from '../../types';

export const GovernanceMaster: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'governance' | 'schemes' | 'schemeCompare' | 'vulnerable'>('governance');
  const [selectedGovModule, setSelectedGovModule] = useState(GOVERNANCE_MODULES[0]);
  const [schemeSearch, setSchemeSearch] = useState('');
  const [selectedScheme, setSelectedScheme] = useState<WelfareScheme>(WELFARE_SCHEMES[0]);

  // Scheme Compare selection
  const [schemeAId, setSchemeAId] = useState<string>(WELFARE_SCHEMES[0].id);
  const [schemeBId, setSchemeBId] = useState<string>(WELFARE_SCHEMES[1].id);

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
            { id: 'vulnerable', label: 'Vulnerable Sections' }
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
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Vulnerable Sections & Social Justice Architecture</h2>
            <p className="text-xs text-slate-500 mt-1">
              Constitutional and institutional safeguards for disadvantaged groups using respectful and legally accurate terminology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {[
              {
                group: 'Scheduled Castes (SCs)',
                articles: 'Art 15(4), 16(4), 17, 46, 330, 332, 338, 341',
                statutes: 'Protection of Civil Rights Act 1955, SC/ST (Prevention of Atrocities) Act 1989',
                body: 'National Commission for Scheduled Castes (NCSC, Art 338)',
                recentIssue: 'Sub-classification within SCs upheld by SC 7-judge bench (Davinder Singh 2024).'
              },
              {
                group: 'Scheduled Tribes (STs)',
                articles: 'Art 15(4), 19(5), 46, 244 (5th & 6th Schedules), 338A, 342',
                statutes: 'Forest Rights Act (FRA) 2006, PESA Act 1996',
                body: 'National Commission for Scheduled Tribes (NCST, Art 338A)',
                recentIssue: 'Implementation of FRA Community Forest Rights and PM-JANMAN mission for PVTGs.'
              },
              {
                group: 'Women & Children',
                articles: 'Art 15(3), 21A, 24, 39(e)/(f), 42, 45, 106th CAA (Women Reservation)',
                statutes: 'Protection of Women from Domestic Violence Act 2005, POCSO Act 2012, POSH Act 2013',
                body: 'National Commission for Women (NCW), NCPCR',
                recentIssue: 'Nari Shakti Vandan Adhiniyam 2023 reserving 33% seats in Parliament and Legislative Assemblies.'
              },
              {
                group: 'Persons with Disabilities (PwDs)',
                articles: 'Art 41 (Public assistance in disablement), Art 14 equality',
                statutes: 'Rights of Persons with Disabilities (RPwD) Act 2016 (expanded recognized disabilities from 7 to 21)',
                body: 'Chief Commissioner for Persons with Disabilities (CCPD)',
                recentIssue: 'Accessible India Campaign (Sugamya Bharat Abhiyan) and digital accessibility mandates.'
              },
              {
                group: 'Senior Citizens',
                articles: 'Art 41 (Right to assistance in old age), Art 47',
                statutes: 'Maintenance and Welfare of Parents and Senior Citizens Act 2007',
                body: 'National Council for Senior Citizens',
                recentIssue: 'Universal extension of Ayushman Bharat PM-JAY to all senior citizens aged 70+ (2024).'
              },
              {
                group: 'Transgender Persons',
                articles: 'Art 14, 19, 21 (NALSA judgment 2014 recognizing third gender)',
                statutes: 'Transgender Persons (Protection of Rights) Act 2019',
                body: 'National Council for Transgender Persons (NCTP)',
                recentIssue: 'SMILE scheme (Support for Marginalized Individuals for Livelihood and Enterprise) and Garima Greh.'
              }
            ].map((v, i) => (
              <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <div className="font-bold text-sm text-blue-950">{v.group}</div>
                <div><strong className="text-slate-800">Constitutional Basis:</strong> <span className="text-slate-600 font-mono text-[11px]">{v.articles}</span></div>
                <div><strong className="text-slate-800">Key Statutes:</strong> <span className="text-slate-600">{v.statutes}</span></div>
                <div><strong className="text-slate-800">Apex Body:</strong> <span className="text-slate-600">{v.body}</span></div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 text-blue-900 font-medium text-[11px]">
                  📌 <strong>Current Relevance:</strong> {v.recentIssue}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
