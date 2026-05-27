import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  decrementQuantity: (id: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  totalItems: number;
  totalPrice: number;
  toastMessage: string | null;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === newItem.id);
      const newQuantity = existing ? existing.quantity + 1 : 1;
      
      // Schedule toast to ensure it gets the correct quantity and doesn't conflict with strict mode double-invocations
      setTimeout(() => {
        setToastMessage(`Added ${newItem.title} (x${newQuantity})`);
      }, 0);

      if (existing) {
        return prev.map((i) => i.id === newItem.id ? { ...i, quantity: newQuantity } : i);
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const decrementQuantity = (id: string) => {
    setItems((prev) => {
      return prev.map((i) => {
        if (i.id === id) {
          return { ...i, quantity: Math.max(1, i.quantity - 1) };
        }
        return i;
      });
    });
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, decrementQuantity, clearCart, isCartOpen, setIsCartOpen, totalItems, totalPrice, toastMessage }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
