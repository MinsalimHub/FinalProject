import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail'; 
import { useState } from 'react';
import CartIcon from './components/CartIcon';
import Cart from './components/Cart';
import Jewerly from './components/jewerly';
import Electronics from './components/electronics';
import MenClothing from './components/Men_clothing';
import WomenClothing from './components/women_clothing';


function App() {
  const [cartCount, setCartCount] = useState(0); //cart items counter

  const addToCart = (product) => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className='nav'>
     <nav className="navbar" style={{ position: 'fixed', top: 0 }}>
  <div className="logo">
    <Link to="/">Logo</Link> //Logo button in navbar
  </div>
  <ul className="nav-links">
    <li>
      <Link to="/">Home</Link> //Home button in navbar
    </li>
    <li>
      <Link to="/products">Products</Link> //Products button in navbar
    </li>
    <li>
      <Link to="/jewerly">Jewerly</Link> //Jewerly button in navbar
    </li>
    <li>
      <Link to="/electronics">Electronics</Link> //Electronics button in navbar
    </li>
    <li>
      <Link to="/men_clothing">Men's Clothing</Link> //Men's Clothing button in navbar
    </li>
    <li>
      <Link to="/women_clothing">Women's Clothing</Link> //Women's Clothing button in navbar
    </li>
    <li>
      <Link to="/cart"><CartIcon cartCount={cartCount} /></Link> //Cart icon button
    </li>
  </ul>
</nav>


      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products addToCart={addToCart} />} /> //products route with addtocart function to add to the products counter
  <Route path="/jewerly" element={<Jewerly />} />
  <Route path="/electronics" element={<Electronics />} />
  <Route path="/men_clothing" element={<MenClothing />} />
  <Route path="/women_clothing" element={<WomenClothing />} />
  <Route path="/product/:productId" element={<ProductDetail />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="*" element={<p>Path not resolved</p>} />
</Routes>

    </div>
  )
}

export default App;
