import React, { useEffect, useState } from 'react';
import { Axios } from './axois';
import { items } from './data/BabyProduct';


const Home = () => {
  const [products, setProducts] = useState([]);



  const handleAddToCart = async (productId) => {
    try {
      await Axios.post(`http://localhost:5000/cart/add/${productId}`);
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <div>
        {items.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
