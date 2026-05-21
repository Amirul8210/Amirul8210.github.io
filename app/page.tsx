import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import ResearchInterests from "@/components/ResearchInterests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-primary">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Awards />
        <ResearchInterests />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
