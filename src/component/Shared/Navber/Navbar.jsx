import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/gallery/log.svg";
import { HiMenu } from "react-icons/hi";
import { AuthContext } from "../../../provideer/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { user, logOut } = useContext(AuthContext);

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
  // user logout
  const handleLogOut = () => {
    logOut().then().catch();
  };
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
          to="/all-toys"
        >
          All Toys
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
      <>
        {user?.email ? (
          <span className="lg:flex justify-evenly items-center">
            <span className="">
              <Link
                className="block px-4 cursor-pointer hover:text-gray-400 "
                to="/add-toy"
              >
                Add A Toy
              </Link>
            </span>
            <span className="flex">
              <Link
                style={{ marginRight: "1042px" }}
                className="block grow px-4 cursor-pointer hover:text-gray-400 "
                to="/my-toys"
              >
                My Toys
              </Link>
            </span>
            <img
              title={user?.displayName}
              className="rounded-full mx-auto lg:mt-0 sm:mt-2 md:mt-2 mr-4 flex items-center w-14 cursor-pointer"
              src={user?.photoURL}
            />
            <span>
              <button
                onClick={handleLogOut}
                className="px-8 py-3 bg-transparent border text-slate-300 border-primary rounded
                hover:bg-primary hover:text-white transition-all duration-300"
              >
                Log Out
              </button>
            </span>
          </span>
        ) : (
          <span className="lg:block hidden ">
            <Link to="login">
              <button
                className="px-8 py-3 bg-transparent border text-cyan-500 border-primary rounded
                hover:bg-primary hover:text-white transition-all duration-300"
              >
                Login
              </button>
            </Link>
          </span>
        )}
      </>
    </>
  );
  return (
    <header className="max-w-full fixed top-0 left-0 right-0 z-10">
      <nav
        style={{ backgroundColor: "#191E23" }}
        className={`py-4 md:px-12 px-4  ${
          isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""
        }`}
      >
        {/* for large devices */}
        <div className="flex items-center justify-between ">
          <div className="cursor-pointer">
            {/* for logo */}
            <img src={logo} alt="" className="h-10" />
          </div>

          <div className="">
            <div className="lg:flex items-center gap-3 hidden text-slate-300 text-lg ">
              {navItems}
            </div>
          </div>
          {/* contact me btn */}
          <div></div>
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
