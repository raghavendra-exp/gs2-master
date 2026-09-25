import React, { useState } from 'react';
import {
  Award,
  Flame,
  CheckCircle,
  BookOpen,
  Target,
  PenTool,
  Clock,
  Sparkles,
  ArrowRight,
  Bookmark,
  AlertTriangle,
  Repeat,
  Newspaper,
  Layers,
  FileText
} from 'lucide-react';
import { useUserData } from '../../context/UserDataContext';
import { useExamMode } from '../../context/ExamModeContext';
import { CURRENT_AFFAIRS_UPDATES, CONSTITUTION_ARTICLES, PRELIMS_QUESTIONS_BANK } from '../../data';

interface PersonalDashboardProps {
  onNavigate: (tab: string, subId?: string) => void;
}

export const PersonalDashboard: React.FC<PersonalDashboardProps> = ({ onNavigate }) => {
  const { readinessScore, studyStreak, bookmarks, notes, mistakeBook, prelimsAttempts, mainsDrafts } = useUserData();
  const { examMode } = useExamMode();
  const [selectedPlanHours, setSelectedPlanHours] = useState<number>(2);

  // Daily Study Plan Generator based on available hours
  const generateStudyPlan = (hours: number) => {
    switch (hours) {
      case 0.5:
        return [
          { time: '10 min', task: 'Revise 5 Constitution Articles / Flashcards', type: 'Static' },
          { time: '10 min', task: 'Read 2 GS-II Live Updates with Syllabus Linker', type: 'Current' },
          { time: '10 min', task: 'Attempt 5 Prelims MCQs from Weak Topics', type: 'Practice' }
        ];
      case 1:
        return [
          { time: '25 min', task: 'Study Core Topic: Federalism & Inter-State Council', type: 'Static' },
          { time: '15 min', task: 'Review Today’s GS-II Live Updates & Landmark Judgment', type: 'Current' },
          { time: '20 min', task: 'Attempt 10 Prelims Practice Questions & Review Mistakes', type: 'Prelims' }
        ];
      case 2:
        return [
          { time: '40 min', task: 'Static Concept: Basic Structure Doctrine & Article 368', type: 'Static' },
          { time: '25 min', task: 'Current Affairs Engine: Link SC Judgments to Static Topics', type: 'Current' },
          { time: '30 min', task: 'Mains Answer Writing Lab: 1 Question (10 Marks / 150 Words)', type: 'Mains' },
          { time: '25 min', task: 'Prelims Practice: 15 Questions with Elimination Technique', type: 'Prelims' }
        ];
      case 3:
        return [
          { time: '60 min', task: 'Comprehensive Study: E-Governance, DPI & Sevottam Model', type: 'Static' },
          { time: '35 min', task: 'Current Affairs: Single-Window Update Centre & Analysis', type: 'Current' },
          { time: '45 min', task: 'Mains Lab: 1 Question (15 Marks) with Enrichment Kit', type: 'Mains' },
          { time: '40 min', task: 'PYQ Engine: Solve & Analyze 5 Previous Year Questions', type: 'PYQ' }
        ];
      case 4:
      case 6:
      default:
        return [
          { time: '90 min', task: 'In-Depth Module: India’s Neighbourhood & Bilateral Diplomacy', type: 'Static' },
          { time: '45 min', task: 'Current Affairs & Editorials: Policy & Statutory Connections', type: 'Current' },
          { time: '60 min', task: 'Mains Answer Lab: 2 Timed Answers (10M + 15M) with Self-Check', type: 'Mains' },
          { time: '45 min', task: 'Prelims Mock: 25 Questions with Negative Marking Analysis', type: 'Prelims' },
          { time: '60 min', task: 'Spaced Revision Hub: Review Mastered / Weak Flashcards', type: 'Revision' }
        ];
    }
  };

  const currentPlan = generateStudyPlan(selectedPlanHours);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
      {/* Welcome & Exam Mode Hero Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/60 border border-blue-700/60 text-xs font-semibold text-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              GS-II Personalized Knowledge Base & Examination Lab
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Welcome to Your GS-II Command Center
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Empowering civil services aspirants with official-source grounded static theory, real-time syllabus linkage, and rigorous Prelims & Mains evaluation.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <span className="bg-slate-800 px-3 py-1 rounded-lg border border-slate-700 text-slate-300">
                Mode: <strong className="text-amber-300">{examMode}</strong>
              </span>
              <span className="bg-slate-800 px-3 py-1 rounded-lg border border-slate-700 text-slate-300">
                Bookmarks: <strong className="text-white">{bookmarks.length}</strong>
              </span>
              <span className="bg-slate-800 px-3 py-1 rounded-lg border border-slate-700 text-slate-300">
                Notes Saved: <strong className="text-white">{Object.keys(notes).length}</strong>
              </span>
              <span className="bg-slate-800 px-3 py-1 rounded-lg border border-slate-700 text-slate-300">
                Mains Written: <strong className="text-white">{Object.keys(mainsDrafts).length}</strong>
              </span>
            </div>
          </div>

          {/* Quick Streak Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center min-w-[200px] shadow-lg">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-400/20 flex items-center justify-center mb-2">
              <Flame className="w-6 h-6 text-amber-400 fill-amber-400" />
            </div>
            <div className="text-3xl font-black text-white">{studyStreak.count} Days</div>
            <div className="text-xs text-amber-200 font-medium">Continuous Study Streak</div>
            <div className="mt-3 text-[11px] text-slate-300 bg-white/5 py-1 px-2 rounded-md">
              Consistency is the key to Civil Services
            </div>
          </div>
        </div>
      </div>

      {/* GS-II Readiness Score Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-900" />
              <h2 className="text-lg font-bold text-slate-900">GS-II Readiness Indicator</h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                {readinessScore.tier}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              A comprehensive learning-progress metric tracking your multi-dimensional syllabus coverage.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-2xl font-black text-blue-950">{readinessScore.total} / 100</div>
              <div className="text-[11px] text-slate-500 font-medium">{readinessScore.description}</div>
            </div>
          </div>
        </div>

        {/* 6 Sub-Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="text-[11px] text-slate-500 font-medium">Static Knowledge</div>
            <div className="text-lg font-bold text-slate-800 mt-1">{readinessScore.breakdown.staticKnowledge} / 25</div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-blue-600 h-full rounded-full" style={{ width: `${(readinessScore.breakdown.staticKnowledge / 25) * 100}%` }} />
            </div>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="text-[11px] text-slate-500 font-medium">Prelims Accuracy</div>
            <div className="text-lg font-bold text-slate-800 mt-1">{readinessScore.breakdown.prelimsAccuracy} / 20</div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-emerald-600 h-full rounded-full" style={{ width: `${(readinessScore.breakdown.prelimsAccuracy / 20) * 100}%` }} />
            </div>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="text-[11px] text-slate-500 font-medium">Mains Writing</div>
            <div className="text-lg font-bold text-slate-800 mt-1">{readinessScore.breakdown.mainsPractice} / 20</div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-purple-600 h-full rounded-full" style={{ width: `${(readinessScore.breakdown.mainsPractice / 20) * 100}%` }} />
            </div>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="text-[11px] text-slate-500 font-medium">PYQ Solved</div>
            <div className="text-lg font-bold text-slate-800 mt-1">{readinessScore.breakdown.pyqSolved} / 15</div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-amber-600 h-full rounded-full" style={{ width: `${(readinessScore.breakdown.pyqSolved / 15) * 100}%` }} />
            </div>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="text-[11px] text-slate-500 font-medium">Current Affairs</div>
            <div className="text-lg font-bold text-slate-800 mt-1">{readinessScore.breakdown.currentAffairs} / 10</div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-orange-600 h-full rounded-full" style={{ width: `${(readinessScore.breakdown.currentAffairs / 10) * 100}%` }} />
            </div>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="text-[11px] text-slate-500 font-medium">Revision Spaced</div>
            <div className="text-lg font-bold text-slate-800 mt-1">{readinessScore.breakdown.revisionProgress} / 10</div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-teal-600 h-full rounded-full" style={{ width: `${(readinessScore.breakdown.revisionProgress / 10) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Daily Planner & Rapid Launchpad */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Dynamic Study Planner */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-900" />
                <h3 className="font-bold text-slate-900 text-base">Adaptive Daily Study Plan</h3>
              </div>
              <p className="text-xs text-slate-500">
                Select your available time for today to receive a balanced GS-II curriculum.
              </p>
            </div>

            {/* Time Selector Pills */}
            <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-xl">
              {[0.5, 1, 2, 3, 4].map(hours => (
                <button
                  key={hours}
                  onClick={() => setSelectedPlanHours(hours)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                    selectedPlanHours === hours
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {hours === 0.5 ? '30m' : `${hours}h`}
                </button>
              ))}
            </div>
          </div>

          {/* Schedule Timeline */}
          <div className="space-y-2.5">
            {currentPlan.map((slot, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 hover:border-blue-200 bg-slate-50/70 hover:bg-blue-50/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center text-xs font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">{slot.task}</div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                      <span className="font-medium text-blue-800">{slot.time}</span>
                      <span>•</span>
                      <span className="text-slate-600">{slot.type} Module</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (slot.type === 'Static') onNavigate('constitution');
                    else if (slot.type === 'Current') onNavigate('currentAffairs');
                    else if (slot.type === 'Prelims') onNavigate('prelims');
                    else if (slot.type === 'Mains') onNavigate('mains');
                    else onNavigate('revision');
                  }}
                  className="px-3 py-1.5 text-xs font-semibold text-blue-900 bg-white hover:bg-blue-900 hover:text-white border border-slate-200 rounded-lg transition-colors flex items-center gap-1 shrink-0"
                >
                  Start <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: Quick Actions & Mistake Alert */}
        <div className="space-y-5">
          {/* Mistake Book Summary */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                Mistake Book & Remediation
              </div>
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-200 text-amber-900">
                {mistakeBook.length} logged
              </span>
            </div>
            <p className="text-xs text-amber-800 leading-relaxed">
              Questions answered incorrectly in Prelims Practice are automatically recorded here to eliminate cognitive gaps.
            </p>
            <button
              onClick={() => onNavigate('prelims', 'mistake_book')}
              className="w-full py-2 px-3 text-xs font-bold text-amber-900 bg-amber-200/80 hover:bg-amber-300 rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              Open Mistake Book <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Core Modules Quick Launch */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-xs">
            <div className="font-bold text-sm text-slate-900">Quick Launch Modules</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => onNavigate('constitution')}
                className="p-3 text-left rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition-all group"
              >
                <BookOpen className="w-4 h-4 text-blue-900 mb-1 group-hover:scale-110 transition-transform" />
                <div className="font-bold text-slate-800">Article Explorer</div>
                <div className="text-[10px] text-slate-500">Articles 14 to 368</div>
              </button>

              <button
                onClick={() => onNavigate('mains')}
                className="p-3 text-left rounded-xl bg-slate-50 hover:bg-purple-50 border border-slate-100 hover:border-purple-200 transition-all group"
              >
                <PenTool className="w-4 h-4 text-purple-900 mb-1 group-hover:scale-110 transition-transform" />
                <div className="font-bold text-slate-800">Mains Lab</div>
                <div className="text-[10px] text-slate-500">Timed 10M & 15M</div>
              </button>

              <button
                onClick={() => onNavigate('currentAffairs')}
                className="p-3 text-left rounded-xl bg-slate-50 hover:bg-orange-50 border border-slate-100 hover:border-orange-200 transition-all group"
              >
                <Newspaper className="w-4 h-4 text-orange-900 mb-1 group-hover:scale-110 transition-transform" />
                <div className="font-bold text-slate-800">Live Updates</div>
                <div className="text-[10px] text-slate-500">7-Step Linker</div>
              </button>

              <button
                onClick={() => onNavigate('revision')}
                className="p-3 text-left rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-100 hover:border-teal-200 transition-all group"
              >
                <Repeat className="w-4 h-4 text-teal-900 mb-1 group-hover:scale-110 transition-transform" />
                <div className="font-bold text-slate-800">Flashcards</div>
                <div className="text-[10px] text-slate-500">Spaced Review</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Latest GS-II Updates Preview Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-blue-900" />
            <h3 className="font-bold text-slate-900 text-base">Latest Verified GS-II Updates</h3>
          </div>
          <button
            onClick={() => onNavigate('currentAffairs')}
            className="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1"
          >
            View All Updates <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CURRENT_AFFAIRS_UPDATES.slice(0, 2).map(upd => (
            <div
              key={upd.id}
              onClick={() => onNavigate('currentAffairs', upd.id)}
              className="p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-xs transition-all cursor-pointer bg-slate-50/50 space-y-2"
            >
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {upd.category}
                </span>
                <span>{upd.date}</span>
              </div>
              <h4 className="font-bold text-sm text-slate-900 line-clamp-1 hover:text-blue-900">
                {upd.title}
              </h4>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {upd.summary}
              </p>
              <div className="pt-2 flex items-center gap-1.5 flex-wrap text-[11px] text-slate-500">
                <span className="font-medium text-slate-700">Static Links:</span>
                {upd.staticTopics.slice(0, 3).map((st, i) => (
                  <span key={i} className="bg-white px-1.5 py-0.5 rounded border border-slate-200">
                    {st}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
