import { WHITE_BAG } from "../assets";
import useAddToCart from "../hooks/cartHook";


const ShoppingItems = ({ item }) => {
  const { addToCart, loading } = useAddToCart();
  return (
    <div className="mb-10  bg-slate-50 mx-11">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5  gap-8 place-items-center">
        {/* card section */}
        {item?.map((data) => (
          <div
            key={data.id}
            className="p-4 bg-white shadow-lg rounded-lg relative"
          >
            <img
              src={data.image}
              alt={data.name}
              className="h-[180px] w-[260px] object-cover rounded-md"
            />
            <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
              <svg
                className="w-6 h-6 text-red-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
            <div className="leading-7 mt-8 pt-5">
              <h2 className="font-black text-lg text-[24px] mb-5 opacity-80">
                {data.name}
              </h2>
              <p className=" text-base text-[14px] text-[#333333] mb-7">
                {data.description}
              </p>
              <div className="flex justify-between mb-5">
                <h2 className="font-bold text-[1rem] text-primary ">
                  ${data.price}
                </h2>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center ">
              <button className="bg-red-500 h-11 w-56 pl-12 text-white flex justigy-center items-center  rounded-md shadow-md transition-colors duration-300 hover:bg-red-600"
                 onClick={() => addToCart(data.id)}
                 disabled={loading}
              >
                <div>
                  <img src={WHITE_BAG} alt="Logo" className="h-5 w-5" />
                </div>
                <span className="font-semibold text-[16px] mb-10  mt-10 ml-3 text-white">
                  Add To Cart
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingItems;
