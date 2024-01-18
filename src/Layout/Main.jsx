import React from "react";
import Navbar from "../component/Shared/Navber/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-screen-2xl mx-auto">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
