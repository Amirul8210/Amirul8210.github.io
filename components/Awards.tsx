"use client";

import { motion } from "framer-motion";
import { FiAward, FiStar } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

const achievements = [
  {
    title: "1st Runners Up in Software Engineering",
    event: "UIU Project Show",
    description: "Awarded for exceptional design, robust backend architecture, and problem-solving capability in a competitive university-wide software engineering project showcase.",
    icon: <FiAward size={32} className="text-[#fbbf24]" />,
    color: "from-[#fbbf24]/20 to-transparent",
    borderColor: "border-[#fbbf24]/30"
  },
  {
    title: "2nd Runners Up in Final Year Design Project – 1",
    event: "UIU Project Show",
    description: "Recognized for innovative approach and technical implementation of a complex design project, showcasing strong research and development skills.",
    icon: <FiStar size={32} className="text-accent-secondary" />,
    color: "from-accent-secondary/20 to-transparent",
    borderColor: "border-accent-secondary/30"
  }
];

export default function Awards() {
  return (
    <SectionWrapper id="awards">
      <div className="flex items-center gap-4 mb-12 flex-row-reverse">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Awards & Achievements</h2>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievement, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className={`glass-card p-8 rounded-2xl relative overflow-hidden group border ${achievement.borderColor}`}
          >
            {/* Background Glow */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${achievement.color} rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              <div className="bg-primary/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                {achievement.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">
                {achievement.title}
              </h3>
              <p className="text-accent-primary font-mono text-sm mb-4">{achievement.event}</p>
              <p className="text-text-secondary leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
