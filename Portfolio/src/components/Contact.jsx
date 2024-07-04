import React from 'react'

const Contact = () => {
  return (
    <>
              <div className="d-flex justify-content-center align-items-center full-height">
      <section className="shadow rounded-4 w-50">
        <h2 className="p-3 m-4 pb-0 mb-0">Contact Us</h2>
        <div className="mt-4 mx-4">
            <form id="contact-form" className="fs-5 pb-2 w-100">
              <div className="mb-4 d-md-flex">
                <input
                  className="border w-50 me-2 fs-5 rounded-2 px-2"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                  required
                />
                <input
                  className="border w-50 ms-2 fs-5 rounded-2 px-2"
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder="Name"
                  required
                />
              </div>
                <div className='mt-5 mb-4'>
                  <textarea rows={10} placeholder='Message' className='p-2 rounded border w-100 h-100'/>
                </div>

              <div className="mb-3">
                <input
                  type="submit"
                  name="send"
                  id="send"
                  className="btn text-white fw-bolder px-3 btn-outline-none btn-info"
                  value="Send Message"
                />
      
              </div>
            </form>
          </div>
      </section>
    </div>
    </>
  )
}

export default Contact
