import React from "react";
import { FaFolderOpen, FaPhone, FaUser } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLock } from "react-icons/fa6";
import "../stylesheets/signin.css";
import signimg from "../assets/signimg.svg";
import { NavLink } from "react-router-dom";

const Signin = () => {
  return (
    <div className="parent">
      <section className="card shadow rounded-4 w-50">
        <h2 className="p-3 m-4 pb-0 mb-0">SignUp</h2>
        <div className="d-lg-flex justify-content-center align-items-center">
        <div className=" d-none d-lg-inline img-div">
            <img src={signimg} alt="img" className="img" />
            <div className="text-center">
              Already have an account? <NavLink to="/login">Login</NavLink>
            </div>
          </div>
          <div className="d-flex fs-5 align-items-center mt-5 ms-3">
            <form id="signup-form" className="pb-2 mx-3 w-100">
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
                <SiGmail />
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
                  <FaPhone />
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
                  <FaFolderOpen /> 
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
        </div>
      </section>
    </div>
  );
};

export default Signin;
