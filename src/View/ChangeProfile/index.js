import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeProfilePicture } from "../../features/user/UserSlice";

function ChangeProfile() {
  const [docImage, setDocImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const history = useHistory();
  const dispatch = useDispatch();

  const onFileChange = (event) => {
    setDocImage(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (docImage) {
      formData.append("profile_image", docImage);
      dispatch(changeProfilePicture(formData));
    }
  };

  return (
    <div className=" container-fluid">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 mt-5 p-5">
          <div className="card">
            <div className=" card-header  p-3 bg-primary">
              <h2 className="mb-3">Profile picture modification</h2>
            </div>
            <div className=" card-body">
              <form className="">
                <div className=" form-group">
                  <label>Photos</label>
                  <input
                    type="file"
                    name="docImage"
                    className="form-control"
                    accept="images/*"
                    onChange={(e) => onFileChange(e)}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-success p-3 btn-sm btn-block w-100"
                    onClick={handleSubmit}
                  >
                    change
                  </button>
                </div>

                {errorMessage.value && (
                  <div className="form-group mt-2">
                    <p className="text-danger"> {errorMessage.value} </p>
                  </div>
                )}
                <div className="form-group mt-3">
                  <p className="text-center border-1 border-gray p-3 border rounded">
                    <a href="/" className=" btn btn-link">
                      Back to home
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default ChangeProfile;
