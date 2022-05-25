import axios from "axios";

export const loginCall = async (ngoCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", ngoCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    alert("Logged In Successfully");
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
    if (err.response && err.response.data) {
      alert(err.response.data.message);
    }
  }
};
