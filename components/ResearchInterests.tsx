"use client";

import { motion } from "framer-motion";
import { FiCpu, FiShield, FiGlobe, FiShare2 } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

const interests = [
  {
    title: "Artificial Intelligence",
    description: "Exploring Natural Language Processing (NLP), deep learning models, and efficient inference techniques for backend systems.",
    icon: <FiCpu size={24} className="text-[#10b981]" />
  },
  {
    title: "Cybersecurity",
    description: "Researching intrusion detection systems, secure API design, and network vulnerability analysis.",
    icon: <FiShield size={24} className="text-[#ef4444]" />
  },
  {
    title: "Distributed Systems",
    description: "Studying consensus algorithms, microservice architecture patterns, and high-availability database replication.",
    icon: <FiShare2 size={24} className="text-accent-primary" />
  },
  {
    title: "Software Defined Networking",
    description: "Investigating programmable networks, traffic optimization, and automated infrastructure deployment.",
    icon: <FiGlobe size={24} className="text-accent-secondary" />
  }
];

export default function ResearchInterests() {
  return (
    <SectionWrapper id="research">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Research Interests</h2>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interests.map((interest, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative glass-card p-6 rounded-xl border border-white/5 h-full flex flex-col hover:border-white/20 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/50 rounded-lg border border-white/10">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-accent-primary transition-colors">{interest.title}</h3>
              </div>
              <p className="text-text-secondary leading-relaxed flex-1">
                {interest.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
