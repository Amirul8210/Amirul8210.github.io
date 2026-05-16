"use client";

import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

export default function GitHubStats() {
  const username = "Amirul8210";
  const theme = "radical"; // Dark theme that fits well

  return (
    <SectionWrapper id="github">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
          <FiGithub /> GitHub Activity
        </h2>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-4 rounded-2xl flex items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&hide_border=true&bg_color=0a0a0f`} 
            alt="GitHub Stats" 
            className="w-full max-w-md h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-4 rounded-2xl flex items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&hide_border=true&bg_color=0a0a0f`} 
            alt="Top Languages" 
            className="w-full max-w-md h-auto"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 glass-card p-4 rounded-2xl overflow-hidden overflow-x-auto flex justify-center"
      >
         {/* eslint-disable-next-line @next/next/no-img-element */}
         <img 
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=${theme}&hide_border=true&bg_color=0a0a0f`} 
            alt="Contribution Graph" 
            className="w-full h-auto min-w-[600px]"
          />
      </motion.div>
    </SectionWrapper>
  );
}
