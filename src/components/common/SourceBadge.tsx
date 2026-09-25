import React from 'react';
import { ShieldCheck, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { OfficialSource } from '../../types';

interface SourceBadgeProps {
  sources?: OfficialSource[];
  lastVerified?: string;
  claimType?: string;
  inline?: boolean;
}

export const SourceBadge: React.FC<SourceBadgeProps> = ({
  sources,
  lastVerified = '2026-09-24',
  claimType = 'SOURCE-ATTRIBUTED CLAIM',
  inline = false
}) => {
  const getClaimColor = (type: string) => {
    switch (type) {
      case 'FACT':
        return 'bg-emerald-50 text-emerald-800 border-emerald-300';
      case 'ANALYSIS':
        return 'bg-blue-50 text-blue-800 border-blue-300';
      case 'INTERPRETATION':
        return 'bg-purple-50 text-purple-800 border-purple-300';
      case 'SOURCE-ATTRIBUTED CLAIM':
        return 'bg-indigo-50 text-indigo-800 border-indigo-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  if (inline) {
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold rounded border ${getClaimColor(claimType)}`}>
        <ShieldCheck className="w-3 h-3 text-emerald-600" />
        {claimType}
      </span>
    );
  }

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-600 space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-0.5 rounded font-medium border text-[11px] ${getClaimColor(claimType)}`}>
            {claimType}
          </span>
          <span className="flex items-center gap-1 text-slate-500">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Official Source First
          </span>
        </div>
        <div className="flex items-center gap-1 text-slate-400">
          <Calendar className="w-3.5 h-3.5" />
          Last Verified: {lastVerified}
        </div>
      </div>

      {sources && sources.length > 0 && (
        <div className="pt-1 border-t border-slate-200/60">
          <div className="font-semibold text-slate-700 mb-1">Authoritative Citations:</div>
          <div className="space-y-1">
            {sources.map((src, i) => (
              <div key={i} className="flex items-center justify-between gap-2">
                <span className="text-slate-700 font-medium truncate">{src.title} ({src.organization})</span>
                {src.url && (
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-0.5 shrink-0"
                  >
                    View Source <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
