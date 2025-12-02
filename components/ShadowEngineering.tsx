import React from 'react';
import { motion } from 'framer-motion';
import { Folder, FileText, FileCode, GitCommit, ArrowRight } from 'lucide-react';

const ShadowEngineering: React.FC = () => {
  return (
    <section className="py-20 bg-surface/50 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shadow Engineering</h2>
          <p className="text-xl text-gray-400">Keep AI chaos separate from production code</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 relative">
            
            {/* Connector Arrow for Desktop */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-surface border border-white/10 p-2 rounded-full text-gray-500">
               <ArrowRight className="w-6 h-6" />
            </div>

            {/* Shadow Realm */}
            <motion.div 
              initial={{ opacity: 0, rotateY: 10 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              className="bg-[#151515] border border-white/5 rounded-xl p-6 md:p-8 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <h3 className="font-mono text-cyan-400 font-bold flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-cyan-500/50 animate-pulse"></span>
                  SHADOW CONTEXT
                </h3>
                <span className="text-xs text-gray-600 uppercase tracking-widest font-bold">.project/</span>
              </div>
              
              <div className="space-y-4 font-mono text-sm flex-1">
                <div className="flex items-center gap-3 text-gray-500">
                    <Folder className="w-4 h-4 text-cyan-800" />
                    <span>.claude/</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500 pl-4">
                    <FileText className="w-4 h-4 text-cyan-900" />
                    <span>memory.md</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500 pl-4">
                    <FileText className="w-4 h-4 text-cyan-900" />
                    <span>prd.md</span>
                </div>
                
                 <div className="flex items-center gap-3 text-gray-500">
                    <Folder className="w-4 h-4 text-cyan-800" />
                    <span>prompts/</span>
                </div>
                
                 <div className="mt-6 p-4 rounded bg-black/40 border border-white/5 text-gray-400 italic">
                    "AI iterates here. It's messy, verbose, and full of context. This is the 'thinking' layer."
                 </div>
              </div>
            </motion.div>

            {/* Production Realm */}
            <motion.div 
              initial={{ opacity: 0, rotateY: -10 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 md:p-8 flex flex-col h-full shadow-2xl shadow-cyan-900/5"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <h3 className="font-mono text-green-400 font-bold flex items-center gap-2">
                   <span className="w-3 h-3 rounded-full bg-green-500"></span>
                   PRODUCTION CODE
                </h3>
                 <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">src/</span>
              </div>

              <div className="space-y-4 font-mono text-sm flex-1">
                 <div className="flex items-center gap-3 text-gray-300">
                    <Folder className="w-4 h-4 text-yellow-600" />
                    <span>src/</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 pl-4">
                    <FileCode className="w-4 h-4 text-blue-500" />
                    <span>App.tsx</span>
                </div>
                 <div className="flex items-center gap-3 text-gray-300 pl-4">
                    <FileCode className="w-4 h-4 text-blue-500" />
                    <span>utils.ts</span>
                </div>
                 <div className="flex items-center gap-3 text-gray-300">
                    <Folder className="w-4 h-4 text-yellow-600" />
                    <span>tests/</span>
                </div>

                 <div className="mt-6 p-4 rounded bg-green-950/20 border border-green-500/10">
                    <div className="flex items-center gap-2 text-green-400 mb-2 font-bold">
                        <GitCommit className="w-4 h-4" />
                        <span>Clean History</span>
                    </div>
                    <p className="text-gray-400">Only finished, tested code lands here. Your git history remains professional and readable.</p>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ShadowEngineering;