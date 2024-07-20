import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Axios } from './axois';

const Notifications = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await Axios.get(`http://localhost:5000/order/${orderId}`);
        setOrder(response.data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };
    fetchOrderDetails();
  }, [orderId]);

  if (!order) return <div>Loading...</div>;

  return (
    <div>
      <h1>Order Details</h1>
      <div>
        {order.products.map(item => (
          <div key={item.productId}>
            <h2>{item.productId.name}</h2>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <h2>Total Amount: ${order.totalAmount}</h2>
      <h2>Discount: ${order.discount}</h2>
      <h2>Final Amount: ${order.finalAmount}</h2>
    </div>
  );
};

export default Notifications;
