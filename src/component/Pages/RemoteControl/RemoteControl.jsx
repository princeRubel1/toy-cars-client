import React, { useEffect, useState } from "react";
import RemoteControlCard from "./RemoteControlCard";

const RemoteControl = () => {
  const [remoteCars, setRemoteCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/remotes")
      .then((res) => res.json())
      .then((data) => setRemoteCars(data));
  }, []);
  return (
    <div className="mt-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold pt-12">
          More Products are Available{" "}
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols gap-7">
        {remoteCars.map((remoteCar) => (
          <RemoteControlCard
            key={remoteCar.id}
            remoteCar={remoteCar}
          ></RemoteControlCard>
        ))}
      </div>
    </div>
  );
};

export default RemoteControl;
