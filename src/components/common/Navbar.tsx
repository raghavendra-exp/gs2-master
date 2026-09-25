import React, { useState } from 'react';
import {
  BookOpen,
  Landmark,
  Scale,
  Globe,
  Newspaper,
  Target,
  PenTool,
  HelpCircle,
  Repeat,
  FolderOpen,
  LayoutDashboard,
  Search,
  Menu,
  X,
  UploadCloud,
  Flame,
  Award
} from 'lucide-react';
import { ExamModeSwitcher } from './ExamModeSwitcher';
import { useUserData } from '../../context/UserDataContext';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { studyStreak, readinessScore } = useUserData();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'constitution', label: 'Constitution', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'polity', label: 'Polity & Federalism', icon: <Landmark className="w-4 h-4" /> },
    { id: 'governance', label: 'Governance & Schemes', icon: <Scale className="w-4 h-4" /> },
    { id: 'ir', label: 'International Relations', icon: <Globe className="w-4 h-4" /> },
    { id: 'currentAffairs', label: 'Current Affairs', icon: <Newspaper className="w-4 h-4" /> },
    { id: 'prelims', label: 'Prelims Practice', icon: <Target className="w-4 h-4" /> },
    { id: 'mains', label: 'Mains Lab', icon: <PenTool className="w-4 h-4" /> },
    { id: 'pyq', label: 'PYQ Engine', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'revision', label: 'Revision Hub', icon: <Repeat className="w-4 h-4" /> },
    { id: 'library', label: 'Resource Library', icon: <FolderOpen className="w-4 h-4" /> },
    { id: 'updateCentre', label: 'Update Centre', icon: <UploadCloud className="w-4 h-4" /> }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Banner with Exam Switcher & Readiness Badge */}
      <div className="bg-slate-900 text-white text-xs px-4 py-1.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-extrabold tracking-wider bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
            GS-II MASTER
          </span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="hidden sm:inline text-slate-300 text-[11px]">
            Governance • Constitution • Polity • Social Justice • International Relations
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Readiness Score Badge */}
          <div className="flex items-center gap-1.5 bg-slate-800/90 px-2.5 py-0.5 rounded-full border border-slate-700 text-[11px]">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-300">Readiness:</span>
            <span className="font-bold text-amber-300">{readinessScore.total}%</span>
          </div>

          {/* Study Streak */}
          <div className="flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30 text-[11px]">
            <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="font-bold">{studyStreak.count} Day Streak</span>
          </div>

          {/* Exam Mode Toggle */}
          <ExamModeSwitcher compact={true} />
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Brand */}
        <div
          onClick={() => setActiveTab('dashboard')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
            🏛
          </div>
          <div>
            <div className="font-black text-base tracking-tight text-slate-900 flex items-center gap-1.5">
              GS-II MASTER
              <span className="text-[10px] font-bold px-1.5 py-0.2 bg-blue-100 text-blue-800 rounded">
                PRO
              </span>
            </div>
            <div className="text-[10px] text-slate-500 font-medium">
              UPSC CSE & UPPSC Integrated System
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === item.id
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-blue-900 hover:bg-slate-100'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Global Search and Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 bg-slate-100 hover:bg-slate-200/80 rounded-lg border border-slate-200 transition-colors"
            title="Search anything (Cmd+K / Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-blue-900" />
            <span className="hidden md:inline">Quick Search...</span>
            <kbd className="hidden md:inline text-[10px] bg-white px-1.5 py-0.5 rounded border border-slate-300 font-mono text-slate-600">
              Ctrl+K
            </kbd>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-1 shadow-lg max-h-[75vh] overflow-y-auto">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-900 text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
