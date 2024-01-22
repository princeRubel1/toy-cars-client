import React, { useEffect, useState } from "react";
import ModelCarsCart from "./ModelCarsCart";

const ModelCars = () => {
  const [modelCars, setModelCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/models")
      .then((res) => res.json())
      .then((data) => setModelCars(data));
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
          {modelCars.map((modelCar) => (
            <ModelCarsCart
              key={modelCar.id}
              modelCar={modelCar}
            ></ModelCarsCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelCars;
