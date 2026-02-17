import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import MouseGlow from './components/MouseGlow/MouseGlow';
import { useReveal } from './hooks/useReveal';

export default function App() {
  const revealRef = useReveal(0.1);

  return (
    <div ref={revealRef}>
      <MouseGlow />
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
