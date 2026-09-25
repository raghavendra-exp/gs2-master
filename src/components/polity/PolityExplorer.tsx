import React, { useState } from 'react';
import {
  Landmark,
  Scale,
  GitMerge,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Bookmark,
  TrendingUp,
  Layers,
  HelpCircle,
  Activity,
  Users
} from 'lucide-react';
import { POLITY_TOPICS, INSTITUTIONAL_BODIES } from '../../data';
import { useUserData } from '../../context/UserDataContext';
import { useExamMode } from '../../context/ExamModeContext';
import { SourceBadge } from '../common/SourceBadge';

export const PolityExplorer: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'topics' | 'federalism' | 'separation' | 'parliamentFlow' | 'bodies' | 'diagramLab'>('topics');
  const [selectedTopic, setSelectedTopic] = useState(POLITY_TOPICS[0]);
  const [selectedBodyType, setSelectedBodyType] = useState<string>('All');
  const [flowStep, setFlowStep] = useState<number>(1);
  const [trackerTab, setTrackerTab] = useState<'functions' | 'funds' | 'functionaries'>('funds');

  const { bookmarks, toggleBookmark } = useUserData();
  const { examMode } = useExamMode();

  // Filtered Bodies
  const filteredBodies = INSTITUTIONAL_BODIES.filter(
    b => selectedBodyType === 'All' || b.type === selectedBodyType
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Title & Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Landmark className="w-6 h-6 text-blue-900" />
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Polity & Federalism Lab</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            System of government, parliamentary procedures, Centre-State relations, local governance 3F tracker, and institutional bodies directory.
          </p>
        </div>

        {/* Sub Navigation */}
        <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-xl">
          {[
            { id: 'topics', label: 'Polity Topics' },
            { id: 'federalism', label: 'Federalism & 3F' },
            { id: 'separation', label: 'Separation of Powers' },
            { id: 'parliamentFlow', label: 'Legislative Flow' },
            { id: 'bodies', label: 'Bodies Directory' },
            { id: 'diagramLab', label: 'Diagram Lab' }
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

      {/* 1. POLITY TOPICS */}
      {activeSubTab === 'topics' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Topics List */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-4 space-y-2 shadow-xs h-fit">
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              Select Core Module
            </div>
            {POLITY_TOPICS.map(top => (
              <button
                key={top.id}
                onClick={() => setSelectedTopic(top)}
                className={`w-full text-left p-3.5 rounded-xl transition-all ${
                  selectedTopic.id === top.id
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'hover:bg-slate-50 text-slate-800'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span
                    className={`font-semibold ${
                      selectedTopic.id === top.id ? 'text-amber-300' : 'text-blue-900'
                    }`}
                  >
                    {top.subtopic}
                  </span>
                  <span
                    className={`px-1.5 py-0.2 rounded text-[10px] ${
                      selectedTopic.id === top.id
                        ? 'bg-blue-800 text-blue-200'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {top.category}
                  </span>
                </div>
                <div className="font-bold text-xs line-clamp-1">{top.title}</div>
              </button>
            ))}
          </div>

          {/* Right Column: In-depth Topic Dossier */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                  {selectedTopic.subtopic}
                </span>
                <h2 className="text-xl font-bold text-slate-900 mt-1">{selectedTopic.title}</h2>
              </div>
              <button
                onClick={() => toggleBookmark(selectedTopic.id)}
                className={`p-2 rounded-lg border transition-colors ${
                  bookmarks.includes(selectedTopic.id)
                    ? 'bg-amber-100 border-amber-300 text-amber-900'
                    : 'border-slate-200 text-slate-500 hover:bg-slate-50'
                }`}
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>

            {/* Exam Specific Focus Banner */}
            {(examMode === 'UPPSC' || examMode === 'ALL') && selectedTopic.examSpecificNotes?.uppsc && (
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs space-y-1">
                <div className="font-bold text-amber-950 flex items-center gap-1.5">
                  <Landmark className="w-3.5 h-3.5 text-amber-800" />
                  UPPSC Specific Relevance & Uttar Pradesh Administration:
                </div>
                <p className="text-amber-900 leading-relaxed font-medium">
                  {selectedTopic.examSpecificNotes.uppsc}
                </p>
              </div>
            )}

            {/* Static Content vs Advanced Analysis */}
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2">
                <div className="font-bold text-slate-900">Foundational Static Theory:</div>
                <p>{selectedTopic.staticContent}</p>
              </div>

              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-200 text-xs text-slate-700 leading-relaxed space-y-2">
                <div className="font-bold text-blue-950">Advanced Institutional Analysis:</div>
                <p>{selectedTopic.advancedAnalysis}</p>
              </div>
            </div>

            {/* Constitutional Basis Grid */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Constitutional Foundations (Articles)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedTopic.constitutionalBasis.map((cb, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <span className="font-black text-blue-900">Article {cb.article}: </span>
                    <span className="font-semibold text-slate-800">{cb.title}</span>
                    <p className="text-slate-600 mt-1">{cb.provision}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prelims Facts Box */}
            <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4 space-y-2 text-xs">
              <div className="font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                High-Yield Prelims Pointers
              </div>
              <ul className="space-y-1 text-slate-700">
                {selectedTopic.prelimsFacts.map((pf, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{pf}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mains Pointers Box */}
            <div className="bg-purple-50/60 border border-purple-200 rounded-xl p-4 space-y-2 text-xs">
              <div className="font-bold text-purple-950 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-purple-700" />
                Mains Analytical Framework & Solutions
              </div>
              <ul className="space-y-1 text-slate-700">
                {selectedTopic.mainsPointers.map((mp, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-purple-700 font-bold">•</span>
                    <span>{mp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Source Badge */}
            <SourceBadge
              sources={selectedTopic.sources}
              lastVerified={selectedTopic.lastVerified}
              claimType={selectedTopic.claimType}
            />
          </div>
        </div>
      )}

      {/* 2. FEDERALISM LAB & 3F TRACKER */}
      {activeSubTab === 'federalism' && (
        <div className="space-y-6">
          {/* Centre -> State -> Local Flow */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Centre → State → Local Federal Architecture</h2>
            <p className="text-xs text-slate-500">
              Interactive multi-tier flow demonstrating legislative competence, fiscal devolution channels, and democratic decentralization.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {/* Centre Tier */}
              <div className="bg-blue-900 text-white p-5 rounded-2xl space-y-2 relative shadow-md">
                <span className="text-[10px] font-mono tracking-widest text-amber-300 font-bold uppercase">
                  Tier 1: Union Government
                </span>
                <h3 className="font-bold text-base">The Centre</h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  List I (100 subjects). Article 248 residuary powers, central taxation, national defence, foreign affairs, and inter-state trade.
                </p>
                <div className="pt-2 border-t border-blue-800 text-[11px] text-amber-200 font-medium">
                  Fiscal Instrument: 16th Finance Commission (41% devolution) & Article 275 Grants-in-Aid.
                </div>
              </div>

              {/* State Tier */}
              <div className="bg-indigo-900 text-white p-5 rounded-2xl space-y-2 relative shadow-md">
                <span className="text-[10px] font-mono tracking-widest text-amber-300 font-bold uppercase">
                  Tier 2: State Governments
                </span>
                <h3 className="font-bold text-base">The States</h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  List II (61 subjects). Public order, police, agriculture, public health, local government, and simultaneous GST power (Art 246A).
                </p>
                <div className="pt-2 border-t border-indigo-800 text-[11px] text-amber-200 font-medium">
                  Friction Points: Centrally Sponsored Schemes conditionality, Governor veto, and cess non-divisibility.
                </div>
              </div>

              {/* Local Tier */}
              <div className="bg-emerald-900 text-white p-5 rounded-2xl space-y-2 relative shadow-md">
                <span className="text-[10px] font-mono tracking-widest text-amber-300 font-bold uppercase">
                  Tier 3: Local Self-Governments
                </span>
                <h3 className="font-bold text-base">Panchayats & Municipalities</h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Part IX & IXA (73rd & 74th Amendments). 29 items in 11th Schedule; 18 items in 12th Schedule. Direct participatory grassroots democracy.
                </p>
                <div className="pt-2 border-t border-emerald-800 text-[11px] text-amber-200 font-medium">
                  Vital Metric: The 3F Devolution Index (Functions, Funds, and Functionaries).
                </div>
              </div>
            </div>
          </div>

          {/* Dedicated 3F Tracker */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emerald-700" />
                  The "3F Tracker": Devolution to Local Self-Governments
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Assessing the status of 73rd and 74th Constitutional Amendments across Functions, Funds, and Functionaries.
                </p>
              </div>

              <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
                {(['functions', 'funds', 'functionaries'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setTrackerTab(tab)}
                    className={`px-3 py-1 text-xs font-bold rounded-lg capitalize transition-all ${
                      trackerTab === tab ? 'bg-emerald-800 text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* 3F Content Tabs */}
            {trackerTab === 'functions' && (
              <div className="space-y-3 text-xs">
                <div className="font-bold text-slate-900 text-sm">
                  1. Functions Devolution (11th & 12th Schedules)
                </div>
                <p className="text-slate-700 leading-relaxed">
                  While states have notified transfers of subjects (29 subjects for PRIs, 18 for ULBs), actual functional autonomy remains circumscribed. Parastatals (Development Authorities, Jal Sansthans) continue to bypass elected local councils.
                </p>
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 font-medium">
                  💡 <strong>Activity Mapping:</strong> 2nd ARC recommended clear demarcation of who does what at Gram, Block, and District tiers to avoid functional overlaps.
                </div>
              </div>
            )}

            {trackerTab === 'funds' && (
              <div className="space-y-3 text-xs">
                <div className="font-bold text-slate-900 text-sm">
                  2. Funds Devolution (State Finance Commissions & Own-Source Revenue)
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Financial starvation is the Achilles' heel of local governments. Local bodies in India generate less than 1% of GDP in own-source tax revenue (compared to 6-8% in federal nations like Brazil and Germany). Over 85% of PRI budgets come from tied central/state transfers.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-800">State Finance Commissions (SFC):</span>
                    <p className="text-slate-600 mt-1">Irregular constitution under Art 243I/243Y; recommendations often shelved by state finance departments.</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-800">Municipal Bonds:</span>
                    <p className="text-slate-600 mt-1">Pioneered by Ahmedabad, Lucknow (UP), and Ghaziabad to mobilize market capital for urban water/sewerage.</p>
                  </div>
                </div>
              </div>
            )}

            {trackerTab === 'functionaries' && (
              <div className="space-y-3 text-xs">
                <div className="font-bold text-slate-900 text-sm">
                  3. Functionaries Devolution (Staffing and Administrative Cadre)
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Panchayats and municipalities lack independent, professional engineering, planning, and accounting cadres. Frontline officials (Panchayat Secretaries, Revenue Accountants) remain accountable to state line departments rather than elected Sarpanches and Mayors.
                </p>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 font-medium">
                  UP Intervention: UP established dedicated Panchayat Sachivalayas in 58,000+ gram panchayats and deployed over 58,000 Panchayat Assistants (Panchayat Sahayaks) for local digital services.
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. SEPARATION OF POWERS */}
      {activeSubTab === 'separation' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Separation of Powers & Constitutional Checks & Balances</h2>
            <p className="text-xs text-slate-500 mt-1">
              India does not follow rigid Montesquieu separation (as in the US), but a doctrine of checks and balances where each organ operates within constitutional limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Legislature */}
            <div className="p-5 rounded-2xl border border-blue-200 bg-blue-50/40 space-y-3">
              <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
                <Landmark className="w-4 h-4 text-blue-800" />
                Legislature
              </div>
              <div className="text-xs text-slate-700 space-y-2">
                <div><strong>Primary Function:</strong> Enacting statutes, passing budgets, representing citizen will.</div>
                <div className="bg-white p-2.5 rounded-lg border border-blue-200">
                  <span className="font-bold text-blue-900">Checks on Executive:</span>
                  <p className="text-slate-600 mt-0.5">Question Hour, No-Confidence motion, Public Accounts Committee (PAC), Cut motions.</p>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-blue-200">
                  <span className="font-bold text-blue-900">Checks on Judiciary:</span>
                  <p className="text-slate-600 mt-0.5">Impeachment address for removal of judges, amending laws to cure judicial defects.</p>
                </div>
              </div>
            </div>

            {/* Executive */}
            <div className="p-5 rounded-2xl border border-purple-200 bg-purple-50/40 space-y-3">
              <div className="flex items-center gap-2 text-purple-950 font-bold text-sm">
                <Users className="w-4 h-4 text-purple-800" />
                Executive
              </div>
              <div className="text-xs text-slate-700 space-y-2">
                <div><strong>Primary Function:</strong> Policy implementation, administrative governance, external security.</div>
                <div className="bg-white p-2.5 rounded-lg border border-purple-200">
                  <span className="font-bold text-purple-900">Checks on Legislature:</span>
                  <p className="text-slate-600 mt-0.5">Summoning & proroguing Parliament, Presidential assent / veto to bills, Ordinances (Art 123).</p>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-purple-200">
                  <span className="font-bold text-purple-900">Checks on Judiciary:</span>
                  <p className="text-slate-600 mt-0.5">Pardoning powers (Art 72/161), processing judicial appointments via Memorandum of Procedure.</p>
                </div>
              </div>
            </div>

            {/* Judiciary */}
            <div className="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/40 space-y-3">
              <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
                <Scale className="w-4 h-4 text-emerald-800" />
                Judiciary
              </div>
              <div className="text-xs text-slate-700 space-y-2">
                <div><strong>Primary Function:</strong> Guardian of Constitution, fundamental rights protection, adjudication.</div>
                <div className="bg-white p-2.5 rounded-lg border border-emerald-200">
                  <span className="font-bold text-emerald-900">Checks on Legislature:</span>
                  <p className="text-slate-600 mt-0.5">Judicial review of legislation (Art 13), Basic Structure doctrine, striking down arbitrary laws.</p>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-emerald-200">
                  <span className="font-bold text-emerald-900">Checks on Executive:</span>
                  <p className="text-slate-600 mt-0.5">Writ jurisdiction against executive illegality, striking down arbitrary executive orders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. PARLIAMENT LEGISLATIVE FLOW VISUALIZER */}
      {activeSubTab === 'parliamentFlow' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Interactive Parliamentary Legislative Process</h2>
            <p className="text-xs text-slate-500 mt-1">
              Visualizing the journey of a Bill from conceptual drafting to enactment as an Act of Parliament.
            </p>
          </div>

          {/* Stepper Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
            {[
              { num: 1, title: 'Drafting & Idea' },
              { num: 2, title: 'Introduction (1st Reading)' },
              { num: 3, title: 'Committee Scrutiny' },
              { num: 4, title: 'Clause Debate (2nd Reading)' },
              { num: 5, title: 'Voting (3rd Reading)' },
              { num: 6, title: 'Second House' },
              { num: 7, title: 'Presidential Assent' }
            ].map(step => (
              <button
                key={step.num}
                onClick={() => setFlowStep(step.num)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  flowStep === step.num
                    ? 'bg-blue-900 text-white shadow-xs ring-1 ring-blue-700'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                  {step.num}
                </span>
                <span>{step.title}</span>
              </button>
            ))}
          </div>

          {/* Step Detail Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-xs text-slate-700 space-y-3">
            {flowStep === 1 && (
              <div className="space-y-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-900">STAGE 1</span>
                <h3 className="text-base font-bold text-slate-900">Policy Formulation & Legislative Drafting</h3>
                <p className="leading-relaxed">
                  Originates in the administrative Ministry in consultation with stakeholders. The Ministry of Law and Justice (Legislative Department) drafts the Bill in legal language. Pre-legislative Consultation Policy (2014) recommends publishing draft for 30 days for public comments.
                </p>
              </div>
            )}
            {flowStep === 2 && (
              <div className="space-y-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-900">STAGE 2</span>
                <h3 className="text-base font-bold text-slate-900">First Reading: Introduction in Parliament</h3>
                <p className="leading-relaxed">
                  Minister moves a motion for leave to introduce the Bill. If approved, the Bill is introduced and published in the Official Gazette. No discussion takes place at this stage, except if competence is challenged.
                </p>
              </div>
            )}
            {flowStep === 3 && (
              <div className="space-y-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-900">STAGE 3</span>
                <h3 className="text-base font-bold text-slate-900">Standing Committee Scrutiny</h3>
                <p className="leading-relaxed">
                  Presiding Officer refers the Bill to the concerned Departmentally Related Standing Committee (DRSC). The Committee conducts clause-by-clause examination, calls domain experts, hears public testimony, and prepares an analytical report.
                </p>
                <div className="text-amber-800 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                  Critical GS-II issue: Bills referred to committees have dropped from over 60% in the 14th Lok Sabha to less than 25% in recent terms.
                </div>
              </div>
            )}
            {flowStep === 4 && (
              <div className="space-y-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-900">STAGE 4</span>
                <h3 className="text-base font-bold text-slate-900">Second Reading: Clause-by-Clause Debate</h3>
                <p className="leading-relaxed">
                  The most crucial stage. Every clause and schedule is taken up separately; MPs move amendments, debate specific wordings, and vote on each amendment individually.
                </p>
              </div>
            )}
            {flowStep === 5 && (
              <div className="space-y-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-900">STAGE 5</span>
                <h3 className="text-base font-bold text-slate-900">Third Reading: Final Passage</h3>
                <p className="leading-relaxed">
                  Debate is confined to arguments for either supporting or rejecting the Bill as a whole. No new substantial amendments are permitted. The House votes; if passed by requisite majority, it is transmitted to the Second House.
                </p>
              </div>
            )}
            {flowStep === 6 && (
              <div className="space-y-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-900">STAGE 6</span>
                <h3 className="text-base font-bold text-slate-900">Transmitted to the Other House</h3>
                <p className="leading-relaxed">
                  The Bill goes through identical three readings in the Second House. If the other house rejects or sits on it for 6 months without passing, a legislative deadlock occurs, which can be resolved via a Joint Sitting (Article 108) for Ordinary Bills.
                </p>
              </div>
            )}
            {flowStep === 7 && (
              <div className="space-y-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-900">STAGE 7</span>
                <h3 className="text-base font-bold text-slate-900">Presidential Assent (Article 111)</h3>
                <p className="leading-relaxed">
                  The Bill is presented to the President of India. The President can: (1) Assent, (2) Withhold assent, or (3) Return the bill (if not a Money Bill) for reconsideration. Once assented, the Bill becomes an Act and enters into force upon Gazette notification.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 5. BODIES DIRECTORY */}
      {activeSubTab === 'bodies' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Institutional Bodies Directory</h2>
              <p className="text-xs text-slate-500 mt-1">
                Comparative analysis of Constitutional, Statutory, Regulatory, and Quasi-Judicial bodies.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-xl">
              {['All', 'Constitutional', 'Statutory', 'Regulatory', 'Quasi-Judicial'].map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedBodyType(type)}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    selectedBodyType === type
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredBodies.map(body => (
              <div
                key={body.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-blue-300 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      body.type === 'Constitutional'
                        ? 'bg-blue-100 text-blue-900'
                        : body.type === 'Statutory'
                        ? 'bg-purple-100 text-purple-900'
                        : body.type === 'Regulatory'
                        ? 'bg-emerald-100 text-emerald-900'
                        : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {body.type} Body
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">Est. {body.yearEstablished}</span>
                </div>

                <h3 className="font-bold text-base text-slate-900">{body.name}</h3>
                <div className="text-xs text-slate-500 font-mono">{body.articleOrAct}</div>

                <div className="text-xs space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div><strong>Composition:</strong> {body.composition}</div>
                  <div><strong>Appointment:</strong> {body.appointmentProcess}</div>
                  <div><strong>Tenure:</strong> {body.tenureAndRemoval}</div>
                </div>

                <div className="text-xs space-y-1">
                  <div className="font-bold text-slate-800">Key Powers:</div>
                  <ul className="space-y-0.5 text-slate-600">
                    {body.mandateAndPowers.slice(0, 3).map((mp, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="text-blue-900 font-bold">•</span>
                        <span>{mp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {body.upRelevance && (
                  <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-900 font-medium">
                    🏛 <strong>UP Context:</strong> {body.upRelevance}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. DIAGRAM LAB */}
      {activeSubTab === 'diagramLab' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Polity Interactive Diagram Lab</h2>
            <p className="text-xs text-slate-500 mt-1">
              Visual schematics for conceptual mastery and answer enrichment diagrams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Judicial Hierarchy Diagram Card */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50 space-y-3">
              <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-purple-700" />
                Integrated Judicial Pyramid of India
              </div>
              <div className="space-y-2 text-center text-xs pt-2">
                <div className="bg-purple-900 text-white font-bold p-3 rounded-xl shadow-xs">
                  SUPREME COURT OF INDIA (New Delhi)
                  <div className="text-[10px] text-purple-200 font-normal">Apex Court • Original, Appellate, Advisory, Writs (Art 32)</div>
                </div>
                <div className="text-slate-400">▲ Appeals under Art 132-136</div>
                <div className="bg-purple-800 text-white font-bold p-3 rounded-xl shadow-xs">
                  HIGH COURTS OF STATES (e.g. Allahabad High Court)
                  <div className="text-[10px] text-purple-200 font-normal">State Apex • Writ Jurisdiction (Art 226) • Superintendence (Art 227)</div>
                </div>
                <div className="text-slate-400">▲ Appeals / Revisions</div>
                <div className="bg-purple-700 text-white font-bold p-3 rounded-xl shadow-xs">
                  DISTRICT & SESSIONS COURTS (District Level)
                  <div className="text-[10px] text-purple-200 font-normal">Civil (District Judge) & Criminal (Sessions Judge)</div>
                </div>
                <div className="text-slate-400">▲</div>
                <div className="bg-slate-200 text-slate-800 font-bold p-2.5 rounded-xl">
                  SUBORDINATE COURTS (Munsif Courts / Judicial Magistrates / Gram Nyayalayas)
                </div>
              </div>
            </div>

            {/* Seventh Schedule Competence Flow */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50 space-y-3">
              <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-blue-700" />
                Seventh Schedule Legislative Demarcation
              </div>
              <div className="space-y-3 text-xs pt-2">
                <div className="p-3 bg-blue-100 text-blue-950 rounded-xl border border-blue-200">
                  <div className="font-bold">List I (Union List): 100 Items</div>
                  <div className="text-slate-600 mt-1">Exclusive parliamentary domain: Defence, Foreign affairs, Banking, Atomic energy, Railways.</div>
                </div>
                <div className="p-3 bg-indigo-100 text-indigo-950 rounded-xl border border-indigo-200">
                  <div className="font-bold">List II (State List): 61 Items</div>
                  <div className="text-slate-600 mt-1">Exclusive State Assembly domain: Police, Public order, Agriculture, Prisons, Local Government.</div>
                </div>
                <div className="p-3 bg-purple-100 text-purple-950 rounded-xl border border-purple-200">
                  <div className="font-bold">List III (Concurrent List): 52 Items</div>
                  <div className="text-slate-600 mt-1">Shared competence: Criminal law, Marriage, Civil procedure, Forests, Education (Art 254 federal supremacy).</div>
                </div>
                <div className="p-3 bg-slate-900 text-amber-300 rounded-xl">
                  <div className="font-bold">Residuary Powers (Article 248)</div>
                  <div className="text-slate-200 mt-1 text-[11px]">Vests entirely in Parliament (e.g. Cyber laws, Space regulation).</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
