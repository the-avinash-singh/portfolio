import React from "react";
import user from "../assets/user.png";
import AboutHomeTab from "./AboutHomeTab";
import "../stylesheets/about.css"
import AboutAboutTab from "./AboutAboutTab";

const About = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center full-height">
        <form method="" className="p-5 rounded shadow w-75">
          <div className="row">
            <div className="col-md-4">
              <img src={user} alt="User" className="about-img"/>
            </div>
            <div className="col-md-6">
              <div className="fs-4">Avinash Singh</div>
              <div className="text-info">Web Developer</div>
              <p className="fs-6 text-dark-emphasis">
                RANKING-<span className="fw-bold"> 1/10</span>
              </p>
              <ul className="nav nav-underline" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link text-black fs-5 fw-medium"
                    id="home-tab"
                    data-bs-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-black fs-5 fw-medium"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    href="#about"
                    role="tab"
                    aria-controls="about"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <input type="submit" className="btn btn-info" name="addMore" value="Edit Profile" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="text-gray">
                <p className="my-3">Social Links</p>
              </div>
            </div>
            <div className="col-md-8 ps-5 tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <AboutHomeTab/>
              </div>
              <div className="tab-pane fade" id="about" role="tabpanel" aria-labelledby="profile-tab">
                <AboutAboutTab/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
