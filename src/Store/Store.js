import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem('cart')) || [], 

  addToCart: (item) =>
    set((state) => {
      const updatedCart =  [...state.cart, { ...item, qty: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
        return { cart: updatedCart };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  incrementQty: (id) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  decrementQty: (id) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  isInCart: (id) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    return currentCart.some((item) => item.id === id);
  },
}));
