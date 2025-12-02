import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
        {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
          Ready to level up?
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Stop writing "vibe code". Start building engineered software with AI.
        </p>
        
        <a 
          href="https://github.com/byteforgeca/mindcontext-skills" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-bold text-lg transition-colors"
        >
          <Github className="w-5 h-5" />
          View on GitHub
          <ExternalLink className="w-4 h-4 ml-1 opacity-50" />
        </a>
      </div>
    </section>
  );
};

export default CTA;