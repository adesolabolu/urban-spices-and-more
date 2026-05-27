import { motion } from 'motion/react';
import { ASSETS, BRAND } from '../assets';
import { Search } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#FFFDF8] overflow-hidden pt-28 pb-16">
      
      {/* Decorative background dots/squiggles can be simulated with SVG or CSS grid later, keeping it clean for now */}
      <div className="absolute top-32 left-10 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNkMWQ1ZGIiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Content Area */}
        <div className="relative z-10 space-y-8 max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-onyx leading-[1.15]"
          >
            We Serve The <br/><span className="text-brand-red">Taste</span> You Love 😋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-charcoal font-sans text-lg md:text-xl leading-relaxed"
          >
            A premium catering experience that goes beyond simply serving food. Elevate your events with high-end gastronomic presentations and artisan platters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#menu"
              className="bg-[#F6A33C] text-white px-8 py-4 rounded-full font-display font-semibold hover:bg-orange-500 transition-colors shadow-lg shadow-orange-500/30"
            >
              Explore Food
            </a>
            <a
              href="#menu"
              className="flex items-center gap-2 bg-white text-onyx px-8 py-4 rounded-full font-display font-semibold hover:bg-gray-50 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <Search size={20} className="text-[#F6A33C]" />
              Search
            </a>
          </motion.div>
        </div>

        {/* Right Visual Area */}
        <div className="relative z-10 flex justify-center items-center mt-12 lg:mt-0">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            {/* The soft beige backdrop circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#FEF4E6] rounded-full -z-10"></div>
            
            {/* Main Plate Image */}
            <img 
              src={ASSETS.plates.brunchBoard.preview} 
              alt="Delicious food spread" 
              className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] object-cover rounded-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border-8 border-white/50 relative z-10"
              data-asset-name={ASSETS.plates.brunchBoard.filename}
            />

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-[5%] -right-[5%] md:-right-[10%] bg-white px-5 py-3 rounded-full flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-20"
            >
              <span className="text-xl">🥗</span>
              <span className="font-display font-semibold text-sm text-onyx">Dishes</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-[40%] -right-[15%] md:-right-[25%] bg-white px-5 py-3 rounded-full flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-20"
            >
              <span className="text-xl">🍹</span>
              <span className="font-display font-semibold text-sm text-onyx">Drinks</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[10%] -left-[5%] md:-left-[15%] bg-white px-5 py-3 rounded-full flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-20"
            >
              <span className="text-xl">🧀</span>
              <span className="font-display font-semibold text-sm text-onyx">Platter</span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
