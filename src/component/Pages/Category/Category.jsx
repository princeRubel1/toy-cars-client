import React from "react";

const Category = () => {
  return (
    <div className="w-10/12 mx-auto flex justify-between mt-20">
      <div>
        <h2 className="text-4xl font-bold">Shop by Categories</h2>
      </div>
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab text-2xl font-semibold"
          aria-label="Remote Control Cars"
        />
        <div role="tabpanel" className="tab-content">
          <div className=" shadow-2xl space-y-2 p-5 rounded-2xl">
            <img
              className=" mx-auto w-96 rounded-2xl "
              src="https://img.freepik.com/free-vector/children-riding-go-kart_1308-107220.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
              alt=""
            />
            <div className="w-2/3 mx-auto space-y-2">
              <p className=" text-gray-500 mb-4">
                A remote control toy is a recreational device designed for
                remote operation through a handheld controller. <br />
                These toys come in various forms, including cars, helicopters,
                boats, and more.
              </p>
              <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-6 transition-all duration-300 rounded">
                More Product
              </button>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab text-2xl font-semibold"
          aria-label="Educational Toy Cars"
          checked
        />
        <div role="tabpanel" className="tab-content p-10">
          <div className=" shadow-2xl space-y-2 p-5 rounded-2xl">
            <img
              className=" mx-auto w-96 rounded-2xl "
              src="https://img.freepik.com/free-photo/low-angle-car-race-siblings_23-2148355146.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
              alt=""
            />
            <div className="w-2/3 mx-auto space-y-2">
              <p className=" text-gray-500">
                An educational remote control toy combines the enjoyment of play
                with the benefits of learning. <br /> These toys are designed to
                engage children in educational activities while incorporating
                remote control features.
              </p>
              <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-6 transition-all duration-300 rounded">
                More Product
              </button>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab text-2xl font-semibold"
          aria-label="Model Cars"
        />

        <div role="tabpanel" className="tab-content p-10">
          <div className=" shadow-2xl space-y-2 p-5 rounded-2xl">
            <img
              className=" mx-auto w-96 rounded-2xl "
              src="https://img.freepik.com/free-photo/kid-playing-home_23-2148131061.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
              alt=""
            />
            <div className="w-2/3 mx-auto space-y-2">
              <p className=" text-gray-500">
                A model toy car is a scaled-down replica of a real-world
                automobile, often crafted with meticulous attention to detail.{" "}
                <br />
                These models can be made from various materials such as plastic,
                diecast metal, or wood
              </p>
              <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-6 transition-all duration-300 rounded">
                More Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
