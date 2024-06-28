import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { PiBagFill } from "react-icons/pi";
import { FaLock } from "react-icons/fa6";
import "../stylesheets/signin.css";
import signimg from "../assets/signimg.jpg";
import { NavLink } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <section className="mx-auto shadow mt-5 rounded w-50">
        <div className="d-flex  align-items-center">
          <div className="w-50">
            <h2 className="p-3 m-4">SignUp</h2>
            <form
              id="signup-form"
              className="pb-2 w-100"
            >
              <div className="ms-5">
                <label htmlFor="name" className="mx-3">
                  <FaUser />
                </label>
                <input
                  className="border border-black border-end-0 border-start-0 border-top-0 fs-5"
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder="Name"
                />
              </div>
              <div className="ms-5">
                <label htmlFor="email" className="mx-3">
                  <MdEmail />
                </label>
                <input
                  className="border border-black border-end-0 border-start-0 border-top-0 fs-5"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                />
              </div>
              <div className="ms-5">
                <label htmlFor="phone" className="mx-3">
                  <MdPhone />
                </label>
                <input
                  className="border border-black border-end-0 border-start-0 border-top-0 fs-5"
                  type="number"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder="Phone"
                />
              </div>
              <div className="ms-5">
                <label htmlFor="work" className="mx-3">
                  <PiBagFill />
                </label>
                <input
                  className="border border-black border-end-0 border-start-0 border-top-0 fs-5"
                  type="text"
                  name="work"
                  id="work"
                  autoComplete="off"
                  placeholder="Profession"
                />
              </div>
              <div className="ms-5">
                <label htmlFor="password" className="mx-3">
                  <FaLock />
                </label>
                <input
                  className="border border-black border-end-0 border-start-0 border-top-0 fs-5"
                  type="text"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                />
              </div>
              <div className="ms-5">
                <label htmlFor="cpassword" className="ms-3">
                  <FaLock />
                </label>
                <input
                  className="border border-black border-end-0 border-start-0 border-top-0 fs-5"
                  type="text"
                  name="cpassword"
                  id="cpassword"
                  autoComplete="off"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="m-5">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="btn text-white fw-bolder p-x-3 ms-3 btn-outline-none btn-info"
                  value="SignUp"
                />
              </div>
            </form>
          </div>
          <div className="text-center w-50">
            <img src={signimg} alt="img" className="w-75" />
            <div>
              already have a account<NavLink to="/login">login</NavLink>?
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
