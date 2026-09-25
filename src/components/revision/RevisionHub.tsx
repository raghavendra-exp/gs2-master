import React, { useState } from 'react';
import {
  Repeat,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  RotateCw,
  Clock,
  Layers,
  Award,
  ChevronRight,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { useUserData } from '../../context/UserDataContext';
import { FlashcardItem } from '../../types';

export const FLASHCARDS_DECK: FlashcardItem[] = [
  {
    id: 'fc-1',
    type: 'prelims',
    category: 'Constitution',
    subtopic: 'Fundamental Rights',
    front: 'Article 14: What are the two core doctrines guaranteed and what are their origins?',
    back: {
      corePoint: 'Equality before Law & Equal Protection of the Laws',
      details: [
        'Equality before law (British origin, negative concept): Absence of arbitrary privileges.',
        'Equal protection of laws (American origin, positive concept): Likes must be treated alike under equal circumstances.',
        'Permits reasonable classification based on intelligible differentia with rational nexus.'
      ],
      constitutionalBasis: 'Article 14, Part III',
      exampleOrCase: 'E.P. Royappa (1974) & Shayara Bano (2017) manifest arbitrariness doctrine.'
    }
  },
  {
    id: 'fc-2',
    type: 'prelims',
    category: 'Constitution',
    subtopic: 'Article 21',
    front: 'Article 21: Three-fold test for state interference with personal privacy?',
    back: {
      corePoint: 'Legality, Legitimate State Aim, and Proportionality',
      details: [
        '1. Legality: Action must have a clear statutory backing in enacted law.',
        '2. Legitimate State Aim: Must pursue a genuine public goal.',
        '3. Proportionality: Measure adopted must be rational, least intrusive, and have a nexus to the goal.'
      ],
      constitutionalBasis: 'Article 21, Part III',
      exampleOrCase: 'K.S. Puttaswamy v. Union of India (2017) 9-judge bench.'
    }
  },
  {
    id: 'fc-3',
    type: 'prelims',
    category: 'Bodies',
    subtopic: 'Election Commission',
    front: 'Election Commission of India: Removal procedure of CEC vs other Election Commissioners?',
    back: {
      corePoint: 'CEC has Supreme Court Judge protection; other ECs do NOT.',
      details: [
        'CEC can only be removed in like manner and on like grounds as an SC Judge (Article 324(5) - special majority address by Parliament).',
        'Other Election Commissioners can be removed by the President solely on the recommendation of the CEC.'
      ],
      constitutionalBasis: 'Article 324(5)',
      exampleOrCase: 'T.N. Seshan case (1995).'
    }
  },
  {
    id: 'fc-4',
    type: 'mains',
    category: 'Polity',
    subtopic: 'Federalism',
    front: 'Mains Framework: How can Cooperative Federalism be strengthened in India?',
    back: {
      corePoint: 'Institutionalization, Fiscal Rationalization, and Consultative Lawmaking',
      details: [
        '1. Institutional: Hold regular meetings of the Inter-State Council under Art 263 and activate Zonal Councils.',
        '2. Fiscal: Cap cesses and surcharges to preserve the divisible tax pool; empower State Finance Commissions.',
        '3. Gubernatorial: Implement Sarkaria and Punchhi recommendations (time-bound bill assent, non-partisan appointments).',
        '4. Decentralization: Accelerate the 3Fs (Functions, Funds, Functionaries) to Panchayats and ULBs.'
      ],
      constitutionalBasis: 'Articles 246, 263, 279A, 280',
      exampleOrCase: 'GST Council model; Punchhi Commission Report (2010).'
    }
  },
  {
    id: 'fc-5',
    type: 'mains',
    category: 'Governance',
    subtopic: 'Civil Services',
    front: 'Mains Framework: How can Civil Service Neutrality be safeguarded against politicization?',
    back: {
      corePoint: 'Security of Tenure, Independent Boards, and Competency-based HR',
      details: [
        '1. Establish statutory Civil Services Boards (CSBs) to regulate transfers as directed in TSR Subramanian (2013).',
        '2. Fix minimum 2-year tenures for District Magistrates and Superintendents of Police (Prakash Singh directives).',
        '3. Transition from ACRs to transparent 360-degree appraisal.',
        '4. Foster role-based digital learning via Mission Karmayogi and Capacity Building Commission.'
      ],
      constitutionalBasis: 'Article 311 & 312',
      exampleOrCase: '2nd ARC 10th Report (Refurbishing Personnel Administration).'
    }
  }
];

export const RevisionHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flashcards' | 'intervals' | 'adaptive'>('flashcards');
  const [flashcardIndex, setFlashcardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [cardFilter, setCardFilter] = useState<'all' | 'prelims' | 'mains'>('all');

  const { revisionSchedule, updateRevisionStatus, mistakeBook } = useUserData();

  const filteredCards = FLASHCARDS_DECK.filter(
    c => cardFilter === 'all' || c.type === cardFilter
  );

  const currentCard = filteredCards[flashcardIndex] || FLASHCARDS_DECK[0];

  const handleNextCard = () => {
    setIsFlipped(false);
    setFlashcardIndex(prev => (prev + 1) % filteredCards.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setFlashcardIndex(prev => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Title & Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Repeat className="w-6 h-6 text-teal-700" />
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Spaced Revision & Flashcard Engine</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Combat the Ebbinghaus forgetting curve through 1/3/7/15/30/90-day intervals, active recall flashcards, and adaptive remediation.
          </p>
        </div>

        {/* Sub Nav */}
        <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-xl">
          {[
            { id: 'flashcards', label: 'Flashcard Decks' },
            { id: 'intervals', label: 'Spaced Tracker' },
            { id: 'adaptive', label: 'Adaptive Remediation' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-teal-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. FLASHCARD DECKS */}
      {activeTab === 'flashcards' && (
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Filter Pills & Progress */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
              {(['all', 'prelims', 'mains'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => {
                    setCardFilter(f);
                    setFlashcardIndex(0);
                    setIsFlipped(false);
                  }}
                  className={`px-3 py-1 rounded-lg capitalize font-bold transition-all ${
                    cardFilter === f ? 'bg-teal-800 text-white shadow-xs' : 'text-slate-600'
                  }`}
                >
                  {f === 'all' ? 'All Cards' : `${f} Cards`}
                </button>
              ))}
            </div>

            <span className="font-bold text-slate-500">
              Card {flashcardIndex + 1} of {filteredCards.length}
            </span>
          </div>

          {/* Flashcard Component */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer min-h-[300px] sm:min-h-[360px] bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all flex flex-col justify-between relative group"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between text-xs">
              <span className="px-2.5 py-0.5 rounded-full font-bold bg-teal-50 text-teal-800 border border-teal-200">
                {currentCard.category} • {currentCard.subtopic}
              </span>
              <span className="text-[11px] text-slate-400 font-semibold uppercase">
                {currentCard.type} Flashcard
              </span>
            </div>

            {/* Card Body */}
            <div className="my-6">
              {!isFlipped ? (
                <div className="space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-800 flex items-center justify-center mx-auto">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
                    {currentCard.front}
                  </h3>
                  <div className="text-xs text-slate-400">Click anywhere to flip and reveal answer</div>
                </div>
              ) : (
                <div className="space-y-4 text-xs leading-relaxed animate-in fade-in duration-300">
                  <div className="p-3 bg-teal-50/70 border border-teal-200 rounded-xl text-teal-950 font-bold text-sm">
                    {currentCard.back.corePoint}
                  </div>

                  <ul className="space-y-1.5 text-slate-700">
                    {currentCard.back.details.map((dt, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-teal-700 font-bold">•</span>
                        <span>{dt}</span>
                      </li>
                    ))}
                  </ul>

                  {currentCard.back.exampleOrCase && (
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 font-medium text-[11px]">
                      ⚖️ <strong>Citations:</strong> {currentCard.back.exampleOrCase}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Flip Indicator */}
            <div className="text-center text-[11px] font-semibold text-teal-800 border-t border-slate-100 pt-3">
              {isFlipped ? 'Click to show front' : 'Tap to reveal answer'}
            </div>
          </div>

          {/* Navigation & Spaced Scoring Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex gap-2">
              <button
                onClick={handlePrevCard}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              >
                Previous
              </button>
              <button
                onClick={handleNextCard}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              >
                Next Card
              </button>
            </div>

            {/* Spaced Evaluation Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => {
                  updateRevisionStatus(currentCard.id, 'forgotten', 1);
                  handleNextCard();
                }}
                className="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-800 border border-rose-200 text-xs font-bold hover:bg-rose-100"
              >
                Hard / 1 Day
              </button>
              <button
                onClick={() => {
                  updateRevisionStatus(currentCard.id, 'review', 7);
                  handleNextCard();
                }}
                className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold hover:bg-amber-100"
              >
                Good / 7 Days
              </button>
              <button
                onClick={() => {
                  updateRevisionStatus(currentCard.id, 'mastered', 30);
                  handleNextCard();
                }}
                className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold hover:bg-emerald-100"
              >
                Easy / 30 Days
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. SPACED INTERVAL TRACKER */}
      {activeTab === 'intervals' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Spaced Revision Schedule</h2>
            <p className="text-xs text-slate-500 mt-1">
              Tracking items across standard spaced repetition intervals: 1 Day, 3 Days, 7 Days, 15 Days, 30 Days, 90 Days.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1">
              <div className="font-bold text-emerald-950">Mastered Items</div>
              <div className="text-2xl font-black text-emerald-800">
                {Object.values(revisionSchedule).filter(r => r.status === 'mastered').length}
              </div>
              <div className="text-[11px] text-emerald-700">Next review in 30-90 days</div>
            </div>

            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200 space-y-1">
              <div className="font-bold text-blue-950">Active Review</div>
              <div className="text-2xl font-black text-blue-800">
                {Object.values(revisionSchedule).filter(r => r.status === 'review').length}
              </div>
              <div className="text-[11px] text-blue-700">Next review in 7-15 days</div>
            </div>

            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-1">
              <div className="font-bold text-amber-950">Weak Items</div>
              <div className="text-2xl font-black text-amber-800">
                {Object.values(revisionSchedule).filter(r => r.status === 'weak').length}
              </div>
              <div className="text-[11px] text-amber-700">Next review in 3 days</div>
            </div>

            <div className="p-4 bg-rose-50 rounded-2xl border border-rose-200 space-y-1">
              <div className="font-bold text-rose-950">Forgotten / Due Today</div>
              <div className="text-2xl font-black text-rose-800">
                {Object.values(revisionSchedule).filter(r => r.status === 'forgotten').length}
              </div>
              <div className="text-[11px] text-rose-700">Immediate recall required</div>
            </div>
          </div>
        </div>
      )}

      {/* 3. ADAPTIVE REMEDIATION */}
      {activeTab === 'adaptive' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Smart Adaptive Practice Engine
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Intelligently detects your weakest GS-II areas based on test error patterns and schedules customized remediation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
            <div className="font-bold text-slate-900 text-sm">
              Adaptive Prescription for Federalism & Institutional Bodies
            </div>
            <p className="text-slate-600 leading-relaxed">
              Based on recent mistake patterns, you are encountering friction in multi-statement questions on <strong>Inter-State Council, Article 356 judicial review</strong>, and <strong>Tenth Schedule speaker powers</strong>.
            </p>

            <div className="space-y-2 pt-2">
              <div className="font-semibold text-slate-800">Recommended 4-Step Remediation Pathway:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-xs shrink-0">1</span>
                  <span>Review Article 263 and Article 356 notes</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-xs shrink-0">2</span>
                  <span>Study S.R. Bommai (1994) landmark ruling</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-xs shrink-0">3</span>
                  <span>Attempt 10 targeted Federalism Prelims MCQs</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-xs shrink-0">4</span>
                  <span>Write 1 Mains answer on Governor bill assent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
