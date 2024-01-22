import React from "react";
import Marquee from "react-fast-marquee";

const Review = () => {
  return (
    <div className="mt-20 mb-20">
      <div className="text-center">
        <h2 className="text-5xl font-bold  ">Clients Reviews</h2>
      </div>
      <Marquee className="mt-20">
        <div className="flex gap-10  ">
          <div
            style={{ backgroundColor: "#1D232A" }}
            className=" w-[450px] rounded-lg  shadow-2xl"
          >
            <figure className="w-1/3 mx-auto">
              <img
                className="h-40 w-40 rounded-full mt-5"
                src="https://img.freepik.com/free-photo/rich-man-with-beard-thinking-about-business_1153-7869.jpg?w=1060&t=st=1705826380~exp=1705826980~hmac=9cf7429f97f366182c0916fac05d5e3ad9742f9432a10c958248a8b9b92a6842"
                alt=""
              />
            </figure>
            <div className="text-center mt-4">
              <h2 className="text-2xl text-gray-200 font-bold">
                James Anderson
              </h2>
            </div>
            <div className="card-body">
              <p className="text-gray-500 h-1/2">
                With being new I had many apprehensions about ordering. How the
                process has been simple and better than expected. I kick myself
                for not doing this earlier. I even received a call to remind me
                to check my resale information. They were not asking for my
                personal information just a reminder to go to the site and
                review. Excellent customer service and easy to work with
                companies
              </p>
              <span className="mt-5 text-gray-500 flex justify-end">
                2 days ago..
              </span>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#1D232A" }}
            className=" w-[450px] rounded-lg shadow-2xl"
          >
            <figure className="w-1/3 mx-auto">
              <img
                className="h-40 w-40 rounded-full mt-5"
                src="https://img.freepik.com/free-photo/handsome-guy-sweater_144627-13026.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
                alt=""
              />
            </figure>
            <div className="text-center mt-4">
              <h2 className="text-2xl text-gray-200 font-bold">John Roberts</h2>
            </div>
            <div className="card-body">
              <p className="text-gray-500 h-1/2">
                This site is created to steal peoples money. $1285 was stolen
                from me by( Guangzhu Huimei Technology Co, Ltd) and the help
                center did nothing. I do not recommend dealing with this fake
                site. I bought a massage machine which worked only for 2
                months., be careful from this company, their products are cheap
                quality and easy buy it.I really happy for this product.Its
                quality is too good.
              </p>
              <span className="mt-5 text-gray-500 flex justify-end">
                8 days ago..
              </span>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#1D232A" }}
            className=" w-[450px] rounded-lg  shadow-2xl"
          >
            <figure className="w-1/3 mx-auto">
              <img
                className="h-40 w-40 rounded-full mt-5 "
                src="https://img.freepik.com/free-photo/funny-smiling-hipster-handsome-man-guy-stylish-summer-cloth-street-sunglasses_158538-2280.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
                alt=""
              />
            </figure>
            <div className="text-center mt-4">
              <h2 className="text-2xl text-gray-200 font-bold">
                Robert Mitchell
              </h2>
            </div>
            <div className="card-body">
              <p className="text-gray-500 h-1/2">
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
                mauris cursus venenatis. Maecenas gravida urna vitae accumsan
                feugiat. Vestibulum commodo, ante sit urna purus rutrum sem. a
                massage machine which worked only for 2 months., be careful from
                This site is created to steal peoples money. $1285 was stolen
                from me by( Guangzhu Huimei Technology Co, Ltd)
              </p>
              <span className="mt-5 text-gray-500 flex justify-end">
                3 days ago..
              </span>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#1D232A" }}
            className=" w-[450px] rounded-lg  shadow-2xl mr-10"
          >
            <figure className="w-1/3 mx-auto">
              <img
                className="h-40 w-40 rounded-full mt-5 "
                src="https://img.freepik.com/free-photo/beautiful-woman-park-last-sunny-days_144627-16055.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
                alt=""
              />
            </figure>
            <div className="text-center mt-4">
              <h2 className="text-2xl text-gray-200 font-bold">Ava Thompson</h2>
            </div>
            <div className="card-body">
              <p className="text-gray-500 h-1/2">
                With being new I had many apprehensions about ordering. How the
                process has been simple and better than expected. I kick myself
                for not doing this earlier. I even received a call to remind me
                to check my resale information. They were not asking for my
                personal information just a reminder to go to the site and
                review. Excellent customer service and easy to work with
                companies
              </p>
              <span className="mt-5 text-gray-500 flex justify-end">
                5 days ago..
              </span>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Review;
