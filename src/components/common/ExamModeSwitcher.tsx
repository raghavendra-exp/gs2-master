import React from 'react';
import { useExamMode } from '../../context/ExamModeContext';
import { Layers, GraduationCap, Landmark } from 'lucide-react';
import { ExamMode } from '../../types';

export const ExamModeSwitcher: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { examMode, setExamMode } = useExamMode();

  const modes: { id: ExamMode; label: string; sub: string; icon: React.ReactNode }[] = [
    {
      id: 'ALL',
      label: 'Common Core',
      sub: 'UPSC + UPPSC Combined',
      icon: <Layers className="w-3.5 h-3.5" />
    },
    {
      id: 'UPSC',
      label: 'UPSC Focus',
      sub: 'Civil Services CSE',
      icon: <GraduationCap className="w-3.5 h-3.5" />
    },
    {
      id: 'UPPSC',
      label: 'UPPSC Focus',
      sub: 'UP State PCS & Regional',
      icon: <Landmark className="w-3.5 h-3.5" />
    }
  ];

  if (compact) {
    return (
      <div className="inline-flex rounded-lg p-0.5 bg-slate-200/80 border border-slate-300">
        {modes.map(m => (
          <button
            key={m.id}
            onClick={() => setExamMode(m.id)}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
              examMode === m.id
                ? 'bg-blue-900 text-white shadow-sm'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {m.icon}
            {m.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 shadow-xs rounded-xl p-1.5 flex flex-wrap gap-1">
      {modes.map(m => (
        <button
          key={m.id}
          onClick={() => setExamMode(m.id)}
          className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-left transition-all ${
            examMode === m.id
              ? 'bg-blue-900 text-white shadow-sm ring-1 ring-blue-700'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <div className={`${examMode === m.id ? 'text-amber-300' : 'text-blue-900'}`}>{m.icon}</div>
          <div>
            <div className="text-xs font-bold leading-tight">{m.label}</div>
            <div className={`text-[10px] leading-tight ${examMode === m.id ? 'text-blue-200' : 'text-slate-500'}`}>
              {m.sub}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};
