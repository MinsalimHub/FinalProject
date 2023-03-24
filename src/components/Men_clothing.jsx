import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(jsonData => {
        // Assuming jsonData is an array of objects
        const productsArray = Array.isArray(jsonData) ? jsonData : [jsonData];
        setProducts(productsArray);
      })
      .catch(error => console.error(error));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const mensClothingProducts = products.filter(product => product.category === "men's clothing");

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <div className="cart-icon" onClick={() => console.log('Open cart')}>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </nav>
      <div className="products-grid">
        {mensClothingProducts.map((product) => (
          <div key={product.id} className="product">
            <Link to={{ pathname: `/product/${product.id}`, state: { product } }}>
              <img src={product.image} alt={product.image} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>{product.price}$</p>
            </Link>
            <button onClick={() => handleAddToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
