import React, { createContext, useContext, useState, useEffect } from 'react';
import { ExamMode } from '../types';

interface ExamModeContextType {
  examMode: ExamMode;
  setExamMode: (mode: ExamMode) => void;
  isUPSC: boolean;
  isUPPSC: boolean;
}

const ExamModeContext = createContext<ExamModeContextType | undefined>(undefined);

export const ExamModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [examMode, setExamModeState] = useState<ExamMode>(() => {
    const saved = localStorage.getItem('gs2_exam_mode');
    return (saved as ExamMode) || 'ALL';
  });

  const setExamMode = (mode: ExamMode) => {
    setExamModeState(mode);
    localStorage.setItem('gs2_exam_mode', mode);
  };

  const isUPSC = examMode === 'ALL' || examMode === 'UPSC';
  const isUPPSC = examMode === 'ALL' || examMode === 'UPPSC';

  return (
    <ExamModeContext.Provider value={{ examMode, setExamMode, isUPSC, isUPPSC }}>
      {children}
    </ExamModeContext.Provider>
  );
};

export const useExamMode = () => {
  const context = useContext(ExamModeContext);
  if (!context) {
    throw new Error('useExamMode must be used within an ExamModeProvider');
  }
  return context;
};
