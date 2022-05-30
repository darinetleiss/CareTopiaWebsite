import "./updateProfile.css";
import { useRef } from "react";
import axios from "axios";

export default function UpdateProfile() {
  const ngoName = useRef();
  const description = useRef();
  const licenseNumber = useRef();
  const phoneNumber = useRef();
  const email = useRef();
  const ngoLocation = useRef();
  const fieldWork = useRef();

  const handelUpdateProfile = async (e) => {
    e.preventDefault();
    const ngo = {
      username: ngoName.current.value,
      email: email.current.value,
      contactNumber: phoneNumber.current.value,
      categories: fieldWork.current.value,
      officialNumber: licenseNumber.current.value,
      location: ngoLocation.current.value,
      description: description.current.value,
    };
    try {
      await axios.patch("/updateProfile", ngo);
      alert("Your profile has been updated successfully");
    } catch (e) {
      if (e.response && e.response.data) {
        alert(e.response.data.message); // some reason error message
      }
    }
  };

  return (
    <div className="bodyupdateProfile">
      <div className="wrapper3">
        <div className="profile3">
          <div className="content3">
            <form  className="formUpdateProfile" action="">
              <fieldset>
                <div className="grid-353">
                  <span className="photo3" title="Upload your Avatar!"></span>
                </div>
                <div className="grid-653">
                  <p></p>
                  <input type="file" className="btn3" />
                </div>
              </fieldset>
              <fieldset>
                <div className="grid-353">
                  <label htmlFor="fname" className="labelUpdateProfile">
                    NGO Name
                  </label>
                </div>
                <div className="grid-653">
                  <input type="text" id="fname3" tabIndex="1" />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-353">
                  <label className="labelUpdateProfile" htmlFor="description">
                    Description
                  </label>
                </div>
                <div className="grid-653">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="auto"
                    tabIndex="3"
                  ></textarea>
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-353">
                  <label className="labelUpdateProfile" htmlFor="licenseNumber">
                    License Number
                  </label>
                </div>
                <div className="grid-653">
                  <input type="text" id="location3" tabIndex="4" />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-353">
                  <label className="labelUpdateProfile" htmlFor="phoneNumber">
                    Phone Number
                  </label>
                </div>
                <div className="grid-653">
                  <input type="text" id="country3" tabIndex="5" />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-353">
                  <label className="labelUpdateProfile" htmlFor="email">
                    Email Address
                  </label>
                </div>
                <div className="grid-653">
                  <input type="email" id="email3" tabIndex="6" />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-353">
                  <label className="labelUpdateProfile" htmlFor="location">
                    Location
                  </label>
                </div>
                <div className="grid-653">
                  <input type="text" id="location3" tabIndex="9" />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-353">
                  <label className="labelUpdateProfile" htmlFor="qualification">
                    Field Of Work
                  </label>
                </div>
                <div className="grid-653">
                  <input type="text" id="FieldOfWork" tabIndex="9" />
                </div>
              </fieldset>

              <fieldset>
                <input
                  type="button"
                  className="Btn cancel3"
                  id="cancel2"
                  value="Cancel"
                />
                <input type="submit" className="Btn3" value="Update" />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
