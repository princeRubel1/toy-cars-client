import React from "react";

const Gallery = () => {
  return (
    <div className="mt-20">
      <div className="space-y-2 mb-20">
        {" "}
        <h2 className="text-4xl font-bold text-center ">Our Gallery</h2>
      </div>
      <div className="">
        <div className=" ml-40 w-10/12 space-x-4 mx-auto carousel carousel-center rounded-box">
          <div className="carousel-item">
            <div className="card  bg-base-100">
              <figure>
                <img
                  className="w-96 h-96 animate-pulse transition-transform transform hover:scale-125"
                  src="https://slidesigma.com/themes/html/toystore/assets/img/home-1/350x300.jpg"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card  bg-base-100">
              <figure>
                <img
                  className="animate-pulse w-96 h-96 transition-transform transform hover:scale-125"
                  src="https://slidesigma.com/themes/html/toystore/assets/img/home-1/350x300-0.jpg"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card  bg-base-100 ">
              <figure>
                <img
                  className="animate-pulse w-96 h-96 transition-transform transform hover:scale-125"
                  src="https://slidesigma.com/themes/html/kiddi/assets/img/instagram/ig-4.jpg"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card  bg-base-100">
              <figure>
                <img
                  className="animate-pulse w-96 h-96 transition-transform transform hover:scale-125"
                  src="https://img.freepik.com/free-photo/father-son-playing-with-trucks-lego-pieces_23-2148500805.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card  bg-base-100">
              <figure>
                <img
                  className="animate-pulse w-96 h-96 transition-transform transform hover:scale-125"
                  src="https://img.freepik.com/free-photo/young-boy-playing-with-fidget-home_23-2149946730.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card  bg-base-100 ">
              <figure>
                <img
                  className="w-96 h-96 transition-transform transform hover:scale-125"
                  src="https://img.freepik.com/free-photo/father-eating-child-playing_23-2148500792.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card  bg-base-100">
              <figure>
                <img
                  className="animate-pulse w-96 h-96 transition-transform transform hover:scale-125"
                  src="https://img.freepik.com/free-photo/cute-kid-sitting-floor-playing-with-toys_23-2149307013.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
