import { motion } from 'motion/react';
import { ASSETS } from '../assets';

const services = [
  {
    title: "Bespoke Grazing Boxes & Charcuterie",
    description: "Luxury boxes curated with artisan cheeses, premium meats, fresh fruits, crackers, and natural honey. Perfect for intimate gatherings or high-end corporate gifting.",
    image: ASSETS.plates.grazingDetail,
    delay: 0.1,
  },
  {
    title: "Grand Event Catering & Tables",
    description: "Masterfully styled, expansive table spreads featuring whole roasted poultry, premium cuts, and floral design configurations that serve as the centerpiece of any luxury event.",
    image: ASSETS.plates.roastPlatter,
    delay: 0.2,
  },
  {
    title: "Signature Brunch Platters",
    description: "Start the day in absolute luxury. Fluffy berry-infused pancakes, gourmet breakfast spreads, and artisan pastries arranged on elegant wooden staging.",
    image: ASSETS.plates.brunchBoard,
    delay: 0.3,
  },
  {
    title: "Artisan Mocktails & Beverages",
    description: "Vibrant, hand-crafted fruit-infused drinks served in premium styling. A refreshing visual and gastronomic delight to complement your grazing experience.",
    image: ASSETS.plates.beverage,
    delay: 0.4,
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream text-onyx relative z-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-brand-red font-bold tracking-widest uppercase text-sm mb-4 block">The Offerings</span>
          <h2 className="text-4xl md:text-5xl font-serif text-onyx">Culinary Artistry,<br/>Delivered.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: service.delay }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-sm aspect-[4/3] mb-6 bg-charcoal">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                  src={service.image.preview} 
                  alt={service.title}
                  data-asset-name={service.image.filename}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
                {/* Embedded HTML comment mapping to constraints */}
                {/* Asset: {service.image.filename} - {service.image.ref} */}
              </div>
              <h3 className="text-2xl font-serif mb-3 text-onyx group-hover:text-brand-red transition-colors">{service.title}</h3>
              <p className="text-charcoal/70 leading-relaxed font-light">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
