import React from "react";
import Navbar from "../component/Shared/Navber/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Shared/Footer/Footer";
import NavbarCorrect from "../component/Shared/Navber/NavbarCorrect";

const Main = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <NavbarCorrect></NavbarCorrect>
      <div className="max-w-full">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
