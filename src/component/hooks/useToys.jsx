import React, { useEffect, useState } from "react";

const useToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  // Return toys state to provide access to toy data
  return [toys];
};

export default useToys;
