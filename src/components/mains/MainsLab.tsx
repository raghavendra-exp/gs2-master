import React, { useState, useEffect } from 'react';
import {
  PenTool,
  Clock,
  Sparkles,
  CheckCircle2,
  FileText,
  Bookmark,
  PlusCircle,
  Copy,
  RotateCcw,
  CheckSquare,
  Square,
  Award,
  Layers,
  Info
} from 'lucide-react';
import { MAINS_QUESTIONS_BANK } from '../../data';
import { useUserData } from '../../context/UserDataContext';
import { useExamMode } from '../../context/ExamModeContext';
import { MainsQuestion } from '../../types';

export const MainsLab: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<MainsQuestion>(MAINS_QUESTIONS_BANK[0]);
  const [answerText, setAnswerText] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'writer' | 'structure' | 'enrichment' | 'evaluation'>('writer');
  const [timerSeconds, setTimerSeconds] = useState<number>(420); // 7 min for 10 marks, 11 min for 15 marks
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [checklist, setChecklist] = useState<string[]>([]);

  const { mainsDrafts, saveMainsDraft, bookmarks, toggleBookmark } = useUserData();
  const { examMode } = useExamMode();

  // Load saved draft when question changes
  useEffect(() => {
    const draft = mainsDrafts[selectedQuestion.id];
    if (draft) {
      setAnswerText(draft.text || '');
      setChecklist(draft.completedChecks || []);
    } else {
      setAnswerText('');
      setChecklist([]);
    }
    // Set timer based on marks
    setTimerSeconds(selectedQuestion.marks === 10 ? 420 : 660);
    setIsTimerRunning(false);
  }, [selectedQuestion.id]);

  // Countdown timer
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  // Live Word Counter
  const wordCount = answerText.trim() ? answerText.trim().split(/\s+/).length : 0;
  const targetWords = selectedQuestion.targetWords;
  const wordsRemaining = targetWords - wordCount;

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  const handleSaveDraft = () => {
    saveMainsDraft(selectedQuestion.id, answerText, checklist);
    alert('Answer draft and evaluation checklist saved successfully!');
  };

  const insertSnippet = (snippet: string) => {
    setAnswerText(prev => (prev ? `${prev}\n${snippet}` : snippet));
  };

  const toggleChecklistItem = (item: string) => {
    setChecklist(prev =>
      prev.includes(item) ? prev.filter(x => x !== item) : [...prev, item]
    );
  };

  const evaluationPoints = [
    'Directly addressed the directive (Critically analyze / Discuss / Examine)',
    'Precise Introduction defining core terms or quoting constitutional provisions',
    'Substantiated arguments with Constitutional Articles & Supreme Court Judgments',
    'Incorporated contemporary facts, official reports, or NITI Aayog data',
    'Covered multiple dimensions (Socio-economic, Administrative, Legal, Federal)',
    'Constructive Way Forward with Committee / 2nd ARC recommendations',
    'Concluded with forward-looking balance aligned with Constitutional Morality',
    'Adhered strictly to prescribed word limit (+/- 10%)'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <PenTool className="w-6 h-6 text-purple-900" />
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Mains Answer-Writing Lab</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Simulate real exam conditions with dynamic timers, live word tracking, 9-part structure builder, and enrichment kits.
          </p>
        </div>

        {/* Question Selector Pill */}
        <div className="flex items-center gap-2">
          <select
            value={selectedQuestion.id}
            onChange={e => {
              const q = MAINS_QUESTIONS_BANK.find(m => m.id === e.target.value);
              if (q) setSelectedQuestion(q);
            }}
            className="bg-slate-100 text-slate-800 text-xs font-bold py-2 px-3 rounded-xl border border-slate-300"
          >
            {MAINS_QUESTIONS_BANK.map(mq => (
              <option key={mq.id} value={mq.id}>
                [{mq.exam} - {mq.marks}M] {mq.topic}: {mq.questionText.slice(0, 45)}...
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Question Card & Live Timer Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-purple-950 text-white rounded-3xl p-6 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full font-bold bg-amber-400 text-slate-900">
              {selectedQuestion.exam} {selectedQuestion.paper}
            </span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-slate-200">
              {selectedQuestion.marks} Marks ({selectedQuestion.targetWords} Words)
            </span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-slate-200">
              {selectedQuestion.topic}
            </span>
          </div>

          {/* Timer Controls */}
          <div className="flex items-center gap-3 bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
            <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-amber-300">
              <Clock className="w-4 h-4" />
              {formatTimer(timerSeconds)}
            </div>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className={`px-2.5 py-0.5 rounded-lg text-xs font-bold transition-colors ${
                isTimerRunning ? 'bg-rose-500 text-white' : 'bg-emerald-500 text-white'
              }`}
            >
              {isTimerRunning ? 'Pause' : 'Start Timer'}
            </button>
            <button
              onClick={() => {
                setIsTimerRunning(false);
                setTimerSeconds(selectedQuestion.marks === 10 ? 420 : 660);
              }}
              className="text-slate-300 hover:text-white p-1"
              title="Reset Timer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Question Text */}
        <h2 className="text-base sm:text-lg font-bold text-white leading-relaxed">
          {selectedQuestion.questionText}
        </h2>
      </div>

      {/* Main Lab Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Answer Writer */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4 flex flex-col">
          {/* Sub-bar with Live Word Counter */}
          <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-3">
            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-700">Live Word Count:</span>
              <span
                className={`font-black text-sm px-2 py-0.5 rounded-md ${
                  wordCount > targetWords + 25
                    ? 'bg-rose-100 text-rose-800'
                    : wordCount >= targetWords - 20
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-blue-50 text-blue-900'
                }`}
              >
                {wordCount} / {targetWords}
              </span>
              <span className="text-slate-400 text-[11px]">
                ({wordsRemaining >= 0 ? `${wordsRemaining} words left` : `${Math.abs(wordsRemaining)} words over limit`})
              </span>
            </div>

            <button
              onClick={handleSaveDraft}
              className="px-4 py-1.5 rounded-xl bg-purple-900 hover:bg-purple-950 text-white font-bold text-xs shadow-xs transition-colors"
            >
              Save Draft
            </button>
          </div>

          {/* Textarea */}
          <textarea
            value={answerText}
            onChange={e => setAnswerText(e.target.value)}
            placeholder="Type your answer here in exam format (Introduction, Body Paragraphs, Constitutional Basis, Challenges, Way Forward, Conclusion)..."
            rows={18}
            className="w-full flex-1 p-4 rounded-2xl border border-slate-200 text-xs sm:text-sm font-serif leading-relaxed text-slate-900 bg-slate-50/50 focus:outline-hidden focus:ring-2 focus:ring-purple-900 resize-y"
          />

          <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
            <span>Tip: Click any article, judgment, or framework on the right to append it into your answer.</span>
            <span>Autosaved locally in browser</span>
          </div>
        </div>

        {/* Right Column: Structure Builder, Enrichment Kit & Self-Evaluation */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-5 shadow-xs space-y-4 h-fit">
          {/* Sub Navigation */}
          <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
            {[
              { id: 'structure', label: '9-Part Structure' },
              { id: 'enrichment', label: 'Enrichment Kit' },
              { id: 'evaluation', label: 'Quality Checklist' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: 9-PART STRUCTURE BUILDER */}
          {activeTab === 'structure' && (
            <div className="space-y-3 text-xs max-h-[70vh] overflow-y-auto pr-1">
              <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                Recommended Model Structure
              </div>

              {/* Intro */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-purple-950 flex items-center justify-between">
                  <span>1. Introduction (15-20% words)</span>
                  <button
                    onClick={() => insertSnippet(`Introduction:\n${selectedQuestion.modelStructure.introduction}`)}
                    className="text-[10px] text-purple-700 hover:text-purple-900 font-semibold"
                  >
                    + Add to Answer
                  </button>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  {selectedQuestion.modelStructure.introduction}
                </p>
              </div>

              {/* Core Arguments */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900">2. Core Arguments & Dimensions</div>
                <ul className="space-y-1 text-slate-600 text-[11px]">
                  {selectedQuestion.modelStructure.coreArgument.map((ca, i) => (
                    <li key={i}>• {ca}</li>
                  ))}
                </ul>
              </div>

              {/* Constitutional Basis */}
              <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-200 space-y-1">
                <div className="font-bold text-blue-950">3. Constitutional & Legal Foundations</div>
                <ul className="space-y-1 text-slate-700 text-[11px]">
                  {selectedQuestion.modelStructure.constitutionalLegalBasis.map((cl, i) => (
                    <li key={i}>⚖️ {cl}</li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="p-3 bg-rose-50/60 rounded-xl border border-rose-200 space-y-1">
                <div className="font-bold text-rose-950">4. Key Challenges & Bottlenecks</div>
                <ul className="space-y-1 text-slate-700 text-[11px]">
                  {selectedQuestion.modelStructure.challenges.map((ch, i) => (
                    <li key={i}>• {ch}</li>
                  ))}
                </ul>
              </div>

              {/* Way Forward */}
              <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-1">
                <div className="font-bold text-emerald-950 flex items-center justify-between">
                  <span>5. Way Forward & Recommendations</span>
                  <button
                    onClick={() => insertSnippet(`Way Forward:\n${selectedQuestion.modelStructure.wayForward.join('\n')}`)}
                    className="text-[10px] text-emerald-700 hover:text-emerald-900 font-semibold"
                  >
                    + Add to Answer
                  </button>
                </div>
                <ul className="space-y-1 text-slate-700 text-[11px]">
                  {selectedQuestion.modelStructure.wayForward.map((wf, i) => (
                    <li key={i}>✓ {wf}</li>
                  ))}
                </ul>
              </div>

              {/* Conclusion */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900">6. Conclusion (Balanced Vision)</div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  {selectedQuestion.modelStructure.conclusion}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: ENRICHMENT KIT */}
          {activeTab === 'enrichment' && (
            <div className="space-y-3 text-xs max-h-[70vh] overflow-y-auto pr-1">
              <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                Answer Enrichment Assets ("Value Additions")
              </div>

              {/* Articles & Cases */}
              <div className="space-y-2">
                <div className="font-semibold text-slate-700">Constitutional Articles:</div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedQuestion.enrichmentKit.articles.map((art, i) => (
                    <button
                      key={i}
                      onClick={() => insertSnippet(art)}
                      className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold hover:bg-blue-100 transition-colors flex items-center gap-1"
                    >
                      <span>+</span> {art}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="font-semibold text-slate-700">Landmark Supreme Court Cases:</div>
                <div className="space-y-1">
                  {selectedQuestion.enrichmentKit.cases.map((cs, i) => (
                    <button
                      key={i}
                      onClick={() => insertSnippet(`In ${cs}, the Supreme Court established that...`)}
                      className="w-full text-left p-2 rounded-lg bg-purple-50 text-purple-950 border border-purple-200 text-xs hover:bg-purple-100 transition-colors font-medium"
                    >
                      ⚖️ {cs}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="font-semibold text-slate-700">Committees & Reports:</div>
                <div className="space-y-1">
                  {selectedQuestion.enrichmentKit.committees.map((comm, i) => (
                    <button
                      key={i}
                      onClick={() => insertSnippet(`As recommended by the ${comm}...`)}
                      className="w-full text-left p-2 rounded-lg bg-amber-50 text-amber-950 border border-amber-200 text-xs hover:bg-amber-100 transition-colors font-medium"
                    >
                      📋 {comm}
                    </button>
                  ))}
                </div>
              </div>

              {/* SDGs & Keywords */}
              <div className="space-y-2 pt-2">
                <div className="font-semibold text-slate-700">Relevant Sustainable Development Goals:</div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedQuestion.enrichmentKit.sdgs.map((sdg, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[11px] font-bold">
                      🎯 {sdg}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="font-semibold text-slate-700">Examiner Keywords:</div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedQuestion.enrichmentKit.keywords.map((kw, i) => (
                    <button
                      key={i}
                      onClick={() => insertSnippet(kw)}
                      className="px-2 py-0.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-semibold border border-slate-200"
                    >
                      {kw}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: QUALITY CHECKLIST */}
          {activeTab === 'evaluation' && (
            <div className="space-y-3 text-xs">
              <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                Self-Evaluation Checklist ({checklist.length} / {evaluationPoints.length} Completed)
              </div>

              <div className="space-y-2">
                {evaluationPoints.map((item, idx) => {
                  const isChecked = checklist.includes(item);
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleChecklistItem(item)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-2.5 ${
                        isChecked
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      )}
                      <span className="leading-snug">{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
