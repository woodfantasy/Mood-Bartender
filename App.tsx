import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>(PageView.HOME);

  return (
    <div className="bg-midnight min-h-screen text-platinum antialiased selection:bg-amber-900 selection:text-white">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main className="min-h-screen">
        {currentPage === PageView.HOME ? (
          <HomePage />
        ) : (
          <PrivacyPage onNavigate={setCurrentPage} />
        )}
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;