import React, { useEffect, useRef, useState } from "react";
import hurry from "../../../assets/banner/harry.webp";

const COUNTDOWN_TARGET = new Date("2024-09-31T23:59:59");

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};
const HarryUp = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="mt-40 mb-40 max-w-screen-2xl mx-auto flex justify-evenly items-center">
      <div>
        <img
          className="h-60"
          src="https://img.freepik.com/free-vector/convertible-car-cartoon-sticker-white-background_1308-76460.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
          alt=""
        />
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h1 style={{ fontStyle: "italic" }} className="text-red-400 text-2xl">
            Hurry Up!
          </h1>
          <h2 className="text-4xl font-bold">Hot Deal! Sale Up To 20% off</h2>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            id, unde hic molestias omnis.
          </p>
        </div>
        <div className="flex items-center justify-center gap-5 text-center">
          <div className=" bg-white p-6 shadow-2xl space-y-3 rounded-lg">
            <span className="text-6xl">{timeLeft.days}</span>
            <h4 className="text-4xl">Days</h4>
          </div>
          <div className=" bg-white p-6 shadow-2xl space-y-3 rounded-lg">
            <span className="text-6xl">{timeLeft.hours}</span>
            <h4 className="text-4xl">Hours</h4>
          </div>
          <div className=" bg-white p-6 shadow-2xl space-y-3 rounded-lg">
            <span className="text-6xl">{timeLeft.minutes}</span>
            <h4 className="text-4xl">Minutes</h4>
          </div>
          <div className=" bg-white p-6 shadow-2xl space-y-3 rounded-lg">
            <span className="text-6xl">{timeLeft.seconds}</span>
            <h4 className="text-4xl">Seconds</h4>
          </div>
        </div>
        <div className="text-center">
          <button className="animate-pulse bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 transition-all duration-300 rounded">
            Shop Now
          </button>
        </div>
      </div>
      <div>
        <img src={hurry} className="h-80" alt="" />
      </div>
    </div>
  );
};

export default HarryUp;
