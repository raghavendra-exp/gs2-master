import React, { useState } from 'react';
import {
  HelpCircle,
  Search,
  Filter,
  BarChart3,
  Calendar,
  CheckCircle2,
  Bookmark,
  Layers,
  Award,
  ChevronRight
} from 'lucide-react';
import { PYQ_DATABASE } from '../../data';
import { useUserData } from '../../context/UserDataContext';
import { useExamMode } from '../../context/ExamModeContext';
import { PYQItem } from '../../data/pyqs/pyqData';

export const PYQAnalysisEngine: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState<'All' | 'UPSC' | 'UPPSC'>('All');
  const [selectedStage, setSelectedStage] = useState<'All' | 'Prelims' | 'Mains'>('All');
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePYQ, setActivePYQ] = useState<PYQItem>(PYQ_DATABASE[0]);

  const { bookmarks, toggleBookmark } = useUserData();
  const { examMode } = useExamMode();

  const filteredPYQs = PYQ_DATABASE.filter(item => {
    const matchesExam = selectedExam === 'All' || item.exam === selectedExam;
    const matchesStage = selectedStage === 'All' || item.stage === selectedStage;
    const matchesTopic = selectedTopic === 'All' || item.topic === selectedTopic;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.conceptsTested.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesExam && matchesStage && matchesTopic && matchesSearch;
  });

  // Topic distribution analytics
  const topicCounts: Record<string, number> = {};
  PYQ_DATABASE.forEach(q => {
    topicCounts[q.topic] = (topicCounts[q.topic] || 0) + 1;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Title & Stats Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-900" />
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">PYQ Analysis Engine</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Official UPSC Civil Services and UPPSC PCS Previous Years Questions with concept mapping and model points.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
            {(['All', 'UPSC', 'UPPSC'] as const).map(e => (
              <button
                key={e}
                onClick={() => setSelectedExam(e)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedExam === e ? 'bg-blue-900 text-white shadow-xs' : 'text-slate-600'
                }`}
              >
                {e}
              </button>
            ))}
          </div>

          <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
            {(['All', 'Prelims', 'Mains'] as const).map(s => (
              <button
                key={s}
                onClick={() => setSelectedStage(s)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedStage === s ? 'bg-blue-900 text-white shadow-xs' : 'text-slate-600'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Mini Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {Object.entries(topicCounts).map(([topic, count]) => (
          <div key={topic} className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-[11px] font-semibold text-slate-500">{topic}</div>
            <div className="text-xl font-black text-slate-900 mt-0.5">{count} PYQs</div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-blue-900 h-full rounded-full"
                style={{ width: `${Math.min(100, (count / PYQ_DATABASE.length) * 150)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: PYQ List */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-4 space-y-3 shadow-xs h-fit max-h-[80vh] flex flex-col">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by topic, year, or concept..."
              className="w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden"
            />
          </div>

          <div className="overflow-y-auto space-y-2 flex-1 pr-1 divide-y divide-slate-100">
            {filteredPYQs.map(pyq => (
              <button
                key={pyq.id}
                onClick={() => setActivePYQ(pyq)}
                className={`w-full text-left p-3.5 rounded-xl transition-all ${
                  activePYQ.id === pyq.id
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'hover:bg-slate-50 text-slate-800'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span
                    className={`font-black ${
                      activePYQ.id === pyq.id ? 'text-amber-300' : 'text-blue-900'
                    }`}
                  >
                    {pyq.exam} {pyq.stage} ({pyq.year})
                  </span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded ${
                      activePYQ.id === pyq.id
                        ? 'bg-blue-800 text-blue-200'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {pyq.topic}
                  </span>
                </div>
                <div className="font-semibold text-xs line-clamp-2 leading-relaxed">
                  {pyq.question}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: PYQ Detailed Analysis & Model Points */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-900 text-amber-300">
                  {activePYQ.exam} {activePYQ.stage} {activePYQ.year}
                </span>
                <span className="text-xs font-semibold text-slate-500">{activePYQ.paper}</span>
                {activePYQ.mainsMarks && (
                  <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    {activePYQ.mainsMarks} Marks
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-500 mt-1 font-medium">
                {activePYQ.topic} • {activePYQ.subtopic}
              </div>
            </div>

            <button
              onClick={() => toggleBookmark(activePYQ.id)}
              className={`p-2 rounded-lg border transition-colors ${
                bookmarks.includes(activePYQ.id)
                  ? 'bg-amber-100 border-amber-300 text-amber-900'
                  : 'border-slate-200 text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Bookmark className="w-4 h-4" />
            </button>
          </div>

          {/* Question Text */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
            {activePYQ.question}
          </div>

          {/* Options for Prelims */}
          {activePYQ.options && (
            <div className="space-y-2 text-xs">
              <div className="font-bold text-slate-800">Exam Options:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activePYQ.options.map(opt => (
                  <div
                    key={opt.id}
                    className={`p-3 rounded-xl border flex items-center gap-2 ${
                      opt.id === activePYQ.correctOption
                        ? 'bg-emerald-100 border-emerald-300 text-emerald-950 font-bold'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    <span>{opt.id}.</span>
                    <span>{opt.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Model Answer / Official Explanation */}
          <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-200 text-xs text-slate-700 space-y-2">
            <div className="font-bold text-blue-950">Model Points & Explanation:</div>
            <ul className="space-y-1.5 leading-relaxed">
              {activePYQ.explanationOrModelPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-blue-700 font-bold">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Concepts Tested & Official Source */}
          <div className="space-y-2 text-xs">
            <div className="font-bold text-slate-800">Core Concepts Tested by Examiner:</div>
            <div className="flex flex-wrap gap-1.5">
              {activePYQ.conceptsTested.map((cc, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                  {cc}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400">
            Source: {activePYQ.officialSource}
          </div>
        </div>
      </div>
    </div>
  );
};
