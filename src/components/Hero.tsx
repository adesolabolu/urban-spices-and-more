import { motion } from 'motion/react';
import { ASSETS, BRAND } from '../assets';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-onyx text-cream pt-20">
      {/* Background Image layer with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={ASSETS.plates.eventSpread.preview}
          alt="Luxury spread"
          data-asset-name={ASSETS.plates.eventSpread.filename}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/80 via-onyx/60 to-onyx"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-cream/20 bg-cream/5 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
          <span className="text-xs font-sans tracking-widest uppercase text-cream/90">Premium Catering in Abuja</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-tight"
        >
          Elevate Your Event From <br className="hidden md:block"/> 
          <span className="italic text-brand-red font-light">Ordinary</span> to Unforgettable.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl font-light text-cream/80 max-w-2xl mx-auto"
        >
          High-end gastronomic presentations, bespoke grazing tables, and artisan platters curated for those who demand excellence in every bite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red text-white px-8 py-4 rounded-full text-base font-medium tracking-wide hover:bg-white hover:text-onyx transition-colors duration-300 w-full sm:w-auto"
          >
            Book Luxury Catering
          </a>
          <a
            href="#services"
            className="text-cream hover:text-brand-red border-b border-cream/30 pb-1 font-medium tracking-wide transition-colors w-max"
          >
            Explore the Menu
          </a>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "100px" }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-brand-red/0 via-brand-red to-brand-red"
      />
    </section>
  );
}
