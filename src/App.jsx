import React from 'react'
import Navbar from './Component/Navbar'
import Product from './Component/Product'
import Login from './Component/Login'
import Cart from './Component/Cart'


const App = () => {
  return (
    <div>
       <Navbar />
      <Login />
      <Product />
      <Cart />
    </div>
  )
}

export default App