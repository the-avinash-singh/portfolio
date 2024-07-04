import React from "react";
import user from "../assets/user.png";

const About = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center full-height">
        <form method="" className="p-3 rounded shadow w-75">
          <div className="row">
            <div className="col-md-4">
              <img src={user} alt="User" className="w-75" />
            </div>
            <div className="col-md-6">
              <div className="">Avinash Singh</div>
              <div className="text-info">web Developer</div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
