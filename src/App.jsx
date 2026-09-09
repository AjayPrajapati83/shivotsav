import Navbar from './components/Navbar';
import { Hero } from './components/Hero/Hero';
import About from './components/About';
import { Events } from './components/Events/Events';
import { Schedule } from './components/Schedule/Schedule';
import { Team } from './components/Team/Team';
import { Sponsors } from './components/Sponsors/Sponsors';
import Footer from './components/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  // Initialize Lenis smooth scroll + GSAP ScrollTrigger sync
  useSmoothScroll();

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Schedule />
      <Team />
      <Sponsors />
      <Footer />
    </main>
  );
}

export default App;
