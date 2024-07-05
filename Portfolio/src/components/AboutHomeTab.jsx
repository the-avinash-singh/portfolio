import React from 'react'

const AboutHomeTab = () => {
  return (
    <>
      <div className="row">
                  <div className="col-md-6">
                    <label>User Id</label>
                  </div>
                  <div className="col-md-6">
                    <p className="text-info">hi</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p className="text-info">Avinash Singh</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>
                    <a href={`email:`} className="text-info text-decoration-none">Email</a>
                    </p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    <p>
                    <a href={`tel:`} className="text-info text-decoration-none">phone</a>
                    </p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Profession</label>
                  </div>
                  <div className="col-md-6">
                    <p className="text-info">Web dev</p>
                  </div>
                </div>
    </>
  )
}

export default AboutHomeTab
