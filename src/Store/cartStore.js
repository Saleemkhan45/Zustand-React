import { create } from 'zustand'

const useCartStore = create((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const item = state.cart.find(
        (i) => i.id === product.id
      )

      // agar product pehle se cart mein hai
      if (item) {
        return {
          cart: state.cart.map((i) =>
            i.id === product.id
              ? { ...i, qty: i.qty + 1 }
              : i
          ),
        }
      }

      // agar product naya hai
      return {
        cart: [...state.cart, { ...product, qty: 1 }],
      }
    }),

  increaseQty: (id) =>
    set((state) => ({
      cart: state.cart.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      ),
    })),

  decreaseQty: (id) =>
    set((state) => ({
      cart: state.cart
        .map((i) =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0),
    })),

  clearCart: () => set({ cart: [] }),
}))

export default useCartStore
