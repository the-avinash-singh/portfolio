import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { editAboutApi } from "../apis/apis";
import Uploder from "./Uploder";

function EditAbout(props) {

  const {user,setUser}=props

  const handelInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const regex = /^(https?:\/\/[^\s,]+(,(https?:\/\/[^\s,]+)){0,2})?$/;
  const handelSubmit=async()=>{
    if(regex.test(user.links)){
      const result=await editAboutApi(props.user,props.user._id);
      if(result.status===200){
        alert("Updated sucessfully");
        props.onHide()
      }else{
        const result = await res.json();
        alert(`unsuccessful: ${result.message?result.message:result.error}`)
      }
    }else{
      alert("Please only fill 3 valid links ")
      console.log("regex not satisfied")
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="d-flex mb-3 justify-content-between">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="w-75 border rounded px-2"
              name="name"
              required
              id="name"
              onChange={handelInput}
              value={user.name}
              placeholder="Name"
            />
          </div>
          <div className="d-flex mb-3 justify-content-between">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="w-75 border rounded px-2"
              name="email"
              required
              id="email"
              onChange={handelInput}
              value={user.email}
              placeholder="Email"
            />
          </div>
          <div className="d-flex mb-3 justify-content-between">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              className="w-75 border rounded px-2"
              name="phone"
              required
              id="phone"
              onChange={handelInput}
              value={user.phone}
              placeholder="Phone"
            />
          </div>
          <div className="d-flex mb-3 justify-content-between">
            <label htmlFor="work">Profession</label>
            <input
              type="text"
              className="w-75 border rounded px-2"
              name="work"
              required
              id="work"
              onChange={handelInput}
              value={user.work}
              placeholder="Profession"
            />
          </div>
          <div className="d-flex mb-3 justify-content-between">
            <label htmlFor="links" className=" text-nowrap">Social links</label>
            <input
              type="text"
              className="w-75 border rounded px-2"
              name="links"
              required
              id="links"
              onChange={handelInput}
              value={user.links}
              placeholder='Max 3 Links Each Saparated By ","'
            />
          </div>
          <div className="d-flex mb-3 justify-content-between">
            <label htmlFor="experience">Experience</label>
            <input
              type="text"
              className="w-75 border rounded px-2"
              name="experience"
              required
              id="experience"
              onChange={handelInput}
              value={user.experience}
              placeholder="Experience"
            />
          </div>
          <div className="d-flex mb-3 justify-content-between">
            <label htmlFor="education">Education</label>
            <input
              type="text"
              className="w-75 border rounded px-2"
              name="education"
              required
              id="education"
              onChange={handelInput}
              value={user.education}
              placeholder="Education"
            />
          </div>
          <div className="d-flex mb-3 justify-content-between">
            <label htmlFor="year" className=" text-nowrap">Passing Year</label>
            <input
              type="text"
              className="w-75 border rounded px-2"
              name="year"
              required
              id="year"
              onChange={handelInput}
              value={user.year}
              placeholder="Passing Year"
            />
          </div>
          <div className="d-flex mb-3 justify-content-between">
            <label htmlFor="skills">Skills</label>
            <input
              type="text"
              className="w-75 border rounded px-2"
              name="skills"
              required
              id="skills"
              onChange={handelInput}
              value={user.skills}
              placeholder="Skills"
            />
          </div>
          <div className="d-flex justify-content-between">
            <label htmlFor="hobbies">Hobbies</label>
            <input
              type="text"
              className="w-75 border rounded px-2"
              name="hobbies"
              required
              id="hobbies"
              onChange={handelInput}
              value={user.hobbies}
              placeholder="Hobbies"
            />
          </div>
        </form>
          <div className="">
            <label className="mt-4 me-4">Profile image</label>
            <Uploder handelSubmit={handelSubmit} user={user} setUser={setUser}/>
          </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondry">
          Close
        </Button>
        <Button onClick={handelSubmit} variant="info">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditAbout;
