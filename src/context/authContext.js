// import { createContext, useEffect, useReducer } from "react";
// import AuthReducer from "./authReducer";

// const INITIAL_STATE = {
//   ngo: JSON.parse(localStorage.getItem("ngo")) || null,
//   isFetching: false,
//   error: false,
// };

// export const AuthContext = createContext(INITIAL_STATE);

// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

// useEffect(() => {
//     localStorage.setItem("ngo", JSON.stringify(state.ngo));
//   }, [state.ngo]);

//   return (
//     <AuthContext.Provider
//       value={{
//         ngo : state.ngo,
//         isFetching: state.isFetching,
//         error: state.error,
//         dispatch,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
//     }
import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn:false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn:userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
