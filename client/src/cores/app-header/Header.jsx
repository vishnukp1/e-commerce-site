import { BAG, HEART, LOGO, NOTIFICATION, SEARCH, USER } from "../../assets";

function Header() {
  return (
    <nav className="flex justify-between  text-black pt-9 px-9 ">
      <div className="flex items-center space-x-4">
        <img src={LOGO} alt="Logo" className="h-12 w-16" />
      </div>
      <div className="flex items-center gap-9  space-x-4">
        <div className="relative">
          <input
            type="text"
            className=" border h-8 w-[19rem] border-gray-300  pl-6 text-black"
          />
          <button className="absolute  top-[.3rem] right-3 rounded-full p-1 text-gray-500">
            <img src={SEARCH} alt="search" />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <img src={BAG} alt="Logo" className="h-5 w-5" />
        </div>
        <div className="flex items-center space-x-4">
          <img src={HEART} alt="Logo" className="h-5 w-5" />
        </div>
        <div className="flex items-center space-x-4">
          <img src={NOTIFICATION} alt="Logo" className="h-5 w-5" />
        </div>
        <div className="flex items-center space-x-4">
          <img src={USER} alt="Logo" className="h-5 w-5" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
