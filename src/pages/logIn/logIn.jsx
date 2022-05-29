import { useRef, useContext } from "react";
import axios from "axios";
import { loginCall } from "../../apiCalls";
import AuthContext from "../../context/authContext";
import { Link } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
 import "./logIn.css";
import "./logIn1.css";
import "font-awesome/css/font-awesome.min.css";

export default function LogIn() {

  const email = useRef();
  const password = useRef();

  const authCtx = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    const ngo = {
      email: email.current.value,
      password: password.current.value,
    };
    try {
      await axios
        .post("http://localhost:3003/api/auth/login", ngo)
        .then((response) => {
          console.log(authCtx.token);
          console.log(response.data.token);
          console.log(response.data._id);
          authCtx.login(response.data.token,response.data._id);
          alert("login successful");
        });
    } catch (e) {
      if (e.response && e.response.data) {
        alert(e.response.data.message);
      }
    }
  };

  return (
    <main>
      <article>
        <div
          className="modal fade show"
          id="loginModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header border-bottom-0">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-title text-center">
                  <h4>Login</h4>
                </div>
                <div className="d-flex flex-column text-center">
                  <form onSubmit={handleLogin}>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        className="form-controlLog"
                        id="email1"
                        required
                        ref={email}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-controlLog"
                        id="password1"
                        required
                        ref={password}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-info btn-block btn-round"
                      id="logInBtn"
                    >
                      Login
                      <i className="fa fa-angle-right"></i>
                    </button>
                  </form>

                  <div className="text-center text-muted delimiter">
                    or use a social network
                  </div>
                  <div className="d-flex justify-content-center social-buttons">
                    <button
                      type="button"
                      className="btn btn-secondary btn-round"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="fa fa-twitter"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-round"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="fa fa-facebook"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-round"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      <i className="fa fa-linkedin"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <div className="signup-section">
                Not a member yet?{" "}
                <a href="#a" className="text-info">
                  {" "}
                  Sign Up
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
