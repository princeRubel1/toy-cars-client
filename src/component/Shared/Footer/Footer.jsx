import React from "react";
import logo from "../../../assets/gallery/logo.png";

const Footer = () => {
  return (
    <div className="mt-24" style={{ backgroundColor: "#191E23" }}>
      <footer className="footer p-10 text-base-content max-w-screen-2xl mx-auto">
        <aside>
          <img className="w-20" src={logo} alt="" />
          <p className="text-gray-400">
            Car Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav className="text-gray-400">
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="text-gray-400">
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="text-gray-400">
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
