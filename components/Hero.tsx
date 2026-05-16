"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiArrowRight, FiDownload } from "react-icons/fi";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <ParticleBackground />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accent-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-accent-secondary font-mono text-lg mb-4 flex items-center justify-center md:justify-start gap-2">
              <span className="w-8 h-[1px] bg-accent-secondary hidden md:block"></span>
              Hi, my name is
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
              Khandaker <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-violet">Amirul Islam.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-20 sm:h-12"
          >
            <h3 className="text-2xl md:text-3xl text-text-secondary font-medium">
              I am a{" "}
              <TypeAnimation
                sequence={[
                  "Backend Developer.",
                  2000,
                  "DevOps Enthusiast.",
                  2000,
                  "AI Researcher.",
                  2000,
                  "Security Analyst.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white font-semibold"
              />
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-text-secondary text-lg max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            Computer Science student deeply passionate about building robust backend architectures, 
            cloud infrastructure, and exploring the frontiers of Artificial Intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 bg-accent-primary hover:bg-accent-violet text-white font-medium rounded-lg transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transform hover:-translate-y-1"
            >
              View Projects <FiArrowRight />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium rounded-lg transition-all transform hover:-translate-y-1"
            >
              Resume <FiDownload />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center justify-center md:justify-start gap-6 pt-8"
          >
            <a 
              href="https://github.com/Amirul8210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-white hover:scale-110 transition-all"
            >
              <FiGithub size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/khandaker-amirul-islam-092aa9344/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-[#0a66c2] hover:scale-110 transition-all"
            >
              <FiLinkedin size={28} />
            </a>
          </motion.div>
        </div>

        {/* Decorative Element Right Side (Hidden on mobile) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block flex-1 relative h-[500px]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Minimalist Tech Ring representation */}
            <div className="relative w-80 h-80 border border-white/10 rounded-full animate-[spin_60s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary border border-white/10 rounded-full flex items-center justify-center text-accent-secondary font-mono text-xs shadow-[0_0_15px_rgba(6,182,212,0.3)]">Py</div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-primary border border-white/10 rounded-full flex items-center justify-center text-accent-green font-mono text-xs shadow-[0_0_15px_rgba(16,185,129,0.3)]">Go</div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary border border-white/10 rounded-full flex items-center justify-center text-[#e34c26] font-mono text-xs shadow-[0_0_15px_rgba(227,76,38,0.3)]">Git</div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary border border-white/10 rounded-full flex items-center justify-center text-[#2496ed] font-mono text-xs shadow-[0_0_15px_rgba(36,150,237,0.3)]">Dkr</div>
            </div>
            <div className="absolute w-56 h-56 border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]">
              <div className="absolute top-1/4 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary border border-white/10 rounded-full flex items-center justify-center text-accent-violet font-mono text-xs shadow-[0_0_15px_rgba(139,92,246,0.3)]">ML</div>
              <div className="absolute bottom-1/4 right-0 translate-x-1/2 translate-y-1/2 w-10 h-10 bg-primary border border-white/10 rounded-full flex items-center justify-center text-accent-primary font-mono text-xs shadow-[0_0_15px_rgba(99,102,241,0.3)]">API</div>
            </div>
            <div className="absolute w-32 h-32 bg-gradient-to-tr from-accent-primary to-accent-violet rounded-full opacity-20 blur-xl animate-pulse" />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-secondary uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-text-secondary to-transparent" />
      </motion.div>
    </section>
  );
}
