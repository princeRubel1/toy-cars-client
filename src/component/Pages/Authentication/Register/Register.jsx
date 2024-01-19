import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import google from "../../../../assets/gallery/google.png";
import { AuthContext } from "../../../../provideer/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-dvh bg-base-200">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body w-full">
            <h1 className="text-5xl text-center font-bold">Register now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="text-xl label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="divider">Or Sign In with</div>
            <div className="flex justify-center space-x-3 items-center">
              <Link>
                <img className="h-8" src={google} alt="" />
              </Link>
              <Link>
                <FaGithub className="text-4xl"></FaGithub>
              </Link>
            </div>
            <div className="text-center">
              <h2>
                Have an account?{" "}
                <Link to="/login" className="text-red-500">
                  Please Login
                </Link>{" "}
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
