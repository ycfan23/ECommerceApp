import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce'

import { Products, NavBar, Cart } from './Components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart)
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart)
  }

  useEffect(()=> {
    fetchProducts();
    fetchCart();
  }, [])

  return (
    <Router>
      <NavBar totalItems={cart.total_items}/>
      <Routes>
        <Route exact path='/' element={<Products products={products} onAddToCart={handleAddToCart}/>} />
        <Route exact path='/cart' element={<Cart cart={cart} />} />
      </Routes>
    </Router>
  )
}

export default App
