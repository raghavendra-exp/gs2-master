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
  FileText,
  Anchor,
  Ship,
  Zap,
  MapPin,
  Landmark,
  Award,
  ShieldAlert
} from 'lucide-react';
import {
  COUNTRY_RELATIONSHIPS,
  REGIONAL_GROUPINGS,
  GLOBAL_INSTITUTIONS,
  GLOBAL_DYNAMICS_DATA,
  DIASPORA_POLICY_DATA
} from '../../data';
import { useUserData } from '../../context/UserDataContext';
import { CountryRelationship } from '../../types';

export const IRMaster: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'doctrines' | 'countries' | 'groupings' | 'institutions' | 'globalDynamics' | 'diaspora'>('countries');
  const [selectedCountry, setSelectedCountry] = useState<CountryRelationship>(COUNTRY_RELATIONSHIPS[0]);
  const [countrySearch, setCountrySearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [dynamicsCategory, setDynamicsCategory] = useState<string>('All');
  const [dynamicsSearch, setDynamicsSearch] = useState<string>('');

  const { bookmarks, toggleBookmark } = useUserData();

  const filteredCountries = COUNTRY_RELATIONSHIPS.filter(c => {
    const matchesRegion = selectedRegion === 'All' || c.region === selectedRegion;
    const matchesSearch = c.country.toLowerCase().includes(countrySearch.toLowerCase()) ||
                          c.region.toLowerCase().includes(countrySearch.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const filteredDynamics = GLOBAL_DYNAMICS_DATA.filter(d => {
    const matchesCategory = dynamicsCategory === 'All' || d.category === dynamicsCategory;
    const matchesSearch = d.title.toLowerCase().includes(dynamicsSearch.toLowerCase()) ||
                          d.backgroundAndContext.toLowerCase().includes(dynamicsSearch.toLowerCase()) ||
                          d.keyDataOrPrecedent.toLowerCase().includes(dynamicsSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            { id: 'countries', label: 'Country Dashboard (All 9 Neighbours + Powers)' },
            { id: 'doctrines', label: 'Foreign Policy Doctrines' },
            { id: 'groupings', label: 'Regional Groupings' },
            { id: 'institutions', label: 'Global Institutions' },
            { id: 'globalDynamics', label: 'Global Dynamics & Corridors' },
            { id: 'diaspora', label: 'Indian Diaspora Policy' }
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
        <div className="space-y-6">
          {/* Region Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Filter by Geopolitical Sphere:
            </span>
            <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-xl">
              {['All', 'Neighbourhood', 'Indo-Pacific', 'West Asia', 'Major Powers', 'Europe', 'Global South'].map(reg => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    selectedRegion === reg
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>

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

              {/* Border / Maritime Issues & Water / Energy Cooperation */}
              {(selectedCountry.borderOrMaritimeIssues || selectedCountry.waterOrEnergyCooperation) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  {selectedCountry.borderOrMaritimeIssues && (
                    <div className="p-3.5 bg-rose-50/60 border border-rose-200 rounded-xl space-y-1">
                      <div className="font-bold text-rose-950 flex items-center gap-1.5">
                        <ShieldAlert className="w-4 h-4 text-rose-700" />
                        Border & Maritime Security Issues
                      </div>
                      <p className="text-slate-700 leading-relaxed">{selectedCountry.borderOrMaritimeIssues}</p>
                    </div>
                  )}

                  {selectedCountry.waterOrEnergyCooperation && (
                    <div className="p-3.5 bg-sky-50/60 border border-sky-200 rounded-xl space-y-1">
                      <div className="font-bold text-sky-950 flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-sky-700" />
                        Water, Energy & Resource Cooperation
                      </div>
                      <p className="text-slate-700 leading-relaxed">{selectedCountry.waterOrEnergyCooperation}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Key Bilateral Agreements */}
              {selectedCountry.keyAgreements && selectedCountry.keyAgreements.length > 0 && (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-2">
                  <div className="font-bold text-slate-900 uppercase tracking-wider">
                    Landmark Bilateral Treaties & Accords
                  </div>
                  <ul className="space-y-1 text-slate-700">
                    {selectedCountry.keyAgreements.map((agr, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-blue-900 font-bold">•</span>
                        <span>{agr}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* UP State Relevance (if applicable) */}
              {selectedCountry.upRelevance && (
                <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <Landmark className="w-4 h-4 text-amber-800" />
                    UPPSC / Uttar Pradesh Strategic Relevance:
                  </div>
                  <p className="text-amber-900 leading-relaxed">{selectedCountry.upRelevance}</p>
                </div>
              )}

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

      {/* 5. GLOBAL GEOPOLITICAL DYNAMICS */}
      {activeSubTab === 'globalDynamics' && (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Ship className="w-5 h-5 text-blue-900" />
                <h2 className="text-lg font-bold text-slate-900">
                  Global Geopolitical Dynamics, Strategic Corridors & Conflicts
                </h2>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Strategic infrastructure corridors, sovereignty disputes, global currency shifts, and maritime security flashpoints.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-xl">
              {['All', 'Geopolitics', 'Geo-economics', 'Security & Conflict'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setDynamicsCategory(cat)}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    dynamicsCategory === cat
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by issue title, background context, or strategy (e.g. CPEC, IMEC, de-dollarization, UNCLOS)..."
              value={dynamicsSearch}
              onChange={e => setDynamicsSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
            />
            {dynamicsSearch && (
              <button
                onClick={() => setDynamicsSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                Clear
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDynamics.map(item => (
              <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded-full font-bold ${
                    item.category === 'Geopolitics'
                      ? 'bg-blue-100 text-blue-900'
                      : item.category === 'Geo-economics'
                      ? 'bg-emerald-100 text-emerald-900'
                      : 'bg-rose-100 text-rose-900'
                  }`}>
                    {item.category}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.backgroundAndContext}</p>

                <div className="p-3 bg-rose-50/60 border border-rose-200 rounded-xl space-y-1">
                  <div className="font-bold text-rose-950 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-rose-700" />
                    Strategic Impact on India:
                  </div>
                  <ul className="space-y-0.5 text-slate-700">
                    {item.impactOnIndia.map((imp, idx) => (
                      <li key={idx} className="flex items-start gap-1">
                        <span className="text-rose-700 font-bold">•</span>
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-blue-50/60 border border-blue-200 rounded-xl space-y-1">
                  <div className="font-bold text-blue-950 flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-blue-700" />
                    India's Strategic Counter-Measures:
                  </div>
                  <ul className="space-y-0.5 text-slate-700">
                    {item.indiaResponseAndStrategy.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-1">
                        <span className="text-blue-900 font-bold">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-600">
                  <span className="font-bold text-slate-800">Precedent & Doctrine Anchor: </span>
                  {item.keyDataOrPrecedent}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. INDIAN DIASPORA POLICY */}
      {activeSubTab === 'diaspora' && (
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-lg font-bold text-slate-900">
              Indian Diaspora: Living Bridge & Strategic Foreign Policy Asset
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Analysis of global demographic footprint, LM Singhvi Committee policy shift, remittances, OCI cards vs dual citizenship, and voting rights.
            </p>
          </div>

          {/* 3 Summary Headline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Economic Remittances</div>
              <p className="text-slate-600 leading-relaxed">
                India is the world’s largest recipient of inward remittances, crossing $125 billion annually (World Bank Migration Brief). Over 50% originates from the Gulf (GCC) region.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Strategic & Political Clout</div>
              <p className="text-slate-600 leading-relaxed">
                Influential presence in US Congress (Samosa Caucus), UK political leadership, Silicon Valley CEOs, and multilateral agencies, serving as a natural lobbying asset.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Consular Protections</div>
              <p className="text-slate-600 leading-relaxed">
                MADAD portal for grievance redressal; Pravasi Bharatiya Bima Yojana (PBBY); swift crisis evacuation diplomacy (Operation Ganga, Operation Kaveri, Operation Ajay).
              </p>
            </div>
          </div>

          {/* Exhaustive Diaspora Policy Dossier Cards */}
          <div className="space-y-4 pt-2">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
              Comprehensive Diaspora Policy Analysis & Constitutional Jurisprudence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DIASPORA_POLICY_DATA.map(diaspora => (
                <div key={diaspora.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3 text-xs">
                  <h4 className="font-bold text-slate-900 text-sm">{diaspora.pillar}</h4>
                  <p className="text-slate-600 leading-relaxed">{diaspora.details}</p>

                  <div className="p-3 bg-blue-50/60 border border-blue-200 rounded-xl space-y-1">
                    <div className="font-bold text-blue-950">Key Initiatives & Frameworks:</div>
                    <ul className="space-y-0.5 text-slate-700">
                      {diaspora.initiatives.map((init, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-blue-900 font-bold">•</span>
                          <span>{init}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-xl space-y-1">
                    <div className="font-bold text-amber-950">Challenges, Debates & Legal Constraints:</div>
                    <ul className="space-y-0.5 text-slate-700">
                      {diaspora.challengesAndDebates.map((deb, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-amber-800 font-bold">•</span>
                          <span>{deb}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-[11px] text-slate-400 font-medium pt-1 border-t border-slate-100">
                    Source: {diaspora.officialSource}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
