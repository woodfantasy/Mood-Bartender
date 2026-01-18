import React from 'react';
import { Smartphone, Feather, GlassWater, Moon } from 'lucide-react';

const Card: React.FC<{ children: React.ReactNode; className?: string; title: string; subtitle?: string }> = ({ 
  children, 
  className = "", 
  title,
  subtitle 
}) => (
  <div className={`relative bg-midnight-light border border-white/5 overflow-hidden group hover:border-amber-500/30 transition-colors duration-500 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    
    <div className="p-8 h-full flex flex-col relative z-10">
      <div className="mb-4 text-amber-600/80">
        {subtitle}
      </div>
      <h3 className="font-serif text-2xl text-platinum mb-4">{title}</h3>
      <div className="flex-grow">
        {children}
      </div>
    </div>
  </div>
);

export const BentoGrid: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-midnight">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
           <h2 className="font-serif text-3xl md:text-4xl text-platinum">The Experience</h2>
           <div className="w-12 h-[1px] bg-amber-600 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          
          {/* Grid 1: Mood First (Large) */}
          <Card 
            title="Mood-First Mixology" 
            subtitle="The Selector"
            className="md:col-span-2 md:row-span-2 min-h-[500px]"
          >
            <p className="text-platinum-dim mb-8 font-light leading-relaxed max-w-md">
              <span className="text-white font-medium">Stop Scrolling.</span> Tell us how you feel. From a "Warm Embrace" to a "Sharp Awakening," find the spirit that fits your story.
            </p>
            {/* Abstract UI representation */}
            <div className="w-full h-64 bg-black/40 rounded border border-white/5 relative flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://picsum.photos/800/600?grayscale')] opacity-20 bg-cover bg-center"></div>
               <div className="flex gap-4 items-center z-10">
                  <div className="px-6 py-2 bg-white/5 backdrop-blur border border-white/10 rounded-full text-xs uppercase tracking-widest text-amber-500">Nostalgic</div>
                  <div className="px-8 py-3 bg-amber-900/20 backdrop-blur border border-amber-500/50 rounded-full text-sm uppercase tracking-widest text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]">Melancholy</div>
                  <div className="px-6 py-2 bg-white/5 backdrop-blur border border-white/10 rounded-full text-xs uppercase tracking-widest text-zinc-400">Energetic</div>
               </div>
            </div>
          </Card>

          {/* Grid 2: Tasting Notes (Tall) */}
          <Card 
            title="Professional Tasting Notes" 
            subtitle="The Knowledge"
            className="md:col-span-1 md:row-span-2"
          >
            <div className="space-y-8 mt-4 font-serif">
               <div className="group/item">
                  <div className="text-xs uppercase tracking-widest text-amber-700 mb-1 group-hover/item:text-amber-500 transition-colors">Nose</div>
                  <p className="text-platinum-dim italic">The initial aroma. Leather, peat, and dried figs.</p>
               </div>
               <div className="w-full h-[1px] bg-white/5" />
               <div className="group/item">
                  <div className="text-xs uppercase tracking-widest text-amber-700 mb-1 group-hover/item:text-amber-500 transition-colors">Palate</div>
                  <p className="text-platinum-dim italic">The dance of flavors. Dark chocolate meets sea salt.</p>
               </div>
               <div className="w-full h-[1px] bg-white/5" />
               <div className="group/item">
                  <div className="text-xs uppercase tracking-widest text-amber-700 mb-1 group-hover/item:text-amber-500 transition-colors">Finish</div>
                  <p className="text-platinum-dim italic">The lingering resonance. Warm, spicy, eternal.</p>
               </div>
            </div>
          </Card>

          {/* Grid 3: Curated Recipes */}
          <Card 
            title="Curated Recipes" 
            subtitle="The Collection"
            className="md:col-span-2 group"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
               <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-white/10 shrink-0">
                  <img src="https://picsum.photos/400/400?grayscale" alt="Cocktail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               </div>
               <div>
                  <p className="text-platinum-dim font-light">
                     <strong className="text-amber-500 block mb-2">Verified for Taste.</strong> 
                     High-quality staples and modern twists. Every measurement precise, every ingredient essential.
                  </p>
               </div>
            </div>
          </Card>

          {/* Grid 4: Aesthetic */}
          <Card 
            title="Digital Speakeasy" 
            subtitle="The Vibe"
            className="md:col-span-1 bg-black text-center flex flex-col justify-center items-center"
          >
             <div className="mt-4 mb-6 relative">
                <Moon className="w-16 h-16 text-zinc-800" strokeWidth={1} />
                <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             </div>
             <p className="text-sm text-platinum-dim">Designed for the Night.</p>
          </Card>

        </div>
      </div>
    </section>
  );
};