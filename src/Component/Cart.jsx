import useCartStore from '../store/cartStore'

function Cart() {
  const { cart, increaseQty, decreaseQty } = useCartStore()

  return (
    <div>
      <h2>My Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => decreaseQty(item.id)}>
            -
          </button>

          <span> {item.qty} </span>

          <button onClick={() => increaseQty(item.id)}>
            +
          </button>
        </div>
      ))}
    </div>
  )
}

export default Cart
