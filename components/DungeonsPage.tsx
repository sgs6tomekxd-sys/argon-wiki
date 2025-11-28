
import React from 'react';
import { Skull, Key, Box, Coins } from 'lucide-react';
import { DUNGEONS } from '../constants';

export const DungeonsPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Starożytne Dungeony</h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
          Dungeony to najlepszy sposób na <span className="text-green-400 font-bold">farmienie kasy</span> i zdobywanie unikalnych przedmiotów.
          Aby wejść, potrzebujesz odpowiedniego klucza.
          <br/>
          <span className="text-blue-400 text-sm mt-2 block">Dostęp przez komendę /warp</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {DUNGEONS.map((dungeon) => (
          <div key={dungeon.name} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 shadow-2xl">
            <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-slate-800 rounded-2xl">
                    <Skull className={`w-10 h-10 ${dungeon.color}`} />
                </div>
                <div className={`px-4 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-bold uppercase tracking-wider ${dungeon.color}`}>
                    {dungeon.difficulty}
                </div>
            </div>
            
            <h3 className={`text-2xl font-bold mb-3 text-white`}>{dungeon.name}</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed min-h-[80px]">
                {dungeon.description}
            </p>

            <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <Key className="w-4 h-4 text-slate-500" />
                    <span>Wymagany: <strong className="text-white">{dungeon.requirement}</strong></span>
                </div>
            </div>

            <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/50">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Coins className="w-3 h-3 text-yellow-500" />
                    Nagrody
                </h4>
                <ul className="space-y-2">
                    {dungeon.rewards.map((reward, i) => (
                        <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                            <span className={`w-1 h-1 rounded-full ${dungeon.color.replace('text', 'bg')}`}></span>
                            {reward}
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
