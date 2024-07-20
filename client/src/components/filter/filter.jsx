import React from 'react';

const Filter = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Filter</h2>
          <button className="flex items-center text-gray-500">
            <span className="mr-1">Reset</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2m-4-8a8 8 0 108 8"
              />
            </svg>
          </button>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between border-t border-b border-gray-300 py-2">
            <span className="text-gray-900">Gender</span>
            <input type="checkbox" className="form-checkbox text-blue-500" />
          </div>
          <div className="flex items-center border-t border-gray-300 py-2">
            <input type="radio" name="gender" className="form-radio text-blue-500 mr-2" />
            <span className="text-gray-900">Boy</span>
          </div>
          <div className="flex items-center border-t border-b border-gray-300 py-2">
            <input type="radio" name="gender" className="form-radio text-blue-500 mr-2" />
            <span className="text-gray-900">Girl</span>
          </div>
          <hr />
          {['Brand', 'Color', 'Discount', 'Price', 'Rating', 'Combo', 'Material', 'Print Or Pattern', 'Neckless', 'Bottom Fabric'].map((filter, index) => (
            <div key={index} className="flex items-center justify-between border-t border-b border-gray-300 py-2">
              <span className="text-gray-900">{filter}</span>
              <input type="checkbox" className="form-checkbox text-blue-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
