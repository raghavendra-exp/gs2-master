import React, { useState, useEffect } from 'react';
import {
  Target,
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  AlertTriangle,
  RotateCcw,
  Award,
  ChevronRight,
  ChevronLeft,
  Filter,
  CheckSquare,
  Bookmark,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRELIMS_QUESTIONS_BANK, PYQ_DATABASE } from '../../data';
import { useUserData } from '../../context/UserDataContext';
import { useExamMode } from '../../context/ExamModeContext';
import { PrelimsQuestion } from '../../types';

export const PrelimsPracticeEngine: React.FC<{ initialSubMode?: string }> = ({ initialSubMode }) => {
  const [testMode, setTestMode] = useState<'setup' | 'active' | 'results' | 'mistakeBook'>(
    initialSubMode === 'mistake_book' ? 'mistakeBook' : 'setup'
  );

  // Setup Config
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [filterTopic, setFilterTopic] = useState<string>('All');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');
  const [filterExam, setFilterExam] = useState<string>('All');

  // Test State
  const [testQuestions, setTestQuestions] = useState<PrelimsQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [markedForReview, setMarkedForReview] = useState<string[]>([]);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(600); // 10 min default

  const { recordPrelimsAttempt, mistakeBook, addMistake, removeMistake, toggleBookmark, bookmarks } = useUserData();
  const { examMode } = useExamMode();

  // Timer Effect
  useEffect(() => {
    let interval: any = null;
    if (testMode === 'active' && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            finishTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [testMode, secondsRemaining]);

  const startTest = () => {
    let pool = [...PRELIMS_QUESTIONS_BANK];

    if (filterTopic !== 'All') {
      pool = pool.filter(q => q.topic === filterTopic);
    }
    if (filterDifficulty !== 'All') {
      pool = pool.filter(q => q.difficulty === filterDifficulty);
    }
    if (filterExam !== 'All') {
      pool = pool.filter(q => q.exam === filterExam);
    }

    // Shuffle and slice
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, questionCount);

    if (selected.length === 0) {
      alert('No questions match the selected criteria. Please reset filters.');
      return;
    }

    setTestQuestions(selected);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setMarkedForReview([]);
    setSecondsRemaining(selected.length * 60); // 1 minute per question
    setTestMode('active');
  };

  const finishTest = () => {
    setTestMode('results');
    // Record attempts
    testQuestions.forEach(q => {
      const selected = selectedAnswers[q.id];
      if (selected) {
        const isCorrect = selected === q.correctOptionId;
        recordPrelimsAttempt(q.id, selected, isCorrect);
      }
    });

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}
  };

  const currentQ = testQuestions[currentIndex];

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  // Score Calculation
  const scoreStats = () => {
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    testQuestions.forEach(q => {
      const sel = selectedAnswers[q.id];
      if (!sel) unattempted++;
      else if (sel === q.correctOptionId) correct++;
      else incorrect++;
    });

    // UPSC Marking: +2 for correct, -0.66 for incorrect
    const marks = correct * 2 - incorrect * 0.66;
    return { correct, incorrect, unattempted, marks: marks.toFixed(2) };
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-900" />
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Prelims Practice Engine</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            UPSC CSE & UPPSC exam-oriented questions with multi-statement, assertion-reason, and mistake remediation.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTestMode('mistakeBook')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-colors flex items-center gap-1.5 ${
              testMode === 'mistakeBook'
                ? 'bg-amber-100 text-amber-900 border-amber-300'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
            Mistake Book ({mistakeBook.length})
          </button>
          {testMode !== 'setup' && (
            <button
              onClick={() => setTestMode('setup')}
              className="px-3 py-1.5 text-xs font-bold rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              New Test Setup
            </button>
          )}
        </div>
      </div>

      {/* VIEW 1: TEST SETUP */}
      {testMode === 'setup' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto shadow-xs space-y-6">
          <div className="text-center space-y-1">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center mx-auto mb-2">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Configure Practice Assessment</h2>
            <p className="text-xs text-slate-500">
              Customize your question set based on syllabus topics, examination type, and difficulty.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            {/* Question Count Selector */}
            <div className="space-y-2">
              <label className="font-bold text-slate-700 block">Number of Questions:</label>
              <div className="grid grid-cols-4 gap-2">
                {[5, 10, 20, 50].map(count => (
                  <button
                    key={count}
                    onClick={() => setQuestionCount(count)}
                    className={`py-2 rounded-xl font-bold border transition-all ${
                      questionCount === count
                        ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {count} Questions
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Topic */}
            <div className="space-y-2">
              <label className="font-bold text-slate-700 block">Target Syllabus Module:</label>
              <select
                value={filterTopic}
                onChange={e => setFilterTopic(e.target.value)}
                className="w-full bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-slate-800 font-semibold"
              >
                <option value="All">All GS-II Modules (Comprehensive)</option>
                <option value="Constitution">Constitution & Fundamental Rights</option>
                <option value="Polity">Polity, Parliament & Judiciary</option>
                <option value="Governance">Governance, RTI & E-Gov</option>
                <option value="Social Justice">Social Justice & Welfare Schemes</option>
                <option value="International Relations">International Relations & Groupings</option>
              </select>
            </div>

            {/* Filter by Difficulty & Exam */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-bold text-slate-700 block">Difficulty Level:</label>
                <select
                  value={filterDifficulty}
                  onChange={e => setFilterDifficulty(e.target.value)}
                  className="w-full bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-slate-800 font-semibold"
                >
                  <option value="All">All Difficulties</option>
                  <option value="Easy">Standard / Foundational</option>
                  <option value="Medium">Medium (UPSC CSE Standard)</option>
                  <option value="Hard">Advanced (Analytical Traps)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-bold text-slate-700 block">Examination Target:</label>
                <select
                  value={filterExam}
                  onChange={e => setFilterExam(e.target.value)}
                  className="w-full bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-slate-800 font-semibold"
                >
                  <option value="All">Both UPSC CSE & UPPSC</option>
                  <option value="UPSC">UPSC Civil Services Only</option>
                  <option value="UPPSC">UPPSC PCS Only</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              ⏱ <strong>Estimated Time:</strong> {questionCount} minutes (+2 / -0.66 Marking)
            </div>
            <button
              onClick={startTest}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              Start Practice Test <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* VIEW 2: ACTIVE TEST SESSION */}
      {testMode === 'active' && currentQ && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Question Interface */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            {/* Top Status Bar */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-slate-900">
                  Question {currentIndex + 1} of {testQuestions.length}
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200">
                  {currentQ.topic}
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  {currentQ.difficulty}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 font-mono font-bold text-xs bg-slate-100 px-3 py-1 rounded-lg text-slate-800">
                  <Clock className="w-3.5 h-3.5 text-blue-900" />
                  {formatTime(secondsRemaining)}
                </div>
              </div>
            </div>

            {/* Question Text & Statements */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                {currentQ.questionText}
              </p>

              {currentQ.statements && currentQ.statements.length > 0 && (
                <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
                  {currentQ.statements.map((stmt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-800 leading-relaxed">
                      <span className="font-bold text-blue-900">{idx + 1}.</span>
                      <span>{stmt}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Options */}
            <div className="space-y-2.5 pt-2">
              {currentQ.options.map(opt => {
                const isSelected = selectedAnswers[currentQ.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() =>
                      setSelectedAnswers(prev => ({ ...prev, [currentQ.id]: opt.id }))
                    }
                    className={`w-full text-left p-3.5 rounded-2xl text-xs font-medium border transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 ${
                        isSelected ? 'bg-amber-400 text-blue-950' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {opt.id}
                    </span>
                    <span className="leading-snug pt-0.5">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Navigation Bottom Controls */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(prev => prev - 1)}
                  className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <button
                  onClick={() => {
                    setMarkedForReview(prev =>
                      prev.includes(currentQ.id)
                        ? prev.filter(x => x !== currentQ.id)
                        : [...prev, currentQ.id]
                    );
                  }}
                  className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${
                    markedForReview.includes(currentQ.id)
                      ? 'bg-amber-100 border-amber-300 text-amber-900'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {markedForReview.includes(currentQ.id) ? 'Marked' : 'Mark for Review'}
                </button>
              </div>

              {currentIndex < testQuestions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex(prev => prev + 1)}
                  className="px-6 py-2 rounded-xl text-xs font-bold bg-blue-900 text-white hover:bg-blue-950 transition-colors flex items-center gap-1 shadow-xs"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={finishTest}
                  className="px-6 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center gap-1 shadow-xs"
                >
                  Submit Assessment
                </button>
              )}
            </div>
          </div>

          {/* Right Question Palette */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-5 shadow-xs space-y-4 h-fit">
            <div className="font-bold text-xs text-slate-800 uppercase tracking-wider">
              Question Palette
            </div>

            <div className="grid grid-cols-5 gap-2">
              {testQuestions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = !!selectedAnswers[q.id];
                const isMarked = markedForReview.includes(q.id);

                let bg = 'bg-slate-100 text-slate-700';
                if (isCurrent) bg = 'ring-2 ring-blue-900 bg-blue-50 text-blue-900 font-bold';
                else if (isMarked) bg = 'bg-amber-200 text-amber-950 font-bold';
                else if (isAnswered) bg = 'bg-blue-900 text-white font-bold';

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-xl text-xs transition-all flex items-center justify-center ${bg}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="pt-4 border-t border-slate-100 text-[11px] space-y-1.5 text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-blue-900" /> Answered
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-amber-200" /> Marked for Review
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-slate-100 border border-slate-300" /> Unattempted
              </div>
            </div>

            <button
              onClick={finishTest}
              className="w-full py-2.5 mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
            >
              Finish & Review Answers
            </button>
          </div>
        </div>
      )}

      {/* VIEW 3: TEST RESULTS & EXPLANATIONS */}
      {testMode === 'results' && (
        <div className="space-y-6">
          {/* Summary Scorecard */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-blue-950">
                  Performance Summary
                </span>
                <h2 className="text-2xl font-black text-white">Assessment Result & Analysis</h2>
                <p className="text-xs text-slate-300">
                  Detailed review with official explanations, correct answers, and automated mistake book logging.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center min-w-[120px]">
                  <div className="text-3xl font-black text-amber-300">{scoreStats().marks}</div>
                  <div className="text-[10px] text-slate-300 font-medium uppercase mt-0.5">Estimated Marks</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center min-w-[120px]">
                  <div className="text-3xl font-black text-emerald-400">
                    {scoreStats().correct} / {testQuestions.length}
                  </div>
                  <div className="text-[10px] text-slate-300 font-medium uppercase mt-0.5">Correct Answers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Question-by-Question Review with Explanations */}
          <div className="space-y-4">
            <div className="font-bold text-sm text-slate-900 uppercase tracking-wider">
              Comprehensive Explanations & Solutions
            </div>

            {testQuestions.map((q, idx) => {
              const userAns = selectedAnswers[q.id];
              const isCorrect = userAns === q.correctOptionId;
              const isUnattempted = !userAns;

              return (
                <div
                  key={q.id}
                  className={`bg-white border rounded-2xl p-6 shadow-xs space-y-4 ${
                    isCorrect
                      ? 'border-emerald-200'
                      : isUnattempted
                      ? 'border-slate-200'
                      : 'border-rose-200 bg-rose-50/20'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">Question {idx + 1}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full font-bold ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-900'
                          : isUnattempted
                          ? 'bg-slate-100 text-slate-600'
                          : 'bg-rose-100 text-rose-900'
                      }`}
                    >
                      {isCorrect ? 'Correct (+2)' : isUnattempted ? 'Unattempted (0)' : 'Incorrect (-0.66)'}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-slate-900 leading-relaxed">
                    {q.questionText}
                  </p>

                  {q.statements && (
                    <div className="space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                      {q.statements.map((st, i) => (
                        <div key={i} className="text-slate-700">
                          {i + 1}. {st}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Options with Status */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map(opt => {
                      const isCorrectOpt = opt.id === q.correctOptionId;
                      const isChosen = userAns === opt.id;

                      let optClass = 'bg-slate-50 text-slate-700 border-slate-200';
                      if (isCorrectOpt) optClass = 'bg-emerald-100 border-emerald-300 text-emerald-950 font-bold';
                      else if (isChosen && !isCorrectOpt) optClass = 'bg-rose-100 border-rose-300 text-rose-950';

                      return (
                        <div key={opt.id} className={`p-2.5 rounded-xl border flex items-center gap-2 ${optClass}`}>
                          <span className="font-bold">{opt.id}.</span>
                          <span>{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Authoritative Explanation */}
                  <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-200 text-xs text-slate-700 leading-relaxed space-y-1">
                    <div className="font-bold text-blue-950">Explanation & Conceptual Grounding:</div>
                    <p>{q.explanation}</p>
                    <div className="text-[10px] text-slate-400 font-medium pt-1">
                      Official Source: {q.officialSource}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 4: MISTAKE BOOK */}
      {testMode === 'mistakeBook' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-700" />
                <h2 className="text-lg font-bold text-slate-900">Personal Mistake Book</h2>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Automatically logged questions answered incorrectly. Review regularly to eliminate repetitive exam errors.
              </p>
            </div>

            <button
              onClick={() => setTestMode('setup')}
              className="px-4 py-2 bg-blue-900 text-white rounded-xl text-xs font-bold hover:bg-blue-950 transition-colors"
            >
              Start New Test
            </button>
          </div>

          {mistakeBook.length === 0 ? (
            <div className="p-12 text-center text-slate-500 space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <div className="font-bold text-slate-800">Your Mistake Book is Currently Empty!</div>
              <p className="text-xs text-slate-400">
                Attempt practice questions; any wrong answers will be logged here with cognitive gap tags.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {mistakeBook.map((mb, i) => {
                const question = PRELIMS_QUESTIONS_BANK.find(q => q.id === mb.questionId);
                return (
                  <div key={i} className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-950 uppercase tracking-wider text-[10px]">
                        Tag: {mb.type} Error
                      </span>
                      <button
                        onClick={() => removeMistake(mb.questionId)}
                        className="text-xs font-semibold text-rose-600 hover:text-rose-800"
                      >
                        Remove from Mistakes
                      </button>
                    </div>

                    <div className="font-semibold text-slate-900">
                      {question?.questionText || `Question ID: ${mb.questionId}`}
                    </div>

                    {question && (
                      <div className="p-2.5 bg-white rounded-lg border border-amber-200 text-slate-700">
                        <strong>Correct Answer:</strong> Option {question.correctOptionId}
                        <p className="mt-1 text-[11px] text-slate-600">{question.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
