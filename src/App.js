import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Home from "./pages";
 import SignUp from "./pages/signUp/signUp";
import LogIn from "./pages/logIn/logIn";
import HomePage from "./pages/homePage/homePage";
import Settings from "./pages/settings/settings";
import Donate from "./pages/Donate/donate";
import UpdateProfile from "./pages/updateProfile/updateProfile";

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} exact />
          <Route path="/homePage" element={<HomePage />} exact />
          <Route path="/logIn" element={<LogIn />} exact />
          <Route path="/signUp" element={<SignUp />} exact />
          <Route path="/settings" element={<Settings />} exact />
          <Route path="/donate" element={<Donate />} exact />
           <Route path="/updateProfile" element={<UpdateProfile />} exact />
         </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
