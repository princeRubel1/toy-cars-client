import React from "react";
import contact from "../../../assets/gallery/best-contact-us-pages-2.png";

const ContactUs = () => {
  return (
    <div>
      <div className="text-center space-y-3">
        <h2 className="text-5xl font-bold">Contact Us</h2>
        <p className="text-gray-500">
          We value your feedback and are always happy to assist you. If you have
          any questions, comments, or suggestions, <br /> please don not
          hesitate to reach out to us. Here are the various ways you can contact
          us.
        </p>
      </div>
      <div className="flex p-10 gap-10 w-full justify-center items-center">
        <div className="">
          <img src={contact} className="h-96" alt="" />
        </div>
        <div>
          <div className="w-full mt-10">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder=" Full Name"
                  className="input input-bordered pr-96"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered pr-96"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl">Message</span>
                </label>
                <textarea
                  className="border"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
