import "./changePassword.css";
import AuthContext from "../../context/authContext";
import axios from "axios";
import { useRef, useContext } from "react";

export default function ChangePassword() {

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  const oldPassword = useRef();
  const newPassword = useRef();
  const confirmPassword = useRef();

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (newPassword.current.value !== confirmPassword.current.value) {
      confirmPassword.current.setCustomValidity("Passwords don't match!");
    } else {
      const newpass = {
        oldPassword: oldPassword.current.value,
        newPassword: newPassword.current.value,
        confirmNewPassword: confirmPassword.current.value,
      };
      try {
        await axios.patch("http://localhost:3003/api/ngo/profileScreen/updatePassword", newpass, {
          headers:{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGQxYmE0ZTgxMDQyMDU1ZDAxNDVmNSIsImlhdCI6MTY1MzkwMzIxOH0.X3WaCJPayeHoSCMzMfFdDGEQowCXnvhFb3mRMjZIix0",
          }
        });
        alert("Password updated successfully");
      } catch (e) {
        if (e.response && e.response.data) {
          alert(e.response.data.message);
        }
      }
    }
  };

  const handleCancelUpdatePassword = async (e) => {
    e.preventDefault();
    oldPassword.current.value = "";
    newPassword.current.value = "";
    confirmPassword.current.value = "";
  };

  return (
    <div className="wrapper2">
      <div className="profile">
        <div className="content">
          <form>
            <fieldset>
              <p className="Updatepass">Update Password </p>
              <div className="grid-65"></div>
            </fieldset>
            <fieldset>
              <div className="grid-35">
                <label htmlFor="oldPassword" className="labell">
                  Old Password
                </label>
              </div>
              <div className="grid-65">
                <input type="password" id="fname" tabIndex="1"  required ref={oldPassword}/>
              </div>
            </fieldset>

            <fieldset>
              <div className="grid-35">
                <label htmlFor="NewPassword" className="labell" >
                  New Password
                </label>
              </div>
              <div className="grid-65">
                <input type="password" id="fname" tabIndex="2" required ref={newPassword}/>
              </div>
            </fieldset>

            <fieldset>
              <div className="grid-35">
                <label htmlFor="ConfirmPassword" className="labell" >
                  Confirm Password
                </label>
              </div>
              <div className="grid-65">
                <input type="password" id="location" tabIndex="4" required ref={confirmPassword}/>
              </div>
            </fieldset>

            <fieldset>
              <input
                type="button"
                className="Btn cancel"
                value="Cancel"
                id="cancell"
              />
              <input type="submit" className="Btn" value="Update" onClick={handleUpdatePassword}/>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
