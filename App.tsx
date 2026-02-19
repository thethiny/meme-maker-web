import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Bitadao from './subprojects/bitadao/pages/Bitadao';
import ComingSoon from './pages/ComingSoon';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen w-screen bg-zinc-950 overflow-hidden font-sans">
        <Sidebar />
        <main className="flex-1 overflow-y-auto relative scroll-smooth">
          <Routes>
            <Route path="/" element={<Navigate to="/bitadao" replace />} />
            <Route path="/bitadao" element={<Bitadao />} />
            <Route path="/video-to-piano" element={<ComingSoon title="Video to Piano" />} />
            <Route path="/animalese" element={<ComingSoon title="Animalese" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
