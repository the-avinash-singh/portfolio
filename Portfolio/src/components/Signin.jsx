import React, { useState } from "react";
import { FaFolderOpen, FaPhone, FaUser } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLock } from "react-icons/fa6";
import "../stylesheets/signin.css";
import signimg from "../assets/signimg.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { signinApi } from "../apis/apis";

const Signin = () => {
  const navigate=useNavigate()

  const [user,setUser]=useState({
    name:"",
    email:"",
    phone:"",
    work:"",
    password:"",
    cpassword:"",
  })
  const [match,setMatch]=useState(true)

  const handelInput=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const apiCall=async(e)=>{
    e.preventDefault()
    setMatch(false)
    if(user.password===user.cpassword){
      setMatch(true)
      const res=await signinApi(user);
      if(res.status==201){
        navigate("/")
        alert("Loggedin sucessfully")
      }else{
        const result=await res.json()
        alert(`Unsccessfull ${result.message}`)
      }
    }
  }

  return (
    <div className="full-height d-flex justify-content-center align-items-center">
      <section className="shadow rounded-4 custom-width">
        <h2 className="m-4 pb-0 mb-0">SignUp</h2>
        <div className="d-lg-flex justify-content-center align-items-center">
          <div className="d-flex fs-5 align-items-center mt-5 w-100">
            <form id="signup-form" className="pb-2 w-100 mx-4 mx-lg-0">
              <div className="mb-3 d-flex mx-4">
                <label htmlFor="name">
                  <FaUser />
                </label>
                <input
                  className="border w-100 border-black border-end-0 border-start-0 border-top-0 fs-5"
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder="Name"
                  value={user.name}
                  onChange={handelInput}
                />
              </div>
              <div className="mb-3 d-flex mx-4">
                <label htmlFor="email">
                  <SiGmail />
                </label>
                <input
                  className="border w-100 border-black border-end-0 border-start-0 border-top-0 fs-5"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                  value={user.email}
                  onChange={handelInput}
                />
              </div>
              <div className="mb-3 d-flex mx-4">
                <label htmlFor="phone">
                  <FaPhone />
                </label>
                <input
                  className="border w-100 border-black border-end-0 border-start-0 border-top-0 fs-5"
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder="Phone"
                  value={user.phone}
                  onChange={handelInput}
                />
              </div>
              <div className="mb-3 d-flex mx-4">
                <label htmlFor="work">
                  <FaFolderOpen />
                </label>
                <input
                  className="border w-100 border-black border-end-0 border-start-0 border-top-0 fs-5"
                  type="text"
                  name="work"
                  id="work"
                  autoComplete="off"
                  placeholder="Profession"
                  value={user.work}
                  onChange={handelInput}
                />
              </div>
              <div className="mb-3 d-flex mx-4">
                <label htmlFor="password">
                  <FaLock />
                </label>
                <input
                  className="border w-100 border-black border-end-0 border-start-0 border-top-0 fs-5"
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                  value={user.password}
                  onChange={handelInput}
                />
              </div>
              <div className="d-flex mx-4">
                <label htmlFor="cpassword">
                  <FaLock />
                </label>
                <div className="w-100 mb-4">
                <input
                  className="border w-100 border-black border-end-0 border-start-0 border-top-0 fs-5"
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  autoComplete="off"
                  placeholder="Confirm Password"
                  value={user.cpassword}
                  onChange={handelInput}
                  />
                  <div className={`fs-6 text-danger d-${!match?"":"none"}`}>*Password and Confirm Password mismatch</div>
                </div>
              </div>
              <div className=" d-flex flex-column mx-5 mb-lg-3">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="btn mx-auto mx-lg-0 text-white fw-bolder px-3 btn-outline-none btn-info"
                  value="SignUp"
                  onClick={apiCall}
                />
                <span className="fs-6 mb-3 d-lg-none text-center">
                  Already have an account? <NavLink to="/login">Login</NavLink>
                </span>
              </div>
            </form>
          </div>
          <div className=" d-none d-lg-inline img-div w-100">
            <img src={signimg} alt="img" className="img w-100" />
            <div className="text-center">
              Already have an account? <NavLink to="/login">Login</NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
