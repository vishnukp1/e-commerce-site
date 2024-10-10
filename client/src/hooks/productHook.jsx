import { useEffect, useState } from "react";
import { Axios } from "../api/axois";
import { toast } from "react-toastify";

export const useFetchProducts = () => {
  
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Axios.get("/api/product");
        setProducts(response.data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  return { products, error };
};

export const useAddToCart = () => {
  const [loading, setLoading] = useState(false);

  const addToCart = async (productId) => {
    try {
      setLoading(true);
      const response = await Axios.post(`/api/cart/add/${productId}`);
      if (response.status === 200) {
        toast.success("Item added to cart successfully!");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.warn("Failed to add item to cart.");
    } finally {
      setLoading(false);
    }
  };

  return { addToCart, loading };
};

export const useFetchCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await Axios.get("/api/cart/view");
        setCartItems(response.data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCart();
  }, []);

  return { cartItems, error };
};
