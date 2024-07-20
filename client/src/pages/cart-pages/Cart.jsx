const Cart = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Cart</h2>
        <div className="space-y-4">
          {Array(3).fill(0).map((_, index) => (
            <div key={index} className="flex items-center p-4 border border-gray-300 rounded-lg">
              <img
                src="https://via.placeholder.com/60"
                alt="Product"
                className="w-16 h-16 rounded-lg object-cover mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Denim Jeans</h3>
                <p className="text-sm text-gray-600">
                  Blue Jeans Embroidered With Light Blue Velvet Bottom Over Lap Model
                </p>
                <p className="text-lg font-semibold">Rs 999/-</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-2 py-1 bg-gray-200 rounded">-</button>
                <span className="px-2">0</span>
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
          />
          <button className="w-full p-2 bg-red-500 text-white rounded">Apply</button>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span>Sub Total</span>
            <span>$5512</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>$56</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>$5624</span>
          </div>
        </div>
        <button className="w-full p-2 bg-red-500 text-white rounded mt-4">Check Out</button>
      </div>
    </div>
  );
};

export default Cart;
