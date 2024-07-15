import React from "react";
import "../stylesheets/logo.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.svg";
import Cookies from "js-cookie";

const Navbar = ({token,setToken}) => {

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand w-25" to="/">
            <img src={logo} alt="Logo" className="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-between w-50 me-5">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              {token ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    <span onClick={logout}>Logout</span>
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signin">
                      SignUp
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
