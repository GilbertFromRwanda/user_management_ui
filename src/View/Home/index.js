// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "../../App.css";

function Home() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = "/signin";
  };
  const _user = useSelector((state) => state.userInfo.logedIn);
  return (
    <div className=" container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 mt-5 p-5">
          <div className="card">
            <div className="card-header bg-primary p-3">
              <div className="row">
                <div className="col-8">
                  <h3
                    className=" d-flex justify-content-center align-items-center"
                    style={{
                      fontSize: 24,
                      fontWeight: 300,
                      letterSpacing: -0.5,
                    }}
                  >
                    <span>Your Account is</span>
                    {/* <span className="badge bg-danger m-1">UNVERIFIED</span> */}
                    <span className="badge bg-info badge-sm">
                      PENDING VERIFICATION
                    </span>
                    {/* <span className="badge bg-success">VERIFIED</span> */}
                    <a className="btn btn-warning   " href="/verify">
                      upload document
                    </a>
                  </h3>
                </div>
                <div className="col-4">
                  {" "}
                  <button
                    href="#"
                    className="btn btn-primary float-end "
                    onClick={() => handleLogout()}
                  >
                    Logout({_user.userData.username})
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="card">
                    <div className=" card-body">
                      <div className="row">
                        <div className="col-12 d-flex flex-column p-1">
                          <img
                            src="avatar.png"
                            className="img-fluid w-100 border border-1"
                            alt=""
                          />
                          <a
                            className="btn btn-primary btn-sm mt-2 p-2"
                            href="/change-profile"
                          >
                            change Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className=" card-body">
                          <p className="h5">First Name:</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mt-2">
                      <div className="card">
                        <div className=" card-body">
                          <p className="h5">Last Name:</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mt-2">
                      <div className="card">
                        <div className=" card-body">
                          <p className="h5">Gender:</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mt-2">
                      <div className="card">
                        <div className=" card-body">
                          <p className="h5">Date of Birth:</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mt-2">
                      <div className="card">
                        <div className=" card-body">
                          <p className="h5">Marital status:</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mt-2">
                      <div className="card">
                        <div className=" card-body">
                          <p className="h5">Nationality:</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
