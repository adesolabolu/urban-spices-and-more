import { motion } from 'motion/react';
import { Menu as MenuIcon, X, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { BRAND, ASSETS } from '../assets';
import { useCart } from '../CartContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setIsCartOpen, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
           <img src={ASSETS.logo.preview} alt="Urban Spices and More Logo" className="h-10 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-charcoal hover:text-brand-red transition-colors font-display"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-charcoal hover:text-brand-red transition-colors"
          >
            <ShoppingBag size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-red text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red/10 text-brand-red hover:bg-brand-red hover:text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 font-display"
          >
            Reserve Table
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-onyx relative p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {totalItems > 0 && !mobileMenuOpen && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-brand-red text-white text-[9px] font-bold flex items-center justify-center rounded-full z-10 pointer-events-none">
                {totalItems}
              </span>
          )}
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-xl"
        >
          <div className="flex flex-col gap-4">
            <button
               onClick={() => {
                 setMobileMenuOpen(false);
                 setIsCartOpen(true);
               }}
               className="flex items-center gap-2 text-lg font-display font-medium text-onyx hover:text-brand-red"
            >
               <ShoppingBag size={20} />
               View Cart ({totalItems})
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-display font-medium text-onyx hover:text-brand-red"
              >
                {link.name}
              </a>
            ))}
            <a
              href={BRAND.whatsappUrl}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-brand-red/10 text-brand-red text-center text-cream px-6 py-3 rounded-full text-sm font-bold mt-4"
            >
              Reserve Table
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
