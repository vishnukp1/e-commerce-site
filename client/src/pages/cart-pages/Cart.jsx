import { useFetchCart } from "../../hooks/productHook";

const Cart = () => {
  const { cartItems } = useFetchCart();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item._id} className="p-4 bg-white shadow-lg rounded-lg">
              <img
                src={item.productId.image}
                alt={item.productId.name}
                className="h-32 w-full object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-bold">{item.productId.name}</h2>
              <p className="text-sm text-gray-600">
                {item.productId.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <p className="font-bold text-lg">${item.productId.price}</p>
                <p className="text-sm">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
