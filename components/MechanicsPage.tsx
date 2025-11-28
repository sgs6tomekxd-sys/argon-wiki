
import React from 'react';
import { MECHANICS } from '../constants';

export const MechanicsPage = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Mechaniki Serwera</h2>
        <p className="text-slate-400">Poznaj unikalne systemy, które sprawiają, że rozgrywka na ArgonCraft jest wyjątkowa.</p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {MECHANICS.map((mech, index) => (
          <div 
            key={mech.id} 
            className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500"
          >
            <div className={`flex flex-col ${mech.imagePlaceholder ? (index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse') : ''}`}>
              
              {/* Image Section - Only render if imagePlaceholder is present */}
              {mech.imagePlaceholder && (
                <div className="w-full md:w-2/5 h-80 md:h-auto overflow-hidden bg-slate-950 flex items-center justify-center p-2">
                  <img 
                    src={mech.imagePlaceholder} 
                    alt={mech.title} 
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}

              {/* Content Section - Expand to full width if no image */}
              <div className={`w-full ${mech.imagePlaceholder ? 'md:w-3/5' : ''} p-8 md:p-12 flex flex-col justify-center`}>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {mech.title}
                </h3>
                <p className="text-slate-300 mb-6 text-lg">
                  {mech.description}
                </p>
                <div className="space-y-3">
                    {mech.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                            <span className="text-slate-400">{detail}</span>
                        </div>
                    ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
