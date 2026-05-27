import { motion } from 'motion/react';
import { ASSETS, BRAND } from '../assets';
import { Star, ArrowRight, ArrowLeft } from 'lucide-react';

const services = [
  {
    title: "Bespoke Charcuterie",
    description: "Luxury artisan cheeses, premium meats, and natural honey.",
    price: "$45.00",
    image: ASSETS.plates.grazingDetail,
  },
  {
    title: "Event Table Spreads",
    description: "Masterfully styled table centerpieces for grand luxury events.",
    price: "$150.00",
    image: ASSETS.plates.roastPlatter,
  },
  {
    title: "Brunch Platters",
    description: "Fluffy pancakes, breakfast spreads, and artisan pastries.",
    price: "$65.00",
    image: ASSETS.plates.fritterPlate,
  },
  {
    title: "Artisan Mocktails",
    description: "Vibrant, hand-crafted fruit-infused drinks served fresh.",
    price: "$20.00",
    image: ASSETS.plates.beverage,
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#FFFDF8] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-end mb-24 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-onyx leading-tight">
              Popular Dishes
            </h2>
          </motion.div>
          
          <div className="flex gap-4">
             <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-onyx hover:bg-[#F6A33C] hover:text-white hover:border-[#F6A33C] transition-all">
                <ArrowLeft size={20} />
             </button>
             <button className="w-12 h-12 rounded-full border border-[#F6A33C] bg-[#F6A33C] flex items-center justify-center text-white shadow-lg shadow-[#F6A33C]/30 hover:scale-105 transition-all">
                <ArrowRight size={20} />
             </button>
          </div>
        </div>

        {/* Popular Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mt-16 pb-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] pt-20 px-6 pb-8 text-center relative mt-16 sm:mt-24 lg:mt-16 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Floating Image overlapping top of card */}
              <div className="absolute -top-16 lg:-top-20 left-1/2 -translate-x-1/2 w-40 h-40">
                <img 
                  src={service.image.preview} 
                  alt={service.title}
                  data-asset-name={service.image.filename}
                  className="w-full h-full object-cover rounded-full shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] border-[6px] border-white"
                />
              </div>
              
              <h3 className="text-xl font-display font-bold text-onyx mb-2">{service.title}</h3>
              
              <div className="flex justify-center gap-1 mb-4 text-[#F6A33C]">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
              </div>
              
              <p className="text-charcoal text-sm font-sans mb-8 line-clamp-2 h-10">{service.description}</p>
              
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xl font-display font-bold text-onyx">{service.price}</span>
                <a 
                  href={BRAND.whatsappUrl} 
                  className="bg-[#FEF4E6] text-[#F6A33C] hover:bg-[#F6A33C] hover:text-white px-5 py-2.5 rounded-full font-display font-medium text-sm transition-colors duration-300"
                >
                  Add To Cart
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
