import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Amina Y.",
    role: "Private Event Host",
    text: "The luxury grazing table was the absolute centerpiece of my 40th birthday. Flawless presentation and the flavor profiles were exquisite.",
    rating: 5,
  },
  {
    name: "Tobi O.",
    role: "Corporate Client, Abuja",
    text: "We ordered the artisan gift boxes for our executive board meeting. The attention to detail and premium quality of the charcuterie blew everyone away. 24/7 reliability is a game-changer.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    role: "VIP Guest",
    text: "Unmatched culinary artistry! The signature brunch platters transformed our morning gathering into a 5-star hotel experience.",
    rating: 5,
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-onyx text-cream relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white">Client Testimonials</h2>
          <p className="text-cream/60 mt-4 max-w-xl mx-auto font-light">Experiences from our esteemed corporate clients and luxury event hosts across Abuja.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-charcoal/50 p-8 rounded-sm border border-charcoal hover:border-brand-red/50 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-6 text-brand-red">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-cream/90 font-light leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-serif font-medium text-white">{review.name}</h4>
                <span className="text-sm text-cream/50 tracking-wide uppercase">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
