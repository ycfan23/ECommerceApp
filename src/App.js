import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const NavBar = React.lazy(()=> import ('./Components/NavBar/NavBar'))
const Products = React.lazy(()=> import ('./Components/Products/Products'))
const Cart = React.lazy(()=> import ('./Components/Cart/Cart'))
const Checkout = React.lazy(()=> import ('./Components/CheckoutForm/Checkout/Checkout'))

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  useEffect(()=> {
    fetchProducts();
    fetchCart();
  }, [])

  return (
    <Router>
      <React.Suspense fallback={<p>Loading...</p>}>
        <NavBar totalItems={cart.total_items}/>
        <Routes>
          <Route exact path='/' element={<Products products={products} onAddToCart={handleAddToCart}/>} />
          <Route exact path='/cart' element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />} />
          <Route exact path='/checkout' element={<Checkout />}/>
        </Routes>
      </React.Suspense>
    </Router>
  )
}

export default App
