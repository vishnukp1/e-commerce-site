import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Axios } from './axois';

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await Axios.get('http://localhost:5000/cart');
        setCart(response.data);
        // Calculate total
        const totalAmount = response.data.reduce((acc, item) => acc + (item.productId.price * item.quantity), 0);
        setTotal(totalAmount);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, []);

  const handleCheckout = async () => {
    try {
      const response = await Axios.post('http://localhost:5000/order/checkout', { promoCode });
      alert('Order placed successfully!');
      navigate(`/notifications/${response.data.order._id}`);
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        {cart.map(item => (
          <div key={item.productId._id}>
            <h2>{item.productId.name}</h2>
            <p>{item.productId.description}</p>
            <p>${item.productId.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Enter promo code"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value)}
      />
      <h2>Total: ${total}</h2>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Checkout;
