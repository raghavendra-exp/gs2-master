import React, { useState, useEffect } from 'react';
import { ExamModeProvider } from './context/ExamModeContext';
import { UserDataProvider } from './context/UserDataContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { GlobalSearchModal } from './components/common/GlobalSearchModal';

// Views
import { PersonalDashboard } from './components/dashboard/PersonalDashboard';
import { ConstitutionMaster } from './components/constitution/ConstitutionMaster';
import { PolityExplorer } from './components/polity/PolityExplorer';
import { GovernanceMaster } from './components/governance/GovernanceMaster';
import { IRMaster } from './components/internationalRelations/IRMaster';
import { CurrentAffairsEngine } from './components/currentAffairs/CurrentAffairsEngine';
import { PrelimsPracticeEngine } from './components/prelims/PrelimsPracticeEngine';
import { MainsLab } from './components/mains/MainsLab';
import { PYQAnalysisEngine } from './components/pyq/PYQAnalysisEngine';
import { RevisionHub } from './components/revision/RevisionHub';
import { ResourceLibrary } from './components/library/ResourceLibrary';
import { ContentUpdateCentre } from './components/updateCentre/ContentUpdateCentre';

export function AppContent() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [activeSubMode, setActiveSubMode] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Keyboard shortcut Ctrl+K / Cmd+K for global search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (tab: string, subId?: string) => {
    setActiveTab(tab);
    setActiveSubMode(subId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSearchResult = (category: string, id: string) => {
    switch (category) {
      case 'Constitution':
      case 'Amendments':
        handleNavigate('constitution');
        break;
      case 'Polity':
      case 'Institutions':
        handleNavigate('polity');
        break;
      case 'Social Justice':
        handleNavigate('governance');
        break;
      case 'International Relations':
        handleNavigate('ir');
        break;
      case 'Current Affairs':
        handleNavigate('currentAffairs', id);
        break;
      case 'PYQ Engine':
        handleNavigate('pyq');
        break;
      case 'Judiciary & Cases':
        handleNavigate('library');
        break;
      default:
        handleNavigate('dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={tab => handleNavigate(tab)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {activeTab === 'dashboard' && <PersonalDashboard onNavigate={handleNavigate} />}
        {activeTab === 'constitution' && <ConstitutionMaster />}
        {activeTab === 'polity' && <PolityExplorer />}
        {activeTab === 'governance' && <GovernanceMaster />}
        {activeTab === 'ir' && <IRMaster />}
        {activeTab === 'currentAffairs' && <CurrentAffairsEngine />}
        {activeTab === 'prelims' && <PrelimsPracticeEngine initialSubMode={activeSubMode} />}
        {activeTab === 'mains' && <MainsLab />}
        {activeTab === 'pyq' && <PYQAnalysisEngine />}
        {activeTab === 'revision' && <RevisionHub />}
        {activeTab === 'library' && <ResourceLibrary />}
        {activeTab === 'updateCentre' && <ContentUpdateCentre />}
      </main>

      {/* Global Multi-dimensional Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSelectSearchResult}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <ExamModeProvider>
      <UserDataProvider>
        <AppContent />
      </UserDataProvider>
    </ExamModeProvider>
  );
}
