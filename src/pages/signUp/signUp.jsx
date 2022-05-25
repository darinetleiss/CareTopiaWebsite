import { Link } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
// import { useHistory } from "react-router";
import "./signUp.css";
import Image from  "../../assets/signUp/registration-form-1.jpg";

export default function SignUp() {
  const ngoName = useRef();
  const email = useRef();
  const phoneNumber = useRef();
  const licenseNumber = useRef();
  const fieldWork = useRef();
  const ngoLocation = useRef();
  const password = useRef();

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
    };
    try {
      await axios.post("/signup-NGO", newNgo);
      alert("Signed Up succesfully");
    //   history.push("/login");
    } catch (e) {
      if (e.response && e.response.data) {
        alert(e.response.data.message);
      }
    }
  };
  return(
<div className="wrapper">
  <div className="inner">
    <div className="image-holder">
      <img src={Image}/>
    </div>
    <form action="">
      <h3>SingUp Form</h3>

      <div className="form-wrapper">
        <label className="label">NGO Name</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-wrapper">
        <label>Email Address</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-wrapper">
        <label>Phone Number</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-wrapper">
        <label>NGO Location</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-wrapper">
        <label>License Number</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-wrapper">
        <label>Password</label>
        <input type="password" className="form-control" />
      </div>

      <div className="form-wrapper">
        <label>Field Of Work</label>
        <div className="content">
          <ul>
            <input type="text" spellCheck="false" className="form-control" />
          </ul>
        </div>
        <div className="details">
          <p>
            <span>10</span> / 10
          </p>
        </div>
      </div>
      <button>
          Sign Up<i className="zmdi zmdi-arrow-right"></i>
      </button>
    </form>
  </div>
</div>

  );
}

