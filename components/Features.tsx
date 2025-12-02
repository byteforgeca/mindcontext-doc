import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Layers, Box } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "4 Specialized Agents",
      desc: "Switch hats instantly: Product Manager, Architect, Developer, and QA agents ensure no angle is missed."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Natural Language",
      desc: "Stop wrestling with rigid prompts. Just describe what you want in plain English and let MindContext structure it."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Shadow Engineering",
      desc: "Keep your experimental prompts and iterative mess hidden in the shadow layer, committing only clean code."
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "BMAD Methodology",
      desc: "Built on the Brief-Mission-Architecture-Development framework for structured, scalable AI engineering."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-900/50 to-violet-900/50 flex items-center justify-center mb-4 text-cyan-300 group-hover:text-white group-hover:scale-110 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-100 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;