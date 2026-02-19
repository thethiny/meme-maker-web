import React from 'react';
import { NavLink } from 'react-router-dom'; // Will use HashRouter in App
import { Video, Music, Mic, Ghost } from 'lucide-react';
import { MEME_TEMPLATES } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-full bg-zinc-900 border-r border-zinc-800 flex flex-col shrink-0">
      <div className="p-6 border-b border-zinc-800 flex items-center gap-2">
        <Ghost className="w-6 h-6 text-indigo-500" />
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Meme Maker
        </h1>
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
  );
};

export default Sidebar;
