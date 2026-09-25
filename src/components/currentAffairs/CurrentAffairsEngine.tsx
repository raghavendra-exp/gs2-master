import React, { useState } from 'react';
import {
  Newspaper,
  Calendar,
  Search,
  Bookmark,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  FileText,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronDown,
  Filter
} from 'lucide-react';
import { CURRENT_AFFAIRS_UPDATES } from '../../data';
import { useUserData } from '../../context/UserDataContext';
import { useExamMode } from '../../context/ExamModeContext';
import { CurrentAffairItem } from '../../types';

export const CurrentAffairsEngine: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'This Month' | 'Last 3 Months' | 'Last 6 Months'>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUpdate, setSelectedUpdate] = useState<CurrentAffairItem>(CURRENT_AFFAIRS_UPDATES[0]);

  const { bookmarks, toggleBookmark } = useUserData();
  const { examMode } = useExamMode();

  const categories = [
    'All',
    'Supreme Court',
    'Constitution',
    'Elections',
    'Judiciary',
    'Governance',
    'Welfare Schemes',
    'Neighbourhood',
    'Bilateral Relations'
  ];

  const filteredUpdates = CURRENT_AFFAIRS_UPDATES.filter(item => {
    const matchesCategory = categoryFilter === 'All' || item.category === categoryFilter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.staticTopics.some(st => st.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Title & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Newspaper className="w-6 h-6 text-blue-900" />
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">GS-II Live Update & Syllabus Linker</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Official-source verified current affairs dynamically connected to static constitutional articles, doctrines, PYQs, and answer writing.
          </p>
        </div>

        {/* Date Filter Pills */}
        <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-xl">
          {['All', 'This Month', 'Last 3 Months', 'Last 6 Months'].map(filt => (
            <button
              key={filt}
              onClick={() => setActiveFilter(filt as any)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeFilter === filt
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {filt}
            </button>
          ))}
        </div>
      </div>

      {/* Main Two-Column View: Update Center & 7-Step Linker */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Updates Feed */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-4 space-y-3 shadow-xs h-fit max-h-[82vh] flex flex-col">
          {/* Search & Category Filter */}
          <div className="space-y-2">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search updates or static syllabus keywords..."
                className="w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden"
              />
            </div>

            {/* Horizontal Category Scroll */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    categoryFilter === cat
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-1">
            Feed Items ({filteredUpdates.length})
          </div>

          <div className="overflow-y-auto space-y-2 flex-1 pr-1 divide-y divide-slate-100">
            {filteredUpdates.map(upd => (
              <button
                key={upd.id}
                onClick={() => setSelectedUpdate(upd)}
                className={`w-full text-left p-3.5 rounded-xl transition-all ${
                  selectedUpdate.id === upd.id
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'hover:bg-slate-50 text-slate-800'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span
                    className={`font-semibold ${
                      selectedUpdate.id === upd.id ? 'text-amber-300' : 'text-blue-900'
                    }`}
                  >
                    {upd.category}
                  </span>
                  <span
                    className={`text-[10px] ${
                      selectedUpdate.id === upd.id ? 'text-blue-200' : 'text-slate-400'
                    }`}
                  >
                    {upd.date}
                  </span>
                </div>
                <div className="font-bold text-xs line-clamp-2 leading-snug">{upd.title}</div>
                <div
                  className={`text-[11px] mt-1 line-clamp-1 ${
                    selectedUpdate.id === upd.id ? 'text-slate-200' : 'text-slate-500'
                  }`}
                >
                  {upd.summary}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: 7-STEP SYLLABUS LINKER & DOSSIER */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-100 text-blue-900">
                  {selectedUpdate.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {selectedUpdate.date}
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mt-2">{selectedUpdate.title}</h2>
            </div>

            <button
              onClick={() => toggleBookmark(selectedUpdate.id)}
              className={`p-2 rounded-lg border transition-colors shrink-0 ${
                bookmarks.includes(selectedUpdate.id)
                  ? 'bg-amber-100 border-amber-300 text-amber-900'
                  : 'border-slate-200 text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Bookmark className="w-4 h-4" />
            </button>
          </div>

          {/* Context & Background */}
          <div className="space-y-3 text-xs leading-relaxed">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">What Happened?</div>
              <p className="text-slate-700">{selectedUpdate.summary}</p>
            </div>

            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-200 space-y-1">
              <div className="font-bold text-blue-950">Background & Why It Matters:</div>
              <p className="text-slate-700">{selectedUpdate.background}</p>
            </div>
          </div>

          {/* SIGNATURE FEATURE: THE 7-STEP SYLLABUS LINKER */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-5 space-y-4 shadow-md">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h3 className="font-bold text-sm text-white">
                7-Step Update → Syllabus Linker
              </h3>
            </div>
            <p className="text-[11px] text-slate-300">
              Transforming isolated current news into systematic civil services exam assets.
            </p>

            <div className="space-y-2 text-xs">
              {/* Step 1: News Item */}
              <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                <div>
                  <span className="font-bold text-amber-300">Current News Event: </span>
                  <span className="text-slate-200">{selectedUpdate.title}</span>
                </div>
              </div>

              {/* Step 2: Constitutional Articles */}
              <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                <div>
                  <span className="font-bold text-amber-300">Constitutional / Statutory Base: </span>
                  <span className="text-slate-200">{selectedUpdate.constitutionalLinks.join(' • ')}</span>
                </div>
              </div>

              {/* Step 3: Static Topics */}
              <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                <div>
                  <span className="font-bold text-amber-300">Static Syllabus Concept: </span>
                  <span className="text-slate-200">{selectedUpdate.staticTopics.join(', ')}</span>
                </div>
              </div>

              {/* Step 4: Prelims High-Yield Facts */}
              <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-[10px] shrink-0">4</span>
                <div>
                  <span className="font-bold text-amber-300">Prelims Trap & Facts: </span>
                  <ul className="text-slate-200 space-y-0.5 mt-0.5">
                    {selectedUpdate.prelimsPoints.map((pt, i) => (
                      <li key={i}>• {pt}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 5: Mains Analytical Pointers */}
              <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-[10px] shrink-0">5</span>
                <div>
                  <span className="font-bold text-amber-300">Mains Dimensions: </span>
                  <ul className="text-slate-200 space-y-0.5 mt-0.5">
                    {selectedUpdate.mainsPoints.map((mp, i) => (
                      <li key={i}>• {mp}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 6: Expected Prelims Question */}
              <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-[10px] shrink-0">6</span>
                <div>
                  <span className="font-bold text-amber-300">Predicted Prelims MCQ: </span>
                  <p className="text-slate-200 mt-0.5 italic">{selectedUpdate.possibleQuestions.prelims}</p>
                </div>
              </div>

              {/* Step 7: Expected Mains Question */}
              <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-[10px] shrink-0">7</span>
                <div>
                  <span className="font-bold text-amber-300">Predicted Mains Question: </span>
                  <p className="text-slate-200 mt-0.5 italic">{selectedUpdate.possibleQuestions.mains}</p>
                </div>
              </div>
            </div>
          </div>

          {/* UP Context if available */}
          {selectedUpdate.upRelevance && (examMode === 'UPPSC' || examMode === 'ALL') && (
            <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-1">
              <span className="font-bold">Uttar Pradesh Specific Context (UPPSC GS-II): </span>
              <p className="leading-relaxed">{selectedUpdate.upRelevance}</p>
            </div>
          )}

          {/* Official Source Citations */}
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
            <div className="font-bold text-slate-800">Primary Official Verification:</div>
            {selectedUpdate.sources.map((src, i) => (
              <div key={i} className="flex items-center justify-between text-slate-600">
                <span>{src.title} ({src.organization})</span>
                {src.url && (
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 font-medium flex items-center gap-0.5"
                  >
                    Official Document <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
