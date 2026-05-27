import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../CartContext';

export function Cart() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, decrementQuantity, addToCart, totalPrice } = useCart();

  const handleCheckout = () => {
    const orderList = items.map(i => `- ${i.quantity}x ${i.title} ($${i.price})`).join('\n');
    const message = `Hello Urban Spices and More, I'd like to place an order:\n\n${orderList}\n\nTotal: $${totalPrice}\n\nHow long will it take to be delivered?`;
    const url = `https://wa.me/2348032492536?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-onyx/40 backdrop-blur-sm z-[60]"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-[#F6A33C]" size={24} />
                <h2 className="text-xl font-display font-bold text-onyx">Your Order</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-charcoal hover:text-brand-red transition-colors rounded-full hover:bg-gray-50"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-charcoal space-y-4">
                  <ShoppingBag size={48} className="opacity-20" />
                  <p className="font-display">Your cart is empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-[#F6A33C] hover:underline font-medium"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
                    <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-xl" />
                    
                    <div className="flex-1">
                      <h3 className="font-display font-medium text-onyx text-sm mb-1 line-clamp-1">{item.title}</h3>
                      <p className="text-[#F6A33C] font-bold text-sm mb-3">${item.price}</p>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center bg-gray-50 rounded-full border border-gray-100">
                          <button 
                            onClick={() => decrementQuantity(item.id)}
                            className="p-1.5 text-charcoal hover:text-brand-red transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-6 text-center font-medium text-sm text-onyx">{item.quantity}</span>
                          <button 
                            onClick={() => addToCart({ id: item.id, title: item.title, price: item.price, image: item.image })}
                            className="p-1.5 text-charcoal hover:text-green-600 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="p-1.5 text-gray-400 hover:text-brand-red transition-colors ml-auto"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-display font-medium text-charcoal">Subtotal</span>
                  <span className="font-display font-bold text-onyx text-xl">${totalPrice}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#F6A33C] text-white py-4 rounded-full font-display font-bold text-lg hover:bg-orange-500 transition-colors shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
                >
                  Confirm on WhatsApp
                </button>
                <p className="text-center text-xs text-charcoal mt-4 font-medium">
                  Payment is processed after availability confirmation.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
