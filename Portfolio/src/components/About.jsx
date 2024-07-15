import { useEffect, useState } from "react";
import userImg from "../assets/user-img.svg";
import AboutHomeTab from "./AboutHomeTab";
import "../stylesheets/about.css";
import AboutAboutTab from "./AboutAboutTab";
import { aboutApi, idaboutApi } from "../apis/apis";
import {  useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { IoMdShare } from "react-icons/io";
import EditAbout from "./EditAbout";
import Spinner from "./Spinner";

const About = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading,setLoading]=useState(false)
  const [modalShow, setModalShow] = useState(false);
  let links=["yo","yo"];
  if(user?.links){
    links=user.links.split(",")
  }
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id") || undefined;

  const callApi = async () => {
    setLoading(true)
    let result={}
    if(id){
       result=await idaboutApi(id);
    }else{
      result = await aboutApi();
    }
    setUser({
      _id:result._id,
      name: result.name || "",
      email: result.email || "",
      phone: result.phone || "",
      work: result.work || "",
      links: result.links || "",
      experience: result.experience || "",
      education: result.education || "",
      year: result.year || "",
      skills: result.skills || "",
      hobbies: result.hobbies || "",
      imgUrl:result.imgUrl || "",
    });
    setLoading(false)
  };

  const handleShare = async () => {
    if (navigator.share) {
      let url = "";
      if (!id) {
        url = window.location.href + `?id=${user._id}`;
      } else {
        url = window.location.href;
      }
      try {
        await navigator.share({
          title: "Check out my EazyRes profile!",
          text: "Check out my EazyRes profile.",
          url: url,
        });
        console.log("Successfully shared");
      } catch (error) {
        console.error("Error sharing", error);
      }
    } else {
      alert("Sharing not supported");
    }
  };

  useEffect(() => {
    if (!Cookies.get("token") && !id) {
      navigate("/login");
    }
      callApi();
  }, []);

  return (
    <>
      <div className="d-flex my-5 my-md-0 justify-content-center align-items-center full-height">
        <form className="p-4  my-md-0 rounded shadow justify-content-center about-width">
          <div className="d-flex mx-md-4 justify-content-between align-items-start">
          <h1 className="my-4">Your Profile</h1>
          {Cookies.get("token")&&<input
                type="button"
                className="btn btn-info my-4 fw-medium"
                name="addMore"
                value="Edit Profile"
                onClick={() => setModalShow(true)}
          />}
            </div>
          {loading?<Spinner/>:<><div className="row">
            <div className="col-md-5 d-flex d-md-inline justify-content-center">
              <img src={user?.imgUrl?user.imgUrl:userImg} alt="User" className="about-img ms-md-5" />
            </div>
            <div className="col-md-6 d-flex d-md-inline justify-content-center align-items-center flex-column">
              <div className="fs-4">{user?.name}</div>
              <div className="text-info text-capitalize">{user?.work}</div>
              <p className="fs-6 text-dark-emphasis mt-2">
                Share:{" "}
                <span className="fs-6" onClick={handleShare}>
                  <IoMdShare />
                </span>
              </p>
              <ul
                className="nav nav-underline border-bottom d-lg-flex justify-content-evenly"
                role="tablist"
              >
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
          </div>
          <div className="row link">
            <div className="col-md-5">
              <div className="text-gray">
                <p className="my-3 ms-md-5 fs-5 fw-medium">Social Links</p>
                {
                  user?.links&&links.map((link,index)=>{
                    return(<div key={index} className="mb-3 ms-md-5">
                      <a href={link} className="text-dark border-bottom pb-1 text-capitalize text-decoration-none" target="_blank" rel="noopener noreferrer">{link}</a>
                    </div>)
                  })
                }
              </div>
            </div>
            <div
              className="col-md-7 ps-md-5 tab-content d-flex d-md-inline justify-content-center"
              id="myTabContent"
            >
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <AboutHomeTab user={user} />
              </div>
              <div
                className="tab-pane fade"
                id="about"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <AboutAboutTab user={user} />
              </div>
            </div>
          </div></>}
        </form>
      </div>
      <EditAbout show={modalShow}
        onHide={() => setModalShow(false)} user={user} setUser={setUser}/>
    </>
  );
};

export default About;
