import { Link } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
// import { useHistory } from "react-router";
import "./signUp.css";
import Image from "../../assets/signUp/registration-form-1.jpg";

export default function SignUp() {
  const ngoName = useRef();
  const email = useRef();
  const phoneNumber = useRef();
  const licenseNumber = useRef();
  const fieldWork = useRef();
  const ngoLocation = useRef();
  const password = useRef();
  const confirmpassword = useRef();

  //   const history = useHistory();

  const handelSignUp = async (e) => {
    e.preventDefault();
      const newNgo = {
        username: ngoName.current.value,
        email: email.current.value,
        contactNumber: phoneNumber.current.value,
        password: password.current.value,
        categories: fieldWork.current.value,
        officialNumber: licenseNumber.current.value,
        location: ngoLocation.current.value,
        confirmPassword:confirmpassword.current.value,
      };
      try {
        await axios.post("http://localhost:3003/api/auth/signup-NGO", newNgo);
        alert(
          "Signed Up succesfully. The request will be looked into and an email will be sent in 3 to 5 business days about decision.\nThank you for signing up with CareTopia"
        );
      } catch (e) {
        if (e.response && e.response.data) {
          alert(e.response.data.message);
        }
      }
  };
  return (
    <div className="wrapperSign">
      <div className="inner">
        <div className="image-holder">
          <img src={Image} />
        </div>
        <form onSubmit={handelSignUp}>
          <h3>SingUp Form</h3>

          <div className="form-wrapper">
            <label className="label">NGO Name</label>
            <input
              type="text"
              className="form-controlSign"
              required
              ref={ngoName}
            />
          </div>

          <div className="form-wrapper">
            <label>Email Address</label>
            <input 
            type="text" 
            className="form-controlSign" 
            required 
            ref={email} />
          </div>

          <div className="form-wrapper">
            <label>Phone Number</label>
            <input
              type="text"
              className="form-controlSign"
              required
              ref={phoneNumber}
            />
          </div>

          <div className="form-wrapper">
            <label>NGO Location</label>
            <input
              type="text"
              className="form-controlSign"
              required
              ref={ngoLocation}
            />
          </div>

          <div className="form-wrapper">
            <label>License Number</label>
            <input
              type="text"
              className="form-controlSign"
              required
              ref={licenseNumber}
            />
          </div>

          <div className="form-wrapper">
            <label>Password</label>
            <input
              type="password"
              className="form-controlSign"
              required
              ref={password}
            />
          </div>

          <div className="form-wrapper">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-controlSign"
              required
              ref={confirmpassword}
            />
          </div>

          <div className="form-wrapper">
            <label>Field Of Work</label>
            <div className="content">
              <ul>
                <input
                  type="text"
                  spellCheck="false"
                  className="form-controlSign"
                  required
                  ref={fieldWork}
                />
              </ul>
            </div>
            <div className="details">
              <p>
                <span>10</span> / 10
              </p>
            </div>
          </div>
          <button>
            Sign Up<i className="zmdi zmdi-arrow-right" type="submit"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
