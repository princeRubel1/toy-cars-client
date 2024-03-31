import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ToyCategory from "./ToyCategory";
// import useToys from "../../hooks/useToys";

const CategoryTab = ({ item, title }) => {
  return (
    <>
      <div>
        <ToyCategory key={item.id} toy={item} title={title} />
      </div>
    </>
  );
};

export default CategoryTab;
