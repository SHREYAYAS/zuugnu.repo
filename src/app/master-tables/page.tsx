'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { MASTER_TABLES_LIST } from '@/types/master';

export default function MasterTablesPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | 'all'>('all');

  const categories = useMemo(() => {
    const grouped: { [key: string]: typeof MASTER_TABLES_LIST } = {};
    MASTER_TABLES_LIST.forEach((table) => {
      const category = table.category || 'Other';
      if (!grouped[category]) grouped[category] = [];
      grouped[category].push(table);
    });
    return grouped;
  }, []);

  const allCategories = useMemo(
    () => ['all', ...Object.keys(categories)],
    [categories]
  );

  const filteredByCategory = useMemo(() => {
    if (activeCategory === 'all') return MASTER_TABLES_LIST;
    return MASTER_TABLES_LIST.filter(
      (table) => (table.category || 'Other') === activeCategory
    );
  }, [activeCategory]);

  const filteredTables = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return filteredByCategory;
    return filteredByCategory.filter((table) => {
      const name = table.displayName.toLowerCase();
      const id = table.id.toLowerCase();
      const category = (table.category || 'Other').toLowerCase();
      return name.includes(term) || id.includes(term) || category.includes(term);
    });
  }, [filteredByCategory, search]);

  const filteredCategories = useMemo(() => {
    const grouped: { [key: string]: typeof MASTER_TABLES_LIST } = {};
    filteredTables.forEach((table) => {
      const category = table.category || 'Other';
      if (!grouped[category]) grouped[category] = [];
      grouped[category].push(table);
    });
    return grouped;
  }, [filteredTables]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white text-slate-900">
      {/* Hero */}
      <div className="sticky top-0 z-30 backdrop-blur bg-white/85 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl shadow-sm">
                📊
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Data Catalogue</p>
                <h1 className="text-3xl font-semibold text-slate-900 leading-tight">Master Tables</h1>
                <p className="text-sm text-slate-500 mt-1">Centralized references, neatly organized by domain.</p>
              </div>
            </div>
            <div className="flex gap-4 text-right">
              <div className="px-4 py-3 rounded-2xl bg-white shadow-sm border border-slate-200">
                <p className="text-xs text-slate-500">Total tables</p>
                <p className="text-2xl font-semibold text-slate-900">{MASTER_TABLES_LIST.length}</p>
              </div>
              <div className="px-4 py-3 rounded-2xl bg-emerald-50 border border-emerald-100">
                <p className="text-xs text-emerald-700">Active</p>
                <p className="text-2xl font-semibold text-emerald-700">{MASTER_TABLES_LIST.length}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-2 items-center">
              {allCategories.map((cat) => {
                const isActive = activeCategory === cat;
                const label = cat === 'all' ? 'All' : cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full border text-sm transition shadow-sm ${
                      isActive
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-200 hover:text-emerald-700'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex-1 min-w-[240px]">
                <div className="relative">
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search tables by name, id, or category"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                    {filteredTables.length} matches
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">
        {Object.entries(filteredCategories).map(([categoryName, tables]) => (
          <section key={categoryName} className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">{categoryName}</p>
                <h2 className="text-xl font-semibold text-slate-900">{categoryName}</h2>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
                {tables.length} tables
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {tables.map((table) => (
                <Link
                  key={table.id}
                  href={`/master-tables/${table.id}`}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 opacity-80" />
                  <div className="p-5 flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-2xl group-hover:scale-105 transition">
                      {table.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-slate-900 truncate">
                        {table.displayName.split(' > ').pop()}
                      </h3>
                      <p className="text-xs text-slate-500 truncate">{table.id}</p>
                      <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-500">
                        <span className="px-2 py-1 rounded-full bg-slate-100">{table.columns.length} fields</span>
                        <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">{table.category || 'Other'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 pb-4 text-xs text-slate-500 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    View & edit records
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {filteredTables.length === 0 && (
          <div className="text-center py-16 rounded-2xl border border-dashed border-slate-200 bg-white/60">
            <p className="text-lg font-semibold text-slate-900">No tables found</p>
            <p className="text-sm text-slate-500 mt-1">Try a different keyword or switch category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
