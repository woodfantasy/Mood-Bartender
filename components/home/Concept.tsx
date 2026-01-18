import React, { useRef, useEffect, useState } from 'react';

export const Concept: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0.2);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate percentage of element visible in center of screen
      const center = windowHeight / 2;
      const elementCenter = rect.top + (rect.height / 2);
      const distance = Math.abs(center - elementCenter);
      const maxDistance = windowHeight / 2;
      
      let newOpacity = 1 - (distance / maxDistance);
      // Clamp opacity
      newOpacity = Math.max(0.1, Math.min(1, newOpacity));
      
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-midnight py-24">
      <div 
        ref={containerRef}
        className="max-w-4xl mx-auto px-6 text-center transition-opacity duration-300 ease-out"
        style={{ opacity }}
      >
        <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-platinum leading-relaxed">
          "What are you drinking? That’s the wrong question.
          <br />
          <span className="text-amber-500 italic relative inline-block mt-4">
            How are you feeling?
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-amber-500/50 transform scale-x-50"></span>
          </span>
          <br />
          <span className="text-2xl md:text-4xl text-platinum-dim mt-4 block">That’s where we start."</span>
        </p>
      </div>
    </section>
  );
};