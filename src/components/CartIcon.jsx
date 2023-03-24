import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartIcon = ({ cartCount }) => {
  return (
    <div className="cart-icon">
      <Link to="/cart">
        <FaShoppingCart size={20} />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </Link>
      
    </div>
  );
};

export default CartIcon;
