import React, { useState, useEffect } from 'react';
import { Github, BrainCircuit } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-white/10 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <BrainCircuit className="w-8 h-8 text-cyan-400" />
          <span>Mind<span className="text-cyan-400">Context</span></span>
        </div>
        
        <a 
          href="https://github.com/byteforgeca/mindcontext-skills" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm font-medium"
        >
          <Github className="w-4 h-4" />
          <span className="hidden sm:inline">Star on GitHub</span>
        </a>
      </div>
    </header>
  );
};

export default Header;