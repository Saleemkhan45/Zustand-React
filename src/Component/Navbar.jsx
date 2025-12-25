import useAuthStore from '../store/authStore'
import useCartStore from '../store/cartStore'

function Navbar() {
  const { isLoggedIn, user, logout } = useAuthStore()
  const cart = useCartStore((state) => state.cart)

  return (
    <div>
      {isLoggedIn ? (
        <>
          <span>{user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Not Logged In</span>
      )}

      <span> Cart: {cart.length}</span>
    </div>
  )
}

export default Navbar
