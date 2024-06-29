import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { PiBagFill } from "react-icons/pi";
import { FaLock } from "react-icons/fa6";
import "../stylesheets/signin.css";
import signimg from "../assets/signimg.svg";
import { NavLink } from "react-router-dom";

const Signin = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <section className="card shadow rounded-4 w-50">
        <h2 className="p-3 m-4">SignUp</h2>
        <div className="d-lg-flex justify-content-center align-items-center">
          <div className="w-50">
            <form id="signup-form" className="pb-2 mx-3 w-100 d-grid g-5">
              <div className="mb-3 w-100">
                <label htmlFor="name" className="mx-3">
                  <FaUser />
                </label>
                <input
                  className="border w-75 border-black border-end-0 border-start-0 border-top-0 fs-5"
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3 w-100">
                <label htmlFor="email" className="mx-3">
                  <MdEmail />
                </label>
                <input
                  className="border w-75 border-black border-end-0 border-start-0 border-top-0 fs-5"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3 w-100">
                <label htmlFor="phone" className="mx-3">
                  <MdPhone />
                </label>
                <input
                  className="border w-75 border-black border-end-0 border-start-0 border-top-0 fs-5"
                  type="number"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder="Phone"
                />
              </div>
              <div className="mb-3 w-100">
                <label htmlFor="work" className="mx-3">
                  <PiBagFill />
                </label>
                <input
                  className="border w-75 border-black border-end-0 border-start-0 border-top-0 fs-5"
                  type="text"
                  name="work"
                  id="work"
                  autoComplete="off"
                  placeholder="Profession"
                />
              </div>
              <div className="mb-3 w-100">
                <label htmlFor="password" className="mx-3">
                  <FaLock />
                </label>
                <input
                  className="border w-75 border-black border-end-0 border-start-0 border-top-0 fs-5"
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3 w-100">
                <label htmlFor="cpassword" className="mx-3">
                  <FaLock />
                </label>
                <input
                  className="border w-75 border-black border-end-0 border-start-0 border-top-0 fs-5"
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  autoComplete="off"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="m-4">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="btn text-white fw-bolder px-3 btn-outline-none btn-info"
                  value="SignUp"
                />
              </div>
            </form>
          </div>
          <div className="w-50 text-center d-none d-lg-inline">
            <img src={signimg} alt="img" className="img" />
            <div>
              Already have an account? <NavLink to="/login">Login</NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
