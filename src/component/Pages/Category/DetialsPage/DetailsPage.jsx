import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import bannerImg from "../../../../assets/banner/banner2.jpg";

const DetailsPage = () => {
  const toy = useLoaderData();
  const {
    _id,
    toy_name,
    toy_picture,
    toy_rating,
    toy_price,
    detail_description,
    seller_name,
    available_quantity,
  } = toy;
  //   console.log(toy);
  return (
    <div className="mt-20  max-w-screen-2xl mx-auto">
      <div>
        <div className=" relative">
          <img src={bannerImg} className="w-full h-80 opacity-70" alt="" />
          <div className=" absolute inset-0 flex justify-center items-center">
            <h2 className="text-5xl font-bold ">Toy Details</h2>
          </div>
        </div>
        <div className=" bg-white p-20 shadow-2xl mt-20 max-w-screen-xl rounded-md mx-auto">
          <div className="grid grid-cols-2 gap-10">
            <div className="">
              <img
                src={toy_picture}
                className="w-[600px] h-96 rounded-md"
                alt=""
              />
            </div>
            <div className=" w-[400px] space-y-4 bg-slate-200 p-10 rounded-md">
              <h1 className="text-2xl font-bold">Seller Name :</h1>
              <span className="text-xl">{seller_name}</span>
              <h1 className="text-2xl font-bold">Available Quantity :</h1>
              <span className="text-xl">{available_quantity}</span>
              <h1 className="text-2xl font-bold">Rating :</h1>
              <span className="text-xl">{toy_rating}</span>
              <p className="text-xl text-red-600">Price : $ {toy_price}</p>

              <div>
                <Link
                  style={{
                    borderRadius: "8px",
                    borderBottom: " 3px solid orange",
                  }}
                  className="py-2 px-6 hover:bg-black bg-slate-300  text-xl  hover:text-white shadow-lg font-semibold text-black"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-3 mt-4">
            <h2 className="text-2xl font-semibold">{toy_name}</h2>
            <h4 className="text-2xl  text-gray-500">{detail_description}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
