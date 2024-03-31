import React from "react";
import { Link } from "react-router-dom";

const NewCategory = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto">
      <div>
        <h2 className="text-4xl font-bold text-center">Shop by Categories</h2>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className=" w-[500px] shadow-2xl space-y-2 p-5 rounded-2xl">
          <img
            className=" mx-auto w-96 mt-8  rounded-2xl "
            src="https://img.freepik.com/free-vector/children-riding-go-kart_1308-107220.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
            alt=""
          />
          <div className=" p-5 space-y-2">
            <p className="text-justify text-gray-500 mb-4">
              A remote control toy is a recreational device designed for remote
              operation through a handheld controller. These toys come in
              various forms, including cars, helicopters, boats, and more.
            </p>
            <Link to="/all-toys">
              <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 transition-all duration-300 rounded">
                More Product
              </button>
            </Link>
          </div>
        </div>
        <div className=" shadow-2xl w-[500px] space-y-2 p-5 rounded-2xl">
          <img
            className=" mx-auto mt-8 w-96 rounded-2xl "
            src="https://img.freepik.com/free-photo/low-angle-car-race-siblings_23-2148355146.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
            alt=""
          />
          <div className="p-5 mx-auto space-y-2">
            <p className="text-justify text-gray-500 mb-4">
              An educational remote control toy combines the enjoyment of play
              with the benefits of learning These toys are designed to engage
              children in educational activities while incorporating remote
              control features.
            </p>
            <Link to="/all-toys">
              <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 transition-all duration-300 rounded">
                More Product
              </button>
            </Link>
          </div>
        </div>
        <div className=" shadow-2xl w-[500px] space-y-2 p-5 rounded-2xl">
          <img
            className=" mx-auto mt-8 w-96 rounded-2xl "
            src="https://img.freepik.com/free-photo/kid-playing-home_23-2148131061.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
            alt=""
          />
          <div className="p-5 mx-auto space-y-2">
            <p className=" text-justify text-gray-500 mb-4">
              A model toy car is a scaled-down replica of a real-world
              automobile, often crafted with meticulous attention to detail.
              These models can be made from various materials such as plastic,
              diecast metal, or wood
            </p>
            <Link to="/all-toys">
              <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 transition-all duration-300 rounded">
                More Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCategory;
