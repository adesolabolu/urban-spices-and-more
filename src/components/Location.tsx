import { motion } from 'motion/react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { BRAND } from '../assets';

export function Location() {
  return (
    <section className="bg-onyx text-cream border-t border-charcoal/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-charcoal/40">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start md:pr-12"
          >
            <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red mb-6">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-serif mb-3 text-white">Location</h3>
            <p className="text-cream/70 font-light leading-relaxed">{BRAND.address}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center md:items-start pt-12 md:pt-0 md:px-12"
          >
            <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red mb-6">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-serif mb-3 text-white">Availability</h3>
            <p className="text-cream/70 font-light">Premium service, around the clock.</p>
            <p className="text-white font-medium mt-2">{BRAND.hours}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center md:items-start pt-12 md:pt-0 md:pl-12"
          >
            <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red mb-6">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-serif mb-3 text-white">Direct Line</h3>
            <p className="text-cream/70 font-light mb-2">Inquiries & VIP Bookings</p>
            <a href={`tel:${BRAND.phone}`} className="text-white font-medium hover:text-brand-red transition-colors text-lg">
              {BRAND.phoneFormatted}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
