import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { CommandsPage } from './components/CommandsPage';
import { RanksPage } from './components/RanksPage';
import { MechanicsPage } from './components/MechanicsPage';
import { DungeonsPage } from './components/DungeonsPage';

// Scroll to top wrapper
const ScrollToTop = ({ children }: { children?: React.ReactNode }) => {
  const location = useLocation();
  React.useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return <>{children}</>;
};

const BACKGROUND_IMAGE = "https://i.imgur.com/uxgx2yV.png";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen font-sans text-slate-100 selection:bg-blue-500/30">
        {/* Fixed Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
            />
            {/* Overlay: Darken + Blur */}
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[3px]" />
        </div>

        {/* Content Layout */}
        <div className="relative z-10 flex min-h-screen">
            <Navigation />
            
            <main className="flex-1 lg:ml-64 p-6 lg:p-12 pt-24 lg:pt-12 min-h-screen">
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/commands" element={<CommandsPage />} />
                        <Route path="/ranks" element={<RanksPage />} />
                        <Route path="/mechanics" element={<MechanicsPage />} />
                        <Route path="/dungeons" element={<DungeonsPage />} />
                    </Routes>
                </ScrollToTop>
            </main>
        </div>
      </div>
    </Router>
  );
}

export default App;