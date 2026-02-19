import React from 'react';
import { NavLink } from 'react-router-dom'; // Will use HashRouter in App
import { Video, Music, Mic, Ghost } from 'lucide-react';
import { MEME_TEMPLATES } from '../constants';

const Sidebar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  // Responsive: 100% width on small screens, toggle button only on small screens
  return (
    <>
      {/* Hamburger menu button for small screens */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-indigo-500 text-white rounded-full p-2 shadow-lg focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle Sidebar"
      >
        {!open && (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor" />
            <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor" />
            <rect x="4" y="16" width="16" height="2" rx="1" fill="currentColor" />
          </svg>
        )}
      </button>
      <div
        className={
          `bg-zinc-900 border-r border-zinc-800 flex flex-col shrink-0 h-full transition-all duration-300 z-40 ` +
          // On md+ screens: always visible, static position, width 64
          'md:static md:h-full md:w-64 ' +
          // On mobile: toggle visibility
          (open
            ? 'w-full fixed top-0 left-0'
            : 'w-0 fixed top-0 left-0 pointer-events-none opacity-0 md:w-64 md:pointer-events-auto md:opacity-100')
        }
        style={{ minWidth: open ? '100vw' : undefined }}
      >
      <div className="p-6 border-b border-zinc-800 flex items-center gap-2">
        <Ghost className="w-6 h-6 text-indigo-500" />
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent md:pl-0 pl-12">
          Meme Maker
        </h1>
        {/* Hide close button on desktop */}
        <button
          className="md:hidden ml-auto bg-zinc-800 text-zinc-200 rounded-full p-2"
          style={{ display: open ? 'block' : 'none' }}
          onClick={() => setOpen(false)}
          aria-label="Close Sidebar"
        >
          ✕
        </button>
      </div>
      
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {MEME_TEMPLATES.map((template) => {
          const Icon = template.id === 'bitadao' ? Video : template.id === 'video-to-piano' ? Music : Mic;
          return (
            <div key={template.id} className="relative group">
              {template.isComingSoon ? (
                <div className="flex items-center gap-3 px-4 py-3 text-zinc-500 cursor-not-allowed rounded-lg border border-transparent">
                  <Icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{template.name}</span>
                  <span className="ml-auto text-[10px] font-bold uppercase tracking-wider bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">
                    Soon
                  </span>
                </div>
              ) : (
                <NavLink
                  to={`/${template.id}`}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-200 ${
                      isActive
                        ? 'bg-indigo-500/10 border-indigo-500/50 text-indigo-300'
                        : 'border-transparent text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100'
                    }`
                  }
                  onClick={() => {
                    if (window.innerWidth < 768) setOpen(false);
                  }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{template.name}</span>
                </NavLink>
              )}
            </div>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-800 text-xs text-zinc-600 text-center">
        v1.0.0 &bull; Browser Only
      </div>
    </div>
    </>
  );
};

export default Sidebar;
