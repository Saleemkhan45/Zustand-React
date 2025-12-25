import { create } from 'zustand'

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  user: null,

  login: () =>
    set({
      isLoggedIn: true,
      user: { name: 'Saleem' },
    }),

  logout: () =>
    set({
      isLoggedIn: false,
      user: null,
    }),
}))

export default useAuthStore
