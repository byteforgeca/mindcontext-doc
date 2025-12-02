import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ShadowEngineering from './components/ShadowEngineering';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-gray-100 overflow-x-hidden selection:bg-cyan-500/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <ProblemSolution />
          <ShadowEngineering />
          <HowItWorks />
          <Features />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;