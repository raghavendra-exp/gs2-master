import React from 'react';
import { ShieldCheck, Award, FileText, Scale, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenCopyright?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCopyright }) => {
  return (
    <footer className="bg-slate-900 text-white mt-16 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-700 text-amber-400 flex items-center justify-center font-black text-base">
                🏛
              </span>
              <span className="font-black text-lg tracking-wider text-white">
                GS-II MASTER
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Official-source-first knowledge base, interactive textbook, syllabus linker, and Prelims & Mains examination lab for UPSC Civil Services, UPPSC PCS, and State PSCs.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Strict Non-Fabrication & Fact/Analysis Segregation Policy.</span>
            </div>
          </div>

          {/* Core Modules Quick Links */}
          <div className="space-y-2">
            <div className="font-bold text-amber-300 uppercase tracking-wider text-[11px]">
              Syllabus Engines
            </div>
            <ul className="space-y-1 text-slate-300">
              <li>
                <button onClick={() => onNavigate('constitution')} className="hover:text-white transition-colors">
                  Constitution Master & Article Explorer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('polity')} className="hover:text-white transition-colors">
                  Polity & Federalism Lab
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('governance')} className="hover:text-white transition-colors">
                  Governance & Welfare Schemes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ir')} className="hover:text-white transition-colors">
                  International Relations & Groupings
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('currentAffairs')} className="hover:text-white transition-colors">
                  GS-II Live Updates & 7-Step Linker
                </button>
              </li>
            </ul>
          </div>

          {/* Examination Labs */}
          <div className="space-y-2">
            <div className="font-bold text-amber-300 uppercase tracking-wider text-[11px]">
              Examination Labs
            </div>
            <ul className="space-y-1 text-slate-300">
              <li>
                <button onClick={() => onNavigate('prelims')} className="hover:text-white transition-colors">
                  Prelims Practice & Mistake Book
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('mains')} className="hover:text-white transition-colors">
                  Mains Answer-Writing Lab (10M / 15M)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pyq')} className="hover:text-white transition-colors">
                  PYQ Analysis Engine (UPSC & UPPSC)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('revision')} className="hover:text-white transition-colors">
                  Spaced Revision Hub & Flashcards
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('library')} className="hover:text-white transition-colors">
                  Cases, Committees & Reports Library
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Intellectual Property */}
          <div className="space-y-2">
            <div className="font-bold text-amber-300 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              Legal & Copyright
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Code licensed under <strong>MIT</strong>. Educational frameworks & analytics licensed under <strong>CC BY-NC-SA 4.0</strong>.
            </p>
            <div className="pt-1 space-y-1.5">
              <button
                onClick={onOpenCopyright}
                className="w-full text-left px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-amber-200 border border-slate-700 text-[11px] font-semibold flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  Copyright Certificate
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  2026-REG01
                </span>
              </button>

              <button
                onClick={onOpenCopyright}
                className="w-full text-left px-3 py-1.5 rounded bg-slate-800/60 hover:bg-slate-700 text-slate-300 text-[11px] flex items-center gap-1.5 transition-colors"
              >
                <Scale className="w-3.5 h-3.5 text-blue-400" />
                Govt Data Policy (§52(1)(q))
              </button>

              <a
                href="https://github.com/raghavendra-exp/gs2-master/blob/main/LICENSE"
                target="_blank"
                rel="noreferrer"
                className="w-full text-left px-3 py-1.5 rounded bg-slate-800/60 hover:bg-slate-700 text-slate-300 text-[11px] flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  View LICENSE File
                </span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 <strong>Raghavendra</strong> (<a href="https://github.com/raghavendra-exp" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">@raghavendra-exp</a>). Released under dual MIT / CC BY-NC-SA 4.0 licenses.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenCopyright}
              className="text-amber-400 hover:underline font-medium"
            >
              Copyright Certificate & Legal Notice
            </button>
            <span>•</span>
            <span className="text-slate-500">
              Citations: Legislative Dept • Supreme Court • ECI • CAG • NITI Aayog • MEA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
