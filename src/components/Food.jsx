import { useState } from "react";
import { data } from "../data/data.js";
const Food = () => {
  const [food, setFoods] = useState(data);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu
      </h1>
      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button className="border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white m-1 btn">
              All
            </button>
            <button className="border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white m-1 btn">
              Burgers
            </button>
            <button className="border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white m-1 btn">
              Pizza
            </button>
            <button className="border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white m-1 btn">
              Salads
            </button>
            <button className="border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white m-1 btn">
              Chicken
            </button>
          </div>
        </div>

        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button className="border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white m-1 btn">
              $
            </button>
            <button className="border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white m-1 btn">
              $$
            </button>
            <button className="border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white m-1 btn">
              $$$
            </button>
            <button className="border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white m-1 btn">
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {food.map((item, index) => (
          <div key={index} className="border shadow-lg hover:scale-105 duration-300 rounded-lg">
            <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg" />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold text-gray-700">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
