import React, { useContext } from "react";
import { Link } from "react-router-dom";
import google from "../../../../assets/gallery/google.png";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../../provideer/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // login for google
  const handleGoogleSign = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSign = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-dvh bg-base-200">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body w-full">
          <h1 className="text-5xl text-center font-bold">Login now!</h1>
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
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="divider">Or Sign In with</div>
          <div className="flex justify-center space-x-3 items-center">
            <Link onClick={handleGoogleSign}>
              <img className="h-8" src={google} alt="" />
            </Link>
            <Link onClick={handleGithubSign}>
              <FaGithub className="text-4xl"></FaGithub>
            </Link>
          </div>
          <div className="text-center">
            <h2>
              Don't have an account?{" "}
              <Link to="/register" className="text-red-500">
                Please Register
              </Link>{" "}
            </h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
