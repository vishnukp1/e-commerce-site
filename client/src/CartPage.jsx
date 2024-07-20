import { useEffect, useState } from 'react';
import { Axios } from './axois';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await Axios.get('http://localhost:5000/cart');
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, []);

  const handleIncrement = async (productId) => {
    try {
      await Axios.post(`http://localhost:5000/cart/increment/${productId}`);
      // Update cart
      const response = await Axios.get('http://localhost:5000/cart');
      setCart(response.data);
    } catch (error) {
      console.error('Error incrementing quantity:', error);
    }
  };

  const handleDecrement = async (productId) => {
    try {
      await Axios.post(`http://localhost:5000/cart/decrement/${productId}`);
      // Update cart
      const response = await Axios.get('http://localhost:5000/cart');
      setCart(response.data);
    } catch (error) {
      console.error('Error decrementing quantity:', error);
    }
  };

  const handleRemove = async (productId) => {
    try {
      await Axios.delete(`http://localhost:5000/cart/${productId}`);
      // Update cart
      const response = await Axios.get('http://localhost:5000/cart');
      setCart(response.data);
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {cart.map(item => (
          <div key={item.productId._id}>
            <h2>{item.productId.name}</h2>
            <p>{item.productId.description}</p>
            <p>${item.productId.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleIncrement(item.productId._id)}>+</button>
            <button onClick={() => handleDecrement(item.productId._id)}>-</button>
            <button onClick={() => handleRemove(item.productId._id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
