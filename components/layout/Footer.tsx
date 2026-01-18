import React from 'react';
import { PageView } from '../../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-midnight border-t border-white/5 py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-platinum mb-4">Distill your moment.</h2>
        <p className="text-platinum-dim tracking-[0.2em] text-sm uppercase mb-12">Start clean and keep going.</p>
        
        <button 
          onClick={() => window.open('https://apps.apple.com/app/id6757968626', '_blank')}
          className="bg-amber-700/20 hover:bg-amber-700/30 text-amber-500 border border-amber-700/50 px-8 py-4 rounded-sm transition-all duration-300 mb-16 uppercase tracking-widest text-xs"
        >
          Download App
        </button>

        <div className="flex justify-center gap-8 text-xs tracking-widest uppercase text-zinc-600">
          <a 
            href="mailto:woodfantasy@gmail.com"
            className="hover:text-amber-500 transition-colors"
          >
            Contact Support
          </a>
          <button 
            onClick={() => onNavigate(PageView.PRIVACY)}
            className="hover:text-amber-500 transition-colors"
          >
            Privacy Policy
          </button>
          <span className="text-zinc-800">© 2026 Mood Bartender</span>
        </div>
      </div>
    </footer>
  );
};