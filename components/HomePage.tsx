
import React from 'react';
import { ArrowRight, Copy, Server, MessageCircle, ShoppingCart, Terminal, Sword, Hammer, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVER_IP, DISCORD_LINK, STORE_LINK } from '../constants';

const WikiCard = ({ to, icon: Icon, title, description, color }: { to: string, icon: any, title: string, description: string, color: string }) => (
  <Link 
    to={to} 
    className="group bg-slate-800/50 border border-slate-700 hover:bg-slate-800 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
  >
    <div className={`w-12 h-12 ${color} bg-opacity-10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-opacity-20 transition-all`}>
      <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm">{description}</p>
    <div className="mt-4 flex items-center text-sm font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
      Zobacz więcej <ArrowRight className="w-4 h-4 ml-1" />
    </div>
  </Link>
);

export const HomePage = () => {
  const copyIp = () => {
    navigator.clipboard.writeText(SERVER_IP);
    alert(`Skopiowano IP: ${SERVER_IP}`);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      
      {/* Header / Wiki Title */}
      <div className="text-center space-y-4 pt-8">
        <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 tracking-tight">
          WIKIPEDIA ARGONCRAFT
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Kompendium wiedzy o serwerze. Znajdziesz tutaj wszystko o komendach, mechanikach i rangach.
        </p>
      </div>

      {/* Server Info Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        
        {/* IP Address */}
        <div className="flex items-center gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800 w-full md:w-auto justify-between md:justify-start">
           <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
             <div>
               <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Adres IP</div>
               <div className="text-white font-mono font-bold text-lg">{SERVER_IP}</div>
             </div>
           </div>
           <button onClick={copyIp} className="p-2 hover:bg-slate-800 rounded-lg transition-colors group">
             <Copy className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
           </button>
        </div>

        {/* Version Badge */}
        <div className="flex flex-col items-center md:items-start">
             <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Wersja</div>
             <div className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-lg border border-blue-500/20 font-bold font-mono">
               1.21.4
             </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 w-full md:w-auto">
           <a 
            href={DISCORD_LINK} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white px-5 py-3 rounded-xl font-bold transition-all shadow-lg shadow-[#5865F2]/20"
           >
             <MessageCircle className="w-5 h-5" />
             Discord
           </a>
           <a 
            href={STORE_LINK} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-5 py-3 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/20"
           >
             <ShoppingCart className="w-5 h-5" />
             Sklep
           </a>
        </div>
      </div>

      {/* Main Navigation Menu (Wiki Content) */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white pl-2 border-l-4 border-blue-500">
            Przeglądaj Kategorie
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <WikiCard 
              to="/commands" 
              icon={Terminal} 
              title="Komendy" 
              description="Spis wszystkich poleceń dla graczy i rang." 
              color="bg-emerald-500" 
            />
            <WikiCard 
              to="/mechanics" 
              icon={Hammer} 
              title="Mechaniki" 
              description="Prace, Battlepass, Misje i Kasyno." 
              color="bg-purple-500" 
            />
            <WikiCard 
              to="/ranks" 
              icon={Sword} 
              title="Rangi" 
              description="Informacje o VIP, MVP i PRO." 
              color="bg-yellow-500" 
            />
            <WikiCard 
              to="/dungeons" 
              icon={Box} 
              title="Dungeony" 
              description="Poziomy trudności, bossowie i nagrody." 
              color="bg-red-500" 
            />
        </div>
      </div>

      {/* Quick Start / Guide Section */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-white">Zaczynasz przygodę?</h2>
          <p className="text-slate-400 leading-relaxed">
            Wpisz w grze <code className="bg-slate-800 px-2 py-1 rounded text-blue-400 font-mono">/guide</code> lub <code className="bg-slate-800 px-2 py-1 rounded text-blue-400 font-mono">/menu</code>, 
            aby otworzyć interaktywny przewodnik. Znajdziesz tam najważniejsze informacje o tym jak zarabiać, zakładać działki i zdobywać ekwipunek.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
                <Server className="w-32 h-32 text-slate-700 relative z-10" />
            </div>
        </div>
      </div>

    </div>
  );
};
