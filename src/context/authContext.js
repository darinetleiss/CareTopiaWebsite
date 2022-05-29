import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  _id:"",
  isLoggedIn:false,
  login: (token,id) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [_id, setId] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (token,id) => {
    setToken(token);
    setId(id);
  };

  const logoutHandler = () => {
    setToken(null);
    setId(null);
  };

  const contextValue = {
    token: token,
    _id:_id,
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
