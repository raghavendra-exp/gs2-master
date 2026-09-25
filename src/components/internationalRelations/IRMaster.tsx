import React, { useState } from 'react';
import {
  Globe,
  Compass,
  Building2,
  Users,
  Search,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Bookmark,
  FileText
} from 'lucide-react';
import {
  COUNTRY_RELATIONSHIPS,
  REGIONAL_GROUPINGS,
  GLOBAL_INSTITUTIONS
} from '../../data';
import { useUserData } from '../../context/UserDataContext';
import { CountryRelationship } from '../../types';

export const IRMaster: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'doctrines' | 'countries' | 'groupings' | 'institutions' | 'diaspora'>('countries');
  const [selectedCountry, setSelectedCountry] = useState<CountryRelationship>(COUNTRY_RELATIONSHIPS[0]);
  const [countrySearch, setCountrySearch] = useState('');

  const { bookmarks, toggleBookmark } = useUserData();

  const filteredCountries = COUNTRY_RELATIONSHIPS.filter(
    c =>
      c.country.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.region.toLowerCase().includes(countrySearch.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Title & Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-blue-900" />
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">International Relations Master</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Indian foreign policy doctrines, country relationship dashboards, regional groupings, global institutions, and diaspora.
          </p>
        </div>

        {/* Sub Navigation */}
        <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-xl">
          {[
            { id: 'countries', label: 'Country Dashboard' },
            { id: 'doctrines', label: 'Foreign Policy Doctrines' },
            { id: 'groupings', label: 'Regional Groupings' },
            { id: 'institutions', label: 'Global Institutions' },
            { id: 'diaspora', label: 'Indian Diaspora' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeSubTab === tab.id
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. COUNTRY RELATIONSHIP DASHBOARD */}
      {activeSubTab === 'countries' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Country Selector */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-4 space-y-3 shadow-xs h-fit">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={countrySearch}
                onChange={e => setCountrySearch(e.target.value)}
                placeholder="Search country or region..."
                className="w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden"
              />
            </div>

            <div className="overflow-y-auto space-y-1.5 max-h-[70vh]">
              {filteredCountries.map(c => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCountry(c)}
                  className={`w-full text-left p-3.5 rounded-xl transition-all ${
                    selectedCountry.id === c.id
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold flex items-center gap-1.5">
                      <span>{c.flag}</span>
                      <span>{c.country}</span>
                    </span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded ${
                        selectedCountry.id === c.id
                          ? 'bg-blue-800 text-blue-200'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {c.region}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: In-depth Bilateral Dossier */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedCountry.flag}</span>
                <div>
                  <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                    {selectedCountry.region}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">India - {selectedCountry.country} Relations</h2>
                </div>
              </div>
              <button
                onClick={() => toggleBookmark(selectedCountry.id)}
                className={`p-2 rounded-lg border transition-colors ${
                  bookmarks.includes(selectedCountry.id)
                    ? 'bg-amber-100 border-amber-300 text-amber-900'
                    : 'border-slate-200 text-slate-500 hover:bg-slate-50'
                }`}
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>

            {/* Historical Overview */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
              <div className="font-bold text-slate-900 mb-1">Historical Evolution:</div>
              {selectedCountry.historicalBackground}
            </div>

            {/* 3 Pillars: Political, Economic, Defence */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-200 space-y-1">
                <div className="font-bold text-blue-950">Political & Diplomatic:</div>
                <p className="text-slate-700 leading-relaxed">{selectedCountry.politicalRelations}</p>
              </div>

              <div className="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-1">
                <div className="font-bold text-emerald-950">Economic & Trade:</div>
                <p className="text-slate-700 leading-relaxed">{selectedCountry.economicAndTrade}</p>
              </div>

              <div className="p-3.5 bg-purple-50/60 rounded-xl border border-purple-200 space-y-1">
                <div className="font-bold text-purple-950">Defence & Security:</div>
                <p className="text-slate-700 leading-relaxed">{selectedCountry.defenceAndSecurity}</p>
              </div>
            </div>

            {/* Diaspora & Recent Updates */}
            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200">
                <span className="font-bold text-amber-950">Indian Diaspora Profile: </span>
                <span className="text-slate-700">{selectedCountry.diasporaProfile}</span>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900">Recent Geopolitical Developments: </span>
                <span className="text-slate-700">{selectedCountry.recentDevelopments}</span>
              </div>
            </div>

            {/* Challenges vs Opportunities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-rose-50/50 rounded-xl border border-rose-200 space-y-1">
                <div className="font-bold text-rose-950">Strategic Challenges:</div>
                <ul className="space-y-0.5 text-slate-700">
                  {selectedCountry.strategicChallenges.map((ch, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <span className="text-rose-600 font-bold">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-teal-50/50 rounded-xl border border-teal-200 space-y-1">
                <div className="font-bold text-teal-950">Convergence & Opportunities:</div>
                <ul className="space-y-0.5 text-slate-700">
                  {selectedCountry.opportunities.map((op, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <span className="text-teal-700 font-bold">•</span>
                      <span>{op}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* PYQ Reference */}
            {selectedCountry.pyqs.length > 0 && (
              <div className="p-4 bg-indigo-50/50 border border-indigo-200 rounded-xl text-xs space-y-1">
                <div className="font-bold text-indigo-950">Previous Years Question (PYQ) Linkage:</div>
                {selectedCountry.pyqs.map((pq, i) => (
                  <div key={i} className="text-slate-700 italic">"{pq}"</div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. FOREIGN POLICY DOCTRINES */}
      {activeSubTab === 'doctrines' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Foundational Foreign Policy Doctrines</h2>
            <p className="text-xs text-slate-500 mt-1">
              Core conceptual frameworks guiding India’s external relations and strategic diplomacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {[
              {
                title: 'Strategic Autonomy & Multi-Alignment',
                summary: 'Preserving the sovereign freedom to make independent foreign policy decisions based on national interest, rather than entering rigid military alliances.',
                details: 'Evolved from Cold War Non-Alignment (NAM) into active "Multi-Alignment" where India engages Quad and BRICS/SCO concurrently.'
              },
              {
                title: 'Neighbourhood First Policy',
                summary: 'Prioritizing immediate South Asian neighbours in trade concessions, humanitarian assistance, connectivity projects, and non-reciprocal concessions.',
                details: 'Gujral Doctrine principle: India as the largest regional economy does not demand strict reciprocity from smaller neighbours.'
              },
              {
                title: 'Act East Policy',
                summary: 'Diplomatic, economic, and strategic engagement with Southeast Asia (ASEAN) and East Asia (Japan, South Korea), upgraded from "Look East" in 2014.',
                details: 'Three Cs: Commerce, Culture, and Connectivity (e.g. India-Myanmar-Thailand Trilateral Highway).'
              },
              {
                title: 'SAGAR (Security And Growth for All in the Region)',
                summary: 'Maritime doctrine for the Indian Ocean Region focusing on maritime safety, blue economy, disaster relief, and anti-piracy operations.',
                details: 'Positioning India as the preferred "First Responder" and Net Security Provider in the Indian Ocean.'
              },
              {
                title: 'Voice of the Global South',
                summary: 'Championing the developmental concerns of developing countries regarding climate finance, debt restructuring, and food/energy security.',
                details: 'Successfully institutionalized during India’s G20 Presidency by inducting the African Union as a permanent G20 member.'
              }
            ].map((doc, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <div className="font-bold text-sm text-blue-950 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-blue-800" />
                  {doc.title}
                </div>
                <p className="text-slate-700 leading-relaxed">{doc.summary}</p>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-600 text-[11px]">
                  <strong>Key Milestone:</strong> {doc.details}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. REGIONAL GROUPINGS */}
      {activeSubTab === 'groupings' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Regional Groupings & Plurilaterals</h2>
            <p className="text-xs text-slate-500 mt-1">
              Analysis of multilateral platforms where India exercises diplomatic and economic leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {REGIONAL_GROUPINGS.map(grp => (
              <div
                key={grp.id}
                className="p-5 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all bg-slate-50/50 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 text-xs font-black bg-blue-900 text-amber-300 rounded-lg">
                    {grp.acronym}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">Est. {grp.originYear}</span>
                </div>

                <h3 className="font-bold text-base text-slate-900">{grp.name}</h3>
                <div className="text-xs text-slate-500"><strong>Secretariat:</strong> {grp.headquarters}</div>

                <p className="text-xs text-slate-700 leading-relaxed">{grp.purpose}</p>

                <div className="text-xs bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">India’s Strategic Interests:</div>
                  <ul className="space-y-0.5 text-slate-600">
                    {grp.indiaInterests.map((interest, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="text-blue-900 font-bold">•</span>
                        <span>{interest}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-2.5 bg-blue-50/60 rounded-lg border border-blue-200 text-xs text-blue-950 font-medium">
                  📌 <strong>Recent Update:</strong> {grp.recentDevelopments}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. GLOBAL INSTITUTIONS */}
      {activeSubTab === 'institutions' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Global Institutions & Reform Demands</h2>
            <p className="text-xs text-slate-500 mt-1">
              United Nations, WTO, Bretton Woods organizations, and India's advocacy for reformed multilateralism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GLOBAL_INSTITUTIONS.map(org => (
              <div
                key={org.id}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 text-xs font-black bg-purple-900 text-white rounded-lg">
                    {org.acronym}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">{org.headquarters}</span>
                </div>

                <h3 className="font-bold text-base text-slate-900">{org.name}</h3>
                <div className="text-xs text-slate-500"><strong>Membership:</strong> {org.membersCount}</div>

                <p className="text-xs text-slate-700 leading-relaxed">{org.mandate}</p>

                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-1">
                  <span className="font-bold text-slate-900">India’s Demand for Reforms:</span>
                  <p className="text-slate-600 leading-relaxed">{org.reformDemands}</p>
                </div>

                <div className="text-xs space-y-1">
                  <span className="font-bold text-rose-900">Core Systemic Challenges:</span>
                  <ul className="space-y-0.5 text-slate-600">
                    {org.challenges.map((ch, idx) => (
                      <li key={idx} className="flex items-start gap-1">
                        <span className="text-rose-600 font-bold">•</span>
                        <span>{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. INDIAN DIASPORA */}
      {activeSubTab === 'diaspora' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Indian Diaspora: Living Bridge & Diplomatic Asset</h2>
            <p className="text-xs text-slate-500 mt-1">
              Economic remittances, political influence, consular protections, and Pravasi Bharatiya Divas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Economic Remittances</div>
              <p className="text-slate-600 leading-relaxed">
                India is the world’s largest recipient of inward remittances, crossing $125 billion annually (World Bank Migration and Development Brief). Over 50% originates from the Gulf (GCC) region.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Strategic & Political Clout</div>
              <p className="text-slate-600 leading-relaxed">
                Influential presence in US Congress (Samosa Caucus), UK leadership, Silicon Valley tech leadership, and multilateral agencies, acting as a natural lobbying bridge for Indian interests.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Consular Protections</div>
              <p className="text-slate-600 leading-relaxed">
                MADAD portal for online consular grievance redressal; Pravasi Bharatiya Bima Yojana (PBBY); rapid crisis extraction diplomacy (Operation Ganga, Operation Kaveri, Operation Ajay).
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
