import { motion } from 'motion/react';
import { ASSETS } from '../assets';

export function Gallery() {
  const images = [
    { ...ASSETS.plates.eventSpread, aspect: "col-span-1 md:col-span-2 row-span-2 aspect-square md:aspect-auto" },
    { ...ASSETS.plates.giftBox, aspect: "col-span-1 aspect-square" },
    { ...ASSETS.plates.fritterPlate, aspect: "col-span-1 aspect-square" },
    { ...ASSETS.plates.grazingDetail, aspect: "col-span-1 aspect-square" },
    { ...ASSETS.plates.brunchBoard, aspect: "col-span-1 md:col-span-2 aspect-square md:aspect-[21/9]" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-display font-bold text-onyx"
          >
            Visual Showcase
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[minmax(250px,250px)]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative overflow-hidden group rounded-[2rem] bg-gray-100 ${img.aspect} shadow-sm hover:shadow-xl transition-shadow duration-300`}
            >
              <img 
                src={img.preview}
                alt={img.ref}
                data-asset-name={img.filename}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
