import "./updateProfile.css";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

export default function UpdateProfile() {
  const [ngo, setNGO] = useState({});
  useEffect(() => {
    const fetchNGOProfileData = async () => {
      const res = await axios.get(
        "http://localhost:3003/api/ngo/profileScreen/getEditProfileInfo",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGQxYmE0ZTgxMDQyMDU1ZDAxNDVmNSIsImlhdCI6MTY1Mzc0NDM3N30.sXlytBA3b11haSu1g2OfStITWOP5RLwigBIiLao7r3U",
          },
        }
      );
      setNGO(res.data);
    };
    fetchNGOProfileData();
  }, [ngo]);

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
      newCategories: fieldWork.current.value,
      officialNumber: licenseNumber.current.value,
      location: ngoLocation.current.value,
      description: description.current.value,
    };
    try {
      await axios.put(
        "http://localhost:3003/api/ngo/profileScreen/updateProfileInfo",
        ngo,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGQxYmE0ZTgxMDQyMDU1ZDAxNDVmNSIsImlhdCI6MTY1Mzc0NDM3N30.sXlytBA3b11haSu1g2OfStITWOP5RLwigBIiLao7r3U",
          },
        }
      );
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
                  <input
                    type="text"
                    id="fname3"
                    tabindex="1"
                    placeholder={ngo.username}
                    ref={ngoName}
                  />
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
                    tabindex="3"
                    placeholder={ngo.description}
                    ref={description}
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
                  <input
                    type="text"
                    id="location3"
                    tabindex="4"
                    placeholder={ngo.officialNumber}
                    ref={licenseNumber}
                  />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-353">
                  <label className="labelUpdateProfile" htmlFor="phoneNumber">
                    Phone Number
                  </label>
                </div>
                <div className="grid-653">
                  <input
                    type="text"
                    id="country3"
                    tabindex="5"
                    placeholder={ngo.contactNumber}
                    ref={phoneNumber}
                  />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-353">
                  <label className="labelUpdateProfile" htmlFor="email">
                    Email Address
                  </label>
                </div>
                <div className="grid-653">
                  <input
                    type="email"
                    id="email3"
                    tabindex="6"
                    placeholder={ngo.email}
                    ref={email}
                  />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-353">
                  <label className="labelUpdateProfile" htmlFor="location">
                    Location
                  </label>
                </div>
                <div className="grid-653">
                  <input
                    type="text"
                    id="location3"
                    tabindex="9"
                    placeholder={ngo.location}
                    ref={ngoLocation}
                  />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-353">
                  <label className="labelUpdateProfile" htmlFor="qualification">
                    Field Of Work
                  </label>
                </div>
                <div className="grid-653">
                  <input
                    type="text"
                    id="FieldOfWork"
                    tabindex="9"
                    placeholder={ngo.categories}
                    ref={fieldWork}
                  />
                </div>
              </fieldset>

              <fieldset>
                <input
                  type="button"
                  className="Btn cancel3"
                  id="cancel2"
                  value="Cancel"
                />
                <input type="submit" className="Btn 3" value="Save Changes" onClick={handelUpdateProfile}/>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
