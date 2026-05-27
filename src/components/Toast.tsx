import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../CartContext';

export function Toast() {
  const { toastMessage } = useCart();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 bg-onyx text-white px-6 py-4 rounded-full shadow-2xl"
        >
          <CheckCircle size={20} className="text-green-400" />
          <span className="font-display font-medium text-sm md:text-base whitespace-nowrap">
            {toastMessage}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
