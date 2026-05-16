"use client";

import { motion } from "framer-motion";
import { SiRust, SiGo, SiTerraform, SiGraphql } from "react-icons/si";
import SectionWrapper from "./SectionWrapper";

const learning = [
  { name: "Go (Golang)", icon: <SiGo color="#00ADD8" size={32} />, progress: 65, color: "bg-[#00ADD8]" },
  { name: "Rust", icon: <SiRust color="#DEA584" size={32} />, progress: 40, color: "bg-[#DEA584]" },
  { name: "Terraform", icon: <SiTerraform color="#844FBA" size={32} />, progress: 55, color: "bg-[#844FBA]" },
  { name: "GraphQL", icon: <SiGraphql color="#E10098" size={32} />, progress: 75, color: "bg-[#E10098]" },
];

export default function CurrentlyLearning() {
  return (
    <SectionWrapper id="learning">
      <div className="flex items-center gap-4 mb-12 flex-row-reverse">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Currently Learning</h2>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {learning.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center gap-4 group"
          >
            <div className="p-4 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
            
            <div className="w-full bg-primary/50 h-2 rounded-full overflow-hidden mt-2 border border-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                className={`h-full ${item.color} shadow-[0_0_10px_currentColor]`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
