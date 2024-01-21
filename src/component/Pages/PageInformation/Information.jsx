import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsClockHistory } from "react-icons/bs";
import { RiMoneyDollarCircleLine, RiSecurePaymentLine } from "react-icons/ri";

const Information = () => {
  return (
    <div className="mt-20 mx-auto w-3/4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
      <div className="space-y-3 bg-white p-10 rounded-md shadow-lg">
        <p>
          <LiaShippingFastSolid className="text-7xl"></LiaShippingFastSolid>
        </p>
        <h2 className="text-2xl font-semibold">Free Shipping </h2>
        <p className="text-gray-500">
          play school, is an educational establishment or learning.
        </p>
      </div>
      <div className="space-y-3  bg-white p-10 rounded-md shadow-lg">
        <p>
          <BsClockHistory className="text-7xl"></BsClockHistory>
        </p>
        <h2 className="text-2xl font-semibold">24/7 Online Support</h2>
        <p className="text-gray-500">
          Children before they begin compulsory education at primary school.
        </p>
      </div>
      <div className="space-y-3  bg-white p-10 rounded-md shadow-lg">
        <p>
          <RiMoneyDollarCircleLine className="text-7xl"></RiMoneyDollarCircleLine>
        </p>
        <h2 className="text-2xl font-semibold">Money Back Gaurantee</h2>
        <p className="text-gray-500">
          Terminology varies by country In some European countries.
        </p>
      </div>
      <div className="space-y-3  bg-white p-10 rounded-md shadow-lg">
        <RiSecurePaymentLine className="text-7xl" />
        <h2 className="text-2xl font-semibold">100% Secure Checkout</h2>
        <p className="text-gray-500">
          Pre-Primary from 6 weeks old to 6 years old- is an educational
          childcare service.
        </p>
      </div>
    </div>
  );
};

export default Information;
