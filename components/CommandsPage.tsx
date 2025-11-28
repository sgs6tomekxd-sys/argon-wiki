
import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { COMMANDS } from '../constants';

export const CommandsPage = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Wszystkie');

  const categories = ['Wszystkie', ...Array.from(new Set(COMMANDS.map(c => c.category)))];

  const filteredCommands = useMemo(() => {
    return COMMANDS.filter(cmd => {
      const matchesSearch = cmd.command.toLowerCase().includes(search.toLowerCase()) || 
                            cmd.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'Wszystkie' || cmd.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const getCategoryStyle = (category: string) => {
    switch(category) {
      case 'VIP': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'MVP': return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'PRO': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default: return 'bg-slate-800 text-slate-400 border-slate-700';
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Komendy Serwera</h2>
        <p className="text-slate-400">Pełna lista poleceń dostępnych na serwerze ArgonCraft.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Szukaj komendy lub opisu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-3 rounded-xl font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="grid grid-cols-12 bg-slate-950 p-4 border-b border-slate-800 text-slate-400 text-sm font-semibold uppercase tracking-wider">
          <div className="col-span-4 md:col-span-3">Komenda</div>
          <div className="col-span-8 md:col-span-7">Opis</div>
          <div className="hidden md:block md:col-span-2">Kategoria</div>
        </div>
        <div className="divide-y divide-slate-800/50">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 items-center hover:bg-slate-800/30 transition-colors">
                <div className="col-span-4 md:col-span-3 font-mono text-blue-400 font-medium break-words">
                  {cmd.command}
                </div>
                <div className="col-span-8 md:col-span-7 text-slate-300 text-sm md:text-base">
                  {cmd.description}
                </div>
                <div className="hidden md:block md:col-span-2">
                  <span className={`inline-block px-2 py-1 rounded text-xs border ${getCategoryStyle(cmd.category)}`}>
                    {cmd.category}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-slate-500">
              Nie znaleziono komend pasujących do wyszukiwania.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
