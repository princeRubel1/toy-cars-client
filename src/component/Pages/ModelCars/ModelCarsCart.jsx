import React from "react";
import { FaRupeeSign } from "react-icons/fa";

const ModelCarsCart = ({ modelCar }) => {
  const { id, img, toy_car_name, rating, price, short_description } = modelCar;
  return (
    <div className="bg-slate-50 w-11/12 mt-20 mx-auto shadow-lg px-6 py-8 ">
      <div className="space-y-4">
        <img
          src={img}
          alt=""
          className="w-[450px] h-80 bg-white rounded-lg mx-auto px-4 py-5"
        />
        <div className="mx-auto w-[450px] flex justify-between">
          <h2 className="text-xl font-semibold text-gray-500">
            <span className="text-black">Car_Name</span>: {toy_car_name}
          </h2>
          <span className="flex items-center space-x-2 text-2xl font-semibold text-gray-400">
            <span className="text-black">Price</span>:
            <FaRupeeSign></FaRupeeSign> {price}
          </span>
        </div>
        <div className="mx-auto w-[450px] space-y-2">
          <h4 className="text-xl font-semibold text-gray-500">
            <span className="text-black"> Description</span> :{" "}
            {short_description}
          </h4>
        </div>
        <div className="mx-auto w-[450px] flex justify-between items-center">
          <h4 className="text-xl font-semibold text-red-300">
            Rating : {rating}
          </h4>
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 transition-all duration-300 rounded">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCarsCart;
