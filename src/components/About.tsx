import { motion } from 'motion/react';
import { ASSETS, BRAND } from '../assets';
import { ShoppingBag, Clock, ShieldCheck, Users } from 'lucide-react';

export function About() {
  const features = [
    { icon: <ShoppingBag size={20}/>, title: "Online Order" },
    { icon: <Clock size={20}/>, title: "24/7 Service" },
    { icon: <ShieldCheck size={20}/>, title: "Premium Quality" },
    { icon: <Users size={20}/>, title: "Organized Foodie Place" },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Visual: Overlapping Rounded Images */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative min-h-[400px] flex justify-center items-center"
          >
            {/* Soft decorative background shape */}
            <div className="absolute w-[80%] h-[80%] bg-[#FEF4E6] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-10 animate-[spin_20s_linear_infinite]" />
            
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full border-[8px] border-white shadow-2xl overflow-hidden z-10">
               <img 
                 src={ASSETS.owner.preview}
                 alt="Owner"
                 data-asset-name={ASSETS.owner.filename}
                 className="w-full h-full object-cover"
               />
            </div>
            
            <div className="absolute bottom-4 right-8 lg:-right-4 w-40 h-40 rounded-full border-[6px] border-white shadow-xl overflow-hidden z-20">
               <img 
                 src={ASSETS.plates.eventSpread.preview}
                 alt="Spread"
                 data-asset-name={ASSETS.plates.eventSpread.filename}
                 className="w-full h-full object-cover"
               />
            </div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-onyx leading-[1.2]">
              We Are More Than <br/> Multiple Service
            </h2>
            
            <p className="text-charcoal font-sans text-lg leading-relaxed max-w-lg">
              This is a type of catering which typically serves food and drinks, in addition to light refreshments such as baked goods or snacks. The absolute best culinary landscapes.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 pt-4">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="text-[#F6A33C] w-10 h-10 rounded-full bg-[#FEF4E6] flex items-center justify-center shrink-0">
                    {feat.icon}
                  </div>
                  <span className="font-display font-medium text-onyx">{feat.title}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-8">
              <a 
                href="#about" 
                className="bg-[#F6A33C] text-white px-8 py-4 rounded-full font-display font-semibold hover:bg-orange-500 transition-colors shadow-lg shadow-orange-500/30 inline-block"
              >
                About Us
              </a>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
