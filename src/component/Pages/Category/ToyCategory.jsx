import React from "react";
import { FaDollarSign, FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyCategory = ({ toy }) => {
  const {
    _id,
    toy_name,
    toy_picture,
    toy_rating,
    toy_price,
    detail_description,
  } = toy;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={toy_picture} className="h-96" alt="Shoes" />
        </figure>
        <p className="bg-red-600 absolute right-0 px-4 py-2 text-white">
          ${toy_price}
        </p>
        <div className="card-body h-[200px] text-center">
          <h2 className="text-2xl font-bold text-center">{toy_name}</h2>
          <p className="text-center font-semibold">{detail_description}</p>
          <div className="card-actions justify-center">
            <Link
              to={`/details-page/${_id}`}
              style={{ borderRadius: "8px", borderBottom: " 3px solid orange" }}
              className="py-2 px-6 hover:bg-black bg-slate-300  text-xl  hover:text-white shadow-lg font-semibold text-black"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCategory;
