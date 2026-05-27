import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Savannah Nguyen",
    role: "Private Event Host",
    text: "This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they're doing and what they're talking about, and you can tell making the customers happy is their main priority.",
    rating: 5
  },
  {
    name: "Eleanor Pena",
    role: "Corporate Client",
    text: "This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they're doing and what they're talking about, and you can tell making the customers happy is their main priority.",
    rating: 5
  },
  {
    name: "Cameron Williamson",
    role: "VIP Guest",
    text: "This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they're doing and what they're talking about, and you can tell making the customers happy is their main priority.",
    rating: 5
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#FFFDF8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-onyx">What Our Customer Says?</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#FEF9EE] p-8 rounded-[2rem] hover:scale-[1.02] transition-transform duration-300"
            >
              <p className="text-charcoal font-sans leading-relaxed mb-8 text-sm">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-onyx text-sm">{review.name}</h4>
                </div>
                
                <div className="flex gap-0.5 text-[#F6A33C]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
