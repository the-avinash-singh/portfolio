import React from "react";
import user from "../assets/user.png";
import AboutHomeTab from "./AboutHomeTab";
import "../stylesheets/about.css"
import AboutAboutTab from "./AboutAboutTab";

const About = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center full-height">
        <form method="" className="p-4 mt-5 mt-md-0 rounded shadow justify-content-center custom-width">
          <div className="row">
            <div className="col-md-4 d-flex d-md-inline justify-content-center">
              <img src={user} alt="User" className="about-img"/>
            </div>
            <div className="col-md-5 d-flex d-md-inline justify-content-center align-items-center flex-column">
              <div className="fs-4">Avinash Singh</div>
              <div className="text-info">Web Developer</div>
              <p className="fs-6 text-dark-emphasis">
                RANKING-<span className="fw-bold"> 1/10</span>
              </p>
              <ul className="nav nav-underline border-bottom d-lg-flex justify-content-evenly" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active text-black fs-5 fw-medium"
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
            <div className="col-md-3 d-lg-flex justify-content-end align-items-start">
              <input type="submit" className="btn btn-info my-3" name="addMore" value="Edit Profile" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="text-gray">
                <p className="my-3 fs-5 fw-medium">Social Links</p>
              </div>
            </div>
            <div className="col-md-8 ps-5 tab-content d-flex d-md-inline justify-content-center" id="myTabContent">
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
