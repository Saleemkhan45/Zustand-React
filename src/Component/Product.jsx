import useCartStore from '../store/cartStore'

function Product() {
  const addToCart = useCartStore((state) => state.addToCart)

  const product = {
    id: 1,
    name: 'Laptop',
    price: 500,
  }

  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}

export default Product
