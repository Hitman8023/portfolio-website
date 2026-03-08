import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0806] text-slate-100 selection:bg-orange-400/30">
      <CustomCursor />
      <div className="bg-orb pointer-events-none" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
