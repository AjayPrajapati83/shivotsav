import Navbar from '../components/Navbar';
import { Hero } from '../components/Hero/Hero';
import About from '../components/About';
import { Podium } from '../components/Podium';
import { Events } from '../components/Events/Events';
import { Schedule } from '../components/Schedule/Schedule';
import { Team } from '../components/Team/Team';
import { Sponsors } from '../components/Sponsors/Sponsors';
import Footer from '../components/Footer';

export function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Podium />
      <Events />
      <Schedule />
      <Team />
      <Sponsors />
      <Footer />
    </main>
  );
}

export default HomePage;
