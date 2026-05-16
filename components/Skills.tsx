"use client";

import { motion } from "framer-motion";
import { 
  SiPython, SiFastapi, SiFlask, SiMysql, SiPostgresql, 
  SiLinux, SiGit, SiGithub, SiDocker, SiKubernetes, 
  SiTensorflow, SiPytorch, SiGnubash 
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FiDatabase, FiServer, FiShield, FiCpu, FiCloud, FiCode } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

const skillCategories = [
  {
    title: "Backend Development",
    icon: <FiServer className="text-accent-primary" size={24} />,
    skills: [
      { name: "Python", icon: <SiPython color="#3776AB" /> },
      { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
      { name: "Flask", icon: <SiFlask color="#ffffff" /> },
      { name: "REST APIs", icon: <FiCode color="#6366f1" /> },
    ]
  },
  {
    title: "Database Management",
    icon: <FiDatabase className="text-accent-secondary" size={24} />,
    skills: [
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      { name: "Redis", icon: <FiDatabase color="#DC382D" /> },
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: <FiCloud className="text-accent-violet" size={24} />,
    skills: [
      { name: "Docker", icon: <SiDocker color="#2496ED" /> },
      { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" /> },
      { name: "AWS", icon: <FaAws color="#232F3E" /> },
      { name: "CI/CD", icon: <SiGit color="#F05032" /> },
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: <FiCpu className="text-[#10b981]" size={24} />,
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
      { name: "PyTorch", icon: <SiPytorch color="#EE4C2C" /> },
      { name: "Data Processing", icon: <FiCpu color="#10b981" /> },
    ]
  },
  {
    title: "OS & Tools",
    icon: <FiCode className="text-[#f59e0b]" size={24} />,
    skills: [
      { name: "Linux", icon: <SiLinux color="#FCC624" /> },
      { name: "Bash Scripting", icon: <SiGnubash color="#4EAA25" /> },
      { name: "Git", icon: <SiGit color="#F05032" /> },
      { name: "GitHub", icon: <SiGithub color="#ffffff" /> },
    ]
  },
  {
    title: "Cybersecurity & Net",
    icon: <FiShield className="text-[#ef4444]" size={24} />,
    skills: [
      { name: "Network Config", icon: <FiShield color="#ef4444" /> },
      { name: "Security Protocols", icon: <FiShield color="#ef4444" /> },
      { name: "Pen Testing (Basic)", icon: <FiShield color="#ef4444" /> },
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="flex items-center gap-4 mb-12 flex-row-reverse">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Expertise</h2>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-center gap-2">
                  <span className="text-lg opacity-80 group-hover:opacity-100 transition-opacity">{skill.icon}</span>
                  <span className="text-sm text-text-secondary font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
