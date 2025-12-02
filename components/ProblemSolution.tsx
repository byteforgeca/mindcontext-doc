import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-red-950/10 border border-red-900/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 opacity-50"></div>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-red-500/10 text-red-400 mt-1">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">The AI Hangover</h3>
                <p className="text-gray-400 leading-relaxed">
                  You built something amazing with AI in record time. But now it's a mess. 
                  Features break other features. There are no tests. 
                  Your git history is absolute chaos.
                </p>
              </div>
            </div>
            <div className="pl-16 space-y-3 font-mono text-sm text-red-300/60">
              <div className="flex gap-2"><span>-</span> <span>feat: fix bug 34</span></div>
              <div className="flex gap-2"><span>-</span> <span>fix: actually fix it</span></div>
              <div className="flex gap-2"><span>-</span> <span>wip: please work</span></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-cyan-950/10 border border-cyan-900/20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 opacity-50"></div>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-400 mt-1">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Structure without Slowdown</h3>
                <p className="text-gray-400 leading-relaxed">
                  MindContext adds the missing layer of structure. It organizes your AI's context 
                  separately from your source code, keeping your workflow fast but your 
                  output professional.
                </p>
              </div>
            </div>
             <div className="pl-16 space-y-3 font-mono text-sm text-cyan-300/60">
              <div className="flex gap-2"><span>+</span> <span>feat: implement authentication</span></div>
              <div className="flex gap-2"><span>+</span> <span>test: auth flow coverage</span></div>
              <div className="flex gap-2"><span>+</span> <span>docs: update API spec</span></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;