import { motion } from 'motion/react';
import { ASSETS } from '../assets';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[3/4] relative z-10 rounded-sm overflow-hidden shadow-2xl">
              <img 
                src={ASSETS.owner.preview}
                alt="Founder of Urban Spices and More"
                data-asset-name={ASSETS.owner.filename}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element behind image */}
            <div className="absolute top-10 -left-6 md:-left-10 w-full h-full bg-onyx/5 z-0 rounded-sm"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-onyx leading-tight">
              The Founder’s Touch
            </h2>
            
            <div className="space-y-6 text-lg text-charcoal/80 font-light leading-relaxed">
              <p>
                At Urban Spices and More, we believe that food is not merely sustenance; it is an experience, an art form, and the centerpiece of every memorable gathering. 
              </p>
              <p>
                Our philosophy is rooted in uncompromising freshness and impeccable presentation. From hand-selecting the finest artisan cheeses to curating visually dramatic floral highlights for our grand grazing tables, every detail is meticulously staged to elevate your event.
              </p>
              <p className="border-l-2 border-brand-red pl-6 italic font-serif text-xl text-onyx/90 my-8">
                "We don't just cater events. We design high-end culinary landscapes that captivate the senses and leave a lasting impression."
              </p>
            </div>
            
            <div className="pt-4">
              <img 
                src={ASSETS.logo.preview}
                alt="Urban Spices Logo"
                data-asset-name={ASSETS.logo.filename}
                className="h-12 w-auto opacity-80 grayscale mix-blend-multiply"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
