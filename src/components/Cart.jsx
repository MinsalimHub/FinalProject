import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(jsonData => {
        // Assuming jsonData is an array of objects
        const cartItemsArray = Array.isArray(jsonData) ? jsonData : [jsonData];
        // Add quantity property to each item
        const cartItemsWithQty = cartItemsArray.map(item => ({ ...item, quantity: 0 }));
        setCartItems(cartItemsWithQty);
      })
      .catch(error => console.error(error));
  }, []);
  

  const handleQuantityChange = (id, operation) => {
    // Find the item with the matching id and update its quantity
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        const newQty = operation === '+' ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: newQty >= 0 ? newQty : 0 };
      } else {
        return item;
      }
    });
    setCartItems(updatedCartItems);
  };
  

  const handleRemoveFromCart = (id) => {
    // Filter out the item with the matching id
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <div className="cart-icon" onClick={() => console.log('Open cart')}>
          <i className="fas fa-shopping-cart"></i>
          <span>{cartItems.length}</span>
        </div>
      </nav>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>{item.price}$</p>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(item.id, '-')}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, '+')}>+</button>
              </div>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove from cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
