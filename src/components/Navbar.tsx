import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { BRAND } from '../assets';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Offerings', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'The Founder', href: '#about' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2 group">
           {/* Logo Container mapped to asset */}
           <div 
             className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white font-serif font-bold italic text-xl group-hover:bg-onyx transition-colors"
             data-asset-ref="Logo Asset"
             data-asset-name="ubslogo.PNG"
           >
             U
           </div>
           <div className="flex flex-col">
             <span className="font-serif font-bold text-xl tracking-tight text-onyx leading-none uppercase">Urban</span>
             <span className="font-sans text-[10px] tracking-widest text-charcoal/70 uppercase">Spices & More</span>
           </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium tracking-wide text-onyx hover:text-brand-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red text-cream px-6 py-2.5 rounded-full text-sm font-medium tracking-wide hover:bg-onyx transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Order Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-onyx"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-cream border-t border-onyx/10 p-6 shadow-xl"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-onyx"
              >
                {link.name}
              </a>
            ))}
            <a
              href={BRAND.whatsappUrl}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-brand-red text-center text-cream px-6 py-3 rounded-full text-sm font-bold tracking-wide"
            >
              Order Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
