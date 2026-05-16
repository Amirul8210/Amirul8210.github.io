"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode, FiServer, FiShield } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    id: "hireme",
    title: "HireMe",
    type: "Featured Project",
    description: "A comprehensive recruitment and talent acquisition platform designed to streamline the hiring process. Built with a robust backend architecture, it handles user authentication, job postings, application tracking, and profile management seamlessly.",
    problemStatement: "The traditional hiring process is fragmented, requiring recruiters to use multiple platforms for posting, tracking, and communicating with candidates.",
    technologies: ["Python", "Flask", "MySQL", "SQLAlchemy", "REST API", "Tailwind CSS"],
    role: "Lead Backend Developer",
    impact: "Reduced application tracking time by 40% through centralized dashboard and optimized database queries.",
    github: "https://github.com/Knocktern/HireMe",
    link: "#",
    icon: <FiServer size={20} className="text-accent-primary" />
  },
  {
    id: "sentinel",
    title: "Sentinel Network Monitor",
    type: "Security Project",
    description: "An automated network traffic analyzer and anomaly detection system. It captures packets, analyzes them for suspicious patterns, and alerts administrators of potential intrusions.",
    problemStatement: "Small networks lack affordable, easy-to-deploy intrusion detection systems with real-time alerting.",
    technologies: ["Python", "Scapy", "FastAPI", "Docker", "ELK Stack"],
    role: "Security & Backend Developer",
    impact: "Successfully detected simulated DDoS and port scanning attacks with 95% accuracy in testing environments.",
    github: "https://github.com/Amirul8210/sentinel",
    link: "#",
    icon: <FiShield size={20} className="text-[#ef4444]" />
  },
  {
    id: "auto-deployer",
    title: "KubeDeploy Automation",
    type: "DevOps Project",
    description: "A lightweight CI/CD pipeline script and Kubernetes configuration generator that takes a GitHub repo and automatically containerizes and deploys it to a local K3s cluster.",
    problemStatement: "Developers spend too much time writing boilerplate Dockerfiles and Kubernetes manifests for simple microservices.",
    technologies: ["Bash", "Docker", "Kubernetes", "GitHub Actions", "Python"],
    role: "DevOps Engineer",
    impact: "Cut down deployment setup time for new microservices from hours to under 5 minutes.",
    github: "https://github.com/Amirul8210/kube-deploy",
    link: "#",
    icon: <FiCode size={20} className="text-accent-secondary" />
  },
  {
    id: "ai-doc-analyzer",
    title: "NeuroDoc AI",
    type: "AI Research Project",
    description: "An intelligent document parsing system that extracts key entities, summarizes long reports, and categorizes documents using fine-tuned transformer models.",
    problemStatement: "Manual extraction of specific data points from hundreds of research PDFs is extremely time-consuming and error-prone.",
    technologies: ["Python", "PyTorch", "HuggingFace", "FastAPI", "React"],
    role: "AI/ML Researcher & API Developer",
    impact: "Processed 500+ PDFs in under 10 minutes, extracting relevant metadata with an F1 score of 0.89.",
    github: "https://github.com/Amirul8210/neurodoc-ai",
    link: "#",
    icon: <FiCode size={20} className="text-[#10b981]" />
  }
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>

      <div className="space-y-16">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col lg:flex-row gap-8 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Project "Image" / Visual Representation */}
            <div className="w-full lg:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden relative group glass-card border border-white/10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent z-10" />
              <div className={`w-32 h-32 rounded-full blur-3xl absolute opacity-20 ${
                idx === 0 ? 'bg-accent-primary' : 
                idx === 1 ? 'bg-[#ef4444]' : 
                idx === 2 ? 'bg-accent-secondary' : 'bg-[#10b981]'
              }`} />
              <div className="relative z-20 flex flex-col items-center gap-4 transform group-hover:scale-110 transition-transform duration-500">
                <div className="p-4 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10">
                  {project.icon}
                </div>
                <span className="font-mono text-xl font-bold text-white tracking-widest">{project.title.toUpperCase()}</span>
              </div>
            </div>

            {/* Project Info */}
            <div className={`w-full lg:w-1/2 space-y-6 ${idx % 2 !== 0 ? 'lg:text-right' : ''}`}>
              <div>
                <p className="text-accent-primary font-mono text-sm mb-2">{project.type}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-text-secondary text-sm md:text-base leading-relaxed relative z-20 shadow-xl">
                <p>{project.description}</p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p><strong className="text-white">Role:</strong> {project.role}</p>
                  <p className="mt-2"><strong className="text-white">Impact:</strong> {project.impact}</p>
                </div>
              </div>

              <ul className={`flex flex-wrap gap-3 font-mono text-xs text-text-secondary ${idx % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                {project.technologies.map((tech) => (
                  <li key={tech} className="px-3 py-1 bg-white/5 rounded-full border border-white/5">{tech}</li>
                ))}
              </ul>

              <div className={`flex items-center gap-4 ${idx % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-white transition-colors"
                  aria-label="GitHub Repository"
                >
                  <FiGithub size={24} />
                </a>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-secondary transition-colors"
                  aria-label="External Link"
                >
                  <FiExternalLink size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
