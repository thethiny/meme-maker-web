import React from 'react';
import { Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComingSoon: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 text-center">
      <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-6 border border-zinc-800">
        <Construction className="w-10 h-10 text-indigo-500" />
      </div>
      <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
      <p className="text-zinc-400 max-w-md mb-8">
        This meme template is currently under development. Check back later for updates!
      </p>
      <Link 
        to="/bitadao"
        className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors border border-zinc-700"
      >
        Go back to Bitadao
      </Link>
    </div>
  );
};

export default ComingSoon;
