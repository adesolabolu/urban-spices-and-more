import { motion } from 'motion/react';
import { ASSETS } from '../assets';
import { useCart } from '../CartContext';

const menuItems = [
  {
    id: "m01",
    title: "Bespoke Charcuterie",
    description: "Luxury artisan cheeses, premium meats, and natural honey.",
    price: 45,
    image: ASSETS.plates.grazingDetail,
  },
  {
    id: "m02",
    title: "Event Table Spreads",
    description: "Masterfully styled table centerpieces for grand luxury events.",
    price: 150,
    image: ASSETS.plates.eventSpread,
  },
  {
    id: "m03",
    title: "Brunch Platters",
    description: "Fluffy pancakes, breakfast spreads, and artisan pastries.",
    price: 85,
    image: ASSETS.plates.brunchBoard,
  },
  {
    id: "m04",
    title: "Artisan Mocktails",
    description: "Vibrant, hand-crafted fruit-infused drinks served fresh.",
    price: 20,
    image: ASSETS.plates.beverage,
  },
  {
    id: "m05",
    title: "Luxury Roast Platter",
    description: "Whole roasted poultry, premium cuts, and floral styling.",
    price: 120,
    image: ASSETS.plates.roastPlatter,
  },
  {
    id: "m06",
    title: "Artisan Gift Box",
    description: "Curated premium selections for intimate gatherings or gifts.",
    price: 60,
    image: ASSETS.plates.giftBox,
  },
  {
    id: "m07",
    title: "Berry Fritter Plate",
    description: "High-end pancakes dripping with wild berry reduction.",
    price: 35,
    image: ASSETS.plates.fritterPlate,
  }
];

export function Menu() {
  const { addToCart } = useCart();

  return (
    <section id="menu" className="py-32 bg-[#FFFDF8] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-onyx uppercase tracking-widest">
              Our Menu
            </h2>
            <div className="w-16 h-0.5 bg-onyx mx-auto mt-6 mb-6"></div>
            <p className="text-charcoal font-sans max-w-lg mx-auto">
              Explore our curated selection of exquisite culinary masterpieces, designed to elevate your gatherings.
            </p>
          </motion.div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-24 mt-16 pb-12 mx-auto max-w-6xl">
          {menuItems.map((item, idx) => {
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (idx % 2) * 0.2 }}
                className="relative group"
              >
                <div className="relative pt-12 sm:pt-16">
                  {/* Text Box */}
                  <div className="border border-onyx bg-white p-6 sm:p-8 pl-[45%] sm:pl-[45%] flex flex-col justify-center min-h-[260px] sm:min-h-[280px] relative">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-onyx mb-3 uppercase tracking-widest leading-tight">{item.title}</h3>
                    <p className="text-charcoal font-sans text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                      {item.description}
                    </p>
                    <span className="text-lg sm:text-xl font-display font-bold text-onyx mb-2">${item.price}</span>
                    
                    {/* Add to Cart Button */}
                    <button 
                      onClick={() => addToCart({ id: item.id, title: item.title, price: item.price, image: item.image.preview })}
                      className="absolute -bottom-5 right-4 sm:right-8 bg-onyx text-white px-6 py-3 text-[10px] font-display font-bold tracking-widest uppercase hover:bg-brand-red hover:-translate-y-1 transition-all shadow-xl z-20"
                    >
                      Add To Cart
                    </button>
                  </div>

                  {/* Image Box */}
                  <div className="absolute top-0 bottom-10 sm:bottom-12 left-0 w-[42%] sm:w-[42%] shadow-2xl z-10">
                    <div className="w-full h-full overflow-hidden bg-gray-100">
                      <img 
                        src={item.image.preview} 
                        alt={item.title}
                        data-asset-name={item.image.filename}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
