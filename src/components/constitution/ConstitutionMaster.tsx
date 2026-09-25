import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Bookmark,
  Share2,
  Scale,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import {
  CONSTITUTION_ARTICLES,
  CONSTITUTIONAL_AMENDMENTS,
  BASIC_STRUCTURE_TIMELINE,
  BASIC_STRUCTURE_FEATURES,
  COMPARATIVE_CONSTITUTIONS,
  HISTORICAL_ACTS_DATA,
  CONSTITUENT_ASSEMBLY_DATA,
  SALIENT_FEATURES_DATA
} from '../../data';
import { useUserData } from '../../context/UserDataContext';
import { ConstitutionArticle } from '../../types';

export const ConstitutionMaster: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'historical' | 'features' | 'articles' | 'map' | 'amendments' | 'basicStructure' | 'comparative'>('historical');
  const [articleSearch, setArticleSearch] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<ConstitutionArticle>(CONSTITUTION_ARTICLES[0]);
  const [actSearch, setActSearch] = useState('');
  const [selectedAct, setSelectedAct] = useState(HISTORICAL_ACTS_DATA[0]);
  const [amendmentSearch, setAmendmentSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COMPARATIVE_CONSTITUTIONS[0]);

  const { bookmarks, toggleBookmark, notes, saveNote } = useUserData();

  // Filtered Articles
  const filteredArticles = CONSTITUTION_ARTICLES.filter(
    art =>
      art.articleNumber.toLowerCase().includes(articleSearch.toLowerCase()) ||
      art.subject.toLowerCase().includes(articleSearch.toLowerCase()) ||
      art.part.toLowerCase().includes(articleSearch.toLowerCase())
  );

  // Filtered Amendments
  const filteredAmendments = CONSTITUTIONAL_AMENDMENTS.filter(
    am =>
      am.amendmentNumber.toLowerCase().includes(amendmentSearch.toLowerCase()) ||
      am.title.toLowerCase().includes(amendmentSearch.toLowerCase()) ||
      am.reasonAndBackground.toLowerCase().includes(amendmentSearch.toLowerCase()) ||
      am.year.toString().includes(amendmentSearch)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Module Title & Sub-tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-900" />
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Constitution Master</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Authoritative constitutional text, judicial doctrine, article explorer, and comparative constitutional systems.
          </p>
        </div>

        {/* Sub-Navigation Buttons */}
        <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-xl">
          {[
            { id: 'historical', label: 'Historical Evolution (1773-1947)' },
            { id: 'features', label: 'Salient Features' },
            { id: 'articles', label: 'Article Explorer' },
            { id: 'map', label: 'Constitution Map' },
            { id: 'amendments', label: 'Amendment Tracker' },
            { id: 'basicStructure', label: 'Basic Structure' },
            { id: 'comparative', label: 'Comparative' }
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

      {/* 0A. HISTORICAL UNDERPINNINGS & EVOLUTION (1773-1947) */}
      {activeSubTab === 'historical' && (
        <div className="space-y-8 animate-fade-in">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              Constitutional Genesis
            </div>
            <h2 className="text-xl font-black mt-1">From Regulating Act (1773) to Indian Independence (1947)</h2>
            <p className="text-xs text-blue-100 mt-2 max-w-3xl leading-relaxed">
              Trace the administrative, legislative, and judicial evolution of the Indian Constitution through colonial enactments, the Constituent Assembly debates, and the philosophical bedrock of Nehru's Objective Resolution.
            </p>
          </div>

          {/* Act Explorer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Acts Selector */}
            <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-4 space-y-3 shadow-xs max-h-[80vh] flex flex-col">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={actSearch}
                  onChange={e => setActSearch(e.target.value)}
                  placeholder="Search Act (e.g. 1935, 1919, 1858)..."
                  className="w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-blue-900"
                />
              </div>

              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-1">
                Acts Timeline ({HISTORICAL_ACTS_DATA.length})
              </div>

              <div className="overflow-y-auto space-y-2 flex-1 pr-1">
                {HISTORICAL_ACTS_DATA.filter(act => 
                  act.actName.toLowerCase().includes(actSearch.toLowerCase()) || 
                  act.year.toString().includes(actSearch)
                ).map(act => {
                  const isSelected = selectedAct.id === act.id;
                  return (
                    <button
                      key={act.id}
                      onClick={() => setSelectedAct(act)}
                      className={`w-full text-left p-3 rounded-xl border transition-all ${
                        isSelected
                          ? 'border-blue-900 bg-blue-50/50 shadow-xs'
                          : 'border-slate-100 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-black ${
                          isSelected ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {act.year}
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold">
                          British Enactment
                        </span>
                      </div>
                      <div className="font-bold text-xs text-slate-900 mt-1 line-clamp-1">
                        {act.actName}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Selected Act Detailed Dossier */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 space-y-6 shadow-xs">
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-black px-2.5 py-0.5 rounded-lg bg-blue-100 text-blue-900">
                      YEAR {selectedAct.year}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Historical Underpinning</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mt-1">{selectedAct.actName}</h3>
                </div>
                <div className="text-[11px] text-slate-500 italic bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                  Source: {selectedAct.officialSource}
                </div>
              </div>

              {/* Context */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Historical Context</h4>
                <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {selectedAct.historicalContext}
                </p>
              </div>

              {/* Key Provisions */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Salient Statutory Provisions
                </h4>
                <div className="space-y-1.5">
                  {selectedAct.keyProvisions.map((prov, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50/70 p-2.5 rounded-lg border border-slate-100">
                      <span className="font-mono font-bold text-blue-900 shrink-0">{idx + 1}.</span>
                      <span className="leading-relaxed">{prov}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Constitutional Legacy */}
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-1">
                <span className="font-bold text-blue-900 text-xs flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-blue-700" />
                  Constitutional Legacy in Present Indian Governance
                </span>
                <p className="text-xs text-blue-950 leading-relaxed">
                  {selectedAct.constitutionalLegacy}
                </p>
              </div>

              {/* Prelims Trap & Mains Pointers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    Prelims Trap Angle
                  </div>
                  <p className="text-xs text-amber-950 leading-relaxed">
                    {selectedAct.prelimsTrap}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-slate-200 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase">
                    <FileText className="w-4 h-4" />
                    Mains Analytical Pointers
                  </div>
                  <ul className="text-xs space-y-1 text-slate-300 list-disc list-inside">
                    {selectedAct.mainsPointers.map((mp, i) => (
                      <li key={i} className="leading-relaxed">{mp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Constituent Assembly Timeline */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-black text-slate-900">
                  Constituent Assembly: The Making of the Sovereign Republic
                </h3>
                <p className="text-xs text-slate-500">
                  Key milestones, Objective Resolution, and drafting committee proceedings (1946–1950)
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                2 Years, 11 Months, 18 Days
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {CONSTITUENT_ASSEMBLY_DATA.map((milestone, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-900 text-white">
                      {milestone.dateOrPeriod}
                    </span>
                    <h4 className="font-bold text-xs text-slate-900 mt-2">{milestone.event}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{milestone.significance}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Key Architects: </span>
                    {milestone.keyPersonalities.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 0B. SALIENT FEATURES OF THE INDIAN CONSTITUTION */}
      {activeSubTab === 'features' && (
        <div className="space-y-6 animate-fade-in">
          <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <Scale className="w-4 h-4" />
              Constitutional Architecture
            </div>
            <h2 className="text-xl font-black mt-1">Salient Features of the Indian Constitutional Scheme</h2>
            <p className="text-xs text-slate-300 mt-2 max-w-3xl leading-relaxed">
              In-depth comparative analysis of the unique synthesis of rigidity and flexibility, parliamentary sovereignty with judicial supremacy, and positive secularism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SALIENT_FEATURES_DATA.map(feature => (
              <div key={feature.id} className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <h3 className="font-bold text-sm text-slate-900">{feature.featureName}</h3>
                    <div className="flex gap-1">
                      {feature.constitutionalArticles.map((art, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-bold border border-blue-200">
                          {art}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-blue-900 uppercase">Indian Synthesis</span>
                    <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      {feature.indianModel}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-amber-800 uppercase">Comparison with Western Systems</span>
                    <p className="text-xs text-slate-600 leading-relaxed bg-amber-50/40 p-2.5 rounded-lg border border-amber-100">
                      {feature.comparisonWithWesternModels}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] text-slate-500">
                    <span className="font-bold text-slate-700">Landmark Precedents: </span>
                    {feature.landmarkJudgments.join(' • ')}
                  </div>
                  <div className="text-[11px] text-slate-600 italic bg-slate-50 p-2 rounded border border-slate-100">
                    {feature.criticalAnalysis}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 1. ARTICLE EXPLORER */}
      {activeSubTab === 'articles' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Article Selector */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-4 space-y-3 shadow-xs h-fit max-h-[82vh] flex flex-col">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={articleSearch}
                onChange={e => setArticleSearch(e.target.value)}
                placeholder="Search Article (e.g. 14, 21, 368)..."
                className="w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-blue-900"
              />
            </div>

            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-1">
              Select Article ({filteredArticles.length})
            </div>

            <div className="overflow-y-auto space-y-1.5 flex-1 pr-1 divide-y divide-slate-50">
              {filteredArticles.map(art => (
                <button
                  key={art.articleNumber}
                  onClick={() => setSelectedArticle(art)}
                  className={`w-full text-left p-3 rounded-xl transition-all ${
                    selectedArticle.articleNumber === art.articleNumber
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-black ${
                        selectedArticle.articleNumber === art.articleNumber
                          ? 'text-amber-300'
                          : 'text-blue-900'
                      }`}
                    >
                      Article {art.articleNumber}
                    </span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded ${
                        selectedArticle.articleNumber === art.articleNumber
                          ? 'bg-blue-800 text-blue-200'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {art.part.split(':')[0]}
                    </span>
                  </div>
                  <div
                    className={`text-xs font-medium mt-1 line-clamp-1 ${
                      selectedArticle.articleNumber === art.articleNumber
                        ? 'text-slate-100'
                        : 'text-slate-700'
                    }`}
                  >
                    {art.subject}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Detailed Article Dossier */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 text-xs font-black bg-blue-900 text-amber-300 rounded-lg">
                    ARTICLE {selectedArticle.articleNumber}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{selectedArticle.part}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mt-2">{selectedArticle.subject}</h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleBookmark(`art-${selectedArticle.articleNumber}`)}
                  className={`p-2 rounded-lg border transition-colors ${
                    bookmarks.includes(`art-${selectedArticle.articleNumber}`)
                      ? 'bg-amber-100 border-amber-300 text-amber-900'
                      : 'border-slate-200 text-slate-500 hover:bg-slate-50'
                  }`}
                  title="Bookmark Article"
                >
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Official Constitutional Text Extract */}
            <div className="bg-slate-900 text-slate-100 p-4 rounded-xl border border-slate-800 text-xs font-serif leading-relaxed relative">
              <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400 mb-1 font-bold">
                Constitutional Text Extract (Official)
              </div>
              "{selectedArticle.originalTextExtract}"
            </div>

            {/* Simple Explanation & Constitutional Context */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50/60 border border-blue-100 p-4 rounded-xl space-y-1">
                <div className="text-xs font-bold text-blue-950 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-blue-800" />
                  Conceptual Explanation
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {selectedArticle.simpleExplanation}
                </p>
              </div>

              <div className="bg-purple-50/60 border border-purple-100 p-4 rounded-xl space-y-1">
                <div className="text-xs font-bold text-purple-950 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-purple-800" />
                  Constitutional Context
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {selectedArticle.constitutionalContext}
                </p>
              </div>
            </div>

            {/* Landmark Judgments */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-purple-700" />
                Landmark Supreme Court Interpretations
              </div>
              <div className="space-y-2">
                {selectedArticle.landmarkCases.map((cs, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed font-medium"
                  >
                    ⚖️ {cs}
                  </div>
                ))}
              </div>
            </div>

            {/* Prelims Facts Box */}
            <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4 space-y-2">
              <div className="text-xs font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                Prelims in 60 Seconds: Key Traps & Provisions
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {selectedArticle.prelimsFacts.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mains Questions & Application */}
            <div className="bg-amber-50/50 border border-amber-200 rounded-xl p-4 space-y-2">
              <div className="text-xs font-bold text-amber-950 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-amber-800" />
                Mains Questions & Analytical Enquirers
              </div>
              <div className="space-y-2">
                {selectedArticle.mainsQuestions.map((mq, idx) => (
                  <div key={idx} className="text-xs text-slate-800 font-medium bg-white p-2.5 rounded-lg border border-amber-200/60">
                    ✍️ {mq}
                  </div>
                ))}
              </div>
            </div>

            {/* Revision Card & Official Source */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="italic">💡 {selectedArticle.revisionTips}</div>
              <div className="text-[11px] text-slate-400 font-medium">Source: {selectedArticle.source}</div>
            </div>

            {/* Personal Notes Editor for this Article */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <div className="text-xs font-bold text-slate-800">Your Personal Study Notes (Article {selectedArticle.articleNumber}):</div>
              <textarea
                value={notes[`art-${selectedArticle.articleNumber}`] || ''}
                onChange={e => saveNote(`art-${selectedArticle.articleNumber}`, e.target.value)}
                placeholder="Write your personal mnemonics, coaching notes, or revision points for this article here..."
                rows={3}
                className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-blue-900 bg-slate-50"
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. CONSTITUTION MAP */}
      {activeSubTab === 'map' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Interactive Constitution Map</h2>
            <p className="text-xs text-slate-500 mt-1">
              Visualizing the hierarchical architecture of the Indian Constitution: Preamble → Parts → Chapters → Articles → Schedules → Amendments.
            </p>
          </div>

          <div className="space-y-6 overflow-x-auto py-4">
            {/* Visual Node Hierarchy */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
              {[
                { title: 'PREAMBLE', sub: 'Philosophy & Aims', color: 'bg-amber-600' },
                { title: '25 PARTS', sub: 'Substantive Law', color: 'bg-blue-900' },
                { title: '448+ ARTICLES', sub: 'Statutory Texts', color: 'bg-indigo-700' },
                { title: '12 SCHEDULES', sub: 'Operational Lists', color: 'bg-emerald-700' },
                { title: '106 AMENDMENTS', sub: 'Organic Evolution', color: 'bg-purple-700' },
                { title: 'BASIC STRUCTURE', sub: 'Judicial Sentinel', color: 'bg-rose-700' }
              ].map((node, i) => (
                <div key={i} className="flex-1 text-center w-full md:w-auto">
                  <div className={`${node.color} text-white p-4 rounded-2xl shadow-md space-y-1`}>
                    <div className="text-xs font-black tracking-wider">{node.title}</div>
                    <div className="text-[10px] text-white/80">{node.sub}</div>
                  </div>
                  {i < 5 && (
                    <div className="hidden md:block text-slate-300 text-lg font-black my-1">
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Key Parts Quick Reference Table */}
            <div className="mt-8 border border-slate-200 rounded-xl overflow-hidden text-xs">
              <table className="w-full text-left divide-y divide-slate-200">
                <thead className="bg-slate-50 font-bold text-slate-700">
                  <tr>
                    <th className="p-3">Part</th>
                    <th className="p-3">Subject Matter</th>
                    <th className="p-3">Articles Range</th>
                    <th className="p-3">GS-II High Yield Relevance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-blue-950">Part III</td>
                    <td className="p-3 font-medium text-slate-900">Fundamental Rights</td>
                    <td className="p-3">Articles 12 to 35</td>
                    <td className="p-3 text-emerald-700 font-semibold">Highest Priority (Articles 14, 19, 21, 32)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-blue-950">Part IV</td>
                    <td className="p-3 font-medium text-slate-900">Directive Principles of State Policy (DPSP)</td>
                    <td className="p-3">Articles 36 to 51</td>
                    <td className="p-3 text-blue-700 font-semibold">Welfare State, UCC (Art 44), Panchayats (Art 40)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-blue-950">Part IVA</td>
                    <td className="p-3 font-medium text-slate-900">Fundamental Duties</td>
                    <td className="p-3">Article 51A</td>
                    <td className="p-3">Swaran Singh Committee, 86th CAA</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-blue-950">Part V</td>
                    <td className="p-3 font-medium text-slate-900">The Union (Executive, Parliament, SC, CAG)</td>
                    <td className="p-3">Articles 52 to 151</td>
                    <td className="p-3 text-emerald-700 font-semibold">Parliamentary Procedures, SC, Article 124, CAG</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-blue-950">Part VI</td>
                    <td className="p-3 font-medium text-slate-900">The States (Governor, Legislature, High Courts)</td>
                    <td className="p-3">Articles 152 to 237</td>
                    <td className="p-3 text-amber-700 font-semibold">Governor Discretion, Article 200, Allahabad HC</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-blue-950">Part IX & IXA</td>
                    <td className="p-3 font-medium text-slate-900">Panchayats and Municipalities</td>
                    <td className="p-3">Articles 243 to 243ZG</td>
                    <td className="p-3 text-emerald-700 font-semibold">73rd & 74th Amendments, 3F Tracker, Local Finance</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-blue-950">Part XI & XII</td>
                    <td className="p-3 font-medium text-slate-900">Centre-State Relations & Finance Commission</td>
                    <td className="p-3">Articles 245 to 300A</td>
                    <td className="p-3 text-emerald-700 font-semibold">GST (Art 279A), Finance Commission (Art 280), River Water (262)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-blue-950">Part XV</td>
                    <td className="p-3 font-medium text-slate-900">Elections & Election Commission</td>
                    <td className="p-3">Articles 324 to 329</td>
                    <td className="p-3 text-blue-700 font-semibold">ECI Autonomy, RPA 1950 & 1951, Electoral Reforms</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-blue-950">Part XVIII</td>
                    <td className="p-3 font-medium text-slate-900">Emergency Provisions</td>
                    <td className="p-3">Articles 352 to 360</td>
                    <td className="p-3 text-amber-700 font-semibold">National Emergency, President’s Rule (Art 356), Bommai case</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-blue-950">Part XX</td>
                    <td className="p-3 font-medium text-slate-900">Amendment of the Constitution</td>
                    <td className="p-3">Article 368</td>
                    <td className="p-3 text-emerald-700 font-semibold">Basic Structure, Kesavananda, Minerva Mills</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 3. AMENDMENT TRACKER */}
      {activeSubTab === 'amendments' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Constitutional Amendment Tracker</h2>
              <p className="text-xs text-slate-500 mt-1">
                Database of landmark constitutional amendments, reasons, impacted articles, and judicial review tests.
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={amendmentSearch}
                onChange={e => setAmendmentSearch(e.target.value)}
                placeholder="Search amendment, year, keyword..."
                className="w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredAmendments.map(am => (
              <div
                key={am.amendmentNumber}
                className="p-5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xs transition-all bg-slate-50/50 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 text-xs font-black bg-blue-900 text-amber-300 rounded-lg">
                    {am.amendmentNumber} ({am.year})
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">Official Gazette</span>
                </div>

                <h3 className="font-bold text-sm text-slate-900">{am.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{am.importance}</p>

                <div className="space-y-1 text-xs bg-white p-3 rounded-xl border border-slate-200/70">
                  <div className="font-semibold text-slate-800">Provisions Changed:</div>
                  <div className="text-slate-600 font-mono text-[11px]">
                    {am.provisionsChanged.join(', ')}
                  </div>
                </div>

                {am.relatedJudgment && (
                  <div className="text-xs text-purple-900 bg-purple-50 p-2.5 rounded-lg border border-purple-200 font-medium">
                    ⚖️ <strong>Related SC Ruling:</strong> {am.relatedJudgment}
                  </div>
                )}

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Prelims Points: {am.prelimsFacts.length}</span>
                  <span className="text-blue-800 font-semibold">{am.source.slice(0, 35)}...</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. BASIC STRUCTURE MODULE */}
      {activeSubTab === 'basicStructure' && (
        <div className="space-y-6">
          {/* Conceptual Card */}
          <div className="bg-gradient-to-r from-blue-950 to-indigo-950 text-white rounded-2xl p-6 shadow-md space-y-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-blue-950">
              Judicially Evolved Doctrine
            </span>
            <h2 className="text-xl font-bold text-white">The Basic Structure Doctrine</h2>
            <p className="text-xs text-slate-200 leading-relaxed max-w-3xl">
              Evolved on April 24, 1973 in the historic Kesavananda Bharati verdict. It establishes that while Parliament possesses broad powers to amend the Constitution under Article 368, it CANNOT alter, damage, or destroy the core framework and values that give the Constitution its foundational identity.
            </p>
            <div className="text-[11px] text-amber-300 font-medium pt-1">
              Distinction: The words "Basic Structure" do NOT appear in the constitutional text; it is an inherent constitutional doctrine evolved by judicial review to protect constitutional supremacy.
            </div>
          </div>

          {/* Historical Judicial Evolution Timeline */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-900" />
              Chronological Landmark Milestones
            </h3>

            <div className="relative border-l-2 border-blue-200 ml-4 pl-6 space-y-6 my-4">
              {BASIC_STRUCTURE_TIMELINE.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-blue-900 border-2 border-white group-hover:scale-125 transition-transform" />
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-black text-xs text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {item.year}
                    </span>
                    <span className="font-bold text-sm text-slate-900">{item.caseOrEvent}</span>
                    <span className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      Bench: {item.benchSize}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">{item.verdict}</p>
                  <div className="mt-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-1 rounded inline-block">
                    Impact: {item.impactOnDoctrine}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* List of Judicially Recognized Basic Features */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-900 text-base">Judicially Recognized Basic Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {BASIC_STRUCTURE_FEATURES.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1">
                  <div className="font-bold text-xs text-blue-950 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                    {feat.feature}
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{feat.description}</p>
                  <div className="text-[10px] font-medium text-slate-400 pt-1">Origin: {feat.sourceCase}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. COMPARATIVE CONSTITUTION */}
      {activeSubTab === 'comparative' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Country Selector */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-4 space-y-2 shadow-xs h-fit">
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              Select Comparison Country
            </div>
            {COMPARATIVE_CONSTITUTIONS.map(c => (
              <button
                key={c.country}
                onClick={() => setSelectedCountry(c)}
                className={`w-full text-left p-3 rounded-xl transition-all ${
                  selectedCountry.country === c.country
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'hover:bg-slate-50 text-slate-800'
                }`}
              >
                <div className="font-bold text-xs">{c.country}</div>
                <div
                  className={`text-[10px] mt-0.5 line-clamp-1 ${
                    selectedCountry.country === c.country ? 'text-blue-200' : 'text-slate-500'
                  }`}
                >
                  {c.system}
                </div>
              </button>
            ))}
          </div>

          {/* Comparison Details */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                Comparative Constitutional Analysis
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">India vs {selectedCountry.country}</h2>
              <div className="text-xs text-slate-500 mt-1 font-medium">{selectedCountry.system}</div>
            </div>

            {/* Core Comparison Highlight */}
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl space-y-1">
              <div className="text-xs font-bold text-amber-950">Key Analytical Comparison with India:</div>
              <p className="text-xs text-amber-900 leading-relaxed font-medium">
                {selectedCountry.keyComparisonWithIndia}
              </p>
            </div>

            {/* Structured Dimension Rows */}
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/70">
                <span className="font-bold text-slate-900">Executive Architecture:</span>
                <p className="text-slate-700 mt-1">{selectedCountry.executive}</p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/70">
                <span className="font-bold text-slate-900">Legislature & Parliamentary Sovereignty:</span>
                <p className="text-slate-700 mt-1">{selectedCountry.legislature}</p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/70">
                <span className="font-bold text-slate-900">Judiciary & Review Standard:</span>
                <p className="text-slate-700 mt-1">{selectedCountry.judiciary}</p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/70">
                <span className="font-bold text-slate-900">Federal Structure & Residuary Powers:</span>
                <p className="text-slate-700 mt-1">{selectedCountry.federalism}</p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/70">
                <span className="font-bold text-slate-900">Bill of Rights & Civil Liberties:</span>
                <p className="text-slate-700 mt-1">{selectedCountry.billOfRights}</p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/70">
                <span className="font-bold text-slate-900">Amendment Rigidity vs Flexibility:</span>
                <p className="text-slate-700 mt-1">{selectedCountry.amendmentProcedure}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
