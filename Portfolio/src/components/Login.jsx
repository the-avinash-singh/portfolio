import React, { useState } from "react";
import { SiGmail } from "react-icons/si";
import { FaLock } from "react-icons/fa6";
import "../stylesheets/login.css";
import login from "../assets/login.webp";
import { NavLink, useNavigate } from "react-router-dom";
import { loginApi } from "../apis/apis";

const Login = ({setToken}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handelInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const apiCall = async (e) => {
    e.preventDefault();
    const res = await loginApi(user);
    if (res.status == 200) {
      navigate("/");
      setToken(true)
      const result = await res.json();
        localStorage.setItem("token",result.token);
    } else {
      const result = await res.json();
      alert(`unsuccessful: ${result.message?result.message:result.error}`)
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center full-height">
        <section className="shadow rounded-4 custom-width">
          <h2 className="p-3 m-4 pb-0 mb-0">LogIn</h2>
          <div className="d-lg-flex justify-content-center align-items-center">
            <div className=" d-none d-lg-inline img-div mb-5 w-100">
              <img src={login} alt="img" className="img" />
              <div className="text-center">
                Don't have an account? <NavLink to="/signin">SignUp</NavLink>{" "}
              </div>
            </div>
            <div className="d-flex w-100 fs-5 align-items-center mt-5">
              <form id="login-form" className="pb-2 w-100 me-4 mx-lg-0">
                <div className="mb-3 d-flex">
                  <label htmlFor="email" className="mx-4">
                    <SiGmail />
                  </label>
                  <input
                    className="border me-3 w-100 border-black border-end-0 border-start-0 border-top-0 fs-5"
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Email"
                    value={user.email}
                    onChange={handelInput}
                  />
                </div>
                <div className="mb-3 d-flex">
                  <label htmlFor="password" className="mx-4">
                    <FaLock />
                  </label>
                  <input
                    className="border me-3 w-100 border-black border-end-0 border-start-0 border-top-0 fs-5"
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Password"
                    value={user.password}
                    onChange={handelInput}
                  />
                </div>
                <div className=" d-flex flex-column ms-5 me-3 mb-lg-3">
                  <input
                    type="submit"
                    name="login"
                    id="login"
                    className="btn text-white fw-bolder mx-auto mx-lg-0 px-3 btn-outline-none btn-info"
                    value="Log in"
                    onClick={apiCall}
                  />
                  <span className="fs-6 mb-3 d-lg-none text-center">
                    Don't have an account?{" "}
                    <NavLink to="/signin">SignUp</NavLink>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
