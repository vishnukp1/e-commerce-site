import ShoppingItems from "../../components/ShoppingItems";
import { items } from "../../data/BabyProduct";
import CustomButton from "../../components/Buttun";
import { SLIDER } from "../../assets";
import CarouselScreen from "../../components/Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <div className="w-full h-fit  flex justify-center items-center text-white border-y border-gray-300 mt-4 mb-6">
        <CustomButton
          content={"BABIES"}
          className=" text-black py-2 px-4 rounded font-lato text-base font-normal leading-[40px] tracking-wide text-left"
        />
        <CustomButton
          content={"BOYS"}
          className=" text-black py-2 px-4 rounded font-lato text-base font-normal leading-[40px] tracking-wide text-left"
        />
        <CustomButton
          content={"GIRLS"}
          className=" text-black py-2 px-4 rounded font-lato text-base font-normal leading-[40px] tracking-wide text-left"
        />
      </div>
      <CarouselScreen />
      <div>
        <div className="flex gap-16 mt-6 mb-11 mx-11 items-center">
          <span className="text-[2.8rem] font-light opacity-70">
            Our Top Categories
          </span>
          <div className="flex gap-2">
            <span className="text-[14px] mt-1">Sorted By:</span>
            <button className="text-[14px] flex gap-1 border rounded-sm px-3 py-1 items-center  border-gray-400">
              <span>All Category </span>
              <div className="flex items-center space-x-4">
                <img src={SLIDER} alt="Logo" className="h-5 w-5 " />
              </div>
            </button>
          </div>
        </div>
        <ShoppingItems item={items} />
      </div>
    </div>
  );
};

export default Home;
