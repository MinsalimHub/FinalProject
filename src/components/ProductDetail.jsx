import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then(response => response.json())
      .then(jsonData => {
        setProduct(jsonData);
      })
      .catch(error => console.error(error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>{product.price}$</p>
      <Link to="/products">Back to products</Link>
    </div>
  );
};

export default ProductDetails;
