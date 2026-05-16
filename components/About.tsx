"use client";

import { FiTerminal, FiFolder, FiCpu, FiGlobe } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        
        {/* Text Content */}
        <div className="lg:col-span-3 space-y-6 text-text-secondary text-lg leading-relaxed">
          <p>
            Hello! I&apos;m <span className="text-accent-secondary font-medium">Khandaker Amirul Islam</span>, a dedicated Computer Science and Engineering student with a strong problem-solving mindset. 
            My journey into tech started with a curiosity about how systems communicate, which naturally drew me towards backend engineering and networking.
          </p>
          <p>
            I specialize in the <span className="text-accent-primary font-medium">Python ecosystem</span>, crafting robust APIs and scalable backend architectures using Flask and FastAPI. 
            Beyond just writing code, I am deeply interested in the operational side of software—specifically DevOps, cloud automation, and infrastructure engineering.
          </p>
          <p>
            My academic and professional pursuits also extend into <span className="text-accent-violet font-medium">AI and Cybersecurity</span>. 
            I actively participate in research-oriented software projects and competitive project showcases, continuously pushing the boundaries of my knowledge to build secure, scalable, and intelligent systems.
          </p>
          
          <div className="pt-6 grid grid-cols-2 gap-4 font-mono text-sm">
            <div className="flex items-center gap-2">
              <FiTerminal className="text-accent-green" />
              <span>Backend Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCpu className="text-accent-primary" />
              <span>AI Research</span>
            </div>
            <div className="flex items-center gap-2">
              <FiGlobe className="text-accent-secondary" />
              <span>Cloud & DevOps</span>
            </div>
            <div className="flex items-center gap-2">
              <FiFolder className="text-accent-violet" />
              <span>System Security</span>
            </div>
          </div>
        </div>

        {/* Terminal/Visual Element */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center gap-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/profile.jpg" 
            alt="Khandaker Amirul Islam" 
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white/10 shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:scale-105 transition-transform duration-500" 
          />
          <div className="w-full max-w-md rounded-xl overflow-hidden glass border border-white/10 shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-[#1a1a24] px-4 py-3 flex items-center gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 text-xs text-text-secondary font-mono">amirul@workspace: ~</span>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm bg-primary/80">
              <div className="mb-4">
                <span className="text-accent-green">➜</span>{" "}
                <span className="text-accent-secondary">~</span>{" "}
                <span className="text-white">cat profile.json</span>
              </div>
              <pre className="text-text-secondary overflow-x-auto">
                <code className="language-json">
{`{
  "name": "Khandaker Amirul Islam",
  "education": "B.Sc. in CSE",
  "university": "United International Uni.",
  "cgpa": 3.78,
  "interests": [
    "Backend Systems",
    "DevOps Automation",
    "Artificial Intelligence",
    "Network Security"
  ],
  "status": "Ready for new challenges"
}`}
                </code>
              </pre>
              <div className="mt-4 flex items-center">
                <span className="text-accent-green">➜</span>{" "}
                <span className="text-accent-secondary">~</span>{" "}
                <span className="w-2 h-4 bg-white/50 ml-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
