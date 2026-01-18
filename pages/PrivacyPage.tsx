import React, { useEffect } from 'react';
import { PageView } from '../types';

export const PrivacyPage: React.FC<{ onNavigate: (page: PageView) => void }> = ({ onNavigate }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-midnight pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl text-platinum mb-12">Privacy Policy</h1>
        
        <div className="space-y-8 text-platinum-dim font-sans font-light leading-relaxed">
          <section>
            <h2 className="text-amber-600 uppercase tracking-widest text-sm mb-4">1. Data Collection</h2>
            <p>
              Mood Bartender operates on a fundamental principle of digital privacy. We do not require account registration to use the core features of the application.
            </p>
          </section>

          <section>
            <h2 className="text-amber-600 uppercase tracking-widest text-sm mb-4">2. The "Speakeasy" Protocol</h2>
            <p className="text-lg text-platinum border-l-2 border-amber-900/30 pl-4 py-2 my-6">
              We do not track your mood history. Your state of mind stays on your device.
            </p>
            <p>
              Just as a good bartender keeps your secrets, our application processes your mood selections locally. No personal emotional data is uploaded to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-amber-600 uppercase tracking-widest text-sm mb-4">3. Analytics</h2>
            <p>
              We collect anonymous usage data solely to improve the stability and performance of the application. This data cannot be traced back to individual users or specific mood entries.
            </p>
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5">
          <button 
            onClick={() => onNavigate(PageView.HOME)}
            className="text-zinc-500 hover:text-amber-500 uppercase tracking-widest text-xs transition-colors"
          >
            ← Back to the Bar
          </button>
        </div>
      </div>
    </div>
  );
};