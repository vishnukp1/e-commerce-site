import { useState } from 'react';
import { Axios } from "../api/axois";

const useAddToCart = () => {
  const [loading, setLoading] = useState(false);

  const addToCart = async (productId) => {
    try {
      setLoading(true);
      const response = await Axios.post(`/api/cart/add/${productId}`);
      if (response.status === 200) {
        alert("Item added to cart successfully!");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart.");
    } finally {
      setLoading(false);
    }
  };

  return { addToCart, loading };
};

export default useAddToCart;
