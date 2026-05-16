"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Education & Journey</h2>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>

      <div className="relative border-l border-white/20 ml-4 md:ml-6 space-y-12 pb-8">
        
        {/* Timeline Item 1 */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative pl-8 md:pl-12"
        >
          <div className="absolute -left-4 md:-left-5 top-1 bg-primary border-2 border-accent-primary w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            <FiBookOpen className="text-accent-primary w-4 h-4 md:w-5 md:h-5" />
          </div>
          
          <div className="glass-card p-6 md:p-8 rounded-2xl hover:-translate-y-1 transition-transform">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-white">United International University</h3>
              <span className="text-accent-secondary font-mono text-sm mt-2 md:mt-0 bg-accent-secondary/10 px-3 py-1 rounded-full w-fit">Current</span>
            </div>
            <h4 className="text-lg text-accent-violet mb-2">Bachelor in Computer Science and Engineering</h4>
            <p className="text-text-primary text-xl font-bold mb-4">CGPA: <span className="text-accent-green">3.78</span></p>
            <p className="text-text-secondary leading-relaxed">
              Focusing on core computer science fundamentals, backend system design, networking, and artificial intelligence. 
              Active participant in project showcases, continuously demonstrating applied technical skills.
            </p>
          </div>
        </motion.div>

        {/* Timeline Item 2 */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative pl-8 md:pl-12"
        >
          <div className="absolute -left-4 md:-left-5 top-1 bg-primary border-2 border-white/20 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center">
            <FiAward className="text-text-secondary w-4 h-4 md:w-5 md:h-5" />
          </div>
          
          <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-white">Higher Secondary Certificate (HSC)</h3>
              <span className="text-text-secondary font-mono text-sm mt-2 md:mt-0">Graduated</span>
            </div>
            <p className="text-text-primary text-xl font-bold mb-2">GPA: <span className="text-white">4.85</span></p>
            <p className="text-text-secondary leading-relaxed">
              Science background with a strong emphasis on Mathematics and Physics, laying the groundwork for a career in engineering and computer science.
            </p>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
