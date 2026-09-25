import React from 'react';
import { ShieldCheck, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white mt-16 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-700 text-amber-400 flex items-center justify-center font-black text-base">
                🏛
              </span>
              <span className="font-black text-lg tracking-wider text-white">
                GS-II MASTER
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              A comprehensive, official-source-first digital knowledge base, interactive textbook, syllabus linker, and Prelims & Mains examination lab for UPSC Civil Services, UPPSC PCS, and State PSCs.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Strict Non-Fabrication & Fact/Analysis Segregation Policy.
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
                <button onClick={() => onNavigate('updateCentre')} className="hover:text-white transition-colors">
                  Content Update Centre & Importer
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            Built for Civil Services Aspirants (UPSC CSE & UPPSC PCS) • GitHub Pages Ready • No Backend Required
          </div>
          <div className="flex items-center gap-1">
            Official Source Citations: Legislative Dept • Supreme Court • ECI • CAG • NITI Aayog • MEA
          </div>
        </div>
      </div>
    </footer>
  );
};
