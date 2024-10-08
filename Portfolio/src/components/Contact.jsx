import { useEffect, useState } from "react";
import { aboutApi, contactPostApi } from "../apis/apis";
import { useNavigate } from "react-router-dom";

const Contact = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({ email: '', name: '', message: '' });

  const callApi = async () => {
    const result = await aboutApi();
    setUser(result);
  };

  const contactUs = async (e) => {
    e.preventDefault();
    const data = await contactPostApi(user);
    const result=data.json()
    if(data.status==201){
      alert("Message sent we will contact with you");
    }else{
      alert(`unsuccessful: ${result.message?result.message:result.error}`)
    }
    setUser({...user, message : ""});
    console.log(result);
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    callApi();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center full-height">
        <section className="shadow rounded-4 custom-width">
          <h2 className="p-3 m-4 pb-0 mb-0">Contact Us</h2>
          <div className="mt-4 mx-4">
            <form id="contact-form" className="fs-5 pb-2 w-100">
              <div className="mb-4 d-md-flex">
                <input
                  className="border mb-4 mb-md-0 w-100 me-md-2 fs-5 rounded-2 px-2"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={user?.email}
                  onChange={(e) => {
                    setUser({ ...user, [e.target.name]: e.target.value });
                  }}
                  placeholder="Email"
                  required
                />
                <input
                  className="border w-100 ms-md-2 fs-5 rounded-2 px-2"
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  onChange={(e) => {
                    setUser({ ...user, [e.target.name]: e.target.value });
                  }}
                  value={user?.name}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mt-5 mb-4">
                <textarea
                  rows={10}
                  name="message"
                  placeholder="Message"
                  onChange={(e) => {
                    setUser({ ...user, [e.target.name]: e.target.value });
                  }}
                  className="p-2 rounded border w-100 h-100 text-info"
                />
              </div>

              <div className="mb-3">
                <input
                  type="submit"
                  name="send"
                  id="send"
                  className="btn text-white fw-bolder px-3 btn-outline-none btn-info"
                  value="Send Message"
                  onClick={contactUs}
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
