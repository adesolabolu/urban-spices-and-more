import { motion } from 'motion/react';
import { ASSETS } from '../assets';

export function Gallery() {
  const images = [
    { ...ASSETS.plates.eventSpread, aspect: "aspect-square md:col-span-2 md:row-span-2" },
    { ...ASSETS.plates.giftBox, aspect: "aspect-[4/5]" },
    { ...ASSETS.plates.fritterPlate, aspect: "aspect-[4/5]" },
    { ...ASSETS.plates.grazingDetail, aspect: "aspect-square" },
    { ...ASSETS.plates.brunchBoard, aspect: "aspect-[16/9] md:col-span-2" },
  ];

  return (
    <section id="gallery" className="py-24 bg-onyx text-cream relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white">Visual Showcase</h2>
            <p className="text-cream/60 mt-4 max-w-md font-light">Explore a curated selection of our most exquisite setups, meticulously designed for visual impact and gourmet satisfaction.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(250px,auto)] gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative overflow-hidden group ${img.aspect} bg-charcoal rounded-sm`}
            >
              <img 
                src={img.preview}
                alt={img.ref}
                data-asset-name={img.filename}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-onyx/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
