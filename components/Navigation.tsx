
import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Book, Terminal, Sword, Hammer, Box, MessageCircle, MonitorPlay, ShoppingCart, Server } from 'lucide-react';
import { DISCORD_LINK, PRESENTATION_LINK, STORE_LINK, HOSTING_LINK } from '../constants';

const LOGO_URL = "https://i.imgur.com/x7eLfZh.png";

const NavItem = ({ to, icon: Icon, label, onClick }: { to: string; icon: React.ElementType; label: string; onClick?: () => void }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
        isActive 
          ? 'bg-blue-600/20 text-blue-400 border-r-2 border-blue-400' 
          : 'text-slate-400 hover:bg-slate-800 hover:text-white'
      }`
    }
  >
    <Icon className="w-5 h-5" />
    <span className="font-medium">{label}</span>
  </NavLink>
);

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-slate-900/90 backdrop-blur-md border-b border-slate-700 z-50 flex items-center justify-between px-4">
        <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <img src={LOGO_URL} alt="ArgonCraft Logo" className="h-10 w-auto object-contain" />
        </Link>
        <button onClick={toggleMenu} className="text-white p-2">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar / Drawer */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 border-r border-slate-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } pt-20 lg:pt-0`}
      >
        <div className="flex flex-col h-full">
          <div className="h-24 hidden lg:flex items-center justify-center px-6 border-b border-slate-800 bg-slate-950/30">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img src={LOGO_URL} alt="ArgonCraft Logo" className="h-14 w-auto object-contain hover:scale-105 transition-transform duration-300" />
            </Link>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
            <NavItem to="/" icon={Home} label="Strona Główna" onClick={() => setIsOpen(false)} />
            <NavItem to="/commands" icon={Terminal} label="Komendy" onClick={() => setIsOpen(false)} />
            <NavItem to="/ranks" icon={Sword} label="Rangi" onClick={() => setIsOpen(false)} />
            <NavItem to="/mechanics" icon={Hammer} label="Mechaniki" onClick={() => setIsOpen(false)} />
            <NavItem to="/dungeons" icon={Box} label="Dungeony" onClick={() => setIsOpen(false)} />
            
            <div className="pt-6 mt-6 border-t border-slate-800 px-3">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Linki</p>
                <a 
                    href={STORE_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-orange-500/20 hover:text-orange-400 transition-colors mb-1"
                >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Sklep</span>
                </a>
                <a 
                    href={DISCORD_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-[#5865F2]/20 hover:text-[#5865F2] transition-colors mb-1"
                >
                    <MessageCircle className="w-5 h-5" />
                    <span>Discord</span>
                </a>
                <a 
                    href={PRESENTATION_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors mb-1"
                >
                    <MonitorPlay className="w-5 h-5" />
                    <span>Prezentacja</span>
                </a>
                <a 
                    href={HOSTING_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-blue-600/20 hover:text-blue-400 transition-colors"
                >
                    <Server className="w-5 h-5" />
                    <span className="font-bold text-sm">NAJLEPSZY HOSTING!</span>
                </a>
            </div>
          </div>
          
          <div className="p-4 border-t border-slate-800 text-xs text-center text-slate-600">
            &copy; 2024 ArgonCraft.pl
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
