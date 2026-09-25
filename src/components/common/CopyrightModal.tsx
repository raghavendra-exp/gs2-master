import React, { useState } from 'react';
import { X, ShieldCheck, Award, FileText, Scale, ExternalLink, Check, Copy, BookOpen } from 'lucide-react';

interface CopyrightModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CopyrightModal: React.FC<CopyrightModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'certificate' | 'license' | 'statutory' | 'fairuse'>('certificate');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const certificateText = `OFFICIAL CERTIFICATE OF COPYRIGHT & INTELLECTUAL PROPERTY
Project: GS-II MASTER ("Governance • Constitution • Polity • Social Justice • International Relations")
Identifier: GS2-MSTR-IND-2026-REG01
Author / Maintainer: Raghavendra (@raghavendra-exp)
Jurisdiction: Republic of India
Publication Year: 2026
Code License: MIT License
Content License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
Statutory Exemption: Section 52(1)(q) and Section 52(1)(a) of Indian Copyright Act, 1957.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(certificateText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-amber-500/40 rounded-2xl w-full max-w-4xl max-h-[90vh] shadow-2xl flex flex-col overflow-hidden text-slate-200">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white tracking-wide">
                  Official Certificate of Copyright & Licensing
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full">
                  VERIFIED
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Project Registration: <span className="font-mono text-amber-300">GS2-MSTR-IND-2026-REG01</span> • Republic of India
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 px-6 gap-2 pt-2">
          {[
            { id: 'certificate', label: 'Copyright Certificate', icon: Award },
            { id: 'license', label: 'Dual Licenses (MIT + CC)', icon: FileText },
            { id: 'statutory', label: 'Govt Works & Section 52(1)(q)', icon: Scale },
            { id: 'fairuse', label: 'Educational Fair Dealing', icon: BookOpen },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-medium border-b-2 transition-all ${
                  isSelected
                    ? 'border-amber-400 text-amber-300 bg-slate-900/60'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          
          {/* TAB 1: CERTIFICATE */}
          {activeTab === 'certificate' && (
            <div className="space-y-6">
              {/* Formal Certificate Frame */}
              <div className="relative border-4 border-double border-amber-500/30 bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-xl shadow-inner text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 border-2 border-amber-400 text-amber-400 font-black text-xl mb-1">
                  🏛
                </div>
                <div className="uppercase tracking-widest text-[11px] text-amber-400/90 font-bold">
                  Certificate of Authorship & Intellectual Property
                </div>
                <h3 className="text-xl font-black text-white tracking-wide">
                  GS-II MASTER
                </h3>
                <p className="text-xs text-slate-300 max-w-xl mx-auto italic">
                  "Governance • Constitution • Polity • Social Justice • International Relations"
                </p>

                <div className="w-24 h-0.5 bg-amber-500/40 mx-auto my-2" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left max-w-2xl mx-auto text-xs py-2">
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                    <span className="text-slate-400 block text-[10px] uppercase">Author / Maintainer</span>
                    <span className="font-semibold text-white">Raghavendra (@raghavendra-exp)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                    <span className="text-slate-400 block text-[10px] uppercase">Certificate Identifier</span>
                    <span className="font-mono text-amber-300 font-bold">GS2-MSTR-IND-2026-REG01</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                    <span className="text-slate-400 block text-[10px] uppercase">Applicable Jurisdiction</span>
                    <span className="text-slate-200">Republic of India & Berne Convention</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                    <span className="text-slate-400 block text-[10px] uppercase">Publication Date</span>
                    <span className="text-slate-200">September 25, 2026</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 max-w-xl mx-auto text-justify leading-relaxed pt-2">
                  This certifies that the interactive architecture, 7-Step Syllabus Linker, 9-Part Mains structural evaluator, 3F Federalism matrix, and 0–100 Readiness Algorithm are original works of authorship protected under the Copyright Act, 1957 (Republic of India). All underlying statutory materials, constitutional texts, and judicial pronouncements are incorporated under statutory fair dealing exemptions.
                </div>

                <div className="flex items-center justify-center gap-2 pt-2">
                  <span className="px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    Digitally Attested & Published
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 border border-slate-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      Certificate Text Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      Copy Certificate Summary
                    </>
                  )}
                </button>

                <a
                  href="https://github.com/raghavendra-exp/gs2-master/blob/main/COPYRIGHT_CERTIFICATE.md"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Full COPYRIGHT_CERTIFICATE.md on GitHub
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: DUAL LICENSES */}
          {activeTab === 'license' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* MIT Code License */}
                <div className="p-5 rounded-xl bg-slate-800/70 border border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-300 text-sm flex items-center gap-2">
                      <FileText className="w-4 h-4 text-amber-400" />
                      Software Code License
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold border border-blue-500/40">
                      MIT License
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    All application software source code (React components, TypeScript data interfaces, state providers, and build configs) is released under the permissive <strong>MIT License</strong>.
                  </p>
                  <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                    <li>Commercial and non-commercial code inspection permitted</li>
                    <li>Freedom to fork, modify, and integrate code</li>
                    <li>Mandatory retention of copyright notice and disclaimer</li>
                  </ul>
                  <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-700/60">
                    Copyright (c) 2026 Raghavendra (raghavendra-exp)
                  </div>
                </div>

                {/* CC BY-NC-SA 4.0 Content License */}
                <div className="p-5 rounded-xl bg-slate-800/70 border border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-300 text-sm flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-emerald-400" />
                      Curated Content License
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/40">
                      CC BY-NC-SA 4.0
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Pedagogical models, question formulations, 9-part mains frameworks, and analytical syntheses are licensed under <strong>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International</strong>.
                  </p>
                  <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                    <li>Free to share and adapt for individual study</li>
                    <li>Mandatory attribution to <em>GS-II MASTER / raghavendra-exp</em></li>
                    <li>No commercial sale or paywall packaging without consent</li>
                    <li>Derivative educational works must be shared alike</li>
                  </ul>
                  <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-700/60">
                    Protecting educational open-access for civil services aspirants.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  Read complete legal code in the repository:
                </span>
                <a
                  href="https://github.com/raghavendra-exp/gs2-master/blob/main/LICENSE"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                >
                  View LICENSE on GitHub <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* TAB 3: STATUTORY EXEMPTIONS (INDIAN LAW) */}
          {activeTab === 'statutory' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/60 text-xs text-blue-200 leading-relaxed">
                <strong className="block text-white text-sm mb-1 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-blue-400" />
                  Indian Copyright Act, 1957 — Section 52(1)(q)
                </strong>
                Under Indian statutory law, the reproduction or publication of any matter published in any Official Gazette, Act of Parliament, report of a committee/commission appointed by the Government, or any judgment or decree of a court/tribunal does NOT constitute copyright infringement.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700 space-y-1.5">
                  <div className="font-semibold text-white">Constitution of India</div>
                  <p className="text-slate-400 leading-relaxed">
                    Articles, Preamble, and Schedules are official enactments of the Republic of India published by the Legislative Department, Ministry of Law and Justice.
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700 space-y-1.5">
                  <div className="font-semibold text-white">Supreme Court & High Court Judgments</div>
                  <p className="text-slate-400 leading-relaxed">
                    Judicial orders, ratio decidendi, and obiter dicta are public domain records exempted under Section 52(1)(q)(iv).
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700 space-y-1.5">
                  <div className="font-semibold text-white">Commission & Committee Reports</div>
                  <p className="text-slate-400 leading-relaxed">
                    Excerpts from Sarkaria Commission, Punchhi Commission, 2nd ARC, Kasturirangan, and Kovind ONOE are official Parliamentary documents.
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700 space-y-1.5">
                  <div className="font-semibold text-white">Government Welfare Schemes & PIB Data</div>
                  <p className="text-slate-400 leading-relaxed">
                    Operational guidelines, funding ratios, and metrics are official public communications from Government Ministries.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: FAIR DEALING & PYQs */}
          {activeTab === 'fairuse' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/50 text-xs text-amber-200 leading-relaxed">
                <strong className="block text-white text-sm mb-1 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  Fair Dealing for Educational Examination Review — Section 52(1)(a) & 52(1)(h)
                </strong>
                Reproduction of Previous Years' Questions (PYQs) from the Union Public Service Commission (UPSC) and Uttar Pradesh Public Service Commission (UPPSC) is undertaken exclusively for non-commercial educational instruction, answer evaluation, and academic research.
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700">
                  <div className="font-semibold text-white mb-1">Non-Affiliation Notice</div>
                  <p className="text-slate-400 leading-relaxed">
                    GS-II MASTER is an independent open-access educational initiative. It is not affiliated with, authorized, maintained, or endorsed by the Union Public Service Commission (UPSC), Uttar Pradesh Public Service Commission (UPPSC), or any government body.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700">
                  <div className="font-semibold text-white mb-1">Nominative Trademark Use</div>
                  <p className="text-slate-400 leading-relaxed">
                    The terms "UPSC", "UPPSC", "Civil Services Examination", "PCS", and names of government ministries are used strictly in a nominative, descriptive sense to identify examination syllabi and topics for prospective candidates.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
          <div>
            Registered in New Delhi, India • Open Access Academic Initiative
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
