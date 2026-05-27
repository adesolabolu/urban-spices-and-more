import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CartProvider } from './CartContext';
import { Cart } from './components/Cart';
import { Toast } from './components/Toast';

export default function App() {
  return (
    <CartProvider>
      <main className="min-h-screen bg-cream font-sans smooth-scroll relative">
        <Navbar />
        <Hero />
        <Menu />
        <About />
        <Reviews />
        <Location />
        <Footer />
        <FloatingWhatsApp />
        <Cart />
        <Toast />
      </main>
    </CartProvider>
  );
}

