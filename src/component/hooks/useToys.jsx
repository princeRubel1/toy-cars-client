import React, { useEffect, useState } from "react";

const useToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://toy-cars-server-navy.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  // Return toys state to provide access to toy data
  return [toys];
};

export default useToys;
