import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-12 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg text-white mb-1">MindContext</h4>
            <p className="text-sm text-gray-500">Shadow Engineering by MindContext.io</p>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="https://github.com/byteforgeca" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="https://mindcontext.substack.com" className="hover:text-cyan-400 transition-colors">Substack</a>
            <a href="https://byteforge.ca" className="hover:text-cyan-400 transition-colors">ByteForge.ca</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          © 2025 ByteForge. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;