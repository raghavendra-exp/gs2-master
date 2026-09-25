import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, Scale, FileText, Globe, Landmark, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import {
  CONSTITUTION_ARTICLES,
  CONSTITUTIONAL_AMENDMENTS,
  SUPREME_COURT_CASES,
  POLITY_TOPICS,
  INSTITUTIONAL_BODIES,
  WELFARE_SCHEMES,
  COUNTRY_RELATIONSHIPS,
  REGIONAL_GROUPINGS,
  GLOBAL_INSTITUTIONS,
  CURRENT_AFFAIRS_UPDATES,
  COMMITTEES_DATABASE,
  REPORTS_DATABASE,
  PYQ_DATABASE,
  PRELIMS_QUESTIONS_BANK,
  MAINS_QUESTIONS_BANK
} from '../../data';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (category: string, id: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q || q.length < 2) return [];

    const results: {
      id: string;
      title: string;
      category: string;
      snippet: string;
      badge: string;
      icon: React.ReactNode;
    }[] = [];

    // Articles
    CONSTITUTION_ARTICLES.forEach(art => {
      if (
        art.articleNumber.toLowerCase().includes(q) ||
        art.subject.toLowerCase().includes(q) ||
        art.simpleExplanation.toLowerCase().includes(q) ||
        `article ${art.articleNumber}`.includes(q)
      ) {
        results.push({
          id: art.articleNumber,
          title: `Article ${art.articleNumber}: ${art.subject}`,
          category: 'Constitution',
          snippet: art.simpleExplanation.slice(0, 140) + '...',
          badge: art.part,
          icon: <BookOpen className="w-4 h-4 text-blue-600" />
        });
      }
    });

    // Amendments
    CONSTITUTIONAL_AMENDMENTS.forEach(am => {
      if (
        am.amendmentNumber.toLowerCase().includes(q) ||
        am.title.toLowerCase().includes(q) ||
        am.reasonAndBackground.toLowerCase().includes(q)
      ) {
        results.push({
          id: am.amendmentNumber,
          title: `${am.amendmentNumber} (${am.year}): ${am.title}`,
          category: 'Amendments',
          snippet: am.importance.slice(0, 140) + '...',
          badge: `${am.year}`,
          icon: <FileText className="w-4 h-4 text-amber-600" />
        });
      }
    });

    // Supreme Court Cases
    SUPREME_COURT_CASES.forEach(scCase => {
      if (
        scCase.name.toLowerCase().includes(q) ||
        scCase.principleEstablished.toLowerCase().includes(q) ||
        scCase.issue.toLowerCase().includes(q) ||
        scCase.tags.some(t => t.toLowerCase().includes(q))
      ) {
        results.push({
          id: scCase.id,
          title: `${scCase.name} (${scCase.year})`,
          category: 'Judiciary & Cases',
          snippet: scCase.principleEstablished.slice(0, 140) + '...',
          badge: scCase.bench || 'Supreme Court',
          icon: <Scale className="w-4 h-4 text-purple-600" />
        });
      }
    });

    // Polity Topics
    POLITY_TOPICS.forEach(top => {
      if (
        top.title.toLowerCase().includes(q) ||
        top.summary.toLowerCase().includes(q) ||
        top.subtopic.toLowerCase().includes(q)
      ) {
        results.push({
          id: top.id,
          title: top.title,
          category: 'Polity',
          snippet: top.summary.slice(0, 140) + '...',
          badge: top.subtopic,
          icon: <Landmark className="w-4 h-4 text-indigo-600" />
        });
      }
    });

    // Bodies
    INSTITUTIONAL_BODIES.forEach(b => {
      if (
        b.name.toLowerCase().includes(q) ||
        b.articleOrAct.toLowerCase().includes(q) ||
        b.type.toLowerCase().includes(q)
      ) {
        results.push({
          id: b.id,
          title: `${b.name} (${b.type} Body)`,
          category: 'Institutions',
          snippet: b.mandateAndPowers[0] || b.articleOrAct,
          badge: b.type,
          icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />
        });
      }
    });

    // Welfare Schemes
    WELFARE_SCHEMES.forEach(sch => {
      if (
        sch.name.toLowerCase().includes(q) ||
        sch.shortName.toLowerCase().includes(q) ||
        sch.objective.toLowerCase().includes(q)
      ) {
        results.push({
          id: sch.id,
          title: sch.name,
          category: 'Social Justice',
          snippet: sch.objective.slice(0, 140) + '...',
          badge: sch.ministry,
          icon: <FileText className="w-4 h-4 text-rose-600" />
        });
      }
    });

    // International Relations
    COUNTRY_RELATIONSHIPS.forEach(c => {
      if (c.country.toLowerCase().includes(q) || c.historicalBackground.toLowerCase().includes(q)) {
        results.push({
          id: c.id,
          title: `India - ${c.country} Relations`,
          category: 'International Relations',
          snippet: c.politicalRelations.slice(0, 140) + '...',
          badge: c.region,
          icon: <Globe className="w-4 h-4 text-teal-600" />
        });
      }
    });

    // Current Affairs
    CURRENT_AFFAIRS_UPDATES.forEach(ca => {
      if (
        ca.title.toLowerCase().includes(q) ||
        ca.summary.toLowerCase().includes(q) ||
        ca.staticTopics.some(st => st.toLowerCase().includes(q))
      ) {
        results.push({
          id: ca.id,
          title: ca.title,
          category: 'Current Affairs',
          snippet: ca.summary.slice(0, 140) + '...',
          badge: ca.date,
          icon: <FileText className="w-4 h-4 text-orange-600" />
        });
      }
    });

    // PYQs
    PYQ_DATABASE.forEach(pyq => {
      if (
        pyq.question.toLowerCase().includes(q) ||
        pyq.topic.toLowerCase().includes(q) ||
        pyq.conceptsTested.some(c => c.toLowerCase().includes(q))
      ) {
        results.push({
          id: pyq.id,
          title: `${pyq.exam} ${pyq.stage} ${pyq.year}: ${pyq.topic}`,
          category: 'PYQ Engine',
          snippet: pyq.question.slice(0, 140) + '...',
          badge: `${pyq.exam} ${pyq.year}`,
          icon: <HelpCircle className="w-4 h-4 text-sky-600" />
        });
      }
    });

    return results.slice(0, 25);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-16 px-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-blue-900" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search Articles (e.g. 'Article 21'), Cases, Amendments, Schemes, PYQs, IR..."
            autoFocus
            className="flex-1 bg-transparent text-slate-900 placeholder:text-slate-400 text-base focus:outline-hidden"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-400 hover:text-slate-600 p-1">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold text-slate-500 hover:text-slate-800 bg-slate-200/80 rounded-md"
          >
            ESC
          </button>
        </div>

        {/* Quick Search Suggestions */}
        {!query && (
          <div className="p-6 text-sm text-slate-600 space-y-4 overflow-y-auto">
            <div className="font-semibold text-slate-800 text-xs tracking-wider uppercase">
              Popular Smart Searches
            </div>
            <div className="flex flex-wrap gap-2">
              {['Article 21', 'Basic Structure', 'Article 14', 'Federalism', 'Governor', 'Electoral Bonds', 'Article 368', 'PM-JAY', 'Quad', 'BRICS', 'Mission Karmayogi'].map(term => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-900 font-medium text-xs transition-colors border border-blue-200/60"
                >
                  {term}
                </button>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
              💡 <strong>Smart Search:</strong> Typing an Article immediately retrieves connected Supreme Court cases, doctrines, welfare schemes, PYQs, and current affairs.
            </div>
          </div>
        )}

        {/* Results List */}
        {query && (
          <div className="overflow-y-auto divide-y divide-slate-100 p-2">
            {searchResults.length === 0 ? (
              <div className="p-8 text-center text-slate-500">
                No matching results found for <span className="font-semibold text-slate-800">"{query}"</span>.
                <div className="text-xs text-slate-400 mt-1">Try searching by Article number, doctrine name, country, or scheme.</div>
              </div>
            ) : (
              searchResults.map(res => (
                <div
                  key={`${res.category}-${res.id}`}
                  onClick={() => {
                    onSelectResult(res.category, res.id);
                    onClose();
                  }}
                  className="p-3 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors group flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="mt-0.5 p-2 bg-slate-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                      {res.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-sm text-slate-900 group-hover:text-blue-900 truncate">
                          {res.title}
                        </span>
                        <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-slate-100 text-slate-700 rounded border border-slate-200">
                          {res.category}
                        </span>
                        {res.badge && (
                          <span className="text-[10px] text-slate-500 bg-slate-50 px-1 rounded">
                            {res.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                        {res.snippet}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-colors shrink-0 mt-2" />
                </div>
              ))
            )}
          </div>
        )}

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center px-4">
          <span>Found {searchResults.length} verified references</span>
          <span>Official-Source-First Engine</span>
        </div>
      </div>
    </div>
  );
};
