import "./changePassword.css";
import axios from "axios";
import { useRef } from "react";

export function ChangePassword() {
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
        passwordConfirm: confirmPassword.current.value,
      };
      try {
        await axios.patch("/auth/updatePassword", newpass);
        alert("Password updated successfully");
      } catch (e) {
        if (e.response && e.response.data) {
          alert(e.response.data.message); // some reason error message
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
          <form onSubmit={handleUpdatePassword}>
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
                <input type="password" id="fname" tabIndex="1"  />
              </div>
            </fieldset>

            <fieldset>
              <div className="grid-35">
                <label htmlFor="NewPassword" className="labell">
                  New Password
                </label>
              </div>
              <div className="grid-65">
                <input type="password" id="fname" tabIndex="2" />
              </div>
            </fieldset>

            <fieldset>
              <div className="grid-35">
                <label htmlFor="ConfirmPassword" className="labell">
                  Confirm Password
                </label>
              </div>
              <div className="grid-65">
                <input type="password" id="location" tabIndex="4" />
              </div>
            </fieldset>

            <fieldset>
              <input
                type="button"
                className="Btn cancel"
                value="Cancel"
                id="cancell"
              />
              <input type="submit" className="Btn" value="Update" />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
