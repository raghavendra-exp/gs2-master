import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

export interface MistakeEntry {
  questionId: string;
  type: 'conceptual' | 'factual' | 'misreading' | 'elimination' | 'current_gap';
  note: string;
  timestamp: number;
}

export interface UserDataContextType {
  bookmarks: string[];
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;

  notes: Record<string, string>;
  saveNote: (id: string, noteContent: string) => void;
  getNote: (id: string) => string;

  prelimsAttempts: Record<string, { selectedOption: string; isCorrect: boolean; timestamp: number }>;
  recordPrelimsAttempt: (questionId: string, selectedOption: string, isCorrect: boolean) => void;

  mainsDrafts: Record<string, { text: string; completedChecks: string[]; timestamp: number }>;
  saveMainsDraft: (questionId: string, text: string, completedChecks: string[]) => void;

  revisionSchedule: Record<string, { interval: 1 | 3 | 7 | 15 | 30 | 90; lastRevised: number; status: 'mastered' | 'review' | 'weak' | 'forgotten' }>;
  updateRevisionStatus: (itemId: string, status: 'mastered' | 'review' | 'weak' | 'forgotten', interval?: 1 | 3 | 7 | 15 | 30 | 90) => void;

  mistakeBook: MistakeEntry[];
  addMistake: (questionId: string, type: MistakeEntry['type'], note: string) => void;
  removeMistake: (questionId: string) => void;

  studyStreak: { count: number; lastDate: string };
  recordActivity: () => void;

  readinessScore: {
    total: number;
    breakdown: {
      staticKnowledge: number;
      prelimsAccuracy: number;
      mainsPractice: number;
      pyqSolved: number;
      currentAffairs: number;
      revisionProgress: number;
    };
    tier: string;
    description: string;
  };

  customImports: {
    articles: any[];
    questions: any[];
    currentAffairs: any[];
  };
  importCustomData: (type: 'articles' | 'questions' | 'currentAffairs', data: any[]) => void;
  clearUserData: () => void;
}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

export const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Bookmarks
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('gs2_bookmarks') || '[]');
    } catch {
      return [];
    }
  });

  // Notes
  const [notes, setNotes] = useState<Record<string, string>>(() => {
    try {
      return JSON.parse(localStorage.getItem('gs2_notes') || '{}');
    } catch {
      return {};
    }
  });

  // Prelims Attempts
  const [prelimsAttempts, setPrelimsAttempts] = useState<Record<string, { selectedOption: string; isCorrect: boolean; timestamp: number }>>(() => {
    try {
      return JSON.parse(localStorage.getItem('gs2_prelims_attempts') || '{}');
    } catch {
      return {};
    }
  });

  // Mains Drafts
  const [mainsDrafts, setMainsDrafts] = useState<Record<string, { text: string; completedChecks: string[]; timestamp: number }>>(() => {
    try {
      return JSON.parse(localStorage.getItem('gs2_mains_drafts') || '{}');
    } catch {
      return {};
    }
  });

  // Revision Schedule
  const [revisionSchedule, setRevisionSchedule] = useState<Record<string, { interval: 1 | 3 | 7 | 15 | 30 | 90; lastRevised: number; status: 'mastered' | 'review' | 'weak' | 'forgotten' }>>(() => {
    try {
      return JSON.parse(localStorage.getItem('gs2_revision_schedule') || '{}');
    } catch {
      return {};
    }
  });

  // Mistake Book
  const [mistakeBook, setMistakeBook] = useState<MistakeEntry[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('gs2_mistake_book') || '[]');
    } catch {
      return [];
    }
  });

  // Study Streak
  const [studyStreak, setStudyStreak] = useState<{ count: number; lastDate: string }>(() => {
    try {
      return JSON.parse(localStorage.getItem('gs2_study_streak') || '{"count": 1, "lastDate": ""}');
    } catch {
      return { count: 1, lastDate: '' };
    }
  });

  // Custom Data Imports (Content Update Centre)
  const [customImports, setCustomImports] = useState<{ articles: any[]; questions: any[]; currentAffairs: any[] }>(() => {
    try {
      return JSON.parse(localStorage.getItem('gs2_custom_imports') || '{"articles":[],"questions":[],"currentAffairs":[]}');
    } catch {
      return { articles: [], questions: [], currentAffairs: [] };
    }
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('gs2_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('gs2_notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('gs2_prelims_attempts', JSON.stringify(prelimsAttempts));
  }, [prelimsAttempts]);

  useEffect(() => {
    localStorage.setItem('gs2_mains_drafts', JSON.stringify(mainsDrafts));
  }, [mainsDrafts]);

  useEffect(() => {
    localStorage.setItem('gs2_revision_schedule', JSON.stringify(revisionSchedule));
  }, [revisionSchedule]);

  useEffect(() => {
    localStorage.setItem('gs2_mistake_book', JSON.stringify(mistakeBook));
  }, [mistakeBook]);

  useEffect(() => {
    localStorage.setItem('gs2_study_streak', JSON.stringify(studyStreak));
  }, [studyStreak]);

  useEffect(() => {
    localStorage.setItem('gs2_custom_imports', JSON.stringify(customImports));
  }, [customImports]);

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    recordActivity();
  };

  const isBookmarked = (id: string) => bookmarks.includes(id);

  const saveNote = (id: string, noteContent: string) => {
    setNotes(prev => ({ ...prev, [id]: noteContent }));
    recordActivity();
  };

  const getNote = (id: string) => notes[id] || '';

  const recordPrelimsAttempt = (questionId: string, selectedOption: string, isCorrect: boolean) => {
    setPrelimsAttempts(prev => ({
      ...prev,
      [questionId]: { selectedOption, isCorrect, timestamp: Date.now() }
    }));
    if (!isCorrect) {
      addMistake(questionId, 'conceptual', 'Review concept tested');
    }
    recordActivity();
  };

  const saveMainsDraft = (questionId: string, text: string, completedChecks: string[]) => {
    setMainsDrafts(prev => ({
      ...prev,
      [questionId]: { text, completedChecks, timestamp: Date.now() }
    }));
    recordActivity();
  };

  const updateRevisionStatus = (itemId: string, status: 'mastered' | 'review' | 'weak' | 'forgotten', interval: 1 | 3 | 7 | 15 | 30 | 90 = 7) => {
    setRevisionSchedule(prev => ({
      ...prev,
      [itemId]: { interval, lastRevised: Date.now(), status }
    }));
    recordActivity();
  };

  const addMistake = (questionId: string, type: MistakeEntry['type'], note: string) => {
    setMistakeBook(prev => {
      const filtered = prev.filter(m => m.questionId !== questionId);
      return [...filtered, { questionId, type, note, timestamp: Date.now() }];
    });
  };

  const removeMistake = (questionId: string) => {
    setMistakeBook(prev => prev.filter(m => m.questionId !== questionId));
  };

  const recordActivity = () => {
    const today = new Date().toISOString().split('T')[0];
    setStudyStreak(prev => {
      if (prev.lastDate === today) return prev;
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      const newCount = prev.lastDate === yesterday ? prev.count + 1 : 1;
      return { count: newCount, lastDate: today };
    });
  };

  const importCustomData = (type: 'articles' | 'questions' | 'currentAffairs', data: any[]) => {
    setCustomImports(prev => ({
      ...prev,
      [type]: [...prev[type], ...data]
    }));
  };

  const clearUserData = () => {
    if (window.confirm('Are you sure you want to reset all your progress, notes, and test records?')) {
      localStorage.clear();
      setBookmarks([]);
      setNotes({});
      setPrelimsAttempts({});
      setMainsDrafts({});
      setRevisionSchedule({});
      setMistakeBook([]);
      setStudyStreak({ count: 1, lastDate: new Date().toISOString().split('T')[0] });
      setCustomImports({ articles: [], questions: [], currentAffairs: [] });
    }
  };

  // GS-II Readiness Score (0-100 Algorithm)
  const readinessScore = useMemo(() => {
    // 1. Static topic coverage (0-25 pts) based on bookmarks/notes/articles studied
    const staticCount = Object.keys(notes).length + bookmarks.length;
    const staticKnowledge = Math.min(25, Math.round(staticCount * 3.5));

    // 2. Prelims accuracy & volume (0-20 pts)
    const attempts = Object.values(prelimsAttempts);
    let prelimsAccuracy = 0;
    if (attempts.length > 0) {
      const correct = attempts.filter(a => a.isCorrect).length;
      const accRate = correct / attempts.length;
      const volMultiplier = Math.min(1, attempts.length / 10);
      prelimsAccuracy = Math.round(accRate * 20 * volMultiplier);
    }

    // 3. Mains answer writing practice (0-20 pts)
    const mainsCount = Object.keys(mainsDrafts).length;
    const mainsPractice = Math.min(20, mainsCount * 5);

    // 4. PYQ solved (0-15 pts)
    const pyqSolved = Math.min(15, Math.round(attempts.length * 1.5));

    // 5. Current affairs coverage (0-10 pts)
    const currentAffairs = Math.min(10, Math.round(bookmarks.filter(b => b.startsWith('ca-')).length * 3 + 2));

    // 6. Revision progress (0-10 pts)
    const masteredCount = Object.values(revisionSchedule).filter(r => r.status === 'mastered').length;
    const revisionProgress = Math.min(10, masteredCount * 2.5);

    const total = Math.min(100, staticKnowledge + prelimsAccuracy + mainsPractice + pyqSolved + currentAffairs + revisionProgress);

    let tier = 'Foundation';
    let description = 'Building core conceptual foundations across GS-II modules.';
    if (total >= 91) {
      tier = 'Comprehensive Coverage';
      description = 'Exam Ready! Exceptional static mastery, current affairs synthesis, and answer writing maturity.';
    } else if (total >= 81) {
      tier = 'Advanced Preparation';
      description = 'High level of analytical clarity and answer structure capability.';
    } else if (total >= 61) {
      tier = 'Strong Foundation';
      description = 'Solid grasp of static syllabus and regular prelims/mains practice.';
    } else if (total >= 41) {
      tier = 'Developing';
      description = 'Advancing steadily from fundamentals to analytical linkages.';
    }

    return {
      total,
      breakdown: {
        staticKnowledge,
        prelimsAccuracy,
        mainsPractice,
        pyqSolved,
        currentAffairs,
        revisionProgress
      },
      tier,
      description
    };
  }, [notes, bookmarks, prelimsAttempts, mainsDrafts, revisionSchedule]);

  return (
    <UserDataContext.Provider
      value={{
        bookmarks,
        toggleBookmark,
        isBookmarked,
        notes,
        saveNote,
        getNote,
        prelimsAttempts,
        recordPrelimsAttempt,
        mainsDrafts,
        saveMainsDraft,
        revisionSchedule,
        updateRevisionStatus,
        mistakeBook,
        addMistake,
        removeMistake,
        studyStreak,
        recordActivity,
        readinessScore,
        customImports,
        importCustomData,
        clearUserData
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return context;
};
