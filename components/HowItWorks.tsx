import React from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles, Ship } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Download className="w-6 h-6 text-cyan-400" />,
      title: "Install",
      description: "Install the plugin directly into your Claude Code environment.",
      code: "/plugin install mindcontext-skills@byteforgeca"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-violet-400" />,
      title: "Initialize",
      description: "Set up the MindContext structure in your project root.",
      code: "Initialize MindContext in this project"
    },
    {
      icon: <Ship className="w-6 h-6 text-green-400" />,
      title: "Build & Ship",
      description: "Move from PRD to Task to Code with full context awareness.",
      code: "Create a new epic for user authentication"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
         <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-surface border border-white/5 p-6 rounded-xl hover:border-white/10 transition-colors group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 mb-6 min-h-[3rem]">{step.description}</p>
              <div className="bg-black rounded p-3 font-mono text-xs text-gray-300 border-l-2 border-cyan-500 overflow-x-auto whitespace-nowrap">
                <span className="text-cyan-600 mr-2">$</span>
                {step.code}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;