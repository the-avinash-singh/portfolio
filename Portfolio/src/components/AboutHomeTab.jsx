const AboutHomeTab = ({ user }) => {
  return (
    <>
      <div className="row mt-3">
        <div className="col-md-4">
          <label>User Id</label>
        </div>
        <div className="col-md-8">
          <p className="text-info text-capitalize">{user?._id}</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <label>Name</label>
        </div>
        <div className="col-md-8">
          <p className="text-info text-capitalize">{user?.name}</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <label>Email</label>
        </div>
        <div className="col-md-8">
          <p>
            <a href={`email:`} className="text-info text-wrap">
              {user?.email}
            </a>
          </p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <label>Phone</label>
        </div>
        <div className="col-md-8">
          <p>
            <a href={`tel:`} className="text-info">
              {user?.phone}
            </a>
          </p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <label>Profession</label>
        </div>
        <div className="col-md-8">
          <p className="text-info text-capitalize">{user?.work}</p>
        </div>
      </div>
    </>
  );
};

export default AboutHomeTab;
