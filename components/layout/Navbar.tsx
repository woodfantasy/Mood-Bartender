import React, { useEffect, useState } from 'react';
import { PageView, NavigationProps } from '../../types';
import { Wine } from 'lucide-react';

export const Navbar: React.FC<NavigationProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-700 ${scrolled ? 'bg-midnight/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => onNavigate(PageView.HOME)}
          className="flex items-center gap-3 group opacity-90 hover:opacity-100 transition-opacity"
        >
          <Wine className="w-5 h-5 text-amber-600" />
          <span className="font-serif text-lg tracking-widest text-platinum uppercase">Mood Bartender</span>
        </button>

        <div className="flex items-center gap-6">
          {currentPage !== PageView.HOME && (
             <button 
             onClick={() => onNavigate(PageView.HOME)}
             className="text-xs text-platinum-dim hover:text-amber-500 transition-colors uppercase tracking-widest font-sans"
           >
             Return Home
           </button>
          )}
        </div>
      </div>
    </nav>
  );
};