import React, { useEffect, useState } from "react";
import EducationalCarsCart from "./EducationalCarsCart";

const EducationalCars = () => {
  const [educationalCars, setEducationalCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/educationals")
      .then((res) => res.json())
      .then((data) => setEducationalCars(data));
  }, []);
  return (
    <div>
      <div className="mt-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold pt-12">
            More Products are Available{" "}
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols gap-7">
          {educationalCars.map((educationalCar) => (
            <EducationalCarsCart
              key={educationalCar.id}
              educationalCar={educationalCar}
            ></EducationalCarsCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationalCars;
