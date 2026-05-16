import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary/50 backdrop-blur-sm pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-xl font-bold font-mono tracking-tighter mb-2">
              <span className="text-accent-primary">&lt;</span>
              KAI
              <span className="text-accent-primary">/&gt;</span>
            </Link>
            <p className="text-text-secondary text-sm text-center md:text-left">
              Building scalable backend systems and researching AI.
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/Amirul8210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 text-text-secondary hover:text-white hover:bg-accent-primary/20 hover:border-accent-primary/50 border border-transparent transition-all"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/khandaker-amirul-islam-092aa9344/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 text-text-secondary hover:text-white hover:bg-accent-primary/20 hover:border-accent-primary/50 border border-transparent transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a 
              href="mailto:amirulislammahin@gmail.com" 
              className="p-2.5 rounded-full bg-white/5 text-text-secondary hover:text-white hover:bg-accent-primary/20 hover:border-accent-primary/50 border border-transparent transition-all"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} Khandaker Amirul Islam. All rights reserved.
          </p>
          <p className="text-xs text-text-secondary flex items-center gap-1">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
