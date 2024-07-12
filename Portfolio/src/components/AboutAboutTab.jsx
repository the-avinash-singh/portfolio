const AboutAboutTab = ({ user }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <label>Exp</label>
        </div>
        <div className="col-md-8">
          <p className="text-info">{user?.experiance}</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <label>Education</label>
        </div>
        <div className="col-md-8">
          <p className="text-info">{user?.education}</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <label>Passing Year</label>
        </div>
        <div className="col-md-8">
          <p className="text-info">{user?.year}</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <label>Skills</label>
        </div>
        <div className="col-md-8">
          <p className="text-info text-wrap">{user?.skills}</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <label>Hobbies</label>
        </div>
        <div className="col-md-8">
          <p className="text-info">{user?.hobbies}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutAboutTab;
