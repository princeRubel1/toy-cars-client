import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/gallery/log.svg";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // toggle menubtn
  const toogleMenu = () => {
    console.log("btn clicked");
    setIsMenuOpen(!isMenuOpen);
  };

  // function for making navbar sticky when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  });
  const navItems = (
    <>
      <li className="list-none">
        <Link className="block px-4 cursor-pointer hover:text-gray-400 " to="/">
          Home
        </Link>
      </li>

      <li className="list-none">
        <Link
          className="block px-4 cursor-pointer hover:text-gray-400 "
          to="/about"
        >
          About
        </Link>
      </li>
      <li className="list-none">
        <Link
          className="block px-4 cursor-pointer hover:text-gray-400 "
          to="/services"
        >
          Services
        </Link>
      </li>
      <li className="list-none">
        <Link
          className="block px-4 cursor-pointer hover:text-gray-400 "
          to="/blog"
        >
          Blog
        </Link>
      </li>
      <li className="list-none">
        <Link
          className="block px-4 cursor-pointer hover:text-gray-400 "
          to="/contact"
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-10">
      <nav
        className={`py-4 md:px-12 px-4 bg-white ${
          isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""
        }`}
      >
        {/* for large devices */}
        <div className="flex items-center justify-between ">
          <div className="cursor-pointer">
            {/* for logo */}
            <img src={logo} alt="" className="h-10" />
          </div>

          <div className="lg:flex items-center gap-3 hidden text-body text-lg">
            {navItems}
          </div>
          {/* contact me btn */}
          <div className="lg:block hidden">
            <Link to="login">
              <button
                className="px-8 py-3 bg-transparent border text-cyan-500 border-primary rounded
                hover:bg-primary hover:text-white transition-all duration-300"
              >
                Login
              </button>
            </Link>
          </div>
          {/* menubtn from mobile device */}
          <button onClick={toogleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 p-4 bg-red-400 rounded-lg text-white text-lg">
            {navItems}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
