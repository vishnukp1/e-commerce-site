import { useState, useEffect } from 'react';
import Axios from '../../api/axois';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [promoCode, setPromoCode] = useState('');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await Axios.get('/api/cart');
        const items = response.data.data;
        setCartItems(items);
        calculateSubTotal(items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);


  const calculateSubTotal = (items) => {
    let total = 0;
    items.forEach(item => {
      total += item.quantity * item.productId.price;
    });
    setSubTotal(total);
    setTotal(total - discount);
  };

  const handleApplyPromoCode = () => {
    let discountAmount = 0;
    if (promoCode === 'DISCOUNT10') {
      discountAmount = subTotal * 0.10;
    } else if (promoCode === 'DISCOUNT20') {
      discountAmount = subTotal * 0.20;
    }
    setDiscount(discountAmount);
    setTotal(subTotal - discountAmount);
  };

  const handleCheckout = async () => {
    try {
      const response = await Axios.post('/api/checkout', { promoCode });
      if (response.data.status === 'Success') {
        alert(response.data.message);
        setCartItems([]);
        setSubTotal(0);
        setDiscount(0);
        setTotal(0);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('Checkout failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Cart</h2>
        <div className="space-y-4">
          {cartItems?.map((item, index) => (
            <div key={index} className="flex items-center p-4 border border-gray-300 rounded-lg">
              <img
                src={item.productId.image}
                alt={item.productId.name}
                className="w-16 h-16 rounded-lg object-cover mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.productId.name}</h3>
                <p className="text-sm text-gray-600">{item.productId.description}</p>
                <p className="text-lg font-semibold">Rs {item.productId.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-2 py-1 bg-gray-200 rounded">-</button>
                <span className="px-2">{item.quantity}</span>
                <button className="px-2 py-1 bg-gray-200 rounded">+</button>
              </div>
              <button className="ml-4 text-red-500">×</button>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter Your Promocode"
            className="w-full p-2 border border-gray-300 rounded mb-2"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button className="w-full p-2 bg-red-500 text-white rounded" onClick={handleApplyPromoCode}>Apply</button>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span>Sub Total</span>
            <span>Rs {subTotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>Rs {discount}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>Rs 0.00</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>Rs {total}</span>
          </div>
        </div>
        <button className="w-full p-2 bg-red-500 text-white rounded mt-4" onClick={handleCheckout}>Check Out</button>
      </div>
    </div>
  );
};

export default Cart;
