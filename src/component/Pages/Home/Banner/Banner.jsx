import React from "react";
import img1 from "../../../../assets/banner/banner1.jpg";
import img2 from "../../../../assets/banner/banner2.jpg";
import img3 from "../../../../assets/banner/banner3.jpg";
import img4 from "../../../../assets/banner/ banner4.avif";

const Banner = () => {
  return (
    <div className="mt-16">
      <div className="carousel lg:h-[900px] sm:h-[400px] md:h-[400px]  w-full">
        <div id="item1" className="carousel-item  relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute h-full  flex items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
            <div className="text-white  lg:space-y-7 md:space-y-4 sm:space-y-2 lg:w-1/2 sm:w-1/3 lg:ml-48 sm:ml-20">
              <h2 className="lg:text-6xl sm:text-xl md:text-2xl font-bold space-y-2">
                Buy 3 get <br />
                <span className="text-red-400"> 50% </span> discount
              </h2>
              <p className="lg:text-xl text-gray-400 font-semibold">
                Toys and real-life objects like cars are very sensorily
                engaging. Kids can interact with toy cars, trucks, etc. through
                spinning their wheels, watching them move in a variety of
                directions, or hearing the sounds they make.
              </p>
              <div>
                <button className="animate-pulse bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-6 transition-all duration-300 rounded">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="item1" className="carousel-item  relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute h-full flex items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
            <div className="text-white lg:space-y-7 md:space-y-4 sm:space-y-2 lg:w-1/2 sm:w-1/3 lg:ml-48 sm:ml-20">
              <h2 className="lg:text-6xl sm:text-xl md:text-2xl font-bold space-y-2">
                Buy 3 get <br />
                <span className="text-red-400"> 50% </span> discount
              </h2>
              <p className="lg:text-xl text-gray-400 font-semibold">
                Toys and real-life objects like cars are very sensorily
                engaging. Kids can interact with toy cars, trucks, etc. through
                spinning their wheels, watching them move in a variety of
                directions, or hearing the sounds they make.
              </p>
              <div>
                <button className="animate-pulse bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-6 transition-all duration-300 rounded">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="item1" className="carousel-item  relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute h-full flex items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
            <div className="text-white lg:space-y-7 md:space-y-4 sm:space-y-2 lg:w-1/2 sm:w-1/3 lg:ml-48 sm:ml-20">
              <h2 className="lg:text-6xl sm:text-xl md:text-2xl font-bold space-y-2">
                Buy 3 get <br />
                <span className="text-red-400"> 50% </span> discount
              </h2>
              <p className="lg:text-xl text-gray-400 font-semibold">
                Toys and real-life objects like cars are very sensorily
                engaging. Kids can interact with toy cars, trucks, etc. through
                spinning their wheels, watching them move in a variety of
                directions, or hearing the sounds they make.
              </p>
              <div>
                <button className="animate-pulse bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-6 transition-all duration-300 rounded">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="item1" className="carousel-item  relative w-full">
          <img src={img4} className="w-full " />
          <div className="absolute  h-full flex items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
            <div className="text-white lg:space-y-7 md:space-y-4 sm:space-y-2 lg:w-1/2 sm:w-1/3 lg:ml-48 sm:ml-20">
              <h2 className="lg:text-6xl sm:text-xl md:text-2xl font-bold space-y-2">
                Buy 3 get <br />
                <span className="text-red-400"> 50% </span> discount
              </h2>
              <p className="lg:text-xl text-gray-400 font-semibold">
                Toys and real-life objects like cars are very sensorily
                engaging. Kids can interact with toy cars, trucks, etc. through
                spinning their wheels, watching them move in a variety of
                directions, or hearing the sounds they make.
              </p>
              <div>
                <button className="animate-pulse bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-6 transition-all duration-300 rounded">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
