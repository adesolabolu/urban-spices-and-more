import { motion } from 'motion/react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { BRAND } from '../assets';

export function Location() {
  return (
    <section className="bg-[#FFFDF8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start md:pr-12 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100"
          >
            <div className="w-14 h-14 rounded-full bg-[#FEF4E6] flex items-center justify-center text-[#F6A33C] mb-6">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-display font-bold text-onyx mb-3">Location</h3>
            <p className="text-charcoal font-sans">{BRAND.address}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center md:items-start bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100"
          >
            <div className="w-14 h-14 rounded-full bg-[#FEF4E6] flex items-center justify-center text-[#F6A33C] mb-6">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-display font-bold text-onyx mb-3">Availability</h3>
            <p className="text-charcoal mt-2 font-display font-semibold">{BRAND.hours}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center md:items-start bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100"
          >
            <div className="w-14 h-14 rounded-full bg-[#FEF4E6] flex items-center justify-center text-[#F6A33C] mb-6">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-display font-bold text-onyx mb-3">Direct Line</h3>
            <p className="text-charcoal mb-2">Inquiries & VIP Bookings</p>
            <a href={`tel:${BRAND.phone}`} className="text-[#F6A33C] font-display font-bold hover:underline transition-colors text-lg">
              {BRAND.phoneFormatted}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
