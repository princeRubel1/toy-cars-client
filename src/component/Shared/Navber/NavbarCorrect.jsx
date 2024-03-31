import React, { useContext } from "react";
import { AuthContext } from "../../../provideer/AuthProvider";
import { Link } from "react-router-dom";
import logo from "../../../assets/gallery/logo.png";

const NavbarCorrect = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <div
      style={{ backgroundColor: "#191E23" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="navbar max-w-screen-2xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52"
            >
              <Link to="/">
                <a>Home</a>
              </Link>

              <li>
                <a>All Toys</a>
              </li>
              <li>
                <a>My Toys</a>
              </li>
              <li>
                <a>Add A Toy</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <img src={logo} className="w-20 " alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu space-x-8 text-gray-400  text-xl menu-horizontal px-1">
            <Link to="/">
              <a>Home</a>
            </Link>

            <Link to="/all-toys">
              <a>All Toys</a>
            </Link>
            <>
              {user?.email ? (
                <>
                  <Link to="my-toy">
                    <a>My Toys</a>
                  </Link>
                  <Link to="/add-toy">
                    <a>Add A Toy</a>
                  </Link>
                </>
              ) : (
                ""
              )}
            </>
            <Link to="/blog">
              <a>Blog</a>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <>
              <img
                title={user?.displayName}
                className="rounded-full mx-auto lg:mt-0 sm:mt-2 md:mt-2 mr-4 flex items-center w-14 cursor-pointer"
                src={user?.photoURL}
              />
              <span>
                <button
                  onClick={handleLogOut}
                  className="px-8 py-3 bg-transparent border text-white border-primary rounded
                hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Log Out
                </button>
              </span>
            </>
          ) : (
            <span className="  ">
              <Link to="login">
                <button
                  className="px-8 py-3 bg-transparent border text-cyan-500  border-primary rounded
                hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Login
                </button>
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarCorrect;
