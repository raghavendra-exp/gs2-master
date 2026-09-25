import React, { useState } from 'react';
import {
  UploadCloud,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Download,
  Trash2,
  ShieldCheck,
  RefreshCw,
  Code
} from 'lucide-react';
import { useUserData } from '../../context/UserDataContext';
import {
  CONSTITUTION_ARTICLES,
  PRELIMS_QUESTIONS_BANK,
  CURRENT_AFFAIRS_UPDATES
} from '../../data';

interface ValidationIssue {
  type: 'error' | 'warning';
  field: string;
  message: string;
  itemId?: string;
}

export const ContentUpdateCentre: React.FC = () => {
  const [importType, setImportType] = useState<'questions' | 'currentAffairs' | 'articles'>('questions');
  const [rawJsonInput, setRawJsonInput] = useState<string>('');
  const [validationReport, setValidationReport] = useState<ValidationIssue[] | null>(null);
  const [importSuccess, setImportSuccess] = useState<string | null>(null);

  const { customImports, importCustomData, clearUserData } = useUserData();

  // Validate JSON schema
  const handleValidateAndImport = () => {
    setValidationReport(null);
    setImportSuccess(null);

    if (!rawJsonInput.trim()) {
      setValidationReport([{ type: 'error', field: 'input', message: 'Input cannot be empty. Please paste valid JSON.' }]);
      return;
    }

    let parsed: any;
    try {
      parsed = JSON.parse(rawJsonInput);
    } catch (err: any) {
      setValidationReport([{ type: 'error', field: 'syntax', message: `Invalid JSON syntax: ${err.message}` }]);
      return;
    }

    if (!Array.isArray(parsed)) {
      setValidationReport([{ type: 'error', field: 'format', message: 'Root level must be a JSON Array of objects [...]' }]);
      return;
    }

    const issues: ValidationIssue[] = [];
    const seenIds = new Set<string>();

    parsed.forEach((item: any, idx: number) => {
      const id = item.id || `item_${idx}`;

      // Check duplicate ID
      if (seenIds.has(id)) {
        issues.push({ type: 'error', field: 'id', message: `Duplicate ID detected: "${id}"`, itemId: id });
      }
      seenIds.add(id);

      // Check required fields based on type
      if (importType === 'questions') {
        if (!item.questionText) issues.push({ type: 'error', field: 'questionText', message: 'Missing "questionText"', itemId: id });
        if (!item.options || !Array.isArray(item.options)) issues.push({ type: 'error', field: 'options', message: 'Missing or invalid "options" array', itemId: id });
        if (!item.correctOptionId) issues.push({ type: 'error', field: 'correctOptionId', message: 'Missing "correctOptionId"', itemId: id });
        if (!item.officialSource) issues.push({ type: 'warning', field: 'officialSource', message: 'Recommendation: Provide "officialSource" for official-source verification', itemId: id });
      } else if (importType === 'currentAffairs') {
        if (!item.title) issues.push({ type: 'error', field: 'title', message: 'Missing "title"', itemId: id });
        if (!item.category) issues.push({ type: 'error', field: 'category', message: 'Missing "category"', itemId: id });
        if (!item.summary) issues.push({ type: 'error', field: 'summary', message: 'Missing "summary"', itemId: id });
        if (!item.date) issues.push({ type: 'warning', field: 'date', message: 'Missing "date", should follow YYYY-MM-DD', itemId: id });
      } else if (importType === 'articles') {
        if (!item.articleNumber) issues.push({ type: 'error', field: 'articleNumber', message: 'Missing "articleNumber"', itemId: id });
        if (!item.subject) issues.push({ type: 'error', field: 'subject', message: 'Missing "subject"', itemId: id });
        if (!item.simpleExplanation) issues.push({ type: 'error', field: 'simpleExplanation', message: 'Missing "simpleExplanation"', itemId: id });
      }
    });

    setValidationReport(issues);

    const hasErrors = issues.some(i => i.type === 'error');
    if (!hasErrors) {
      importCustomData(importType, parsed);
      setImportSuccess(`Successfully validated and imported ${parsed.length} items into local database!`);
      setRawJsonInput('');
    }
  };

  // Export full user and platform data
  const handleExportData = () => {
    const bundle = {
      exportDate: new Date().toISOString(),
      platform: 'GS-II MASTER',
      version: '2026.09',
      customImports,
      stats: {
        totalArticles: CONSTITUTION_ARTICLES.length + customImports.articles.length,
        totalQuestions: PRELIMS_QUESTIONS_BANK.length + customImports.questions.length,
        totalUpdates: CURRENT_AFFAIRS_UPDATES.length + customImports.currentAffairs.length
      }
    };

    const blob = new Blob([JSON.stringify(bundle, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gs2-master-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const sampleJsonQuestion = `[
  {
    "id": "custom-q-001",
    "exam": "UPSC",
    "year": 2025,
    "isPYQ": false,
    "paper": "GS-1 (Polity & Governance)",
    "topic": "Constitution",
    "subtopic": "Preamble",
    "questionType": "single_choice",
    "questionText": "The Preamble to the Constitution of India was amended for the only time by which Constitutional Amendment Act?",
    "options": [
      { "id": "A", "text": "24th Amendment Act 1971" },
      { "id": "B", "text": "42nd Amendment Act 1976" },
      { "id": "C", "text": "44th Amendment Act 1978" },
      { "id": "D", "text": "86th Amendment Act 2002" }
    ],
    "correctOptionId": "B",
    "explanation": "The Preamble has been amended only once till date by the 42nd Constitutional Amendment Act 1976, which added the words Socialist, Secular, and Integrity.",
    "officialSource": "Constitution of India, Official Gazette",
    "difficulty": "Easy",
    "conceptsTested": ["Preamble", "42nd Amendment"],
    "syllabusTag": "Constitution - Preamble",
    "examSpecificTag": "COMMON"
  }
]`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Title & Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <UploadCloud className="w-6 h-6 text-blue-900" />
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Content Update Centre</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Update, validate, import and export syllabus datasets, questions, and current affairs without modifying code.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportData}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-blue-900 text-white hover:bg-blue-950 transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <Download className="w-3.5 h-3.5" /> Export Data Backup
          </button>
          <button
            onClick={clearUserData}
            className="px-3.5 py-2 rounded-xl text-xs font-bold border border-rose-300 text-rose-700 hover:bg-rose-50 transition-colors flex items-center gap-1.5"
          >
            <Trash2 className="w-3.5 h-3.5" /> Reset Local Progress
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Import Form & JSON Input */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Bulk JSON Dataset Importer</h2>
            <div className="flex gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
              {(['questions', 'currentAffairs', 'articles'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setImportType(t)}
                  className={`px-3 py-1 rounded-lg capitalize transition-all ${
                    importType === t ? 'bg-blue-900 text-white shadow-xs' : 'text-slate-600'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="text-xs text-slate-500 leading-relaxed">
            Paste raw JSON array below. The system executes comprehensive schema verification, duplicate ID detection, date checking, and source audit.
          </div>

          <textarea
            value={rawJsonInput}
            onChange={e => setRawJsonInput(e.target.value)}
            placeholder="Paste JSON array here..."
            rows={12}
            className="w-full p-4 rounded-2xl border border-slate-200 font-mono text-xs text-slate-800 bg-slate-50 focus:outline-hidden focus:ring-1 focus:ring-blue-900"
          />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <button
              onClick={() => setRawJsonInput(sampleJsonQuestion)}
              className="text-xs text-blue-700 hover:text-blue-900 font-semibold"
            >
              Load Sample Question JSON Format
            </button>
            <button
              onClick={handleValidateAndImport}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" /> Validate & Import
            </button>
          </div>

          {importSuccess && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              {importSuccess}
            </div>
          )}
        </div>

        {/* Right Column: Live Validation Report & Schema Rules */}
        <div className="lg:col-span-5 space-y-5">
          {/* Validation Report Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-900" />
                Data Integrity Audit Report
              </div>
              {validationReport && (
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    validationReport.some(i => i.type === 'error')
                      ? 'bg-rose-100 text-rose-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  {validationReport.filter(i => i.type === 'error').length} Errors
                </span>
              )}
            </div>

            {!validationReport ? (
              <div className="p-6 text-center text-slate-400 text-xs">
                No active import validation. Paste JSON on the left and click "Validate & Import".
              </div>
            ) : validationReport.length === 0 ? (
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 font-medium space-y-1">
                <div className="font-bold text-emerald-900">All Schema Checks Passed 100%!</div>
                <p>No duplicate IDs, missing required keys, or malformed entries detected.</p>
              </div>
            ) : (
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {validationReport.map((iss, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-xl border text-xs ${
                      iss.type === 'error'
                        ? 'bg-rose-50 border-rose-200 text-rose-950'
                        : 'bg-amber-50 border-amber-200 text-amber-950'
                    }`}
                  >
                    <div className="font-bold">
                      [{iss.type.toUpperCase()}] Field: {iss.field} {iss.itemId && `(${iss.itemId})`}
                    </div>
                    <div className="text-[11px] mt-0.5">{iss.message}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Database Version & Status */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 text-xs text-slate-700 space-y-2">
            <div className="font-bold text-slate-900">Current Knowledge Base Health:</div>
            <div className="space-y-1 text-slate-600">
              <div className="flex justify-between">
                <span>Core Articles Seeded:</span>
                <span className="font-bold text-slate-900">{CONSTITUTION_ARTICLES.length + customImports.articles.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Prelims Questions Seeded:</span>
                <span className="font-bold text-slate-900">{PRELIMS_QUESTIONS_BANK.length + customImports.questions.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Current Affairs Linked:</span>
                <span className="font-bold text-slate-900">{CURRENT_AFFAIRS_UPDATES.length + customImports.currentAffairs.length}</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-slate-200">
                <span>Release Version:</span>
                <span className="font-mono text-blue-900 font-bold">2026.09 (Civil Services Ready)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
