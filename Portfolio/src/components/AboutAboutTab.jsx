const AboutAboutTab = ({ user }) => {
  return (
    <div>
      <div className="row mt-3">
        <div className="col-md-6">
          <label>Experiance</label>
        </div>
        <div className="col-md-6">
          <p className="text-info text-capitalize">{user?.experience}</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <label>Education</label>
        </div>
        <div className="col-md-6">
          <p className="text-info text-capitalize">{user?.education}</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <label>Passing Year</label>
        </div>
        <div className="col-md-6">
          <p className="text-info text-capitalize">{user?.year}</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <label>Hobbies</label>
        </div>
        <div className="col-md-6">
          <p className="text-info text-capitalize">{user?.hobbies}</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <label>Skills</label>
        </div>
        <div className="col-md-6">
          <p className="text-info text-wrap text-capitalize">{user?.skills}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutAboutTab;
