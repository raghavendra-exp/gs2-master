import React, { useState } from 'react';
import {
  FolderOpen,
  Search,
  BookOpen,
  Scale,
  FileText,
  ExternalLink,
  ShieldCheck,
  Bookmark,
  Award,
  Layers,
  CheckCircle2
} from 'lucide-react';
import {
  CASE_STUDIES_DATABASE,
  COMMITTEES_DATABASE,
  REPORTS_DATABASE,
  SUPREME_COURT_CASES,
  BOOKS_AND_RESOURCES
} from '../../data';
import { useUserData } from '../../context/UserDataContext';

export const ResourceLibrary: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cases' | 'committees' | 'reports' | 'caseStudies' | 'books'>('cases');
  const [searchQuery, setSearchQuery] = useState('');

  const { bookmarks, toggleBookmark } = useUserData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Title & Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <FolderOpen className="w-6 h-6 text-blue-900" />
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Authoritative Resource Library</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Curated repository of Supreme Court landmark judgments, Administrative Commissions, Government Reports, Field Case Studies, and Standard Books.
          </p>
        </div>

        {/* Sub Navigation */}
        <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-xl">
          {[
            { id: 'cases', label: 'SC Landmark Cases' },
            { id: 'committees', label: 'Committees & ARC' },
            { id: 'reports', label: 'Official Reports' },
            { id: 'caseStudies', label: 'Case Studies' },
            { id: 'books', label: 'Books & Resources' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                setSearchQuery('');
              }}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Global Search Bar for Library */}
      <div className="relative max-w-xl">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={`Search ${activeTab}...`}
          className="w-full bg-white text-slate-900 placeholder:text-slate-400 pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-blue-900 shadow-xs"
        />
      </div>

      {/* 1. SUPREME COURT CASES */}
      {activeTab === 'cases' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SUPREME_COURT_CASES.filter(
            c =>
              c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              c.principleEstablished.toLowerCase().includes(searchQuery.toLowerCase()) ||
              c.issue.toLowerCase().includes(searchQuery.toLowerCase())
          ).map(c => (
            <div
              key={c.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-purple-300 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-100 text-purple-900">
                  {c.year}
                </span>
                <button
                  onClick={() => toggleBookmark(c.id)}
                  className={`p-1.5 rounded-lg border transition-colors ${
                    bookmarks.includes(c.id)
                      ? 'bg-amber-100 border-amber-300 text-amber-900'
                      : 'border-slate-200 text-slate-400 hover:bg-slate-50'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                </button>
              </div>

              <h3 className="font-bold text-base text-slate-900">{c.name}</h3>
              <div className="text-xs text-slate-500 font-medium">Bench: {c.bench}</div>

              <div className="text-xs p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <span className="font-bold text-slate-800">Issue Involved:</span>
                <p className="text-slate-600 leading-relaxed">{c.issue}</p>
              </div>

              <div className="text-xs p-3 bg-purple-50/50 rounded-xl border border-purple-200 space-y-1">
                <span className="font-bold text-purple-950">Principle Established:</span>
                <p className="text-slate-700 leading-relaxed">{c.principleEstablished}</p>
              </div>

              <div className="space-y-1 text-xs">
                <div><strong className="text-slate-800">Prelims Fact:</strong> <span className="text-slate-600">{c.prelimsFact}</span></div>
                <div><strong className="text-slate-800">Mains Application:</strong> <span className="text-slate-600">{c.mainsApplication}</span></div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Part III & Constitution Bench</span>
                <a
                  href={c.officialSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 font-medium flex items-center gap-0.5"
                >
                  Official Judgment PDF <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 2. COMMITTEES & ARC */}
      {activeTab === 'committees' && (
        <div className="space-y-4">
          {COMMITTEES_DATABASE.filter(
            cm =>
              cm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              cm.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
              cm.chairperson.toLowerCase().includes(searchQuery.toLowerCase())
          ).map(cm => (
            <div
              key={cm.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-900 text-amber-300">
                      {cm.year}
                    </span>
                    <span className="text-xs font-bold text-slate-500">{cm.ministryOrOrg}</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mt-1">{cm.name}</h3>
                  <div className="text-xs text-slate-500 font-medium">Chairperson: {cm.chairperson}</div>
                </div>

                <span className="px-3 py-1 text-xs font-bold rounded-lg bg-emerald-100 text-emerald-900">
                  Status: {cm.status}
                </span>
              </div>

              <div className="text-xs text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <strong>Mandate: </strong> {cm.purpose}
              </div>

              <div className="space-y-2 text-xs">
                <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  Major Key Recommendations:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {cm.majorRecommendations.map((rec, idx) => (
                    <div key={idx} className="p-3 bg-blue-50/40 rounded-xl border border-blue-100 text-slate-700">
                      • {rec}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>PYQ Reference: {cm.pyqReference}</span>
                <a
                  href={cm.officialSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 font-medium flex items-center gap-0.5"
                >
                  Official Report Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 3. OFFICIAL REPORTS */}
      {activeTab === 'reports' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {REPORTS_DATABASE.filter(
            r =>
              r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              r.publisher.toLowerCase().includes(searchQuery.toLowerCase())
          ).map(r => (
            <div
              key={r.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                  {r.publisher} ({r.year})
                </span>
              </div>

              <h3 className="font-bold text-base text-slate-900">{r.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{r.purpose}</p>

              <div className="text-xs bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                <span className="font-bold text-slate-900">Major Findings:</span>
                <ul className="space-y-1 text-slate-700">
                  {r.majorFindings.map((mf, i) => (
                    <li key={i}>• {mf}</li>
                  ))}
                </ul>
              </div>

              {r.indiaSpecificData && (
                <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-200 text-xs text-blue-950 font-medium">
                  📊 <strong>Specific Data:</strong> {r.indiaSpecificData}
                </div>
              )}

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>{r.gs2Relevance}</span>
                <a
                  href={r.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 font-medium"
                >
                  Official Release ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. CASE STUDIES */}
      {activeTab === 'caseStudies' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CASE_STUDIES_DATABASE.filter(
            cs =>
              cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              cs.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
              cs.sector.toLowerCase().includes(searchQuery.toLowerCase())
          ).map(cs => (
            <div
              key={cs.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-900">
                  {cs.sector}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">{cs.location}</span>
              </div>

              <h3 className="font-bold text-base text-slate-900">{cs.title}</h3>

              <div className="text-xs space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div><strong className="text-slate-800">Problem:</strong> <span className="text-slate-600">{cs.problem}</span></div>
                <div><strong className="text-slate-800">Intervention:</strong> <span className="text-slate-600">{cs.intervention}</span></div>
                <div><strong className="text-slate-800">Outcome:</strong> <span className="text-slate-600">{cs.outcome}</span></div>
              </div>

              <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200 text-xs text-amber-950 font-medium">
                💡 <strong>Civil Services Lesson:</strong> {cs.lesson}
              </div>

              <div className="text-[11px] text-slate-400 pt-1">Source: {cs.source}</div>
            </div>
          ))}
        </div>
      )}

      {/* 5. BOOKS & OPEN ACCESS */}
      {activeTab === 'books' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BOOKS_AND_RESOURCES.filter(
            b =>
              b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              b.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
              b.category.toLowerCase().includes(searchQuery.toLowerCase())
          ).map(b => (
            <div
              key={b.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-900">
                    {b.category}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      b.isOpenAccess ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {b.isOpenAccess ? 'Official Free Access' : 'Standard Text'}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-slate-900 leading-snug">{b.title}</h3>
                <div className="text-xs text-slate-500 font-medium">
                  {b.author} • {b.publisher}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{b.topicCoverage}</p>

                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-700">
                  <strong>Suggested Use:</strong> {b.suggestedUse}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">{b.level}</span>
                <a
                  href={b.officialOrLegitimateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 font-bold flex items-center gap-0.5"
                >
                  {b.isOpenAccess ? 'Read Online ↗' : 'Publisher Link ↗'}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
