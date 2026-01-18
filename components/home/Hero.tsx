import React, { useEffect, useState } from 'react';
import { Button } from '../Button';

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with heavy overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Atmospheric bar background" 
          className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_8s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/80 to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-transparent to-midnight" />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 transform ${loaded ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-lg translate-y-10'}`}>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-platinum mb-6 leading-tight">
          Don’t just drink—
          <span className="italic text-amber-500/90 text-glow block mt-2">feel.</span>
        </h1>
        
        <p className="font-sans text-platinum-dim text-sm md:text-lg tracking-[0.2em] uppercase mb-12 max-w-2xl mx-auto border-l border-r border-amber-900/30 px-6 py-2">
          Mood Bartender pairs your state of mind with the perfect cocktail.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
           <Button onClick={() => window.open('https://apps.apple.com/app/id6757968626', '_blank')}>
              Download on App Store
           </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-platinum to-transparent" />
      </div>
    </section>
  );
};