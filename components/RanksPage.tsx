
import React from 'react';
import { Crown, Star, Gem, Check, Info } from 'lucide-react';
import { RANKS } from '../constants';

const RankIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'crown': return <Crown className="w-8 h-8" />;
    case 'star': return <Star className="w-8 h-8" />;
    case 'gem': return <Gem className="w-8 h-8" />;
    default: return <Star className="w-8 h-8" />;
  }
};

export const RanksPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Rangi Premium</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-6">
          Wspierając serwer kupując rangę, zyskujesz dostęp do unikalnych przywilejów i wyróżniasz się na tle innych graczy.
        </p>
        
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-200 text-sm">
            <Info className="w-4 h-4" />
            <span>Pełną listę przywilejów sprawdzisz w grze pod komendą <strong>/store</strong> lub <strong>/itemshop</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {RANKS.map((rank) => (
          <div 
            key={rank.id} 
            className={`relative flex flex-col bg-slate-900 border ${rank.borderColor || 'border-slate-800'} rounded-3xl overflow-hidden hover:shadow-2xl ${rank.shadowColor || 'hover:shadow-blue-500/20'} transition-all duration-300 group`}
          >
            {/* Header */}
            <div className="p-8 text-center bg-slate-950/50">
              <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-slate-800 ${rank.color} group-hover:scale-110 transition-transform duration-300`}>
                <RankIcon icon={rank.icon} />
              </div>
              <h3 className={`text-3xl font-bold mb-2 ${rank.color}`}>{rank.name}</h3>
              <div className="text-xl font-bold text-white opacity-80">{rank.price}</div>
            </div>

            {/* Features */}
            <div className="flex-1 p-8 bg-slate-900">
              <ul className="space-y-4">
                {rank.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <div className={`mt-1 min-w-[20px] ${rank.color} opacity-70 group-hover/item:opacity-100 transition-opacity`}>
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed group-hover/item:text-slate-200 transition-colors">
                        {feature.startsWith('Komenda') ? (
                            <>
                                <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 mr-2 text-blue-400">
                                    {feature.split(' ')[1]}
                                </span>
                                {feature.split(' ').slice(2).join(' ').replace(/^- /, '')}
                            </>
                        ) : feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kit Image Section */}
            {rank.kitImage && (
              <div className="p-6 border-t border-slate-800 bg-slate-950/30">
                <p className="text-center text-slate-400 text-sm mb-4 font-semibold uppercase tracking-wider">
                  Każda ranga dostaje unikalny potężny ekwipunek
                </p>
                <div className="rounded-xl overflow-hidden border border-slate-800 shadow-lg group-hover:border-slate-700 transition-colors">
                  <img 
                    src={rank.kitImage} 
                    alt={`Zestaw ${rank.name}`} 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
