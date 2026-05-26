import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <main className="min-h-screen bg-cream font-sans smooth-scroll">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Reviews />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

